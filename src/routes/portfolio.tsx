import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/Reveal";
import { ArrowLeft, FileDown } from "lucide-react";

const CONTACT_URL = "https://tally.so/r/VL60Rv";

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      {
        title: "Portfolio | Course, CRM & Automation Case Studies — May Correa",
      },
      {
        name: "description",
        content:
          "Case studies from a digital business designer: Kajabi course setup, course migration to Kajabi & Skool, a Montessori caregiver training program on Teachable, and a GoHighLevel CRM & automation build.",
      },
      {
        property: "og:title",
        content: "Portfolio | Course, CRM & Automation Case Studies — May Correa",
      },
      {
        property: "og:description",
        content:
          "Real systems built for real businesses: online course setup, platform migration, membership communities, and CRM automation — by May Correa, Digital Business Designer.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
    links: [{ rel: "canonical", href: "/portfolio" }],
  }),
  component: Portfolio,
});

const cases = [
  {
    number: "01",
    title: "CRM & Automation System — Professional Services",
    platform: "GoHighLevel",
    industry: "Professional Services",
    status: "Completed",
    summary:
      "A complete client acquisition system inside GoHighLevel: CRM architecture, a six-stage sales pipeline, an appointment booking funnel, and modular workflow automations that move every lead from first inquiry to signed client — without manual follow-up.",
    highlights: [
      "CRM architecture, contact segmentation and Smart Lists",
      "Six-stage Client Acquisition pipeline (New Lead → Onboarding)",
      "Lead qualification, appointment reminders and stage-progression workflows",
      "Booking funnel integrated directly with the CRM",
    ],
    pdf: crmAsset.url,
    pdfLabel: "Download case study (PDF)",
  },
  {
    number: "02",
    title: "Course Migration & Membership Setup — Property Education",
    platform: "Kajabi + Skool",
    industry: "Real Estate Education",
    status: "Partial implementation",
    summary:
      "Early-stage migration of a property investment course from Skool to Kajabi, with a dedicated Skool community built alongside it. Kajabi product structure, module hierarchy, learning dashboard and community architecture were all configured before the engagement concluded due to a change in the client's business priorities.",
    highlights: [
      "Kajabi product structure, modules and lesson hierarchy",
      "Learning dashboard designed as the student starting point",
      "Initial Skool community configuration and classroom structure",
      "Student journey reviewed across both platforms",
    ],
    pdf: courseMigrationAsset.url,
    pdfLabel: "Download case study (PDF)",
  },
  {
    number: "03",
    title: "Kajabi Course Setup & Curriculum — Leadership Education",
    platform: "Kajabi",
    industry: "Personal Development & Leadership",
    status: "Completed",
    summary:
      "Structured a leadership and personal development course inside Kajabi: curriculum organization, modules arranged into a logical progression, lesson configuration, and a clean learning environment that's easy for students to navigate and for the creator to manage.",
    highlights: [
      "Curriculum organized into a structured module hierarchy",
      "Course outline configured with published lessons",
      "Learning navigation set up for a clear student experience",
    ],
    pdf: kajabiSetupAsset.url,
    pdfLabel: "Download case study (PDF)",
  },
  {
    number: "04",
    title: "Online Caregiver Training — Montessori School",
    platform: "Teachable",
    industry: "Early Childhood Education",
    status: "Completed",
    summary:
      "Partnered with a Montessori education provider to turn in-person training into a scalable online program: a 12-module caregiver course built in Teachable, with coordinated video production, branded lesson thumbnails, downloadable resources and a consistent learner experience throughout.",
    highlights: [
      "12-module curriculum designed and sequenced in Teachable",
      "Video, PDF, open-response and resource lessons per module",
      "Multimedia production coordinated; branded thumbnails designed",
      "A scalable platform the school can grow into",
    ],
    pdf: montessoriAsset.url,
    pdfLabel: "Download case study (PDF)",
  },
];

