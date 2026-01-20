import React from "react";
import FlaxseedCloseUp from "../../assets/flaxseed_closeup_4K.jpg";
import { useTranslation } from "react-i18next";

const UseCases: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div className="relative">
      <img
        src={FlaxseedCloseUp}
        alt="Flaxseed Close Up"
        className="w-full brightness-40 aspect-auto"
      />
      <div className="absolute text-5xl text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 space-y-4">
        <h2 className="text-4xl sm:text-5xl text-neutral-200">
          {t("flaxseed_oil.use_cases.title")}
        </h2>
      </div>
    </div>
  );
};

export default UseCases;
