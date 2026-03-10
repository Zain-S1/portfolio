"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const Hero = () => (
  <section className="relative flex flex-col items-center justify-center gap-6 text-center py-32">
    <motion.div
      className="fade-in-up"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <p className="text-sm uppercase tracking-[0.3em] text-accent">Zainab Alkholaif</p>
      <h1 className="mt-6 text-4xl md:text-6xl font-semibold leading-tight">
        Data & Business Intelligence Analyst
      </h1>
      <p className="mt-6 max-w-2xl text-base md:text-lg text-white/70">
        Turning data into insights and business decisions through rich storytelling dashboards, predictive analysis, and KPI design.
      </p>
      <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
        <Link
          href="/projects"
          className="rounded-full bg-accent px-8 py-3 text-sm font-medium text-white shadow-glow hover:opacity-90 transition"
        >
          View Projects
        </Link>
        <Link
          href="/contact"
          className="rounded-full border border-border px-8 py-3 text-sm font-medium hover:border-accent hover:text-accent transition"
        >
          Contact Me
        </Link>
      </div>
    </motion.div>
    <div className="absolute inset-x-0 top-10 -z-10 flex justify-center">
      <div className="h-64 w-64 rounded-full bg-accent/20 blur-[120px]" />
    </div>
  </section>
);

export default Hero;
