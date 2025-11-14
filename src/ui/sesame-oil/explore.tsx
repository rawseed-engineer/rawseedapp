import React from "react";
import { useTranslation } from "react-i18next";

const Explore: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div className="space-y-4 text-center test-justify">
      <h1
        className="text-balance text-5xl md:text-5xl text-[#a18458] 
        font-bold text-shadow-lg tracking-tight"
      >
        {t("sesame.callout.p1")}
      </h1>
    </div>
  );
};

export default Explore;
