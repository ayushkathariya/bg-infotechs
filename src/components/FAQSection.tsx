import { Accordion, AccordionItem } from "@nextui-org/react";
import Image from "next/image";
import HeroImage from "@/assets/image1.png";

export default function FAQSection() {
  return (
    <section className="py-10">
      <div>
        <h3 className="text-center font-bold text-3xl">
          Frequently Asked Questions
        </h3>
      </div>
      <div className="mt-12 lg:flex lg:gap-7 lg:items-center lg:justify-between">
        <div className="hidden lg:block">
          <Image src={HeroImage} alt="hero-img" className="w-[27rem]" />
        </div>
        <div className="lg:w-[28rem] xl:w-[35rem] 2xl:w-[42rem]">
          <Accordion selectionMode="multiple">
            <AccordionItem
              key="1"
              aria-label="Accordion 1"
              title="What is BG Infotechs ?"
            >
              BG infotechs is a software company that specializes in developing
              website and mobile applications, as well as offering digital
              marketing services.
            </AccordionItem>
            <AccordionItem
              key="2"
              aria-label="Accordion 2"
              title="What services does BG Infotechs offer ?"
            >
              What services does BG Infotechs offer ? BG Infotechs offers a
              range of services including web development, app development,
              digital marketing, and IT training.
            </AccordionItem>
            <AccordionItem
              key="3"
              aria-label="Accordion 3"
              title="How can I contact BG Infotechs for project inquiries ?"
            >
              You can contact us through our website or by emailing
              info@bginfotechs.com protected or 091-590935 for project
              inquiries.
            </AccordionItem>
            <AccordionItem
              key="4"
              aria-label="Accordion 4"
              title="Can BG InfoTechs help with digital marketing strategies ?"
            >
              Yes, BG InfoTechs offers digital marketing services to help
              businesses reach their target audience and achieve their marketing
              goals.
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  );
}
