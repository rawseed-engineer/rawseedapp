import React from "react";
import RawSeedLogo from "../../assets/rawseed_logo3.png";
import { useTranslation } from "react-i18next";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ShineText from "../ShineText";

gsap.registerPlugin(ScrollTrigger);

const Hero: React.FC = () => {
  const { t } = useTranslation();

  const containerRef = useRef<HTMLDivElement>(null);
  const heroMessagesRefs = useRef<HTMLParagraphElement[]>([]);

  useEffect(() => {
    const elements = heroMessagesRefs.current;

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
            start: "top 10%", // When the container hits 75% of viewport
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
    if (el && !heroMessagesRefs.current.includes(el)) {
      heroMessagesRefs.current.push(el);
    }
  };

  return (
    <>
      {/* Hero Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url("/rawseedapp/hero_image_home_4.jpg")`,
          opacity: 0.9,
          filter: "brightness(50%)",
        }}
      />

      <div className="absolute top-[10%] sm:top-[20%] md:top-[35%]">
        <div className="relative z-10 px-10 py-12 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="flex items-center justify-center">
            {/* Hide Logo in mobile view */}
            <img
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
            ref={addToRefs}
            className="hidden md:block
            text-balance 
            text-4xl sm:text-5xl md:text-6xl lg:text-7xl
            text-center lg:text-left
            font-bold text-white  mb-5 mt-5"
          >
            {t("hero.home.title")}
          </h1>
          <h2
            ref={addToRefs}
            className="text-balance 
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
            ref={addToRefs}
            className="text-pretty text-white 
            text-2xl 
            text-justify
            lg:text-left
            mb-6"
          >
            {t("hero.home.description")}
          </p>
          {/* <div className="flex justify-center mt-30">
          <Callout />
        </div> */}
          {/* <h1>
            <ShineText duration="3s">Shine Bright Like a Diamond</ShineText>
          </h1> */}

          {/* <h1
            className="
              inline-block
              bg-gradient-to-r from-gray-500 20% via-white 60% to-gray-500 20%
              bg-[length:200%_auto]
              bg-clip-text
              text-transparent
              font-bold
              text-6xl
              animate-[shine_3s_linear_infinite]
            "
          >
            Wholesome Oils for Healthy Living
          </h1> */}
        </div>
      </div>
    </>
  );
};

export default Hero;
