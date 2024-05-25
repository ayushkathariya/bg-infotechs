import HeroImage from "@/assets/image1.png";
import EmployeeCard from "@/components/EmployeeCard";
import ReviewCard from "@/components/ReviewCard";
import VisionSection from "@/components/VisionSection";
import Image from "next/image";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export default function AboutUs() {
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
    <div className="py-10">
      <div className="flex flex-col gap-5 md:flex-row md:items-center md:gap-10">
        <div>
          <Image src={HeroImage} alt="about-us" className="md:w-[190rem]" />
        </div>
        <div className="flex flex-col gap-4">
          <h2 className="font-bold text-3xl">About BG Infotechs</h2>
          <p>
            BG Infotechs is a Software Development Company based in Nepal.
            Established in 2024, we have a brilliant team of software
            developers, designers and technical support members, and over 1500
            happy clients globally. We are a member of RK Golchha Group and
            Golchha Organization, one of the oldest and most esteemed business
            houses in Nepal. Golchha Organization, which was established in
            1934, employs over 20,000 people across Nepal and has an annual
            turnover of over 400 million USD.
          </p>
          <p>
            BG Infotechs started as a web and mobile app development company.
            Initially, we entered the tech business with a motive to become a
            top service-based technology company. After a few months of
            continuous market research, we realized that many organizations need
            user-friendly business software to enhance their productivity,
            performance and ROI. Thus, we started focusing on building SaaS
            applications that can solve common business problems.
          </p>
        </div>
      </div>
      <div className="py-14">
        <VisionSection />
      </div>
      <div className="mt-16">
        <h3 className="font-bold text-3xl text-center">Meet Our Team</h3>
        <p className="mt-5 text-center px-2 md:px-8">
          Meet the talented individuals who drive our software company's
          innovation. Discover the diverse skills and expertise that make our
          team exceptional. From creative developers to meticulous testers, each
          member plays a crucial role in our success.
        </p>
        <div className="mt-5 lg:mt-8 flex flex-col gap-4 items-center md:flex-row md:flex-wrap md:justify-between">
          <EmployeeCard />
          <EmployeeCard />
          <EmployeeCard />
          <EmployeeCard />
          <EmployeeCard />
          <EmployeeCard />
        </div>
      </div>
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
      <div className="mt-10">
        <address>
          <div className="text-center font-bold text-3xl">
            Bg Infotechs, Uttar Mukhe Marg, Dhangadhi
          </div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3499.332297185633!2d80.5806791740978!3d28.709613680578805!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa13e527e18e84e77%3A0xb449ff1e9cf625a0!2sBG%20Infotechs!5e0!3m2!1sen!2snp!4v1716547192542!5m2!1sen!2snp"
            width="600"
            height="450"
            allowFullScreen
            className="mt-6 w-full rounded"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </address>
      </div>
    </div>
  );
}
