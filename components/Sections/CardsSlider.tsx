import React, { useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import PerksCard from "../Elements/PerksCard";

export default function CardsSlider() {
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const [loaded, setLoaded] = useState(false);

  const [sliderRef2, instanceRef] =
    useKeenSlider<HTMLDivElement>(
      {
        loop: true,
        initial: 0,
        slideChanged(slider) {
          setCurrentSlide(slider.track.details.rel);
        },
        created() {
          setLoaded(true);
        },
      },
      [
        (slider) => {
          let timeout: ReturnType<typeof setTimeout>;
          let mouseOver = false;
          function clearNextTimeout() {
            clearTimeout(timeout);
          }
          function nextTimeout() {
            clearTimeout(timeout);
            if (mouseOver) return;
            timeout = setTimeout(() => {
              slider.next();
            }, 6000);
          }
          slider.on("created", () => {
            slider.container.addEventListener(
              "mouseover",
              () => {
                mouseOver = true;
                clearNextTimeout();
              }
            );
            slider.container.addEventListener(
              "mouseout",
              () => {
                mouseOver = false;
                nextTimeout();
              }
            );
            nextTimeout();
          });
          slider.on("dragStarted", clearNextTimeout);
          slider.on("animationEnded", nextTimeout);
          slider.on("updated", nextTimeout);
        },
      ]
    );

  return (
    <>
      <div
        ref={sliderRef2}
        className="navigation-wrapper relative mt-10"
      >
        <div ref={sliderRef2} className="keen-slider h-64">
          <div className="keen-slider__slide">
            <PerksCard
              imageURL="/images/perk_1.webp"
              title="Personalized Tutoring"
              subtitle="Catering to your unique learning style"
              modalText="At Study Sidekicks, we understand that every student learns differently. That's why we provide personalized tutoring services that cater to your unique learning style. Our experienced tutors work with you one-on-one to identify your strengths and weaknesses, and develop a customized learning plan that fits your needs."
            />
          </div>
          <div className="keen-slider__slide">
            <PerksCard
              imageURL="/images/perk_2.webp"
              title="Expert Tutors"
              subtitle="Dedicated to helping you succeed"
              modalText="Our tutors are experts in their respective fields, with years of experience teaching and tutoring students of all ages. They are passionate about education and dedicated to helping you succeed."
            />
          </div>
          <div className="keen-slider__slide">
            <PerksCard
              imageURL="/images/perk_3.webp"
              title="Flexible Scheduling"
              subtitle="Flexible scheduling options that fit your needs"
              modalText="We understand that students have busy schedules. That's why we offer flexible scheduling options that fit your needs. Whether you prefer in-person or online tutoring, we have options that work for you"
            />
          </div>
          <div className="keen-slider__slide">
            <PerksCard
              imageURL="/images/perk_4.webp"
              title="Multiple Subjects"
              subtitle="A wide range of subjects"
              modalText="Our comprehensive curriculum covers a wide range of subjects, from Maths and Science to English and Afrikaans. Whether you need help with a specific subject or want to improve your overall academic performance, our tutors are ready to assist."
            />
          </div>
        </div>
        {loaded && instanceRef.current && (
          <>
            <Arrow
              left
              onClick={(e: any) =>
                e.stopPropagation() ||
                instanceRef.current?.prev()
              }
              disabled={currentSlide === 0}
            />

            <Arrow
              onClick={(e: any) =>
                e.stopPropagation() ||
                instanceRef.current?.next()
              }
              disabled={
                currentSlide ===
                instanceRef.current.track.details.slides
                  .length -
                  1
              }
            />
          </>
        )}
      </div>
    </>
  );

  function Arrow(props: {
    disabled: boolean;
    left?: boolean;
    onClick: (e: any) => void;
  }) {
    const disabled = props.disabled
      ? " fill-opacity-50"
      : "";
    return (
      <svg
        onClick={props.onClick}
        className={`  mx-5 arrow w-7 h-7 absolute top-1/2 transform -translate-y-1/2 fill-current text-white cursor-pointer ${
          props.left ? "left-1" : "right-1"
        } ${disabled}`}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        {props.left && (
          <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
        )}
        {!props.left && (
          <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
        )}
      </svg>
    );
  }
}
