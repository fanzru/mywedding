"use client";

import { api } from "~/trpc/react";
import { MessageCard } from "./messageCard";
import Marquee from "~/components/ui/marquee";
import { home } from "~/data/home";

interface Message {
  name: string;
  message: string;
}

export function MessagesList() {
  // Fetch data using TRPC
  const { data, isLoading, isError } = api.mywedding.getMessages.useQuery();

  if (isLoading) {
    return <p className="text-center text-white">Loading messages...</p>;
  }

  if (isError || !data) {
    return <p className="text-center text-red-500">Failed to load messages.</p>;
  }

  if (!data || data.data.length === 0) {
    return <p className="text-center text-white">No messages yet.</p>;
  }

  const firstRow = data.data.slice(0, data.data.length / 2);
  const secondRow = data.data.slice(data.data.length / 2);

  const images = [
    { img: "https://avatar.vercel.sh/jack" },
    { img: "https://avatar.vercel.sh/jill" },
    { img: "https://avatar.vercel.sh/john" },
    { img: "https://avatar.vercel.sh/jane" },
    { img: "https://avatar.vercel.sh/jenny" },
    { img: "https://avatar.vercel.sh/james" },
  ];

  const getRandomImage = (): string => {
    const randomIndex = Math.floor(Math.random() * images.length);
    return images[randomIndex]!.img;
  };
  return (
    <div className="flex max-h-[620px] w-full flex-col items-center gap-4 overflow-hidden">
      <p className="mb-2 w-full text-center text-2xl text-white lg:text-6xl">
        {home.messageTitle}
      </p>
      <div className="relative flex w-full flex-col items-center justify-center overflow-hidden rounded-lg md:max-w-[900px]">
        <Marquee pauseOnHover className="[--duration:20s]">
          {firstRow.map((message: Message, index: number) => (
            <MessageCard
              key={index}
              title={message.name}
              description={message.message}
              image={getRandomImage()}
            />
          ))}
        </Marquee>
        <Marquee reverse pauseOnHover className="[--duration:20s]">
          {secondRow.map((message: Message, index: number) => (
            <MessageCard
              key={index}
              title={message.name}
              description={message.message}
              image={getRandomImage()}
            />
          ))}
        </Marquee>
      </div>

      {/* {data.data.map((message: Message, index: number) => (
        <MessageCard
          key={index}
          title={message.name}
          description={message.message}
        />
      ))} */}
    </div>
  );
}
