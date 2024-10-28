import { getFeaturedCards } from "@/service/cards";
import CardsGrid from "./CardsGrid";

export default async function FeaturedCards() {
  // 1. 모든 card 데이터를 읽어와야함
  // 로컬폴더 데이터안에, json파일 읽어오기,
  // 하지만 여기서 복잡한 비즈니스 로직 담으면 안되고, 전가만하는거임 즉, service폴더에 로직을 만들고 임포트해서 쓸것!
  const featuredCards = await getFeaturedCards(); // []

  // 2. 모든 card 데이터를 보여줌

  return (
    <section>
      <h2>Featured Cards</h2>
      <CardsGrid cards={featuredCards} />
    </section>
  );
}
