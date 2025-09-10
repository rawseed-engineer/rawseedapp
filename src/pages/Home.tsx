import "../i18n";
import { useTranslation } from "react-i18next";
import NavMenu from "../ui/nav/nav-menu";
import Story from "../ui/home/story";
import WhatWeDo from "../ui/home/what-we-do";
import SeedsHorizontal from "./../assets/seeds_horizontal.jpg";
import Products from "../ui/home/products";
import WhyRawSeed from "../ui/home/why-raw-seed";
import Values from "../ui/home/values";
import Vision from "../ui/home/vision";
import JoinOurJourney from "../ui/home/joinOurJourney";
import EmailForm from "../ui/email-form";
import Footer from "../ui/nav/footer";

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

        {/* Section - Animation */}
        <section className="rounded py-8 mt-12 sm:py-12 mx-64 my-32 text-pretty text-white text-center text-4xl">
          <div className="relative flex justify-center items-center gap-20">
            <p
              className="relative w-3xs h-72 p-8 flex justify-center items-center bg-[#fac42f] 
              animate-[BorderAnimation_3s_linear_infinite] rounded-lg
              shadow-[inset_20px_20px_40px_10px_rgba(255,255,255,0.8),inset_-3px_-6px_50px_-10px_rgba(0,0,0,0.7)]"
            >
              Additive-free
            </p>

            <p
              className="relative w-3xs h-60 p-8 flex justify-center items-center bg-[#fac42f] 
              animate-[BorderAnimation_6s_linear_infinite] rounded-lg
              shadow-[inset_15px_10px_50px_20px_rgba(255,255,255,0.8),inset_-5px_-10px_40px_-10px_rgba(0,0,0,0.7)]
              "
            >
              Unrefined
            </p>

            <p
              className="relative w-3xs h-84 p-8 flex justify-center items-center bg-[#fac42f] 
              animate-[BorderAnimation_7s_linear_infinite] rounded-lg
              shadow-[inset_20px_20px_30px_5px_rgba(255,255,255,0.8),inset_0px_0px_70px_-20px_rgba(0,0,0,0.7)]"
            >
              Packed with nutrients
            </p>

            <p
              className="relative w-3xs h-50 p-8 flex justify-center items-center bg-[#fac42f] 
              animate-[BorderAnimation_4s_linear_infinite] rounded-lg
              shadow-[inset_10px_10px_40px_20px_rgba(255,255,255,0.8),inset_-10px_-10px_30px_-20px_rgba(0,0,0,0.7)]"
            >
              Ethically sourced
            </p>
          </div>

          {/* <div className="flex justify-center">
            <svg className="animate-spin"></svg>
          </div> */}

          {/* <div className="flex justify-center">
            <span className="relative flex h-16 w-16">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex h-16 w-16 rounded-full bg-blue-500"></span>
            </span>
          </div> */}

          {/* <div className="flex justify-center">
            <div className="h-16 w-16 animate-[BorderAnimation_4s_linear_infinite] rounded-full bg-blue-500"></div>
          </div> */}
        </section>

        <section className="flex-grow overflow-x-auto w-full ">
          <div className="relative">
            <img
              src={SeedsHorizontal}
              alt="All RawSeed Oils"
              className="w-full brightness-50 aspect-auto"
            />
            <div className="absolute p-10 text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 space-y-4 bg-[rgba(0,0,0,0.3)]">
              <p className="text-4xl text-neutral-200">{t("what_we_do.p2")}</p>
            </div>
          </div>
        </section>

        <section className="rounded py-8 sm:py-12 mx-64">
          <Products />
        </section>

        {/* Why Raw Seed ? */}
        <section className="rounded bg-[#181818] py-12 sm:py-24">
          <WhyRawSeed />
        </section>

        <section className="rounded bg-white py-8 sm:py-12 md:mx-64">
          <Values />
        </section>

        {/* Our Vision */}
        <section className="flex-grow overflow-x-auto w-full ">
          <Vision />
        </section>

        {/* Contact Us */}
        <section className="rounded py-8 mt-12 sm:py-12 mx-64">
          <div className="mx-auto grid grid-cols-1 items-center justify-items-center gap-8 px-8 sm:px-16 md:grid-cols-2">
            <JoinOurJourney />
            <EmailForm />
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-[#181818] border-t border-gray-800 py-16">
          <Footer />
        </footer>
      </div>
    </>
  );
};

export default Home;
