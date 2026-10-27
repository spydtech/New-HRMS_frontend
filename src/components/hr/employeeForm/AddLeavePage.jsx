// import React, { useState } from 'react';
// import { MdOutlineDoneOutline } from "react-icons/md";
// import { BsCheck2Circle } from "react-icons/bs";

// import SideBar from '../../Sidebar';

// const AddLeavePage = () => {
//     const [fromDate, setFromDate] = useState('');
//     const [toDate, setToDate] = useState('');
//     const [category, setCategory] = useState('');
//     const [message, setMessage] = useState('');
//     const [showModal, setShowModal] = useState(false);

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         const leaveData = { fromDate, toDate, category, message };
//         localStorage.setItem('leaveData', JSON.stringify(leaveData));
//         setShowModal(true);
//         setFromDate('');
//         setToDate('');
//         setCategory('');
//         setMessage('');
//         setTimeout(()=>{
//             setShowModal(false);
//         },1500)
//     };
    
//     const handleCloseModal = () => {
//         setShowModal(false);
//     };
//     return (
//         <>
//         <SideBar />
//         <div className="max-w-full max-h-screen  px-14 py-8 rounded-lg bg-white">
//             <h2 className="text-2xl font-semibold mb-10 mt-4 text-orange-400">Add Leave</h2>
//             <form onSubmit={handleSubmit}>
//             <div className="mb-6">
//                 <select
//                         id="leave-category"
//                         name="leave-category"
//                         className="w-full border-cyan-300 px-3 py-2 border rounded-lg focus:outline-none focus:border-cyan-500"
//                         value={category}
//                         onChange={(e) => setCategory(e.target.value)}
//                         required
//                     >
//                         <option value='' disabled selected>Select category</option>
//                         <option value="vacation">Vacation</option>
//                         <option value="sick">Sick Leave</option>
//                         <option value="personal">Personal Leave</option>
//                         <option value="others">Others</option>
//                     </select>
//                 </div>
//                 <div className="mb-6 flex gap-8">
//                     <input
//                         type="date"
//                         className="w-full px-3 border-cyan-300 py-2 border rounded-lg focus:outline-none focus:border-cyan-500"
//                         value={fromDate}
//                         onChange={(e) => setFromDate(e.target.value)}
//                         required
//                     />
//                     <input
//                         type="date"
//                         className="w-full px-3 py-2 border-cyan-300 border rounded-md focus:outline-none focus:border-cyan-500"
//                         value={toDate}
//                         onChange={(e) => setToDate(e.target.value)}
//                         required
//                     />
//                 </div>
//                 <div className="mb-10">
//                 <label className="text-md font-medium text-gray-700">Description</label>
//                     <textarea
//                         className="w-full mt-6 px-3 py-2 border-cyan-300 border rounded-md focus:outline-none focus:border-cyan-500"
//                         value={message}
//                         onChange={(e) => setMessage(e.target.value)}
//                         rows="4"
//                         required
//                     ></textarea>
//                 </div>

//                 <div className="flex justify-center gap-4">
//                     <button
//                         type="submit"
//                         className="bg-blue-500 hover:bg-blue-600 text-white  px-9 text-md py-1 text-medium rounded-md focus:outline-none"
//                     >
//                         Save
//                     </button>
//                     <button
//                         type="button"
//                         className="bg-white text-blue-500 border border-blue-400 px-7 text-sm font-medium rounded-md focus:outline-none"
//                     >
//                         Cancel
//                     </button>
//                 </div>
//             </form>
//             {showModal && (
//                 <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center z-50" onClick={handleCloseModal}>
//                     <div className="bg-[#2a97db] z-50 p-8 rounded-lg shadow-lg" onClick={(e) => e.stopPropagation()}>
//                         <div className="text-center mt-4 flex flex-col justify-center items-center gap-3">
//                         <BsCheck2Circle  className='text-white text-[40px]'/>
//                             <span className='text-white'>
//                                 Leave Added Successfully
//                             </span>
//                         </div>
//                     </div>
//                 </div>
//             )}
//         </div>
//         </>
//     );
// };

// export default AddLeavePage;
import React, { useState } from "react";
import SideBar from "../../Sidebar";
import { BsCheck2Circle } from "react-icons/bs";

