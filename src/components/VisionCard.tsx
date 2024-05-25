import { Card, CardBody, CardHeader, Divider } from "@nextui-org/react";

export default function VisionCard({
  body,
  header,
}: {
  header: string;
  body: string;
}) {
  return (
    <Card className="w-[98%] lg:w-[25rem]">
      <CardHeader>
        <h4 className="text-center font-semibold w-full">{header}</h4>
      </CardHeader>
      <Divider className="mt-2" />
      <CardBody className="mt-2">
        <p>{body}</p>
      </CardBody>
    </Card>
  );
}
