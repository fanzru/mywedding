import "~/styles/globals.css";
import { GeistSans } from "geist/font/sans";
import { TRPCReactProvider } from "~/trpc/react";
import Head from "next/head";
import { type Metadata } from "next";

export const metadata: Metadata = {
  title: "Affan & Amelia | Wedding Invitation",
  description: "Celebrate our special day with us!",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

const metaImageUrl = "/images/meta/img.webp"; // Path ke meta image

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={GeistSans.variable || ""}>
      <Head>
        <title>{"Affan & Amelia | Wedding Invitation"}</title>
        <meta name="description" content={metadata.description || "Default Description"} />
        {/* Open Graph metadata */}
        <meta property="og:title" content="Affan & Amelia | Wedding Invitation" />
        <meta property="og:description" content={metadata.description || "Default Description"} />
        <meta property="og:image" content={metaImageUrl || "/images/meta/img.webp"} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://affanamelia.com" /> {/* Ganti dengan URL Anda */}
        {/* Favicon */}
        <link rel="icon" href={ "/favicon.ico"} />
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Affan & Amelia | Wedding Invitation" />
        <meta name="twitter:description" content={metadata.description || "Default Description"} />
        <meta name="twitter:image" content={metaImageUrl || "/images/meta/default.webp"} />
      </Head>
      <body className="bg-[#191919]">
        <TRPCReactProvider>{children}</TRPCReactProvider>
      </body>
    </html>
  );
}
