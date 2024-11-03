"use client";

import React, { useState, useEffect } from "react";
import { home } from "~/data/home";
import moment from "moment-timezone";

type TimeLeft = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

type CountdownProps = {
  targetDate: string;
};

export function CountDown({ targetDate }: { targetDate: string }) {
  const listItem = ["Days", "Hours", "Minutes", "Seconds"];
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const nowWIB = moment().tz("Asia/Jakarta");
      const targetWIB = moment.tz(targetDate, "Asia/Jakarta");

      const difference = targetWIB.diff(nowWIB);

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(moment.duration(difference).asDays()),
          hours: moment.duration(difference).hours(),
          minutes: moment.duration(difference).minutes(),
          seconds: moment.duration(difference).seconds(),
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="flex flex-col items-center gap-3 px-4 py-5">
      <p className="text-2xl text-white">{home.countdown.header}</p>
      <div className="flex items-center justify-between gap-3 rounded-3xl bg-white px-3 py-2">
        {listItem.map((data, index) => (
          <>
            <div
              key={data}
              className="flex flex-col items-center gap-1 p-[10px]"
            >
              <p className="min-w-[42px] text-center text-[36px] font-semibold text-[#FFD700]">
                {data === "Days" && timeLeft.days}
                {data === "Hours" && timeLeft.hours}
                {data === "Minutes" && timeLeft.minutes}
                {data === "Seconds" && timeLeft.seconds}
              </p>
              <p className="text-sm">{data}</p>
            </div>
            {index !== listItem.length - 1 && (
              <div className="h-[42px] w-[1px] border"></div>
            )}
          </>
        ))}
      </div>
      <p className="text-sm text-white">{home.countdown.footer}</p>
    </div>
  );
}
