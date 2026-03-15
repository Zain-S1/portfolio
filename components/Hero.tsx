"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const highlights = ["SQL + Python Workflows", "Power BI Dashboards", "KPI Storytelling"];
const partnerLogos = ["Mercury", "Ramp", "Hex", "Vercel", "Descript", "Cash App", "Runway"];

const Hero = () => (
  <section id="hero" className="relative overflow-hidden pt-40 pb-60">
    <div className="absolute inset-0">
      <Image
        src="/ai-hand-background.png"
        alt="AI and human hand reaching"
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-white/95 via-white/85 to-white/92 backdrop-blur-sm" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(0,0,0,0.06),_transparent_60%)] opacity-70" />
    </div>

    <div className="relative mx-auto mt-20 flex max-w-4xl flex-col items-center gap-8 px-6 text-center text-black">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
        <p className="text-sm uppercase tracking-[0.4em] text-black/60">Data & BI Analyst</p>
        <h1 className="mt-4 text-4xl font-semibold md:text-6xl">Turning Data Into Business Insights</h1>
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
    </div>
  </section>
);

export default Hero;
