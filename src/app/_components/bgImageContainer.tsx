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
        layout="fill"
        objectFit="cover"
        quality={100}
        className="opacity-70"
        priority
      />
      {children}
    </div>
  );
}
