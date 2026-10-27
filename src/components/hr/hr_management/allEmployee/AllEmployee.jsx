// /* eslint-disable no-unused-vars */
// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import uncheckbox from "../../../../assets/hr/employee/checkbox/uncheck.png";
// import checkbox from "../../../../assets/hr/employee/checkbox/checkbox.png";
// import { FiPlusCircle, FiEdit, FiTrash2, FiUpload } from "react-icons/fi";
// import { LuImport } from "react-icons/lu";
// //import { API_BASE_URL } from "../../../../Config/api";
// import * as XLSX from "xlsx";
// import { useNavigate } from "react-router-dom";
// import { IoMdCheckmarkCircleOutline } from "react-icons/io";
// import { ImCross } from "react-icons/im";
// import { MdOutlineCheckBoxOutlineBlank } from "react-icons/md";
// import { IoMdCheckbox } from "react-icons/io"; //check
// function AllEmployees() {
//   const [employees, setEmployees] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [showModal, setShowModal] = useState(false);
//   const [isChecked, setIsChecked] = useState({});
//   const [headerChecked, setHeaderChecked] = useState(false);
//   const [showSuccessMessage, setShowSuccessMessage] = useState(false);
//   const [showDeleteSuccessMessage, setShowDeleteSuccessMessage] =
//     useState(false);
//   const [errorMessage, setErrorMessage] = useState("");
//   const [newEmployee, setNewEmployee] = useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//     phoneNumber: "",
//     role: "",
//     employeeId: "",
//     joinDate: "",
//     panNumber: "",
//     aadharCardNumber: "",
//     dob: "",
//     personalEmail: "",
//     designation: "",
//     bloodGroup: "",
//   });
//   const [editEmployeeId, setEditEmployeeId] = useState(null);
//   const [isPopupOpen, setIsPopupOpen] = useState(false);
//   const jwt = localStorage.getItem("hrJwt");
//   const navigate = useNavigate();

//   // useEffect(() => {
//   //   if (!jwt) {
//   //     navigate("/login");
//   //     return;
//   //   }
//   //   fetchEmployees();
//   // }, [jwt]);

