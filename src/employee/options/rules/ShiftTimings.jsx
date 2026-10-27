import React, { useState } from "react";

const ShiftTimings = () => {
  const [isSwitchAutoDeductionOn, setIsSwitchAutoDeductionOn] = useState(false);
  const [isSwitchTrackingOn, setIsSwitchTrackingOn] = useState(false);

  return (
    <div className="">
      <h1 className=" pl-3 md:pl-8 bg-#2A546D] py-2 text-white font-semibold">
        Shift Timings
      </h1>

      <div className="pl-3 md:pl-8 md:py-2 my-2">
        <h1 className="text-[#2A546D]  font-semibold">In Time</h1>
        <p>9:00 AM</p>
      </div>

      <hr className="bg-#2A546D] h-[2px]" />

      <div className="pl-3 md:pl-8 md:py-2 my-2">
        <h1 className="text-[#2A546D] font-semibold">Out Time</h1>
        <p>9:00 AM</p>
      </div>

      <hr className="bg-#2A546D] h-[2px]" />

      <div className="pl-3 md:pl-8 md:py-2 my-3">
        <div className="flex justify-between">
          <h1 className="text-#2A546D]">Enable Auto Deduction</h1>
          <div className="mr-2 md:mr-10">
            <div
              className={` h-6 w-[50px] md:w-24 rounded-full cursor-pointer p-1 flex items-center ${
                isSwitchAutoDeductionOn ? "bg-gray-500" : "bg-#2A546D]"
              } `}
              onClick={() =>
                setIsSwitchAutoDeductionOn(!isSwitchAutoDeductionOn)
              }
            >
              <div
                className={`w-4 h-4 rounded-full bg-white duration-300 ${
                  isSwitchAutoDeductionOn
                    ? "translate-x-[26px] md:translate-x-[72px]"
                    : "translate-x-0"
                }`}
              ></div>
              <p className="max-md:hidden ml-1 md:ml-4 text-white">
                {isSwitchAutoDeductionOn ? "Off" : "On"}
              </p>
            </div>
          </div>
        </div>

        <p className="text-#2A546D] my-4 md:my-2">Auto Deduction Date 31</p>

        <div className="flex justify-between">
          <h1 className="text-#2A546D]">Enable Anomaly Tracking</h1>
          <div className="mr-2 md:mr-10">
            <div
              className={`  h-6 w-[50px] md:w-24 rounded-full cursor-pointer p-1 flex items-center ${
                isSwitchTrackingOn ? "bg-gray-500" : "bg-#2A546D]"
              } `}
              onClick={() => setIsSwitchTrackingOn(!isSwitchTrackingOn)}
            >
              <div
                className={`w-4 h-4 rounded-full bg-white duration-300 ${
                  isSwitchTrackingOn
                    ? "translate-x-[26px] md:translate-x-[72px]"
                    : "translate-x-0"
                }`}
              ></div>
              <p className="max-md:hidden ml-1 md:ml-4 text-white">
                {isSwitchTrackingOn ? "Off" : "On"}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShiftTimings;
