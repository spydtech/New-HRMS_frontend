// import React, { useState } from "react";
// import { FaPlusCircle } from "react-icons/fa";
// import { GoChevronLeft, GoChevronRight } from "react-icons/go";
// import { FiEdit, FiTrash2 } from "react-icons/fi";
// import { IoMdCheckmarkCircleOutline } from "react-icons/io";
// import { FiPlusCircle } from "react-icons/fi";
// const initialEvents = [
//   { id: 1, day: "Thursday", date: "25 Apr 2024", name: "New Event" },
//   // Add more Events if needed
// ];

// const ReactCalendar = ({ onEventClick }) => {
//   const days = ["SU", "MO", "TU", "WE", "TH", "FR", "SA"];
//   const abbreviatedDays = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

//   const currentDate = new Date();
//   const [currentMonth, setCurrentMonth] = useState(currentDate.getMonth());
//   const [currentYear, setCurrentYear] = useState(currentDate.getFullYear());

//   const months = [
//     "January",
//     "February",
//     "March",
//     "April",
//     "May",
//     "June",
//     "July",
//     "August",
//     "September",
//     "October",
//     "November",
//     "December",
//   ];

//   const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
//   const startDay = new Date(currentYear, currentMonth, 1).getDay();

//   const getCurrentDateString = () => `${months[currentMonth]} ${currentYear}`;

//   const getDayTextColor = (day) => {
//     return day === 1 || day === 15 || day === 28 || day === 5 || day === 20
//       ? "text-[#0098F1]"
//       : "text-[#0098F1]";
//   };

//   const renderDays = () => {
//     let daysArray = [];

//     for (let i = 0; i < startDay; i++) {
//       daysArray.push(<div key={`empty-${i}`} className="day empty"></div>);
//     }

//     for (let i = 1; i <= daysInMonth; i++) {
//       const dayTextColor = getDayTextColor(i);
//       const isToday =
//         i === currentDate.getDate() &&
//         currentMonth === currentDate.getMonth() &&
//         currentYear === currentDate.getFullYear();
//       const dayClasses = `day text-center text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl m-1 sm:m-2 ${dayTextColor} ${
//         isToday ? "bg-[#FDE68A] rounded-full" : ""
//       }`;

//       daysArray.push(
//         <div key={i} className={dayClasses} onClick={() => onEventClick(i)}>
//           <span className="font-roboto font-medium">{i}</span>
//         </div>
//       );
//     }

//     return daysArray;
//   };

//   const goToPreviousMonth = () => {
//     if (currentMonth === 0) {
//       setCurrentMonth(11);
//       setCurrentYear(currentYear - 1);
//     } else {
//       setCurrentMonth(currentMonth - 1);
//     }
//   };

//   const goToNextMonth = () => {
//     if (currentMonth === 11) {
//       setCurrentMonth(0);
//       setCurrentYear(currentYear + 1);
//     } else {
//       setCurrentMonth(currentMonth + 1);
//     }
//   };

//   return (
//     <div className="calendar-container p-2 sm:p-4">
//       <div className="max-w-full mx-auto bg-white rounded-lg overflow-hidden p-4">
//         <div className="flex flex-col sm:flex-row justify-between items-center mb-4">
//           <h2 className="font-semibold text-lg sm:text-xl md:text-2xl text-[#0098F1] mb-2 sm:mb-0">
//             {getCurrentDateString()}
//           </h2>
//           <div className="flex space-x-2 mb-2 sm:mb-0">
//             <button
//               className="text-[#0098F1] hover:text-gray-800 focus:outline-none rounded-full border border-[#0098F1] bg-transparent p-2 sm:p-3 text-sm sm:text-base"
//               onClick={goToPreviousMonth}
//             >
//               <GoChevronLeft />
//             </button>
//             <button
//               className="text-[#0098F1] hover:text-gray-800 focus:outline-none rounded-full border border-[#0098F1] bg-transparent p-2 sm:p-3 text-sm sm:text-base"
//               onClick={goToNextMonth}
//             >
//               <GoChevronRight />
//             </button>
//           </div>
//         </div>

