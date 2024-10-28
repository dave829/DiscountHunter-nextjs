import { Card } from "@/service/cards";
import Image from "next/image";
import Link from "next/link";
//import { clsx } from "clsx";
//import coke from "/public/images/store_item/coke.webp";

type Props = { item: Card };

// const result = clsx({
// 	imagePath: true,
//   "button-primary": true
// })

export default function ItemCard({
  item: { title, description, date, category, imagePath, storeType },
}: Props) {
  return (
    <Link href={`/cards/${imagePath}`}>
      <article
        className={`flex flex-col justify-center items-center rounded-2xl overflow-hidden  border-8 border-white
          bg-transparent
         
          `}
      >
        <div className="flex flex-col w-full  py-1 bg-[#383737]">
          <time className="self-end text-white">{date.toString()}</time>
          <span className=" border-[3px] rounded-md text-center m-1 p-0.5 px-2 w-fit">
            <p
              className={`
              text-white 
            ${
              storeType === "CU" &&
              "[text-shadow:-2px_0px_#9CC92B,0px_1px_#9CC92B,1px_0px_#9CC92B,0px_-1px_#9CC92B]"
            }`}
            >
              {storeType}
            </p>
          </span>
        </div>
        <Image
          //src="/images/store_item/coke.webp"
          //src={coke}
          src={`/images/store_item/${imagePath}.webp`}
          alt={title}
          width={200}
          height={200}
          priority
          className="h-80 w-full rounded-s"
        />
        <div className="flex flex-col items-center p-4 ">
          <h3 className="text-lg font-bold text-white">{title}</h3>
          <p className="w-full truncate text-center text-white">
            {description}
          </p>
          <span className="text-sm rounded-xl bg-green-100 my-2 p-1">
            {category}
          </span>
        </div>
      </article>
    </Link>
  );
}
