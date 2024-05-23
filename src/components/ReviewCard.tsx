import { Avatar, Card, CardBody, CardHeader } from "@nextui-org/react";

export default function ReviewCard() {
  return (
    <Card className="px-2 py-3 md:w-[19rem] mdx:w-[23rem] lg:w-[16.3rem] xl:w-[20rem] cursor-pointer">
      <CardHeader className="flex gap-4">
        <span>
          <Avatar />
        </span>
        <span>
          <p className="font-semibold text-lg">Roshan Khadka</p>
        </span>
      </CardHeader>
      <CardBody>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
          tempora nulla quis voluptates fuga ratione!
        </p>
      </CardBody>
    </Card>
  );
}
