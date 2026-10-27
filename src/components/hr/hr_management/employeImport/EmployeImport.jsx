// import React, { useState } from "react";
// import { LuImport } from "react-icons/lu";
// import { GrSort } from "react-icons/gr";
// import { FiEdit, FiTrash, FiPlusCircle } from "react-icons/fi";
// import * as XLSX from "xlsx";
// import { saveAs } from "file-saver";

// const defaultUserData = [
//   {
//     id: 1,
//     Name: "John Doe",
//     DOJ: "2023-01-15",
//     ContactNo: "1234567890",
//     BloodGroup: "O+",
//     PersonalMailID: "john.doe@example.com",
//     OfficialMailID: "john.doe@company.com",
//     DOB: "1990-05-20",
//     Designation: "Software Engineer",
//     Role: "Developer",
//     PANNumber: "ABCDE1234F",
//     AadharCardNumber: "1234 5678 9012",
//     ProfilePhoto: "https://cdn-icons-png.flaticon.com/128/432/432693.png",
//   },
//   {
//     id: 2,
//     Name: "Jane Smith",
//     DOJ: "2022-11-20",
//     ContactNo: "0987654321",
//     BloodGroup: "A+",
//     PersonalMailID: "jane.smith@example.com",
//     OfficialMailID: "jane.smith@company.com",
//     DOB: "1988-03-15",
//     Designation: "Project Manager",
//     Role: "Manager",
//     PANNumber: "XYZAB9876P",
//     AadharCardNumber: "5678 1234 8901",
//     ProfilePhoto: "https://cdn-icons-png.flaticon.com/128/432/432693.png",
//   },
// ];

// const EmployeeImport = () => {
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [isAddEmployeeModalOpen, setIsAddEmployeeModalOpen] = useState(false);
//   const [userData, setUserData] = useState(defaultUserData);
//   const [tempFileData, setTempFileData] = useState(null);
//   const [searchQuery, setSearchQuery] = useState("");
//   const [editingUserId, setEditingUserId] = useState(null);
//   const [editingUserData, setEditingUserData] = useState(null);
//   const [newEmployeeData, setNewEmployeeData] = useState({
//     id: "",
//     Name: "",
//     DOJ: "",
//     ContactNo: "",
//     BloodGroup: "",
//     PersonalMailID: "",
//     OfficialMailID: "",
//     DOB: "",
//     Designation: "",
//     Role: "",
//     PANNumber: "",
//     AadharCardNumber: "",
//     ProfilePhoto: "https://cdn-icons-png.flaticon.com/128/432/432693.png",
//   });

//   const handleOpenModal = () => {
//     setIsModalOpen(true);
//   };

//   const handleCloseModal = () => {
//     setIsModalOpen(false);
//   };

//   const handleOpenAddEmployeeModal = () => {
//     setIsAddEmployeeModalOpen(true);
//   };

//   const handleCloseAddEmployeeModal = () => {
//     setIsAddEmployeeModalOpen(false);
//   };

//   const handleFileChange = (event) => {
//     const file = event.target.files[0];
//     if (file) {
//       const reader = new FileReader();
//       reader.onload = (e) => {
//         const ab = e.target.result;
//         const wb = XLSX.read(ab, { type: "array" });
//         const ws = wb.Sheets[wb.SheetNames[0]];
//         const data = XLSX.utils.sheet_to_json(ws);

//         const newData = data.filter(
//           (row) => !userData.some((existingUser) => existingUser.id === row.id)
//         );

//         setUserData([...userData, ...newData]);
//         setIsModalOpen(false);
//       };
//       reader.readAsArrayBuffer(file);
//     }
//   };

//   const handleSave = () => {
//     if (tempFileData) {
//       const newData = tempFileData.filter(
//         (row) => !userData.some((existingUser) => existingUser.id === row.id)
//       );
//       setUserData([...userData, ...newData]);
//       setTempFileData(null);
//       setIsModalOpen(false);
//     }
//   };

