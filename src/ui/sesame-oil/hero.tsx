import React from "react";
import { useTranslation } from "react-i18next";
// import RawSeedLogo from "../../assets/rawseed_logo3.png";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ShineText from "../ShineText";
import ImageGoldenDropCircle from "../../assets/golden_drop_logo_only.svg";

gsap.registerPlugin(ScrollTrigger);

interface HeroProps {
  staggerDelay?: number;
  initialDelay?: number;
  titleDuration?: number;
  mobileTitleDuration?: number;
  // subtitleDuration?: number;
  logoDuration?: number;
  descriptionDuration?: number;
}

const Hero: React.FC<HeroProps> = ({
  staggerDelay = 0.6,
  initialDelay = 0,
  titleDuration = 2,
  mobileTitleDuration = 2,
  logoDuration = 1,
  descriptionDuration = 6,
}) => {
  const { t } = useTranslation();
  const isMobile = window.matchMedia("(max-width: 767px)").matches;
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement | null>(null);
  const mobileTitleRef = useRef<HTMLHeadingElement | null>(null);
  const descriptionRef = useRef<HTMLParagraphElement | null>(null);
  const circleRef = useRef<HTMLImageElement | null>(null);

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

      if (!isMobile && titleRef.current) {
        tl.fromTo(
          titleRef.current,
          { opacity: 0, y: 60 },
          { opacity: 1, y: 0, duration: titleDuration },
          `+=${staggerDelay}`,
        );
      }

      if (isMobile && mobileTitleRef.current) {
        tl.fromTo(
          mobileTitleRef.current,
          { opacity: 0, y: 60 },
          { opacity: 1, y: 0, duration: mobileTitleDuration },
          `+=${staggerDelay}`,
        );
      }

      if (!isMobile && descriptionRef.current) {
        tl.fromTo(
          descriptionRef.current,
          { opacity: 0, y: 60 },
          { opacity: 1, y: 0, duration: descriptionDuration },
          `+=${staggerDelay}`,
        );
      }

      if (circleRef.current) {
        tl.fromTo(
          circleRef.current,
          { opacity: 0, y: 60 },
          { opacity: 1, y: 0, duration: logoDuration },
          `+=${staggerDelay}`,
        );
      }
    }, containerRef);

    return () => ctx.revert();
  }, [
    initialDelay,
    staggerDelay,
    titleDuration,
    mobileTitleDuration,
    logoDuration,
    descriptionDuration,
  ]);

  return (
    <>
      {/* Hero Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url("sesame_seed_hero.webp")`,
          opacity: 0.9,
          filter: "brightness(50%)",
        }}
      />

      <div className="absolute top-[30%] sm:top-[20%] lg:top-[35%] ">
        <div className="relative z-10  px-10 py-12 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          {/* Hero Logo - Mobile only */}
          {/* <div className="hidden md:block flex items-center justify-center">
            <img
              ref={logoRef}
              src={RawSeedLogo}
              alt="RawSeed Logo"
              className="block md:hidden lg:hidden mx-8 mb-8 
              h-[12rem] lg:h-[12rem] aspect-auto"
            />
          </div> */}

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
            ref={mobileTitleRef}
            className="block md:hidden text-balance text-center text-white 
          text-5xl md:text-5xl tracking-tight text-shadow-lg mb-8 "
          >
            {t("hero.sesame_oil.subtitle")}
          </h1>

          <h1
            ref={titleRef}
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

          <p
            ref={descriptionRef}
            className="hidden md:block text-pretty text-white 
            text-2xl
            text-center text-justify lg:text-left 
            mb-6"
          >
            {t("hero.sesame_oil.description")}
          </p>
          <div className="flex justify-center">
            <img
              ref={circleRef}
              src={ImageGoldenDropCircle}
              alt="Golden Drop Circle Logo"
              className="h-[10rem] lg:h-[15rem] drop-shadow-xl drop-shadow-yellow-600"
            />
          </div>
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
