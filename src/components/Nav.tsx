"use client";

import { useState } from "react";

export default function Nav() {
  const [open, setOpen] = useState(false);

  const links = [
    { href: "#services", label: "Skills" },
    { href: "#work", label: "Work" },
    { href: "#about", label: "About" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-paper/90 backdrop-blur-md border-b border-black/5">
      <nav className="max-w-6xl mx-auto px-5 sm:px-8 h-16 flex items-center justify-between">
        <a href="#home" className="font-display font-bold text-lg tracking-tight">
          Arafat<span className="accent-text">Sunny</span>
        </a>

        <ul className="hidden md:flex items-center gap-8 text-sm font-medium text-ink/70">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="hover:text-ink transition-colors">
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="hidden md:inline-flex items-center bg-blue-700 hover:bg-blue-800 transition-colors text-white text-sm font-semibold px-5 py-2.5 rounded-full shadow-sm"
        >
          Get in Touch
        </a>

        <button
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
          className="md:hidden p-2 -mr-2"
        >
          {open ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </nav>

      {open && (
        <div className="md:hidden border-t border-black/5 bg-paper">
          <ul className="flex flex-col px-5 py-4 gap-1 text-sm font-medium text-ink/80">
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href} onClick={() => setOpen(false)} className="block py-2.5">
                  {l.label}
                </a>
              </li>
            ))}
            <li className="pt-2">
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="bg-blue-700 text-white text-sm font-semibold px-5 py-2.5 rounded-full inline-block"
              >
                Get in Touch
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
