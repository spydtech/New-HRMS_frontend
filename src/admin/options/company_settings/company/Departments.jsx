import React, { useState } from "react";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { AiFillEdit, AiFillDelete } from "react-icons/ai"; // Import React Icons

const departmentOptions = [
  "Marketing",
  "Human Resources",
  "Administration",
  "Accounts",
  "Sales",
  "Finance",
  "IT",
  "Customer Support",
  "Operations",
  "Legal",
  "Product Management",
];

const Departments = ({ isModalOpen, setIsModalOpen, logActivity }) => {
  const [departmentDetails, setDepartmentDetails] = useState([
    {
      id: "1",
      DepartmentName: "Marketing",
      EmployeeCount: "0",
      Status: "Active",
      Action: "Make Inactive",
    },
  ]);
  const [selectedDepartment, setSelectedDepartment] = useState("");
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [selectedDepartmentId, setSelectedDepartmentId] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [editDepartment, setEditDepartment] = useState(null);

  const handleDepartmentChange = (e) => setSelectedDepartment(e.target.value);

  const handleDepartmentSubmit = () => {
    if (selectedDepartment) {
      const newDepartment = {
        id: (departmentDetails.length + 1).toString(),
        DepartmentName: selectedDepartment,
        EmployeeCount: "0",
        Status: "Active",
        Action: "Make Inactive",
      };

      setDepartmentDetails([...departmentDetails, newDepartment]);
      setSuccessMessage("Department Successfully Added");
      setShowSuccessMessage(true);
      setIsModalOpen(false); // Close the modal after submission

      // Log the activity
      logActivity(`Added new department: ${newDepartment.DepartmentName}`);

      // Hide the success message after 2 seconds
      setTimeout(() => setShowSuccessMessage(false), 2000);
    }
  };

  const toggleStatus = (id) => {
    setSelectedDepartmentId(id);
    setShowConfirmModal(true);
  };

  const handleConfirmAction = () => {
    setDepartmentDetails((prevDetails) =>
      prevDetails.map((department) =>
        department.id === selectedDepartmentId
          ? {
              ...department,
              Status: department.Status === "Active" ? "Inactive" : "Active",
              Action:
                department.Status === "Active"
                  ? "Make Active"
                  : "Make Inactive",
            }
          : department
      )
    );

    const department = departmentDetails.find(
      (dept) => dept.id === selectedDepartmentId
    );
    const message =
      department.Status === "Active"
        ? "Department Inactivated"
        : "Department Activated";

    setSuccessMessage(message);
    setShowSuccessMessage(true);
    setShowConfirmModal(false);
    setSelectedDepartmentId(null);

    // Log the activity
    logActivity(`${message}: ${department.DepartmentName}`);

    // Hide the success message after 2 seconds
    setTimeout(() => setShowSuccessMessage(false), 2000);
  };

  const handleCancelAction = () => {
    setShowConfirmModal(false);
    setSelectedDepartmentId(null);
  };

  const startEditing = (id) => {
    const departmentToEdit = departmentDetails.find((dept) => dept.id === id);
    setEditDepartment(departmentToEdit);
    setIsEditing(true);
  };

  const handleEditChange = (e) => {
    setEditDepartment({
      ...editDepartment,
      [e.target.name]: e.target.value,
    });
  };

  const handleSaveEdit = () => {
    setDepartmentDetails((prevDetails) =>
      prevDetails.map((department) =>
        department.id === editDepartment.id
          ? {
              ...editDepartment,
              Action:
                editDepartment.Status === "Active"
                  ? "Make Inactive"
                  : "Make Active",
            }
          : department
      )
    );

    // Log the activity
    logActivity(`Updated department: ${editDepartment.DepartmentName}`);

    // Notify user of success
    setSuccessMessage("Department updated successfully");
    setShowSuccessMessage(true);
    setTimeout(() => setShowSuccessMessage(false), 2000);

    setIsEditing(false);
    setEditDepartment(null);
  };

  const handleDelete = (id) => {
    setDepartmentDetails((prevDetails) =>
      prevDetails.filter((department) => department.id !== id)
    );

    // Log the activity
    logActivity(`Deleted department with ID: ${id}`);

    // Notify user of success
    setSuccessMessage("Department deleted successfully");
    setShowSuccessMessage(true);
    setTimeout(() => setShowSuccessMessage(false), 2000);
  };

  const totalDepartmentRecords = departmentDetails.length;
  const selectedDepartmentDetail = departmentDetails.find(
    (dept) => dept.id === selectedDepartmentId
  );

  return (
    <div className="flex flex-col flex-grow">
      <div className="overflow-x-auto flex-grow">
        <div className="  overflow-x-scroll scrollbar-thin   scrollbar-track-white scrollbar-thumb-[#e65f2b] pt-4 mx-4">
          <table className="min-w-full w-screen overflow-x-scroll  text-nowrap">
            <thead className="text-[#E65F2B]">
              <tr>
                <th className="p-2 whitespace-nowrap py-3 border-r border-white bg-[#e65f2b] text-white">
                  Department Name
                </th>
                <th className="p-2 whitespace-nowrap py-3 border-r border-white bg-[#e65f2b] text-white">
                  Employee Count
                </th>
                <th className="p-2 whitespace-nowrap py-3 border-r border-white bg-[#e65f2b] text-white">
                  Status
                </th>
                <th className="p-2 whitespace-nowrap py-3 border-r border-white bg-[#e65f2b] text-white">
                  Toggle Status
                </th>
                <th className="p-2 whitespace-nowrap py-3 border-r border-white bg-[#e65f2b] text-white">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {departmentDetails.map((department) => (
                <tr key={department.id}>
                  <td className="p-2 text-center text-[#E65F2B] whitespace-nowrap overflow-hidden text-ellipsis">
                    {department.DepartmentName}
                  </td>
                  <td className="p-2 text-center text-[#E65F2B] whitespace-nowrap overflow-hidden text-ellipsis">
                    {department.EmployeeCount}
                  </td>
                  <td
                    className={`p-2 text-center whitespace-nowrap overflow-hidden text-ellipsis ${
                      department.Status === "Active"
                        ? "text-green-500"
                        : "text-red-500"
                    }`}
                  >
                    {department.Status}
                  </td>
                  <td className="p-2 text-center whitespace-nowrap overflow-hidden text-ellipsis">
                    <button
                      onClick={() => toggleStatus(department.id)}
                      className="text-[#E65F2B] underline hover:text-[#d4551a]"
                    >
                      {department.Status === "Active"
                        ? "Make Inactive"
                        : "Make Active"}
                    </button>
                  </td>
                  <td className="p-2 justify-center   flex gap-2 items-center whitespace-nowrap overflow-hidden text-ellipsis">
                    <button
                      onClick={() => startEditing(department.id)}
                      className="text-[#E65F2B] hover:text-[#d4551a]"
                    >
                      <AiFillEdit size={20} className="text-green-600" />
                    </button>
                    <button
                      onClick={() => handleDelete(department.id)}
                      className="text-[#E65F2B] hover:text-[#d4551a]"
                    >
                      <AiFillDelete size={20} className="text-red-600" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="mt-4 self-start text-[#E65F2B]">
        <h1>Total Records: {totalDepartmentRecords}</h1>
      </div>

      {/* Modal for adding new department */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
            <h2 className="text-2xl mb-4 text-[#E65F2B]">Add New Department</h2>
            <div className="mb-4 flex items-center gap-4">
              <label className="text-lg font-medium text-[#E65F2B] w-40">
                Department Name
              </label>
              <select
                value={selectedDepartment}
                onChange={handleDepartmentChange}
                className="block border-[#E65F2B] border rounded-md shadow-sm h-[50px] px-2 flex-1"
              >
                <option value="">Select Department</option>
                {departmentOptions.map((dept) => (
                  <option key={dept} value={dept}>
                    {dept}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex justify-end gap-4">
              <button
                onClick={handleDepartmentSubmit}
                className="px-4 py-2 bg-[#E65F2B]  text-white rounded-md hover:bg-[#d4551a]"
              >
                Save
              </button>
              <button
                onClick={() => setIsModalOpen(false)}
                className="px-4 py-2 bg-gray-300 text-black rounded-md hover:bg-gray-400"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Modal for editing department */}
      {isEditing && editDepartment && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
            <h2 className="text-2xl mb-4 text-[#E65F2B]">Edit Department</h2>
            <div className="mb-4 flex items-center gap-4">
              <label className="text-lg font-medium text-[#E65F2B] w-40">
                Department Name
              </label>
              <input
                type="text"
                name="DepartmentName"
                value={editDepartment.DepartmentName}
                onChange={handleEditChange}
                className="block border-[#E65F2B] border rounded-md shadow-sm h-[50px] px-2 flex-1"
              />
            </div>

            <div className="flex justify-end gap-4">
              <button
                onClick={() => setIsEditing(false)}
                className="px-4 py-2 bg-gray-300 text-black rounded-md hover:bg-gray-400"
              >
                Cancel
              </button>
              <button
                onClick={handleSaveEdit}
                className="px-4 py-2 bg-[#E65F2B]  text-white rounded-md hover:bg-[#d4551a]"
              >
                Save Changes
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Success Message */}
      {showSuccessMessage && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div
            className="p-8 rounded-lg text-center text-white"
            style={{
              background: "linear-gradient(180deg, #E65F2B 0%, #FFC252 100%)",
            }}
          >
            <h2 className="text-3xl mb-4">
              <IoMdCheckmarkCircleOutline className="inline-block text-6xl" />
            </h2>
            <p>{successMessage}</p>
          </div>
        </div>
      )}

      {/* Confirmation Modal */}
      {showConfirmModal && selectedDepartmentDetail && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
            <h2 className="text-xl mb-4 text-[#E65F2B]">Department Status</h2>
            <p className="mb-6">
              Are you sure you want to make this department <br />
              <span className="font-semibold">
                {selectedDepartmentDetail.DepartmentName}
              </span>
              {selectedDepartmentDetail.Status === "Active"
                ? " Inactive?"
                : " Active?"}
            </p>
            <div className="flex justify-end gap-4">
              <button
                onClick={handleConfirmAction}
                className={`px-4 py-2 text-white rounded-md ${
                  selectedDepartmentDetail.Status === "Active"
                    ? "bg-gradient-to-r from-[#E65F2B] to-[#FFC252]"
                    : "bg-gradient-to-r from-[#FFC252] to-[#E65F2B]"
                }`}
              >
                {selectedDepartmentDetail.Status === "Active"
                  ? "Make Inactive"
                  : "Make Active"}
              </button>
              <button
                onClick={handleCancelAction}
                className="px-4 py-2 bg-gray-300 text-black rounded-md hover:bg-gray-400"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Departments;
