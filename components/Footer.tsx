const Footer = () => (
  <footer className="py-10">
    <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 text-sm text-black/60 md:flex-row md:items-center md:justify-between">
      <p>Zainab Alkholaif</p>
      <p>© {new Date().getFullYear()} All rights reserved.</p>
      <div className="flex gap-4">
        <a href="https://github.com/Zain-S1" target="_blank" rel="noreferrer" className="hover:text-black">
          GitHub
        </a>
        <a href="https://www.linkedin.com/in/zainab-s-alkholaif" target="_blank" rel="noreferrer" className="hover:text-black">
          LinkedIn
        </a>
        <a href="mailto:z.alkholaif@gmail.com" className="hover:text-black">
          Email
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
