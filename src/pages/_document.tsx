import { Html, Head, Main, NextScript } from "next/document";
import { NextUIProvider } from "@nextui-org/react";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="sm:px-6 md:px-8 lg:px-14">
        <NextUIProvider>
          <Main />
          <NextScript />
        </NextUIProvider>
      </body>
    </Html>
  );
}
