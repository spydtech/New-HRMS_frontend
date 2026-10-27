import React, { useState } from "react";
import { FiEdit, FiTrash2 } from "react-icons/fi";

import { FaTrashAlt } from "react-icons/fa";

const Tickets = () => {
  const [tickets, setTickets] = useState([
    {
      id: 231,
      assignBy: "Airi Satou",
      assignTo: "Angelica Ramos",
      email: "airi@example.com",
      subject: "New Code Update",
      status: "PENDING",
      date: "24-07-24",
    },
    {
      id: 232,
      assignBy: "John Doe",
      assignTo: "Jane Smith",
      email: "john.doe@example.com",
      subject: "Bug Fix",
      status: "RESOLVED",
      date: "25-07-24",
    },
    {
      id: 233,
      assignBy: "Alice Johnson",
      assignTo: "Bob Brown",
      email: "alice.johnson@example.com",
      subject: "Feature Request",
      status: "PENDING",
      date: "26-07-24",
    },
    {
      id: 234,
      assignBy: "Emily Davis",
      assignTo: "Michael Scott",
      email: "emily.davis@example.com",
      subject: "UI Improvement",
      status: "PENDING",
      date: "27-07-24",
    },
    {
      id: 235,
      assignBy: "James Brown",
      assignTo: "Linda Harris",
      email: "james.brown@example.com",
      subject: "Security Patch",
      status: "RESOLVED",
      date: "28-07-24",
    },
    {
      id: 236,
      assignBy: "Laura Green",
      assignTo: "Chris Evans",
      email: "laura.green@example.com",
      subject: "Database Update",
      status: "PENDING",
      date: "29-07-24",
    },
    {
      id: 237,
      assignBy: "Daniel Lee",
      assignTo: "Nancy Drew",
      email: "daniel.lee@example.com",
      subject: "Code Review",
      status: "RESOLVED",
      date: "30-07-24",
    },
    {
      id: 238,
      assignBy: "Sophia Wilson",
      assignTo: "Tom Hardy",
      email: "sophia.wilson@example.com",
      subject: "API Integration",
      status: "PENDING",
      date: "31-07-24",
    },
    {
      id: 239,
      assignBy: "Mia Johnson",
      assignTo: "Paul Allen",
      email: "mia.johnson@example.com",
      subject: "Performance Tuning",
      status: "RESOLVED",
      date: "01-08-24",
    },
  ]);

  const handleEdit = (id) => {
    // Replace with your actual edit logic
    alert(`Edit ticket with ID: ${id}`);
  };

  const handleDelete = (id) => {
    // Confirm before deleting
    if (
      window.confirm(`Are you sure you want to delete ticket with ID: ${id}?`)
    ) {
      // Replace with your actual delete logic
      setTickets(tickets.filter((ticket) => ticket.id !== id));
      alert(`Deleted ticket with ID: ${id}`);
    }
  };

  // Sample card data for visualization
  const cardsData = [
    { count: 2078, label: "Total Tickets", color: "#FF1F23" },
    { count: 1278, label: "Resolved", color: "#FFC252" },
    { count: 521, label: "Pending", color: "#9038FC" },
    { count: 978, label: "Responded", color: "#00AAFF" },
  ];

  return (
    <>
      <div className="flex-1 p-4 mx-4 mt-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 justify-around items-center mb-6">
          {cardsData.map((card, index) => (
            <div
              key={index}
              className={`w-full h-[140px] text-white rounded-lg flex flex-col justify-center items-center shadow-lg relative ${
                card.color.startsWith("#") ? "" : card.color
              }`}
              style={
                card.color.startsWith("#")
                  ? { backgroundColor: card.color }
                  : {}
              }
            >
              <span className="text-2xl md:text-3xl font-bold">
                {card.count}
              </span>
              <span className="text-lg md:text-xl">{card.label}</span>
              <div className="absolute bottom-0 right-0 bg-white opacity-20 rounded-full w-16 h-16 md:w-20 md:h-20 transform translate-x-1/4 translate-y-1/4"></div>
            </div>
          ))}
        </div>

        <div className="  overflow-x-scroll scrollbar-thin scrollbar-track-white scrollbar-thumb-[#0098f1] pt-4 mx-1">
          <table className="min-w-full w-screen overflow-x-scroll text-nowrap">
            <thead>
              <tr className="bg-[#0098F1] text-white ">
                <th className="py-2 md:py-4 px-2 md:px-4 text-xs md:text-sm">
                  ID
                </th>
                <th className="py-2 md:py-4 px-2 md:px-4 text-xs md:text-sm">
                  Assign By
                </th>
                <th className="py-2 md:py-4 px-2 md:px-4 text-xs md:text-sm">
                  Assign To
                </th>
                <th className="py-2 md:py-4 px-2 md:px-4 text-xs md:text-sm">
                  E-mail ID
                </th>
                <th className="py-2 md:py-4 px-2 md:px-4 text-xs md:text-sm">
                  Subject
                </th>
                <th className="py-2 md:py-4 px-2 md:px-4 text-xs md:text-sm">
                  Status
                </th>
                <th className="py-2 md:py-4 px-2 md:px-4 text-xs md:text-sm">
                  Date
                </th>
                <th className="py-2 md:py-4 px-2 md:px-4 text-xs md:text-sm">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {tickets.map((ticket) => (
                <tr key={ticket.id} className="border-b text-center  ">
                  <td className=" text-xs md:text-sm ">{ticket.id}</td>
                  <td className=" text-xs md:text-sm ">{ticket.assignBy}</td>
                  <td className=" text-xs md:text-sm ">{ticket.assignTo}</td>
                  <td className=" text-xs md:text-sm ">{ticket.email}</td>
                  <td className=" text-xs md:text-sm ">{ticket.subject}</td>
                  <td>
                    <p
                      className={` text-center text-xs md:text-sm py-1  ${
                        ticket.status === "PENDING"
                          ? "text-white   bg-[#2A8F4C]"
                          : "text-white bg-yellow-500 "
                      } rounded-lg`}
                    >
                      {ticket.status}
                    </p>
                  </td>
                  <td className=" text-xs md:text-sm">{ticket.date}</td>
                  <td className=" text-xs md:text-sm flex items-center space-x-2 justify-center">
                    <button
                      className="text-blue-500 flex py-1 items-center"
                      onClick={() => handleEdit(ticket.id)}
                    >
                      <FiEdit className="mr-1 bg-[#2A8F4C] text-white rounded-md size-6 p-1" />
                    </button>
                    <button
                      className="flex items-center justify-center"
                      onClick={() => handleDelete(ticket.id)}
                    >
                      <FiTrash2 className="mr-1 bg-[#FF3636] text-white flex items-center size-6 p-1 rounded-md" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Tickets;
