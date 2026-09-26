import React from "react";
import { useTranslation } from "react-i18next";
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
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 10%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
          // markers: true,
        },
      });

      if (!isMobile && titleRef.current) {
        timeline.fromTo(
          titleRef.current,
          { opacity: 0, y: 60 },
          { opacity: 1, y: 0, duration: titleDuration },
          `+=${staggerDelay}`,
        );
      }

      if (isMobile && mobileTitleRef.current) {
        timeline.fromTo(
          mobileTitleRef.current,
          { opacity: 0, y: 60 },
          { opacity: 1, y: 0, duration: mobileTitleDuration },
          `+=${staggerDelay}`,
        );
      }

      if (!isMobile && descriptionRef.current) {
        timeline.fromTo(
          descriptionRef.current,
          { opacity: 0, y: 60 },
          { opacity: 1, y: 0, duration: descriptionDuration },
          `+=${staggerDelay}`,
        );
      }

      if (circleRef.current) {
        timeline.fromTo(
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
    logoDuration,
    descriptionDuration,
  ]);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center"
    >
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url("about_us_hero.webp")`,
          opacity: 0.9,
          filter: "brightness(50%)",
        }}
      />

      <div className="absolute top-[35%]">
        <div className="relative z-10 px-4 py-12 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          {/* <h1
            ref={titleRef}
            className="text-balance text-5xl font-bold text-white md:text-7xl mb-5"
          >
            {t("about_us.title")}
          </h1> */}

          <h1
            ref={mobileTitleRef}
            className="block md:hidden text-balance text-center text-white 
          text-5xl md:text-5xl tracking-tight text-shadow-lg mb-8 "
          >
            {t("about_us.subtitle")}
          </h1>

          <h1
            ref={titleRef}
            className="hidden md:block text-balance text-xl font-bold text-white md:text-6xl mb-5"
          >
            <ShineText className="font-bold" duration="10s">
              {t("about_us.subtitle")}
            </ShineText>
          </h1>

          <p
            ref={descriptionRef}
            className="hidden md:block text-pretty text-white text-2xl mb-6"
          >
            {t("hero.home.description")}
          </p>

          <div className="flex justify-center">
            <img
              ref={circleRef}
              src={ImageGoldenDropCircle}
              alt="Golden Drop Circle Logo"
              className="h-[10rem] lg:h-[15rem] drop-shadow-xl drop-shadow-yellow-600"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
