// components/TestimonialSlider.tsx
"use client";

import { useState } from "react";
import Customer1 from "../assets/customer_1.png";
import Customer2 from "../assets/customer_2.png";
import Customer3 from "../assets/customer_3.png";
import Customer4 from "../assets/customer_4.png";
import Customer5 from "../assets/customer_5.jpeg";

const testimonials = [
  {
    id: 1,
    img: Customer1,
    name: "Maecenas varius finibus orci vel",
    quote:
      "Maecenas varius finibus orci vel dignissim. Nam posuere, magna pellentesque accumsan tincidunt, libero lorem convallis lectus",
  },
  {
    id: 2,
    img: Customer2,
    name: "Maecenas varius finibus orci vel",
    quote:
      "Maecenas varius finibus orci vel dignissim. Nam posuere, magna pellentesque accumsan tincidunt, libero lorem convallis lectus",
  },
  {
    id: 3,
    img: Customer3,
    name: "Maecenas varius finibus orci vel",
    quote:
      "Maecenas varius finibus orci vel dignissim. Nam posuere, magna pellentesque accumsan tincidunt, libero lorem convallis lectus",
  },
  {
    id: 4,
    img: Customer4,
    name: "Maecenas varius finibus orci vel",
    quote:
      "Maecenas varius finibus orci vel dignissim. Nam posuere, magna pellentesque accumsan tincidunt, libero lorem convallis lectus",
  },
  {
    id: 5,
    img: Customer5,
    name: "Maecenas varius finibus orci vel",
    quote:
      "Maecenas varius finibus orci vel dignissim. Nam posuere, magna pellentesque accumsan tincidunt, libero lorem convallis lectus",
  },
];

export default function TestimonialSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const total = testimonials.length;

  const goToSlide = (newIndex: number) => {
    setCurrentIndex(() => {
      // Optional: clamp to valid range (not needed with modulo)
      return (newIndex + total) % total;
    });
  };

  const prevSlide = () => goToSlide(currentIndex - 1);
  const nextSlide = () => goToSlide(currentIndex + 1);

  // ────────────────────────────────────────────────
  // Each card takes ~33.33% width on md+ screens (3 visible)
  // We slide by exactly one card width (≈33.33%) each time
  // ────────────────────────────────────────────────
  const cardWidthPercent = 100 / 3; // ≈33.333%
  const slideOffset = -currentIndex * cardWidthPercent;

  return (
    <section
      className="bg-cover bg-center bg-fixed min-h-screen py-6 md:py-8"
      // style={{
      //   backgroundImage:
      //     "url('https://srmahour.github.io/custom-testimonial-slider-and-blog/images/testimonial-bg.jpg')",
      // }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-10 md:mb-12 max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl text-[#a18458] text-black relative pb-4 mb-4">
            What Our Clients Say
            {/* <span className="absolute left-1/2 -translate-x-1/2 bottom-0 h-1 w-48 bg-yellow-400 rounded"></span> */}
            {/* <span className="absolute left-1/2 -translate-x-1/2 bottom-0 h-0.5 w-12 bg-indigo-700 rounded"></span> */}
          </h2>
          {/* <p className="text-black font-medium text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p> */}
        </div>

        {/* Slider */}
        <div className="h-150 relative overflow-hidden">
          <div
            className="flex transition-transform duration-700 ease-out"
            style={{ transform: `translateX(${slideOffset}%)` }}
          >
            {testimonials.map((item, idx) => {
              const isActive = idx === currentIndex;

              return (
                <div
                  key={item.id}
                  className={`
                    flex-shrink-0 w-full md:w-1/3 px-3 sm:px-4 lg:px-6 mt-20
                    transition-all duration-500
                    ${isActive ? "opacity-100" : "opacity-70 md:opacity-85"}
                  `}
                >
                  <div
                    className={`
                      bg-white rounded-xl shadow-xl pt-40 pb-10 px-6 sm:px-8 relative
                      transition-all duration-500
                      ${isActive ? "scale-105 shadow-2xl border-2 border-indigo-400/30" : "scale-95"}
                    `}
                  >
                    {/* Avatar */}
                    <div
                      className={`
                        absolute left-1/2 -translate-x-1/2 rounded-full overflow-hidden
                        border-4 sm:border-8 border-white shadow-lg bg-white transition-all duration-500
                        ${isActive ? "-top-1 w-32 h-32 sm:w-40 sm:h-40" : "-top-2 w-24 h-24 sm:w-32 sm:h-32"}
                      `}
                    >
                      <img
                        src={item.img}
                        alt="Client"
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Content */}
                    <div className="text-center mt-4 sm:mt-5">
                      <h4
                        className={`
                          font-semibold text-gray-800 mb-4 transition-all duration-500
                          ${isActive ? "text-xl sm:text-2xl" : "text-lg sm:text-xl"}
                        `}
                      >
                        {item.name}
                      </h4>
                      <blockquote
                        className={`
                          text-gray-600 italic leading-relaxed transition-all duration-500
                          ${isActive ? "text-base sm:text-lg" : "text-sm sm:text-base"}
                        `}
                      >
                        <span className="text-yellow-400 text-2xl sm:text-3xl">
                          “
                        </span>
                        {item.quote}
                        <span className="text-yellow-400 text-2xl sm:text-3xl">
                          ”
                        </span>
                      </blockquote>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-center items-center gap-6 sm:gap-10 mt-10 md:mt-12">
          <button
            onClick={prevSlide}
            className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white/90 hover:bg-white shadow-lg flex items-center justify-center text-indigo-700 text-2xl sm:text-3xl transition hover:scale-110 active:scale-95"
            aria-label="Previous"
          >
            ←
          </button>

          <div className="flex gap-3 sm:gap-4">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => goToSlide(idx)}
                className={`
                    w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full transition-all duration-400
                    ${
                      idx === currentIndex
                        ? "bg-indigo-700 scale-125 w-7 sm:w-8"
                        : "bg-indigo-600/60 hover:bg-indigo-600 hover:scale-110"
                    }
                  `}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>

          <button
            onClick={nextSlide}
            className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white/90 hover:bg-white shadow-lg flex 
            items-center justify-center text-indigo-700 text-2xl sm:text-3xl 
            transition"
            aria-label="Next"
          >
            →
          </button>
        </div>
      </div>
    </section>
  );
}
