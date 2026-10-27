// import React, { useState } from "react";
// import { FaPencilAlt } from "react-icons/fa";

// const initialEmails = {
//   leaves: "leaves@company.com",
//   timesheets: "timesheets@company.com",
//   payroll: "payroll@company.com",
//   expenses: "expenses@company.com",
//   projects: "projects@company.com",
//   itDeclarations: "it@company.com",
//   employees: "employees@company.com",
//   employeeCompensation: "compensation@company.com",
//   employeeOnboarding: "onboarding@company.com",
//   companyPolicy: "policy@company.com",
// };

// function ReplyToEmail() {
//   const [emails, setEmails] = useState(initialEmails);
//   const [editingField, setEditingField] = useState(null);

//   const handleEmailChange = (e, field) => {
//     setEmails({ ...emails, [field]: e.target.value });
//   };

//   const handleEdit = (field) => {
//     setEditingField(field);
//   };

//   const handleBlur = (field) => {
//     setEditingField(null);
//     logActivity(`Updated email for ${field}`);
//   };

//   const logActivity = (action) => {
//     const timestamp = new Date().toLocaleString();
//     const admin = "Mounika Ch"; // Default admin name
//     const activity = { timestamp, admin, action };

//     let activityLog =
//       JSON.parse(localStorage.getItem("activityLogReplyMail")) || [];
//     activityLog.push(activity);
//     localStorage.setItem("activityLogReplyMail", JSON.stringify(activityLog));
//   };

//   const renderInputField = (label, field) => (
//     <div className="flex items-center mb-2 justify-between">
//       <label className="w-48 font-semibold text-[#e65f2b]">{label}</label>
//       <div className="flex w-96 items-center border border-[#e65f2b] rounded-md p-2">
//         <input
//           type="text"
//           value={emails[field]}
//           onChange={(e) => handleEmailChange(e, field)}
//           onBlur={() => handleBlur(field)}
//           readOnly={editingField !== field}
//           className={`flex-1 w-96 text-[#e65f2b] bg-transparent focus:outline-none ${
//             editingField === field
//               ? "border-b-2 border-[#e65f2b]"
//               : "cursor-pointer"
//           }`}
//         />
//         <FaPencilAlt
//           className="ml-2 text-[#e65f2b] cursor-pointer"
//           onClick={() => handleEdit(field)}
//         />
//       </div>
//     </div>
//   );

//   return (
//     <div className="ml-20 p-5">
//       {renderInputField("Leaves", "leaves")}
//       {renderInputField("Timesheets", "timesheets")}
//       {renderInputField("Payroll", "payroll")}
//       {renderInputField("Expenses", "expenses")}
//       {renderInputField("Projects", "projects")}
//       {renderInputField("IT Declarations", "itDeclarations")}
//       {renderInputField("Employees", "employees")}
//       {renderInputField("Employee Compensation", "employeeCompensation")}
//       {renderInputField("Employee Onboarding", "employeeOnboarding")}
//       {renderInputField("Company Policy", "companyPolicy")}
//     </div>
//   );
// }

// export default ReplyToEmail;
import React, { useState } from "react";
import { FaPencilAlt } from "react-icons/fa";

const initialEmails = {
  leaves: "leaves@company.com",
  timesheets: "timesheets@company.com",
  payroll: "payroll@company.com",
  expenses: "expenses@company.com",
  projects: "projects@company.com",
  itDeclarations: "it@company.com",
  employees: "employees@company.com",
  employeeCompensation: "compensation@company.com",
  employeeOnboarding: "onboarding@company.com",
  companyPolicy: "policy@company.com",
};

function ReplyToEmail() {
  const [emails, setEmails] = useState(initialEmails);
  const [editingField, setEditingField] = useState(null);

  const handleEmailChange = (e, field) => {
    setEmails({ ...emails, [field]: e.target.value });
  };

  const handleEdit = (field) => {
    setEditingField(field);
  };

  const handleBlur = (field) => {
    setEditingField(null);
    logActivity(`Updated email for ${field}`);
  };

  const logActivity = (action) => {
    const timestamp = new Date().toLocaleString();
    const admin = "Mounika Ch"; // Default admin name
    const activity = { timestamp, admin, action };

    let activityLog =
      JSON.parse(localStorage.getItem("activityLogReplyMail")) || [];
    activityLog.push(activity);
    localStorage.setItem("activityLogReplyMail", JSON.stringify(activityLog));
  };

  const renderInputField = (label, field) => (
    <div className="flex flex-col md:flex-row sm:items-center mb-2 justify-between">
      <label className="w-full  font-semibold text-[#e65f2b] mb-2 sm:mb-0">
        {label}
      </label>
      <div className="flex   w-full sm:w-96 items-center border border-[#e65f2b] rounded-md p-2">
        <input
          type="text"
          value={emails[field]}
          onChange={(e) => handleEmailChange(e, field)}
          onBlur={() => handleBlur(field)}
          readOnly={editingField !== field}
          className={`flex-1 w-full sm:w-96 text-[#e65f2b] bg-transparent focus:outline-none ${
            editingField === field
              ? "border-b-2 border-[#e65f2b]"
              : "cursor-pointer"
          }`}
        />
        <FaPencilAlt
          className="ml-2 text-[#e65f2b] cursor-pointer"
          onClick={() => handleEdit(field)}
        />
      </div>
    </div>
  );

  return (
    <div className="lg:ml-20 mt-4 p-2">
      {renderInputField("Leaves", "leaves")}
      {renderInputField("Timesheets", "timesheets")}
      {renderInputField("Payroll", "payroll")}
      {renderInputField("Expenses", "expenses")}
      {renderInputField("Projects", "projects")}
      {renderInputField("IT Declarations", "itDeclarations")}
      {renderInputField("Employees", "employees")}
      {renderInputField("Employee Compensation", "employeeCompensation")}
      {renderInputField("Employee Onboarding", "employeeOnboarding")}
      {renderInputField("Company Policy", "companyPolicy")}
    </div>
  );
}

export default ReplyToEmail;
