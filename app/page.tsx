import Link from "next/link";
import { SectionHeading } from "@/components/Section";

const services = [
  {
    title: "Embedded Firmware",
    body: "C/C++ and Python firmware on ESP32, ARM Cortex, PIC and AVR — sensor capture, device control, local buffering and robust startup behaviour, often on FreeRTOS.",
    icon: <path d="M9 3h6a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zM11 18h2" />,
  },
  {
    title: "IoT & Connectivity",
    body: "Low-power telemetry over Wi-Fi, BLE, LoRa/LoRaWAN and 4G, with MQTT, Modbus and the usual I2C/SPI/UART buses tied together securely.",
    icon: <path d="M5 13a10 10 0 0 1 14 0M8.5 16.5a5 5 0 0 1 7 0M12 20h.01" />,
  },
  {
    title: "Linux Edge Systems",
    body: "Raspberry Pi edge hubs built with systemd, Node-RED and Python services — VPN access, network discovery, data buffering and automated recovery for unattended sites.",
    icon: <path d="M4 7h16M4 12h16M4 17h16M8 4v3M16 17v3" />,
  },
  {
    title: "Hardware & PCB Design",
    body: "Schematic and PCB design in KiCad, mechanical work in FreeCAD/Fusion 360, plus prototyping and board bring-up. Certified Interconnect Designer.",
    icon: <path d="M12 2l9 5v10l-9 5-9-5V7zM12 12l9-5M12 12v10M12 12L3 7" />,
  },
  {
    title: "Data & Monitoring",
    body: "Cloud-connected data pipelines with InfluxDB, Grafana and Zabbix — turning low-power IoT telemetry into dashboards and actionable alerts.",
    icon: <path d="M4 19V5M4 19h16M8 16l3-4 3 2 4-6" />,
  },
  {
    title: "Field Deployment & Support",
    body: "Installation and commissioning of edge hubs, routers, antennas, cabling and power — then live troubleshooting and reliability improvement on real sites.",
    icon: <path d="M12 21s-7-5.5-7-11a7 7 0 0 1 14 0c0 5.5-7 11-7 11zM12 11a2 2 0 1 0 0-0.01" />,
  },
];

const credibility = [
  { value: "6+ yrs", label: "Embedded & field engineering" },
  { value: "MEng", label: "Mechatronics, Lancaster" },
  { value: "IET", label: "Member" },
  { value: "UK", label: "Lancaster-based" },
];

const stack = [
  "C / C++",
  "Python",
  "FreeRTOS",
  "ESP32",
  "Raspberry Pi",
  "LoRaWAN",
  "MQTT",
  "Modbus",
  "Node-RED",
  "InfluxDB",
  "Grafana",
  "KiCad",
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-grid border-b border-slate-200">
        <div className="container-tight grid gap-12 py-20 lg:grid-cols-2 lg:items-center lg:py-28">
          <div className="animate-fade-up">
            <span className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-brand-50 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-brand-700">
              <span className="h-2 w-2 animate-pulse rounded-full bg-brand-500" />
              Embedded · IoT · Field systems
            </span>
            <h1 className="mt-6 text-4xl font-bold leading-tight tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
              Connected hardware,{" "}
              <span className="text-brand-700">built and proven in the field</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-600">
              ParkerIoT designs, builds and deploys IoT systems end-to-end — from embedded
              firmware and PCBs to Linux edge hubs and real-world installation,
              commissioning and support.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/contact" className="btn-primary">
                Start a project
              </Link>
              <Link href="/about" className="btn-ghost">
                About ParkerIoT
              </Link>
            </div>
          </div>

          <div className="relative animate-fade-up">
            <div className="absolute -inset-4 rounded-3xl bg-brand-100/50 blur-2xl" />
            <div className="relative rounded-3xl border border-slate-200 bg-white p-7 shadow-lg">
              <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                <span className="text-sm font-semibold text-slate-900">From prototype to field</span>
                <span className="rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-medium text-emerald-600">
                  Full lifecycle
                </span>
              </div>
              <div className="mt-5 grid grid-cols-2 gap-3">
                {credibility.map((c) => (
                  <div key={c.label} className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                    <div className="text-xl font-bold text-brand-700">{c.value}</div>
                    <div className="mt-1 text-xs text-slate-500">{c.label}</div>
                  </div>
                ))}
              </div>
              <div className="mt-5">
                <div className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                  Typical stack
                </div>
                <div className="mt-3 flex flex-wrap gap-2">
                  {stack.map((s) => (
                    <span
                      key={s}
                      className="rounded-md border border-slate-200 bg-white px-2.5 py-1 text-xs font-medium text-slate-600"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20">
        <div className="container-tight">
          <SectionHeading
            eyebrow="What we do"
            title="End-to-end IoT engineering"
            description="One engineering partner across the whole pipeline — silicon at the edge, software in between, and the dashboard in your browser — so you don't have to stitch vendors together."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <div key={s.title} className="card">
                <div className="grid h-11 w-11 place-items-center rounded-xl bg-brand-50 text-brand-700">
                  <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2">
                    {s.icon}
                  </svg>
                </div>
                <h3 className="mt-5 text-lg font-semibold text-slate-900">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-20">
        <div className="container-tight">
          <div className="overflow-hidden rounded-3xl bg-brand-700 p-10 text-center sm:p-16">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Have a connected hardware challenge?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-brand-100">
              Whether it's a new prototype, a fleet to commission, or a deployment that
              needs to just work, let's talk through it.
            </p>
            <div className="mt-8">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-brand-700 shadow-sm transition hover:bg-brand-50"
              >
                Get in touch
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
