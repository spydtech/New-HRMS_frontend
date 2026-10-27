import React, { useState, useEffect } from "react";
import { IoMdMenu } from "react-icons/io";
import profile from "../adminAssets/profile/boy.png";
import AdminNavBar from "./AdminNavBar";
import { IoInformationCircle, IoSettings } from "react-icons/io5";
import { MdManageAccounts, MdOutlinePayment } from "react-icons/md";
import { FaUser, FaInbox, FaTasks } from "react-icons/fa";
import { RiMoneyRupeeCircleFill, RiBankFill } from "react-icons/ri";
import { HiOutlineDocumentReport } from "react-icons/hi";
import CompanySettingsNavigation from "./options/company_settings/CompanySettingsNavigation";
import CompanyInformation from "./options/company_info/CompanyInformation";

import User from "./options/users/User";
import Roles from "./options/roles/Roles";
import Payrolldashboard from "./options/pay_roll/payroll_dashboard/payrolldashboard";

import Settlement from "./options/pay_roll/settlement/Settlements";
import PaySlips from "./options/pay_roll/paySlips/PaySlips";
import PayRollSummary from "./options/pay_roll/payrollSummary/PayrollSummary";
import PayRollSettings from "./options/pay_roll/payroll_setting/PayrollSettings";

import RunPayRoll from "./options/pay_roll/runPayRoll/RunPayroll";
import AccountDetails from "./options/accountdetailes/AccountDetails";
import { FaUserCircle } from "react-icons/fa";
import { FaPeopleGroup } from "react-icons/fa6";
import Support from "./options/support/Support";
import { GiPayMoney } from "react-icons/gi";

import { MdAdminPanelSettings } from "react-icons/md";
// import { RiMoneyRupeeCircleFill } from "react-icons/ri";
import { FaMoneyBillTransfer } from "react-icons/fa6";
import { GiTakeMyMoney } from "react-icons/gi";
import { TbMoneybag } from "react-icons/tb";

