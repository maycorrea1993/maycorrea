import { createFileRoute } from "@tanstack/react-router";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/Reveal";
import mayPortraitAsset from "@/assets/may-portrait.png.asset.json";
import logoAsset from "@/assets/may-correa-logo.png.asset.json";

const CONTACT_URL = "https://tally.so/r/VL60Rv";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Digital Business Designer | CRM, Course & Funnel Systems" },
      {
        name: "description",
        content:
          "May Correa is a Digital Business Designer building online course and membership setups, CRM and automation, funnels and client journeys for coaches and consultants.",
      },
      {
        property: "og:title",
        content: "Digital Business Designer | CRM, Course & Funnel Systems",
      },
      {
        property: "og:description",
        content:
          "Online course setup, membership platforms, CRM, automation and funnels — designed and built as one calm system by May Correa.",
      },
      { property: "og:url", content: "/" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          name: "May Correa — Digital Business Designer",
          description:
            "Digital business design: websites, CRM and automation, online course and membership systems, funnels and client journeys.",
          areaServed: "Worldwide",
          serviceType: [
            "Online course setup",
            "Membership systems",
            "CRM setup and automation",
            "Sales funnels",
            "Website design",
          ],
        }),
      },
    ],
  }),
  component: Home,
});

const services = [
  {
    title: "Website & Digital Presence",
    body: "A considered home for your work — clear structure, honest copy, and pages that quietly do their job while you focus elsewhere.",
  },
  {
    title: "CRM & Automation",
    body: "One place where your contacts, enquiries and follow-ups live. Fewer spreadsheets, fewer reminders in your head, fewer things slipping.",
  },
  {
    title: "Courses & Memberships",
    body: "Delivery that feels as good as the teaching. Enrolment, access, lessons and community, connected end to end.",
  },
  {
    title: "Funnels & Client Journeys",
    body: "From first curiosity to signed client, mapped and built so each step naturally leads to the next.",
  },
];

const process = [
  {
    step: "01",
    title: "We talk",
    body: "A calm conversation about how your business actually runs today — what works, what you keep patching, and what you'd rather stop thinking about.",
  },
  {
    step: "02",
    title: "I map the system",
    body: "I put your tools, touchpoints and handoffs on one page. Most of the relief starts here: you can finally see the whole thing.",
  },
  {
    step: "03",
    title: "We decide what matters",
    body: "Not everything needs building. We choose the few changes that remove the most friction, in the order that makes sense.",
  },
  {
    step: "04",
    title: "I build and connect",
    body: "Design and implementation together — pages, platforms and automations set up so they speak to each other.",
  },
  {
    step: "05",
    title: "You take it from here",
    body: "Documentation, a walkthrough, and a system you understand. Support stays available; dependence isn't the goal.",
  },
];

const audience = [
  {
    title: "Coaches & consultants",
    body: "Streamlining client journeys, programme delivery and lead nurturing.",
  },
  {
    title: "Educators & course creators",
    body: "Building membership platforms, course delivery and enrolment that runs itself.",
  },
  {
    title: "Professional service businesses",
    body: "Bringing order to CRM, onboarding and the digital face of the practice.",
  },
  {
    title: "Growing expertise-based teams",
    body: "Outgrowing scattered tools and manual steps, ready for a system that holds.",
  },
];

const questions = [
  {
    q: "Do I need to change all my tools?",
    a: "Usually not. Most businesses already have most of what they need — the pieces just aren't connected. I start with what you have and replace only what's genuinely holding you back.",
  },
  {
    q: "How involved do I have to be?",
    a: "A conversation at the start, a decision point in the middle, and a walkthrough at the end. Between those, the building is mine to carry.",
  },
  {
    q: "What if I don't know what I need yet?",
    a: "That's a normal place to begin. Mapping what you have is often the work — clarity first, building second.",
  },
  {
    q: "How long does this take?",
    a: "Focused pieces take a few weeks. A full system across website, CRM and delivery usually runs a couple of months, staged so nothing stops while we work.",
  },
];

