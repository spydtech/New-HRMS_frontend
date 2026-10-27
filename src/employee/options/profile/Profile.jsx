// /* eslint-disable no-unused-vars */
// import { useState } from "react";
// import { FiEdit } from "react-icons/fi";
// import { MdCancelPresentation } from "react-icons/md";
// import Education from "./Education";
// import Documents from "./Documents";
// import UpdatePassword from "./UpdatePassword"; // Import the new component
// import OfficialInformation from "./OfficialInformation";
// import { FaUser, FaBriefcase, FaFile, FaLock } from "react-icons/fa";
// import { useSelector } from "react-redux";
// import axios from "axios";
// //import { API_BASE_URL } from "../../../Config/api";

// const Profile = () => {
//   // State for active tab
//   const [activeTab, setActiveTab] = useState("personal");

//   // State for modal visibility
//   const [isContactModalOpen, setIsContactModalOpen] = useState(false);
//   const [isDocumentsModalOpen, setIsDocumentsModalOpen] = useState(false);
//   const auth = useSelector((state) => state.auth);
//   const jwtToken = localStorage.getItem("employeeJwt");

//   // State for form values
//   const [personalInfo, setPersonalInfo] = useState({
//     employeeId: auth.employee?.employeeId,
//     firstName: auth.employee?.firstName,
//     lastName: auth.employee?.lastName,
//     bloodGroup: auth.employee?.bloodGroup,
//     dob: auth.employee?.dob,
//     officialEmail: auth.employee?.email,
//   });

//   const [contactInfo, setContactInfo] = useState({
//     personalEmail: auth.employee?.personalEmail,
//     phoneNumber: auth.employee?.phoneNumber,
//     alternatePhone: auth.employee?.alternatePhoneNumber,
//   });

//   const handleOpenContactModal = () => setIsContactModalOpen(true);
//   const handleCloseContactModal = () => setIsContactModalOpen(false);

//   const handleOpenDocumentsModal = () => setIsDocumentsModalOpen(true);
//   const handleCloseDocumentsModal = () => setIsDocumentsModalOpen(false);

//   // Handler for form value changes
//   const handleChangeContactInfo = (e) => {
//     const { id, value } = e.target;
//     setContactInfo((prev) => ({ ...prev, [id]: value }));
//   };

//   const handleSaveContactInfo = async () => {
//     try {
//       const response = await axios.put(
//         `${API_BASE_URL}/employee/update/${personalInfo.employeeId}`, // Use the employeeId to target the specific employee
//         {
//           personalEmail: contactInfo.personalEmail,
//           phoneNumber: contactInfo.phoneNumber,
//           alternatePhoneNumber: contactInfo.alternatePhone,
//         },
//         {
//           headers: {
//             Authorization: `Bearer ${jwtToken}`,
//           },
//         }
//       );

//       if (response.status === 200) {
//         alert("Contact information updated successfully!");
//         // You can also update the local state or refetch employee data after successful update.
//       } else {
//         alert("Failed to update contact information.");
//       }
//     } catch (error) {
//       console.error("Error updating contact information:", error);
//       alert("An error occurred while updating contact information.");
//     }

//     handleCloseContactModal(); // Close the modal after saving
//   };

//   const navHeight = "60px";

//   return (
//     <div className="min-h-screen p-4 mt-4">
//       <div className="  flex flex-col md:flex-row justify-between">
//         <div>
//           <span className=" text-[#2A546D] text-sm lg:text-lg font-medium">
//             Employee / Profile
//           </span>
//         </div>
//       </div>

//       <nav
//         className="bg-[#2A546D] mx-0 md:mx-10 flex m-5"
//         style={{ height: navHeight }}
//       >
//         {/* Desktop View */}
//         <div className="hidden lg:flex flex-grow">
//           {["personal", "official", "documents", "password"].map((tab) => (
//             <div
//               key={tab}
//               className={`flex-grow flex items-center justify-center cursor-pointer transition-colors duration-300 text-lg ${
//                 activeTab === tab ? "bg-white text-black" : "text-white"
//               }`}
//               style={{ height: navHeight }}
//               onClick={() => setActiveTab(tab)}
//             >
//               {tab === "personal" && "Personal Information"}
//               {tab === "official" && "Official Information"}
//               {tab === "documents" && "Documents"}
//               {tab === "password" && "Update Password"}
//             </div>
//           ))}
//         </div>

