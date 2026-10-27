import React from "react";
import { FaPlusCircle } from "react-icons/fa";
import { IoInformationCircleOutline } from "react-icons/io5";
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

function YTDimport() {
  return (
    <>
      <div className="main pt-2 h-screen  mx-4 ">
        <div
          id="submain1"
          className="flex  flex-row justify-between items-center"
        >
          <div>
            <span className="flex text-lg font-bold">Employee</span>
            <span className="text-[16px] font-medium">
              Dashboard /Payslips /YTD import
            </span>
          </div>
          <div className="w-auto h-[55px] px-4 flex rounded-lg bg-[#ef5f2b]">
            <button className="flex px-4 justify-center items-center ">
              <FaPlusCircle className="text-white text-1xl mr-2" />
              <span className="text-white bg-[#E65F2B] font-medium text-lg">
                Import YTD
              </span>
            </button>
          </div>
        </div>
        <div className="pt-10 px-4 flex">
          <IoInformationCircleOutline className="w-10 h-10 text-wrap " />
          <p className="px-5 font-[400]">
            YTD Import can be used to import payroll numbers when migrating from
            another system or if you are getting started to use HRMS in middle
            of a financial year.
          </p>
        </div>
        {/* <div
          id="table"
          className="overflow-x-scroll scrollbar-thin   scrollbar-track-white scrollbar-thumb-orange-600 pt-10 mx-4"
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
                <tr key={index} className="text-[#e65f2b]">
                  <td className="px-4 py-2 text-center">{item.employeeName}</td>
                  <td className="px-4 py-2 text-center">{item.runDate}</td>
                  <td className="px-4 py-2 text-center">{item.status}</td>
                  <td className="px-4 py-2 text-center">{item.payPeriod}</td>
                  <td className="px-4 py-2 text-center">{item.gross}</td>
                  <td className="px-4 py-2 text-center">{item.incomeTax}</td>
                  <td className="px-4 py-2 text-center">{item.surge}</td>
                  <td className="px-4 py-2 text-center">{item.cess}</td>
                  <td className="px-4 py-2 text-center">{item.netAmount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div> */}
      </div>
    </>
  );
}

export default YTDimport;
