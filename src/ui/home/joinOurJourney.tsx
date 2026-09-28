import React from "react";
import { useTranslation } from "react-i18next";
// import { Link } from "react-router-dom";
// import { Callout } from "../callout";
import GoldenDropFamily from "../../assets/goldendropfamily.png";

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
      <img
        src={GoldenDropFamily}
        alt="Golden Drop oils"
        // className="w-full brightness-70 aspect-auto"
        className="relative z-0 aspect-auto w-50"
      />
    </div>
  );
};

export default JoinOurJourney;
