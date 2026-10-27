// import React, { useState } from "react";
// import { AiFillPlusCircle } from "react-icons/ai";
// import { IoMdInformationCircleOutline } from "react-icons/io";
// import { FiEdit, FiTrash2 } from "react-icons/fi";
// import { TiDeleteOutline } from "react-icons/ti";
// import { MdOutlineCheckCircle } from "react-icons/md";
// import { MdRemoveRedEye } from "react-icons/md";
// import { MdKeyboardArrowRight } from "react-icons/md";
// import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
// import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
// import { MdOutlineKeyboardDoubleArrowLeft } from "react-icons/md";
// import { IoMdCheckmarkCircleOutline } from "react-icons/io";

// const initialValues = [
//   {
//     id: 1,
//     DisplayName: "Gratuity",
//     AllowanceCode: "Section 10(10)",
//     Taxable: "Partially",
//     LOP: "No",
//     PF: "Yes",
//     ESI: "No",
//     PT: "No",
//     Amount: "No limit",
//   },
// ];

// const Allowances = () => {
//   const [showModal, setShowModal] = useState(false);
//   const [values, setValues] = useState(initialValues);
//   const [showSuccess, setShowSuccess] = useState(false);
//   const [newAllowance, setNewAllowance] = useState({
//     DisplayName: "",
//     AllowanceCode: "",
//     Taxable: "",
//     LOP: "",
//     PF: "",
//     ESI: "",
//     PT: "",
//     Amount: "",
//   });
//   const [editAllowanceId, setEditAllowanceId] = useState(null);
//   const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
//   const [deleteId, setDeleteId] = useState(null);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [viewAllowance, setViewAllowance] = useState(null);
//   const [showDeleteSuccessMessage, setShowDeleteSuccessMessage] =
//     useState(false);
//   const recordsPerPage = 10;

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setNewAllowance({ ...newAllowance, [name]: value });
//   };

//   const handleAddAllowance = () => {
//     if (editAllowanceId) {
//       setValues(
//         values.map((allowance) =>
//           allowance.id === editAllowanceId
//             ? { ...allowance, ...newAllowance }
//             : allowance
//         )
//       );
//       setEditAllowanceId(null);
//     } else {
//       setValues([...values, { ...newAllowance, id: values.length + 1 }]);
//     }
//     setShowModal(false);
//     setNewAllowance({
//       DisplayName: "",
//       AllowanceCode: "",
//       Taxable: "",
//       LOP: "",
//       PF: "",
//       ESI: "",
//       PT: "",
//       Amount: "",
//     });
//     setShowSuccess(true);
//     setTimeout(() => {
//       setShowSuccess(false);
//     }, 2000);
//   };

//   const setButton = (e) => {
//     switch (e) {
//       case "Yes":
//         return <MdOutlineCheckCircle className="text-2xl text-[#2bb92b]" />;
//       case "No":
//         return <TiDeleteOutline className="text-2xl text-[#B20000]" />;
//       default:
//         return null;
//     }
//   };

//   const handleEditAllowance = (id) => {
//     const allowance = values.find((allowance) => allowance.id === id);
//     setNewAllowance(allowance);
//     setEditAllowanceId(id);
//     setShowModal(true);
//   };

//   const handleDeleteAllowance = () => {
//     setValues(values.filter((allowance) => allowance.id !== deleteId));
//     setIsDeleteModalOpen(false);
//     setDeleteId(null);
//     setShowDeleteSuccessMessage(true);

//     setTimeout(() => {
//       setShowDeleteSuccessMessage(false);
//     }, 3000);
//   };

//   const openDeleteModal = (id) => {
//     setIsDeleteModalOpen(true);
//     setDeleteId(id);
//   };

//   const closeModal = () => {
//     setShowModal(false);
//     setEditAllowanceId(null);
//     setNewAllowance({
//       DisplayName: "",
//       AllowanceCode: "",
//       Taxable: "",
//       LOP: "",
//       PF: "",
//       ESI: "",
//       PT: "",
//       Amount: "",
//     });
//   };

//   const handlePageChange = (pageNumber) => {
//     setCurrentPage(pageNumber);
//   };

//   const handleViewAllowance = (allowance) => {
//     setViewAllowance(allowance);
//   };

