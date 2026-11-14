const familyIcons = {
  chip: "/brand/chip.svg",
  gateway: "/brand/gateway.svg",
  sensor: "/brand/sensor.svg",
  radio: "/brand/radio.svg",
  code: "/brand/code.svg",
  cloud: "/brand/cloud.svg",
  tools: "/brand/tools.svg",
} as const;

export type FamilyIconName = keyof typeof familyIcons;

export default function FamilyIcon({
  name,
  className = "h-12 w-12",
}: {
  name: FamilyIconName;
  className?: string;
}) {
  return (
    // Decorative chip marks. The adjacent heading carries the name.
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={familyIcons[name]}
      alt=""
      aria-hidden="true"
      width={184}
      height={184}
      className={className}
    />
  );
}
