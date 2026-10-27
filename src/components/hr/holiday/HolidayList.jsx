// /* eslint-disable no-unused-vars */
// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { FiPlusCircle, FiEdit, FiTrash2 } from "react-icons/fi";
// //import { API_BASE_URL } from "../../../Config/api";

// function HolidayList() {
//   const [holidays, setHolidays] = useState([]);
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [loading, setLoading] = useState(true);
//   const [errorMessage, setErrorMessage] = useState("");
//   const [newHoliday, setNewHoliday] = useState({
//     day: "",
//     date: "",
//     holidayName: "",
//   });
//   const [editHolidayId, setEditHolidayId] = useState(null);
//   const [showSuccessMessage, setShowSuccessMessage] = useState(false);
//   const [showDeleteSuccessMessage, setShowDeleteSuccessMessage] =
//     useState(false);
//   const jwt = localStorage.getItem("hrJwt");

//   useEffect(() => {
//     fetchHolidays();
//   }, []);

//   const fetchHolidays = async () => {
//     try {
//       const response = await axios.get(`${API_BASE_URL}/holidays`, {
//         headers: {
//           Authorization: `Bearer ${jwt}`,
//         },
//       });
//       setHolidays(response.data);
//       setLoading(false);
//     } catch (error) {
//       console.error("Error fetching employees:", error);
//       setErrorMessage("Error fetching employees");
//       setLoading(false);
//     }
//   };

