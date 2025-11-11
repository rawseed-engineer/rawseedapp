import { faComments, faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";

interface FormData {
  subject: string;
  firstName: string;
  lastName: string;
  from: string;
  countryCode: string;
  mobileNumber: string;
  message: string;
}

const EmailForm: React.FC = () => {
  const { t } = useTranslation();

  const [formData, setFormData] = useState<FormData>({
    subject: "RawSeed Customer Enquiry",
    firstName: "",
    lastName: "",
    from: "",
    countryCode: "",
    mobileNumber: "",
    message: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(
        "https://email-service-wine.vercel.app/contact-us",
        // "http://127.0.0.1:3000/contact-us",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Failed to send email");
      }

      console.log("Form submitted successfully:", response);
      setSuccess(true);
      // Reset form
      setFormData({
        subject: "",
        firstName: "",
        lastName: "",
        from: "",
        countryCode: "",
        mobileNumber: "",
        message: "",
      });
    } catch (err: any) {
      console.error("Error submitting form:", err);
      setError(err.message || "Something went wrong. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div
      className="bg-white w-7/8 lg:w-md p-1 lg:p-10 mt-16 mb-16 relative overflow-hidden rounded-lg shadow-lg 
        duration-300 ease-in-out hover:-translate-y-4 hover:shadow-[#a18458]"
    >
      <div className=" mb-8 pb-5 relative">
        <div className="mb-2 flex items-center">
          <FontAwesomeIcon
            icon={faComments}
            className="text-[#a18458] inline-block mr-4"
            style={{ height: "36px" }}
          />
          <span className="text-center text-balance text-[#a18458] text-shadow-lg text-5xl">
            <h2>{t("contact.title")}</h2>
          </span>
        </div>

        <form onSubmit={handleSubmit} className="">
          <div className="flex p-4 inline-block">
            <input
              className="inline-block w-64 p-2 border-2 border-neutral-200 rounded-lg shadow-lg focus:border-[#a18458] focus:outline-none focus:ring-0"
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              placeholder="Your first name"
              onChange={handleChange}
              required
            ></input>
          </div>
          <div className="flex p-4 inline-block">
            <input
              className="inline-block w-64 p-2 border-2 border-neutral-200 rounded-lg shadow-lg focus:border-[#a18458] focus:outline-none focus:ring-0"
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              placeholder="Last name"
              onChange={handleChange}
              required
            ></input>
          </div>
          <div className="flex p-4 inline-block">
            <input
              className="inline-block w-64 p-2 border-2 border-neutral-200 rounded-lg shadow-lg focus:border-[#a18458] focus:outline-none focus:ring-0"
              type="text"
              id="from"
              name="from"
              value={formData.from}
              placeholder="Email"
              onChange={handleChange}
              required
            ></input>
          </div>

          <div className="flex p-4 ">
            <span className="">
              <select
                id="countryCode"
                name="countryCode"
                value={formData.countryCode}
                onChange={handleChange}
                className="h-11 inline-block w-25 p-2 border-2 border-neutral-200 rounded-lg shadow-lg focus:border-[#a18458] focus:outline-none focus:ring-0 text-neutral-500"
              >
                <option value="">Country</option>
                <option value="+376">+376 (Andorra)</option>
                <option value="+355">+355 (Albania)</option>
                <option value="+43">+43 (Austria)</option>
                <option value="+375">+375 (Belarus)</option>
                <option value="+32">+32 (Belgium)</option>
                <option value="+387">+387 (Bosnia and Herzegovina)</option>
                <option value="+359">+359 (Bulgaria)</option>
                <option value="+385">+385 (Croatia)</option>
                <option value="+420">+420 (Czech Republic)</option>
                <option value="+45">+45 (Denmark)</option>
                <option value="+372">+372 (Estonia)</option>
                <option value="+358">+358 (Finland)</option>
                <option value="+33">+33 (France)</option>
                <option value="+49">+49 (Germany)</option>
                <option value="+350">+350 (Gibraltar)</option>
                <option value="+30">+30 (Greece)</option>
                <option value="+299">+299 (Greenland)</option>
                <option value="+36">+36 (Hungary)</option>
                <option value="+354">+354 (Iceland)</option>
                <option value="+353">+353 (Ireland)</option>
                <option value="+39">+39 (Italy)</option>
                <option value="+371">+371 (Latvia)</option>
                <option value="+423">+423 (Liechtenstein)</option>
                <option value="+370">+370 (Lithuania)</option>
                <option value="+352">+352 (Luxembourg)</option>
                <option value="+389">+389 (North Macedonia)</option>
                <option value="+356">+356 (Malta)</option>
                <option value="+373">+373 (Moldova)</option>
                <option value="+377">+377 (Monaco)</option>
                <option value="+382">+382 (Montenegro)</option>
                <option value="+31">+31 (Netherlands)</option>
                <option value="+47">+47 (Norway)</option>
                <option value="+48">+48 (Poland)</option>
                <option value="+351">+351 (Portugal)</option>
                <option value="+40">+40 (Romania)</option>
                <option value="+7">+7 (Russia)</option>
                <option value="+378">+378 (San Marino)</option>
                <option value="+381">+381 (Serbia)</option>
                <option value="+421">+421 (Slovakia)</option>
                <option value="+386">+386 (Slovenia)</option>
                <option value="+34">+34 (Spain)</option>
                <option value="+46">+46 (Sweden)</option>
                <option value="+41">+41 (Switzerland)</option>
                <option value="+380">+380 (Ukraine)</option>
                <option value="+44">+44 (United Kingdom)</option>
                <option value="+379">+379 (Vatican City)</option>
                {/* Add more as needed */}
              </select>
            </span>

            <span className="pl-4">
              <input
                className="inline-block w-35 p-2 border-2 border-neutral-200 rounded-lg shadow-lg focus:border-[#a18458] focus:outline-none focus:ring-0"
                type="tel"
                id="mobileNumber"
                name="mobileNumber"
                value={formData.mobileNumber}
                onChange={handleChange}
                placeholder="Mobile number"
              />
            </span>
          </div>

          <div className="flex p-4 inline-block">
            {/* <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"></label> */}
            <textarea
              id="message"
              name="message"
              value={formData.message}
              rows={4}
              className="block p-2 w-64 sm:w-80 text-gray-900 rounded-lg border-2 border-neutral-200 shadow-lg
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
              onChange={handleChange}
              required
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

          {error && (
            <div className="p-3 bg-red-50 border border-red-200 text-red-700 rounded-md text-sm">
              {error}
            </div>
          )}

          {success && (
            <div className="p-3 bg-green-50 border border-green-200 text-green-700 rounded-md text-sm">
              Email sent successfully!
            </div>
          )}

          <div className="p-4">
            <button
              type="submit"
              disabled={isLoading}
              className={`flex justify-center items-center
              flex justify-center items-center bg-[#a18458] duration-900
              text-white font-bold py-2 px-4 mr-2 rounded
              hover:bg-gradient-to-r from-amber-300 to-yellow-700 
                ${
                  isLoading
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                }
              `}
              // className="px-6 py-3 bg-blue-500 text-white rounded-lg duration-1000 hover:bg-blue-900"
            >
              {/* hover:bg-from-amber-700 hover:bg-to-yellow-700 transition-all duration-200  */}
              <span className="align-middle mr-2">{t("contact.action")}</span>
              <span>
                <FontAwesomeIcon
                  icon={faPaperPlane}
                  className="text-white inline-block"
                  style={{ height: "36px" }}
                />
              </span>
            </button>
            {/* {isLoading ? "Sending..." : "Send Email"} */}
          </div>
        </form>
      </div>
    </div>
  );
};
export default EmailForm;
