import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://samcerts.co.uk"),
  title: {
default: "SamCerts Ltd | Property Certificates",
template: "%s | SamCerts Ltd",
  },
  description:
    "Fast and reliable EPCs, gas safety certificates, EICRs, floor plans, fire safety assessments and property compliance reports.",
  openGraph: {
    title: "SAMCERTS Ltd | Property Certificates",
    description:
      "Professional property certificates and compliance reports for landlords, agents, property managers and homeowners.",
    url: "https://samcerts.co.uk",
    siteName: "SAMCERTS Ltd",
    locale: "en_GB",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-GB" className={`${geist.variable} scroll-smooth`}>
      <body>{children}</body>
    </html>
  );
}