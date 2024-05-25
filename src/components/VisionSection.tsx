import VisionCard from "./VisionCard";

export default function VisionSection() {
  return (
    <section>
      <h1 className="text-center font-bold text-3xl">Our Vision & Mission</h1>
      <p className="text-center text-lg mt-6">
        What are we doing and why are we doing it.
      </p>
      <div className="mt-5 md:mt-12 flex flex-col gap-4 items-center sm:flex-row sm:justify-evenly">
        <VisionCard
          header="Our Vision"
          body="Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam maxime
          excepturi eum cumque blanditiis ex laborum velit voluptas nam, illum
          eos. Sint numquam quidem voluptates?"
        />
        <VisionCard
          header="Our Mission"
          body="Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam maxime
          excepturi eum cumque blanditiis ex laborum velit voluptas nam, illum
          eos. Sint numquam quidem voluptates?"
        />
      </div>
    </section>
  );
}
