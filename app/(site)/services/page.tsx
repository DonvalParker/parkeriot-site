import type { Metadata } from "next";
import Link from "next/link";
import FamilyIcon, { type FamilyIconName } from "@/components/FamilyIcon";
import { SectionHeading } from "@/components/Section";

export const metadata: Metadata = {
  title: "IoT Engineering Services",
  description:
    "IoT engineering services from ParkerIoT — embedded firmware, Raspberry Pi and embedded Linux, connectivity, MQTT and Node-RED, prototype development, troubleshooting, and hardware support.",
};

const services: {
  id: string;
  mark: FamilyIconName;
  title: string;
  summary: string;
  body: string[];
  includes: string[];
}[] = [
  {
    id: "discovery",
    mark: "tools",
    title: "IoT Product & System Discovery",
    summary:
      "Structured technical discovery before you commit budget to the wrong architecture or connectivity path.",
    body: [
      "ParkerIoT helps teams clarify what they are actually building — and what will matter once it leaves the lab. That includes feasibility assessment, requirements capture, system architecture options, risk review, connectivity and device strategy, and a practical plan for the next steps.",
      "Useful for startups, non-technical founders, and product teams who need engineering guidance before spending heavily on development, or before a fragmented set of decisions becomes expensive to undo.",
    ],
    includes: [
      "Feasibility and scope review",
      "Requirements and constraints capture",
      "Architecture and component options",
      "Connectivity and deployment strategy",
      "Risk and dependency review",
      "Practical roadmap and next steps",
    ],
  },
  {
    id: "firmware",
    mark: "code",
    title: "Embedded Firmware Development",
    summary:
      "Firmware for ESP32 and microcontrollers — from new development through debugging and refactoring of existing code.",
    body: [
      "Embedded firmware for connected devices: sensor integration, device control, state machines, communication stacks, low-power behaviour, and robust startup and recovery. Work covers C/C++ on ESP32 and other microcontrollers, with MicroPython where it fits the project.",
      "ParkerIoT also helps with OTA and update strategy, diagnostic logging, and cleaning up firmware that works on the bench but not in the field.",
    ],
    includes: [
      "ESP32 and microcontroller development",
      "C/C++ and MicroPython",
      "Sensor and peripheral integration",
      "State machines and device logic",
      "Low-power and sleep design",
      "OTA and update planning",
      "Debugging and code refactoring",
    ],
  },
  {
    id: "linux",
    mark: "gateway",
    title: "Raspberry Pi & Embedded Linux Systems",
    summary:
      "Linux edge systems that run reliably unattended — with proper services, storage, diagnostics, and remote management.",
    body: [
      "Raspberry Pi and embedded Linux systems for gateways, edge processing, local buffering, camera workflows, and site-level automation. ParkerIoT builds and hardens systemd services, improves boot reliability, and sets up the diagnostics and remote access needed for systems you cannot babysit.",
      "This is the layer between field devices and the cloud — where local resilience, data storage, and recovery behaviour often determine whether a deployment succeeds.",
    ],
    includes: [
      "Raspberry Pi edge hubs and gateways",
      "systemd service design and hardening",
      "Boot reliability and automated recovery",
      "Local data storage and buffering",
      "Camera, audio, and image pipelines",
      "Edge processing and device agents",
      "Remote management and diagnostics",
    ],
  },
  {
    id: "connectivity",
    mark: "radio",
    title: "Connectivity & Remote Access",
    summary:
      "Get devices online, keep them reachable, and make remote support practical — including 4G/LTE, VPN, and failover.",
    body: [
      "Connectivity is where many IoT projects quietly fail. ParkerIoT designs and configures Wi-Fi, Ethernet, and 4G/LTE router setups, VPN and secure remote access (WireGuard, Tailscale, SSH/Mosh), and the diagnostics needed to support systems in the field.",
      "Includes SIM and data planning, WAN failover considerations, and making sure you can actually reach a device when something goes wrong at 2am.",
    ],
    includes: [
      "4G/LTE router configuration",
      "Wi-Fi and Ethernet setup",
      "VPN, WireGuard, and Tailscale",
      "SSH/Mosh and remote diagnostics",
      "SIM and data planning",
      "WAN failover and resilience",
      "Secure remote access design",
    ],
  },
  {
    id: "data",
    mark: "cloud",
    title: "IoT Data, Dashboards & Automation",
    summary:
      "Turn raw device data into structured, monitored, actionable information — with alerting and integrations.",
    body: [
      "MQTT brokers and clients, Node-RED flows, APIs, databases, cloud workflows, dashboards, alerting, reporting, and data export. ParkerIoT connects the data path from device through edge to cloud, so telemetry is useful rather than just collected.",
      "Experience spans common cloud platforms where relevant, without overstating platform specialism — the focus is on practical data flow and automation that fits your project.",
    ],
    includes: [
      "MQTT architecture and integration",
      "Node-RED flows and automation",
      "API design and cloud workflows",
      "Dashboards and reporting",
      "Alerting and notifications",
      "Database and data export",
      "Google Cloud, AWS, and Azure integration",
    ],
  },
  {
    id: "prototype",
    mark: "sensor",
    title: "Prototype, MVP & Field Trial Support",
    summary:
      "Move from idea to working prototype to field trial — with wiring, testing, installation planning, and commissioning.",
    body: [
      "Quick proof-of-concept builds, prototype wiring and bench testing, enclosure and installation planning, field commissioning, and pilot deployments. ParkerIoT helps teams prove the system works in realistic conditions, not just in a demo.",
      "Ideal for product teams needing MVP support, startups building connected products, and organisations preparing for a limited field trial before wider rollout.",
    ],
    includes: [
      "Proof-of-concept builds",
      "Prototype wiring and integration",
      "Bench and field testing",
      "Enclosure and mounting planning",
      "Installation and commissioning support",
      "Pilot deployment planning",
      "Documentation for early operation",
    ],
  },
  {
    id: "troubleshooting",
    mark: "tools",
    title: "Troubleshooting & System Hardening",
    summary:
      "Fix unreliable connected systems and make them robust, maintainable, diagnosable, and supportable.",
    body: [
      "When a system mostly works but fails often enough to be a problem — ParkerIoT investigates across firmware, Linux services, networking, power, and data flow. Then improves resilience with better logging, watchdogs, monitoring, deployment scripts, update strategy, and field support processes.",
      "This service is for teams with existing hardware and software that needs debugging or production hardening, and organisations with unreliable field deployments.",
    ],
    includes: [
      "Cross-layer system debugging",
      "Service resilience improvements",
      "Logging, watchdogs, and monitoring",
      "Deployment and update scripts",
      "Remote diagnostics setup",
      "Field support and recovery procedures",
      "Reliability and maintainability review",
    ],
  },
  {
    id: "hardware",
    mark: "chip",
    title: "Hardware & PCB Support",
    summary:
      "Practical hardware guidance — schematic review, component selection, PCB support, and design-for-deployment advice.",
    body: [
      "Hardware and PCB support including schematic review, component selection, ESP32 and Raspberry Pi carrier board ideas, PCB design support, prototype review, power design considerations, and design-for-deployment advice.",
      "ParkerIoT does not overclaim full-scale manufacturing or certification — the focus is on getting prototypes right and making hardware decisions that survive real deployment conditions.",
    ],
    includes: [
      "Schematic and design review",
      "Component selection",
      "ESP32/Raspberry Pi carrier concepts",
      "PCB design support",
      "Prototype board review",
      "Power design considerations",
      "Design-for-deployment advice",
    ],
  },
];

