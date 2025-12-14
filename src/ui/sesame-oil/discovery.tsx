import React from "react";
import { useTranslation } from "react-i18next";
import SesameFlower from "../../assets/sesame_flower_plant.jpg";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Discovery: React.FC = () => {
  const { t } = useTranslation();
  const containerRef = useRef<HTMLDivElement>(null);
  const discoveryRefs = useRef<HTMLParagraphElement[]>([]);

  useEffect(() => {
    const elements = discoveryRefs.current;

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
    if (el && !discoveryRefs.current.includes(el)) {
      discoveryRefs.current.push(el);
    }
  };

  return (
    <div
      ref={containerRef}
      className="mx-auto grid grid-cols-1 lg:grid-cols-2 
      items-center justify-items-center gap-8 px-8 sm:px-16"
    >
      <div ref={addToRefs} className="space-y-4 text-neutral-600">
        <h1
          className="text-balance text-[#a18458] 
          text-5xl md:text-5xl font-bold tracking-tight text-shadow-lg"
        >
          {t("sesame.rediscovery.title")}
        </h1>
        <p className="text-pretty text-2xl">{t("sesame.rediscovery.p1")}</p>
        <p className="text-pretty text-2xl">{t("sesame.rediscovery.p2")}</p>
        <ul className="list-disc list-inside">
          <li className="text-2xl">{t("sesame.rediscovery.item1")}</li>
          <li className="text-2xl">{t("sesame.rediscovery.item2")}</li>
          <li className="text-2xl">{t("sesame.rediscovery.item3")}</li>
        </ul>
        <p className="text-pretty text-2xl">{t("sesame.rediscovery.p3")}</p>

        {/* <YnsLink
          className="inline-flex h-10 items-center justify-center rounded-full bg-gradient-to-tr from-amber-300 to-yellow-700 px-6 font-medium text-neutral-950 
          transition-colors hover:bg-gradient-to-bl from-amber-300 to-yellow-700 focus:outline-hidden focus:ring-1 focus:ring-neutral-950"
          href={t("hero.link")}
        >
          {t("hero.action")}
        </YnsLink> */}
      </div>

      <img
        ref={addToRefs}
        src={SesameFlower}
        alt="Rawseed flower"
        // className="w-full brightness-70 aspect-auto"
        className="aspect-auto"
      />
    </div>
  );
};

export default Discovery;
