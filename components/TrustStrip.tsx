const items = [
  "UK-based engineering",
  "Hands-on delivery",
  "Prototype to deployment",
  "Remote support",
];

export default function TrustStrip() {
  return (
    <div className="border-y border-slate-200 bg-white py-4">
      <div className="container-tight">
        <ul className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2">
          {items.map((item) => (
            <li key={item} className="flex items-center gap-2 text-sm font-medium text-slate-600">
              <svg
                viewBox="0 0 24 24"
                className="h-4 w-4 text-brand-600"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
              >
                <path d="M5 13l4 4L19 7" />
              </svg>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
