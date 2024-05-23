import React from "react";
import ReviewCard from "./ReviewCard";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export default function ReviewSection() {
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
    <section className="py-10 flex flex-col gap-10">
      <div>
        <p className="text-center font-bold text-3xl">
          What Customers Say About Us
        </p>
      </div>
      <div className="mt-9">
        <Carousel
          arrows={false}
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
          <ReviewCard />
          <ReviewCard />
          <ReviewCard />
          <ReviewCard />
          <ReviewCard />
          <ReviewCard />
        </Carousel>
      </div>
    </section>
  );
}
