import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSeedling,
  faEarthAsia,
  faPeopleGroup,
  faHeartCircleCheck,
} from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from "react-i18next";

const Values: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div className="mx-auto grid grid-cols-1 items-center justify-items-center gap-8 pt-8 pb-20 sm:px-16 md:grid-cols-4">
      {/* <div className="max-w-md space-y-4"> */}
      <div>
        <div className="h-64">
          <p>
            <FontAwesomeIcon
              icon={faSeedling}
              className="text-[#a18458] p-16"
              size="8x"
            />
          </p>
        </div>
        <h2 className="text-center text-balance text-3xl text-neutral-600 font-bold tracking-tight md:text-4xl">
          {t("value.title1")}
        </h2>
        <p className="text-center text-pretty text-neutral-600 text-xl">
          {t("value.p1")}
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
          {t("value.title2")}
        </h2>
        <p className="text-center text-pretty text-neutral-600 text-xl">
          {t("value.p1")}
        </p>
      </div>

      <div>
        <div className="h-64">
          <p>
            <FontAwesomeIcon
              icon={faPeopleGroup}
              className="text-[#a18458] p-16"
              size="8x"
            />
          </p>
        </div>
        <h2 className="text-center text-balance text-3xl text-neutral-600 font-bold tracking-tight md:text-4xl">
          {t("value.title3")}
        </h2>
        <p className="text-center text-pretty text-neutral-600 text-xl">
          {t("value.p3")}
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
          {t("value.title4")}
        </h2>
        <p className="text-center text-pretty text-neutral-600 text-xl">
          {t("value.p4")}
        </p>
      </div>
    </div>
  );
};

export default Values;
