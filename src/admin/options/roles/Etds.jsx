import React, { useEffect, useState } from "react";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { FaRegEye } from "react-icons/fa";

const Etds = ({ isSuperAdminSelected }) => {
  const [checkedItems, setCheckedItems] = useState({
    "eTDS Report": false,
    "Import eTDS": false,
  });

  useEffect(() => {
    setCheckedItems({
      "eTDS Report": isSuperAdminSelected,
      "Import eTDS": isSuperAdminSelected,
    });
  }, [isSuperAdminSelected]);
  
  return (
    <div>
      <h1 className="flex items-center gap-1 border-b pb-1">
        <span>eTDS</span>
        <AiOutlineQuestionCircle className="text-sm text-gray-400 cursor-pointer" />
        <input type="checkbox" checked={isSuperAdminSelected} className="" />
      </h1>
      <ul className="mt-2">
        <li className="flex items-center gap-1 text-sm mb-1">
          <input
            type="checkbox"
            checked={checkedItems["eTDS Report"]}
            className=""
          />
          <FaRegEye className=" cursor-pointer" />
          eTDS Filing
        </li>
      </ul>
    </div>
  );
};

export default Etds;
