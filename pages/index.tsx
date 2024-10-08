import React from "react";

import Header from "@/components/Sections/Header";
import TitleWithText from "@/components/Elements/TitleWithText";
import Perks from "@/components/Sections/Perks";
import Head from "next/head";

export default function App() {
  return (
    <>
      <Head>
        <title>Study Sidekicks</title>
        <meta
          name="description"
          content="Study Sidekicks offers personalized tutoring for all ages, helping students achieve academic goals with experienced tutors."
        />
        <meta
          property="og:title"
          content="Study Sidekicks - Homepage"
        />
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
          content="http://www.studysidekicks.co.za"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <TitleWithText
        title="Our Philosophy"
        colour="text-[#4239DC]"
        extraSpacing
      >
        <div>
          <br />
          <h3 className="h-92 text-black font-bold md:text-xl pt-3 px-10">
            At Study Sidekicks, we believe that it&apos;s
            never too early to start learning.
            <br />
            <br /> Our mission is to empower students to
            succeed by providing personalized tutoring
            services that cater to their unique learning
            styles. <br />
            <br />
            Whether you need help with homework, test prep,
            or concept clarification- our experienced tutors
            are ready to help. Contact us today to learn
            more about how we can help you achieve your
            academic goals.
          </h3>
        </div>
      </TitleWithText>
      <Perks />
    </>
  );
}