//   const currentRecords = values.slice(
//     (currentPage - 1) * recordsPerPage,
//     currentPage * recordsPerPage
//   );

//   const totalPages = Math.ceil(values.length / recordsPerPage);

//   return (
//     <div className="md:my-5 py-3">
//       <div className="flex justify-between items-center mb-7">
//         <div className="flex gap-x-2">
//           <h3 className="lg:text-lg font-semibold ">Allowances</h3>
//           <button
//             type="button"
//             className="flex items-center md:gap-1 gap-x-[2px] max-md:mt-1"
//           >
//             <IoMdInformationCircleOutline className="max-md:text-xs" />
//             <span className="max-md:text-xs">info</span>
//           </button>
//         </div>
//         <button
//           type="button"
//           onClick={() => setShowModal(true)}
//           className="flex items-center md:gap-2 gap-1 bg-[#0098f1] md:p-2 p-1 md:px-4  rounded-lg text-white "
//         >
//           <AiFillPlusCircle className="md:text-xl" />
//           <span className="max-md:text-xs font-bold">Add</span>
//         </button>
//       </div>
//       <div className="overflow-auto scrollbar-thin scrollbar-track-white scrollbar-thumb-[#0098F1]">
//         <table className="min-w-full w-screen overflow-x-scroll text-nowrap">
//           <thead className="bg-[#0098f1] text-white lg:text-lg font-medium ">
//             <tr className="border border-[#0098F1]">
//               <th className="py-3 px-4 border-r border-white text-center text-sm font-medium text-nowrap">
//                 Display Name
//               </th>
//               <th className="py-3 px-4 border-r border-white text-center text-sm font-medium text-nowrap">
//                 Allowance Code
//               </th>
//               <th className="py-3 px-4 border-r border-white text-center text-sm font-medium text-nowrap">
//                 Taxable
//               </th>
//               <th className="py-3 px-4 border-r border-white text-center text-sm font-medium text-nowrap">
//                 LOP
//               </th>
//               <th className="py-3 px-4 border-r border-white text-center text-sm font-medium text-nowrap">
//                 PF
//               </th>
//               <th className="py-3 px-4 border-r border-white text-center text-sm font-medium text-nowrap">
//                 ESI
//               </th>
//               <th className="py-3 px-4 border-r border-white text-center text-sm font-medium text-nowrap">
//                 PT
//               </th>
//               <th className="py-3 px-4 border-r border-white text-center text-sm font-medium text-nowrap">
//                 Amount
//               </th>
//               <th className="py-3 px-4 text-center text-sm font-medium text-nowrap">Action</th>
//             </tr>
//           </thead>
//           <tbody>
//             {currentRecords.map((value) => (
//               <tr
//                 key={value.id}
//                 className="bg-white text-center md:text-lg font-normal border border-[#0098F1]"
//               >
//                 <td className=" px-4 border-r border-[#0098f1]">
//                   {value.DisplayName}
//                 </td>
//                 <td className=" px-4 border-r border-[#0098f1]">
//                   {value.AllowanceCode}
//                 </td>
//                 <td className=" px-4 border-r border-[#0098f1]">
//                   {value.Taxable}
//                 </td>
//                 <td className=" px-4 border-r border-[#0098f1]">
//                   <div className="pl-[22px]">{setButton(value.LOP)}</div>
//                 </td>
//                 <td className=" px-4 border-r border-[#0098f1]">
//                   <div className="pl-[22px]">{setButton(value.PF)}</div>
//                 </td>
//                 <td className=" px-4 border-r border-[#0098f1]">
//                   <div className="pl-[22px]">{setButton(value.ESI)}</div>
//                 </td>
//                 <td className=" px-4 border-r border-[#0098f1]">
//                   <div className="pl-[22px]">{setButton(value.PT)}</div>
//                 </td>
//                 <td className=" px-4 border-r border-[#0098f1]">
//                   {value.Amount}
//                 </td>
//                 <td className=" px-4">
//                   <div className="flex justify-center items-center space-x-2">
//                     <button
//                       className="flex items-center justify-center"
//                       onClick={() => handleViewAllowance(value)}
//                     >
//                       <MdRemoveRedEye className="mr-1 bg-[#0098f1] text-white flex items-center size-6 p-1 rounded-md" />
//                     </button>
//                     <button
//                       className="text-blue-500 flex py-3 items-center"
//                       onClick={() => handleEditAllowance(value.id)}
//                     >
//                       <FiEdit className="mr-1 bg-[#2A8F4C] text-white rounded-md size-6 p-1" />
//                     </button>
//                     <button
//                       className="flex items-center justify-center"
//                       onClick={() => openDeleteModal(value.id)}
//                     >
//                       <FiTrash2 className="mr-1 bg-[#FF3636] text-white flex items-center size-6 p-1 rounded-md" />
//                     </button>
//                   </div>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//       <div className="flex justify-center my-4">
//         <button
//           className="px-2 py-1 mx-1 bg-[#0098f1] text-white rounded-md"
//           onClick={() => handlePageChange(1)}
//           disabled={currentPage === 1}
//         >
//           <MdOutlineKeyboardDoubleArrowLeft />
//         </button>
//         <button
//           className="px-2 py-1 mx-1 bg-[#0098f1] text-white rounded-md"
//           onClick={() => handlePageChange(currentPage - 1)}
//           disabled={currentPage === 1}
//         >
//           <MdOutlineKeyboardArrowLeft />
//         </button>
//         {Array.from({ length: totalPages }, (_, index) => (
//           <button
//             key={index + 1}
//             className={`px-3 py-1 mx-1 rounded-md ${
//               currentPage === index + 1
//                 ? "bg-[#0098f1] text-white"
//                 : "bg-gray-200 text-black"
//             }`}
//             onClick={() => handlePageChange(index + 1)}
//           >
//             {index + 1}
//           </button>
//         ))}
//         <button
//           className="px-2 py-1 mx-1 bg-[#0098f1] text-white rounded-md"
//           onClick={() => handlePageChange(currentPage + 1)}
//           disabled={currentPage === totalPages}
//         >
//           <MdKeyboardArrowRight />
//         </button>
//         <button
//           className="px-2 py-1 mx-1 bg-[#0098f1] text-white rounded-md"
//           onClick={() => handlePageChange(totalPages)}
//           disabled={currentPage === totalPages}
//         >
//           <MdOutlineKeyboardDoubleArrowRight />
//         </button>
//       </div>
//       {showModal && (
//         <div className="fixed inset-0 flex items-center justify-center z-50 bg-blue-100 bg-opacity-50 text-lg font-normal">
//           <div className="bg-white rounded-lg p-6 md:px-10 md:w-[700px] ">
//             <h2 className="md:text-2xl mb-2 md:mb-4 text-[#0098f1]">
//               {editAllowanceId ? "Edit Allowance" : "Add Allowance"}
//             </h2>
//             <div className="grid grid-cols-1 md:space-y-4 space-y-2">
//               <div className="relative text-[#0098f1]">
//                 <input
//                   type="text"
//                   name="DisplayName"
//                   placeholder="Display Name"
//                   value={newAllowance.DisplayName}
//                   onChange={handleInputChange}
//                   className="block w-full border border-[#0098f1] placeholder-[#0098f1] rounded-md focus:outline-none md:p-2 p-1 placeholder-opacity-60"
//                 />
//               </div>
//               <div className="relative text-[#0098f1]">
//                 <input
//                   type="text"
//                   name="AllowanceCode"
//                   placeholder="Allowance Code"
//                   value={newAllowance.AllowanceCode}
//                   onChange={handleInputChange}
//                   className="block w-full border border-[#0098f1] placeholder-[#0098f1] rounded-md focus:outline-none md:p-2 p-1 placeholder-opacity-60"
//                 />
//               </div>
//               <div className="relative text-[#0098f1]">
//                 <input
//                   type="text"
//                   name="Taxable"
//                   placeholder="Taxable"
//                   value={newAllowance.Taxable}
//                   onChange={handleInputChange}
//                   className="block w-full border border-[#0098f1] placeholder-[#0098f1] rounded-md focus:outline-none md:p-2 p-1 placeholder-opacity-60"
//                 />
//               </div>
//               <div className="relative text-[#0098f1] flex space-x-11">
//                 <label className="text-xl">LOP:</label>
//                 <div className="flex items-center text-xl">
//                   <label className="flex items-center mr-4">
//                     <input
//                       type="radio"
//                       name="LOP"
//                       value="Yes"
//                       checked={newAllowance.LOP === "Yes"}
//                       onChange={handleInputChange}
//                       className="mr-2"
//                     />
//                     Yes
//                   </label>
//                   <label className="flex items-center">
//                     <input
//                       type="radio"
//                       name="LOP"
//                       value="No"
//                       checked={newAllowance.LOP === "No"}
//                       onChange={handleInputChange}
//                       className="mr-2"
//                     />
//                     No
//                   </label>
//                 </div>
//               </div>
//               <div className="relative text-[#0098f1] flex space-x-[57px]">
//                 <label className="text-xl">PF:</label>
//                 <div className="flex items-center text-xl">
//                   <label className="flex items-center mr-4">
//                     <input
//                       type="radio"
//                       name="PF"
//                       value="Yes"
//                       checked={newAllowance.PF === "Yes"}
//                       onChange={handleInputChange}
//                       className="mr-2"
//                     />
//                     Yes
//                   </label>
//                   <label className="flex items-center">
//                     <input
//                       type="radio"
//                       name="PF"
//                       value="No"
//                       checked={newAllowance.PF === "No"}
//                       onChange={handleInputChange}
//                       className="mr-2"
//                     />
//                     No
//                   </label>
//                 </div>
//               </div>
//               <div className="relative text-[#0098f1] flex space-x-[51px]">
//                 <label className="text-xl">ESI:</label>
//                 <div className="flex items-center text-xl">
//                   <label className="flex items-center mr-4">
//                     <input
//                       type="radio"
//                       name="ESI"
//                       value="Yes"
//                       checked={newAllowance.ESI === "Yes"}
//                       onChange={handleInputChange}
//                       className="mr-2"
//                     />
//                     Yes
//                   </label>
//                   <label className="flex items-center">
//                     <input
//                       type="radio"
//                       name="ESI"
//                       value="No"
//                       checked={newAllowance.ESI === "No"}
//                       onChange={handleInputChange}
//                       className="mr-2"
//                     />
//                     No
//                   </label>
//                 </div>
//               </div>
//               <div className="relative text-[#0098f1] flex space-x-[55px]">
//                 <label className="text-xl">PT:</label>
//                 <div className="flex items-center text-xl">
//                   <label className="flex items-center mr-4">
//                     <input
//                       type="radio"
//                       name="PT"
//                       value="Yes"
//                       checked={newAllowance.PT === "Yes"}
//                       onChange={handleInputChange}
//                       className="mr-2"
//                     />
//                     Yes
//                   </label>
//                   <label className="flex items-center">
//                     <input
//                       type="radio"
//                       name="PT"
//                       value="No"
//                       checked={newAllowance.PT === "No"}
//                       onChange={handleInputChange}
//                       className="mr-2"
//                     />
//                     No
//                   </label>
//                 </div>
//               </div>

