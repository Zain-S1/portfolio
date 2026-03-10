import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const contactItems = [
  {
    label: "Email",
    value: "zainab@analytics.com",
    href: "mailto:zainab@analytics.com"
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/example",
    href: "https://www.linkedin.com/in/example"
  },
  {
    label: "GitHub",
    value: "github.com/example",
    href: "https://github.com/example"
  }
];

const ContactPage = () => (
  <div className="bg-background min-h-screen text-foreground">
    <Navbar />
    <main className="mx-auto max-w-4xl px-6 pt-32 pb-20 space-y-10">
      <header className="space-y-4 text-center">
        <p className="text-sm uppercase tracking-[0.4em] text-accent">Contact</p>
        <h1 className="text-4xl font-semibold">Let’s build data clarity together.</h1>
        <p className="text-white/70">
          Reach out for opportunities in analytics, BI, or thought partnership on data experiences.
        </p>
      </header>
      <div className="grid gap-4">
        {contactItems.map((item) => (
          <a
            key={item.label}
            href={item.href}
            target={item.href.startsWith("http") ? "_blank" : undefined}
            rel={item.href.startsWith("http") ? "noreferrer" : undefined}
            className="rounded-2xl border border-border bg-muted/30 p-6 hover:border-accent transition"
          >
            <p className="text-xs uppercase tracking-[0.3em] text-white/60">{item.label}</p>
            <p className="mt-3 text-xl font-medium">{item.value}</p>
          </a>
        ))}
      </div>
    </main>
    <Footer />
  </div>
);

export default ContactPage;