//         <div className="grid grid-cols-7 gap-1 sm:gap-2 text-center font-semibold text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl">
//           {abbreviatedDays.map((day, index) => (
//             <div key={index} className="hidden sm:flex justify-center">
//               {day}
//             </div>
//           ))}
//           {days.map((day, index) => (
//             <div key={index} className="flex sm:hidden justify-center">
//               {day}
//             </div>
//           ))}
//           {renderDays()}
//         </div>
//       </div>
//     </div>
//   );
// };

// const Events = () => {
//   const [events, setEvents] = useState(initialEvents);
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
//   const [newEvent, setNewEvent] = useState({
//     day: "",
//     date: "",
//     name: "",
//   });
//   const [editEventId, setEditEventId] = useState(null);
//   const [selectedDate, setSelectedDate] = useState(null);
//   const [deleteEventId, setDeleteEventId] = useState(null);
//   const [showSuccessMessage, setShowSuccessMessage] = useState(false);
//   const [showDeleteSuccessMessage, setShowDeleteSuccessMessage] =
//     useState(false);
//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setNewEvent((prevEvent) => ({
//       ...prevEvent,
//       [name]: value,
//     }));
//   };

//   const handleDeleteEvent = () => {
//     const updatedHolidays = holidays.filter(
//       (holiday) => holiday.id !== deleteHolidayId
//     );
//     setHolidays(updatedHolidays);
//     setShowDeleteSuccessMessage(true);

//     setTimeout(() => {
//       setShowDeleteSuccessMessage(false);
//     }, 3000);
//   };

//   const handleAddEvent = () => {
//     const dateObj = new Date(newEvent.date);
//     const dayName = dateObj.toLocaleString("default", { weekday: "long" });

//     if (editEventId !== null) {
//       const updatedEvents = events.map((event) => {
//         if (event.id === editEventId) {
//           return {
//             ...event,
//             day: dayName,
//             date: newEvent.date,
//             name: newEvent.name,
//           };
//         }
//         return event;
//       });
//       setEvents(updatedEvents);
//       setShowSuccessMessage(true);
//     } else {
//       const newEventObject = {
//         id:
//           events.length > 0
//             ? Math.max(...events.map((event) => event.id)) + 1
//             : 1,
//         day: dayName,
//         date: newEvent.date,
//         name: newEvent.name,
//       };
//       setEvents([...events, newEventObject]);
//       setShowSuccessMessage(true);
//     }
//     setTimeout(() => {
//       setShowSuccessMessage(false);
//     }, 3000);

//     closeModal();
//   };

//   const openEditModal = (eventId) => {
//     const eventToEdit = events.find((event) => event.id === eventId);
//     setEditEventId(eventId);
//     setNewEvent({
//       day: eventToEdit.day,
//       date: eventToEdit.date,
//       name: eventToEdit.name,
//     });
//     setIsModalOpen(true);
//   };

//   const closeDeleteModal = () => {
//     setIsDeleteModalOpen(false);
//     setDeleteEventId(null);
//   };

//   const closeModal = () => {
//     setIsModalOpen(false);
//     setEditEventId(null);
//     setNewEvent({
//       day: "",
//       date: "",
//       name: "",
//     });
//   };

//   const openDeleteModal = (holidayId) => {
//     setDeleteEventId(holidayId);
//     setIsDeleteModalOpen(true);
//   };

//   const handleDeleteHoliday = () => {
//     const updatedEvents = events.filter((event) => event.id !== deleteEventId);
//     setEvents(updatedEvents);
//     setShowDeleteSuccessMessage(true);

//     setTimeout(() => {
//       setShowDeleteSuccessMessage(false);
//     }, 3000);

//     closeDeleteModal();
//   };

//   const handleEventClick = (day) => {
//     const selectedDate = new Date(currentYear, currentMonth, day);
//     const dateString = `${selectedDate.getFullYear()}-${String(
//       selectedDate.getMonth() + 1
//     ).padStart(2, "0")}-${String(selectedDate.getDate()).padStart(2, "0")}`;
//     const dayName = selectedDate.toLocaleString("default", { weekday: "long" });

//     setSelectedDate(day);
//     setNewEvent((prev) => ({
//       ...prev,
//       date: dateString,
//       day: dayName,
//     }));
//     setIsModalOpen(true);
//   };

