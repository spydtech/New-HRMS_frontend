// import React, { useState, useEffect } from "react";
// import Select, { components } from "react-select";

// const roleOptions = [
//   { value: "selectAll", label: "Select All" }, // "Select All" option
//   { value: "admin", label: "Admin" },
//   { value: "superadmin", label: "Superadmin" },
//   { value: "hr", label: "HR" },
// ];

// const CheckboxOption = (props) => {
//   return (
//     <components.Option {...props}>
//       <input
//         type="checkbox"
//         checked={props.isSelected}
//         onChange={() => null}
//         className="mr-2"
//       />
//       <label>{props.label}</label>
//     </components.Option>
//   );
// };

// function BillingNotification() {
//   const [selectedRoles, setSelectedRoles] = useState([]);
//   const [emails, setEmails] = useState([]);
//   const [emailInput, setEmailInput] = useState("");

//   const handleRoleChange = (selectedOptions) => {
//     if (selectedOptions?.find((option) => option.value === "selectAll")) {
//       if (selectedRoles.length === roleOptions.length - 1) {
//         setSelectedRoles([]);
//         logActivity("Deselected all roles");
//       } else {
//         setSelectedRoles(
//           roleOptions.filter((role) => role.value !== "selectAll")
//         );
//         logActivity("Selected all roles");
//       }
//     } else {
//       setSelectedRoles(selectedOptions ? selectedOptions : []);
//       logActivity("Role selection changed");
//     }
//   };

//   const handleEmailInputChange = (e) => {
//     setEmailInput(e.target.value);
//   };

//   const validateEmail = (email) => {
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     return emailRegex.test(email);
//   };

//   const handleEmailAdd = () => {
//     if (
//       emailInput &&
//       validateEmail(emailInput) &&
//       !emails.includes(emailInput.trim())
//     ) {
//       setEmails([...emails, emailInput.trim()]);
//       setEmailInput("");
//       logActivity(`Added email: ${emailInput.trim()}`);
//     } else {
//       alert("Please enter a valid email address.");
//     }
//   };

//   const removeEmail = (emailToRemove) => {
//     setEmails(emails.filter((email) => email !== emailToRemove));
//     logActivity(`Removed email: ${emailToRemove}`);
//   };

//   const logActivity = (action) => {
//     const timestamp = new Date().toLocaleString();
//     const admin = "Mounika Ch";
//     const activity = { timestamp, admin, action };

//     let activityLog =
//       JSON.parse(localStorage.getItem("activityLogBilling")) || [];
//     activityLog.push(activity);
//     localStorage.setItem("activityLogBilling", JSON.stringify(activityLog));
//   };

//   return (
//     <div className="lg:ml-20 mt-4 mx-auto p-5 text-[#e65f2b] gap-y-10">
//       <div className="flex justify-between items-center">
//         <label className="block">Notification Recipient (Roles):</label>
//         <div className="flex w-96 border border-[#e65f2b] rounded-md p-2 min-h-[40px]">
//           {selectedRoles.map((role) => (
//             <div
//               key={role.value}
//               className="flex items-center bg-transparent border border-[#e65f2b] px-3 py-1 rounded-lg mr-2 mb-2"
//             >
//               {role.label}
//               <button
//                 className="ml-2 text-[#e65f2b] focus:outline-none"
//                 onClick={() =>
//                   setSelectedRoles(
//                     selectedRoles.filter((r) => r.value !== role.value)
//                   )
//                 }
//               >
//                 &times;
//               </button>
//             </div>
//           ))}
//         </div>
//       </div>
//       <div className="flex pt-10 justify-end items-center">
//         <Select
//           isMulti
//           options={roleOptions}
//           value={selectedRoles}
//           onChange={handleRoleChange}
//           components={{ Option: CheckboxOption }}
//           closeMenuOnSelect={false}
//           hideSelectedOptions={false}
//           styles={{
//             control: (provided) => ({
//               ...provided,
//               borderColor: "#e65f2b",
//               boxShadow: "none",
//               "&:hover": { borderColor: "#e65f2b" },
//             }),
//             option: (provided, state) => ({
//               ...provided,
//               backgroundColor: state.isSelected
//                 ? "#e65f2b"
//                 : state.isFocused
//                 ? "#f0f0f0"
//                 : "#fff",
//               color: state.isSelected ? "#fff" : "#000",
//               "&:active": {
//                 backgroundColor: "#d35400",
//               },
//             }),
//             multiValue: (provided) => ({
//               ...provided,
//               backgroundColor: "#e65f2b",
//               color: "#fff",
//             }),
//             multiValueLabel: (provided) => ({
//               ...provided,
//               color: "#fff",
//             }),
//             multiValueRemove: (provided) => ({
//               ...provided,
//               color: "#fff",
//               "&:hover": {
//                 backgroundColor: "#d35400",
//                 color: "#fff",
//               },
//             }),
//           }}
//           className="mb-5 w-96"
//         />
//       </div>

//       <div className="mt-5">
//         <div className="flex border-[#e65f2b] border-[1px] py-5 mx-auto mr-0 w-96 mb-3 rounded-md p-2 ">
//           {emails.map((email, index) => (
//             <div
//               key={index}
//               className="flex items-center  bg-green-500 text-white px-3 py-1  mr-2 "
//             >
//               {email}
//               <button
//                 className="ml-2 text-white focus:outline-none"
//                 onClick={() => removeEmail(email)}
//               >
//                 &times;
//               </button>
//             </div>
//           ))}
//         </div>
//         <div className="flex justify-between items-center">
//           <label className="block">Notification Recipient (Email):</label>
//           <div className="flex mb-3">
//             <input
//               type="text"
//               value={emailInput}
//               onChange={handleEmailInputChange}
//               onBlur={handleEmailAdd}
//               placeholder="Enter email"
//               className="flex-1 p-2 border-[1px] border-[#e65f2b] w-96  rounded-lg focus:outline-[#e65f2b]"
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default BillingNotification;
import React, { useState } from "react";
import Select, { components } from "react-select";