//   const fetchEmployees = async () => {
//     try {
//       const response = await axios.get(
//         `${API_BASE_URL}/auth/all-users`,
//         {
//           headers: {
//             Authorization: `Bearer ${jwt}`,
//           },
//         }
//       );
//       setEmployees(response.data);
//       setLoading(false);
//     } catch (error) {
//       console.error("Error fetching employees:", error);
//       setErrorMessage("Error fetching employees");
//       setTimeout(() => setErrorMessage(""), 3000); // add
//       setLoading(false);
//     }
//   };

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setNewEmployee((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   const generatePassword = (length = 12) => {
//     const characters =
//       "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+";
//     let password = "";
//     for (let i = 0; i < length; i++) {
//       const randomIndex = Math.floor(Math.random() * characters.length);
//       password += characters[randomIndex];
//     }
//     return password;
//   };

//   const handleInvite = async (employee) => {
//     try {
//       const password = generatePassword();
//       const response = await axios.post(`${API_BASE_URL}/employee/register`, {
//         firstName: employee.firstName,
//         lastName: employee.lastName,
//         email: employee.email,
//         phoneNumber: employee.phoneNumber,
//         role: employee.role,
//         employeeId: employee.employeeId,
//         joinDate: employee.joinDate,
//         aadharCardNumber: employee.aadharCardNumber,
//         panNumber: employee.panNumber,
//         dob: employee.dob,
//         personalEmail: employee.personalEmail,
//         designation: employee.designation,
//         bloodGroup: employee.bloodGroup,
//         password,
//       });
//       setEmployees((prev) => [...prev, response.data]);
//       setShowSuccessMessage(true);
//       setTimeout(() => setShowSuccessMessage(false), 3000);
//       closeModal();
//       fetchEmployees();
//       console.log("Invite sent:", response.data);
//     } catch (error) {
//       console.error("Error sending invite:", error);
//       setErrorMessage("Error sending invite");
//       setTimeout(() => setErrorMessage(""), 3000);
//     }
//   };

//   const handleEditEmployee = (employee) => {
//     setNewEmployee({
//       firstName: employee.firstName,
//       lastName: employee.lastName,
//       email: employee.email,
//       phoneNumber: employee.phoneNumber,
//       role: employee.role,
//       employeeId: employee.employeeId,
//       joinDate: employee.joinDate,
//       aadharCardNumber: employee.aadharCardNumber,
//       panNumber: employee.panNumber,
//       dob: employee.dob,
//       personalEmail: employee.personalEmail,
//       designation: employee.designation,
//       bloodGroup: employee.bloodGroup,
//     });
//     setEditEmployeeId(employee.employeeId);
//     setShowModal(true);
//   };

//   const handleUpdateEmployee = async () => {
//     try {
//       const response = await axios.put(
//         `${API_BASE_URL}/employee/update/${editEmployeeId}`,
//         newEmployee
//       );
//       setEmployees((prev) =>
//         prev.map((emp) =>
//           emp.employeeId === editEmployeeId ? response.data : emp
//         )
//       );
//       setShowSuccessMessage(true);
//       setTimeout(() => setShowSuccessMessage(false), 3000);
//       closeModal();
//     } catch (error) {
//       console.error("Error updating employee:", error);
//       setErrorMessage("Error updating employee");
//       setTimeout(() => setErrorMessage(""), 3000);
//     }
//   };

//   const handleDeleteEmployee = async (employeeId) => {
//     try {
//       await axios.delete(`${API_BASE_URL}/employee/delete/${employeeId}`);
//       setEmployees((prev) =>
//         prev.filter((employee) => employee.employeeId !== employeeId)
//       );
//       setShowDeleteSuccessMessage(true);
//       setTimeout(() => setShowDeleteSuccessMessage(false), 3000);
//     } catch (error) {
//       console.error("Error deleting employee:", error);
//       setErrorMessage("Error deleting employee");
//       setTimeout(() => setErrorMessage(""), 3000);
//     }
//   };

//   const handleAddEmployee = () => {
//     setEmployees((prevEmployees) => [...prevEmployees, newEmployee]);
//     setNewEmployee({
//       employeeId: "",
//       firstName: "",
//       lastName: "",
//       joinDate: "",
//       phoneNumber: "",
//       bloodGroup: "",
//       personalEmail: "",
//       email: "",
//       dob: "",
//       designation: "",
//       role: "",
//       panNumber: "",
//       aadharCardNumber: "",
//       profileImage: "",
//     });
//     setShowModal(false);
//   };

//   const closeModal = () => {
//     setShowModal(false);
//     setNewEmployee({
//       firstName: "",
//       lastName: "",
//       personalEmail: "",
//       email: "",
//       phoneNumber: "",
//       role: "",
//       employeeId: "",
//       joinDate: "",
//       panNumber: "",
//       bloodGroup: "",
//       aadharCardNumber: "",
//       designation: "",
//       dob: "",
//     });
//     setEditEmployeeId(null);
//   };

//   const handleCheckboxChange = (id) => {
//     setIsChecked((prevState) => {
//       const newState = { ...prevState, [id]: !prevState[id] };

//       // Update the header checkbox based on all row checkboxes
//       const allChecked = employees.every(
//         (employee) => newState[employee.employeeId]
//       );
//       setHeaderChecked(allChecked);

//       return newState;
//     });
//   };

//   const handleHeaderCheckboxChange = () => {
//     const newCheckedState = !headerChecked;
//     setHeaderChecked(newCheckedState);

//     const newIsChecked = {};
//     employees.forEach((employee) => {
//       newIsChecked[employee.employeeId] = newCheckedState;
//     });
//     setIsChecked(newIsChecked);
//   };

//   const excelDateToJSDate = (serial) => {
//     const excelEpoch = new Date(Date.UTC(1900, 0, 0)); // Excel epoch date
//     const jsDate = new Date(excelEpoch.getTime() + (serial - 1) * 86400 * 1000); // Convert days to ms
//     // Handle special case where Excel considers 1900 a leap year
//     if (serial < 60) {
//       jsDate.setDate(jsDate.getDate() - 1); // Adjust for leap year bug
//     }
//     return jsDate.toISOString().split("T")[0]; // Return date in YYYY-MM-DD format
//   };

//   const handleFileUpload = async (e) => {
//     const file = e.target.files[0];
//     const reader = new FileReader();

//     reader.onload = async (event) => {
//       try {
//         const arrayBuffer = event.target.result;
//         const workbook = XLSX.read(arrayBuffer, { type: "array" });
//         const sheetName = workbook.SheetNames[0];
//         const sheet = workbook.Sheets[sheetName];
//         const data = XLSX.utils.sheet_to_json(sheet);
//         const existingEmployeeIds = new Set(
//           employees.map((emp) => emp.employeeId)
//         );
//         const newEmployees = [];

//         // Format the data as needed and generate passwords
//         const formattedData = data.map((item) => {
//           const password = generatePassword();
//           return {
//             employee: {
//               firstName: item["First Name"],
//               lastName: item["Last Name"],
//               email: item["Official Email ID"],
//               phoneNumber: item["Contact No"],
//               role: item["Role"],
//               employeeId: item["Emp ID"],
//               joinDate: excelDateToJSDate(item["DOJ"]),
//               aadharCardNumber: item["Aadhar Card Number"],
//               personalEmail: item["Personal Email ID"],
//               bloodGroup: item["Blood Group"],
//               dob: excelDateToJSDate(item["DOB"]),
//               panNumber: item["PAN Number"],
//               designation: item["Designation"],
//             },
//             password: password, // Include the generated password
//           };
//         });

//         const employeesToAdd = formattedData.filter(
//           (employee) => !existingEmployeeIds.has(employee.employeeId)
//         );

//         if (employeesToAdd.length === 0) {
//           setErrorMessage("No new employees to add");
//           setTimeout(() => setErrorMessage(""), 3000);
//           return;
//         }

//         setShowSuccessMessage(true);
//         setTimeout(() => setShowSuccessMessage(false), 3000);
//         fetchEmployees();
//       } catch (error) {
//         console.error("Error processing file:", error);
//         setErrorMessage("Error processing file");
//         setTimeout(() => setErrorMessage(""), 3000);
//       } finally {
//         setIsPopupOpen(false); // Close the popup after processing
//       }
//     };

//     reader.readAsArrayBuffer(file); // Use readAsArrayBuffer for binary files
//   };
//   const handleDownload = () => {
//     const worksheet = XLSX.utils.json_to_sheet(employees);
//     const workbook = XLSX.utils.book_new();
//     XLSX.utils.book_append_sheet(workbook, worksheet, "Employees");
//     XLSX.writeFile(workbook, "employees.xlsx");
//   };

//   return (
//     <>
//       <div id="main" className=" p-4 min-h-screen  mt-4 ">
//         <div className=" mb-4">
//           <p className="text-[#0098f1] text-sm lg:text-lg font-bold mb-4">
//             Hr Management / Employee / All Employees
//           </p>
//         </div>

//         <div className="flex flex-col lg:flex-row justify-end mb-4 space-y-2 lg:space-y-0 lg:space-x-2">
//           <div
//             id="addemployee"
//             className="w-full lg:w-auto inline-block h-[48px] rounded-lg justify-end text-center items-center bg-[#0098f1]"
//           >
//             <button
//               type="button"
//               className="flex justify-center items-center w-full lg:w-[186px] h-[48px] text-white"
//               onClick={() => setShowModal(true)}
//             >
//               <FiPlusCircle className="text-2xl font-bold mr-2 bg-[#0098f1]" />
//               Add Employee
//             </button>
//           </div>
//           <div
//             id="importexcel"
//             className="w-full lg:w-auto inline-block h-[48px] rounded-lg justify-end items-center bg-[#0098f1]"
//           >
//             <button
//               type="button"
//               className="flex justify-center items-center w-full lg:w-[186px] h-[48px] text-white"
//               onClick={() => setIsPopupOpen(true)}
//             >
//               <LuImport className="text-2xl font-bold mr-2 bg-[#0098f1]" />
//               Import Employee
//             </button>
//           </div>
//           <div
//             id="downloadData"
//             className="w-full lg:w-auto inline-block h-[48px] rounded-lg justify-end items-center bg-[#0098f1]"
//           >
//             <button
//               type="button"
//               className="flex justify-center items-center w-full lg:w-[186px] h-[48px] text-white"
//               onClick={handleDownload}
//             >
//               <FiUpload className="text-2xl font-bold mr-2 bg-[#0098f1]" />
//               Download Data
//             </button>
//           </div>
//         </div>

//         <div
//           id="table"
//           className="  overflow-x-scroll overflow-y-scroll scrollbar-thin   scrollbar-track-white scrollbar-thumb-[#0098f1] pt-4 mx-4"
//         >
//           {loading ? (
//             <div>Loading...</div>
//           ) : (
//             <table className="min-w-full max-w-3xl mx-auto text-nowrap">
//               <thead className="bg-[#0098f1] text-white ">

//                 <tr className="border border-[#0098F1] text-center">
//                   <th className=" border-r border-white text-sm font-medium text-nowrap">
//                     <img
//                       src={headerChecked ? checkbox : uncheckbox}
//                       alt="Header Checkbox"
//                       onClick={handleHeaderCheckboxChange}
//                       className=""
//                     />
//                   </th>
//                   <th className="py-2 px-2 border-r border-white text-sm font-medium text-nowrap">
//                     SL.NO
//                   </th>
//                   <th className="py-2 px-2 border-r border-white text-sm font-medium text-nowrap">
//                     Profile
//                   </th>
//                   <th className="py-2 px-2 border-r border-white text-sm font-medium text-nowrap">
//                     {" "}
//                     ID
//                   </th>
//                   <th className="py-2 px-2 border-r border-white text-sm font-medium text-nowrap">
//                     Name
//                   </th>
//                   <th className="py-2 px-2 border-r border-white text-sm font-medium text-nowrap">
//                     DOJ
//                   </th>
//                   <th className="py-2 px-2 border-r border-white text-sm font-medium text-nowrap">
//                     Contact No
//                   </th>
//                   <th className="py-2 px-2 border-r border-white text-sm font-medium text-nowrap">
//                     Blood Group
//                   </th>
//                   <th className="py-2 px-2 border-r border-white text-sm font-medium text-nowrap">
//                     Personal Email ID
//                   </th>
//                   <th className="py-2 px-2 border-r border-white text-sm font-medium text-nowrap">
//                     Official Mail ID{" "}
//                   </th>
//                   <th className="py-2 px-2 border-r border-white text-sm font-medium text-nowrap">
//                     DOB
//                   </th>
//                   <th className="py-2 px-2 border-r border-white text-sm font-medium text-nowrap">
//                     Designation
//                   </th>
//                   <th className="py-2 px-2 border-r border-white text-sm font-medium text-nowrap">
//                     Role
//                   </th>
//                   <th className="py-2 px-2 border-r border-white text-sm font-medium text-nowrap">
//                     PAN Number
//                   </th>
//                   <th className="py-2 px-2 border-r border-white text-sm font-medium text-nowrap">
//                     Aadhar Card Number
//                   </th>
//                   <th className="py-2 px-2 border-r border-white text-sm font-medium text-nowrap">
//                     Invite
//                   </th>
//                   <th className="py-2 px-2 text-sm font-medium text-nowrap">

//                     Action
//                   </th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {employees.map((employee, index) => (

//                   <tr key={employee.employeeId}>
//                     <td
//                       onClick={() => handleCheckboxChange(employee.employeeId)}
//                       className="py-2 px-2 border-r border-[#0098f1]"
//                     >
//                       {isChecked[employee.employeeId] ? (
//                         <IoMdCheckbox className="text-[#0098f1] w-7 h-7  " />
//                       ) : (
//                         <MdOutlineCheckBoxOutlineBlank className="w-7 h-7" />
//                       )}
//                     </td>

//                     <td className="py-2 px-2 border-r border-[#0098f1]">{index + 1}</td>
//                     <td className="py-2 px-2 border-r border-[#0098f1]">

//                       <img
//                         src={employee.profileImage}
//                         alt="profile"
//                         className="w-12 h-12 rounded-full"
//                       />
//                     </td>
//                     <td className="py-2 px-2 border-r border-[#0098f1]">
//                       {employee.employeeId}
//                     </td>
//                     <td className="py-2 px-2 border-r border-[#0098f1]">
//                       {employee.firstName} {employee.lastName}
//                     </td>
//                     <td className="py-2 px-2 border-r border-[#0098f1]">
//                       {employee.joinDate}
//                     </td>
//                     <td className="py-2 px-2 border-r border-[#0098f1]">
//                       {employee.phoneNumber}
//                     </td>
//                     <td className="py-2 px-2 border-r border-[#0098f1]">
//                       {employee.bloodGroup}
//                     </td>
//                     <td className="py-2 px-2 border-r border-[#0098f1]">
//                       {employee.personalEmail}
//                     </td>
//                     <td className="py-2 px-2 border-r border-[#0098f1]">
//                       {employee.email}
//                     </td>
//                     <td className="py-2 px-2 border-r border-[#0098f1]">
//                       {employee.dob}
//                     </td>
//                     <td className="py-2 px-2 border-r border-[#0098f1]">
//                       {employee.designation}
//                     </td>
//                     <td className="py-2 px-2 border-r border-[#0098f1]">
//                       {employee.role}
//                     </td>
//                     <td className="py-2 px-2 border-r border-[#0098f1]">
//                       {employee.panNumber}
//                     </td>
//                     <td className="py-2 px-2 border-r border-[#0098f1]">
//                       {employee.aadharCardNumber}
//                     </td>
//                     <td className="py-2 px-2 border-r border-[#0098f1]">
//                       <button
//                         className="bg-blue-500 text-white p-2 rounded"
//                         onClick={() => handleInvite(employee)}
//                       >
//                         Invite
//                       </button>
//                     </td>
//                     <td className="flex justify-center mt-5">
//                       <FiEdit
//                         className="text-blue-600 cursor-pointer mr-2"
//                         onClick={() => handleEditEmployee(employee)}
//                       />
//                       <FiTrash2
//                         className="text-red-600 cursor-pointer"
//                         onClick={() =>
//                           handleDeleteEmployee(employee.employeeId)
//                         }
//                       />
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           )}
//         </div>
//       </div>
//       {/* Add/Edit Employee Modal */}
//       {showModal && (
//         <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
//           <div className="bg-white p-6 h-[400px] overflow-y-scroll rounded-lg w-1/3">
//             <h2 className="text-xl font-bold mb-4">
//               {editEmployeeId ? "Edit Employee" : "Add Employee"}
//             </h2>
//             <form>
//               <div className="mb-4">
//                 <label className="block text-gray-700">Employee ID</label>
//                 <input
//                   type="text"
//                   name="employeeId"
//                   value={newEmployee.employeeId}
//                   onChange={handleInputChange}
//                   className="border p-2 w-full"
//                 />
//               </div>
//               <div className="mb-4">
//                 <label className="block text-gray-700">First Name</label>
//                 <input
//                   type="text"
//                   name="firstName"
//                   value={newEmployee.firstName}
//                   onChange={handleInputChange}
//                   className="border p-2 w-full"
//                 />
//               </div>
//               <div className="mb-4">
//                 <label className="block text-gray-700">Last Name</label>
//                 <input
//                   type="text"
//                   name="lastName"
//                   value={newEmployee.lastName}
//                   onChange={handleInputChange}
//                   className="border p-2 w-full"
//                 />
//               </div>
//               <div className="mb-4">
//                 <label className="block text-gray-700">Joining Date</label>
//                 <input
//                   type="date"
//                   name="joinDate"
//                   value={newEmployee.joinDate}
//                   onChange={handleInputChange}
//                   className="border p-2 w-full"
//                 />
//               </div>
//               <div className="mb-4">
//                 <label className="block text-gray-700">Blood Group</label>
//                 <input
//                   type="text"
//                   name="bloodGroup"
//                   value={newEmployee.bloodGroup}
//                   onChange={handleInputChange}
//                   className="border p-2 w-full"
//                 />
//               </div>
//               <div className="mb-4">
//                 <label className="block text-gray-700">Personal Email</label>
//                 <input
//                   type="email"
//                   name="personalEmail"
//                   value={newEmployee.personalEmail}
//                   onChange={handleInputChange}
//                   className="border p-2 w-full"
//                 />
//               </div>
//               <div className="mb-4">
//                 <label className="block text-gray-700">Official Email</label>
//                 <input
//                   type="email"
//                   name="email"
//                   value={newEmployee.email}
//                   onChange={handleInputChange}
//                   className="border p-2 w-full"
//                 />
//               </div>
//               <div className="mb-4">
//                 <label className="block text-gray-700">Phone</label>
//                 <input
//                   type="text"
//                   name="phoneNumber"
//                   value={newEmployee.phoneNumber}
//                   onChange={handleInputChange}
//                   className="border p-2 w-full"
//                 />
//               </div>
//               <div className="mb-4">
//                 <label className="block text-gray-700">DOB</label>
//                 <input
//                   type="date"
//                   name="dob"
//                   value={newEmployee.dob}
//                   onChange={handleInputChange}
//                   className="border p-2 w-full"
//                 />
//               </div>
//               <div className="mb-4">
//                 <label className="block text-gray-700">Designation</label>
//                 <input
//                   type="text"
//                   name="designation"
//                   value={newEmployee.designation}
//                   onChange={handleInputChange}
//                   className="border p-2 w-full"
//                 />
//               </div>
//               <div className="mb-4">
//                 <label className="block text-gray-700">Role</label>
//                 <input
//                   type="text"
//                   name="role"
//                   value={newEmployee.role}
//                   onChange={handleInputChange}
//                   className="border p-2 w-full"
//                 />
//               </div>
//               <div className="mb-4">
//                 <label className="block text-gray-700">PAN Number</label>
//                 <input
//                   type="text"
//                   name="panNumber"
//                   value={newEmployee.panNumber}
//                   onChange={handleInputChange}
//                   className="border p-2 w-full"
//                 />
//               </div>
//               <div className="mb-4">
//                 <label className="block text-gray-700">
//                   Aadhar Card Number
//                 </label>
//                 <input
//                   type="text"
//                   name="aadharCardNumber"
//                   value={newEmployee.aadharCardNumber}
//                   onChange={handleInputChange}
//                   className="border p-2 w-full"
//                 />
//               </div>

//               <div className="flex justify-end">
//                 <button
//                   type="button"
//                   onClick={
//                     editEmployeeId ? handleUpdateEmployee : handleAddEmployee
//                   }
//                   className="bg-blue-500 text-white px-4 py-2 rounded"
//                 >
//                   {editEmployeeId ? "Update" : "Add"}
//                 </button>
//                 <button
//                   type="button"
//                   onClick={closeModal}
//                   className="ml-2 bg-gray-500 text-white px-4 py-2 rounded"
//                 >
//                   Cancel
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       )}

