import React from "react";
import { useTranslation } from "react-i18next";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { Callout } from "../callout";
import ShineText from "../ShineText";

gsap.registerPlugin(ScrollTrigger);

interface HeroProps {
  staggerDelay?: number;
  initialDelay?: number;
  titleDuration?: number;
  subtitleDuration?: number;
  descriptionDuration?: number;
  calloutDuration?: number;
}

const Hero: React.FC<HeroProps> = ({
  staggerDelay = 0.8,
  initialDelay = 0,
  titleDuration = 1,
  subtitleDuration = 2,
  descriptionDuration = 10,
  calloutDuration = 1,
}) => {
  const { t } = useTranslation();
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement | null>(null);
  const subtitleRef = useRef<HTMLHeadingElement | null>(null);
  const descriptionRef = useRef<HTMLParagraphElement | null>(null);
  const calloutRef = useRef<HTMLDivElement | null>(null);

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

      const animations = [
        [titleRef.current, titleDuration],
        [subtitleRef.current, subtitleDuration],
        [descriptionRef.current, descriptionDuration],
        [calloutRef.current, calloutDuration],
      ] as const;

      animations.forEach(([element, duration], index) => {
        if (element) {
          timeline.fromTo(
            element,
            { opacity: 0, y: 60 },
            { opacity: 1, y: 0, duration },
            index === 0 ? initialDelay : `+=${staggerDelay}`,
          );
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, [
    initialDelay,
    staggerDelay,
    titleDuration,
    subtitleDuration,
    descriptionDuration,
    calloutDuration,
  ]);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center"
    >
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url("flaxseed_flower_farm.jpg")`,
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
            {t("contact.hero.title")}
          </h1> */}

          <h1
            ref={subtitleRef}
            className="text-balance text-xl font-bold text-white md:text-6xl mb-5"
          >
            <ShineText className="font-bold" duration="10s">
              {t("contact.hero.subtitle")}
            </ShineText>
          </h1>

          <p
            ref={descriptionRef}
            className="text-pretty text-white text-2xl mb-6"
          >
            {t("contact.hero.description")}
          </p>

          {/* <div ref={calloutRef} className="flex justify-center mt-30">
            <Callout />
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Hero;