//         {/* Mobile View */}
//         <div className="flex lg:hidden flex-grow ">
//           {[
//             { tab: "personal", icon: <FaUser /> },
//             { tab: "official", icon: <FaBriefcase /> },
//             { tab: "documents", icon: <FaFile /> },
//             { tab: "password", icon: <FaLock /> },
//           ].map(({ tab, icon }) => (
//             <div
//               key={tab}
//               className={`flex-grow flex items-center justify-center cursor-pointer transition-colors duration-300 text-2xl ${
//                 activeTab === tab ? "bg-white text-black" : "text-white"
//               }`}
//               style={{ height: navHeight }}
//               onClick={() => setActiveTab(tab)}
//             >
//               {icon}
//             </div>
//           ))}
//         </div>
//       </nav>

//       {activeTab === "personal" && (
//         <div className="bg-white p-6 md:mx-10">
//           <div className="flex justify-between items-center py-2 m-2">
//             <h1 className="text-lg font-semibold text-[#2A546D]">
//               PERSONAL INFO
//             </h1>
//           </div>

//           <hr className="border-t-2 border-[#2A546D] mb-4" />

//           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//             <div className="m-2">
//               <label
//                 htmlFor="firstName"
//                 className="block text-lg font-medium text-[#2A546D] mb-3"
//               >
//                 Employee ID
//               </label>
//               <input
//                 id="employeeId"
//                 type="text"
//                 readOnly
//                 value={personalInfo.employeeId}
//                 className="mt-1 block w-full border focus:outline-none border-[#2A546D] rounded-lg h-[40px] text-lg px-3"
//               />
//             </div>
//             <div className="m-2">
//               <label
//                 htmlFor="firstName"
//                 className="block text-lg font-medium text-[#2A546D] mb-3"
//               >
//                 First Name
//               </label>
//               <input
//                 id="firstName"
//                 type="text"
//                 readOnly
//                 value={personalInfo.firstName}
//                 className="mt-1 block focus:outline-none  w-full border border-[#2A546D] rounded-lg h-[40px] text-lg px-3"
//               />
//             </div>
//             <div className="m-2">
//               <label
//                 htmlFor="lastName"
//                 className="block text-lg font-medium text-[#2A546D] mb-3"
//               >
//                 Last Name
//               </label>
//               <input
//                 id="lastName"
//                 type="text"
//                 readOnly
//                 value={personalInfo.lastName}
//                 className="mt-1 block focus:outline-none  w-full border border-[#2A546D] rounded-lg h-[40px] text-lg px-3"
//               />
//             </div>
//             <div className="m-2">
//               <label
//                 htmlFor="bloodGroup"
//                 className="block text-lg font-medium text-[#2A546D] mb-3"
//               >
//                 Blood Group
//               </label>
//               <input
//                 id="bloodGroup"
//                 type="text"
//                 readOnly
//                 value={personalInfo.bloodGroup}
//                 className="mt-1 focus:outline-none  block w-full border border-[#2A546D] rounded-lg h-[40px] text-lg px-3"
//               />
//             </div>
//             <div className="m-2">
//               <label
//                 htmlFor="dob"
//                 className="block text-lg font-medium text-[#2A546D] mb-3"
//               >
//                 Date of Birth
//               </label>
//               <input
//                 id="dob"
//                 type="date"
//                 readOnly
//                 value={personalInfo.dob}
//                 className="mt-1 focus:outline-none  block w-full border border-[#2A546D] rounded-lg h-[40px] text-lg px-3"
//               />
//             </div>
//             <div className="m-2">
//               <label
//                 htmlFor="officialEmail"
//                 className="block text-lg font-medium text-[#2A546D] mb-3"
//               >
//                 Official Email ID
//               </label>
//               <input
//                 id="officialEmail"
//                 type="email"
//                 readOnly
//                 value={personalInfo.officialEmail}
//                 onChange={handleChangeContactInfo}
//                 className="mt-1 focus:outline-none  block w-full border border-[#2A546D] rounded-lg h-[40px] text-lg px-3"
//               />
//             </div>
//           </div>

//           <div className="bg-white mt-3">
//             <div className="flex justify-between items-center py-4">
//               <h1 className="text-lg text-[#2A546D]">CONTACT INFO</h1>
//               <FiEdit
//                 className="text-xl text-[#2A546D]"
//                 onClick={handleOpenContactModal}
//               />
//             </div>

//             <hr className="border-t-2 border-[#2A546D] mb-4" />

