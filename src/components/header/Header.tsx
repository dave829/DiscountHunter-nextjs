import Link from "next/link";
import Image from "next/image";
import DiscountHunterLogo from "../../../public/images/logo/DiscountHunterLogo.webp";

export default function Header() {
  return (
    <header className="flex flex-col justify-between  p-2">
      {/* <div className="w-full h-[300px] bg-transparent fixed text-center " /> */}
      {/* <div className="fixed w-full"> */}
      <nav className="flex gap-6 justify-end  p-[4.5rem] w-full">
        {/* <Link href="/products">
          Products
        </Link> */}
        <Link href="/contact">Contact</Link>
        <Link href="/about">About</Link>
      </nav>
      <Link className="flex justify-center" href="/">
        {/* <h1 className=" text-center  mb-3 text-5xl text-white font-bold [text-shadow:-5px_0px_#25F4EE,0px_5px_black,5px_0px_black,0px_-5px_#FE2C55]">
          Discount Hunter
        </h1> */}
        <Image
          //className="hover:animate-spin"
          src={DiscountHunterLogo}
          alt="logo"
          priority
        />
      </Link>
      {/* </div> */}
      {/* <Image
        src="https://images.unsplash.com/photo-1604066867775-43f48e3957d8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Image"
        className="object-cover z-[-1] w-full"
        objectFit="cover"
        objectPosition="center"
        fill
      /> */}
    </header>
  );
}
