"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { Section } from "../components/Section";

type PortfolioStatus = "current" | "exit" | "concept";

type PortfolioItem = {
  name: string;
  description: string;
  status: PortfolioStatus;
  sectors: string[];
  image: string;
};

const items: PortfolioItem[] = [
  {
    name: "PulseLedger",
    description: "Health-tech messaging platform enabling proactive outreach for clinics and wellness brands.",
    status: "current",
    sectors: ["Healthcare", "SaaS"],
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "Ferry",
    description: "Mobility marketplace using event-driven comms to coordinate urban deliveries and riders.",
    status: "current",
    sectors: ["Mobility", "Logistics"],
    image:
      "https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "Northfield",
    description: "Enterprise education suite with templated onboarding journeys across APAC campuses.",
    status: "exit",
    sectors: ["Education"],
    image:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "Linea",
    description: "Fintech identity orchestration helping banks manage high-volume compliance checks.",
    status: "current",
    sectors: ["Fintech"],
    image:
      "https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "Sora",
    description: "Concept for conversational support analytics focusing on tone-of-voice quality.",
    status: "concept",
    sectors: ["AI", "Support"],
    image:
      "https://images.unsplash.com/photo-1523475472560-d2df97ec485c?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "Atlas",
    description: "Retail loyalty infrastructure powering segmented campaigns at scale.",
    status: "exit",
    sectors: ["Retail"],
    image:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80",
  },
];

const filters = [
  { label: "All", value: "all" },
  { label: "Current", value: "current" },
  { label: "Exit", value: "exit" },
  { label: "Concept", value: "concept" },
] as const;

type FilterValue = (typeof filters)[number]["value"];

function filterItems(filter: FilterValue) {
  if (filter === "all") return items;
  return items.filter((item) => item.status === filter);
}

export function PortfolioClient() {
  const [filter, setFilter] = useState<FilterValue>("all");

  const filteredItems = useMemo(() => filterItems(filter), [filter]);

  return (
    <div className="space-y-16">
      <Section
        eyebrow="Portfolio"
        title="Ventures we nurture"
        description="We partner with founders building communication-led products that reshape their industries."
      >
        <div className="flex flex-wrap gap-3">
          {filters.map((option) => (
            <button
              key={option.value}
              onClick={() => setFilter(option.value)}
              className={`rounded-full border px-4 py-2 text-sm transition-colors ${
                filter === option.value
                  ? "border-brand bg-brand text-white"
                  : "border-white/70 bg-white/70 text-ink hover:border-brand hover:text-brand"
              }`}
              type="button"
            >
              {option.label}
            </button>
          ))}
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {filteredItems.map((item) => (
            <article key={item.name} className="overflow-hidden rounded-3xl border border-white/70 bg-surface-strong shadow-sm">
              <div className="relative h-48 overflow-hidden rounded-t-3xl">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="space-y-3 p-6">
                <div className="flex items-center justify-between text-xs uppercase tracking-[0.16em] text-ink-soft">
                  <span>{item.status}</span>
                  <div className="flex flex-wrap gap-2 text-[11px] normal-case">
                    {item.sectors.map((sector) => (
                      <span key={sector} className="rounded-full bg-brand-soft px-2 py-1 text-ink">
                        {sector}
                      </span>
                    ))}
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-ink">{item.name}</h3>
                <p className="text-sm leading-6 text-ink-soft">{item.description}</p>
              </div>
            </article>
          ))}
        </div>
      </Section>
    </div>
  );
}
