import React from "react";
import { FaPlusCircle } from "react-icons/fa";

const data = [
  {
    employeeName: "John Doe",
    runDate: "2023-07-01",
    status: "Completed",
    payPeriod: "June 2023",
    gross: 5000,
    incomeTax: 500,
    surge: 50,
    cess: 20,
    netAmount: 4430,
  },
  {
    employeeName: "Jane Smith",
    runDate: "2023-07-01",
    status: "Pending",
    payPeriod: "June 2023",
    gross: 5500,
    incomeTax: 550,
    surge: 55,
    cess: 22,
    netAmount: 4873,
  },
  // Add more data objects as needed
];

function Settlement() {
  return (
    <>
      <div className="main pt-2 h-screen   ">
        <div
          id="submain1"
          className="flex mx-4 flex-row justify-between items-center"
        >
          <div>
            <span className="flex text-lg font-bold">Employee</span>
            <span className="text-[16px] font-medium">
              Dashboard /Payslips /Settlements
            </span>
          </div>
          <div className="w-auto h-[55px] px-4 flex rounded-lg bg-[#ef5f2b]">
            <button className="flex px-4 justify-center items-center ">
              <FaPlusCircle className="text-white text-1xl mr-2" />
              <span className="text-white bg-[#E65F2B] font-medium text-lg">
                Add Settlement
              </span>
            </button>
          </div>
        </div>
        <div
          id="table"
          className="overflow-x-scroll scrollbar-thin   scrollbar-track-white scrollbar-thumb-[#e65f2b] pt-10 mx-4"
        >
          <table className="min-w-full w-screen overflow-x-scroll  text-nowrap">
            <thead>
              <tr>
                <th className="px-4 bg-[#E65F2B] border-r border-white text-white py-2">
                  Employee Name
                </th>
                <th className="px-4 bg-[#E65F2B] border-r border-white text-white py-2">
                  Run Date
                </th>
                <th className="px-4 bg-[#E65F2B] border-r border-white text-white py-2">
                  Status
                </th>
                <th className="px-4 bg-[#E65F2B] border-r border-white text-white py-2">
                  Pay Period
                </th>
                <th className="px-4 bg-[#E65F2B] border-r border-white text-white py-2">
                  Gross
                </th>
                <th className="px-4 bg-[#E65F2B] border-r border-white text-white py-2">
                  Income Tax
                </th>
                <th className="px-4 bg-[#E65F2B] border-r border-white text-white py-2">
                  Surge
                </th>
                <th className="px-4 bg-[#E65F2B] border-r border-white text-white py-2">
                  Cess
                </th>
                <th className="px-4 bg-[#E65F2B] border-r border-white text-white py-2">
                  Net Amount
                </th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => (
                <tr
                  key={index}
                  className="text-[#e65f2b] border-b border-[#e65f2b]"
                >
                  <td className="px-4 py-2 text-center border-r border-[#e65f2b]">
                    {item.employeeName}
                  </td>
                  <td className="px-4 py-2 text-center border-r border-[#e65f2b]">
                    {item.runDate}
                  </td>
                  <td className="px-4 py-2 text-center border-r border-[#e65f2b]">
                    {item.status}
                  </td>
                  <td className="px-4 py-2 text-center border-r border-[#e65f2b]">
                    {item.payPeriod}
                  </td>
                  <td className="px-4 py-2 text-center border-r border-[#e65f2b]">
                    {item.gross}
                  </td>
                  <td className="px-4 py-2 text-center border-r border-[#e65f2b]">
                    {item.incomeTax}
                  </td>
                  <td className="px-4 py-2 text-center border-r border-[#e65f2b]">
                    {item.surge}
                  </td>
                  <td className="px-4 py-2 text-center border-r border-[#e65f2b]">
                    {item.cess}
                  </td>
                  <td className="px-4 py-2 text-center border-r border-[#e65f2b]">
                    {item.netAmount}
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

export default Settlement;
