"use client";

export default function Marquee() {
  const text = "#DesignGoals — ";
  const repeated = text.repeat(20);

  return (
    <div className="overflow-hidden border-y border-border py-3">
      <div className="animate-marquee whitespace-nowrap">
        <span className="text-xl font-semibold tracking-wide">{repeated}</span>
        <span className="text-xl font-semibold tracking-wide">{repeated}</span>
      </div>
    </div>
  );
}
