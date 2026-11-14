import Image from "next/image";
import logoSlate from "@/public/parkeriot-logo.png";
import logoWhite from "@/public/parkeriot-logo-white.png";

type Variant = "slate" | "white";

export default function Logo({
  variant = "slate",
  className = "h-8 w-auto",
  priority = false,
}: {
  variant?: Variant;
  className?: string;
  priority?: boolean;
}) {
  const src = variant === "white" ? logoWhite : logoSlate;
  return (
    <Image
      src={src}
      alt="ParkerIoT"
      priority={priority}
      className={className}
    />
  );
}
