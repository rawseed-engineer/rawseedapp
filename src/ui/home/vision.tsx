import React from "react";
import SesamePlantBanner from "../../assets/sesame_plant_banner.jpg";
import { useTranslation } from "react-i18next";

const Vision: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div className="relative">
      <img
        src={SesamePlantBanner}
        alt="Sesame Plant"
        className="w-full brightness-70 aspect-auto"
      />

      <div className="absolute text-5xl text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 space-y-4">
        <h2 className="text-5xl text-neutral-200">{t("vision.title")}</h2>

        <p className="text-2xl text-neutral-200">{t("vision.p1")}</p>

        <p className="text-2xl text-neutral-200">{t("vision.p2")}</p>
        <ul className="list-disc list-inside text-neutral-200 text-2xl">
          <li>{t("vision.item1")}</li>
          <li>{t("vision.item2")}</li>
          <li>{t("vision.item3")}</li>
        </ul>

        <p className="text-2xl text-neutral-200">{t("vision.p3")}</p>
      </div>
    </div>
  );
};

export default Vision;