const AdminSideBar = () => {
  // Load from localStorage or use default values
  const [activeTab, setActiveTab] = useState(
    localStorage.getItem("ADMIN_ACTIVE_TAB") || "Company Information"
  );
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [profileImage, setProfileImage] = useState(profile);
  const [openDropdown, setOpenDropdown] = useState(
    localStorage.getItem("ADMIN_OPEN_DROPDOWN") || ""
  );
  const [tooltip, setTooltip] = useState({
    show: false,
    title: "",
    position: { x: 0, y: 0 },
  });

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setIsSidebarCollapsed(true);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleIconClick = (iconTitle) => {
    setActiveTab(iconTitle);
    localStorage.setItem("ADMIN_ACTIVE_TAB", iconTitle); // Store the active tab
  };

  const handleMouseOver = (event, title) => {
    if (isSidebarCollapsed) {
      const rect = event.currentTarget.getBoundingClientRect();
      setTooltip({
        show: true,
        title,
        position: { x: rect.right + 10, y: rect.top },
      });
    }
  };

  const handleSubOptionMouseOver = (event, subOptionTitle) => {
    event.stopPropagation();
    handleMouseOver(event, subOptionTitle);
  };

  const handleMouseOut = () => {
    setTooltip({ show: false, title: "", position: { x: 0, y: 0 } });
  };

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setProfileImage(e.target.result); // Set the image URL
      };
      reader.readAsDataURL(file);
    }
  };

  const triggerFileInput = () => {
    document.getElementById("fileInput").click();
  };
  const options = [
    { title: "Company Information", icon: <IoInformationCircle /> },
    { title: "Account Details", icon: <MdManageAccounts /> },
    { title: "Company Settings", icon: <IoSettings /> },
    { title: "Roles", icon: <FaPeopleGroup /> },
    { title: "User", icon: <FaUserCircle /> },
    {
      title: "Payroll",
      icon: <MdOutlinePayment />,
      subOptions: [
        { name: "DashBoard", icon: <TbMoneybag /> },
        { name: "Run payroll", icon: <GiPayMoney /> },
        { name: "Payroll Summary", icon: <HiOutlineDocumentReport /> },
        { name: "Payroll settings", icon: <MdAdminPanelSettings /> },
        { name: "Payslips", icon: <RiMoneyRupeeCircleFill /> },
        { name: "Settlements", icon: <FaMoneyBillTransfer /> },
        // { name: "Payroll Forms", icon: <GiTakeMyMoney /> },
      ],
    },
    { title: "Support", icon: <FaInbox /> },
  ];

  const handleOptionClick = (option) => {
    if (option.subOptions) {
      const newDropdownState =
        openDropdown === option.title ? "" : option.title;
      setOpenDropdown(newDropdownState);
      localStorage.setItem("ADMIN_OPEN_DROPDOWN", newDropdownState); // Store dropdown state
    } else {
      localStorage.setItem("ADMIN_ACTIVE_TAB", option.title);
      setActiveTab(option.title);
      setOpenDropdown(""); // Close any open dropdown
      localStorage.removeItem("ADMIN_OPEN_DROPDOWN"); // Clear stored dropdown state
    }
  };

  const handleSubOptionClick = (event, subOption) => {
    event.stopPropagation();
    localStorage.setItem("ADMIN_ACTIVE_TAB", subOption.name);
    setActiveTab(subOption.name);
  };

  const toggleSidebar = () => {
    if (window.innerWidth >= 768) {
      setIsSidebarCollapsed(!isSidebarCollapsed);
    }
  };

  return (
    <div className="relative bg-[#e65f2b] bg-opacity-10">
      <AdminNavBar onIconClick={handleIconClick} options={options} />
      <div
        style={{
          backgroundImage: "linear-gradient(to bottom, #E65F2B, #FFC252)",
        }}
        className={`flex flex-col h-screen fixed mr-20 transition-all duration-300 ${
          isSidebarCollapsed ? "w-16" : "w-[240px]"
        } pb-10 h-screen fixed top-0 overflow-x-hidden overflow-y-auto scrollbar-thin scrollbar-thumb-transparent scrollbar-track-transparent`}
      >
        <div className="flex flex-col pr-4 text-white">
          <div className="flex justify-between items-center pt-10 pb-5 pl-4">
            <IoMdMenu
              className="text-white h-[30px] absolute top-4 cursor-pointer"
              onClick={toggleSidebar}
            />
          </div>
          <div>
            {!isSidebarCollapsed && (
              <>
                <div className="flex items-center   w-64 relative top-0 pb-4 px-2">
                  <img
                    src={profileImage}
                    className="rounded-full w-[50px] h-[50px] cursor-pointer"
                    alt="Profile"
                    onClick={triggerFileInput}
                  />
                  <input
                    id="fileInput"
                    type="file"
                    accept="image/*"
                    style={{ display: "none" }}
                    onChange={handleImageUpload}
                  />
                  <p className="text-[16px] leading-4   font-bold text-wrap text-white pb-8 pl-2">
                    {/* Welcome{" "} */}
                    {/* {auth.employee
                      ? auth.employee.firstName.toUpperCase() +
                        " " +
                        auth.employee.lastName.toUpperCase()
                      : "User Name"} */}
                    Admin Name
                  </p>
                </div>
                <div className=" flex relative bottom-10 left-14">
                  <p className="text-[16px] leading-4 text-wrap w-[180px]   text-white pl-2">
                    {/* {auth.employee
                      ? auth.employee.designation
                      : "user designation"} */}
                    Admin Designation
                  </p>
                </div>
              </>
            )}
          </div>
          <div className="flex bg-transparent flex-col">
            {options.map((option, index) => (
              <div
                key={index}
                className={`flex flex-col transition-all my-1 duration-500 cursor-pointer ${
                  activeTab === option.title ||
                  (option.subOptions && openDropdown === option.title)
                    ? "bg-white text-[#e65f2b] rounded-r-3xl"
                    : "hover:bg-white hover:text-[#e65f2b] rounded-r-3xl"
                }`}
                onClick={() => handleOptionClick(option)}
                onMouseOver={(event) => handleMouseOver(event, option.title)}
                onMouseOut={handleMouseOut}
              >
                <div className="p-3 pl-4 text-[16px] flex items-center">
                  {option.icon}
                  {!isSidebarCollapsed && (
                    <span className="ml-3">{option.title}</span>
                  )}
                  {!isSidebarCollapsed && option.subOptions && (
                    <span className="ml-auto">
                      {openDropdown === option.title ? "▲" : "▼"}
                    </span>
                  )}
                </div>

                {option.subOptions && openDropdown === option.title && (
                  <ul className="text-[#e65f2b] pr-2 rounded-br-3xl bg-transparent transition-all duration-1000">
                    {option.subOptions.map((subOption, subIndex) => (
                      <li
                        key={subIndex}
                        className={`py-2 my-1 text-nowrap pl-4 flex items-center cursor-pointer ${
                          activeTab === subOption.name
                            ? "bg-[#e65f2b] bg-opacity-20 rounded-r-full"
                            : "hover:bg-[#e65f2b] hover:bg-opacity-20  hover:rounded-r-full"
                        }`}
                        onClick={(event) =>
                          handleSubOptionClick(event, subOption)
                        }
                        onMouseOver={(event) =>
                          handleSubOptionMouseOver(event, subOption.name)
                        }
                        onMouseOut={handleMouseOut}
                      >
                        {subOption.icon}
                        {!isSidebarCollapsed && (
                          <span className="ml-2">{subOption.name}</span>
                        )}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div
        className={`flex-1 py-4 overflow-y-auto transition-all duration-300 ${
          isSidebarCollapsed ? "ml-16" : "ml-[240px]"
        }`}
      >
        <div className="">
          {activeTab === "Company Settings" && <CompanySettingsNavigation />}
          {activeTab === "Company Information" && <CompanyInformation />}
          {activeTab === "User" && <User />}
          {activeTab === "Roles" && <Roles />}
          {activeTab === "Account Details" && <AccountDetails />}

          {activeTab === "DashBoard" && <Payrolldashboard />}
          {activeTab === "Run payroll" && <RunPayRoll />}
          {activeTab === "Payroll Summary" && <PayRollSummary />}
          {activeTab === "Payroll settings" && <PayRollSettings />}
          {activeTab === "Settlements" && <Settlement />}

          {activeTab === "Payslips" && <PaySlips />}
          {activeTab === "Support" && <Support />}
        </div>
      </div>

      {tooltip.show && (
        <div
          className="absolute bg-white text-[#e65f2b] p-2 rounded-md shadow-lg z-50"
          style={{
            top: `${tooltip.position.y}px`,
            left: `${tooltip.position.x}px`,
          }}
        >
          {tooltip.title}
        </div>
      )}
    </div>
  );
};

export default AdminSideBar;
