import React from "react";
import Brand from "../assets/icon-brand-recognition.svg";
import DetailedRecord from "../assets/icon-detailed-records.svg";
import FullyCustomized from "../assets/icon-fully-customizable.svg";
const Statistics = () => {
  return (
    <div className="w-full min-h-screen">
      <div className="max-w-[1200px] px-4 mx-auto h-screen">
        <div className="flex items-center justify-center flex-col">
          <h3 className="text-[#1a0f26] text-3xl md:text-4xl font-bold">
            Advanced Statistics
          </h3>
          <p className="text-gray-500 text-center">
            Track how your links are performing across the web with our advanced
            statistics dashboard.
          </p>
        </div>

        {/* grid items */}
        <div className="flex justify-center items-center py-24 ">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="px-8 py-5 wrapper">
              <div className="bg-[#1a0f26] w-14 h-14 p-3 rounded-full mb-4 mt-[-40px]">
                <img
                  src={Brand}
                  alt="brand"
                  className="w-full object-contain"
                />
              </div>

              <p className="text-[#1a0f26] font-bold mb-3">Brand Recognition</p>
              <p className="text-gray-500">
                Boost your brand recognition with each click. Generic links
                don't mean a thing. Branded links help instill confidence in
                your content.
              </p>
            </div>
            <div className="px-8 py-5 wrapper">
              <div className="bg-[#1a0f26] w-14 h-14 p-3 rounded-full mb-4 mt-[-40px]">
                <img
                  src={DetailedRecord}
                  alt="brand"
                  className="w-full object-contain"
                />
              </div>

              <p className="text-[#1a0f26] font-bold mb-3">Brand Recognition</p>
              <p className="text-gray-500">
                Gain insights into who is clicking your links. Knowing when and
                where people engage with your content helps inform better
                decisions.
              </p>
            </div>
            <div className="px-8 py-5 wrapper">
              <div className="bg-[#1a0f26] w-14 h-14 p-3 rounded-full mb-4 mt-[-40px]">
                <img
                  src={FullyCustomized}
                  alt="brand"
                  className="w-full object-contain"
                />
              </div>

              <p className="text-[#1a0f26] font-bold mb-3">Brand Recognition</p>
              <p className="text-gray-500">
                Improve brand awareness and content discoverability through
                customizable links, supercharging audience engagement.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
