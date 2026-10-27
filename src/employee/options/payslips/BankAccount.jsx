import React, { useRef, useState } from "react";
import { FiEdit } from "react-icons/fi";

const BankAccount = () => {
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
    <div className="p-4 mt-4 min-h-screen">
      <div className="  flex flex-col md:flex-row justify-between">
        <div>
          <span className=" text-[#2A546D] text-sm lg:text-lg font-medium">
            Employee / Payroll / BankAccount
          </span>
        </div>
      </div>

      <div className="bg-white my-5">
        <div className="p-2 md:p-4">
          <div className="flex justify-between items-center">
            <h1 className="text-[#2A546D] font-semibold text-sm md:text-xl">
              SALARY ACCOUNT DETAILS
            </h1>
            <button
              className="md:text-2xl"
              onClick={() => setShowEdit(!showEdit)}
            >
              {!showEdit && <FiEdit className=" md:mr-5 text-[#2A546D]" />}
            </button>
          </div>
          <div className="md:pl-2 my-4">
            <div className="flex flex-col gap-y-1 md:flex-row md:gap-6 my-3">
              <p className="text-[#2A546D] text-lg">Account Holder's Name : </p>
              <p className="text-black  text-lg">Employee Name</p>
            </div>

            <form onSubmit={handleSave}>
              <div className="grid md:grid-cols-2 md:gap-x-8 gap-y-4 md:mr-5">
                <div className="flex flex-col gap-1 md:gap-2">
                  <div className="flex justify-between">
                    <label className="text-[#2A546D]">Bank Name</label>
                    <button
                      type="button"
                      onClick={() => handleEditClick(bankNameRef)}
                    >
                      {showEdit && (
                        <FiEdit className="md:text-lg  text-[#2A546D]" />
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
                    className="border border-[#2A546D]  outline-none p-1 md:p-3 px-3 text-sm md:text-md rounded-md"
                  />
                </div>
                <div className="flex flex-col gap-1 md:gap-2">
                  <div className="flex justify-between">
                    <label className="text-[#2A546D]">Account Number</label>
                    <button
                      type="button"
                      onClick={() => handleEditClick(accountNumberRef)}
                    >
                      {showEdit && (
                        <FiEdit className="md:text-lg  text-[#2A546D]" />
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
                    className="border border-[#2A546D] outline-none p-1 md:p-3 px-3 text-sm md:text-md rounded-md"
                  />
                </div>
                <div className="flex flex-col gap-1 md:gap-2">
                  <div className="flex justify-between">
                    <label className="text-[#2A546D]">Branch Name</label>
                    <button
                      type="button"
                      onClick={() => handleEditClick(branchNameRef)}
                    >
                      {showEdit && (
                        <FiEdit className="md:text-lg  text-[#2A546D]" />
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
                    className="border border-[#2A546D] outline-none p-1 md:p-3 px-3 text-sm md:text-md rounded-md"
                  />
                </div>
                <div className="flex flex-col gap-1 md:gap-2">
                  <div className="flex justify-between">
                    <label className="text-[#2A546D]">City</label>
                    <button
                      type="button"
                      onClick={() => handleEditClick(cityRef)}
                    >
                      {showEdit && (
                        <FiEdit className="md:text-lg  text-[#2A546D]" />
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
                    className="border border-[#2A546D] outline-none p-1 md:p-3 px-3 text-sm md:text-md rounded-md"
                  />
                </div>
                <div className="flex flex-col gap-1 md:gap-2">
                  <div className="flex justify-between">
                    <label className="text-[#2A546D]">IFSC Code</label>
                    <button
                      type="button"
                      onClick={() => handleEditClick(ifscCodeRef)}
                    >
                      {showEdit && (
                        <FiEdit className="md:text-lg  text-[#2A546D]" />
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
                    className="border border-[#2A546D] outline-none p-1 md:p-3 px-3 text-sm md:text-md rounded-md"
                  />
                </div>
              </div>
              {showEdit && (
                <div className=" mt-8 flex gap-5 justify-center">
                  <button
                    type="submit"
                    className="bg-[#2A546D] w-20 py-3  md:w-32 rounded-lg text-white font-semibold"
                  >
                    Save
                  </button>
                  <button
                    type="button"
                    onClick={handleCancel}
                    className="bg-white border w-20 py-3 md:w-32 border-[#2A546D] rounded-lg text-[#2A546D] font-semibold"
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

export default BankAccount;
