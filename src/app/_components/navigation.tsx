"use client";

import React, { useEffect, useRef, useState } from "react";
import { HiVolumeOff, HiVolumeUp } from "react-icons/hi";

import { cn } from "~/lib/utils";
import { DockView } from "./dockview";
import AudioPlayer from "./audio";

export type IconProps = React.HTMLAttributes<SVGElement>;

export function NavigationBottom() {
  const [isMute, setIsMute] = useState(false);

  return (
    <>
      <AudioPlayer isMute={isMute} />
      {/* 
      <div className="fixed bottom-0 left-1/2 z-50 mb-4 -translate-x-1/2 transform rounded-lg md:left-auto md:right-0 md:mr-4 md:translate-x-0">
      
      */}
      <div className="fixed bottom-0 left-1/2 z-50 mb-4 -translate-x-1/2 transform rounded-lg">
        {/* <button
          className="hidden rounded-full bg-[#FFD700] p-4 md:block"
          onClick={() => setIsMute(!isMute)}
        >
          {isMute ? <HiVolumeOff size={28} /> : <HiVolumeUp size={28} />}
        </button>
        <div className="block md:hidden"> */}
        <DockView
          isMute={isMute}
          setIsMute={() => {
            setIsMute(!isMute);
          }}
        />
        {/* </div> */}
      </div>
    </>
  );
}
