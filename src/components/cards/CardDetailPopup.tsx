import React from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import CardDetail from "./CardDetail";
import { Card } from "@/types/Card";
import { cn } from "@/lib/utils";

export default function CardDetailPopup({ item }: { item: Card }) {
  return (
    <Popover>
      <PopoverTrigger className="font-bold hover:bg-slate-50 py-2 bg-transparent self-center border-t-1 rounded-2xl shadow-sm  w-full">
        상품정보 디테일
      </PopoverTrigger>
      <PopoverContent className={cn("w-96")}>
        {/* Place content for the popover here. */}
        <CardDetail item={item} />
        {/* 조건(로딩중이 아닐때) ? <CardDetail /> : <p>Place content for the popover here. </p> */}
      </PopoverContent>
    </Popover>
  );
}