//       {/* Import Employees Popup */}
//       {isPopupOpen && (
//         <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-75">
//           <div className="bg-white p-6 rounded-lg shadow-lg">
//             <h2 className="text-xl font-bold mb-4">Import Employees</h2>
//             <input
//               type="file"
//               accept=".xlsx, .xls"
//               onChange={handleFileUpload}
//               className="mb-4"
//             />
//             <button
//               type="button"
//               onClick={() => setIsPopupOpen(false)}
//               className="bg-gray-500 text-white px-4 py-2 rounded"
//             >
//               Close
//             </button>
//           </div>
//         </div>
//       )}

//       {showSuccessMessage && (
//         <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 z-50">
//           <div className="bg-[#0098f1] p-8 rounded-lg text-center text-white">
//             <h2 className="text-xl mb-4">
//               <IoMdCheckmarkCircleOutline className="inline-block text-6xl" />
//             </h2>
//             Employee added/updated successfully!
//           </div>
//         </div>
//       )}

//       {showDeleteSuccessMessage && (
//         <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 z-50">
//           <div className="bg-red-600 p-8 rounded-lg text-center text-white">
//             <h2 className="text-xl mb-4">
//               <IoMdCheckmarkCircleOutline className="inline-block text-6xl" />
//             </h2>
//             Employee Removed successfully!
//           </div>
//         </div>
//       )}

