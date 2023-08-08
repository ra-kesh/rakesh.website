import "./globals.css";
import type { Metadata } from "next";
import { ThemeProvider } from "./provider";
import { inter, roboto_mono } from "./font";

export const metadata: Metadata = {
  title: "Rakesh Kumar",
  description: "Frontend developer from India specialised in React",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${roboto_mono.variable}`}>
      <body className="min-h-screen font-sans antialiased">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
