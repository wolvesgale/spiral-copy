import type { Metadata } from "next";
import Link from "next/link";
import { allNews } from "contentlayer/generated";
import { Section } from "../components/Section";
import { format } from "date-fns";

export const metadata: Metadata = {
  title: "News",
  description: "Updates from the eggs.email studio and portfolio.",
};

function sortNews() {
  return allNews
    .slice()
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export default function NewsPage() {
  const newsItems = sortNews();

  return (
    <div className="space-y-16">
      <Section
        eyebrow="News"
        title="Studio announcements and portfolio updates"
        description="Latest notes on programmes, partnerships, and community initiatives."
      >
        <div className="grid gap-6 md:grid-cols-2">
          {newsItems.map((item) => (
            <article key={item._id} className="flex h-full flex-col justify-between rounded-3xl border border-white/70 bg-surface-strong p-6">
              <div className="space-y-4">
                <p className="text-xs uppercase tracking-[0.18em] text-ink-soft">
                  {format(new Date(item.date), "yyyy.MM.dd")}
                </p>
                <h3 className="text-lg font-semibold text-ink">{item.title}</h3>
                <p className="text-sm leading-6 text-ink-soft">{item.summary}</p>
                <div className="flex flex-wrap gap-2 text-xs uppercase tracking-[0.16em] text-ink-soft">
                  {item.tags.map((tag) => (
                    <span key={tag} className="rounded-full bg-brand-soft px-3 py-1 text-ink">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="mt-6">
                <Link href={item.url} className="text-sm font-medium text-ink transition-colors hover:text-brand">
                  Read more
                </Link>
              </div>
            </article>
          ))}
        </div>
      </Section>
    </div>
  );
}
