import { createFileRoute } from "@tanstack/react-router";
import { createHmac, timingSafeEqual } from "crypto";

type TallyField = {
  label?: string;
  type?: string;
  value?: unknown;
  options?: { id: string; text: string }[];
};

type TallyPayload = {
  eventId?: string;
  eventType?: string;
  data?: {
    responseId?: string;
    submissionId?: string;
    fields?: TallyField[];
  };
};

function readableValue(field: TallyField): string {
  const { value, options } = field;
  if (value == null) return "";
  if (Array.isArray(value)) {
    return value
      .map((v) => options?.find((o) => o.id === v)?.text ?? String(v))
      .join(", ");
  }
  if (typeof value === "object") return JSON.stringify(value);
  return String(value);
}

function pick(fields: TallyField[], keywords: string[]): string | null {
  const match = fields.find((f) =>
    keywords.some((k) => (f.label ?? "").toLowerCase().includes(k)),
  );
  return match ? readableValue(match) || null : null;
}

function verifySignature(rawBody: string, signature: string | null): boolean {
  const secret = process.env["TALLY_SIGNING_SECRET"];
  if (!secret) return true; // no secret configured: accept (Tally signing optional)
  if (!signature) return false;
  const expected = createHmac("sha256", secret).update(rawBody).digest("base64");
  const a = Buffer.from(signature);
  const b = Buffer.from(expected);
  return a.length === b.length && timingSafeEqual(a, b);
}

export const Route = createFileRoute("/api/public/tally-webhook")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        const rawBody = await request.text();

        if (!verifySignature(rawBody, request.headers.get("tally-signature"))) {
          return new Response("Invalid signature", { status: 401 });
        }

        let payload: TallyPayload;
        try {
          payload = JSON.parse(rawBody) as TallyPayload;
        } catch {
          return new Response("Invalid JSON", { status: 400 });
        }

        const fields = payload.data?.fields ?? [];
        const email =
          fields.find((f) => f.type === "INPUT_EMAIL" && f.value)?.value ??
          pick(fields, ["email"]);
        const name = pick(fields, ["name", "who"]);
        const message = fields
          .filter((f) => readableValue(f))
          .map((f) => `${f.label ?? "Answer"}: ${readableValue(f)}`)
          .join("\n");

        const { supabaseAdmin } = await import("@/integrations/supabase/client.server");

        const { data, error } = await supabaseAdmin
          .from("enquiries")
          .upsert(
            {
              source: "tally",
              external_id:
                payload.data?.responseId ?? payload.data?.submissionId ?? payload.eventId ?? null,
              name,
              email: typeof email === "string" ? email : null,
              message,
              payload: payload as unknown as Record<string, unknown>,
            },
            { onConflict: "external_id" },
          )
          .select("id")
          .single();

        if (error) {
          console.error("Failed to store enquiry", error.message);
          return new Response("Failed to store enquiry", { status: 500 });
        }

        return new Response(JSON.stringify({ ok: true, id: data?.id }), {
          headers: { "Content-Type": "application/json" },
        });
      },
    },
  },
});
