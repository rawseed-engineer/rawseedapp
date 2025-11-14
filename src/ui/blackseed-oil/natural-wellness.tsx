import React from "react";
import { useTranslation } from "react-i18next";
import ImageNaturalWellness from "../../assets/blackseed_oil_seed_flower.jpg";

const NaturalWellness: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div
      className="mx-auto grid grid-cols-1 md:grid-cols-2 
      items-center justify-items-center gap-8 px-8 sm:px-16"
    >
      <img
        src={ImageNaturalWellness}
        alt="RawSeed's blackseed oils make your hair and skin healthy"
        className="mx-8"
      />
      <div className="max-w-md text-neutral-600 space-y-4">
        <h2 className="text-balance text-[#a18458] text-5xl font-bold tracking-tight md:text-5xl">
          {t("blackseed_oil.natural_wellness.title")}
        </h2>
        <p className="text-pretty text-2xl">
          {t("blackseed_oil.natural_wellness.description")}
        </p>
      </div>
    </div>
  );
};

export default NaturalWellness;
