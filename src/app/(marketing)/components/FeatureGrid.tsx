"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";

type Feature = {
  title: string;
  description: string;
  icon: ReactNode;
};

const features: Feature[] = [
  {
    title: "Discovery Labs",
    description:
      "Qualitative research and market sensing to spot opportunities inside communication-heavy workflows.",
    icon: "✳️",
  },
  {
    title: "Product Craft",
    description:
      "Experience design and technical architecture shaped for longevity across email, web, and chat interfaces.",
    icon: "🛠️",
  },
  {
    title: "Growth Enablement",
    description:
      "Lifecycle strategies that bring pilots to scale with measurable activation and retention programs.",
    icon: "📈",
  },
];

export function FeatureGrid() {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {features.map((feature, index) => (
        <motion.article
          key={feature.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, delay: index * 0.12, ease: "easeOut" }}
          className="flex h-full flex-col gap-4 rounded-3xl border border-white/70 bg-surface-strong/90 p-6 shadow-sm"
        >
          <span className="text-2xl">{feature.icon}</span>
          <h3 className="text-xl font-semibold text-ink">{feature.title}</h3>
          <p className="text-sm leading-6 text-ink-soft">{feature.description}</p>
        </motion.article>
      ))}
    </div>
  );
}
