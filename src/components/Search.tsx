import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function Search() {
  return (
    <div className="flex w-full max-w-sm items-center space-x-2">
      <Input type="text" placeholder="상품을 입력하세요"  />
      <Button type="submit" >검색</Button>
    </div>
  );
}
