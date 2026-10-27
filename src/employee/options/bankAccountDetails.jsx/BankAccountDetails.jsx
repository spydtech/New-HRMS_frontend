import React, { useRef, useState } from "react";
import { FiEdit } from "react-icons/fi";

const BankAccountDetails = () => {
  const [showEdit, setShowEdit] = useState(false);
  const [formData, setFormData] = useState({
    bankName: "Current Bank Name",
    accountNumber: "Current Account Number",
    branchName: "Current Branch Name",
    city: "Current City",
    ifscCode: "Current IFSC Code",
  });

  const bankNameRef = useRef(null);
  const accountNumberRef = useRef(null);
  const branchNameRef = useRef(null);
  const cityRef = useRef(null);
  const ifscCodeRef = useRef(null);

  const handleEditClick = (ref) => {
    if (showEdit) {
      ref.current.focus();
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSave = (e) => {
    e.preventDefault();
    setShowEdit(false);
    alert("Data Saved Successfully");
  };

  const handleCancel = () => {
    setShowEdit(false);
    setFormData({
      bankName: "Current Bank Name",
      accountNumber: "Current Account Number",
      branchName: "Current Branch Name",
      city: "Current City",
      ifscCode: "Current IFSC Code",
    });
  };

  return (
    <div className="px-4 py-2">
      <h1 className="font-bold text-xl">Employee</h1>
      <p className="font-semibold my-1">
        <span>Dashboard</span> / <span>Bank account details</span>
      </p>

      <div className="bg-white my-5">
        <div className="p-4">
          <div className="flex justify-between">
            <h1 className="text-[#E65F2B] font-semibold">
              SALARY ACCOUNT DETAILS
            </h1>
            <button onClick={() => setShowEdit(!showEdit)}>
              {!showEdit && <FiEdit className="text-2xl mr-5 text-[#E65F2B]" />}
            </button>
          </div>
          <div className="pl-2 my-4">
            <div className="flex gap-6 my-3">
              <p className="text-[#E65F2B]">Account Holder's Name : </p>
              <p>K. Navaneetha</p>
            </div>

            <form onSubmit={handleSave}>
              <div className="grid grid-cols-2 gap-x-8 gap-y-4 mr-5">
                <div className="flex flex-col gap-2">
                  <div className="flex justify-between">
                    <label className="text-[#E65F2B]">Bank Name</label>
                    <button
                      type="button"
                      onClick={() => handleEditClick(bankNameRef)}
                    >
                      {showEdit && (
                        <FiEdit className="text-lg  text-[#E65F2B]" />
                      )}
                    </button>
                  </div>
                  <input
                    type="text"
                    name="bankName"
                    onChange={handleInputChange}
                    value={formData.bankName}
                    disabled={!showEdit}
                    ref={bankNameRef}
                    className="border border-[#E65F2B] outline-none p-2 px-3 text-md rounded-md"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <div className="flex justify-between">
                    <label className="text-[#E65F2B]">Account Number</label>
                    <button
                      type="button"
                      onClick={() => handleEditClick(accountNumberRef)}
                    >
                      {showEdit && (
                        <FiEdit className="text-lg  text-[#E65F2B]" />
                      )}
                    </button>
                  </div>
                  <input
                    type="text"
                    name="accountNumber"
                    onChange={handleInputChange}
                    value={formData.accountNumber}
                    disabled={!showEdit}
                    ref={accountNumberRef}
                    className="border border-[#E65F2B] outline-none p-2 px-3 text-md rounded-md"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <div className="flex justify-between">
                    <label className="text-[#E65F2B]">Branch Name</label>
                    <button
                      type="button"
                      onClick={() => handleEditClick(branchNameRef)}
                    >
                      {showEdit && (
                        <FiEdit className="text-lg  text-[#E65F2B]" />
                      )}
                    </button>
                  </div>
                  <input
                    type="text"
                    name="branchName"
                    onChange={handleInputChange}
                    value={formData.branchName}
                    disabled={!showEdit}
                    ref={branchNameRef}
                    className="border border-[#E65F2B] outline-none p-2 px-3 text-md rounded-md"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <div className="flex justify-between">
                    <label className="text-[#E65F2B]">City</label>
                    <button
                      type="button"
                      onClick={() => handleEditClick(cityRef)}
                    >
                      {showEdit && (
                        <FiEdit className="text-lg  text-[#E65F2B]" />
                      )}
                    </button>
                  </div>
                  <input
                    type="text"
                    name="city"
                    onChange={handleInputChange}
                    value={formData.city}
                    ref={cityRef}
                    disabled={!showEdit}
                    className="border border-[#E65F2B] outline-none p-2 px-3 text-md rounded-md"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <div className="flex justify-between">
                    <label className="text-[#E65F2B]">IFSC Code</label>
                    <button
                      type="button"
                      onClick={() => handleEditClick(ifscCodeRef)}
                    >
                      {showEdit && (
                        <FiEdit className="text-lg  text-[#E65F2B]" />
                      )}
                    </button>
                  </div>
                  <input
                    type="text"
                    name="ifscCode"
                    onChange={handleInputChange}
                    value={formData.ifscCode}
                    ref={ifscCodeRef}
                    disabled={!showEdit}
                    className="border border-[#E65F2B] outline-none p-2 px-3 text-md rounded-md"
                  />
                </div>
              </div>
              {showEdit && (
                <div className=" mt-8 flex gap-5 justify-center">
                  <button
                    type="submit"
                    className="bg-[#E65F2B] px-12 py-1 rounded-lg text-white font-semibold"
                  >
                    Save
                  </button>
                  <button
                    type="button"
                    onClick={handleCancel}
                    className="bg-white border border-[#E65F2B] px-12 py-1 rounded-lg text-[#E65F2B] font-semibold"
                  >
                    Cancel
                  </button>
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
