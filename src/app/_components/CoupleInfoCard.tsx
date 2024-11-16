import Image from "next/image";
import React from "react";

interface CoupleInfoCardProps {
  image: string;
  name: string;
  description: string;
}

export function CoupleInfoCard({
  image,
  name,
  description,
}: CoupleInfoCardProps) {
  return (
    <div className="flex w-full max-w-full items-center justify-center rounded-lg border border-[#FFD700]/50 py-10 md:max-w-[610px]">
      <div className="flex flex-col items-center justify-center gap-4 text-center">
        <div className="relative h-[100px] w-[100px] lg:h-[200px] lg:w-[200px]">
          <Image
            src={
              image ||
              "https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?&w=256&h=256&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.3&fp-z=1&fit=crop"
            }
            alt=""
            fill
            className="rounded-full bg-[#D9D9D9] object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        <div className="flex w-full flex-col items-center gap-1">
          <p className="text-2xl font-semibold text-[#FFD700]">{name}</p>
          <p className="text-base text-white">{description}</p>
        </div>
      </div>
    </div>
  );
}
