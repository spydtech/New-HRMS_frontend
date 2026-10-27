import React, { useEffect, useState } from "react";
import { AiFillPlusCircle } from "react-icons/ai";
import { IoMdInformationCircleOutline } from "react-icons/io";
import { BsCheck2Circle } from "react-icons/bs";

const PayrollBatches = ({ onBatchClick, onBatchesUpdate }) => {
  const [showModal, setShowModal] = useState(false);
  const [batchName, setBatchName] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);
  const [batches, setBatches] = useState([]);

  useEffect(() =>{
    onBatchesUpdate(batches)
  }, [batches]) // call onBatchesUpdate when batches state changes

  const handleSave = () => {
    if (batchName.length === 0) {
      setErrorMessage("Batch Name is required!!");
      return;
    }

    // Get the current date and time
    const now = new Date();
    const formattedDate = now.toLocaleDateString("en-US", {
      month: "short",
      day: "2-digit",
      year: "numeric",
    });
    const formattedTime = now.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    });

    // Add the new batch to the batches array
    const newBatch = {
      id: batches.length + 1,
      name: batchName,
      employees: Math.floor(Math.random() * 100), // Random number for demo purposes
      lastPayrollRun: `${formattedDate} at ${formattedTime}`,
      createdBy: "Sathish Chiluveru",
      status: "Active",
    };

    setBatches([...batches, newBatch]);
    setShowModal(false);
    setBatchName("");
    setErrorMessage("");
    setShowSuccess(true);
    setTimeout(() => {
      setShowSuccess(false);
    }, 2000);
  };

  const handleCancel = () => {
    setShowModal(false);
    setBatchName("");
    setErrorMessage("");
  };

  return (
    <div className="my-5 py-4">
      <div className="flex gap-3">
        <button
          type="button"
          onClick={() => setShowModal(true)}
          className="flex items-center gap-2 bg-[#E65F2B] p-2 px-4 rounded-lg text-white "
        >
          <AiFillPlusCircle className="text-xl" />
          Add Batch
        </button>
        <button type="button" className="flex items-center gap-1">
          <IoMdInformationCircleOutline />
          info
        </button>
      </div>

      <div className="mt-5">
        <table className="min-w-full">
          <thead className="bg-[#E65F2B] text-white">
            <tr>
              <th className="py-2 px-4 border-b border-r border-white">
                Full Time Batch
              </th>
              <th className="py-2 px-4 border-b border-r border-white">
                #Of Employees
              </th>
              <th className="py-2 px-4 border-b border-r border-white">
                Last Payroll Run
              </th>
              <th className="py-2 px-4 border-b border-r border-white">
                Created By
              </th>
              <th className="py-2 px-4 border-b">Status</th>
            </tr>
          </thead>
          <tbody>
            {batches.map((batch) => (
              <tr
                key={batch.id}
                onClick={() => onBatchClick(batch)}
                className=" cursor-pointer"
              >
                <td className="py-2 text-center border-r border-white hover:underline underline-offset-4">
                  {batch.name}
                </td>
                <td className="py-2 text-center border-r border-white">
                  {batch.employees}
                </td>
                <td className="py-2 text-center border-r border-white">
                  {batch.lastPayrollRun}
                </td>
                <td className="py-2 text-center border-r border-white">
                  {batch.createdBy}
                </td>
                <td className="py-2 text-center">{batch.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="my-3 text-[#E65F2B] font-bold">
        Total Records : {batches.length}
      </p>

      {showModal && (
        <div className="fixed inset-0 bg-orange-100 bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-3 rounded-lg shadow-lg w-[600px] flex flex-col">
            <h2 className="text-lg font-bold mb-4">
              Add Batch <hr />
            </h2>
            <div className="flex items-center gap-x-2 self-center">
              <label>
                Batch Name <span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                onChange={(e) => setBatchName(e.target.value)}
                value={batchName}
                className="border p-2 w-96 rounded-lg"
                placeholder="Batch Name"
              />
            </div>
            {errorMessage && (
              <div className="text-red-600 text-sm mt-2 self-center pr-32">
                {errorMessage}
              </div>
            )}
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
                onClick={handleSave}
                className="bg-green-500 text-white p-2 rounded-lg"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
      {showSuccess && (
        <div className="fixed inset-0 bg-orange-100 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-3 rounded-lg shadow-lg w-[400px]">
            <div className="flex flex-col justify-center items-center gap-3">
              <BsCheck2Circle className="text-[#E65F2B] text-5xl" />
              <span className="text-[#E65F2B] text-lg md:text-2xl text-center">
                Batch Added Successfully
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PayrollBatches;