//   return (
//     <div className="p-4 mt-4  ">
//       <h2 className="text-[#0098f1] lg:text-lg text-sm  font-bold mb-4">
//         Hr / Events
//       </h2>
//       <div className="flex justify-end mb-4  ">
//         <button
//           className="bg-[#0098F1] text-white  flex justify-center  items-center py-3  p-4   rounded-lg"
//           onClick={() => setIsModalOpen(true)}
//         >
//           <FiPlusCircle className="text-white text-lg mr-2" />
//           <span className="text-sm lg:text-lg">Add New Event</span>
//         </button>
//       </div>
//       <div className="flex flex-col lg:flex-row gap-4">
//         {/* Calendar Container */}
//         <div className="w-full lg:w-[70vw] bg-white rounded-lg p-4 lg:order-1">
//           <ReactCalendar onEventClick={handleEventClick} />
//         </div>

//         {/* Blue Container */}
//         <div className="w-full lg:w-1/2 bg-[#0098F1] rounded-lg p-4 lg:order-2 flex flex-col items-center">
//           <div className="flex flex-col items-center justify-center">
//             <div className="rounded-full overflow-hidden w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 flex items-center justify-center">
//               <img
//                 className="rounded-full w-full h-full object-cover"
//                 src="https://res.cloudinary.com/ds5ooz2ve/image/upload/v1721382978/989da2826fe6e25ad1f617fda7e70025_d6ucl3.png"
//                 alt="User"
//               />
//             </div>
//             <h1 className="text-white text-md sm:text-lg md:text-xl font-medium mb-2 text-center">
//               Mounika
//             </h1>

//             <div className="flex flex-row gap-2 sm:gap-3 md:gap-4 text-white">
//               <div className="text-center text-xs sm:text-sm md:text-base">
//                 <h1 className="font-medium">17</h1>
//                 <h1>Completed</h1>
//               </div>
//               <div className="text-center text-xs sm:text-sm md:text-base">
//                 <h1 className="font-medium">17</h1>
//                 <h1>To Do</h1>
//               </div>
//               <div className="text-center text-xs sm:text-sm md:text-base">
//                 <h1 className="font-medium">17</h1>
//                 <h1>All Tasks</h1>
//               </div>
//             </div>

//             <hr
//               className="w-full border-white my-4"
//               style={{ opacity: "0.5" }}
//             />

//             <div className="grid grid-cols-2 gap-1 mt-2 sm:gap-2">
//               {[
//                 "Marketing",
//                 "Design Task",
//                 "Development",
//                 "Finance",
//                 "Meeting",
//                 "Conference",
//               ].map((item) => (
//                 <button
//                   key={item}
//                   className="bg-transparent border border-white text-white rounded-lg px-2 py-1 text-xs sm:text-sm md:text-base"
//                 >
//                   {item}
//                 </button>
//               ))}
//             </div>
//           </div>

