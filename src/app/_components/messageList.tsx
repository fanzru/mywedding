"use client";

import { api } from "~/trpc/react";
import { MessageCard } from "./messageCard";
import Marquee from "~/components/ui/marquee";

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

  return (
    <div className="flex max-h-[620px] flex-col items-center gap-4">
      <p className="mb-2 w-full text-center text-2xl text-white lg:text-6xl">
        Messages of Love and Blessings
      </p>
      <div className="flex w-full flex-col items-center justify-center overflow-hidden rounded-lg md:max-w-[800px]">
        <Marquee pauseOnHover className="[--duration:20s]">
          {firstRow.map((message: Message, index: number) => (
            <MessageCard
              key={index}
              title={message.name}
              description={message.message}
            />
          ))}
        </Marquee>
        <Marquee reverse pauseOnHover className="[--duration:20s]">
          {secondRow.map((message: Message, index: number) => (
            <MessageCard
              key={index}
              title={message.name}
              description={message.message}
            />
          ))}
        </Marquee>
        <div className="pointer-events-none absolute inset-x-0 top-0 h-1/3 bg-gradient-to-b from-white dark:from-background"></div>
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-white dark:from-background"></div>
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
