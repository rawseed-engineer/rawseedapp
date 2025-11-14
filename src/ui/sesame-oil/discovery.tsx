import React from "react";
import { useTranslation } from "react-i18next";
import SesameFlower from "../../assets/sesame_flower_plant.jpg";

const Discovery: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div
      className="mx-auto grid grid-cols-1 lg:grid-cols-2 
      items-center justify-items-center gap-8 px-8 sm:px-16"
    >
      <div className="space-y-4 text-neutral-600">
        <h1
          className="text-balance text-[#a18458] 
          text-5xl md:text-5xl font-bold tracking-tight "
        >
          {t("sesame.rediscovery.title")}
        </h1>
        <p className="text-pretty text-2xl">{t("sesame.rediscovery.p1")}</p>
        <p className="text-pretty text-2xl">{t("sesame.rediscovery.p2")}</p>
        <li className="text-2xl">{t("sesame.rediscovery.item1")}</li>
        <li className="text-2xl">{t("sesame.rediscovery.item2")}</li>
        <li className="text-2xl">{t("sesame.rediscovery.item3")}</li>
        <p className="text-pretty text-2xl">{t("sesame.rediscovery.p3")}</p>

        {/* <YnsLink
          className="inline-flex h-10 items-center justify-center rounded-full bg-gradient-to-tr from-amber-300 to-yellow-700 px-6 font-medium text-neutral-950 
          transition-colors hover:bg-gradient-to-bl from-amber-300 to-yellow-700 focus:outline-hidden focus:ring-1 focus:ring-neutral-950"
          href={t("hero.link")}
        >
          {t("hero.action")}
        </YnsLink> */}
      </div>
      {/* <Image
        src="/sesame_flower.jpg"
        width={500}
        height={500}
        style={{ opacity: 1 }}
        alt="Rawseed oils"
      /> */}
      <img
        src={SesameFlower}
        alt="Rawseed flower"
        // className="w-full brightness-70 aspect-auto"
        className="aspect-auto"
      />
    </div>
  );
};

export default Discovery;
