import React from "react";
import { useTranslation } from "react-i18next";
import BlackseedFlower from "../../assets/blackseed_flower.jpg";

const Story: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div className="mx-auto grid grid-cols-1 items-center justify-items-center gap-8 px-8 sm:px-16 md:grid-cols-2">
      <div className="max-w-md space-y-4 text-neutral-600">
        <h1 className="text-balance text-[#a18458] text-5xl font-bold tracking-tight md:text-5xl">
          {t("blackseed_oil.story.title")}
        </h1>
        <p className="text-pretty text-2xl">{t("blackseed_oil.story.p1")}</p>
        <p className="text-pretty text-2xl">{t("blackseed_oil.story.p2")}</p>
        <p className="text-pretty text-2xl">{t("blackseed_oil.story.p3")}</p>
      </div>
      <img
        src={BlackseedFlower}
        alt="Blackseed Oils"
        className="mx-8 h-[30rem] "
      />
    </div>
  );
};

export default Story;
