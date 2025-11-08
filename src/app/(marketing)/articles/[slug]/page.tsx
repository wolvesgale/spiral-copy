import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { allArticles } from "contentlayer/generated";
import { format } from "date-fns";
import { getMDXComponent } from "../../components/mdx";
import type { HTMLAttributes } from "react";

function cn(...classes: Array<string | undefined>) {
  return classes.filter(Boolean).join(" ");
}

const components = {
  h2: ({ className, ...props }: HTMLAttributes<HTMLHeadingElement>) => (
    <h2 {...props} className={cn("mt-10 text-2xl font-semibold text-ink", className)} />
  ),
  h3: ({ className, ...props }: HTMLAttributes<HTMLHeadingElement>) => (
    <h3 {...props} className={cn("mt-8 text-xl font-semibold text-ink", className)} />
  ),
  p: ({ className, ...props }: HTMLAttributes<HTMLParagraphElement>) => (
    <p {...props} className={cn("mt-4 text-base leading-7 text-ink-soft", className)} />
  ),
  ul: ({ className, ...props }: HTMLAttributes<HTMLUListElement>) => (
    <ul {...props} className={cn("mt-4 list-disc space-y-2 pl-6 text-base leading-7 text-ink-soft", className)} />
  ),
};

function getArticle(slug: string) {
  return allArticles.find((article) => article.slug === slug);
}

function slugify(value: string) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");
}

function buildToc(raw: string) {
  const headingRegex = /^##\s+(.*)$/gm;
  const headings: { id: string; title: string }[] = [];
  let match: RegExpExecArray | null;
  while ((match = headingRegex.exec(raw))) {
    const title = match[1];
    headings.push({ id: slugify(title), title });
  }
  return headings;
}

type ArticlePageProps = {
  params: { slug: string };
};

export async function generateStaticParams() {
  return allArticles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: ArticlePageProps): Promise<Metadata> {
  const { slug } = params;
  const article = getArticle(slug);

  if (!article) {
    return {};
  }

  return {
    title: article.title,
    description: article.summary,
  };
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = params;
  const article = getArticle(slug);

  if (!article) {
    notFound();
  }

  const MDXContent = getMDXComponent(article.body.code);
  const toc = buildToc(article.body.raw);

  return (
    <div className="space-y-16 px-6 py-24 sm:px-8">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-6">
        <nav className="text-xs uppercase tracking-[0.18em] text-ink-soft">
          <Link href="/" className="hover:text-ink">
            Home
          </Link>
          <span className="mx-2">/</span>
          <Link href="/articles" className="hover:text-ink">
            Articles
          </Link>
          <span className="mx-2">/</span>
          <span className="text-ink">{article.title}</span>
        </nav>
        <div className="grid gap-10 md:grid-cols-[1fr_240px]">
          <div>
            <h1 className="text-4xl font-semibold text-ink">{article.title}</h1>
            <p className="mt-4 text-sm uppercase tracking-[0.18em] text-ink-soft">
              {format(new Date(article.date), "yyyy.MM.dd")}
            </p>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-ink-soft">{article.summary}</p>
            <div className="mt-10 space-y-4">
              <MDXContent components={components} />
            </div>
          </div>
          <aside className="space-y-4 rounded-3xl border border-white/70 bg-surface-strong p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-ink">
              On this page
            </p>
            <ul className="space-y-2 text-sm text-ink-soft">
              {toc.map((heading) => (
                <li key={heading.id}>
                  <a href={`#${heading.id}`} className="transition-colors hover:text-ink">
                    {heading.title}
                  </a>
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </div>
    </div>
  );
}
