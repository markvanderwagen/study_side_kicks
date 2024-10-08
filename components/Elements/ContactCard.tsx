import { Button, Image } from "@nextui-org/react";
import React from "react";

export default function ContactCard({
  children,
  title,
  subtitle,
  url,
}: {
  children: React.ReactNode;
  title: string;
  subtitle: string;
  url: string;
}) {
  return (
    <div className="hover:scale-105 transition-transform">
      <div
        data-aos="fade-up"
        className="  transform h-auto py-10 flex justify-center flex-col shadow-lg text-center bg-white rounded-lg text-3xl text-white font-bold border-3 border-black hover:scale-110 transition"
      >
        <div className="md:mb-5 mx-auto bg-[#FF82B6] p-2 rounded-lg border-3 border-black">
          <Image src={url} alt="Email" className="w-24" />
        </div>
        <h2 className="text-black mb-2">{title}</h2>
        <p className="text-black text-xl mb-5">
          {subtitle}
        </p>
        {children}
      </div>
    </div>
  );
}
