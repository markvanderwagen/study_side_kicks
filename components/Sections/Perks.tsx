import React from "react";
import PerksCard from "../Elements/PerksCard";
import CardsSlider from "./CardsSlider";

export default function Perks() {
  return (
    <>
      <div className="md:grid hidden grid-cols-2 gap-10 max-w-7xl mx-auto mt-10 ">
        <PerksCard
          imageURL="/images/perk_1.webp"
          title="Personalized Tutoring"
          subtitle="Catering to your unique learning style"
          modalText="At Study Sidekicks, we understand that every student learns differently. That's why we provide personalized tutoring services that cater to your unique learning style. Our experienced tutors work with you one-on-one to identify your strengths and weaknesses, and develop a customized learning plan that fits your needs."
        />

        <PerksCard
          imageURL="/images/perk_2.webp"
          title="Expert Tutors"
          subtitle="Dedicated to helping you succeed"
          modalText="Our tutors are experts in their respective fields, with years of experience teaching and tutoring students of all ages. They are passionate about education and dedicated to helping you succeed."
        />
        <PerksCard
          imageURL="/images/perk_3.webp"
          title="Flexible Scheduling"
          subtitle="Flexible scheduling options that fit your needs"
          modalText="We understand that students have busy schedules. That's why we offer flexible scheduling options that fit your needs. Whether you prefer in-person or online tutoring, we have options that work for you"
        />
        <PerksCard
          imageURL="/images/perk_4.webp"
          title="Multiple Subjects"
          subtitle="A wide range of subjects"
          modalText="Our comprehensive curriculum covers a wide range of subjects, from Maths and Science to English and Afrikaans. Whether you need help with a specific subject or want to improve your overall academic performance, our tutors are ready to assist."
        />
      </div>
      <div className="md:hidden">
        <CardsSlider />
      </div>
    </>
  );
}