//   const handleSearchChange = (event) => {
//     setSearchQuery(event.target.value);
//   };

//   const handleEdit = (id) => {
//     const userToEdit = userData.find((user) => user.id === id);
//     if (userToEdit) {
//       setEditingUserId(id);
//       setEditingUserData({ ...userToEdit });
//     }
//   };

//   const handleSaveEdit = (id) => {
//     const updatedUserData = userData.map((user) =>
//       user.id === id ? editingUserData : user
//     );
//     setUserData(updatedUserData);
//     setEditingUserId(null);
//   };

//   const handleDelete = (id) => {
//     const updatedUserData = userData.filter((user) => user.id !== id);
//     setUserData(updatedUserData);
//   };

//   const filteredUserData = userData.filter(
//     (user) =>
//       user.Name.toLowerCase().includes(searchQuery.toLowerCase()) ||
//       user.DOJ.toLowerCase().includes(searchQuery.toLowerCase()) ||
//       user.ContactNo.toLowerCase().includes(searchQuery.toLowerCase()) ||
//       user.BloodGroup.toLowerCase().includes(searchQuery.toLowerCase()) ||
//       user.PersonalMailID.toLowerCase().includes(searchQuery.toLowerCase()) ||
//       user.OfficialMailID.toLowerCase().includes(searchQuery.toLowerCase()) ||
//       user.DOB.toLowerCase().includes(searchQuery.toLowerCase()) ||
//       user.Designation.toLowerCase().includes(searchQuery.toLowerCase()) ||
//       user.Role.toLowerCase().includes(searchQuery.toLowerCase()) ||
//       user.PANNumber.toLowerCase().includes(searchQuery.toLowerCase()) ||
//       user.AadharCardNumber.toLowerCase().includes(searchQuery.toLowerCase())
//   );

//   const handleDownload = () => {
//     const ws = XLSX.utils.json_to_sheet(filteredUserData);

//     const wb = XLSX.utils.book_new();
//     XLSX.utils.book_append_sheet(wb, ws, "UserData");

//     const wbout = XLSX.write(wb, { bookType: "xlsx", type: "array" });

//     const blob = new Blob([wbout], {
//       type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
//     });
//     saveAs(blob, "user_data.xlsx");
//   };

//   const handleAddEmployee = () => {
//     const newId = userData.length ? userData[userData.length - 1].id + 1 : 1;
//     const newEmployee = {
//       id: newId,
//       ...newEmployeeData,
//     };
//     setUserData([...userData, newEmployee]);
//     setNewEmployeeData({
//       Name: "",
//       DOJ: "",
//       ContactNo: "",
//       BloodGroup: "",
//       PersonalMailID: "",
//       OfficialMailID: "",
//       DOB: "",
//       Designation: "",
//       Role: "",
//       PANNumber: "",
//       AadharCardNumber: "",
//       ProfilePhoto: "https://via.placeholder.com/50",
//     });
//     setIsAddEmployeeModalOpen(false);
//   };

//   return (
//     <div className="bg-sky-100 flex flex-col p-5">
//       <div className="mb-4">
//         <h1 className="text-[#E65F2B] text-xl p-5">
//           HR Management / All Employees
//         </h1>
//       </div>

//       <div className="flex justify-end gap-x-5 items-center mb-10 ">
//         <button
//           onClick={handleOpenModal}
//           className="flex items-center justify-center h-auto w-auto p-4 bg-white text-[#0098F1] rounded-lg"
//         >
//           <div style={{ transform: "rotate(270deg)" }} className="mr-3">
//             <LuImport size={20} />
//           </div>
//           <span className="text-xl">Import Employee</span>
//         </button>
//         <button
//           onClick={handleOpenAddEmployeeModal}
//           className="flex items-center px-6 justify-center h-auto w-auto p-4 bg-white text-[#0098F1] rounded-lg"
//         >
//           <FiPlusCircle className="text-2xl font-bold mr-2 text-[#0098f1]" />
//           <span className="text-xl">Add Employee</span>
//         </button>
//       </div>