function Portfolio() {
  return (
    <div className="min-h-screen bg-background">
      <header className="mx-auto flex max-w-6xl items-center justify-between px-6 py-8">
        <Link to="/" className="flex items-center" aria-label="Back to home">
          <img
            src={"/may-correa-logo.png"}
            alt="May Correa"
            width={180}
            height={100}
            className="h-12 w-auto"
          />
        </Link>
        <Button asChild variant="quiet" size="sm">
          <a href={CONTACT_URL} target="_blank" rel="noopener noreferrer">
            Let's talk
          </a>
        </Button>
      </header>

      <main>
        <section className="mx-auto max-w-4xl px-6 pt-10 pb-16 md:pt-20">
          <Reveal>
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              <ArrowLeft className="h-4 w-4" /> Back to home
            </Link>
            <p className="eyebrow mt-10">Selected work</p>
            <h1 className="mt-6 font-display text-4xl leading-tight text-foreground sm:text-5xl">
              Systems built, courses shipped, clients served.
            </h1>
            <p className="measure mt-7 text-lg leading-relaxed text-muted-foreground">
              A look at real engagements — course platforms, migrations, and CRM systems — each one
              built to feel calm to the person running it. Client names and imagery are kept
              private; the work is real.
            </p>
          </Reveal>
        </section>

        <section className="mx-auto max-w-4xl space-y-px px-6 pb-24">
          <ol className="space-y-px overflow-hidden rounded-sm border border-border bg-border">
            {cases.map((c, i) => (
              <Reveal as="li" key={c.number} delay={i * 60}>
                <article className="bg-card p-9 transition-colors duration-200 hover:bg-sand/60 md:p-12">
                  <div className="flex flex-wrap items-baseline gap-x-6 gap-y-2">
                    <span className="font-display text-2xl text-clay">{c.number}</span>
                    <h2 className="text-2xl">{c.title}</h2>
                  </div>
                  <div className="mt-4 flex flex-wrap gap-x-6 gap-y-1 text-sm text-muted-foreground">
                    <span>Platform: {c.platform}</span>
                    <span>Industry: {c.industry}</span>
                    <span>Status: {c.status}</span>
                  </div>
                  <p className="mt-5 leading-relaxed text-muted-foreground">{c.summary}</p>
                  <ul className="mt-6 grid gap-2 text-[0.95rem] text-foreground/85 md:grid-cols-2">
                    {c.highlights.map((h) => (
                      <li key={h} className="flex gap-3">
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-clay" />
                        {h}
                      </li>
                    ))}
                  </ul>
                  <a
                    href={c.pdf}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-7 inline-flex items-center gap-2 text-sm text-muted-foreground underline decoration-clay underline-offset-8 transition-colors hover:text-foreground"
                  >
                    <FileDown className="h-4 w-4" /> {c.pdfLabel}
                  </a>
                </article>
              </Reveal>
            ))}
          </ol>
        </section>

        <section className="border-t border-border bg-sand">
          <div className="mx-auto max-w-3xl px-6 py-24 text-center md:py-32">
            <Reveal>
              <h2 className="text-3xl leading-tight sm:text-[2.6rem]">
                Want a system like this behind your business?
              </h2>
              <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
                Tell me where your business feels heaviest, and we'll map what to build first.
              </p>
              <div className="mt-10">
                <Button asChild variant="atelier" size="xl">
                  <a href={CONTACT_URL} target="_blank" rel="noopener noreferrer">
                    Start the conversation
                  </a>
                </Button>
              </div>
            </Reveal>
          </div>
        </section>
      </main>

      <footer className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-6 py-12 text-sm text-muted-foreground sm:flex-row sm:justify-between">
        <img
          src={"/may-correa-logo.png"}
          alt="May Correa"
          width={180}
          height={100}
          className="h-12 w-auto object-contain"
        />
        <span className="text-center sm:text-left">
          Digital Business Designer — systems, quietly working.
        </span>
        <Link
          to="/"
          className="text-muted-foreground underline decoration-clay underline-offset-8 transition-colors hover:text-foreground"
        >
          Home
        </Link>
      </footer>
    </div>
  );
}
