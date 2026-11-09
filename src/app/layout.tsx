import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { LocaleProvider } from "@/i18n/LocaleProvider";
import BackToTop from "@/components/BackToTop";
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
  openGraph: {
    title: "Liu Xu (Daisy) · Test Engineering & QA Portfolio",
    description:
      "Senior Test Engineer / SDET: lab testing QA, test automation, k6 performance, Jira Xray, DevOps tooling, and AI-augmented testing.",
    url: "https://xudage.fun",
    siteName: "Xudage Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Liu Xu (Daisy) — Senior Test Engineer / SDET portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Liu Xu (Daisy) · Test Engineering & QA Portfolio",
    description:
      "Senior Test Engineer / SDET: lab testing QA, test automation, k6 performance, Jira Xray, DevOps tooling, and AI-augmented testing.",
    images: ["/og-image.png"],
  },
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
        <LocaleProvider>
          {children}
          <BackToTop />
        </LocaleProvider>
      </body>
    </html>
  );
}
