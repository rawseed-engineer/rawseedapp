import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComments, faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from "react-i18next";

const ContactUs: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div className="mx-auto grid grid-cols-1 items-center justify-items-center gap-8 px-8 sm:px-16 md:grid-cols-2">
      <div className="max-w-md space-y-4">
        <h1 className="text-balance text-5xl text-[#a18458] font-bold tracking-tight md:text-5xl">
          {t("journey.title")}
        </h1>
        <p className="text-pretty text-neutral-600 text-2xl">
          {t("journey.p1")}
        </p>
        <p className="text-pretty text-neutral-600 text-2xl">
          {t("journey.p2")}
        </p>
        <p className="text-pretty text-neutral-600 text-2xl">
          {t("journey.p3")}
        </p>
      </div>

      <div className="bg-white w-md p-10 mt-16 mb-16 relative overflow-hidden rounded-lg shadow-lg duration-300 ease-in-out hover:-translate-y-4 hover:shadow-[#a18458]">
        <div className=" mb-8 pb-5 relative">
          <div className="mb-2 flex items-center">
            <FontAwesomeIcon
              icon={faComments}
              className="text-[#a18458] inline-block mr-4"
              style={{ height: "36px" }}
            />
            <span className="text-center text-balance text-[#a18458] text-5xl">
              <h2>Get in touch</h2>
            </span>
          </div>

          <form className="">
            <div className="flex p-4 inline-block">
              <input
                className="inline-block w-64 p-2 border-2 border-neutral-200 rounded-lg shadow-lg focus:border-[#a18458] focus:outline-none focus:ring-0"
                type="text"
                name="First name"
                placeholder="Your first name"
              ></input>
            </div>
            <div className="flex p-4 inline-block">
              <input
                className="inline-block w-64 p-2 border-2 border-neutral-200 rounded-lg shadow-lg focus:border-[#a18458] focus:outline-none focus:ring-0"
                type="text"
                name="Last name"
                placeholder="Last name"
              ></input>
            </div>
            <div className="flex p-4 inline-block">
              <input
                className="inline-block w-64 p-2 border-2 border-neutral-200 rounded-lg shadow-lg focus:border-[#a18458] focus:outline-none focus:ring-0"
                type="text"
                name="email"
                placeholder="Email"
              ></input>
            </div>

            <div className="flex p-4 inline-block">
              {/* <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"></label> */}
              <textarea
                id="message"
                rows={4}
                className="block p-2 w-80 text-gray-900 rounded-lg border-2 border-neutral-200 shadow-lg
              focus:outline-none 
              focus:ring-0
              focus:border-[#a18458] 
              dark:bg-gray-700 
              dark:border-gray-600 
              dark:placeholder-gray-400 
              dark:text-white 
              dark:focus:ring-blue-500 
              dark:focus:border-blue-500"
                placeholder="Tell us your needs"
              ></textarea>
            </div>

            {/* <div className="w-96">
              <div className="relative w-full min-w-[200px]">
                <textarea
                  className="peer h-full min-h-[100px] w-full resize-none rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:outline-0 disabled:resize-none disabled:border-0 disabled:bg-blue-gray-50"
                  placeholder=" "></textarea>
                <label
                  className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-gray-900 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-gray-900 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                  Message
                </label>
              </div>
            </div> */}

            <div className="p-4">
              <button
                type="submit"
                className="bg-[#a18458] hover:bg-[#cfb997] text-white font-bold py-2 px-4 mr-2 rounded"
              >
                Send Message
                {/* <i className="fas fa-paper-plane ms-1"></i> */}
                <FontAwesomeIcon
                  icon={faPaperPlane}
                  className="text-white inline-block ml-4 mr-4"
                  style={{ height: "36px" }}
                />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
