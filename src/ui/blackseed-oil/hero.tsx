import React from "react";
import { useTranslation } from "react-i18next";
import RawSeedLogo from "./../../assets/rawseed_logo.png";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const BlackseedHero: React.FC = () => {
  const { t } = useTranslation();
  const containerRef = useRef<HTMLDivElement>(null);
  const heroMessageRefs = useRef<HTMLParagraphElement[]>([]);

  useEffect(() => {
    const elements = heroMessageRefs.current;

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
    if (el && !heroMessageRefs.current.includes(el)) {
      heroMessageRefs.current.push(el);
    }
  };
  return (
    <>
      {/* Hero Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url("blackseed_hero_4k.jpg")`,
          opacity: 0.9,
          filter: "brightness(50%)",
        }}
      />

      <div className="absolute top-[10%] sm:top-[20%] md:top-[35%]">
        <div
          ref={containerRef}
          className="relative z-10 px-4 sm:px-6 lg:px-8 max-w-7xl 
          py-24 mx-auto"
        >
          <div className="flex items-center justify-center">
            <img
              src={RawSeedLogo}
              alt="RawSeed Logo"
              className="block md:hidden lg:hidden 
                mx-8 
                mb-8
                h-[3rem] lg:h-[5rem] 
                aspect-auto"
            />
          </div>

          {/* Hero Heading */}
          <h1
            ref={addToRefs}
            className="text-balance 
            text-4xl sm:text-5xl md:text-6xl lg:text-7xl
            text-center lg:text-left
            font-bold text-white mb-5"
          >
            {t("blackseed_oil.hero.title")}
          </h1>

          <h2
            ref={addToRefs}
            className="text-balance 
            text-2xl sm:text-3xl md:text-4xl lg:text-5xl
            text-center lg:text-left
            font-bold text-white mb-5"
          >
            {t("blackseed_oil.hero.subtitle")}
          </h2>

          {/* Hero Description */}
          <p
            ref={addToRefs}
            className="text-pretty text-white 
            text-2xl 
            text-center lg:text-left
            mb-6"
          >
            {t("blackseed_oil.hero.description")}
          </p>

          {/* Call Out Button */}
          {/* <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <button className="group bg-gradient-to-tr from-amber-300 to-yellow-700 text-white px-10 py-5 rounded-full hover:from-amber-700 hover:to-yellow-300 transition-all duration-200 transform hover:scale-105 flex items-center text-xl font-semibold shadow-2xl">
              {t("blackseed_oil.hero.learn")}
            </button>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default BlackseedHero;
