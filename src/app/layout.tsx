import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { LocaleProvider } from "@/i18n/LocaleProvider";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Liu Xu (Daisy) · Test Engineering & QA Portfolio",
  description:
    "Senior Test Engineer / SDET: lab testing QA, test automation, k6 performance, Jira Xray, DevOps tooling, and AI-augmented testing.",
  metadataBase: new URL("https://xudage.fun"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="flex min-h-full flex-col">
        <LocaleProvider>{children}</LocaleProvider>
      </body>
    </html>
  );
}
