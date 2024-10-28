import type { Metadata } from "next";
import "./globals.css";
import { Open_Sans } from "next/font/google";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";

const sans = Open_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Discount Hunter | 편의점 이벤트 행사 상품 모아보기",
  description: "편의점 이벤트 행사 상품을 모아볼 수 있는 사이트 입니다.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={sans.className}>
      <body className="flex flex-col w-full mx-auto max-w-screen-3xl">
        <Header />
        <main className="grow flex flex-col justify-center">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
