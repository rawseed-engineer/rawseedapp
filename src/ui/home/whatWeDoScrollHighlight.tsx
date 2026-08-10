import { useState } from "react";

const WhatWeDoScrollHighlight = ({ items }: { items: any[] }) => {
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
      <div className="relative mx-auto w-full max-w-7xl px-8 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-center min-h-[calc(100vh-64px)]">
        <div className="w-full lg:w-3/5 flex items-center justify-center px-6 py-12 lg:px-12 lg:py-16 font-serif">
          <div className="w-full max-w-4xl text-white">
            <h2 className="text-5xl font-semibold tracking-tight lg:text-5xl">
              {activeItem.key}
            </h2>
            <p
              className="mt-6 text-pretty text-2xl leading-8"
              style={{ fontFamily: "roboto" }}
            >
              {activeItem.description}
            </p>
          </div>
        </div>

        <div className="w-full lg:w-2/5 flex items-center justify-center p-6 lg:p-10">
          <div className="w-full rounded-3xl border border-white/20 bg-transparent p-6">
            <div className="mb-6 text-5xl font-semibold tracking-tight text-slate-100 font-serif lg:text-5xl">
              What We Do
            </div>
            <div className="flex flex-col gap-4">
              {items.map((item, index) => (
                <button
                  key={item.key ?? index}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  onMouseEnter={() => setActiveIndex(index)}
                  className={`w-full rounded-3xl border p-5 text-left transition duration-200 ease-in-out ${
                    index === activeIndex
                      ? "border-[#a18458] bg-[#a18458] text-white shadow-lg"
                      : "border-white/30 bg-white/10 text-slate-200 hover:border-[#a18458] hover:bg-white hover:text-slate-900"
                  }`}
                  aria-pressed={index === activeIndex}
                >
                  <span className="block text-lg font-semibold">
                    {item.key}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatWeDoScrollHighlight;
