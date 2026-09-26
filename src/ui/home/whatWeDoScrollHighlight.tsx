import { useState } from "react";

const WhatWeDoScrollHighlight = ({
  heading,
  items,
}: {
  heading: string;
  items: any[];
}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeItem = items[activeIndex] ?? items[0];

  return (
    <div
      className="relative w-screen overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${activeItem.image})`,
        minHeight: "calc(100vh - 64px)",
      }}
    >
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative mx-auto w-full max-w-7xl px-2 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-start lg:justify-center min-h-[calc(100vh-64px)]">
        {/* <div className="w-full lg:w-2/5 flex items-center justify-center p-2 sm:p-6 lg:p-10"> */}
        {/* <div className="w-full rounded-3xl border border-white/20 bg-transparent p-2 sm:p-6 mt-4"> */}
        <div className="my-3 tracking-tight text-slate-100 font-serif sm:mb-6 text-4xl md:text-5xl text-center">
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
            >
              <span className="block text-[9px] font-semibold leading-tight sm:text-sm lg:text-lg">
                {item.key}
              </span>
            </button>
          ))}
        </div>
        {/* </div> */}
        {/* </div> */}

        <div className="w-full lg:w-3/5 flex items-center justify-center px-6 py-8 lg:px-12 lg:py-16 font-serif">
          <div className="w-full max-w-4xl text-white">
            <h2 className="text-4xl tracking-tight md:text-5xl text-center md:text-left">
              {activeItem.key}
            </h2>
            {activeItem.description.map((paragraph: string, index: number) => (
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
  );
};

export default WhatWeDoScrollHighlight;
