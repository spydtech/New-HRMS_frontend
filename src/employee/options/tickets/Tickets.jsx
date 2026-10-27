import React, { useState } from "react";
import { FaPlusCircle, FaTimes } from "react-icons/fa";

const initialTicketsData = [
  {
    id: 1,
    email: "support@acmecorp.com",
    ticketSubject: "Login Issue",
    assignStaff: "Hr",
    Description:
      "Client is unable to log into their account. The error message indicates an authentication failure.",
    date: "2024-09-01",
    status: "Pending", // Default status
  },
];

const Tickets = () => {
  const [tickets, setTickets] = useState(initialTicketsData);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newTicket, setNewTicket] = useState({
    email: "",
    ticketSubject: "",
    assignStaff: "",
    Description: "",
    date: "",
  });

  const openModal = () => {
    setNewTicket({
      email: "",
      ticketSubject: "",
      assignStaff: "",
      Description: "",
      date: "",
    });
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setNewTicket({
      email: "",
      ticketSubject: "",
      assignStaff: "",
      Description: "",
      date: "",
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewTicket((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const maxId = tickets.reduce((max, ticket) => Math.max(max, ticket.id), 0);
    const newId = maxId + 1;
    setTickets((prev) => [
      ...prev,
      {
        ...newTicket,
        id: newId,
        status: "Pending", // Default status
      },
    ]);
    closeModal();
  };

  const getStatusButtonClass = (status) => {
    switch (status) {
      case "Pending":
        return "bg-yellow-500 text-white";
      case "Rejected":
        return "bg-red-500 text-white";
      case "Success":
        return "bg-[#04b440] text-white";
      default:
        return "bg-gray-400 text-white";
    }
  };

  return (
    <div className="min-h-screen p-4 mt-4">
      <div className="flex flex-col md:flex-row justify-between">
        <div>
          <span className="text-[#2A546D] text-sm lg:text-lg font-medium">
            Employee / Tickets
          </span>
        </div>
      </div>

      <div className="flex justify-end mb-4">
        <button
          className="flex items-center py-3 mr-2 bg-[#2A546D] text-white px-6  rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2A546D]"
          onClick={openModal}
        >
          <FaPlusCircle className="text-xl mr-2" aria-hidden="true" />
          Add Ticket
        </button>
      </div>

      <div className="overflow-x-scroll scrollbar-thin scrollbar-track-white scrollbar-thumb-[#2A546D] pt-4 mx-2">
        {tickets.length > 0 ? (
          <table className="min-w-full w-screen overflow-x-scroll text-nowrap">
            <thead>
              <tr className="bg-[#2a546d] text-white">
                {[
                  "S.No",
                  "Employee Email",
                  "Subject",
                  "Description",
                  "Assign Staff",
                  "Date",
                  "Status",
                ].map((header, index) => (
                  <th key={index} className="p-3 border-r border-white">
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="text-sm md:text-base">
              {tickets.map((ticket, index) => (
                <tr
                  key={ticket.id}
                  className="text-center text-black border border-[#2a546d]"
                >
                  <td className="p-3 border-r border-[#2a546d]">{index + 1}</td>
                  <td className="p-3 border-r border-[#2a546d]">
                    {ticket.email}
                  </td>
                  <td className="p-3 border-r border-[#2a546d]">
                    {ticket.ticketSubject}
                  </td>
                  <td className="p-3 border-r border-[#2a546d]">
                    {ticket.Description}
                  </td>
                  <td className="p-3 border-r border-[#2a546d]">
                    {ticket.assignStaff}
                  </td>
                  <td className="p-3 border-r border-[#2a546d]">
                    {ticket.date}
                  </td>
                  <td className="p-3 border-r border-[#2a546d]">
                    <button
                      className={`px-4 py-1 text-white rounded-lg ${getStatusButtonClass(
                        ticket.status
                      )}`}
                    >
                      {ticket.status}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p className="text-center text-lg">No tickets available</p>
        )}
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-4 sm:p-6 lg:p-8 rounded-lg w-auto h-80 relative overflow-y-auto scrollbar-thin scrollbar-track-white scrollbar-thumb-[#2A546D]">
            <button
              className="absolute top-2  right-2 text-gray-500 hover:text-gray-700"
              onClick={closeModal}
            >
              <FaTimes aria-hidden="true" />
            </button>
            <h2 className="text-xl mb-4  flex items-center text-[#2A546D]">
              <FaPlusCircle className="text-xl mr-2" aria-hidden="true" />
              Add New Ticket
            </h2>
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 gap-4">
                {[
                  { name: "email", label: "Employee Email" },
                  { name: "ticketSubject", label: "Subject" },
                  { name: "Description", label: "Description" },
                  { name: "date", label: "Date" },
                ].map((field, index) => (
                  <div key={index} className="flex flex-col">
                    <label className="mb-1 font-semibold text-[#2A546D] capitalize">
                      {field.label}
                    </label>
                    <input
                      required
                      type="text"
                      name={field.name}
                      value={newTicket[field.name]}
                      onChange={handleChange}
                      className="border border-[#2A546D] p-2 rounded focus:outline-[#2a546d]"
                    />
                  </div>
                ))}
                <div className="flex flex-col">
                  <label className="mb-1 font-semibold text-[#2A546D]">
                    Assign Staff
                  </label>
                  <select
                    name="assignStaff"
                    required
                    value={newTicket.assignStaff}
                    onChange={handleChange}
                    className="border border-[#2A546D] p-2 rounded focus:outline-[#2a546d]"
                  >
                    <option disabled value="">
                      Select
                    </option>
                    <option value="HR">HR</option>
                    <option value="Admin">Admin</option>
                    <option value="Freelancer">Freelancer</option>
                  </select>
                </div>
                <button
                  type="submit"
                  className="bg-[#2A546D] text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2A546D]"
                >
                  Add Ticket
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Tickets;
