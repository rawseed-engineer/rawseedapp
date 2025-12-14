import NavMenu from "../ui/nav/nav-menu";
// import Ayurveda from "./../assets/ayurveda.jpeg";
import Reasons from "../ui/sesame-oil/reasons";
import Discovery from "../ui/sesame-oil/discovery";
import EmailForm from "../ui/email-form";
import Explore from "../ui/sesame-oil/explore";
import Footer from "../ui/nav/footer";
// import { Callout } from "../ui/callout";
import SesamePageCallout from "../ui/sesame-oil/callout";
import Hero from "../ui/sesame-oil/hero";
import FullScreenVideo from "../ui/FullScreenVideo";

const SesameOil = () => {
  return (
    <div className="min-h-screen antialiased">
      <NavMenu />

      {/* Hero Section with Full Page Image */}
      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center"
      >
        <Hero />
      </section>

      {/* <section
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
      </section> */}

      <section
      // className="rounded bg-white mt-12 sm:py-12
      // 2xl:128"
      >
        <FullScreenVideo />
        {/* <div
          className="relative flex items-center 
        justify-center h-screen overflow-hidden"
        >
          <div className="aspect-w-16 aspect-h-9">
            <iframe
              src="https://www.youtube.com/embed/abllhb_L4Ms?si=P_brCTkSKGVB1Qkz"
              frameBorder="0"
              allowFullScreen
              className="absolute w-full h-full top-0 left-0"
            ></iframe>
          </div>
        </div> */}
      </section>
      <section
        className="rounded bg-[#181818] py-12 sm:py-24
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
