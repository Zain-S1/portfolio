"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const highlights = ["SQL + Python Workflows", "Power BI Dashboards", "KPI Storytelling"];
const partnerLogos = ["Mercury", "Ramp", "Hex", "Vercel", "Descript", "Cash App", "Runway"];

const Hero = () => (
  <section id="hero" className="relative overflow-hidden pt-28 pb-24">
    <div className="absolute inset-0">
      <Image
        src="/ai-hand-background.jpg"
        alt="AI and human hand reaching"
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-white/95 via-white/85 to-white/92 backdrop-blur-sm" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(0,0,0,0.06),_transparent_60%)] opacity-70" />
    </div>

    <div className="relative mx-auto flex max-w-4xl flex-col items-center gap-8 px-6 text-center text-black">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
        <p className="text-sm uppercase tracking-[0.4em] text-black/60">Data & BI Analyst</p>
        <h1 className="mt-4 text-4xl font-semibold md:text-6xl">Turning Data Into Business Insights</h1>
        <p className="mt-4 text-lg text-black/70">
          Data & Business Intelligence Analyst specializing in SQL, Python, and Power BI dashboards. I transform raw data
          into meaningful insights that help organizations make smarter decisions.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          {highlights.map((item) => (
            <span
              key={item}
              className="rounded-full border border-black/10 bg-white/80 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-black/60"
            >
              {item}
            </span>
          ))}
        </div>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link
            href="#projects"
            className="rounded-full bg-black px-7 py-3 text-sm font-semibold text-white shadow-md hover:opacity-90"
          >
            View Projects
          </Link>
          <Link
            href="#contact"
            className="rounded-full border border-black/10 bg-white/80 px-7 py-3 text-sm font-semibold text-black hover:border-black"
          >
            Contact Me
          </Link>
        </div>
      </motion.div>

      <motion.div
        className="flex w-full flex-col items-center gap-3 rounded-3xl border border-black/5 bg-white/80 px-6 py-5 shadow-sm"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <p className="text-xs uppercase tracking-[0.4em] text-black/50">Trusted by teams of every scale</p>
        <div className="flex flex-wrap items-center justify-center gap-6 text-sm font-semibold text-black/70">
          {partnerLogos.map((logo) => (
            <span key={logo} className="tracking-wide">
              {logo}
            </span>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);

export default Hero;
