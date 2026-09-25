import React from "react";
import SesamePlantBanner from "../../assets/sesame_crop_field.jpg";
import SesamePlantBannerVertical from "../../assets/sesame_crop_field_vertical.jpg";
import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDroplet } from "@fortawesome/free-solid-svg-icons/faDroplet";

const Vision: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div className="relative">
      <img
        src={
          window.matchMedia("(max-width: 414px)").matches
            ? SesamePlantBannerVertical
            : SesamePlantBanner
        }
        alt="Sesame Plant"
        className="w-full brightness-40 aspect-auto"
      />

      <div className="absolute inset-0 flex items-center justify-center px-3 sm:px-64">
        <div className="w-full max-w-[90%] sm:max-w-[80%] bg-[rgba(0,0,0,0.2)] p-4 sm:p-10 space-y-2 sm:space-y-4 rounded-xl">
          <h2
            className="text-2xl sm:text-2xl md:text-3xl lg:text-5xl 
          text-neutral-200 text-shadow-lg"
          >
            {t("vision.title")}
          </h2>

          <p className="text-xl sm:text-xl md:text-2xl md:text-2xl lg:text-2xl text-neutral-200 text-justify">
            {t("vision.p1")}
          </p>

          <p className="text-xl sm:text-xl md:text-2xl md:text-2xl lg:text-2xl text-neutral-200 text-justify">
            {t("vision.p2")}
          </p>
          <ul className="list-disc list-inside text-neutral-200 text-xl sm:text-xl md:text-2xl md:text-2xl lg:text-2xl text-justify">
            <li className="flex items-start gap-3 text-xl md:text-2xl">
              <FontAwesomeIcon
                icon={faDroplet}
                className="mt-2 shrink-0 text-xl text-[#a18458]"
                aria-hidden="true"
              />
              <span>{t("vision.item1")}</span>
            </li>
            <li className="flex items-start gap-3 text-xl md:text-2xl">
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

          <p className="text-xl md:text-2xl text-neutral-200 text-justify">
            {t("vision.p3")}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Vision;
