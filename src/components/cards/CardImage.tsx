"use client";

import Image from "next/image";

export default function CardImage({
  name,
  imgPath,
}: {
  name: string;
  imgPath: string;
}) {
  const img = `http://${imgPath.replace("http://", "").replace("//", "")}`;

  return (
    <>
      <Image
        src={img}
        alt={name}
        width={65}
        height={84}
        style={{ width: 65, height: 84 }}
        //priority
        placeholder="empty"
      />
    </>
  );
}
