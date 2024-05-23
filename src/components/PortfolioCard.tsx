import Image from "next/image";
import { Card, CardBody } from "@nextui-org/react";
import HeroImage from "@/assets/image1.png";

export default function PortfolioCard() {
  return (
    <Card className="px-2 py-3 md:w-[19rem] mdx:w-[23rem] lg:w-[16.3rem] xl:w-[20rem] cursor-pointer">
      <Image src={HeroImage} alt="portfolio-img" className="w-full" />
      <CardBody className="flex flex-col gap-2">
        <p className="font-semibold text-lg">Web Development</p>
        <p>Marketing/Consulting</p>
      </CardBody>
    </Card>
  );
}
