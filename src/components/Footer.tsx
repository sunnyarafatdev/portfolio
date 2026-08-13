import { siteConfig } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="border-t border-black/5 py-10">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 flex flex-col sm:flex-row items-center justify-between gap-5">
        <p className="flex items-center gap-2 font-display font-bold text-sm">
          <span className="flex items-center justify-center w-6 h-6 rounded-md bg-gradient-to-br from-blue-600 to-blue-800 text-white text-[10px]">
            AS
          </span>
          Arafat<span className="accent-text">Sunny</span>
        </p>

        <div className="flex items-center gap-5 text-ink/50">
          <a href={`mailto:${siteConfig.email}`} aria-label="Email" className="hover:text-blue-700 transition-colors">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3 8l9 6 9-6M3 6h18v12H3V6z" />
            </svg>
          </a>
          <a href={siteConfig.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-blue-700 transition-colors">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.15 1.45-2.15 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 110-4.12 2.06 2.06 0 010 4.12zM7.11 20.45H3.56V9h3.55v11.45z" />
            </svg>
          </a>
          <a href={`tel:${siteConfig.phone}`} aria-label="Phone" className="hover:text-blue-700 transition-colors">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3 5a2 2 0 012-2h2.28a1 1 0 01.97.76l1.1 4.42a1 1 0 01-.5 1.12l-1.7.85a13.06 13.06 0 006.4 6.4l.85-1.7a1 1 0 011.12-.5l4.42 1.1a1 1 0 01.76.97V19a2 2 0 01-2 2h-1C9.4 21 3 14.6 3 6V5z" />
            </svg>
          </a>
        </div>

        <p className="text-xs text-ink/40">© {new Date().getFullYear()} Arafat Sunny. All rights reserved.</p>
      </div>
    </footer>
  );
}
