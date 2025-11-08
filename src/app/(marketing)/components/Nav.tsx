"use client";

import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

const links = [
  { href: "/about", label: "私たちについて" },
  { href: "/business", label: "事業" },
  { href: "/team", label: "チーム" },
  { href: "/portfolio", label: "実績" },
  { href: "/news", label: "ニュース" },
  { href: "/booking", label: "予約" },
  { href: "/contact", label: "お問い合わせ" },
];

export function Nav() {
  const pathname = usePathname() || "/";
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 24);
  });

  return (
    <motion.header
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed inset-x-0 top-0 z-50 flex justify-center px-4"
    >
      <motion.nav
        aria-label="Primary"
        animate={{
          backgroundColor: scrolled ? "rgba(255,255,255,0.84)" : "rgba(255,255,255,0.68)",
          boxShadow: scrolled ? "0 18px 40px -32px rgba(18,20,24,0.35)" : "0 0 0 rgba(0,0,0,0)",
        }}
        transition={{ duration: 0.3 }}
        className="mt-6 flex w-full max-w-5xl items-center gap-6 rounded-full border border-white/60 bg-white/70 px-6 py-3 backdrop-blur-md"
      >
        <div className="hidden flex-1 items-center text-xs font-medium uppercase tracking-[0.18em] text-ink-soft md:flex">
          Incubation Studio
        </div>
        <div className="flex flex-1 justify-center">
          <Link
            href="/"
            className="flex items-center text-sm font-semibold tracking-[0.24em] text-ink transition-colors hover:text-brand"
          >
            eggs.email
          </Link>
        </div>
        <div className="flex flex-1 items-center justify-end">
          <ul className="flex items-center gap-4 text-sm text-ink-soft">
            {links.map((link) => {
              const isActive = pathname === link.href || pathname.startsWith(`${link.href}/`);
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`relative rounded-full px-3 py-1 transition-colors ${
                      isActive ? "bg-brand-soft text-ink" : "hover:text-ink"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </motion.nav>
    </motion.header>
  );
}