export default function ServicesPage() {
  return (
    <>
      <section className="bg-grid border-b border-slate-200">
        <div className="container-tight py-20 lg:py-24">
          <div className="mx-auto max-w-3xl animate-fade-up text-center">
            <span className="inline-block rounded-full border border-brand-200 bg-brand-50 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-brand-700">
              Services
            </span>
            <h1 className="mt-6 text-4xl font-bold tracking-[-0.035em] text-slate-900 sm:text-5xl">
              IoT engineering services
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-slate-600">
              ParkerIoT provides hands-on IoT engineering across embedded firmware, Linux edge
              systems, connectivity, data, prototyping, troubleshooting, and hardware support —
              for teams who need a connected system that works in the real world.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link href="/contact" className="btn-primary">
                Book a technical discovery call
              </Link>
              <Link href="/contact" className="btn-ghost">
                Review an existing system
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container-tight space-y-20">
          {services.map((service) => (
            <article
              key={service.id}
              id={service.id}
              className="scroll-mt-24 border-b border-slate-200 pb-20 last:border-0 last:pb-0"
            >
              <div className="grid gap-10 lg:grid-cols-5 lg:items-start">
                <div className="lg:col-span-2">
                  <FamilyIcon name={service.mark} className="mb-5 h-14 w-14" />
                  <h2 className="text-2xl font-bold tracking-[-0.035em] text-slate-900 sm:text-3xl">
                    {service.title}
                  </h2>
                  <p className="mt-3 text-base font-medium text-brand-700">{service.summary}</p>
                </div>
                <div className="lg:col-span-3">
                  {service.body.map((paragraph) => (
                    <p key={paragraph.slice(0, 40)} className="text-base leading-relaxed text-slate-600">
                      {paragraph}
                    </p>
                  ))}
                  <div className="mt-6 rounded-xl border border-slate-200 bg-slate-50 p-6">
                    <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-500">
                      Typical scope
                    </h3>
                    <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                      {service.includes.map((item) => (
                        <li key={item} className="flex items-start gap-2 text-sm text-slate-700">
                          <svg
                            viewBox="0 0 24 24"
                            className="mt-0.5 h-4 w-4 shrink-0 text-brand-600"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2.5"
                          >
                            <path d="M5 13l4 4L19 7" />
                          </svg>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Link href="/contact" className="btn-ghost mt-6">
                    Send your project details
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="border-t border-slate-200 bg-slate-50 py-16">
        <div className="container-tight text-center">
          <SectionHeading
            title="Not sure which service fits?"
            description="Most projects span several areas. A technical discovery call is the quickest way to map your problem to the right approach."
          />
          <div className="mt-8">
            <Link href="/contact" className="btn-primary">
              Book a technical discovery call
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
