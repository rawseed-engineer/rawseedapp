import React from "react";
import { useTranslation } from "react-i18next";
import ImageHealthyHair from "../../assets/healthy_hair.jpg";

const HairSkinBeauty: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div className="mx-auto grid grid-cols-1 items-center justify-items-center gap-8 px-8 sm:px-16 md:grid-cols-2">
      <img
        src={ImageHealthyHair}
        alt="RawSeed's blackseed oils make your hair and skin healthy"
        className="mx-8 h-[30rem] aspect-auto"
      />
      <div className="max-w-md text-neutral-600 space-y-4">
        <h2 className="text-balance text-[#a18458] text-5xl font-bold tracking-tight md:text-5xl">
          {t("blackseed_oil.healthy_skin_and_hair.title")}
        </h2>
        <p className="text-pretty text-2xl">
          {t("blackseed_oil.healthy_skin_and_hair.p1")}
        </p>
        <li className="text-2xl">
          {t("blackseed_oil.healthy_skin_and_hair.item1")}
        </li>
        <li className="text-2xl">
          {t("blackseed_oil.healthy_skin_and_hair.item2")}
        </li>
        <li className="text-2xl">
          {t("blackseed_oil.healthy_skin_and_hair.item3")}
        </li>
      </div>
    </div>
  );
};

export default HairSkinBeauty;
