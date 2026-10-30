// import React, { useState } from "react";
// import { FaPlusCircle } from "react-icons/fa";
// import { GoChevronLeft, GoChevronRight } from "react-icons/go";
// import { FiEdit, FiTrash2 } from "react-icons/fi";
// import { IoMdCheckmarkCircleOutline } from "react-icons/io";
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
//       ? "text-[#2A546D]"
//       : "text-[#2A546D]";
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
//         isToday ? "bg-[#2A546D] text-white rounded-full" : ""
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
//           <h2 className="font-semibold text-lg sm:text-xl md:text-2xl text-[#2A546D] mb-2 sm:mb-0">
//             {getCurrentDateString()}
//           </h2>
//           <div className="flex space-x-2 mb-2 sm:mb-0">
//             <button
//               className="text-[#2A546D] hover:text-gray-800 focus:outline-none rounded-full border border-[#2A546D] bg-transparent p-2 sm:p-3 text-sm sm:text-base"
//               onClick={goToPreviousMonth}
//             >
//               <GoChevronLeft />
//             </button>
//             <button
//               className="text-[#2A546D] hover:text-gray-800 focus:outline-none rounded-full border border-[#2A546D] bg-transparent p-2 sm:p-3 text-sm sm:text-base"
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
//     <div className="p-4 mt-4 ">
//       <h2 className="text-[#2A546D] lg:text-lg text-sm font-medium  mb-4">
//         Employee / Events
//       </h2>

//       <div className="flex flex-col lg:flex-row gap-4">
//         {/* Calendar Container */}
//         <div className="w-full lg:w-[70vw] bg-white rounded-lg p-4 lg:order-1">
//           <ReactCalendar onEventClick={handleEventClick} />
//         </div>

//         {/* Blue Container */}
//         <div className="w-full lg:w-1/2 bg-[#2A546D] rounded-lg p-4 lg:order-2 flex flex-col items-center">
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

//             <div className="grid text-sm grid-cols-2 gap-1 mt-2 sm:gap-2">
//               {[
//                 "Marketing",
//                 "Design",
//                 "Development",
//                 "Finance",
//                 "Meeting",
//                 "Conference",
//               ].map((item) => (
//                 <button
//                   key={item}
//                   className="bg-transparent border border-white text-white rounded-lg px-2 py-1 text-xs sm:text-sm"
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
//               {[...Array(4)].map((_, index) => (
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

//       <div className="w-full md:w-12/12 mx-auto bg-white  rounded-lg p-4 mt-4">
//         <h1 className="text-xl font-bold mb-4 text-[#2A546D]">Events List</h1>
//         <div className="  overflow-x-scroll scrollbar-thin   scrollbar-track-white scrollbar-thumb-[#2a546d] pt-4 mx-4">
//           <table className="min-w-full w-screen overflow-x-scroll  text-nowrap">
//             <thead className="">
//               <tr className="bg-[#2a546d] text-white">
//                 <th className="p-3 border border-r-white border-[#2a546d]">
//                   Day
//                 </th>
//                 <th className="p-3 border-r border-white">Date</th>
//                 <th className="p-3  border  border-[#2a546d]">Event</th>
//                 {/* <th className="p-2 text-center">Actions</th> */}
//               </tr>
//             </thead>
//             <tbody className="text-center">
//               {events.map((event) => (
//                 <tr
//                   key={event.id}
//                   className="text-center text-black border  border-[#2a546d]"
//                 >
//                   <td className="p-3 border-r border-[#2a546d]">{event.day}</td>
//                   <td className="p-3 border-r border-[#2a546d]">
//                     {event.date}
//                   </td>
//                   <td className="p-3 border-r border-[#2a546d]">
//                     {event.name}
//                   </td>
//                   {/* <td className="py-2 px-4 border-b bg-transparent text-center border-r-0 border-[#2A546D] border-opacity-80">
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
//                   </td> */}
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>

