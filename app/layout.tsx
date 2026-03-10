import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/globals.css";

type RootLayoutProps = {
  children: React.ReactNode;
};

const inter = Inter({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  title: "Zainab Alkholaif | Data & BI Analyst",
  description:
    "Portfolio website for Zainab Alkholaif, Data & Business Intelligence Analyst crafting insight-driven solutions.",
  openGraph: {
    title: "Zainab Alkholaif | Data & BI Analyst",
    description:
      "Data & Business Intelligence Analyst specializing in SQL, Python, Power BI, and dashboard design.",
    url: "https://zainab-analytics.com",
    siteName: "Zainab Alkholaif Portfolio",
    locale: "en_US",
    type: "website"
  },
  metadataBase: new URL("https://zainab-analytics.com")
};

const RootLayout = ({ children }: RootLayoutProps) => (
  <html lang="en" className="dark">
    <body className={inter.className}>{children}</body>
  </html>
);

export default RootLayout;