//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//               <div className="m-2">
//                 <label
//                   htmlFor="personalEmail"
//                   className="block text-lg font-medium text-[#2A546D] mb-3"
//                 >
//                   Personal Email ID
//                 </label>
//                 <input
//                   id="personalEmail"
//                   type="email"
//                   value={contactInfo.personalEmail}
//                   onChange={handleChangeContactInfo}
//                   className="mt-1 block w-full focus:outline-[#2a546d]  border border-[#2A546D] rounded-lg h-[40px] text-lg px-3"
//                 />
//               </div>
//               <div className="m-2">
//                 <label
//                   htmlFor="phoneNumber"
//                   className="block text-lg font-medium focus:outline-[#2a546d] text-[#2A546D] mb-3"
//                 >
//                   Personal Phone Number
//                 </label>
//                 <input
//                   id="phoneNumber"
//                   type="tel"
//                   value={contactInfo.phoneNumber}
//                   onChange={handleChangeContactInfo}
//                   className="mt-1 block w-full border focus:outline-[#2a546d]  border-[#2A546D] rounded-lg h-[40px] text-lg px-3"
//                 />
//               </div>
//               <div className="m-2">
//                 <label
//                   htmlFor="alternatePhone"
//                   className="block text-lg font-medium text-[#2A546D] mb-3"
//                 >
//                   Alternate Phone Number
//                 </label>
//                 <input
//                   id="alternatePhone"
//                   type="tel"
//                   value={contactInfo.alternatePhone}
//                   onChange={handleChangeContactInfo}
//                   className="mt-1 block w-full border focus:outline-[#2a546d]  border-[#2A546D] rounded-lg h-[40px] text-lg px-3"
//                 />
//               </div>
//             </div>
//           </div>

//           <div className="bg-white mt-3">
//             <Education
//               degree="B.Tech"
//               institution="AITAM"
//               university="JNTUK"
//               startYear="02-03-2019"
//               endYear="04-08-2023"
//             />
//           </div>
//         </div>
//       )}
//       {activeTab === "official" && <OfficialInformation />}

//       {activeTab === "documents" && (
//         <Documents
//           handleOpenDocumentsModal={handleOpenDocumentsModal}
//           handleCloseDocumentsModal={handleCloseDocumentsModal}
//           isDocumentsModalOpen={isDocumentsModalOpen}
//         />
//       )}
//       {activeTab === "password" && <UpdatePassword />}

//       {/* Contact Info Modal */}
//       {isContactModalOpen && (
//         <div className="fixed inset-0 z-50 text-[#2A546D] flex items-center justify-center bg-black bg-opacity-50">
//           <div className="bg-white p-3 py-4  rounded-lg shadow-lg w-auto">
//             <div className="flex justify-between items-center">
//               <h2 className="text-lg font-semibold">Edit Contact Info</h2>
//               <MdCancelPresentation
//                 className="text-lg cursor-pointer"
//                 onClick={handleCloseContactModal}
//               />
//             </div>
//             <hr className="border-t-2 border-[#2A546D] my-4" />
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//               <div className="m-2">
//                 <label
//                   htmlFor="personalEmail"
//                   className="block text-lg font-medium text-[#2A546D] mb-3"
//                 >
//                   Personal Email ID
//                 </label>
//                 <input
//                   id="personalEmail"
//                   type="email"
//                   value={contactInfo.personalEmail}
//                   onChange={handleChangeContactInfo}
//                   className="mt-1 block w-full border border-[#2A546D] rounded-lg h-[40px] text-lg"
//                 />
//               </div>
//               <div className="m-2">
//                 <label
//                   htmlFor="phoneNumber"
//                   className="block text-lg font-medium text-[#2A546D] mb-3"
//                 >
//                   Personal Phone Number
//                 </label>
//                 <input
//                   id="phoneNumber"
//                   type="tel"
//                   value={contactInfo.phoneNumber}
//                   onChange={handleChangeContactInfo}
//                   className="mt-1 block w-full border border-[#2A546D] rounded-lg h-[40px] text-lg"
//                 />
//               </div>
//               <div className="m-2">
//                 <label
//                   htmlFor="alternatePhone"
//                   className="block text-lg font-medium text-[#2A546D] mb-3"
//                 >
//                   Alternate Phone Number
//                 </label>
//                 <input
//                   id="alternatePhone"
//                   type="tel"
//                   value={contactInfo.alternatePhone}
//                   onChange={handleChangeContactInfo}
//                   className="mt-1 block w-full border border-[#2A546D] rounded-lg h-[40px] text-lg"
//                 />
//               </div>
//             </div>
//             <div className="flex justify-end mt-4">
//               <button
//                 onClick={handleSaveContactInfo}
//                 className="bg-[#2A546D] text-white py-2 px-4 rounded-lg"
//               >
//                 Save
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Profile;







