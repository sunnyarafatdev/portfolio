"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-32 pb-16 sm:pt-40">
      <div className="orb w-[420px] h-[420px] -top-20 -left-32" />
      <div className="dot-grid absolute inset-0" />

      <div className="relative max-w-6xl mx-auto px-5 sm:px-8 grid lg:grid-cols-2 gap-14 items-center">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center lg:text-left"
        >
          <motion.p
            variants={fadeUp}
            className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-blue-800 bg-blue-50 border border-blue-100 rounded-full px-4 py-1.5 mb-7"
          >
            Digital Marketing Specialist · Dhaka, Bangladesh
          </motion.p>

          <motion.h1
            variants={fadeUp}
            className="font-display font-extrabold text-4xl sm:text-5xl leading-[1.1] tracking-tight"
          >
            I grow brands through <span className="accent-text">data-driven paid media.</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mt-6 text-lg text-ink/60 max-w-xl mx-auto lg:mx-0 leading-relaxed"
          >
            Digital Marketing Specialist &amp; Paid Media Buyer at Cloud Bridge ISC, running campaigns
            across Meta, Google, TikTok, LinkedIn, X, and Pinterest — with the conversion tracking to
            prove what&apos;s working. I also build and understand the websites behind the campaigns.
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="mt-9 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
          >
            <a
              href="#work"
              className="bg-blue-700 hover:bg-blue-800 transition-colors text-white font-semibold px-7 py-3.5 rounded-full shadow-lg shadow-blue-900/10 w-full sm:w-auto text-center"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="font-semibold px-7 py-3.5 rounded-full border border-ink/15 hover:border-ink/30 hover:bg-black/[0.02] transition-colors w-full sm:w-auto text-center"
            >
              Get in Touch
            </a>
          </motion.div>

          <motion.div variants={fadeUp} className="mt-11 pt-7 border-t border-black/5">
            <p className="font-mono text-[11px] uppercase tracking-widest text-ink/35 mb-4">
              Platforms &amp; tools
            </p>
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-x-7 gap-y-3 text-sm font-semibold text-ink/60">
              <span>Meta Ads</span>
              <span>Google Ads</span>
              <span>TikTok Ads</span>
              <span>LinkedIn Ads</span>
              <span>GTM</span>
              <span>React / Next.js</span>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative flex justify-center lg:justify-end"
        >
          <div className="relative w-full max-w-sm">
            <div className="aspect-[4/5] rounded-3xl overflow-hidden border border-black/8 shadow-2xl shadow-blue-900/10 bg-blue-50 relative">
              <Image
                src="/headshot.jpg"
                alt="Portrait of Arafat Sunny, Digital Marketing Specialist"
                fill
                sizes="(max-width: 640px) 90vw, 400px"
                className="object-cover"
                priority
              />
            </div>

            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -left-6 sm:-left-10 bottom-8 bg-white rounded-2xl border border-black/8 shadow-xl shadow-black/5 px-5 py-4 w-56"
            >
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-blue-50 flex items-center justify-center shrink-0">
                  <svg className="w-4.5 h-4.5 accent-text" width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 19V6l7 6-7 7z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-semibold leading-tight">Paid Media Buyer</p>
                  <p className="text-xs text-ink/50 leading-tight">since Feb 2026, Cloud Bridge ISC</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: -2.5 }}
              className="absolute -right-4 sm:-right-8 top-8 bg-white rounded-full border border-black/8 shadow-lg shadow-black/5 px-4 py-2.5 flex items-center gap-2"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              <span className="text-xs font-semibold text-ink/70">Open to opportunities</span>
            </motion.div>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative max-w-4xl mx-auto px-5 sm:px-8 mt-16 sm:mt-20"
      >
        <div className="grid grid-cols-3 divide-x divide-black/8 border-t border-b border-black/8 py-8">
          <div className="text-center px-2">
            <p className="font-display font-extrabold text-3xl sm:text-4xl accent-text">6</p>
            <p className="mt-1 text-xs sm:text-sm text-ink/55 font-medium">Ad platforms managed</p>
          </div>
          <div className="text-center px-2">
            <p className="font-display font-extrabold text-3xl sm:text-4xl accent-text">6+</p>
            <p className="mt-1 text-xs sm:text-sm text-ink/55 font-medium">Years in digital marketing</p>
          </div>
          <div className="text-center px-2">
            <p className="font-display font-extrabold text-3xl sm:text-4xl accent-text">5</p>
            <p className="mt-1 text-xs sm:text-sm text-ink/55 font-medium">Websites built &amp; launched</p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
