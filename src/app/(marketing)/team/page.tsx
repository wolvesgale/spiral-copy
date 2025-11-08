import Image from "next/image";
import type { Metadata } from "next";
import { Section } from "../components/Section";

export const metadata: Metadata = {
  title: "Team",
  description: "Meet the multidisciplinary team behind eggs.email.",
};

const teamMembers = [
  {
    name: "Mina Sato",
    role: "Founder & Strategy Partner",
    bio: "Former communications lead at growth-stage SaaS firms, Mina guides venture design and portfolio strategy.",
    focus: ["Venture design", "Market expansion"],
    image:
      "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=960&q=80",
  },
  {
    name: "Haruto Nishimura",
    role: "Principal Engineer",
    bio: "Leads platform architecture across messaging infrastructure, ensuring deliverability, reliability, and maintainability.",
    focus: ["Infrastructure", "Security"],
    image:
      "https://images.unsplash.com/photo-1521119989659-a83eee488004?auto=format&fit=crop&w=960&q=80",
  },
  {
    name: "Ayaka Morita",
    role: "Design Director",
    bio: "Shapes product experiences, establishing modular design systems and storytelling that resonate across channels.",
    focus: ["Design systems", "Brand experience"],
    image:
      "https://images.unsplash.com/photo-1544723795-43253787b3f6?auto=format&fit=crop&w=960&q=80",
  },
  {
    name: "Leo Kim",
    role: "Growth Partner",
    bio: "Supports data-led lifecycle programmes, bridging analytics with experimentation to sustain engagement.",
    focus: ["Lifecycle", "Analytics"],
    image:
      "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=960&q=80",
  },
];

export default function TeamPage() {
  return (
    <div className="space-y-16">
      <Section
        eyebrow="Team"
        title="A studio of strategists, designers, and engineers"
        description="Our collective brings together strategic insight with hands-on craft to launch communications that people value."
      >
        <div className="grid gap-8 md:grid-cols-2">
          {teamMembers.map((member) => (
            <article key={member.name} className="flex flex-col gap-4 rounded-3xl border border-white/70 bg-surface-strong p-6">
              <div className="relative h-44 overflow-hidden rounded-2xl">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-ink">{member.name}</h3>
                <p className="text-sm text-ink-soft">{member.role}</p>
              </div>
              <p className="text-sm leading-6 text-ink-soft">{member.bio}</p>
              <ul className="flex flex-wrap gap-2 text-xs uppercase tracking-[0.16em] text-ink-soft">
                {member.focus.map((item) => (
                  <li key={item} className="rounded-full bg-brand-soft px-3 py-1 text-ink">
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </Section>
    </div>
  );
}