//           <hr className="w-full border-white my-4" style={{ opacity: "0.5" }} />
//           <div className="font-roboto text-lg sm:text-xl md:text-2xl mt-2 flex items-start">
//             <h1 className="text-white mr-4">Team</h1>
//             <div className="flex -space-x-2">
//               {[...Array(5)].map((_, index) => (
//                 <img
//                   key={index}
//                   src="https://res.cloudinary.com/ds5ooz2ve/image/upload/v1721382978/989da2826fe6e25ad1f617fda7e70025_d6ucl3.png"
//                   alt={`Image ${index + 1}`}
//                   className={`w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 rounded-full`}
//                 />
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="w-full md:w-12/12 mx-auto bg-white  rounded-lg p-2 mt-4">
//         <h1 className="text-xl font-bold  text-[#0098F1]">Events List</h1>
//         <div className=" mt-5 overflow-x-scroll scrollbar-thin   scrollbar-track-white scrollbar-thumb-[#0098f1] pt-4 mx-2">
//           <table className="min-w-full w-screen overflow-x-scroll  text-nowrap">
//             <thead className="bg-[#0098F1] text-white">
//               <tr className="border border-[#0098F1]">
//                 <th className="py-3 px-4 border-r border-white text-center text-sm font-medium text-nowrap">
//                   Day
//                 </th>
//                 <th className="py-3 px-4 border-r border-white text-center text-sm font-medium text-nowrap">
//                   Date
//                 </th>
//                 <th className="py-3 px-4 border-r border-white text-center text-sm font-medium text-nowrap">
//                   Event
//                 </th>
//                 <th className="py-3 px-4  text-center text-sm font-medium text-nowrap">Actions</th>
//               </tr>
//             </thead>
//             <tbody className="text-center">
//               {events.map((event) => (
//                 <tr key={event.id} className="border border-[#0098F1]">
//                   <td className=" px-4 text-center border-r border-[#0098F1] ">
//                     {event.day}
//                   </td>
//                   <td className=" px-4 text-center border-r border-[#0098F1] ">
//                     {event.date}
//                   </td>
//                   <td className=" px-4 text-center border-r border-[#0098F1] ">
//                     {event.name}
//                   </td>
//                   <td className=" px-4 text-center border-r-0 border-[#0098F1]">
//                     <div className="flex justify-center items-center space-x-2">
//                       <button
//                         className="text-blue-500 flex py-3 items-center"
//                         onClick={() => openEditModal(event.id)}
//                       >
//                         <FiEdit className="mr-1 bg-[#2A8F4C] text-white rounded-md size-6 p-1" />
//                       </button>
//                       <button
//                         className="flex items-center justify-center"
//                         onClick={() => openDeleteModal(event.id)}
//                       >
//                         <FiTrash2 className="mr-1 bg-[#FF3636] text-white flex items-center size-6 p-1 rounded-md" />
//                       </button>
//                     </div>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>

//       {isModalOpen && (
//         <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
//           <div className="bg-white rounded-lg p-6 w-[60vw]">
//             <h2 className="text-2xl mb-4 text-[#0098F1]">
//               {editEventId ? "Edit Holiday" : "Add Holiday"}
//             </h2>
//             <div className="grid grid-cols-1 gap-4">
//               <div>
//                 <label className="block mb-2">Date</label>
//                 <input
//                   type="date"
//                   name="date"
//                   value={newEvent.date}
//                   onChange={handleInputChange}
//                   className="border p-2 w-full border-[#0098F1] border-opacity-40 focus:outline-none"
//                 />
//               </div>
//               <div>
//                 <label className="block mb-2">Holiday Name</label>
//                 <input
//                   type="text"
//                   name="name"
//                   value={newEvent.name}
//                   onChange={handleInputChange}
//                   className="border p-2 w-full border-[#0098F1] border-opacity-40 focus:outline-none"
//                 />
//               </div>
//             </div>
//             <div className="mt-4 flex justify-end">
//               <button
//                 className="bg-white border border-[#0098F1] font-semibold text-[#0098F1] px-4 py-2 rounded mr-2"
//                 onClick={closeModal}
//               >
//                 Cancel
//               </button>
//               <button
//                 className="bg-[#0098F1] text-white px-4 py-2 rounded"
//                 onClick={handleAddEvent}
//               >
//                 {editEventId ? "Update" : "Add"}
//               </button>
//             </div>
//           </div>
//         </div>
//       )}

//       {isDeleteModalOpen && (
//         <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
//           <div className="bg-white rounded-lg p-10 w-[400px] flex flex-col items-center justify-center">
//             <h2 className="text-2xl font-semibold mb-4 text-[#0098F1]">
//               Delete Holiday
//             </h2>
//             <p className="text-[#0098F1]">Are you sure you want to delete?</p>
//             <div className="mt-4 flex gap-5">
//               <button
//                 className="bg-[#0098F1] text-white px-10 py-2 rounded"
//                 onClick={handleDeleteHoliday}
//               >
//                 Delete
//               </button>
//               <button
//                 className="bg-white border border-[#0098F1] font-semibold text-[#0098F1] px-10 py-2 rounded mr-2"
//                 onClick={closeDeleteModal}
//               >
//                 Cancel
//               </button>
//             </div>
//           </div>
//         </div>
//       )}

