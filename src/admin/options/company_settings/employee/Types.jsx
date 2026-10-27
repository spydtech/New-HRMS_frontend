import React, { useState } from "react";
import { BsCheck2Circle } from "react-icons/bs";

function Types() {
  const [employeeTypes, setEmployeeTypes] = useState([
    { type: "Full Time", status: "Active" },
    { type: "Consultant", status: "Active" },
    { type: "Part Time", status: "Active" },
    { type: "Contract", status: "Inactive" },
    { type: "Probation", status: "Active" },
  ]);

  const [showAddModal, setShowAddModal] = useState(false);
  const [newEmployeeType, setNewEmployeeType] = useState("");

  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [employeeToToggleStatus, setEmployeeToToggleStatus] = useState(null);

  const [showEditModal, setShowEditModal] = useState(false);
  const [employeeToEdit, setEmployeeToEdit] = useState(null);
  const [editedEmployeeType, setEditedEmployeeType] = useState("");

  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const adminName = "Mounika Ch"; // You can replace this with dynamic admin name from context or props

  const showTemporarySuccessMessage = (message) => {
    setSuccessMessage(message);
    setShowSuccessMessage(true);
    setTimeout(() => {
      setShowSuccessMessage(false);
    }, 5000);
  };

  const logActivity = (action, details) => {
    const timestamp = new Date().toLocaleString();
    const activity = {
      admin: adminName,
      action,
      details,
      timestamp,
    };

    const storedActivities =
      JSON.parse(localStorage.getItem("activities")) || [];
    storedActivities.push(activity);
    localStorage.setItem("activities", JSON.stringify(storedActivities));
  };

  const handleAddEmployeeType = () => {
    if (newEmployeeType) {
      setEmployeeTypes((prev) => [
        ...prev,
        { type: newEmployeeType, status: "Active" },
      ]);
      logActivity("Added Employee Type", `Added ${newEmployeeType}`);
      setNewEmployeeType("");
      setShowAddModal(false);
      showTemporarySuccessMessage("Employee type added successfully!");
    }
  };

  const toggleEmployeeStatus = (index) => {
    setEmployeeToToggleStatus(index);
    setShowConfirmModal(true);
  };

  const confirmToggleEmployeeStatus = () => {
    const newStatus =
      employeeTypes[employeeToToggleStatus].status === "Active"
        ? "Inactive"
        : "Active";

    setEmployeeTypes((prev) =>
      prev.map((employee, index) =>
        index === employeeToToggleStatus
          ? { ...employee, status: newStatus }
          : employee
      )
    );
    setShowConfirmModal(false);
    logActivity(
      "Toggled Employee Status",
      `Changed ${employeeTypes[employeeToToggleStatus].type} status to ${newStatus}`
    );
    showTemporarySuccessMessage(
      `Employee type status changed to ${newStatus}!`
    );
  };

  const handleEditEmployeeType = (index) => {
    setEmployeeToEdit(index);
    setEditedEmployeeType(employeeTypes[index].type);
    setShowEditModal(true);
  };

  const confirmEditEmployeeType = () => {
    const previousType = employeeTypes[employeeToEdit].type;

    setEmployeeTypes((prev) =>
      prev.map((employee, index) =>
        index === employeeToEdit
          ? { ...employee, type: editedEmployeeType }
          : employee
      )
    );
    setShowEditModal(false);
    logActivity(
      "Edited Employee Type",
      `Changed ${previousType} to ${editedEmployeeType}`
    );
    showTemporarySuccessMessage("Employee type updated successfully!");
  };

  return (
    <div className="lg:ml-20  p-4">
      {showSuccessMessage && (
        <div className="absolute inset-0 bg-gray-600 bg-opacity-50 w-auto h-full flex justify-center items-center ">
          <div className="text-white bg-gradient-to-b from-[#E65F2B] to-[#FFC252]  w-[320px] h-[240px] py-8 px-4 sm:py-10 sm:px-16 rounded-lg  flex flex-col justify-center items-center relative">
            <BsCheck2Circle className="text-6xl text-white  mb-4" />
            {successMessage}
          </div>
        </div>
      )}

      <button
        className="mb-4 md:float-end   px-4 py-2 text-white bg-[#E65F2B]  rounded flex items-center"
        onClick={() => setShowAddModal(true)}
      >
        <span className="text-2xl">+</span>
        <span className="ml-2">Add New</span>
      </button>

      {/* Add Modal */}

      {showAddModal && (
        <div className="fixed text-[#e65f2b] inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white flex-col p-4 rounded shadow-lg max-w-full mx-4">
            <div className="w-full sm:w-[300px] sm:h-[200px]">
              <h2 className="text-xl mb-2">Add Employee Type</h2>
              <div className="pt-4 p-4 sm:pt-10">
                <label className="block mb-2">Employee Type*</label>
                <input
                  required
                  type="text"
                  value={newEmployeeType}
                  onChange={(e) => setNewEmployeeType(e.target.value)}
                  placeholder="Employee Type"
                  className="border rounded-lg border-[#e65f2b] outline-[#e65f2b] w-full sm:w-60 p-2 mb-4"
                />
              </div>
            </div>
            <div className="flex justify-end gap-x-2 sm:gap-x-5 items-center mt-4 sm:mt-0">
              <button
                className="border-[1px] border-[#e65f2b] text-[#e65f2b] px-3 sm:px-4 py-2 rounded"
                onClick={() => setShowAddModal(false)}
              >
                Cancel
              </button>
              <button
                className="bg-[#E65F2B] text-white px-3 sm:px-4 py-2 rounded"
                onClick={handleAddEmployeeType}
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Confirm Toggle Modal */}

      {showConfirmModal && (
        <div className="fixed text-[#e65f2b] inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-4 rounded shadow-lg max-w-full mx-4">
            <div className="w-full sm:w-[600px] sm:h-[200px]">
              <h2 className="text-xl mb-2">Department</h2>
              <h2 className="text-lg pb-4 mb-2 text-wrap">
                Are you sure you want to change the status of{" "}
                {employeeTypes[employeeToToggleStatus]?.type} to{" "}
                {employeeTypes[employeeToToggleStatus]?.status === "Active"
                  ? "Inactive"
                  : "Active"}
                ?
              </h2>
            </div>

            <div className="flex justify-end gap-x-2 sm:gap-x-5 items-center mt-4 sm:mt-0">
              <button
                className="bg-[#E65F2B]  text-white px-3 sm:px-4 py-2 rounded"
                onClick={confirmToggleEmployeeStatus}
              >
                Yes
              </button>
              <button
                className="border-[1px] border-[#e65f2b] text-[#e65f2b] px-3 sm:px-4 py-2 rounded"
                onClick={() => setShowConfirmModal(false)}
              >
                No
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Edit Modal */}

      {showEditModal && (
        <div className="fixed text-[#e65f2b] inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white flex-col p-4 rounded shadow-lg max-w-full mx-4">
            <div className="w-full sm:w-[400px] sm:h-[200px]">
              <h2 className="text-xl mb-2">Edit Employee Type</h2>
              <div className="pt-4 p-4 sm:pt-10">
                <label className="block mb-2">Employee Type*</label>
                <input
                  required
                  type="text"
                  value={editedEmployeeType}
                  onChange={(e) => setEditedEmployeeType(e.target.value)}
                  placeholder="Employee Type"
                  className="border rounded-lg border-[#e65f2b] outline-[#e65f2b] w-full sm:w-60 p-2 mb-4"
                />
              </div>
            </div>
            <div className="flex justify-end gap-x-2 sm:gap-x-5 items-center mt-4 sm:mt-0">
              <button
                className="border-[1px] border-[#e65f2b] text-[#e65f2b] px-3 sm:px-4 py-2 rounded"
                onClick={() => setShowEditModal(false)}
              >
                Cancel
              </button>
              <button
                className="bg-[#E65F2B] text-white px-3 sm:px-4 py-2 rounded"
                onClick={confirmEditEmployeeType}
              >
                Update
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Employee Types Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full text-[#e65f2b]">
          <thead>
            <tr className=" text-center">
              <th className="py-2 px-4 ">Employee Type</th>
              <th className="py-2 px-4 ">Status</th>
              <th className="py-2 px-4 ">Action</th>
            </tr>
          </thead>
          <tbody className="text-center">
            {employeeTypes.map((employee, index) => (
              <tr key={index} className="">
                <td
                  className="py-2 px-4  cursor-pointer "
                  onClick={() => handleEditEmployeeType(index)}
                >
                  {employee.type}
                </td>
                <td className="py-2 px-4 ">{employee.status}</td>
                <td className="py-2 px-4 ">
                  <button
                    className="text-red-500"
                    onClick={() => toggleEmployeeStatus(index)}
                  >
                    {employee.status === "Active"
                      ? "Make Inactive"
                      : "Make Active"}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Types;
