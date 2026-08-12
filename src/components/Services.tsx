"use client";

import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Services() {
  return (
    <section id="services" className="py-24 sm:py-32 border-t border-black/5">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          className="max-w-xl mb-16"
        >
          <p className="font-mono text-xs uppercase tracking-widest text-blue-700 mb-3">What I do</p>
          <h2 className="font-display font-bold text-3xl sm:text-4xl tracking-tight">
            Digital marketing, first and foremost
          </h2>
          <p className="mt-4 text-ink/60 leading-relaxed">
            My core skill is running paid media that performs and can be measured. Alongside that,
            I bring SEO and web development knowledge — a combination that&apos;s rare in a marketer.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            className="group rounded-2xl border-2 border-blue-100 p-8 hover:shadow-xl hover:shadow-blue-900/[0.06] hover:-translate-y-1 transition-all duration-300 bg-white sm:col-span-2"
          >
            <div className="flex items-start justify-between mb-6">
              <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center">
                <svg className="w-6 h-6 accent-text" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 19V6l7 6-7 7z" />
                </svg>
              </div>
              <span className="font-mono text-[10px] uppercase tracking-widest text-blue-700 bg-blue-50 px-2.5 py-1 rounded-full">
                Core skill
              </span>
            </div>
            <h3 className="font-display font-semibold text-xl mb-3">Digital Marketing &amp; Paid Media</h3>
            <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-2.5 text-sm text-ink/65 leading-relaxed">
              <li className="flex gap-2.5"><span className="accent-text mt-0.5">—</span>Paid campaigns across Meta, Google Ads (PPC), TikTok, LinkedIn, X, and Pinterest</li>
              <li className="flex gap-2.5"><span className="accent-text mt-0.5">—</span>Conversion tracking: Meta Pixel and Conversions API (CAPI)</li>
              <li className="flex gap-2.5"><span className="accent-text mt-0.5">—</span>Server-side tracking via GTM</li>
              <li className="flex gap-2.5"><span className="accent-text mt-0.5">—</span>Audience testing and budget optimization</li>
            </ul>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            className="group rounded-2xl border border-black/8 p-8 hover:shadow-xl hover:shadow-blue-900/[0.05] hover:-translate-y-1 transition-all duration-300 bg-white"
          >
            <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center mb-6">
              <svg className="w-6 h-6 accent-text" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M21 21l-4.35-4.35M17 11a6 6 0 11-12 0 6 6 0 0112 0z" />
              </svg>
            </div>
            <h3 className="font-display font-semibold text-xl mb-3">SEO</h3>
            <ul className="space-y-2.5 text-sm text-ink/65 leading-relaxed">
              <li className="flex gap-2.5"><span className="accent-text mt-0.5">—</span>On-page SEO: keyword-mapped content, meta titles &amp; descriptions, JSON-LD structured data</li>
              <li className="flex gap-2.5"><span className="accent-text mt-0.5">—</span>Technical SEO: Core Web Vitals, crawlability, sitemaps, canonical tags</li>
              <li className="flex gap-2.5"><span className="accent-text mt-0.5">—</span>Off-page SEO: link-building, Search Console &amp; Bing Webmaster Tools</li>
            </ul>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            className="group rounded-2xl border border-black/8 p-8 hover:shadow-xl hover:shadow-blue-900/[0.05] hover:-translate-y-1 transition-all duration-300 bg-white"
          >
            <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center mb-6">
              <svg className="w-6 h-6 accent-text" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M17 8l4 4-4 4M7 8l-4 4 4 4M14 4l-4 16" />
              </svg>
            </div>
            <h3 className="font-display font-semibold text-xl mb-3">Web Design &amp; Development</h3>
            <ul className="space-y-2.5 text-sm text-ink/65 leading-relaxed">
              <li className="flex gap-2.5"><span className="accent-text mt-0.5">—</span>Custom front-end builds with React/Next.js and Tailwind, plus static sites</li>
              <li className="flex gap-2.5"><span className="accent-text mt-0.5">—</span>Back-end integrations: forms, APIs, database-backed features</li>
              <li className="flex gap-2.5"><span className="accent-text mt-0.5">—</span>AI-assisted development workflow to ship production sites faster</li>
            </ul>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            className="group rounded-2xl border border-black/8 p-8 hover:shadow-xl hover:shadow-blue-900/[0.05] hover:-translate-y-1 transition-all duration-300 bg-white sm:col-span-2"
          >
            <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center mb-6">
              <svg className="w-6 h-6 accent-text" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M4 6h16M4 12h16M4 18h7" />
              </svg>
            </div>
            <h3 className="font-display font-semibold text-xl mb-3">WordPress &amp; Shopify Customization</h3>
            <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-2.5 text-sm text-ink/65 leading-relaxed">
              <li className="flex gap-2.5"><span className="accent-text mt-0.5">—</span>Shopify theme customization: redesigns, custom sections, review integrations</li>
              <li className="flex gap-2.5"><span className="accent-text mt-0.5">—</span>WordPress/WooCommerce store builds and funnel setup (CartFlows)</li>
              <li className="flex gap-2.5"><span className="accent-text mt-0.5">—</span>Site speed, plugin cleanup, conversion-focused UX fixes</li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