const roleOptions = [
  { value: "selectAll", label: "Select All" },
  { value: "admin", label: "Admin" },
  { value: "superadmin", label: "Superadmin" },
  { value: "hr", label: "HR" },
];

const CheckboxOption = (props) => (
  <components.Option {...props}>
    <input
      type="checkbox"
      checked={props.isSelected}
      onChange={() => null}
      className="mr-2"
    />
    <label>{props.label}</label>
  </components.Option>
);

function BillingNotification() {
  const [selectedRoles, setSelectedRoles] = useState([]);
  const [emails, setEmails] = useState([]);
  const [emailInput, setEmailInput] = useState("");

  const handleRoleChange = (selectedOptions) => {
    if (selectedOptions?.find((option) => option.value === "selectAll")) {
      if (selectedRoles.length === roleOptions.length - 1) {
        setSelectedRoles([]);
        logActivity("Deselected all roles");
      } else {
        setSelectedRoles(
          roleOptions.filter((role) => role.value !== "selectAll")
        );
        logActivity("Selected all roles");
      }
    } else {
      setSelectedRoles(selectedOptions ? selectedOptions : []);
      logActivity("Role selection changed");
    }
  };

  const handleEmailInputChange = (e) => {
    setEmailInput(e.target.value);
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleEmailAdd = () => {
    if (
      emailInput &&
      validateEmail(emailInput) &&
      !emails.includes(emailInput.trim())
    ) {
      setEmails([...emails, emailInput.trim()]);
      setEmailInput("");
      logActivity(`Added email: ${emailInput.trim()}`);
    } else {
      alert("Please enter a valid email address.");
    }
  };

  const removeEmail = (emailToRemove) => {
    setEmails(emails.filter((email) => email !== emailToRemove));
    logActivity(`Removed email: ${emailToRemove}`);
  };

  const logActivity = (action) => {
    const timestamp = new Date().toLocaleString();
    const admin = "Mounika Ch";
    const activity = { timestamp, admin, action };

    let activityLog =
      JSON.parse(localStorage.getItem("activityLogBilling")) || [];
    activityLog.push(activity);
    localStorage.setItem("activityLogBilling", JSON.stringify(activityLog));
  };

  return (
    <div className="lg:ml-20 mt-4 mx-auto p-4 text-[#e65f2b] gap-y-10 ">
      <div className="flex flex-col lg:flex-row justify-between items-center">
        <label className="block mb-2 lg:mb-0">
          Notification Recipient (Roles):
        </label>
        <div className="flex w-full lg:w-96 border border-[#e65f2b] rounded-md p-2 min-h-[40px] flex-wrap">
          {selectedRoles.map((role) => (
            <div
              key={role.value}
              className="flex items-center bg-transparent border border-[#e65f2b] px-3 py-1 rounded-lg mr-2 mb-2"
            >
              {role.label}
              <button
                className="ml-2 text-[#e65f2b] focus:outline-none"
                onClick={() =>
                  setSelectedRoles(
                    selectedRoles.filter((r) => r.value !== role.value)
                  )
                }
              >
                &times;
              </button>
            </div>
          ))}
        </div>
      </div>

      <div className="flex pt-10 justify-end items-center">
        <Select
          isMulti
          options={roleOptions}
          value={selectedRoles}
          onChange={handleRoleChange}
          components={{ Option: CheckboxOption }}
          closeMenuOnSelect={false}
          hideSelectedOptions={false}
          styles={{
            control: (provided) => ({
              ...provided,
              borderColor: "#e65f2b",
              boxShadow: "none",
              "&:hover": { borderColor: "#e65f2b" },
            }),
            option: (provided, state) => ({
              ...provided,
              backgroundColor: state.isSelected
                ? "#e65f2b"
                : state.isFocused
                ? "#f0f0f0"
                : "#fff",
              color: state.isSelected ? "#fff" : "#000",
              "&:active": {
                backgroundColor: "#d35400",
              },
            }),
            multiValue: (provided) => ({
              ...provided,
              backgroundColor: "#e65f2b",
              color: "#fff",
            }),
            multiValueLabel: (provided) => ({
              ...provided,
              color: "#fff",
            }),
            multiValueRemove: (provided) => ({
              ...provided,
              color: "#fff",
              "&:hover": {
                backgroundColor: "#d35400",
                color: "#fff",
              },
            }),
          }}
          className="mb-5 w-full lg:w-96"
        />
      </div>

      <div className="mt-5">
        <div className="flex border-[#e65f2b] border-[1px] py-5 mx-auto mr-0 w-full lg:w-96 mb-3 rounded-md p-2 flex-wrap">
          {emails.map((email, index) => (
            <div
              key={index}
              className="flex items-center bg-green-500 text-white px-3 py-1 mr-2 mb-2"
            >
              {email}
              <button
                className="ml-2 text-white focus:outline-none"
                onClick={() => removeEmail(email)}
              >
                &times;
              </button>
            </div>
          ))}
        </div>

        <div className="flex flex-col lg:flex-row justify-between items-center">
          <label className="block mb-2 lg:mb-0">
            Notification Recipient (Email):
          </label>
          <div className="flex w-full lg:w-96">
            <input
              type="text"
              value={emailInput}
              onChange={handleEmailInputChange}
              onBlur={handleEmailAdd}
              placeholder="Enter email"
              className="flex-1 p-2 border-[1px] border-[#e65f2b] w-full lg:w-96 rounded-lg focus:outline-[#e65f2b]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default BillingNotification;
