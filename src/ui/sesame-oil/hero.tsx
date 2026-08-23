import React from "react";
import { useTranslation } from "react-i18next";
import RawSeedLogo from "../../assets/rawseed_logo.png";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ShineText from "../ShineText";

gsap.registerPlugin(ScrollTrigger);

interface HeroProps {
  staggerDelay?: number;
  initialDelay?: number;
  titleDuration?: number;
  subtitleDuration?: number;
  logoDuration?: number;
  descriptionDuration?: number;
  circleDuration?: number;
}

const Hero: React.FC<HeroProps> = ({
  staggerDelay = 0.8,
  initialDelay = 0,
  titleDuration = 1,
  subtitleDuration = 2,
  logoDuration = 1,
  descriptionDuration = 10,
  circleDuration = 1,
}) => {
  const { t } = useTranslation();
  const containerRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLImageElement | null>(null);
  const subtitleRef = useRef<HTMLHeadingElement | null>(null);
  const descriptionRef = useRef<HTMLParagraphElement | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 10%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
          // markers: true,
        },
      });

      if (logoRef.current) {
        tl.fromTo(
          logoRef.current,
          { opacity: 0, y: 60 },
          { opacity: 1, y: 0, duration: logoDuration },
          initialDelay,
        );
      }

      if (subtitleRef.current) {
        tl.fromTo(
          subtitleRef.current,
          { opacity: 0, y: 60 },
          { opacity: 1, y: 0, duration: subtitleDuration },
          `+=${staggerDelay}`,
        );
      }

      // subtitle is triggered on load, so don't include it in the scroll timeline

      if (descriptionRef.current) {
        tl.fromTo(
          descriptionRef.current,
          { opacity: 0, y: 60 },
          { opacity: 1, y: 0, duration: descriptionDuration },
          `+=${staggerDelay}`,
        );
      }
    }, containerRef);

    return () => ctx.revert();
  }, [
    initialDelay,
    staggerDelay,
    titleDuration,
    subtitleDuration,
    logoDuration,
    descriptionDuration,
    circleDuration,
  ]);

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
        <div className="relative z-10  px-4 py-12 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          {/* Hero Logo - Mobile only */}
          <div className="flex items-center justify-center">
            <img
              ref={logoRef}
              src={RawSeedLogo}
              alt="RawSeed Logo"
              className="block md:hidden lg:hidden mx-8 mb-8 h-[3rem] lg:h-[5rem] aspect-auto"
            />
          </div>

          {/* Hero Heading */}
          {/* <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight"> */}
          {/* <h1
            ref={addToRefs}
            className="text-balance 
            text-4xl sm:text-5xl md:text-6xl lg:text-7xl
            text-center lg:text-left
            font-bold text-white mb-5"
          >
            {t("hero.sesame_oil.title")}
          </h1> */}

          <h1
            ref={subtitleRef}
            className="hidden md:block 
            text-balance 
            text-2xl sm:text-2xl md:text-2xl lg:text-2xl 
            text-center lg:text-left
            text-white mb-5"
          >
            <ShineText className="font-bold" duration="10s">
              {t("hero.sesame_oil.subtitle")}
            </ShineText>
          </h1>

          {/* <h2
            ref={addToRefs}
            className="text-balance 
            text-2xl sm:text-3xl md:text-4xl lg:text-5xl
            text-center lg:text-left
            font-bold text-white mb-5"
          >
            {t("hero.sesame_oil.subtitle")}
          </h2> */}

          {/* Hero Description */}
          <p
            ref={descriptionRef}
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
