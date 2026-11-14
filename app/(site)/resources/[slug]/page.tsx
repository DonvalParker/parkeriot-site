import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import MarkdownContent from "@/components/MarkdownContent";
import {
  formatArticleDate,
  getRelatedServiceLabel,
} from "@/lib/resources-types";
import { getAllArticles, getArticleBySlug } from "@/lib/resources";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return getAllArticles().map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) return { title: "Article not found" };

  return {
    title: article.title,
    description: article.excerpt,
  };
}

export default async function ResourceArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) notFound();

  const meta = [formatArticleDate(article.date), article.readTime].filter(Boolean).join(" · ");
  const relatedServiceLabel = article.relatedService
    ? getRelatedServiceLabel(article.relatedService)
    : undefined;

  return (
    <>
      <section className="bg-grid border-b border-slate-200">
        <div className="container-tight py-16 lg:py-20">
          <div className="mx-auto max-w-3xl animate-fade-up">
            <Link
              href="/resources"
              className="text-sm font-medium text-brand-700 transition hover:text-brand-800"
            >
              ← All resources
            </Link>
            <span className="mt-6 inline-block rounded-full border border-brand-200 bg-brand-50 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-brand-700">
              {article.topic}
            </span>
            <h1 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
              {article.title}
            </h1>
            {meta && <p className="mt-4 text-sm text-slate-500">{meta}</p>}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container-tight">
          <div className="mx-auto max-w-3xl">
            <MarkdownContent content={article.content} />
          </div>
        </div>
      </section>

      <section className="border-t border-slate-200 bg-slate-50 py-16">
        <div className="container-tight">
          <div className="mx-auto max-w-3xl space-y-6">
            {relatedServiceLabel && article.relatedService && (
              <div className="card">
                <h2 className="text-sm font-semibold uppercase tracking-wider text-slate-500">
                  Related service
                </h2>
                <p className="mt-2 text-lg font-semibold text-slate-900">{relatedServiceLabel}</p>
                <Link href={`/services#${article.relatedService}`} className="btn-ghost mt-4">
                  View service details
                </Link>
              </div>
            )}
            <div className="flex flex-wrap gap-4">
              <Link href="/contact" className="btn-primary">
                Book a technical discovery call
              </Link>
              <Link href="/resources" className="btn-ghost">
                More resources
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
