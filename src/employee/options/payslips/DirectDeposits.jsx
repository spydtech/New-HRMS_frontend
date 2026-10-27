import React from "react";
import { FaPlusCircle } from "react-icons/fa";

const data = [
  {
    formtype: "Form A",
    financialYear: "2023-2024",
    createdBy: "John Doe",
    createdOn: "2023-07-01",
    action: "action",
  },
  {
    formtype: "Form B",
    financialYear: "2023-2024",
    createdBy: "Jane Smith",
    createdOn: "2023-07-01",
    action: "action",
  },
  // Add more data objects as needed
];

function DirectDeposits() {
  return (
    <>
      <div className="main pt-2 ">
        <div
          id="submain1"
          className="flex mx-4 flex-row justify-between items-center"
        >
          <div>
            <span className="flex text-lg font-bold">Employee</span>
            <span className="text-[16px] font-medium">
              Dashboard /Payslips /Direct Deposits
            </span>
          </div>
          <div className="w-auto h-[55px] px-4 flex rounded-lg bg-[#ef5f2b]">
            <button className="flex px-4 justify-center items-center ">
              <FaPlusCircle className="text-white text-1xl mr-2" />
              <span className="text-white bg-[#E65F2B] font-medium text-lg">
                Add Direct Deposits
              </span>
            </button>
          </div>
        </div>

        <div className="pt-10 mx-3">
          <span className="pl-10 text-lg">Forms</span>
          <hr className="bg-[#ef5f2b] h-[2px] border-none my-3" />

          <div className="flex justify-center items-center h-60">
            <label className="block text-lg font-medium mb-2">Tax Form:</label>
            <select className="px-20 py-4 ml-2 bg-transparent border-2 border-[#ef5f2b] outline-none">
              <option className="hover:bg-[#ef5f2b] bg-white" value=""></option>
              <option className="hover:bg-[#ef5f2b]" value="Form 16">
                Form 16
              </option>
              <option className="hover:bg-[#ef5f2b]" value="Form 16A">
                Form 16A
              </option>
              <option className="hover:bg-[#ef5f2b]" value="Form 10E">
                Form 10E
              </option>
              <option className="hover:bg-[#ef5f2b]" value="Form 12B">
                Form 12B
              </option>
              <option className="hover:bg-[#ef5f2b]" value="Form 26AS">
                Form 26AS
              </option>
              {/* Add more options as needed */}
            </select>
          </div>
        </div>

        <div
          id="table"
          className="overflow-x-scroll scrollbar-thin scrollbar-track-white scrollbar-thumb-orange-600 pt-10 mx-4"
        >
          <span className="pl-10 text-lg">Downloads</span>
          <hr className="bg-[#ef5f2b] w-screen h-[2px] border-none my-3 mb-6" />
          <table className="min-w-full w-screen overflow-x-scroll text-nowrap ">
            <thead>
              <tr>
                <th className="px-4 bg-[#E65F2B] border-r border-white text-white py-2">
                  Form Type
                </th>
                <th className="px-4 bg-[#E65F2B] border-r border-white text-white py-2">
                  Financial Year
                </th>
                <th className="px-4 bg-[#E65F2B] border-r border-white text-white py-2">
                  Created By
                </th>
                <th className="px-4 bg-[#E65F2B] border-r border-white text-white py-2">
                  Created On
                </th>
                <th className="px-4 bg-[#E65F2B] border-r border-white text-white py-2">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => (
                <tr
                  key={index}
                  className="text-[#e65f2b] border-b border-[#e65f2b] "
                >
                  <td className="px-4 py-2 text-center border-r border-[#e65f2b] ">
                    {item.formtype}
                  </td>
                  <td className="px-4 py-2 text-center border-r border-[#e65f2b]">
                    {item.financialYear}
                  </td>
                  <td className="px-4 py-2 text-center border-r border-[#e65f2b]">
                    {item.createdBy}
                  </td>
                  <td className="px-4 py-2 text-center border-r border-[#e65f2b]">
                    {item.createdOn}
                  </td>
                  <td className="px-4 py-2 text-center border-r border-[#e65f2b]">
                    {item.action}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default DirectDeposits;
