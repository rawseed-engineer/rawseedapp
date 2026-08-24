import React from "react";
import NavMenu from "../ui/nav/nav-menu";
import Footer from "../ui/nav/footer";
import Hero from "../ui/contact/hero";
import EmailForm from "../ui/email-form";
import JoinOurJourney from "../ui/home/joinOurJourney";

const Contact: React.FC = () => {
  return (
    <>
      <div className="min-h-screen antialiased">
        <NavMenu />

        <Hero />

        {/* Contact Us */}
        <section className="rounded py-8 mt-12 sm:py-12 mx-1 lg:mx-84">
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

export default Contact;
