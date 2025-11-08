"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";

type SectionProps = {
  id?: string;
  eyebrow?: string;
  title?: string;
  description?: string;
  children: ReactNode;
};

export function Section({ id, eyebrow, title, description, children }: SectionProps) {
  return (
    <section id={id} className="px-6 py-24 sm:px-8 md:py-28">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-12">
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-3xl space-y-4"
        >
          {eyebrow && (
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">
              {eyebrow}
            </p>
          )}
          {title && (
            <h2 className="text-3xl font-semibold leading-tight text-ink md:text-4xl">
              {title}
            </h2>
          )}
          {description && (
            <p className="text-base leading-7 text-ink-soft md:text-lg">
              {description}
            </p>
          )}
        </motion.header>
        <div className="space-y-10 md:space-y-12">{children}</div>
      </div>
    </section>
  );
}
