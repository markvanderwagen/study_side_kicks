import TitleWithText from "@/components/Elements/TitleWithText";
import { Image } from "@nextui-org/react";
import Head from "next/head";
import React from "react";

export default function About() {
  return (
    <div>
      <Head>
        <title>Study Sidekicks - About Us</title>
        <meta
          name="description"
          content="Study Sidekicks offers personalized tutoring for all ages, helping students achieve academic goals with experienced tutors."
        />
        <meta property="og:title" content="About Us" />
        <meta
          property="og:type"
          content="Study Sidekicks"
        />
        <meta
          property="og:image"
          content="/images/image_1.png"
        />
        <meta
          property="og:url"
          content="http://www.studysidekicks.co.za/about"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div
        data-aos="fade-in"
        className={` flex items-center max-w-7xl mx-auto lg:rounded-lg min-h-full md:h-[200px] bg-cover md:bg-center bg-left px-4 md:text-center`}
        style={{
          backgroundImage: `url(/images/perk_4.webp)`,
        }}
      >
        <div
          data-aos="fade-in"
          className="text-center mt-10 max-w-7xl mx-auto mb-10"
        >
          <h1 className="h-92 font-bold md:text-7xl text-4xl py-10 text-white">
            About Us
          </h1>
        </div>
      </div>
      <TitleWithText noSpacing>
        <div>
          <br />
          <h3 className="h-92 text-black font-bold md:text-xl pt-3 px-10">
            Welcome to Study Sidekicks Tutoring, a tutoring
            company created by students for students.
            <br />
            <br /> Our aim is to help students of all ages
            achieve their academic goals. We believe that
            every student has the potential to excel, and we
            are here to help them unleash it. With our
            experienced tutors and personalized approach, we
            provide the best learning experience possible
            for all our clients.
          </h3>
        </div>
      </TitleWithText>
      <div
        data-aos="fade-in"
        className={`mt-10 md:mb-5 flex items-center max-w-7xl mx-auto lg:rounded-lg min-h-full h-[100px] bg-cover md:bg-center bg-left px-4 md:text-center bg-[#F8C852]`}
      >
        <div
          data-aos="fade-in"
          className="text-center mt-10 max-w-7xl mx-auto mb-10"
        >
          <h2 className="h-92 font-bold md:text-4xl text-2xl py-10 text-white">
            Our Founder&apos;s Mission & Vision
          </h2>
        </div>
      </div>
      <div
        data-aos="fade-in"
        className="mb-10 max-w-7xl mx-auto grid md:grid-cols-2 gap-5"
      >
        <div className="md:border-3 border-black md:rounded-xl">
          <Image
            src="/images/Founder_Image.webp"
            alt="founder_image"
            className="rounded-none md:rounded-xl"
          />
        </div>
        <div className="mx-5 md:mx-0 py-5 md:py-0 border-3 border-black rounded-xl flex items-center justify-center px-10">
          <h3 className="text-center md:text-xl">
            Meet Alex & Amber- One forensic sciences student
            and one medical student with ambition to improve
            the standard of tutoring services available in
            Joburg. <br />
            <br />
            At Study Sidekicks, our mission is to provide
            high-quality tutoring services to students of
            all ages and backgrounds. We strive to create a
            positive and engaging learning environment that
            empowers students to reach their full potential.
            <br />
            <br />
            Our vision is to see all students succeed and
            achieve their academic goals.
          </h3>
        </div>
      </div>
      <TitleWithText
        colour="text-[#4239DC]"
        title="Our Approach to Learning"
      >
        <div className="">
          <br />
          <h3 className="h-92 text-black font-bold md:text-xl pt-3 px-10">
            We believe that learning should be a fun and
            engaging experience. Our tutors use a
            personalized approach to teaching that caters to
            each student&apos;s unique learning style. We
            provide a wide range of resources and materials
            to help our students succeed, including
            interactive learning tools and real-world
            examples. <br />
            <br /> ​ We offer exceptional tutoring services
            in a wide range of subjects, including Maths
            Core, Science, English, Afrikaans, Accounting,
            Business, Biology, and more.
          </h3>
        </div>
      </TitleWithText>
      <div
        data-aos="fade-up"
        className={`md:shadow-lg mt-10 flex items-center md:max-w-7xl w-full mx-auto lg:rounded-lg md:h-[400px] h-36 bg-contain bg-no-repeat md:bg-bottom px-4 md:text-center`}
        style={{
          backgroundImage: `url(/images/image_1.webp)`,
        }}
      />
    </div>
  );
}
