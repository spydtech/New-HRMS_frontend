import React, { useEffect, useState } from "react";
import { AiFillPlusCircle } from "react-icons/ai";
import { IoMdInformationCircleOutline } from "react-icons/io";
import { BsCheck2Circle } from "react-icons/bs";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";

const PayrollBatches = ({ onBatchClick, onBatchesUpdate }) => {
  const [showModal, setShowModal] = useState(false);
  const [batchName, setBatchName] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);
  const [batches, setBatches] = useState([]);

  useEffect(() => {
    onBatchesUpdate(batches);
  }, [batches]); // call onBatchesUpdate when batches state changes

  const handleSave = () => {
    if (batchName.length === 0) {
      setErrorMessage("Batch Name is requiblue!!");
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
    },2000);
  };

  const handleCancel = () => {
    setShowModal(false);
    setBatchName("");
    setErrorMessage("");
  };

  return (
    <div className="md:my-5 py-4">
      <div className="flex gap-3">
        <button
          type="button"
          onClick={() => setShowModal(true)}
          className="flex items-center md:gap-2 gap-1 bg-[#e65f2b] md:p-2 p-1 md:px-4  rounded-lg text-white "
        >
          <AiFillPlusCircle className="md:text-xl" />
          <span className="max-md:text-xs font-bold">Add Batch</span>
        </button>
        <button
          type="button"
          className="flex items-center md:gap-1 gap-x-[2px]"
        >
          <IoMdInformationCircleOutline className="max-md:text-xs" />
          <span className="max-md:text-xs">info</span>
        </button>
      </div>

      <div className="mt-5 w-full overflow-x-auto scrollbar-thin scrollbar-track-white scrollbar-thumb-[#E65F2B] ">
        <table className="min-w-full text-nowrap max-md:text-xs">
          <thead className="text-white">
            <tr>
              <th className="bg-[#e65f2b] py-3 px-4 border-b border-r border-white">
                Full Time Batch
              </th>
              <th className="bg-[#e65f2b] py-3 px-4 border-b border-r border-white">
                #Of Employees
              </th>
              <th className="bg-[#e65f2b] py-3 px-4 border-b border-r border-white">
                Last Payroll Run
              </th>
              <th className="bg-[#e65f2b] py-3 px-4 border-b border-r border-white">
                Created By
              </th>
              <th className="bg-[#e65f2b] py-3 px-4 border-b">Status</th>
            </tr>
          </thead>
          <tbody>
            {batches.length === 0 ? (
              <tr>
                <td className="py-3 px-4 md:text-center" colSpan="9">
                  No Batches found.
                </td>
              </tr>
            ) : (
              batches.map((batch) => (
                <tr
                  key={batch.id}
                  onClick={() => onBatchClick(batch)}
                  className=" cursor-pointer"
                >
                  <td className="py-3 text-center border-r border-white hover:underline underline-offset-4">
                    {batch.name}
                  </td>
                  <td className="py-3 text-center border-r border-white">
                    {batch.employees}
                  </td>
                  <td className="py-3 text-center border-r border-white">
                    {batch.lastPayrollRun}
                  </td>
                  <td className="py-3 text-center border-r border-white">
                    {batch.createdBy}
                  </td>
                  <td className="py-3 text-center">{batch.status}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
      <p className="my-3 text-[#E65F2B] font-bold max-md:text-xs">
        Total Records : {batches.length}
      </p>

      {showModal && (
        <div className="fixed inset-0 bg-blue-100 bg-opacity-50 flex items-center justify-center">
          <div className="bg-white text-[#E65F2B] p-3 rounded-lg shadow-lg w-56 md:w-[600px] flex flex-col">
            <h2 className="md:text-lg font-bold mb-2 md:mb-4 ">
              Add Batch <hr />
            </h2>
            <div className="flex flex-col gap-y-2 md:flex-row md:items-center md:gap-x-2 md:self-center">
              <label className="max-md:text-sm">
                Batch Name <span className="">*</span>
              </label>
              <input
                type="text"
                onChange={(e) => setBatchName(e.target.value)}
                value={batchName}
                className="border md:p-2 md:w-96 rounded-lg max-md:text-xs p-1 outline-none px-2"
                placeholder="Batch Name"
              />
            </div>
            {errorMessage && (
              <div className="text-[#E65F2B] text-sm mt-2 self-center pr-32">
                {errorMessage}
              </div>
            )}
            <div className="flex justify-end gap-2 my-3">
              <button
                type="button"
                className="bg-white border border-[#E65F2B] text-[#E65F2B] p-2 rounded-lg max-md:text-xs"
                onClick={handleCancel}
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={handleSave}
                className="bg-[#e65f2b] text-white p-2 px-4 rounded-lg max-md:text-xs"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
      {showSuccess && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-[#E65F2B] p-8 rounded-lg text-center text-white">
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
  );
};

export default PayrollBatches;