// /* eslint-disable no-unused-vars */
// import { useState } from "react";
// import { FiEdit } from "react-icons/fi";
// import { MdCancelPresentation } from "react-icons/md";
// import { FaUser, FaBriefcase, FaFile, FaLock } from "react-icons/fa";
// import { useSelector } from "react-redux";
// import { toast } from "react-toastify";
// import Education from "./Education";
// import Documents from "./Documents";
// import UpdatePassword from "./UpdatePassword";
// import OfficialInformation from "./OfficialInformation";
// import api from "../../../services/api";

// const Profile = () => {
//   const [activeTab, setActiveTab] = useState("personal");
//   const [isContactModalOpen, setIsContactModalOpen] = useState(false);
//   const [isDocumentsModalOpen, setIsDocumentsModalOpen] = useState(false);

//   const auth = useSelector((state) => state.auth);
//   const u = auth.user || {};

//   const personalInfo = {
//     employeeId: u.employeeId || u.employee_id || "",
//     firstName: u.firstName || "",
//     lastName: u.lastName || "",
//     bloodGroup: u.bloodGroup || u.blood_group || "",
//     dob: (u.dob || u.date_of_birth || "").toString().slice(0, 10),
//     officialEmail: u.email || u.officialEmail || "",
//   };

//   const [contactInfo, setContactInfo] = useState({
//     personalEmail: u.personalEmail || u.personal_mail_id || "",
//     phoneNumber: u.phoneNumber || u.contact_no || "",
//     alternatePhone:
//       u.alternatePhoneNumber || u.alternate_phone || "",
//   });

//   const handleOpenContactModal = () => setIsContactModalOpen(true);
//   const handleCloseContactModal = () => setIsContactModalOpen(false);
//   const handleOpenDocumentsModal = () => setIsDocumentsModalOpen(true);
//   const handleCloseDocumentsModal = () => setIsDocumentsModalOpen(false);

//   const handleChangeContactInfo = (e) => {
//     const { id, value } = e.target;
//     setContactInfo((prev) => ({ ...prev, [id]: value }));
//   };

//   const handleSaveContactInfo = async () => {
//     if (!personalInfo.employeeId) {
//       toast.error("No employee ID found");
//       return;
//     }
//     try {
//       await api.put(`/employee/update/${personalInfo.employeeId}`, {
//         personalEmail: contactInfo.personalEmail,
//         phoneNumber: contactInfo.phoneNumber,
//         alternatePhoneNumber: contactInfo.alternatePhone,
//       });
//       toast.success("Contact information updated");
//       handleCloseContactModal();
//     } catch (err) {
//       toast.error(
//         err.response?.data?.detail || "Failed to update contact information"
//       );
//     }
//   };

//   const navHeight = "60px";

//   return (
//     <div className="min-h-screen p-4 mt-4">
//       <div className="flex flex-col md:flex-row justify-between">
//         <div>
//           <span className="text-[#2A546D] text-sm lg:text-lg font-medium">
//             Employee / Profile
//           </span>
//         </div>
//       </div>

//       <nav className="bg-[#2A546D] mx-0 md:mx-10 flex m-5" style={{ height: navHeight }}>
//         <div className="hidden lg:flex flex-grow">
//           {["personal", "official", "documents", "password"].map((tab) => (
//             <div
//               key={tab}
//               className={`flex-grow flex items-center justify-center cursor-pointer transition-colors duration-300 text-lg ${
//                 activeTab === tab ? "bg-white text-black" : "text-white"
//               }`}
//               style={{ height: navHeight }}
//               onClick={() => setActiveTab(tab)}
//             >
//               {tab === "personal" && "Personal Information"}
//               {tab === "official" && "Official Information"}
//               {tab === "documents" && "Documents"}
//               {tab === "password" && "Update Password"}
//             </div>
//           ))}
//         </div>

//         <div className="flex lg:hidden flex-grow">
//           {[
//             { tab: "personal", icon: <FaUser /> },
//             { tab: "official", icon: <FaBriefcase /> },
//             { tab: "documents", icon: <FaFile /> },
//             { tab: "password", icon: <FaLock /> },
//           ].map(({ tab, icon }) => (
//             <div
//               key={tab}
//               className={`flex-grow flex items-center justify-center cursor-pointer transition-colors duration-300 text-2xl ${
//                 activeTab === tab ? "bg-white text-black" : "text-white"
//               }`}
//               style={{ height: navHeight }}
//               onClick={() => setActiveTab(tab)}
//             >
//               {icon}
//             </div>
//           ))}
//         </div>
//       </nav>

//       {activeTab === "personal" && (
//         <div className="bg-white p-6 md:mx-10">
//           <div className="flex justify-between items-center py-2 m-2">
//             <h1 className="text-lg font-semibold text-[#2A546D]">
//               PERSONAL INFO
//             </h1>
//           </div>
//           <hr className="border-t-2 border-[#2A546D] mb-4" />

