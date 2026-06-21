const layers = [
  {
    label: "Device",
    detail: "ESP32 · Sensors · Cameras · Controls",
    join: "Firmware ↔ hardware ↔ power",
  },
  {
    label: "Edge",
    detail: "Linux · systemd · MQTT · Node-RED",
    join: "Local services ↔ device data",
  },
  {
    label: "Connectivity",
    detail: "4G/LTE · Wi-Fi · VPN · Remote access",
    join: "Network ↔ reachability ↔ failover",
  },
  {
    label: "Cloud & Data",
    detail: "APIs · Dashboards · Alerts · Storage",
    join: "Data flow ↔ structure ↔ action",
  },
  {
    label: "Deployment",
    detail: "Install · Commission · Monitor · Support",
    join: "Bench behaviour ↔ field reality",
  },
];

export default function SystemDiagram() {
  return (
    <div className="mx-auto max-w-4xl">
      <div className="relative">
        {layers.map((layer, i) => (
          <div key={layer.label}>
            <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm sm:p-5">
              <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-brand-600">
                    {layer.label} layer
                  </span>
                  <p className="mt-1 text-sm text-slate-600">{layer.detail}</p>
                </div>
                <span className="mt-2 inline-flex w-fit rounded-full bg-brand-50 px-3 py-1 text-xs font-medium text-brand-700 sm:mt-0">
                  ParkerIoT works here
                </span>
              </div>
            </div>
            {i < layers.length - 1 && (
              <div className="flex flex-col items-center py-2">
                <div className="h-4 w-px bg-slate-300" />
                <div className="rounded-full border border-red-200 bg-red-50 px-3 py-1 text-xs font-medium text-red-600">
                  Join: {layer.join}
                </div>
                <div className="h-4 w-px bg-slate-300" />
                <svg
                  viewBox="0 0 24 24"
                  className="h-4 w-4 text-slate-400"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M12 5v14M5 12l7 7 7-7" />
                </svg>
              </div>
            )}
          </div>
        ))}
      </div>
      <p className="mt-6 text-center text-sm leading-relaxed text-slate-500">
        Most IoT failures happen between layers — not inside a single component. ParkerIoT
        engineers across the full stack so the joins hold up in the field.
      </p>
    </div>
  );
}
