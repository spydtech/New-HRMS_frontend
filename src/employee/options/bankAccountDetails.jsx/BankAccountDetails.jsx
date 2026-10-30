// import React, { useRef, useState } from "react";
// import { FiEdit } from "react-icons/fi";

// const BankAccountDetails = () => {
//   const [showEdit, setShowEdit] = useState(false);
//   const [formData, setFormData] = useState({
//     bankName: "Current Bank Name",
//     accountNumber: "Current Account Number",
//     branchName: "Current Branch Name",
//     city: "Current City",
//     ifscCode: "Current IFSC Code",
//   });

//   const bankNameRef = useRef(null);
//   const accountNumberRef = useRef(null);
//   const branchNameRef = useRef(null);
//   const cityRef = useRef(null);
//   const ifscCodeRef = useRef(null);

//   const handleEditClick = (ref) => {
//     if (showEdit) {
//       ref.current.focus();
//     }
//   };

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSave = (e) => {
//     e.preventDefault();
//     setShowEdit(false);
//     alert("Data Saved Successfully");
//   };

//   const handleCancel = () => {
//     setShowEdit(false);
//     setFormData({
//       bankName: "Current Bank Name",
//       accountNumber: "Current Account Number",
//       branchName: "Current Branch Name",
//       city: "Current City",
//       ifscCode: "Current IFSC Code",
//     });
//   };

//   return (
//     <div className="px-4 py-2">
//       <h1 className="font-bold text-xl">Employee</h1>
//       <p className="font-semibold my-1">
//         <span>Dashboard</span> / <span>Bank account details</span>
//       </p>

//       <div className="bg-white my-5">
//         <div className="p-4">
//           <div className="flex justify-between">
//             <h1 className="text-[#E65F2B] font-semibold">
//               SALARY ACCOUNT DETAILS
//             </h1>
//             <button onClick={() => setShowEdit(!showEdit)}>
//               {!showEdit && <FiEdit className="text-2xl mr-5 text-[#E65F2B]" />}
//             </button>
//           </div>
//           <div className="pl-2 my-4">
//             <div className="flex gap-6 my-3">
//               <p className="text-[#E65F2B]">Account Holder's Name : </p>
//               <p>K. Navaneetha</p>
//             </div>

//             <form onSubmit={handleSave}>
//               <div className="grid grid-cols-2 gap-x-8 gap-y-4 mr-5">
//                 <div className="flex flex-col gap-2">
//                   <div className="flex justify-between">
//                     <label className="text-[#E65F2B]">Bank Name</label>
//                     <button
//                       type="button"
//                       onClick={() => handleEditClick(bankNameRef)}
//                     >
//                       {showEdit && (
//                         <FiEdit className="text-lg  text-[#E65F2B]" />
//                       )}
//                     </button>
//                   </div>
//                   <input
//                     type="text"
//                     name="bankName"
//                     onChange={handleInputChange}
//                     value={formData.bankName}
//                     disabled={!showEdit}
//                     ref={bankNameRef}
//                     className="border border-[#E65F2B] outline-none p-2 px-3 text-md rounded-md"
//                   />
//                 </div>
//                 <div className="flex flex-col gap-2">
//                   <div className="flex justify-between">
//                     <label className="text-[#E65F2B]">Account Number</label>
//                     <button
//                       type="button"
//                       onClick={() => handleEditClick(accountNumberRef)}
//                     >
//                       {showEdit && (
//                         <FiEdit className="text-lg  text-[#E65F2B]" />
//                       )}
//                     </button>
//                   </div>
//                   <input
//                     type="text"
//                     name="accountNumber"
//                     onChange={handleInputChange}
//                     value={formData.accountNumber}
//                     disabled={!showEdit}
//                     ref={accountNumberRef}
//                     className="border border-[#E65F2B] outline-none p-2 px-3 text-md rounded-md"
//                   />
//                 </div>
//                 <div className="flex flex-col gap-2">
//                   <div className="flex justify-between">
//                     <label className="text-[#E65F2B]">Branch Name</label>
//                     <button
//                       type="button"
//                       onClick={() => handleEditClick(branchNameRef)}
//                     >
//                       {showEdit && (
//                         <FiEdit className="text-lg  text-[#E65F2B]" />
//                       )}
//                     </button>
//                   </div>
//                   <input
//                     type="text"
//                     name="branchName"
//                     onChange={handleInputChange}
//                     value={formData.branchName}
//                     disabled={!showEdit}
//                     ref={branchNameRef}
//                     className="border border-[#E65F2B] outline-none p-2 px-3 text-md rounded-md"
//                   />
//                 </div>
//                 <div className="flex flex-col gap-2">
//                   <div className="flex justify-between">
//                     <label className="text-[#E65F2B]">City</label>
//                     <button
//                       type="button"
//                       onClick={() => handleEditClick(cityRef)}
//                     >
//                       {showEdit && (
//                         <FiEdit className="text-lg  text-[#E65F2B]" />
//                       )}
//                     </button>
//                   </div>
//                   <input
//                     type="text"
//                     name="city"
//                     onChange={handleInputChange}
//                     value={formData.city}
//                     ref={cityRef}
//                     disabled={!showEdit}
//                     className="border border-[#E65F2B] outline-none p-2 px-3 text-md rounded-md"
//                   />
//                 </div>
//                 <div className="flex flex-col gap-2">
//                   <div className="flex justify-between">
//                     <label className="text-[#E65F2B]">IFSC Code</label>
//                     <button
//                       type="button"
//                       onClick={() => handleEditClick(ifscCodeRef)}
//                     >
//                       {showEdit && (
//                         <FiEdit className="text-lg  text-[#E65F2B]" />
//                       )}
//                     </button>
//                   </div>
//                   <input
//                     type="text"
//                     name="ifscCode"
//                     onChange={handleInputChange}
//                     value={formData.ifscCode}
//                     ref={ifscCodeRef}
//                     disabled={!showEdit}
//                     className="border border-[#E65F2B] outline-none p-2 px-3 text-md rounded-md"
//                   />
//                 </div>
//               </div>
//               {showEdit && (
//                 <div className=" mt-8 flex gap-5 justify-center">
//                   <button
//                     type="submit"
//                     className="bg-[#E65F2B] px-12 py-1 rounded-lg text-white font-semibold"
//                   >
//                     Save
//                   </button>
//                   <button
//                     type="button"
//                     onClick={handleCancel}
//                     className="bg-white border border-[#E65F2B] px-12 py-1 rounded-lg text-[#E65F2B] font-semibold"
//                   >
//                     Cancel
//                   </button>
//                 </div>
//               )}
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BankAccountDetails;









import React, { useEffect, useState, useRef } from "react";
import { FiEdit } from "react-icons/fi";
import { toast } from "react-toastify";
import { bankAccountAPI } from "../../services/api";

const BankAccountDetails = () => {
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [showEdit, setShowEdit] = useState(false);

  const [formData, setFormData] = useState({
    accountHolderName: "",
    bankName: "",
    accountNumber: "",
    branchName: "",
    city: "",
    ifscCode: "",
  });

  const [originalData, setOriginalData] = useState({});

  const accountHolderRef = useRef(null);
  const bankNameRef = useRef(null);
  const accountNumberRef = useRef(null);
  const branchNameRef = useRef(null);
  const cityRef = useRef(null);
  const ifscCodeRef = useRef(null);

  // Fetch data from backend
  const loadBankAccount = async () => {
    setLoading(true);
    try {
      const res = await bankAccountAPI.get();
      const data = res.data || {};
      
      const filled = {
        accountHolderName: data.accountHolderName || "",
        bankName: data.bankName || "",
        accountNumber: data.accountNumber || "",
        branchName: data.branchName || "",
        city: data.city || "",
        ifscCode: data.ifscCode || "",
      };

      setFormData(filled);
      setOriginalData(filled);
      
      // If nothing is configured yet, automatically start in Edit mode
      setShowEdit(!data.isConfigured);
    } catch (err) {
      toast.error("Failed to load bank account details");
      setShowEdit(true); // Fallback
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadBankAccount();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Triggers edit mode and focuses the clicked input
  const enableEdit = (ref) => {
    setShowEdit(true);
    setTimeout(() => {
      if (ref.current) ref.current.focus();
    }, 50);
  };

  const handleSave = async (e) => {
    e.preventDefault();
    
    // Validations
    if (!formData.accountHolderName.trim()) return toast.error("Account Holder Name is required");
    if (!formData.bankName.trim()) return toast.error("Bank Name is required");
    if (!formData.accountNumber.trim()) return toast.error("Account Number is required");
    if (!formData.branchName.trim()) return toast.error("Branch Name is required");
    if (!formData.city.trim()) return toast.error("City is required");
    if (formData.ifscCode.trim().length !== 11) return toast.error("IFSC Code must be 11 characters");

    setSaving(true);
    try {
      await bankAccountAPI.update(formData);
      toast.success("Data Saved Successfully");
      setShowEdit(false);
      loadBankAccount();
    } catch (err) {
      toast.error(err?.response?.data?.detail || "Failed to save bank account");
    } finally {
      setSaving(false);
    }
  };

  const handleCancel = () => {
    setFormData(originalData);
    setShowEdit(false);
  };

  if (loading) {
    return <div className="p-10 text-center text-[#2A546D] font-bold">Loading Bank Details...</div>;
  }

  return (
    <div className="px-4 py-2 min-h-screen">
      <h1 className="font-bold text-xl text-[#2A546D]">Employee</h1>
      <p className="font-semibold my-1 text-[#2A546D]">
        <span>Employee</span> / <span>Payroll</span> / <span>BankAccount</span>
      </p>

      <div className="bg-white my-5 shadow-sm rounded-lg p-6">
        
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-[#2A546D] text-xl font-semibold">
            SALARY ACCOUNT DETAILS
          </h1>
          {!showEdit && (
            <button onClick={() => setShowEdit(true)} title="Edit Details">
              <FiEdit className="text-2xl text-[#2A546D]" />
            </button>
          )}
        </div>

        <form onSubmit={handleSave}>
          
          {/* Account Holder's Name */}
          <div className="flex flex-col gap-2 mb-6 md:w-[48%]">
            <div className="flex justify-between items-center">
              <label className="text-[#2A546D] font-medium">Account Holder's Name</label>
              {!showEdit && (
                <button type="button" onClick={() => enableEdit(accountHolderRef)}>
                  <FiEdit className="text-lg text-[#2A546D]" />
                </button>
              )}
            </div>
            <input
              type="text"
              name="accountHolderName"
              value={formData.accountHolderName}
              onChange={handleInputChange}
              readOnly={!showEdit}
              onClick={() => !showEdit && enableEdit(accountHolderRef)}
              ref={accountHolderRef}
              placeholder="Enter Account Holder Name"
              className={`border border-[#2A546D] text-[#2A546D] outline-none p-2 px-3 rounded-md transition-all ${
                showEdit ? "bg-white cursor-text focus:ring-2 focus:ring-[#2A546D]/30" : "bg-gray-50 cursor-pointer"
              }`}
            />
          </div>

          {/* Other Fields */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
            
            {/* Bank Name */}
            <div className="flex flex-col gap-2">
              <div className="flex justify-between items-center">
                <label className="text-[#2A546D] font-medium">Bank Name</label>
                {!showEdit && (
                  <button type="button" onClick={() => enableEdit(bankNameRef)}>
                    <FiEdit className="text-lg text-[#2A546D]" />
                  </button>
                )}
              </div>
              <input
                type="text"
                name="bankName"
                value={formData.bankName}
                onChange={handleInputChange}
                readOnly={!showEdit}
                onClick={() => !showEdit && enableEdit(bankNameRef)}
                ref={bankNameRef}
                placeholder="Enter Bank Name"
                className={`border border-[#2A546D] text-[#2A546D] outline-none p-2 px-3 rounded-md transition-all ${
                  showEdit ? "bg-white cursor-text focus:ring-2 focus:ring-[#2A546D]/30" : "bg-gray-50 cursor-pointer"
                }`}
              />
            </div>

            {/* Account Number */}
            <div className="flex flex-col gap-2">
              <div className="flex justify-between items-center">
                <label className="text-[#2A546D] font-medium">Account Number</label>
                {!showEdit && (
                  <button type="button" onClick={() => enableEdit(accountNumberRef)}>
                    <FiEdit className="text-lg text-[#2A546D]" />
                  </button>
                )}
              </div>
              <input
                type="text"
                name="accountNumber"
                value={formData.accountNumber}
                onChange={handleInputChange}
                readOnly={!showEdit}
                onClick={() => !showEdit && enableEdit(accountNumberRef)}
                ref={accountNumberRef}
                placeholder="Enter Account Number"
                className={`border border-[#2A546D] text-[#2A546D] outline-none p-2 px-3 rounded-md transition-all ${
                  showEdit ? "bg-white cursor-text focus:ring-2 focus:ring-[#2A546D]/30" : "bg-gray-50 cursor-pointer"
                }`}
              />
            </div>

            {/* Branch Name */}
            <div className="flex flex-col gap-2">
              <div className="flex justify-between items-center">
                <label className="text-[#2A546D] font-medium">Branch Name</label>
                {!showEdit && (
                  <button type="button" onClick={() => enableEdit(branchNameRef)}>
                    <FiEdit className="text-lg text-[#2A546D]" />
                  </button>
                )}
              </div>
              <input
                type="text"
                name="branchName"
                value={formData.branchName}
                onChange={handleInputChange}
                readOnly={!showEdit}
                onClick={() => !showEdit && enableEdit(branchNameRef)}
                ref={branchNameRef}
                placeholder="Enter Branch Name"
                className={`border border-[#2A546D] text-[#2A546D] outline-none p-2 px-3 rounded-md transition-all ${
                  showEdit ? "bg-white cursor-text focus:ring-2 focus:ring-[#2A546D]/30" : "bg-gray-50 cursor-pointer"
                }`}
              />
            </div>

            {/* City */}
            <div className="flex flex-col gap-2">
              <div className="flex justify-between items-center">
                <label className="text-[#2A546D] font-medium">City</label>
                {!showEdit && (
                  <button type="button" onClick={() => enableEdit(cityRef)}>
                    <FiEdit className="text-lg text-[#2A546D]" />
                  </button>
                )}
              </div>
              <input
                type="text"
                name="city"
                value={formData.city}
                onChange={handleInputChange}
                readOnly={!showEdit}
                onClick={() => !showEdit && enableEdit(cityRef)}
                ref={cityRef}
                placeholder="Enter City"
                className={`border border-[#2A546D] text-[#2A546D] outline-none p-2 px-3 rounded-md transition-all ${
                  showEdit ? "bg-white cursor-text focus:ring-2 focus:ring-[#2A546D]/30" : "bg-gray-50 cursor-pointer"
                }`}
              />
            </div>

            {/* IFSC Code */}
            <div className="flex flex-col gap-2">
              <div className="flex justify-between items-center">
                <label className="text-[#2A546D] font-medium">IFSC Code</label>
                {!showEdit && (
                  <button type="button" onClick={() => enableEdit(ifscCodeRef)}>
                    <FiEdit className="text-lg text-[#2A546D]" />
                  </button>
                )}
              </div>
              <input
                type="text"
                name="ifscCode"
                value={formData.ifscCode}
                onChange={handleInputChange}
                readOnly={!showEdit}
                onClick={() => !showEdit && enableEdit(ifscCodeRef)}
                ref={ifscCodeRef}
                placeholder="Enter IFSC Code"
                maxLength={11}
                className={`border border-[#2A546D] text-[#2A546D] outline-none p-2 px-3 rounded-md transition-all ${
                  showEdit ? "bg-white cursor-text focus:ring-2 focus:ring-[#2A546D]/30" : "bg-gray-50 cursor-pointer"
                }`}
              />
            </div>
          </div>

          {/* Action Buttons */}
          {showEdit && (
            <div className="mt-8 flex gap-5 justify-center">
              <button
                type="submit"
                disabled={saving}
                className={`px-12 py-2 rounded-lg text-white font-semibold transition ${
                  saving ? "bg-gray-400 cursor-not-allowed" : "bg-[#2A546D] hover:bg-[#1f3e51]"
                }`}
              >
                {saving ? "Saving..." : "Save"}
              </button>
              <button
                type="button"
                onClick={handleCancel}
                disabled={saving}
                className="bg-white border border-[#2A546D] px-12 py-2 rounded-lg text-[#2A546D] font-semibold hover:bg-gray-50 transition"
              >
                Cancel
              </button>
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default BankAccountDetails;