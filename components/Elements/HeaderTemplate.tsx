import { Button, Link } from "@nextui-org/react";
import React, { useEffect } from "react";
import Slogan from "../Sections/Slogan";

export default function HeaderTemplate({
  imageURL,
}: {
  imageURL: string;
}) {
  return (
    <div
      className={` max-w-7xl mx-auto lg:rounded-lg min-h-full md:h-[400px] h-[450px] bg-cover px-4 md:text-center`}
      style={{
        backgroundImage: `url('${imageURL}')`,
      }}
    >
      <h1
        data-aos="fade-in"
        className="h-92 font-bold md:text-7xl text-6xl sm:pt-10 pt-5 pb-2 text-[#4239DC]"
      >
        Study Sidekicks
      </h1>
      <h3
        data-aos="fade-in"
        className="h-92 text-white font-bold text-3xl pt-3 leading-7 "
      >
        Tutoring Services for{" "}
        <span className="text-[#FF82B6]">
          Primary school
        </span>
        ,<br />
        <span className="text-[#C7F4E9]">
          High school
        </span>{" "}
        and
        <br />
        <span className="text-[#0EC167]">
          University students
        </span>
      </h3>
      <Button
        size="lg"
        as={Link}
        href="/services"
        className="bg-[#4239DC] text-white font-bold mt-8 mb-2 hover:scale-110"
      >
        Get a Tutor Now!
      </Button>
      <div className="mt-8 px-6 overflow-visible">
        <Slogan />
      </div>
    </div>
  );
}
