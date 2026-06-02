import "./globals.css";
import { GeistSans } from "geist/font/sans";
import Navbar from "@/components/ui/navbar";

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
      </body>
      </html>
  );
}