//   const closeModal = () => {
//     setIsModalOpen(false);
//     setEditHolidayId(null);
//     setNewHoliday({
//       day: "",
//       date: "",
//       holidayName: "",
//     });
//   };

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setNewHoliday((prevHoliday) => ({
//       ...prevHoliday,
//       [name]: value,
//     }));
//   };

//   const handleAddHoliday = async () => {
//     try {
//       const response = await axios.post(`${API_BASE_URL}/holidays`, {
//         ...newHoliday,
//       });
//       setHolidays((prev) => [...prev, response.data]);
//       setShowSuccessMessage(true);
//       setTimeout(() => setShowSuccessMessage(false), 3000);
//       closeModal();
//       fetchHolidays();
//     } catch (error) {
//       console.error("Error adding Holiday:", error);
//       setErrorMessage("Error adding Holiday");
//       setTimeout(() => setErrorMessage(""), 3000);
//     }
//   };

//   const handleEditHoliday = (holiday) => {
//     setNewHoliday({
//       day: holiday.day,
//       date: holiday.date,
//       holidayName: holiday.holidayName,
//     });
//     setEditHolidayId(holiday.holidayName);
//     setIsModalOpen(true);
//   };

//   const handleUpdateHoliday = async () => {
//     try {
//       const response = await axios.put(
//         `${API_BASE_URL}/holidays/${editHolidayId}`,
//         newHoliday
//       );
//       setHolidays((prev) =>
//         prev.map((emp) =>
//           emp.holidayName === editHolidayId ? response.data : emp
//         )
//       );
//       setShowSuccessMessage(true);
//       setTimeout(() => setShowSuccessMessage(false), 3000);
//       closeModal();
//     } catch (error) {
//       console.error("Error updating holiday:", error);
//       setErrorMessage("Error updating holiday");
//       setTimeout(() => setErrorMessage(""), 3000);
//     }
//   };

//   const handleDeleteHoliday = async (holidayId) => {
//     try {
//       await axios.delete(`${API_BASE_URL}/holidays/delete/${holidayId}`);
//       setHolidays((prev) =>
//         prev.filter((holiday) => holiday.holidayName !== holidayId)
//       );

//       setShowDeleteSuccessMessage(true);
//       setTimeout(() => setShowDeleteSuccessMessage(false), 3000);
//       fetchHolidays();
//     } catch (error) {
//       console.error("Error deleting holiday:", error);
//     }
//   };

//   return (
//     <>
//       <div className="p-4 mt-4 min-h-screen">
//         <h2 className="text-[#0098F1] lg:text-lg text-sm  font-bold ">
//           Hr / Holidays List
//         </h2>

//         <div className="flex mt-2 justify-end">
//           <div
//             id="addholiday"
//             className=" flex justify-center  items-center py-3  p-4 mt-2 rounded-lg bg-[#0098f1]"
//           >
//             <button
//               type="button"
//               className="flex items-center text-sm lg:text-lg  px-2  text-white"
//               onClick={() => setIsModalOpen(true)}
//             >
//               <FiPlusCircle className="text-xl mr-2 font-bold " /> Add Holiday
//             </button>
//           </div>
//         </div>
//         {loading ? (
//           <div>Loading...</div>
//         ) : (
//           <div className=" mt-2 overflow-x-scroll  scrollbar-thin   scrollbar-track-white scrollbar-thumb-[#0098f1] pt-4 ">
//             <table className="min-w-full max-w-3xl mx-auto text-nowrap">
//               <thead className="bg-[#0098f1] text-white">
//                 <tr className="border border-[#0098F1]">
//                   <th className="py-3 px-4 border-r border-white text-center text-sm font-medium text-nowrap">
//                     Sl.No
//                   </th>
//                   <th className="py-3 px-4 border-r border-white text-center text-sm font-medium text-nowrap">
//                     Day
//                   </th>
//                   <th className="py-3 px-4 border-r border-white text-center text-sm font-medium text-nowrap">
//                     Date
//                   </th>
//                   <th className="py-3 px-4 border-r border-white text-center text-sm font-medium text-nowrap">
//                     Holiday Name
//                   </th>
//                   <th className="py-3 px-4  text-center text-sm font-medium text-nowrap">
//                     Action
//                   </th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {holidays.map((holiday, index) => (
//                   <tr
//                     key={holiday.holidayName}
//                     className="bg-white border border-[#0098F1]"
//                   >
//                     <td className="py-3 px-4 border-r border-[#0098f1] text-center truncate">
//                       {index + 1}
//                     </td>
//                     <td className="py-3 px-4 border-r border-[#0098f1] text-center truncate">
//                       {holiday.day}
//                     </td>
//                     <td className="py-3 px-4 border-r border-[#0098f1] text-center truncate">
//                       {holiday.date}
//                     </td>
//                     <td className="py-3 px-4 border-r border-[#0098f1] text-center truncate">
//                       {holiday.holidayName}
//                     </td>
//                     <td className="py-3 flex justify-center items-center px-4 text-center   border-[#0098f1]  truncate">
//                       <FiEdit
//                         className="text-blue-500 cursor-pointer mr-2"
//                         onClick={() => handleEditHoliday(holiday)}
//                       />
//                       <FiTrash2
//                         className="text-red-500 cursor-pointer "
//                         onClick={() => handleDeleteHoliday(holiday.holidayName)}
//                       />
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         )}
//       </div>

//       {isModalOpen && (
//         <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
//           <div className="bg-white lg:w-full w-64 rounded-lg p-6 max-w-lg">
//             <h2 className="text-2xl mb-4">
//               {editHolidayId ? "Edit Holiday" : "Add Holiday"}
//             </h2>
//             <form>
//               <div className="mb-4">
//                 <label className="block text-gray-700">Day</label>
//                 <input
//                   type="text"
//                   name="day"
//                   value={newHoliday.day}
//                   onChange={handleInputChange}
//                   className="border p-2 w-full"
//                 />
//               </div>
//               <div className="mb-4">
//                 <label className="block text-gray-700">Date</label>
//                 <input
//                   type="date"
//                   name="date"
//                   value={newHoliday.date}
//                   onChange={handleInputChange}
//                   className="border p-2 w-full"
//                 />
//               </div>
//               <div className="mb-4">
//                 <label className="block text-gray-700">Name</label>
//                 <input
//                   type="text"
//                   name="holidayName"
//                   value={newHoliday.holidayName}
//                   onChange={handleInputChange}
//                   className="border p-2 w-full"
//                 />
//               </div>

//               <div className="flex justify-end">
//                 <button
//                   type="button"
//                   onClick={
//                     editHolidayId ? handleUpdateHoliday : handleAddHoliday
//                   }
//                   className="bg-[#0098f1] text-white px-4 py-3 rounded"
//                 >
//                   {editHolidayId ? "Update" : "Add"}
//                 </button>
//                 <button
//                   type="button"
//                   onClick={closeModal}
//                   className="ml-2 bg-gray-500 text-white px-4 py-3 rounded"
//                 >
//                   Cancel
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       )}

