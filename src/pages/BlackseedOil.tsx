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
import Footer from "../ui/nav/footer";

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
      <section className="rounded py-8 mt-16 sm:py-12 mx-64 ">
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

      <section className="rounded py-8 mt-12 sm:py-12 mx-64">
        <div className="relative flex justify-center items-center gap-20">
          <div
            className="relative w-lg h-120 p-8 flex justify-center items-center bg-[#fac42f] 
            animate-[BorderAnimation_4s_linear_infinite] rounded-lg
            shadow-[inset_20px_20px_40px_20px_rgba(255,255,255,0.8),inset_-5px_-5px_70px_10px_rgba(0,0,0,0.7)]"
          >
            Choose
          </div>
        </div>

        <div className="flex justify-center">
          <svg className="animate-spin"></svg>
        </div>

        <div className="flex justify-center">
          <span className="relative flex h-16 w-16">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gradient-to-tr from-amber-300 to-yellow-700 opacity-75"></span>
            <span className="relative inline-flex h-16 w-16 rounded-full bg-gradient-to-tr from-amber-300 to-yellow-700"></span>
          </span>
        </div>

        <div className="flex justify-center">
          {/* <div className="h-16 w-16 animate-[wiggle_1s_ease-in-out_infinite] rounded-full bg-blue-500"></div> */}
          <div className="h-16 w-16 animate-[BorderAnimation_4s_linear_infinite] rounded-full bg-blue-500"></div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#181818] border-t border-gray-800 py-16">
        <Footer />
      </footer>
    </div>
  );
};

export default BlackSeedOilPage;
