import Image from "next/image";
import React from "react";
import { cn } from "~/lib/utils";

export function BgImageContainer({
  children,
  className,
}: Readonly<{ children: React.ReactNode; className?: string }>) {
  return (
    <div className="relative min-h-screen bg-black">
      {/* Wrapper untuk memastikan filter diterapkan */}
      <div className="absolute inset-0">
        <Image
          src="/images/pre2.webp"
          alt="Background"
          fill
          quality={100}
          className={cn(
            "h-full w-full object-cover opacity-70 grayscale filter",
            className,
          )}
          priority
          sizes="(max-width: 100%) 100vw, (max-width: 100%px) 50vw, 33vw"
        />
      </div>

      {/* Konten di atas gambar */}
      <div className="relative z-10">{children}</div>
    </div>
  );
}
