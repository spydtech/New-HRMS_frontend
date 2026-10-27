import React, { useEffect, useState } from "react";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { FaRegEye, FaCog } from "react-icons/fa";

const HrRequests = ({ selectedRole, isHrManagerSelected, isPayrollManagerSelected, isSuperAdminSelected }) => {
  const [checkedItems, setCheckedItems] = useState({
    createHRRequest: false,
    myRequests: false,
    companyRequests: false,
  });

  useEffect(() => {
    if (isSuperAdminSelected) {
      setCheckedItems({
        createHRRequest: true,
        myRequests: true,
        companyRequests: true,
      });
    } else if (isHrManagerSelected) {
      setCheckedItems({
        createHRRequest: true,
        myRequests: true,
        companyRequests: true,
      });
    } else if (isPayrollManagerSelected) {
      setCheckedItems({
        createHRRequest: true,
        myRequests: true,
        companyRequests: false,
      });
    } else if (selectedRole === "Employee") {
      setCheckedItems({
        createHRRequest: true,
        myRequests: true,
        companyRequests: false,
      });
    } else {
      // Handle other roles or default state
      setCheckedItems({
        createHRRequest: false,
        myRequests: false,
        companyRequests: false,
      });
    }
  }, [selectedRole, isHrManagerSelected, isPayrollManagerSelected, isSuperAdminSelected]);

  return (
    <div>
      <h1 className="flex items-center gap-1 border-b pb-1">
        <span>HR Requests</span>
        <AiOutlineQuestionCircle className="text-sm text-gray-400 cursor-pointer" />
        <input type="checkbox" checked={isHrManagerSelected || isSuperAdminSelected} className="" />
      </h1>
      <ul className="mt-2">
        <li className="flex items-center gap-1 text-sm mb-1">
          <input
            type="checkbox"
            checked={checkedItems.createHRRequest}
           
          />
          <FaCog className="cursor-pointer" />
          Create HR Request
        </li>
        <li className="flex items-center gap-1 text-sm mb-1">
          <input
            type="checkbox"
            checked={checkedItems.myRequests}
            
          />
          <FaRegEye className="cursor-pointer" />
          My Requests
        </li>
        <li className="flex items-center gap-1 text-sm mb-1">
          <input
            type="checkbox"
            checked={checkedItems.companyRequests}
           
          />
          <FaRegEye className="cursor-pointer" />
          Company Requests
        </li>
      </ul>
    </div>
  );
};

export default HrRequests;
