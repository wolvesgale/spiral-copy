import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}", "./content/**/*.{md,mdx}"],
  theme: {
    extend: {
      colors: {
        brand: "hsl(var(--brand))",
        "brand-soft": "hsl(var(--brand-soft))",
        ink: "hsl(var(--ink))",
        "ink-soft": "hsl(var(--ink-soft))",
        surface: "hsl(var(--surface))",
        "surface-strong": "hsl(var(--surface-strong))",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "Inter", "system-ui", "sans-serif"],
      },
      boxShadow: {
        floating: "0 24px 60px -28px rgba(18, 20, 24, 0.35)",
      },
      maxWidth: {
        prose: "68ch",
      },
    },
  },
  future: {
    hoverOnlyWhenSupported: true,
  },
};

export default config;
