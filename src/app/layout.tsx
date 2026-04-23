import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL('https://solarspectrum.com.au'),
  title: "Solar Spectrum | Renewable Energy Solutions",
  description: "Solar & Battery, Heating & Cooling, Heat Pump & EV Chargers. The Smarter Way to power your home.",
  icons: {
    icon: '/favicon.png',
    shortcut: '/favicon.png',
    apple: '/apple-icon.png',
  },
  openGraph: {
    title: "Solar Spectrum | Renewable Energy Solutions",
    description: "Solar & Battery, Heating & Cooling, Heat Pump & EV Chargers. The Smarter Way to power your home.",
    url: "https://solarspectrum.com.au",
    siteName: "Solar Spectrum",
    images: [
      {
        url: "/opengraph-image.png",
        width: 800,
        height: 600,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Solar Spectrum | Renewable Energy Solutions",
    description: "Solar & Battery, Heating & Cooling, Heat Pump & EV Chargers. The Smarter Way to power your home.",
    images: ["/opengraph-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
