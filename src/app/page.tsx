import { NavigationBottom } from "./_components/navigation";
import { BgImageContainer } from "./_components/bgImageContainer";
import { Parisienne, Afacad } from "next/font/google";
import { home } from "~/data/home";
import { CountDown } from "./_components/countdown";
import { CoupleInfoCard } from "./_components/CoupleInfoCard";
import { Reservation } from "./_components/reservation";
import { TimelineView } from "./_components/timeline";
import { Footer } from "./_components/footer";
import { api, HydrateClient } from "~/trpc/server";
import { MessagesList } from "./_components/messageList";
import SendGifts from "./_components/sendGifts";
import ThankYouQRCode from "./_components/thankYou";
import { Wrapper } from "./_components/wrapper";
import EventDetails from "./_components/eventDetail";

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

export default async function Home() {
  return (
    <HydrateClient>
      <main className={"relative bg-[#191919] " + afacad.className}>
        <NavigationBottom />
        <BgImageContainer>
          <section
            className="relative flex min-h-screen flex-col items-center justify-center pb-[100px]"
            id="home"
          >
            <div className="flex flex-col items-center gap-4 text-[#FFD700]">
              <p className="text-sm text-white md:text-[28px]">
                Anda Diundang untuk Merayakan Pernikahan dari
              </p>
              <p className={"text-center text-[48px]"}>
                Affan <br /> & <br /> Amelia
              </p>
              <p className="text-sm text-white">{home.locationAndDate}</p>
              <a href="#countdown">
                <button className="flex gap-2 rounded-full bg-[#FFD700] p-3 text-black">
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
              </a>
            </div>
          </section>
        </BgImageContainer>

        <section id="countdown">
          <Wrapper className="">
            <div className="flex flex-col items-center justify-center px-4 py-5">
              <p className="text-[22px] text-[#FFD700] lg:text-3xl">
                {"Pasangan"}
              </p>
              <p className="text-[42px] text-[#FFD700] lg:text-3xl">
                {"Mempelai"}
              </p>
              <p
                className="text-center text-[18px] text-white lg:text-xl"
                style={{ whiteSpace: "pre-line" }}
              >
                {
                  "Dengan segala puji bagi Allah yang telah menciptakan makhluk-Nya berpasang-pasangan, Ya Allah izinkanlah kami merangkaikan cinta yang Engkau berikan dalam ikatan pernikahan."
                }
              </p>
            </div>
          </Wrapper>
          <div className="flex h-[200px] w-full flex-col items-center justify-center bg-[#FFD700] bg-cover bg-center px-4 py-20 md:px-8 lg:px-10">
            <p className="w-full text-center text-lg text-black md:text-[20px]">
              Detail
            </p>
            <h1 className="h-auto w-full text-center text-[42px] font-semibold text-black md:text-[72px]">
              Waktu & Tempat
            </h1>
          </div>
          <Wrapper className="">
            <div className="flex flex-col items-center justify-center gap-3 px-4 py-5">
              <p className="text-base text-[#FFD700] lg:text-3xl">
                {"Simpan Tanggalnya"}
              </p>

              <p className="text-[#FFD700] lg:text-5xl">
                {"Jumat, 20 Desember 2024"}
              </p>
            </div>
            <div className="flex items-center justify-center">
              <CountDown targetDate={home.countdown.targetDate} />
            </div>

            <div className="flex flex-col items-center justify-center gap-3 px-4 py-5 md:flex-row">
              <CoupleInfoCard
                image={home.coupleInfo[0]!.image}
                name={home.coupleInfo[0]!.name}
                description={home.coupleInfo[0]!.description}
              />
              <CoupleInfoCard
                image={home.coupleInfo[1]!.image}
                name={home.coupleInfo[1]!.name}
                description={home.coupleInfo[1]!.description}
              />
            </div>

            <EventDetails />

            <div className="flex flex-col items-center justify-center gap-3 px-4 py-5">
              <p
                className="text-center text-xl text-white lg:text-5xl"
                style={{ whiteSpace: "pre-line" }}
              >
                {home.qoutes.text}
              </p>
              <p className="text-base text-[#FFD700] lg:text-2xl">
                {home.qoutes.source}
              </p>
            </div>
          </Wrapper>
        </section>
        <section id="ourstory">
          <TimelineView />
        </section>
        <section id="message">
          <Wrapper>
            <MessagesList />
          </Wrapper>
          <div className="mx-auto flex max-w-[700px] flex-col gap-3 px-4 py-5 md:text-center">
            <p className="w-full text-center text-2xl text-white md:text-4xl">
              Send Gifts
            </p>
            <SendGifts gifts={home.sendGift} />
          </div>
        </section>

        <section className="flex flex-col gap-3 px-4 py-5">
          <Reservation />
        </section>

        <section className="flex flex-col gap-3 px-4 py-5">
          <ThankYouQRCode link="https://maps.app.goo.gl/XG5s4LfkUT5ay4DNA" />
        </section>
        <Footer />
      </main>
    </HydrateClient>
  );
}