//               <div className="relative text-[#0098f1]">
//                 <input
//                   type="text"
//                   name="Amount"
//                   placeholder="Amount"
//                   value={newAllowance.Amount}
//                   onChange={handleInputChange}
//                   className="block w-full border border-[#0098f1] placeholder-[#0098f1] rounded-md focus:outline-none p-2 placeholder-opacity-60"
//                 />
//               </div>
//               <div className="flex justify-center space-x-4">
//                 <button
//                   type="button"
//                   onClick={handleAddAllowance}
//                   className="p-1 md:px-6 md:py-2 bg-[#0098f1] text-white rounded-md"
//                 >
//                   {editAllowanceId ? "Update" : "Add"}
//                 </button>
//                 <button
//                   type="button"
//                   onClick={closeModal}
//                   className=" p-1 md:px-4 md:py-2 bg-white border border-[#0098f1] text-[#0098f1] rounded-md"
//                 >
//                   Cancel
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}

//       {isDeleteModalOpen && (
//         <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
//           <div className="bg-white rounded-lg p-6">
//             <h2 className="text-xl mb-4 text-[#0098f1] font-semibold">Confirm Deletion</h2>
//             <p className="font-normal">
//               Are you sure you want to delete this allowance?
//             </p>
//             <div className="flex justify-center space-x-4 mt-4">
//               <button
//                 type="button"
//                 onClick={handleDeleteAllowance}
//                 className="px-4 py-2 bg-[#0098f1] font-semibold text-white rounded-md"
//               >
//                 Delete
//               </button>
//               <button
//                 type="button"
//                 onClick={() => setIsDeleteModalOpen(false)}
//                 className="px-4 py-2 bg-white border border-[#0098f1] font-semibold text-[#0098f1] rounded-md"
//               >
//                 Cancel
//               </button>
//             </div>
//           </div>
//         </div>
//       )}

