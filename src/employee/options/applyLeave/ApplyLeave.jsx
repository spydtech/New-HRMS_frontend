// /* eslint-disable no-unused-vars */
// import React, { useState, useEffect } from "react";
// import { differenceInDays, parseISO } from "date-fns";
// import { FaPlusCircle } from "react-icons/fa";
// import { IoMdCheckmarkCircleOutline } from "react-icons/io";
// const initialLeaves = [
//   {
//     id: 1,
//     leaveType: "Earned Leave",
//     startdate: "2024-07-10",
//     enddate: "2024-07-15",
//     selecthalf: "Full Day",
//     reason: "Vacation",
//     status: "Pending",
//   },
//   {
//     id: 2,
//     leaveType: "Sick Leave",
//     startdate: "2024-07-20",
//     enddate: "2024-07-22",
//     selecthalf: "Full Day",
//     reason: "Flu",
//     status: "Approved",
//   },
// ];

// const initialLeaveCount = {
//   annualLeave: 10,
//   medicalLeave: 5,
//   otherLeave: 3,
//   remainingLeave: 8,
// };

// function ApplyLeave() {
//   const [leaves, setLeaves] = useState(initialLeaves);
//   const [leaveCount, setLeaveCount] = useState(initialLeaveCount);
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [showSuccessMessage, setShowSuccessMessage] = useState(false);
//   const [editEventId, setEditEventId] = useState(null); // Track if editing an event

//   const [newLeave, setNewLeave] = useState({
//     leaveType: "",
//     startdate: "",
//     enddate: "",
//     selecthalf: "",
//     reason: "",
//     status: "Pending",
//   });

//   useEffect(() => {
//     if (newLeave.startdate && newLeave.enddate) {
//       const fromDate = parseISO(newLeave.startdate);
//       const toDate = parseISO(newLeave.enddate);
//       const numOfDays = differenceInDays(toDate, fromDate) + 1; // +1 to include the end date
//       setNewLeave((prevLeave) => ({
//         ...prevLeave,
//         noOfDays: `${numOfDays} Days`,
//       }));
//     }
//   }, [newLeave.startdate, newLeave.enddate]);

