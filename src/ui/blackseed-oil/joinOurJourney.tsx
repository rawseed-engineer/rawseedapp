import React from "react";
import { useTranslation } from "react-i18next";

const JoinOurJourney: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div className="max-w-md space-y-4">
      <h1 className="text-balance text-5xl text-[#a18458] font-bold text-shadow-lg tracking-tight md:text-5xl">
        {t("blackseed_oil.journey.title")}
      </h1>
      <p className="text-pretty text-neutral-600 text-2xl">
        {t("blackseed_oil.journey.p1")}
      </p>
      <p className="text-pretty text-neutral-600 text-2xl">
        {t("blackseed_oil.journey.p2")}
      </p>
    </div>
  );
};

export default JoinOurJourney;
