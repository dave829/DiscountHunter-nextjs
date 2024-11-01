//import CarouselSize from "@/components/Carousel_";
//import PaginationLink_ from "@/components/PaginationLink_";
import Search from "@/components/Search";
import Toggle_ from "@/components/Toggle_";

//import image from '../../public/images/profile.png' //로컬 이미지 경로 예시

export default function Hero() {
  return (
    <section>
      <p>Hero</p>
      <div className="flex justify-center items-center">
        <Search size={100} />
      </div>
      <div className="my-5">
        <Toggle_ />
      </div>
      <div className="bg-slate-50 flex justify-center items-center">
        {/* <CarouselSize /> */}
      </div>
      <div>{/* <PaginationLink_ /> */}</div>

      {/* 로고 */}
      {/* <Image src={image} alt="" width={250} height={250} priority /> */}
    </section>
  );
}
