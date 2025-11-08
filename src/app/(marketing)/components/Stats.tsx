export type Stat = {
  label: string;
  value: string;
};

async function fetchStars() {
  try {
    const response = await fetch("https://api.github.com/repos/vercel/next.js", {
      headers: {
        Accept: "application/vnd.github+json",
      },
      next: { revalidate: 3600 },
    });

    if (!response.ok) {
      throw new Error("Failed to fetch");
    }

    const data = await response.json();
    return typeof data.stargazers_count === "number" ? data.stargazers_count : null;
  } catch (error) {
    console.error("Failed to fetch GitHub stars", error);
    return null;
  }
}

export async function loadStats(): Promise<Stat[]> {
  const githubStars = await fetchStars();

  const stats: Stat[] = [
    { label: "Client launches", value: "24" },
    { label: "Average team tenure", value: "7.2 years" },
    { label: "Markets supported", value: "5" },
  ];

  if (githubStars) {
    stats.push({ label: "Open source stars", value: githubStars.toLocaleString() });
  }

  return stats;
}

export function Stats({ stats }: { stats: Stat[] }) {
  return (
    <div className="grid gap-4 rounded-3xl border border-white/70 bg-surface-strong/95 p-8 sm:grid-cols-2 md:grid-cols-4">
      {stats.map((stat) => (
        <div key={stat.label} className="space-y-2">
          <p className="text-xs uppercase tracking-[0.18em] text-ink-soft">{stat.label}</p>
          <p className="text-2xl font-semibold text-ink">{stat.value}</p>
        </div>
      ))}
    </div>
  );
}
