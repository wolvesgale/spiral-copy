"use client";

import { useEffect, useRef } from "react";

const items = [
  "Lifecycle Messaging",
  "CRM Modernisation",
  "Inbox Tooling",
  "Compliance Frameworks",
  "Analytics",
  "Support Automation",
];

export function Marquee() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const animation = container.animate(
      [{ transform: "translateX(0)" }, { transform: "translateX(-50%)" }],
      {
        duration: 20000,
        iterations: Infinity,
        easing: "linear",
      },
    );

    return () => animation.cancel();
  }, []);

  return (
    <div className="overflow-hidden rounded-full border border-white/60 bg-white/80 py-3">
      <div
        ref={containerRef}
        className="flex min-w-max items-center gap-6 px-6 text-sm uppercase tracking-[0.3em] text-ink/70"
      >
        {[...items, ...items].map((item, index) => (
          <span key={`${item}-${index}`} className="whitespace-nowrap">
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
