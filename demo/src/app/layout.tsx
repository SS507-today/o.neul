import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "오늘은",
  description:
    "그 시절 교환일기로 서로의 오늘을 기록하고 교환하는 어플리케이션",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Noto+Sans:wght@400;700&display=swap"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}