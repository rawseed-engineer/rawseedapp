import React from "react";
import { useTranslation } from "react-i18next";
import ImageSalad from "../../assets/salad.jpg";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Salad: React.FC = () => {
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
      <img
        ref={addToRefs}
        src={ImageSalad}
        alt="RawSeed's blackseed oils make your hair and skin healthy"
        className="mx-8"
      />
      <div className="max-w-md text-neutral-600 space-y-4">
        <h2 className="text-balance text-[#a18458] text-5xl font-bold text-shadow-lg tracking-tight md:text-5xl">
          {t("flaxseed_oil.use_cases.salad.title")}
        </h2>
        <p className="text-pretty text-2xl">
          {t("flaxseed_oil.use_cases.salad.description")}
        </p>
      </div>
    </div>
  );
};

export default Salad;
