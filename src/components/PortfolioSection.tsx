import PortfolioCard from "./PortfolioCard";
import { Link } from "@nextui-org/react";

export default function PortfolioSection() {
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
      <div className="mt-5 flex flex-col gap-5 md:flex-wrap md:gap-7 md:flex-row md:justify-between">
        <PortfolioCard />
        <PortfolioCard />
        <PortfolioCard />
        <PortfolioCard />
        <PortfolioCard />
        <PortfolioCard />
      </div>
    </section>
  );
}
