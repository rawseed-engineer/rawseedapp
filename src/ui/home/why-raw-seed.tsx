import React from "react";
import { useTranslation } from "react-i18next";

const WhyRawSeed: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div className="mx-auto grid grid-cols-1 items-center justify-items-center  px-8 sm:px-16 md:grid-cols-1">
      <div className="max-w-3xl text-neutral-400 space-y-4">
        <h2 className="text-balance text-[#a18458] text-5xl font-bold tracking-tight md:text-5xl">
          {t("why_raw_seed.title")}
        </h2>
        <p className="text-pretty text-2xl">{t("why_raw_seed.p1")}</p>
        <li className="text-2xl">{t("why_raw_seed.item1")}</li>
        <li className=" text-2xl">{t("why_raw_seed.item2")}</li>
        <p className="text-pretty text-2xl">{t("why_raw_seed.p2")}</p>
        <p className="text-pretty text-2xl">{t("why_raw_seed.p3")}</p>
      </div>
    </div>
  );
};

export default WhyRawSeed;
