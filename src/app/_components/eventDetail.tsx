import React from "react";
import { Wrapper } from "./wrapper";

type EventDetailCardProps = {
  title: string;
  time: string;
  location: string;
  mapLink?: string;
};

export function EventDetailCard({
  title,
  time,
  location,
  mapLink,
}: EventDetailCardProps) {
  return (
    <div className="relative flex flex-col items-center gap-4 rounded-lg bg-white p-8 shadow-md md:flex-row md:items-start md:gap-6 w-full">
      <div className="absolute -top-5 flex h-12 w-12 items-center justify-center rounded-full bg-[#FFD700] shadow-lg">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="10" />
          <polyline points="12 6 12 12 16 14" />
        </svg>
      </div>
      <div className="flex flex-col items-center text-center md:items-start md:text-left">
        <h3 className="text-[24px] font-semibold text-[#1A1A1A] lg:text-[28px]">{title}</h3>
        <p className="mt-2 text-[16px] text-gray-700 lg:text-[18px]">{time}</p>
        <p className="mt-1 text-[16px] text-gray-700 lg:text-[18px]">{location}</p>
        {mapLink && (
          <a
            href={mapLink}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-block rounded-full bg-[#FFD700] px-6 py-2 text-sm font-medium text-black shadow hover:bg-[#e6c300]"
          >
            Lihat Lokasi
          </a>
        )}
      </div>
    </div>
  );
}

export default function EventDetails() {
  return (
    <Wrapper className="py-10">

      <div className="w-full flex flex-col gap-8  md:flex-row md:justify-between">
        <EventDetailCard
          title="Akad Nikah"
          time="Jumat, 20 Desember 2024 - 08:00 WIB s.d. Selesai"
          location="RT 02 RW 02 Dukuh Sasak, Desa Bendungan, Kec. Kuwarasan, Kab. Kebumen"
          mapLink="https://maps.app.goo.gl/XG5s4LfkUT5ay4DNA"
        />
        <EventDetailCard
          title="Resepsi"
          time="Jumat, 20 Desember 2024 - 09:00 WIB s.d. Selesai"
          location="RT 02 RW 02 Dukuh Sasak, Desa Bendungan, Kec. Kuwarasan, Kab. Kebumen"
          mapLink="https://maps.app.goo.gl/XG5s4LfkUT5ay4DNA"
        />
      </div>
    </Wrapper>
  );
}
