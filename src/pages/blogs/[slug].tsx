import Image from "next/image";
import HeroImage from "@/assets/image1.png";
import Comment from "@/components/Comment";
import CommentList from "@/components/CommentList";
import BlogShare from "@/components/BlogShare";
import { Breadcrumbs, BreadcrumbItem } from "@nextui-org/react";

export default function BlogDetail() {
  return (
    <>
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
          Enhancing sales Protection
        </h3>
        <div className="mt-4">
          <Breadcrumbs size="lg" className="flex flex-col gap-3 px-4">
            <BreadcrumbItem>Home</BreadcrumbItem>
            <BreadcrumbItem>Details</BreadcrumbItem>
            <BreadcrumbItem>Blog</BreadcrumbItem>
          </Breadcrumbs>
        </div>
      </div>
      <div className="flex flex-col p-3 cursor-pointer gap-4 mt-5 lg:mt-10 md:flex-row md:items-center md:gap-5 xl:gap-7 md:justify-between md:py-2">
        <div>
          <Image
            src={HeroImage}
            alt="blog-image"
            className="w-80 mdx:w-96 lg:w-[28rem] xl:w-[34rem]"
          />
        </div>
        <div className="flex flex-col gap-2">
          <h3 className="font-semibold text-xl md:text-3xl">
            Enhancing sales Protection
          </h3>
          <span className="flex items-center gap-3 md:text-base">
            <p>Dec 12, 2023</p>
            <p>Author: Bijina Pokhrel</p>
          </span>
        </div>
      </div>
      <p className="text-justify md:mt-7">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, nesciunt
        in! Impedit, deleniti modi sunt fugit explicabo repellat incidunt
        possimus voluptates iusto, ipsum non delectus. Facere consequuntur
        pariatur iusto nobis cupiditate, nemo quod saepe iste fuga sed quas
        laudantium neque, suscipit corrupti delectus expedita ipsa amet vero
        veniam non enim eaque laborum ut. Ducimus quo veritatis placeat cumque
        nihil, veniam voluptatum officia inventore nostrum animi itaque
        assumenda quaerat non expedita, temporibus et consequatur repellendus,
        odio vel consequuntur minus ea quisquam quae maxime! Doloribus enim
        molestias eos cum, atque, aut soluta molestiae inventore magni dicta
        obcaecati magnam similique quae eius impedit possimus. Vitae sed itaque,
        officia facere nulla vero debitis similique dicta, iusto quod optio
        eveniet quam illum ut quia amet voluptas a nemo. Rerum eum distinctio
        eius corrupti, asperiores quos sapiente ea omnis modi molestiae
        similique ducimus atque facere, quasi magni delectus repellat ipsa animi
        quas! Accusantium consequuntur architecto iure. Lorem ipsum dolor sit
        amet consectetur, adipisicing elit. Culpa officiis iste soluta
        exercitationem velit magni quis maiore. lorem20
      </p>
      <div className="mt-8  flex flex-col gap-5 md:gap-7">
        <h4 className="font-bold text-3xl">Share</h4>
        <BlogShare url="https://www.bginfotechs.com/blog/details/building-your-digital-empire-a-step-by-step-guide-to-website-and-app-development" />
      </div>
      <div className="mt-8 lg:mt-12 flex flex-col gap-3">
        <h3 className="font-bold text-3xl">Comments</h3>
        <div className="flex flex-col gap-8 mt-7">
          <CommentList />
          <CommentList />
          <CommentList />
          <CommentList />
          <CommentList />
          <CommentList />
        </div>
      </div>
      <div className="mt-8">
        <Comment />
      </div>
    </>
  );
}
