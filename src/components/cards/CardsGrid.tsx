import { Card } from "@/service/cards";
import ItemCard from "./ItemCard";

type Props = { cards: Card[] };

export default function CardsGrid({ cards }: Props) {
  //props 데이터 들어옴
  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-4">
      {cards.map((item) => (
        <li className="" key={item.id}>
          <ItemCard item={item} />
        </li>
      ))}
    </ul>
  );
}
