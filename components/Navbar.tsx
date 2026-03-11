"use client";

import { useEffect, useState } from "react";
import clsx from "clsx";

const navLinks = [
  { href: "#hero", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" }
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={clsx(
        "fixed inset-x-0 top-0 z-50 transition",
        scrolled ? "bg-base/95 backdrop-blur border-b border-black/5" : "bg-base"
      )}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#hero" className="font-semibold tracking-wide text-lg">
          Zainab Alkholaif
        </a>
        <div className="hidden items-center gap-6 text-sm font-medium md:flex">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="text-black/70 transition hover:text-black">
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="rounded-full bg-black px-5 py-2 text-white text-sm font-semibold shadow-md hover:opacity-90"
          >
            Contact
          </a>
        </div>
        <div className="flex md:hidden">
          <a
            href="#contact"
            className="rounded-full bg-black px-4 py-2 text-white text-sm font-semibold shadow-md"
          >
            Contact
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
