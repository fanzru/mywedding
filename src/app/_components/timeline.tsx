import Image from "next/image";
import React from "react";
import { Timeline } from "~/components/ui/timeline";
import { home } from "~/data/home";
import { timeline } from "~/data/timeline";

export function TimelineView() {
  return (
    <div className="w-full">
      <Timeline data={timeline}>
        <div className="flex h-auto w-full flex-col items-center justify-center bg-[url(/images/pre1.webp)] bg-cover bg-center px-4 py-20 md:h-[500px] md:px-8 lg:px-10">
          <p className="w-full text-center text-xl text-white">
            {home.timeline.header}
          </p>
          <h1 className="w-full text-center text-[72px] font-semibold text-[#FFD700]">
            {home.timeline.subheader}
          </h1>
        </div>
      </Timeline>
    </div>
  );
}
