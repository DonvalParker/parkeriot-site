import type { Metadata } from "next";
import Image from "next/image";
import logo from "@/public/parkeriot-logo.png";

export const metadata: Metadata = {
  title: "Under maintenance",
  robots: { index: false, follow: false },
};

export default function MaintenancePage() {
  return (
    <div className="bg-grid flex min-h-screen flex-col items-center justify-center px-6 py-16">
      <div className="w-full max-w-md text-center">
        <Image src={logo} alt="ParkerIoT" priority className="mx-auto h-8 w-auto" />
        <h1 className="mt-10 text-3xl font-bold tracking-tight text-slate-900">
          We&apos;ll be back shortly
        </h1>
        <p className="mt-4 text-base leading-relaxed text-slate-600">
          ParkerIoT is undergoing a brief update. Please check back soon, or email us
          if you need to get in touch in the meantime.
        </p>
        <a
          href="mailto:info@parkeriot.uk"
          className="btn-primary mt-8 inline-flex"
        >
          info@parkeriot.uk
        </a>
      </div>
    </div>
  );
}
