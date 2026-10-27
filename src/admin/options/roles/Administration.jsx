import React, { useEffect, useState } from "react";
import { FaRegEye } from "react-icons/fa";
import { AiOutlineQuestionCircle } from "react-icons/ai";

const administrationOptions = [
  { name: "Company Information", icon: <FaRegEye /> },
  { name: "Roles", icon: <FaRegEye /> },
  { name: "Company Settings", icon: <FaRegEye /> },
  { name: "Billing Details", icon: <FaRegEye /> },
  { name: "Users", icon: <FaRegEye /> },
  { name: "Login History Report", icon: <FaRegEye /> },
];

const Administration = ({isSuperAdminSelected}) => {
  const [checkedItems, setCheckedItems] = useState(
    Object.fromEntries(administrationOptions.map(option => [option.name, false]))
  );

  useEffect(() => {
    const newCheckedItems = {};
    administrationOptions.forEach(option => {
      newCheckedItems[option.name] = isSuperAdminSelected;
    });
    setCheckedItems(newCheckedItems);
  }, [isSuperAdminSelected]);

  return (
    <div>
      <h1 className="flex items-center gap-1 border-b pb-1 mr-4">
        <span>Administration</span>
        <AiOutlineQuestionCircle className="text-sm text-gray-400 cursor-pointer" />
        <input type="checkbox" checked={isSuperAdminSelected} className="" />
      </h1>
      <ul className="mt-2">
        {administrationOptions.map((option, index) => (
          <li key={index} className="flex items-center gap-1 text-sm mb-1">
            <input type="checkbox" checked={checkedItems[option.name]} className="" />
            <span className=" cursor-pointer">{option.icon}</span>
            {option.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Administration;
