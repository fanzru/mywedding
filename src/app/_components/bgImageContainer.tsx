import Image from "next/image";
import React from "react";

export function BgImageContainer({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="relative bg-black">
      <Image
        src="/images/bg-preview.webp"
        alt="Background"
        fill
        quality={100}
        className="object-cover opacity-70"
        priority
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
      {children}
    </div>
  );
}
