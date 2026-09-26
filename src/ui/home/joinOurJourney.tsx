import React from "react";
import { useTranslation } from "react-i18next";
// import { Link } from "react-router-dom";
// import { Callout } from "../callout";

const JoinOurJourney: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div className="max-w-md space-y-6 text-justify mx-4 mt-24">
      <h1
        className="text-[#a18458] text-shadow-lg tracking-tight 
      text-4xl md:text-5xl text-center md:text-left"
      >
        {t("journey.title")}
      </h1>
      <p className="text-pretty text-neutral-600 text-2xl">{t("journey.p1")}</p>
      <p className="text-pretty text-neutral-600 text-2xl">{t("journey.p2")}</p>
      <p className="text-pretty text-neutral-600 text-2xl">
        {t("journey.p3")}
        {/* <span>
          <Callout />
        </span> */}
      </p>

      {/* <p className="flex justify-center">
        <Callout />
      </p> */}
    </div>
  );
};

export default JoinOurJourney;
