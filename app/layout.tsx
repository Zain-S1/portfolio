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
    "Modern single-page portfolio for Zainab Alkholaif, Data & Business Intelligence Analyst combining SQL, Python, and Power BI.",
  openGraph: {
    title: "Zainab Alkholaif | Data & BI Analyst",
    description: "Turning data into business decisions with modern BI craft.",
    url: "https://zainab-analytics.com",
    siteName: "Zainab Alkholaif Portfolio",
    locale: "en_US",
    type: "website"
  }
};

const RootLayout = ({ children }: RootLayoutProps) => (
  <html lang="en">
    <body className={inter.className}>{children}</body>
  </html>
);

export default RootLayout;
