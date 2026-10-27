import React, { useState, useEffect } from "react";
import { FiPlusCircle, FiEdit, FiTrash2 } from "react-icons/fi";
import { BsCheck2Circle } from "react-icons/bs";
import uncheckbox from "../../../../assets/hr/employee/checkbox/uncheck.png";
import checkbox from "../../../../assets/hr/employee/checkbox/checkbox.png";
import image1 from "../../../../assets/hr/profile/man.png";

const initialLeaveData = [
  {
    id: 1,
    dp: image1,
    name: "John Doe",
    email: "john@example.com",
    phone: "123-456-7890",
    employeeId: "EMP001",
    joiningDate: "2023-01-01",
    role: "Developer",
    leaveType: "Sick Leave",
    fromDate: "2023-05-15",
    toDate: "2023-05-17",
    reason: "Fever",
  },
  {
    id: 2,
    dp: image1,
    name: "Jane Smith",
    email: "jane@example.com",
    phone: "098-765-4321",
    employeeId: "EMP002",
    joiningDate: "2023-02-01",
    role: "Designer",
    leaveType: "Casual Leave",
    fromDate: "2023-07-20",
    toDate: "2023-07-25",
    reason: "Travel",
  },
  // Add more sample data as needed
];

function LeaveRequest() {
  const [isChecked, setIsChecked] = useState({});
  const [headerChecked, setHeaderChecked] = useState(false);
  const [leaves, setLeaves] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newLeave, setNewLeave] = useState({
    name: "",
    employeeId: "",
    fromDate: "",
    toDate: "",
    category: "",
    message: "",
  });

  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [showDeleteSuccessMessage, setShowDeleteSuccessMessage] =
    useState(false);
  const [editLeaveId, setEditLeaveId] = useState(null);

  useEffect(() => {
    const storedLeaveData = JSON.parse(localStorage.getItem("leaves"));
    if (storedLeaveData) {
      setLeaves(storedLeaveData);
    } else {
      setLeaves(initialLeaveData);
    }
  }, []);

  const saveLeaveDataToLocalStorage = (data) => {
    localStorage.setItem("leaves", JSON.stringify(data));
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setEditLeaveId(null);
    setNewLeave({
      name: "",
      employeeId: "",
      fromDate: "",
      toDate: "",
      category: "",
      message: "",
    });
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewLeave({
      ...newLeave,
      [name]: value,
    });
  };

  const handleAddLeave = () => {
    if (editLeaveId !== null) {
      const updatedLeaves = leaves.map((leave) => {
        if (leave.id === editLeaveId) {
          return {
            ...leave,
            name: newLeave.name,
            employeeId: newLeave.employeeId,
            leaveType: newLeave.category,
            fromDate: newLeave.fromDate,
            toDate: newLeave.toDate,
            reason: newLeave.message,
          };
        }
        return leave;
      });
      setLeaves(updatedLeaves);
      saveLeaveDataToLocalStorage(updatedLeaves);
      setShowSuccessMessage(true);
    } else {
      const newLeaveObject = {
        id:
          leaves.length > 0
            ? Math.max(...leaves.map((leave) => leave.id)) + 1
            : 1,
        dp: image1, // Default placeholder image
        name: newLeave.name,
        employeeId: newLeave.employeeId,
        leaveType: newLeave.category,
        fromDate: newLeave.fromDate,
        toDate: newLeave.toDate,
        reason: newLeave.message,
      };
      setLeaves([...leaves, newLeaveObject]);
      saveLeaveDataToLocalStorage([...leaves, newLeaveObject]);
      setShowSuccessMessage(true);
    }

    setTimeout(() => {
      setShowSuccessMessage(false);
    }, 3000);

    closeModal();
  };

  const openEditModal = (leaveId) => {
    const leaveToEdit = leaves.find((leave) => leave.id === leaveId);
    setEditLeaveId(leaveId);
    setNewLeave({
      name: leaveToEdit.name,
      employeeId: leaveToEdit.employeeId,
      fromDate: leaveToEdit.fromDate,
      toDate: leaveToEdit.toDate,
      category: leaveToEdit.leaveType,
      message: leaveToEdit.reason,
    });
    setIsModalOpen(true);
  };

  const handleDeleteLeave = (leaveId) => {
    const updatedLeaves = leaves.filter((leave) => leave.id !== leaveId);
    setLeaves(updatedLeaves);
    saveLeaveDataToLocalStorage(updatedLeaves);
    setShowDeleteSuccessMessage(true);

    // Reset header checkbox state if all leaves are unchecked
    if (Object.keys(isChecked).length === 1) {
      setHeaderChecked(false);
    }

    setTimeout(() => {
      setShowDeleteSuccessMessage(false);
    }, 3000);
  };

  const handleCheckboxChange = (id) => {
    setIsChecked((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };

  const handleHeaderCheckboxChange = () => {
    const newCheckedState = !headerChecked;
    setHeaderChecked(newCheckedState);

    const newIsChecked = {};
    leaves.forEach((leave) => {
      newIsChecked[leave.id] = newCheckedState;
    });
    setIsChecked(newIsChecked);
  };

  return (
    <>
      <div id="main" className="mr-2">
        <div className="ml-5 mb-4">
          <p className="text-[#0098F1] text-xl font-bold mb-4">
          HR Management / Employees / Leave Requests
          </p>
        </div>

        <div className="flex justify-end mb-4">
          <div
            id="addleave"
            className="w-auto inline-block h-[48px] rounded-lg justify-end items-center bg-[#0098f1]"
          >
            <button
              type="button"
              className="flex justify-center items-center w-[186px] h-[48px] text-white"
              onClick={() => setIsModalOpen(true)}
            >
              <FiPlusCircle className="text-2xl font-bold mr-2 bg-[#0098f1]" />{" "}
              Add Leave
            </button>
          </div>
        </div>
        <div id="table" className="overflow-x-scroll">
          <table className="min-w-full w-screen overflow-x-scroll text-nowrap">
            <thead>
              <tr>
                <th className="py-2 px-4 border-b bg-transparent text-center">
                  <img
                    src={headerChecked ? checkbox : uncheckbox}
                    alt="Header Checkbox"
                    onClick={handleHeaderCheckboxChange}
                    className="bg-transparent cursor-pointer"
                  />
                </th>
                <th className="py-4 px-8 border-b bg-transparent"></th>
                <th className="py-4 px-8 border-b bg-[#0098f1]  text-center">
                  Name
                </th>
                <th className="py-4 px-8 border-b bg-[#0098f1]  text-center">
                  Employee ID
                </th>
                <th className="py-4 px-8 border-b bg-[#0098f1]  text-center">
                  Leave Type
                </th>
                <th className="py-4 px-8 border-b bg-[#0098f1]  text-center">
                  Date
                </th>
                <th className="py-4 px-8 border-b bg-[#0098f1]  text-center">
                  Reason
                </th>
                <th className="py-4 px-8 border-b bg-[#0098f1]  text-center">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {leaves.map((leave) => (
                <tr key={leave.id}>
                  <td className="py-2 px-4 border-b text-center bg-transparent">
                    <img
                      src={isChecked[leave.id] ? checkbox : uncheckbox}
                      alt="Checkbox"
                      onClick={() => handleCheckboxChange(leave.id)}
                      className="cursor-pointer"
                    />
                  </td>
                  <td className="py-2 px-4 border-b bg-transparent text-center">
                    <img
                      src={leave.dp}
                      alt="DP"
                      className="w-10 h-10 rounded-full"
                    />
                  </td>
                  <td className="py-2 px-4 bg-transparent border-b text-center">
                    {leave.name}
                  </td>
                  <td className="py-2 px-4 bg-transparent border-b text-center">
                    {leave.employeeId}
                  </td>
                  <td className="py-2 px-4 bg-transparent border-b text-center">
                    {leave.leaveType}
                  </td>
                  <td className="py-2 px-4 bg-transparent border-b text-center">
                    {leave.fromDate} - {leave.toDate}
                  </td>
                  <td className="py-2 px-4 bg-transparent border-b text-center">
                    {leave.reason}
                  </td>
                  <td className="py-2 px-4 bg-transparent border-b text-center flex items-center justify-center space-x-2">
                    <button
                      className="flex items-center"
                      onClick={() => openEditModal(leave.id)}
                    >
                      <FiEdit className="text-xl text-blue-500 mr-1" />
                    </button>
                    <button
                      className="flex items-center"
                      onClick={() => handleDeleteLeave(leave.id)}
                    >
                      <FiTrash2 className="text-red-500 text-xl mr-1" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {isModalOpen && (
          <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center z-50">
            <div
              className="bg-white p-8 rounded-lg shadow-lg z-50 h-auto w-2/3"
              onClick={(e) => e.stopPropagation()}
            >
              <h2 className="text-2xl font-semibold mb-4 text-orange-400">
                {editLeaveId !== null ? "Edit Leave" : "Add Leave"}
              </h2>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleAddLeave();
                }}
              >
                <div className="space-y-4 mb-4">
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-cyan-500"
                    value={newLeave.name}
                    onChange={handleInputChange}
                    required
                  />
                  <input
                    type="text"
                    name="employeeId"
                    placeholder="Employee ID"
                    className="w-full px-3 py-2 pb-2 border rounded-lg focus:outline-none focus:border-cyan-500"
                    value={newLeave.employeeId}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className="mb-4">
                  <select
                    id="leave-category"
                    name="category"
                    className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-cyan-500"
                    value={newLeave.category}
                    onChange={handleInputChange}
                    required
                  >
                    <option value="" disabled>
                      Select category
                    </option>
                    <option value="Vacation">Vacation</option>
                    <option value="Sick Leave">Sick Leave</option>
                    <option value="Personal Leave">Personal Leave</option>
                    <option value="Others">Others</option>
                  </select>
                </div>

                <div className="mb-4 flex flex-row gap-3">
                  <input
                    type="date"
                    name="fromDate"
                    className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-cyan-500"
                    value={newLeave.fromDate}
                    onChange={handleInputChange}
                    required
                  />

                  <input
                    type="date"
                    name="toDate"
                    className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-cyan-500"
                    value={newLeave.toDate}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="mb-4">
                  <textarea
                    name="message"
                    className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-cyan-500"
                    value={newLeave.message}
                    onChange={handleInputChange}
                    rows="4"
                    placeholder="Description"
                    required
                  ></textarea>
                </div>
                <div className="flex justify-center gap-4">
                  <button
                    type="submit"
                    className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg"
                  >
                    Save
                  </button>
                  <button
                    type="button"
                    className="bg-gray-500 hover:bg-gray-600 text-white px-6 py-2 rounded-lg"
                    onClick={closeModal}
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
        {showSuccessMessage && (
          <div className="fixed bottom-0 left-0 right-0 bg-green-500 text-white text-center py-2">
            <BsCheck2Circle className="inline mr-2" />
            {editLeaveId !== null
              ? "Leave Edited Successfully"
              : "Leave Added Successfully"}
          </div>
        )}
        {showDeleteSuccessMessage && (
          <div className="fixed bottom-0 left-0 right-0 bg-red-500 text-white text-center py-2">
            Leave Deleted Successfully
          </div>
        )}
      </div>
    </>
  );
}

export default LeaveRequest;
