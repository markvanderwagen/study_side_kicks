import { Image } from "@nextui-org/react";
import Head from "next/head";
import React from "react";

export default function ourTeam() {
  return (
    <div>
      <Head>
        <title>Study Sidekicks - Our Team</title>
        <meta
          name="description"
          content="Meet Study Sidekicks dedicated team. Our tutors are passionate about helping students reach their academic goals."
        />
        <meta property="og:title" content="Our Team" />
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
          content="http://www.studysidekicks.co.za/ourTeam"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div
        data-aos="fade-in"
        className={` flex items-center max-w-7xl mx-auto lg:rounded-lg min-h-full md:h-[200px] bg-cover md:bg-bottom bg-left px-4 md:text-center`}
        style={{
          backgroundImage: `url(/images/perk_2.webp)`,
        }}
      >
        <div
          data-aos="fade-in"
          className="text-center mt-10 max-w-7xl mx-auto mb-10"
        >
          <h1 className="h-92 font-bold md:text-7xl text-4xl py-10 text-white">
            Meet Our Team
          </h1>
        </div>
      </div>
      <div
        data-aos="fade-in"
        className={`mt-5 md:mb-5 flex items-center max-w-7xl mx-auto lg:rounded-lg min-h-full h-[100px] bg-cover md:bg-center bg-left px-4 md:text-center bg-[#F8C852]`}
      >
        <div
          data-aos="fade-in"
          className="text-center mt-10 max-w-7xl mx-auto mb-10"
        >
          <h2 className="h-92 font-bold md:text-4xl text-2xl py-10 text-white">
            Passionate. Dedicated. Knowledgeable.
          </h2>
        </div>
      </div>
      <div
        data-aos="fade-up"
        className="max-w-7xl mx-auto mt-5 space-y-5"
      >
        <div
          data-aos="fade-up"
          className="flex flex-col md:flex-row gap-5"
        >
          <Image
            src="/images/meet_our_team/meet_our_team_1.png"
            alt="1"
          />
          <Image
            src="/images/meet_our_team/meet_our_team_2.png"
            alt="2"
          />
        </div>
        <div
          data-aos="fade-up"
          className="flex flex-col md:flex-row gap-5"
        >
          <Image
            src="/images/meet_our_team/meet_our_team_3.png"
            alt="3"
          />
          <Image
            src="/images/meet_our_team/meet_our_team_4.png"
            alt="4"
          />
        </div>
        <div
          data-aos="fade-up"
          className="flex flex-col md:flex-row gap-5"
        >
          <Image
            src="/images/meet_our_team/meet_our_team_5.png"
            alt="5"
          />
          <Image
            src="/images/meet_our_team/meet_our_team_6.png"
            alt="6"
          />
        </div>
        <div
          data-aos="fade-up"
          className="flex flex-col md:flex-row gap-5"
        >
          <Image
            src="/images/meet_our_team/meet_our_team_7.png"
            alt="7"
          />
          <div className="opacity-0 hidden md:block">
            <Image
              src="/images/meet_our_team/meet_our_team_7.png"
              alt="8"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
