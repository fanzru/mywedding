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

  return (
    <div
      className={`fixed z-[100] transition-opacity duration-300 ${
        isHidden ? "pointer-events-none opacity-0" : "opacity-100"
      }`}
    >
      <BgImageContainer className="opacity-50">
        <Suspense fallback={<div className="loading">Loading...</div>}>
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
    <div className="flex h-screen w-screen items-center justify-center">
      <div className="flex flex-col items-center justify-center">
        <p className={"text-center text-xl text-[#FFD700] md:text-3xl"}>
          Affan & Amelia
        </p>
        <p className="py-3 text-center text-lg text-white md:text-2xl">
          Welcome! You're Invited to Celebrate Love with Us.
        </p>
        {to && (
          <p className="text-center text-7xl capitalize text-[#FFD700]">{to}</p>
        )}

        <button
          className="my-3 flex gap-2 rounded-full bg-[#FFD700] p-3 text-black"
          onClick={handleButtonClick}
        >
          <p className="text-sm">Open Invitation</p>
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
