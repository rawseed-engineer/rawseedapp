import React from "react";
import { useTranslation } from "react-i18next";

const Vision: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div className="mx-auto grid grid-cols-1 items-center justify-items-center px-8 sm:px-16 md:grid-cols-1">
      <div className="max-w-3xl text-neutral-400 space-y-4 text-center">
        <h2 className="text-balance text-[#a18458] text-5xl  font-bold tracking-tight md:text-5xl">
          {t("about_us.vision.title")}
        </h2>
        <p className="text-pretty text-justify justify-center text-2xl">
          {t("about_us.vision.p1")}
        </p>
      </div>
    </div>
  );
};

export default Vision;