//       <div className="flex w-full px-4">
//         <div className="flex w-full items-center justify-between gap-x-4">
//           <input
//             type="search"
//             placeholder="Search"
//             value={searchQuery}
//             onChange={handleSearchChange}
//             className="flex-1 px-4 border border-[#0098f1] outline-[#0098f1] py-2 outline-1 rounded-lg"
//           />

//           <button
//             onClick={handleDownload}
//             className="flex-none items-center justify-center h-auto p-2 bg-white text-[#0098F1] rounded-lg"
//           >
//             Download Data
//           </button>
//         </div>
//       </div>

//       <div className=" overflow-x-scroll scrollbar-thin scrollbar-track-white scrollbar-thumb-[#0098f1] mt-2 mx-4">
//         <table className="min-w-full w-screen overflow-x-scroll text-nowrap">
//           <thead>
//             <tr className=" bg-[#0098F1] text-white ">
//               <th className="px-6  p-3 text-center">Profile Photo</th>
//               <th className="px-6  p-3 text-center">ID</th>
//               <th className="px-6  p-3 text-center">Name</th>
//               <th className="px-6  p-3 text-center">DOJ</th>
//               <th className="px-6  p-3 text-center">Contact No</th>
//               <th className="px-6  p-3 text-center">Blood Group</th>
//               <th className="px-6  p-3 text-center">Personal Mail ID</th>
//               <th className="px-6  p-3 text-center">Official Mail ID</th>
//               <th className="px-6  p-3 text-center">DOB</th>
//               <th className="px-6  p-3 text-center">Designation</th>
//               <th className="px-6  p-3 text-center">Role</th>
//               <th className="px-6  p-3 text-center">PAN Number</th>
//               <th className="px-6  p-3 text-center">Aadhar Card Number</th>
//               <th className="px-6  p-3 text-center">Actions</th>
//             </tr>
//           </thead>

