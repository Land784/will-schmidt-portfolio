import "./globals.css";
import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { Analytics } from "@vercel/analytics/next";
import Navbar from "@/components/ui/navbar";

export const metadata: Metadata = {
  metadataBase: new URL("https://willschmidt.dev"),
  title: "William Schmidt — Software Engineer",
  description:
    "Notre Dame Computer Science student and software engineering intern. Full-stack projects, open-source contributions, and resume.",
  icons: {
    apple: "/favicon_io/apple-touch-icon.png",
  },
  openGraph: {
    title: "William Schmidt — Software Engineer",
    description:
      "Notre Dame Computer Science student and software engineering intern. Full-stack projects, open-source contributions, and resume.",
    url: "https://willschmidt.dev",
    siteName: "William Schmidt",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
                                     children,
                                   }: {
  children: React.ReactNode;
}) {
  return (
      <html lang="en" className={GeistSans.className}>
      <body>
      <Navbar />
      {children}
      <Analytics />
      </body>
      </html>
  );
}
