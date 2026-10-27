import React, { useState } from "react";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { AiFillEdit, AiFillDelete } from "react-icons/ai"; // Import React Icons

const statesInIndia = [
  "Andhra Pradesh",
  "Arunachal Pradesh",
  "Assam",
  "Bihar",
  "Chhattisgarh",
  "Goa",
  "Gujarat",
  "Haryana",
  "Himachal Pradesh",
  "Jharkhand",
  "Karnataka",
  "Kerala",
  "Madhya Pradesh",
  "Maharashtra",
  "Manipur",
  "Meghalaya",
  "Mizoram",
  "Nagaland",
  "Odisha",
  "Punjab",
  "Rajasthan",
  "Sikkim",
  "Tamil Nadu",
  "Telangana",
  "Tripura",
  "Uttar Pradesh",
  "Uttarakhand",
  "West Bengal",
];

const WorkLocations = ({ isModalOpen, setIsModalOpen, logActivity }) => {
  const [locationDetails, setLocationDetails] = useState([
    {
      id: "1",
      workLocation: "Hyderabad, Telangana, India",
      Status: "Active",
      Action: "Make Inactive",
      city: "Hyderabad",
      state: "Telangana",
    },
  ]);
  const [selectedState, setSelectedState] = useState("");
  const [city, setCity] = useState("");
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [selectedLocationId, setSelectedLocationId] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [editLocation, setEditLocation] = useState(null);

  const handleStateChange = (e) => setSelectedState(e.target.value);
  const handleCityChange = (e) => setCity(e.target.value);

  const handleLocationSubmit = () => {
    const newLocation = {
      id: (locationDetails.length + 1).toString(),
      workLocation: [city, selectedState, "India"].filter(Boolean).join(", "),
      Status: "Active",
      Action: "Make Inactive",
      city,
      state: selectedState,
    };

    setLocationDetails([...locationDetails, newLocation]);
    setSuccessMessage("Successfully Added Location");
    setShowSuccessMessage(true);
    setIsModalOpen(false); // Close the modal after submission

    // Log the activity
    logActivity(`Added new work location: ${newLocation.workLocation}`);

    // Hide the success message after 2 seconds
    setTimeout(() => setShowSuccessMessage(false), 2000);

    // Clear the input fields
    setSelectedState("");
    setCity("");
  };

  const toggleStatus = (id) => {
    setSelectedLocationId(id);
    setShowConfirmModal(true);
  };

  const handleConfirmAction = () => {
    setLocationDetails((prevDetails) =>
      prevDetails.map((location) =>
        location.id === selectedLocationId
          ? {
              ...location,
              Status: location.Status === "Active" ? "Inactive" : "Active",
              Action:
                location.Status === "Active" ? "Make Active" : "Make Inactive",
            }
          : location
      )
    );

    const location = locationDetails.find(
      (loc) => loc.id === selectedLocationId
    );
    const message =
      location.Status === "Active"
        ? "Work Location Inactivated"
        : "Work Location Activated";

    setSuccessMessage(message);
    setShowSuccessMessage(true);
    setShowConfirmModal(false);
    setSelectedLocationId(null);

    // Log the activity
    logActivity(`${message}: ${location.workLocation}`);

    // Hide the success message after 2 seconds
    setTimeout(() => setShowSuccessMessage(false), 2000);
  };

  const handleCancelAction = () => {
    setShowConfirmModal(false);
    setSelectedLocationId(null);
  };

  const startEditing = (id) => {
    const locationToEdit = locationDetails.find((loc) => loc.id === id);
    setEditLocation(locationToEdit);
    setIsEditing(true);
  };

  const handleEditChange = (e) => {
    setEditLocation({
      ...editLocation,
      [e.target.name]: e.target.value,
    });
  };

  const handleSaveEdit = () => {
    setLocationDetails((prevDetails) =>
      prevDetails.map((location) =>
        location.id === editLocation.id
          ? {
              ...editLocation,
              workLocation: [editLocation.city, editLocation.state, "India"]
                .filter(Boolean)
                .join(", "),
            }
          : location
      )
    );

    // Log the activity
    logActivity(`Updated work location: ${editLocation.workLocation}`);

    // Notify user of success
    setSuccessMessage("Location updated successfully");
    setShowSuccessMessage(true);
    setTimeout(() => setShowSuccessMessage(false), 2000);

    setIsEditing(false);
    setEditLocation(null);
  };

  const handleDelete = (id) => {
    setLocationDetails((prevDetails) =>
      prevDetails.filter((location) => location.id !== id)
    );

    // Log the activity
    logActivity(`Deleted work location with ID: ${id}`);

    // Notify user of success
    setSuccessMessage("Location deleted successfully");
    setShowSuccessMessage(true);
    setTimeout(() => setShowSuccessMessage(false), 2000);
  };

  const totalLocationRecords = locationDetails.length;

  return (
    <div className="flex flex-col flex-grow">
      <div className="overflow-x-auto flex-grow">
        <div className="  overflow-x-scroll scrollbar-thin   scrollbar-track-white scrollbar-thumb-[#e65f2b] pt-4 mx-4">
          <table className="min-w-full w-screen overflow-x-scroll  text-nowrap">
            <thead className="text-[#E65F2B]">
              <tr>
                <th className=" p-2 whitespace-nowrap py-3 border-r border-white bg-[#E65F2B] text-white">
                  Work Location
                </th>
                <th className=" p-2 whitespace-nowrap py-3 border-r border-white bg-[#E65F2B] text-white">
                  Status
                </th>
                <th className=" p-2 whitespace-nowrap py-3 border-r border-white bg-[#E65F2B] text-white">
                  Action
                </th>
                <th className=" p-2 whitespace-nowrap py-3 border-r border-white bg-[#E65F2B] text-white">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {locationDetails.map((location) => (
                <tr key={location.id}>
                  <td className="p-2 text-center  text-[#E65F2B] whitespace-nowrap overflow-hidden text-ellipsis">
                    {location.workLocation}
                  </td>
                  <td
                    className={`p-2 text-center whitespace-nowrap overflow-hidden text-ellipsis ${
                      location.Status === "Active"
                        ? "text-green-500"
                        : "text-red-500"
                    }`}
                  >
                    {location.Status}
                  </td>
                  <td className="p-2 text-center  text-[#E65F2B] whitespace-nowrap overflow-hidden text-ellipsis">
                    <h1
                      onClick={() => toggleStatus(location.id)}
                      className="cursor-pointer text-[#E65F2B] underline hover:text-[#d4551a]"
                    >
                      {location.Action}
                    </h1>
                  </td>
                  <td className="p-2 justify-center text-center  flex gap-2 items-center whitespace-nowrap overflow-hidden text-ellipsis">
                    <button
                      onClick={() => startEditing(location.id)}
                      className="text-[#E65F2B] hover:text-[#d4551a]"
                    >
                      <AiFillEdit size={20} className="text-green-600" />
                    </button>
                    <button
                      onClick={() => handleDelete(location.id)}
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
        <h1>Total Records: {totalLocationRecords}</h1>
      </div>

      {/* Modal for adding new location */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-[70] max-w-md">
            <h2 className="text-2xl mb-4 text-[#E65F2B]">Add New Location</h2>
            <div className="mb-4 flex items-center gap-4">
              <label className="text-lg font-medium text-[#E65F2B] w-24">
                State
              </label>
              <select
                value={selectedState}
                onChange={handleStateChange}
                className="block border-[#E65F2B] border rounded-md shadow-sm h-[50px] px-2 flex-1"
              >
                <option value="">Select State</option>
                {statesInIndia.map((state) => (
                  <option key={state} value={state}>
                    {state}
                  </option>
                ))}
              </select>
            </div>

            <div className="mb-4 flex items-center gap-4">
              <label className="text-lg font-medium text-[#E65F2B] w-24">
                City
              </label>
              <input
                type="text"
                value={city}
                onChange={handleCityChange}
                className="block border-[#E65F2B] border rounded-md shadow-sm h-[50px] px-2 flex-1"
              />
            </div>

            <div className="flex justify-end gap-4">
              <button
                onClick={() => setIsModalOpen(false)}
                className="px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600"
              >
                Cancel
              </button>
              <button
                onClick={handleLocationSubmit}
                className="px-4 py-2 bg-[#E65F2B]  text-white rounded-md hover:bg-[#d4551a]"
              >
                Add Location
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Modal for editing location */}
      {isEditing && editLocation && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-[70] max-w-md">
            <h2 className="text-2xl mb-4 text-[#E65F2B]">Edit Location</h2>
            <div className="mb-4 flex items-center gap-4">
              <label className="text-lg font-medium text-[#E65F2B] w-24">
                State
              </label>
              <select
                name="state"
                value={editLocation.state}
                onChange={handleEditChange}
                className="block border-[#E65F2B] border rounded-md shadow-sm h-[50px] px-2 flex-1"
              >
                <option value="">Select State</option>
                {statesInIndia.map((state) => (
                  <option key={state} value={state}>
                    {state}
                  </option>
                ))}
              </select>
            </div>

            <div className="mb-4 flex items-center gap-4">
              <label className="text-lg font-medium text-[#E65F2B] w-24">
                City
              </label>
              <input
                type="text"
                name="city"
                value={editLocation.city}
                onChange={handleEditChange}
                className="block border-[#E65F2B] border rounded-md shadow-sm h-[50px] px-2 flex-1"
              />
            </div>

            <div className="flex justify-end gap-4">
              <button
                onClick={() => setIsEditing(false)}
                className="px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600"
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
      {showConfirmModal && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-[50] max-w-md">
            <h2 className="text-xl mb-4 text-[#E65F2B]">Work Location</h2>
            <p className="mb-6">
              Are you sure you want to make this work location <br />
              <span className="font-semibold">
                {
                  locationDetails.find((loc) => loc.id === selectedLocationId)
                    ?.workLocation
                }
              </span>
              {locationDetails.find((loc) => loc.id === selectedLocationId)
                ?.Status === "Active"
                ? " Inactive?"
                : " Active?"}
            </p>
            <div className="flex justify-end gap-4">
              <button
                onClick={handleConfirmAction}
                className={`px-4 py-2 text-white rounded-md ${
                  locationDetails.find((loc) => loc.id === selectedLocationId)
                    ?.Status === "Active"
                    ? "bg-gradient-to-r from-[#E65F2B] to-[#FFC252]"
                    : "bg-gradient-to-r from-[#E65F2B] to-[#FFC252]"
                }`}
              >
                {locationDetails.find((loc) => loc.id === selectedLocationId)
                  ?.Status === "Active"
                  ? "Inactivate"
                  : "Activate"}
              </button>
              <button
                onClick={handleCancelAction}
                className="px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600"
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

export default WorkLocations;
