import React from "react";
import SesamePlantBanner from "../../assets/sesame_crop_field.jpg";
import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDroplet } from "@fortawesome/free-solid-svg-icons/faDroplet";

const Vision: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div className="relative">
      <img
        src={SesamePlantBanner}
        alt="Sesame Plant"
        className="w-full brightness-40 aspect-auto"
      />

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 space-y-4">
        <div className="bg-[rgba(0,0,0,0.2)] p-10 space-y-4 rounded-xl">
          <h2
            className="text-2xl sm:text-2xl md:text-3xl lg:text-5xl 
          text-neutral-200 text-shadow-lg"
          >
            {t("vision.title")}
          </h2>

          <p className="text-xl sm:text-xl md:text-2xl md:text-2xl lg:text-2xl text-neutral-200">
            {t("vision.p1")}
          </p>

          <p className="text-xl sm:text-xl md:text-2xl md:text-2xl lg:text-2xl text-neutral-200">
            {t("vision.p2")}
          </p>
          <ul className="list-disc list-inside text-neutral-200 text-xl sm:text-xl md:text-2xl md:text-2xl lg:text-2xl">
            <li className="flex items-start gap-3 text-2xl">
              <FontAwesomeIcon
                icon={faDroplet}
                className="mt-2 shrink-0 text-xl text-[#a18458]"
                aria-hidden="true"
              />
              <span>{t("vision.item1")}</span>
            </li>
            <li className="flex items-start gap-3 text-2xl">
              <FontAwesomeIcon
                icon={faDroplet}
                className="mt-2 shrink-0 text-xl text-[#a18458]"
                aria-hidden="true"
              />
              <span>{t("vision.item2")}</span>
            </li>
            {/* <li className="flex items-start gap-3 text-2xl">
              <FontAwesomeIcon
                icon={faDroplet}
                className="mt-2 shrink-0 text-xl text-[#a18458]"
                aria-hidden="true"
              />
              <span>{t("vision.item3")}</span>
            </li> */}
          </ul>

          <p className="text-2xl text-neutral-200">{t("vision.p3")}</p>
        </div>
      </div>
    </div>
  );
};

export default Vision;
