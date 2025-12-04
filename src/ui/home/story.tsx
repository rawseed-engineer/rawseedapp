import React from "react";
import { useTranslation } from "react-i18next";
import AllOils from "../../assets/sesame_fruit.jpg";

const Story: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div
      className="mx-auto grid 
      grid-cols-1 lg:grid-cols-2 
      items-center justify-items-center gap-8 
      px-8 sm:px-24"
    >
      <div
        className="
        space-y-1 lg:space-y-4
        text-neutral-600"
      >
        <h1 className="text-balance text-[#a18458] text-5xl text-shadow-lg font-bold tracking-tight md:text-5xl">
          {t("story.title")}
        </h1>
        <p className="text-pretty text-justify text-2xl">
          {t("story.description.p1")}
        </p>
        <p className="text-pretty text-justify text-2xl">
          {t("story.description.p2")}
        </p>
        <p className="text-pretty text-justify text-2xl">
          {t("story.description.p3")}
        </p>
        <p className="text-pretty text-justify text-2xl">
          {t("story.description.p4")}
        </p>
        <p className="text-pretty text-justify text-2xl">
          {t("story.description.p5")}
        </p>
      </div>
      <img src={AllOils} alt="All RawSeed Oils" className="mx-8 aspect-auto" />
    </div>
  );
};

export default Story;
