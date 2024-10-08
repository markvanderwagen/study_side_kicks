import { Card, Image } from "@nextui-org/react";
import React from "react";

export default function TestimonialsCard({
  comment,
  person,
}) {
  return (
    <>
      <Card
        data-aos="fade-in"
        className={`flex justify-center items-center mx-3 w-auto lg:rounded-lg min-h-full md:h-[300px] h-[270px] bg-cover bg-fill px-4 md:mx-5 md:text-center shadow-lg bg-white text-center`}
      >
        <Image
          src="/images/quote_icon.webp"
          alt="quote"
          className="w-12 md:w-20 h-12 md:h-20 mt-4 md:mt-10 mx-auto"
        ></Image>
        <h2 className="font-bold mx-auto text-xs md:text-lg text-black mt-2 mb-2">
          {comment}
        </h2>
        <hr className="bg-[#FF82B5] text-red-[#FF82B5] w-20 mt-2 border-[#FF82B5]" />
        <h3 className=" text-center text-xl md:text-3xl font-extrabold text-[#2B2791] mt-2 mb-10 mx-10 outline-2">
          {person}
        </h3>
      </Card>
    </>
  );
}
