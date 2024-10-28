import { Toggle } from "@/components/ui/toggle";

// type Props = {
//   props: string;
// };

const stores = ["전체", "CU", "GS", "이마트", "세븐일레븐"];
const items = [
  "전체",
  "코카콜라",
  "코카콜라 제로",
  "스프라이트",
  "스프라이트 제로",
];
const event = ["전체", "1+1", "1+2", "2+1", "2+2", "4+4"];
const category = ["전체", "음료", "과자", "식품", "아이스크림"];
const price = ["전체", "2천원대", "3천원대", "4천원대", "5천원대"];

export default function Toggle_() {
  //   function items({ items: [] }) {
  //       return (
  //         <ul className="flex justify-center">
  //           {items.map((item: string, i: number) => (
  //             <li key={i}>
  //               <Toggle_ props={item} />
  //             </li>
  //           ))}
  //         </ul>
  //       );
  //     }
  return (
    <>
      <ul className="flex justify-center">
        {stores.map((item, i) => (
          <li key={i}>
            {/* <Toggle_ props={store} /> */}
            <Toggle aria-label="Toggle bold">{item}</Toggle>
          </li>
        ))}
      </ul>
      <ul className="flex justify-center">
        {items.map((item, i) => (
          <li key={i}>
            {/* <Toggle_ props={store} /> */}
            <Toggle aria-label="Toggle bold">{item}</Toggle>
          </li>
        ))}
      </ul>
      <ul className="flex justify-center">
        {event.map((item, i) => (
          <li key={i}>
            {/* <Toggle_ props={store} /> */}
            <Toggle aria-label="Toggle bold">{item}</Toggle>
          </li>
        ))}
      </ul>
      <ul className="flex justify-center">
        {category.map((item, i) => (
          <li key={i}>
            {/* <Toggle_ props={store} /> */}
            <Toggle aria-label="Toggle bold">{item}</Toggle>
          </li>
        ))}
      </ul>
      <ul className="flex justify-center">
        {price.map((item, i) => (
          <li key={i}>
            {/* <Toggle_ props={store} /> */}
            <Toggle aria-label="Toggle bold">{item}</Toggle>
          </li>
        ))}
      </ul>
    </>
  );
}
