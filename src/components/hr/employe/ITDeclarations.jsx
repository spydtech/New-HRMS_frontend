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
      <div id="main" className="h-auto pb-10">
        <div className="ml-5 mb-4 pt-2">
          <p className="text-[#e65f2b] font-bold text-xl">
            HR Management/Employees/IT Declarations
          </p>
        </div>

        {/* <div className="flex justify-between items-center pt-10 text-white mx-2">
          <div className="bg-[#0098f1] rounded-md text-[16px] w-[220px] h-[130px] flex justify-center items-center flex-col">
            <span>{selectedEmployee ? 1 : 0}</span>
            <span>Employee with Declarations</span>
          </div>
          <div className="bg-[#0098f1] rounded-md text-[16px] w-[220px] h-[130px] flex justify-center items-center flex-col">
            <span>{totalCount}</span>
            <span>Total Declarations</span>
          </div>
          <div className="bg-[#0098f1] rounded-md text-[16px] w-[220px] h-[130px] flex justify-center items-center flex-col">
            <span>{unverifiedCount}</span>
            <span>Unverified Declarations</span>
          </div>
          <div className="bg-[#0098f1] rounded-md text-[16px] w-[220px] h-[130px] flex justify-center items-center flex-col">
            <span>{pendingCount}</span>
            <span>Pending Approval</span>
          </div>
        </div> */}

        <div className="flex justify-between items-center pt-10 text-white mx-2">
          <div
            className="bg-[#0098f1] rounded-md text-[16px] w-[220px] h-[130px] flex justify-center items-center flex-col cursor-pointer"
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
          <div className="flex justify-center items-center h-44">
            <label className="block text-lg font-medium mb-2">
              Employee Name:
            </label>
            <div className="ml-2 w-96">
              <Select
                options={employeeOptions}
                classNamePrefix="select"
                placeholder="Select an employee"
                onChange={handleEmployeeChange}
                className="border-[1px] border-blue-[#0098f1] rounded"
              />
            </div>
            {selectedEmployee && (
              <div className="flex space-x-4">
                <button
                  className="ml-4 px-4 py-2 bg-blue-500 text-white rounded"
                  onClick={() => setIsModalOpen(true)}
                >
                  Add IT Returns
                </button>
                <button
                  className="ml-2 px-4 py-2 bg-gray-500 text-white rounded"
                  onClick={() => setIsRequestModalOpen(true)}
                >
                  Request IT Returns
                </button>
              </div>
            )}
          </div>
        </div>

        <div className="flex">
          <div
            className={`w-72 px-4 text-center cursor-pointer ${
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
            className={`w-72 px-4 text-center cursor-pointer ${
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
                <tr>
                  <th className="py-2 px-4 border-b">Financial Year</th>
                  <th className="py-2 px-4 border-b">Employee Name</th>
                  <th className="py-2 px-4 border-b">Declaration Name</th>
                  <th className="py-2 px-4 border-b">Section</th>
                  <th className="py-2 px-4 border-b">Max Limit</th>
                  <th className="py-2 px-4 border-b">Amount</th>
                  <th className="py-2 px-4 border-b">Verified</th>
                  <th className="py-2 px-4 border-b">Status</th>
                </tr>
              </thead>
              {/* <tbody className="text-center">
                {declarations.map((declaration, index) => (
                  <tr key={index}>
                    <td className="py-2 px-4 border-b">
                      {declaration.financialYear}
                    </td>
                    <td className="py-2 px-4 border-b">
                      {declaration.employeeName}
                    </td>
                    <td className="py-2 px-4 border-b">
                      {declaration.declarationName}
                    </td>
                    <td className="py-2 px-4 border-b">
                      {declaration.section}
                    </td>
                    <td className="py-2 px-4 border-b">
                      {declaration.maxLimit}
                    </td>
                    <td className="py-2 px-4 border-b">{declaration.amount}</td>
                    <td className="py-2 px-4 border-b">
                      {declaration.verified ? "Yes" : "No"}
                    </td>
                    <td className="py-2 px-4 border-b">{declaration.status}</td>
                  </tr>
                ))}
              </tbody> */}

              <tbody>
                {filteredDeclarations.map((declaration, index) => (
                  <tr key={index} className="border text-center">
                    <td className="py-3 px-4 border-b text-black">
                      {declaration.financialYear}
                    </td>
                    <td className="py-3 px-4 border-b text-black">
                      {declaration.employeeName}
                    </td>
                    <td className="py-3 px-4 border-b text-black">
                      {declaration.declarationName}
                    </td>
                    <td className="py-3 px-4 border-b text-black">
                      {declaration.section}
                    </td>
                    <td className="py-3 px-4 border-b text-black">
                      {declaration.maxLimit}
                    </td>
                    <td className="py-3 px-4 border-b text-black">
                      {declaration.amount}
                    </td>
                    <td className="py-3 px-4 border-b text-black">
                      {declaration.verified ? "Yes" : "No"}
                    </td>
                    <td className="py-3 px-4 border-b text-black">
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
                <tr>
                  <th className="py-2 px-4 border-r border-white">Financial Year</th>
                  <th className="py-2 px-4 border-b">Employee Name</th>

                  <th className="py-2 px-4 border-b">Section</th>
                  <th className="py-2 px-4 border-b">Max Limit</th>
                  <th className="py-2 px-4 border-b">Amount</th>
                </tr>
              </thead>
              {/* <tbody className="text-center">
                {declarations.map((declaration, index) => (
                  <tr key={index}>
                    <td className="py-2 px-4 border-b">
                      {declaration.financialYear}
                    </td>
                    <td className="py-2 px-4 border-b">
                      {declaration.employeeName}
                    </td>

                    <td className="py-2 px-4 border-b">
                      {declaration.section}
                    </td>
                    <td className="py-2 px-4 border-b">
                      {declaration.maxLimit}
                    </td>
                    <td className="py-2 px-4 border-b">{declaration.amount}</td>
                  </tr>
                ))}
              </tbody> */}
              <tbody>
                {filteredDeclarations.map((declaration, index) => (
                  <tr key={index} className="border text-center">
                    <td className="py-3 px-4 border-b text-black">
                      {declaration.financialYear}
                    </td>
                    <td className="py-3 px-4 border-b text-black">
                      {declaration.employeeName}
                    </td>
                    <td className="py-3 px-4 border-b text-black">
                      {declaration.section}
                    </td>

                    <td className="py-3 px-4 border-b text-black">
                      {declaration.maxLimit}
                    </td>

                    <td className="py-3 px-4 border-b text-black">
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
            <div className="bg-white w-[600px] h-96 overflow-y-scroll p-6 rounded-md">
              <h2 className="text-xl mb-4">Add IT Declaration</h2>
              <form onSubmit={handleFormSubmit}>
                <div className="mb-4">
                  <label
                    className="block text-sm font-medium mb-1"
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
                    className="block text-sm font-medium mb-1"
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
                    className="block text-sm font-medium mb-1"
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
                    className="block text-sm font-medium mb-1"
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
                    className="block text-sm font-medium mb-1"
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
                    className="block text-sm font-medium mb-1"
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
                  <label className="block text-sm font-medium mb-1">
                    Verified
                  </label>
                  <div className="flex space-x-4">
                    <button
                      type="button"
                      className={`px-4 py-2 rounded ${
                        formData.verified
                          ? "bg-blue-500 text-white"
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
                          ? "bg-blue-500 text-white"
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
                  <label className="block text-sm font-medium mb-2">
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
                    className="px-4 py-2 bg-gray-500 text-white rounded mr-2"
                    onClick={() => setIsModalOpen(false)}
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 bg-blue-500 text-white rounded"
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
            <div className="bg-white w-[600px] p-6 rounded-md">
              <h2 className="text-xl mb-4">Request IT Return</h2>
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
                    className="px-4 py-2 bg-gray-500 text-white rounded mr-2"
                    onClick={() => setIsRequestModalOpen(false)}
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 bg-blue-500 text-white rounded"
                  >
                    Send Request
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default ITDeclarations;