//       {showSuccessMessage && (
//         <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 z-50">
//           <div className="bg-sky-500 p-8 rounded-lg text-center text-white">
//             <h2 className="text-xl mb-4">
//               <IoMdCheckmarkCircleOutline className="inline-block text-6xl" />
//             </h2>
//             <p>
//               {editEventId
//                 ? "Event updated successfully!"
//                 : "Event added successfully!"}
//             </p>
//           </div>
//         </div>
//       )}

//       {showDeleteSuccessMessage && (
//         <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 z-50">
//           <div className="bg-red-500 p-8 rounded-lg text-center text-white">
//             <h2 className="text-xl mb-4">
//               <IoMdCheckmarkCircleOutline className="inline-block text-6xl" />
//             </h2>
//             <p>Event deleted successfully!</p>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Events;









import React, { useState, useEffect } from "react";
import { GoChevronLeft, GoChevronRight } from "react-icons/go";
import { FiEdit, FiTrash2, FiPlusCircle } from "react-icons/fi";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { toast } from "react-toastify";
import { eventsAPI, employeesAPI } from "../../../services/api";

// Calendar Component
const ReactCalendar = ({ onEventClick }) => {
  const days = ["SU", "MO", "TU", "WE", "TH", "FR", "SA"];
  const abbreviatedDays = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

  const currentDate = new Date();
  const [currentMonth, setCurrentMonth] = useState(currentDate.getMonth());
  const [currentYear, setCurrentYear] = useState(currentDate.getFullYear());

  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December",
  ];

  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
  const startDay = new Date(currentYear, currentMonth, 1).getDay();

  const getCurrentDateString = () => `${months[currentMonth]} ${currentYear}`;

  const renderDays = () => {
    let daysArray = [];

    for (let i = 0; i < startDay; i++) {
      daysArray.push(<div key={`empty-${i}`} className="day empty"></div>);
    }

    for (let i = 1; i <= daysInMonth; i++) {
      const isToday =
        i === currentDate.getDate() &&
        currentMonth === currentDate.getMonth() &&
        currentYear === currentDate.getFullYear();
      
      const dayClasses = `day text-center text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl m-1 sm:m-2 text-[#0098F1] cursor-pointer hover:bg-blue-100 rounded-full ${
        isToday ? "bg-[#FDE68A]" : ""
      }`;

      daysArray.push(
        <div key={i} className={dayClasses} onClick={() => onEventClick(i, currentMonth, currentYear)}>
          <span className="font-roboto font-medium">{i}</span>
        </div>
      );
    }
    return daysArray;
  };

  const goToPreviousMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear(currentYear - 1);
    } else {
      setCurrentMonth(currentMonth - 1);
    }
  };

  const goToNextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear(currentYear + 1);
    } else {
      setCurrentMonth(currentMonth + 1);
    }
  };

  return (
    <div className="calendar-container p-2 sm:p-4">
      <div className="max-w-full mx-auto bg-white rounded-lg overflow-hidden p-4">
        <div className="flex flex-col sm:flex-row justify-between items-center mb-4">
          <h2 className="font-semibold text-lg sm:text-xl md:text-2xl text-[#0098F1] mb-2 sm:mb-0">
            {getCurrentDateString()}
          </h2>
          <div className="flex space-x-2 mb-2 sm:mb-0">
            <button
              className="text-[#0098F1] hover:text-gray-800 focus:outline-none rounded-full border border-[#0098F1] bg-transparent p-2 sm:p-3"
              onClick={goToPreviousMonth}
            >
              <GoChevronLeft />
            </button>
            <button
              className="text-[#0098F1] hover:text-gray-800 focus:outline-none rounded-full border border-[#0098F1] bg-transparent p-2 sm:p-3"
              onClick={goToNextMonth}
            >
              <GoChevronRight />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-7 gap-1 sm:gap-2 text-center font-semibold text-xs sm:text-sm md:text-base">
          {abbreviatedDays.map((day, index) => (
            <div key={index} className="hidden sm:flex justify-center">{day}</div>
          ))}
          {days.map((day, index) => (
            <div key={index} className="flex sm:hidden justify-center">{day}</div>
          ))}
          {renderDays()}
        </div>
      </div>
    </div>
  );
};

