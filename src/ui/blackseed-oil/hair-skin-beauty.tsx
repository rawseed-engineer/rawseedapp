import React from "react";
import { useTranslation } from "react-i18next";
import ImageHealthyHair from "../../assets/healthy_hair.jpg";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const HairSkinBeauty: React.FC = () => {
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
      className="mx-auto grid grid-cols-1 md:grid-cols-2 
      items-center justify-items-center gap-8 px-8 sm:px-16"
    >
      <div ref={addToRefs}>
        <img
          src={ImageHealthyHair}
          alt="RawSeed's blackseed oils make your hair and skin healthy"
          className="mx-8"
        />
      </div>
      <div ref={addToRefs} className="max-w-md text-neutral-600 space-y-4">
        <h2 className="text-balance text-[#a18458] text-5xl font-bold text-shadow-lg tracking-tight md:text-5xl">
          {t("blackseed_oil.healthy_skin_and_hair.title")}
        </h2>
        <p className="text-pretty text-2xl">
          {t("blackseed_oil.healthy_skin_and_hair.p1")}
        </p>
        <li className="text-2xl">
          {t("blackseed_oil.healthy_skin_and_hair.item1")}
        </li>
        <li className="text-2xl">
          {t("blackseed_oil.healthy_skin_and_hair.item2")}
        </li>
        <li className="text-2xl">
          {t("blackseed_oil.healthy_skin_and_hair.item3")}
        </li>
      </div>
    </div>
  );
};

export default HairSkinBeauty;
