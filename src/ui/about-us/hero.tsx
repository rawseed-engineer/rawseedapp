import React from "react";
import { useTranslation } from "react-i18next";
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
  descriptionDuration?: number;
}

const Hero: React.FC<HeroProps> = ({
  staggerDelay = 0.8,
  initialDelay = 0,
  titleDuration = 1,
  subtitleDuration = 2,
  descriptionDuration = 10,
}) => {
  const { t } = useTranslation();
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement | null>(null);
  const subtitleRef = useRef<HTMLHeadingElement | null>(null);
  const descriptionRef = useRef<HTMLParagraphElement | null>(null);

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

      if (titleRef.current) {
        timeline.fromTo(
          titleRef.current,
          { opacity: 0, y: 60 },
          { opacity: 1, y: 0, duration: titleDuration },
          initialDelay,
        );
      }

      if (subtitleRef.current) {
        timeline.fromTo(
          subtitleRef.current,
          { opacity: 0, y: 60 },
          { opacity: 1, y: 0, duration: subtitleDuration },
          `+=${staggerDelay}`,
        );
      }

      if (descriptionRef.current) {
        timeline.fromTo(
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
          backgroundImage: `url("about_us_hero.jpg")`,
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
            ref={subtitleRef}
            className="text-balance text-xl font-bold text-white md:text-6xl mb-5"
          >
            <ShineText className="font-bold" duration="10s">
              {t("about_us.subtitle")}
            </ShineText>
          </h1>

          <p
            ref={descriptionRef}
            className="text-pretty text-white text-2xl mb-6"
          >
            {t("hero.home.description")}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
