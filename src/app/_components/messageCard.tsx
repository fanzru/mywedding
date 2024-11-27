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
      {/* <Image
        src={
          image ||
          "https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?&w=256&h=256&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.3&fp-z=1&fit=crop"
        }
        width={30}
        height={30}
        alt="avatar"
        className="h-[40px] w-[40px] rounded-full"
      />
      #FFD700 */}
      <div
        style={{ backgroundColor: "#FFD700" }}
        className="h-[40px] w-[40px] rounded-full"
      ></div>
      <div className="flex flex-col gap-1">
        <div>
          <p className="text-base font-semibold text-[#191919]">
            {title || "Anonymous"}
          </p>
          <p className="text-base text-[#808080]">
            {"@" +
              (title ? title.replace(/\s+/g, "").toLowerCase() : "@anonymous")}
          </p>
        </div>
        <p className="text-sm text-[#808080]">
          {description ||
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis, alias!"}
        </p>
      </div>
    </div>
  );
}
