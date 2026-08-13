"use client";

import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

type Role = {
  title: string;
  company: string;
  companyType: string;
  period: string;
  current?: boolean;
  achievements: string[];
};

const roles: Role[] = [
  {
    title: "Sr. Executive, Digital Marketing & Paid Media Buyer",
    company: "Cloud Bridge ISC",
    companyType: "Educational Consultant",
    period: "Feb 2026 — Present",
    current: true,
    achievements: [
      "Plan and manage paid media campaigns on Meta (Facebook, Instagram) and Google Ads for student lead generation",
      "Optimize campaign targeting, creatives, and bidding to reduce cost-per-lead (CPL)",
      "Collaborate with admission teams to improve lead-to-enrollment conversion",
      "Track performance through analytics and reporting dashboards to continuously improve ROI",
    ],
  },
  {
    title: "Digital Marketing Specialist",
    company: "TestPrep Center",
    companyType: "Educational Institution",
    period: "Nov 2024 — Jan 2026",
    achievements: [
      "Increased student enrollments by 26% through an Andromeda-based Meta campaign",
      "Reduced CPL by 20% while improving lead quality using AI-driven bidding and creative testing",
      "Scaled lead generation across IELTS, SAT, PTE, and English programs",
      "Strengthened brand authority and conversion rates via optimized landing pages and ad creatives",
    ],
  },
  {
    title: "Sr. Executive, Digital Marketing & Branding",
    company: "MetaConnect Ltd.",
    companyType: "Advertising & Marketing Agency",
    period: "May 2021 — Oct 2024",
    achievements: [
      "Drove a 27% sales uplift for clients across multiple industries (banking, paints, education, lifestyle)",
      "Increased campaign engagement rates by 52% for lifestyle brand clients",
      "Improved lead conversion rates by 23% through targeted campaigns for UBL",
      "Generated 300+ successful hires via social media recruitment campaigns",
      "Delivered 35% traffic growth for banking and paint sector clients",
      "Created 500+ high-performing ad creatives and content pieces",
    ],
  },
  {
    title: "Executive, Digital Marketing & Sales",
    company: "LCBS Dhaka Ltd.",
    companyType: "Chartered University",
    period: "Mar 2020 — Apr 2021",
    achievements: [
      "Developed and managed multi-channel digital marketing campaigns for student recruitment",
      "Increased student inquiries through targeted social media campaigns",
      "Improved website engagement via optimized content and design updates",
      "Boosted enrollment rates through digital sales and conversion strategies",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 sm:py-32 border-t border-black/5 bg-white">
      <div className="max-w-4xl mx-auto px-5 sm:px-8">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          className="max-w-xl mb-16"
        >
          <p className="font-mono text-xs uppercase tracking-widest text-blue-700 mb-3">Career</p>
          <h2 className="font-display font-bold text-3xl sm:text-4xl tracking-tight">
            6+ years of measurable growth
          </h2>
          <p className="mt-4 text-ink/60 leading-relaxed">
            From agency-side multi-industry campaigns to in-house lead generation — a track record
            of reducing acquisition costs and driving revenue across banking, education, and lifestyle brands.
          </p>
        </motion.div>

        <div className="relative">
          <div className="absolute left-[7px] top-2 bottom-2 w-px bg-black/10 sm:left-[7px]" />

          <div className="space-y-12">
            {roles.map((role) => (
              <motion.div
                key={role.company + role.period}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeUp}
                className="relative pl-8"
              >
                <span
                  className={`absolute left-0 top-1.5 w-4 h-4 rounded-full border-2 ${
                    role.current
                      ? "bg-blue-700 border-blue-700"
                      : "bg-white border-blue-300"
                  }`}
                />

                <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 mb-1">
                  <h3 className="font-display font-semibold text-lg">{role.title}</h3>
                  <span className="font-mono text-xs text-ink/40 whitespace-nowrap">{role.period}</span>
                </div>
                <p className="text-sm text-ink/60 mb-4">
                  {role.company} <span className="text-ink/30">·</span> {role.companyType}
                  {role.current && (
                    <span className="ml-2 inline-block font-mono text-[10px] uppercase tracking-widest text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full align-middle">
                      Current
                    </span>
                  )}
                </p>

                <ul className="space-y-2 text-sm text-ink/65 leading-relaxed">
                  {role.achievements.map((a) => (
                    <li key={a} className="flex gap-2.5">
                      <span className="accent-text mt-0.5 shrink-0">—</span>
                      {a}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          className="mt-16 grid sm:grid-cols-3 gap-4"
        >
          <div className="rounded-2xl border border-black/8 p-6 bg-paper">
            <p className="font-mono text-xs uppercase tracking-widest text-ink/40 mb-2">Education</p>
            <p className="font-semibold text-sm">BSc in Computer Science &amp; Engineering</p>
            <p className="text-sm text-ink/55">Bangladesh University · Enrolled</p>
          </div>
          <div className="rounded-2xl border border-black/8 p-6 bg-paper">
            <p className="font-mono text-xs uppercase tracking-widest text-ink/40 mb-2">Diploma</p>
            <p className="font-semibold text-sm">Diploma in Computer Technology</p>
            <p className="text-sm text-ink/55">AITVET · 3.50/4.00 · 2021</p>
          </div>
          <div className="rounded-2xl border border-black/8 p-6 bg-paper">
            <p className="font-mono text-xs uppercase tracking-widest text-ink/40 mb-2">Certifications</p>
            <p className="text-sm text-ink/65 leading-relaxed">
              Google Digital Garage · DV360 (Google Digital Academy) · Meta Social Media Marketing Blueprint
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
