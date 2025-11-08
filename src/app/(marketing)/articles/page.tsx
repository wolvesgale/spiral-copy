import type { Metadata } from "next";
import Link from "next/link";
import { allArticles } from "contentlayer/generated";
import { Section } from "../components/Section";
import { format } from "date-fns";

export const metadata: Metadata = {
  title: "Articles",
  description: "Insights and frameworks from the eggs.email team.",
};

function sortedArticles() {
  return allArticles
    .slice()
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export default function ArticlesPage() {
  const articles = sortedArticles();

  return (
    <div className="space-y-16">
      <Section
        eyebrow="Articles"
        title="Thinking from the studio"
        description="Practices and frameworks guiding how we design communications across ventures."
      >
        <div className="space-y-6">
          {articles.map((article) => (
            <article key={article._id} className="rounded-3xl border border-white/70 bg-surface-strong p-6">
              <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                <div>
                  <p className="text-xs uppercase tracking-[0.18em] text-ink-soft">
                    {format(new Date(article.date), "yyyy.MM.dd")}
                  </p>
                  <h3 className="mt-2 text-xl font-semibold text-ink">{article.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-ink-soft">{article.summary}</p>
                </div>
                <Link
                  href={article.url}
                  className="mt-4 inline-flex items-center justify-center rounded-full border border-ink/10 px-4 py-2 text-sm font-medium text-ink transition-colors hover:border-brand hover:text-brand md:mt-0"
                >
                  Read article
                </Link>
              </div>
            </article>
          ))}
        </div>
      </Section>
    </div>
  );
}
