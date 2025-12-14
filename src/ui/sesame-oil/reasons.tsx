import {
  faEarthAsia,
  faLemon,
  faTemperatureThreeQuarters,
} from "@fortawesome/free-solid-svg-icons";
import { faHeartCircleCheck } from "@fortawesome/free-solid-svg-icons/faHeartCircleCheck";
import { faUtensils } from "@fortawesome/free-solid-svg-icons/faUtensils";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useTranslation } from "react-i18next";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Reasons: React.FC = () => {
  const { t } = useTranslation();
  const containerRef = useRef<HTMLDivElement>(null);
  const reasonRefs = useRef<HTMLParagraphElement[]>([]);

  useEffect(() => {
    const elements = reasonRefs.current;

    // Create one ScrollTrigger for the entire container
    const ctx = gsap.context(() => {
      gsap.fromTo(
        elements,
        {
          opacity: 0,
          y: 60,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          stagger: 0.7, // This is the magic: each item delays by 0.2s
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 30%", // When the container hits 75% of viewport
            end: "bottom 20%",
            toggleActions: "play none none reverse",
            // markers: true, // Remove in production
          },
        }
      );
    }, containerRef);

    return () => ctx.revert(); // Cleanup on unmount
  }, []);

  const addToRefs = (el: HTMLParagraphElement | null) => {
    if (el && !reasonRefs.current.includes(el)) {
      reasonRefs.current.push(el);
    }
  };

  return (
    <div ref={containerRef}>
      <h2 className="m-8 text-center text-balance text-5xl text-[#a18458] font-bold tracking-tight md:text-5xl">
        {t("sesame.reason.heading")}
      </h2>

      {/* <div className="mx-auto grid grid-cols-1  gap-8 pt-8 pb-20 sm:px-64 md:grid-cols-3"> */}
      <div
        className="
        lg:px-32
        mx-auto grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 items-center 
        justify-items-center 
        gap-8 pt-8 pb-20 sm:px-64
        "
      >
        <div ref={addToRefs} className="m-8 w-96 transition duration-300">
          <div className="flex items-center justify-center h-48 w-full rounded-lg">
            <FontAwesomeIcon
              icon={faUtensils}
              className="text-[#a18458]"
              size="10x"
            />
          </div>

          <h2 className="m-6 text-center text-balance text-3xl text-neutral-400 font-bold tracking-tight md:text-4xl">
            {t("sesame.reason.p1.title")}
          </h2>
          <p className="text-center text-pretty text-neutral-500 text-2xl">
            {t("sesame.reason.p1.description")}
          </p>
        </div>

        <div ref={addToRefs} className="m-8 w-96 transition duration-300">
          <div className="flex items-center justify-center h-48 w-full rounded-lg">
            <FontAwesomeIcon
              icon={faHeartCircleCheck}
              className="text-[#a18458]"
              size="10x"
            />
          </div>

          <h2 className="m-6 text-center text-balance text-3xl text-neutral-400 font-bold tracking-tight md:text-4xl">
            {t("sesame.reason.p2.title")}
          </h2>
          <p className="text-center text-pretty text-neutral-500 text-2xl">
            {t("sesame.reason.p2.description")}
          </p>
        </div>

        <div ref={addToRefs} className="m-8 w-96 transition duration-300 ">
          <div className="flex items-center justify-center h-48 w-full rounded-lg">
            <FontAwesomeIcon
              icon={faLemon}
              className="text-[#a18458]"
              size="10x"
            />
          </div>

          <h2 className="m-6 text-center text-balance text-3xl text-neutral-400 font-bold tracking-tight md:text-4xl">
            {t("sesame.reason.p3.title")}
          </h2>
          <p className="text-center text-pretty text-neutral-500 text-2xl">
            {t("sesame.reason.p3.description")}
          </p>
        </div>
      </div>

      <div className="mx-auto grid grid-cols-1 items-center justify-items-center gap-8 pt-8 pb-20 sm:px-64 lg:grid-cols-2">
        <div ref={addToRefs} className="m-8 w-96 transition duration-300 ">
          <div className="flex items-center justify-center h-48 w-full rounded-lg">
            <FontAwesomeIcon
              icon={faTemperatureThreeQuarters}
              className="text-[#a18458]"
              size="10x"
            />
          </div>
          <h2 className="m-6 text-center text-balance text-3xl text-neutral-400 font-bold tracking-tight md:text-4xl">
            {t("sesame.reason.p4.title")}
          </h2>
          <p className="text-center text-pretty text-neutral-500 text-2xl">
            {t("sesame.reason.p4.description")}
          </p>
        </div>

        <div ref={addToRefs} className="m-8 w-96 transition duration-300 ">
          <div className="flex items-center justify-center h-48 w-full rounded-lg">
            <FontAwesomeIcon
              icon={faEarthAsia}
              className="text-[#a18458]"
              size="10x"
            />
          </div>

          <h2 className="m-6 text-center text-balance text-3xl text-neutral-400 font-bold tracking-tight md:text-4xl">
            {t("sesame.reason.p5.title")}
          </h2>

          <p className="text-center text-pretty text-neutral-500 text-2xl">
            {t("sesame.reason.p5.description")}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Reasons;
