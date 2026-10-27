import React, { useState } from "react";
import Select from "react-select";
import LeaveAndHolidaysPolicies from "./Leaves&HolidaysPolicy";
import Employee from "./employee/EmployeeNavigation";
import Shifts from "./Shifts";
import WorkSchedule from "./WorkShedule";
import Notification from "../company_settings/notifications/NotificationNavigation";
import TimeSheet from "./TimeSheet";
import Company from "./company/Company";

function CompanySettingsNavigation() {
  const [activeTab, setActiveTab] = useState("Company");

  const renderComponent = () => {
    switch (activeTab) {
      case "Company":
        return <Company />;
      case "LeaveAndHolidaysPolicies":
        return <LeaveAndHolidaysPolicies />;
      case "Employee":
        return <Employee />;
      case "Shifts":
        return <Shifts />;
      case "WorkSchedule":
        return <WorkSchedule />;
      case "Notification":
        return <Notification />;
      case "TimeSheet":
        return <TimeSheet />;
      default:
        return <LeaveAndHolidaysPolicies />;
    }
  };
  const options = [
    { value: "Company", label: "Company" },
    { value: "LeaveAndHolidaysPolicies", label: "Leave & Holidays Policies" },
    { value: "Employee", label: "Employee" },
    { value: "Shifts", label: "Shifts" },
    { value: "WorkSchedule", label: "Work Schedule" },
    { value: "Notification", label: "Notification" },
    { value: "TimeSheet", label: "TimeSheet" },
  ];
  return (
    <>
      <div
        id="main"
        className="text-[15px] w-auto h-auto text-nowrap p-4 mt-4  "
      >
        <div className="  flex flex-col md:flex-row justify-between">
          <div>
            <span className="text-[#E65F2B] text-sm lg:text-lg font-medium">
              Admin / Company Settings
            </span>
          </div>
        </div>
        <div className="lg:hidden w-auto  mb-4 flex justify-center items-center">
          <Select
            value={options.find((option) => option.value === activeTab)}
            onChange={(selectedOption) => setActiveTab(selectedOption.value)}
            options={options}
            className="w-full"
            classNamePrefix="react-select"
            isSearchable={false}
          />
        </div>
        <div className="hidden lg:flex text-lg h-16 px-4 pr-6 justify-between items-center">
          <div
            className={`w-48 justify-center items-center flex h-16 cursor-pointer ${
              activeTab === "Company" ? "text-[#e65f2b]" : "text-black"
            }`}
            onClick={() => setActiveTab("Company")}
          >
            <span
              className={`${
                activeTab === "Company"
                  ? "border-b-2 border-[#e65f2b]"
                  : "border-none"
              }`}
            >
              Company
            </span>
          </div>
          <div
            className={`w-48 justify-center items-center flex h-16 cursor-pointer ${
              activeTab === "LeaveAndHolidaysPolicies"
                ? "text-[#e65f2b]"
                : "text-black"
            }`}
            onClick={() => setActiveTab("LeaveAndHolidaysPolicies")}
          >
            <span
              className={`${
                activeTab === "LeaveAndHolidaysPolicies"
                  ? "border-b-2 border-[#e65f2b]"
                  : "border-none"
              }`}
            >
              Leave & Holidays Policies
            </span>
          </div>
          <div
            className={`w-48 justify-center items-center flex h-16 cursor-pointer ${
              activeTab === "Employee" ? "text-[#e65f2b]" : "text-black"
            }`}
            onClick={() => setActiveTab("Employee")}
          >
            <span
              className={`${
                activeTab === "Employee"
                  ? "border-b-2 border-[#e65f2b]"
                  : "border-none"
              }`}
            >
              Employee
            </span>
          </div>
          <div
            className={`w-48 justify-center items-center flex h-16 cursor-pointer ${
              activeTab === "Shifts" ? "text-[#e65f2b]" : "text-black"
            }`}
            onClick={() => setActiveTab("Shifts")}
          >
            <span
              className={`${
                activeTab === "Shifts"
                  ? "border-b-2 border-[#e65f2b]"
                  : "border-none"
              }`}
            >
              Shifts
            </span>
          </div>
          <div
            className={`w-48 justify-center items-center flex h-16 cursor-pointer ${
              activeTab === "WorkSchedule" ? "text-[#e65f2b]" : "text-black"
            }`}
            onClick={() => setActiveTab("WorkSchedule")}
          >
            <span
              className={`${
                activeTab === "WorkSchedule"
                  ? "border-b-2 border-[#e65f2b]"
                  : "border-none"
              }`}
            >
              Work Schedule
            </span>
          </div>
          <div
            className={`w-48 justify-center items-center flex h-16 cursor-pointer ${
              activeTab === "Notification" ? "text-[#e65f2b]" : "text-black"
            }`}
            onClick={() => setActiveTab("Notification")}
          >
            <span
              className={`${
                activeTab === "Notification"
                  ? "border-b-2 border-[#e65f2b]"
                  : "border-none"
              }`}
            >
              Notification
            </span>
          </div>
          <div
            className={`w-48 justify-center items-center flex h-16 cursor-pointer ${
              activeTab === "TimeSheet" ? "text-[#e65f2b]" : "text-black"
            }`}
            onClick={() => setActiveTab("TimeSheet")}
          >
            <span
              className={`${
                activeTab === "TimeSheet"
                  ? "border-b-2 border-[#e65f2b]"
                  : "border-none"
              }`}
            >
              TimeSheet
            </span>
          </div>
        </div>
        <div className="mt-4">{renderComponent()}</div>
      </div>
    </>
  );
}

export default CompanySettingsNavigation;
