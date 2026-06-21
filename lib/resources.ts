import fs from "fs";
import path from "path";
import matter from "gray-matter";
import type { ResourceArticle, ResourceArticleMeta } from "@/lib/resources-types";

export type { ResourceArticle, ResourceArticleMeta } from "@/lib/resources-types";
export { formatArticleDate, getRelatedServiceLabel } from "@/lib/resources-types";

const RESOURCES_DIR = path.join(process.cwd(), "content/resources");

function isArticleFile(name: string): boolean {
  return name.endsWith(".md") && !name.startsWith("_");
}

function parseArticleFile(file: string): ResourceArticle {
  const slug = file.replace(/\.md$/, "");
  const raw = fs.readFileSync(path.join(RESOURCES_DIR, file), "utf8");
  const { data, content } = matter(raw);

  return {
    slug,
    title: String(data.title ?? slug),
    topic: String(data.topic ?? "General"),
    date: String(data.date ?? ""),
    excerpt: String(data.excerpt ?? ""),
    readTime: data.readTime ? String(data.readTime) : undefined,
    relatedService: data.relatedService ? String(data.relatedService) : undefined,
    content,
  };
}

export function getAllArticles(): ResourceArticle[] {
  if (!fs.existsSync(RESOURCES_DIR)) return [];

  return fs
    .readdirSync(RESOURCES_DIR)
    .filter(isArticleFile)
    .map(parseArticleFile)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getAllArticleMeta(): ResourceArticleMeta[] {
  return getAllArticles().map(({ content: _content, ...meta }) => meta);
}

export function getArticleBySlug(slug: string): ResourceArticle | undefined {
  const filePath = path.join(RESOURCES_DIR, `${slug}.md`);
  if (!fs.existsSync(filePath)) return undefined;
  return parseArticleFile(`${slug}.md`);
}

export function getAllTopics(): string[] {
  const topics = new Set(getAllArticles().map((a) => a.topic));
  return Array.from(topics).sort();
}
