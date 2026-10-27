import React, { useEffect, useState } from "react";
import { FaRegEye, FaCog } from "react-icons/fa";
import { AiOutlineQuestionCircle } from "react-icons/ai";

const employees = [
  { name: "Employees List", icon: <FaRegEye /> },
  { name: "Create Employee", icon: <FaCog /> },
  { name: "Import Employees", icon: <FaRegEye /> },
  { name: "View Employee Compensation", icon: <FaRegEye /> },
  { name: "Employee Compensation", icon: <FaRegEye /> },
  { name: "Employee IT Declarations", icon: <FaRegEye /> },
  { name: "Census Report", icon: <FaRegEye /> },
  { name: "Compensation / Salary Report", icon: <FaRegEye /> },
  { name: "Employee Onboarding", icon: <FaRegEye /> },
  { name: "Broadcasting Notification", icon: <FaRegEye /> },
  { name: "Company Policies", icon: <FaRegEye /> },
];

const Employees = ({ isHrManagerSelected, isPayrollManagerSelected , isSuperAdminSelected}) => {
  // Initialize state with default values (false for all options)
  const [checkedItems, setCheckedItems] = useState(() => {
    const initialCheckedItems = {};
    employees.forEach((employee) => {
      initialCheckedItems[employee.name] = false;
    });
    return initialCheckedItems;
  });

  useEffect(() => {
    // Update checkedItems based on isHrManagerSelected
    const updatedCheckedItems = {};
    employees.forEach((employee) => {
      updatedCheckedItems[employee.name] = isHrManagerSelected || isPayrollManagerSelected || isSuperAdminSelected;
    });
    setCheckedItems(updatedCheckedItems);
  }, [isHrManagerSelected, isPayrollManagerSelected, isSuperAdminSelected]);

  return (
    <div>
      <h1 className="flex items-center gap-1 border-b pb-1 mr-4">
        <span>Employees</span>
        <AiOutlineQuestionCircle className="text-sm text-gray-400 cursor-pointer" />
        <input type="checkbox" checked={isHrManagerSelected || isPayrollManagerSelected || isSuperAdminSelected} className="" />
      </h1>
      <ul className="mt-2 h-52 lg:w-72 overflow-y-auto scrollbar-thin scrollbar-track-white scrollbar-thumb-[#E65F2B]">
        {employees.map((employee, index) => (
          <li key={index} className="flex items-center gap-1 text-sm mb-1">
            <input
              type="checkbox"
              checked={checkedItems[employee.name]}
              
            />
            <span className="cursor-pointer">{employee.icon}</span>
            {employee.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Employees;
