import "./globals.css";
import { Analytics } from "@vercel/analytics/react";

export const metadata = {
  title: "LolGPT - ChatGPT Plugin to get League of Legends champion information",
  description:
    "LolGPT is a ChatGPT Plugin to get League of Legends champion information. Built with Next.js and served from Vercel's Edge Network.",
  twitter: {
    card: "summary_large_image",
    title:
      "LolGPT - ChatGPT Plugin to get League of Legends champion information",
    description:
      "LolGPT is a ChatGPT Plugin to get League of Legends champion information. Built with Next.js and served from Vercel's Edge Network.",
    creator: "@jacob4u2",
  },
  metadataBase: new URL("https://lolgpt.vercel.app"),
  themeColor: "#FFF",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
