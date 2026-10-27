/* eslint-disable no-unused-vars */
import React from "react";
import { MdOutlineSettingsSuggest } from "react-icons/md";
import { FaUserAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Options = () => {
  const history = useNavigate();

  const handleAdminClick = () => {
    // Navigate to the admin login page
    history("/login");
  };

  const handleUserClick = () => {
    // Navigate to the user login page
    history("/login");
  };

  return (
    <>
      <div className="bg-blue-800 w-full h-screen flex flex-col sm:flex-row justify-center items-center gap-8 md:gap-16 p-4">
        <button
          className="flex justify-center items-center flex-col shadow-2xl p-6 sm:p-8 rounded-md border border-gray-200"
          onClick={handleAdminClick}
        >
          <div className="text-[60px] sm:text-[80px] md:text-[100px] font-semibold text-gray-400">
            <MdOutlineSettingsSuggest />
          </div>
          <div className="text-[20px] sm:text-[25px] md:text-[30px] text-gray-300">
            Admin
          </div>
        </button>
        <button
          className="flex justify-center items-center flex-col shadow-2xl p-6 sm:p-8 rounded-md border border-gray-200"
          onClick={handleUserClick}
        >
          <div className="text-[60px] sm:text-[80px] md:text-[100px] font-semibold text-gray-400">
            <FaUserAlt />
          </div>
          <div className="text-[20px] sm:text-[25px] md:text-[30px] text-gray-300">
            Hr
          </div>
        </button>
      </div>
    </>
  );
};

export default Options;
