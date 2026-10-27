import React, { useState } from "react";
import Select from "react-select";

const employees = [
  "Kate Cross (SDT006)",
  "Jane Smith (SDT007)",
  "Michael Johnson (SDT008)",
  "Emily Davis (SDT009)",
  "Chris Lee (SDT010)",
];

const employeeOptions = employees.map((employee) => ({
  value: employee,
  label: employee,
}));

const initialAllowances = [
  { label: "Basic", amount: 13500.0 },
  { label: "Conveyance Allowance", amount: 1600.0 },
  { label: "Medical Allowance", amount: 1250.0 },
  { label: "Special Allowance", amount: 4073.0 },
];

const initialEarnings = [
  { label: "Gross", amount: 13500.0, unit: "Month" },
  { label: "Basic", amount: 1600.0, unit: "Month" },
  { label: "Variable Pay", amount: 0.0, unit: "Year" },
  { label: "Gratuity", amount: 0.0, unit: "Year" },
  { label: "CTC", amount: 768875.0, unit: "Year" },
  { label: "Appraisal Date", amount: "June 24, 2024" },
  { label: "Effective Pay Period", amount: "June 2024" },
  { label: "Payment Method", amount: "Cash" },
];

const initialDeductions = [
  { label: "Provident Fund", amount: 1800.0 },
  { label: "Professional Tax", amount: 200.0 },
];

const initialYearlyAllowances = [];

