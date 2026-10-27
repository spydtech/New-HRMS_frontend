import React from "react";
import ShiftTimings from "./ShiftTimings";
import AnomalySettings from "./AnomalySettings";

const Rules = () => {
  return (
    <div className="p-4 mt-4 min-h-screen">
      <div className="  flex flex-col md:flex-row justify-between">
        <div>
          <span className=" text-[#2A546D] text-sm lg:text-lg font-medium">
            Employee / Rules
          </span>
        </div>
      </div>

      <div className="bg-[#2A546D] p-2 md:w-60 my-5 md:p-4 rounded-lg text-white">
        <p>General Shift</p>
        <p>Effective Date: 21 Jun, 2024.</p>
      </div>

      <div className=" shadow-md bg-white pb-5 ">
        <div className="md:pl-8 pl-2 p-3">
          <h1 className="text-[#2A546D] font-semibold underline underline-offset-2">
            Overview
          </h1>
          <div className="my-2">
            <h1 className="text-[#2A546D] font-semibold">Rule Name</h1>
            <p>General Shift</p>
          </div>
          <div>
            <h1 className="text-[#2A546D] font-semibold">Description</h1>
            <p>
              This is a default description for the Attendence. You can
              customise this.
            </p>
          </div>
        </div>
        <ShiftTimings />
        <AnomalySettings />
      </div>
    </div>
  );
};

export default Rules;
