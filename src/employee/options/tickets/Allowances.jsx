import React, { useState } from "react";
import { AiFillPlusCircle } from "react-icons/ai";
import { IoMdInformationCircleOutline } from "react-icons/io";
import { FiEdit, FiTrash2 } from "react-icons/fi";
import { TiDeleteOutline } from "react-icons/ti";
import { MdOutlineCheckCircle } from "react-icons/md";
import { MdRemoveRedEye } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { MdOutlineKeyboardDoubleArrowLeft } from "react-icons/md";

const initialValues = [
  {
    id: 1,
    DisplayName: "Gratuity",
    AllowanceCode: "Section 10(10)",
    Taxable: "Partially",
    LOP: "No",
    PF: "Yes",
    ESI: "No",
    PT: "No",
    Amount: "No limit",
  },
];

const Allowances = () => {
  const [showModal, setShowModal] = useState(false);
  const [values, setValues] = useState(initialValues);
  const [newAllowance, setNewAllowance] = useState({
    DisplayName: "",
    AllowanceCode: "",
    Taxable: "",
    LOP: "",
    PF: "",
    ESI: "",
    PT: "",
    Amount: "",
  });
  const [editAllowanceId, setEditAllowanceId] = useState(null);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [deleteId, setDeleteId] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [viewAllowance, setViewAllowance] = useState(null);
  const recordsPerPage = 10;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewAllowance({ ...newAllowance, [name]: value });
  };

  const handleAddAllowance = () => {
    if (editAllowanceId) {
      setValues(
        values.map((allowance) =>
          allowance.id === editAllowanceId
            ? { ...allowance, ...newAllowance }
            : allowance
        )
      );
      setEditAllowanceId(null);
    } else {
      setValues([...values, { ...newAllowance, id: values.length + 1 }]);
    }
    setShowModal(false);
    setNewAllowance({
      DisplayName: "",
      AllowanceCode: "",
      Taxable: "",
      LOP: "",
      PF: "",
      ESI: "",
      PT: "",
      Amount: "",
    });
  };

  const setButton = (e) => {
    switch (e) {
      case "Yes":
        return <MdOutlineCheckCircle className="text-2xl text-[#2bb92b]" />;
      case "No":
        return <TiDeleteOutline className="text-2xl text-[#B20000]" />;
      default:
        return null;
    }
  };

  const handleEditAllowance = (id) => {
    const allowance = values.find((allowance) => allowance.id === id);
    setNewAllowance(allowance);
    setEditAllowanceId(id);
    setShowModal(true);
  };

  const handleDeleteAllowance = () => {
    setValues(values.filter((allowance) => allowance.id !== deleteId));
    setIsDeleteModalOpen(false);
    setDeleteId(null);
  };

  const openDeleteModal = (id) => {
    setIsDeleteModalOpen(true);
    setDeleteId(id);
  };

  const closeModal = () => {
    setShowModal(false);
    setEditAllowanceId(null);
    setNewAllowance({
      DisplayName: "",
      AllowanceCode: "",
      Taxable: "",
      LOP: "",
      PF: "",
      ESI: "",
      PT: "",
      Amount: "",
    });
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleViewAllowance = (allowance) => {
    setViewAllowance(allowance);
  };

  const currentRecords = values.slice(
    (currentPage - 1) * recordsPerPage,
    currentPage * recordsPerPage
  );

  const totalPages = Math.ceil(values.length / recordsPerPage);

  return (
    <div className="my-5 py-4">
      <div className="flex flex-row justify-between mb-7">
        <div className="flex flex-row gap-x-2">
          <h3 className="text-xl font-semibold mt-1">Allowances</h3>
          <button type="button" className="flex items-center justify-center">
            <IoMdInformationCircleOutline />
            info
          </button>
        </div>
        <button
          type="button"
          onClick={() => setShowModal(true)}
          className="flex items-center gap-2 bg-[#E65F2B] font-normal p-2 pr-5 rounded-lg text-white "
        >
          <AiFillPlusCircle className="text-xl" />
          Add
        </button>
      </div>
      <div className="overflow-auto">
        <table className="w-[1100px]">
          <thead className="bg-[#E65F2B] text-lg font-semibold">
            <tr>
              <th className="py-4 px-2 text-center w-[100px] border-r border-white border-opacity-60">
                Display Name
              </th>
              <th className="py-4 px-2 text-center w-[120px] border-r border-white border-opacity-60">
                Allowance Code
              </th>
              <th className="py-4 px-2 text-center w-[40px] border-r border-white border-opacity-60">
                Taxable
              </th>
              <th className="py-4 px-2 text-center w-[10px] border-r border-white border-opacity-60">
                LOP
              </th>
              <th className="py-4 px-2 text-center w-[10px] border-r border-white border-opacity-60">
                PF
              </th>
              <th className="py-4 px-2 text-center w-[10px] border-r border-white border-opacity-60">
                ESI
              </th>
              <th className="py-4 px-2 text-center w-[10px] border-r border-white border-opacity-60">
                PT
              </th>
              <th className="py-4 px-4 w-[110px] text-center border-r border-white border-opacity-60">
                Amount
              </th>
              <th className="py-4 px-4 text-center w-[10px]">Action</th>
            </tr>
          </thead>
          <tbody>
            {currentRecords.map((value) => (
              <tr
                key={value.id}
                className="bg-[#E65F2B] bg-opacity-20 text-lg font-normal"
              >
                <td className="py-2 px-2 border-b bg-transparent text-center border-r border-[#E65F2B] border-opacity-80">
                  {value.DisplayName}
                </td>
                <td className="py-2 px-2 border-b bg-transparent text-center border-r border-[#E65F2B] border-opacity-80">
                  {value.AllowanceCode}
                </td>
                <td className="py-2 px-2 border-b bg-transparent text-center border-r border-[#E65F2B] border-opacity-80">
                  {value.Taxable}
                </td>
                <td className="py-2 px-2 border-b bg-transparent text-center border-r border-[#E65F2B] border-opacity-80">
                  <div className="pl-[22px]">{setButton(value.LOP)}</div>
                </td>
                <td className="py-2 px-2 border-b bg-transparent text-center border-r border-[#E65F2B] border-opacity-80">
                <div className="pl-[22px]">{setButton(value.PF)}</div>
                </td>
                <td className="py-2 px-2 border-b bg-transparent text-center border-r border-[#E65F2B] border-opacity-80">
                <div className="pl-[22px]">{setButton(value.ESI)}</div>
                </td>
                <td className="py-2 px-2 border-b bg-transparent text-center border-r border-[#E65F2B] border-opacity-80">
                <div className="pl-[22px]">{setButton(value.PT)}</div>
                </td>
                <td className="py-2 px-2 border-b bg-transparent text-center border-r border-[#E65F2B] border-opacity-80">
                  {value.Amount}
                </td>
                <td className="py-2 px-4 border-b bg-transparent text-center border-[#E65F2B]">
                  <div className="flex justify-center items-center space-x-2">
                    <button
                      className="flex items-center justify-center"
                      onClick={() => handleViewAllowance(value)}
                    >
                      <MdRemoveRedEye className="mr-1 bg-[#E65F2B] text-white flex items-center size-6 p-1 rounded-md" />
                    </button>
                    <button
                      className="text-blue-500 flex py-3 items-center"
                      onClick={() => handleEditAllowance(value.id)}
                    >
                      <FiEdit className="mr-1 bg-[#2A8F4C] text-white rounded-md size-6 p-1" />
                    </button>
                    <button
                      className="flex items-center justify-center"
                      onClick={() => openDeleteModal(value.id)}
                    >
                      <FiTrash2 className="mr-1 bg-[#FF3636] text-white flex items-center size-6 p-1 rounded-md" />
                    </button>

                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex justify-center my-4">
        <button
          className="px-2 py-1 mx-1 bg-[#E65F2B] text-white rounded-md"
          onClick={() => handlePageChange(1)}
          disabled={currentPage === 1}
        >
          <MdOutlineKeyboardDoubleArrowLeft />
        </button>
        <button
          className="px-2 py-1 mx-1 bg-[#E65F2B] text-white rounded-md"
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          <MdOutlineKeyboardArrowLeft />
        </button>
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            className={`px-3 py-1 mx-1 rounded-md ${currentPage === index + 1
                ? "bg-[#E65F2B] text-white"
                : "bg-gray-200 text-black"
              }`}
            onClick={() => handlePageChange(index + 1)}
          >
            {index + 1}
          </button>
        ))}
        <button
          className="px-2 py-1 mx-1 bg-[#E65F2B] text-white rounded-md"
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          <MdKeyboardArrowRight />
        </button>
        <button
          className="px-2 py-1 mx-1 bg-[#E65F2B] text-white rounded-md"
          onClick={() => handlePageChange(totalPages)}
          disabled={currentPage === totalPages}
        >
          <MdOutlineKeyboardDoubleArrowRight />
        </button>
      </div>
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50 text-lg font-normal">
          <div className="bg-white rounded-lg p-6 px-10 w-[700px]">
            <h2 className="text-2xl mb-4 text-[#E65F2B]">
              {editAllowanceId ? "Edit Allowance" : "Add Allowance"}
            </h2>
            <div className="grid grid-cols-1 space-y-4">
              <div className="relative text-[#E65F2B]">
                <input
                  type="text"
                  name="DisplayName"
                  placeholder="Display Name"
                  value={newAllowance.DisplayName}
                  onChange={handleInputChange}
                  className="block w-full border border-[#E65F2B] placeholder-[#E65F2B] rounded-md focus:outline-none p-2 placeholder-opacity-60"
                />
              </div>
              <div className="relative text-[#E65F2B]">
                <input
                  type="text"
                  name="AllowanceCode"
                  placeholder="Allowance Code"
                  value={newAllowance.AllowanceCode}
                  onChange={handleInputChange}
                  className="block w-full border border-[#E65F2B] placeholder-[#E65F2B] rounded-md focus:outline-none p-2 placeholder-opacity-60"
                />
              </div>
              <div className="relative text-[#E65F2B]">
                <input
                  type="text"
                  name="Taxable"
                  placeholder="Taxable"
                  value={newAllowance.Taxable}
                  onChange={handleInputChange}
                  className="block w-full border border-[#E65F2B] placeholder-[#E65F2B] rounded-md focus:outline-none p-2 placeholder-opacity-60"
                />
              </div>
              <div className="relative text-[#E65F2B] flex space-x-11">
                <label className="text-xl">LOP:</label>
                <div className="flex items-center text-xl">
                  <label className="flex items-center mr-4">
                    <input
                      type="radio"
                      name="LOP"
                      value="Yes"
                      checked={newAllowance.LOP === "Yes"}
                      onChange={handleInputChange}
                      className="mr-2"
                    />
                    Yes
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="LOP"
                      value="No"
                      checked={newAllowance.LOP === "No"}
                      onChange={handleInputChange}
                      className="mr-2"
                    />
                    No
                  </label>
                </div>
              </div>
              <div className="relative text-[#E65F2B] flex space-x-[57px]">
                <label className="text-xl">PF:</label>
                <div className="flex items-center text-xl">
                  <label className="flex items-center mr-4">
                    <input
                      type="radio"
                      name="PF"
                      value="Yes"
                      checked={newAllowance.PF === "Yes"}
                      onChange={handleInputChange}
                      className="mr-2"
                    />
                    Yes
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="PF"
                      value="No"
                      checked={newAllowance.PF === "No"}
                      onChange={handleInputChange}
                      className="mr-2"
                    />
                    No
                  </label>
                </div>
              </div>
              <div className="relative text-[#E65F2B] flex space-x-[51px]">
                <label className="text-xl">ESI:</label>
                <div className="flex items-center text-xl">
                  <label className="flex items-center mr-4">
                    <input
                      type="radio"
                      name="ESI"
                      value="Yes"
                      checked={newAllowance.ESI === "Yes"}
                      onChange={handleInputChange}
                      className="mr-2"
                    />
                    Yes
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="ESI"
                      value="No"
                      checked={newAllowance.ESI === "No"}
                      onChange={handleInputChange}
                      className="mr-2"
                    />
                    No
                  </label>
                </div>
              </div>
              <div className="relative text-[#E65F2B] flex space-x-[55px]">
                <label className="text-xl">PT:</label>
                <div className="flex items-center text-xl">
                  <label className="flex items-center mr-4">
                    <input
                      type="radio"
                      name="PT"
                      value="Yes"
                      checked={newAllowance.PT === "Yes"}
                      onChange={handleInputChange}
                      className="mr-2"
                    />
                    Yes
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="PT"
                      value="No"
                      checked={newAllowance.PT === "No"}
                      onChange={handleInputChange}
                      className="mr-2"
                    />
                    No
                  </label>
                </div>
              </div>

              <div className="relative text-[#E65F2B]">
                <input
                  type="text"
                  name="Amount"
                  placeholder="Amount"
                  value={newAllowance.Amount}
                  onChange={handleInputChange}
                  className="block w-full border border-[#E65F2B] placeholder-[#E65F2B] rounded-md focus:outline-none p-2 placeholder-opacity-60"
                />
              </div>
              <div className="flex justify-center space-x-4">
                <button
                  type="button"
                  onClick={handleAddAllowance}
                  className="px-4 py-2 bg-[#E65F2B] text-white rounded-md"
                >
                  {editAllowanceId ? "Update" : "Add"}
                </button>
                <button
                  type="button"
                  onClick={closeModal}
                  className="px-4 py-2 bg-gray-300 text-black rounded-md"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {isDeleteModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div className="bg-white rounded-lg p-6">
            <h2 className="text-xl mb-4 font-semibold">Confirm Deletion</h2>
            <p className="font-normal">Are you sure you want to delete this allowance?</p>
            <div className="flex justify-center space-x-4 mt-4">
              <button
                type="button"
                onClick={handleDeleteAllowance}
                className="px-4 py-2 bg-[#E65F2B] font-semibold text-white rounded-md"
              >
                Delete
              </button>
              <button
                type="button"
                onClick={() => setIsDeleteModalOpen(false)}
                className="px-4 py-2 bg-gray-300 font-semibold text-black rounded-md"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {viewAllowance && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-8 rounded-lg shadow-lg w-1/2">
            <h3 className="text-xl font-semibold mb-4 text-[#E65F2B]">Allowance Details</h3>
            <div className="mb-4 flex items-center space-x-3">
              <h2 className="text-lg font-semibold">Display Name:</h2><span> {viewAllowance.DisplayName} </span>
            </div>
            <div className="mb-4 flex items-center space-x-3">
              <h2 className="text-lg font-semibold">Allowance Code:</h2><span> {viewAllowance.AllowanceCode}</span>
            </div>
            <div className="mb-4 flex items-center space-x-3">
              <h2 className="text-lg font-semibold">Taxable:</h2><span> {viewAllowance.Taxable}</span>
            </div>
            <div className="mb-4 flex items-center space-x-3">
              <h2 className="text-lg font-semibold">LOP:</h2><span> {viewAllowance.LOP}</span>
            </div>
            <div className="mb-4 flex items-center space-x-3">
              <h2 className="text-lg font-semibold">PF:</h2><span> {viewAllowance.PF}</span>
            </div>
            <div className="mb-4 flex items-center space-x-3">
              <h2 className="text-lg font-semibold">ESI:</h2><span> {viewAllowance.ESI}</span>
            </div>
            <div className="mb-4 flex items-center space-x-3">
              <h2 className="text-lg font-semibold">PT:</h2><span> {viewAllowance.PT}</span>
            </div>
            <div className="mb-4 flex items-center space-x-3">
              <h2 className="text-lg font-semibold">Amount:</h2><span> {viewAllowance.Amount}</span>
            </div>
            <button
              className="bg-[#E65F2B] text-white font-semibold px-4 py-2 rounded-lg"
              onClick={() => setViewAllowance(null)}
            >
              Close
            </button>
            </div>
          </div>
      )}
    </div>
  );
};

export default Allowances;