//       {errorMessage && (
//         <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 z-50">
//           <div className="bg-red-600 p-8 rounded-lg text-center text-white">
//             <h2 className="text-xl mb-4">
//               <ImCross className="inline-block text-4xl" />
//             </h2>
//             {errorMessage}
//           </div>
//         </div>
//       )}
//     </>
//   );
// }

// export default AllEmployees;









/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import api from "../../../../services/api";
import uncheckbox from "../../../../assets/hr/employee/checkbox/uncheck.png";
import checkbox from "../../../../assets/hr/employee/checkbox/checkbox.png";
import { FiPlusCircle, FiEdit, FiTrash2, FiUpload } from "react-icons/fi";
import { LuImport } from "react-icons/lu";
import * as XLSX from "xlsx";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { ImCross } from "react-icons/im";
import { MdOutlineCheckBoxOutlineBlank } from "react-icons/md";
import { IoMdCheckbox } from "react-icons/io";

const EMPTY_EMPLOYEE = {
  employeeId: "",
  firstName: "",
  lastName: "",
  joinDate: "",
  phoneNumber: "",
  bloodGroup: "",
  personalEmail: "",
  email: "",
  dob: "",
  designation: "",
  role: "employee",
  panNumber: "",
  aadharCardNumber: "",
  profileImage: "",
};

