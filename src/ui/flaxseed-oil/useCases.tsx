import React from "react";
import { useTranslation } from "react-i18next";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const UseCases: React.FC = () => {
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
      <picture>
        <source
          type="image/webp"
          sizes="100vw"
          srcSet="
            /flaxseed_closeup_4K-480.webp 480w,
            /flaxseed_closeup_4K-800.webp 800w,
            /flaxseed_closeup_4K-1600.webp 1600w,
            /flaxseed_closeup_4K-1980.webp 1980w
          "
        />
        <img
          src="/flaxseed_closeup_4K.jpg"
          alt="Flaxseed close up"
          loading="lazy"
          decoding="async"
          className="w-full brightness-40 aspect-auto"
        />
      </picture>
      <div
        ref={addToRefs}
        className="absolute text-5xl text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 space-y-4"
      >
        <h2 className="text-3xl sm:text-5xl text-neutral-200 text-center md:text-left">
          {t("flaxseed_oil.use_cases.title")}
        </h2>
      </div>
    </div>
  );
};

export default UseCases;
