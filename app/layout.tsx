import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "GoKeenn Ltd — IT Solutions for Modern Business",
    template: "%s | GoKeenn Ltd",
  },
  description:
    "GoKeenn Ltd delivers enterprise-grade IT infrastructure, networking, security surveillance, software deployment, and managed technology solutions across Ghana.",
  keywords: [
    "IT solutions Ghana",
    "IT infrastructure deployment",
    "network management",
    "security surveillance",
    "software deployment",
    "IT equipment rental",
    "GoKeenn",
  ],
  openGraph: {
    type: "website",
    locale: "en_GH",
    siteName: "GoKeenn Ltd",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white text-slate-900`}
        suppressHydrationWarning
      >
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
