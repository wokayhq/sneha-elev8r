import "./globals.css";
import type { Metadata } from "next";
import { Instrument_Sans } from "next/font/google";

/* Instrument Sans is the only site font (--font-d / --font-m alias to it in
   globals.css). Italic is loaded so red accent words / quotes render in true
   italic rather than a synthesised slant. */
const siteFont = Instrument_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-b",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sneha Elev8r — Elevators Engineered in Hyderabad | Manufacture, Install, Service",
  description:
    "We design, build, install and maintain residential, commercial, hospital and industrial elevators across Telangana, Andhra Pradesh and Karnataka — with 3,500+ live sites backed by our own in-house service network.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={siteFont.variable}>
      <body>{children}</body>
    </html>
  );
}