//           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//             {[
//               ["Employee ID", "employeeId", personalInfo.employeeId, "text"],
//               ["First Name", "firstName", personalInfo.firstName, "text"],
//               ["Last Name", "lastName", personalInfo.lastName, "text"],
//               ["Blood Group", "bloodGroup", personalInfo.bloodGroup, "text"],
//               ["Date of Birth", "dob", personalInfo.dob, "date"],
//               ["Official Email ID", "officialEmail", personalInfo.officialEmail, "email"],
//             ].map(([label, id, value, type]) => (
//               <div className="m-2" key={id}>
//                 <label className="block text-lg font-medium text-[#2A546D] mb-3">
//                   {label}
//                 </label>
//                 <input
//                   id={id}
//                   type={type}
//                   readOnly
//                   value={value || ""}
//                   className="mt-1 block w-full border border-[#2A546D] rounded-lg h-[40px] text-lg px-3"
//                 />
//               </div>
//             ))}
//           </div>

//           <div className="bg-white mt-3">
//             <div className="flex justify-between items-center py-4">
//               <h1 className="text-lg text-[#2A546D]">CONTACT INFO</h1>
//               <FiEdit
//                 className="text-xl text-[#2A546D] cursor-pointer"
//                 onClick={handleOpenContactModal}
//               />
//             </div>
//             <hr className="border-t-2 border-[#2A546D] mb-4" />

//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//               <div className="m-2">
//                 <label className="block text-lg font-medium text-[#2A546D] mb-3">
//                   Personal Email ID
//                 </label>
//                 <input
//                   id="personalEmail"
//                   type="email"
//                   value={contactInfo.personalEmail || ""}
//                   onChange={handleChangeContactInfo}
//                   className="mt-1 block w-full border border-[#2A546D] rounded-lg h-[40px] text-lg px-3"
//                 />
//               </div>
//               <div className="m-2">
//                 <label className="block text-lg font-medium text-[#2A546D] mb-3">
//                   Personal Phone Number
//                 </label>
//                 <input
//                   id="phoneNumber"
//                   type="tel"
//                   value={contactInfo.phoneNumber || ""}
//                   onChange={handleChangeContactInfo}
//                   className="mt-1 block w-full border border-[#2A546D] rounded-lg h-[40px] text-lg px-3"
//                 />
//               </div>
//               <div className="m-2">
//                 <label className="block text-lg font-medium text-[#2A546D] mb-3">
//                   Alternate Phone Number
//                 </label>
//                 <input
//                   id="alternatePhone"
//                   type="tel"
//                   value={contactInfo.alternatePhone || ""}
//                   onChange={handleChangeContactInfo}
//                   className="mt-1 block w-full border border-[#2A546D] rounded-lg h-[40px] text-lg px-3"
//                 />
//               </div>
//             </div>
//           </div>

//           <div className="bg-white mt-3">
//             <Education />
//           </div>
//         </div>
//       )}

//       {activeTab === "official" && <OfficialInformation />}

//       {activeTab === "documents" && (
//         <Documents
//           handleOpenDocumentsModal={handleOpenDocumentsModal}
//           handleCloseDocumentsModal={handleCloseDocumentsModal}
//           isDocumentsModalOpen={isDocumentsModalOpen}
//         />
//       )}

//       {activeTab === "password" && <UpdatePassword />}

