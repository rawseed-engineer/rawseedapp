import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSeedling,
  faEarthAsia,
  faPeopleGroup,
  faHeartCircleCheck,
} from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from "react-i18next";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Values: React.FC = () => {
  const { t } = useTranslation();

  const containerRef = useRef<HTMLDivElement>(null);
  const productRefs = useRef<HTMLParagraphElement[]>([]);

  useEffect(() => {
    const elements = productRefs.current;

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
          stagger: 0.3, // This is the magic: each item delays by 0.2s
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 50%", // When the container hits 75% of viewport
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
    if (el && !productRefs.current.includes(el)) {
      productRefs.current.push(el);
    }
  };

  return (
    <div
      ref={containerRef}
      className="mx-auto grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2lg:grid-cols-4 
      items-center justify-items-center gap-8 pt-8 pb-20 sm:px-16"
    >
      {/* <div className="max-w-md space-y-4"> */}
      <div ref={addToRefs}>
        <div className="transition duration-300 hover:scale-110">
          <div className="h-64 flex justify-center items-center">
            <p>
              <FontAwesomeIcon
                icon={faSeedling}
                className="text-[#a18458] p-16"
                size="8x"
              />
            </p>
          </div>
          <h2 className="text-center text-balance text-3xl text-neutral-600 text-shadow-lg font-bold tracking-tight md:text-4xl">
            {t("value.title1")}
          </h2>
          <p className="text-center text-pretty text-neutral-600 text-xl">
            {t("value.p1")}
          </p>
        </div>
      </div>

      <div ref={addToRefs}>
        <div className="transition duration-300 hover:scale-110">
          <div className="h-64 flex justify-center items-center">
            <p>
              <FontAwesomeIcon
                icon={faEarthAsia}
                className="text-[#a18458] p-16"
                size="8x"
              />
            </p>
          </div>
          <h2 className="text-center text-balance text-3xl text-neutral-600 text-shadow-lg font-bold tracking-tight md:text-4xl">
            {t("value.title2")}
          </h2>
          <p className="text-center text-pretty text-neutral-600 text-xl">
            {t("value.p1")}
          </p>
        </div>
      </div>

      <div ref={addToRefs}>
        <div className="transition duration-300 hover:scale-110">
          <div className="h-64 flex justify-center items-center">
            <p>
              <FontAwesomeIcon
                icon={faPeopleGroup}
                className="text-[#a18458] p-16"
                size="8x"
              />
            </p>
          </div>
          <h2 className="text-center text-balance text-3xl text-neutral-600 text-shadow-lg font-bold tracking-tight md:text-4xl">
            {t("value.title3")}
          </h2>
          <p className="text-center text-pretty text-neutral-600 text-xl">
            {t("value.p3")}
          </p>
        </div>
      </div>

      <div ref={addToRefs}>
        <div className="transition duration-300 hover:scale-110">
          <div className="h-64 flex justify-center items-center">
            <p>
              <FontAwesomeIcon
                icon={faHeartCircleCheck}
                className="text-[#a18458] p-16"
                size="8x"
              />
            </p>
          </div>
          <h2 className="text-center text-balance text-3xl text-neutral-600 text-shadow-lg font-bold tracking-tight md:text-4xl">
            {t("value.title4")}
          </h2>
          <p className="text-center text-pretty text-neutral-600 text-xl">
            {t("value.p4")}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Values;
