import { Card } from "@/types/Card";
//import Image from "next/image";
//import Link from "next/link";
//import { clsx } from "clsx";
//import coke from "/public/images/store_item/coke.webp";
//import CardImage from "./CardImage";
//import blur from "../../../public/extra.webp";

import CardContents from "./CardContents";
//import CardDetail from "./CardDetail";
import CardDetailPopup from "./CardDetailPopup";

type Props = { item: Card };

// const result = clsx({
// 	imagePath: true,
//   "button-primary": true
// })

export default function ItemCard({
  //item: { storeName, imgPath, name, promotionTypeName, price },
  item,
}: Props) {
  //console.log(imgPath.startsWith); // //tqklhszfkvzk6518638.cdn.ntruss.com/product/8806004000587.png
  //const imgUrl = imgPath.replace("//", " ");
  //console.log(imgUrl);

  // const absoluteImageUrl = imgPath?.startsWith("//")
  //   ? `https:${imgPath}`
  //   : imgPath;

  //const img = imgPath.replace("//", "");
  //console.log(img);

  //const storeNames = storeName.

  //const img = `http://${imgPath.replace("http://", "").replace("//", "")}`;

  //storeName === "CU" && "text-red";
  //"[text-shadow:-2px_0px_#9CC92B,0px_1px_#9CC92B,1px_0px_#9CC92B,0px_-1px_#9CC92B]";

  //w-320
  //h-52 w-80
  return (
    <article className="flex flex-col p-4  rounded-md bg-white border border-gray-200 shadow-md">
      <CardContents item={item} />
      {/* <Link href={`/cards/${name}`}> */}
      {/* <button className="hover:bg-slate-50 py-2 bg-transparent self-center border-t-1 rounded-2xl shadow-sm  w-full">
          <p className="font-bold">상품정보 디테일</p>
        </button> */}
      <CardDetailPopup item={item} />
      {/* </Link> */}
    </article>
  );
}
