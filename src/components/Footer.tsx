import { ChevronRight, Globe, Mail, MapPin, Phone } from "lucide-react";
import Logo from "@/assets/bginfotechs_logo.png";
import Image from "next/image";
import { Button, Input, Link } from "@nextui-org/react";

export default function Footer() {
  return (
    <footer className="w-full py-2 mt-4">
      <div className="mx-auto flex max-w-6xl flex-col items-start space-x-8 md:flex-row">
        <div className="w-full px-4 md:w-1/2 lg:px-0">
          <h1 className="max-w-sm text-3xl font-bold">
            Subscribe to our Newsletter
          </h1>
          <form
            action=""
            className="mt-4 inline-flex w-full items-center md:w-3/4"
          >
            <Input type="email" variant="bordered" placeholder="Email" />
            <Button type="button" isIconOnly variant="faded" className="ml-2">
              <ChevronRight className="h-4 w-4" />
            </Button>
          </form>
        </div>
        <div className="mt-8 grid grid-cols-2 gap-6 md:mt-0 lg:w-3/4 lg:grid-cols-3">
          <div className="mb-8 lg:mb-0">
            <p className="mb-6 text-lg font-semibold text-gray-700 ">
              Services
            </p>
            <ul className="flex flex-col space-y-4 text-[14px] font-medium text-gray-500">
              <li>
                <Link
                  color="foreground"
                  className="text-[0.87rem] cursor-pointer text-gray-700"
                >
                  Digital Marketing
                </Link>
              </li>
              <li>
                <Link
                  color="foreground"
                  className="text-[0.87rem] cursor-pointer text-gray-700"
                >
                  Web Development
                </Link>
              </li>
              <li>
                <Link
                  color="foreground"
                  className="text-[0.87rem] cursor-pointer text-gray-700"
                >
                  IT Traning
                </Link>
              </li>
              <li>
                <Link
                  color="foreground"
                  className="text-[0.87rem] cursor-pointer text-gray-700"
                >
                  Graphics Designing
                </Link>
              </li>
              <li>
                <Link
                  color="foreground"
                  className="text-[0.87rem] cursor-pointer text-gray-700"
                >
                  Web Hosting
                </Link>
              </li>
            </ul>
          </div>
          <div className="mb-8 lg:mb-0">
            <p className="mb-6 text-lg font-semibold text-gray-700 ">Company</p>
            <ul className="flex flex-col space-y-4 text-[14px] font-medium text-gray-500">
              <li>
                <Link
                  color="foreground"
                  className="text-[0.87rem] cursor-pointer text-gray-700"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  color="foreground"
                  className="text-[0.87rem] cursor-pointer text-gray-700"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  color="foreground"
                  className="text-[0.87rem] cursor-pointer text-gray-700"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  color="foreground"
                  className="text-[0.87rem] cursor-pointer text-gray-700"
                >
                  Our Team
                </Link>
              </li>
            </ul>
          </div>
          <div className="mb-8 lg:mb-0">
            <p className="mb-6 text-lg font-semibold text-gray-700 ">
              Contact Us
            </p>
            <ul className="flex flex-col space-y-4 text-[14px] font-medium text-gray-500">
              <li>
                <Link
                  color="foreground"
                  className="text-[0.87rem] cursor-pointer text-gray-700 flex gap-2 items-center"
                >
                  <Mail className="h-5 w-5" />
                  Info@bginfotechs.com
                </Link>
              </li>
              <li>
                <Link
                  color="foreground"
                  className="text-[0.87rem] cursor-pointer text-gray-700 flex gap-2 items-center"
                >
                  <Globe className="h-5 w-5" />
                  www.bginfotechs.com
                </Link>
              </li>
              <li>
                <Link
                  color="foreground"
                  className="text-[0.87rem] cursor-pointer text-gray-700 flex gap-2 items-center"
                >
                  <MapPin className="h-7 w-7" />
                  Taranagar 5, Dhangadhi, Kailali, Nepal
                </Link>
              </li>
              <li>
                <Link
                  color="foreground"
                  className="text-[0.87rem] cursor-pointer text-gray-700 flex gap-2 items-center"
                >
                  <Phone className="w-5 h-5" /> + 091 590935
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <hr className="my-4" />
      <div className="mx-auto max-w-6xl items-center justify-between px-4 md:flex lg:px-0">
        <div className="inline-flex items-center">
          <Image src={Logo} alt="logo" width={140} />
        </div>
        <div className="mt-4 md:mt-0">
          <p className="text-sm font-medium text-gray-500">
            © 2024 BG Infotechs. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
