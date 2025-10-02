// app/layout.tsx
import type { Metadata } from "next";
import { Baskervville, Convergence } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";

export const metadata: Metadata = {
  title: "NPBarbers",
  description: "Fresh cuts in a natural, modern space.",
};

const baskervville = Baskervville({
  weight: "400", 
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-baskervville",
});

const convergence = Convergence({
  weight: "400", 
  subsets: ["latin"],
  display: "swap",
  variable: "--font-convergence",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${baskervville.variable} ${convergence.variable}`}
    >
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
