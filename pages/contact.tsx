import ContactCard from "@/components/Elements/ContactCard";
import { Button, Link } from "@nextui-org/react";
import Head from "next/head";
import React from "react";

export default function Contact() {
  return (
    <>
      <Head>
        <title>Study Sidekicks - Contact Us</title>
        <meta
          name="description"
          content="Reach out to Study Sidekicks for any questions, support, or to discuss your learning needs. We're here to help."
        />
        <meta property="og:title" content="Contact Us" />
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
          content="http://www.studysidekicks.co.za/contact"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div
        data-aos="fade-in"
        className="md:hidden bg-[#4239DC] mx-auto mb-2 py-3 shadow-2xl  "
      >
        <h1 className="md:text-7xl text-4xl mx-auto text-center text-white">
          Get In Touch
        </h1>
        <div className="">
          <h2 className="md:text-3xl text-xl mx-auto text-center text-white">
            Or message us below
          </h2>
        </div>
      </div>

      <div className="mx-5">
        <div
          data-aos="fade-in"
          className="mb-5 flex flex-col justify-end max-w-7xl mx-auto md:h-96 h-64 rounded-lg p-10 bg-cover bg-center"
          style={{
            backgroundImage: `url('/images/contact_image_1.webp')`,
          }}
        >
          <div className="hidden md:block bg-[#4239DC] w-fit mx-auto px-10 py-3 rounded-lg shadow-2xl  ">
            <h2 className="md:text-7xl text-4xl mx-auto text-center text-white">
              Get In Touch
            </h2>
            <div className="">
              <h2 className="md:text-3xl text-xl mx-auto text-center text-white mb-5">
                Or message us below
              </h2>
            </div>
          </div>
        </div>
        <div className="grid md:grid-cols-2 grid-cols-1 gap-10 max-w-7xl md:mx-auto w-full">
          <ContactCard
            title="Email"
            subtitle="Email us and we will get back to you as soon as we can!"
            url="/images/icons8-email-96.webp"
          >
            <Button
              as={Link}
              href="mailto:studysidekicks@gmail.com"
              className="w-fit px-5 mx-auto bg-[#FF82B6] bg-opacity-80"
            >
              <h3 className="text-white text-xl">
                studysidekicks@gmail.com
              </h3>
            </Button>
          </ContactCard>
          <ContactCard
            title="Phone"
            subtitle="Want to talk? Give us a call!"
            url="/images/icons8-phone-64.webp"
          >
            <div className="grid md:grid-cols-2 md:mx-14 space-y-3 md:space-y-0">
              <Button
                as={Link}
                href="tel:0834091610"
                className="w-fit mx-auto bg-[#FF82B6] bg-opacity-80"
              >
                <span className="text-white text-xl">
                  Amber: 083 409 1610
                </span>
              </Button>
              <Button
                as={Link}
                href="tel:0782719641"
                className="w-fit  mx-auto bg-[#FF82B6] bg-opacity-80"
              >
                <span className="text-white text-xl">
                  Alex: 078 271 9641
                </span>
              </Button>
            </div>
          </ContactCard>
        </div>
      </div>
    </>
  );
}