//   const closeModal = () => {
//     setIsModalOpen(false);
//     setNewLeave({
//       leaveType: "",
//       startdate: "",
//       enddate: "",
//       selecthalf: "",
//       reason: "",
//       status: "Pending",
//     });
//   };

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setNewLeave((prevLeave) => ({
//       ...prevLeave,
//       [name]: value,
//     }));
//   };

//   const updateLeaveCount = (leaveType) => {
//     setLeaveCount((prevCount) => {
//       const updatedCount = { ...prevCount };

//       if (leaveType === "Earned Leave") updatedCount.annualLeave -= 1;
//       else if (leaveType === "Sick Leave") updatedCount.medicalLeave -= 1;
//       else if (leaveType === "Casual Leave") updatedCount.otherLeave -= 1;

//       return updatedCount;
//     });
//   };

//   const handleAddLeave = () => {
//     // Add new leave
//     setLeaves((prevLeaves) => [
//       ...prevLeaves,
//       {
//         id: Date.now(),
//         leaveType: newLeave.leaveType,
//         startdate: newLeave.startdate,
//         enddate: newLeave.enddate,
//         selecthalf: newLeave.selecthalf,
//         reason: newLeave.reason,
//         status: newLeave.status,
//       },
//     ]);
//     // Update leave count for add operation
//     updateLeaveCount(newLeave.leaveType);

//     // Close the modal and reset form
//     closeModal();
//     setShowSuccessMessage(true);
//     setTimeout(() => setShowSuccessMessage(false), 3000);
//   };

//   const settingStatus = (status) => {
//     const statusClasses = {
//       Approved: "bg-[#04B440] p-2 rounded-lg text-white",
//       Rejected: "bg-red-500 p-2 rounded-lg text-whte",
//       Pending: "bg-yellow-500 px-[15px] p-2 rounded-lg text-white",
//     };
//     return <span className={statusClasses[status] || ""}>{status}</span>;
//   };

//   return (
//     <div className="mt-4 p-4  min-h-screen">
//       <div className=" flex flex-col md:flex-row justify-between">
//         <div>
//           <span className="text-[#2A546D] text-sm lg:text-lg font-medium">
//             Employee / Apply Leave
//           </span>
//         </div>
//       </div>
//       <div className="flex justify-end mr-4 mt-4">
//         <div className="">
//           <button
//             className="bg-[#2A546D] text-white flex items-center rounded-lg p-3 px-5 lg:text-lg"
//             onClick={() => setIsModalOpen(true)}
//           >
//             <FaPlusCircle className="text-white text-base  lg:text-lg mr-2" />
//             <span className=" text-xs sm:text-sm md:text-base lg:text-lg">
//               Apply Leave
//             </span>
//           </button>
//         </div>
//       </div>

//       <div className="flex flex-wrap justify-around text-white gap-4 pt-4">
//         {["Earned Leave", "Sick Leave", "Casual Leave"].map((type, i) => (
//           <div
//             key={i}
//             className={`py-6 text-lg px-4 rounded-lg lg:w-[300px] w-full font-semibold min-h-[200px] flex pl-4 flex-col ${
//               type === "Earned Leave"
//                 ? "bg-[#2a546d]"
//                 : type === "Sick Leave"
//                 ? "bg-[#2a546d]"
//                 : "bg-[#2a546d]"
//             }`}
//           >
//             <div className="text-center lg:text-lg   font-bold">{type}</div>
//             <ul className="text-[15px] list-none text-white mt-4">
//               <li className="flex justify-between items-center">
//                 <span className="inline-flex items-center">
//                   <span className="inline-block w-2 h-2 bg-white rounded-full mr-2"></span>
//                   <span className="font-medium">Credited Leaves:</span>
//                 </span>
//                 <span className="ml-4">{leaveCount.annualLeave}</span>
//               </li>

//               <li className="flex justify-between items-center mt-2">
//                 <span className="inline-flex items-center">
//                   <span className="inline-block w-2 h-2 bg-white rounded-full mr-2"></span>
//                   <span>Total Leaves:</span>
//                 </span>
//                 <span className="ml-4">{leaveCount.medicalLeave}</span>
//               </li>

//               <li className="flex justify-between items-center mt-2">
//                 <span className="inline-flex items-center">
//                   <span className="inline-block w-2 h-2 bg-white rounded-full mr-2"></span>
//                   <span>Other Leaves:</span>
//                 </span>
//                 <span className="ml-4">{leaveCount.otherLeave}</span>
//               </li>
//             </ul>
//           </div>
//         ))}
//       </div>

//       <div className="mt-4">
//         <h3 className="text-lg text-[#2a546d]  font-semibold mb-2">
//           My Leaves
//         </h3>

//         <div className="  overflow-x-scroll scrollbar-thin   scrollbar-track-white scrollbar-thumb-[#2a546d] pt-4 mx-4">
//           <table className="min-w-full w-screen overflow-x-scroll  text-nowrap">
//             <thead>
//               <tr className="bg-[#2a546d] text-white">
//                 <th className="p-3 border border-r-white border-[#2a546d] ">
//                   Leave Type
//                 </th>
//                 <th className="p-3 border-r border-white">Start Date</th>
//                 <th className="p-3 border-r border-white">End Date</th>
//                 <th className="p-3 border-r border-white">Full / Half-Day</th>
//                 <th className="p-3 border-r border-white">Reason</th>
//                 <th className="p-3  border  border-[#2a546d]">Status</th>
//               </tr>
//             </thead>
//             <tbody>
//               {leaves.map((leave) => (
//                 <tr
//                   key={leave.id}
//                   className="text-center text-black border  border-[#2a546d]"
//                 >
//                   <td className="p-3 border-r border-[#2a546d]">
//                     {leave.leaveType}
//                   </td>
//                   <td className="p-3 border-r border-[#2a546d]">
//                     {leave.startdate}
//                   </td>
//                   <td className="p-3 border-r border-[#2a546d]">
//                     {leave.enddate}
//                   </td>
//                   <td className="p-3 border-r border-[#2a546d]">
//                     {leave.selecthalf}
//                   </td>
//                   <td className="p-3 border-r border-[#2a546d]">
//                     {leave.reason}
//                   </td>
//                   <td className="p-3  ">
//                     <button className="">{settingStatus(leave.status)}</button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>

//         {showSuccessMessage && (
//           <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 z-50">
//             <div className="bg-[#2A546D] p-8 rounded-lg text-center text-white">
//               <h2 className="text-xl mb-4">
//                 <IoMdCheckmarkCircleOutline className="inline-block text-6xl" />
//               </h2>
//               <p>
//                 {editEventId
//                   ? "Event updated successfully!"
//                   : "Leave added successfully!"}
//               </p>
//             </div>
//           </div>
//         )}
//       </div>

//       {/* Modal for Adding Leave */}
//       {isModalOpen && (
//         <div className="fixed inset-0 flex items-center justify-center z-50">
//           <div className="bg-white text-black h-80 overflow-y-scroll p-8 scrollbar-thin   scrollbar-track-white scrollbar-thumb-[#2a546d] rounded shadow-lg max-w-md w-full">
//             <h3 className="text-lg font-semibold mb-4">Apply for Leave</h3>
//             <form>
//               <div className="mb-4">
//                 <label className="block mb-2 font-semibold">Leave Type</label>
//                 <select
//                   name="leaveType"
//                   value={newLeave.leaveType}
//                   onChange={handleInputChange}
//                   className="w-full border px-4 py-2 rounded"
//                 >
//                   <option value="" disabled hidden>
//                     Select Leave Type
//                   </option>
//                   <option value="Earned Leave">Earned Leave</option>
//                   <option value="Sick Leave">Sick Leave</option>
//                   <option value="Casual Leave">Casual Leave</option>
//                 </select>
//               </div>
//               <div className="mb-4">
//                 <label className="block mb-2 font-semibold">Start Date</label>
//                 <input
//                   type="date"
//                   name="startdate"
//                   value={newLeave.startdate}
//                   onChange={handleInputChange}
//                   className="w-full border px-4 py-2 rounded"
//                 />
//               </div>
//               <div className="mb-4">
//                 <label className="block mb-2 font-semibold">End Date</label>
//                 <input
//                   type="date"
//                   name="enddate"
//                   value={newLeave.enddate}
//                   onChange={handleInputChange}
//                   className="w-full border px-4 py-2 rounded"
//                 />
//               </div>
//               <div className="mb-4">
//                 <label className="block mb-2 font-semibold">Half Day</label>
//                 <select
//                   name="selecthalf"
//                   value={newLeave.selecthalf}
//                   onChange={handleInputChange}
//                   className="w-full border px-4 py-2 rounded"
//                 >
//                   <option value="" disabled hidden>
//                     Select Half Day
//                   </option>
//                   <option value="First Half">First Half</option>
//                   <option value="Second Half">Second Half</option>
//                   <option value="Full Day">Full Day</option>
//                 </select>
//               </div>
//               <div className="mb-4">
//                 <label className="block mb-2 font-semibold">Reason</label>
//                 <textarea
//                   name="reason"
//                   value={newLeave.reason}
//                   onChange={handleInputChange}
//                   className="w-full border px-4 py-2 rounded"
//                 />
//               </div>
//             </form>

//             <div className="flex justify-end mt-4">
//               <button
//                 onClick={closeModal}
//                 className="mr-2 h-[40px] w-[120px] bg-gray-400 text-white rounded"
//               >
//                 Cancel
//               </button>
//               <button
//                 onClick={handleAddLeave}
//                 className="h-[40px] w-[120px] bg-[#2A546D] text-white rounded"
//               >
//                 Save
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default ApplyLeave;





// /* eslint-disable no-unused-vars */
// import React, { useState, useEffect } from "react";
// import { differenceInDays, parseISO } from "date-fns";
// import { FaPlusCircle } from "react-icons/fa";
// import { IoMdCheckmarkCircleOutline, IoMdCloseCircleOutline } from "react-icons/io";
// import { toast } from "react-toastify";
// import dayjs from "dayjs";
// import { leavesAPI } from "../../../services/api"; 

// const mapToBackendType = (uiType) => {
//   switch (uiType) {
//     case "Earned Leave": return "earned";
//     case "Sick Leave": return "sick";
//     case "Casual Leave": return "casual";
//     default: return "casual";
//   }
// };

// const mapToUiType = (backendType) => {
//   switch (backendType) {
//     case "earned": return "Earned Leave";
//     case "sick": return "Sick Leave";
//     case "casual": return "Casual Leave";
//     default: return backendType;
//   }
// };

// function ApplyLeave() {
//   const [leaves, setLeaves] = useState([]);
//   const [leaveCount, setLeaveCount] = useState({
//     casual: 0,
//     sick: 0,
//     earned: 0,
//     totalPending: 0,
//   });
//   const [loading, setLoading] = useState(true);
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [showSuccessMessage, setShowSuccessMessage] = useState(false);
//   const [saving, setSaving] = useState(false);

//   // ✅ NEW: State for the Error Popup
//   const [errorModalOpen, setErrorModalOpen] = useState(false);
//   const [errorMessage, setErrorMessage] = useState("");

//   const [newLeave, setNewLeave] = useState({
//     leaveType: "",
//     startdate: "",
//     enddate: "",
//     selecthalf: "Full Day",
//     reason: "",
//     status: "Pending",
//   });

//   useEffect(() => {
//     fetchData();
//   }, []);

//   const fetchData = async () => {
//     setLoading(true);
//     try {
//       const [balanceRes, leavesRes] = await Promise.all([
//         leavesAPI.myBalance(),
//         leavesAPI.myLeaves(),
//       ]);
      
//       setLeaveCount(balanceRes.data || { casual: 0, sick: 0, earned: 0, totalPending: 0 });
//       setLeaves(Array.isArray(leavesRes.data) ? leavesRes.data : []);
//     } catch (err) {
//       console.error("Failed to load leave data:", err);
//       const detail = err?.response?.data?.detail;
//       toast.error(typeof detail === "string" ? detail : "Failed to load leave data");
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     if (newLeave.startdate && newLeave.enddate) {
//       const fromDate = parseISO(newLeave.startdate);
//       const toDate = parseISO(newLeave.enddate);
//       if (toDate >= fromDate) {
//         const numOfDays = differenceInDays(toDate, fromDate) + 1;
//         setNewLeave((prevLeave) => ({
//           ...prevLeave,
//           noOfDays: `${numOfDays} Days`,
//         }));
//       }
//     }
//   }, [newLeave.startdate, newLeave.enddate]);

//   const closeModal = () => {
//     setIsModalOpen(false);
//     setNewLeave({
//       leaveType: "",
//       startdate: "",
//       enddate: "",
//       selecthalf: "Full Day",
//       reason: "",
//       status: "Pending",
//     });
//   };

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setNewLeave((prevLeave) => ({
//       ...prevLeave,
//       [name]: value,
//     }));
//   };

//   const handleAddLeave = async () => {
//     if (!newLeave.leaveType || !newLeave.startdate || !newLeave.enddate) {
//       toast.error("Please fill all required fields");
//       return;
//     }

//     const payload = {
//       leaveType: mapToBackendType(newLeave.leaveType),
//       startdate: newLeave.startdate,
//       enddate: newLeave.enddate,
//       selecthalf: newLeave.selecthalf || "Full Day",
//       reason: newLeave.reason,
//     };

//     setSaving(true);
//     try {
//       await leavesAPI.apply(payload);
      
//       closeModal();
//       setShowSuccessMessage(true);
//       setTimeout(() => setShowSuccessMessage(false), 3000);
      
//       await fetchData();
//     } catch (err) {
//       // ✅ Check if the error is a leave balance/allocation issue
//       const detail = err?.response?.data?.detail;
//       const errorText = typeof detail === "string" ? detail : "Failed to apply for leave";
      
//       if (errorText.includes("not allocated") || errorText.includes("Insufficient") || errorText.includes("0 leaves")) {
//         setErrorMessage(errorText);
//         setErrorModalOpen(true);
//       } else {
//         toast.error(errorText);
//       }
//     } finally {
//       setSaving(false);
//     }
//   };

//   const settingStatus = (status) => {
//     const s = status.toLowerCase();
//     const statusClasses = {
//       approved: "bg-[#04B440] p-2 rounded-lg text-white",
//       rejected: "bg-red-500 p-2 rounded-lg text-white",
//       cancelled: "bg-gray-400 p-2 rounded-lg text-white",
//       pending: "bg-yellow-500 px-[15px] p-2 rounded-lg text-white",
//     };
//     return (
//       <span className={`${statusClasses[s] || "bg-gray-300"} capitalize`}>
//         {s}
//       </span>
//     );
//   };

//   return (
//     <div className="mt-4 p-4 min-h-screen">
//       <div className="flex flex-col md:flex-row justify-between">
//         <div>
//           <span className="text-[#2A546D] text-sm lg:text-lg font-medium">
//             Employee / Apply Leave
//           </span>
//         </div>
//       </div>
      
//       <div className="flex justify-end mr-4 mt-4">
//         <button
//           className="bg-[#2A546D] text-white flex items-center rounded-lg p-3 px-5 lg:text-lg hover:opacity-90"
//           onClick={() => setIsModalOpen(true)}
//         >
//           <FaPlusCircle className="text-white text-base lg:text-lg mr-2" />
//           <span className="text-xs sm:text-sm md:text-base lg:text-lg">
//             Apply Leave
//           </span>
//         </button>
//       </div>

//       <div className="flex flex-wrap justify-around text-white gap-4 pt-4">
//         {[
//           { label: "Earned Leave", key: "earned" },
//           { label: "Sick Leave", key: "sick" },
//           { label: "Casual Leave", key: "casual" },
//         ].map((item, i) => (
//           <div
//             key={i}
//             className="py-6 text-lg px-4 rounded-lg lg:w-[300px] w-full font-semibold min-h-[200px] flex pl-4 flex-col bg-[#2a546d]"
//           >
//             <div className="text-center lg:text-lg font-bold">{item.label}</div>
//             <ul className="text-[15px] list-none text-white mt-4 space-y-2">
//               <li className="flex justify-between items-center">
//                 <span className="inline-flex items-center">
//                   <span className="inline-block w-2 h-2 bg-white rounded-full mr-2"></span>
//                   <span className="font-medium">Available:</span>
//                 </span>
//                 <span className="ml-4">{leaveCount[item.key] || 0}</span>
//               </li>
//               <li className="flex justify-between items-center">
//                 <span className="inline-flex items-center">
//                   <span className="inline-block w-2 h-2 bg-white rounded-full mr-2"></span>
//                   <span>Total Pending:</span>
//                 </span>
//                 <span className="ml-4">{leaveCount.totalPending || 0}</span>
//               </li>
//             </ul>
//           </div>
//         ))}
//       </div>

//       <div className="mt-8">
//         <h3 className="text-lg text-[#2a546d] font-semibold mb-2">
//           My Leaves
//         </h3>

//         <div className="overflow-x-scroll scrollbar-thin scrollbar-track-white scrollbar-thumb-[#2a546d] pt-4 mx-4">
//           <table className="min-w-full w-screen overflow-x-scroll text-nowrap">
//             <thead>
//               <tr className="bg-[#2a546d] text-white">
//                 <th className="p-3 border border-r-white border-[#2a546d]">Leave Type</th>
//                 <th className="p-3 border-r border-white">Start Date</th>
//                 <th className="p-3 border-r border-white">End Date</th>
//                 <th className="p-3 border-r border-white">Days</th>
//                 <th className="p-3 border-r border-white">Full / Half-Day</th>
//                 <th className="p-3 border-r border-white">Reason</th>
//                 <th className="p-3 border border-[#2a546d]">Status</th>
//               </tr>
//             </thead>
//             <tbody>
//               {loading ? (
//                 <tr>
//                   <td colSpan={7} className="text-center py-4 text-gray-500">
//                     Loading leaves...
//                   </td>
//                 </tr>
//               ) : leaves.length === 0 ? (
//                 <tr>
//                   <td colSpan={7} className="text-center py-4 text-gray-500">
//                     No leave records found.
//                   </td>
//                 </tr>
//               ) : (
//                 leaves.map((leave) => (
//                   <tr
//                     key={leave.id}
//                     className="text-center text-black border border-[#2a546d]"
//                   >
//                     <td className="p-3 border-r border-[#2a546d]">
//                       {mapToUiType(leave.leaveType)}
//                     </td>
//                     <td className="p-3 border-r border-[#2a546d]">
//                       {dayjs(leave.fromDate).format("DD MMM YYYY")}
//                     </td>
//                     <td className="p-3 border-r border-[#2a546d]">
//                       {dayjs(leave.toDate).format("DD MMM YYYY")}
//                     </td>
//                     <td className="p-3 border-r border-[#2a546d]">
//                       {leave.totalDays} {leave.totalDays === 1 ? "Day" : "Days"}
//                     </td>
//                     <td className="p-3 border-r border-[#2a546d]">
//                       {leave.halfDay || "Full Day"}
//                     </td>
//                     <td className="p-3 border-r border-[#2a546d]">
//                       {leave.reason || "—"}
//                     </td>
//                     <td className="p-3">
//                       {settingStatus(leave.status)}
//                     </td>
//                   </tr>
//                 ))
//               )}
//             </tbody>
//           </table>
//         </div>
//       </div>

//       {/* ✅ NEW: Error Popup Modal */}
//       {errorModalOpen && (
//         <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
//           <div className="bg-white p-8 rounded-lg text-center max-w-sm w-full shadow-2xl">
//             <IoMdCloseCircleOutline className="inline-block text-6xl text-red-500 mb-4" />
//             <h2 className="text-xl font-bold text-gray-800 mb-2">Cannot Apply</h2>
//             <p className="text-gray-600 mb-6">{errorMessage}</p>
//             <button
//               onClick={() => setErrorModalOpen(false)}
//               className="w-full bg-[#2A546D] text-white py-2 rounded-lg hover:opacity-90"
//             >
//               Okay
//             </button>
//           </div>
//         </div>
//       )}

//       {/* Success Message Modal */}
//       {showSuccessMessage && (
//         <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 z-50">
//           <div className="bg-[#2A546D] p-8 rounded-lg text-center text-white">
//             <h2 className="text-xl mb-4">
//               <IoMdCheckmarkCircleOutline className="inline-block text-6xl" />
//             </h2>
//             <p>Leave applied successfully!</p>
//           </div>
//         </div>
//       )}

//       {/* Apply Leave Modal */}
//       {isModalOpen && (
//         <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-40">
//           <div className="bg-white text-black h-auto max-h-[90vh] overflow-y-auto p-8 scrollbar-thin scrollbar-track-white scrollbar-thumb-[#2a546d] rounded shadow-lg max-w-md w-full">
//             <h3 className="text-lg font-semibold mb-4 text-[#2A546D]">Apply for Leave</h3>
//             <form onSubmit={(e) => e.preventDefault()}>
//               <div className="mb-4">
//                 <label className="block mb-2 font-semibold">Leave Type *</label>
//                 <select
//                   name="leaveType"
//                   value={newLeave.leaveType}
//                   onChange={handleInputChange}
//                   className="w-full border px-4 py-2 rounded focus:outline-none focus:border-[#2A546D]"
//                 >
//                   <option value="" disabled hidden>Select Leave Type</option>
//                   <option value="Earned Leave">Earned Leave</option>
//                   <option value="Sick Leave">Sick Leave</option>
//                   <option value="Casual Leave">Casual Leave</option>
//                 </select>
//               </div>
//               <div className="mb-4">
//                 <label className="block mb-2 font-semibold">Start Date *</label>
//                 <input
//                   type="date"
//                   name="startdate"
//                   value={newLeave.startdate}
//                   onChange={handleInputChange}
//                   className="w-full border px-4 py-2 rounded focus:outline-none focus:border-[#2A546D]"
//                 />
//               </div>
//               <div className="mb-4">
//                 <label className="block mb-2 font-semibold">End Date *</label>
//                 <input
//                   type="date"
//                   name="enddate"
//                   value={newLeave.enddate}
//                   onChange={handleInputChange}
//                   className="w-full border px-4 py-2 rounded focus:outline-none focus:border-[#2A546D]"
//                 />
//               </div>
//               <div className="mb-4">
//                 <label className="block mb-2 font-semibold">Full / Half-Day</label>
//                 <select
//                   name="selecthalf"
//                   value={newLeave.selecthalf}
//                   onChange={handleInputChange}
//                   className="w-full border px-4 py-2 rounded focus:outline-none focus:border-[#2A546D]"
//                 >
//                   <option value="Full Day">Full Day</option>
//                   <option value="First Half">First Half</option>
//                   <option value="Second Half">Second Half</option>
//                 </select>
//               </div>
//               <div className="mb-4">
//                 <label className="block mb-2 font-semibold">Reason</label>
//                 <textarea
//                   name="reason"
//                   value={newLeave.reason}
//                   onChange={handleInputChange}
//                   rows={3}
//                   className="w-full border px-4 py-2 rounded focus:outline-none focus:border-[#2A546D]"
//                   placeholder="Provide a brief reason..."
//                 />
//               </div>
//             </form>

//             <div className="flex justify-end mt-4">
//               <button
//                 onClick={closeModal}
//                 className="mr-2 h-[40px] w-[100px] bg-gray-300 text-gray-700 font-medium rounded hover:bg-gray-400"
//               >
//                 Cancel
//               </button>
//               <button
//                 onClick={handleAddLeave}
//                 disabled={saving}
//                 className={`h-[40px] w-[120px] text-white font-medium rounded ${
//                   saving ? "bg-gray-400" : "bg-[#2A546D] hover:opacity-90"
//                 }`}
//               >
//                 {saving ? "Saving..." : "Submit"}
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default ApplyLeave;



/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { differenceInDays, parseISO } from "date-fns";
import { FaPlusCircle } from "react-icons/fa";
import { IoMdCheckmarkCircleOutline, IoMdCloseCircleOutline } from "react-icons/io";
import { toast } from "react-toastify";
import dayjs from "dayjs";
import { leavesAPI } from "../../../services/api";

const mapToBackendType = (uiType) => {
  switch (uiType) {
    case "Earned Leave": return "earned";
    case "Sick Leave":   return "sick";
    case "Casual Leave": return "casual";
    default:             return "casual";
  }
};

const mapToUiType = (backendType) => {
  switch (backendType) {
    case "earned": return "Earned Leave";
    case "sick":   return "Sick Leave";
    case "casual": return "Casual Leave";
    default:       return backendType;
  }
};

const emptyLeave = {
  leaveType: "",
  startdate: "",
  enddate: "",
  selecthalf: "Full Day",
  reason: "",
  status: "Pending",
};

function ApplyLeave() {
  const [leaves, setLeaves] = useState([]);
  const [leaveCount, setLeaveCount] = useState({
    casual: 0, sick: 0, earned: 0,
    casualAllocated: 0, casualUsed: 0, casualPending: 0,
    sickAllocated: 0,   sickUsed: 0,   sickPending: 0,
    earnedAllocated: 0, earnedUsed: 0, earnedPending: 0,
    totalPending: 0,
  });
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [saving, setSaving] = useState(false);

  const [errorModalOpen, setErrorModalOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const [newLeave, setNewLeave] = useState(emptyLeave);

  useEffect(() => { fetchData(); }, []);

  const fetchData = async () => {
    setLoading(true);
    try {
      const [balanceRes, leavesRes] = await Promise.all([
        leavesAPI.myBalance(),
        leavesAPI.myLeaves(),
      ]);
      setLeaveCount(balanceRes.data || {});
      setLeaves(Array.isArray(leavesRes.data) ? leavesRes.data : []);
    } catch (err) {
      const detail = err?.response?.data?.detail;
      toast.error(typeof detail === "string" ? detail : "Failed to load leave data");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (newLeave.startdate && newLeave.enddate) {
      const fromDate = parseISO(newLeave.startdate);
      const toDate = parseISO(newLeave.enddate);
      if (toDate >= fromDate) {
        const numOfDays = differenceInDays(toDate, fromDate) + 1;
        setNewLeave((prev) => ({ ...prev, noOfDays: `${numOfDays} Days` }));
      }
    }
  }, [newLeave.startdate, newLeave.enddate]);

  const closeModal = () => {
    setIsModalOpen(false);
    setNewLeave(emptyLeave);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewLeave((prev) => ({ ...prev, [name]: value }));
  };

  const handleAddLeave = async () => {
    if (!newLeave.leaveType || !newLeave.startdate || !newLeave.enddate) {
      toast.error("Please fill all required fields");
      return;
    }

    const payload = {
      leaveType: mapToBackendType(newLeave.leaveType),
      startdate: newLeave.startdate,
      enddate: newLeave.enddate,
      selecthalf: newLeave.selecthalf || "Full Day",
      reason: newLeave.reason,
    };

    setSaving(true);
    try {
      await leavesAPI.apply(payload);
      closeModal();
      setShowSuccessMessage(true);
      setTimeout(() => setShowSuccessMessage(false), 3000);
      await fetchData();
    } catch (err) {
      const detail = err?.response?.data?.detail;
      const errorText =
        typeof detail === "string" ? detail : "Failed to apply for leave";

      const criticalKeywords = [
        "Insufficient", "not allocated", "not configured", "inactive",
        "balance", "overlapping", "Monthly limit", "maximum",
        "backdated", "future-dated", "Half-day", "continuous",
      ];
      const isCritical = criticalKeywords.some((k) =>
        errorText.toLowerCase().includes(k.toLowerCase())
      );

      if (isCritical) {
        setErrorMessage(errorText);
        setErrorModalOpen(true);
      } else {
        toast.error(errorText);
      }
    } finally {
      setSaving(false);
    }
  };

  const settingStatus = (status) => {
    const s = status.toLowerCase();
    const statusClasses = {
      approved:  "bg-[#04B440] p-2 rounded-lg text-white",
      rejected:  "bg-red-500 p-2 rounded-lg text-white",
      cancelled: "bg-gray-400 p-2 rounded-lg text-white",
      pending:   "bg-yellow-500 px-[15px] p-2 rounded-lg text-white",
    };
    return (
      <span className={`${statusClasses[s] || "bg-gray-300"} capitalize`}>
        {s}
      </span>
    );
  };

  return (
    <div className="mt-4 p-4 min-h-screen">
      <div className="flex flex-col md:flex-row justify-between">
        <span className="text-[#2A546D] text-sm lg:text-lg font-medium">
          Employee / Apply Leave
        </span>
      </div>

      <div className="flex justify-end mr-4 mt-4">
        <button
          className="bg-[#2A546D] text-white flex items-center rounded-lg p-3 px-5 lg:text-lg hover:opacity-90"
          onClick={() => setIsModalOpen(true)}
        >
          <FaPlusCircle className="text-white text-base lg:text-lg mr-2" />
          <span className="text-xs sm:text-sm md:text-base lg:text-lg">
            Apply Leave
          </span>
        </button>
      </div>

      {/* Balance cards */}
      <div className="flex flex-wrap justify-around text-white gap-4 pt-4">
        {[
          { label: "Earned Leave", key: "earned" },
          { label: "Sick Leave",   key: "sick" },
          { label: "Casual Leave", key: "casual" },
        ].map((item, i) => {
          const available = leaveCount[item.key] ?? 0;
          const pending   = leaveCount[`${item.key}Pending`] ?? 0;
          const used      = leaveCount[`${item.key}Used`] ?? 0;
          const allocated = leaveCount[`${item.key}Allocated`] ?? 0;

          return (
            <div
              key={i}
              className="py-6 text-lg px-4 rounded-lg lg:w-[300px] w-full font-semibold min-h-[200px] flex pl-4 flex-col bg-[#2a546d]"
            >
              <div className="text-center lg:text-lg font-bold">{item.label}</div>
              <ul className="text-[15px] list-none text-white mt-4 space-y-2">
                <li className="flex justify-between items-center">
                  <span className="inline-flex items-center">
                    <span className="inline-block w-2 h-2 bg-white rounded-full mr-2"></span>
                    <span className="font-medium">Available:</span>
                  </span>
                  <span className="ml-4">{available}</span>
                </li>
                <li className="flex justify-between items-center">
                  <span className="inline-flex items-center">
                    <span className="inline-block w-2 h-2 bg-white rounded-full mr-2"></span>
                    <span>Pending:</span>
                  </span>
                  <span className="ml-4">{pending}</span>
                </li>
                <li className="flex justify-between items-center">
                  <span className="inline-flex items-center">
                    <span className="inline-block w-2 h-2 bg-white rounded-full mr-2"></span>
                    <span>Used:</span>
                  </span>
                  <span className="ml-4">{used}</span>
                </li>
                <li className="flex justify-between items-center opacity-80">
                  <span className="inline-flex items-center">
                    <span className="inline-block w-2 h-2 bg-white rounded-full mr-2"></span>
                    <span>Allocated:</span>
                  </span>
                  <span className="ml-4">{allocated}</span>
                </li>
              </ul>
            </div>
          );
        })}
      </div>

      {/* Leaves table */}
      <div className="mt-8">
        <h3 className="text-lg text-[#2a546d] font-semibold mb-2">My Leaves</h3>
        <div className="overflow-x-scroll scrollbar-thin scrollbar-track-white scrollbar-thumb-[#2a546d] pt-4 mx-4">
          <table className="min-w-full w-screen overflow-x-scroll text-nowrap">
            <thead>
              <tr className="bg-[#2a546d] text-white">
                <th className="p-3 border border-r-white border-[#2a546d]">Leave Type</th>
                <th className="p-3 border-r border-white">Start Date</th>
                <th className="p-3 border-r border-white">End Date</th>
                <th className="p-3 border-r border-white">Days</th>
                <th className="p-3 border-r border-white">Full / Half-Day</th>
                <th className="p-3 border-r border-white">Reason</th>
                <th className="p-3 border border-[#2a546d]">Status</th>
              </tr>
            </thead>
            <tbody>
              {loading ? (
                <tr><td colSpan={7} className="text-center py-4 text-gray-500">Loading leaves...</td></tr>
              ) : leaves.length === 0 ? (
                <tr><td colSpan={7} className="text-center py-4 text-gray-500">No leave records found.</td></tr>
              ) : (
                leaves.map((leave) => (
                  <tr key={leave.id} className="text-center text-black border border-[#2a546d]">
                    <td className="p-3 border-r border-[#2a546d]">{mapToUiType(leave.leaveType)}</td>
                    <td className="p-3 border-r border-[#2a546d]">{dayjs(leave.fromDate).format("DD MMM YYYY")}</td>
                    <td className="p-3 border-r border-[#2a546d]">{dayjs(leave.toDate).format("DD MMM YYYY")}</td>
                    <td className="p-3 border-r border-[#2a546d]">
                      {leave.totalDays} {leave.totalDays === 1 ? "Day" : "Days"}
                    </td>
                    <td className="p-3 border-r border-[#2a546d]">{leave.halfDay || "Full Day"}</td>
                    <td className="p-3 border-r border-[#2a546d]">{leave.reason || "—"}</td>
                    <td className="p-3">{settingStatus(leave.status)}</td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Error modal */}
      {errorModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div className="bg-white p-8 rounded-lg text-center max-w-sm w-full shadow-2xl">
            <IoMdCloseCircleOutline className="inline-block text-6xl text-red-500 mb-4" />
            <h2 className="text-xl font-bold text-gray-800 mb-2">Cannot Apply</h2>
            <p className="text-gray-600 mb-6">{errorMessage}</p>
            <button
              onClick={() => setErrorModalOpen(false)}
              className="w-full bg-[#2A546D] text-white py-2 rounded-lg hover:opacity-90"
            >
              Okay
            </button>
          </div>
        </div>
      )}

      {/* Success modal */}
      {showSuccessMessage && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-[#2A546D] p-8 rounded-lg text-center text-white">
            <h2 className="text-xl mb-4">
              <IoMdCheckmarkCircleOutline className="inline-block text-6xl" />
            </h2>
            <p>Leave applied successfully!</p>
          </div>
        </div>
      )}

      {/* Apply modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-40">
          <div className="bg-white text-black h-auto max-h-[90vh] overflow-y-auto p-8 scrollbar-thin scrollbar-track-white scrollbar-thumb-[#2a546d] rounded shadow-lg max-w-md w-full">
            <h3 className="text-lg font-semibold mb-4 text-[#2A546D]">Apply for Leave</h3>
            <form onSubmit={(e) => e.preventDefault()}>
              <div className="mb-4">
                <label className="block mb-2 font-semibold">Leave Type *</label>
                <select
                  name="leaveType"
                  value={newLeave.leaveType}
                  onChange={handleInputChange}
                  className="w-full border px-4 py-2 rounded focus:outline-none focus:border-[#2A546D]"
                >
                  <option value="" disabled hidden>Select Leave Type</option>
                  <option value="Earned Leave">Earned Leave ({leaveCount.earned ?? 0} available)</option>
                  <option value="Sick Leave">Sick Leave ({leaveCount.sick ?? 0} available)</option>
                  <option value="Casual Leave">Casual Leave ({leaveCount.casual ?? 0} available)</option>
                </select>
              </div>
              <div className="mb-4">
                <label className="block mb-2 font-semibold">Start Date *</label>
                <input type="date" name="startdate" value={newLeave.startdate}
                  onChange={handleInputChange}
                  className="w-full border px-4 py-2 rounded focus:outline-none focus:border-[#2A546D]" />
              </div>
              <div className="mb-4">
                <label className="block mb-2 font-semibold">End Date *</label>
                <input type="date" name="enddate" value={newLeave.enddate}
                  onChange={handleInputChange}
                  className="w-full border px-4 py-2 rounded focus:outline-none focus:border-[#2A546D]" />
              </div>
              <div className="mb-4">
                <label className="block mb-2 font-semibold">Full / Half-Day</label>
                <select name="selecthalf" value={newLeave.selecthalf}
                  onChange={handleInputChange}
                  className="w-full border px-4 py-2 rounded focus:outline-none focus:border-[#2A546D]">
                  <option value="Full Day">Full Day</option>
                  <option value="First Half">First Half</option>
                  <option value="Second Half">Second Half</option>
                </select>
              </div>
              <div className="mb-4">
                <label className="block mb-2 font-semibold">Reason</label>
                <textarea name="reason" value={newLeave.reason}
                  onChange={handleInputChange} rows={3}
                  className="w-full border px-4 py-2 rounded focus:outline-none focus:border-[#2A546D]"
                  placeholder="Provide a brief reason..." />
              </div>
            </form>

            <div className="flex justify-end mt-4">
              <button onClick={closeModal}
                className="mr-2 h-[40px] w-[100px] bg-gray-300 text-gray-700 font-medium rounded hover:bg-gray-400">
                Cancel
              </button>
              <button onClick={handleAddLeave} disabled={saving}
                className={`h-[40px] w-[120px] text-white font-medium rounded ${
                  saving ? "bg-gray-400" : "bg-[#2A546D] hover:opacity-90"
                }`}>
                {saving ? "Saving..." : "Submit"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ApplyLeave;