import Link from "next/link";

import { LatestPost } from "~/app/_components/post";
import { DockDemo } from "./_components/dock";
import { BgImageContainer } from "./_components/bgImageContainer";
import { Parisienne, Afacad } from "@next/font/google";
import { home } from "~/data/home";
import { CountDown } from "./_components/countdown";
import { CoupleInfoCard } from "./_components/CoupleInfoCard";

const parisienne = Parisienne({
  weight: "400",
  subsets: ["latin"],
});

const afacad = Afacad({
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});
// import { api, HydrateClient } from "~/trpc/server";

export default async function Home() {
  return (
    <main className={"relative bg-[#191919] " + afacad.className}>
      <div className="fixed bottom-0 left-1/2 z-50 mb-4 -translate-x-1/2 transform rounded-lg">
        <DockDemo />
      </div>
      <BgImageContainer>
        <section className="relative flex min-h-screen flex-col items-center justify-center">
          <div className="flex flex-col items-center gap-8 text-[#FFD700]">
            <p className={"text-center text-[48px] " + parisienne.className}>
              Affan <br /> & <br /> Amelia
            </p>
            <p className="text-sm text-white">{home.locationAndDate}</p>
            <a href="#">
              <button className="flex gap-2 rounded-full bg-[#FFD700] p-3 text-black">
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
            </a>
          </div>
        </section>
      </BgImageContainer>
      <section className="flex items-center justify-center">
        <CountDown targetDate={home.countdown.targetDate} />
      </section>
      <section className="flex flex-col items-center justify-center gap-3 px-4 py-5">
        <p
          className="text-center text-xl text-white"
          style={{ whiteSpace: "pre-line" }}
        >
          {home.qoutes.text}
        </p>
        <p className="text-base text-[#FFD700]">{home.qoutes.source}</p>
      </section>
      <section className="flex flex-col items-center justify-center gap-3 px-4 py-5">
        <CoupleInfoCard
          image={home.coupleInfo[0]!.image}
          name={home.coupleInfo[0]!.name}
          description={home.coupleInfo[0]!.description}
        />
        <CoupleInfoCard
          image={home.coupleInfo[0]!.image}
          name={home.coupleInfo[0]!.name}
          description={home.coupleInfo[0]!.description}
        />
      </section>
    </main>
  );
}
