import ServiceCard from "./ServiceCard";

export default function ServiceSection() {
  return (
    <section className="flex flex-col gap-4 py-10">
      {/* Top Section */}
      <div className="self-center">
        <p className="font-bold text-2xl lg:text-3xl">IT Services We Offer</p>
      </div>
      {/* Bottom Section */}
      <div className="flex flex-col mt-5 lg:mt-8 md:flex-row md:gap-y-5 md:flex-wrap md:justify-between gap-3">
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
      </div>
    </section>
  );
}
