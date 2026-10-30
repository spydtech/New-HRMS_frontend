// import React, { useRef, useState } from "react";
// import { FiEdit } from "react-icons/fi";

// const BankAccount = () => {
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
//     <div className="p-4 mt-4 min-h-screen">
//       <div className="  flex flex-col md:flex-row justify-between">
//         <div>
//           <span className=" text-[#2A546D] text-sm lg:text-lg font-medium">
//             Employee / Payroll / BankAccount
//           </span>
//         </div>
//       </div>

//       <div className="bg-white my-5">
//         <div className="p-2 md:p-4">
//           <div className="flex justify-between items-center">
//             <h1 className="text-[#2A546D] font-semibold text-sm md:text-xl">
//               SALARY ACCOUNT DETAILS
//             </h1>
//             <button
//               className="md:text-2xl"
//               onClick={() => setShowEdit(!showEdit)}
//             >
//               {!showEdit && <FiEdit className=" md:mr-5 text-[#2A546D]" />}
//             </button>
//           </div>
//           <div className="md:pl-2 my-4">
//             <div className="flex flex-col gap-y-1 md:flex-row md:gap-6 my-3">
//               <p className="text-[#2A546D] text-lg">Account Holder's Name : </p>
//               <p className="text-black  text-lg">Employee Name</p>
//             </div>

//             <form onSubmit={handleSave}>
//               <div className="grid md:grid-cols-2 md:gap-x-8 gap-y-4 md:mr-5">
//                 <div className="flex flex-col gap-1 md:gap-2">
//                   <div className="flex justify-between">
//                     <label className="text-[#2A546D]">Bank Name</label>
//                     <button
//                       type="button"
//                       onClick={() => handleEditClick(bankNameRef)}
//                     >
//                       {showEdit && (
//                         <FiEdit className="md:text-lg  text-[#2A546D]" />
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
//                     className="border border-[#2A546D]  outline-none p-1 md:p-3 px-3 text-sm md:text-md rounded-md"
//                   />
//                 </div>
//                 <div className="flex flex-col gap-1 md:gap-2">
//                   <div className="flex justify-between">
//                     <label className="text-[#2A546D]">Account Number</label>
//                     <button
//                       type="button"
//                       onClick={() => handleEditClick(accountNumberRef)}
//                     >
//                       {showEdit && (
//                         <FiEdit className="md:text-lg  text-[#2A546D]" />
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
//                     className="border border-[#2A546D] outline-none p-1 md:p-3 px-3 text-sm md:text-md rounded-md"
//                   />
//                 </div>
//                 <div className="flex flex-col gap-1 md:gap-2">
//                   <div className="flex justify-between">
//                     <label className="text-[#2A546D]">Branch Name</label>
//                     <button
//                       type="button"
//                       onClick={() => handleEditClick(branchNameRef)}
//                     >
//                       {showEdit && (
//                         <FiEdit className="md:text-lg  text-[#2A546D]" />
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
//                     className="border border-[#2A546D] outline-none p-1 md:p-3 px-3 text-sm md:text-md rounded-md"
//                   />
//                 </div>
//                 <div className="flex flex-col gap-1 md:gap-2">
//                   <div className="flex justify-between">
//                     <label className="text-[#2A546D]">City</label>
//                     <button
//                       type="button"
//                       onClick={() => handleEditClick(cityRef)}
//                     >
//                       {showEdit && (
//                         <FiEdit className="md:text-lg  text-[#2A546D]" />
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
//                     className="border border-[#2A546D] outline-none p-1 md:p-3 px-3 text-sm md:text-md rounded-md"
//                   />
//                 </div>
//                 <div className="flex flex-col gap-1 md:gap-2">
//                   <div className="flex justify-between">
//                     <label className="text-[#2A546D]">IFSC Code</label>
//                     <button
//                       type="button"
//                       onClick={() => handleEditClick(ifscCodeRef)}
//                     >
//                       {showEdit && (
//                         <FiEdit className="md:text-lg  text-[#2A546D]" />
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
//                     className="border border-[#2A546D] outline-none p-1 md:p-3 px-3 text-sm md:text-md rounded-md"
//                   />
//                 </div>
//               </div>
//               {showEdit && (
//                 <div className=" mt-8 flex gap-5 justify-center">
//                   <button
//                     type="submit"
//                     className="bg-[#2A546D] w-20 py-3  md:w-32 rounded-lg text-white font-semibold"
//                   >
//                     Save
//                   </button>
//                   <button
//                     type="button"
//                     onClick={handleCancel}
//                     className="bg-white border w-20 py-3 md:w-32 border-[#2A546D] rounded-lg text-[#2A546D] font-semibold"
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

