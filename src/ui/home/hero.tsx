import React from "react";
import RawSeedLogo from "../../assets/rawseed_logo3.png";
import { useTranslation } from "react-i18next";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ShineText from "../ShineText";
import ImageGoldenDropCircle from "../../assets/golden_drop_circle.svg";

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
  const titleRef = useRef<HTMLHeadingElement | null>(null);
  const subtitleRef = useRef<HTMLHeadingElement | null>(null);
  const descriptionRef = useRef<HTMLParagraphElement | null>(null);
  const circleRef = useRef<HTMLImageElement | null>(null);

  useEffect(() => {
    // Create one ScrollTrigger for the entire container
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 10%", // When the container hits 10% of viewport
          end: "bottom 20%",
          toggleActions: "play none none reverse",
          // markers: true, // Remove in production
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

      if (titleRef.current) {
        tl.fromTo(
          titleRef.current,
          { opacity: 0, y: 60 },
          { opacity: 1, y: 0, duration: titleDuration },
          logoRef.current ? `+=${staggerDelay}` : initialDelay,
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

      if (descriptionRef.current) {
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
          { opacity: 1, y: 0, duration: circleDuration },
          `+=${staggerDelay}`,
        );
      }
    }, containerRef);

    return () => ctx.revert(); // Cleanup on unmount
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
        className="absolute inset-0 bg-cover bg-center bg-no-repeat 
        brightness-20 md:brightness-50 opacity-90
        bg-[url(/rawseedapp/rawseed-hero.jpg)]"
      />

      <div className="absolute top-[30%] sm:top-[20%] md:top-[35%]">
        <div className="relative z-10 px-10 py-12 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="flex items-center justify-center">
            {/* Hide Logo in mobile view */}
            <img
              ref={logoRef}
              src={RawSeedLogo}
              alt="RawSeed Logo"
              className="block md:hidden
              mx-8 mb-8 
              h-[12rem] lg:h-[12rem] 
              aspect-auto"
            />
          </div>
          {/* Hero Heading */}
          <h1
            ref={titleRef}
            className="hidden md:block
            text-balance 
            text-4xl sm:text-5xl md:text-6xl lg:text-7xl
            text-center lg:text-left
            font-bold text-white  mb-5 mt-5"
          >
            {t("hero.home.title")}
          </h1>
          <h2
            ref={subtitleRef}
            className="hidden md:block 
            text-balance 
            text-2xl sm:text-2xl md:text-2xl lg:text-2xl 
            text-center lg:text-left
            text-white mb-5"
          >
            <ShineText className="font-bold" duration="10s">
              {t("hero.home.subtitle")}
            </ShineText>
          </h2>
          {/* Hero Description */}
          <p
            ref={descriptionRef}
            className="hidden md:block 
            text-pretty text-white 
            text-2xl 
            text-justify
            lg:text-left
            mb-6"
          >
            {t("hero.home.description")}
          </p>
          <div className="flex justify-center">
            <img
              ref={circleRef}
              src={ImageGoldenDropCircle}
              alt="Golden Drop Circle Logo"
              className="h-[10rem] lg:h-[15rem] drop-shadow-lg"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
