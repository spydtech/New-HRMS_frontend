import React, { useState } from "react";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { AiFillEdit, AiFillDelete } from "react-icons/ai"; // Import React Icons

const CostCenters = ({ isModalOpen, setIsModalOpen, logActivity }) => {
  const [costCenterDetails, setCostCenterDetails] = useState([
    {
      id: "1",
      costCenter: "Customer Service",
      Status: "Active",
      Action: "Make Inactive",
    },
  ]);
  const [costCenter, setCostCenter] = useState("");
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [selectedCostCenterId, setSelectedCostCenterId] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [editCostCenter, setEditCostCenter] = useState(null);

  const handleCostCenterChange = (e) => setCostCenter(e.target.value);

  const handleCostCenterSubmit = () => {
    if (costCenter.trim()) {
      const newCostCenter = {
        id: (costCenterDetails.length + 1).toString(),
        costCenter,
        Status: "Active",
        Action: "Make Inactive",
      };

      setCostCenterDetails([...costCenterDetails, newCostCenter]);
      setSuccessMessage("Successfully Added Cost Center");
      setShowSuccessMessage(true);
      setIsModalOpen(false); // Close the modal after submission

      // Log the activity
      logActivity(`Added new cost center: ${newCostCenter.costCenter}`);

      // Hide the success message after 2 seconds
      setTimeout(() => setShowSuccessMessage(false), 2000);
    }
  };

  const toggleStatus = (id) => {
    setSelectedCostCenterId(id);
    setShowConfirmModal(true);
  };

  const handleConfirmAction = () => {
    setCostCenterDetails((prevDetails) =>
      prevDetails.map((costCenter) =>
        costCenter.id === selectedCostCenterId
          ? {
              ...costCenter,
              Status: costCenter.Status === "Active" ? "Inactive" : "Active",
              Action:
                costCenter.Status === "Active"
                  ? "Make Active"
                  : "Make Inactive",
            }
          : costCenter
      )
    );

    const costCenter = costCenterDetails.find(
      (cc) => cc.id === selectedCostCenterId
    );
    const message =
      costCenter.Status === "Active"
        ? "Cost Center Inactivated"
        : "Cost Center Activated";

    setSuccessMessage(message);
    setShowSuccessMessage(true);
    setShowConfirmModal(false);
    setSelectedCostCenterId(null);

    // Log the activity
    logActivity(`${message}: ${costCenter.costCenter}`);

    // Hide the success message after 2 seconds
    setTimeout(() => setShowSuccessMessage(false), 2000);
  };

  const handleCancelAction = () => {
    setShowConfirmModal(false);
    setSelectedCostCenterId(null);
  };

  const startEditing = (id) => {
    const costCenterToEdit = costCenterDetails.find((cc) => cc.id === id);
    setEditCostCenter(costCenterToEdit);
    setIsEditing(true);
  };

  const handleEditChange = (e) => {
    setEditCostCenter({
      ...editCostCenter,
      [e.target.name]: e.target.value,
    });
  };

  const handleSaveEdit = () => {
    setCostCenterDetails((prevDetails) =>
      prevDetails.map((costCenter) =>
        costCenter.id === editCostCenter.id
          ? {
              ...editCostCenter,
              Action:
                editCostCenter.Status === "Active"
                  ? "Make Inactive"
                  : "Make Active",
            }
          : costCenter
      )
    );

    // Log the activity
    logActivity(`Updated cost center: ${editCostCenter.costCenter}`);

    // Notify user of success
    setSuccessMessage("Cost Center updated successfully");
    setShowSuccessMessage(true);
    setTimeout(() => setShowSuccessMessage(false), 2000);

    setIsEditing(false);
    setEditCostCenter(null);
  };

  const handleDelete = (id) => {
    setCostCenterDetails((prevDetails) =>
      prevDetails.filter((costCenter) => costCenter.id !== id)
    );

    // Log the activity
    logActivity(`Deleted cost center with ID: ${id}`);

    // Notify user of success
    setSuccessMessage("Cost Center deleted successfully");
    setShowSuccessMessage(true);
    setTimeout(() => setShowSuccessMessage(false), 2000);
  };

  const totalCostCenterRecords = costCenterDetails.length;
  const selectedCostCenter = costCenterDetails.find(
    (cc) => cc.id === selectedCostCenterId
  );

  return (
    <div className="flex flex-col flex-grow">
      <div className="overflow-x-auto flex-grow">
        <div className="  overflow-x-scroll scrollbar-thin   scrollbar-track-white scrollbar-thumb-[#e65f2b] pt-4 mx-4">
          <table className="min-w-full w-screen overflow-x-scroll  text-nowrap">
            <thead className="text-[#E65F2B]">
              <tr>
                <th className="p-2 whitespace-nowrap py-3 border-r border-white bg-[#e65f2b] text-white">
                  Cost Center
                </th>
                <th className="p-2 whitespace-nowrap py-3 border-r border-white bg-[#e65f2b] text-white">
                  Status
                </th>
                <th className="p-2 whitespace-nowrap py-3 border-r border-white bg-[#e65f2b] text-white">
                  Action
                </th>
                <th className="p-2 whitespace-nowrap py-3 border-r border-white bg-[#e65f2b] text-white">
                  Edit/Delete
                </th>
              </tr>
            </thead>
            <tbody>
              {costCenterDetails.map((costCenter) => (
                <tr key={costCenter.id}>
                  <td className="p-2 text-center text-[#E65F2B] whitespace-nowrap overflow-hidden text-ellipsis">
                    {costCenter.costCenter}
                  </td>
                  <td
                    className={`p-2  text-center whitespace-nowrap overflow-hidden text-ellipsis ${
                      costCenter.Status === "Active"
                        ? "text-green-500"
                        : "text-red-500"
                    }`}
                  >
                    {costCenter.Status}
                  </td>
                  <td className="p-2  text-center text-[#E65F2B] whitespace-nowrap overflow-hidden text-ellipsis">
                    <h1
                      onClick={() => toggleStatus(costCenter.id)}
                      className="cursor-pointer text-[#E65F2B] underline hover:text-[#d4551a]"
                    >
                      {costCenter.Action}
                    </h1>
                  </td>
                  <td className="p-2  justify-center flex gap-2 items-center whitespace-nowrap overflow-hidden text-ellipsis">
                    <button
                      onClick={() => startEditing(costCenter.id)}
                      className="text-[#E65F2B] hover:text-[#d4551a]"
                    >
                      <AiFillEdit size={20} className="text-green-600" />
                    </button>
                    <button
                      onClick={() => handleDelete(costCenter.id)}
                      className=" hover:text-[#d4551a]"
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
        <h1>Total Records: {totalCostCenterRecords}</h1>
      </div>

      {/* Modal for adding new cost center */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
            <h2 className="text-2xl mb-4 text-[#E65F2B]">
              Add New Cost Center
            </h2>
            <div className="mb-4 flex items-center gap-4">
              <label className="text-lg font-medium text-[#E65F2B] w-40">
                Cost Center
              </label>
              <input
                type="text"
                value={costCenter}
                onChange={handleCostCenterChange}
                className="block border-[#E65F2B] border rounded-md shadow-sm h-[50px] px-2 flex-1"
                placeholder="Enter Cost Center Name"
              />
            </div>

            <div className="flex justify-end gap-4">
              <button
                onClick={handleCostCenterSubmit}
                className="px-4 py-2 bg-[#E65F2B] text-white rounded-md hover:bg-[#d4551a]"
              >
                Add Cost Center
              </button>
              <button
                onClick={() => setIsModalOpen(false)}
                className="px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Modal for editing cost center */}
      {isEditing && editCostCenter && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
            <h2 className="text-2xl mb-4 text-[#E65F2B]">Edit Cost Center</h2>
            <div className="mb-4 flex items-center gap-4">
              <label className="text-lg font-medium text-[#E65F2B] w-40">
                Cost Center
              </label>
              <input
                type="text"
                name="costCenter"
                value={editCostCenter.costCenter}
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
      {showConfirmModal && selectedCostCenter && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
            <h2 className="text-xl mb-4 text-[#E65F2B]">Cost Center Status</h2>
            <p className="mb-6">
              Are you sure you want to make this cost center <br />
              <span className="font-semibold">
                {selectedCostCenter.costCenter}
              </span>
              {selectedCostCenter.Status === "Active"
                ? " Inactive?"
                : " Active?"}
            </p>
            <div className="flex justify-end gap-4">
              <button
                onClick={handleConfirmAction}
                className={`px-4 py-2 text-white rounded-md ${
                  selectedCostCenter.Status === "Active"
                    ? "bg-gradient-to-r from-[#E65F2B] to-[#FFC252]"
                    : "bg-gradient-to-r from-[#E65F2B] to-[#FFC252]"
                }`}
              >
                {selectedCostCenter.Status === "Active"
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

export default CostCenters;
