import type { Metadata } from "next";
import { Manrope, Inter } from "next/font/google";
import "./globals.css";
import "aos/dist/aos.css";

import Navbar from "@/components/layout/Navbar";
import AOSProvider from "@/components/AOSProvider";
import LocalBusinessSchema from "@/components/LocalBusinessSchema";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ridhaaluminium.com"),

  title: {
    default:
      "Ridha Aluminium & Fabrications | Premium Aluminium Solutions in Mangalore",
    template: "%s | Ridha Aluminium",
  },

  description:
    "Ridha Aluminium & Fabrications specializes in aluminium windows, sliding windows, glass facades, ACP cladding, glass railings, shower partitions, wardrobes, and premium aluminium fabrication services across Mangalore.",

  keywords: [
    "Aluminium Fabrication Mangalore",
    "Aluminium Windows",
    "Sliding Windows",
    "Glass Facades",
    "ACP Cladding",
    "Glass Railings",
    "Shower Partition",
    "Aluminium Wardrobes",
    "Commercial Aluminium Works",
    "Residential Aluminium Works",
    "Ridha Aluminium",
    "Glass Work Mangalore",
  ],

  authors: [
    {
      name: "Ridha Aluminium & Fabrications",
    },
  ],

  creator: "Ridha Aluminium & Fabrications",

  publisher: "Ridha Aluminium & Fabrications",

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title:
      "Ridha Aluminium & Fabrications | Premium Aluminium Solutions",

    description:
      "Premium aluminium fabrication services for residential and commercial projects across Mangalore.",

    url: "https://ridhaaluminium.com",

    siteName: "Ridha Aluminium & Fabrications",

    locale: "en_IN",

    type: "website",

    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Ridha Aluminium & Fabrications",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "Ridha Aluminium & Fabrications",

    description:
      "Premium Aluminium Fabrication Services in Mangalore.",

    images: ["/images/og-image.jpg"],
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${manrope.variable} ${inter.variable}`}>
  <LocalBusinessSchema />
  <AOSProvider />
  <Navbar />
  <main>{children}</main>
</body>
    </html>
  );
}