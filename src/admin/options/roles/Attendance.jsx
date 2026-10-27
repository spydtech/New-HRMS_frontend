import React, { useEffect, useState } from "react";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { FaRegEye } from "react-icons/fa";

const Attendance = ({ isHrManagerSelected, isPayrollManagerSelected, isSuperAdminSelected }) => {
  const [checkedItems, setCheckedItems] = useState({
    "Attendance Report": false,
    "Import Attendance": false,
  });

  useEffect(() => {
    setCheckedItems({
      "Attendance Report": isHrManagerSelected || isPayrollManagerSelected || isSuperAdminSelected,
      "Import Attendance": isHrManagerSelected || isPayrollManagerSelected || isSuperAdminSelected,
    });
  }, [isHrManagerSelected, isPayrollManagerSelected, isSuperAdminSelected]);

  return (
    <div>
      <h1 className="flex items-center gap-1 border-b pb-1">
        <span>Attendance</span>
        <AiOutlineQuestionCircle className="text-sm text-gray-400 cursor-pointer" />
        <input type="checkbox" checked={isHrManagerSelected || isPayrollManagerSelected || isSuperAdminSelected} className="" />
      </h1>
      <ul className="mt-2">
        <li className="flex items-center gap-1 text-sm mb-1">
          <input
            type="checkbox"
            checked={checkedItems["Attendance Report"]}
            
          />
          <FaRegEye className="cursor-pointer" />
          Attendance Report
        </li>
        <li className="flex items-center gap-1 text-sm mb-1">
          <input
            type="checkbox"
            checked={checkedItems["Import Attendance"]}
           
          />
          <FaRegEye className="cursor-pointer" />
          Import Attendance
        </li>
      </ul>
    </div>
  );
};

export default Attendance;
