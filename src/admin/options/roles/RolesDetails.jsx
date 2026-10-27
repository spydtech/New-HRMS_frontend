import React from "react";
import Payroll from "./Payroll";
import Attendance from "./Attendance";
import Etds from "./Etds";
import Employees from "./Employees";
import HrRequests from "./HrRequests";
import Administration from "./Administration";

const RolesDetails = ({ selectedRole }) => {
  const isHrManagerSelected = selectedRole === "HR Manager";
  const isPayrollManagerSelected = selectedRole === "Payroll Manager";
  const isSuperAdminSelected = selectedRole === "Super Admin";
  return (
    <div>
      <div className="flex justify-end mr-5 my-3">
        <button
          type="button"
          className="bg-green-600 px-3 py-2 text-white text-xs"
        >
          Make Copy
        </button>
      </div>
      <div className="my-5 grid grid-cols-1 gap-y-4 md:grid-cols-2 md:gap-x-20 md:gap-y-8 lg:grid-cols-3 lg:gap-x-32  md:mr-5">
        <Payroll
          isHrManagerSelected={isHrManagerSelected}
          isPayrollManagerSelected={isPayrollManagerSelected}
          isSuperAdminSelected={isSuperAdminSelected}
        />
        <Attendance
          isHrManagerSelected={isHrManagerSelected}
          isPayrollManagerSelected={isPayrollManagerSelected}
          isSuperAdminSelected={isSuperAdminSelected}
        />
        <Etds isSuperAdminSelected={isSuperAdminSelected} />
        <Employees
          isHrManagerSelected={isHrManagerSelected}
          isPayrollManagerSelected={isPayrollManagerSelected}
          isSuperAdminSelected={isSuperAdminSelected}
        />
        <HrRequests
          isHrManagerSelected={isHrManagerSelected}
          selectedRole={selectedRole}
          isPayrollManagerSelected={isPayrollManagerSelected}
          isSuperAdminSelected={isSuperAdminSelected}
        />
        <Administration isSuperAdminSelected={isSuperAdminSelected}/>
      </div>
    </div>
  );
};

export default RolesDetails;






