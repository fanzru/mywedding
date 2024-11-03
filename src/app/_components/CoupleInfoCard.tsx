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
    <div className="flex w-full items-center justify-center rounded-lg border border-[#FFD700]/50 py-10">
      <div className="flex flex-col items-center justify-center gap-4 text-center">
        <div className="relative h-[100px] w-[100px] lg:h-[200px] lg:w-[200px]">
          <Image
            src={image || "/placeholder-image.png"}
            alt=""
            layout="fill"
            objectFit="cover"
            className="rounded-full bg-[#D9D9D9]"
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
