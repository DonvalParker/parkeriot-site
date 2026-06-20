import type { Metadata } from "next";
import Link from "next/link";
import { SectionHeading } from "@/components/Section";

export const metadata: Metadata = {
  title: "About",
  description:
    "ParkerIoT Limited is a Lancaster-based engineering company led by Donval Parker MEng, IET Member — specialists in embedded firmware, IoT and field systems.",
};

const values = [
  {
    title: "Built for the field",
    body: "Real deployments mean flaky networks, wide temperature swings and unattended sites. Systems are engineered for automated recovery and long-term reliability.",
  },
  {
    title: "Whole-lifecycle ownership",
    body: "From prototype and firmware through installation, commissioning and remote support — one engineer accountable across the full pipeline.",
  },
  {
    title: "Pragmatic and open",
    body: "Standard protocols, clean documentation and maintainable code. Your data and your stack stay yours, and stay flexible.",
  },
];

const capabilities = [
  {
    area: "Embedded & Firmware",
    items: "C/C++, Python, FreeRTOS, AVR, ARM Cortex, PIC, ESP32, Raspberry Pi, sensor integration, device diagnostics",
  },
  {
    area: "Connectivity & Protocols",
    items: "Wi-Fi, BLE, LoRa/LoRaWAN, Modbus, I2C, SPI, QSPI, UART, MQTT, VPN, DHCP/DNS",
  },
  {
    area: "Linux & Edge Systems",
    items: "Linux, systemd, Node-RED, Python services, automated recovery, remote access, data buffering & upload",
  },
  {
    area: "Data & Monitoring",
    items: "InfluxDB, Grafana, Zabbix, cloud-connected data pipelines, low-power IoT telemetry",
  },
  {
    area: "CAD, PCB & Tools",
    items: "KiCad, FreeCAD, SolidWorks, Fusion 360, Segger SystemView, Doxygen, MPLAB, Microchip Studio, LabVIEW, Qt",
  },
  {
    area: "Web & Interfaces",
    items: "HTML, CSS, JavaScript, PHP, SQL, LAMP stack, GUI prototyping and dashboard support",
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
              An engineering company that ships hardware
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-slate-600">
              ParkerIoT Limited is a Lancaster-based engineering company specialising in
              embedded firmware, low-power IoT and Linux edge systems. We take connected
              hardware all the way from prototype to working installations in the real
              world — and keep them running.
            </p>
          </div>
        </div>
      </section>

      {/* Founder */}
      <section className="py-20">
        <div className="container-tight grid gap-12 lg:grid-cols-5 lg:items-start">
          <div className="lg:col-span-2">
            <SectionHeading
              align="left"
              eyebrow="Who you work with"
              title="Led by Donval Parker"
            />
            <p className="mt-2 text-sm font-semibold text-brand-700">
              MEng (Hons) Mechatronic Engineering · IET Member
            </p>
          </div>
          <div className="lg:col-span-3">
            <p className="text-base leading-relaxed text-slate-600">
              Donval is a design, firmware and field systems engineer with over six years
              of experience across embedded firmware, circuit design, low-power IoT, Linux
              edge systems, remote diagnostics, product prototyping and field deployment.
            </p>
            <p className="mt-4 text-base leading-relaxed text-slate-600">
              That experience spans developing firmware and edge software for ESP32 and
              Raspberry Pi devices, building unattended Linux field infrastructure, and
              installing, commissioning and troubleshooting live deployments — across
              hardware, networking, cellular connectivity and physical installation. He
              holds an MEng in Mechatronic Engineering from Lancaster University and is a
              Member of the Institution of Engineering and Technology.
            </p>
            <Link href="/contact" className="btn-primary mt-8">
              Work with ParkerIoT
            </Link>
          </div>
        </div>
      </section>

      {/* Values */}
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

      {/* Capabilities */}
      <section className="py-20">
        <div className="container-tight">
          <SectionHeading
            eyebrow="Capabilities"
            title="The full toolkit"
            description="A broad, hands-on skill set across the embedded, connectivity, edge and data layers — plus the CAD and PCB tools to design the hardware in the first place."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {capabilities.map((c) => (
              <div key={c.area} className="card">
                <h3 className="text-sm font-semibold uppercase tracking-wider text-brand-700">
                  {c.area}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">{c.items}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company details */}
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