// Main Events Component
const Events = () => {
  const [events, setEvents] = useState([]);
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [editEventId, setEditEventId] = useState(null);
  const [deleteEventId, setDeleteEventId] = useState(null);
  
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [showDeleteSuccessMessage, setShowDeleteSuccessMessage] = useState(false);

  const [newEvent, setNewEvent] = useState({
    day: "",
    date: "",
    name: "",
    employeeIds: [],
  });

  useEffect(() => {
    loadEvents();
    loadEmployees();
  }, []);

  const loadEvents = async () => {
    setLoading(true);
    try {
      const res = await eventsAPI.getAll();
      const formatted = res.data.map((e) => ({
        id: e.id,
        name: e.name,
        date: e.event_date,
        day: new Date(e.event_date).toLocaleString("default", { weekday: "long" }),
        assigned_employees: e.assigned_employees || [],
      }));
      setEvents(formatted);
    } catch (err) {
      toast.error("Failed to load events");
    } finally {
      setLoading(false);
    }
  };

  const loadEmployees = async () => {
    try {
      const res = await employeesAPI.getAll();
      setEmployees(Array.isArray(res.data) ? res.data : []);
    } catch (err) {
      console.error("Failed to load employees", err);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewEvent((prev) => ({ ...prev, [name]: value }));
  };

  const handleEmployeeSelect = (e) => {
    const options = Array.from(e.target.selectedOptions, (option) => Number(option.value));
    setNewEvent((prev) => ({ ...prev, employeeIds: options }));
  };

  const handleAddEvent = async () => {
    if (!newEvent.name || !newEvent.date) {
      toast.error("Name and Date are required");
      return;
    }

    try {
      const payload = {
        name: newEvent.name,
        date: newEvent.date,
        employeeIds: newEvent.employeeIds,
      };

      if (editEventId !== null) {
        await eventsAPI.update(editEventId, payload);
      } else {
        await eventsAPI.create(payload);
      }

      setShowSuccessMessage(true);
      setTimeout(() => setShowSuccessMessage(false), 3000);
      closeModal();
      loadEvents();
    } catch (err) {
      toast.error("Failed to save event");
    }
  };

  const openEditModal = (eventId) => {
    const eventToEdit = events.find((event) => event.id === eventId);
    setEditEventId(eventId);
    setNewEvent({
      day: eventToEdit.day,
      date: eventToEdit.date,
      name: eventToEdit.name,
      employeeIds: eventToEdit.assigned_employees.map((emp) => emp.id),
    });
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setEditEventId(null);
    setNewEvent({ day: "", date: "", name: "", employeeIds: [] });
  };

  const openDeleteModal = (id) => {
    setDeleteEventId(id);
    setIsDeleteModalOpen(true);
  };

  const closeDeleteModal = () => {
    setIsDeleteModalOpen(false);
    setDeleteEventId(null);
  };

  const handleDeleteEvent = async () => {
    try {
      await eventsAPI.remove(deleteEventId);
      setShowDeleteSuccessMessage(true);
      setTimeout(() => setShowDeleteSuccessMessage(false), 3000);
      closeDeleteModal();
      loadEvents();
    } catch (err) {
      toast.error("Failed to delete event");
    }
  };

  const handleEventClick = (day, month, year) => {
    const selectedDate = new Date(year, month, day);
    const dateString = `${year}-${String(month + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
    const dayName = selectedDate.toLocaleString("default", { weekday: "long" });

    setNewEvent((prev) => ({ ...prev, date: dateString, day: dayName }));
    setIsModalOpen(true);
  };

  return (
    <div className="p-4 mt-4">
      <h2 className="text-[#0098f1] lg:text-lg text-sm font-bold mb-4">
        Hr / Events
      </h2>
      
      <div className="flex justify-end mb-4">
        <button
          className="bg-[#0098F1] text-white flex justify-center items-center py-3 p-4 rounded-lg"
          onClick={() => setIsModalOpen(true)}
        >
          <FiPlusCircle className="text-white text-lg mr-2" />
          <span className="text-sm lg:text-lg">Add New Event</span>
        </button>
      </div>

      <div className="flex flex-col lg:flex-row gap-4">
        {/* Calendar Container */}
        <div className="w-full lg:w-[70vw] bg-white rounded-lg p-4 lg:order-1">
          <ReactCalendar onEventClick={handleEventClick} />
        </div>

        {/* Blue Stats Container */}
        <div className="w-full lg:w-1/2 bg-[#0098F1] rounded-lg p-4 lg:order-2 flex flex-col items-center">
          <div className="flex flex-col items-center justify-center">
            <div className="rounded-full overflow-hidden w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 flex items-center justify-center">
              <img
                className="rounded-full w-full h-full object-cover"
                src="https://res.cloudinary.com/ds5ooz2ve/image/upload/v1721382978/989da2826fe6e25ad1f617fda7e70025_d6ucl3.png"
                alt="User"
              />
            </div>
            <h1 className="text-white text-md sm:text-lg md:text-xl font-medium mb-2 text-center">
              Mounika
            </h1>

            <div className="flex flex-row gap-2 sm:gap-3 md:gap-4 text-white">
              <div className="text-center text-xs sm:text-sm md:text-base">
                <h1 className="font-medium">{events.length}</h1>
                <h1>Total Events</h1>
              </div>
            </div>

            <hr className="w-full border-white my-4" style={{ opacity: "0.5" }} />

            <div className="grid grid-cols-2 gap-1 mt-2 sm:gap-2">
              {["Marketing", "Design Task", "Development", "Finance", "Meeting", "Conference"].map((item) => (
                <button key={item} className="bg-transparent border border-white text-white rounded-lg px-2 py-1 text-xs sm:text-sm md:text-base">
                  {item}
                </button>
              ))}
            </div>
          </div>

          <hr className="w-full border-white my-4" style={{ opacity: "0.5" }} />
          <div className="font-roboto text-lg sm:text-xl md:text-2xl mt-2 flex items-start">
            <h1 className="text-white mr-4">Team</h1>
            <div className="flex -space-x-2">
              {[...Array(5)].map((_, index) => (
                <img
                  key={index}
                  src="https://res.cloudinary.com/ds5ooz2ve/image/upload/v1721382978/989da2826fe6e25ad1f617fda7e70025_d6ucl3.png"
                  alt={`Image ${index + 1}`}
                  className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 rounded-full"
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Events List Table */}
      <div className="w-full md:w-12/12 mx-auto bg-white rounded-lg p-2 mt-4">
        <h1 className="text-xl font-bold text-[#0098F1]">Events List</h1>
        <div className="mt-5 overflow-x-scroll scrollbar-thin scrollbar-track-white scrollbar-thumb-[#0098f1] pt-4 mx-2">
          <table className="min-w-full w-screen overflow-x-scroll text-nowrap">
            <thead className="bg-[#0098F1] text-white">
              <tr className="border border-[#0098F1]">
                <th className="py-3 px-4 border-r border-white text-center text-sm font-medium">Day</th>
                <th className="py-3 px-4 border-r border-white text-center text-sm font-medium">Date</th>
                <th className="py-3 px-4 border-r border-white text-center text-sm font-medium">Event</th>
                <th className="py-3 px-4 border-r border-white text-center text-sm font-medium">Assigned To</th>
                <th className="py-3 px-4 text-center text-sm font-medium">Actions</th>
              </tr>
            </thead>
            <tbody className="text-center">
              {loading ? (
                <tr><td colSpan={5} className="py-4 text-gray-500">Loading events...</td></tr>
              ) : events.length === 0 ? (
                <tr><td colSpan={5} className="py-4 text-gray-500">No events found.</td></tr>
              ) : (
                events.map((event) => (
                  <tr key={event.id} className="border border-[#0098F1]">
                    <td className="px-4 border-r border-[#0098F1]">{event.day}</td>
                    <td className="px-4 border-r border-[#0098F1]">{event.date}</td>
                    <td className="px-4 border-r border-[#0098F1]">{event.name}</td>
                    <td className="px-4 border-r border-[#0098F1]">
                      <div className="flex -space-x-2 justify-center">
                        {event.assigned_employees.length === 0 ? (
                          <span className="text-xs text-gray-500">All</span>
                        ) : (
                          event.assigned_employees.slice(0, 3).map((emp) => (
                            <img 
                              key={emp.id} 
                              src={emp.profileImage || `https://ui-avatars.com/api/?background=0098F1&color=fff&name=${encodeURIComponent(emp.name)}`} 
                              title={emp.name}
                              className="w-8 h-8 rounded-full border-2 border-white" 
                            />
                          ))
                        )}
                        {event.assigned_employees.length > 3 && (
                          <div className="w-8 h-8 rounded-full border-2 border-white bg-gray-200 text-xs flex items-center justify-center">
                            +{event.assigned_employees.length - 3}
                          </div>
                        )}
                      </div>
                    </td>
                    <td className="px-4 border-[#0098F1]">
                      <div className="flex justify-center items-center space-x-2">
                        <button onClick={() => openEditModal(event.id)}>
                          <FiEdit className="bg-[#2A8F4C] text-white rounded-md size-6 p-1" />
                        </button>
                        <button onClick={() => openDeleteModal(event.id)}>
                          <FiTrash2 className="bg-[#FF3636] text-white rounded-md size-6 p-1" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Add/Edit Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div className="bg-white rounded-lg p-6 w-[60vw] max-w-2xl">
            <h2 className="text-2xl mb-4 text-[#0098F1]">
              {editEventId ? "Edit Event" : "Add Event"}
            </h2>
            <div className="grid grid-cols-1 gap-4">
              <div>
                <label className="block mb-2 font-medium">Date</label>
                <input
                  type="date"
                  name="date"
                  value={newEvent.date}
                  onChange={handleInputChange}
                  className="border p-2 w-full border-[#0098F1] border-opacity-40 focus:outline-none rounded"
                />
              </div>
              <div>
                <label className="block mb-2 font-medium">Event Name</label>
                <input
                  type="text"
                  name="name"
                  value={newEvent.name}
                  onChange={handleInputChange}
                  className="border p-2 w-full border-[#0098F1] border-opacity-40 focus:outline-none rounded"
                />
              </div>
              <div>
                <label className="block mb-2 font-medium">Assign Employees (Hold Ctrl/Cmd to select multiple)</label>
                <select
                  multiple
                  value={newEvent.employeeIds.map(String)}
                  onChange={handleEmployeeSelect}
                  className="border p-2 w-full border-[#0098F1] border-opacity-40 focus:outline-none rounded h-32"
                >
                  {employees.map((emp) => (
                    <option key={emp.id} value={emp.id}>
                      {emp.name} ({emp.email})
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="mt-6 flex justify-end">
              <button
                className="bg-white border border-[#0098F1] font-semibold text-[#0098F1] px-4 py-2 rounded mr-2"
                onClick={closeModal}
              >
                Cancel
              </button>
              <button
                className="bg-[#0098F1] text-white px-4 py-2 rounded"
                onClick={handleAddEvent}
              >
                {editEventId ? "Update" : "Add"}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Delete Modal */}
      {isDeleteModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div className="bg-white rounded-lg p-10 w-[400px] flex flex-col items-center justify-center">
            <h2 className="text-2xl font-semibold mb-4 text-[#0098F1]">Delete Event</h2>
            <p className="text-[#0098F1]">Are you sure you want to delete?</p>
            <div className="mt-4 flex gap-5">
              <button
                className="bg-[#0098F1] text-white px-10 py-2 rounded"
                onClick={handleDeleteEvent}
              >
                Delete
              </button>
              <button
                className="bg-white border border-[#0098F1] font-semibold text-[#0098F1] px-10 py-2 rounded mr-2"
                onClick={closeDeleteModal}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Success Messages */}
      {showSuccessMessage && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-sky-500 p-8 rounded-lg text-center text-white">
            <IoMdCheckmarkCircleOutline className="inline-block text-6xl" />
            <p className="mt-2">{editEventId ? "Event updated successfully!" : "Event added successfully!"}</p>
          </div>
        </div>
      )}

      {showDeleteSuccessMessage && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-red-500 p-8 rounded-lg text-center text-white">
            <IoMdCheckmarkCircleOutline className="inline-block text-6xl" />
            <p className="mt-2">Event deleted successfully!</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Events;