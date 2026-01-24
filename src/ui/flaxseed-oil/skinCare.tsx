import React from "react";
import FlaxseedWithHand from "../../assets/flaxseed_skin_care.jpg";
import { useTranslation } from "react-i18next";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const skinCare: React.FC = () => {
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
    <div ref={containerRef} className="relative">
      <img
        src={FlaxseedWithHand}
        alt="Flaxseed with hands"
        className="w-full brightness-40 aspect-auto"
      />
      <div className="absolute text-5xl text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 space-y-4">
        <h2 ref={addToRefs} className="text-4xl sm:text-5xl text-neutral-200">
          {t("flaxseed_oil.skin_health.title")}
        </h2>
        <p
          ref={addToRefs}
          className="text-lg sm:text-2xl text-neutral-200  mx-auto"
        >
          {t("flaxseed_oil.skin_health.description")}
        </p>
      </div>
    </div>
  );
};

export default skinCare;
