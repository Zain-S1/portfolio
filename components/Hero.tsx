"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const metrics = [
  { label: "SQL Projects", value: "35+" },
  { label: "Dashboards Built", value: "48" },
  { label: "Data Analyses", value: "120+" }
];

const Hero = () => (
  <section id="hero" className="pt-28 pb-24">
    <div className="mx-auto grid max-w-6xl gap-12 px-6 md:grid-cols-2 md:items-center">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
        <p className="text-sm uppercase tracking-[0.4em] text-black/50">Data & BI Analyst</p>
        <h1 className="mt-4 text-4xl font-semibold text-black md:text-5xl">
          Turning Data Into Business Insights
        </h1>
        <p className="mt-4 text-lg text-black/70">
          Data & Business Intelligence Analyst specializing in SQL, Python, and Power BI dashboards. I transform raw data
          into meaningful insights that help organizations make smarter decisions.
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <Link
            href="#projects"
            className="rounded-full bg-black px-6 py-3 text-sm font-semibold text-white shadow-md hover:opacity-90"
          >
            View Projects
          </Link>
          <Link
            href="#contact"
            className="rounded-full border border-black/10 px-6 py-3 text-sm font-semibold text-black hover:border-black"
          >
            Contact Me
          </Link>
        </div>
        <div className="mt-10 flex flex-wrap gap-4">
          {metrics.map((metric) => (
            <div key={metric.label} className="rounded-3xl border border-black/5 bg-white px-6 py-4 shadow-md">
              <p className="text-3xl font-semibold text-black">{metric.value}</p>
              <p className="text-xs uppercase tracking-wide text-black/50">{metric.label}</p>
            </div>
          ))}
        </div>
      </motion.div>
      <motion.div
        className="rounded-3xl border border-black/5 bg-white p-4 shadow-panel"
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <div className="rounded-2xl bg-gradient-to-br from-black to-black/70 p-6 text-white">
          <p className="text-xs uppercase tracking-[0.4em] text-white/70">hero-image-placeholder.jpg</p>
          <div className="relative mt-6 aspect-[4/5] w-full overflow-hidden rounded-2xl border border-white/10">
            <Image
              src="/hero-image-placeholder.jpg"
              alt="Artistic AI + human hand placeholder"
              fill
              className="object-cover opacity-90"
              sizes="(min-width: 768px) 50vw, 100vw"
              priority
            />
          </div>
          <p className="mt-4 text-sm text-white/70">
            Drop in your hero visual (AI + human hand) to personalize this space.
          </p>
        </div>
      </motion.div>
    </div>
  </section>
);

export default Hero;
