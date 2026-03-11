const contactItems = [
  { label: "Email", value: "zainab@analytics.com", href: "mailto:zainab@analytics.com" },
  { label: "LinkedIn", value: "linkedin.com/in/example", href: "https://www.linkedin.com/in/example" },
  { label: "GitHub", value: "github.com/example", href: "https://github.com/example" }
];

const Contact = () => (
  <section id="contact" className="py-12">
    <div className="mx-auto max-w-6xl px-6">
      <div className="rounded-3xl border border-black/5 bg-white p-10 shadow-panel">
        <p className="text-sm uppercase tracking-[0.4em] text-black/50">Contact</p>
        <div className="mt-4 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-3xl font-semibold text-black">Let's work together.</h2>
            <p className="mt-2 text-black/60">
              Reach out for collaborations, analytics leadership roles, or data storytelling sprints.
            </p>
          </div>
          <div className="flex gap-3">
            <a href="mailto:zainab@analytics.com" className="rounded-full bg-black px-5 py-3 text-sm font-semibold text-white">
              Email
            </a>
            <a
              href="https://www.linkedin.com/in/example"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-black/10 px-5 py-3 text-sm font-semibold text-black"
            >
              LinkedIn
            </a>
          </div>
        </div>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {contactItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              target={item.href.startsWith("http") ? "_blank" : undefined}
              rel={item.href.startsWith("http") ? "noreferrer" : undefined}
              className="rounded-2xl border border-black/5 bg-base px-5 py-6"
            >
              <p className="text-xs uppercase tracking-[0.3em] text-black/50">{item.label}</p>
              <p className="mt-3 text-lg font-semibold text-black">{item.value}</p>
            </a>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default Contact;
