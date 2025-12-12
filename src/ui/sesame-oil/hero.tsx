import React from "react";
import { useTranslation } from "react-i18next";
import RawSeedLogo from "../../assets/rawseed_logo.png";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Hero: React.FC = () => {
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
        }
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
          backgroundImage: `url("sesame_seed_hero.jpg")`,
          opacity: 0.9,
          filter: "brightness(50%)",
          //   backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080"><rect width="1920" height="1080" fill="%23667eea"/><circle cx="960" cy="540" r="300" fill="%23764ba2" opacity="0.8"/><circle cx="600" cy="300" r="200" fill="%23f093fb" opacity="0.6"/><circle cx="1300" cy="700" r="250" fill="%234facfe" opacity="0.7"/></svg>')`,
        }}
      />

      <div className="absolute top-[10%] sm:top-[20%] lg:top-[35%] ">
        <div
          ref={containerRef}
          className="relative z-10  px-4 py-12 sm:px-6 lg:px-8 max-w-7xl mx-auto"
        >
          {/* Hero Logo - Mobile only */}
          <div className="flex items-center justify-center">
            <img
              src={RawSeedLogo}
              alt="RawSeed Logo"
              className="block md:hidden lg:hidden mx-8 mb-8 h-[3rem] lg:h-[5rem] aspect-auto"
            />
          </div>

          {/* Hero Heading */}
          {/* <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight"> */}
          <h1
            ref={addToRefs}
            className="text-balance 
            text-4xl sm:text-5xl md:text-6xl lg:text-7xl
            text-center lg:text-left
            font-bold text-white mb-5"
          >
            {t("hero.sesame_oil.title")}
          </h1>

          <h2
            ref={addToRefs}
            className="text-balance 
            text-2xl sm:text-3xl md:text-4xl lg:text-5xl
            text-center lg:text-left
            font-bold text-white mb-5"
          >
            {t("hero.sesame_oil.subtitle")}
          </h2>

          {/* Hero Description */}
          <p
            ref={addToRefs}
            className="text-pretty text-white 
            text-2xl
            text-center text-justify lg:text-left 
            mb-6"
          >
            {t("hero.sesame_oil.description")}
          </p>

          {/* Call Out Button */}
          {/* <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <button className="group bg-gradient-to-tr from-amber-300 to-yellow-700 text-white px-10 py-5 rounded-full hover:from-amber-700 hover:to-yellow-300 transition-all duration-200 transform hover:scale-105 flex items-center text-xl font-semibold shadow-2xl">
              {t("hero.sesame_oil.learn")}
            </button>
          </div> */}

          {/* <div className="flex justify-center mt-30">
            <Callout />
          </div> */}
        </div>
      </div>
    </>
  );
};

export default Hero;
