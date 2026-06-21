import Link from "next/link";

const caseStudies = [
  {
    sector: "Remote monitoring",
    title: "Environmental sensor gateway with 4G backhaul",
    problem:
      "Sensors worked on the bench but the site had no reliable broadband. Data was logged locally but never reached a dashboard, and there was no way to diagnose failures remotely.",
    stack: ["ESP32 sensors", "Raspberry Pi edge hub", "MQTT", "4G/LTE router", "WireGuard", "Grafana"],
    outcome:
      "Edge hub with local buffering, VPN remote access, structured MQTT topics, and alerting — so the team could see live data and SSH in without site visits for every fault.",
  },
  {
    sector: "Agriculture",
    title: "Barn monitoring with patchy connectivity",
    problem:
      "Temperature and equipment status needed monitoring across outbuildings. Wi-Fi was unreliable, firmware updates were manual, and alerts were inconsistent.",
    stack: ["ESP32 nodes", "Node-RED", "Raspberry Pi", "Tailscale", "SMS/email alerts"],
    outcome:
      "Reliable edge automation, resilient data upload, remote diagnostics, and a maintainable update path — built for barn conditions rather than a lab demo.",
  },
  {
    sector: "System hardening",
    title: "Unreliable connected product brought back to stability",
    problem:
      "An existing prototype connected intermittently, lost data after power cuts, and had no logging when things went wrong in early field trials.",
    stack: ["Firmware review", "systemd services", "Watchdogs", "Structured logging", "OTA planning"],
    outcome:
      "Identified failure points across firmware, networking, and edge services. Improved recovery behaviour, diagnostics, and deployment scripts so field trials could continue with confidence.",
  },
];

export default function CaseStudyCards() {
  return (
    <div className="grid gap-6 lg:grid-cols-3">
      {caseStudies.map((study) => (
        <article key={study.title} className="card flex flex-col">
          <span className="text-xs font-semibold uppercase tracking-wider text-brand-600">
            {study.sector}
          </span>
          <h3 className="mt-2 text-lg font-semibold text-slate-900">{study.title}</h3>

          <div className="mt-4 space-y-4 flex-1">
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                Problem
              </h4>
              <p className="mt-1.5 text-sm leading-relaxed text-slate-600">{study.problem}</p>
            </div>
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                Stack
              </h4>
              <div className="mt-2 flex flex-wrap gap-1.5">
                {study.stack.map((item) => (
                  <span
                    key={item}
                    className="rounded-md bg-slate-100 px-2 py-0.5 text-xs font-medium text-slate-600"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                Outcome
              </h4>
              <p className="mt-1.5 text-sm leading-relaxed text-slate-600">{study.outcome}</p>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}

export function CaseStudyCTA() {
  return (
    <div className="mt-10 text-center">
      <p className="text-sm text-slate-500">
        Representative project patterns — details anonymised. Your project may span several of
        these areas.
      </p>
      <Link href="/contact" className="btn-ghost mt-4">
        Discuss a similar project
      </Link>
    </div>
  );
}
