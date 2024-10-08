import React from "react";
import {
  Button,
  Card,
  Image,
  Link,
} from "@nextui-org/react";
export default function ServicesCard({
  imageURL,
  title,
  subtitle,
  price,
  fromPrice,
  priceSubtitle,
  children,
}: {
  imageURL: string;
  title: string;
  subtitle?: string;
  price?: string;
  fromPrice?: boolean;
  priceSubtitle?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="md:hover:scale-105 transition">
      <div
        data-aos="fade-up"
        className={` flex flex-col h-full relative mx-5 w-auto rounded-lg min-h-full md:h-[750px] px-4 md:mx-0 md:text-center shadow-lg bg-white border-3 border-black`}
      >
        <div className="flex justify-center mt-10 w-32 h-32 mx-auto border-3 border-black bg-[#FF82B5] rounded-lg p-3 ">
          <Image
            src={imageURL}
            alt={title}
            className="w-28"
          />
        </div>
        <h2 className="font-bold text-center text-3xl text-black mt-2 mb-2">
          {title}
        </h2>
        <h3 className="font-bold text-center text-lg text-black mt-2  mx-10 outline-2">
          {subtitle}
        </h3>
        <h3 className="bg-[#4239DC] rounded-lg lead flex items-center justify-center h-16 font-bold text-center text-lg text-white mt-2 mb-2 mx-10 outline-2">
          <span className="text-3xl">
            <h4 className="text-small">
              {fromPrice ? "From " : " "}
            </h4>
            <h4 className="text-4xl">{price + " "}</h4>
            <h4 className="text-small">
              {priceSubtitle ? priceSubtitle : ""}
            </h4>
          </span>
        </h3>
        {children}
        <Button
          as={Link}
          href="/contact"
          className="mb-5  mt-10 md:mt-auto bg-[#0EC167] bg-opacity-80 w-full rounded-lg shadow-lg hover:scale-105 transition transform"
        >
          <span className="text-white text-xl">
            I want this!
          </span>
        </Button>
      </div>
    </div>
  );
}
