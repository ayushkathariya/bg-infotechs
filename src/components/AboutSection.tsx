import Image from "next/image";
import HeroImage from "@/assets/image1.png";
import { Button } from "@nextui-org/react";

export default function AboutSection() {
  return (
    <section className="flex flex-col-reverse  gap-7 py-3 lg:flex-row lg:items-center lg:gap-x-28">
      {/* right section */}
      <div>
        <Image
          src={HeroImage}
          alt="hero-image"
          className="w-full lg:w-[145rem] lg:h-60"
        />
      </div>
      {/*  left section */}
      <div className="flex flex-col gap-3 lg:gap-6">
        <p className="text-center font-bold text-2xl lg:text-start lg:text-4xl">
          About Us
        </p>
        <p className="text-center font-medium lg:text-start lg:text-xl">
          At BG Infotechs Pvt Ltd, we specialize in providing comprehensive IT
          solutions and training services to empower businesses to thrive in the
          digital age. Our team is dedicated to delivering high-quality services
          tailored to your specific needs, ensuring that your business stands
          out in today's competitive market.
        </p>
        <div className="flex justify-center gap-5 lg:justify-start">
          <Button size="lg" className="w-40">
            Know More
          </Button>
        </div>
      </div>
    </section>
  );
}
