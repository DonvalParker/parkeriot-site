import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { connection } from "next/server";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const viewport: Viewport = {
  themeColor: "#3F5159",
  colorScheme: "light",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://parkeriot.uk"),
  title: {
    default: "ParkerIoT — Practical IoT Engineering for Connected Devices & Remote Monitoring",
    template: "%s | ParkerIoT",
  },
  description:
    "UK-based IoT engineering services — ESP32 and Raspberry Pi development, embedded Linux, MQTT, Node-RED, 4G deployment, and field support. From prototype to reliable connected systems.",
  keywords: [
    "IoT consultant UK",
    "IoT engineering services",
    "embedded systems consultant",
    "ESP32 development",
    "Raspberry Pi IoT development",
    "embedded Linux IoT",
    "IoT prototype development",
    "remote monitoring systems",
    "MQTT Node-RED IoT",
    "connected device development",
    "ParkerIoT",
  ],
  applicationName: "ParkerIoT",
  icons: {
    icon: [
      { url: "/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
  manifest: "/site.webmanifest",
  openGraph: {
    title: "ParkerIoT — Practical IoT Engineering",
    description:
      "Connected device development, embedded firmware, Linux edge systems, remote monitoring, and field deployment support.",
    siteName: "ParkerIoT",
    type: "website",
    locale: "en_GB",
  },
  twitter: {
    card: "summary_large_image",
    title: "ParkerIoT — Practical IoT Engineering",
    description:
      "Connected device development, embedded firmware, Linux edge systems, remote monitoring, and field deployment support.",
  },
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Nonces are per request, so the document cannot be served from a static cache.
  await connection();

  return (
    <html lang="en-GB" className={inter.variable}>
      <body className="flex min-h-screen flex-col bg-white">{children}</body>
    </html>
  );
}
