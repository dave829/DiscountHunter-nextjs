//import { notFound } from "next/navigation";
import { getProduct, getProducts } from "@/service/products";
import Image from "next/image";

type Props = {
  params: {
    slug: string;
  };
};

export function generateMetadata({ params: { slug } }: Props) {
  return {
    title: `제품 이름: ${slug}`,
  };
}

export default async function ProductPage({ params: { slug } }: Props) {
  const product = await getProduct(slug);
  //console.log(product);

  if (!product) {
    //return notFound();
    return <h1>해당 제품을 찾을 수 없어요. 😭</h1>;
  }
  return (
    <>
      <Image
        src={`/data/img/${product.img_path}`}
        width={100}
        height={100}
        alt={product.name}
      />
      <h1>{product.name} 제품설명페이지</h1>
      <p>{product.price}</p>
    </>
  );
}

export async function generateStaticParams() {
  const products = await getProducts();
  //console.log(products);

  return products.map((product) => ({
    slug: product.id,
  }));
}
