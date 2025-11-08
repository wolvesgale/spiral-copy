"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative overflow-hidden px-6 pb-24 pt-48 sm:px-8 md:pb-28">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(71,113,255,0.12)_0%,rgba(255,255,255,0)_60%)]" />
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-14">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="space-y-6"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">
            Email-first venture studio
          </p>
          <h1 className="text-4xl font-semibold leading-[1.1] text-ink md:text-6xl">
            We cultivate resilient products for the inbox and beyond.
          </h1>
          <p className="max-w-2xl text-lg leading-8 text-ink-soft">
            eggs.email partners with founders to shape services that communicate with clarity—bridging research, design, and reliable infrastructure.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
          className="flex flex-col gap-4 sm:flex-row"
        >
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-full bg-ink px-6 py-3 text-sm font-medium text-surface-strong transition-colors hover:bg-brand"
          >
            Start a conversation
          </Link>
          <Link
            href="/portfolio"
            className="inline-flex items-center justify-center rounded-full border border-ink/10 px-6 py-3 text-sm font-medium text-ink transition-colors hover:border-brand hover:text-brand"
          >
            View portfolio
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
