import BlogCard from "@/components/BlogCard";
import { Button, Input } from "@nextui-org/react";
import { Search } from "lucide-react";
import HeroImage from "../../assets/image1.png";
import { Breadcrumbs, BreadcrumbItem } from "@nextui-org/react";

export default function Blogs() {
  return (
    <main>
      {/* Breadcrums */}
      <div
        className="py-8 border"
        style={{
          backgroundImage: `url(https://www.bginfotechs.com/frontend/images/blog/blog-7.jpg)`,
          width: "100%",
          height: "25vh",
        }}
      >
        <h3 className="font-bold text-4xl text-white px-4">Blog Standard</h3>
        <div className="mt-4">
          <Breadcrumbs size="lg" className="flex flex-col gap-3 px-4">
            <BreadcrumbItem>Home</BreadcrumbItem>
            <BreadcrumbItem>Blogs</BreadcrumbItem>
          </Breadcrumbs>
        </div>
      </div>
      <div className="flex justify-between items-center py-3">
        <div>
          <h1 className="font-bold text-3xl">Our Latest Blogs</h1>
        </div>
        <div className="flex items-center gap-1">
          <Input
            type="text"
            placeholder="Search your favourite blog"
            className="md:w-72"
          />
          <Button isIconOnly>
            <Search />
          </Button>
        </div>
      </div>
      <div className="mt-5 flex flex-col gap-5">
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
      </div>
    </main>
  );
}
