export type ResourceArticle = {
  slug: string;
  title: string;
  topic: string;
  date: string;
  excerpt: string;
  readTime?: string;
  relatedService?: string;
  content: string;
};

export type ResourceArticleMeta = Omit<ResourceArticle, "content">;

export const SERVICE_LABELS: Record<string, string> = {
  discovery: "IoT Product & System Discovery",
  firmware: "Embedded Firmware Development",
  linux: "Raspberry Pi & Embedded Linux Systems",
  connectivity: "Connectivity & Remote Access",
  data: "MQTT, Node-RED & Data Flows",
  prototype: "Prototype Development & Integration",
  troubleshoot: "Troubleshooting & System Hardening",
  troubleshooting: "Troubleshooting & System Hardening",
  hardware: "Hardware Support & Commissioning",
};

export function formatArticleDate(date: string): string {
  return new Date(date).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

export function getRelatedServiceLabel(serviceId: string): string | undefined {
  return SERVICE_LABELS[serviceId];
}
