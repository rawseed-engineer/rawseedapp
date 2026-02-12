import "../i18n";
import NavMenu from "../ui/nav/nav-menu";
import Story from "../ui/home/story";
import WhatWeDo from "../ui/home/what-we-do";
import Products from "../ui/home/products";
import WhyRawSeed from "../ui/home/why-raw-seed";
import Values from "../ui/home/values";
import Vision from "../ui/home/vision";
import JoinOurJourney from "../ui/home/joinOurJourney";
import EmailForm from "../ui/email-form";
import Footer from "../ui/nav/footer";
import Hero from "../ui/home/hero";
import ColdPressed from "../ui/home/coldPressed";
import WhatWeDoScrollHighlight from "../ui/home/whatWeDoScrollHighlight";
import TestimonialSlider from "../ui/TestimonialSlider";

// import { Callout } from "../ui/callout";
// import ScrollFadeText from "../ui/ScrollFadeText";

const Home = () => {
  return (
    <>
      <div className="min-h-screen antialiased">
        <NavMenu />

        <section
          id="home"
          className="relative min-h-screen flex items-center justify-center"
        >
          <Hero />
        </section>

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
        {/* <section className="rounded py-8 mt-12 sm:py-12 mx-64 my-32 text-pretty text-white text-center text-4xl">
          <div className="relative flex justify-center items-center gap-20">
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
          </div>

          <div className="flex justify-center">
            <svg className="animate-spin"></svg>
          </div>

          <div className="flex justify-center">
            <span className="relative flex h-16 w-16">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex h-16 w-16 rounded-full bg-blue-500"></span>
            </span>
          </div>

          <div className="flex justify-center">
            <div className="h-16 w-16 animate-[BorderAnimation_4s_linear_infinite] rounded-full bg-blue-500"></div>
          </div>
        </section> */}

        <section id="id1" className="py-12">
          <WhatWeDoScrollHighlight />
        </section>

        <section
          className="flex-grow overflow-x-auto w-full 
          "
        >
          <ColdPressed />
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

        <section className="rounded py-8 mt-12 sm:py-12 mx-1 lg:mx-84">
          <div>
            <TestimonialSlider />
          </div>
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
