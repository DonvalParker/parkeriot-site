import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";

type MarkdownContentProps = {
  content: string;
};

export default function MarkdownContent({ content }: MarkdownContentProps) {
  return (
    <div className="prose-resource">
      <Markdown remarkPlugins={[remarkGfm]}>{content}</Markdown>
    </div>
  );
}
