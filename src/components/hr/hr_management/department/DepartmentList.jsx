import React, { useState } from "react";
import { FaPlusCircle } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FiEdit } from "react-icons/fi";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { CiEdit } from "react-icons/ci";
import { FiPlusCircle } from "react-icons/fi";
const initialData = [
  {
    id: 1,
    dp: "https://via.placeholder.com/40",
    name: "John Doe",
    email: "john@example.com",
    phone: "123-456-7890",
    employeeId: "EMP001",
    joiningDate: "2023-01-01",
    role: "Developer",
    leaveType: "Sick Leave",
    date: "2023-05-15",
    reason: "Fever",
    department: "Engineering",
    departmentHead: "Jack Johnson",
    totalEmployees: 10,
  },
  {
    id: 2,
    dp: "https://via.placeholder.com/40",
    name: "Jane Smith",
    email: "jane@example.com",
    phone: "098-765-4321",
    employeeId: "EMP002",
    joiningDate: "2023-02-01",
    role: "Designer",
    leaveType: "Casual Leave",
    date: "2023-07-20",
    reason: "Travel",
    department: "Design",
    departmentHead: "Emma Watson",
    totalEmployees: 8,
  },
];

function DepartmentList() {
  const [showModal, setShowModal] = useState(false);
  const [departmentName, setDepartmentName] = useState("");
  const [departmentHead, setDepartmentHead] = useState("");
  const [totalEmployees, setTotalEmployees] = useState("");
  const [departments, setDepartments] = useState(initialData);
  const [editId, setEditId] = useState(null);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [showDeleteSuccessMessage, setShowDeleteSuccessMessage] =
    useState(false);

  const [errors, setErrors] = useState({});

  const handleAddDepartment = () => {
    setEditId(null); // Clear edit ID when adding a new department
    setDepartmentName("");
    setDepartmentHead("");
    setTotalEmployees("");
    setErrors({});
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setDepartmentName("");
    setDepartmentHead("");
    setTotalEmployees("");
    setErrors({});
  };

  const handleSaveDepartment = () => {
    const newErrors = {};

    if (!departmentName)
      newErrors.departmentName = "Department Name is required.";
    if (!departmentHead)
      newErrors.departmentHead = "Department Head is required.";
    if (!totalEmployees)
      newErrors.totalEmployees = "Total Employees is required.";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    if (editId !== null) {
      // Edit existing department

      setDepartments(
        departments.map((department) =>
          department.id === editId
            ? {
                ...department,
                department: departmentName,
                departmentHead: departmentHead,
                totalEmployees: parseInt(totalEmployees, 10) || 0,
              }
            : department
        )
      );
    } else {
      // Add new department
      const newId =
        departments.length > 0 ? departments[departments.length - 1].id + 1 : 1;

      const newDepartment = {
        id: newId,
        dp: "https://via.placeholder.com/40",
        department: departmentName,
        departmentHead: departmentHead,
        totalEmployees: parseInt(totalEmployees, 10) || 0,
      };

      setDepartments([...departments, newDepartment]);
    }

    setShowSuccessMessage(true);
    setTimeout(() => setShowSuccessMessage(false), 3000); // Hide message after 3 seconds
    handleCloseModal();
  };

  const handleEdit = (id) => {
    const departmentToEdit = departments.find(
      (department) => department.id === id
    );

    if (departmentToEdit) {
      setEditId(id);
      setDepartmentName(departmentToEdit.department);
      setDepartmentHead(departmentToEdit.departmentHead);
      setTotalEmployees(departmentToEdit.totalEmployees);
      setErrors({});
      setShowModal(true);
    }
  };

  const handleDelete = (id) => {
    setDepartments(departments.filter((department) => department.id !== id));

    setShowDeleteSuccessMessage(true);
    setTimeout(() => setShowDeleteSuccessMessage(false), 3000); // Hide message after 3 seconds
  };

  return (
    <div id="main" className="min-h-screen p-4 mt-4">
      <div className=" mb-4">
        <p className="text-[#0098F1] lg:text-lg text-sm font-bold mb-4">
          Hr Management / Employee / Department List
        </p>
      </div>

      <div className="flex justify-end mb-4  rounded-lg">
        <button
          type="button"
          className="flex items-center  text-sm lg:text-lg bg-[#0098f1] text-white p-4 py-3 rounded-lg "
          onClick={handleAddDepartment}
        >
          <FiPlusCircle className="text-xl mr-2" /> Add Department
        </button>
      </div>

      <div className="  overflow-x-scroll scrollbar-thin   scrollbar-track-white scrollbar-thumb-[#0098f1] pt-4 ">
        <table className="min-w-full w-screen overflow-x-scroll  text-nowrap">
          <thead className="bg-[#0098f1] text-white">
            <tr className="border border-[#0098F1]">
              <th className="py-3 px-4 border-r border-white text-center text-sm font-medium text-nowrap">
                Department Name
              </th>
              <th className="py-3 px-4 border-r border-white text-center text-sm font-medium text-nowrap">
                Department Head
              </th>
              <th className="py-3 px-4 border-r border-white text-center text-sm font-medium text-nowrap">
                Total Employees
              </th>
              <th className="py-3 px-4  text-center text-sm font-medium text-nowrap">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {departments.map((department) => (
              <tr key={department.id} className="lg:font-semibold border border-[#0098F1] bg-white">
                <td className="py-2 px-4 border-r border-[#0098f1] text-center">
                  {department.department}
                </td>
                <td className="py-2 px-4 border-r border-[#0098f1] text-center">
                  {department.departmentHead}
                </td>
                <td className="py-2 px-4 border-r border-[#0098f1] text-center">
                  {department.totalEmployees}
                </td>
                <td className="py-2 px-4 border-r border-[#0098f1] text-center">
                  <button
                    className="bg-[#2A8F4C] text-white px-3 py-1 rounded-lg mr-2"
                    onClick={() => handleEdit(department.id)}
                  >
                    <FiEdit className="text-xl" />
                  </button>
                  <button
                    className="bg-[#0098F1] text-white px-3 py-1 rounded-lg"
                    onClick={() => handleDelete(department.id)}
                  >
                    <RiDeleteBin6Line className="text-xl" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white lg:w-[600px] p-6 rounded-lg shadow-lg w-64">
            <h2 className="text-xl font-roboto mb-4 text-[#0098F1]">
              {editId ? "Edit Department" : "Add Department"}
            </h2>
            <div className="mb-4">
              <label
                className=" mb-2 text-sm font-roboto flex justify-between"
                htmlFor="departmentName"
              >
                Department Name
                {editId && <CiEdit className="text-[#0098F1] text-xl" />}
              </label>
              <input
                type="text"
                id="departmentName"
                className="w-full p-2 border-[1.5px] border-[#0098f1] rounded-lg"
                value={departmentName}
                onChange={(e) => setDepartmentName(e.target.value)}
              />
              {errors.departmentName && (
                <p className="text-[#0098F1] text-sm">{errors.departmentName}</p>
              )}
            </div>
            <div className="mb-4">
              <label
                className=" mb-2 text-sm font-roboto flex justify-between"
                htmlFor="departmentHead"
              >
                Department Head
                {editId && <CiEdit className="text-[#0098F1] text-xl" />}
              </label>
              <input
                type="text"
                id="departmentHead"
                className="w-full p-2 border-[1.5px] border-[#0098f1] rounded-lg"
                value={departmentHead}
                onChange={(e) => setDepartmentHead(e.target.value)}
              />
              {errors.departmentHead && (
                <p className="text-[#0098F1] text-sm">{errors.departmentHead}</p>
              )}
            </div>
            <div className="mb-4">
              <label
                className=" mb-2 text-sm font-roboto flex justify-between"
                htmlFor="totalEmployees"
              >
                Total Employees
                {editId && <CiEdit className="text-[#0098F1] text-xl" />}
              </label>
              <input
                type="number"
                id="totalEmployees"
                className="w-full p-2 border-[1.5px] border-[#0098f1] rounded-lg"
                value={totalEmployees}
                onChange={(e) => setTotalEmployees(e.target.value)}
              />
              {errors.totalEmployees && (
                <p className="text-[#0098F1] text-sm">{errors.totalEmployees}</p>
              )}
            </div>
            <div className="flex justify-center">
              <button
                className="bg-[#0098f1] text-white h-[40px] w-[100px] rounded hover:bg-[#007acc] m-4"
                onClick={handleSaveDepartment}
              >
                Save
              </button>
              <button
                className="bg-white text-[#0098f1] h-[40px] w-[100px] rounded mr-2 border border-[#0098f1] m-4"
                onClick={handleCloseModal}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Success Message */}
      {showSuccessMessage && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-[#0098F1] p-8 rounded-lg text-center text-white">
            <h2 className="text-3xl mb-4">
              <IoMdCheckmarkCircleOutline className="inline-block text-6xl" />
            </h2>

            <p>
              {editId
                ? "Department Updated Successfully"
                : "Department Added Successfully"}
            </p>
          </div>
        </div>
      )}

      {/* Delete Success Message */}
      {showDeleteSuccessMessage && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-[#0098F1] p-8 rounded-lg text-center text-white">
            <h2 className="text-3xl mb-4">
              <IoMdCheckmarkCircleOutline className="inline-block text-6xl" />
            </h2>
            <p>Department Deleted Successfully</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default DepartmentList;
