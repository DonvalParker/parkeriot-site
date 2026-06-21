"use client";

import { useState } from "react";
import ArticleCard from "@/components/ArticleCard";
import type { ResourceArticleMeta } from "@/lib/resources-types";

type ResourceTopicFilterProps = {
  articles: ResourceArticleMeta[];
  topics: string[];
};

export default function ResourceTopicFilter({ articles, topics }: ResourceTopicFilterProps) {
  const [activeTopic, setActiveTopic] = useState<string | null>(null);

  const filtered =
    activeTopic === null ? articles : articles.filter((a) => a.topic === activeTopic);

  return (
    <>
      {topics.length > 1 && (
        <div className="flex flex-wrap justify-center gap-2">
          <button
            type="button"
            onClick={() => setActiveTopic(null)}
            className={`rounded-full px-4 py-1.5 text-sm font-medium transition ${
              activeTopic === null
                ? "bg-brand-700 text-white"
                : "border border-slate-300 text-slate-600 hover:border-brand-500 hover:text-brand-700"
            }`}
          >
            All
          </button>
          {topics.map((topic) => (
            <button
              key={topic}
              type="button"
              onClick={() => setActiveTopic(topic)}
              className={`rounded-full px-4 py-1.5 text-sm font-medium transition ${
                activeTopic === topic
                  ? "bg-brand-700 text-white"
                  : "border border-slate-300 text-slate-600 hover:border-brand-500 hover:text-brand-700"
              }`}
            >
              {topic}
            </button>
          ))}
        </div>
      )}

      {filtered.length > 0 ? (
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {filtered.map((article) => (
            <ArticleCard key={article.slug} article={article} />
          ))}
        </div>
      ) : (
        <p className="mt-12 text-center text-sm text-slate-500">
          No articles in this topic yet.
        </p>
      )}
    </>
  );
}
