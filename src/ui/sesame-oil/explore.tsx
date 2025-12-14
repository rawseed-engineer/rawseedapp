import React from "react";
import { useTranslation } from "react-i18next";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Explore: React.FC = () => {
  const { t } = useTranslation();
  const containerRef = useRef<HTMLDivElement>(null);
  const exploreRefs = useRef<HTMLParagraphElement[]>([]);

  useEffect(() => {
    const elements = exploreRefs.current;

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
            start: "top 50%", // When the container hits 75% of viewport
            end: "bottom 5%",
            toggleActions: "play none none reverse",
            // markers: true, // Remove in production
          },
        }
      );
    }, containerRef);

    return () => ctx.revert(); // Cleanup on unmount
  }, []);

  const addToRefs = (el: HTMLParagraphElement | null) => {
    if (el && !exploreRefs.current.includes(el)) {
      exploreRefs.current.push(el);
    }
  };

  return (
    <div ref={containerRef} className="space-y-4 test-justify">
      <p
        ref={addToRefs}
        className=" text-2xl md:text-3xl text-neutral-600
         tracking-tight"
      >
        {t("sesame.callout.p1")}
      </p>
    </div>
  );
};

export default Explore;
