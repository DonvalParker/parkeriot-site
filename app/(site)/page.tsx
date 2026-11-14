import type { Metadata } from "next";
import Link from "next/link";
import CaseStudyCards, { CaseStudyCTA } from "@/components/CaseStudyCards";
import FamilyIcon, { type FamilyIconName } from "@/components/FamilyIcon";
import Logo from "@/components/Logo";
import { SectionHeading } from "@/components/Section";
import StackBadges from "@/components/StackBadges";
import SystemDiagram from "@/components/SystemDiagram";
import TrustStrip from "@/components/TrustStrip";

export const metadata: Metadata = {
  title: "Practical IoT Engineering for Connected Devices & Remote Monitoring",
  description:
    "UK-based IoT engineering services — ESP32 and Raspberry Pi development, embedded Linux, MQTT, Node-RED, 4G deployment, and field support. From prototype to reliable connected systems.",
};

const heroBullets = [
  "Connected device prototypes and MVPs",
  "ESP32, Raspberry Pi, Linux, MQTT, Node-RED, and cloud integration",
  "4G/LTE, VPN, remote access, and field deployment support",
  "Sensor, camera, automation, and monitoring systems",
];

const painPoints = [
  "The prototype works on the bench but fails in the field",
  "Devices connect locally but cannot be managed remotely",
  "Data is collected but not structured, monitored, or actionable",
  "Firmware, cloud, networking, and hardware decisions are made separately",
  "Power, connectivity, and diagnostics are treated too late",
  "There is no clear path from proof of concept to deployment",
];

const services: {
  title: string;
  body: string;
  href: string;
  mark: FamilyIconName;
}[] = [
  {
    title: "IoT Product & System Discovery",
    body: "Feasibility review, requirements capture, architecture options, risk assessment, connectivity choices, device strategy, and practical next steps — before you commit to the wrong stack.",
    href: "/services#discovery",
    mark: "tools",
  },
  {
    title: "Embedded Firmware Development",
    body: "ESP32 and microcontroller firmware in C/C++ and MicroPython — sensor integration, state machines, OTA update strategy, low-power design, debugging, and refactoring of existing code.",
    href: "/services#firmware",
    mark: "code",
  },
  {
    title: "Raspberry Pi & Embedded Linux Systems",
    body: "Raspberry Pi edge systems with systemd services, boot reliability, local data storage, camera and audio workflows, edge processing, diagnostics, and remote management.",
    href: "/services#linux",
    mark: "gateway",
  },
  {
    title: "Connectivity & Remote Access",
    body: "4G/LTE routers, Wi-Fi, Ethernet, VPNs, WireGuard, Tailscale, SSH/Mosh, remote diagnostics, SIM and data planning, and WAN failover for sites you cannot always visit.",
    href: "/services#connectivity",
    mark: "radio",
  },
  {
    title: "IoT Data, Dashboards & Automation",
    body: "MQTT, Node-RED, APIs, databases, cloud workflows, alerting, reporting, dashboards, data export, and integrations with the services you already use.",
    href: "/services#data",
    mark: "cloud",
  },
  {
    title: "Prototype, MVP & Field Trial Support",
    body: "Quick proof-of-concept builds, prototype wiring, bench and field testing, enclosure planning, installation design, commissioning, and pilot deployments.",
    href: "/services#prototype",
    mark: "sensor",
  },
  {
    title: "Troubleshooting & System Hardening",
    body: "Debugging unreliable systems, improving service resilience, logging, watchdogs, monitoring, deployment scripts, update strategy, and ongoing field support.",
    href: "/services#troubleshooting",
    mark: "tools",
  },
  {
    title: "Hardware & PCB Support",
    body: "Schematic review, component selection, ESP32 and Raspberry Pi carrier ideas, PCB design support, prototype review, power design, and design-for-deployment advice.",
    href: "/services#hardware",
    mark: "chip",
  },
];

