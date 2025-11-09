import React from "react";
import { useTranslation } from "react-i18next";

const BlackseedHero: React.FC = () => {
  const { t } = useTranslation();
  return (
    <>
      {/* Hero Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url("blackseed_hero_4k.jpg")`,
          opacity: 0.9,
          filter: "brightness(50%)",
          //   backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080"><rect width="1920" height="1080" fill="%23667eea"/><circle cx="960" cy="540" r="300" fill="%23764ba2" opacity="0.8"/><circle cx="600" cy="300" r="200" fill="%23f093fb" opacity="0.6"/><circle cx="1300" cy="700" r="250" fill="%234facfe" opacity="0.7"/></svg>')`,
        }}
      />

      <div className="absolute top-[35%] ">
        <div className="relative z-10  px-4 py-12 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          {/* Hero Heading */}
          {/* <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight"> */}
          <h1 className="text-balance text-5xl font-bold text-white  md:text-7xl mb-5">
            {t("blackseed_oil.hero.title")}
            {/* <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-pink-300"> */}
          </h1>
          <h2 className="text-balance text-xl font-bold text-white md:text-6xl mb-5">
            {t("blackseed_oil.hero.subtitle")}
          </h2>

          {/* Hero Description */}
          <p className="text-pretty text-white text-2xl mb-6">
            {t("blackseed_oil.hero.description")}
          </p>

          {/* Call Out Button */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <button className="group bg-gradient-to-tr from-amber-300 to-yellow-700 text-white px-10 py-5 rounded-full hover:from-amber-700 hover:to-yellow-300 transition-all duration-200 transform hover:scale-105 flex items-center text-xl font-semibold shadow-2xl">
              {t("blackseed_oil.hero.learn")}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlackseedHero;
