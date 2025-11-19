import React from "react";
import { useTranslation } from "react-i18next";
import NavMenu from "../ui/nav/nav-menu";

const FlaxseedOil: React.FC = () => {
  const { t } = useTranslation();
  return (
    <>
      <div className="min-h-screen antialiased">
        <NavMenu />

        {/* Hero Section with Full Page Image */}
        <section
          id="home"
          className="relative min-h-screen flex items-center justify-center"
        >
          {/* Hero Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              // backgroundImage: `url("/rawseedapp/hero_image_home.jpg")`,
              backgroundImage: `url("flaxseed_oil_hero.jpg")`,
              opacity: 0.9,
              filter: "brightness(50%)",
            }}
          />

          <div className="absolute top-[35%] ">
            <div className="relative z-10  px-4 py-12 sm:px-6 lg:px-8 max-w-7xl mx-auto">
              {/* Hero Heading */}
              <h1 className="text-balance text-5xl font-bold text-white  md:text-7xl mb-5">
                {t("flaxseed_oil.hero.title")}
              </h1>

              <h2 className="text-balance text-xl font-bold text-white md:text-6xl mb-5">
                {t("flaxseed_oil.hero.subtitle")}
              </h2>

              {/* Hero Description */}
              <p className="text-pretty text-white text-2xl mb-6">
                {t("flaxseed_oil.hero.description")}
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default FlaxseedOil;
