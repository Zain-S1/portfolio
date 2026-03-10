import Link from "next/link";

const Footer = () => (
  <footer className="border-t border-border/40 py-10 mt-20 text-sm text-white/60">
    <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 md:flex-row md:items-center md:justify-between">
      <p>© {new Date().getFullYear()} Zainab Alkholaif. Crafted with precision.</p>
      <div className="flex items-center gap-4">
        <Link href="https://github.com/example" target="_blank" rel="noreferrer" className="hover:text-accent">
          GitHub
        </Link>
        <Link href="https://www.linkedin.com/in/example" target="_blank" rel="noreferrer" className="hover:text-accent">
          LinkedIn
        </Link>
        <Link href="mailto:zainab@analytics.com" className="hover:text-accent">
          Email
        </Link>
      </div>
    </div>
  </footer>
);

export default Footer;
