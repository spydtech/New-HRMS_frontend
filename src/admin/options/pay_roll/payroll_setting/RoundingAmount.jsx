import React, { useState } from "react";
import { RiChat3Line } from "react-icons/ri";

const RoundingAmount = () => {
  const [selectedOption, setSelectedOption] = useState("no-round");

  return (
    <div className="md:my-10 my-3 ">
      <div className="flex flex-col max-md:items-center md:flex-row md:justify-center md:gap-x-2">
        <h2 className="md:text-lg font-bold text-[#E65F2B]">
          Rounding Amount Type
        </h2>
        <div className="mt-1">
          <label className="block text-[#E65F2B] font-semibold">
            <input
              type="radio"
              name="rounding"
              value="no-round"
              checked={selectedOption === "no-round"}
              onChange={() => setSelectedOption("no-round")}
              className="mr-2"
            />
            No Round
          </label>
          <label className="block text-[#E65F2B] mt-2 font-semibold">
            <input
              type="radio"
              name="rounding"
              value="actual-round"
              checked={selectedOption === "actual-round"}
              onChange={() => setSelectedOption("actual-round")}
              className="mr-2"
            />
            Actual Round
          </label>
          <label className="block text-[#E65F2B] mt-2 font-semibold">
            <input
              type="radio"
              name="rounding"
              value="round-up"
              checked={selectedOption === "round-up"}
              onChange={() => setSelectedOption("round-up")}
              className="mr-2"
            />
            Round Up
          </label>
          <label className="block text-[#E65F2B] mt-2 font-semibold">
            <input
              type="radio"
              name="rounding"
              value="round-down"
              checked={selectedOption === "round-down"}
              onChange={() => setSelectedOption("round-down")}
              className="mr-2"
            />
            Round Down
          </label>
        </div>
      </div>
      <button className="mt-20 md:mt-[120px] flex items-center text-[#E65F2B] md:ml-16">
        <RiChat3Line className="text-xl md:text-3xl " />
        <h1 className="font-semibold">Activity</h1>
      </button>
    </div>
  );
};

export default RoundingAmount;
