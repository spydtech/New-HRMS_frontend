import React from "react";
import { IoIosInformationCircleOutline } from "react-icons/io";

function TimeSheet() {
  return (
    <div className="flex gap-2 ml-4 min-h-screen ">
      <IoIosInformationCircleOutline className="text-[#E65F2B] text-[26px]" />
      <p className="text-[#E65F2B] text-wrap">
        Here you can configure timesheet notifications, Department based
        Timesheet, Project Based Timesheets and Type of Hours.
        <a className="text-blue-600">Click here</a> to subscribe Timesheet
        Management Service.
      </p>
    </div>
  );
}

export default TimeSheet;