//       {showSuccessMessage && (
//         <div className="fixed bottom-4 right-4 bg-green-500 text-white py-3 px-4 rounded">
//           Holiday {editHolidayId ? "updated" : "added"} successfully!
//         </div>
//       )}

//       {showDeleteSuccessMessage && (
//         <div className="fixed bottom-4 right-4 bg-red-500 text-white py-3 px-4 rounded">
//           Holiday deleted successfully!
//         </div>
//       )}
//       {errorMessage && (
//         <div className="fixed bottom-4 right-4 bg-red-500 text-white p-4 rounded-lg shadow-lg">
//           {errorMessage}
//         </div>
//       )}
//     </>
//   );
// }

// export default HolidayList;








/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { FiPlusCircle, FiEdit, FiTrash2 } from "react-icons/fi";
import {
  fetchHolidays,
  createHoliday,
  updateHoliday,
  deleteHoliday,
  selectHolidays,
  selectHolidaysLoading,
  selectHolidaysSaving,
  clearHolidayError,
} from "../../../store/slices/holidaySlice";

const EMPTY = { day: "", date: "", holidayName: "" };

function HolidayList() {
  const dispatch = useDispatch();
  const holidays = useSelector(selectHolidays);
  const loading = useSelector(selectHolidaysLoading);
  const saving = useSelector(selectHolidaysSaving);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newHoliday, setNewHoliday] = useState(EMPTY);
  const [editId, setEditId] = useState(null);

  useEffect(() => {
    dispatch(fetchHolidays());
  }, [dispatch]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewHoliday((prev) => ({ ...prev, [name]: value }));
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setEditId(null);
    setNewHoliday(EMPTY);
  };

  const handleAddHoliday = async () => {
    if (!newHoliday.date || !newHoliday.holidayName.trim()) {
      toast.error("Date and name are required");
      return;
    }

    const result = await dispatch(
      createHoliday({
        day: newHoliday.day || undefined,
        date: newHoliday.date,
        holidayName: newHoliday.holidayName.trim(),
      })
    );

    if (createHoliday.fulfilled.match(result)) {
      toast.success("Holiday added");
      closeModal();
    } else {
      toast.error(result.payload || "Failed to add holiday");
      dispatch(clearHolidayError());
    }
  };

  const handleEditHoliday = (holiday) => {
    setNewHoliday({
      day: holiday.day || "",
      date: (holiday.date || "").toString().slice(0, 10),
      holidayName: holiday.holidayName || holiday.holiday_name || "",
    });
    setEditId(holiday.id);
    setIsModalOpen(true);
  };

  const handleUpdateHoliday = async () => {
    if (!editId) return;

    const result = await dispatch(
      updateHoliday({
        id: editId,
        data: {
          day: newHoliday.day || undefined,
          date: newHoliday.date,
          holidayName: newHoliday.holidayName.trim(),
        },
      })
    );

    if (updateHoliday.fulfilled.match(result)) {
      toast.success("Holiday updated");
      closeModal();
    } else {
      toast.error(result.payload || "Failed to update holiday");
      dispatch(clearHolidayError());
    }
  };

  const handleDeleteHoliday = async (id) => {
    if (!window.confirm("Delete this holiday?")) return;
    const result = await dispatch(deleteHoliday(id));
    if (deleteHoliday.fulfilled.match(result)) {
      toast.success("Holiday deleted");
    } else {
      toast.error(result.payload || "Failed to delete holiday");
      dispatch(clearHolidayError());
    }
  };

  return (
    <>
      <div className="p-4 mt-4 min-h-screen">
        <h2 className="text-[#0098F1] lg:text-lg text-sm font-bold">
          HR / Holidays List
        </h2>

        <div className="flex mt-2 justify-end">
          <button
            type="button"
            className="flex items-center justify-center py-3 px-4 mt-2 rounded-lg bg-[#0098f1] text-white text-sm lg:text-lg"
            onClick={() => {
              setNewHoliday(EMPTY);
              setEditId(null);
              setIsModalOpen(true);
            }}
          >
            <FiPlusCircle className="text-xl mr-2 font-bold" />
            Add Holiday
          </button>
        </div>

        {loading ? (
          <div className="p-6 text-center text-gray-500">Loading...</div>
        ) : (
          <div className="mt-2 overflow-x-scroll pt-4">
            <table className="min-w-full max-w-3xl mx-auto text-nowrap">
              <thead className="bg-[#0098f1] text-white">
                <tr>
                  {["Sl.No", "Day", "Date", "Holiday Name", "Action"].map((h) => (
                    <th
                      key={h}
                      className="py-3 px-4 border-r border-white text-center text-sm font-medium"
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {holidays.length === 0 && (
                  <tr>
                    <td colSpan={5} className="text-center p-6 text-gray-500">
                      No holidays yet
                    </td>
                  </tr>
                )}
                {holidays.map((holiday, index) => (
                  <tr
                    key={holiday.id}
                    className="bg-white border border-[#0098F1]"
                  >
                    <td className="py-3 px-4 border-r border-[#0098f1] text-center">
                      {index + 1}
                    </td>
                    <td className="py-3 px-4 border-r border-[#0098f1] text-center">
                      {holiday.day}
                    </td>
                    <td className="py-3 px-4 border-r border-[#0098f1] text-center">
                      {holiday.date}
                    </td>
                    <td className="py-3 px-4 border-r border-[#0098f1] text-center">
                      {holiday.holidayName || holiday.holiday_name}
                    </td>
                    <td className="py-3 px-4 text-center">
                      <button
                        className="text-blue-500 mr-3"
                        onClick={() => handleEditHoliday(holiday)}
                      >
                        <FiEdit className="inline text-xl" />
                      </button>
                      <button
                        className="text-red-500"
                        onClick={() => handleDeleteHoliday(holiday.id)}
                      >
                        <FiTrash2 className="inline text-xl" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div className="bg-white lg:w-full w-80 rounded-lg p-6 max-w-lg">
            <h2 className="text-2xl mb-4">
              {editId ? "Edit Holiday" : "Add Holiday"}
            </h2>
            <form onSubmit={(e) => e.preventDefault()}>
              <div className="mb-4">
                <label className="block text-gray-700">Day</label>
                <input
                  type="text"
                  name="day"
                  value={newHoliday.day}
                  onChange={handleInputChange}
                  placeholder="Auto-filled from date if empty"
                  className="border p-2 w-full rounded"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Date</label>
                <input
                  type="date"
                  name="date"
                  value={newHoliday.date}
                  onChange={handleInputChange}
                  className="border p-2 w-full rounded"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Holiday Name</label>
                <input
                  type="text"
                  name="holidayName"
                  value={newHoliday.holidayName}
                  onChange={handleInputChange}
                  className="border p-2 w-full rounded"
                  required
                />
              </div>

              <div className="flex justify-end gap-2">
                <button
                  type="button"
                  disabled={saving}
                  onClick={editId ? handleUpdateHoliday : handleAddHoliday}
                  className={`text-white px-4 py-3 rounded ${
                    saving ? "bg-gray-400" : "bg-[#0098f1] hover:opacity-90"
                  }`}
                >
                  {saving ? "Saving..." : editId ? "Update" : "Add"}
                </button>
                <button
                  type="button"
                  onClick={closeModal}
                  className="bg-gray-500 text-white px-4 py-3 rounded hover:bg-gray-600"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

export default HolidayList;