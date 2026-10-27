import React, { useState } from "react";
import { FiEdit } from "react-icons/fi";

const data = [
  {
    hrmsid: "SPYD32323",
    companyName: "SPY D Technology",
    Tan: "HYDS75973C",
    PAN: "ABKCS8757J",
    Address:
      "Plot no,518,Meea complex, Madhapur-Hyderabad,Hyderabad,Ts,India-500081",
    MainPhone: "99124-5759",
    Industry: "Information Technology",
    website: "http://spydtech.com",
    Createdon: "Jul 24, 2024 at 03:28 PM, by Sathish Chiluveru",
    Modified: "Jul 24, 2024 at 06:11 PM",
  },
];

const CompanyInformation = () => {
  const [editable, setEditable] = useState(false);
  const [companyInfo, setCompanyInfo] = useState(data[0]);
  const [editedInfo, setEditedInfo] = useState(companyInfo);

  const handleEdit = () => {
    setEditable(true);
  };

  const handleSave = () => {
    const options = { year: "numeric", month: "short", day: "2-digit" };
    const formattedDate = new Date().toLocaleDateString("en-US", options);
    const formattedTime = new Date().toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    });

    setCompanyInfo({
      ...editedInfo,
      Modified: `${formattedDate} at ${formattedTime}`,
    });
    setEditable(false);
  };

  const handleCancel = () => {
    setEditedInfo(companyInfo);
    setEditable(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedInfo({ ...editedInfo, [name]: value });
  };

  return (
    <div className="min-h-screen  p-4 mt-4">
      <div className="  flex flex-col md:flex-row justify-between">
        <div>
          <span className=" text-[#E65F2B] text-sm lg:text-lg font-medium">
            Admin / Account Details
          </span>
        </div>
      </div>
      <div className="p-4 flex flex-col items-center">
        <div>
          <h2 className="text-center text-lg uppercase font-semibold mb-6 ">
            SPYD Technology
          </h2>
          <div className="space-y-4 text-left rounded-lg bg-white p-4 o overflow-auto">
            <div className="flex justify-end">
              {editable ? (
                <div className="text-right mr-2 space-x-1">
                  <button
                    onClick={handleSave}
                    className="mr-0 md:mr-4 bg-[#E65F2B] font-semibold w-16 md:w-20 h-9 text-sm md:text-lg text-white rounded-md"
                  >
                    Save
                  </button>
                  <button
                    onClick={handleCancel}
                    className="text-[#E65F2B] font-semibold w-16 md:w-20 h-9 text-sm md:text-lg border border-[#E65F2B] rounded-md"
                  >
                    Cancel
                  </button>
                </div>
              ) : (
                <FiEdit
                  className="cursor-pointer text-white text-2xl mr-3 rounded-md p-1.5 bg-[#E65F2B]"
                  onClick={handleEdit}
                />
              )}
            </div>
            {[
              "hrms id",
              "companyName",
              "Tan",
              "PAN",
              "MainPhone",
              "Industry",
              "website",
            ].map((field) => (
              <div
                key={field}
                className="flex flex-col sm:flex-row items-center md:items-start sm:ml-8"
              >
                <div className="font-semibold text-[#E65F2B] md:text-left text-center sm:pr-4 pr-0 mb-1 text-md md:text-lg sm:w-40">
                  {field.replace(/^\w/, (c) => c.toUpperCase())}
                </div>
                <div className="text-[#E65F2B] font-semibold ml-4 sm:ml-12 md:text-left text-center w-full text-sm md:text-lg overflow-auto flex-1">
                  {editable ? (
                    <input
                      type="text"
                      name={field}
                      value={editedInfo[field]}
                      onChange={handleChange}
                      className="border p-1 border-[#E65F2B] border-opacity-40 rounded-md focus:outline-none w-full"
                    />
                  ) : field === "website" ? (
                    <a href={companyInfo[field]} className="underline">
                      {companyInfo[field]}
                    </a>
                  ) : (
                    companyInfo[field]
                  )}
                </div>
              </div>
            ))}

            <div className="flex flex-col sm:flex-row items-center md:items-start sm:ml-8">
              <div className="font-semibold text-[#E65F2B] text-center md:text-left pr-0 md:pr-4 text-lg sm:w-40">
                Address
              </div>
              <div className="text-[#E65F2B] font-semibold ml-4 sm:ml-12 w-full text-center md:text-left mb-1 overflow-auto flex-1">
                {editable ? (
                  <textarea
                    name="Address"
                    value={editedInfo.Address}
                    onChange={handleChange}
                    className="border p-1 w-full border-[#E65F2B] border-opacity-40 rounded-md focus:outline-none"
                  />
                ) : (
                  companyInfo.Address
                )}
              </div>
            </div>

            {["Createdon", "Modified"].map((field) => (
              <div
                key={field}
                className="flex flex-col md:flex-row md:items-start items-center sm:ml-8"
              >
                <div className="font-semibold text-[#E65F2B] text-center md:text-left pr-0 md:pr-4 text-lg mb-1 sm:w-40">
                  {field.replace(/^\w/, (c) => c.toUpperCase())}
                </div>
                <div className="text-[#E65F2B] font-semibold ml-4 sm:ml-12 text-center md:text-left overflow-auto flex-1">
                  {companyInfo[field]}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyInformation;
