"use client";

import React, { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { BgImageContainer } from "./bgImageContainer";

export function OpeningSection({ setIsMute }: { setIsMute: Function }) {
  const [isHidden, setIsHidden] = useState(false);

  const handleButtonClick = () => {
    setIsHidden(true);
    setIsMute();
  };

  useEffect(() => {
    if (!isHidden) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isHidden]);

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll ke posisi paling atas
  }, []);

  return (
    <div
      className={`fixed z-[100] transition-opacity delay-100 duration-1000 ease-in-out ${
        isHidden ? "pointer-events-none opacity-0" : "opacity-100"
      }`}
    >
      <BgImageContainer className="opacity-50">
        <Suspense fallback={<></>}>
          <Content handleButtonClick={handleButtonClick} />
        </Suspense>
      </BgImageContainer>
    </div>
  );
}

function Content({ handleButtonClick }: { handleButtonClick: () => void }) {
  const searchParams = useSearchParams();
  const to = searchParams.get("to");

  return (
    <div className="flex h-screen w-screen flex-col items-center justify-between px-2">
      <div className="mt-[100px] flex flex-col items-center justify-center">
        <p
          className={
            "text-center text-[36px] font-semibold text-[#FFD700] lg:text-[36px]"
          }
        >
          THE WEDDING OF
        </p>
        <p
          className={
            "mb-[100px] text-center text-[32px] text-[#FFD700] lg:text-[62px]"
          }
        >
          Affan & Amelia
        </p>
      </div>

      <div className="mb-[150px] flex flex-col items-center justify-center">
        <p className="p-3 text-center text-[18px] text-white lg:p-6 lg:text-[18px]">
          Yth. Bapak/Ibu/Saudara/i
        </p>
        {(to || "Yang Sehat Selalu") && (
          <p className="text-center text-[18px] capitalize text-[#FFD700] lg:text-[24px]">
            {to || "Yang Sehat Selalu"}
          </p>
        )}

        <p className="mt-4 text-center text-[18px] text-white lg:text-4xl lg:text-[18px]">
          Tanpa mengurangi rasa hormat, kami mengundang anda untuk menghadiri
          acara pernikahan kami.
        </p>

        <button
          className="my-3 flex gap-2 rounded-full bg-[#FFD700] p-3 text-black md:my-8"
          onClick={handleButtonClick}
        >
          <p className="text-sm">Buka Undangan</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={20}
            height={20}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            className="icon icon-tabler icons-tabler-outline icon-tabler-arrow-down"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M12 5l0 14" />
            <path d="M18 13l-6 6" />
            <path d="M6 13l6 6" />
          </svg>
        </button>
      </div>
    </div>
  );
}

// Styling untuk fallback loading state
const styles = {
  loading: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    fontSize: "2rem",
    color: "#FFD700",
  },
};
