import "~/styles/globals.css";
import { GeistSans } from "geist/font/sans";
import { TRPCReactProvider } from "~/trpc/react";
import Head from "next/head";
import { type Metadata } from "next";

export const metadata: Metadata = {
  title: "Affan & Amelia | Wedding Invitation",
  description: "Celebrate our special day with us!",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
  openGraph: {
    title: "Affan & Amelia | Wedding Invitation",
    description: "Celebrate our special day with us!",
    images: [{ url: "https://affanamelia.com/meta.jpeg" }],
  },
};

const metaImageUrl = "/meta.jpeg"; // Path ke meta image

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={GeistSans.variable || ""}>
      <body className="bg-[#191919]">
        <TRPCReactProvider>{children}</TRPCReactProvider>
      </body>
    </html>
  );
}