const capabilityLayers: {
  layer: string;
  mark: FamilyIconName;
  items: string[];
}[] = [
  {
    layer: "Device Layer",
    mark: "sensor",
    items: [
      "ESP32",
      "Raspberry Pi",
      "Sensors",
      "Cameras",
      "Relays and controls",
      "LED and lighting control",
      "Low-power devices",
      "Embedded firmware",
    ],
  },
  {
    layer: "Edge Layer",
    mark: "gateway",
    items: [
      "Embedded Linux",
      "systemd services",
      "Local storage",
      "MQTT brokers/clients",
      "Node-RED",
      "Python services",
      "Device agents",
      "Camera/image pipelines",
    ],
  },
  {
    layer: "Connectivity Layer",
    mark: "radio",
    items: [
      "Wi-Fi",
      "Ethernet",
      "4G/LTE routers",
      "VPN",
      "WireGuard",
      "Tailscale",
      "SSH/Mosh",
      "Remote diagnostics",
      "WAN failover",
    ],
  },
  {
    layer: "Cloud & Data Layer",
    mark: "cloud",
    items: [
      "APIs",
      "Cloud functions",
      "Dashboards",
      "Databases",
      "Alerts",
      "Data export",
      "Automation workflows",
      "Google Cloud / AWS / Azure",
    ],
  },
  {
    layer: "Deployment Layer",
    mark: "tools",
    items: [
      "Installation planning",
      "Commissioning",
      "Field testing",
      "Remote support",
      "Monitoring",
      "Maintenance",
      "Documentation",
      "Reliability improvements",
    ],
  },
];

const useCases = [
  {
    title: "Environmental and remote monitoring",
    body: "Rugged sensor gateways, data pipelines, and alerting for sites where you need visibility without constant site visits.",
  },
  {
    title: "Agriculture and animal monitoring",
    body: "Connected sensing, edge processing, and remote dashboards for barns, fields, and outbuildings with patchy connectivity.",
  },
  {
    title: "Building and facilities monitoring",
    body: "Temperature, humidity, access, and equipment monitoring with practical installation and long-term support.",
  },
  {
    title: "Smart lighting and automation",
    body: "Relay control, scheduling, MQTT-driven automation, and integration with existing building systems.",
  },
  {
    title: "Energy and power monitoring",
    body: "Metering integration, local buffering, and dashboards that make consumption and faults visible remotely.",
  },
  {
    title: "Community, church, and charity connectivity",
    body: "Practical connectivity, remote access, and automation for organisations that need engineering help without enterprise budgets.",
  },
  {
    title: "Camera and sensor-based systems",
    body: "Edge capture, storage, and secure remote access for visual and sensor data from distributed locations.",
  },
  {
    title: "Field-deployed gateways and edge devices",
    body: "Linux edge hubs with VPN access, local resilience, and cloud upload for unattended or hard-to-reach sites.",
  },
  {
    title: "Small industrial monitoring",
    body: "Machine status, environmental conditions, and alert workflows for small-scale industrial and workshop environments.",
  },
  {
    title: "Prototype connected products",
    body: "Feasibility through MVP — firmware, hardware integration, connectivity, and a path toward field trials.",
  },
  {
    title: "Data capture and remote diagnostics",
    body: "Logging, remote shell access, and structured diagnostics so failures can be understood without a site visit every time.",
  },
];

const process = [
  {
    step: "Discover",
    body: "Understand the problem, existing hardware and software, environment, constraints, risks, and commercial goal.",
  },
  {
    step: "Define",
    body: "Turn the idea or problem into a practical technical plan: architecture, components, connectivity, data flow, and next steps.",
  },
  {
    step: "Build",
    body: "Develop the prototype, firmware, Linux services, integrations, dashboards, and installation scripts needed to prove the system.",
  },
  {
    step: "Test",
    body: "Validate on the bench and in realistic conditions. Check reliability, diagnostics, data flow, connectivity, and recovery behaviour.",
  },
  {
    step: "Deploy",
    body: "Support installation, commissioning, remote access setup, documentation, and early field operation.",
  },
  {
    step: "Improve",
    body: "Use real data and field feedback to harden the system, reduce failures, and prepare for scale.",
  },
];

