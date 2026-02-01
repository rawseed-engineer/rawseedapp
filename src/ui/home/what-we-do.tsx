import React from "react";
import AllOils from "../../assets/range_of_oils.jpg";
import { useTranslation } from "react-i18next";

const WhatWeDo: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div
      className="mx-auto grid grid-cols-1 lg:grid-cols-2
      items-center justify-items-center gap-8 px-8 sm:px-24 pb-100"
    >
      <img src={AllOils} alt="All RawSeed Oils" className="mx-8 aspect-auto" />
      <div className="max-w-md text-neutral-600 space-y-4">
        <h2 className="text-balance text-[#a18458] text-5xl text-shadow-lg font-bold tracking-tight md:text-5xl">
          {t("what_we_do.title")}
        </h2>
        <p className="text-pretty text-2xl">{t("what_we_do.p1")}</p>
        {/* <li className="text-2xl">{t("what_we_do.item1")}</li>
        <li className="text-2xl">{t("what_we_do.item2")}</li>
        <li className="text-2xl">{t("what_we_do.item3")}</li>
        <li className="text-2xl">{t("what_we_do.item4")}</li>
        <p className="text-pretty text-2xl">{t("what_we_do.p2")}</p> */}
        <div className="flex justify-left">
          <a href="#id1">
            {/* <svg
            xmlns="http://www.w3.org/2000/svg"
            height="1em"
            viewBox="0 0 320 512"
            className="size-6 animate-[bounce_1.5s_ease-in-out_infinite]"
          >
            <path d="M143 352.3c12.5 12.5 32.8 12.5 45.3 0l128-128c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 274.7 48 179c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l128 128zM143 480.3c12.5 12.5 32.8 12.5 45.3 0l128-128c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 402.7 48 307c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l128 128z" />
          </svg> */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="1em"
              viewBox="0 0 320 512"
              className="size-8 animate-bounce fill-current text-[#a18458]"
            >
              <path d="M143 352.3c12.5 12.5 32.8 12.5 45.3 0l128-128c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 274.7 48 179c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l128 128zM143 480.3c12.5 12.5 32.8 12.5 45.3 0l128-128c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 402.7 48 307c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l128 128z" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default WhatWeDo;
