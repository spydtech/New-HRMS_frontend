import React, { useState } from "react";
import { FaPlus, FaEdit } from "react-icons/fa";
import { CiCircleInfo } from "react-icons/ci";
import { TiMessages } from "react-icons/ti";

// Dummy data
const initialData = [
  {
    id: 1,
    policyName: "Schedule A",
    description: "Description for Schedule A",
    employeeCount: 10,
    status: "Active",
    workSchedule: {
      sun: true,
      mon: true,
      tue: true,
      wed: true,
      thu: true,
      fri: true,
      sat: false,
    },
  },
  {
    id: 2,
    policyName: "Schedule B",
    description: "Description for Schedule B",
    employeeCount: 8,
    status: "Inactive",
    workSchedule: {
      sun: false,
      mon: true,
      tue: true,
      wed: false,
      thu: true,
      fri: true,
      sat: true,
    },
  },
  // Add more rows as needed
];

function WorkShedule() {
  const [data, setData] = useState(initialData);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [currentPolicy, setCurrentPolicy] = useState(null);

  const colors = ["#E65F2B", "#4A90E2", "#FFC700"];
  const [currentColorIndex, setCurrentColorIndex] = useState(0);

  // Function to toggle modal visibility
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  // Function to handle adding a new policy
  const handleAddNew = () => {
    setIsEditing(false);
    setCurrentPolicy(null);
    toggleModal();
  };

  // Function to handle editing an existing policy
  const handleEdit = (policy) => {
    setIsEditing(true);
    setCurrentPolicy(policy);
    toggleModal();
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const newPolicy = {
      id: currentPolicy ? currentPolicy.id : data.length + 1,
      policyName: formData.get("policyName"),
      description: formData.get("description"),
      employeeCount: currentPolicy ? currentPolicy.employeeCount : 0, // Assuming employee count isn't editable here
      status: currentPolicy ? currentPolicy.status : "Active", // Default to Active for new policies
      workSchedule: {
        sun: formData.get("sun") === "on",
        mon: formData.get("mon") === "on",
        tue: formData.get("tue") === "on",
        wed: formData.get("wed") === "on",
        thu: formData.get("thu") === "on",
        fri: formData.get("fri") === "on",
        sat: formData.get("sat") === "on",
      },
    };

    if (isEditing) {
      // Update existing policy
      setData(
        data.map((item) => (item.id === currentPolicy.id ? newPolicy : item))
      );
    } else {
      // Add new policy
      setData([...data, newPolicy]);
    }

    toggleModal();
  };

  // Handle checkbox change and cycle colors
  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    const nextColorIndex = (currentColorIndex + 1) % colors.length;
    setCurrentColorIndex(nextColorIndex);
    setData(
      data.map((item) =>
        item.id === currentPolicy.id
          ? {
              ...item,
              workSchedule: { ...item.workSchedule, [name]: checked },
            }
          : item
      )
    );
  };

  return (
    <div className="p-4 min-h-screen">
      <div className="flex justify-end items-center mb-3">
        <p className="flex items-center text-xl text-[#E65F2B] mr-3">
          <CiCircleInfo className="text-[#E65F2B] text-xl mr-2" />
          Info
        </p>

        <button
          onClick={handleAddNew}
          className="bg-[#E65F2B]  text-white p-3 rounded-lg flex items-center gap-2 shadow-lg hover:shadow-xl transition-shadow"
        >
          <FaPlus className="text-lg" />
          Add New
        </button>
      </div>

      <div className="  overflow-x-scroll scrollbar-thin   scrollbar-track-white scrollbar-thumb-[#e65f2b] pt-4 mx-4">
        <table className="min-w-full w-screen overflow-x-scroll  text-nowrap">
          <thead>
            <tr>
              <th className="bg-[#E65F2B]  text-white font-semibold py-3 px-6 text-left">
                Work Schedule Policy Name
              </th>
              <th className="bg-[#E65F2B]  text-white font-semibold py-3 px-6 text-left">
                Work Schedule Description
              </th>
              <th className="bg-[#E65F2B]  text-white font-semibold py-3 px-6 text-left">
                Employee Count
              </th>
              <th className="bg-[#E65F2B]  text-white font-semibold py-3 px-6 text-left">
                Status
              </th>
              <th className="bg-[#E65F2B]  text-white font-semibold py-3 px-6 text-left">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item.id}>
                <td className="py-2 px-4  text-[#E65F2B]">{item.policyName}</td>
                <td className="py-2 px-4  text-[#E65F2B]">
                  {item.description}
                </td>
                <td className="py-2 px-4  text-[#E65F2B]">
                  {item.employeeCount}
                </td>
                <td className="py-2 px-4  text-[#E65F2B]">{item.status}</td>
                <td className="py-2 px-4 ">
                  <button
                    onClick={() => handleEdit(item)}
                    className="text-blue-500 hover:text-blue-700"
                  >
                    <FaEdit className="ml-2" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-10">
        <div className="flex px-4 items-center">
          <TiMessages className="w-6 text-[#e65f2b] h-6" />
          <p className="pl-1 font-medium text-lg text-[#e65f2b]">Activity</p>
        </div>
        <hr className="border border-[#e65f2b]" />
        <div className="flex items-center justify-center mt-4">
          <p className="text-[#e65f2b]">No recent activities.</p>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white p-6 md:p-8 rounded-lg shadow-lg max-w-lg w-full">
            <h2 className="text-2xl font-bold mb-6">
              {isEditing ? "Edit Work Schedule " : "Add Work Schedule "}
            </h2>

            {/* Form */}
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label
                  className="block text-[#E65F2B] text-sm font-bold mb-2"
                  htmlFor="policyName"
                >
                  Work Schedule
                </label>
                <input
                  id="policyName"
                  name="policyName"
                  type="text"
                  defaultValue={isEditing ? currentPolicy.policyName : ""}
                  className="shadow appearance-none border-2 border-[#E65F2B] rounded w-full py-2 px-3 text-gray-700 leading-tight placeholder:text-[#E65F2B] focus:outline-none focus:shadow-outline"
                  placeholder="Work Schedule Policy Name"
                  required
                />
              </div>

              <div className="mb-4">
                <label
                  className="block text-[#E65F2B] text-sm font-bold mb-2"
                  htmlFor="description"
                >
                  Description
                </label>
                <textarea
                  id="description"
                  name="description"
                  defaultValue={isEditing ? currentPolicy.description : ""}
                  className="shadow appearance-none placeholder:text-[#E65F2B] rounded w-full py-2 px-3 text-gray-700 leading-tight border-2 border-[#E65F2B] focus:outline-none focus:shadow-outline"
                  placeholder="Description"
                />
              </div>

              <div className="mb-4">
                <label className="block text-[#E65F2B] text-sm font-bold mb-2">
                  Work Schedule
                </label>
                <div className="grid grid-cols-7 gap-2">
                  {["sun", "mon", "tue", "wed", "thu", "fri", "sat"].map(
                    (day) => (
                      <label
                        key={day}
                        className={`flex items-center justify-center border rounded-lg p-2 ${
                          currentColorIndex === 0
                            ? "bg-[#E65F2B]"
                            : "bg-[#FFC252]"
                        }`}
                      >
                        <input
                          type="checkbox"
                          name={day}
                          defaultChecked={
                            isEditing ? currentPolicy.workSchedule[day] : false
                          }
                          onChange={handleCheckboxChange}
                          className="hidden"
                        />
                        <span className="text-white capitalize">{day}</span>
                      </label>
                    )
                  )}
                </div>
              </div>

              <div className="flex items-center justify-between mt-4">
                <button
                  type="button"
                  onClick={toggleModal}
                  className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-[#E65F2B] hover:bg-[#FFC252] text-white font-bold py-2 px-4 rounded"
                >
                  {isEditing ? "Save Changes" : "Add Policy"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default WorkShedule;
