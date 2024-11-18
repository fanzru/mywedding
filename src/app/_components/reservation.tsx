"use client";

import { FormEvent, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { env } from "~/env";

export function Reservation() {
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);

  const handleCaptchaChange = (token: string | null) => {
    setCaptchaToken(token);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const name = formData.get("name") as string;
    const message = formData.get("messages") as string;
    const attendance = formData.get("attendance") as string;

    if (!captchaToken) {
      alert("Please complete the reCAPTCHA!");
      return;
    }

    alert(
      `Form submitted!\nName: ${name}\nMessage: ${message}\nAttendance: ${attendance}\nreCAPTCHA Token: ${captchaToken}`,
    );

    e.currentTarget.reset();
    setCaptchaToken(null);
  };

  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-col gap-3 text-white">
        <p className="w-full text-center text-2xl md:text-6xl">RSVP</p>
        <p className="w-full text-center text-base md:text-xl">
          We're excited to celebrate with you! Please let us know if you'll be
          joining us.
        </p>
      </div>
      <form
        onSubmit={handleSubmit}
        className="mx-auto w-full space-y-4 lg:w-[800px]"
      >
        <div className="w-full">
          <label
            htmlFor="name"
            className="block text-sm font-medium text-white"
          >
            Name
            <span className="text-[#C6754D]">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-[#C6754D] focus:outline-none focus:ring-[#C6754D]"
            required
          />
        </div>
        <div className="w-full">
          <span className="block text-sm font-medium text-white">
            Attendance
            <span className="text-[#C6754D]"> *</span>
          </span>
          <div className="mt-1 flex items-center space-x-4">
            <label className="inline-flex w-full items-center gap-2 rounded-lg border p-3 text-white">
              <input
                type="radio"
                name="attendance"
                value="Accept with pleasure"
                className="form-radio border-whtie h-5 w-5 appearance-none rounded-sm border-2 bg-white checked:bg-[#C6754D] focus:ring-[#C6754D]"
                required
              />
              <span className="ml-2">Accept with pleasure</span>
            </label>
            <label className="inline-flex w-full items-center gap-2 rounded-lg border p-3 text-white">
              <input
                type="radio"
                name="attendance"
                value="Regretfully Decline"
                className="form-radio border-whtie h-5 w-5 appearance-none rounded-sm border-2 bg-white checked:bg-[#C6754D] focus:ring-[#C6754D]"
              />
              <span className="ml-2">Regretfully Decline</span>
            </label>
          </div>
        </div>
        <div className="w-full">
          <label
            htmlFor="messages"
            className="block text-sm font-medium text-white"
          >
            Messages
            <span className="text-[#C6754D]">*</span>
          </label>
          <textarea
            id="messages"
            name="messages"
            rows={3}
            className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-[#C6754D] focus:outline-none focus:ring-[#C6754D]"
            required
          />
        </div>

        <div className="w-full">
          <ReCAPTCHA
            sitekey={env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || ""}
            onChange={handleCaptchaChange}
          />
        </div>
        <button
          type="submit"
          className="w-full rounded-md bg-[#FFD700] px-4 py-2 text-black shadow hover:bg-[#ffd900e0] focus:outline-none focus:ring-2 focus:ring-[#C6754D]"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