function AllEmployees() {
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [isChecked, setIsChecked] = useState({});
  const [headerChecked, setHeaderChecked] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [showDeleteSuccessMessage, setShowDeleteSuccessMessage] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [newEmployee, setNewEmployee] = useState(EMPTY_EMPLOYEE);
  const [editEmployeeId, setEditEmployeeId] = useState(null);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  React.useEffect(() => {
    fetchEmployees();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const showError = (msg, ms = 3000) => {
    setErrorMessage(msg);
    setTimeout(() => setErrorMessage(""), ms);
  };

  const fetchEmployees = async () => {
    try {
      setLoading(true);
      const response = await api.get("/employee/getAllEmployee");
      setEmployees(Array.isArray(response.data) ? response.data : []);
    } catch (error) {
      console.error("Error fetching employees:", error);
      showError(error.response?.data?.detail || "Error fetching employees");
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewEmployee((prev) => ({ ...prev, [name]: value }));
  };

  const generatePassword = (length = 12) => {
    const chars =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+";
    let p = "";
    for (let i = 0; i < length; i++) {
      p += chars[Math.floor(Math.random() * chars.length)];
    }
    return p;
  };

  const handleAddEmployee = async () => {
    try {
      const response = await api.post("/employee/register", newEmployee);
      setEmployees((prev) => [...prev, response.data]);
      setShowSuccessMessage(true);
      setTimeout(() => setShowSuccessMessage(false), 3000);
      closeModal();
      fetchEmployees();
    } catch (error) {
      console.error("Error adding employee:", error);
      showError(error.response?.data?.detail || "Error adding employee", 4000);
    }
  };

  const handleInvite = async (employee) => {
    try {
      const password = generatePassword();
      const payload = {
        employeeId: employee.employeeId,
        firstName: employee.firstName,
        lastName: employee.lastName,
        joinDate: employee.joinDate,
        phoneNumber: employee.phoneNumber,
        bloodGroup: employee.bloodGroup,
        personalEmail: employee.personalEmail,
        email: employee.email,
        dob: employee.dob,
        designation: employee.designation,
        role: employee.role,
        panNumber: employee.panNumber,
        aadharCardNumber: employee.aadharCardNumber,
        password,
      };
      const response = await api.post("/employee/register", payload);
      setEmployees((prev) => [...prev, response.data]);
      setShowSuccessMessage(true);
      setTimeout(() => setShowSuccessMessage(false), 3000);
      fetchEmployees();
    } catch (error) {
      console.error("Error sending invite:", error);
      showError(error.response?.data?.detail || "Error sending invite", 4000);
    }
  };

  const handleEditEmployee = (employee) => {
    setNewEmployee({
      employeeId: employee.employeeId || "",
      firstName: employee.firstName || "",
      lastName: employee.lastName || "",
      joinDate: employee.joinDate || "",
      phoneNumber: employee.phoneNumber || "",
      bloodGroup: employee.bloodGroup || "",
      personalEmail: employee.personalEmail || "",
      email: employee.email || "",
      dob: employee.dob || "",
      designation: employee.designation || "",
      role: employee.role || "employee",
      panNumber: employee.panNumber || "",
      aadharCardNumber: employee.aadharCardNumber || "",
      profileImage: employee.profileImage || "",
    });
    setEditEmployeeId(employee.employeeId);
    setShowModal(true);
  };

  const handleUpdateEmployee = async () => {
    try {
      const response = await api.put(
        `/employee/update/${editEmployeeId}`,
        newEmployee
      );
      setEmployees((prev) =>
        prev.map((emp) =>
          emp.employeeId === editEmployeeId ? response.data : emp
        )
      );
      setShowSuccessMessage(true);
      setTimeout(() => setShowSuccessMessage(false), 3000);
      closeModal();
      fetchEmployees();
    } catch (error) {
      console.error("Error updating employee:", error);
      showError(error.response?.data?.detail || "Error updating employee", 4000);
    }
  };

  const handleDeleteEmployee = async (employeeId) => {
    if (!employeeId) return;
    try {
      await api.delete(`/employee/delete/${employeeId}`);
      setEmployees((prev) =>
        prev.filter(
          (e) => e.employeeId !== employeeId && e.ID !== employeeId
        )
      );
      setShowDeleteSuccessMessage(true);
      setTimeout(() => setShowDeleteSuccessMessage(false), 3000);
    } catch (error) {
      console.error("Error deleting employee:", error);
      showError(error.response?.data?.detail || "Error deleting employee", 4000);
    }
  };

  const closeModal = () => {
    setShowModal(false);
    setNewEmployee(EMPTY_EMPLOYEE);
    setEditEmployeeId(null);
  };

  const handleCheckboxChange = (id) => {
    setIsChecked((prev) => {
      const next = { ...prev, [id]: !prev[id] };
      setHeaderChecked(employees.every((e) => next[e.employeeId]));
      return next;
    });
  };

  const handleHeaderCheckboxChange = () => {
    const next = !headerChecked;
    setHeaderChecked(next);
    const map = {};
    employees.forEach((e) => {
      map[e.employeeId] = next;
    });
    setIsChecked(map);
  };

  const excelDateToJSDate = (serial) => {
    if (typeof serial === "string" && serial.includes("-")) return serial;
    const epoch = new Date(Date.UTC(1900, 0, 0));
    const js = new Date(epoch.getTime() + (serial - 1) * 86400 * 1000);
    if (serial < 60) js.setDate(js.getDate() - 1);
    return js.toISOString().split("T")[0];
  };

  const handleFileUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();

    reader.onload = async (event) => {
      try {
        const workbook = XLSX.read(event.target.result, { type: "array" });
        const sheet = workbook.Sheets[workbook.SheetNames[0]];
        const rows = XLSX.utils.sheet_to_json(sheet);

        const existing = new Set(employees.map((x) => x.employeeId));
        let added = 0;

        for (const row of rows) {
          const payload = {
            employeeId: row["Emp ID"] || "",
            firstName: row["First Name"] || "",
            lastName: row["Last Name"] || "",
            email: row["Official Email ID"] || "",
            phoneNumber: row["Contact No"] || "",
            role: row["Role"] || "employee",
            joinDate: row["DOJ"] ? excelDateToJSDate(row["DOJ"]) : null,
            aadharCardNumber: row["Aadhar Card Number"] || "",
            personalEmail: row["Personal Email ID"] || "",
            bloodGroup: row["Blood Group"] || "",
            dob: row["DOB"] ? excelDateToJSDate(row["DOB"]) : null,
            panNumber: row["PAN Number"] || "",
            designation: row["Designation"] || "",
          };

          if (payload.employeeId && existing.has(payload.employeeId)) continue;

          try {
            await api.post("/employee/register", payload);
            added += 1;
          } catch (err) {
            console.error("Row failed:", payload, err.response?.data);
          }
        }

        if (added === 0) {
          showError("No new employees to add");
        } else {
          setShowSuccessMessage(true);
          setTimeout(() => setShowSuccessMessage(false), 3000);
          fetchEmployees();
        }
      } catch (error) {
        console.error("Error processing file:", error);
        showError("Error processing file");
      } finally {
        setIsPopupOpen(false);
      }
    };

    reader.readAsArrayBuffer(file);
  };

  const handleDownload = () => {
    const worksheet = XLSX.utils.json_to_sheet(employees);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Employees");
    XLSX.writeFile(workbook, "employees.xlsx");
  };

  const avatarFor = (emp) => {
    if (emp.profileImage) return emp.profileImage;
    const n = `${emp.firstName || ""} ${emp.lastName || ""}`.trim() || "User";
    return `https://ui-avatars.com/api/?background=0098f1&color=fff&name=${encodeURIComponent(
      n
    )}`;
  };

  return (
    <>
      <div id="main" className="p-4 min-h-screen mt-4">
        <div className="mb-4">
          <p className="text-[#0098f1] text-sm lg:text-lg font-bold mb-4">
            Hr Management / Employee / All Employees
          </p>
        </div>

        <div className="flex flex-col lg:flex-row justify-end mb-4 space-y-2 lg:space-y-0 lg:space-x-2">
          <button
            type="button"
            className="flex justify-center items-center w-full lg:w-[186px] h-[48px] text-white rounded-lg bg-[#0098f1]"
            onClick={() => setShowModal(true)}
          >
            <FiPlusCircle className="text-2xl font-bold mr-2" />
            Add Employee
          </button>
          <button
            type="button"
            className="flex justify-center items-center w-full lg:w-[186px] h-[48px] text-white rounded-lg bg-[#0098f1]"
            onClick={() => setIsPopupOpen(true)}
          >
            <LuImport className="text-2xl font-bold mr-2" />
            Import Employee
          </button>
          <button
            type="button"
            className="flex justify-center items-center w-full lg:w-[186px] h-[48px] text-white rounded-lg bg-[#0098f1]"
            onClick={handleDownload}
          >
            <FiUpload className="text-2xl font-bold mr-2" />
            Download Data
          </button>
        </div>

        <div
          id="table"
          className="overflow-x-scroll overflow-y-scroll pt-4 mx-4"
        >
          {loading ? (
            <div>Loading...</div>
          ) : (
            <table className="min-w-full max-w-3xl mx-auto text-nowrap">
              <thead className="bg-[#0098f1] text-white">
                <tr className="border border-[#0098F1] text-center">
                  <th className="border-r border-white text-sm font-medium">
                    <img
                      src={headerChecked ? checkbox : uncheckbox}
                      alt="Header"
                      onClick={handleHeaderCheckboxChange}
                      className="cursor-pointer"
                    />
                  </th>
                  {[
                    "SL.NO", "Profile", "ID", "Name", "DOJ", "Contact No",
                    "Blood Group", "Personal Email ID", "Official Mail ID",
                    "DOB", "Designation", "Role", "PAN Number",
                    "Aadhar Card Number", "Invite", "Action",
                  ].map((h) => (
                    <th
                      key={h}
                      className="py-2 px-2 border-r border-white text-sm font-medium"
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {employees.length === 0 && (
                  <tr>
                    <td colSpan={17} className="text-center p-6">
                      No employees found
                    </td>
                  </tr>
                )}
                {employees.map((emp, index) => (
                  <tr key={emp.employeeId || index}>
                    <td
                      onClick={() => handleCheckboxChange(emp.employeeId)}
                      className="py-2 px-2 border-r border-[#0098f1] cursor-pointer"
                    >
                      {isChecked[emp.employeeId] ? (
                        <IoMdCheckbox className="text-[#0098f1] w-7 h-7" />
                      ) : (
                        <MdOutlineCheckBoxOutlineBlank className="w-7 h-7" />
                      )}
                    </td>
                    <td className="py-2 px-2 border-r border-[#0098f1]">
                      {index + 1}
                    </td>
                    <td className="py-2 px-2 border-r border-[#0098f1]">
                      <img
                        src={avatarFor(emp)}
                        alt="profile"
                        className="w-12 h-12 rounded-full"
                      />
                    </td>
                    <td className="py-2 px-2 border-r border-[#0098f1]">
                      {emp.employeeId}
                    </td>
                    <td className="py-2 px-2 border-r border-[#0098f1]">
                      {emp.firstName} {emp.lastName}
                    </td>
                    <td className="py-2 px-2 border-r border-[#0098f1]">
                      {emp.joinDate}
                    </td>
                    <td className="py-2 px-2 border-r border-[#0098f1]">
                      {emp.phoneNumber}
                    </td>
                    <td className="py-2 px-2 border-r border-[#0098f1]">
                      {emp.bloodGroup}
                    </td>
                    <td className="py-2 px-2 border-r border-[#0098f1]">
                      {emp.personalEmail}
                    </td>
                    <td className="py-2 px-2 border-r border-[#0098f1]">
                      {emp.email}
                    </td>
                    <td className="py-2 px-2 border-r border-[#0098f1]">
                      {emp.dob}
                    </td>
                    <td className="py-2 px-2 border-r border-[#0098f1]">
                      {emp.designation}
                    </td>
                    <td className="py-2 px-2 border-r border-[#0098f1]">
                      {emp.role}
                    </td>
                    <td className="py-2 px-2 border-r border-[#0098f1]">
                      {emp.panNumber}
                    </td>
                    <td className="py-2 px-2 border-r border-[#0098f1]">
                      {emp.aadharCardNumber}
                    </td>
                    <td className="py-2 px-2 border-r border-[#0098f1]">
                      <button
                        className="bg-blue-500 text-white p-2 rounded"
                        onClick={() => handleInvite(emp)}
                      >
                        Invite
                      </button>
                    </td>
                    <td className="flex justify-center mt-5">
                      <FiEdit
                        className="text-blue-600 cursor-pointer mr-2"
                        onClick={() => handleEditEmployee(emp)}
                      />
                      <FiTrash2
                        className="text-red-600 cursor-pointer"
                        onClick={() =>
                          handleDeleteEmployee(emp.employeeId || emp.ID)
                        }
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>

      {/* Add/Edit Modal */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 max-h-[85vh] overflow-y-scroll rounded-lg w-1/3">
            <h2 className="text-xl font-bold mb-4">
              {editEmployeeId ? "Edit Employee" : "Add Employee"}
            </h2>
            <form onSubmit={(e) => e.preventDefault()}>
              {[
                ["employeeId", "Employee ID", "text"],
                ["firstName", "First Name", "text"],
                ["lastName", "Last Name", "text"],
                ["joinDate", "Joining Date", "date"],
                ["bloodGroup", "Blood Group", "text"],
                ["personalEmail", "Personal Email", "email"],
                ["email", "Official Email", "email"],
                ["phoneNumber", "Phone", "text"],
                ["dob", "DOB", "date"],
                ["designation", "Designation", "text"],
                ["role", "Role", "text"],
                ["panNumber", "PAN Number", "text"],
                ["aadharCardNumber", "Aadhar Card Number", "text"],
              ].map(([field, label, type]) => (
                <div className="mb-4" key={field}>
                  <label className="block text-gray-700">{label}</label>
                  <input
                    type={type}
                    name={field}
                    value={newEmployee[field] ?? ""}
                    onChange={handleInputChange}
                    disabled={editEmployeeId && field === "employeeId"}
                    className="border p-2 w-full"
                  />
                </div>
              ))}
              <div className="flex justify-end">
                <button
                  type="button"
                  onClick={
                    editEmployeeId ? handleUpdateEmployee : handleAddEmployee
                  }
                  className="bg-blue-500 text-white px-4 py-2 rounded"
                >
                  {editEmployeeId ? "Update" : "Add"}
                </button>
                <button
                  type="button"
                  onClick={closeModal}
                  className="ml-2 bg-gray-500 text-white px-4 py-2 rounded"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Import Modal */}
      {isPopupOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-75 z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-bold mb-4">Import Employees</h2>
            <input
              type="file"
              accept=".xlsx, .xls"
              onChange={handleFileUpload}
              className="mb-4"
            />
            <button
              type="button"
              onClick={() => setIsPopupOpen(false)}
              className="bg-gray-500 text-white px-4 py-2 rounded"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {showSuccessMessage && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-[#0098f1] p-8 rounded-lg text-center text-white">
            <IoMdCheckmarkCircleOutline className="inline-block text-6xl" />
            <div className="mt-4">Employee added/updated successfully!</div>
          </div>
        </div>
      )}

      {showDeleteSuccessMessage && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-red-600 p-8 rounded-lg text-center text-white">
            <IoMdCheckmarkCircleOutline className="inline-block text-6xl" />
            <div className="mt-4">Employee removed successfully!</div>
          </div>
        </div>
      )}

      {errorMessage && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-red-600 p-8 rounded-lg text-center text-white">
            <ImCross className="inline-block text-4xl" />
            <div className="mt-4">{errorMessage}</div>
          </div>
        </div>
      )}
    </>
  );
}

export default AllEmployees;