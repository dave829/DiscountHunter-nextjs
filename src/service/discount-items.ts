import { Card } from "@/types/Card";
import { storeName } from "@/types/StoreName";

//행사 상품 모두 가져오기
export async function requestAllEventProducts(): Promise<Card[]> {
  //const filePath = path.join(process.cwd(), "data", "cards", "cards.json");
  //return readFile(filePath, "utf-8")

  const res = await fetch(
    `https://discounthunt.o-r.kr/api/v1/event-products`
    //{}
  )
    //   if (!res) {
    //     throw new Error("fail to fetch data");
    //   }
    // .then<Card[]>((data) => JSON.parse(data))
    // .then((cards) => cards);
    //return res;
    //return res.json();
    .then<Card[]>((res) => res.json())
    .then((data) => {
      //console.log(data);
      return data;
    });

  return res;
}

// fetch('https://example.com/api/data')
//   .then(response => response.json())
//   .then(data => console.log(data));

//TEST 코드
// const fetchAllData = async (page) => {
//     const response = await fetch(
//       `https://api.youtube.org/3/movie/top?page=${page}`,
//       {
//         headers: {
//           Authorization: `Bearer ${process.env.NEXT_APP_API_KEY}`,
//         },
//       }
//     );
//     return response.json();
//   };

// codes / 편의점 상점 이름, 사용여부 ,  가져오기
export async function requestAllStoreName(): Promise<storeName[]> {
  //const filePath = path.join(process.cwd(), "data", "cards", "cards.json");
  //return readFile(filePath, "utf-8")

  const res = await fetch("https://discounthunt.o-r.kr/api/v1/codes")
    .then<storeName[]>((res) => res.json())
    .then((data) => data);
  return res;
}
