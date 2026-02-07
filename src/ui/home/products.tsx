"use client"; // This makes it a Client Component since GSAP runs on the client

import React from "react";
import BlackSeedOilBottle from "../../assets/bottle_blackseed.jpg";
import SesameSeedOilBottle from "../../assets/bottle_sesame_seed.jpg";
import FlaxSeedOilBottle from "../../assets/bottle_flaxseed.jpg";
import GoldenDropLogo from "../../assets/golden_drop_logo.svg";

import { useTranslation } from "react-i18next";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import BookingCard from "../BookingCard";

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
            start: "top 30%", // When the container hits 75% of viewport
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
    if (el && !productRefs.current.includes(el)) {
      productRefs.current.push(el);
    }
  };

  return (
    <div ref={containerRef} className="mx-auto gap-8 px-8 sm:px-16">
      <div className="flex justify-center text-center">
        <h2
          ref={addToRefs}
          className="my-6 text-[#a18458] text-balance text-4xl text-shadow-lg font-bold tracking-tight md:text-4xl"
        >
          {t("products.heading")}
        </h2>
      </div>
      <div className="flex justify-center">
        <img
          ref={addToRefs}
          src={GoldenDropLogo}
          alt="Golden Drop Logo"
          className="mx-8 my-20 w-md aspect-auto brightness-80 drop-shadow-lg"
        />
      </div>

      <div ref={addToRefs} className="m-12 text-center">
        <h2 className="my-6 text-[#a18458] text-balance text-4xl text-shadow-lg font-bold tracking-tight md:text-4xl">
          {t("products.title")}
        </h2>
      </div>

      <div
        className="mx-auto grid grid-cols-1 lg:grid-cols-3
      gap-8 px-8 sm:px-16"
      >
        <div ref={addToRefs} className="flex justify-center">
          <BookingCard
            imageUrl={SesameSeedOilBottle}
            title="Sesame Seed Oil"
            description={t("products.sesame.description")}
            buttonText="Order Now"
          />
        </div>

        <div ref={addToRefs} className="flex justify-center">
          <BookingCard
            imageUrl={FlaxSeedOilBottle}
            title="Flaxseed Oil"
            description={t("products.flaxseed.description")}
            buttonText="Order Now"
          />
        </div>

        <div ref={addToRefs} className="flex justify-center">
          <BookingCard
            imageUrl={BlackSeedOilBottle}
            title="Black Seed Oil"
            description={t("products.black_seed.description")}
            buttonText="Pre-order Now"
          />
        </div>
      </div>
    </div>
  );
};

export default Products;
