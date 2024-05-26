import Image from "next/image";
import HeroImage from "@/assets/image1.png";
import KeyFeatureCard from "@/components/KeyFeatureCard";
import { Breadcrumbs, BreadcrumbItem, Button } from "@nextui-org/react";

export default function ServiceDetail() {
  return (
    <main>
      {/* Breadcrums */}
      <div
        className="py-8 border"
        style={{
          backgroundImage: `url(https://www.bginfotechs.com/frontend/images/blog/blog-7.jpg)`,
          backgroundSize: "cover",
          width: "100%",
          height: "30vh",
        }}
      >
        <h3 className="font-bold text-4xl text-white px-4">
          Software Development
        </h3>
        <div className="mt-4">
          <Breadcrumbs size="lg" className="flex flex-col gap-3 px-4">
            <BreadcrumbItem>Home</BreadcrumbItem>
            <BreadcrumbItem>Services</BreadcrumbItem>
            <BreadcrumbItem>Detail</BreadcrumbItem>
          </Breadcrumbs>
        </div>
      </div>
      <div className="flex flex-col gap-4 mt-7 lg:mt-10 lg:flex-row lg:items-center">
        {/* Left */}
        <div>
          <p className="text-center font-semibold text-2xl lg:text-start">
            Get a unique, responsive and SEO friendly website for your business
            and enhance your global presence.
          </p>
          <div className="flex justify-center mt-3 lg:justify-start">
            <Button className="flex justify-center" size="lg">
              Get In Touch
            </Button>
          </div>
        </div>
        {/* Right */}
        <div>
          <Image src={HeroImage} alt="hero-img" />
        </div>
      </div>
      <div className="mt-8 flex flex-col gap-3 text-center lg:mt-16 lg:gap-5">
        <p className="text-center font-bold text-3xl">
          Corporate Website Development
        </p>
        <p>
          A website can be a game-changer for your business. A good website
          design can improve the outlook of your business and help you build
          credibility. As important as it is for your website to have a great
          design, so it is for it to be responsive, which means your website
          should look perfect in all devices – desktop, laptops, mobiles and
          tablets. We believe corporate websites should be designed to help you
          generate leads and to help increase your brand awareness. At Delta
          Tech, we build websites that have a great user interface and looks
          captivating and attractive, whilst ensuring that it is easily
          navigable and user-friendly.
        </p>
        <p>
          We also recognize that every customer has different requirements,
          therefore we spend an ample amount of time in understanding your needs
          and deliver quality services at affordable rates. A website can have a
          large number of features, and we can help you to decide the features
          that your website must have depending on your business. Our
          experienced team works hard to fully understand your brand, target
          audience, competitors, and hence we design your website to reflect
          your brand and values.
        </p>
      </div>
      <div className="mt-10">
        <h3 className="text-center font-bold text-2xl">
          Key Features of Corporate Websites
        </h3>
        <div className="mt-8 flex flex-col gap-4 md:flex-row md:flex-wrap md:justify-between md:gap-y-7">
          <KeyFeatureCard />
          <KeyFeatureCard />
          <KeyFeatureCard />
          <KeyFeatureCard />
          <KeyFeatureCard />
          <KeyFeatureCard />
        </div>
      </div>
      <div className="mt-10">
        <h3 className="text-center font-bold text-2xl">Why Choose Us ?</h3>
        <div className="mt-8 flex flex-col gap-4 md:flex-row md:flex-wrap md:justify-between md:gap-y-7">
          <KeyFeatureCard />
          <KeyFeatureCard />
          <KeyFeatureCard />
          <KeyFeatureCard />
          <KeyFeatureCard />
          <KeyFeatureCard />
        </div>
      </div>
      <div className="py-20 lg:px-14 xl:px-20">
        <p className="font-bold text-center text-2xl">
          Let us know your requirements and our experienced web and mobile app
          developers will help you establish your business online.
        </p>
        <span className="flex justify-center mt-6">
          <Button size="lg" className="lg:w-52">
            Get In Touch
          </Button>
        </span>
      </div>
    </main>
  );
}