function AddLeavePage({ onLeaveAdded }) {
  const [leaveType, setLeaveType] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [description, setDescription] = useState("");
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleSave = (e) => {
    e.preventDefault(); // Prevent form submission

    // Create a new leave object
    const newLeave = {
      id: Date.now(), // Unique ID for the leave (you can use a UUID library for more robust generation)
      leaveType,
      startDate,
      endDate,
      description,
    };

    // Save to local storage
    const existingLeaves = JSON.parse(localStorage.getItem("leaves")) || [];
    const updatedLeaves = [...existingLeaves, newLeave];
    localStorage.setItem("leaves", JSON.stringify(updatedLeaves));

    // Call parent callback to notify leave added
    if (onLeaveAdded) {
      onLeaveAdded(newLeave);
    }

    // Show popup
    setIsPopupOpen(true);
    setTimeout(() => {
      setIsPopupOpen(false);
    }, 5000);

    // Reset form fields after save
    setLeaveType("");
    setStartDate("");
    setEndDate("");
    setDescription("");
  };

  const handleCancel = () => {
    // Reset form fields on cancel
    setLeaveType("");
    setStartDate("");
    setEndDate("");
    setDescription("");
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };

  return (
    <>
      <SideBar />
      <div className="flex ml-[240px] justify-center items-center min-h-screen bg-blue-100">
        <div className="bg-white rounded-lg shadow-md w-[900px] p-6">
          <h2 className="text-xl font-semibold text-blue-600 mb-4">
            Add Leave
          </h2>
          <form onSubmit={handleSave}>
            <div className="mb-4">
              <select
                className="w-[850px] h-[48px] px-4 border-2 border-[#0098F1] rounded-lg shadow-sm focus:outline-none focus:ring-[#0098F1] focus:border-[#0098F1] text-gray-900"
                value={leaveType}
                onChange={(e) => setLeaveType(e.target.value)}
              >
                <option value="" disabled>
                  Select Leave Type
                </option>
                <option value="sick">Sick Leave</option>
                <option value="vacation">Vacation Leave</option>
                <option value="personal">Personal Leave</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div className="flex space-x-4 mb-4">
              <div>
                <input
                  type="date"
                  className="w-[400px] mt-10 h-[48px] px-4 border-2 border-[#0098F1] rounded-lg shadow-sm focus:outline-none focus:ring-[#0098F1] focus:border-[#0098F1] text-gray-900"
                  value={startDate}
                  onChange={(e) => setStartDate(e.target.value)}
                />
              </div>
              <input
                type="date"
                className="w-[400px] mt-10 h-[48px] px-4 border-2 border-[#0098F1] rounded-lg shadow-sm focus:outline-none focus:ring-[#0098F1] focus:border-[#0098F1] text-gray-900"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label className="block text-zinc-700 mb-2">Description</label>
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="w-full border-[#0098F1] rounded px-3 py-2 focus:outline-none ring-2 focus:ring-2 focus:ring-blue-500"
                rows="5"
              ></textarea>
            </div>
            <div className="mt-6 ml-[300px] mb-20 w-[400px] flex space-x-4 justify-center">
              <button
                type="submit"
                className="bg-[#0098F1] text-white px-4 py-2 rounded-md w-[200px] hover:bg-[#007bb5] focus:outline-none focus:ring-2 focus:ring-[#0098F1] focus:ring-opacity-50 transition duration-150 ease-in-out"
              >
                Save
              </button>
              <button
                type="button"
                onClick={handleCancel}
                className="text-black px-4 py-2 ring-1 ring-[#0098F1] w-[200px] rounded-md hover:bg-[#f0f0f0] focus:outline-none focus:ring-2 focus:ring-[#0098F1] focus:ring-opacity-50 transition duration-150 ease-in-out"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
      {isPopupOpen && (
        <div
          className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center z-50"
          onClick={handleClosePopup}
        >
          <div
            className="bg-[#0098F1] z-50 p-8 rounded-lg w-[350px] h-[180px] shadow-lg"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="text-center mt-4 flex flex-col justify-center items-center gap-3">
              <BsCheck2Circle className="text-white text-[40px]" />
              <span className="text-white">Leave Added Successfully</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default AddLeavePage;
