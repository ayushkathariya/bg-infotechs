import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";

export default function EmployeeCard() {
  return (
    <Card className="w-[20.5rem] md:w-[19.5rem] mdx:w-[23rem] lg:w-[17rem] xl:w-[22rem] cursor-pointer">
      <CardBody className="overflow-visible">
        <Image
          alt="Card background"
          className="object-cover rounded-xl"
          src="https://scontent.fktm19-1.fna.fbcdn.net/v/t39.30808-6/393695291_308845841896816_8912830814016487368_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeFQkrTTGNKzEOQLNdSsMlkpATKxTSAN3dUBMrFNIA3d1VJ76w8AxjLOnggG-9Zv9mFPuzPWC1JsEk5QNaDq1JV5&_nc_ohc=1WoJujXkdn4Q7kNvgEsijLe&_nc_ht=scontent.fktm19-1.fna&oh=00_AYBRl_N2ImxrAbkfa2HOZ0k01mGnkjX51fx_kW-qMccPXw&oe=66562316"
        />
      </CardBody>
      <CardFooter className="flex flex-col">
        <p className="font-bold text-lg">Min Bogati</p>
        <p className="font-semibold">Software Engineer</p>
      </CardFooter>
    </Card>
  );
}
