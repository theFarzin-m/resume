import type { Metadata } from "next";
import { SpeedInsights } from "@vercel/speed-insights/next";

import "./globals.css";
import SnowfallComponent from "@/components/Snowfall";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.farzinabbasi.ir"),

  title: "Farzin Abbasi | Web Developer",

  description:
    "Farzin Abbasi is a web developer specializing in React, Next.js, Django, and modern web technologies.",

  alternates: {
    canonical: "/",
  },
  keywords: [
    "Farzin Abbasi",
    "Frontend Developer",
    "Backend Developer",
    "React Developer",
    "Next.js Developer",
    "Django Developer",
    "Full Stack Developer",
    "React",
    "Next.js",
    "Django",
  ],

  openGraph: {
    type: "website",
    url: "https://www.farzinabbasi.ir/",
    title: "Farzin Abbasi | Web Developer",
    description:
      "Portfolio of Farzin Abbasi, a web developer specializing in React, Next.js, Django, and modern web technologies.",
    siteName: "Farzin Abbasi",
    locale: "en_US",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Farzin Abbasi - Web Developer",
      },
    ],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body className="min-h-screen">
        <SnowfallComponent>
          <Navbar />
        </SnowfallComponent>
        <main>
          {children}
          <SpeedInsights />
        </main>
      </body>
    </html>
  );
}
