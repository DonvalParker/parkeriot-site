import type { Metadata } from "next";
import { SectionHeading } from "@/components/Section";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Book a technical discovery call with ParkerIoT — UK-based IoT engineering for connected devices, prototypes, field deployments, and system troubleshooting.",
};

const details = [
  {
    label: "Email",
    value: "info@parkeriot.uk",
    href: "mailto:info@parkeriot.uk",
    icon: <path d="M4 6h16v12H4zM4 7l8 6 8-6" />,
  },
  {
    label: "Phone",
    value: "+44 (0)7399 123654",
    href: "tel:+447399123654",
    icon: <path d="M5 4h4l2 5-3 2a12 12 0 0 0 5 5l2-3 5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z" />,
  },
  {
    label: "LinkedIn",
    value: "in/donvalparker",
    href: "https://www.linkedin.com/in/donvalparker",
    icon: <path d="M6 9v9M6 6v.01M10 18v-5a2 2 0 0 1 4 0v5M14 13a3 3 0 0 1 6 0v5" />,
  },
  {
    label: "Location",
    value: "Lancaster, England, LA1 2PF",
    href: "https://maps.google.com/?q=42+Mayfield+Avenue+Lancaster+LA1+2PF",
    icon: <path d="M12 21s-7-5.5-7-11a7 7 0 0 1 14 0c0 5.5-7 11-7 11zM12 10a2 2 0 1 0 0-0.01" />,
  },
];

export default function ContactPage() {
  return (
    <section className="bg-grid">
      <div className="container-tight py-20 lg:py-24">
        <SectionHeading
          eyebrow="Contact"
          title="Book a technical discovery call"
          description="Whether you are scoping a prototype, planning a field deployment, or need help with an unreliable connected system — send your project details and you will get a reply within one business day."
        />

        <div className="mx-auto mt-14 grid max-w-5xl gap-10 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <div className="space-y-4">
              {details.map((d) => (
                <a
                  key={d.label}
                  href={d.href}
                  target={d.href.startsWith("http") ? "_blank" : undefined}
                  rel={d.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="card flex items-center gap-4"
                >
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-brand-50 text-brand-700">
                    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
                      {d.icon}
                    </svg>
                  </span>
                  <span>
                    <span className="block text-xs uppercase tracking-wider text-slate-400">
                      {d.label}
                    </span>
                    <span className="block font-medium text-slate-900">{d.value}</span>
                  </span>
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-3">
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
