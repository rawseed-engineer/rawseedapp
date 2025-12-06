import "../i18n";
import { useTranslation } from "react-i18next";
import NavMenu from "../ui/nav/nav-menu";
import Story from "../ui/home/story";
import WhatWeDo from "../ui/home/what-we-do";
import SeedsHorizontal from "./../assets/seeds_horizontal.jpg";
import SeedsVertical from "./../assets/seeds_vertical.jpg";
import Products from "../ui/home/products";
import WhyRawSeed from "../ui/home/why-raw-seed";
import Values from "../ui/home/values";
import Vision from "../ui/home/vision";
import JoinOurJourney from "../ui/home/joinOurJourney";
import EmailForm from "../ui/email-form";
import Footer from "../ui/nav/footer";
// import { Callout } from "../ui/callout";
import RawSeedLogo from "./../assets/rawseed_logo.png";
import ScrollFadeText from "../ui/ScrollFadeText";

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

          <div className="absolute top-[10%] sm:top-[20%] md:top-[35%]">
            <div className="relative z-10 px-4 py-12 sm:px-6 lg:px-8 max-w-7xl mx-auto">
              <div className="flex items-center justify-center">
                <img
                  src={RawSeedLogo}
                  alt="RawSeed Logo"
                  className="block md:hidden lg:hidden mx-8 h-[3rem] lg:h-[5rem] aspect-auto"
                />
              </div>

              {/* Hero Heading */}
              <h1
                className="text-balance 
                  text-4xl sm:text-5xl md:text-6xl lg:text-7xl
                  text-center lg:text-left
                  font-bold text-white   mb-5 mt-5"
              >
                {t("hero.home.title")}
              </h1>

              <h2
                className="text-balance 
                text-2xl sm:text-3xl md:text-4xl lg:text-5xl 
                text-center lg:text-left
                font-bold text-white mb-5"
              >
                {t("hero.home.subtitle")}
              </h2>

              {/* Hero Description */}
              <p
                className="text-pretty text-white 
                text-2xl 
                text-center lg:text-left
                mb-6"
              >
                {t("hero.home.description")}
              </p>

              {/* <div className="flex justify-center mt-30">
                <Callout />
              </div> */}
            </div>
          </div>
        </section>

        {/* White Background Section - Features */}
        <section
          className="rounded py-8 mt-12 sm:py-12 
          mx-4 sm:mx-4 md:mx-4 lg:mx-24 xl:mx-48 2xl:128"
        >
          <Story />
        </section>

        <section
          className="rounded py-8 mt-12 sm:py-12 
          mx-4 sm:mx-4 md:mx-4 lg:mx-24 xl:mx-48 2xl:128"
        >
          <WhatWeDo />
        </section>

        {/* Section - Animation */}
        <section className="rounded py-8 mt-12 sm:py-12 mx-64 my-32 text-pretty text-white text-center text-4xl">
          {/* <div className="relative flex justify-center items-center gap-20">
            <p
              className="relative w-3xs h-72 p-8 flex justify-center items-center bg-[#fac42f] text-shadow-lg
              animate-[BorderAnimation_3s_linear_infinite] rounded-lg
              shadow-[inset_20px_20px_40px_10px_rgba(255,255,255,0.8),inset_-3px_-6px_50px_-10px_rgba(0,0,0,0.7)]"
            >
              Additive-free
            </p>

            <p
              className="relative w-3xs h-60 p-8 flex justify-center items-center bg-[#fac42f] text-shadow-lg
              animate-[BorderAnimation_6s_linear_infinite] rounded-lg
              shadow-[inset_15px_10px_50px_20px_rgba(255,255,255,0.8),inset_-5px_-10px_40px_-10px_rgba(0,0,0,0.7)]
              "
            >
              Unrefined
            </p>

            <p
              className="relative w-3xs h-84 p-8 flex justify-center items-center bg-[#fac42f] text-shadow-lg
              animate-[BorderAnimation_7s_linear_infinite] rounded-lg
              shadow-[inset_20px_20px_30px_5px_rgba(255,255,255,0.8),inset_0px_0px_70px_-20px_rgba(0,0,0,0.7)]"
            >
              Packed with nutrients
            </p>

            <p
              className="relative w-3xs h-50 p-8 flex justify-center items-center bg-[#fac42f] text-shadow-lg
              animate-[BorderAnimation_4s_linear_infinite] rounded-lg
              shadow-[inset_10px_10px_40px_20px_rgba(255,255,255,0.8),inset_-10px_-10px_30px_-20px_rgba(0,0,0,0.7)]"
            >
              Ethically sourced
            </p>
          </div> */}

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

        <section
          className="flex-grow overflow-x-auto w-full 
          "
        >
          <div className="relative">
            {/* Image at mobile view */}
            <img
              src={SeedsHorizontal}
              alt="All RawSeed Oils"
              className="hidden md:block w-full brightness-50 aspect-auto"
            />

            {/* Image at non-mobile view */}
            <img
              src={SeedsVertical}
              alt="All RawSeed Oils"
              className="block md:hidden w-full brightness-30 aspect-auto"
            />

            <div
              className="hidden md:block absolute 
              p-1 lg:p-10
              text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
              space-y-1 lg:space-y-4
              space-x-0.5
              bg-[rgba(0,0,0,0.3)]"
            >
              <p
                className="text-2xl sm:text-xl md:text-2xl lg:text-4xl
                text-neutral-200"
              >
                {t("what_we_do.p2")}
              </p>
            </div>

            <div className="block md:hidden absolute top-0 left-0 mx-12 my-24">
              <p
                className="text-center text-justify text-2xl sm:text-xl md:text-2xl lg:text-4xl
                text-neutral-200"
              >
                {t("what_we_do.p2")}
              </p>
            </div>
          </div>
        </section>

        <section
          className="rounded py-8 sm:py-12 
          mx-4 sm:mx-4 md:mx-4 lg:mx-24 xl:mx-48 2xl:128 
          my-24"
        >
          <Products />
        </section>

        {/* Why Raw Seed ? */}
        <section className="rounded bg-[#181818] py-12 sm:py-24">
          <WhyRawSeed />
        </section>

        <section
          className="rounded bg-white py-8 sm:py-12 
          mx-4 sm:mx-4 md:mx-4 lg:mx-24 xl:mx-48 2xl:128"
        >
          <Values />
        </section>

        {/* Our Vision */}
        <section className="flex-grow overflow-x-auto w-full ">
          <Vision />
        </section>

        {/* Contact Us */}
        <section className="rounded py-8 mt-12 sm:py-12 mx-1 lg:mx-84">
          <div
            className="mx-auto grid grid-cols-1 items-center justify-items-center gap-8 px-10 sm:px-16 
            grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2"
          >
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
