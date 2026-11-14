import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { connection } from "next/server";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

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
  openGraph: {
    title: "ParkerIoT — Practical IoT Engineering",
    description:
      "Connected device development, embedded firmware, Linux edge systems, remote monitoring, and field deployment support.",
    type: "website",
    locale: "en_GB",
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
