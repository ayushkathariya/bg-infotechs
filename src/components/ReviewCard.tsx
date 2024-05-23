import Image from "next/image";
import { Card } from "@nextui-org/react";
import HeroImage from "@/assets/image1.png";

export default function ReviewCard() {
  return (
    <Card className="px-2 py-3 md:w-[19rem] mdx:w-[23rem] lg:w-[16.3rem] xl:w-[20rem] cursor-pointer">
      <Image src={HeroImage} alt="portfolio-img" className="w-full" />
    </Card>
  );
}