//       {isContactModalOpen && (
//         <div className="fixed inset-0 z-50 text-[#2A546D] flex items-center justify-center bg-black bg-opacity-50">
//           <div className="bg-white p-3 py-4 rounded-lg shadow-lg w-auto">
//             <div className="flex justify-between items-center">
//               <h2 className="text-lg font-semibold">Edit Contact Info</h2>
//               <MdCancelPresentation
//                 className="text-lg cursor-pointer"
//                 onClick={handleCloseContactModal}
//               />
//             </div>
//             <hr className="border-t-2 border-[#2A546D] my-4" />
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//               <div className="m-2">
//                 <label className="block text-lg font-medium text-[#2A546D] mb-3">
//                   Personal Email ID
//                 </label>
//                 <input
//                   id="personalEmail"
//                   type="email"
//                   value={contactInfo.personalEmail || ""}
//                   onChange={handleChangeContactInfo}
//                   className="mt-1 block w-full border border-[#2A546D] rounded-lg h-[40px] text-lg px-3"
//                 />
//               </div>
//               <div className="m-2">
//                 <label className="block text-lg font-medium text-[#2A546D] mb-3">
//                   Personal Phone Number
//                 </label>
//                 <input
//                   id="phoneNumber"
//                   type="tel"
//                   value={contactInfo.phoneNumber || ""}
//                   onChange={handleChangeContactInfo}
//                   className="mt-1 block w-full border border-[#2A546D] rounded-lg h-[40px] text-lg px-3"
//                 />
//               </div>
//               <div className="m-2">
//                 <label className="block text-lg font-medium text-[#2A546D] mb-3">
//                   Alternate Phone Number
//                 </label>
//                 <input
//                   id="alternatePhone"
//                   type="tel"
//                   value={contactInfo.alternatePhone || ""}
//                   onChange={handleChangeContactInfo}
//                   className="mt-1 block w-full border border-[#2A546D] rounded-lg h-[40px] text-lg px-3"
//                 />
//               </div>
//             </div>
//             <div className="flex justify-end mt-4">
//               <button
//                 onClick={handleSaveContactInfo}
//                 className="bg-[#2A546D] text-white py-2 px-4 rounded-lg"
//               >
//                 Save
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Profile;



/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import { FiEdit, FiSave, FiX } from "react-icons/fi";
import { MdCancelPresentation } from "react-icons/md";
import { FaUser, FaBriefcase, FaFile, FaLock } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import Education from "./Education";
import Documents from "./Documents";
import UpdatePassword from "./UpdatePassword";
import OfficialInformation from "./OfficialInformation";
import api from "../../../services/api";
import { setUser } from "../../../store/slices/authSlice";

const EMPTY = {
  employeeId: "",
  firstName: "",
  lastName: "",
  bloodGroup: "",
  dob: "",
  officialEmail: "",
  personalEmail: "",
  phoneNumber: "",
  alternatePhone: "",
};

const buildStateFromUser = (u) => ({
  employeeId: u.employeeId || u.employee_id || "",
  firstName: u.firstName || "",
  lastName: u.lastName || "",
  bloodGroup: u.bloodGroup || u.blood_group || "",
  dob: (u.dob || u.date_of_birth || "").toString().slice(0, 10),
  officialEmail: u.email || u.officialEmail || "",
  personalEmail: u.personalEmail || u.personal_mail_id || "",
  phoneNumber: u.phoneNumber || u.contact_no || "",
  alternatePhone: u.alternatePhoneNumber || u.alternate_phone || "",
});

