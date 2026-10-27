import React, { useState } from "react";
import Select from "react-select";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";

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
const statusOptions = [
  { value: "accept", label: "Accept" },
  { value: "reject", label: "Reject" },
  { value: "pending", label: "Pending" },
];

const financialYears = ["2022-2023", "2023-2024", "2024-2025"];
const declarationOptions = [
  { label: "HRA Exemption", section: "10(13A)", maxLimit: "60000" },
  { label: "80C Investments", section: "80C", maxLimit: "150000" },
  { label: "Medical Insurance", section: "80D", maxLimit: "25000" },
];

function ITDeclarations() {
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [view, setView] = useState("detailed");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isRequestModalOpen, setIsRequestModalOpen] = useState(false);
  const [declarations, setDeclarations] = useState([]);
  const [pendingCount, setPendingCount] = useState(0);
  const [unverifiedCount, setUnverifiedCount] = useState(0);
  const [totalCount, setTotalCount] = useState(0);
  const [showSuccess, setShowSuccess] = useState(false);
  const [filter, setFilter] = useState("all");
  const [formData, setFormData] = useState({
    financialYear: "",
    declarationName: "",
    section: "",
    maxLimit: "",
    amount: "",
    verified: false,
    status: "",
  });

  const [requestFormData, setRequestFormData] = useState({
    employee: null,
  });
  const handleStatusChange = (selectedOption) => {
    setFormData({ ...formData, status: selectedOption.value });
  };
  const handleEmployeeChange = (selectedOption) => {
    setSelectedEmployee(selectedOption);
  };

  const handleToggleView = (viewType) => {
    setView(viewType);
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleRequestInputChange = (selectedOption) => {
    setRequestFormData({ employee: selectedOption });
  };

  const handleDeclarationChange = (selectedOption) => {
    const selectedDeclaration = declarationOptions.find(
      (option) => option.label === selectedOption.value
    );
    setFormData({
      ...formData,
      declarationName: selectedOption.value,
      section: selectedDeclaration.section,
      maxLimit: selectedDeclaration.maxLimit,
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const newDeclaration = {
      ...formData,
      employeeName: selectedEmployee.label,
    };

    setDeclarations([...declarations, newDeclaration]);

    // Update counts
    setTotalCount(totalCount + 1);
    if (newDeclaration.status === "pending") {
      setPendingCount(pendingCount + 1);
    }
    if (!newDeclaration.verified) {
      setUnverifiedCount(unverifiedCount + 1);
    }

    setIsModalOpen(false);
    setFormData({
      financialYear: "",
      declarationName: "",
      section: "",
      maxLimit: "",
      amount: "",
      verified: false,
      status: "",
    });
    setShowSuccess(true);
    setTimeout(() => {
      setShowSuccess(false);
    }, 2000);
  };
  const handleRequestSubmit = (e) => {
    e.preventDefault();
    // Handle sending request logic here
    setIsRequestModalOpen(false);
    setRequestFormData({
      employee: null,
    });
  };

  const filterDeclarations = () => {
    switch (filter) {
      case "employee":
        return declarations.filter(
          (declaration) => declaration.employeeName === selectedEmployee?.label
        );
      case "total":
        return declarations;
      case "unverified":
        return declarations.filter((declaration) => !declaration.verified);
      case "pending":
        return declarations.filter(
          (declaration) => declaration.status === "pending"
        );
      default:
        return declarations;
    }
  };

  const filteredDeclarations = filterDeclarations();

  return (
    <>
      <div id="main" className="min-h-screen p-4 mt-4">
        <div className=" mb-4 ">
          <p className="text-[#0098F1] text-sm lg:text-lg font-bold mb-4">
            Hr Management / Employee / IT Declarations
          </p>
        </div>

        <div className="flex  lg:flex-row  flex-col lg:gap-1 gap-y-2 justify-between items-center pt-10 text-white mx-2">
          <div
            className="bg-[#0098f1] text-wrap rounded-md text-[16px] w-[220px] h-[130px] flex justify-center items-center flex-col cursor-pointer"
            onClick={() => setFilter("employee")}
          >
            <span>{selectedEmployee ? 1 : 0}</span>
            <span>Employee with Declarations</span>
          </div>
          <div
            className="bg-[#0098f1] rounded-md text-[16px] w-[220px] h-[130px] flex justify-center items-center flex-col cursor-pointer"
            onClick={() => setFilter("total")}
          >
            <span>{totalCount}</span>
            <span>Total Declarations</span>
          </div>
          <div
            className="bg-[#0098f1] rounded-md text-[16px] w-[220px] h-[130px] flex justify-center items-center flex-col cursor-pointer"
            onClick={() => setFilter("unverified")}
          >
            <span>{unverifiedCount}</span>
            <span>Unverified Declarations</span>
          </div>
          <div
            className="bg-[#0098f1] rounded-md text-[16px] w-[220px] h-[130px] flex justify-center items-center flex-col cursor-pointer"
            onClick={() => setFilter("pending")}
          >
            <span>{pendingCount}</span>
            <span>Pending Approval</span>
          </div>
        </div>

        <div className="mx-3">
          <div className="flex flex-col md:flex-row justify-center items-center h-auto md:h-44">
            <label className="block text-lg font-medium mb-2 md:mb-0">
              Employee Name:
            </label>
            <div className="ml-0 md:ml-2 w-full md:w-96">
              <Select
                options={employeeOptions}
                classNamePrefix="select"
                placeholder="Select an employee"
                onChange={handleEmployeeChange}
                className="border-[1px] border-blue-[#0098f1] rounded"
              />
            </div>
            {selectedEmployee && (
              <div className="mt-4 pl-1 md:mt-0 flex flex-col md:flex-row md:space-x-4">
                <button
                  className="px-4 py-2 bg-[#0098f1] text-white rounded"
                  onClick={() => setIsModalOpen(true)}
                >
                  Add IT Returns
                </button>
                <button
                  className="mt-2 md:mt-0 md:ml-2 px-4 py-2 bg-white border border-[#0098f1] text-[#0098f1] rounded"
                  onClick={() => setIsRequestModalOpen(true)}
                >
                  Request IT Returns
                </button>
              </div>
            )}
          </div>
        </div>

        <div className="flex lg:pt-0 pt-6  sm:flex-row flex-col">
          <div
            className={`lg:w-72 w-60 px-4 text-center cursor-pointer ${
              view === "detailed" ? "font-bold" : ""
            }`}
            onClick={() => handleToggleView("detailed")}
          >
            <span className="mb-10">IT Declarations (Detailed)</span>
            <hr
              className={`border-2 ${
                view === "detailed" ? "border-[#0098f1]" : "border-transparent"
              }`}
            />
          </div>
          <div
            className={`lg:w-72 w-60 px-4 text-center cursor-pointer ${
              view === "sectionwise" ? "font-bold" : ""
            }`}
            onClick={() => handleToggleView("sectionwise")}
          >
            <span className="mb-10">IT Declarations (Section Wise)</span>
            <hr
              className={`border-2 ${
                view === "sectionwise"
                  ? "border-[#0098f1]"
                  : "border-transparent"
              }`}
            />
          </div>
        </div>

        {view === "detailed" && (
          <div className=" mt-5 overflow-x-scroll scrollbar-thin   scrollbar-track-white scrollbar-thumb-[#0098f1] pt-10 mx-4">
            <table className="min-w-full w-screen overflow-x-scroll  text-nowrap">
              <thead>
                <tr className="bg-[#0098f1] text-white border border-[#0098f1]">
                  <th className="py-3 px-4 border-r border-white text-center text-sm font-medium text-nowrap">Financial Year</th>
                  <th className="py-3 px-4 border-r border-white text-center text-sm font-medium text-nowrap">Employee Name</th>
                  <th className="py-3 px-4 border-r border-white text-center text-sm font-medium text-nowrap">Declaration Name</th>
                  <th className="py-3 px-4 border-r border-white text-center text-sm font-medium text-nowrap">Section</th>
                  <th className="py-3 px-4 border-r border-white text-center text-sm font-medium text-nowrap">Max Limit</th>
                  <th className="py-3 px-4 border-r border-white text-center text-sm font-medium text-nowrap">Amount</th>
                  <th className="py-3 px-4 border-r border-white text-center text-sm font-medium text-nowrap">Verified</th>
                  <th className="py-3 px-4 text-center text-sm font-medium text-nowrap">Status</th>
                </tr>
              </thead>

              <tbody>
                {filteredDeclarations.map((declaration, index) => (
                  <tr key={index} className="border text-center bg-white border-[#0098f1]">
                    <td className="py-2 px-4 border-r border-[#0098f1] ">
                      {declaration.financialYear}
                    </td>
                    <td className="py-2 px-4 border-r border-[#0098f1] ">
                      {declaration.employeeName}
                    </td>
                    <td className="py-2 px-4 border-r border-[#0098f1] ">
                      {declaration.declarationName}
                    </td>
                    <td className="py-2 px-4 border-r border-[#0098f1] ">
                      {declaration.section}
                    </td>
                    <td className="py-2 px-4 border-r border-[#0098f1] ">
                      {declaration.maxLimit}
                    </td>
                    <td className="py-2 px-4 border-r border-[#0098f1] ">
                      {declaration.amount}
                    </td>
                    <td className="py-2 px-4 border-r border-[#0098f1] ">
                      {declaration.verified ? "Yes" : "No"}
                    </td>
                    <td className="py-2 px-4  ">
                      {declaration.status}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {view === "sectionwise" && (
          <div className="mt-5 overflow-x-scroll scrollbar-thin   scrollbar-track-white scrollbar-thumb-[#0098f1] pt-10 mx-4">
            <table className="min-w-full  w-screen overflow-x-scroll  text-nowrap">
              <thead>
                <tr className="bg-[#0098f1] text-white border border-[#0098f1] text-center">
                  <th className="py-3 px-4 border-r border-white text-sm font-medium text-nowrap">Financial Year</th>
                  <th className="py-3 px-4 border-r border-white text-sm font-medium text-nowrap">Employee Name</th>

                  <th className="py-3 px-4 border-r border-white text-sm font-medium text-nowrap">Section</th>
                  <th className="py-3 px-4 border-r border-white text-sm font-medium text-nowrap">Max Limit</th>
                  <th className="py-3 px-4 text-sm font-medium text-nowrap">Amount</th>
                </tr>
              </thead>

              <tbody>
                {filteredDeclarations.map((declaration, index) => (
                  <tr key={index} className="border text-center bg-white border-[#0098f1]">
                    <td className="py-2 px-4 border-r border-[#0098f1]">
                      {declaration.financialYear}
                    </td>
                    <td className="py-2 px-4 border-r border-[#0098f1]">
                      {declaration.employeeName}
                    </td>
                    <td className="py-2 px-4 border-r border-[#0098f1]">
                      {declaration.section}
                    </td>

                    <td className="py-2 px-4 border-r border-[#0098f1]">
                      {declaration.maxLimit}
                    </td>

                    <td className="py-2 px-4 ">
                      {declaration.amount}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {isModalOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
            <div className="bg-white w-[300px] lg:w-[600px] h-96 overflow-y-scroll p-6 rounded-md">
              <h2 className="text-xl mb-4 text-[#0098f1]">Add IT Declaration</h2>
              <form onSubmit={handleFormSubmit}>
                <div className="mb-4">
                  <label
                    className="block text-sm text-[#0098F1] font-medium mb-1"
                    htmlFor="employeeName"
                  >
                    Employee Name
                  </label>
                  <input
                    type="text"
                    id="employeeName"
                    name="employeeName"
                    value={selectedEmployee.label}
                    readOnly
                    className="w-full border rounded px-2 py-1 bg-gray-100"
                  />
                </div>
                <div className="mb-4">
                  <label
                    className="block text-sm text-[#0098F1] font-medium mb-1"
                    htmlFor="financialYear"
                  >
                    Financial Year
                  </label>
                  <select
                    id="financialYear"
                    name="financialYear"
                    value={formData.financialYear}
                    onChange={handleInputChange}
                    className="w-full border rounded px-2 py-1"
                  >
                    <option value="">Select Financial Year</option>
                    {financialYears.map((year) => (
                      <option key={year} value={year}>
                        {year}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="mb-4">
                  <label
                    className="block text-sm text-[#0098F1] font-medium mb-1"
                    htmlFor="declarationName"
                  >
                    Declaration Name
                  </label>
                  <select
                    id="declarationName"
                    name="declarationName"
                    value={formData.declarationName}
                    onChange={(e) =>
                      handleDeclarationChange({ value: e.target.value })
                    }
                    className="w-full border rounded px-2 py-1"
                  >
                    <option value="">Select Declaration Name</option>
                    {declarationOptions.map((option) => (
                      <option key={option.label} value={option.label}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="mb-4">
                  <label
                    className="block text-sm text-[#0098F1] font-medium mb-1"
                    htmlFor="section"
                  >
                    Section
                  </label>
                  <input
                    type="text"
                    id="section"
                    name="section"
                    value={formData.section}
                    readOnly
                    className="w-full border rounded px-2 py-1 bg-gray-100"
                  />
                </div>
                <div className="mb-4">
                  <label
                    className="block text-sm text-[#0098F1] font-medium mb-1"
                    htmlFor="maxLimit"
                  >
                    Max Limit
                  </label>
                  <input
                    type="text"
                    id="maxLimit"
                    name="maxLimit"
                    value={formData.maxLimit}
                    readOnly
                    className="w-full border rounded px-2 py-1 bg-gray-100"
                  />
                </div>
                <div className="mb-4">
                  <label
                    className="block text-sm text-[#0098F1] font-medium mb-1"
                    htmlFor="amount"
                  >
                    Amount
                  </label>
                  <input
                    type="text"
                    id="amount"
                    name="amount"
                    value={formData.amount}
                    onChange={handleInputChange}
                    className="w-full border rounded px-2 py-1"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-sm text-[#0098F1] font-medium mb-1">
                    Verified
                  </label>
                  <div className="flex space-x-4">
                    <button
                      type="button"
                      className={`px-4 py-2 rounded ${
                        formData.verified
                          ? "bg-[#0098f1] text-white"
                          : "bg-gray-200"
                      }`}
                      onClick={() =>
                        setFormData({ ...formData, verified: true })
                      }
                    >
                      Yes
                    </button>
                    <button
                      type="button"
                      className={`px-4 py-2 rounded ${
                        !formData.verified
                          ? "bg-[#0098f1] text-white"
                          : "bg-gray-200"
                      }`}
                      onClick={() =>
                        setFormData({ ...formData, verified: false })
                      }
                    >
                      No
                    </button>
                  </div>
                </div>

                <div className="mb-4">
                  <label className="block text-sm text-[#0098F1] font-medium mb-2">
                    Status
                  </label>
                  <Select
                    options={statusOptions}
                    value={statusOptions.find(
                      (option) => option.value === formData.status
                    )}
                    onChange={handleStatusChange}
                    className="border rounded"
                    classNamePrefix="select"
                  />
                </div>
                <div className="flex justify-end">
                  <button
                    type="button"
                    className="px-4 py-2 bg-white border border-[#0098f1] text-[#0098f1] rounded mr-2"
                    onClick={() => setIsModalOpen(false)}
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 bg-[#0098f1] text-white rounded"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {isRequestModalOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
            <div className="bg-white w-[300px] lg:w-[600px] p-6 rounded-md">
              <h2 className="text-xl mb-4 text-[#0098f1]">Request IT Return</h2>
              <form onSubmit={handleRequestSubmit}>
                <div className="mb-4">
                  <label
                    className="block text-sm font-medium mb-1"
                    htmlFor="requestEmployee"
                  >
                    Employee
                  </label>
                  <Select
                    options={employeeOptions}
                    classNamePrefix="select"
                    placeholder="Select an employee"
                    onChange={handleRequestInputChange}
                    className="border-[1px] border-blue-[#0098f1] rounded"
                  />
                </div>
                <div className="flex justify-end">
                  <button
                    type="button"
                    className="px-4 py-2 bg-white border border-[#0098f1] text-[#0098f1] rounded mr-2"
                    onClick={() => setIsRequestModalOpen(false)}
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 bg-[#0098f1] text-white rounded"
                  >
                    Send Request
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
        {showSuccess && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-sky-500 p-8 rounded-lg text-center text-white">
            <h2 className="text-xl mb-4">
              <IoMdCheckmarkCircleOutline className="inline-block text-6xl" />
            </h2>
            <p>
            Batch Added Successfully
            </p>
          </div>
        </div>
      )}
      </div>
    </>
  );
}

export default ITDeclarations;