const differentiators = [
  {
    title: "Full-system thinking",
    body: "IoT projects fail at the joins — firmware, power, networking, cloud, field conditions, updates, and remote access. ParkerIoT designs around the whole system.",
  },
  {
    title: "Hands-on engineering",
    body: "Not just advisory. Build, wire, configure, install, test, debug, and support systems in the real world.",
  },
  {
    title: "Embedded, Linux, and connectivity depth",
    body: "ESP32, Raspberry Pi, embedded Linux, MQTT, Node-RED, VPNs, 4G/LTE routers, sensors, cameras, and cloud integration.",
  },
  {
    title: "Prototype to deployment",
    body: "Help at feasibility, proof of concept, MVP, field trial, deployment hardening, remote monitoring, and ongoing support.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-grid border-b border-slate-200">
        <div className="container-tight py-20 lg:py-28">
          <div className="mx-auto max-w-4xl animate-fade-up text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-brand-50 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-brand-700">
              <span className="h-2 w-2 animate-pulse rounded-full bg-brand-500" />
              UK-based IoT engineering
            </span>
            <h1 className="mt-6 text-4xl font-bold leading-tight tracking-[-0.035em] text-slate-900 sm:text-5xl lg:text-6xl">
              Practical IoT engineering for connected devices, field systems, and remote monitoring
            </h1>
            <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-slate-600">
              ParkerIoT designs, builds, deploys, and supports connected systems that bring together
              hardware, firmware, Linux, networking, cloud services, and real-world field reliability.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link href="/contact" className="btn-primary">
                Book a technical discovery call
              </Link>
              <Link href="/services" className="btn-ghost">
                Explore IoT services
              </Link>
            </div>
            <ul className="mx-auto mt-10 grid max-w-3xl gap-3 text-left sm:grid-cols-2">
              {heroBullets.map((bullet) => (
                <li key={bullet} className="flex items-start gap-2.5 text-sm text-slate-600">
                  <svg
                    viewBox="0 0 24 24"
                    className="mt-0.5 h-4 w-4 shrink-0 text-brand-600"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                  >
                    <path d="M5 13l4 4L19 7" />
                  </svg>
                  {bullet}
                </li>
              ))}
            </ul>
            <StackBadges />
          </div>
        </div>
      </section>

      <TrustStrip />

      {/* Problem */}
      <section className="border-b border-slate-200 py-20">
        <div className="container-tight">
          <div className="mx-auto max-w-3xl text-center">
            <SectionHeading
              eyebrow="The real problem"
              title="IoT projects rarely fail because one part is impossible"
              description="They fail because the parts do not work together reliably."
            />
          </div>
          <ul className="mx-auto mt-12 grid max-w-4xl gap-4 sm:grid-cols-2">
            {painPoints.map((point) => (
              <li
                key={point}
                className="flex items-start gap-3 rounded-xl border border-slate-200 bg-slate-50 px-5 py-4 text-sm leading-relaxed text-slate-700"
              >
                <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-brand-600" />
                {point}
              </li>
            ))}
          </ul>
          <p className="mx-auto mt-10 max-w-2xl text-center text-base leading-relaxed text-slate-600">
            ParkerIoT helps turn connected device ideas, field problems, and fragmented technical
            systems into working, maintainable IoT solutions — by fixing the joins between firmware,
            hardware, networking, cloud, and deployment.
          </p>
          <div className="mt-8 text-center">
            <Link href="/contact" className="btn-ghost">
              Fix an unreliable connected system
            </Link>
          </div>
        </div>
      </section>

      {/* System diagram */}
      <section className="border-b border-slate-200 bg-slate-50 py-20">
        <div className="container-tight">
          <SectionHeading
            eyebrow="Full-system view"
            title="Where IoT projects actually break"
            description="Each layer can work in isolation. Reliability depends on what happens between them."
          />
          <div className="mt-12">
            <SystemDiagram />
          </div>
        </div>
      </section>

      {/* Differentiators */}
      <section className="border-b border-slate-200 bg-slate-50 py-20">
        <div className="container-tight">
          <SectionHeading
            eyebrow="Why ParkerIoT"
            title="A specialist engineering partner, not a slide deck"
            description="Especially useful when a project is not just software, not just hardware, and not just cloud — but a messy real-world system where devices, networks, power, firmware, data, and deployment all have to work together."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {differentiators.map((d) => (
              <div key={d.title} className="card bg-white">
                <h3 className="text-base font-semibold text-slate-900">{d.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{d.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20">
        <div className="container-tight">
          <SectionHeading
            eyebrow="Services"
            title="IoT engineering across the full stack"
            description="From discovery and firmware through connectivity, data, field trials, and hardening — one partner who understands how the pieces connect."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((s) => (
              <Link key={s.title} href={s.href} className="card group block">
                <FamilyIcon name={s.mark} className="h-12 w-12" />
                <h3 className="mt-5 text-base font-semibold text-slate-900 group-hover:text-brand-700">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{s.body}</p>
              </Link>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link href="/services" className="btn-ghost">
              View all IoT engineering services
            </Link>
          </div>
        </div>
      </section>

      {/* Technical capability */}
      <section className="border-t border-slate-200 bg-slate-50 py-20">
        <div className="container-tight">
          <SectionHeading
            eyebrow="Technical depth"
            title="Engineering capability across the full IoT stack"
            description="Embedded firmware, Linux edge systems, connectivity, cloud data, and field deployment — not isolated specialisms."
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-5">
            {capabilityLayers.map((layer) => (
              <div key={layer.layer} className="card bg-white">
                <FamilyIcon name={layer.mark} className="h-11 w-11" />
                <h3 className="mt-4 text-sm font-semibold uppercase tracking-wider text-brand-700">
                  {layer.layer}
                </h3>
                <ul className="mt-4 space-y-2">
                  {layer.items.map((item) => (
                    <li key={item} className="text-sm text-slate-600">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use cases */}
      <section className="py-20">
        <div className="container-tight">
          <SectionHeading
            eyebrow="Use cases"
            title="Where ParkerIoT helps"
            description="Startups, SMEs, product teams, charities, and small industrial teams — anyone who needs a connected system that actually works in the field."
          />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {useCases.map((uc) => (
              <div key={uc.title} className="rounded-xl border border-slate-200 bg-white p-5">
                <h3 className="text-sm font-semibold text-slate-900">{uc.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{uc.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case studies */}
      <section className="border-t border-slate-200 bg-slate-50 py-20">
        <div className="container-tight">
          <SectionHeading
            eyebrow="Project patterns"
            title="Typical IoT engineering work"
            description="Anonymised examples of the kinds of connected systems ParkerIoT helps design, deploy, and harden."
          />
          <div className="mt-12">
            <CaseStudyCards />
            <CaseStudyCTA />
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="border-t border-slate-200 py-20">
        <div className="container-tight">
          <SectionHeading
            eyebrow="How it works"
            title="How ParkerIoT works"
            description="A practical process — not a heavyweight consultancy framework."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {process.map((p, i) => (
              <div key={p.step} className="card">
                <span className="text-xs font-bold uppercase tracking-wider text-brand-600">
                  Step {i + 1}
                </span>
                <h3 className="mt-2 text-lg font-semibold text-slate-900">{p.step}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{p.body}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="btn-primary">
              Get help with an IoT prototype
            </Link>
            <Link href="/contact" className="btn-ghost">
              Plan a field deployment
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-20">
        <div className="container-tight">
          <div className="overflow-hidden rounded-3xl bg-brand-700 p-10 text-center sm:p-16">
            <Logo variant="white" className="mx-auto h-8 w-auto sm:h-10" />
            <h2 className="mt-8 text-3xl font-bold tracking-[-0.035em] text-white sm:text-4xl">
              Need a practical IoT engineer?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-brand-100">
              Whether you are scoping a prototype, hardening a field deployment, or debugging a
              system that should work but does not — let&apos;s talk through the technical detail.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-brand-700 shadow-sm transition hover:bg-brand-50"
              >
                Book a technical discovery call
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-brand-400 px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-600"
              >
                Send your project details
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
