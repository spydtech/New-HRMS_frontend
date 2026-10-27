import React, { useState } from "react";
import { LiaQuestionCircle } from "react-icons/lia";

const PayPeriod = () => {
  const [selectedOption, setSelectedOption] = useState("yes");
  const [selectHolidays, setSelectHolidays] = useState("yes");
  const [percentOfGross, setPercentOfGross] = useState("20");
  return (
    <div className="my-5 flex flex-col gap-5">
      <div className=" flex gap-10 ml-[250px] text-[#E65F2B] font-semibold">
        <h1>Frequency</h1>
        <span>Monthly</span>
      </div>

      <div className="flex gap-10 ml-[145px] ">
        <div className="text-[#E65F2B] font-semibold flex gap-1">
          <h1 className="">Pay Period Start Day</h1>
          <button className="-mt-5">
            <LiaQuestionCircle className="text-lg" />
          </button>
          *
        </div>
        <div>
          <select className="outline-none border border-[#E65F2B] bg-transparent px-4 py-[2px] rounded-lg text-sm text-gray-600">
            <option value="">Select the day</option>
            <option value="">1st of month</option>
          </select>
          <p className="text-gray-600 text-[9px] m-1 font-semibold">
            01 jul,2024 to 31 jul,2024
          </p>
        </div>
      </div>

      <div className=" flex gap-10 ml-[180px] text-[#E65F2B] font-semibold">
        <h1>Starting Month/Year</h1>
        <span>July 2024</span>
      </div>

      <div className="flex gap-10 ml-[260px] ">
        <div className="text-[#E65F2B] font-semibold flex gap-1">
          <h1 className="">Pay Days</h1>
        </div>
        <div>
          <select className="outline-none border border-[#E65F2B] bg-transparent px-4 py-[2px] rounded-lg text-sm text-gray-600">
            <option value="">Actual Days in Month</option>
            {/* <option value="">1st of month</option> */}
          </select>
          <p className="text-gray-600 text-[9px] m-1 font-semibold">
            Manage Work Schedule
          </p>
        </div>
      </div>

      <div className="flex gap-10 ml-[185px] ">
        <div className="text-[#E65F2B] font-semibold flex gap-1">
          <h1 className="">Include Weekly offs</h1>
        </div>
        <div>
          <label className="text-[#E65F2B] block font-semibold">
            <input
              type="radio"
              name="offs"
              className="mr-1"
              value="yes"
              checked={selectedOption === "yes"}
              onChange={() => setSelectedOption("yes")}
            />
            Yes
          </label>
          <label className="text-[#E65F2B] block font-semibold">
            <input
              type="radio"
              name="offs"
              className="mr-1"
              value="no"
              checked={selectedOption === "no"}
              onChange={() => setSelectedOption("no")}
            />
            No
          </label>
        </div>
      </div>

      <div className="flex gap-10 ml-[185px] ">
        <div className="text-[#E65F2B] font-semibold flex gap-1">
          <h1 className="">Include Weekly offs</h1>
        </div>
        <div>
          <label className="text-[#E65F2B] block font-semibold">
            <input
              type="radio"
              name="holidays"
              className="mr-1"
              value="yes"
              checked={selectHolidays === "yes"}
              onChange={() => setSelectHolidays("yes")}
            />
            Yes
          </label>
          <label className="text-[#E65F2B] block font-semibold">
            <input
              type="radio"
              name="holidays"
              className="mr-1"
              value="no"
              checked={selectHolidays === "no"}
              onChange={() => setSelectHolidays("no")}
            />
            No
          </label>
        </div>
      </div>

      <div className="flex gap-10 ml-[205px]">
        <h1 className=" text-[#E65F2B] font-semibold">Basic Percentage</h1>
        <div className="border flex border-[#E65F2B] p-1 rounded-lg">
          <input
            type="text"
            value={percentOfGross}
            onChange={(e) => setPercentOfGross(e.target.value)}
            className="border-r bg-transparent border-[#E65F2B] text-gray-600 px-2 outline-none"
          />
          <p className="px-2 text-gray-600">% of Gross</p>
        </div>
      </div>
    </div>
  );
};

export default PayPeriod;
