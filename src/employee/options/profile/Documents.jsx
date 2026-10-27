// /* eslint-disable no-unused-vars */
// /* eslint-disable react/prop-types */
// import React, { useState, useEffect } from "react";
// import { FiEdit } from "react-icons/fi";
// import { FaPlusCircle } from "react-icons/fa";
// import { MdDelete } from "react-icons/md";
// import { IoMdCheckmarkCircleOutline } from "react-icons/io";
// import axios from 'axios'
// //import { API_BASE_URL } from "../../../Config/api";
// import { useSelector } from "react-redux";


// const MAX_FILE_SIZE_MB = 10; // Max file size in megabytes


// const Documents = ({
//   handleOpenDocumentsModal,
//   handleCloseDocumentsModal,
//   isDocumentsModalOpen,
// }) => {
//   const [idType, setIdType] = useState("");
//   const [idNumber, setIdNumber] = useState("");
//   const [file, setFile] = useState(null);
//   const [fileName, setFileName] = useState("");
//   const [documentsData, setDocumentsData] = useState([]);
//   const [editMode, setEditMode] = useState(false);
//   const [editingId, setEditingId] = useState(null);
//   const [successMessage, setSuccessMessage] = useState("");
//   const jwtToken = localStorage.getItem('employeeJwt')
//   const auth = useSelector((state) => state.auth);
//   const employeeId = auth.employee.employeeId
//   const [errorMessage, setErrorMessage] = useState("")

//   useEffect(() => {
//     fetchDocuments();
//   }, []);

//   // Function to fetch documents from the backend
//   const fetchDocuments = async () => {
//     try {
//       const response = await axios.get(`${API_BASE_URL}/aadhar/get/${employeeId}`, {
//         headers: {
//           "Authorization": `Bearer ${jwtToken}`
//         },
//       });
//       setDocumentsData(response.data);
//     } catch (error) {
//       console.error("Error fetching documents:", error);
//     }
//   };

//   const handleDocumentSave = async () => {
//     if (!idType || !idNumber || !employeeId) {
//       alert("Please fill in all required fields.");
//       return;
//     }

//     // Check file size before uploading
//     if (file && file.size > MAX_FILE_SIZE_MB * 1024 * 1024) {
//       alert(`File size exceeds the ${MAX_FILE_SIZE_MB}MB limit.`);
//       return;
//     }

//     const formData = new FormData();
//     formData.append("idType", idType);
//     formData.append("idNumber", idNumber);
//     formData.append("employeeId", employeeId);
//     if (file) {
//       formData.append("file", file);
//     }

//     try {
//       if (editMode) {
//         // Update existing document
//         await axios.put(`${API_BASE_URL}/aadhar/update`, formData, {
//           headers: {
//             Authorization: `Bearer ${jwtToken}`,
//             "Content-Type": "multipart/form-data",
//           },
//         });
//         setDocumentsData((prevData) =>
//           prevData.map((item) =>
//             item.employeeId === employeeId
//               ? { ...item, idType, idNumber, file, employeeId }
//               : item
//           )
//         );
//         setSuccessMessage("Document updated successfully!");
//       } else {
//         // Add new document
//         const response = await axios.post(`${API_BASE_URL}/aadhar/save`, formData, {
//           headers: {
//             Authorization: `Bearer ${jwtToken}`,
//             "Content-Type": "multipart/form-data",
//           },
//         });
//         setDocumentsData((prevData) => [...prevData, response.data]);
//         setSuccessMessage("Document added successfully!");
//       }
//       resetForm();
//       handleCloseDocumentsModal();
//     } catch (error) {
//       console.error("Error adding/updating document:", error.response?.data || error.message);
//       setErrorMessage(error.response?.data?.message || "An error occurred");
//     }

//     setTimeout(() => setSuccessMessage(""), 3000); // Clear success message after 3 seconds
//   };

//   const handleEdit = (employeeId) => {
//     const documentToEdit = documentsData.find((item) => item.employeeId === employeeId);
//     if (documentToEdit) {
//       setIdType(documentToEdit.idType);
//       setIdNumber(documentToEdit.idNumber);
//       setFileName(documentToEdit.fileName);
//       setEditingId(employeeId);
//       setEditMode(true);
//       handleOpenDocumentsModal();
//     }
//   };

//   const handleDelete = async (employeeId, idType) => {
//     try {
//       await axios.delete(`${API_BASE_URL}/aadhar/${employeeId}/${idType}`);
//       setDocumentsData(documentsData.filter((item) => item.employeeId !== employeeId));
//       setSuccessMessage("Document deleted successfully!");
//       setTimeout(() => setSuccessMessage(""), 3000); // Clear success message after 3 seconds
//     } catch (error) {
//       console.error("Error deleting document:", error);
//     }
//   };

