import { Button, Card } from "@nextui-org/react";
import Image from "next/image";
import HeroImage from "@/assets/image1.png";

export default function BlogCard() {
  return (
    <Card className="flex flex-col p-3 gap-4 md:flex-row md:items-center md:gap-5 xl:gap-7 md:justify-between md:py-2">
      <div>
        <Image src={HeroImage} alt="blog-image" />
      </div>
      <div className="flex flex-col gap-2">
        <h3 className="font-semibold text-xl">Enhancing sales Protection</h3>
        <span className="flex items-center gap-3">
          <p>Dec 12, 2023</p>
          <p>Author: Bijina Pokhrel</p>
        </span>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur
          ad vero nihil accusamus ab recusandae pariatur necessitatibus ipsum
          excepturi sed?
        </p>
        <Button className="w-32">Read More</Button>
      </div>
    </Card>
  );
}
