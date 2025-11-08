import Link from "next/link";

const sitemap = [
  {
    title: "Overview",
    items: [
      { label: "About", href: "/about" },
      { label: "Business", href: "/business" },
      { label: "Team", href: "/team" },
    ],
  },
  {
    title: "Investments",
    items: [
      { label: "Portfolio", href: "/portfolio" },
      { label: "News", href: "/news" },
      { label: "Policy", href: "/policy" },
    ],
  },
  {
    title: "Connect",
    items: [
      { label: "Contact", href: "/contact" },
      { label: "Articles", href: "/articles" },
      { label: "Careers", href: "#" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-white/60 bg-surface-strong">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-12 px-6 py-16 sm:px-8">
        <div className="grid gap-8 md:grid-cols-4">
          <div className="space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-ink-soft">
              eggs.email
            </p>
            <p className="max-w-xs text-sm leading-6 text-ink-soft">
              We cultivate human-centered communication products that deliver clarity across every inbox.
            </p>
            <div className="text-sm text-ink-soft/70">
              <p>1-2-3 Aoyama, Minato-ku</p>
              <p>Tokyo 107-0062 Japan</p>
            </div>
          </div>
          {sitemap.map((section) => (
            <div key={section.title} className="space-y-3">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-ink">
                {section.title}
              </p>
              <ul className="space-y-2 text-sm text-ink-soft">
                {section.items.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className="transition-colors hover:text-ink"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-4 border-t border-white/60 pt-6 text-xs text-ink-soft md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} eggs.email studio</p>
          <div className="flex gap-4">
            <Link href="#" className="transition-colors hover:text-ink">
              LinkedIn
            </Link>
            <Link href="#" className="transition-colors hover:text-ink">
              X
            </Link>
            <Link href="#" className="transition-colors hover:text-ink">
              Newsletter
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
