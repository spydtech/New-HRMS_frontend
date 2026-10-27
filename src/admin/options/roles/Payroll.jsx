import React, { useEffect, useState } from "react";
import { FaRegEye, FaCog } from "react-icons/fa";
import { AiOutlineQuestionCircle } from "react-icons/ai";

const payrollOptions = [
  { name: "Create Payroll", icon: <FaCog /> },
  { name: "Payroll Summary", icon: <FaRegEye /> },
  { name: "Payroll Settings", icon: <FaRegEye /> },
  { name: "YTD Report", icon: <FaRegEye /> },
  { name: "TDS Report", icon: <FaRegEye /> },
  { name: "PF Report", icon: <FaRegEye /> },
  { name: "ESI Report", icon: <FaRegEye /> },
  { name: "Bank Report", icon: <FaRegEye /> },
  { name: "PT Report", icon: <FaRegEye /> },
  { name: "Payroll Forms", icon: <FaRegEye /> },
  { name: "Submit For Process", icon: <FaRegEye /> },
  { name: "Advances / Loans", icon: <FaRegEye /> },
  { name: "IT Declarations Report", icon: <FaRegEye /> },
  { name: "Statutory Compliance", icon: <FaRegEye /> },
  { name: "Payslips", icon: <FaRegEye /> },
  { name: "Settlements", icon: <FaRegEye /> },
  { name: "Cash Report", icon: <FaRegEye /> },
  { name: "Cash Requirements Report", icon: <FaRegEye /> },
  { name: "Allowances Report", icon: <FaRegEye /> },
  { name: "Deductions Report", icon: <FaRegEye /> },
  { name: "Employee Payroll Detailed Report", icon: <FaRegEye /> },
];

const Payroll = ({ isHrManagerSelected, isPayrollManagerSelected, isSuperAdminSelected  }) => {
    // Initialize state with default values (false for all options)
    const [checkedItems, setCheckedItems] = useState(
      Object.fromEntries(payrollOptions.map(option => [option.name, false]))
    );
  
    useEffect(() => {
      // Update checkedItems based on isHrManagerSelected
      const newCheckedItems = {};
      payrollOptions.forEach(option => {
        newCheckedItems[option.name] = isHrManagerSelected || isPayrollManagerSelected || isSuperAdminSelected;
      });
      setCheckedItems(newCheckedItems);
    }, [isHrManagerSelected, isPayrollManagerSelected , isSuperAdminSelected]);

  return (
    <div>
      <h1 className="flex items-center gap-1 border-b pb-1 mr-4">
        <span>Payroll</span>
        <AiOutlineQuestionCircle className="text-sm text-gray-400 cursor-pointer" />
        <input type="checkbox" checked={isHrManagerSelected || isPayrollManagerSelected || isSuperAdminSelected} className="" />
      </h1>
      <ul className="mt-2 h-52 lg:w-72 overflow-y-auto scrollbar-thin scrollbar-track-white scrollbar-thumb-[#E65F2B]">
        {payrollOptions.map((option, index) => (
          <li key={index} className="flex items-center gap-1 text-sm mb-1">
            <input
              type="checkbox"
              checked={checkedItems[option.name]}
              className=""
              readOnly
            />
            <span className=" cursor-pointer">{option.icon}</span>
            {option.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Payroll;
