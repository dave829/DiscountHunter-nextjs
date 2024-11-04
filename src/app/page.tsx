//import image from '../../public/images/profile.png' //로컬 이미지 경로 예시

import FeaturedCards from "@/components/cards/FeaturedCards";
import Hero from "@/components/home/Hero";

export default function HomePage() {
  return (
    // <Image src={image} alt="" width={250} height={250} priority />
    <>
      <div className="Menubar px-[5px] py-1 left-[1103px] top-[16px] absolute bg-white rounded-md border border-slate-300 justify-start items-start inline-flex">
      <div className="MenubarItem px-3 py-1.5 bg-white justify-start items-start flex">
        <div className="File text-black text-sm font-medium font-['Inter'] leading-tight">공지사항</div>
      </div>
      <div className="MenubarItem px-3 py-1.5 bg-white justify-start items-start flex">
        <div className="File text-black text-sm font-medium font-['Inter'] leading-tight">게시판</div>
      </div>
      <div className="MenubarItem px-3 py-1.5 bg-white justify-start items-start flex">
        <div className="File text-black text-sm font-medium font-['Inter'] leading-tight">로그인</div>
      </div>
      </div>
      <Hero />
      <FeaturedCards />
    </>
  );
}
