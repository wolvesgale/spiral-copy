import { FeatureGrid } from "./components/FeatureGrid";
import { Hero } from "./components/Hero";
import { LogoCloud } from "./components/LogoCloud";
import { Marquee } from "./components/Marquee";
import { Section } from "./components/Section";
import { Stats, loadStats } from "./components/Stats";
import Link from "next/link";

export default async function HomePage() {
  const stats = await loadStats();

  return (
    <div className="space-y-16">
      <Hero />
      <Section
        id="capabilities"
        eyebrow="Capabilities"
        title="Bringing clarity to complex communications"
        description="From idea validation to ongoing optimisation, we partner with teams to build considered messaging, operations, and tooling."
      >
        <FeatureGrid />
      </Section>
      <div className="px-6 sm:px-8">
        <div className="mx-auto flex w-full max-w-5xl flex-col gap-8">
          <LogoCloud />
          <Marquee />
          <Stats stats={stats} />
        </div>
      </div>
      <Section
        id="cta"
        eyebrow="Let's collaborate"
        title="Your next inbox experience deserves a careful launch"
        description="Tell us about your idea, and we will prepare a workshop to explore fit-to-market and orchestrate the right activation plan."
      >
        <div className="flex flex-col gap-4 rounded-3xl border border-white/70 bg-surface-strong px-8 py-10 shadow-sm md:flex-row md:items-center md:justify-between">
          <div className="space-y-2">
            <p className="text-sm font-medium text-ink">Schedule an introductory session</p>
            <p className="text-sm text-ink-soft">
              We respond within two business days with an agenda tailored to your team.
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-full bg-brand px-6 py-3 text-sm font-medium text-surface-strong transition-colors hover:bg-ink"
          >
            Contact eggs.email
          </Link>
        </div>
      </Section>
    </div>
  );
}
