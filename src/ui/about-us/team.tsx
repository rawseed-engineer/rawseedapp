import React from "react";
// import { useTranslation } from "react-i18next";

const Team: React.FC = () => {
  // const { t } = useTranslation();
  return (
    <div
      className="mx-auto grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2lg:grid-cols-4 
      items-center justify-items-center gap-8 pt-8 pb-20 sm:px-16 md:px-16 lg:px-48 mt-10"
    >
      <div className="relative h-96 w-64 overflow-hidden">
        <div
          className="hover:scale-120 hover:-translate-y-8 brightness-100 hover:brightness-80
          active:scale-120 active:-translate-y-8 brightness-100 active:brightness-80
          transition duration-700 ease-in-out"
        >
          <div
            className="z-1 absolute h-96 w-64 bg-cover 
            bg-[url(/rawseedapp/avatar.jpeg)]
            "
          ></div>

          <div
            className="z-2 absolute h-96 w-64 text-white text-center text-pretty text-shadow-lg/30 p-4
            pt-80 hover:pt-20 active:pt-20
            opacity-80 hover:opacity-100 active:opacity-100
            
            duration-300 ease-in-out "
          >
            <p className="text-4xl font-bold">Tom Cruise</p>
            <p className="text-xl">CEO & Founder</p>
            <p className="text-md">
              Tom is a serial entrepreneur in the food industry for more than 30
              years.
            </p>
          </div>
        </div>
      </div>

      <div className="relative h-96 w-64 overflow-hidden">
        <div
          className="hover:scale-120 hover:-translate-y-8 brightness-100 hover:brightness-80
          active:scale-120 active:-translate-y-8 brightness-100 active:brightness-80
          transition duration-700 ease-in-out"
        >
          <div
            className="z-1 absolute h-96 w-64 bg-cover 
            bg-[url(/rawseedapp/avatar.jpeg)]
            "
          ></div>

          <div
            className="z-2 absolute h-96 w-64 text-white text-center text-pretty text-shadow-lg/30 p-4
            pt-80 hover:pt-20
            opacity-80 hover:opacity-100
            
            duration-300 ease-in-out "
          >
            <p className="text-4xl font-bold">Tom Cruise</p>
            <p className="text-xl">CEO & Founder</p>
            <p className="text-md">
              Tom is a serial entrepreneur in the food industry for more than 30
              years.
            </p>
          </div>
        </div>
      </div>

      <div className="relative h-96 w-64 overflow-hidden">
        <div
          className="hover:scale-120 hover:-translate-y-8 brightness-100 hover:brightness-80
          active:scale-120 active:-translate-y-8 brightness-100 active:brightness-80
          transition duration-700 ease-in-out"
        >
          <div
            className="z-1 absolute h-96 w-64 bg-cover 
            bg-[url(/rawseedapp/avatar.jpeg)]
            "
          ></div>

          <div
            className="z-2 absolute h-96 w-64 text-white text-center text-pretty text-shadow-lg/30 p-4
            pt-80 hover:pt-20
            opacity-80 hover:opacity-100
            
            duration-300 ease-in-out "
          >
            <p className="text-4xl font-bold">Tom Cruise</p>
            <p className="text-xl">CEO & Founder</p>
            <p className="text-md">
              Tom is a serial entrepreneur in the food industry for more than 30
              years.
            </p>
          </div>
        </div>
      </div>

      <div className="relative h-96 w-64 overflow-hidden">
        <div
          className="hover:scale-120 hover:-translate-y-8 brightness-100 hover:brightness-80
          active:scale-120 active:-translate-y-8 brightness-100 active:brightness-80
          transition duration-700 ease-in-out"
        >
          <div
            className="z-1 absolute h-96 w-64 bg-cover 
            bg-[url(/rawseedapp/avatar.jpeg)]
            "
          ></div>

          <div
            className="z-2 absolute h-96 w-64 text-white text-center text-pretty text-shadow-lg/30 p-4
            pt-80 hover:pt-20
            opacity-80 hover:opacity-100
            
            duration-300 ease-in-out "
          >
            <p className="text-4xl font-bold">Tom Cruise</p>
            <p className="text-xl">CEO & Founder</p>
            <p className="text-md">
              Tom is a serial entrepreneur in the food industry for more than 30
              years.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
