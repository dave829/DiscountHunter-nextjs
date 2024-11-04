"use client";

//import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
//import useSWR from "swr";

export default function Search() {
  //사용자 가 있을시
  // 1. 사용자가 키워드를 입력하면,
  //즉, 김철수 유저 좀 찾아줄래?
  // /api/search/${keyword}
  // api 라우터에서는, 검색하는  키워드가 있다면,  즉, /api/search/김철수 -> 유저네임에 김철수가 있으면  그거 찾아서 리턴
  // 없다면 /api/search ->  전체유저 리턴

  //사용자 없을시

  //
  //const [inFocus, setFocus] = useState(false);

  // 키워드
  //const [keyword, setKeyword] = useState("");

  //통신
  //const { data, isLoading, error } = useSWR(`api/search/${keyword}`);
  //const { data, isLoading, error } = useSWR(`api/search/${keyword}`);
  //console.log(data);

  return (
    <div className="flex w-full max-w-sm items-center space-x-2">
      <Input
        type="text"
        placeholder="상품을 입력하세요"
        //onFocus={(e) => setFocus(true)}
        onChange={(e) => {
          const keyword = e.target.value;
          if (keyword) {
            fetch(`/api/search/${keyword}`)
              .then((res) => res.json())
              .then((data) => {
                // Handle search results
                console.log(data);
              });
          } else {
            fetch("/api/search")
              .then((res) => res.json())
              .then((data) => {
                // Handle all users
                console.log(data);
              });
          }
        }}
      />
      <Button type="submit">검색</Button>
    </div>
  );
}
