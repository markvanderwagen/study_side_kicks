import React from "react";

export default function TitleWithText({
  title,
  children,
  colour,
  extraSpacing,
  noSpacing,
}: {
  title?: string;
  children: React.ReactNode;
  colour?: string;
  extraSpacing?: boolean;
  noSpacing?: boolean;
}) {
  return (
    <>
      <div
        data-aos="fade-up"
        className="text-center max-w-7xl mx-auto"
      >
        <h2
          className={`h-92 font-bold md:text-7xl text-4xl mx-5 ${
            !extraSpacing ? "pt-0" : "pt-20"
          } ${noSpacing ? "pt-0" : "pt-0"} ${colour}`}
        >
          {title}
        </h2>
        {children}
      </div>
    </>
  );
}
