import React from "react";
import { useTranslation } from "react-i18next";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

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

      if (subtitleRef.current) {
        tl.fromTo(
          subtitleRef.current,
          { opacity: 0, y: 60 },
          { opacity: 1, y: 0, duration: subtitleDuration },
          initialDelay,
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
          // backgroundImage: `url("/rawseedapp/hero_image_home.jpg")`,
          backgroundImage: `url("flaxseed_oil_hero.jpg")`,
          opacity: 0.9,
          filter: "brightness(50%)",
        }}
      />

      <div className="absolute top-[35%] ">
        <div className="relative z-10  px-4 py-12 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          {/* Hero Heading */}

          <h1
            ref={subtitleRef}
            className="text-balance 
                  text-3xl sm:text-3xl md:text-4xl lg:text-5xl 
                  text-center lg:text-left
                  font-bold text-white mb-5"
          >
            {t("flaxseed_oil.hero.subtitle")}
          </h1>

          {/* Hero Description */}
          <p
            ref={descriptionRef}
            className="text-pretty text-white 
                text-2xl text-justify
                lg:text-left
                mb-6"
          >
            {t("flaxseed_oil.hero.description")}
          </p>
        </div>
      </div>
    </>
  );
};

export default Hero;