//           <tbody className="">
//             {filteredUserData.map((user) => (
//               <tr key={user.id} className="">
//                 <td className="p-3 border-b border-[#0098f1]   text-center">
//                   <img
//                     src={user.ProfilePhoto || "https://via.placeholder.com/50"}
//                     alt="Profile"
//                     className="w-12 h-12 rounded-full"
//                   />
//                 </td>
//                 <td className="border-b border-[#0098f1]  p-3 text-center">
//                   {user.id}
//                 </td>
//                 <td className="border-b border-[#0098f1]  p-3 text-center">
//                   {editingUserId === user.id ? (
//                     <input
//                       type="text"
//                       value={editingUserData.Name}
//                       onChange={(e) =>
//                         setEditingUserData({
//                           ...editingUserData,
//                           Name: e.target.value,
//                         })
//                       }
//                       className="border  outline-[#0098f1] border-[#0098f1] p-2"
//                     />
//                   ) : (
//                     user.Name
//                   )}
//                 </td>
//                 <td className="border-b border-[#0098f1] p-3 text-center">
//                   {editingUserId === user.id ? (
//                     <input
//                       type="date"
//                       value={editingUserData.DOJ}
//                       onChange={(e) =>
//                         setEditingUserData({
//                           ...editingUserData,
//                           DOJ: e.target.value,
//                         })
//                       }
//                       className="border  outline-[#0098f1] border-[#0098f1] p-2"
//                     />
//                   ) : (
//                     user.DOJ
//                   )}
//                 </td>
//                 <td className="border-b border-[#0098f1]  p-3 text-center">
//                   {editingUserId === user.id ? (
//                     <input
//                       type="text"
//                       value={editingUserData.ContactNo}
//                       onChange={(e) =>
//                         setEditingUserData({
//                           ...editingUserData,
//                           ContactNo: e.target.value,
//                         })
//                       }
//                       className="border  outline-[#0098f1] border-[#0098f1] p-2"
//                     />
//                   ) : (
//                     user.ContactNo
//                   )}
//                 </td>
//                 <td className="border-b border-[#0098f1]  p-3 text-center">
//                   {editingUserId === user.id ? (
//                     <input
//                       type="text"
//                       value={editingUserData.BloodGroup}
//                       onChange={(e) =>
//                         setEditingUserData({
//                           ...editingUserData,
//                           BloodGroup: e.target.value,
//                         })
//                       }
//                       className="border  outline-[#0098f1] border-[#0098f1] p-2"
//                     />
//                   ) : (
//                     user.BloodGroup
//                   )}
//                 </td>
//                 <td className="border-b border-[#0098f1] p-3 text-center">
//                   {editingUserId === user.id ? (
//                     <input
//                       type="email"
//                       value={editingUserData.PersonalMailID}
//                       onChange={(e) =>
//                         setEditingUserData({
//                           ...editingUserData,
//                           PersonalMailID: e.target.value,
//                         })
//                       }
//                       className="border  outline-[#0098f1] border-[#0098f1] p-2"
//                     />
//                   ) : (
//                     user.PersonalMailID
//                   )}
//                 </td>
//                 <td className="border-b border-[#0098f1] p-3 text-center">
//                   {editingUserId === user.id ? (
//                     <input
//                       type="email"
//                       value={editingUserData.OfficialMailID}
//                       onChange={(e) =>
//                         setEditingUserData({
//                           ...editingUserData,
//                           OfficialMailID: e.target.value,
//                         })
//                       }
//                       className="border  outline-[#0098f1] border-[#0098f1] p-2"
//                     />
//                   ) : (
//                     user.OfficialMailID
//                   )}
//                 </td>
//                 <td className="border-b border-[#0098f1] p-3 text-center">
//                   {editingUserId === user.id ? (
//                     <input
//                       type="date"
//                       value={editingUserData.DOB}
//                       onChange={(e) =>
//                         setEditingUserData({
//                           ...editingUserData,
//                           DOB: e.target.value,
//                         })
//                       }
//                       className="border  outline-[#0098f1] border-[#0098f1] p-2"
//                     />
//                   ) : (
//                     user.DOB
//                   )}
//                 </td>
//                 <td className="border-b border-[#0098f1]  p-3 text-center">
//                   {editingUserId === user.id ? (
//                     <input
//                       type="text"
//                       value={editingUserData.Designation}
//                       onChange={(e) =>
//                         setEditingUserData({
//                           ...editingUserData,
//                           Designation: e.target.value,
//                         })
//                       }
//                       className="border  outline-[#0098f1] border-[#0098f1] p-2"
//                     />
//                   ) : (
//                     user.Designation
//                   )}
//                 </td>
//                 <td className="border-b border-[#0098f1] p-3 text-center">
//                   {editingUserId === user.id ? (
//                     <input
//                       type="text"
//                       value={editingUserData.Role}
//                       onChange={(e) =>
//                         setEditingUserData({
//                           ...editingUserData,
//                           Role: e.target.value,
//                         })
//                       }
//                       className="border  outline-[#0098f1] border-[#0098f1] p-2"
//                     />
//                   ) : (
//                     user.Role
//                   )}
//                 </td>
//                 <td className="border-b border-[#0098f1] p-3 text-center">
//                   {editingUserId === user.id ? (
//                     <input
//                       type="text"
//                       value={editingUserData.PANNumber}
//                       onChange={(e) =>
//                         setEditingUserData({
//                           ...editingUserData,
//                           PANNumber: e.target.value,
//                         })
//                       }
//                       className="border  outline-[#0098f1] border-[#0098f1] p-2"
//                     />
//                   ) : (
//                     user.PANNumber
//                   )}
//                 </td>
//                 <td className="border-b border-[#0098f1]  p-3 text-center">
//                   {editingUserId === user.id ? (
//                     <input
//                       type="text"
//                       value={editingUserData.AadharCardNumber}
//                       onChange={(e) =>
//                         setEditingUserData({
//                           ...editingUserData,
//                           AadharCardNumber: e.target.value,
//                         })
//                       }
//                       className=" border  outline-[#0098f1] border-[#0098f1] p-2"
//                     />
//                   ) : (
//                     user.AadharCardNumber
//                   )}
//                 </td>
//                 <td className="border-b border-[#0098f1] p-3 text-center">
//                   {editingUserId === user.id ? (
//                     <>
//                       <button
//                         onClick={() => handleSaveEdit(user.id)}
//                         className="text-[#E65F2B] mr-2"
//                       >
//                         Save
//                       </button>
//                       <button
//                         onClick={() => setEditingUserId(null)}
//                         className="text-red-600"
//                       >
//                         Cancel
//                       </button>
//                     </>
//                   ) : (
//                     <>
//                       <button
//                         onClick={() => handleEdit(user.id)}
//                         className="text-[#E65F2B] mr-2"
//                       >
//                         <FiEdit size={20} />
//                       </button>
//                       <button
//                         onClick={() => handleDelete(user.id)}
//                         className="text-red-600"
//                       >
//                         <FiTrash size={20} />
//                       </button>
//                     </>
//                   )}
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>

