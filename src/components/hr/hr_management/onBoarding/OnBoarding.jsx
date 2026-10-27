import React, { useState } from "react";
import { FiMail, FiEdit, FiTrash2 } from "react-icons/fi";
import { MdOutlineStarPurple500 } from "react-icons/md";
import { FaAngleRight } from "react-icons/fa6";
import { FaAngleLeft } from "react-icons/fa6";

const OnBoarding = () => {
  const [newModal, setNewModal] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 10;

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    personalEmail: "",
    companyEmail: "",
    estStartDate: "",
    department: "",
    workLocation: "",
    employeeType: "",
    shift: "",
    workSchedulePolicy: "",
    holidayPolicy: "",
    attendanceSource: "",
    jobTitle: "",
    ctc: "",
    jobDescription: "",
    assetDescription: "",
    employeeID: "",
  });
  const [savedData, setSavedData] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [deleteIndex, setDeleteIndex] = useState(null);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [showDeleteSuccessMessage, setShowDeleteSuccessMessage] =
    useState(false);
  const newEmployeeRequest = () => {
    setNewModal(true);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleCancel = () => {
    setFormData({
      firstName: "",
      lastName: "",
      personalEmail: "",
      companyEmail: "",
      estStartDate: "",
      department: "",
      workLocation: "",
      employeeType: "",
      shift: "",
      workSchedulePolicy: "",
      holidayPolicy: "",
      attendanceSource: "",
      jobTitle: "",
      ctc: "",
      jobDescription: "",
      assetDescription: "",
      employeeID: "",
    });
    setNewModal(false);
  };

  const handleSave = () => {
    if (editIndex !== null) {
      // Edit existing entry
      const updatedData = savedData.map((item, index) =>
        index === editIndex ? formData : item
      );
      setSavedData(updatedData);
      setEditIndex(null);
    } else {
      // Add new entry
      setSavedData([...savedData, formData]);
    }
    setFormData({
      firstName: "",
      lastName: "",
      personalEmail: "",
      companyEmail: "",
      estStartDate: "",
      department: "",
      workLocation: "",
      employeeType: "",
      shift: "",
      workSchedulePolicy: "",
      holidayPolicy: "",
      attendanceSource: "",
      jobTitle: "",
      ctc: "",
      jobDescription: "",
      assetDescription: "",
      employeeID: "",
    });
    setNewModal(false);
    setShowSuccessMessage(true);
    setTimeout(() => setShowSuccessMessage(false), 3000);
  };

  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  const currentRecords = savedData.slice(indexOfFirstRecord, indexOfLastRecord);
  const totalPages = Math.ceil(savedData.length / recordsPerPage);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const openEditModal = (index) => {
    setFormData(savedData[index]);
    setEditIndex(index);
    setNewModal(true);
  };

  const openDeleteModal = (index) => {
    setDeleteIndex(index);
    setIsDeleteModalOpen(true);
  };

  const handleDelete = () => {
    setSavedData(savedData.filter((_, index) => index !== deleteIndex));
    setIsDeleteModalOpen(false);
    setShowDeleteSuccessMessage(true);
    setTimeout(() => setShowDeleteSuccessMessage(false), 3000);
  };

  const closeDeleteModal = () => {
    setIsDeleteModalOpen(false);
  };
  return (
    <div className="min-h-screen">
      <div className="mt-4   p-4">
        <p className="text-[#0098F1] lg:text-lg  text-sm font-bold mb-4">
          Hr Management / Employee / Employee Onboarding
        </p>
      </div>

      <div className="flex flex-col justify-center items-center ">
        <button
          className="bg-[#0098F1] flex justify-center py-3 text-sm lg:text-[18px] mb-3 items-center gap-2 text-white p-2 rounded-lg px-4 font-normal"
          onClick={newEmployeeRequest}
        >
          <FiMail />
          Employee Onboarding Request
        </button>
        <div className="text-[16px] text-wrap  md:w-[400px] text-center mb-6">
          Please complete this form for new employees, who are not currently on
          Spyd Technology
        </div>
      </div>
      {newModal && (
        <div className="fixed inset-0 bg-gray-400 z-50 bg-opacity-60 justify-center overflow-y-auto items-start flex">
          <div className="flex flex-col z-50 justify-center mt-7 bg-white mb-2 w-[350px] md:w-[720px] lg:w-[800px] rounded-md p-4 mx-2  items-center">
            <div className="font-semibold mb-3 text-lg">
              Employee Onboarding
            </div>
            <div className="font-normal md:font-semibold mb-6">
              Please fill in the following information to proceed with the
              onboarding process
            </div>
            <form onSubmit={handleSave} className="">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-1 justify-around text-[#0098F1]">
                <div className="flex-col gap-6 mb-4">
                  <div className="flex justify-start items-center gap-1 mb-2">
                    <label className="text-[#0098F1] font-semibold">
                      First Name
                    </label>
                    <sup className="text-[7px] text-red-500">
                      <MdOutlineStarPurple500 />
                    </sup>
                  </div>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder="Enter First Name"
                    className="focus:outline-none px-1 text-[#0098F1] placeholder:p-2 placeholder:text-[#0098F1] placeholder:opacity-40 border border-[#0098F1] border-opacity-80 w-[280px] h-8 rounded-sm"
                    required
                  />
                </div>
                <div className="flex-col gap-6 mb-4">
                  <div className="flex justify-start items-center gap-1 mb-2">
                    <label className="text-[#0098F1] font-semibold">
                      Last Name
                    </label>
                    <sup className="text-[7px] text-red-500">
                      <MdOutlineStarPurple500 />
                    </sup>
                  </div>
                  <input
                    type="text"
                    placeholder="Enter Last Name"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                    className="focus:outline-none px-1 text-[#0098F1] placeholder:p-2 placeholder:text-[#0098F1] placeholder:opacity-40 border border-[#0098F1] border-opacity-80 w-[280px] h-8 rounded-sm"
                  />
                </div>
                <div className="flex-col gap-6 mb-4">
                  <div className="flex justify-start items-center gap-1 mb-2">
                    <label className="text-[#0098F1] font-semibold">
                      Personal Email
                    </label>
                    <sup className="text-[7px] text-red-500">
                      <MdOutlineStarPurple500 />
                    </sup>
                  </div>
                  <input
                    type="email"
                    name="personalEmail"
                    value={formData.personalEmail}
                    onChange={handleChange}
                    placeholder="Enter Email Address"
                    required
                    className="focus:outline-none px-1 text-[#0098F1] placeholder:p-2 placeholder:text-[#0098F1] placeholder:opacity-40 border border-[#0098F1] border-opacity-80 w-[280px] h-8 rounded-sm"
                  />
                </div>
                <div className="flex-col gap-6 mb-4">
                  <div className="flex justify-start items-center gap-1 mb-2">
                    <label className="text-[#0098F1] font-semibold">
                      Company Email
                    </label>
                    <sup className="text-[7px] text-red-500">
                      <MdOutlineStarPurple500 />
                    </sup>
                  </div>
                  <input
                    type="email"
                    name="companyEmail"
                    value={formData.companyEmail}
                    onChange={handleChange}
                    placeholder="Enter Email Address"
                    required
                    className="focus:outline-none px-1 text-[#0098F1] placeholder:p-2 placeholder:text-[#0098F1] placeholder:opacity-40 border border-[#0098F1] border-opacity-80 w-[280px] h-8 rounded-sm"
                  />
                </div>
                <div className="flex-col gap-6 mb-4">
                  <div className="flex justify-start items-center gap-1 mb-2">
                    <label className="text-[#0098F1] font-semibold">
                      Est. Start Date
                    </label>
                    <sup className="text-[7px] text-red-500">
                      <MdOutlineStarPurple500 />
                    </sup>
                  </div>
                  <input
                    type="Date"
                    name="estStartDate"
                    value={formData.estStartDate}
                    onChange={handleChange}
                    required
                    placeholder="Start Date"
                    className="focus:outline-none px-1 text-[#0098F1] datePicker:text-[#FFFFFF] placeholder:p-2 placeholder:text-[#0098F1] placeholder:opacity-40 border border-[#0098F1] border-opacity-80 w-[280px] h-8 rounded-sm"
                  />
                </div>
                <div className="flex-col gap-6 mb-4">
                  <div className="flex justify-start items-center gap-1 mb-2">
                    <label className="text-[#0098F1] font-semibold">
                      Department
                    </label>
                    <sup className="text-[7px] text-red-500">
                      <MdOutlineStarPurple500 />
                    </sup>
                  </div>
                  <select
                    name="department"
                    value={formData.department}
                    onChange={handleChange}
                    required
                    className="focus:outline-none px-1 text-[#0098F1] border border-[#0098F1] border-opacity-80 w-[280px] h-8 rounded-sm"
                  >
                    <option value="" disabled>
                      Select Department
                    </option>
                    <option value="hr">HR</option>
                    <option value="engineering">Engineering</option>
                    <option value="marketing">Marketing</option>
                  </select>
                </div>

                <div className="flex-col gap-6 mb-4">
                  <div className="flex justify-start items-center gap-1 mb-2">
                    <label className="text-[#0098F1] font-semibold">
                      Work Location
                    </label>
                    <sup className="text-[7px] text-red-500">
                      <MdOutlineStarPurple500 />
                    </sup>
                  </div>
                  <select
                    name="workLocation"
                    value={formData.workLocation}
                    onChange={handleChange}
                    required
                    className="focus:outline-none px-1 text-[#0098F1] border border-[#0098F1] border-opacity-80 w-[280px] h-8 rounded-sm"
                  >
                    <option value="" disabled>
                      Select Location
                    </option>
                    <option value="office">Office</option>
                    <option value="remote">Remote</option>
                    <option value="hybrid">Hybrid</option>
                  </select>
                </div>

                <div className="flex-col gap-6 mb-4">
                  <div className="flex justify-start items-center gap-1 mb-2">
                    <label className="text-[#0098F1] font-semibold">
                      Employee Type
                    </label>
                    <sup className="text-[7px] text-red-500">
                      <MdOutlineStarPurple500 />
                    </sup>
                  </div>
                  <select
                    name="employeeType"
                    value={formData.employeeType}
                    required
                    onChange={handleChange}
                    className="focus:outline-none px-1 text-[#0098F1] border border-[#0098F1] border-opacity-80 w-[280px] h-8 rounded-sm"
                  >
                    <option value="" disabled>
                      Select Employee Type
                    </option>
                    <option value="full-time">Full-Time</option>
                    <option value="part-time">Part-Time</option>
                    <option value="contract">Contract</option>
                  </select>
                </div>

                <div className="flex-col gap-6 mb-4">
                  <div className="flex justify-start items-center gap-1 mb-2">
                    <label className="text-[#0098F1] font-semibold">
                      Shift
                    </label>
                    <sup className="text-[7px] text-red-500">
                      <MdOutlineStarPurple500 />
                    </sup>
                  </div>
                  <select
                    name="shift"
                    value={formData.shift}
                    required
                    onChange={handleChange}
                    className="focus:outline-none px-1 text-[#0098F1] border border-[#0098F1] border-opacity-80 w-[280px] h-8 rounded-sm"
                  >
                    <option value="" disabled>
                      Select Shift
                    </option>
                    <option value="morning">Morning</option>
                    <option value="afternoon">Afternoon</option>
                    <option value="night">Night</option>
                  </select>
                </div>

                <div className="flex-col gap-6 mb-4">
                  <div className="flex justify-start items-center gap-1 mb-2">
                    <label className="text-[#0098F1] font-semibold">
                      Work Schedule Policy
                    </label>
                    <sup className="text-[7px] text-red-500">
                      <MdOutlineStarPurple500 />
                    </sup>
                  </div>
                  <select
                    name="workSchedulePolicy"
                    value={formData.workSchedulePolicy}
                    required
                    onChange={handleChange}
                    className="focus:outline-none px-1 text-[#0098F1] border border-[#0098F1] border-opacity-80 w-[280px] h-8 rounded-sm"
                  >
                    <option value="" disabled>
                      Select Policy
                    </option>
                    <option value="flexible">Flexible</option>
                    <option value="fixed">Fixed</option>
                    <option value="hybrid">Hybrid</option>
                  </select>
                </div>

                <div className="flex-col gap-6 mb-4">
                  <div className="flex justify-start items-center gap-1 mb-2">
                    <label className="text-[#0098F1] font-semibold">
                      Holiday Policy
                    </label>
                    <sup className="text-[7px] text-red-500">
                      <MdOutlineStarPurple500 />
                    </sup>
                  </div>
                  <select
                    name="holidayPolicy"
                    value={formData.holidayPolicy}
                    required
                    onChange={handleChange}
                    className="focus:outline-none px-1 text-[#0098F1] border border-[#0098F1] border-opacity-80 w-[280px] h-8 rounded-sm"
                  >
                    <option value="" disabled>
                      Select Policy
                    </option>
                    <option value="paid">Paid</option>
                    <option value="unpaid">Unpaid</option>
                    <option value="none">None</option>
                  </select>
                </div>

                <div className="flex-col gap-6 mb-4">
                  <div className="flex justify-start items-center gap-1 mb-2">
                    <label className="text-[#0098F1] font-semibold">
                      Attendance Source
                    </label>
                    <sup className="text-[7px] text-red-500">
                      <MdOutlineStarPurple500 />
                    </sup>
                  </div>
                  <select
                    name="attendanceSource"
                    value={formData.attendanceSource}
                    onChange={handleChange}
                    required
                    className="focus:outline-none px-1 text-[#0098F1] border border-[#0098F1] border-opacity-80 w-[280px] h-8 rounded-sm"
                  >
                    <option value="" disabled>
                      Select Source
                    </option>
                    <option value="biometric">Biometric</option>
                    <option value="manual">Manual</option>
                    <option value="system">System</option>
                  </select>
                </div>

                <div className="flex-col gap-6 mb-4">
                  <div className="flex justify-start items-center gap-1 mb-2">
                    <label className="text-[#0098F1] font-semibold">
                      Job Title
                    </label>
                    <sup className="text-[7px] text-red-500">
                      <MdOutlineStarPurple500 />
                    </sup>
                  </div>
                  <input
                    type="text"
                    name="jobTitle"
                    value={formData.jobTitle}
                    onChange={handleChange}
                    required
                    placeholder="Enter Job Title"
                    className="focus:outline-none px-1 text-[#0098F1] placeholder:p-2 placeholder:text-[#0098F1] placeholder:opacity-40 border border-[#0098F1] border-opacity-80 w-[280px] h-8 rounded-sm"
                  />
                </div>
                <div className="flex-col gap-6 mb-4">
                  <div className="flex justify-start items-center gap-1 mb-2">
                    <label className="text-[#0098F1] font-semibold">
                      Cost To Company (CTC)
                    </label>
                    <sup className="text-[7px] text-red-500">
                      <MdOutlineStarPurple500 />
                    </sup>
                  </div>
                  <input
                    type="text"
                    name="ctc"
                    value={formData.ctc}
                    required
                    onChange={handleChange}
                    placeholder="Enter CTC"
                    className="focus:outline-none px-1 text-[#0098F1] placeholder:p-2 placeholder:text-[#0098F1] placeholder:opacity-40 border border-[#0098F1] border-opacity-80 w-[280px] h-8 rounded-sm"
                  />
                </div>
                <div className="flex-col gap-6 mb-4">
                  <div className="flex justify-start items-center gap-1 mb-2">
                    <label className="text-[#0098F1] font-semibold">
                      Job Description
                    </label>
                    <sup className="text-[7px] text-red-500">
                      <MdOutlineStarPurple500 />
                    </sup>
                  </div>
                  <input
                    type="text"
                    name="jobDescription"
                    value={formData.jobDescription}
                    required
                    onChange={handleChange}
                    placeholder="Enter Job Description"
                    className="focus:outline-none px-1 text-[#0098F1] placeholder:p-2 placeholder:text-[#0098F1] placeholder:opacity-40 border border-[#0098F1] border-opacity-80 w-[280px] h-8 rounded-sm"
                  />
                </div>
                <div className="flex-col gap-6 mb-4">
                  <div className="flex justify-start items-center gap-1 mb-2">
                    <label className="text-[#0098F1] font-semibold">
                      Asset Description
                    </label>
                    <sup className="text-[7px] text-red-500">
                      <MdOutlineStarPurple500 />
                    </sup>
                  </div>
                  <input
                    type="text"
                    name="assetDescription"
                    value={formData.assetDescription}
                    onChange={handleChange}
                    placeholder="Enter Asset Description"
                    className="focus:outline-none px-1 text-[#0098F1] placeholder:p-2 placeholder:text-[#0098F1] placeholder:opacity-40 border border-[#0098F1] border-opacity-80 w-[280px] h-8 rounded-sm"
                    required
                  />
                </div>
                <div className="flex-col gap-6 mb-4">
                  <div className="flex justify-start items-center gap-1 mb-2">
                    <label className="text-[#0098F1] font-semibold">
                      Employee ID
                    </label>
                    <sup className="text-[7px] text-red-500">
                      <MdOutlineStarPurple500 />
                    </sup>
                  </div>
                  <input
                    type="text"
                    name="employeeID"
                    value={formData.employeeID}
                    onChange={handleChange}
                    placeholder="Enter Employee ID"
                    className="focus:outline-none px-1 text-[#0098F1] placeholder:p-2 placeholder:text-[#0098F1] placeholder:opacity-40 border border-[#0098F1] border-opacity-80 w-[280px] h-8 rounded-sm"
                  />
                </div>
              </div>
              <div className="flex w-full items-end justify-end gap-4">
                <button
                  className="bg-white text-[#0098F1] border border-[#0098F1] px-4 py-1 text-[20px]"
                  onClick={handleCancel}
                  type="button"
                >
                  Cancel
                </button>
                <button
                  className="bg-[#0098F1] text-white border border-[#0098F1] px-6 py-1 text-[21px]"
                  type="submit"
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
      {savedData.length > 0 && (
        <div className="">
          <div className=" overflow-x-scroll scrollbar-thin scrollbar-track-white scrollbar-thumb-[#0098f1] pt-4 mx-2ssssssssss">
            <table className="min-w-full divide-y divide-gray-200 w-screen overflow-x-scroll  text-nowrap">
              <thead className="bg-[#0098F1] text-white">
                <tr className="text-nowrap">
                  <th className="border p-2 font-semibold text-center px-3">
                    First Name
                  </th>
                  <th className="border p-2 font-semibold text-center px-3">
                    Last Name
                  </th>
                  <th className="border p-2 font-semibold text-center px-3">
                    Personal Email
                  </th>
                  <th className="border p-2 font-semibold text-center px-3">
                    Company Email
                  </th>
                  <th className="border p-2 font-semibold text-center px-3">
                    Est. Start Date
                  </th>
                  <th className="border p-2 font-semibold text-center px-3">
                    Department
                  </th>
                  <th className="border p-2 font-semibold text-center px-3">
                    Work Location
                  </th>
                  <th className="border p-2 font-semibold text-center px-3">
                    Employee Type
                  </th>
                  <th className="border p-2 font-semibold text-center px-3">
                    Shift
                  </th>
                  <th className="border p-2 font-semibold text-center px-3">
                    Work Schedule Policy
                  </th>
                  <th className="border p-2 font-semibold text-center px-3">
                    Holiday Policy
                  </th>
                  <th className="border p-2 font-semibold text-center px-3">
                    Attendance Source
                  </th>
                  <th className="border p-2 font-semibold text-center px-3">
                    Job Title
                  </th>
                  <th className="border p-2 font-semibold text-center px-3">
                    CTC
                  </th>
                  <th className="border p-2 font-semibold text-center px-3">
                    Job Description
                  </th>
                  <th className="border p-2 font-semibold text-center px-3">
                    Asset Description
                  </th>
                  <th className="border p-2 font-semibold text-center px-3">
                    Employee ID
                  </th>
                  <th className="border p-2 font-semibold text-center px-3">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {currentRecords.map((record, index) => (
                  <tr key={index}>
                    <td className="border p-2 text-center border-r-[#0098F1] border-b-[#0098F1] border-opacity-45">
                      {record.firstName}
                    </td>
                    <td className="border p-2 text-center border-r-[#0098F1] border-b-[#0098F1] border-opacity-45">
                      {record.lastName}
                    </td>
                    <td className="border p-2 text-center border-r-[#0098F1] border-b-[#0098F1] border-opacity-45">
                      {record.personalEmail}
                    </td>
                    <td className="border p-2 text-center border-r-[#0098F1] border-b-[#0098F1] border-opacity-45">
                      {record.companyEmail}
                    </td>
                    <td className="border p-2 text-center border-r-[#0098F1] border-b-[#0098F1] border-opacity-45">
                      {record.estStartDate}
                    </td>
                    <td className="border p-2 text-center border-r-[#0098F1] border-b-[#0098F1] border-opacity-45">
                      {record.department}
                    </td>
                    <td className="border p-2 text-center border-r-[#0098F1] border-b-[#0098F1] border-opacity-45">
                      {record.workLocation}
                    </td>
                    <td className="border p-2 text-center border-r-[#0098F1] border-b-[#0098F1] border-opacity-45">
                      {record.employeeType}
                    </td>
                    <td className="border p-2 text-center border-r-[#0098F1] border-b-[#0098F1] border-opacity-45">
                      {record.shift}
                    </td>
                    <td className="border p-2 text-center border-r-[#0098F1] border-b-[#0098F1] border-opacity-45">
                      {record.workSchedulePolicy}
                    </td>
                    <td className="border p-2 text-center border-r-[#0098F1] border-b-[#0098F1] border-opacity-45">
                      {record.holidayPolicy}
                    </td>
                    <td className="border p-2 text-center border-r-[#0098F1] border-b-[#0098F1] border-opacity-45">
                      {record.attendanceSource}
                    </td>
                    <td className="border p-2 text-center border-r-[#0098F1] border-b-[#0098F1] border-opacity-45">
                      {record.jobTitle}
                    </td>
                    <td className="border p-2 text-center border-r-[#0098F1] border-b-[#0098F1] border-opacity-45">
                      {record.ctc}
                    </td>
                    <td className="border p-2 text-center border-r-[#0098F1] border-b-[#0098F1] border-opacity-45">
                      {record.jobDescription}
                    </td>
                    <td className="border p-2 text-center border-r-[#0098F1] border-b-[#0098F1] border-opacity-45">
                      {record.assetDescription}
                    </td>
                    <td className="border p-2 text-center border-r-[#0098F1] border-b-[#0098F1] border-opacity-45">
                      {record.employeeID}
                    </td>
                    <td className="border px-6 py-4 text-center border-r-[#0098F1] border-b-[#0098F1] border-opacity-45 whitespace-nowrap text-sm font-medium">
                      <button
                        onClick={() => openEditModal(index)}
                        className="text-blue-600 hover:text-blue-900"
                      >
                        <FiEdit className="bg-[#2A8F4C] text-white rounded-md size-6 p-1" />
                      </button>
                      <button
                        onClick={() => openDeleteModal(index)}
                        className="ml-4 text-red-600 hover:text-red-900"
                      >
                        <FiTrash2 className="mr-1 bg-[#FF3636] text-white flex items-center size-6 p-1 rounded-md" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="flex justify-between gap-x-5 md:gap-x-0 items-center mt-4 mb-8">
            <div className="text-[12px] md:text-lg text-[#0098F1] ml-3">
              Total Records:{" "}
              <span className="font-semibold text-md text-[#0098F1]">
                {savedData.length}
              </span>
            </div>
            <div className="text-[#0098F1] text-[12px] md:text-lg font-normal">
              Page {currentPage} of {totalPages}
            </div>
            <div className="flex items-center gap-2 mr-3">
              <button
                onClick={handlePreviousPage}
                disabled={currentPage === 1}
                className="p-2 bg-[#0098F1] text-white rounded-full"
              >
                <FaAngleLeft />
              </button>
              <button
                onClick={handleNextPage}
                disabled={currentPage === totalPages}
                className="p-2 bg-[#0098F1] text-white rounded-full"
              >
                <FaAngleRight />
              </button>
            </div>
          </div>
        </div>
      )}
      {showSuccessMessage && (
        <div className="fixed bottom-0 right-0 m-4 p-4 bg-green-500 text-white rounded-lg">
          {editIndex !== null
            ? "Employee updated successfully!"
            : "Employee added successfully!"}
        </div>
      )}
      {showDeleteSuccessMessage && (
        <div className="fixed bottom-0 right-0 m-4 p-4 bg-red-500 text-white rounded-lg">
          Employee deleted successfully!
        </div>
      )}
      {isDeleteModalOpen && (
        <div className="fixed inset-0 bg-gray-400 px-5 md:px-0 bg-opacity-60 justify-center overflow-y-auto items-center flex">
          <div className="bg-white rounded-md p-8">
            <div className="font-semibold mb-4">
              Are you sure you want to delete this employee?
            </div>
            <div className="flex gap-4 justify-center">
              <button
                onClick={handleDelete}
                className="bg-red-500 text-white py-2 px-4 rounded-lg"
              >
                Delete
              </button>
              <button
                onClick={closeDeleteModal}
                className="bg-white border border-[#0098F1] text-[#0098F1] py-2 px-4 rounded-lg"
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

export default OnBoarding;