const Profile = () => {
  const [activeTab, setActiveTab] = useState("personal");
  const [isDocumentsModalOpen, setIsDocumentsModalOpen] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  const u = auth.user || {};

  const [form, setForm] = useState(() => buildStateFromUser(u));
  const [isEditingPersonal, setIsEditingPersonal] = useState(false);
  const [saving, setSaving] = useState(false);

  // Re-sync form when auth.user changes (e.g., after a re-fetch)
  useEffect(() => {
    setForm(buildStateFromUser(u));
  }, [u.employeeId, u.firstName, u.lastName]); // eslint-disable-line react-hooks/exhaustive-deps

  const handleChange = (e) => {
    const { id, value } = e.target;
    setForm((prev) => ({ ...prev, [id]: value }));
  };

  const handleCancelPersonal = () => {
    setForm(buildStateFromUser(u));
    setIsEditingPersonal(false);
  };

  const handleSavePersonal = async () => {
    if (!form.employeeId) {
      toast.error("No employee ID found");
      return;
    }
    if (!form.firstName.trim() && !form.lastName.trim()) {
      toast.error("Name cannot be empty");
      return;
    }

    setSaving(true);
    try {
      const payload = {
        firstName: form.firstName.trim(),
        lastName: form.lastName.trim(),
        officialEmail: form.officialEmail.trim(),
        personalEmail: form.personalEmail.trim(),
        phoneNumber: form.phoneNumber.trim(),
        alternatePhoneNumber: form.alternatePhone.trim(),
        bloodGroup: form.bloodGroup.trim(),
        dob: form.dob || null,
      };

      const res = await api.put(`/employee/update/${form.employeeId}`, payload);

      // Merge the response into the current user object and sync Redux + localStorage
      const updated = { ...u, ...(res.data || {}) };
      dispatch(setUser(updated));

      toast.success("Profile updated successfully");
      setIsEditingPersonal(false);
    } catch (err) {
      toast.error(
        err.response?.data?.detail || "Failed to update profile"
      );
    } finally {
      setSaving(false);
    }
  };

  const handleSaveContactInfo = async () => {
    if (!form.employeeId) {
      toast.error("No employee ID found");
      return;
    }
    setSaving(true);
    try {
      const payload = {
        personalEmail: form.personalEmail.trim(),
        phoneNumber: form.phoneNumber.trim(),
        alternatePhoneNumber: form.alternatePhone.trim(),
      };
      const res = await api.put(`/employee/update/${form.employeeId}`, payload);
      const updated = { ...u, ...(res.data || {}) };
      dispatch(setUser(updated));
      toast.success("Contact information updated");
      setIsContactModalOpen(false);
    } catch (err) {
      toast.error(
        err.response?.data?.detail || "Failed to update contact info"
      );
    } finally {
      setSaving(false);
    }
  };

  const navHeight = "60px";

  const personalFields = [
    ["Employee ID", "employeeId", "text", true],
    ["First Name", "firstName", "text", false],
    ["Last Name", "lastName", "text", false],
    ["Blood Group", "bloodGroup", "text", false],
    ["Date of Birth", "dob", "date", false],
    ["Official Email ID", "officialEmail", "email", false],
  ];

  return (
    <div className="min-h-screen p-4 mt-4">
      <div className="flex flex-col md:flex-row justify-between">
        <div>
          <span className="text-[#2A546D] text-sm lg:text-lg font-medium">
            Employee / Profile
          </span>
        </div>
      </div>

      <nav className="bg-[#2A546D] mx-0 md:mx-10 flex m-5" style={{ height: navHeight }}>
        <div className="hidden lg:flex flex-grow">
          {["personal", "official", "documents", "password"].map((tab) => (
            <div
              key={tab}
              className={`flex-grow flex items-center justify-center cursor-pointer transition-colors duration-300 text-lg ${
                activeTab === tab ? "bg-white text-black" : "text-white"
              }`}
              style={{ height: navHeight }}
              onClick={() => setActiveTab(tab)}
            >
              {tab === "personal" && "Personal Information"}
              {tab === "official" && "Official Information"}
              {tab === "documents" && "Documents"}
              {tab === "password" && "Update Password"}
            </div>
          ))}
        </div>

        <div className="flex lg:hidden flex-grow">
          {[
            { tab: "personal", icon: <FaUser /> },
            { tab: "official", icon: <FaBriefcase /> },
            { tab: "documents", icon: <FaFile /> },
            { tab: "password", icon: <FaLock /> },
          ].map(({ tab, icon }) => (
            <div
              key={tab}
              className={`flex-grow flex items-center justify-center cursor-pointer transition-colors duration-300 text-2xl ${
                activeTab === tab ? "bg-white text-black" : "text-white"
              }`}
              style={{ height: navHeight }}
              onClick={() => setActiveTab(tab)}
            >
              {icon}
            </div>
          ))}
        </div>
      </nav>

      {activeTab === "personal" && (
        <div className="bg-white p-6 md:mx-10">
          <div className="flex justify-between items-center py-2 m-2">
            <h1 className="text-lg font-semibold text-[#2A546D]">
              PERSONAL INFO
            </h1>
            {!isEditingPersonal ? (
              <FiEdit
                className="text-xl text-[#2A546D] cursor-pointer"
                onClick={() => setIsEditingPersonal(true)}
                title="Edit"
              />
            ) : (
              <div className="flex items-center gap-3">
                <FiSave
                  className={`text-xl cursor-pointer ${
                    saving ? "text-gray-400" : "text-green-600"
                  }`}
                  onClick={saving ? undefined : handleSavePersonal}
                  title="Save"
                />
                <FiX
                  className="text-xl text-red-600 cursor-pointer"
                  onClick={handleCancelPersonal}
                  title="Cancel"
                />
              </div>
            )}
          </div>
          <hr className="border-t-2 border-[#2A546D] mb-4" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {personalFields.map(([label, id, type, alwaysReadOnly]) => (
              <div className="m-2" key={id}>
                <label className="block text-lg font-medium text-[#2A546D] mb-3">
                  {label}
                </label>
                <input
                  id={id}
                  type={type}
                  value={form[id] || ""}
                  onChange={handleChange}
                  readOnly={alwaysReadOnly || !isEditingPersonal}
                  className={`mt-1 block w-full border rounded-lg h-[40px] text-lg px-3 outline-none ${
                    alwaysReadOnly || !isEditingPersonal
                      ? "border-[#2A546D] bg-gray-50"
                      : "border-[#0098F1] bg-white focus:ring-2 focus:ring-[#0098F1]"
                  }`}
                />
              </div>
            ))}
          </div>

          {isEditingPersonal && (
            <p className="text-sm text-gray-500 mt-2 px-2">
              Employee ID is read-only. All other fields can be edited.
            </p>
          )}

          <div className="bg-white mt-3">
            <div className="flex justify-between items-center py-4">
              <h1 className="text-lg text-[#2A546D]">CONTACT INFO</h1>
              <FiEdit
                className="text-xl text-[#2A546D] cursor-pointer"
                onClick={() => setIsContactModalOpen(true)}
                title="Edit contact info"
              />
            </div>
            <hr className="border-t-2 border-[#2A546D] mb-4" />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="m-2">
                <label className="block text-lg font-medium text-[#2A546D] mb-3">
                  Personal Email ID
                </label>
                <input
                  id="personalEmail"
                  type="email"
                  value={form.personalEmail || ""}
                  onChange={handleChange}
                  readOnly={!isEditingPersonal}
                  className={`mt-1 block w-full border rounded-lg h-[40px] text-lg px-3 outline-none ${
                    !isEditingPersonal
                      ? "border-[#2A546D] bg-gray-50"
                      : "border-[#0098F1] bg-white focus:ring-2 focus:ring-[#0098F1]"
                  }`}
                />
              </div>
              <div className="m-2">
                <label className="block text-lg font-medium text-[#2A546D] mb-3">
                  Personal Phone Number
                </label>
                <input
                  id="phoneNumber"
                  type="tel"
                  value={form.phoneNumber || ""}
                  onChange={handleChange}
                  readOnly={!isEditingPersonal}
                  className={`mt-1 block w-full border rounded-lg h-[40px] text-lg px-3 outline-none ${
                    !isEditingPersonal
                      ? "border-[#2A546D] bg-gray-50"
                      : "border-[#0098F1] bg-white focus:ring-2 focus:ring-[#0098F1]"
                  }`}
                />
              </div>
              <div className="m-2">
                <label className="block text-lg font-medium text-[#2A546D] mb-3">
                  Alternate Phone Number
                </label>
                <input
                  id="alternatePhone"
                  type="tel"
                  value={form.alternatePhone || ""}
                  onChange={handleChange}
                  readOnly={!isEditingPersonal}
                  className={`mt-1 block w-full border rounded-lg h-[40px] text-lg px-3 outline-none ${
                    !isEditingPersonal
                      ? "border-[#2A546D] bg-gray-50"
                      : "border-[#0098F1] bg-white focus:ring-2 focus:ring-[#0098F1]"
                  }`}
                />
              </div>
            </div>
          </div>

          <div className="bg-white mt-3">
            <Education />
          </div>
        </div>
      )}

      {activeTab === "official" && <OfficialInformation />}

      {activeTab === "documents" && (
        <Documents
          handleOpenDocumentsModal={() => setIsDocumentsModalOpen(true)}
          handleCloseDocumentsModal={() => setIsDocumentsModalOpen(false)}
          isDocumentsModalOpen={isDocumentsModalOpen}
        />
      )}

      {activeTab === "password" && <UpdatePassword />}

      {isContactModalOpen && (
        <div className="fixed inset-0 z-50 text-[#2A546D] flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-3 py-4 rounded-lg shadow-lg w-auto">
            <div className="flex justify-between items-center">
              <h2 className="text-lg font-semibold">Edit Contact Info</h2>
              <MdCancelPresentation
                className="text-lg cursor-pointer"
                onClick={() => setIsContactModalOpen(false)}
              />
            </div>
            <hr className="border-t-2 border-[#2A546D] my-4" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                ["Personal Email ID", "personalEmail", "email"],
                ["Personal Phone Number", "phoneNumber", "tel"],
                ["Alternate Phone Number", "alternatePhone", "tel"],
              ].map(([label, id, type]) => (
                <div className="m-2" key={id}>
                  <label className="block text-lg font-medium text-[#2A546D] mb-3">
                    {label}
                  </label>
                  <input
                    id={id}
                    type={type}
                    value={form[id] || ""}
                    onChange={handleChange}
                    className="mt-1 block w-full border border-[#2A546D] rounded-lg h-[40px] text-lg px-3 outline-none focus:ring-2 focus:ring-[#0098F1]"
                  />
                </div>
              ))}
            </div>
            <div className="flex justify-end mt-4 gap-2">
              <button
                onClick={() => setIsContactModalOpen(false)}
                className="bg-gray-300 text-gray-800 py-2 px-4 rounded-lg"
              >
                Cancel
              </button>
              <button
                onClick={handleSaveContactInfo}
                disabled={saving}
                className={`py-2 px-4 rounded-lg text-white ${
                  saving ? "bg-gray-400" : "bg-[#2A546D]"
                }`}
              >
                {saving ? "Saving..." : "Save"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;