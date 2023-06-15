import React from "react";
import ImageMain from "../assets/illustration-working.svg";
const Hero = () => {
  return (
    <div className="w-full min-h-screen">
      <div className="max-w-[1200px] px-8 mx-auto flex flex-col gap-4 justify-center h-screen">
        {/* divide 2 grids */}
        <div className="grid md:grid-cols-2">
          {/* For left side */}
          <div className="items-center justify-center">
            <p className=" text-5xl lg:text-7xl font-bold text-[#1a0f26] mb-6">
              More than just shorter links
            </p>
            <p className="text-gray-500 mb-6">
              Build your brand's recognition and get detailed insights on how
              your links are performing.
            </p>
            <button className="bg-cyan-400 px-10 py-3 rounded-full font-bold text-white">
              Get Started
            </button>
          </div>

          {/* For right side */}
          <div>
            <img src={ImageMain} alt="Image" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
