import Image from "next/image";
import React from "react";

interface messageCardProps {
  image?: string;
  title?: string;
  description?: string;
  isShown?: Boolean;
}

export function MessageCard({
  image,
  title,
  description,
  isShown,
}: messageCardProps) {
  return (
    <div className="flex w-full min-w-40 max-w-full gap-3 rounded-lg bg-white p-[10px] md:max-w-[600px]">
      <Image
        src={
          image ||
          "https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?&w=256&h=256&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.3&fp-z=1&fit=crop"
        }
        width={60}
        height={60}
        alt="avatar"
        className="h-[60px] w-[60px] rounded-full"
      />
      <div className="flex flex-col gap-1">
        <p className="text-base font-semibold text-[#191919]">
          {title || "Lorem ipsum dolor sit amet."}
        </p>
        <p className="text-sm text-[#808080]">
          {description ||
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis, alias!"}
        </p>
      </div>
    </div>
  );
}
