import React, { useEffect, useState } from "react";

const BatchDetails = ({ batch, onBack, batches }) => {
  const [selectedBatchId, setSelectedBatchId] = useState(batch.id);
  const [employees, setEmployees] = useState([]);
  const [currentEmployees, setCurrentEmployees] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const [name, setName] = useState("");
  const [title, setTitle] = useState("");
  const [workLocation, setWorkLocation] = useState("");
  const [empStatus, setEmpStatus] = useState("");
  const [batchName, setBatchName] = useState(batch.name);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    // Set the initial selected batch id and load employees
    setSelectedBatchId(batch.id);
    setBatchName(batch.name);
    loadEmployees(batch.id);
  }, [batch.id]);

  const loadEmployees = (batchId) => {
    const batchEmployees = employees[batchId] || [];
    setCurrentEmployees(batchEmployees);
  };

  // Handle dropdown change
  const handleBatchChange = (event) => {
    const batchId = Number(event.target.value);
    const newBatch = batches.find((b) => b.id === batchId);
    if (newBatch) {
      setSelectedBatchId(newBatch.id);
      // You might want to update the `batch` state here if needed
      setBatchName(newBatch.name);
      loadEmployees(newBatch.id);
    }
  };

  // Find the currently selected batch
  const currentBatch = batches.find((b) => b.id === selectedBatchId) || batch;

  // Handle adding a new employee
  const handleAddEmployee = () => {
    if (!name || !title || !workLocation || !empStatus || !batchName) {
      setErrorMessage("All fields are required");
      return;
    }

    const newEmployee = {
      id: employees.length + 1,
      name,
      title,
      workLocation,
      status: empStatus,
      batch: batchName,
    };

    const updatedEmployees = {
      ...employees,
      [selectedBatchId]: [...(employees[selectedBatchId] || []), newEmployee],
    };

    setEmployees(updatedEmployees);
    setCurrentEmployees(updatedEmployees[selectedBatchId]);
    setShowModal(false);
    setName("");
    setTitle("");
    setWorkLocation("");
    setEmpStatus("");
    setBatchName(currentBatch.name);
    setErrorMessage("");
  };

  const handleCancel = () => {
    setShowModal(false);
    setName("");
    setTitle("");
    setWorkLocation("");
    setEmpStatus("");
    setBatchName(currentBatch.name);
    setErrorMessage("");
  };

  return (
    <div className="my-4">
      <div className="flex items-center justify-between border-b py-3 border-gray-400">
        <h1 className="text-2xl font-bold">{currentBatch.name} Batch</h1>
        <button onClick={onBack} className=" bg-gray-300 px-4 py-1 rounded">
          Back
        </button>
      </div>
      <div className="my-5 text-center">
        <p className="text-gray-400 ">
          Pay Days <span className="text-gray-900">Actual Days</span>
        </p>
        <p className="text-gray-400">
          Include Weekly Offs <span className="text-gray-900">Yes</span>
        </p>
        <p className="text-gray-400">
          Include Holidays <span className="text-gray-900">Yes</span>
        </p>
      </div>
      <div className="flex items-center justify-between border-b py-3 border-gray-400 my-3">
        <h1 className="font-bold text-xl">Employees</h1>
        <select
          value={selectedBatchId}
          onChange={handleBatchChange}
          className=" outline-none px-2 border"
        >
          {/* <option value="">Select Batch</option> */}
          {batches.map((b) => (
            <option key={b.id} value={b.id}>
              {b.name}
            </option>
          ))}
        </select>
      </div>
      <div className="text-end my-5">
        <button
          className=" px-2 py-1 rounded-lg bg-[#E65F2B] text-white"
          onClick={() => setShowModal(true)}
        >
          Add Employees
        </button>
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-orange-100 bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-3 rounded-lg shadow-lg w-[600px] flex flex-col">
            <h1 className="text-2xl font-bold mb-3 border-b pb-3">
              Add Employee
            </h1>
            <div className="flex flex-col gap-2 ml-5">
              <div className="flex gap-3">
                <label htmlFor="name">Employee Name :</label>
                <input
                  id="name"
                  type="text"
                  className=" border border-gray-500 rounded-md outline-none px-1 text-sm"
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                />
              </div>
              <div className="flex gap-3">
                <label htmlFor="title">Title :</label>
                <input
                  id="title"
                  type="text"
                  className=" border border-gray-500 rounded-md outline-none px-1 text-sm"
                  onChange={(e) => setTitle(e.target.value)}
                  value={title}
                />
              </div>
              <div className="flex gap-3">
                <label htmlFor="work" className="">
                  Work Location :
                </label>
                <input
                  id="work"
                  type="text"
                  className=" border border-gray-500 rounded-md outline-none px-1 text-sm"
                  onChange={(e) => setWorkLocation(e.target.value)}
                  value={workLocation}
                />
              </div>
              <div className="flex gap-3">
                <label htmlFor="emp" className="">
                  Emp Status :
                </label>
                <input
                  id="emp"
                  type="text"
                  className=" border border-gray-500 rounded-md outline-none px-1 text-sm"
                  onChange={(e) => setEmpStatus(e.target.value)}
                  value={empStatus}
                />
              </div>
              <div className="flex gap-3">
                <label htmlFor="batch" className="">
                  Batch :
                </label>
                <input
                  id="batch"
                  type="text"
                  className=" border border-gray-500 rounded-md outline-none px-1 text-sm"
                  onChange={(e) => setBatchName(e.target.value)}
                  value={batchName}
                />
              </div>
              {errorMessage && (
                <p className="text-red-500 text-sm mt-2">{errorMessage}</p>
              )}    
            </div>
            <div className="flex justify-end gap-2 my-3">
              <button
                type="button"
                className="bg-red-500 text-white p-2 rounded-lg"
                onClick={handleCancel}
              >
                Cancel
              </button>
              <button
                type="button"
                className="bg-green-500 text-white p-2 rounded-lg"
                onClick={handleAddEmployee}
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="mt-5">
        <table className="min-w-full">
          <thead className="bg-[#E65F2B] text-white">
            <tr>
              <th className="py-2 px-4 border-b border-r border-white">
                EMPLOYEE NAME
              </th>
              <th className="py-2 px-4 border-b border-r border-white">
                TITLE
              </th>
              <th className="py-2 px-4 border-b border-r border-white">
                WORK LOCATION
              </th>
              <th className="py-2 px-4 border-b border-r border-white">
                EMP STATUS
              </th>
              <th className="py-2 px-4 border-b">BATCH</th>
            </tr>
          </thead>
          <tbody>
            {currentEmployees.map((employee) => (
              <tr key={employee.id} className=" cursor-pointer">
                <td className="py-2 text-center border-r border-white">
                  {employee.name}
                </td>
                <td className="py-2 text-center border-r border-white">
                  {employee.title}
                </td>
                <td className="py-2 text-center border-r border-white">
                  {employee.workLocation}
                </td>
                <td className="py-2 text-center border-r border-white">
                  {employee.status}
                </td>
                <td className="py-2 text-center">{employee.batch}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="my-3 text-[#E65F2B] font-bold">
        Total Records : {currentEmployees.length}
      </p>
    </div>
  );
};

export default BatchDetails;
