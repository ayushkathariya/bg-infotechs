import { Avatar, Card } from "@nextui-org/react";

export default function KeyFeatureCard() {
  return (
    <Card className="px-2 py-3 flex-col gap-2 md:w-[19rem] mdx:w-[23rem] lg:w-[16.3rem] xl:w-[20rem] cursor-pointer">
      <Avatar />
      <p className="font-semibold text-xl">User Friendly</p>
      <p>Our designs are very trendy, attractive and user-friendly.</p>
    </Card>
  );
}
