import React from "react";
import AllOils from "../../assets/hero_oil.jpg";
import { useTranslation } from "react-i18next";

const WhatWeDo: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div className="mx-auto grid grid-cols-1 items-center justify-items-center gap-8 px-8 sm:px-16 md:grid-cols-2">
      <img
        src={AllOils}
        alt="All RawSeed Oils"
        className="mx-8 h-[40rem] aspect-auto"
      />
      <div className="max-w-md text-neutral-600 space-y-4">
        <h2 className="text-balance text-[#a18458] text-5xl font-bold tracking-tight md:text-5xl">
          {t("what_we_do.title")}
        </h2>
        <p className="text-pretty text-2xl">{t("what_we_do.p1")}</p>
        <li className="text-2xl">{t("what_we_do.item1")}</li>
        <li className="text-2xl">{t("what_we_do.item2")}</li>
        <li className="text-2xl">{t("what_we_do.item3")}</li>
        <li className="text-2xl">{t("what_we_do.item4")}</li>
        <p className="text-pretty text-2xl">{t("what_we_do.p2")}</p>
      </div>
    </div>
  );
};

export default WhatWeDo;
