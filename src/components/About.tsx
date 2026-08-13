"use client";

import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const skills = [
  { label: "Paid Media & Performance Marketing", value: 95, primary: true },
  { label: "Meta Ads (Advantage+, Andromeda, CAPI)", value: 92 },
  { label: "Google Ads, SEM & Analytics (GA4)", value: 88 },
  { label: "SEO (on/off-page, technical)", value: 85 },
  { label: "Full-Funnel Strategy & ROI Optimization", value: 90 },
  { label: "Web Development (React/Next.js)", value: 75 },
];

export default function About() {
  return (
    <section id="about" className="py-24 sm:py-32 border-t border-black/5">
      <div className="max-w-5xl mx-auto px-5 sm:px-8 grid md:grid-cols-5 gap-14 items-start">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          className="md:col-span-3"
        >
          <p className="font-mono text-xs uppercase tracking-widest text-blue-700 mb-3">About</p>
          <h2 className="font-display font-bold text-3xl sm:text-4xl tracking-tight mb-6">
            A digital marketer who understands the web
          </h2>
          <p className="text-ink/65 leading-relaxed mb-4">
            I&apos;m Arafat Sunny, a Digital Marketing Specialist and Paid Media Buyer based in Dhaka,
            Bangladesh, with 6+ years driving scalable growth across banking, paints, education, and
            lifestyle brands. I currently work with Cloud Bridge ISC, a study abroad consultancy,
            since February 2026.
          </p>
          <p className="text-ink/65 leading-relaxed mb-4">
            My core work is planning and running full-funnel paid campaigns — Meta, Google, TikTok —
            and proving results through proper conversion tracking (Pixel, CAPI, GTM, GA4). Alongside
            that, I build and ship independent web projects, from static SEO-driven sites to Shopify
            and WordPress stores.
          </p>
          <p className="text-ink/65 leading-relaxed">
            That combination is rare: most marketers can&apos;t code, and most developers don&apos;t
            think about search intent or ad tracking. I understand both sides of a campaign — the ad
            and the page it lands on — which is how I&apos;ve driven results like a 27% sales uplift
            for agency clients and a 26% enrollment increase through a single campaign.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          className="md:col-span-2 bg-white border border-black/8 rounded-2xl p-7"
        >
          <p className="font-mono text-xs uppercase tracking-widest text-ink/40 mb-5">Skills</p>
          <div className="space-y-5">
            {skills.map((s) => (
              <div key={s.label}>
                <div className="flex items-center justify-between mb-1.5">
                  <span className={`text-sm ${s.primary ? "font-semibold" : "font-medium"}`}>{s.label}</span>
                  <span className="text-xs font-mono text-ink/40">{s.value}%</span>
                </div>
                <div className="skill-bar">
                  <motion.div
                    className={`skill-bar-fill ${s.primary ? "primary" : ""}`}
                    initial={{ width: 0 }}
                    whileInView={{ width: `${s.value}%` }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
                  />
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
