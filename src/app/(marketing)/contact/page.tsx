import type { Metadata } from "next";
import { ContactForm } from "./ContactForm";
import { Section } from "../components/Section";

export const metadata: Metadata = {
  title: "Contact",
  description: "Reach the eggs.email team to discuss partnerships or programmes.",
};

export default function ContactPage() {
  return (
    <div className="space-y-16">
      <Section
        eyebrow="Contact"
        title="Let's explore what we can build together"
        description="Share a short summary of your product or challenge. We will respond with a tailored workshop agenda."
      >
        <div className="grid gap-12 md:grid-cols-[1fr_1.2fr]">
          <div className="space-y-4 text-sm leading-6 text-ink-soft">
            <p>
              For press, partnership, or programme enquiries, please fill in the form. We typically respond within two business days.
            </p>
            <p>
              Alternatively, reach out at <a href="mailto:hello@eggs.email" className="text-ink underline">hello@eggs.email</a>.
            </p>
            <div className="rounded-3xl border border-white/70 bg-surface-strong p-6">
              <p className="text-xs uppercase tracking-[0.18em] text-brand">Office hours</p>
              <p className="mt-2 text-sm text-ink">Tuesday & Thursday, 13:00–17:00 JST</p>
            </div>
          </div>
          <ContactForm />
        </div>
      </Section>
    </div>
  );
}