//       {isModalOpen && (
//         <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
//           <div className="bg-white rounded-lg p-6 w-[60vw]">
//             <h2 className="text-2xl mb-4 text-[#2A546D]">
//               {editEventId ? "Edit Event" : "Add Event"}
//             </h2>
//             <div className="grid grid-cols-1 gap-4">
//               <div>
//                 <label className="block mb-2">Date</label>
//                 <input
//                   type="date"
//                   name="date"
//                   value={newEvent.date}
//                   onChange={handleInputChange}
//                   className="border p-2 w-full border-[#2A546D] border-opacity-40 focus:outline-none"
//                 />
//               </div>
//               <div>
//                 <label className="block mb-2">Event Name</label>
//                 <input
//                   type="text"
//                   name="name"
//                   value={newEvent.name}
//                   onChange={handleInputChange}
//                   className="border p-2 w-full border-[#2A546D] border-opacity-40 focus:outline-none"
//                 />
//               </div>
//             </div>
//             <div className="mt-4 flex justify-end">
//               <button
//                 className="bg-white border border-[#2A546D] font-semibold text-[#2A546D] px-4 py-2 rounded mr-2"
//                 onClick={closeModal}
//               >
//                 Cancel
//               </button>
//               <button
//                 className="bg-[#2A546D] text-white px-4 py-2 rounded"
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
//           <div className="bg-white rounded-lg p-6 w-[60vw]">
//             <h2 className="text-2xl mb-4 text-[#2A546D]">Delete Event</h2>
//             <p>Are you sure you want to delete this event?</p>
//             <div className="mt-4 flex justify-end">
//               <button
//                 className="bg-white border border-[#2A546D] font-semibold text-[#2A546D] px-4 py-2 rounded mr-2"
//                 onClick={closeDeleteModal}
//               >
//                 Cancel
//               </button>
//               <button
//                 className="bg-[#2A546D] text-white px-4 py-2 rounded"
//                 onClick={handleDeleteEvent}
//               >
//                 Delete
//               </button>
//             </div>
//           </div>
//         </div>
//       )}

//       {showSuccessMessage && (
//         <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 z-50">
//           <div className="bg-[#2A546D] p-8 rounded-lg text-center text-white">
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









import React, { useState, useEffect, useMemo } from "react";
import { FaPlusCircle } from "react-icons/fa";
import { GoChevronLeft, GoChevronRight } from "react-icons/go";
import { FiEdit, FiTrash2 } from "react-icons/fi";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { toast } from "react-toastify";
import { eventsAPI, authAPI } from "../../../services/api";

const HR_ROLES = ["super_admin", "hr_admin", "admin"];

/* -------------------- helpers -------------------- */
const toDateStr = (d) => {
  const dt = typeof d === "string" ? new Date(d) : d;
  const y = dt.getFullYear();
  const m = String(dt.getMonth() + 1).padStart(2, "0");
  const day = String(dt.getDate()).padStart(2, "0");
  return `${y}-${m}-${day}`;
};

const formatDateReadable = (iso) => {
  if (!iso) return "—";
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return iso;
  return d.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
};

const formatWeekday = (iso) => {
  if (!iso) return "—";
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return "—";
  return d.toLocaleDateString("en-GB", { weekday: "long" });
};

