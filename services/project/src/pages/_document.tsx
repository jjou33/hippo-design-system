import { ThemeScript } from "@/components/ThemeScript";
import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="bg-gray-100 text-reverseGray-50 antialiased">
        <ThemeScript />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
