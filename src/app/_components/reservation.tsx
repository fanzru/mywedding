"use client";

import { FormEvent, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import axios from "axios";
import { env } from "~/env";
import { z } from "zod";
import { api } from "~/trpc/react";

const reservationSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  whatsapp_number: z.string().min(1, "WhatsApp number is required"),
  attendance: z.enum(["accept_with_pleasure", "regretfully_decline"], {
    errorMap: () => ({
      message: "Please select an attendance option correctly",
    }),
  }),
  message: z.string().min(1, "Message is required"),
  captcha: z.string().min(1, "reCAPTCHA is required"),
});

export function Reservation() {
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [formError, setFormError] = useState<string | null>(null);

  const handleCaptchaChange = (token: string | null) => {
    setCaptchaToken(token);
  };

  const createRsvp = api.mywedding.submitRsvp.useMutation({
    onSuccess: () => {
      alert("success");
      setLoading(false);
    },
    onError: (error) => {
      alert(`Error: ${error.message}`);
    },
  });

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormError(null);

    const formData = new FormData(e.currentTarget);
    const formValues = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      whatsapp_number: formData.get("whatsapp_number") as string,
      attendance: formData.get("attendance") as string,
      message: formData.get("messages") as string,
      captcha: captchaToken as string,
    };

    const parsed = reservationSchema.safeParse(formValues);

    if (!parsed.success) {
      setFormError("Please fill in all required fields correctly.");
      console.log(parsed.error.format());
      return;
    }

    setLoading(true);

    console.log(formValues);

    createRsvp.mutate(formValues);
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

      {formError && (
        <div className="mb-4 text-center text-red-500">{formError}</div>
      )}

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
          <label
            htmlFor="email"
            className="block text-sm font-medium text-white"
          >
            Email
            <span className="text-[#C6754D]">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-[#C6754D] focus:outline-none focus:ring-[#C6754D]"
            required
          />
        </div>

        <div className="w-full">
          <label
            htmlFor="whatsapp_number"
            className="block text-sm font-medium text-white"
          >
            WhatsApp Number
            <span className="text-[#C6754D]">*</span>
          </label>
          <input
            type="tel"
            id="whatsapp_number"
            name="whatsapp_number"
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
                value="accept_with_pleasure"
                className="form-radio border-whtie h-5 w-5 appearance-none rounded-sm border-2 bg-white checked:bg-[#C6754D] focus:ring-[#C6754D]"
                required
              />
              <span className="ml-2">Accept with pleasure</span>
            </label>
            <label className="inline-flex w-full items-center gap-2 rounded-lg border p-3 text-white">
              <input
                type="radio"
                name="attendance"
                value="regretfully_decline"
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
            sitekey={env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
            onChange={handleCaptchaChange}
          />
        </div>

        <button
          type="submit"
          className="w-full rounded-md bg-[#FFD700] px-4 py-2 text-black shadow hover:bg-[#ffd900e0] focus:outline-none focus:ring-2 focus:ring-[#C6754D]"
          disabled={loading}
        >
          {loading ? "Loading..." : "Submit"}
        </button>
      </form>
    </div>
  );
}
