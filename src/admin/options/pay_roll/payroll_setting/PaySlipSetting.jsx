import React, { useState } from "react";
import Switch from "react-switch";
import { BiSolidEdit } from "react-icons/bi";

const PaySlipSetting = () => {
  const items = [
    "Show Date of Joining",
    "Show Department",
    "Show YTD Amounts",
    "Show Address info",
    "Show IT Declaration",
    "Show Aadhaar",
    "Show Bank Information",
    "Show PAN",
    "Show Payment Method",
    "Show ESI",
    "Show Paid Days",
    "Show PF",
    "Show Leave Balance",
    "Show PF UAN",
    "Show Additional/reduce income Tax",
    "Show Tax Regime",
    "Show Masked Numbers",
    "Show Loss Of Pay Days",
  ];

  const [switchStates, setSwitchStates] = useState(
    items.reduce((acc, _, index) => ({ ...acc, [index]: false }), {})
  );
  const [editMode, setEditMode] = useState(false);
  const toggleSwitch = (index) => {
    setSwitchStates((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };
  const handleEditClick = () => {
    setEditMode(!editMode);
  };

  return (
    <div className="md:my-5 py-4">
      <ul className="grid grid-col-1 md:grid-cols-2 md:gap-4 md:mt-5">
        {items.map((item, index) => (
          <li
            key={index}
            className="text-[#E65F2B] mt-1 flex items-center justify-center md:gap-4"
          >
            <div className="md:text-right w-full md:w-[200px]">
              <span>{item}</span>
            </div>
            <Switch
              onChange={() => toggleSwitch(index)}
              checked={switchStates[index]}
              onColor="#E65F2B"
              onHandleColor="#FFFFFF"
              handleDiameter={20}
              uncheckedIcon={false}
              checkedIcon={false}
              boxShadow="0px 1px 10px rgba(0, 0, 0, 0.6)"
              activeBoxShadow="0px 0px 1px 1px rgba(0, 0, 0, 0.2)"
              height={20}
              width={48}
              className="react-switch"
              id={`switch-${index}`}
            />
          </li>
        ))}
      </ul>
      <div className="flex flex-col">
        <div className="mt-10 space-y-2 flex flex-col md:flex-row md:items-center text-[#E65F2B] md:justify-center md:gap-10">
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="aadhaar"
                className={`rounded-sm h-5 w-5 ${
                  editMode
                    ? "accent-[#E65F2B] cursor-pointer"
                    : "accent-[#FFB08C] cursor-not-allowed"
                }`}
                disabled={!editMode}
              />
              <label>Aadhaar</label>
            </div>
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="esi"
                className={`rounded-sm h-5 w-5 ${
                  editMode
                    ? "accent-[#E65F2B] cursor-pointer"
                    : "accent-[#FFB08C] cursor-not-allowed"
                }`}
                disabled={!editMode}
              />
              <label>PAN</label>
            </div>
          </div>
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="pf-uan"
                className={`rounded-sm h-5 w-5 ${
                  editMode
                    ? "accent-[#E65F2B] cursor-pointer"
                    : "accent-[#FFB08C] cursor-not-allowed"
                }`}
                disabled={!editMode}
              />
              <label>ESI</label>
            </div>
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="pan"
                className={`rounded-sm h-5 w-5 ${
                  editMode
                    ? "accent-[#E65F2B] cursor-pointer"
                    : "accent-[#FFB08C] cursor-not-allowed"
                }`}
                disabled={!editMode}
              />
              <label>PF</label>
            </div>
          </div>
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="pf"
                className={`rounded-sm h-5 w-5 ${
                  editMode
                    ? "accent-[#E65F2B] cursor-pointer"
                    : "accent-[#FFB08C] cursor-not-allowed"
                }`}
                disabled={!editMode}
              />
              <label>PF UAN</label>
            </div>
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="bank-ac"
                className={`rounded-sm h-5 w-5 ${
                  editMode
                    ? "accent-[#E65F2B] cursor-pointer"
                    : "accent-[#FFB08C] cursor-not-allowed"
                }`}
                disabled={!editMode}
              />
              <label>Bank A/C</label>
            </div>
          </div>
        </div>

        <div className="mt-[30px] md:self-center self-end">
          <div
            className="text-white bg-[#e65f2b] flex justify-center items-center gap-1 w-[80px] h-[40px] rounded-lg font-normal cursor-pointer"
            onClick={handleEditClick}
          >
            {editMode ? (
              "Save"
            ) : (
              <>
                <BiSolidEdit className="text-xl" />
                Edit
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaySlipSetting;