//   const resetForm = () => {
//     setIdType("");
//     setIdNumber("");
//     setFile(null);
//     setFileName("");
//     setEditMode(false);
//     setEditingId(null);
//   };

//   const handleFileChange = (e) => {
//     const uploadedFile = e.target.files[0];
//     if (uploadedFile) {
//       setFile(uploadedFile);
//       setFileName(uploadedFile.name); // Update fileName state with the selected file name
//     }
//   };

//   return (
//     <div className="bg-white h-[500px] p-6 mx-10 flex flex-col ">
//       <div className="flex justify-between items-center py-2">
//         <h1 className="text-lg font-semibold text-[#2A546D]">ID PROOFS</h1>
//         <button
//           className="flex items-center p-3 px-6 text-lg bg-[#2A546D] text-white py-2 justify-center rounded-lg hover:bg-[#2A546D] focus:outline-none focus:ring-2 focus:ring-[#2A546D]"
//           onClick={() => {
//             resetForm(); // Ensure form is reset when adding new document
//             handleOpenDocumentsModal();
//           }}
//         >
//           <FaPlusCircle className="text-xl mr-2" aria-hidden="true" />
//           Add
//         </button>
//       </div>
//       <hr className="border-t-2 border-[#2A546D] mb-4" />
//       <div className="pt-4 mx-4">
//         <table className="min-w-full max-w-3xl mx-auto text-nowrap">
//           <thead>
//             <tr className="bg-[#2A546D] text-white">
//               <th className="p-3 border border-r-white border-[#2a546d]">
//                 SL NO
//               </th>
//               <th className="p-3 border border-r-white border-[#2a546d] ">
//                 Employee ID
//               </th>
//               <th className="p-3 border border-r-white border-[#2a546d] ">
//                 ID Type
//               </th>
//               <th className="p-3 border-r border-white">ID Number</th>

//               <th className="p-3 border-r border-white">File Name</th>
//               <th className="p-3  border  border-[#2a546d]">Actions</th>
//             </tr>
//           </thead>
//           <tbody className="bg-white divide-y divide-gray-200">
//             {documentsData.map((item, index) => (
//               <tr
//                 key={item.employeeId}
//                 className="text-center text-[#2A546D] border  border-[#2a546d]"
//               >
//                 <td className="p-3 font-semibold border-r border-[#2a546d]">{index + 1}</td>
//                 <td className="p-3 font-semibold border-r border-[#2a546d]">
//                   {item.employeeId}
//                 </td>
//                 <td className="p-3 font-semibold border-r border-[#2a546d]">
//                   {item.idType}
//                 </td>
//                 <td className="p-3 border-r border-[#2a546d]">
//                   {item.idNumber}
//                 </td>

//                 <td className="p-3 border-r border-[#2a546d]">
//                   {item.image}
//                 </td>
//                 <td className="p-3 border-r border-[#2a546d]">
//                   <button
//                     onClick={() => handleEdit(item.employeeId)}
//                     className="text-blue-600 mr-4"
//                     aria-label="Edit"
//                   >
//                     <FiEdit className="inline text-xl" aria-hidden="true" />
//                   </button>
//                   <button
//                     onClick={() => handleDelete(item.employeeId, item.idType)}
//                     className="text-red-600"
//                     aria-label="Delete"
//                   >
//                     <MdDelete className="inline text-xl" aria-hidden="true" />
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>

