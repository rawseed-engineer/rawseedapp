import { useTranslation } from "react-i18next";
import SeedsHorizontal from "../../assets/seeds_horizontal.jpg";
import SeedsVertical from "../../assets/seeds_vertical.jpg";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * ColdPressed
 * Simple, accessible presentational component used on the home page.
 *
 * File: src/ui/home/coldPressed.tsx
 */
const ColdPressed = () => {
  const { t } = useTranslation();
  const containerRef = useRef<HTMLDivElement>(null);
  const textRefs = useRef<HTMLParagraphElement[]>([]);

  useEffect(() => {
    const elements = textRefs.current;

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
          duration: 2,
          ease: "power3.out",
          stagger: 0.5, // This is the magic: each item delays by 0.2s
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
    if (el && !textRefs.current.includes(el)) {
      textRefs.current.push(el);
    }
  };

  return (
    <>
      <div ref={containerRef} className="relative">
        {/* Image at mobile view */}

        <img
          src={SeedsHorizontal}
          alt="All RawSeed Oils"
          className="hidden md:block w-full brightness-80 aspect-auto"
        />

        {/* Image at non-mobile view */}
        <img
          src={SeedsVertical}
          alt="All RawSeed Oils"
          className="block md:hidden w-full brightness-30 aspect-auto"
        />

        {/* Mobile view */}
        <div
          ref={addToRefs}
          className="hidden md:block absolute 
        p-1 lg:p-10
        text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
        space-y-1 lg:space-y-4
        space-x-0.5
        bg-[rgba(0,0,0,0.3)]
         rounded-xl"
        >
          <p
            className="text-2xl sm:text-xl md:text-2xl lg:text-4xl
          text-neutral-200 text-center"
          >
            {t("what_we_do.p2")}
          </p>
        </div>

        {/* Non mobile view */}
        <div
          ref={addToRefs}
          className="block md:hidden absolute top-0 left-0 mx-12 my-24"
        >
          <p
            className="text-justify text-2xl sm:text-xl md:text-2xl lg:text-4xl
            text-neutral-200"
          >
            {t("what_we_do.p2")}
          </p>
        </div>
      </div>
    </>
  );
};

export default ColdPressed;
