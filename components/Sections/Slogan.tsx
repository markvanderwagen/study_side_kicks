import * as React from "react";
import Image from "next/image";
export default function Slogan() {
  return (
    <>
      <div className="relative w-full min-h-full sm:shadow-none mb-16 sm:mb-0 overflow-visible ">
        <div
          data-aos="zoom-in"
          className="relative w-full flex justify-center overflow-visible "
        >
          <Image
            src={"/images/image_1.webp"}
            height={400}
            width={400}
            className="rounded-lg shadow-2xl mb-16 hover:scale-110 transition-transform transform"
            alt={"slogan"}
          />
        </div>
      </div>
    </>
  );
}
