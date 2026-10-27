import React, { useState } from "react";
import { BiSolidChat, BiSolidEdit } from "react-icons/bi";
import { IoAddCircleOutline } from "react-icons/io5";
import { BsCheck2Circle } from "react-icons/bs";
const initialData = [
  {
    id: 1,
    policyName: "General Policy",
    policyDescription: "General Policy",
    status: "Active",
  },
];

const LeaveType = () => {
  return (
    <div>
      <p className="text-[#E65F2B] mt-10 ml-4 text-wrap">
        Here you can add and configure leave types for the employees.{" "}
        <a className="text-blue-600">Click here</a> to subscribe to Leave
        Management Service.
      </p>
    </div>
  );
};

const LeavePolicies = () => {
  return (
    <div>
      <p className="text-[#E65F2B] mt-10 ml-4 text-wrap">
        Here you can add and configure leave policies for the employees.{" "}
        <a className="text-blue-600">Click here</a> to subscribe to Leave
        Management Service.
      </p>
    </div>
  );
};

const EmailNotification = () => {
  return (
    <div>
      <p className="text-[#E65F2B] mt-10 ml-4 text-wrap">
        Here you can add and configure email notifications for leave requests.{" "}
        <a className="text-blue-600">Click here</a> to subscribe to Leave
        Management Service.
      </p>
    </div>
  );
};