//       {isModalOpen && (
//         <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
//           <div className="bg-white p-6 rounded-lg w-[60vw]">
//             <h2 className="text-2xl text-center text-[#0098F1] font-bold mb-4">
//               Import Employees
//             </h2>

//             <div className="flex flex-col items-center mt-10 mb-5">
//               <div>
//                 <input
//                   type="file"
//                   onChange={handleFileChange}
//                   className="border border-[#0098F1] md:w-[500px] text-white cursor-pointer file:bg-[#0098F1] file:h-[50px] file:w-[200px] file:text-white file:border-[#0098F1] mb-3"
//                   aria-label="Upload File"
//                 />
//                 <p>Accepted file formats are csv, xls, and xlsx.</p>
//               </div>
//             </div>

//             <div className="flex justify-center mt-10">
//               <button
//                 onClick={handleSave}
//                 className="bg-[#0098F1] text-white h-[40px] w-[150px] rounded-lg mr-3"
//               >
//                 Save
//               </button>
//               <button
//                 onClick={handleCloseModal}
//                 className="bg-transparent text-blue-500 border border-blue-500 h-[40px] w-[150px] rounded-lg"
//               >
//                 Cancel
//               </button>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* Modal for adding a new employee */}
//       {isAddEmployeeModalOpen && (
//         <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
//           <div className="bg-white p-6 h-[400px] overflow-y-scroll rounded-lg w-1/3">
//             <h2 className="text-xl text-[#0098f1] mb-4">Add New Employee</h2>
//             <form>
//               <input
//                 type="text"
//                 placeholder="id"
//                 value={newEmployeeData.id}
//                 onChange={(e) =>
//                   setNewEmployeeData({
//                     ...newEmployeeData,
//                     id: e.target.value,
//                   })
//                 }
//                 className="mb-4 border border-[#0098f1] outline-[#0098f1] p-2 rounded-lg w-full"
//               />
//               <input
//                 type="text"
//                 placeholder="Name"
//                 value={newEmployeeData.Name}
//                 onChange={(e) =>
//                   setNewEmployeeData({
//                     ...newEmployeeData,
//                     Name: e.target.value,
//                   })
//                 }
//                 className="mb-4 border border-[#0098f1] outline-[#0098f1] p-2 rounded-lg w-full"
//               />
//               <input
//                 type="date"
//                 placeholder="DOJ"
//                 value={newEmployeeData.DOJ}
//                 onChange={(e) =>
//                   setNewEmployeeData({
//                     ...newEmployeeData,
//                     DOJ: e.target.value,
//                   })
//                 }
//                 className="mb-4 border border-[#0098f1] outline-[#0098f1]  p-2 rounded-lg w-full"
//               />
//               <input
//                 type="text"
//                 placeholder="Contact No"
//                 value={newEmployeeData.ContactNo}
//                 onChange={(e) =>
//                   setNewEmployeeData({
//                     ...newEmployeeData,
//                     ContactNo: e.target.value,
//                   })
//                 }
//                 className="mb-4 border border-[#0098f1] outline-[#0098f1] p-2 rounded-lg w-full"
//               />
//               <input
//                 type="text"
//                 placeholder="Blood Group"
//                 value={newEmployeeData.BloodGroup}
//                 onChange={(e) =>
//                   setNewEmployeeData({
//                     ...newEmployeeData,
//                     BloodGroup: e.target.value,
//                   })
//                 }
//                 className="mb-4 border border-[#0098f1] outline-[#0098f1] p-2 rounded-lg w-full"
//               />
//               <input
//                 type="email"
//                 placeholder="Personal Mail ID"
//                 value={newEmployeeData.PersonalMailID}
//                 onChange={(e) =>
//                   setNewEmployeeData({
//                     ...newEmployeeData,
//                     PersonalMailID: e.target.value,
//                   })
//                 }
//                 className="mb-4 border border-[#0098f1] outline-[#0098f1]  p-2 rounded-lg w-full"
//               />
//               <input
//                 type="email"
//                 placeholder="Official Mail ID"
//                 value={newEmployeeData.OfficialMailID}
//                 onChange={(e) =>
//                   setNewEmployeeData({
//                     ...newEmployeeData,
//                     OfficialMailID: e.target.value,
//                   })
//                 }
//                 className="mb-4 border border-[#0098f1] outline-[#0098f1] p-2 rounded-lg w-full"
//               />
//               <input
//                 type="date"
//                 placeholder="DOB"
//                 value={newEmployeeData.DOB}
//                 onChange={(e) =>
//                   setNewEmployeeData({
//                     ...newEmployeeData,
//                     DOB: e.target.value,
//                   })
//                 }
//                 className="mb-4 border border-[#0098f1] outline-[#0098f1] p-2 rounded-lg w-full"
//               />
//               <input
//                 type="text"
//                 placeholder="Designation"
//                 value={newEmployeeData.Designation}
//                 onChange={(e) =>
//                   setNewEmployeeData({
//                     ...newEmployeeData,
//                     Designation: e.target.value,
//                   })
//                 }
//                 className="mb-4 border border-[#0098f1] outline-[#0098f1] p-2 rounded-lg w-full"
//               />
//               <input
//                 type="text"
//                 placeholder="Role"
//                 value={newEmployeeData.Role}
//                 onChange={(e) =>
//                   setNewEmployeeData({
//                     ...newEmployeeData,
//                     Role: e.target.value,
//                   })
//                 }
//                 className="mb-4 border border-[#0098f1] outline-[#0098f1] p-2 rounded-lg w-full"
//               />
//               <input
//                 type="text"
//                 placeholder="PAN Number"
//                 value={newEmployeeData.PANNumber}
//                 onChange={(e) =>
//                   setNewEmployeeData({
//                     ...newEmployeeData,
//                     PANNumber: e.target.value,
//                   })
//                 }
//                 className="mb-4 border border-[#0098f1] outline-[#0098f1]  p-2 rounded-lg w-full"
//               />
//               <input
//                 type="text"
//                 placeholder="Aadhar Card Number"
//                 value={newEmployeeData.AadharCardNumber}
//                 onChange={(e) =>
//                   setNewEmployeeData({
//                     ...newEmployeeData,
//                     AadharCardNumber: e.target.value,
//                   })
//                 }
//                 className="mb-4 border border-[#0098f1] outline-[#0098f1] p-2 rounded-lg w-full"
//               />
//               <div className="flex justify-end">
//                 <button
//                   type="button"
//                   onClick={handleCloseAddEmployeeModal}
//                   className="bg-red-500 text-white px-4 py-2 rounded-lg mr-2"
//                 >
//                   Cancel
//                 </button>
//                 <button
//                   type="button"
//                   onClick={handleAddEmployee}
//                   className="bg-[#0098f1] text-white px-4 py-2 rounded-lg"
//                 >
//                   Add Employee
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default EmployeeImport;
// //
