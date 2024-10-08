import ContactCard from "@/components/Elements/ContactCard";
import ServicesCard from "@/components/Elements/ServicesCard";
import Head from "next/head";
import React from "react";

export default function Services() {
  return (
    <>
      <Head>
        <title>Study Sidekicks - Services</title>
        <meta
          name="description"
          content="Study Sidekicks offers a range of services, from personalized tutoring to study guides, to help students succeed academically."
        />
        <meta property="og:title" content="Services" />
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
          content="http://www.studysidekicks.co.za/services"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div
        data-aos="fade-in"
        className={` flex items-center max-w-7xl mx-auto lg:rounded-lg min-h-full md:h-[200px] bg-cover md:bg-bottom bg-left px-4 md:text-center`}
        style={{
          backgroundImage: `url(/images/background_desktop_1.webp)`,
        }}
      >
        <div
          data-aos="fade-in"
          className="text-center mt-10 max-w-7xl mx-auto mb-10"
        >
          <h1 className="h-92 font-bold md:text-7xl text-4xl py-10 text-white">
            Our Services
          </h1>
        </div>
      </div>
      <div className="grid md:grid-cols-3 max-w-7xl mx-auto gap-8 mt-10">
        <ServicesCard
          imageURL="/images/language-learning.webp"
          title="Individual lessons"
          subtitle="Dedicated to helping you succeed"
          price="R300"
          priceSubtitle="per hour session"
        >
          <div className="mx-auto flex justify-center flex-col mt-3">
            <h2 className="text-2xl mb-2 ">
              Whats Included:
            </h2>
            <div className="text-left mx-auto">
              <li>Tutors travel to your house</li>
              <li>Concept clarification</li>
              <li>Past paper practice</li>
            </div>
          </div>
        </ServicesCard>
        <ServicesCard
          imageURL="/images/calendar.webp"
          title="Personalized Timetables"
          subtitle="Dedicated to helping you succeed"
          price="R200"
        >
          <div className="mt-3 mx-5">
            <div>
              <h2 className="italic text-2xl text-center">
                &quot;If you fail to plan, you plan to
                fail&quot;
              </h2>
              <h2 className="mt-5">
                We believe that the first step to academic
                success is organization. Having a good study
                plan will avoid unnecessary exam stress and
                ensure adequate preparation.
              </h2>
              <h2 className="mt-5">
                We provide concise PDF study timetables
                based on your needs.
              </h2>
            </div>
          </div>
        </ServicesCard>
        <ServicesCard
          imageURL="/images/workshop.webp"
          title="Interactive workshops"
          subtitle="Dedicated to helping you succeed"
          price="R300"
          fromPrice
        >
          <div className="mt-3 mx-5">
            <div className="flex justify-center flex-col">
              <h2 className="mt-5">
                We host group crash-course sessions on a
                regular basis. These are held at a local
                school & include a pack of notes and snacks.
                Workshops held:
              </h2>
              <div className="text-left mx-10 mt-5">
                <li>
                  How to Study for Grade 4&apos;s (R300.00
                  for 1.5hrs)
                </li>
                <li>
                  Maths, English, and Afrikaans exam prep
                  for all grades (R350 for 2hrs)
                </li>
              </div>
              <h2 className="mt-5 text-xs">
                Follow our Facebook for regular updates on
                upcoming workshops
              </h2>
            </div>
          </div>
        </ServicesCard>
      </div>
      <div
        data-aos="fade-up"
        className={`md:shadow-lg mt-10 flex items-center md:max-w-7xl w-full mx-auto lg:rounded-lg md:h-[400px] h-36 bg-contain bg-no-repeat md:bg-bottom px-4 md:text-center`}
        style={{
          backgroundImage: `url(/images/image_1.webp)`,
        }}
      />
    </>
  );
}