const HolidayPolicies = ({ setActivities, activities }) => {
  const [openNewEdit, setOpenNewEdit] = useState(false);
  const [editData, setEditData] = useState(null);
  const [data, setData] = useState(initialData);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const newEdit = () => {
    setEditData({ policyName: "", policyDescription: "", status: "Active" });
    setOpenNewEdit(true);
  };

  const closeEdit = () => {
    setOpenNewEdit(false);
  };

  const saveData = () => {
    if (editData) {
      if (editData.id) {
        setData(
          data.map((item) =>
            item.id === editData.id ? { ...item, ...editData } : item
          )
        );
        const editActivity = {
          id: Date.now(),
          description: `Edited policy: ${editData.policyName} - ${editData.policyDescription} - Status: ${editData.status}`,
          timestamp: new Date().toLocaleString(),
        };
        setActivities([...activities, editActivity]);
      } else {
        const newPolicy = {
          id: Date.now(),
          ...editData,
        };
        setData([...data, newPolicy]);

        // Log new activity
        const newActivity = {
          id: Date.now(),
          description: `Added new policy: ${editData.policyName} - ${editData.policyDescription}`,
          timestamp: new Date().toLocaleString(),
        };
        setActivities([...activities, newActivity]);
      }
      setOpenNewEdit(false);
      setEditData(null);
      showTemporarySuccessMessage(
        `${
          editData && editData.id
            ? "Employee type Edited successfully!"
            : "Employee type Added successfully!"
        }`
      );
    }
  };

  // Handle input change for the new/edit form
  const handleInputChange = (e) => {
    setEditData({ ...editData, [e.target.name]: e.target.value });
  };

  // Handle status change
  const handleStatusChange = (e) => {
    setEditData({ ...editData, status: e.target.value });
  };
  const showTemporarySuccessMessage = (message) => {
    setSuccessMessage(message);
    setShowSuccessMessage(true);
    setTimeout(() => {
      setShowSuccessMessage(false);
    }, 3000);
  };
  return (
    <div className="p-4 ">
      <div className="justify-end flex mr-9 mb-3">
        <div
          className="flex items-center gap-1 text-[17px] font-semibold bg-[#E65F2B]  text-white w-[120px] mb-2 rounded-lg pl-2 py-2 cursor-pointer"
          onClick={newEdit}
        >
          <IoAddCircleOutline className="text-[24px]" /> Add New
        </div>
      </div>
      <div className="flex justify-center">
        <table className="border border-x w-full mx-auto border-y border-[#E65F2B] border-opacity-35">
          <thead>
            <tr className="border-b border-[#E65F2B] border-opacity-35">
              <th className="text-[#E65F2B] font-semibold text-lg">
                Policy Name
              </th>
              <th className="text-[#E65F2B] font-semibold text-lg">
                Policy Description
              </th>
              <th className="text-[#E65F2B] font-semibold text-lg">Status</th>
              <th className="text-[#E65F2B] font-semibold text-lg">Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((newdata) => (
              <tr key={newdata.id}>
                <td className="text-[#E65F2B] text-center">
                  {newdata.policyName}
                </td>
                <td className="text-[#E65F2B] text-center">
                  {newdata.policyDescription}
                </td>
                <td className="text-[#E65F2B] text-center">{newdata.status}</td>
                <td
                  className="text-[#E65F2B] justify-center flex text-[20px] cursor-pointer"
                  onClick={() => {
                    setEditData(newdata);
                    setOpenNewEdit(true);
                  }}
                >
                  <BiSolidEdit />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {openNewEdit && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-lg shadow-lg w-[600px]">
              <h3 className="text-xl font-semibold text-[#E65F2B] mb-10">
                {editData && editData.id
                  ? "Edit Holiday Policy"
                  : "Add New Holiday Policy"}
              </h3>
              <div className="flex flex-col justify-center items-center gap-y-4">
                <div className="flex justify-evenly items-center">
                  <div className="text-[#E65F2B] text-xl ml-12 font-normal">
                    Holiday Policy Name
                  </div>
                  <div className="ml-6">
                    <input
                      name="policyName"
                      value={editData?.policyName || ""}
                      onChange={handleInputChange}
                      className="border border-[#E65F2B] placeholder:px-2 py-1 px-2 focus:outline-none rounded-lg text-[#E65F2B]"
                      placeholder="Enter Policy Name"
                    />
                  </div>
                </div>
                <div className="flex justify-evenly items-center">
                  <div className="text-[#E65F2B] text-xl font-normal">
                    Holiday Policy Description
                  </div>
                  <div className="ml-6">
                    <input
                      name="policyDescription"
                      value={editData?.policyDescription || ""}
                      onChange={handleInputChange}
                      className="border border-[#E65F2B] placeholder:px-2 py-1 px-2 focus:outline-none rounded-lg text-[#E65F2B]"
                      placeholder="Enter Policy Description"
                    />
                  </div>
                </div>
                <div className="flex justify-evenly items-center">
                  <div className="text-[#E65F2B] text-xl font-normal">
                    Status
                  </div>
                  <div className="ml-6">
                    <select
                      name="status"
                      value={editData?.status || "Active"}
                      onChange={handleStatusChange}
                      className="border border-[#E65F2B] py-1 px-2 rounded-lg text-[#E65F2B]"
                    >
                      <option value="Active">Active</option>
                      <option value="Inactive">Inactive</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="mt-[40px] mb-[15px] flex justify-end items-center gap-5">
                <button
                  onClick={saveData}
                  className="bg-gradient-to-r border border-t-[#E65F2B] rounded-md border-b-[#FFC252] border-x-[#E65F2B] from-[#E65F2B] to-[#FFC252] px-8 py-2 text-white font-normal"
                >
                  Save
                </button>
                <button
                  onClick={closeEdit}
                  className="px-6 py-2 text-[#E65F2B] border border-t-[#E65F2B] rounded-md border-b-[#FFC252] border-x-[#E65F2B] font-normal"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
      {showSuccessMessage && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 w-auto h-full flex justify-center items-center ">
          <div className="text-white bg-gradient-to-b from-[#E65F2B] to-[#FFC252]  w-[320px] h-[240px] py-8 px-4 sm:py-10 sm:px-16 rounded-lg  flex flex-col justify-center items-center relative">
            <BsCheck2Circle className="text-6xl text-white  mb-4" />
            {successMessage}
          </div>
        </div>
      )}
    </div>
  );
};

const Activity = ({ activities }) => {
  const sortedActivities = [...activities].sort(
    (a, b) => new Date(b.timestamp) - new Date(a.timestamp)
  );

  return (
    <div className="mt-[70px] ">
      <div className="flex items-center gap-1 mb-3 border-b border-b-[#E65F2B]">
        <BiSolidChat className="text-[#E65F2B] text-[24px]" />
        <div className="text-[#E65F2B] text-lg">Activity</div>
      </div>
      <div className="p-4 ">
        {sortedActivities.length > 0 ? (
          sortedActivities.map((activity) => (
            <div
              key={activity.id}
              className="mb-4 p-2 border-b border-[#E65F2B] border-opacity-30"
            >
              <p className="text-[#E65F2B]">{activity.description}</p>
              <span className=" text-sm">{activity.timestamp}</span>
            </div>
          ))
        ) : (
          <div className="">No activities found.</div>
        )}
      </div>
    </div>
  );
};

const Leaves_HolidaysPolicy = () => {
  const [openTab, setOpenTab] = useState(1);
  const [activities, setActivities] = useState([]);

  const activeClasses = "decoration-2 text-white";
  const inactiveClasses = "";

  return (
    <div>
      <div className="flex p-4">
        <ul className="flex-col space-y-2 text-[#E65F2B]  rounded-md  border-[#E65F2B]">
          <li
            onClick={() => setOpenTab(1)}
            className={`flex justify-center  px-2 items-center w-60 h-12 ${
              openTab === 1
                ? "bg-gradient-to-r rounded-lg  from-[#E65F2B] to-[#FFC252] rounded-l-md"
                : "bg-white  rounded-lg text-[#e65f2b]"
            } transition-colors duration-300 cursor-pointer`}
          >
            <a
              href="#"
              className={` ${openTab === 1 ? activeClasses : inactiveClasses}`}
            >
              Leave Types
            </a>
          </li>
          <li
            onClick={() => setOpenTab(2)}
            className={`flex justify-center px-2 items-center w-60 h-12 ${
              openTab === 2
                ? "bg-gradient-to-r rounded-lg from-[#E65F2B] to-[#FFC252] rounded-l-md"
                : "bg-white  rounded-lg text-[#e65f2b]"
            } transition-colors duration-300 cursor-pointer`}
          >
            <a
              href="#"
              className={` ${openTab === 2 ? activeClasses : inactiveClasses}`}
            >
              Leave Policies
            </a>
          </li>
          <li
            onClick={() => setOpenTab(3)}
            className={`flex justify-center px-2 items-center w-60 h-12 ${
              openTab === 3
                ? "bg-gradient-to-r rounded-lg from-[#E65F2B] to-[#FFC252] rounded-l-md"
                : "bg-white  rounded-lg text-[#e65f2b]"
            } transition-colors duration-300 cursor-pointer`}
          >
            <a
              href="#"
              className={`${openTab === 3 ? activeClasses : inactiveClasses}`}
            >
              Leave Email Notification
            </a>
          </li>
          <li
            onClick={() => setOpenTab(4)}
            className={`flex justify-center px-2 items-center w-60 h-12 ${
              openTab === 4
                ? "bg-gradient-to-r rounded-lg from-[#E65F2B] to-[#FFC252] rounded-l-md"
                : "bg-white  rounded-lg text-[#e65f2b]"
            } transition-colors duration-300 cursor-pointer`}
          >
            <a
              href="#"
              className={`${openTab === 4 ? activeClasses : inactiveClasses}`}
            >
              Holiday Policies
            </a>
          </li>
        </ul>
        <div className="flex flex-col flex-grow p-4">
          <div className="flex-grow">
            {openTab === 1 && <LeaveType />}
            {openTab === 2 && <LeavePolicies />}
            {openTab === 3 && <EmailNotification />}
            {openTab === 4 && (
              <HolidayPolicies
                setActivities={setActivities}
                activities={activities}
              />
            )}
          </div>
        </div>
      </div>
      <Activity activities={activities} />
    </div>
  );
};

export default Leaves_HolidaysPolicy;
