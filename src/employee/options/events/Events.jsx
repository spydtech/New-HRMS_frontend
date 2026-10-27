import React, { useState } from "react";
import { FaPlusCircle } from "react-icons/fa";
import { GoChevronLeft, GoChevronRight } from "react-icons/go";
import { FiEdit, FiTrash2 } from "react-icons/fi";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
const initialEvents = [
  { id: 1, day: "Thursday", date: "25 Apr 2024", name: "New Event" },
  // Add more Events if needed
];

const ReactCalendar = ({ onEventClick }) => {
  const days = ["SU", "MO", "TU", "WE", "TH", "FR", "SA"];
  const abbreviatedDays = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

  const currentDate = new Date();
  const [currentMonth, setCurrentMonth] = useState(currentDate.getMonth());
  const [currentYear, setCurrentYear] = useState(currentDate.getFullYear());

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
  const startDay = new Date(currentYear, currentMonth, 1).getDay();

  const getCurrentDateString = () => `${months[currentMonth]} ${currentYear}`;

  const getDayTextColor = (day) => {
    return day === 1 || day === 15 || day === 28 || day === 5 || day === 20
      ? "text-[#2A546D]"
      : "text-[#2A546D]";
  };

  const renderDays = () => {
    let daysArray = [];

    for (let i = 0; i < startDay; i++) {
      daysArray.push(<div key={`empty-${i}`} className="day empty"></div>);
    }

    for (let i = 1; i <= daysInMonth; i++) {
      const dayTextColor = getDayTextColor(i);
      const isToday =
        i === currentDate.getDate() &&
        currentMonth === currentDate.getMonth() &&
        currentYear === currentDate.getFullYear();
      const dayClasses = `day text-center text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl m-1 sm:m-2 ${dayTextColor} ${
        isToday ? "bg-[#2A546D] text-white rounded-full" : ""
      }`;

      daysArray.push(
        <div key={i} className={dayClasses} onClick={() => onEventClick(i)}>
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
          <h2 className="font-semibold text-lg sm:text-xl md:text-2xl text-[#2A546D] mb-2 sm:mb-0">
            {getCurrentDateString()}
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

const Events = () => {
  const [events, setEvents] = useState(initialEvents);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [newEvent, setNewEvent] = useState({
    day: "",
    date: "",
    name: "",
  });
  const [editEventId, setEditEventId] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);
  const [deleteEventId, setDeleteEventId] = useState(null);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [showDeleteSuccessMessage, setShowDeleteSuccessMessage] =
    useState(false);
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewEvent((prevEvent) => ({
      ...prevEvent,
      [name]: value,
    }));
  };

  const handleDeleteEvent = () => {
    const updatedHolidays = holidays.filter(
      (holiday) => holiday.id !== deleteHolidayId
    );
    setHolidays(updatedHolidays);
    setShowDeleteSuccessMessage(true);

    setTimeout(() => {
      setShowDeleteSuccessMessage(false);
    }, 3000);
  };

  const handleAddEvent = () => {
    const dateObj = new Date(newEvent.date);
    const dayName = dateObj.toLocaleString("default", { weekday: "long" });

    if (editEventId !== null) {
      const updatedEvents = events.map((event) => {
        if (event.id === editEventId) {
          return {
            ...event,
            day: dayName,
            date: newEvent.date,
            name: newEvent.name,
          };
        }
        return event;
      });
      setEvents(updatedEvents);
      setShowSuccessMessage(true);
    } else {
      const newEventObject = {
        id:
          events.length > 0
            ? Math.max(...events.map((event) => event.id)) + 1
            : 1,
        day: dayName,
        date: newEvent.date,
        name: newEvent.name,
      };
      setEvents([...events, newEventObject]);
      setShowSuccessMessage(true);
    }
    setTimeout(() => {
      setShowSuccessMessage(false);
    }, 3000);

    closeModal();
  };

  const openEditModal = (eventId) => {
    const eventToEdit = events.find((event) => event.id === eventId);
    setEditEventId(eventId);
    setNewEvent({
      day: eventToEdit.day,
      date: eventToEdit.date,
      name: eventToEdit.name,
    });
    setIsModalOpen(true);
  };

  const closeDeleteModal = () => {
    setIsDeleteModalOpen(false);
    setDeleteEventId(null);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setEditEventId(null);
    setNewEvent({
      day: "",
      date: "",
      name: "",
    });
  };

  const openDeleteModal = (holidayId) => {
    setDeleteEventId(holidayId);
    setIsDeleteModalOpen(true);
  };

  const handleDeleteHoliday = () => {
    const updatedEvents = events.filter((event) => event.id !== deleteEventId);
    setEvents(updatedEvents);
    setShowDeleteSuccessMessage(true);

    setTimeout(() => {
      setShowDeleteSuccessMessage(false);
    }, 3000);

    closeDeleteModal();
  };

  const handleEventClick = (day) => {
    const selectedDate = new Date(currentYear, currentMonth, day);
    const dateString = `${selectedDate.getFullYear()}-${String(
      selectedDate.getMonth() + 1
    ).padStart(2, "0")}-${String(selectedDate.getDate()).padStart(2, "0")}`;
    const dayName = selectedDate.toLocaleString("default", { weekday: "long" });

    setSelectedDate(day);
    setNewEvent((prev) => ({
      ...prev,
      date: dateString,
      day: dayName,
    }));
    setIsModalOpen(true);
  };

  return (
    <div className="p-4 mt-4 ">
      <h2 className="text-[#2A546D] lg:text-lg text-sm font-medium  mb-4">
        Employee / Events
      </h2>

      <div className="flex flex-col lg:flex-row gap-4">
        {/* Calendar Container */}
        <div className="w-full lg:w-[70vw] bg-white rounded-lg p-4 lg:order-1">
          <ReactCalendar onEventClick={handleEventClick} />
        </div>

        {/* Blue Container */}
        <div className="w-full lg:w-1/2 bg-[#2A546D] rounded-lg p-4 lg:order-2 flex flex-col items-center">
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
                <h1 className="font-medium">17</h1>
                <h1>Completed</h1>
              </div>
              <div className="text-center text-xs sm:text-sm md:text-base">
                <h1 className="font-medium">17</h1>
                <h1>To Do</h1>
              </div>
              <div className="text-center text-xs sm:text-sm md:text-base">
                <h1 className="font-medium">17</h1>
                <h1>All Tasks</h1>
              </div>
            </div>

            <hr
              className="w-full border-white my-4"
              style={{ opacity: "0.5" }}
            />

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

          <hr className="w-full border-white my-4" style={{ opacity: "0.5" }} />
          <div className="font-roboto text-lg sm:text-xl md:text-2xl mt-2 flex items-start">
            <h1 className="text-white mr-4">Team</h1>
            <div className="flex -space-x-2">
              {[...Array(4)].map((_, index) => (
                <img
                  key={index}
                  src="https://res.cloudinary.com/ds5ooz2ve/image/upload/v1721382978/989da2826fe6e25ad1f617fda7e70025_d6ucl3.png"
                  alt={`Image ${index + 1}`}
                  className={`w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 rounded-full`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="w-full md:w-12/12 mx-auto bg-white  rounded-lg p-4 mt-4">
        <h1 className="text-xl font-bold mb-4 text-[#2A546D]">Events List</h1>
        <div className="  overflow-x-scroll scrollbar-thin   scrollbar-track-white scrollbar-thumb-[#2a546d] pt-4 mx-4">
          <table className="min-w-full w-screen overflow-x-scroll  text-nowrap">
            <thead className="">
              <tr className="bg-[#2a546d] text-white">
                <th className="p-3 border border-r-white border-[#2a546d]">
                  Day
                </th>
                <th className="p-3 border-r border-white">Date</th>
                <th className="p-3  border  border-[#2a546d]">Event</th>
                {/* <th className="p-2 text-center">Actions</th> */}
              </tr>
            </thead>
            <tbody className="text-center">
              {events.map((event) => (
                <tr
                  key={event.id}
                  className="text-center text-black border  border-[#2a546d]"
                >
                  <td className="p-3 border-r border-[#2a546d]">{event.day}</td>
                  <td className="p-3 border-r border-[#2a546d]">
                    {event.date}
                  </td>
                  <td className="p-3 border-r border-[#2a546d]">
                    {event.name}
                  </td>
                  {/* <td className="py-2 px-4 border-b bg-transparent text-center border-r-0 border-[#2A546D] border-opacity-80">
                    <div className="flex justify-center items-center space-x-2">
                      <button
                        className="text-blue-500 flex py-3 items-center"
                        onClick={() => openEditModal(event.id)}
                      >
                        <FiEdit className="mr-1 bg-[#2A8F4C] text-white rounded-md size-6 p-1" />
                      </button>
                      <button
                        className="flex items-center justify-center"
                        onClick={() => openDeleteModal(event.id)}
                      >
                        <FiTrash2 className="mr-1 bg-[#FF3636] text-white flex items-center size-6 p-1 rounded-md" />
                      </button>
                    </div>
                  </td> */}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div className="bg-white rounded-lg p-6 w-[60vw]">
            <h2 className="text-2xl mb-4 text-[#2A546D]">
              {editEventId ? "Edit Event" : "Add Event"}
            </h2>
            <div className="grid grid-cols-1 gap-4">
              <div>
                <label className="block mb-2">Date</label>
                <input
                  type="date"
                  name="date"
                  value={newEvent.date}
                  onChange={handleInputChange}
                  className="border p-2 w-full border-[#2A546D] border-opacity-40 focus:outline-none"
                />
              </div>
              <div>
                <label className="block mb-2">Event Name</label>
                <input
                  type="text"
                  name="name"
                  value={newEvent.name}
                  onChange={handleInputChange}
                  className="border p-2 w-full border-[#2A546D] border-opacity-40 focus:outline-none"
                />
              </div>
            </div>
            <div className="mt-4 flex justify-end">
              <button
                className="bg-white border border-[#2A546D] font-semibold text-[#2A546D] px-4 py-2 rounded mr-2"
                onClick={closeModal}
              >
                Cancel
              </button>
              <button
                className="bg-[#2A546D] text-white px-4 py-2 rounded"
                onClick={handleAddEvent}
              >
                {editEventId ? "Update" : "Add"}
              </button>
            </div>
          </div>
        </div>
      )}

      {isDeleteModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div className="bg-white rounded-lg p-6 w-[60vw]">
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
