"use client";

import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import { siteConfig } from "@/lib/site";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("failed");
      setStatus("sent");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="py-24 sm:py-32 border-t border-black/5 bg-white relative overflow-hidden">
      <div className="orb w-[360px] h-[360px] -bottom-24 -left-20" />
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeUp}
        className="relative max-w-2xl mx-auto px-5 sm:px-8 text-center"
      >
        <p className="font-mono text-xs uppercase tracking-widest text-blue-700 mb-3">Contact</p>
        <h2 className="font-display font-bold text-3xl sm:text-4xl tracking-tight mb-4">Let&apos;s talk</h2>
        <p className="text-ink/60 mb-10">
          Open to digital marketing roles and opportunities — reach out anytime.
        </p>

        <form
          onSubmit={handleSubmit}
          className="text-left space-y-5 bg-paper border border-black/8 rounded-2xl p-7 sm:p-9"
        >
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-ink/70 mb-1.5">Name</label>
            <input
              type="text" id="name" name="name" required placeholder="Your name"
              className="w-full rounded-lg border border-black/12 bg-white px-4 py-3 text-sm focus:border-blue-400 outline-none transition-colors"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-ink/70 mb-1.5">Email</label>
            <input
              type="email" id="email" name="email" required placeholder="you@example.com"
              className="w-full rounded-lg border border-black/12 bg-white px-4 py-3 text-sm focus:border-blue-400 outline-none transition-colors"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-ink/70 mb-1.5">Message</label>
            <textarea
              id="message" name="message" rows={4} required placeholder="Let me know what you're reaching out about"
              className="w-full rounded-lg border border-black/12 bg-white px-4 py-3 text-sm focus:border-blue-400 outline-none transition-colors resize-none"
            />
          </div>
          <button
            type="submit"
            disabled={status === "sending"}
            className="w-full bg-blue-700 hover:bg-blue-800 disabled:opacity-60 transition-colors text-white font-semibold px-6 py-3.5 rounded-full"
          >
            {status === "sending" ? "Sending…" : "Send Message"}
          </button>
          {status === "sent" && (
            <p className="text-xs text-emerald-600 text-center">Thanks — your message is on its way.</p>
          )}
          {status === "error" && (
            <p className="text-xs text-rose-600 text-center">
              Couldn&apos;t send that — email me directly at {siteConfig.email}.
            </p>
          )}
        </form>

        <div className="mt-10 text-sm text-ink/50">
          or email me directly at{" "}
          <a href={`mailto:${siteConfig.email}`} className="accent-text font-medium hover:underline">
            {siteConfig.email}
          </a>
        </div>
      </motion.div>
    </section>
  );
}
