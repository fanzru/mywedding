"use client";

type SendGift = {
  title: string;
  description: string;
  name?: string;
};

type SendGiftsProps = {
  gifts: SendGift[];
};

export default function SendGifts({ gifts }: SendGiftsProps) {
  return (
    <div>
      {gifts.map((item: SendGift, index: number) => (
        <div className="mb-4" key={index}>
          <div className="flex items-center">
            <p className="text-base font-semibold text-[#FFD700] md:text-2xl">
              {item.title}
            </p>
            <span
              className="ml-2 text-sm text-blue-500 underline cursor-pointer hover:text-blue-700"
              onClick={() => {
                navigator.clipboard.writeText(item.description);
              }}
            >
              Copy
            </span>
          </div>
          {item.name && (
            <p className="text-base font-semibold text-[#FFD700] md:text-2xl mt-2">
              {item.name}
            </p>
          )}
          <p className="text-sm font-normal text-white md:text-xl mt-2">
            {item.description}
          </p>
        </div>
      ))}
    </div>
  );
}
