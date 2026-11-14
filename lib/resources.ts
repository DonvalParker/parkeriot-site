import fs from "fs";
import path from "path";
import matter from "gray-matter";
import type { ResourceArticle, ResourceArticleMeta } from "@/lib/resources-types";

export type { ResourceArticle, ResourceArticleMeta } from "@/lib/resources-types";
export { formatArticleDate, getRelatedServiceLabel } from "@/lib/resources-types";

const RESOURCES_DIR = path.join(process.cwd(), "content/resources");
const SLUG_PATTERN = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;

function isArticleFile(name: string): boolean {
  return name.endsWith(".md") && !name.startsWith("_") && SLUG_PATTERN.test(name.slice(0, -3));
}

/** Slug must be a single filename inside content/resources. */
function articleFilePath(slug: string): string | undefined {
  if (!SLUG_PATTERN.test(slug)) return undefined;
  const root = path.resolve(RESOURCES_DIR);
  const filePath = path.resolve(root, `${slug}.md`);
  const relative = path.relative(root, filePath);
  if (relative.startsWith("..") || path.isAbsolute(relative)) return undefined;
  return filePath;
}

function parseArticleFile(file: string): ResourceArticle | undefined {
  const slug = file.replace(/\.md$/, "");
  const filePath = articleFilePath(slug);
  if (!filePath) return undefined;
  const raw = fs.readFileSync(filePath, "utf8");
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
    .filter((article): article is ResourceArticle => article !== undefined)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getAllArticleMeta(): ResourceArticleMeta[] {
  return getAllArticles().map(({ content: _content, ...meta }) => meta);
}

export function getArticleBySlug(slug: string): ResourceArticle | undefined {
  const filePath = articleFilePath(slug);
  if (!filePath || !fs.existsSync(filePath)) return undefined;
  return parseArticleFile(`${slug}.md`);
}

export function getAllTopics(): string[] {
  const topics = new Set(getAllArticles().map((a) => a.topic));
  return Array.from(topics).sort();
}
