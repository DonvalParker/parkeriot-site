const stack = [
  "ESP32",
  "Raspberry Pi",
  "Embedded Linux",
  "C / C++",
  "Python",
  "MQTT",
  "Node-RED",
  "4G / LTE",
  "WireGuard",
  "Tailscale",
  "systemd",
  "InfluxDB",
  "Grafana",
  "KiCad",
];

export default function StackBadges() {
  return (
    <div className="mt-10">
      <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
        Typical stack
      </p>
      <div className="mt-3 flex flex-wrap justify-center gap-2">
        {stack.map((item) => (
          <span
            key={item}
            className="rounded-md border border-slate-200 bg-white px-2.5 py-1 text-xs font-medium text-slate-600 shadow-sm"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
