"use client"; // This makes it a Client Component since GSAP runs on the client

import React from "react";
import BlackSeedOilBottle from "../../assets/bottle_blackseed.jpg";
import SesameSeedOilBottle from "../../assets/bottle_sesame_seed.jpg";
import FlaxSeedOilBottle from "../../assets/bottle_flaxseed.jpg";

import { useTranslation } from "react-i18next";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Products: React.FC = () => {
  const { t } = useTranslation();

  const containerRef = useRef<HTMLDivElement>(null);
  const productRefs = useRef<HTMLParagraphElement[]>([]);

  // useEffect(() => {
  //   productRefs.current.forEach((el) => {
  //     gsap.fromTo(
  //       el,
  //       { opacity: 0, y: 20 }, // Start state: hidden and slightly below
  //       {
  //         opacity: 1,
  //         y: 0,
  //         duration: 3,
  //         stagger: 1,
  //         ease: "power3.out",

  //         scrollTrigger: {
  //           trigger: el,

  //           start: "top 40%", // Trigger when top of element hits 80% of viewport
  //           end: "bottom 20%",
  //           toggleActions: "play none none reverse", // Play on enter, reverse on leave
  //         },
  //       }
  //     );
  //   });
  // }, []);

  useEffect(() => {
    const elements = productRefs.current;

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
          stagger: 0.5, // This is the magic: each item delays by 0.2s
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
    if (el && !productRefs.current.includes(el)) {
      productRefs.current.push(el);
    }
  };

  return (
    <div
      ref={containerRef}
      className="mx-auto grid grid-cols-1 lg:grid-cols-3
     gap-8 px-8 sm:px-16"
    >
      <div ref={addToRefs}>
        <div className="flex justify-center">
          <img
            src={SesameSeedOilBottle}
            alt="All RawSeed Oils"
            className="mx-8 w-md aspect-auto"
          />
        </div>
        <div className="m-12 text-center">
          <h2 className="my-6 text-[#a18458] text-balance text-4xl text-shadow-lg font-bold tracking-tight md:text-4xl">
            {t("products.sesame.title")}
          </h2>
          <p className="text-pretty text-neutral-500 text-2xl">
            {t("products.sesame.description")}
          </p>
        </div>
      </div>

      <div ref={addToRefs}>
        <div className="flex justify-center">
          <img
            src={BlackSeedOilBottle}
            alt="All RawSeed Oils"
            className="mx-8 w-md aspect-auto"
          />
        </div>
        <div className="m-12 text-center">
          <h2 className="my-6 text-[#a18458] text-balance text-4xl text-shadow-lg font-bold tracking-tight md:text-4xl">
            {t("products.black_seed.title")}
          </h2>
          <p className="text-pretty text-neutral-500 text-2xl">
            {t("products.black_seed.description")}
          </p>
        </div>
      </div>

      <div ref={addToRefs}>
        <div className="flex justify-center">
          <img
            src={FlaxSeedOilBottle}
            alt="Golder Drop Flaxseed Oil Bottle"
            className="mx-8 w-md aspect-auto"
          />
        </div>
        <div className="m-12 text-center">
          <h2 className="my-6 text-[#a18458] text-balance text-4xl text-shadow-lg font-bold tracking-tight md:text-4xl">
            {t("products.flaxseed.title")}
          </h2>
          <p className="text-pretty text-neutral-500 text-2xl">
            {t("products.flaxseed.description")}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Products;
