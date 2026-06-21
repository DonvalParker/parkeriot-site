import type { Metadata } from "next";
import Link from "next/link";
import ResourceTopicFilter from "@/components/ResourceTopicFilter";
import { SectionHeading } from "@/components/Section";
import { getAllArticleMeta, getAllTopics } from "@/lib/resources";

export const metadata: Metadata = {
  title: "Resources",
  description:
    "Practical notes on IoT, embedded systems, connectivity, and field deployment from ParkerIoT — concise technical write-ups from real project work.",
};

export default function ResourcesPage() {
  const articles = getAllArticleMeta();
  const topics = getAllTopics();

  return (
    <>
      <section className="bg-grid border-b border-slate-200">
        <div className="container-tight py-20 lg:py-24">
          <div className="mx-auto max-w-3xl animate-fade-up text-center">
            <span className="inline-block rounded-full border border-brand-200 bg-brand-50 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-brand-700">
              Resources
            </span>
            <h1 className="mt-6 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
              Practical notes on IoT, embedded systems, and field deployment
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-slate-600">
              Concise technical write-ups from real project work — checklists, architecture notes,
              and troubleshooting guidance. Not a content calendar; just useful reference when you
              are planning or debugging a connected system.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container-tight">
          <ResourceTopicFilter articles={articles} topics={topics} />
        </div>
      </section>

      <section className="border-t border-slate-200 bg-slate-50 py-16">
        <div className="container-tight text-center">
          <SectionHeading
            title="Need help applying this to your project?"
            description="Most deployments span several areas. A technical discovery call is the quickest way to map your problem to the right approach."
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