// export default BankAccount;




import React, { useEffect, useState } from "react";
import { FiEdit } from "react-icons/fi";
import { toast } from "react-toastify";
import { bankAccountAPI } from "../../../services/api";

const EMPTY = {
  accountHolderName: "",
  bankName: "",
  accountNumber: "",
  branchName: "",
  city: "",
  ifscCode: "",
};

const getCurrentUser = () => {
  try {
    const raw =
      localStorage.getItem("user") || localStorage.getItem("currentUser");
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
};

const BankAccountDetails = () => {
  const currentUser = getCurrentUser();
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [isConfigured, setIsConfigured] = useState(false);
  const [showEdit, setShowEdit] = useState(false);
  const [formData, setFormData] = useState(EMPTY);
  const [originalData, setOriginalData] = useState(EMPTY);

  /* ---------- load ---------- */
  const loadBankAccount = async () => {
    setLoading(true);
    try {
      const res = await bankAccountAPI.get();
      const d = res.data || {};
      const filled = {
        accountHolderName: d.accountHolderName || currentUser?.name || "",
        bankName: d.bankName || "",
        accountNumber: d.accountNumber || "",
        branchName: d.branchName || "",
        city: d.city || "",
        ifscCode: d.ifscCode || "",
      };
      setFormData(filled);
      setOriginalData(filled);
      setIsConfigured(!!d.isConfigured);
      setShowEdit(!d.isConfigured);
    } catch (err) {
      const detail = err?.response?.data?.detail;
      toast.error(
        typeof detail === "string"
          ? detail
          : "Failed to load bank account details"
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadBankAccount();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  /* ---------- handlers ---------- */
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((p) => ({ ...p, [name]: value }));
  };

  const handleEditClick = () => setShowEdit(true);

  const handleCancel = () => {
    setFormData(originalData);
    setShowEdit(!isConfigured);
  };

  const handleSave = async (e) => {
    e.preventDefault();

    const required = [
      ["accountHolderName", "Account Holder's Name"],
      ["bankName", "Bank Name"],
      ["accountNumber", "Account Number"],
      ["branchName", "Branch Name"],
      ["city", "City"],
      ["ifscCode", "IFSC Code"],
    ];
    for (const [key, label] of required) {
      if (!formData[key]?.trim()) {
        toast.error(`${label} is required`);
        return;
      }
    }
    if (formData.ifscCode.trim().length !== 11) {
      toast.error("IFSC code must be 11 characters (e.g. HDFC0001234)");
      return;
    }

    setSaving(true);
    try {
      await bankAccountAPI.update({
        accountHolderName: formData.accountHolderName.trim(),
        bankName: formData.bankName.trim(),
        accountNumber: formData.accountNumber.trim(),
        branchName: formData.branchName.trim(),
        city: formData.city.trim(),
        ifscCode: formData.ifscCode.trim(),
      });
      setIsConfigured(true);
      setShowEdit(false);
      toast.success("Bank account saved successfully");
      await loadBankAccount();
    } catch (err) {
      const detail = err?.response?.data?.detail;
      const msg = Array.isArray(detail)
        ? detail.map((e) => e.msg).join(" | ")
        : typeof detail === "string"
        ? detail
        : "Failed to save bank account";
      toast.error(msg);
    } finally {
      setSaving(false);
    }
  };

  /* ---------- render ---------- */
  const inputCls =
    "border border-[#E65F2B] outline-none p-2 px-3 rounded-md read-only:bg-gray-50 read-only:text-gray-700 read-only:border-opacity-40";

  if (loading) {
    return (
      <div className="px-4 py-2">
        <h1 className="font-bold text-xl">Employee</h1>
        <p className="font-semibold my-1">
          <span>Dashboard</span> / <span>Bank account details</span>
        </p>
        <div className="bg-white my-5 p-8 text-center text-gray-500">
          Loading bank details...
        </div>
      </div>
    );
  }

  return (
    <div className="px-4 py-2">
      <h1 className="font-bold text-xl">Employee</h1>
      <p className="font-semibold my-1">
        <span>Dashboard</span> / <span>Bank account details</span>
      </p>

      <div className="bg-white my-5">
        <div className="p-4">
          {/* Header */}
          <div className="flex justify-between items-center">
            <h1 className="text-[#E65F2B] font-semibold">
              SALARY ACCOUNT DETAILS
            </h1>
            {isConfigured && !showEdit && (
              <button
                type="button"
                onClick={handleEditClick}
                title="Edit bank details"
                aria-label="Edit bank details"
              >
                <FiEdit className="text-2xl mr-5 text-[#E65F2B]" />
              </button>
            )}
          </div>

          {!isConfigured && (
            <p className="mt-3 text-sm text-gray-600">
              You haven't added your salary bank account yet. Please fill in
              the details below.
            </p>
          )}

          <div className="pl-2 my-4">
            <form onSubmit={handleSave}>
              {/* Account Holder's Name — always rendered, readOnly toggles edit */}
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 my-3">
                <label
                  htmlFor="accountHolderName"
                  className="text-[#E65F2B] whitespace-nowrap"
                >
                  Account Holder's Name :
                </label>
                <input
                  id="accountHolderName"
                  type="text"
                  name="accountHolderName"
                  value={formData.accountHolderName}
                  onChange={handleInputChange}
                  readOnly={!showEdit}
                  autoFocus={showEdit}
                  placeholder={showEdit ? "e.g. Jane Doe" : ""}
                  className={`flex-1 max-w-md rounded-md transition ${
                    showEdit
                      ? "border-2 border-[#E65F2B] bg-orange-50 outline-none p-2 px-3 focus:bg-white focus:ring-2 focus:ring-[#E65F2B]/40"
                      : "border-0 bg-transparent text-base font-medium outline-none cursor-default p-0 px-0"
                  }`}
                />
              </div>

              {/* Other fields */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 mr-5">
                <div className="flex flex-col gap-2">
                  <label className="text-[#E65F2B]">Bank Name</label>
                  <input
                    type="text"
                    name="bankName"
                    onChange={handleInputChange}
                    value={formData.bankName}
                    disabled={!showEdit}
                    placeholder="e.g. HDFC Bank"
                    className={inputCls}
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-[#E65F2B]">Account Number</label>
                  <input
                    type="text"
                    name="accountNumber"
                    onChange={handleInputChange}
                    value={formData.accountNumber}
                    disabled={!showEdit}
                    placeholder="e.g. 50100123456789"
                    className={inputCls}
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-[#E65F2B]">Branch Name</label>
                  <input
                    type="text"
                    name="branchName"
                    onChange={handleInputChange}
                    value={formData.branchName}
                    disabled={!showEdit}
                    placeholder="e.g. Koramangala"
                    className={inputCls}
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-[#E65F2B]">City</label>
                  <input
                    type="text"
                    name="city"
                    onChange={handleInputChange}
                    value={formData.city}
                    disabled={!showEdit}
                    placeholder="e.g. Bengaluru"
                    className={inputCls}
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-[#E65F2B]">IFSC Code</label>
                  <input
                    type="text"
                    name="ifscCode"
                    onChange={handleInputChange}
                    value={formData.ifscCode}
                    disabled={!showEdit}
                    maxLength={11}
                    placeholder="e.g. HDFC0001234"
                    className={inputCls}
                  />
                </div>
              </div>

              {/* Buttons */}
              {showEdit && (
                <div className="mt-8 flex gap-5 justify-center">
                  <button
                    type="submit"
                    disabled={saving}
                    className={`px-12 py-1 rounded-lg text-white font-semibold ${
                      saving
                        ? "bg-gray-400 cursor-not-allowed"
                        : "bg-[#E65F2B] hover:opacity-90"
                    }`}
                  >
                    {saving
                      ? "Saving..."
                      : isConfigured
                      ? "Save Changes"
                      : "Add Bank Account"}
                  </button>
                  {isConfigured && (
                    <button
                      type="button"
                      onClick={handleCancel}
                      disabled={saving}
                      className="bg-white border border-[#E65F2B] px-12 py-1 rounded-lg text-[#E65F2B] font-semibold hover:bg-orange-50"
                    >
                      Cancel
                    </button>
                  )}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BankAccountDetails;