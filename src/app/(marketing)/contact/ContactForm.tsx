"use client";

import { useState, type FormEvent } from "react";

type FormState = "idle" | "loading" | "success" | "error";

export function ContactForm() {
  const [formState, setFormState] = useState<FormState>("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);

    setFormState("loading");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify(Object.fromEntries(formData.entries())),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Failed to submit");
      }

      setFormState("success");
      form.reset();
    } catch (error) {
      console.error(error);
      setFormState("error");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6 rounded-3xl border border-white/70 bg-surface-strong p-8">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="flex flex-col gap-2 text-sm text-ink">
          Name
          <input
            required
            type="text"
            name="name"
            className="rounded-2xl border border-white/70 bg-white/90 px-4 py-3 text-sm text-ink focus:border-brand focus:outline-none"
          />
        </label>
        <label className="flex flex-col gap-2 text-sm text-ink">
          Company
          <input
            type="text"
            name="company"
            className="rounded-2xl border border-white/70 bg-white/90 px-4 py-3 text-sm text-ink focus:border-brand focus:outline-none"
          />
        </label>
      </div>
      <label className="flex flex-col gap-2 text-sm text-ink">
        Email
        <input
          required
          type="email"
          name="email"
          className="rounded-2xl border border-white/70 bg-white/90 px-4 py-3 text-sm text-ink focus:border-brand focus:outline-none"
        />
      </label>
      <label className="flex flex-col gap-2 text-sm text-ink">
        Message
        <textarea
          required
          name="message"
          rows={6}
          className="rounded-2xl border border-white/70 bg-white/90 px-4 py-3 text-sm text-ink focus:border-brand focus:outline-none"
        />
      </label>
      <button
        type="submit"
        disabled={formState === "loading"}
        className="inline-flex items-center justify-center rounded-full bg-ink px-6 py-3 text-sm font-medium text-surface-strong transition-colors hover:bg-brand disabled:opacity-60"
      >
        {formState === "loading" ? "Sending..." : "Submit"}
      </button>
      {formState === "success" && (
        <p className="text-sm text-brand">Thanks! We'll be in touch soon.</p>
      )}
      {formState === "error" && (
        <p className="text-sm text-red-500">Something went wrong. Please try again.</p>
      )}
    </form>
  );
}
