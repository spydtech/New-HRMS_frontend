import React, { useState } from "react";
import { IoIosChatbubbles } from "react-icons/io";
import { GoChevronRight, GoChevronLeft } from "react-icons/go";

const Messages = [
  {
    name: "Sathish Chiluveru",
    description: "Payroll Refreshed for all employees.",
    date: "Jul24,2024 at 06:00 PM",
  },
  {
    name: "Mounika Ch",
    description: "Payroll Started Full Time Batch.",
    date: "Jul24,2024 at 06:50 PM",
  },
  {
    name: "Professor Ali",
    description: "Payroll Refreshed for all employees.",
    date: "Jul24,2024 at 06:00 PM",
  },
  {
    name: "Shyam Ch",
    description: "Payroll Started Full Time Batch.",
    date: "Jul24,2024 at 06:50 PM",
  },
  {
    name: "Captain Jonny",
    description: "Payroll Refreshed for all employees.",
    date: "Jul24,2024 at 06:00 PM",
  },
  {
    name: "Jones Marvik",
    description: "Payroll Started Full Time Batch.",
    date: "Jul24,2024 at 06:50 PM",
  },
];

const Activity = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 2;
  const totalPages = Math.ceil(Messages.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = Messages.slice(indexOfFirstItem, indexOfLastItem);

  const handleNextPage = () => {
    if (currentPage < totalPages) return setCurrentPage(currentPage + 1);
  };
  const handlePreviousPage = () => {
    if (currentPage > 1) return setCurrentPage(currentPage - 1);
  };

  return (
    <div className="my-5">
      <h1 className="flex items-center gap-[2px] font-bold border-b pb-2 border-gray-400">
        <IoIosChatbubbles className="text-[#E65F2B] text-xl" />
        Activity
      </h1>
      <div>
        {currentItems.map((message, index) => {
          const nameParts = message.name.split(" ");
          const firstNameLetter = nameParts[0][0];
          const lastNameLetter = nameParts[nameParts.length - 1][0];
          return (
            <div key={index} className="my-2 flex gap-x-3 items-center">
              <h1 className="bg-[#E65F2B] text-white h-10 w-10 flex justify-center items-center rounded-full text-xl ">
                {firstNameLetter}
                {lastNameLetter}
              </h1>
              <div className="text-xs ">
                <h1 className="font-bold">{message.name}</h1>
                <p>{message.description}</p>
                <p>{message.date}</p>
              </div>
            </div>
          );
        })}
      </div>
      <div className="flex justify-end items-center gap-3 md:mr-5">
      <p>{currentPage} of {totalPages}</p>
        <button
          type="button"
          onClick={handlePreviousPage}
          className="h-8 w-8 bg-[#E65F2B] flex items-center justify-center text-white rounded-full"
        >
          <GoChevronLeft size={20} />
        </button>
        <button
          type="button"
          onClick={handleNextPage}
          className="h-8 w-8 bg-[#E65F2B] flex items-center justify-center text-white rounded-full"
        >
          <GoChevronRight size={20} />
        </button>
      </div>
    </div>
  );
};

export default Activity;
