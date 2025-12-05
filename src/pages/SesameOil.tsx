import { useTranslation } from "react-i18next";
import NavMenu from "../ui/nav/nav-menu";
import Ayurveda from "./../assets/ayurveda.jpeg";
import Reasons from "../ui/sesame-oil/reasons";
import Discovery from "../ui/sesame-oil/discovery";
import EmailForm from "../ui/email-form";
import Explore from "../ui/sesame-oil/explore";
import Footer from "../ui/nav/footer";
// import { Callout } from "../ui/callout";
import SesamePageCallout from "../ui/sesame-oil/callout";
import RawSeedLogo from "./../assets/rawseed_logo.png";

const SesameOil = () => {
  const { t } = useTranslation();
  return (
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
            backgroundImage: `url("sesame_seed_hero.jpg")`,
            opacity: 0.9,
            filter: "brightness(50%)",
            //   backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080"><rect width="1920" height="1080" fill="%23667eea"/><circle cx="960" cy="540" r="300" fill="%23764ba2" opacity="0.8"/><circle cx="600" cy="300" r="200" fill="%23f093fb" opacity="0.6"/><circle cx="1300" cy="700" r="250" fill="%234facfe" opacity="0.7"/></svg>')`,
          }}
        />

        <div className="absolute top-[10%] sm:top-[20%] lg:top-[35%] ">
          <div className="relative z-10  px-4 py-12 sm:px-6 lg:px-8 max-w-7xl mx-auto">
            {/* Hero Logo - Mobile only */}
            <div className="flex items-center justify-center">
              <img
                src={RawSeedLogo}
                alt="RawSeed Logo"
                className="block md:hidden lg:hidden mx-8 mb-8 h-[3rem] lg:h-[5rem] aspect-auto"
              />
            </div>

            {/* Hero Heading */}
            {/* <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight"> */}
            <h1
              className="text-balance 
              text-4xl sm:text-5xl md:text-6xl lg:text-7xl
              text-center lg:text-left
              font-bold text-white mb-5"
            >
              {t("hero.sesame_oil.title")}
            </h1>

            <h2
              className="text-balance 
              text-2xl sm:text-3xl md:text-4xl lg:text-5xl
              text-center lg:text-left
              font-bold text-white mb-5"
            >
              {t("hero.sesame_oil.subtitle")}
            </h2>

            {/* Hero Description */}
            <p
              className="text-pretty text-white 
              text-2xl
              text-center text-justify lg:text-left 
              mb-6"
            >
              {t("hero.sesame_oil.description")}
            </p>

            {/* Call Out Button */}
            {/* <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <button className="group bg-gradient-to-tr from-amber-300 to-yellow-700 text-white px-10 py-5 rounded-full hover:from-amber-700 hover:to-yellow-300 transition-all duration-200 transform hover:scale-105 flex items-center text-xl font-semibold shadow-2xl">
                {t("hero.sesame_oil.learn")}
              </button>
            </div> */}

            {/* <div className="flex justify-center mt-30">
              <Callout />
            </div> */}
          </div>
        </div>
      </section>

      <section
        className="rounded bg-white mt-12 sm:py-12 
        mx-4 sm:mx-4 md:mx-4 lg:mx-24 xl:mx-48 2xl:128"
      >
        <div
          className="mx-auto grid grid-cols-1 lg:grid-cols-2
        items-center justify-items-center gap-8 
        px-8 sm:px-16 md:px-4"
        >
          <img src={Ayurveda} alt="Ayurveda" className="lg:w-xl aspect-auto" />
          <div
            className="lg:max-w-md text-neutral-600
            space-y-1 lg:space-y-4"
          >
            <h2 className="text-balance text-[#a18458] text-5xl text-shadow-lg font-bold tracking-tight md:text-5xl">
              {t("history.title")}
            </h2>
            <p className="text-pretty text-justify text-2xl">
              {t("history.p1")}
            </p>
            <p className="text-pretty text-justify text-2xl">
              {t("history.p2")}
            </p>
            <p className="text-pretty text-justify text-2xl">
              {t("history.p3")}
            </p>
          </div>
        </div>
      </section>

      <section
        className="rounded bg-[#181818] py-12 sm:py-24 mt-12
        "
      >
        <Reasons />
      </section>

      <section
        className="rounded py-8 mt-12 sm:py-12
        mx-4 sm:mx-4 md:mx-4 lg:mx-24 xl:mx-48 2xl:mx-64"
      >
        <Discovery />
      </section>

      <section className="flex-grow overflow-x-auto w-full ">
        <SesamePageCallout />
      </section>

      {/* Contact Us */}
      <section
        className="rounded py-8 sm:py-12 mt-12
        mx-4 sm:mx-4 lg:mx-12 xl:mx-24 2xl:mx-64"
      >
        <div
          className="mx-auto grid grid-cols-1 lg:grid-cols-2
          items-center justify-items-center px-2 sm:px-4 lg:px-8
          "
        >
          <Explore />
          <EmailForm />
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#181818] border-t border-gray-800 py-16">
        <Footer />
      </footer>
    </div>
  );
};

export default SesameOil;
