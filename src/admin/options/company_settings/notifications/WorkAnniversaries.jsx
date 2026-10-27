import React, { useState, useEffect } from "react";
import { FaPencilAlt } from "react-icons/fa";

const initialEmail = "workanniversaries@company.com";

function WorkAnniversaries() {
  const [email, setEmail] = useState(initialEmail);
  const [editing, setEditing] = useState(false);
  const [isEmailUpdated, setIsEmailUpdated] = useState(false); // Track if the email has been updated

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleEdit = () => {
    setEditing(true);
  };

  const handleBlur = () => {
    setEditing(false);
    setIsEmailUpdated(true); // Mark that the email was updated
  };

  useEffect(() => {
    if (isEmailUpdated) {
      logActivity(`Updated email to: ${email}`);
      setIsEmailUpdated(false); // Reset the flag after logging
    }
  }, [isEmailUpdated, email]); // Log only when isEmailUpdated is true

  const logActivity = (action) => {
    const timestamp = new Date().toLocaleString();
    const admin = "Mounika Ch";
    const activity = { timestamp, admin, action };

    let activityLog =
      JSON.parse(localStorage.getItem("activityLogWorkAnniversaryMail")) || [];
    activityLog.push(activity);
    localStorage.setItem(
      "activityLogWorkAnniversaryMail",
      JSON.stringify(activityLog)
    );
  };

  return (
    // <div className="ml-20 mt-4 p-5">
    //   <div className="flex items-center mb-2 justify-between">
    //     <label className="w-48 font-semibold text-[#e65f2b]">
    //       Recipient (Email)
    //     </label>
    //     <div className="flex w-96 items-center border border-[#e65f2b] rounded-md p-2">
    //       <input
    //         type="text"
    //         value={email}
    //         onChange={handleEmailChange}
    //         onBlur={handleBlur}
    //         readOnly={!editing}
    //         className={`flex-1 w-96 text-[#e65f2b] bg-transparent focus:outline-none ${
    //           editing ? "border-b-2 border-[#e65f2b]" : "cursor-pointer"
    //         }`}
    //       />
    //       <FaPencilAlt
    //         className="ml-2 text-[#e65f2b] cursor-pointer"
    //         onClick={handleEdit}
    //       />
    //     </div>
    //   </div>
    // </div>
    <div className="lg:ml-20 mt-4 p-2">
      <div className="flex flex-col sm:flex-row sm:items-center mb-2 justify-between">
        <label className="w-full sm:w-48 font-semibold text-lg text-[#e65f2b] mb-2 sm:mb-0">
          Recipient (Email)
        </label>
        <div className="flex w-full sm:w-96 items-center border border-[#e65f2b] rounded-md p-2">
          <input
            type="text"
            value={email}
            onChange={handleEmailChange}
            onBlur={handleBlur}
            readOnly={!editing}
            className={`flex-1 w-full sm:w-96 text-[#e65f2b] bg-transparent focus:outline-none ${
              editing ? "border-b-2 border-[#e65f2b]" : "cursor-pointer"
            }`}
          />
          <FaPencilAlt
            className="ml-2 text-[#e65f2b] cursor-pointer"
            onClick={handleEdit}
          />
        </div>
      </div>
    </div>
  );
}

export default WorkAnniversaries;
