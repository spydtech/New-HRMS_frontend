import React from "react";

const salaryData = [
  { component: "Basic Salary", monthly: "₹ 15,000", yearly: "₹ 1,80,000" },
  {
    component: "House Rent Allowance (H.R.A)",
    monthly: "₹ 5,000",
    yearly: "₹ 60,000",
  },
  { component: "Bonus", monthly: "₹ 1,500", yearly: "₹ 18,000" },
  { component: "Conveyance", monthly: "₹ 800", yearly: "₹ 9,600" },
  { component: "Other Allowance", monthly: "₹ 800", yearly: "₹ 9,600" },
];

function SalaryStructure() {
  return (
    <div className="p-4 mt-4 min-h-screen">
      <div className="  flex flex-col md:flex-row justify-between">
        <div>
          <span className=" text-[#2A546D] text-sm lg:text-lg font-medium">
            Employee / Payroll / SalaryStructure
          </span>
        </div>
      </div>
      <div id="salary-structure" className="bg-white  mt-4 p-2">
        <div className="text-lg font-semibold text-black pt-4 flex justify-between items-center">
          <p>Current Salary</p>
          <p>Effective Date: June 21, 2024</p>
        </div>
        <div className="overflow-x-scroll text-lg scrollbar-thin scrollbar-track-white scrollbar-thumb-[#2A546D] pt-4 mx-2">
          <table className="min-w-full w-screen overflow-x-scroll text-nowrap">
            <thead>
              <tr className="bg-[#2a546d] text-white">
                <th className="p-3 border border-r-white border-[#2a546d] ">
                  Components
                </th>
                <th className="p-3 border-r border-white">Monthly</th>
                <th className="p-3  border  border-[#2a546d]">Yearly</th>
              </tr>
            </thead>
            <tbody className="">
              {salaryData.map((item, index) => (
                <tr
                  key={index}
                  className="text-center text-black border  border-[#2a546d]"
                >
                  <td className="py-3 border-r border-[#2a546d] ">
                    {item.component}
                  </td>
                  <td className="py-3 border-r border-[#2a546d] ">
                    {item.monthly}
                  </td>
                  <td className="py-3 border-r border-[#2a546d]  ">
                    {item.yearly}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-sm py-10 pl-5">
          * The effective date is the effective date of the most recent change
          in the CTC/Gross or the structure breakup.
        </p>
      </div>
    </div>
  );
}

export default SalaryStructure;
