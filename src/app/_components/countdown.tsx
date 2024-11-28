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
  const listItem = ["Hari", "Jam", "Menit", "Detik"];
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
    <div className="flex w-full flex-col items-center gap-3 px-4 md:w-auto">
      <p className="text-center text-[18px] font-semibold text-[#FFD700] lg:text-[24px]">
        {home.countdown.header}
      </p>
      <div className="flex w-full items-center justify-between gap-3 rounded-lg bg-white px-3 py-2 xs:gap-0">
        {listItem.map((data, index) => (
          <React.Fragment key={data}>
            <div className="flex flex-col items-center gap-1 p-[5px] xs:gap-0 xs:p-[10px]">
              <p className="max-w-[42px] text-center text-[24px] font-semibold text-[#FFD700] md:text-[42px] xs:text-[28px]">
                {data === "Hari" && timeLeft.days}
                {data === "Jam" && timeLeft.hours}
                {data === "Menit" && timeLeft.minutes}
                {data === "Detik" && timeLeft.seconds}
              </p>
              <p className="text-sm md:text-[20px] xs:text-[16px]">{data}</p>
            </div>
            {index !== listItem.length - 1 && (
              <div className="h-[42px] w-[1px] border xs:h-[32px]"></div>
            )}
          </React.Fragment>
        ))}
      </div>
      <p className="text-sm text-white lg:text-[16px]">{home.countdown.footer}</p>
    </div>
  );
}
