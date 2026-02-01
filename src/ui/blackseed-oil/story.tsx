import React from "react";
import { useTranslation } from "react-i18next";
import BlackseedFlower from "../../assets/blackseed_flower_4K.jpg";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Story: React.FC = () => {
  const { t } = useTranslation();

  const containerRef = useRef<HTMLDivElement>(null);
  const imageRefs = useRef<HTMLParagraphElement[]>([]);

  useEffect(() => {
    const elements = imageRefs.current;

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
          stagger: 0.8, // This is the magic: each item delays by 0.2s
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 50%", // When the container hits 75% of viewport
            end: "bottom 20%",
            toggleActions: "play none none reverse",
            // markers: true, // Remove in production
          },
        },
      );
    }, containerRef);

    return () => ctx.revert(); // Cleanup on unmount
  }, []);

  const addToRefs = (el: HTMLParagraphElement | null) => {
    if (el && !imageRefs.current.includes(el)) {
      imageRefs.current.push(el);
    }
  };
  return (
    <div
      ref={containerRef}
      className="mx-auto grid 
      grid-cols-1 md:grid-cols-2
      items-center justify-items-center gap-8 
      px-8 sm:px-16 md:px-4 lg:px-36
      my-8"
    >
      <div
        ref={addToRefs}
        className=" 
        space-y-1 lg:space-y-4 text-neutral-600"
      >
        <h1 className="text-balance text-[#a18458] text-5xl text-shadow-lg font-bold tracking-tight md:text-5xl">
          {t("blackseed_oil.story.title")}
        </h1>
        <p className="text-pretty text-justify text-2xl">
          {t("blackseed_oil.story.p1")}
        </p>
        <p className="text-pretty text-justify text-2xl">
          {t("blackseed_oil.story.p2")}
        </p>
        <p className="text-pretty text-justify  text-2xl">
          {t("blackseed_oil.story.p3")}
        </p>
      </div>
      <div ref={addToRefs}>
        <img
          src={BlackseedFlower}
          alt="Blackseed Oils"
          className="mx-8 aspect-auto"
        />
      </div>
    </div>
  );
};

export default Story;
