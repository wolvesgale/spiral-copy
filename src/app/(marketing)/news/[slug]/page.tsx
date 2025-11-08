import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { allNews } from "contentlayer/generated";
import { format } from "date-fns";
import { getMDXComponent } from "../../components/mdx";
import type { HTMLAttributes } from "react";

function cn(...classes: Array<string | undefined>) {
  return classes.filter(Boolean).join(" ");
}

const components = {
  p: ({ className, ...props }: HTMLAttributes<HTMLParagraphElement>) => (
    <p {...props} className={cn("mt-4 text-base leading-7 text-ink-soft", className)} />
  ),
  strong: ({ className, ...props }: HTMLAttributes<HTMLElement>) => (
    <strong {...props} className={cn("font-semibold text-ink", className)} />
  ),
};

function getNews(slug: string) {
  return allNews.find((item) => item.slug === slug);
}

type NewsPageProps = {
  params: { slug: string };
};

export async function generateStaticParams() {
  return allNews.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: NewsPageProps): Promise<Metadata> {
  const { slug } = params;
  const newsItem = getNews(slug);

  if (!newsItem) {
    return {};
  }

  return {
    title: newsItem.title,
    description: newsItem.summary,
  };
}

export default async function NewsDetailPage({ params }: NewsPageProps) {
  const { slug } = params;
  const newsItem = getNews(slug);

  if (!newsItem) {
    notFound();
  }

  const MDXContent = getMDXComponent(newsItem.body.code);

  return (
    <div className="space-y-16 px-6 py-24 sm:px-8">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-6">
        <nav className="text-xs uppercase tracking-[0.18em] text-ink-soft">
          <Link href="/" className="hover:text-ink">
            Home
          </Link>
          <span className="mx-2">/</span>
          <Link href="/news" className="hover:text-ink">
            News
          </Link>
          <span className="mx-2">/</span>
          <span className="text-ink">{newsItem.title}</span>
        </nav>
        <div className="rounded-3xl border border-white/70 bg-surface-strong p-8">
          <p className="text-xs uppercase tracking-[0.18em] text-ink-soft">
            {format(new Date(newsItem.date), "yyyy.MM.dd")}
          </p>
          <h1 className="mt-4 text-3xl font-semibold text-ink">{newsItem.title}</h1>
          <p className="mt-4 text-base leading-7 text-ink-soft">{newsItem.summary}</p>
          <div className="mt-6 space-y-4">
            <MDXContent components={components} />
          </div>
        </div>
      </div>
    </div>
  );
}
