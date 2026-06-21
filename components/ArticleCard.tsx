import Link from "next/link";
import { formatArticleDate, type ResourceArticleMeta } from "@/lib/resources-types";

type ArticleCardProps = {
  article: ResourceArticleMeta;
};

export default function ArticleCard({ article }: ArticleCardProps) {
  const meta = [formatArticleDate(article.date), article.readTime].filter(Boolean).join(" · ");

  return (
    <article className="card flex flex-col">
      <span className="text-xs font-semibold uppercase tracking-wider text-brand-600">
        {article.topic}
      </span>
      <h2 className="mt-2 text-lg font-semibold text-slate-900">
        <Link
          href={`/resources/${article.slug}`}
          className="transition hover:text-brand-700"
        >
          {article.title}
        </Link>
      </h2>
      {meta && <p className="mt-2 text-xs text-slate-400">{meta}</p>}
      <p className="mt-4 flex-1 text-sm leading-relaxed text-slate-600">{article.excerpt}</p>
      <Link
        href={`/resources/${article.slug}`}
        className="mt-6 text-sm font-semibold text-brand-700 transition hover:text-brand-800"
      >
        Read note →
      </Link>
    </article>
  );
}