const Compensation = () => {
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [editMode, setEditMode] = useState(false);
  const [allowances, setAllowances] = useState(initialAllowances);
  const [earnings, setEarnings] = useState(initialEarnings);
  const [deductions, setDeductions] = useState(initialDeductions);
  const [yearlyAllowances, setYearlyAllowances] = useState(
    initialYearlyAllowances
  );
  const [modifiedDetails, setModifiedDetails] = useState(null);

  const [paymentMethod, setPaymentMethod] = useState("Cash");
  const [newAllowance, setNewAllowance] = useState({ label: "", amount: "" });
  const [newDeduction, setNewDeduction] = useState({ label: "", amount: "" });
  const [newYearlyAllowance, setNewYearlyAllowance] = useState({
    label: "",
    amount: "",
  });

  const [showBankDetailsModal, setShowBankDetailsModal] = useState(false);
  const [bankDetails, setBankDetails] = useState({
    ifsc: "",
    bankName: "",
    branchName: "",
    nameOnAccount: "",
    accountNumber: "",
  });
  const [savedBankDetails, setSavedBankDetails] = useState(null);

  const handleBankDetailsChange = (event) => {
    const { name, value } = event.target;
    setBankDetails({ ...bankDetails, [name]: value });
  };

  const saveBankDetails = () => {
    setSavedBankDetails(bankDetails); // Save the current bank details
    setShowBankDetailsModal(false);
    clearBankDetails();
  };

  const cancelBankDetails = () => {
    setShowBankDetailsModal(false);
    clearBankDetails();
  };

  const clearBankDetails = () => {
    setBankDetails({
      ifsc: "",
      bankName: "",
      branchName: "",
      nameOnAccount: "",
      accountNumber: "",
    });
  };

  const totalAllowances = allowances.reduce(
    (total, allowance) => total + allowance.amount,
    0
  );

  const totalDeductions = deductions.reduce(
    (total, deduction) => total + deduction.amount,
    0
  );

  const totalYearlyAllowances = yearlyAllowances.reduce(
    (total, yearlyAllowance) => total + yearlyAllowance.amount,
    0
  );

  const handleCancelEdit = () => {
    setEditMode(false);
    setAllowances(initialAllowances);
    setEarnings(initialEarnings);
    setDeductions(initialDeductions);
    setYearlyAllowances(initialYearlyAllowances);
    setPaymentMethod("Cash");
  };

  const handleEmployeeChange = (selectedOption) => {
    setSelectedEmployee(selectedOption);
  };

  const handleInputChange = (index, event, type) => {
    const value =
      type === "amount" ? parseFloat(event.target.value) : event.target.value;
    if (isNaN(value) && type === "amount") return; // Prevent non-numeric values for amounts
    if (type === "amount") {
      if (index < allowances.length) {
        const updatedAllowances = [...allowances];
        updatedAllowances[index].amount = value;
        setAllowances(updatedAllowances);
      } else if (index < allowances.length + earnings.length) {
        const earningIndex = index - allowances.length;
        const updatedEarnings = [...earnings];
        updatedEarnings[earningIndex].amount = value;
        setEarnings(updatedEarnings);
      } else if (
        index <
        allowances.length + earnings.length + deductions.length
      ) {
        const deductionIndex = index - allowances.length - earnings.length;
        const updatedDeductions = [...deductions];
        updatedDeductions[deductionIndex].amount = value;
        setDeductions(updatedDeductions);
      } else {
        const yearlyAllowanceIndex =
          index - allowances.length - earnings.length - deductions.length;
        const updatedYearlyAllowances = [...yearlyAllowances];
        updatedYearlyAllowances[yearlyAllowanceIndex].amount = value;
        setYearlyAllowances(updatedYearlyAllowances);
      }
    } else {
      const updatedEarnings = [...earnings];
      updatedEarnings[index - allowances.length].amount = value;
      setEarnings(updatedEarnings);
    }
  };
  const handleEditToggle = () => {
    if (editMode) {
      const currentDate = new Date();
      const formattedDate = currentDate.toLocaleString("en-US", {
        year: "numeric",
        month: "short",
        day: "2-digit",
        hour: "numeric",
        minute: "numeric",
        hour12: true,
      });

      setModifiedDetails({
        date: formattedDate,
        user: "Admin Name", // Admin name
      });
    }
    setEditMode(!editMode);
  };
  const handlePaymentMethodChange = (event) => {
    setPaymentMethod(event.target.value);
  };

  const handleNewAllowanceChange = (event) => {
    const { name, value } = event.target;
    setNewAllowance({ ...newAllowance, [name]: value });
  };

  const handleNewDeductionChange = (event) => {
    const { name, value } = event.target;
    setNewDeduction({ ...newDeduction, [name]: value });
  };

  const handleNewYearlyAllowanceChange = (event) => {
    const { name, value } = event.target;
    setNewYearlyAllowance({ ...newYearlyAllowance, [name]: value });
  };

  const addNewAllowance = () => {
    if (newAllowance.label && newAllowance.amount) {
      setAllowances([
        ...allowances,
        { label: newAllowance.label, amount: parseFloat(newAllowance.amount) },
      ]);
      setNewAllowance({ label: "", amount: "" });
    }
  };

  const addNewDeduction = () => {
    if (newDeduction.label && newDeduction.amount) {
      setDeductions([
        ...deductions,
        { label: newDeduction.label, amount: parseFloat(newDeduction.amount) },
      ]);
      setNewDeduction({ label: "", amount: "" });
    }
  };

  const addNewYearlyAllowance = () => {
    if (newYearlyAllowance.label && newYearlyAllowance.amount) {
      setYearlyAllowances([
        ...yearlyAllowances,
        {
          label: newYearlyAllowance.label,
          amount: parseFloat(newYearlyAllowance.amount),
        },
      ]);
      setNewYearlyAllowance({ label: "", amount: "" });
    }
  };

  return (
    <>
      <div id="main" className="min-h-screen p-4 mt-4 ">
        <div className=" mb-4 ">
          <p className="text-[#0098F1] lg:text-lg text-sm font-bold mb-4">
            Hr Management / Employee / Compensation
          </p>
        </div>

        <div className="mx-3">
          <div className="flex flex-col md:flex-row justify-center items-center h-auto md:h-44 space-y-4 md:space-y-0">
            <label className="block text-lg font-medium mb-2 md:mb-0">
              Employee Name:
            </label>
            <div className="ml-0 md:ml-2 w-full md:w-96">
              <Select
                options={employeeOptions}
                classNamePrefix="select"
                placeholder="Select an employee"
                onChange={handleEmployeeChange}
                className="border-[1px] border-blue-[#0098f1] rounded w-full"
              />
            </div>
            {selectedEmployee && (
              <div className="flex ml-2  space-x-2 mt-4 md:mt-0">
                <button
                  className="px-4 py-2 bg-[#0098f1] text-white rounded"
                  onClick={handleEditToggle}
                >
                  {editMode ? "Save" : "Edit"}
                </button>
                {editMode && (
                  <button
                    className="px-4 py-2 bg-white border border-[#0098f1] text-[#0098f1] rounded"
                    onClick={handleCancelEdit}
                  >
                    Cancel
                  </button>
                )}
              </div>
            )}
          </div>
        </div>

        {/*  */}
        {selectedEmployee && (
          <div
            id="submain"
            className="grid lg:grid-cols-2 grid-cols-1 gap-0 lg:gap-4"
          >
            <div id="compensation" className="lg:mx-2 mx-0 px-1 lg:px-10">
              <span className="px-2 lg:text-lg text-sm font-medium">
                Compensation Information
              </span>
              <hr className="border mt-3 border-[#0098f1]" />
              <div id="earnings" className="h-auto">
                <div id="submain" className="text-gray-700">
                  {earnings.map((earning, index) => (
                    <div
                      key={index}
                      className="text-sm lg:text-[16px] pt-2 justify-between flex items-center pr-4"
                    >
                      <span>{earning.label}</span>
                      {editMode ? (
                        <input
                          type="text"
                          value={earning.amount}
                          onChange={(e) =>
                            handleInputChange(
                              index + allowances.length,
                              e,
                              "amount"
                            )
                          }
                          className="border  w-20 lg:w-auto rounded px-2 py-1"
                        />
                      ) : (
                        <span>
                          {typeof earning.amount === "number"
                            ? `₹ ${earning.amount.toLocaleString()} ${
                                earning.unit ? `/ ${earning.unit}` : ""
                              }`
                            : earning.amount}
                        </span>
                      )}
                    </div>
                  ))}
                  {editMode && (
                    <div className="pt-2">
                      <label className="block font-medium">
                        Payment Method:
                      </label>
                      <div className="flex items-center">
                        <input
                          type="radio"
                          value="Cash"
                          checked={paymentMethod === "Cash"}
                          onChange={handlePaymentMethodChange}
                        />
                        <label className="ml-2">Cash</label>
                        <input
                          type="radio"
                          value="Bank Deposit"
                          checked={paymentMethod === "Bank Deposit"}
                          onChange={handlePaymentMethodChange}
                          className="ml-4"
                        />
                        <label className="ml-2">Bank Deposit</label>
                        {paymentMethod === "Bank Deposit" && (
                          <span
                            onClick={() => setShowBankDetailsModal(true)}
                            className="ml-4 flex-nowrap text-blue-500 cursor-pointer"
                          >
                            Add Bank Details
                          </span>
                        )}
                      </div>
                      {savedBankDetails && (
                        <div className="mt-4  text-sm p-4  w-[400px]  rounded">
                          <h3 className=" font-medium mb-2">
                            Saved Bank Details
                          </h3>
                          <p className="flex ">
                            <p className="">IFSC:</p> {savedBankDetails.ifsc}
                          </p>
                          <p className="flex">
                            <p>Bank Name:</p> {savedBankDetails.bankName}
                          </p>
                          <p className="flex">
                            <p>Branch Name:</p> {savedBankDetails.branchName}
                          </p>
                          <p className="flex">
                            <p>Name on Account:</p>{" "}
                            {savedBankDetails.nameOnAccount}
                          </p>
                          <p className="flex">
                            <p>Account Number:</p>{" "}
                            {savedBankDetails.accountNumber}
                          </p>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </div>

            <div
              id="allowances"
              className="lg:mx-2 lg:pt-0 pt-4 mx-0 px-1 lg:px-10"
            >
              <div className="flex justify-between items-center">
                <span className="px-2 font-medium  text-sm lg:text-lg">
                  Allowances
                </span>
                <span className="px-2 font-medium text-sm lg:text-lg">
                  ₹ {totalAllowances.toLocaleString()}/Month
                </span>
              </div>
              <hr className="border mt-3 border-[#0098f1]" />
              <div id="submain" className="text-gray-700">
                {allowances.map((allowance, index) => (
                  <div
                    key={index}
                    className="text-sm lg:text-[16px] pt-2 justify-between flex items-center pr-4"
                  >
                    <span className="uppercase">{allowance.label}</span>
                    {editMode ? (
                      <input
                        type="text"
                        value={allowance.amount}
                        onChange={(e) => handleInputChange(index, e, "amount")}
                        className="border  w-20 lg:w-auto rounded px-2 py-1"
                      />
                    ) : (
                      <span>₹ {allowance.amount.toFixed(2)}</span>
                    )}
                  </div>
                ))}
                {editMode && (
                  <div className="mt-4">
                    <span
                      className="text-blue-500 cursor-pointer"
                      onClick={addNewAllowance}
                    >
                      Add New Allowance
                    </span>
                    <div className="mt-2">
                      <input
                        type="text"
                        name="label"
                        placeholder="Allowance Name"
                        value={newAllowance.label}
                        onChange={handleNewAllowanceChange}
                        className="border rounded px-2 py-1 mr-2"
                      />
                      <input
                        type="text"
                        name="amount"
                        placeholder="Allowance Value"
                        value={newAllowance.amount}
                        onChange={handleNewAllowanceChange}
                        className="border rounded px-2 py-1"
                      />
                    </div>
                  </div>
                )}
              </div>
            </div>

            <div
              id="deductions"
              className="lg:mx-2 lg:pt-0 pt-4 mx-0 px-1 lg:px-10"
            >
              <div className="flex justify-between items-center">
                <span className="px-2 font-medium text-sm lg:text-lg">
                  Deductions
                </span>
                <span className="px-2 font-medium text-sm lg:text-lg">
                  ₹ {totalDeductions.toLocaleString()}/Month
                </span>
              </div>
              <hr className="border mt-3 border-[#0098f1]" />
              <div id="submain" className="text-gray-700">
                {deductions.map((deduction, index) => (
                  <div
                    key={index}
                    className=" text:sm lg:text-[16px] pt-2 justify-between flex items-center pr-4"
                  >
                    <span className="uppercase">{deduction.label}</span>
                    {editMode ? (
                      <input
                        type="text"
                        value={deduction.amount}
                        onChange={(e) =>
                          handleInputChange(
                            index + allowances.length + earnings.length,
                            e,
                            "amount"
                          )
                        }
                        className="border  w-20 lg:w-auto rounded px-2 py-1"
                      />
                    ) : (
                      <span>₹ {deduction.amount.toFixed(2)}</span>
                    )}
                  </div>
                ))}
                {editMode && (
                  <div className="mt-4">
                    <span
                      className="text-blue-500 cursor-pointer"
                      onClick={addNewDeduction}
                    >
                      Add New Deduction
                    </span>
                    <div className="mt-2">
                      <input
                        type="text"
                        name="label"
                        placeholder="Deduction Name"
                        value={newDeduction.label}
                        onChange={handleNewDeductionChange}
                        className="border rounded px-2 py-1 mr-2"
                      />
                      <input
                        type="text"
                        name="amount"
                        placeholder="Deduction Value"
                        value={newDeduction.amount}
                        onChange={handleNewDeductionChange}
                        className="border rounded px-2 py-1"
                      />
                    </div>
                  </div>
                )}
              </div>
            </div>

            <div
              id="yearlyAllowances"
              className="lg:mx-2 lg:pt-0 pt-4 mx-0 px-1 lg:px-10"
            >
              <div className="flex justify-between items-center">
                <span className="px-2 font-medium text-sm lg:text-lg">
                  Yearly Allowances
                </span>
                <span className="px-2 font-medium text-sm lg:text-l">
                  ₹ {totalYearlyAllowances.toLocaleString()}/Year
                </span>
              </div>
              <hr className="border mt-3 border-[#0098f1]" />
              <div id="submain" className="text-gray-700">
                {yearlyAllowances.map((yearlyAllowance, index) => (
                  <div
                    key={index}
                    className="text-sm lg:text-[16px] pt-2 justify-between flex items-center pr-4"
                  >
                    <span className="uppercase">{yearlyAllowance.label}</span>
                    {editMode ? (
                      <input
                        type="text"
                        value={yearlyAllowance.amount}
                        onChange={(e) =>
                          handleInputChange(
                            index +
                              allowances.length +
                              earnings.length +
                              deductions.length,
                            e,
                            "amount"
                          )
                        }
                        className="border rounded px-2 py-1"
                      />
                    ) : (
                      <span>₹ {yearlyAllowance.amount.toFixed(2)}</span>
                    )}
                  </div>
                ))}
                {editMode && (
                  <div className="mt-4">
                    <span
                      className="text-blue-500 cursor-pointer"
                      onClick={addNewYearlyAllowance}
                    >
                      Add New Yearly Allowance
                    </span>
                    <div className="mt-2">
                      <input
                        type="text"
                        name="label"
                        placeholder="Yearly Allowance Name"
                        value={newYearlyAllowance.label}
                        onChange={handleNewYearlyAllowanceChange}
                        className="border  rounded px-2 py-1 mr-2"
                      />
                      <input
                        type="text"
                        name="amount"
                        placeholder="Yearly Allowance Value"
                        value={newYearlyAllowance.amount}
                        onChange={handleNewYearlyAllowanceChange}
                        className="border rounded px-2 py-1"
                      />
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
        {modifiedDetails && (
          <div className="mt-4 lg:mx-10 pt-10 text-sm">
            Modified On: {modifiedDetails.date} by {modifiedDetails.user}
          </div>
        )}
        {showBankDetailsModal && (
          <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-50">
            <div className="bg-white w-[300px] lg:w-[500px] h-auto p-4 rounded shadow-lg">
              <h2 className="text-lg font-bold mb-2">Bank Details</h2>
              <div className="mb-2">
                <label className="block text-sm font-medium mb-1">IFSC</label>
                <input
                  type="text"
                  name="ifsc"
                  value={bankDetails.ifsc}
                  onChange={handleBankDetailsChange}
                  className="border border-gray-300 rounded w-full py-1 px-2"
                />
              </div>
              <div className="mb-2">
                <label className="block text-sm font-medium mb-1">
                  Bank Name
                </label>
                <input
                  type="text"
                  name="bankName"
                  value={bankDetails.bankName}
                  onChange={handleBankDetailsChange}
                  className="border border-gray-300 rounded w-full py-1 px-2"
                />
              </div>
              <div className="mb-2">
                <label className="block text-sm font-medium mb-1">
                  Branch Name
                </label>
                <input
                  type="text"
                  name="branchName"
                  value={bankDetails.branchName}
                  onChange={handleBankDetailsChange}
                  className="border border-gray-300 rounded w-full py-1 px-2"
                />
              </div>
              <div className="mb-2">
                <label className="block text-sm font-medium mb-1">
                  Name on Account
                </label>
                <input
                  type="text"
                  name="nameOnAccount"
                  value={bankDetails.nameOnAccount}
                  onChange={handleBankDetailsChange}
                  className="border border-gray-300 rounded w-full py-1 px-2"
                />
              </div>
              <div className="mb-2">
                <label className="block text-sm font-medium mb-1">
                  Account Number
                </label>
                <input
                  type="text"
                  name="accountNumber"
                  value={bankDetails.accountNumber}
                  onChange={handleBankDetailsChange}
                  className="border border-gray-300 rounded w-full py-1 px-2"
                />
              </div>
              <div className="flex justify-end">
                <button
                  className="px-4 py-2 bg-blue-500 text-white rounded"
                  onClick={saveBankDetails}
                >
                  Save
                </button>
                <button
                  className="px-4 py-2 ml-2 bg-gray-500 text-white rounded"
                  onClick={cancelBankDetails}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Compensation;
