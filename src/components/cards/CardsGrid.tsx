import { Card } from "@/types/Card";
import ItemCard from "./ItemCard";
//import { storeName } from "@/types/StoreName";

type Props = {
  cards: Card[];
  //storeNameCard: storeName[];
};

export default function CardsGrid({ cards }: Props) {
  //props 데이터 들어옴
  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mx-7 gap-5 ">
      {cards.map((item) => (
        <li key={item.name}>
          <ItemCard item={item} />
        </li>
      ))}
    </ul>
  );
}
