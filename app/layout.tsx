import "./globals.css";
import type { Metadata } from "next";
import { ThemeProvider } from "./provider";
import { inter, roboto_mono } from "./font";
import { siteConfig } from "./lib/config";

export const metadata: Metadata = {
  title: siteConfig.name,
  description: siteConfig.description,
  keywords: ["Portfolio", "Next.js", "React", "Tailwind CSS", "Headless UI"],
  authors: [
    {
      name: "rakesh",
      url: "https://rakesh.website",
    },
  ],
  creator: "rakesh",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: "@kumarakeshh",
  },
  icons: {},
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${roboto_mono.variable}`}>
      <body className="min-h-screen bg-background font-sans antialiased px-4">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
