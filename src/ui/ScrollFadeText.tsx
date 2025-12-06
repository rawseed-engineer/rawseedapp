"use client"; // This makes it a Client Component since GSAP runs on the client

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ScrollFadeText = () => {
  const textRefs = useRef<HTMLParagraphElement[]>([]);

  useEffect(() => {
    textRefs.current.forEach((el) => {
      gsap.fromTo(
        el,
        { opacity: 0, y: 20 }, // Start state: hidden and slightly below
        {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.5,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 60%", // Trigger when top of element hits 80% of viewport
            end: "bottom 20%",
            toggleActions: "play none none reverse", // Play on enter, reverse on leave
          },
        }
      );
    });
  }, []);

  const addToRefs = (el: HTMLParagraphElement | null) => {
    if (el && !textRefs.current.includes(el)) {
      textRefs.current.push(el);
    }
  };

  return (
    <section className="min-h-screen flex flex-col justify-center items-center bg-gray-100">
      <p ref={addToRefs} className="text-2xl font-bold opacity-0 mb-4">
        First Text: Fades in on scroll
      </p>
      <p ref={addToRefs} className="text-2xl font-bold opacity-0 mb-4">
        Second Text: Fades in next
      </p>
      <p ref={addToRefs} className="text-2xl font-bold opacity-0">
        Third Text: Last one
      </p>
    </section>
  );
};

export default ScrollFadeText;