//       {isDocumentsModalOpen && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
//           <div className="bg-white p-5 rounded-lg w-[90%] md:w-[50%] relative">
//             <button
//               className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
//               onClick={handleCloseDocumentsModal}
//               aria-label="Close"
//             >
//               &times;
//             </button>
//             <h2 className="text-2xl font-semibold mb-4 text-[#2A546D]">
//               {editMode ? "Edit Document" : "Add Document"}
//             </h2>
//             <div className="grid grid-cols-1 gap-4">
//               <div>
//                 <select
//                   id="idType"
//                   value={idType}
//                   onChange={(e) => setIdType(e.target.value)}
//                   className="w-full border-b border-[#2A546D] bg-transparent rounded-none p-2 focus:border-[#2A546D] outline-none text-[#2A546D]"
//                   aria-label="ID Type"
//                 >
//                   <option value="">Select ID Type</option>
//                   <option value="passport">Passport</option>
//                   <option value="pan_card">PAN Card</option>
//                   <option value="driver_license">Driver License</option>
//                   <option value="aadhar_card">Aadhar Card</option>
//                 </select>
//               </div>
//               <div>
//                 <label htmlFor="idNumber" className="block text-gray-700">
//                   ID Number
//                 </label>
//                 <input
//                   type="text"
//                   id="idNumber"
//                   value={idNumber}
//                   onChange={(e) => setIdNumber(e.target.value)}
//                   className="w-full border-b border-[#2A546D] bg-transparent rounded-none p-2 focus:border-[#2A546D] outline-none"
//                   placeholder="Enter ID Number"
//                   aria-label="ID Number"
//                 />
//               </div>
//               <div className="mb-4">
//                 <label htmlFor="file" className="block text-[#2A546D]">
//                   Upload Photo Image File
//                 </label>
//                 <input
//                   id="file"
//                   type="file"
//                   onChange={handleFileChange}
//                   className="border border-[#2A546D] h-[60px] w-full text-white cursor-pointer file:bg-[#2A546D] file:h-[60px] file:w-[150px] file:text-white file:border-[#2A546D]"
//                   aria-label="Upload File"
//                 />
//                 {/* Display the selected file name */}
//                 {fileName && (
//                   <p className="mt-2 text-gray-600">
//                     Selected File: {fileName}
//                   </p>
//                 )}
//               </div>
//               <div className="flex justify-end mt-4">
//                 <button
//                   onClick={handleDocumentSave}
//                   className="bg-[#2A546D] text-white h-[40px] w-[120px] rounded-lg  focus:outline-none focus:ring-2 focus:ring-[#2A546D]"
//                   aria-label="Save Document"
//                 >
//                   {editMode ? "Update Document" : "Save Document"}
//                 </button>
//                 <button
//                   onClick={handleCloseDocumentsModal}
//                   className="bg-transparent border border-[#2A546D] text-[#2A546D] h-[40px] w-[120px] rounded-lg ml-2 focus:outline-none focus:ring-2 focus:ring-[#2A546D]"
//                   aria-label="Cancel"
//                 >
//                   Cancel
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}

//       {successMessage && (
//         <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
//           <div className="bg-[#2A546D] p-8 rounded-lg text-center text-white">
//             <h2 className="text-3xl mb-4">
//               <IoMdCheckmarkCircleOutline className="inline-block text-6xl" />
//             </h2>
//             {successMessage}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Documents;








/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import { FiEdit } from "react-icons/fi";
import { FaPlusCircle } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import { documentsAPI } from "../../../services/api";

const MAX_FILE_SIZE_MB = 10;

