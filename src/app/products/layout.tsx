import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "편의점 이벤트 행사 상품 모아보기 | 전체 상품 확인 | 1+1 상품 확인 | 2+1 상품 확인",
  description:
    "편의점 이벤트 행사 상품을 모아볼 수 있는 사이트 입니다. | 1+1 상품을 확인해 보세요. | 2+1 상품을 확인해 보세요.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function ProductsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <nav className="">
        <Link href="/products/cu">CU</Link>
        <Link href="/products/gs">GS</Link>
      </nav>
      <section className="">{children}</section>
    </>
  );
}
