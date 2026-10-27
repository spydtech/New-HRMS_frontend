import React, { useState } from "react";
import { LiaQuestionCircle } from "react-icons/lia";

const TdsConfig = () => {
  const [selectedOption, setSelectedOption] = useState("monthly");
  const [preference, setPreference] = useState("1")
  return (
    <div className="my-8">
      <div className="flex ml-[250px] gap-2">
        <div className="text-[#E65F2B] font-semibold flex gap-1">
          <h1 className="mt-2">TDS Calculation</h1>
          <button className="-mt-16">
            <LiaQuestionCircle className="text-lg" />
          </button>
        </div>
        <div className="mt-2">
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
            <a href="#" className="text-[#00C8D4] hover:underline">Click Here</a> to Know More
          </p>
        </div>
      </div>

      <div className="flex ml-[180px] gap-2 my-5">
        <div className="text-[#E65F2B] font-semibold flex gap-1">
          <h1 className="">Tax Deduction Preference</h1>
          <button className="-mt-24">
            <LiaQuestionCircle className="text-lg" />
          </button>
        </div>
        <div className="">
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
