"use client";

import { motion } from "framer-motion";
import Image from "next/image";

type Project = {
  title: string;
  description: string;
  tags: string[];
  href?: string;
  linkLabel?: string;
  image: string;
};

const projects: Project[] = [
  {
    title: "Cloud Bridge ISC",
    description:
      "Current role at this study abroad consultancy — running paid campaigns, conversion tracking, and website improvements.",
    tags: ["Paid Media", "2026"],
    href: "https://cloudbridge.info",
    linkLabel: "View Live",
    image: "/work/cloudbridge.svg",
  },
  {
    title: "comfortcoresupply.com",
    description:
      "USA client — Shopify theme customization plus a full Meta Pixel and server-side conversion tracking (CAPI) setup.",
    tags: ["Shopify", "2025"],
    href: "https://comfortcoresupply.com",
    linkLabel: "View Live",
    image: "/work/comfortcore.svg",
  },
  {
    title: "WooCommerce digital product store",
    description:
      "Diagnosed and fixed inaccurate Facebook Purchase event tracking on a WooCommerce course store.",
    tags: ["WordPress", "CartFlows"],
    image: "/work/woocommerce.svg",
  },
  {
    title: "calculatorboss.com",
    description:
      "200+ free calculators, built and ranked from zero with full technical and on-page SEO.",
    tags: ["SEO", "2026"],
    href: "https://calculatorboss.com",
    linkLabel: "View Live",
    image: "/work/calculatorboss.svg",
  },
  {
    title: "LCBS Dhaka office website",
    description: "My first office project — WordPress customization for LCBS Dhaka's office website.",
    tags: ["WordPress", "2020"],
    href: "https://lcbsdhaka.com",
    linkLabel: "View Live",
    image: "/work/lcbs.svg",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Work() {
  return (
    <section id="work" className="py-24 sm:py-32 border-t border-black/5 bg-white">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          className="max-w-xl mb-16"
        >
          <p className="font-mono text-xs uppercase tracking-widest text-blue-700 mb-3">Case studies</p>
          <h2 className="font-display font-bold text-3xl sm:text-4xl tracking-tight">Recent work</h2>
          <p className="mt-4 text-ink/60 leading-relaxed">
            Marketing and web work — from my day-to-day role to independent projects.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => {
            const CardInner = (
              <>
                <div className="aspect-[4/3] overflow-hidden bg-blue-50 relative">
                  <Image
                    src={p.image}
                    alt={`${p.title} screenshot placeholder`}
                    fill
                    sizes="(max-width: 768px) 90vw, 360px"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {p.tags.map((t) => (
                      <span
                        key={t}
                        className="font-mono text-[10.5px] tracking-wide bg-blue-50 text-blue-700 px-2 py-1 rounded-md"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <h3 className="font-display font-semibold text-lg mb-2">{p.title}</h3>
                  <p className="text-sm text-ink/60 leading-relaxed mb-4">{p.description}</p>
                  {p.href ? (
                    <span className="inline-flex items-center gap-1.5 text-sm font-semibold accent-text">
                      {p.linkLabel}
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M7 7h10v10" />
                      </svg>
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-ink/40">
                      Client confidential
                    </span>
                  )}
                </div>
              </>
            );

            const cardClasses =
              "group relative bg-paper rounded-2xl border border-black/8 overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-blue-900/[0.1] hover:border-blue-600";

            return (
              <motion.div
                key={p.title}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeUp}
              >
                {p.href ? (
                  <a href={p.href} target="_blank" rel="noopener noreferrer" className={`${cardClasses} block`}>
                    {CardInner}
                  </a>
                ) : (
                  <div className={cardClasses}>{CardInner}</div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
