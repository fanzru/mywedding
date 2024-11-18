import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import axios from "axios";

const EXTERNAL_API_URL = "https://api.wedding.fanzru.dev/rsvp";
const MESSAGE_API_URL = "https://api.wedding.fanzru.dev/message";

export const mywedding = createTRPCRouter({
  submitRsvp: publicProcedure
    .input(
      z.object({
        name: z.string().min(1, "Name is required"),
        email: z
          .string()
          .email("Invalid email format")
          .min(1, "Email is required"),
        whatsapp_number: z.string().min(1, "WhatsApp number is required"),
        attendance: z.string().min(1, "attendance is required"),
        message: z.string().min(1, "Message is required"),
        captcha: z.string().min(1, "Captcha is required"),
      }),
    )
    .mutation(async ({ input }) => {
      try {
        const response = await axios.post(EXTERNAL_API_URL, {
          name: input.name,
          email: input.email,
          whatsapp_number: input.whatsapp_number,
          attendance: input.attendance,
          message: input.message,
          captcha: input.captcha,
        });

        if (response.status === 200) {
          return { success: true, message: "RSVP submitted successfully!" };
        } else {
          throw new Error(response.data?.error || "Unknown error occurred");
        }
      } catch (error: any) {
        console.error("Error submitting RSVP:", error);
        throw new Error(error.response?.data?.error || "Failed to submit RSVP");
      }
    }),

  getMessages: publicProcedure.query(async () => {
    try {
      const response = await axios.get(MESSAGE_API_URL);

      if (response.status === 200) {
        return response.data;
      } else {
        throw new Error(response.data?.error || "Failed to fetch messages");
      }
    } catch (error: any) {
      console.error("Error fetching messages:", error);
      throw new Error(
        error.response?.data?.error || "Failed to fetch messages",
      );
    }
  }),
});
