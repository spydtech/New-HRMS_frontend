import React, { useState } from "react";
import { FaPlusCircle } from "react-icons/fa";
import { LuMessagesSquare } from "react-icons/lu";
import {
  AiOutlineEnvironment,
  AiOutlineAppstore,
  AiOutlineTeam,
  AiOutlineUser,
  AiOutlineMessage,
} from "react-icons/ai"; // Icons for small screens
import WorkLocations from "./WorkLocations";
import Departments from "./Departments";
import CostCenters from "./CostCenters";
import CompanyLogo from "./CompanyLogo";
import EmployeeFeedback from "./EmployeeFeedback";
import { format } from "date-fns";

const NavigationItem = ({ item, isActive, onClick, icon }) => (
  <div
    onClick={onClick}
    className={`flex items-center  justify-center h-12  cursor-pointer ${
      isActive
        ? "bg-gradient-to-r from-[#E65F2B] w-auto to-[#FFC252] rounded-lg text-white text-center"
        : "bg-white rounded-lg text-[#e65f2b]"
    } sm:flex-col sm:items-center sm:justify-center`}
    role="button"
    aria-label={item}
    aria-selected={isActive}
  >
    {/* Show text labels on large screens */}
    <span className="hidden sm:inline sm:text-center   sm:w-full">{item}</span>
    {/* Show icons on small screens */}
    <span className="flex sm:hidden text-xl p-2 items-center justify-center w-full h-full">
      {icon}
    </span>
  </div>
);

const Company = () => {
  const [activeLeftItem, setActiveLeftItem] = useState("Work Locations");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activities, setActivities] = useState({
    "Work Locations": [],
    Departments: [],
    "Cost Centers": [],
    "Company Logo": [],
    "Employee Feedback": [],
  });

  const adminName = "Mounika";

  const handleLeftItemClick = (item) => {
    setActiveLeftItem(item);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const logActivity = (section, updatedMessage) => {
    const now = new Date();
    const date = format(now, "dd/MM/yyyy");
    const time = format(now, "hh:mm:ss a");

    setActivities((prevActivities) => ({
      ...prevActivities,
      [section]: [
        {
          adminName,
          updated: updatedMessage,
          date,
          time,
        },
        ...prevActivities[section],
      ],
    }));
  };

  return (
    <div className="min-h-screen   flex flex-col ">
      {/* Conditionally render the Add button */}
      {(activeLeftItem === "Work Locations" ||
        activeLeftItem === "Departments" ||
        activeLeftItem === "Cost Centers") && (
        <div className="flex justify-end mb-4">
          <button
            onClick={() => setIsModalOpen(true)}
            className="flex items-center text-sm md:text-lg bg-[#E65F2B] to-[#FFC252] text-white p-2  px-3 justify-center rounded-lg hover:from-[#d4551a] hover:to-[#ffc107] focus:outline-none focus:ring-2 focus:ring-[#E65F2B]"
          >
            <FaPlusCircle
              className="md:text-xl text-lg mr-2"
              aria-hidden="true"
            />
            Add New
          </button>
        </div>
      )}

      <div className="flex flex-1 flex-col sm:flex-row">
        {/* Left Navigation Panel */}
        <div className="w-full sm:w-1/4 p-4   h-auto sm:p-0 flex flex-col">
          <div className="relative flex-grow">
            {/* Navigation items */}
            <div className="flex flex-row flex-wrap justify-between sm:flex-col sm:space-y-2">
              {[
                { name: "Work Locations", icon: <AiOutlineEnvironment /> },
                { name: "Departments", icon: <AiOutlineAppstore /> },
                { name: "Cost Centers", icon: <AiOutlineTeam /> },
                { name: "Company Logo", icon: <AiOutlineUser /> },
                { name: "Employee Feedback", icon: <AiOutlineMessage /> },
              ].map(({ name, icon }) => (
                <NavigationItem
                  key={name}
                  item={name}
                  isActive={activeLeftItem === name}
                  onClick={() => handleLeftItemClick(name)}
                  icon={icon}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Content Area */}
        <div className="w-full sm:w-3/4  p-4 flex flex-col flex-grow">
          {activeLeftItem === "Work Locations" && (
            <WorkLocations
              isModalOpen={isModalOpen}
              setIsModalOpen={setIsModalOpen}
              logActivity={(message) => logActivity("Work Locations", message)}
            />
          )}
          {activeLeftItem === "Departments" && (
            <Departments
              isModalOpen={isModalOpen}
              setIsModalOpen={setIsModalOpen}
              logActivity={(message) => logActivity("Departments", message)}
            />
          )}
          {activeLeftItem === "Cost Centers" && (
            <CostCenters
              isModalOpen={isModalOpen}
              setIsModalOpen={setIsModalOpen}
              logActivity={(message) => logActivity("Cost Centers", message)}
            />
          )}
          {activeLeftItem === "Company Logo" && (
            <CompanyLogo
              isModalOpen={isModalOpen}
              setIsModalOpen={setIsModalOpen}
              logActivity={(message) => logActivity("Company Logo", message)}
            />
          )}
          {activeLeftItem === "Employee Feedback" && (
            <EmployeeFeedback
              logActivity={(message) =>
                logActivity("Employee Feedback", message)
              }
            />
          )}
        </div>
      </div>

      <div className="mt-8">
        <h1 className="flex items-center text-[#E65F2B] text-xl font-semibold ml-4">
          <LuMessagesSquare className="text-2xl mr-2" aria-hidden="true" />
          Activities
        </h1>
        <hr className="my-2 border-t-1 border-[#E65F2B]" />
        <div className="p-4 text-gray-700">
          {activities[activeLeftItem].length === 0 ? (
            <p>No recent activities.</p>
          ) : (
            <ul>
              {activities[activeLeftItem].map((activity, index) => (
                <li key={index} className="mb-4 flex items-start space-x-3">
                  <div className="flex-shrink-0">
                    {/* Placeholder logo with an 'S' */}
                    <div className="w-8 h-8 flex items-center justify-center bg-[#E65F2B] text-white rounded-full">
                      <span className="text-xl font-semibold">S</span>
                    </div>
                  </div>
                  <div className="flex-grow">
                    <p className="font-semibold text-[#E65F2B]">
                      {activity.adminName}
                    </p>
                    <p>{activity.updated}</p>
                    <p className="text-gray-500 text-sm">
                      {activity.date} | {activity.time}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default Company;
