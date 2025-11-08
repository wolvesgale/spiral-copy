import type { Metadata } from "next";
import { Section } from "../components/Section";

export const metadata: Metadata = {
  title: "Business",
  description: "Explore eggs.email's business units across research, product building, and operations.",
};

const practices = [
  {
    name: "Venture Research",
    summary:
      "Market sensing, user research, and strategic foresight to identify the right problems and shape bold hypotheses.",
    deliverables: ["Qualitative studies", "Market maps", "Validation experiments"],
  },
  {
    name: "Product Foundry",
    summary:
      "Designing and building resilient messaging products—from prototypes to production-ready services.",
    deliverables: ["Service design", "Technical architecture", "Full-stack development"],
  },
  {
    name: "Platform Operations",
    summary:
      "Long-term operational support across deliverability, compliance, analytics, and growth programmes.",
    deliverables: ["Lifecycle strategy", "Support enablement", "Growth measurement"],
  },
];

const services = [
  {
    title: "Discovery Partnership",
    description:
      "An eight-week engagement combining field interviews, funnel analysis, and service blueprinting to expose the most impactful opportunities.",
  },
  {
    title: "Launch Accelerator",
    description:
      "Cross-disciplinary squads deliver MVPs within 12 weeks, aligning design systems, production code, and measurement from day one.",
  },
  {
    title: "Operations Residency",
    description:
      "Ongoing collaboration embedding our specialists into your team to maintain compliance, deliverability, and campaign excellence.",
  },
];

export default function BusinessPage() {
  return (
    <div className="space-y-16">
      <Section
        eyebrow="Business"
        title="Three practices supporting every stage of communication products"
        description="eggs.email operates end-to-end services to make sure ideas move from insight to sustained growth with clarity."
      >
        <div className="space-y-10">
          {practices.map((practice) => (
            <div key={practice.name} className="rounded-3xl border border-white/70 bg-surface-strong p-6">
              <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                <div className="md:max-w-xl">
                  <h3 className="text-lg font-semibold text-ink">{practice.name}</h3>
                  <p className="mt-2 text-sm leading-6 text-ink-soft">{practice.summary}</p>
                </div>
                <ul className="flex flex-wrap gap-2 text-xs uppercase tracking-[0.16em] text-ink-soft">
                  {practice.deliverables.map((item) => (
                    <li key={item} className="rounded-full bg-brand-soft px-3 py-1 text-ink">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </Section>
      <Section
        eyebrow="Programs"
        title="Engagement models designed for momentum"
      >
        <div className="grid gap-6 md:grid-cols-3">
          {services.map((service) => (
            <div key={service.title} className="space-y-3 rounded-3xl border border-white/70 bg-surface-strong/95 p-6">
              <h3 className="text-base font-semibold text-ink">{service.title}</h3>
              <p className="text-sm leading-6 text-ink-soft">{service.description}</p>
            </div>
          ))}
        </div>
      </Section>
      <Section
        eyebrow="Focus areas"
        title="Where we create the most impact"
        description="We specialise in communication-heavy product verticals where details matter."
      >
        <div className="grid gap-4 sm:grid-cols-2">
          {["Fintech onboarding", "Health communications", "Education platforms", "Mobility services", "Retail loyalty", "SaaS platforms"].map((item) => (
            <div key={item} className="rounded-3xl border border-white/60 bg-white/90 px-6 py-5 text-sm font-medium text-ink">
              {item}
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
}