function Home() {
  return (
    <div className="min-h-screen bg-background">
      <header className="mx-auto flex max-w-6xl items-center justify-between px-6 py-8">
        <a href="#top" className="flex items-center">
          <img
            src={logoAsset.url}
            alt="May Correa"
            width={180}
            height={100}
            className="h-12 w-auto"
          />
        </a>
        <nav className="hidden items-center gap-8 text-sm text-muted-foreground md:flex">
          <a className="transition-colors hover:text-foreground" href="#services">
            What I build
          </a>
          <a className="transition-colors hover:text-foreground" href="#process">
            How I work
          </a>
          <a className="transition-colors hover:text-foreground" href="#about">
            About
          </a>
        </nav>
        <Button asChild variant="quiet" size="sm">
          <a href={CONTACT_URL} target="_blank" rel="noopener noreferrer">
            Let's talk
          </a>
        </Button>
      </header>

      <main id="top">
        {/* Hero */}
        <section className="mx-auto grid max-w-6xl items-center gap-14 px-6 pt-10 pb-24 md:grid-cols-[1.15fr_0.85fr] md:pt-20 md:pb-32">
          <div>
            <p className="eyebrow">Digital Business Designer</p>
            <h1 className="mt-6 font-display text-[2.6rem] leading-[1.08] text-foreground sm:text-6xl">
              Your business shouldn't feel harder to run than it needs to.
            </h1>
            <p className="measure mt-7 text-lg leading-relaxed text-muted-foreground">
              I design and build the digital systems behind your business — the website, the tools,
              the automations, the path a client takes from first hello to happily working with you.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Button asChild variant="atelier" size="xl">
                <a href={CONTACT_URL} target="_blank" rel="noopener noreferrer">
                  Let's talk about your business
                </a>
              </Button>
              <a
                href="#services"
                className="text-sm text-muted-foreground underline decoration-clay underline-offset-8 transition-colors hover:text-foreground"
              >
                See what that looks like
              </a>
            </div>
          </div>
          <figure className="relative flex items-end justify-center">
            <div className="absolute bottom-0 left-1/2 aspect-square w-[88%] -translate-x-1/2 rounded-full bg-sand" />
            <img
              src={mayPortraitAsset.url}
              alt="May Correa, digital business designer, seated with her laptop"
              width={1350}
              height={1900}
              className="relative w-full max-w-md object-contain"
            />
          </figure>
        </section>

        {/* Pain points */}
        <section className="border-y border-border bg-secondary/60">
          <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
            <Reveal>
              <p className="eyebrow">The digital headache</p>
              <h2 className="measure mt-6 text-3xl leading-tight sm:text-[2.6rem]">
                Nothing is broken, exactly. It's just heavier than it should be.
              </h2>
            </Reveal>
            <div className="mt-14 grid gap-x-14 gap-y-10 md:grid-cols-2">
              {[
                "Six tools that each hold a piece of the truth, and none of them talk.",
                "Onboarding that still depends on you remembering to send the next email.",
                "A website that describes the business you had two years ago.",
                "Course or programme delivery held together by manual links and goodwill.",
                "Leads that arrive, sit, and quietly go cold.",
                "The sense that you're the integration between your own systems.",
              ].map((line, i) => (
                <Reveal key={line} delay={i * 60}>
                  <p className="border-t border-border pt-5 text-[1.05rem] leading-relaxed text-foreground/85">
                    {line}
                  </p>
                </Reveal>
              ))}
            </div>
            <Reveal delay={120}>
              <p className="measure mt-16 font-display text-2xl leading-snug text-primary">
                None of this means you're doing it wrong. It means the system grew faster than the
                design behind it.
              </p>
            </Reveal>
          </div>
        </section>

        {/* Services */}
        <section id="services" className="mx-auto max-w-6xl px-6 py-24 md:py-32">
          <Reveal>
            <p className="eyebrow">What I can help build</p>
            <h2 className="measure mt-6 text-3xl leading-tight sm:text-[2.6rem]">
              Websites, CRM and automation, courses and memberships, funnels — built to work as
              one.
            </h2>
          </Reveal>
          <div className="mt-16 grid gap-px overflow-hidden rounded-sm border border-border bg-border md:grid-cols-2">
            {services.map((s, i) => (
              <Reveal key={s.title} delay={i * 70}>
                <article className="h-full bg-card p-9 transition-colors duration-200 hover:bg-sand/60 md:p-12">
                  <span className="font-display text-sm text-clay">0{i + 1}</span>
                  <h3 className="mt-4 text-2xl">{s.title}</h3>
                  <p className="mt-4 leading-relaxed text-muted-foreground">{s.body}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Reassurance */}
        <section className="border-y border-border bg-primary text-primary-foreground">
          <div className="mx-auto max-w-4xl px-6 py-24 text-center md:py-32">
            <Reveal>
              <p className="eyebrow text-primary-foreground/60">A quiet promise</p>
              <h2 className="mt-6 text-3xl leading-tight sm:text-[2.75rem]">
                You don't need another complicated system.
              </h2>
              <p className="mx-auto mt-7 max-w-2xl text-lg leading-relaxed text-primary-foreground/80">
                You need the ones you already rely on to finally agree with each other. My work is
                mostly subtraction: fewer steps, fewer places to look, fewer things you have to hold
                in your head. What's left should feel obvious.
              </p>
            </Reveal>
          </div>
        </section>

        {/* Process */}
        <section id="process" className="mx-auto max-w-6xl px-6 py-24 md:py-32">
          <Reveal>
            <p className="eyebrow">How I work</p>
            <h2 className="measure mt-6 text-3xl leading-tight sm:text-[2.6rem]">
              A calm, deliberate path — with no surprises in it.
            </h2>
          </Reveal>
          <ol className="mt-16 space-y-px overflow-hidden rounded-sm border border-border bg-border">
            {process.map((p, i) => (
              <Reveal as="li" key={p.step} delay={i * 60}>
                <div className="grid gap-4 bg-card p-9 transition-colors duration-200 hover:bg-sand/60 md:grid-cols-[6rem_16rem_1fr] md:items-baseline md:p-12">
                  <span className="font-display text-2xl text-clay">{p.step}</span>
                  <h3 className="text-xl">{p.title}</h3>
                  <p className="leading-relaxed text-muted-foreground">{p.body}</p>
                </div>
              </Reveal>
            ))}
          </ol>
        </section>

        {/* About */}
        <section id="about" className="border-y border-border bg-secondary/60">
          <div className="mx-auto grid max-w-6xl gap-14 px-6 py-24 md:grid-cols-[0.8fr_1.2fr] md:py-32">
            <Reveal>
              <p className="eyebrow">About May</p>
              <h2 className="mt-6 text-3xl leading-tight sm:text-[2.4rem]">
                Strategy, design and implementation — held by one person.
              </h2>
            </Reveal>
            <Reveal delay={80} className="space-y-6 text-lg leading-relaxed text-muted-foreground">
              <p>
                I'm May Correa, a digital business designer. I work at the point where strategy,
                design and implementation meet — which is usually where things fall apart when
                they're split across three vendors.
              </p>
              <p>
                My background is in building the unglamorous infrastructure behind expertise-based
                businesses: the enrolment flow, the CRM that reflects reality, the membership that
                doesn't need babysitting. I care about how a system feels to the person running it
                on a Tuesday afternoon.
              </p>
              <p className="font-display text-2xl leading-snug text-primary">
                Good systems are quiet. You should notice them mostly by their absence of friction.
              </p>
            </Reveal>
          </div>
        </section>

        {/* Audience */}
        <section className="mx-auto max-w-6xl px-6 py-24 md:py-32">
          <Reveal>
            <p className="eyebrow">Who I work with</p>
            <h2 className="measure mt-6 text-3xl leading-tight sm:text-[2.6rem]">
              Businesses built on what someone knows.
            </h2>
          </Reveal>
          <div className="mt-14 grid gap-x-14 gap-y-12 md:grid-cols-2">
            {audience.map((a, i) => (
              <Reveal key={a.title} delay={i * 70}>
                <div className="border-t border-clay/60 pt-6">
                  <h3 className="text-xl">{a.title}</h3>
                  <p className="mt-3 leading-relaxed text-muted-foreground">{a.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Questions */}
        <section className="border-t border-border">
          <div className="mx-auto max-w-3xl px-6 py-24 md:py-32">
            <Reveal>
              <p className="eyebrow">Before we talk</p>
              <h2 className="mt-6 text-3xl leading-tight sm:text-[2.4rem]">
                Questions people usually have.
              </h2>
            </Reveal>
            <Reveal delay={80}>
              <Accordion type="single" collapsible className="mt-10">
                {questions.map((item) => (
                  <AccordionItem key={item.q} value={item.q}>
                    <AccordionTrigger className="text-left font-display text-lg hover:no-underline">
                      {item.q}
                    </AccordionTrigger>
                    <AccordionContent className="text-base leading-relaxed text-muted-foreground">
                      {item.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </Reveal>
          </div>
        </section>

        {/* Final CTA */}
        <section className="border-t border-border bg-sand">
          <div className="mx-auto max-w-3xl px-6 py-28 text-center md:py-36">
            <Reveal>
              <h2 className="text-3xl leading-tight sm:text-[2.9rem]">
                Let's bring clarity and calm to your operations.
              </h2>
              <p className="mx-auto mt-7 max-w-xl text-lg leading-relaxed text-muted-foreground">
                Tell me a little about your business and where it feels heaviest. A few short
                questions is enough to start — I'll read every word before we speak.
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

      <footer className="mx-auto flex max-w-6xl flex-col gap-2 px-6 py-12 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
        <span className="font-display text-base text-foreground">May Correa</span>
        <span>Digital Business Designer — systems, quietly working.</span>
      </footer>
    </div>
  );
}
