import "../i18n";
import { useTranslation } from "react-i18next";
import NavMenu from "../ui/nav/nav-menu";
import Story from "../ui/home/story";
import WhatWeDo from "../ui/home/what-we-do";
import SeedsHorizontal from "./../assets/seeds_horizontal.jpg";

const Home = () => {
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
              backgroundImage: `url("/rawseedapp/hero_image_home.jpg")`,
              opacity: 0.9,
              filter: "brightness(50%)",
            }}
          />

          <div className="absolute top-[35%] ">
            <div className="relative z-10  px-4 py-12 sm:px-6 lg:px-8 max-w-7xl mx-auto">
              {/* Hero Heading */}
              <h1 className="text-balance text-5xl font-bold text-white  md:text-7xl mb-5">
                {t("hero.home.title")}
              </h1>

              <h2 className="text-balance text-xl font-bold text-white md:text-6xl mb-5">
                {t("hero.home.subtitle")}
              </h2>

              {/* Hero Description */}
              <p className="text-pretty text-white text-2xl mb-6">
                {t("hero.home.description")}
              </p>

              {/* Call Out Button */}
              <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
                <button className="group bg-gradient-to-tr from-amber-300 to-yellow-700 text-white px-10 py-5 rounded-full hover:from-amber-700 hover:to-yellow-300 transition-all duration-200 transform hover:scale-105 flex items-center text-xl font-semibold shadow-2xl">
                  {t("hero.home.learn")}
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* White Background Section - Features */}
        <section className="rounded py-8 mt-12 sm:py-12 mx-64">
          <Story />
        </section>

        <section className="rounded py-8 mt-12 sm:py-12 mx-64">
          <WhatWeDo />
        </section>

        <section className="flex-grow overflow-x-auto w-full ">
          <img
            src={SeedsHorizontal}
            alt="All RawSeed Oils"
            className="w-full brightness-70 aspect-auto"
          />
        </section>

        <section
          id="home"
          className="relative min-h-screen flex items-center justify-center"
        >
          <h1 className="text-balance text-5xl">{t("hero.home.title")}</h1>
          <p className="text-blue">{t("hero.home.subtitle")}</p>
          <p>{t("hero.home.description")}</p>
        </section>
      </div>
    </>
  );
};

export default Home;
