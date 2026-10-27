import React, { useState } from "react";
import { MdOutlineDone } from "react-icons/md";

const AnomalySettings = () => {
  const [totalDuration, setTotalDuration] = useState(false);
  const [noOfBreaks, setNoOfBreaks] = useState(false);
  const [clockOut, setClockOut] = useState(false);
  const [overTime, setOverTime] = useState(false);
  const [isSelfieOn, setIsSelfieOn] = useState(false);
  const [isCompOn, setIsCompOn] = useState(false);
  const [penaltyRulesOn, setPenaltyRulesOn] = useState(false);
  return (
    <div>
      <h1 className="pl-3 md:pl-8 bg-[#2A546D] font-semibold py-2 text-white">
        Anomaly Settings
      </h1>

      <div className="pl-3 md:pl-8 py-2 md:my-2 leading-7">
        <h1 className="text-[#2A546D] font-semibold">In Time</h1>
        <p className="font-semibold">In Time Grace Period</p>
        <p className="text-gray-600">00:15</p>
      </div>

      <hr className="bg-[#2A546D] h-[2px]" />

      <div className="pl-3 md:pl-8 py-2 md:my-2 leading-7">
        <h1 className="text-[#2A546D] font-semibold">Out Time</h1>
        <p className="font-semibold">Out Time Grace Period</p>
        <p className="text-gray-600">00:15</p>
      </div>

      <hr className="bg-[#2A546D] h-[2px]" />

      <div className="pl-3 md:pl-8 py-2 md:my-2 leading-7">
        <h1 className="text-[#2A546D] font-semibold">Working Duration</h1>
        <p className="font-semibold">Full Day</p>
        <p className="text-gray-600">08:00</p>
      </div>

      <hr className="bg-[#2A546D] h-[2px]" />

      <div className="pl-3 md:pl-8 py-2 md:my-2 leading-7">
        <p className="font-semibold">Half Day</p>
        <p className="text-gray-600">04:00</p>
      </div>

      <div className=" pl-3 md:pl-8 leading-10">
        <div className="flex gap-2 items-center">
          <button
            className="border-2 md:w-7 md:h-7 h-5 w-5 border-[#2A546D] rounded-md"
            onClick={() => setTotalDuration(!totalDuration)}
          >
            {totalDuration ? (
              <MdOutlineDone className="bg-[#2A546D] md:text-2xl text-md text-white" />
            ) : (
              ""
            )}
          </button>
          <p className="text-[#2A546D] font-semibold max-md:text-md ">
            Maximum Total Duration
          </p>
        </div>
        <div className="flex gap-2 items-center">
          <button
            className="border-2 md:w-7 md:h-7 h-5 w-5 border-[#2A546D] rounded-md"
            onClick={() => setNoOfBreaks(!noOfBreaks)}
          >
            {noOfBreaks ? (
              <MdOutlineDone className="bg-[#2A546D] md:text-2xl text-md text-white" />
            ) : (
              ""
            )}
          </button>
          <p className="text-[#2A546D] font-semibold max-md:text-md">
            Maximum No.Of Breaks
          </p>
        </div>
        <div className="flex gap-2 items-center">
          <button
            className="border-2 md:w-7 md:h-7 w-5 h-5  border-[#2A546D] rounded-md"
            onClick={() => setClockOut(!clockOut)}
          >
            {clockOut ? (
              <MdOutlineDone className="bg-[#2A546D] md:text-2xl text-md text-white" />
            ) : (
              ""
            )}
          </button>
          <p className="text-[#2A546D] font-semibold max-md:text-md">
            Auto Clock - Out
          </p>
        </div>
      </div>

      <div className="pl-3 md:pl-8 my-5 leading-10">
        <div className="flex justify-between items-center">
          <h1 className="text-[#2A546D]">Enable OverTime</h1>
          <div className="mr-2 md:mr-10">
            <div
              className={`  h-6 w-[50px] md:w-24 rounded-full cursor-pointer p-1 flex items-center ${
                overTime ? "bg-red-500" : "bg-green-500"
              } `}
              onClick={() => setOverTime(!overTime)}
            >
              <div
                className={`w-4 h-4 rounded-full bg-white duration-300 ${
                  overTime
                    ? "translate-x-[26px] md:translate-x-[72px]"
                    : "translate-x-0"
                }`}
              ></div>
              <p className="max-md:hidden ml-1 md:ml-4 text-white">
                {overTime ? "Off" : "On"}
              </p>
            </div>
          </div>
        </div>

        <div className="flex justify-between items-center">
          <h1 className="text-[#2A546D]">Enable Attendance With Selfie</h1>
          <div className="mr-2 md:mr-10">
            <div
              className={`  h-6 w-[50px] md:w-24 rounded-full cursor-pointer p-1 flex items-center ${
                isSelfieOn ? "bg-red-500" : "bg-green-500"
              } `}
              onClick={() => setIsSelfieOn(!isSelfieOn)}
            >
              <div
                className={`w-4 h-4 rounded-full bg-white duration-300 ${
                  isSelfieOn
                    ? "translate-x-[26px] md:translate-x-[72px]"
                    : "translate-x-0"
                }`}
              ></div>
              <p className="max-md:hidden ml-1 md:ml-4 text-white">
                {isSelfieOn ? "Off" : "On"}
              </p>
            </div>
          </div>
        </div>

        <div className="flex justify-between items-center">
          <h1 className="text-[#2A546D]">Enable Comp Off</h1>
          <div className="mr-2 md:mr-10">
            <div
              className={`  h-6 w-[50px] md:w-24 rounded-full cursor-pointer p-1 flex items-center ${
                isCompOn ? "bg-red-500" : "bg-green-500"
              } `}
              onClick={() => setIsCompOn(!isCompOn)}
            >
              <div
                className={`w-4 h-4 rounded-full bg-white duration-300 ${
                  isCompOn
                    ? "translate-x-[26px] md:translate-x-[72px]"
                    : "translate-x-0"
                }`}
              ></div>
              <p className="max-md:hidden ml-1 md:ml-4 text-white">
                {isCompOn ? "Off" : "On"}
              </p>
            </div>
          </div>
        </div>

        <div className="flex justify-between items-center">
          <h1 className="text-[#2A546D] ">Enable Penalty Rules</h1>
          <div className="mr-2 md:mr-10">
            <div
              className={`  h-6 w-[50px] md:w-24 rounded-full cursor-pointer p-1 flex items-center ${
                penaltyRulesOn ? "bg-red-500" : "bg-green-500"
              } `}
              onClick={() => setPenaltyRulesOn(!penaltyRulesOn)}
            >
              <div
                className={`w-4 h-4 rounded-full bg-white duration-300 ${
                  penaltyRulesOn
                    ? "translate-x-[26px] md:translate-x-[72px]"
                    : "translate-x-0"
                }`}
              ></div>
              <p className="max-md:hidden ml-1 md:ml-4 text-white">
                {penaltyRulesOn ? "Off" : "On"}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className=" m-2 md:mx-7 mb-4 shadow-lg border-inherit border bg-white p-2 md:p-5 ">
        <h1 className="text-[#2A546D] md:text-xl md:font-semibold">In Time</h1>

        <div className="flex flex-col gap-y-3 md:flex-row md:gap-x-1 my-4 lg:gap-x-5">
          <div className="flex flex-col gap-1 md:w-24 lg:w-32">
            <label
              htmlFor="late"
              className="md:text-[8px] md:font-semibold lg:text-[12px] "
            >
              Late Coming Allowed
            </label>
            <input
              type="text"
              id="late"
              className="outline-none border border-[#2A546D] h-8 rounded-md px-2"
            />
          </div>
          <div className="flex flex-col gap-1 md:w-20 lg:w-28">
            <label
              htmlFor="late"
              className="md:text-[8px] md:font-semibold lg:text-[12px]"
            >
              Penalty Interval
            </label>
            <input
              type="text"
              id="late"
              className="outline-none border border-[#2A546D] h-8 rounded-md px-2"
            />
          </div>
          <div className="flex flex-col gap-1 md:w-20 lg:w-28">
            <label
              htmlFor="late"
              className="md:text-[8px] md:font-semibold lg:text-[12px]"
            >
              Penalty
            </label>
            <input
              type="text"
              id="late"
              className="outline-none border border-[#2A546D] h-8 rounded-md px-2"
            />
          </div>

          <div className="flex flex-col gap-1 w-full">
            <p className="md:text-[8px] font-semibold lg:text-[12px]">
              Leave Deduction
            </p>
            <div className="bg-[#2A546D] rounded-md p-1 flex gap-2 flex-wrap  ">
              <p className="bg-white flex p-[2px] items-center rounded-md w-[100px]">
                <h1 className="bg-[#2A546D] p-[1px] px-[6px] rounded-full text-white text-[12px]">
                  1
                </h1>
                <p className="text-[#2A546D] text-xs pl-1">Pay Of Loss</p>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className=" m-2 md:mx-7 mb-4 shadow-lg border-inherit border bg-white p-2 md:p-5 ">
        <h1 className="text-[#2A546D] md:text-xl md:font-semibold">Out Time</h1>

        <div className="flex flex-col gap-y-3 md:flex-row md:gap-x-1 my-4 lg:gap-x-5">
          <div className="flex flex-col gap-1 md:w-24 lg:w-36">
            <label
              htmlFor="late"
              className="md:text-[8px] md:font-semibold lg:text-[12px] "
            >
              Early Leaving Allowed
            </label>
            <input
              type="text"
              id="late"
              className="outline-none border border-[#2A546D] h-8 rounded-md px-2"
            />
          </div>
          <div className="flex flex-col gap-1 md:w-20 lg:w-28">
            <label
              htmlFor="late"
              className="md:text-[8px] md:font-semibold lg:text-[12px]"
            >
              Penalty Interval
            </label>
            <input
              type="text"
              id="late"
              className="outline-none border border-[#2A546D] h-8 rounded-md px-2"
            />
          </div>
          <div className="flex flex-col gap-1 md:w-20 lg:w-28">
            <label
              htmlFor="late"
              className="md:text-[8px] md:font-semibold lg:text-[12px]"
            >
              Penalty
            </label>
            <input
              type="text"
              id="late"
              className="outline-none border border-[#2A546D] h-8 rounded-md px-2"
            />
          </div>

          <div className="flex flex-col gap-1 w-full">
            <p className="md:text-[8px] font-semibold lg:text-[12px]">
              Leave Deduction
            </p>
            <div className="bg-[#2A546D] rounded-md p-1 flex gap-2 flex-wrap  ">
              <p className="bg-white flex p-[2px] items-center rounded-md w-[100px]">
                <h1 className="bg-[#2A546D] p-[1px] px-[6px] rounded-full text-white text-[12px]">
                  1
                </h1>
                <p className="text-[#2A546D] text-xs pl-1">Pay Of Loss</p>
              </p>
              <p className="bg-white flex p-[2px] items-center rounded-md w-[100px] ">
                <h1 className="bg-[#2A546D] p-[1px] px-[6px] rounded-full text-white text-[12px]">
                  1
                </h1>
                <p className="text-[#2A546D] text-xs pl-1">Casual Leave</p>
              </p>
              <p className="bg-white flex p-[2px] items-center rounded-md w-[100px]">
                <h1 className="bg-[#2A546D] p-[1px] px-[6px] rounded-full text-white text-[12px]">
                  1
                </h1>
                <p className="text-[#2A546D] text-xs pl-1">Earned Leave</p>
              </p>
              <p className="bg-white flex p-[2px] items-center rounded-md w-[100px]">
                <h1 className="bg-[#2A546D] p-[1px] px-[6px] rounded-full text-white text-[12px]">
                  1
                </h1>
                <p className="text-[#2A546D] text-xs pl-1">Pay Of Loss</p>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className=" m-2 md:mx-7 mb-4 shadow-lg border-inherit border bg-white p-2 md:p-5 ">
        <h1 className="text-[#2A546D] md:text-xl md:font-semibold">
          Work Duration
        </h1>

        <div className="flex flex-col gap-y-3 md:flex-row md:gap-x-1 my-4 lg:gap-x-5">
          <div className="flex flex-col gap-1 md:w-24 lg:w-36">
            <label
              htmlFor="late"
              className="md:text-[8px] md:font-semibold lg:text-[12px] "
            >
              Shortfall In WD Allowed
            </label>
            <input
              type="text"
              id="late"
              className="outline-none border border-[#2A546D] h-8 rounded-md px-2"
            />
          </div>
          <div className="flex flex-col gap-1 md:w-20 lg:w-28">
            <label
              htmlFor="late"
              className="md:text-[8px] md:font-semibold lg:text-[12px]"
            >
              Penalty Interval
            </label>
            <input
              type="text"
              id="late"
              className="outline-none border border-[#2A546D] h-8 rounded-md px-2"
            />
          </div>
          <div className="flex flex-col gap-1 md:w-20 lg:w-28">
            <label
              htmlFor="late"
              className="md:text-[8px] md:font-semibold lg:text-[12px]"
            >
              Penalty
            </label>
            <input
              type="text"
              id="late"
              className="outline-none border border-[#2A546D] h-8 rounded-md px-2"
            />
          </div>

          <div className="flex flex-col gap-1 w-full">
            <p className="md:text-[8px] font-semibold lg:text-[12px]">
              Leave Deduction
            </p>
            <div className="bg-[#2A546D] rounded-md p-1 flex gap-2 flex-wrap  ">
              <p className="bg-white flex p-[2px] items-center rounded-md w-[100px] ">
                <h1 className="bg-[#2A546D] p-[1px] px-[6px] rounded-full text-white text-[12px]">
                  1
                </h1>
                <p className="text-[#2A546D] text-xs pl-1">Casual Leave</p>
              </p>
              <p className="bg-white flex p-[2px] items-center rounded-md w-[100px]">
                <h1 className="bg-[#2A546D] p-[1px] px-[6px] rounded-full text-white text-[12px]">
                  1
                </h1>
                <p className="text-[#2A546D] text-xs pl-1">Earned Leave</p>
              </p>
              <p className="bg-white flex p-[2px] items-center rounded-md w-[100px]">
                <h1 className="bg-[#2A546D] p-[1px] px-[6px] rounded-full text-white text-[12px]">
                  1
                </h1>
                <p className="text-[#2A546D] text-xs pl-1">Pay Of Loss</p>
              </p>
              <p className="bg-white flex p-[2px] items-center rounded-md w-[100px] ">
                <h1 className="bg-[#2A546D] p-[1px] px-[6px] rounded-full text-white text-[12px]">
                  1
                </h1>
                <p className="text-[#2A546D] text-xs pl-1">Casual Leave</p>
              </p>
              <p className="bg-white flex p-[2px] items-center rounded-md w-[100px]">
                <h1 className="bg-[#2A546D] p-[1px] px-[6px] rounded-full text-white text-[12px]">
                  1
                </h1>
                <p className="text-[#2A546D] text-xs pl-1">Earned Leave</p>
              </p>
              <p className="bg-white flex p-[2px] items-center rounded-md w-[100px]">
                <h1 className="bg-[#2A546D] p-[1px] px-[6px] rounded-full text-white text-[12px]">
                  1
                </h1>
                <p className="text-[#2A546D] text-xs pl-1">Pay Of Loss</p>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnomalySettings;
