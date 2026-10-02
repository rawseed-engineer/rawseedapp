import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export interface WhatWeDoScrollHighlightItem {
  key: string;
  description: string[];
  image: string;
  imageWidths?: number[];
  icon: IconDefinition;
}

const WhatWeDoScrollHighlight = ({
  heading,
  items,
}: {
  heading: string;
  items: WhatWeDoScrollHighlightItem[];
}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeItem = items[activeIndex] ?? items[0];
  const imageWidths = activeItem.imageWidths ?? [480, 800, 1600, 1980];
  const imageSrcSet = imageWidths
    .map((width) => `/rawseedapp/${activeItem.image}-${width}.webp ${width}w`)
    .join(", ");

  return (
    <div
      className="relative w-screen overflow-hidden"
      style={{
        minHeight: "calc(100vh - 64px)",
      }}
    >
      <img
        src={`/rawseedapp/${activeItem.image}-${imageWidths[imageWidths.length - 1]}.webp`}
        srcSet={imageSrcSet}
        sizes="100vw"
        alt=""
        loading="lazy"
        decoding="async"
        className="absolute inset-0 h-full w-full object-cover object-center"
      />
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative mx-auto flex min-h-[calc(100vh-64px)] w-full max-w-7xl flex-col items-center justify-start px-2 sm:px-6 lg:px-8">
        <div className="hidden w-full text-center font-serif text-4xl tracking-tight text-slate-100 lg:mb-0 lg:mt-36 lg:block lg:text-5xl">
          {heading}
        </div>
        <div className="flex w-full flex-1 flex-col items-center justify-start lg:flex-row lg:justify-center">
          <div className="flex flex-col items-center">
            <div className="my-3 text-center font-serif text-4xl tracking-tight text-slate-100 sm:mb-6 md:text-5xl lg:hidden">
              {heading}
            </div>
            <div
              className="grid gap-1.5 lg:flex lg:flex-col lg:gap-4"
              style={{
                gridTemplateColumns: `repeat(${items.length}, minmax(0, 1fr))`,
              }}
            >
              {items.map((item, index) => (
                <button
                  key={item.key ?? index}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  onMouseEnter={() => setActiveIndex(index)}
                  className={`w-full rounded-xl border p-0.5 text-center transition duration-200 ease-in-out sm:rounded-3xl sm:p-3 lg:p-5 lg:text-left ${
                    index === activeIndex
                      ? "border-[#a18458] bg-[#a18458] text-white shadow-lg"
                      : "border-white/30 bg-white/10 text-slate-200 hover:border-[#a18458] hover:bg-white hover:text-slate-900"
                  }`}
                  aria-pressed={index === activeIndex}
                  aria-label={item.key}
                  title={item.key}
                >
                  <FontAwesomeIcon
                    icon={item.icon}
                    aria-hidden="true"
                    className="text-3xl sm:text-3xl lg:text-4xl"
                  />
                </button>
              ))}
            </div>
          </div>

          <div className="w-full lg:w-3/5 flex items-center justify-center px-6 py-8 font-serif lg:self-start lg:items-start lg:px-12 lg:py-16">
            <div className="w-full max-w-4xl text-white lg:mt-25">
              <h2 className="text-3xl tracking-tight md:text-4xl text-slate-100 text-center md:text-left">
                {activeItem.key}
              </h2>
              {activeItem.description.map((paragraph, index) => (
                <p
                  className="mt-6 text-pretty text-justify text-2xl leading-8"
                  key={index}
                >
                  {paragraph}
                </p>
              ))}
              {/* <p
              className="mt-6 text-pretty text-2xl leading-8"
              style={{ fontFamily: "roboto" }}
            >
              {activeItem.description}
            </p> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatWeDoScrollHighlight;
