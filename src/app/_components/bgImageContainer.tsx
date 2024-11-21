import Image from "next/image";
import React from "react";

export function BgImageContainer({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="relative bg-black min-h-screen">
      {/* Wrapper untuk memastikan filter diterapkan */}
      <div className="absolute inset-0">
        <Image
          src="/images/pre2.webp"
          alt="Background"
          fill
          quality={100}
          className="object-cover w-full h-full filter grayscale opacity-70"
          priority
          sizes="(max-width: 100%) 100vw, (max-width: 100%px) 50vw, 33vw"
        />
      </div>

      {/* Konten di atas gambar */}
      <div className="relative z-10">{children}</div>
    </div>
  );
}
