import "~/styles/globals.css";
import { GeistSans } from "geist/font/sans";
import { TRPCReactProvider } from "~/trpc/react";
import { DefaultSeo } from "next-seo";

const metaImageUrl = "/images/meta/img.webp"; // URL meta image

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={GeistSans.variable || ""}>
      {/* Default SEO Configuration */}
      <DefaultSeo
        title="Affan & Amelia | Wedding Invitation"
        description="Celebrate our special day with us!"
        canonical="https://affanamelia.com"
        openGraph={{
          type: "website",
          locale: "en_US",
          url: "https://affanamelia.com",
          title: "Affan & Amelia | Wedding Invitation",
          description: "Celebrate our special day with us!",
          images: [
            {
              url: metaImageUrl,
              width: 1200,
              height: 630,
              alt: "Affan & Amelia Wedding Invitation",
            },
          ],
        }}
        twitter={{
          handle: "@your_twitter_handle",
          site: "@your_twitter_handle",
          cardType: "summary_large_image",
        }}
      />
      <body className="bg-[#191919]">
        <TRPCReactProvider>{children}</TRPCReactProvider>
      </body>
    </html>
  );
}
