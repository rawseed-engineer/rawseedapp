import React from "react";
import { useTranslation } from "react-i18next";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

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
        }
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
            ref={addToRefs}
            className="hidden md:block
                  text-balance 
                  text-4xl sm:text-5xl md:text-6xl lg:text-7xl 
                  font-center lg:text-left
                  font-bold text-white mb-5 mt-5"
          >
            {t("flaxseed_oil.hero.title")}
          </h1>

          <h2
            ref={addToRefs}
            className="text-balance 
                  text-3xl sm:text-3xl md:text-4xl lg:text-5xl 
                  text-center lg:text-left
                  font-bold text-white mb-5"
          >
            {t("flaxseed_oil.hero.subtitle")}
          </h2>

          {/* Hero Description */}
          <p
            ref={addToRefs}
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
