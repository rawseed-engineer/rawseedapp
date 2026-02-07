// components/ShoppingHelpAccordion.jsx
import { useState } from "react";
import SesameSeedOilBottle from "../assets/bottle_sesame_seed.jpg";
import { useTranslation } from "react-i18next";

interface ProductInformationProps {
  productItems: Array<{ title: string; content: React.ReactNode }>;
}

export default function ProductInformationAccordion({
  productItems: faqItems,
}: ProductInformationProps) {
  const [openIndex, setOpenIndex] = useState(0); // first one open by default
  const { t } = useTranslation();
  const toggle = (index: any) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <div
      className="mx-auto grid grid-cols-1 lg:grid-cols-2 
      items-center justify-items-center 
      gap-1 px-8 sm:px-1 mb-60"
    >
      <div>
        <img
          src={SesameSeedOilBottle}
          alt="Golden Drop Sesame Seed Oil"
          className="aspect-auto h-180"
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
          text-5xl md:text-5xl font-bold tracking-tight text-shadow-lg mb-8"
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
