import type { Metadata } from "next";
import Link from "next/link";
import { SectionHeading } from "@/components/Section";

export const metadata: Metadata = {
  title: "About",
  description:
    "ParkerIoT is led by Donval Parker — a hands-on IoT and embedded systems engineer providing UK-based connected device development, field deployment, and remote monitoring support.",
};

const values = [
  {
    title: "Built for the field",
    body: "Real deployments mean flaky networks, power issues, and unattended sites. Systems are engineered for automated recovery, remote diagnostics, and long-term reliability.",
  },
  {
    title: "Full-system ownership",
    body: "From firmware and wiring through Linux services, connectivity, cloud data flows, installation, and remote support — one engineer accountable across the joins.",
  },
  {
    title: "Pragmatic and maintainable",
    body: "Standard protocols, clean documentation, and maintainable code. Your data and your stack stay yours, and stay supportable.",
  },
];

const company = [
  { label: "Registered name", value: "ParkerIoT Limited" },
  { label: "Company number", value: "16308954" },
  { label: "Incorporated", value: "11 March 2025" },
  { label: "Registered office", value: "42 Mayfield Avenue, Lancaster, England, LA1 2PF" },
];

export default function AboutPage() {
  return (
    <>
      <section className="bg-grid border-b border-slate-200">
        <div className="container-tight py-20 lg:py-24">
          <div className="max-w-3xl animate-fade-up">
            <span className="inline-block rounded-full border border-brand-200 bg-brand-50 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-brand-700">
              About ParkerIoT
            </span>
            <h1 className="mt-6 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
              Hands-on IoT engineering, close to the technical detail
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-slate-600">
              ParkerIoT helps organisations design, prototype, deploy, troubleshoot, and support
              connected devices and IoT systems — bridging embedded firmware, hardware, Linux edge
              systems, connectivity, cloud data, and field deployment.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container-tight grid gap-12 lg:grid-cols-5 lg:items-start">
          <div className="lg:col-span-2">
            <SectionHeading align="left" eyebrow="Who you work with" title="Led by Donval Parker" />
            <p className="mt-2 text-sm font-semibold text-brand-700">
              MEng (Hons) Mechatronic Engineering · IET Member
            </p>
          </div>
          <div className="lg:col-span-3">
            <p className="text-base leading-relaxed text-slate-600">
              Donval is a hands-on design engineer, firmware and software engineer, and
              mechatronics/IoT specialist with experience across embedded systems, connected devices,
              Linux-based edge systems, field deployments, remote monitoring, networked
              infrastructure, and practical automation.
            </p>
            <p className="mt-4 text-base leading-relaxed text-slate-600">
              He works close to the technical detail — from firmware and wiring through to cloud
              data flows and remote support. That includes ESP32 and microcontroller development,
              Raspberry Pi and embedded Linux, MQTT and Node-RED, 4G/LTE connectivity, VPN and
              secure remote access, sensor integration, and commissioning systems that need to work
              when they leave the bench.
            </p>
            <blockquote className="mt-6 border-l-4 border-brand-500 pl-5 text-base font-medium italic text-slate-800">
              I care about whether the system works when it leaves the bench, not just whether the
              demo looks good.
            </blockquote>
            <p className="mt-4 text-base leading-relaxed text-slate-600">
              ParkerIoT provides UK-based IoT, embedded, and connected systems support for startups,
              SMEs, product teams, charities, and small industrial teams who need a specialist
              engineering partner — not a large agency.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/contact" className="btn-primary">
                Book a technical discovery call
              </Link>
              <Link href="/services" className="btn-ghost">
                Explore IoT services
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-slate-200 bg-slate-50 py-20">
        <div className="container-tight">
          <SectionHeading eyebrow="How we work" title="What guides the work" />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {values.map((v) => (
              <div key={v.title} className="card bg-white">
                <h3 className="text-lg font-semibold text-slate-900">{v.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-slate-200 bg-slate-50 py-16">
        <div className="container-tight">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {company.map((c) => (
              <div key={c.label}>
                <div className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                  {c.label}
                </div>
                <div className="mt-1 text-sm font-medium text-slate-800">{c.value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
