import Image from "next/image";
import HeroImage from "@/assets/image1.png";
import { Card } from "@nextui-org/react";

export default function ServiceCard() {
  return (
    <Card className="flex gap-5 px-3 cursor-pointer py-5 rounded-lg md:w-[19.5rem] mdx:w-[23rem] lg:w-[17rem] xl:w-[22rem]">
      {/* Left Section */}
      <div>
        <Image src={HeroImage} alt="service-img" width={80} height={90} />
      </div>
      {/*  Right Section */}
      <div>
        <h2 className="font-semibold text-xl">Software Development</h2>
        <p className="font-normal">
          Get a robust and user-friendly software that solves your business
          problems.
        </p>
      </div>
    </Card>
  );
}