//       {viewAllowance && (
//         <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
//           <div className="bg-white p-8 rounded-lg shadow-lg w-1/2">
//             <h3 className="text-xl font-semibold mb-4 text-[#0098f1]">
//               Allowance Details
//             </h3>
//             <div className="mb-4 flex items-center space-x-3">
//               <h2 className="text-lg font-semibold">Display Name:</h2>
//               <span> {viewAllowance.DisplayName} </span>
//             </div>
//             <div className="mb-4 flex items-center space-x-3">
//               <h2 className="text-lg font-semibold">Allowance Code:</h2>
//               <span> {viewAllowance.AllowanceCode}</span>
//             </div>
//             <div className="mb-4 flex items-center space-x-3">
//               <h2 className="text-lg font-semibold">Taxable:</h2>
//               <span> {viewAllowance.Taxable}</span>
//             </div>
//             <div className="mb-4 flex items-center space-x-3">
//               <h2 className="text-lg font-semibold">LOP:</h2>
//               <span> {viewAllowance.LOP}</span>
//             </div>
//             <div className="mb-4 flex items-center space-x-3">
//               <h2 className="text-lg font-semibold">PF:</h2>
//               <span> {viewAllowance.PF}</span>
//             </div>
//             <div className="mb-4 flex items-center space-x-3">
//               <h2 className="text-lg font-semibold">ESI:</h2>
//               <span> {viewAllowance.ESI}</span>
//             </div>
//             <div className="mb-4 flex items-center space-x-3">
//               <h2 className="text-lg font-semibold">PT:</h2>
//               <span> {viewAllowance.PT}</span>
//             </div>
//             <div className="mb-4 flex items-center space-x-3">
//               <h2 className="text-lg font-semibold">Amount:</h2>
//               <span> {viewAllowance.Amount}</span>
//             </div>
//             <button
//               className="bg-[#0098f1] text-white font-semibold px-4 py-2 rounded-lg"
//               onClick={() => setViewAllowance(null)}
//             >
//               Close
//             </button>
//           </div>
//         </div>
//       )}
//       {showSuccess && (
//         <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 z-50">
//           <div className="bg-sky-500 p-8 rounded-lg text-center text-white">
//             <h2 className="text-xl mb-4">
//               <IoMdCheckmarkCircleOutline className="inline-block text-6xl" />
//             </h2>
//             <p>
//             Batch Added Successfully
//             </p>
//           </div>
//         </div>
//       )}
//       {showDeleteSuccessMessage && (
//         <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 z-50">
//           <div className="bg-red-500 p-8 rounded-lg text-center text-white">
//             <h2 className="text-xl mb-4">
//               <IoMdCheckmarkCircleOutline className="inline-block text-6xl" />
//             </h2>
//             <p>Event deleted successfully!</p>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Allowances;






