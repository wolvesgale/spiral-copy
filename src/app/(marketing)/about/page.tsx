import Image from "next/image";
import { Metadata } from "next";
import { Section } from "../components/Section";

export const metadata: Metadata = {
  title: "About",
  description: "Learn about eggs.email's purpose, approach, and company details.",
};

const principles = [
  {
    title: "Clarity over noise",
    description:
      "We shape every product to make complex operations understandable, reducing friction in high-volume communications.",
  },
  {
    title: "Co-creation with founders",
    description:
      "Our venture studio model embeds multidisciplinary members within partner teams to continuously test, learn, and refine.",
  },
  {
    title: "Sustainable pace",
    description:
      "We prioritise maintainable systems, from codebases to service desks, so momentum is preserved beyond launch week.",
  },
];

const history = [
  {
    year: "2019",
    title: "Foundation",
    description: "eggs.email begins as an experiment to redesign transaction-heavy email journeys for startups in Tokyo.",
  },
  {
    year: "2021",
    title: "Studio launch",
    description: "We expand into a venture studio, helping portfolio teams ship end-to-end messaging infrastructure and analytics dashboards.",
  },
  {
    year: "2023",
    title: "Regional partnerships",
    description: "Strategic alliances across APAC strengthen our ability to localise compliance, deliverability, and customer support.",
  },
];

const companyInfo = [
  { label: "Name", value: "eggs.email Studio Inc." },
  { label: "Founded", value: "June 2019" },
  { label: "Representative", value: "Mina Sato" },
  { label: "Capital", value: "¥45,000,000" },
  { label: "Business", value: "Product incubation, messaging strategy, platform operations" },
  { label: "Location", value: "1-2-3 Aoyama, Minato-ku, Tokyo" },
];

export default function AboutPage() {
  return (
    <div className="space-y-16">
      <Section
        eyebrow="About eggs.email"
        title="Incubating ideas that deserve to be heard"
        description="eggs.email is a communications-focused venture studio supporting founders through research, venture design, and technical execution."
      >
        <div className="grid gap-10 md:grid-cols-[1.2fr_1fr]">
          <p className="text-base leading-7 text-ink-soft">
            We believe that every conversation between people and products should feel intentional. Inspired by eggs.email's roots in
            email marketing, we now help teams craft end-to-end communications ecosystems covering operations tooling, analytics, and support flows.
          </p>
          <div className="overflow-hidden rounded-3xl border border-white/70 bg-surface-strong p-6 text-sm text-ink-soft">
            <p className="font-medium text-ink">Studio snapshot</p>
            <p className="mt-2 leading-6">
              Over the last year we facilitated 14 discovery sprints, launched 8 new messaging products, and guided 5 teams toward Series A readiness.
            </p>
          </div>
        </div>
      </Section>
      <Section
        eyebrow="Principles"
        title="Designing serene experiences in busy inboxes"
      >
        <div className="grid gap-8 md:grid-cols-3">
          {principles.map((principle) => (
            <div key={principle.title} className="space-y-3 rounded-3xl border border-white/70 bg-surface-strong/90 p-6">
              <p className="text-sm font-semibold text-ink">{principle.title}</p>
              <p className="text-sm leading-6 text-ink-soft">{principle.description}</p>
            </div>
          ))}
        </div>
      </Section>
      <Section eyebrow="History" title="A steady cadence of growth">
        <div className="space-y-6">
          {history.map((item) => (
            <div key={item.year} className="flex flex-col gap-2 rounded-3xl border border-white/60 bg-surface-strong/95 p-6 md:flex-row md:items-center md:gap-6">
              <div className="text-sm font-semibold uppercase tracking-[0.18em] text-brand">{item.year}</div>
              <div className="flex-1">
                <p className="text-base font-medium text-ink">{item.title}</p>
                <p className="text-sm leading-6 text-ink-soft">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>
      <Section eyebrow="Company" title="Company outline">
        <div className="grid gap-6 md:grid-cols-[1fr_1.2fr]">
          <dl className="space-y-4 rounded-3xl border border-white/60 bg-surface-strong p-6">
            {companyInfo.map((info) => (
              <div key={info.label} className="flex flex-col gap-1 border-b border-white/60 pb-3 last:border-none last:pb-0">
                <dt className="text-xs uppercase tracking-[0.18em] text-ink-soft">{info.label}</dt>
                <dd className="text-sm text-ink">{info.value}</dd>
              </div>
            ))}
          </dl>
          <div className="relative h-72 overflow-hidden rounded-3xl border border-white/60">
            <Image
              src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=80"
              alt="Studio workspace"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </Section>
    </div>
  );
}
