import React from "react";
import NavMenu from "../ui/nav/nav-menu";
import Hero from "../ui/flaxseed-oil/hero";
import Story from "../ui/home/story";
import ScrollHighlightSection from "../ui/ScrollHighlightSection";

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
        <section>
          <ScrollHighlightSection />
        </section>

        <section
          className="rounded py-8 mt-12 sm:py-12 
          mx-4 sm:mx-4 md:mx-4 lg:mx-24 xl:mx-48 2xl:128"
        >
          <Story />
        </section>
      </div>
    </>
  );
};

export default FlaxseedOil;
