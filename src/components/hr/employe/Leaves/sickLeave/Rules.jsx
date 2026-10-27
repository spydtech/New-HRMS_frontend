import React, { useState } from "react";

const Rules = () => {
  const [activeSetting, setActiveSetting] = useState("general"); // Local state for active setting

  const handleSettingClick = (setting) => {
    setActiveSetting(setting);
  };

  return (
    <>
      <div className="flex m-3 p-4 ">
        <h1
          className={`text-lg text-[#0098F1] ${
            activeSetting === "general"
              ? "border-b-2 border-[#0098F1]"
              : "relative"
          } cursor-pointer`}
          style={{
            filter: activeSetting !== "general" ? "blur(1px)" : "none",
            opacity: activeSetting !== "general" ? 0.6 : 1,
          }}
          onClick={() => handleSettingClick("general")}
        >
          General settings
        </h1>
        <h1
          className={`text-lg ml-4 text-[#0098F1] ${
            activeSetting === "advanced"
              ? "border-b-2 border-[#0098F1]"
              : "relative"
          } cursor-pointer`}
          style={{
            filter: activeSetting !== "advanced" ? "blur(1px)" : "none",
            opacity: activeSetting !== "advanced" ? 0.6 : 1,
          }}
          onClick={() => handleSettingClick("advanced")}
        >
          Advanced settings
        </h1>
      </div>

      {/* Conditional rendering for General settings */}
      {activeSetting === "general" && (
        <div className="m-3 p-4">
          <div>
            <h1 className="text-lg text-[#0098F1]">Name</h1>
            <h1 className="text-[#0098F1] text-[16px]">Sick Leave</h1>
          </div>

          <div className="mt-5">
            <h1 className="text-lg text-[#0098F1]">Description</h1>
            <h1 className="text-[#0098F1] text-[16px] mt-1">
              This is a Default Description for the Leave Type. You can
              customize this
            </h1>
          </div>
          <hr className="bg-[#0098F1] h-0.5 mt-5 w-full border-none" />

          <div className="mt-3 flex">
            <div className="w-[30%] flex flex-col items-start">
              <h1 className="text-lg text-[#0098F1]">Leaves Count</h1>
            </div>

            <div className="w-[70%] flex flex-wrap">
              <div className="flex flex-col w-full sm:w-1/2 mb-4">
                <h1 className="text-lg text-[#0098F1]">
                  Leaves Allowed In a Year
                </h1>
                <p className="text-[16px] text-[#0098F1]">12.0</p>
              </div>

              <div className="flex flex-col w-full sm:w-1/2 mb-4">
                <h1 className="text-lg text-[#0098F1]">
                  Weekends Between Leave
                </h1>
                <p className="text-[16px] text-[#0098F1]">Not Considered</p>
              </div>

              <div className="flex flex-col w-full mb-4">
                <h1 className="text-lg text-[#0098F1]">
                  Holidays Between Leave
                </h1>
                <p className="text-[16px] text-[#0098F1]">Not Considered</p>
              </div>
            </div>
          </div>
          <hr className="bg-[#0098F1] h-0.5 mt-5 w-full border-none" />

          {/* New Section: Accrual */}
          <div className="mt-5 flex">
            <div className="w-[30%] flex flex-col items-start">
              <h1 className="text-lg text-[#0098F1]">Accrual</h1>
            </div>

            <div className="w-[70%] flex flex-wrap">
              <div className="flex flex-col w-full sm:w-1/2 mb-4">
                <h1 className="text-lg text-[#0098F1]">
                  Creditable On Accrual Basis
                </h1>
                <p className="text-[16px] text-[#0098F1]">Yes</p>
              </div>

              <div className="flex flex-col w-full sm:w-1/2 mb-4">
                <h1 className="text-lg text-[#0098F1]">Accrual Frequency</h1>
                <p className="text-[16px] text-[#0098F1]">Monthly</p>
              </div>
              <div className="flex flex-col w-full mb-4">
                <h1 className="text-lg text-[#0098F1]">Accrual Period</h1>
                <p className="text-[16px] text-[#0098F1]">No</p>
              </div>
            </div>
          </div>
          <hr className="bg-[#0098F1] h-0.5 mt-5 w-full border-none" />

          {/* New Section: Applicability */}
          <div className="mt-5 flex">
            <div className="w-[30%] flex flex-col items-start">
              <h1 className="text-lg text-[#0098F1]">Applicability</h1>
            </div>

            <div className="w-[70%] flex flex-wrap">
              <div className="flex flex-col w-full sm:w-1/2 mb-4">
                <h1 className="text-lg text-[#0098F1]">
                  Allowed Under Probation
                </h1>
                <p className="text-[16px] text-[#0098F1]">No</p>
              </div>

              <div className="flex flex-col w-full sm:w-1/2 mb-4">
                <h1 className="text-lg text-[#0098F1]">
                  Allowed Under Notice Period
                </h1>
                <p className="text-[16px] text-[#0098F1]">No</p>
              </div>
            </div>
          </div>
          <hr className="bg-[#0098F1] h-0.5 mt-5 w-full border-none" />

          {/* New Section: Leave Encash */}
          <div className="mt-5 flex">
            <div className="w-[30%] flex flex-col items-start">
              <h1 className="text-lg text-[#0098F1]">Leave Encash</h1>
            </div>

            <div className="w-[70%] flex flex-wrap">
              <div className="flex flex-col w-full sm:w-1/2 mb-4">
                <h1 className="text-lg text-[#0098F1]">Encashment Allowed</h1>
                <p className="text-[16px] text-[#0098F1]">Yes</p>
              </div>

              <div className="flex flex-col w-full sm:w-1/2 mb-4">
                <h1 className="text-lg text-[#0098F1]">Maximum Encashment</h1>
                <p className="text-[16px] text-[#0098F1]">15 days</p>
              </div>
            </div>
          </div>
          <hr className="bg-[#0098F1] h-0.5 mt-5 w-full border-none" />

          {/* New Section: Carry Forward */}
          <div className="mt-5 flex">
            <div className="w-[30%] flex flex-col items-start">
              <h1 className="text-[16px] text-[#0098F1]">Carry Forward</h1>
            </div>

            <div className="w-[70%] flex flex-wrap">
              <div className="flex flex-col w-full sm:w-1/2 mb-4">
                <h1 className="text-lg text-[#0098F1]">
                  Carry Forward Allowed
                </h1>
                <p className="text-[16px] text-[#0098F1]">Yes</p>
              </div>

              <div className="flex flex-col w-full sm:w-1/2 mb-4">
                <h1 className="text-lg text-[#0098F1]">Carry Forward Limit</h1>
                <p className="text-[16px] text-[#0098F1]">10 days</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Conditional rendering for Advanced settings */}
      {activeSetting === "advanced" && (
        <div className="m-3">
          <div className="mt-5 flex">
            <div className="w-[30%] flex flex-col items-start">
              <h1 className="text-lg text-[#0098F1]">Leaves Count</h1>
            </div>

            <div className="w-[70%] flex flex-wrap">
              <div className="flex flex-col w-full sm:w-1/2 mb-4">
                <h1 className="text-lg text-[#0098F1]">
                  Max.Leave Allowed in a Month
                </h1>
                <p className="text-[16px] text-[#0098F1]">1.00</p>
              </div>

              <div className="flex flex-col w-full sm:w-1/2 mb-4">
                <h1 className="text-lg text-[#0098F1]">
                  Continuous Leaves Allowed
                </h1>
                <p className="text-[16px] text-[#0098F1]">1</p>
              </div>
            </div>
          </div>
          <hr className="bg-[#0098F1] h-0.5 mt-5 w-full border-none" />

          {/* Accrual Section */}
          <div className="mt-5 flex">
            <div className="w-[30%] flex flex-col items-start">
              <h1 className="text-lg text-[#0098F1]">Applicability</h1>
            </div>

            <div className="w-[70%] flex flex-wrap">
              <div className="flex flex-col w-full sm:w-1/2 mb-4">
                <h1 className="text-lg text-[#0098F1]">
                  Negative Leaves Allowed
                </h1>
                <p className="text-[16px] text-[#0098F1]">No</p>
              </div>
            </div>
          </div>
          <hr className="bg-[#0098F1] h-0.5 mt-5 w-full border-none" />

          <div className="mt-3 flex">
            <div className="w-[30%] flex flex-col items-start">
              <h1 className="text-lg text-[#0098F1]">Miscellaneous</h1>
            </div>

            <div className="w-[70%] flex flex-wrap">
              <div className="flex flex-col w-full sm:w-1/2 mb-4">
                <h1 className="text-lg text-[#0098F1]">
                  Future-dated Leaves Allowed
                </h1>
                <p className="text-[16px] text-[#0098F1]">Yes</p>
              </div>

              <div className="flex flex-col w-full sm:w-1/2 mb-4">
                <h1 className="text-lg text-[#0098F1]">
                  Future-dated Leaves Allowed After
                </h1>
                <p className="text-[16px] text-[#0098F1]">0 Days</p>
              </div>

              <div className="flex flex-col w-full sm:w-1/2 mb-4">
                <h1 className="text-lg text-[#0098F1]">
                  Backdated Leaves Allowed
                </h1>
                <p className="text-[16px] text-[#0098F1]">Yes</p>
              </div>
              <div className="flex flex-col w-full sm:w-1/2 mb-4">
                <h1 className="text-lg text-[#0098F1]">
                  Backdated Leaves Allowed up to
                </h1>
                <p className="text-[16px] text-[#0098F1]">15 Days</p>
              </div>
              <div className="flex flex-col w-full sm:w-1/2 mb-4">
                <h1 className="text-lg text-[#0098F1]">
                  Apply Leaves for Next Year Till
                </h1>
                <p className="text-[16px] text-[#0098F1]">January</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Rules;
