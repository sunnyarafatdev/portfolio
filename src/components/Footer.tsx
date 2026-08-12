import { siteConfig } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="border-t border-black/5 py-10">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 flex flex-col sm:flex-row items-center justify-between gap-5">
        <p className="font-display font-bold text-sm">
          Arafat<span className="accent-text">Sunny</span>
        </p>

        <div className="flex items-center gap-5 text-ink/50">
          <a href={`mailto:${siteConfig.email}`} aria-label="Email" className="hover:text-blue-700 transition-colors">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3 8l9 6 9-6M3 6h18v12H3V6z" />
            </svg>
          </a>
          {/* Add your real LinkedIn / GitHub URLs here */}
          <a href="#" aria-label="LinkedIn" className="hover:text-blue-700 transition-colors">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.15 1.45-2.15 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 110-4.12 2.06 2.06 0 010 4.12zM7.11 20.45H3.56V9h3.55v11.45z" />
            </svg>
          </a>
          <a href="#" aria-label="GitHub" className="hover:text-blue-700 transition-colors">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.58 2 12.25c0 4.53 2.87 8.37 6.84 9.73.5.1.68-.22.68-.49v-1.92c-2.78.62-3.37-1.36-3.37-1.36-.46-1.2-1.11-1.52-1.11-1.52-.91-.64.07-.62.07-.62 1 .07 1.53 1.06 1.53 1.06.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.32.1-2.75 0 0 .84-.28 2.75 1.05a9.29 9.29 0 015 0c1.91-1.33 2.75-1.05 2.75-1.05.55 1.43.2 2.49.1 2.75.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.8-4.57 5.06.36.32.68.94.68 1.9v2.82c0 .27.18.6.69.49A10.26 10.26 0 0022 12.25C22 6.58 17.52 2 12 2z" />
            </svg>
          </a>
        </div>

        <p className="text-xs text-ink/40">© {new Date().getFullYear()} Arafat Sunny. All rights reserved.</p>
      </div>
    </footer>
  );
}
