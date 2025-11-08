const logos = [
  { name: "Paperkite" },
  { name: "Aurora" },
  { name: "Flux" },
  { name: "Tone" },
  { name: "Parcel" },
];

export function LogoCloud() {
  return (
    <div className="rounded-3xl border border-white/70 bg-surface-strong px-6 py-10">
      <p className="text-center text-xs font-medium uppercase tracking-[0.3em] text-ink-soft">
        Trusted by teams shipping thoughtful communication products
      </p>
      <div className="mt-8 grid grid-cols-2 items-center justify-items-center gap-6 md:grid-cols-5">
        {logos.map((logo) => (
          <div
            key={logo.name}
            className="flex h-14 w-full items-center justify-center rounded-xl border border-white/70 bg-white/70 text-sm font-medium uppercase tracking-[0.18em] text-ink-soft"
          >
            {logo.name}
          </div>
        ))}
      </div>
    </div>
  );
}
