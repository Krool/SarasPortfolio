"use client";

export default function Marquee() {
  const text = "#DesignGoals — ";
  const repeated = text.repeat(20);

  return (
    <div className="overflow-hidden border-b border-white/20 py-3">
      <div className="animate-marquee whitespace-nowrap">
        <span className="text-xl font-medium tracking-wide text-white/60">{repeated}</span>
        <span className="text-xl font-medium tracking-wide text-white/60">{repeated}</span>
      </div>
    </div>
  );
}
