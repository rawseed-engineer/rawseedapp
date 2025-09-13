import React from "react";
import { Link } from "react-router-dom";

export const Callout: React.FC = ({}) => {
  return (
    <div className="relative flex h-24 w-24">
      <Link to="/rawseedapp/contact">
        <div className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gradient-to-tr from-amber-300 to-yellow-700 opacity-75"></div>
        {/* <div
          className="absolute
        -top-[25%] w-full h-full
        rounded-[100%_5%_100%_100%]
        rotate-[-45deg] 
        bg-gradient-to-tr from-amber-300 to-yellow-700
        hover:from-amber-700 hover:to-yellow-300 transition-all duration-200 transform 
        hover:scale-105
        hover:opacity-100 duration-300
        text-white py-5 text-xl text-center font-semibold"
        > */}
        <div
          className="absolute
        -top-[25%] w-full h-full
        rounded-[100%_5%_100%_100%]
        rotate-[-45deg]
        bg-gradient-to-tr from-[#996515] to-[#a67c00]
        hover:from-amber-700 hover:to-yellow-300 transition-all duration-200 transform 
        hover:scale-105
        hover:opacity-100 duration-300
        text-white py-5 text-xl text-center font-semibold"
        >
          <div className="absolute text-center text-pretty text-xl text-white text-shadow-lg opacity-0 hover:opacity-100 duration-300 rotate-[45deg]">
            Contact Us
          </div>
        </div>
      </Link>
    </div>
  );
};
