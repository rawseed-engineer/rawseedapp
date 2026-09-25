// components/ShoppingHelpAccordion.jsx
import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface ProductInformationProps {
  productItems: Array<{ title: string; content: React.ReactNode }>;
  imageSrc: string;
  imageAlt: string;
  imageHeight?: string;
  staggerDelay?: number;
  initialDelay?: number;
  imageDuration?: number;
}

export default function ProductInformationAccordion({
  productItems: faqItems,
  imageSrc,
  imageAlt,
  imageHeight = "h-180",
  staggerDelay = 0.6,
  initialDelay = 2,
  imageDuration = 1,
}: ProductInformationProps) {
  const [openIndex, setOpenIndex] = useState(0); // first one open by default
  const { t } = useTranslation();
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement | null>(null);
  const toggle = (index: any) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 10%",
          end: "bottom 10%",
          toggleActions: "play none none reverse",
          // markers: true,
        },
      });

      const animations = [[imageRef.current, imageDuration]] as const;

      animations.forEach(([element, duration], index) => {
        if (element) {
          timeline.fromTo(
            element,
            { opacity: 0, y: 60 },
            { opacity: 1, y: 0, duration },
            index === 0 ? initialDelay : `+=${staggerDelay}`,
          );
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, [initialDelay, staggerDelay, imageDuration]);

  return (
    <div
      className="mx-auto grid grid-cols-1 lg:grid-cols-2 
      items-center justify-items-center 
      gap-1 px-1 sm:px-1 mb-60"
    >
      <div>
        <img
          ref={imageRef}
          src={imageSrc}
          alt={imageAlt}
          className={`aspect-auto ${imageHeight}`}
        />
      </div>

      <div>
        {/* <div className="mx-auto w-full max-w-3xl px-4 py-8 md:px-6"> */}
        {/* Main Title */}
        {/* <h2 className="mb-6 flex items-center justify-center text-center font-['Abril_Fatface',cursive] text-4xl md:text-5xl text-[#a18458]">
          <span className="h-px w-16 flex-1 bg-teal-700 md:w-24" />
          <span className="mx-4">Product Information</span>
          <span className="h-px w-16 flex-1 bg-teal-700 md:w-24" />
        </h2> */}
        <h1
          className="text-balance text-[#a18458] 
          text-4xl md:text-5xl tracking-tight text-shadow-lg mb-8 mt-16"
        >
          {t("sesame.product_information")}
        </h1>

        <div className="space-y-3">
          {faqItems.map((item, index) => (
            <div key={item.title} className="group">
              <button
                type="button"
                onClick={() => toggle(index)}
                className={`
                flex w-full items-center justify-between rounded-xl border px-5 py-4 text-left font-bold transition-all
                ${
                  openIndex === index
                    ? "border-[#a18458] bg-[#a18458] text-white"
                    : "border-[#a18458]/40 text-[#a18458] hover:border-[#a18458] hover:bg-[#a18458]/10"
                }
              `}
              >
                <span>{item.title}</span>
                <span
                  className={`
                  text-xl font-black transition-transform duration-300
                  ${openIndex === index ? "rotate-180" : "rotate-0"}
                `}
                >
                  ▼
                </span>
              </button>

              <div
                className={`
                overflow-hidden transition-all duration-300 ease-in-out
                ${
                  openIndex === index
                    ? "max-h-96 opacity-100"
                    : "max-h-0 opacity-0"
                }
              `}
              >
                <div className="px-5 pb-5 pt-4">
                  <div className="prose prose-teal max-w-none border-l-2 border-[#a18458] pl-4 text-[#a18458]">
                    {item.content}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
