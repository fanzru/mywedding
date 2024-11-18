"use client";

import { api } from "~/trpc/react";
import { MessageCard } from "./messageCard";

interface Message {
  name: string;
  message: string;
}

export function MessagesList() {
  // Fetch data using TRPC
  const { data, isLoading, isError } = api.mywedding.getMessages.useQuery();
  console.log(data);

  if (isLoading) {
    return <p className="text-center text-white">Loading messages...</p>;
  }

  if (isError || !data) {
    return <p className="text-center text-red-500">Failed to load messages.</p>;
  }

  if (!data || data.data.length === 0) {
    return <p className="text-center text-white">No messages yet.</p>;
  }

  return (
    <div className="flex max-h-[620px] flex-col items-center gap-4 overflow-auto">
      <p className="mb-2 w-full text-center text-2xl text-white lg:text-6xl">
        Messages of Love and Blessings
      </p>
      {data.data.map((message: Message, index: number) => (
        <MessageCard
          key={index}
          title={message.name}
          description={message.message}
        />
      ))}
    </div>
  );
}
