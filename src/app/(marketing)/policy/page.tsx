import type { Metadata } from "next";
import { Section } from "../components/Section";

export const metadata: Metadata = {
  title: "Policy",
  description: "Privacy and governance policies for eggs.email.",
};

const policies = [
  {
    title: "Privacy",
    items: [
      "We collect only necessary contact data when you submit enquiries or participate in programmes.",
      "Data is stored within encrypted systems located in Japan with restricted access controls.",
      "We do not share personal information with third parties without explicit consent unless legally required.",
    ],
  },
  {
    title: "Security",
    items: [
      "We operate regular vulnerability assessments across infrastructure and partner integrations.",
      "Incident response procedures include 24-hour notification windows for affected partners.",
      "Access to production environments follows least-privilege principles and MFA requirements.",
    ],
  },
  {
    title: "Compliance",
    items: [
      "eggs.email adheres to domestic regulations including Act on the Protection of Personal Information (APPI).",
      "Portfolio engagements include compliance reviews across each operating market prior to launch.",
      "We collaborate with legal advisors to update policy statements annually.",
    ],
  },
];

export default function PolicyPage() {
  return (
    <div className="space-y-16">
      <Section
        eyebrow="Policy"
        title="Governance that supports sustainable growth"
        description="We maintain policies that keep communications safe, compliant, and respectful."
      >
        <div className="grid gap-6 md:grid-cols-3">
          {policies.map((policy) => (
            <div key={policy.title} className="space-y-4 rounded-3xl border border-white/70 bg-surface-strong p-6">
              <h3 className="text-lg font-semibold text-ink">{policy.title}</h3>
              <ul className="space-y-3 text-sm leading-6 text-ink-soft">
                {policy.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
}