import React, { useEffect, useState } from "react";
import { AiFillPlusCircle } from "react-icons/ai";
import { IoMdInformationCircleOutline, IoMdCheckmarkCircleOutline } from "react-icons/io";
import { FiEdit, FiTrash2 } from "react-icons/fi";
import { TiDeleteOutline } from "react-icons/ti";
import { MdOutlineCheckCircle, MdRemoveRedEye } from "react-icons/md";
import { toast } from "react-toastify";
import { payrollAPI } from "../../../../services/api";

const EMPTY = {
  DisplayName: "", AllowanceCode: "", Taxable: "Partially",
  LOP: "No", PF: "No", ESI: "No", PT: "No", Amount: "0",
};

const Allowances = () => {
  const [values, setValues] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [saving, setSaving] = useState(false);
  const [form, setForm] = useState(EMPTY);
  const [editId, setEditId] = useState(null);
  const [deleteId, setDeleteId] = useState(null);
  const [viewItem, setViewItem] = useState(null);
  const [showSuccess, setShowSuccess] = useState(false);

  const load = async () => {
    setLoading(true);
    try {
      const res = await payrollAPI.listAllowances();
      setValues(Array.isArray(res.data) ? res.data : []);
    } catch (e) { toast.error("Failed to load allowances"); }
    finally { setLoading(false); }
  };

  useEffect(() => { load(); }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((p) => ({ ...p, [name]: value }));
  };

  const handleSave = async () => {
    if (!form.DisplayName.trim()) { toast.error("Display name required"); return; }
    setSaving(true);
    try {
      const payload = {
        displayName: form.DisplayName,
        allowanceCode: form.AllowanceCode,
        taxable: form.Taxable, lop: form.LOP, pf: form.PF,
        esi: form.ESI, pt: form.PT, amount: form.Amount, isActive: true,
      };
      if (editId) await payrollAPI.updateAllowance(editId, payload);
      else await payrollAPI.createAllowance(payload);
      await load();
      setShowModal(false); setForm(EMPTY); setEditId(null);
      setShowSuccess(true); setTimeout(() => setShowSuccess(false), 1500);
    } catch (e) { toast.error(e?.response?.data?.detail || "Save failed"); }
    finally { setSaving(false); }
  };

  const handleEdit = (row) => {
    setForm({
      DisplayName: row.display_name, AllowanceCode: row.allowance_code,
      Taxable: row.taxable, LOP: row.lop, PF: row.pf,
      ESI: row.esi, PT: row.pt, Amount: row.amount,
    });
    setEditId(row.id); setShowModal(true);
  };

  const handleDelete = async () => {
    try { await payrollAPI.deleteAllowance(deleteId); await load(); setDeleteId(null); }
    catch (e) { toast.error("Delete failed"); }
  };

  const Icon = (v) =>
    v === "Yes" ? <MdOutlineCheckCircle className="text-2xl text-[#2bb92b]" /> :
    v === "No" ? <TiDeleteOutline className="text-2xl text-[#B20000]" /> : null;

  return (
    <div className="md:my-5 py-3">
      <div className="flex justify-between items-center mb-7">
        <div className="flex gap-x-2">
          <h3 className="lg:text-lg font-semibold">Allowances</h3>
          <button className="flex items-center gap-1"><IoMdInformationCircleOutline /><span className="text-xs">info</span></button>
        </div>
        <button onClick={() => { setForm(EMPTY); setEditId(null); setShowModal(true); }} className="flex items-center gap-2 bg-[#0098f1] p-2 md:px-4 rounded-lg text-white">
          <AiFillPlusCircle className="md:text-xl" /><span className="font-bold">Add</span>
        </button>
      </div>

      <div className="overflow-auto scrollbar-thin scrollbar-track-white scrollbar-thumb-[#0098F1]">
        <table className="min-w-full w-screen overflow-x-scroll text-nowrap">
          <thead className="bg-[#0098f1] text-white">
            <tr className="border border-[#0098F1]">
              {["Display Name","Allowance Code","Taxable","LOP","PF","ESI","PT","Amount","Action"].map(h =>
                <th key={h} className="py-3 px-4 border-r border-white text-sm font-medium">{h}</th>
              )}
            </tr>
          </thead>
          <tbody>
            {loading && <tr><td colSpan={9} className="py-3 text-center text-gray-500">Loading...</td></tr>}
            {!loading && values.length === 0 && <tr><td colSpan={9} className="py-3 text-center text-gray-500">No allowances yet.</td></tr>}
            {!loading && values.map((v) => (
              <tr key={v.id} className="bg-white text-center border border-[#0098F1]">
                <td className="px-4 border-r border-[#0098f1]">{v.display_name}</td>
                <td className="px-4 border-r border-[#0098f1]">{v.allowance_code}</td>
                <td className="px-4 border-r border-[#0098f1]">{v.taxable}</td>
                <td className="px-4 border-r border-[#0098f1]"><div className="flex justify-center">{Icon(v.lop)}</div></td>
                <td className="px-4 border-r border-[#0098f1]"><div className="flex justify-center">{Icon(v.pf)}</div></td>
                <td className="px-4 border-r border-[#0098f1]"><div className="flex justify-center">{Icon(v.esi)}</div></td>
                <td className="px-4 border-r border-[#0098f1]"><div className="flex justify-center">{Icon(v.pt)}</div></td>
                <td className="px-4 border-r border-[#0098f1]">{v.amount}</td>
                <td className="px-4">
                  <div className="flex justify-center gap-2">
                    <button onClick={() => setViewItem(v)}><MdRemoveRedEye className="bg-[#0098f1] text-white size-6 p-1 rounded-md" /></button>
                    <button onClick={() => handleEdit(v)}><FiEdit className="bg-[#2A8F4C] text-white size-6 p-1 rounded-md" /></button>
                    <button onClick={() => setDeleteId(v.id)}><FiTrash2 className="bg-[#FF3636] text-white size-6 p-1 rounded-md" /></button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-blue-100 bg-opacity-50">
          <div className="bg-white rounded-lg p-6 md:px-10 md:w-[700px]">
            <h2 className="md:text-2xl mb-4 text-[#0098f1]">{editId ? "Edit Allowance" : "Add Allowance"}</h2>
            <div className="grid grid-cols-1 md:space-y-4 space-y-2">
              {["DisplayName","AllowanceCode","Taxable"].map((f) => (
                <input key={f} name={f} value={form[f]} onChange={handleChange}
                  placeholder={f.replace(/([A-Z])/g," $1").trim()}
                  className="block w-full border border-[#0098f1] placeholder-[#0098f1] rounded-md p-2" />
              ))}
              {["LOP","PF","ESI","PT"].map((f) => (
                <div key={f} className="flex space-x-8 items-center text-[#0098f1]">
                  <label className="text-xl">{f}:</label>
                  {["Yes","No"].map((o) => (
                    <label key={o} className="flex items-center">
                      <input type="radio" name={f} value={o} checked={form[f] === o} onChange={handleChange} className="mr-2" />{o}
                    </label>
                  ))}
                </div>
              ))}
              <input name="Amount" value={form.Amount} onChange={handleChange} placeholder="Amount" className="block w-full border border-[#0098f1] rounded-md p-2" />
              <div className="flex justify-center gap-4">
                <button onClick={handleSave} disabled={saving} className="p-2 md:px-6 bg-[#0098f1] text-white rounded-md">{saving ? "Saving..." : editId ? "Update" : "Add"}</button>
                <button onClick={() => setShowModal(false)} className="p-2 md:px-4 border border-[#0098f1] text-[#0098f1] rounded-md">Cancel</button>
              </div>
            </div>
          </div>
        </div>
      )}

      {deleteId && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div className="bg-white rounded-lg p-6">
            <h2 className="text-xl mb-4 text-[#0098f1] font-semibold">Confirm Deletion</h2>
            <p>Delete this allowance?</p>
            <div className="flex justify-center gap-4 mt-4">
              <button onClick={handleDelete} className="px-4 py-2 bg-[#0098f1] text-white rounded-md">Delete</button>
              <button onClick={() => setDeleteId(null)} className="px-4 py-2 border border-[#0098f1] text-[#0098f1] rounded-md">Cancel</button>
            </div>
          </div>
        </div>
      )}

      {viewItem && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-8 rounded-lg shadow-lg w-1/2">
            <h3 className="text-xl font-semibold mb-4 text-[#0098f1]">Allowance Details</h3>
            {[["Display Name",viewItem.display_name],["Allowance Code",viewItem.allowance_code],["Taxable",viewItem.taxable],["LOP",viewItem.lop],["PF",viewItem.pf],["ESI",viewItem.esi],["PT",viewItem.pt],["Amount",viewItem.amount]].map(([k,v]) => (
              <div key={k} className="mb-3 flex gap-2"><span className="font-semibold">{k}:</span><span>{v}</span></div>
            ))}
            <button onClick={() => setViewItem(null)} className="bg-[#0098f1] text-white px-4 py-2 rounded-lg">Close</button>
          </div>
        </div>
      )}

      {showSuccess && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-sky-500 p-8 rounded-lg text-center text-white">
            <IoMdCheckmarkCircleOutline className="inline-block text-6xl" />
            <p className="mt-2">Saved successfully</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Allowances;