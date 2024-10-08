import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import TestimonialsCard from "./TestimonialsCard";
import { useState } from "react";

export default function TestimonialSlider() {
  const data = [
    {
      comment:
        "If I need lessons again, you're the only people I will contact. Your service is great.",
      person: "Khanyi",
    },
    {
      comment:
        "Study Sidekicks has made a remarkable difference in my daughter's marks. My tutor has a knack of explaining maths so my daughter can understand and her marks are steadily increasing. My tutor has a wonderful disposition and my daughter loves her. Definitely a huge asset for my daughter's homework and study needs. ",
      person: "Mirella",
    },
    {
      comment:
        "I have noticed an increase in my son's marks. There has been a 10-15% increase in both Maths and English which he has been receiving tutoring in. He also feels a lot more confident which is amazing! ",
      person: "Angela",
    },
    {
      comment:
        "Lessons go great and my daughter gets so much out of her time with the tutor. We are so grateful! Thank you Study Sidekicks! ",
      person: "Tracey",
    },
    {
      comment:
        "I am jumping for joy !! We definitely saw an improvement. Thank you so much. Keep up the great work you are doing.",
      person: "Ria",
    },
    {
      comment:
        "I am so happy and proud of my son. With your help and all the effort he's put in, he got 93% for NST!! It's so motivating for him to continue working hard. Thanks for all your help thus far! ",
      person: "Angela",
    },
    {
      comment:
        "Thank you SOOOO MUCH to my tutor from Study SideKicks !!! Your attention to detail , care for your student and 10000% effort in what you do has made every bit of a difference to my daughter's studies!! Thank you from the bottom of our hearts for all your input this year. We are so grateful !! I HIGHLY RECOMMEND STUDY SIDEKICKS. ",
      person: "Charlé",
    },
    {
      comment:
        "Amber and Alex, you are rockstars!!! Thank you so much for this excellent service that you provided for my daughter.  The tutors you arranged were super competent and kind, and really helped my daughter in her Matric Finals!",
      person: "Lesley- Anne",
    },
  ];
  const [sliderRef2] = useKeenSlider<HTMLDivElement>(
    {
      loop: true,
      slides: {
        origin: "center",
        perView: 1.2,
        spacing: 1,
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
          }, 3000);
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
    <div ref={sliderRef2} className="keen-slider">
      {data.map(({ comment, person }, idx) => (
        <div
          key={idx}
          className="keen-slider__slide number-slide6"
        >
          <TestimonialsCard
            comment={comment}
            person={person}
          />
        </div>
      ))}
    </div>
  );
}
