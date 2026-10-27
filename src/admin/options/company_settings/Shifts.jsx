import React, { useState } from "react";
import { FaCirclePlus } from "react-icons/fa6";
import { GrCircleInformation } from "react-icons/gr";
import { CiCircleQuestion } from "react-icons/ci";
import { MdDeleteForever } from "react-icons/md";
import { IoMdChatboxes } from "react-icons/io";
import { AiFillEdit } from "react-icons/ai";
import { BsCheck2Circle } from "react-icons/bs";

function Shifts() {
  const [addNew, setAddNew] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [currentEditIndex, setCurrentEditIndex] = useState(null);
  const [activityList, setActivityList] = useState([]);

  const [shiftName, setShiftName] = useState("");
  const [description, setDescription] = useState("");
  const [hoursType, setHoursType] = useState("Daily");
  const [fullDayInTime, setFullDayInTime] = useState("09:00");
  const [fullDayoutTime, setFullDayOutTime] = useState("05:00");
  const [fullDayDuration, setFullDayDuration] = useState("");
  const [halfDayInTime, setHalfDayInTime] = useState("09:00");
  const [halfDayOutTime, setHalfDayOutTime] = useState("01:00");
  const [halfDayDuration, setHalfDayDuration] = useState("");
  const [isEnableSwitchSettings, setIsEnableSwitchSettings] = useState(false);
  const [errors, setErrors] = useState({});

  const [shiftList, setShiftList] = useState([]);

  const [showAddedModal, setShowAddedModal] = useState(false);
  const [showUpdatedModal, setShowUpdatedModal] = useState(false);

  const name = "Sathish Chiluveru";

  const getInitials = (fullName) => {
    const nameParts = fullName.split(" ");
    const firstNameInitial = nameParts[0][0];
    const lastNameInitial = nameParts.length > 1 ? nameParts[1][0] : "";
    return firstNameInitial + lastNameInitial;
  };

  const validateForm = () => {
    const newErrors = {};
    if (!shiftName.trim()) newErrors.shiftName = "Shift name is required!";
    if (!description.trim()) newErrors.description = "Description is required";
    if (!fullDayDuration.trim())
      newErrors.fullDayDuration = "Full day duration is required.";
    if (!halfDayDuration.trim())
      newErrors.halfDayDuration = "Half day duration is required.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const resetForm = () => {
    setShiftName("");
    setDescription("");
    setHoursType("Daily");
    setFullDayInTime("09:00");
    setFullDayOutTime("05:00");
    setFullDayDuration("");
    setHalfDayInTime("09:00");
    setHalfDayOutTime("01:00");
    setHalfDayDuration("");
    setIsEnableSwitchSettings(false);
    setErrors({});
    setIsEditing(false);
    setCurrentEditIndex(null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    const newShift = {
      shiftName,
      description,
      hoursType,
      fullDayInTime,
      fullDayoutTime,
      fullDayDuration,
      halfDayInTime,
      halfDayOutTime,
      halfDayDuration,
    };

    // Add a new shift
    setShiftList([...shiftList, newShift]);

    setAddNew(false);
    setShowAddedModal(true);
    setTimeout(() => {
      setShowAddedModal(false);
    }, 2000);
    resetForm();

    const activity = {
      shiftName,
      description,
      fullDayInTime,
      fullDayoutTime,
      fullDayDuration,
      halfDayInTime,
      halfDayOutTime,
      halfDayDuration,
    };
    setActivityList([...activityList, activity]);
  };

  const handleDelete = (index) => {
    const formattedData = shiftList.filter((each, i) => i !== index);
    setShiftList(formattedData);
  };

  const handleCancel = () => {
    setAddNew(false);
    resetForm();
  };

  const handleEdit = (index) => {
    const shiftToEdit = shiftList[index];
    setShiftName(shiftToEdit.shiftName);
    setDescription(shiftToEdit.description);
    setHoursType(shiftToEdit.hoursType);
    setFullDayInTime(shiftToEdit.fullDayInTime);
    setFullDayOutTime(shiftToEdit.fullDayoutTime);
    setFullDayDuration(shiftToEdit.fullDayDuration);
    setHalfDayInTime(shiftToEdit.halfDayInTime);
    setHalfDayOutTime(shiftToEdit.halfDayOutTime);
    setHalfDayDuration(shiftToEdit.halfDayDuration);
    setIsEnableSwitchSettings(false);

    setAddNew(true);
    setIsEditing(true);
    setCurrentEditIndex(index);
  };

  const handleUpdate = () => {
    if (!validateForm()) return;

    const updatedShift = {
      shiftName,
      description,
      hoursType,
      fullDayInTime,
      fullDayoutTime,
      fullDayDuration,
      halfDayInTime,
      halfDayOutTime,
      halfDayDuration,
    };

    const shiftToEdit = shiftList[currentEditIndex];
    const updatedFields = {};

    Object.keys(updatedShift).forEach((key) => {
      if (updatedShift[key] !== shiftToEdit[key]) {
        updatedFields[key] = updatedShift[key];
      }
    });

    if (Object.keys(updatedFields).length > 0) {
      const updatedShiftList = [...shiftList];
      updatedShiftList[currentEditIndex] = updatedShift;
      setShiftList(updatedShiftList);

      // Log activity with updated fields only
      setActivityList([
        ...activityList,
        {
          shiftName,
          updatedFields, // Include only the updated fields
        },
      ]);
    }

    setIsEditing(false);
    setShowUpdatedModal(true);
    setTimeout(() => {
      setShowUpdatedModal(false);
    }, 2000);
    setAddNew(false);

    resetForm();
  };

  return (
    <div className="p-4 min-h-screen">
      <div className="flex gap-x-2">
        <button
          className="flex items-center gap-x-1 bg-[#E65F2B] p-2 px-3 rounded-lg text-white"
          onClick={() => setAddNew(true)}
        >
          <FaCirclePlus />
          <span className="text-lg ">Add New</span>
        </button>
        <button className="flex items-center gap-x-1 text-[#E65F2B]">
          <GrCircleInformation className="text-sm" />
          <span className="text-lg font-semibold">info</span>
        </button>
      </div>

      <div className="  overflow-x-scroll scrollbar-thin   scrollbar-track-white scrollbar-thumb-[#e65f2b] pt-4 mx-4">
        <table className="min-w-full w-screen overflow-x-scroll  text-nowrap">
          <thead className="">
            <tr>
              <th className="py-3 border-r border-white bg-[#E65F2B] text-white">
                Shift Name
              </th>
              <th className="py-3 border-r border-white bg-[#E65F2B] text-white">
                In Time
              </th>
              <th className="py-3 border-r border-white bg-[#E65F2B] text-white">
                Out Time
              </th>
              <th className="py-3 border-r border-white bg-[#E65F2B] text-white">
                Description
              </th>
              <th className="py-3 border-r border-white bg-[#E65F2B] text-white">
                Employee Count
              </th>
              <th className="py-3 border-r border-white bg-[#E65F2B] text-white">
                Status
              </th>
              <th className="py-3 bg-[#E65F2B] text-white">Action</th>
            </tr>
          </thead>
          <tbody>
            {shiftList.length === 0 ? (
              <tr>
                <td
                  colSpan="7"
                  className="text-center text-[#E65F2B] font-semibold"
                >
                  No Data Found
                </td>
              </tr>
            ) : (
              shiftList.map((shift, index) => (
                <tr key={index} className="text-center">
                  <td className="border-r border-white">{shift.shiftName}</td>
                  <td className="border-r border-white">
                    {shift.fullDayInTime}
                  </td>
                  <td className="border-r border-white">
                    {shift.fullDayoutTime}
                  </td>
                  <td className="border-r border-white">{shift.description}</td>
                  <td className="border-r border-white">1</td>
                  <td className="border-r border-white">Active</td>
                  <td className="space-x-2">
                    <button type="button" onClick={() => handleDelete(index)}>
                      <MdDeleteForever className="text-[#E65F2B]" size={20} />
                    </button>
                    <button type="button" onClick={() => handleEdit(index)}>
                      <AiFillEdit className="text-[#E65F2B]" size={20} />
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {addNew && (
        <div className="fixed inset-0 z-10 flex justify-center items-center bg-orange-100 bg-opacity-50  ">
          <div className="bg-white  p-3  border border-gray-500 w-64 md:w-2/5 max-h-[85vh] md:max-h-[95vh] overflow-x-auto md:overflow-y-auto scrollbar-track-white scrollbar-thumb-[#E65F2B] scrollbar-thin">
            <h1 className="text-[#E65F2B] font-bold">
              {isEditing ? "Edit Shift" : "Add Shift"}
            </h1>
            <form action="" className="flex flex-col gap-y-4">
              <div className="ml-20 space-x-2">
                <label htmlFor="shiftName" className="text-[#E65F2B] text-sm">
                  Shift Name *
                </label>
                <input
                  type="text"
                  id="shiftName"
                  className="w-56 bg-orange-50 outline-none border border-[#E65F2B] rounded-md text-xs pl-2 py-3 "
                  placeholder="Shift Name"
                  onChange={(e) => setShiftName(e.target.value)}
                  value={shiftName}
                />
                {errors.shiftName && (
                  <p className="text-black text-xs mt-1 pl-20">
                    {errors.shiftName}
                  </p>
                )}
              </div>
              <div className="ml-20 space-x-4">
                <label htmlFor="description" className="text-[#E65F2B] text-sm">
                  Description
                </label>
                <input
                  type="text"
                  id="description"
                  className="w-56 bg-orange-50 outline-none border border-[#E65F2B] rounded-md text-xs pl-2 py-3 "
                  placeholder="Description"
                  onChange={(e) => setDescription(e.target.value)}
                  value={description}
                />
                {errors.description && (
                  <p className="text-black text-xs mt-1 pl-20">
                    {errors.description}
                  </p>
                )}
              </div>
              <div className="ml-16 space-x-2 flex">
                <label
                  htmlFor=""
                  className="text-[#E65F2B] text-sm flex items-center gap-x-1"
                >
                  Hours Type
                  <CiCircleQuestion className="text-xs cursor-pointer" /> *
                </label>
                <div className="space-x-3">
                  <button
                    type="button"
                    onClick={() => setHoursType("Daily")}
                    className={`font-semibold text-sm p-1 w-20  rounded-md ${
                      hoursType === "Daily"
                        ? "bg-gradient-to-r from-[#E65F2B] to-[#FFC252] text-white"
                        : "border border-[#E65F2B] text-[#E65F2B]"
                    }`}
                  >
                    Daily
                  </button>
                  <button
                    type="button"
                    onClick={() => setHoursType("Monthly")}
                    className={`font-semibold text-sm p-1 w-20  rounded-md ${
                      hoursType === "Monthly"
                        ? "bg-gradient-to-r from-[#E65F2B] to-[#FFC252] text-white"
                        : "border border-[#E65F2B] text-[#E65F2B]"
                    }`}
                  >
                    Monthly
                  </button>
                </div>
              </div>
              <h1 className="ml-20 text-[#E65F2B] font-semibold text-sm">
                Shift Timing
              </h1>
              <div className="ml-12 flex gap-x-3">
                <label className="text-[#E65F2B] text-sm flex items-center gap-x-1">
                  Full Day In Time *
                </label>
                <input
                  type="time"
                  value={fullDayInTime}
                  onChange={(e) => setFullDayInTime(e.target.value)}
                  className="w-56 border border-[#E65F2B] outline-none px-3 rounded-md bg-orange-50"
                />
              </div>
              <div className="ml-9 flex gap-x-3">
                <label className="text-[#E65F2B] text-sm flex items-center gap-x-1">
                  Full Day Out Time *
                </label>
                <input
                  type="time"
                  value={fullDayoutTime}
                  onChange={(e) => setFullDayOutTime(e.target.value)}
                  className="w-56 border border-[#E65F2B] outline-none px-3 rounded-md bg-orange-50"
                />
              </div>
              <div className="ml-20 ">
                <div className="flex gap-x-3">
                  <label className="text-[#E65F2B] text-sm flex items-center gap-x-1">
                    Full Day
                    <CiCircleQuestion className="text-xs cursor-pointer" /> *
                  </label>
                  <div className="w-56 flex border border-[#E65F2B] rounded-md bg-orange-50">
                    <input
                      type="text"
                      placeholder="Full Day Work Duration"
                      onChange={(e) => setFullDayDuration(e.target.value)}
                      value={fullDayDuration}
                      className="w-52 bg-orange-50 outline-none border-r border-[#E65F2B] px-2 rounded-l-md text-xs"
                    />
                    <p className="px-2">Hours</p>
                  </div>
                </div>

                {errors.fullDayDuration && (
                  <p className="text-black text-xs mt-1 ml-24">
                    {errors.fullDayDuration}
                  </p>
                )}
              </div>

              <div className="ml-12 flex gap-x-3">
                <label className="text-[#E65F2B] text-sm flex items-center gap-x-1">
                  Half Day In Time *
                </label>
                <input
                  type="time"
                  value={halfDayInTime}
                  onChange={(e) => setHalfDayInTime(e.target.value)}
                  className="w-56 border border-[#E65F2B] outline-none px-3 rounded-md bg-orange-50"
                />
              </div>
              <div className=" ml-9 flex gap-x-3">
                <label className="text-[#E65F2B] text-sm flex items-center gap-x-1">
                  Half Day Out Time *
                </label>
                <input
                  type="time"
                  value={halfDayOutTime}
                  onChange={(e) => setHalfDayOutTime(e.target.value)}
                  className="w-56 border border-[#E65F2B] outline-none px-3 rounded-md bg-orange-50"
                />
              </div>
              <div className="ml-20 ">
                <div className="flex gap-x-3">
                  <label className="text-[#E65F2B] text-sm flex items-center gap-x-1">
                    Half Day
                    <CiCircleQuestion className="text-xs cursor-pointer" /> *
                  </label>
                  <div className="w-56 flex border border-[#E65F2B] rounded-md bg-orange-50">
                    <input
                      type="text"
                      placeholder="Half Day Work Duration"
                      onChange={(e) => setHalfDayDuration(e.target.value)}
                      value={halfDayDuration}
                      className="w-52 bg-orange-50 outline-none border-r border-[#E65F2B] px-2 rounded-l-md text-xs"
                    />
                    <button className="px-2">Hours</button>
                  </div>
                </div>

                {errors.halfDayDuration && (
                  <p className="text-black text-xs mt-1 ml-24">
                    {errors.halfDayDuration}
                  </p>
                )}
              </div>

              <div className="flex gap-x-3">
                <h1 className="text-[#E65F2B] font-semibold ">
                  Enable Custom Settings
                </h1>
                <div className="mr-10">
                  <div
                    className={`  h-6 w-16 rounded-full cursor-pointer p-1 flex items-center ${
                      isEnableSwitchSettings
                        ? "bg-gradient-to-r from-[#E65F2B] to-[#FFC252]"
                        : "bg-black"
                    } `}
                    onClick={() =>
                      setIsEnableSwitchSettings(!isEnableSwitchSettings)
                    }
                  >
                    <div
                      className={`w-4 h-4 rounded-full bg-white duration-300 ${
                        isEnableSwitchSettings
                          ? "translate-x-10"
                          : "translate-x-0"
                      }`}
                    ></div>
                  </div>
                </div>
              </div>

              {isEnableSwitchSettings ? (
                <div className="grid grid-cols-2 gap-5 ">
                  <div className="flex items-center gap-x-5">
                    <label
                      htmlFor=""
                      className="flex items-center gap-1 text-[#E65F2B]"
                    >
                      In Time Settings <CiCircleQuestion />
                    </label>
                    <input type="checkbox" className="w-6 h-6" />
                  </div>
                  <div className="flex items-center gap-x-8">
                    <label
                      htmlFor=""
                      className="flex items-center gap-1 text-[#E65F2B]"
                    >
                      Out Time Settings <CiCircleQuestion />
                    </label>
                    <input type="checkbox" className="w-6 h-6" />
                  </div>
                  <div className="flex items-center gap-x-4">
                    <label
                      htmlFor=""
                      className="flex items-center gap-1 text-[#E65F2B]"
                    >
                      Overtime Enable <CiCircleQuestion />
                    </label>
                    <input type="checkbox" className="w-6 h-6" />
                  </div>
                  <div className="flex items-center gap-x-4">
                    <label
                      htmlFor=""
                      className="flex items-center gap-1 text-[#E65F2B]"
                    >
                      Grace Time Settings <CiCircleQuestion />
                    </label>
                    <input type="checkbox" className="w-6 h-6" />
                  </div>
                </div>
              ) : (
                ""
              )}

              <div className="flex justify-end space-x-5 mt-3">
                {isEditing ? (
                  <button
                    type="button"
                    onClick={handleUpdate}
                    className="text-white font-semibold text-sm bg-gradient-to-r from-[#E65F2B] to-[#FFC252] p-1 w-20  rounded-md"
                  >
                    Update
                  </button>
                ) : (
                  <button
                    type="submit"
                    onClick={handleSubmit}
                    className="text-white font-semibold text-sm bg-gradient-to-r from-[#E65F2B] to-[#FFC252] p-1 w-20  rounded-md"
                  >
                    Sumbit
                  </button>
                )}

                <button
                  type="button"
                  onClick={handleCancel}
                  className=" text-[#E65F2B] text-sm border border-[#E65F2B] p-1 w-20 rounded-md"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {showAddedModal && (
        <div className="fixed inset-0 left-16 flex justify-center items-center bg-orange-100 bg-opacity-50">
          <div className="bg-gradient-to-b from-[#E65F2B] to-[#FFC252] p-3 rounded-lg shadow-lg md:w-[300px] flex flex-col items-center gap-3 ">
            <BsCheck2Circle className="text-white text-2xl md:text-5xl" />
            <div className="flex flex-col items-center font-semibold text-white">
              <h1>Employee Add Shift added</h1>
              <h1>Successfully</h1>
            </div>
          </div>
        </div>
      )}

      {showUpdatedModal && (
        <div className="fixed inset-0 left-16 flex justify-center items-center bg-orange-100 bg-opacity-50">
          <div className="bg-gradient-to-b from-[#E65F2B] to-[#FFC252] p-3 rounded-lg shadow-lg md:w-[300px] flex flex-col items-center gap-3">
            <BsCheck2Circle className="text-white text-2xl md:text-5xl" />
            <div className="flex flex-col items-center font-semibold text-white">
              <h1>Employee Updated</h1>
              <h1>Successfully</h1>
            </div>
          </div>
        </div>
      )}

      <div className="my-3 mt-6">
        <h1 className="flex gap-x-2 text-[#E65F2B] font-semibold border-b border-[#E65F2B] pb-1">
          <IoMdChatboxes size={30} />
          Activity
        </h1>
        <ul className="my-5">
          {activityList.length === 0 ? (
            <p className="text-[#E65F2B] font-bold text-center -mt-4">
              No Recent Activities
            </p>
          ) : (
            activityList.map((each, index) => (
              <li key={index} className="flex gap-x-3 my-3">
                <div className="mt-1">
                  <div className="h-10 w-10 bg-[#FFC252] flex justify-center items-center rounded-full">
                    <h1 className="text-xl">{getInitials(name)}</h1>
                  </div>
                </div>
                <div className="text-xs">
                  <strong>{name}</strong>
                  {each.updatedFields ? (
                    <p>
                      <strong>{each.shiftName}</strong> with changes
                    </p>
                  ) : (
                    <p>
                      <strong>Added new shift</strong> -{" "}
                      <span className="text-[#E65F2B] font-bold">
                        {each.shiftName}
                      </span>
                    </p>
                  )}
                  {each.updatedFields && (
                    <ul>
                      {Object.keys(each.updatedFields).map((field, i) => (
                        <li key={i}>
                          <strong>{field}:</strong> {each.updatedFields[field]}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </li>
            ))
          )}
        </ul>
      </div>
    </div>
  );
}

export default Shifts;
