import React from "react";
import SesamePlant from "../../assets/sesame_crop_field.jpg";
import { useTranslation } from "react-i18next";

const SesamePageCallout: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div className="relative">
      <img
        src={SesamePlant}
        alt="Rawseed Plant"
        className="w-full brightness-50 aspect-auto"
      />
      <div
        className="absolute text-5xl text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
        space-y-4"
      >
        <h2 className="text-5xl text-neutral-200 text-center text-shadow-lg">
          {t("sesame.callout.title")}
        </h2>
      </div>
    </div>
  );
};

export default SesamePageCallout;
