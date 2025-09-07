import React from "react";
import NavMenu from "../ui/nav/nav-menu";
import { useTranslation } from "react-i18next";
import BlackseedHero from "../ui/blackseed-oil/hero";
import Story from "../ui/blackseed-oil/story";
import BlackseedCloseUp from "./../assets/blackseed_closeup_separator.jpg";
import ImmunityBooster from "../ui/blackseed-oil/immunity-booster";
import HairSkinBeauty from "../ui/blackseed-oil/hair-skin-beauty";
import PeacefulBodyBalance from "../ui/blackseed-oil/peaceful-body-balance";
import NaturalWellness from "../ui/blackseed-oil/natural-wellness";

const BlackSeedOilPage: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div className="min-h-screen antialiased">
      <NavMenu />

      {/* Hero Section with Full Page Image */}
      <section
        id="blackseed-oil"
        className="relative min-h-screen flex items-center justify-center"
      >
        <BlackseedHero />
      </section>

      {/* White Background Section - Features */}
      <section className="rounded py-8 mt-12 sm:py-12 mx-64">
        <Story />
      </section>

      <section className="flex-grow overflow-x-auto w-full ">
        <div className="relative">
          <img
            src={BlackseedCloseUp}
            alt="Blackseed Close Up"
            className="w-full brightness-100 aspect-auto"
          />
          <div className="absolute text-5xl text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 space-y-4">
            <h2 className="text-5xl text-neutral-200">
              {t("blackseed_oil.why_special")}
            </h2>
          </div>
        </div>
      </section>

      {/* White Background Section - Features */}
      <section className="rounded py-8 mt-12 sm:py-12 mx-64">
        <ImmunityBooster />
      </section>

      <section className="rounded py-8 mt-12 sm:py-12 mx-64">
        <HairSkinBeauty />
      </section>

      <section className="rounded py-8 mt-12 sm:py-12 mx-64">
        <PeacefulBodyBalance />
      </section>

      <section className="rounded py-8 mt-12 sm:py-12 mx-64">
        <NaturalWellness />
      </section>
    </div>
  );
};

export default BlackSeedOilPage;
