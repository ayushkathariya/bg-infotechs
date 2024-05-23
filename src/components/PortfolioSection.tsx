import PortfolioCard from "./PortfolioCard";
import { Link } from "@nextui-org/react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export default function PortfolioSection() {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3,
    },
    tablet: {
      breakpoint: { max: 1023, min: 768 },
      items: 2,
      slidesToSlide: 2,
    },
    mobile: {
      breakpoint: { max: 767, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };
  return (
    <section className="py-10">
      {/* Top Section */}
      <h2 className="font-bold text-3xl">Portfolio</h2>
      <div className="flex flex-col mt-3">
        <div>
          <p className="font-semibold text-lg">
            Our Latest Work For Our Customer
          </p>
        </div>
        <div className="mt-3 flex gap-6">
          <Link href={`#`}>All</Link>
          <Link href={`#`}>Web Design</Link>
          <Link href={`#`}>Digital Marketing</Link>
          <Link href={`#`}>SEO</Link>
        </div>
      </div>
      {/* Bottom Section */}
      <div className="mt-7">
        <Carousel
          swipeable={true}
          draggable={true}
          responsive={responsive}
          ssr={true}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={3000}
          keyBoardControl={true}
          customTransition="all 1.5"
          transitionDuration={2000}
          containerClass="carousel-container"
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px"
        >
          <PortfolioCard />
          <PortfolioCard />
          <PortfolioCard />
          <PortfolioCard />
          <PortfolioCard />
          <PortfolioCard />
        </Carousel>
      </div>
    </section>
  );
}
