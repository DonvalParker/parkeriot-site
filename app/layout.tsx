import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  metadataBase: new URL("https://parkeriot.uk"),
  title: {
    default: "ParkerIoT — Embedded Firmware, IoT & Field Systems Engineering",
    template: "%s | ParkerIoT",
  },
  description:
    "ParkerIoT Limited is a Lancaster-based engineering company specialising in embedded firmware, low-power IoT, Linux edge systems and real-world field deployment.",
  keywords: [
    "embedded firmware",
    "IoT",
    "edge computing",
    "LoRaWAN",
    "ESP32",
    "Raspberry Pi",
    "field systems engineering",
    "ParkerIoT",
    "Lancaster",
  ],
  openGraph: {
    title: "ParkerIoT",
    description:
      "Embedded firmware, IoT & field systems engineering — from prototype to field deployment.",
    type: "website",
    locale: "en_GB",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-GB" className={inter.variable}>
      <body className="flex min-h-screen flex-col bg-white">{children}</body>
    </html>
  );
}
