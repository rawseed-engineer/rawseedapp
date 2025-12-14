import React from "react";
import SesamePlant from "../../assets/sesame_crop_field.jpg";
import { useTranslation } from "react-i18next";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const SesamePageCallout: React.FC = () => {
  const { t } = useTranslation();
  const containerRef = useRef<HTMLDivElement>(null);
  const calloutRefs = useRef<HTMLParagraphElement[]>([]);

  useEffect(() => {
    const elements = calloutRefs.current;

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
    if (el && !calloutRefs.current.includes(el)) {
      calloutRefs.current.push(el);
    }
  };

  return (
    <div ref={containerRef} className="relative">
      <img
        src={SesamePlant}
        alt="Rawseed Plant"
        className="w-full brightness-30 aspect-auto"
      />
      <div
        className="absolute text-5xl text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
        space-y-4"
      >
        <h2
          ref={addToRefs}
          className="text-5xl text-neutral-200 text-center text-shadow-lg"
        >
          {t("sesame.callout.title")}
        </h2>
      </div>
    </div>
  );
};

export default SesamePageCallout;
