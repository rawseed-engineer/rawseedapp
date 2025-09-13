import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDroplet,
  faHandHoldingDroplet,
  faBottleDroplet,
  faLeaf,
} from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from "react-i18next";

const Process: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div className="mx-auto grid grid-cols-1 items-center justify-items-center gap-8 pt-8 pb-20 sm:px-72 md:grid-cols-4">
      {/* <div className="max-w-md space-y-4"> */}
      <div>
        <div className="h-64">
          <p>
            <FontAwesomeIcon
              icon={faDroplet}
              className="text-[#a18458] p-16"
              size="8x"
            />
          </p>
        </div>
        <h2 className="text-center text-balance text-3xl text-neutral-400 text-shadow-lg font-bold tracking-tight md:text-4xl">
          {t("blackseed_oil.process.cold_pressed.title")}
        </h2>
      </div>

      <div>
        <div className="h-64">
          <p>
            <FontAwesomeIcon
              icon={faHandHoldingDroplet}
              className="text-[#a18458] p-16"
              size="8x"
            />
          </p>
        </div>
        <h2 className="text-center text-balance text-3xl text-neutral-400 text-shadow-lg font-bold tracking-tight md:text-4xl">
          {t("blackseed_oil.process.rich.title")}
        </h2>
      </div>

      <div>
        <div className="h-64">
          <p>
            <FontAwesomeIcon
              icon={faBottleDroplet}
              className="text-[#a18458] p-16"
              size="8x"
            />
          </p>
        </div>
        <h2 className="text-center text-balance text-3xl text-neutral-400 text-shadow-lg font-bold tracking-tight md:text-4xl">
          {t("blackseed_oil.process.bottle.title")}
        </h2>
      </div>

      <div>
        <div className="h-64">
          <p>
            <FontAwesomeIcon
              icon={faLeaf}
              className="text-[#a18458] p-16"
              size="8x"
            />
          </p>
        </div>
        <h2 className="text-center text-balance text-3xl text-neutral-400 text-shadow-lg font-bold tracking-tight md:text-4xl">
          {t("blackseed_oil.process.pure.title")}
        </h2>
      </div>
    </div>
  );
};

export default Process;
