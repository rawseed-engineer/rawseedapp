import React from "react";
import NavMenu from "../ui/nav/nav-menu";
import Hero from "../ui/flaxseed-oil/hero";
import Story from "../ui/flaxseed-oil/story";
import ScrollHighlightSection from "../ui/ScrollHighlightSection";
import Footer from "../ui/nav/footer";
import JoinOurJourney from "../ui/home/joinOurJourney";
import EmailForm from "../ui/email-form";

import UseCases from "../ui/flaxseed-oil/useCases";
import Smoothie from "../ui/flaxseed-oil/smoothie";

const FlaxseedOil: React.FC = () => {
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

        {/* <section
          className="rounded py-8 mt-12 sm:py-12 
          mx-4 sm:mx-4 md:mx-4 lg:mx-24 
          xl:mx-48 2xl:128"
        > */}
        <section className="py-12">
          <ScrollHighlightSection />
        </section>

        <section className="flex-grow overflow-x-auto w-full ">
          <UseCases />
        </section>

        {/* White Background Section - Features */}
        <section
          className="rounded py-12 sm:py-24 mt-12 
          mx-4 sm:mx-4 lg:mx-24 xl:mx-48 2xl:128"
        >
          <Smoothie />
        </section>

        <section
          className="rounded py-12 sm:py-12 mt-36 
          mx-4 sm:mx-4 lg:mx-24 xl:mx-48 2xl:128"
        >
          <div
            className="mx-auto grid grid-cols-1 lg:grid-cols-2 
            items-center justify-items-center gap-8 px-1 sm:px-16"
          >
            <JoinOurJourney />
            <EmailForm />
          </div>
        </section>

        {/* <section
          className="rounded py-8 mt-12 sm:py-12 
          mx-4 sm:mx-4 md:mx-4 lg:mx-24 xl:mx-48 2xl:128"
        >
          <Story />
        </section> */}

        <footer className="bg-[#181818] border-t border-gray-800 py-16">
          <Footer />
        </footer>
      </div>
    </>
  );
};

export default FlaxseedOil;
