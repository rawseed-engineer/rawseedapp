import React from "react";
import { useTranslation } from "react-i18next";
import ImagePeacefulMind from "../../assets/peaceful-mind.jpg";

const PeacefulBodyBalance: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div
      className="mx-auto grid grid-cols-1 md:grid-cols-2 
      items-center justify-items-center gap-8 px-8 sm:px-16"
    >
      <div className="max-w-md space-y-4 text-neutral-600">
        <h1 className="text-balance text-[#a18458] text-5xl font-bold text-shadow-lg tracking-tight md:text-5xl">
          {t("blackseed_oil.peaceful_mind_body.title")}
        </h1>
        <p className="text-pretty text-2xl">
          {t("blackseed_oil.peaceful_mind_body.description")}
        </p>
      </div>
      <img
        src={ImagePeacefulMind}
        alt="Rawseed's blackseed oil promotes a peaceful mind"
        className="mx-8"
      />
    </div>
  );
};

export default PeacefulBodyBalance;
