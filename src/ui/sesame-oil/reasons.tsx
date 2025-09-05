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
      <h2 className="text-center text-balance text-5xl text-[#a18458] font-bold tracking-tight md:text-5xl">
        {t("sesame.reason.heading")}
      </h2>

      <div className="mx-auto grid grid-cols-1 items-center justify-items-center gap-8 pt-8 pb-20 sm:px-64 md:grid-cols-5">
        <div>
          <div className="h-64">
            <p>
              <FontAwesomeIcon
                icon={faUtensils}
                className="text-[#a18458] p-16"
                size="8x"
              />
            </p>
          </div>
          <h2 className="text-center text-balance text-3xl text-neutral-600 font-bold tracking-tight md:text-4xl">
            {t("sesame.reason.p1.title")}
          </h2>
          <p className="text-center text-pretty text-neutral-600 text-xl">
            {t("sesame.reason.p1.description")}
          </p>
        </div>

        <div>
          <div className="h-64">
            <p>
              <FontAwesomeIcon
                icon={faHeartCircleCheck}
                className="text-[#a18458] p-16"
                size="8x"
              />
            </p>
          </div>
          <h2 className="text-center text-balance text-3xl text-neutral-600 font-bold tracking-tight md:text-4xl">
            {t("sesame.reason.p2.title")}
          </h2>
          <p className="text-center text-pretty text-neutral-600 text-xl">
            {t("sesame.reason.p2.description")}
          </p>
        </div>

        <div>
          <div className="h-64">
            <p>
              <FontAwesomeIcon
                icon={faLemon}
                className="text-[#a18458] p-16"
                size="8x"
              />
            </p>
          </div>
          <h2 className="text-center text-balance text-3xl text-neutral-600 font-bold tracking-tight md:text-4xl">
            {t("sesame.reason.p3.title")}
          </h2>
          <p className="text-center text-pretty text-neutral-600 text-xl">
            {t("sesame.reason.p3.description")}
          </p>
        </div>

        <div>
          <div className="h-64">
            <p>
              <FontAwesomeIcon
                icon={faTemperatureThreeQuarters}
                className="text-[#a18458] p-16"
                size="8x"
              />
            </p>
          </div>
          <h2 className="text-center text-balance text-3xl text-neutral-600 font-bold tracking-tight md:text-4xl">
            {t("sesame.reason.p4.title")}
          </h2>
          <p className="text-center text-pretty text-neutral-600 text-xl">
            {t("sesame.reason.p4.description")}
          </p>
        </div>

        <div>
          <div className="h-64">
            <p>
              <FontAwesomeIcon
                icon={faEarthAsia}
                className="text-[#a18458] p-16"
                size="8x"
              />
            </p>
          </div>
          <h2 className="text-center text-balance text-3xl text-neutral-600 font-bold tracking-tight md:text-4xl">
            {t("sesame.reason.p5.title")}
          </h2>
          <p className="text-center text-pretty text-neutral-600 text-xl">
            {t("sesame.reason.p5.description")}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Reasons;
