"use client";

import { useEffect, useState } from "react";

const statusItems = [
  "Building this portfolio site",
  "Paid media for Cloud Bridge ISC",
  "SEO expansion on calculatorboss.com",
  "Shopify conversion tracking setup",
];

export default function StatusWidget() {
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(true);
      const t = setTimeout(() => {
        setIndex((i) => (i + 1) % statusItems.length);
        setFade(false);
      }, 300);
      return () => clearTimeout(t);
    }, 3800);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="fixed right-[18px] top-1/2 -translate-y-1/2 z-40 max-w-[220px] max-[900px]:right-[10px] max-[900px]:max-w-[168px]
                 bg-white/90 backdrop-blur-md border border-black/8 rounded-2xl shadow-xl shadow-black/5 px-4 py-3.5"
    >
      <div className="flex items-center gap-2 mb-1.5">
        <span className="relative w-2 h-2 rounded-full bg-green-600">
          <span className="absolute inset-[-4px] rounded-full bg-green-600/40 animate-ping" />
        </span>
        <span className="max-[900px]:hidden font-mono text-[10px] uppercase tracking-widest text-ink/40">
          Currently working on
        </span>
      </div>
      <p className={`text-xs font-semibold text-ink/80 leading-snug transition-opacity duration-300 ${fade ? "opacity-0" : "opacity-100"}`}>
        {statusItems[index]}
      </p>
    </div>
  );
}
