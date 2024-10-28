//import image from '../../public/images/profile.png' //로컬 이미지 경로 예시

import FeaturedCards from "@/components/cards/FeaturedCards";
import Hero from "@/components/home/Hero";

export default function HomePage() {
  return (
    // <Image src={image} alt="" width={250} height={250} priority />
    <>
      <Hero />
      <FeaturedCards />
    </>
  );
}
