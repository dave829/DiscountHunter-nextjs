import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import coke from "../../public/images/store_item/coke.webp";
import sprite from "../../public/images/store_item/sprite.webp";
import zeroCoke from "../../public/images/store_item/zeroCoke.webp";

export default function Carousel_() {
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full max-w-sm"
    >
      <CarouselContent>
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
            <div className="p-1">
              <Card className="my-4">
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <Image src={coke} alt="" width={100} height={100} priority />
                </CardContent>
              </Card>
              <Card className="my-4">
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <Image
                    src={sprite}
                    alt=""
                    width={100}
                    height={100}
                    priority
                  />
                </CardContent>
              </Card>
              <Card className="my-4">
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <Image
                    src={zeroCoke}
                    alt=""
                    width={100}
                    height={100}
                    priority
                  />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
