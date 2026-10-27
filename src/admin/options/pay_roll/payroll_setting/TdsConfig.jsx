import React, { useState } from "react";
import { LiaQuestionCircle } from "react-icons/lia";

const TdsConfig = () => {
  const [selectedOption, setSelectedOption] = useState("monthly");
  const [preference, setPreference] = useState("1")
  return (
    <div className="my-8 max-lg:ml-5">
      <div className="flex flex-col lg:flex-row lg:ml-[250px] gap-2">
        <div className="text-[#E65F2B] font-semibold flex gap-x-1">
          <h1 className="mt-2">TDS Calculation</h1>
          <button className="lg:-mt-16">
            <LiaQuestionCircle className="text-lg" />
          </button>
        </div>
        <div className="lg:mt-2 max-lg:text-sm">
          <label className="text-[#E65F2B] block font-semibold">
            <input
              type="radio"
              name="tds"
              className="mr-1"
              value="monthly"
              checked={selectedOption === "monthly"}
              onChange={() => setSelectedOption("monthly")}
            />
            Monthly TDS
          </label>
          <label className="text-[#E65F2B] block font-semibold">
            <input
              type="radio"
              name="tds"
              className="mr-1"
              value="yearly"
              checked={selectedOption === "yearly"}
              onChange={() => setSelectedOption("yearly")}
            />
            Yearly TDS
          </label>
          <label className="text-[#E65F2B] block font-semibold">
            <input
              type="radio"
              name="tds"
              className="mr-1"
              value="estimated"
              checked={selectedOption === "estimated"}
              onChange={() => setSelectedOption("estimated")}
            />
            Estimated TDS
          </label>
          <p className="text-md text-[#E65F2B] font-semibold">
            <a href="#" className="text-[#e69603] hover:underline">Click Here</a> to Know More
          </p>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row lg:ml-[180px] gap-2 my-5">
        <div className="text-[#E65F2B] font-semibold flex gap-1 text-nowrap">
          <h1 className="">Tax Deduction Preference</h1>
          <button className="lg:-mt-40 xl:-mt-24">
            <LiaQuestionCircle className="text-lg" />
          </button>
        </div>
        <div className="max-lg:text-sm">
          <label className="text-[#E65F2B] block font-semibold">
            <input
              type="radio"
              name="preference"
              className="mr-1"
              value="1"
              checked={preference === "1"}
              onChange={() => setPreference("1")}
            />
            Deduct Tax in subsequent payrolls of the financial year
            <p className="ml-5 font-normal">
              The income tax amount will bw divided equally and deducted <br />
              every month across the financial year
            </p>
          </label>
          <label className="text-[#E65F2B] block font-semibold">
            <input
              type="radio"
              name="prefernce"
              className="mr-1"
              value="2"
              checked={preference === "2"}
              onChange={() => setPreference("2")}
            />
            Deduct tax in the same payroll
            <p className="ml-5 font-normal">
              The entire income tax amount will be deducted when it is paid to
              the employee
            </p>
          </label>
        </div>
      </div>
    </div>
  );
};

export default TdsConfig;