const getCurrentUser = () => {
  try {
    const raw =
      localStorage.getItem("user") || localStorage.getItem("currentUser");
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
};

/* -------------------- calendar -------------------- */
const ReactCalendar = ({ onEventClick, events }) => {
  const days = ["SU", "MO", "TU", "WE", "TH", "FR", "SA"];
  const abbreviatedDays = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December",
  ];

  const currentDate = new Date();
  const [currentMonth, setCurrentMonth] = useState(currentDate.getMonth());
  const [currentYear, setCurrentYear] = useState(currentDate.getFullYear());

  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
  const startDay = new Date(currentYear, currentMonth, 1).getDay();

  const eventsByDate = useMemo(() => {
    const map = {};
    (events || []).forEach((e) => {
      const raw = e.event_date || e.eventDate || e.date;
      if (!raw) return;
      const key = String(raw).slice(0, 10);
      map[key] = (map[key] || 0) + 1;
    });
    return map;
  }, [events]);

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

  const renderDays = () => {
    const daysArray = [];

    for (let i = 0; i < startDay; i++) {
      daysArray.push(<div key={`empty-${i}`} className="day empty"></div>);
    }

    for (let i = 1; i <= daysInMonth; i++) {
      const isToday =
        i === currentDate.getDate() &&
        currentMonth === currentDate.getMonth() &&
        currentYear === currentDate.getFullYear();

      const dateStr = `${currentYear}-${String(currentMonth + 1).padStart(2, "0")}-${String(i).padStart(2, "0")}`;
      const eventCount = eventsByDate[dateStr] || 0;

      const dayClasses = `day relative text-center text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl m-1 sm:m-2 text-[#2A546D] cursor-pointer hover:bg-blue-50 rounded-full transition ${
        isToday ? "bg-[#2A546D] text-white hover:bg-[#2A546D]" : ""
      }`;

      daysArray.push(
        <div
          key={i}
          className={dayClasses}
          onClick={() => onEventClick(new Date(currentYear, currentMonth, i))}
          title={eventCount > 0 ? `${eventCount} event(s)` : ""}
        >
          <span className="font-roboto font-medium">{i}</span>
          {eventCount > 0 && (
            <span
              className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full ${
                isToday ? "bg-white" : "bg-[#0098F1]"
              }`}
            />
          )}
        </div>
      );
    }

    return daysArray;
  };

  return (
    <div className="calendar-container p-2 sm:p-4">
      <div className="max-w-full mx-auto bg-white rounded-lg overflow-hidden p-4">
        <div className="flex flex-col sm:flex-row justify-between items-center mb-4">
          <h2 className="font-semibold text-lg sm:text-xl md:text-2xl text-[#2A546D] mb-2 sm:mb-0">
            {months[currentMonth]} {currentYear}
          </h2>
          <div className="flex space-x-2 mb-2 sm:mb-0">
            <button
              className="text-[#2A546D] hover:text-gray-800 focus:outline-none rounded-full border border-[#2A546D] bg-transparent p-2 sm:p-3 text-sm sm:text-base"
              onClick={goToPreviousMonth}
            >
              <GoChevronLeft />
            </button>
            <button
              className="text-[#2A546D] hover:text-gray-800 focus:outline-none rounded-full border border-[#2A546D] bg-transparent p-2 sm:p-3 text-sm sm:text-base"
              onClick={goToNextMonth}
            >
              <GoChevronRight />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-7 gap-1 sm:gap-2 text-center font-semibold text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl">
          {abbreviatedDays.map((day, index) => (
            <div key={index} className="hidden sm:flex justify-center">
              {day}
            </div>
          ))}
          {days.map((day, index) => (
            <div key={index} className="flex sm:hidden justify-center">
              {day}
            </div>
          ))}
          {renderDays()}
        </div>
      </div>
    </div>
  );
};

/* -------------------- main component -------------------- */
const Events = () => {
  const [events, setEvents] = useState([]);
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [editEventId, setEditEventId] = useState(null);
  const [deleteEventId, setDeleteEventId] = useState(null);

  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [showDeleteSuccessMessage, setShowDeleteSuccessMessage] = useState(false);

  const [form, setForm] = useState({
    name: "",
    date: "",
    description: "",
    employeeIds: [],
  });
  const [employeeSearch, setEmployeeSearch] = useState("");

  const currentUser = useMemo(() => getCurrentUser(), []);
  const isHR = HR_ROLES.includes(currentUser?.role);

  /* ---------- data load ---------- */
  const reloadEvents = async () => {
    setLoading(true);
    try {
      const res = await eventsAPI.getAll();
      setEvents(Array.isArray(res.data) ? res.data : []);
    } catch (err) {
      const detail = err?.response?.data?.detail;
      toast.error(typeof detail === "string" ? detail : "Failed to load events");
    } finally {
      setLoading(false);
    }
  };

  const loadEmployees = async () => {
    if (!isHR) return;
    try {
      const res = await authAPI.getAllUsers();
      const data = res.data;
      const list = Array.isArray(data) ? data : data?.users || data?.items || [];
      setEmployees(list);
    } catch {
      console.warn("Could not load employees for assignment picker");
    }
  };

  useEffect(() => {
    reloadEvents();
    loadEmployees();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  /* ---------- form helpers ---------- */
  const resetForm = () =>
    setForm({ name: "", date: "", description: "", employeeIds: [] });

  const closeModal = () => {
    setIsModalOpen(false);
    setEditEventId(null);
    setEmployeeSearch("");
    resetForm();
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm((p) => ({ ...p, [name]: value }));
  };

  const toggleEmployee = (id) => {
    setForm((p) => {
      const has = p.employeeIds.includes(id);
      return {
        ...p,
        employeeIds: has
          ? p.employeeIds.filter((x) => x !== id)
          : [...p.employeeIds, id],
      };
    });
  };

  const filteredEmployees = useMemo(() => {
    const q = employeeSearch.trim().toLowerCase();
    if (!q) return employees;
    return employees.filter(
      (e) =>
        (e.name || "").toLowerCase().includes(q) ||
        (e.email || "").toLowerCase().includes(q)
    );
  }, [employees, employeeSearch]);

  /* ---------- calendar click ---------- */
  const handleEventClick = (dateObj) => {
    if (!isHR) {
      toast.info("Only HR can create events");
      return;
    }
    resetForm();
    setEditEventId(null);
    setForm((p) => ({ ...p, date: toDateStr(dateObj) }));
    setIsModalOpen(true);
  };

  /* ---------- open add modal ---------- */
  const handleOpenAdd = () => {
    resetForm();
    setEditEventId(null);
    setIsModalOpen(true);
  };

  /* ---------- open edit modal ---------- */
  const openEditModal = (event) => {
    if (!isHR) return;
    setEditEventId(event.id);
    setForm({
      name: event.name || "",
      date: String(event.event_date || event.eventDate || "").slice(0, 10),
      description: event.description || "",
      employeeIds: (event.assigned_employees || []).map((u) => u.id),
    });
    setIsModalOpen(true);
  };

  /* ---------- save ---------- */
  const handleSubmit = async (e) => {
    e?.preventDefault();
    if (!form.name || !form.date) {
      toast.error("Event name and date are required");
      return;
    }
    setSubmitting(true);
    try {
      const payload = {
        name: form.name,
        date: form.date,
        description: form.description || null,
        employeeIds: form.employeeIds,
      };
      if (editEventId) {
        await eventsAPI.update(editEventId, payload);
      } else {
        await eventsAPI.create(payload);
      }
      setShowSuccessMessage(true);
      setTimeout(() => setShowSuccessMessage(false), 3000);
      closeModal();
      await reloadEvents();
    } catch (err) {
      const detail = err?.response?.data?.detail;
      toast.error(typeof detail === "string" ? detail : "Failed to save event");
    } finally {
      setSubmitting(false);
    }
  };

  /* ---------- delete ---------- */
  const openDeleteModal = (id) => {
    if (!isHR) return;
    setDeleteEventId(id);
    setIsDeleteModalOpen(true);
  };

  const closeDeleteModal = () => {
    setIsDeleteModalOpen(false);
    setDeleteEventId(null);
  };

  const handleDeleteEvent = async () => {
    if (!deleteEventId) return;
    try {
      await eventsAPI.remove(deleteEventId);
      setShowDeleteSuccessMessage(true);
      setTimeout(() => setShowDeleteSuccessMessage(false), 3000);
      closeDeleteModal();
      await reloadEvents();
    } catch (err) {
      const detail = err?.response?.data?.detail;
      toast.error(typeof detail === "string" ? detail : "Failed to delete event");
    }
  };

  /* ---------- stats ---------- */
  const totalEvents = events.length;
  const todayStr = toDateStr(new Date());
  const upcomingEvents = events.filter(
    (e) => String(e.event_date || "").slice(0, 10) >= todayStr
  ).length;
  const pastEvents = totalEvents - upcomingEvents;

  /* ---------- render ---------- */
  return (
    <div className="p-4 mt-4">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-[#2A546D] lg:text-lg text-sm font-medium">
          Employee / Events
        </h2>
        {isHR && (
          <button
            className="bg-[#2A546D] text-white flex items-center rounded-lg p-2 px-4 hover:opacity-90"
            onClick={handleOpenAdd}
          >
            <FaPlusCircle className="mr-2" />
            Add Event
          </button>
        )}
      </div>

      <div className="flex flex-col lg:flex-row gap-4">
        {/* Calendar */}
        <div className="w-full lg:w-[70vw] bg-white rounded-lg p-4 lg:order-1">
          <ReactCalendar onEventClick={handleEventClick} events={events} />
        </div>

        {/* Blue card */}
        <div className="w-full lg:w-1/2 bg-[#2A546D] rounded-lg p-4 lg:order-2 flex flex-col items-center">
          <div className="flex flex-col items-center justify-center">
            <div className="rounded-full overflow-hidden w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 flex items-center justify-center">
              <img
                className="rounded-full w-full h-full object-cover"
                src={`https://ui-avatars.com/api/?background=0098f1&color=fff&name=${encodeURIComponent(
                  currentUser?.name || "User"
                )}`}
                alt="User"
              />
            </div>
            <h1 className="text-white text-md sm:text-lg md:text-xl font-medium mb-2 text-center">
              {currentUser?.name || "User"}
            </h1>

            <div className="flex flex-row gap-2 sm:gap-3 md:gap-4 text-white">
              <div className="text-center text-xs sm:text-sm md:text-base">
                <h1 className="font-medium">{pastEvents}</h1>
                <h1>Past</h1>
              </div>
              <div className="text-center text-xs sm:text-sm md:text-base">
                <h1 className="font-medium">{upcomingEvents}</h1>
                <h1>Upcoming</h1>
              </div>
              <div className="text-center text-xs sm:text-sm md:text-base">
                <h1 className="font-medium">{totalEvents}</h1>
                <h1>All Events</h1>
              </div>
            </div>

            <hr className="w-full border-white my-4" style={{ opacity: "0.5" }} />

            <div className="grid text-sm grid-cols-2 gap-1 mt-2 sm:gap-2">
              {[
                "Marketing",
                "Design",
                "Development",
                "Finance",
                "Meeting",
                "Conference",
              ].map((item) => (
                <button
                  key={item}
                  className="bg-transparent border border-white text-white rounded-lg px-2 py-1 text-xs sm:text-sm"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Events list */}
      <div className="w-full mx-auto bg-white rounded-lg p-4 mt-4">
        <h1 className="text-xl font-bold mb-4 text-[#2A546D]">
          {isHR ? "All Events" : "My Events"}
        </h1>
        <div className="overflow-x-scroll scrollbar-thin scrollbar-track-white scrollbar-thumb-[#2a546d] pt-4 mx-4">
          <table className="min-w-full w-screen overflow-x-scroll text-nowrap">
            <thead>
              <tr className="bg-[#2a546d] text-white">
                <th className="p-3 border border-r-white border-[#2a546d]">Day</th>
                <th className="p-3 border-r border-white">Date</th>
                <th className="p-3 border-r border-white">Event</th>
                <th className="p-3 border-r border-white">Description</th>
                {isHR && <th className="p-3 border-r border-white">Assigned To</th>}
                {isHR && <th className="p-3 border border-[#2a546d]">Actions</th>}
              </tr>
            </thead>
            <tbody className="text-center">
              {loading ? (
                <tr>
                  <td colSpan={isHR ? 6 : 4} className="p-6 text-gray-500">
                    Loading events...
                  </td>
                </tr>
              ) : events.length === 0 ? (
                <tr>
                  <td colSpan={isHR ? 6 : 4} className="p-6 text-gray-500">
                    {isHR
                      ? "No events yet. Click 'Add Event' to create one."
                      : "No events assigned to you yet."}
                  </td>
                </tr>
              ) : (
                events.map((event) => {
                  const iso = String(event.event_date || "").slice(0, 10);
                  const assigned = event.assigned_employees || [];
                  return (
                    <tr
                      key={event.id}
                      className="text-center text-black border border-[#2a546d]"
                    >
                      <td className="p-3 border-r border-[#2a546d]">
                        {formatWeekday(iso)}
                      </td>
                      <td className="p-3 border-r border-[#2a546d]">
                        {formatDateReadable(iso)}
                      </td>
                      <td className="p-3 border-r border-[#2a546d]">{event.name}</td>
                      <td className="p-3 border-r border-[#2a546d]">
                        {event.description || "—"}
                      </td>
                      {isHR && (
                        <td className="p-3 border-r border-[#2a546d]">
                          {assigned.length === 0 ? (
                            <span className="text-gray-400">—</span>
                          ) : (
                            <span>
                              {assigned
                                .slice(0, 2)
                                .map((u) => u.name)
                                .join(", ")}
                              {assigned.length > 2 &&
                                ` +${assigned.length - 2} more`}
                            </span>
                          )}
                        </td>
                      )}
                      {isHR && (
                        <td className="p-3 border-r border-[#2a546d]">
                          <div className="flex justify-center items-center space-x-2">
                            <button
                              className="text-blue-500 flex items-center"
                              onClick={() => openEditModal(event)}
                            >
                              <FiEdit className="bg-[#2A8F4C] text-white rounded-md size-6 p-1" />
                            </button>
                            <button
                              className="flex items-center justify-center"
                              onClick={() => openDeleteModal(event.id)}
                            >
                              <FiTrash2 className="bg-[#FF3636] text-white flex items-center size-6 p-1 rounded-md" />
                            </button>
                          </div>
                        </td>
                      )}
                    </tr>
                  );
                })
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Add / Edit modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div className="bg-white rounded-lg p-6 w-[90vw] md:w-[70vw] lg:w-[60vw] max-h-[90vh] overflow-y-auto">
            <h2 className="text-2xl mb-4 text-[#2A546D]">
              {editEventId ? "Edit Event" : "Add Event"}
            </h2>

            <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4">
              <div>
                <label className="block mb-2 font-semibold">Date *</label>
                <input
                  type="date"
                  name="date"
                  value={form.date}
                  onChange={handleInputChange}
                  className="border p-2 w-full border-[#2A546D] border-opacity-40 focus:outline-none rounded"
                  required
                />
              </div>

              <div>
                <label className="block mb-2 font-semibold">Event Name *</label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleInputChange}
                  className="border p-2 w-full border-[#2A546D] border-opacity-40 focus:outline-none rounded"
                  placeholder="e.g. Team Meeting"
                  required
                />
              </div>

              <div>
                <label className="block mb-2 font-semibold">Description</label>
                <textarea
                  name="description"
                  value={form.description}
                  onChange={handleInputChange}
                  rows={2}
                  className="border p-2 w-full border-[#2A546D] border-opacity-40 focus:outline-none rounded"
                  placeholder="Optional"
                />
              </div>

              <div>
                <label className="block mb-2 font-semibold">
                  Assign to Employees
                  <span className="text-sm text-gray-500 ml-2">
                    ({form.employeeIds.length} selected)
                  </span>
                </label>
                <input
                  type="text"
                  value={employeeSearch}
                  onChange={(e) => setEmployeeSearch(e.target.value)}
                  placeholder="Search by name or email..."
                  className="border p-2 w-full border-[#2A546D] border-opacity-40 focus:outline-none rounded mb-2"
                />
                <div className="max-h-52 overflow-y-auto border rounded p-2">
                  {filteredEmployees.length === 0 ? (
                    <div className="text-gray-500 text-sm p-2">
                      No employees found.
                    </div>
                  ) : (
                    filteredEmployees.map((emp) => (
                      <label
                        key={emp.id}
                        className="flex items-center gap-2 p-1 hover:bg-gray-50 rounded cursor-pointer"
                      >
                        <input
                          type="checkbox"
                          checked={form.employeeIds.includes(emp.id)}
                          onChange={() => toggleEmployee(emp.id)}
                        />
                        <img
                          src={`https://ui-avatars.com/api/?background=0098f1&color=fff&name=${encodeURIComponent(
                            emp.name || "User"
                          )}`}
                          alt=""
                          className="w-6 h-6 rounded-full"
                        />
                        <span className="text-sm">
                          {emp.name}{" "}
                          <span className="text-gray-500">({emp.email})</span>
                        </span>
                      </label>
                    ))
                  )}
                </div>
              </div>

              <div className="mt-2 flex justify-end">
                <button
                  type="button"
                  className="bg-white border border-[#2A546D] font-semibold text-[#2A546D] px-4 py-2 rounded mr-2"
                  onClick={closeModal}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={submitting}
                  className={`text-white px-4 py-2 rounded ${
                    submitting
                      ? "bg-gray-400 cursor-not-allowed"
                      : "bg-[#2A546D]"
                  }`}
                >
                  {submitting ? "Saving..." : editEventId ? "Update" : "Add"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Delete modal */}
      {isDeleteModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div className="bg-white rounded-lg p-6 w-[90vw] md:w-[60vw] lg:w-[40vw]">
            <h2 className="text-2xl mb-4 text-[#2A546D]">Delete Event</h2>
            <p>Are you sure you want to delete this event?</p>
            <div className="mt-4 flex justify-end">
              <button
                className="bg-white border border-[#2A546D] font-semibold text-[#2A546D] px-4 py-2 rounded mr-2"
                onClick={closeDeleteModal}
              >
                Cancel
              </button>
              <button
                className="bg-[#2A546D] text-white px-4 py-2 rounded"
                onClick={handleDeleteEvent}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Success toasts */}
      {showSuccessMessage && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-[#2A546D] p-8 rounded-lg text-center text-white">
            <h2 className="text-xl mb-4">
              <IoMdCheckmarkCircleOutline className="inline-block text-6xl" />
            </h2>
            <p>
              {editEventId
                ? "Event updated successfully!"
                : "Event added successfully!"}
            </p>
          </div>
        </div>
      )}

      {showDeleteSuccessMessage && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-red-500 p-8 rounded-lg text-center text-white">
            <h2 className="text-xl mb-4">
              <IoMdCheckmarkCircleOutline className="inline-block text-6xl" />
            </h2>
            <p>Event deleted successfully!</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Events;