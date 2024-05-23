import Image from "next/image";
import HeroImage from "@/assets/image1.png";
import { Button } from "@nextui-org/react";

export default function HeroSection() {
  return (
    <section className="flex flex-col  gap-7 py-7 lg:flex-row-reverse lg:items-center lg:gap-20 lg:py-[5.85rem]">
      {/* left section */}
      <div>
        <Image
          src={HeroImage}
          alt="hero-image"
          className="w-full lg:w-[50rem] lg:h-56"
        />
      </div>
      {/*  right section */}
      <div className="flex flex-col gap-3 lg:gap-6">
        <p className="text-center font-bold text-2xl lg:text-start lg:text-4xl">
          Offering you the best digital products and services
        </p>
        <p className="text-center font-medium lg:text-start lg:text-xl">
          We are passionate about harnessing this beauty to create
          transformative solutions that elevate businesses to new heights.
        </p>
        <div className="flex justify-center gap-5 lg:justify-start">
          <Button size="lg" className="w-40">
            Let's Talk
          </Button>
        </div>
      </div>
    </section>
  );
}
