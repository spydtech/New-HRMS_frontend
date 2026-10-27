/* eslint-disable react/prop-types */
import React, { useState, useEffect } from "react";
import {
  FaTasks,
  FaUserFriends,
  FaChevronDown,
  FaChevronUp,
  FaUsers,
  FaClipboardList,
} from "react-icons/fa";
import { TiMessages } from "react-icons/ti";
import { GoProjectSymlink, GoProjectRoadmap } from "react-icons/go";
import { GrProjects } from "react-icons/gr";
import { TbListDetails } from "react-icons/tb";
import { GrDashboard } from "react-icons/gr";

const ForProjectSidebar = ({
  isSidebarCollapsed,
  activeTab,
  setActiveTab,
  handleMouseOver,
  handleMouseOut,
}) => {
  const [showProjectOptions, setShowProjectOptions] = useState(false);

  const projectOptions = [
    { title: "Dashboard", icon: <GrDashboard /> },
    // { title: "Inbox", icon: <FaFileAlt /> },
    // { title: "Chat", icon: <TiMessages /> },
    { title: "Project", icon: <FaTasks />, hasSubOptions: true },
    { title: "Clients", icon: <FaUserFriends /> },
    { title: "Teams", icon: <FaUsers /> },
    { title: "Tickets", icon: <FaClipboardList /> },
  ];

  const projectDropdownOptions = [
    { title: "Add Project", icon: <GoProjectSymlink /> },
    { title: "Project List", icon: <GoProjectRoadmap /> },
    { title: "Project Grid", icon: <GrProjects /> },
    { title: "Project Detail", icon: <TbListDetails /> },
  ];

  useEffect(() => {
    const isProjectOption = projectDropdownOptions.find(
      (op) => op.title === activeTab
    );
    isProjectOption && setShowProjectOptions(!!isProjectOption);
  }, [activeTab]);

  const handleOptionClick = (option) => {
    if (option.hasSubOptions) {
      setShowProjectOptions(!showProjectOptions);
    } else {
      localStorage.setItem("HR_ACTIVE_TAB", option.title);
      setActiveTab(option.title);
    }
  };

  return (
    <div className="pr-2">
      <ul className="pt-3 pr-1">
        {projectOptions.map((option) => (
          <React.Fragment key={option.title}>
            <li
              className={`flex justify-between text-[16px] pl-5 py-3 mb-1 items-center cursor-pointer ${
                activeTab === option.title
                  ? "bg-white rounded-r-full text-[#0098f1]"
                  : "hover:bg-white hover:text-[#0098f1] hover:rounded-r-full"
              }`}
              onClick={() => handleOptionClick(option)}
              onMouseOver={(event) => handleMouseOver(event, option.title)}
              onMouseOut={handleMouseOut}
            >
              <div className="flex items-center">
                {option.icon}
                <span
                  className={`pl-2 ${isSidebarCollapsed ? "hidden" : "inline"}`}
                >
                  {option.title}
                </span>
              </div>
              {!isSidebarCollapsed && option.hasSubOptions && (
                <span className="pr-5">
                  {showProjectOptions ? <FaChevronUp /> : <FaChevronDown />}
                </span>
              )}
            </li>
            {option.title === "Project" && showProjectOptions && (
              <ul className="">
                {projectDropdownOptions.map((dropdownOption) => (
                  <li
                    key={dropdownOption.title}
                    className={`flex text-[16px] pl-6 py-2 mb-1 items-center cursor-pointer ${
                      activeTab === dropdownOption.title
                        ? "bg-white bg-opacity-50 rounded-r-full text-[#0098f1]"
                        : "hover:bg-white hover:bg-opacity-50 hover:text-[#0098f1] hover:rounded-r-full"
                    }`}
                    onClick={() => {
                      localStorage.setItem(
                        "HR_ACTIVE_TAB",
                        dropdownOption.title
                      );
                      setActiveTab(dropdownOption.title);
                    }}
                    onMouseOver={(event) =>
                      handleMouseOver(event, dropdownOption.title)
                    }
                    onMouseOut={handleMouseOut}
                  >
                    {dropdownOption.icon}
                    <span
                      className={`pl-2 ${
                        isSidebarCollapsed ? "hidden" : "inline"
                      }`}
                    >
                      {dropdownOption.title}
                    </span>
                  </li>
                ))}
              </ul>
            )}
          </React.Fragment>
        ))}
      </ul>
    </div>
  );
};

export default ForProjectSidebar;
