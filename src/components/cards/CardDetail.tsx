"use client";

import React from "react";
import CardContents from "./CardContents";
import { Card } from "@/types/Card";

export default function CardDetail({ item }: { item: Card }) {
  return (
    <>
      <p className="text-center">Test 중 입니다.</p>
      <CardContents item={item} />
    </>
  );
}
