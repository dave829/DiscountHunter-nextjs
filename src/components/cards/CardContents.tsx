"use client";

import { Card } from "@/types/Card";
import React from "react";
import { tv } from "tailwind-variants";
import CardImage from "./CardImage";

type Props = { item: Card };

const storeNameColor = tv({
  base: "text-white font-bold text-lg",
  variants: {
    textColor: {
      //cu: "text-green-800",
      cu: "[text-shadow:-2px_0px_#9CC92B,0px_1px_#9CC92B,1px_0px_#9CC92B,0px_-1px_#9CC92B]",
      gs25: "[text-shadow:-2px_0px_#3333FF,0px_1px_#3333FF,1px_0px_#3333FF,0px_-1px_#3333FF]",
      e_mart24:
        "[text-shadow:-2px_0px_#FFFF00,0px_1px_#FFFF00,1px_0px_#FFFF00,0px_-1px_#FFFF00]",
    },
  },
});

export default function CardContents({
  item: { storeName, imgPath, name, promotionTypeName, price },
}: Props) {
  return (
    <>
      <span className="border-b-2 border-slate-200">
        <p
          className={` 
                  ${
                    (storeName === "CU" &&
                      storeNameColor({ textColor: "cu" })) ||
                    (storeName === "GS24" &&
                      storeNameColor({ textColor: "gs25" })) ||
                    (storeName === "emart24" &&
                      storeNameColor({ textColor: "e_mart24" }))
                  }
                  `}
        >
          {storeName}
        </p>
      </span>
      <div className="flex justify-center items-center w-full h-full truncate">
        <CardImage name={name} imgPath={imgPath} />
        <div className=" flex flex-col justify-center  w-full gap-1">
          {/* <time className="self-end text-white">{date.toString()}</time> */}
          <time className="text-end">
            {/* {date} */}
            11.11~12.30
          </time>
          <div className="flex flex-col justify-center items-center gap-1">
            <h3 className="text-lg font-bold truncate">{name}</h3>
            <span>{promotionTypeName}</span>
            <p>가격: {price} 원</p>
          </div>
        </div>
      </div>
    </>
  );
}
