import React from "react";

export const Callout: React.FC = ({}) => {
  return (
    <div className="relative flex h-24 w-24">
      <div className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gradient-to-tr from-amber-300 to-yellow-700 opacity-75"></div>
      <div
        className="absolute
        -top-[25%] w-full h-full
        rounded-[100%_5%_100%_100%]
        rotate-[-45deg] 
        bg-gradient-to-tr from-amber-300 to-yellow-700
        hover:from-amber-700 hover:to-yellow-300 transition-all duration-200 transform hover:scale-105
        text-white px-5 py-5 text-xl text-center font-semibold"
      ></div>
      <div className="absolute text-center text-pretty text-xl text-white opacity-0 hover:opacity-100 duration-300">
        Contact Us
      </div>
    </div>
  );
};
