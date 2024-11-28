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
              <p className="text-[18px] text-white md:text-[28px]">
                Undangan Pernikahan
              </p>
              <p className={"text-center text-[48px] lg:text-[56px] font-semibold"}>
                Affan <br /> & <br /> Amelia
              </p>
              <p className="text-[18px] text-white">{home.locationAndDate}</p>
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
          <Wrapper >
            <div className="flex flex-col items-center justify-center px-4 py-5">
              <p className="text-[18px] font-semibold text-[#FFD700] lg:text-[24px]">
                {"Pasangan"}
              </p>
              <p className="text-[24px] font-semibold text-[#FFD700] lg:text-[32px]">
                {"Mempelai"}
              </p>
              <p
                className="text-center text-[16px] text-white lg:text-[18px]"
                style={{ whiteSpace: "pre-line" }}
              >
                {
                  "Dengan segala puji bagi Allah yang telah menciptakan makhluk-Nya berpasang-pasangan, Ya Allah izinkanlah kami merangkaikan cinta yang Engkau berikan dalam ikatan pernikahan."
                }
              </p>
               
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
          </Wrapper>
          <div className="flex h-[150px] w-full flex-col items-center justify-center bg-[#FFD700] bg-cover bg-center px-4 py-20 md:px-8 lg:px-10">
            <p className="w-full text-center text-lg text-black lg:text-[24px]">
              Detail
            </p>
            <h1 className="h-auto w-full text-center text-[42px] font-semibold text-black lg:text-[64px]">
              Waktu & Tempat
            </h1>
          </div>
          <Wrapper className="">
            <div className="flex flex-col items-center justify-center gap-3 px-4 py-5">
              <p className="text-[18px] font-semibold text-[#FFD700] lg:text-[32px]">
                <a
                  href="https://calendar.google.com/calendar/render?action=TEMPLATE&text=[Affan%20%26%20Amelia]%20Wedding%20Invitation&dates=20241220T010000Z/20241220T090000Z&details=Affan%20%26%20Amelia's%20Wedding%20Celebration&location=Your%20Event%20Location"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-[#FFA500]"
                >
                  Simpan Tanggalnya
                </a>
              </p>

              <p className="text-[28px] text-white text-center font-semibold lg:text-[48px]">
                {"Jumat, 20 Desember 2024"}
              </p>
            </div>
            <div className="flex items-center justify-center">
              <CountDown targetDate={home.countdown.targetDate} />
            </div>

            <EventDetails />

            <div className="flex flex-col items-center justify-center gap-3 px-4 py-5">
              <p
                className="text-center text-[16px] text-white lg:text-[24px]"
                style={{ whiteSpace: "pre-line" }}
              >
                {home.qoutes.text}
              </p>
              <p className="text-[16px] text-[#FFD700] lg:text-[24px]">
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