const Documents = ({
  handleOpenDocumentsModal,
  handleCloseDocumentsModal,
  isDocumentsModalOpen,
}) => {
  const [idType, setIdType] = useState("");
  const [idNumber, setIdNumber] = useState("");
  const [file, setFile] = useState(null);
  const [fileName, setFileName] = useState("");
  const [documentsData, setDocumentsData] = useState([]);
  const [editMode, setEditMode] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const auth = useSelector((state) => state.auth);
  const u = auth.user || {};
  const employeeId = u.employeeId || u.employee_id || "";

  useEffect(() => {
    if (employeeId) fetchDocuments();
  }, [employeeId]);

  const fetchDocuments = async () => {
    if (!employeeId) return;
    try {
      const res = await documentsAPI.getByEmployee(employeeId);
      setDocumentsData(Array.isArray(res.data) ? res.data : []);
    } catch (err) {
      console.error("Error fetching documents:", err);
    }
  };

  const handleDocumentSave = async () => {
    if (!idType || !idNumber || !employeeId) {
      toast.error("Please fill in all required fields.");
      return;
    }
    if (file && file.size > MAX_FILE_SIZE_MB * 1024 * 1024) {
      toast.error(`File exceeds ${MAX_FILE_SIZE_MB}MB limit`);
      return;
    }

    const formData = new FormData();
    formData.append("idType", idType);
    formData.append("idNumber", idNumber);
    formData.append("employeeId", employeeId);
    if (file) formData.append("file", file);

    try {
      if (editMode) {
        await documentsAPI.update(formData);
        setSuccessMessage("Document updated successfully!");
      } else {
        await documentsAPI.save(formData);
        setSuccessMessage("Document added successfully!");
      }
      await fetchDocuments();
      resetForm();
      handleCloseDocumentsModal();
      setTimeout(() => setSuccessMessage(""), 3000);
    } catch (err) {
      toast.error(
        err.response?.data?.detail || "Failed to save document"
      );
    }
  };

  const handleEdit = (record) => {
    setIdType(record.idType || record.id_type || "");
    setIdNumber(record.idNumber || record.id_number || "");
    setFileName(record.fileName || record.file_name || "");
    setEditMode(true);
    handleOpenDocumentsModal();
  };

  const handleDelete = async (employeeIdArg, idTypeArg) => {
    try {
      await documentsAPI.remove(employeeIdArg, idTypeArg);
      setDocumentsData((prev) =>
        prev.filter(
          (d) =>
            !(
              (d.employeeId || d.employee_id) === employeeIdArg &&
              (d.idType || d.id_type) === idTypeArg
            )
        )
      );
      setSuccessMessage("Document deleted successfully!");
      setTimeout(() => setSuccessMessage(""), 3000);
    } catch (err) {
      toast.error(err.response?.data?.detail || "Failed to delete");
    }
  };

  const resetForm = () => {
    setIdType("");
    setIdNumber("");
    setFile(null);
    setFileName("");
    setEditMode(false);
  };

  const handleFileChange = (e) => {
    const f = e.target.files[0];
    if (f) {
      setFile(f);
      setFileName(f.name);
    }
  };

  return (
    <div className="bg-white h-[500px] p-6 mx-10 flex flex-col">
      <div className="flex justify-between items-center py-2">
        <h1 className="text-lg font-semibold text-[#2A546D]">ID PROOFS</h1>
        <button
          className="flex items-center p-3 px-6 text-lg bg-[#2A546D] text-white rounded-lg"
          onClick={() => {
            resetForm();
            handleOpenDocumentsModal();
          }}
        >
          <FaPlusCircle className="text-xl mr-2" />
          Add
        </button>
      </div>
      <hr className="border-t-2 border-[#2A546D] mb-4" />

      <div className="pt-4 mx-4 overflow-x-auto">
        <table className="min-w-full">
          <thead>
            <tr className="bg-[#2A546D] text-white">
              {["SL NO", "Employee ID", "ID Type", "ID Number", "File Name", "Actions"].map((h) => (
                <th key={h} className="p-3 border-r border-white">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {documentsData.length === 0 && (
              <tr>
                <td colSpan={6} className="text-center p-4 text-gray-500">
                  No documents uploaded
                </td>
              </tr>
            )}
            {documentsData.map((item, index) => (
              <tr
                key={item.id || index}
                className="text-center text-[#2A546D] border border-[#2a546d]"
              >
                <td className="p-3 border-r border-[#2a546d]">{index + 1}</td>
                <td className="p-3 border-r border-[#2a546d]">
                  {item.employeeId || item.employee_id}
                </td>
                <td className="p-3 border-r border-[#2a546d]">
                  {item.idType || item.id_type}
                </td>
                <td className="p-3 border-r border-[#2a546d]">
                  {item.idNumber || item.id_number}
                </td>
                <td className="p-3 border-r border-[#2a546d]">
                  {item.fileName || item.image}
                </td>
                <td className="p-3 border-r border-[#2a546d]">
                  <button
                    onClick={() => handleEdit(item)}
                    className="text-blue-600 mr-4"
                  >
                    <FiEdit className="inline text-xl" />
                  </button>
                  <button
                    onClick={() =>
                      handleDelete(
                        item.employeeId || item.employee_id,
                        item.idType || item.id_type
                      )
                    }
                    className="text-red-600"
                  >
                    <MdDelete className="inline text-xl" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {isDocumentsModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-5 rounded-lg w-[90%] md:w-[50%] relative">
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
              onClick={handleCloseDocumentsModal}
            >
              &times;
            </button>
            <h2 className="text-2xl font-semibold mb-4 text-[#2A546D]">
              {editMode ? "Edit Document" : "Add Document"}
            </h2>
            <div className="grid grid-cols-1 gap-4">
              <select
                value={idType}
                onChange={(e) => setIdType(e.target.value)}
                className="w-full border-b border-[#2A546D] p-2 outline-none text-[#2A546D]"
                disabled={editMode}
              >
                <option value="">Select ID Type</option>
                <option value="passport">Passport</option>
                <option value="pan_card">PAN Card</option>
                <option value="driver_license">Driver License</option>
                <option value="aadhar_card">Aadhar Card</option>
              </select>

              <input
                type="text"
                value={idNumber}
                onChange={(e) => setIdNumber(e.target.value)}
                placeholder="Enter ID Number"
                className="w-full border-b border-[#2A546D] p-2 outline-none text-[#2A546D]"
              />

              <input
                type="file"
                onChange={handleFileChange}
                className="border border-[#2A546D] h-[60px] w-full cursor-pointer file:bg-[#2A546D] file:h-[60px] file:w-[150px] file:text-white"
              />
              {fileName && (
                <p className="mt-2 text-gray-600">Selected File: {fileName}</p>
              )}

              <div className="flex justify-end mt-4">
                <button
                  onClick={handleDocumentSave}
                  className="bg-[#2A546D] text-white h-[40px] w-[120px] rounded-lg"
                >
                  {editMode ? "Update" : "Save"}
                </button>
                <button
                  onClick={handleCloseDocumentsModal}
                  className="bg-transparent border border-[#2A546D] text-[#2A546D] h-[40px] w-[120px] rounded-lg ml-2"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {successMessage && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-[#2A546D] p-8 rounded-lg text-center text-white">
            <IoMdCheckmarkCircleOutline className="inline-block text-6xl" />
            <p className="mt-2">{successMessage}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Documents;