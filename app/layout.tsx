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
    "Fast and reliable EPCs, gas safety certificates, EICRs, floor plans, fire safety assessments and property compliance reports for landlords, agents and property owners.",
  applicationName: "SamCerts",
  keywords: [
    "property certificates",
    "EPC",
    "SAP EPC",
    "commercial EPC",
    "gas safety certificate",
    "EICR",
    "floor plans",
    "lease plans",
    "fire risk assessment",
    "PAT testing",
    "asbestos report",
  ],
  authors: [{ name: "SamCerts Ltd" }],
  creator: "SamCerts Ltd",
  publisher: "SamCerts Ltd",
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
  openGraph: {
    title: "SamCerts Ltd | Property Certificates",
    description:
      "Professional property certificates and compliance reports for landlords, estate agents, property managers and homeowners.",
    url: "https://samcerts.co.uk",
    siteName: "SamCerts Ltd",
    locale: "en_GB",
    type: "website",
    images: [
      {
        url: "/samcerts-logo.png",
        width: 1200,
        height: 630,
        alt: "SamCerts Ltd Property Certificates",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SamCerts Ltd | Property Certificates",
    description:
      "Professional property certificates and compliance reports for landlords, estate agents, property managers and homeowners.",
    images: ["/samcerts-logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
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