import {
  faEarthAsia,
  faLemon,
  faTemperatureThreeQuarters,
} from "@fortawesome/free-solid-svg-icons";
import { faHeartCircleCheck } from "@fortawesome/free-solid-svg-icons/faHeartCircleCheck";
import { faUtensils } from "@fortawesome/free-solid-svg-icons/faUtensils";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useTranslation } from "react-i18next";

const Reasons: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div>
      <h2 className="m-8 text-center text-balance text-5xl text-[#a18458] font-bold tracking-tight md:text-5xl">
        {t("sesame.reason.heading")}
      </h2>

      {/* <div className="mx-auto grid grid-cols-1  gap-8 pt-8 pb-20 sm:px-64 md:grid-cols-3"> */}
      <div className="mx-auto grid grid-cols-1 sm:px-64 md:grid-cols-3">
        <div className="m-8 w-96">
          <div className="flex items-center justify-center h-48 w-full rounded-lg">
            <FontAwesomeIcon
              icon={faUtensils}
              className="text-[#a18458]"
              size="10x"
            />
          </div>

          <h2 className="m-6 text-center text-balance text-3xl text-neutral-400 font-bold tracking-tight md:text-4xl">
            {t("sesame.reason.p1.title")}
          </h2>
          <p className="text-center text-pretty text-neutral-500 text-2xl">
            {t("sesame.reason.p1.description")}
          </p>
        </div>

        <div className="m-8 w-96">
          <div className="flex items-center justify-center h-48 w-full rounded-lg">
            <FontAwesomeIcon
              icon={faHeartCircleCheck}
              className="text-[#a18458]"
              size="10x"
            />
          </div>

          <h2 className="m-6 text-center text-balance text-3xl text-neutral-400 font-bold tracking-tight md:text-4xl">
            {t("sesame.reason.p2.title")}
          </h2>
          <p className="text-center text-pretty text-neutral-500 text-2xl">
            {t("sesame.reason.p2.description")}
          </p>
        </div>

        <div className="m-8 w-96">
          <div className="flex items-center justify-center h-48 w-full rounded-lg">
            <FontAwesomeIcon
              icon={faLemon}
              className="text-[#a18458]"
              size="10x"
            />
          </div>

          <h2 className="m-6 text-center text-balance text-3xl text-neutral-400 font-bold tracking-tight md:text-4xl">
            {t("sesame.reason.p3.title")}
          </h2>
          <p className="text-center text-pretty text-neutral-500 text-2xl">
            {t("sesame.reason.p3.description")}
          </p>
        </div>
      </div>

      <div className="mx-auto grid grid-cols-1 items-center justify-items-center gap-8 pt-8 pb-20 sm:px-64 md:grid-cols-2">
        <div className="m-8 w-96">
          <div className="flex items-center justify-center h-48 w-full rounded-lg">
            <FontAwesomeIcon
              icon={faTemperatureThreeQuarters}
              className="text-[#a18458]"
              size="10x"
            />
          </div>
          <h2 className="m-6 text-center text-balance text-3xl text-neutral-400 font-bold tracking-tight md:text-4xl">
            {t("sesame.reason.p4.title")}
          </h2>
          <p className="text-center text-pretty text-neutral-500 text-2xl">
            {t("sesame.reason.p4.description")}
          </p>
        </div>

        <div className="m-8 w-96">
          <div className="flex items-center justify-center h-48 w-full rounded-lg">
            <FontAwesomeIcon
              icon={faEarthAsia}
              className="text-[#a18458]"
              size="10x"
            />
          </div>

          <h2 className="m-6 text-center text-balance text-3xl text-neutral-400 font-bold tracking-tight md:text-4xl">
            {t("sesame.reason.p5.title")}
          </h2>

          <p className="text-center text-pretty text-neutral-500 text-2xl">
            {t("sesame.reason.p5.description")}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Reasons;
