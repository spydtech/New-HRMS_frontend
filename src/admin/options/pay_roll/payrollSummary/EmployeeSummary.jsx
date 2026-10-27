import React, { useState } from "react";
import { HiRefresh } from "react-icons/hi";
import { PiArrowLineDownBold } from "react-icons/pi";
import { RiArrowDownSLine } from "react-icons/ri";
import { GoChevronRight, GoChevronLeft } from "react-icons/go";

const EmployeeSummary = ({ employees }) => {
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const filteredEmployees = employees
    ? employees.filter((employee) =>
        employee.name.toLowerCase().includes(search.toLowerCase())
      )
    : [];

  const itemsPerPage = 2;
  const totalPages = Math.ceil(filteredEmployees.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredEmployees.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  const handleNextPage = () => {
    if (currentPage < totalPages) return setCurrentPage(currentPage + 1);
  };
  const handlePreviousPage = () => {
    if (currentPage > 1) return setCurrentPage(currentPage - 1);
  };

  return (
    <div className="my-8">
      <h1 className="text-xl font-bold">Employee Summary</h1>
      <div className="flex flex-col">
        <div className="my-2 grid gap-2 md:grid-cols-3 lg:grid-cols-4 max-lg:text-xs ">
          <button className="flex gap-1 px-2 p-1 items-center rounded-lg bg-[#E65F2B] text-white">
            <HiRefresh />
            Refresh/Undo
          </button>
          <button className="flex gap-1 px-2 p-1 items-center  rounded-lg bg-gray-800 text-white">
            <PiArrowLineDownBold />
            Cash requirements
          </button>
          <button className="flex gap-1 px-2 p-1 items-center rounded-lg bg-gray-800 text-white">
            Payroll Detailed Report
          </button>
          <button className="flex max-lg:px-2 p-1 text-nowrap items-center justify-between rounded-lg bg-gray-800 text-white">
            Import Allowances/Deductions
            <RiArrowDownSLine className="" />
          </button>
        </div>
        <div className="flex  gap-2 pr-2 border self-end bg-[#e65f2b] rounded-md">
          <input
            type="search"
            className="outline-none pl-3 p-1 text-sm"
            placeholder="Search..."
            onChange={(e) => setSearch(e.target.value)}
            value={search}
          />
          <button>Go</button>
        </div>
      </div>

      {filteredEmployees ? (
        <div>
          <div className="  overflow-x-scroll scrollbar-thin   scrollbar-track-white scrollbar-thumb-[#e65f2b] pt-4 mx-4">
            <table className="min-w-full w-screen overflow-x-scroll  text-nowrap">
              <thead className="bg-[#E65F2B]">
                <tr className="text-sm text-white">
                  <th className="py-3 px-4 border-r border-white whitespace-nowrap">
                    EMPLOYEE NAME
                  </th>
                  <th className="py-3 px-4 border-r border-white">EMPLOYEE</th>
                  <th className="py-3 px-4 border-r border-white">GROSS(₹)</th>
                  <th className="py-3 px-4 border-r border-white whitespace-nowrap">
                    ACTUAL GROSS(₹)
                  </th>
                  <th className="py-3 px-4 border-r border-white">BASIC(₹)</th>
                  <th className="py-3 px-4 border-r border-white">
                    ALLOWANCES(₹)
                  </th>
                  <th className="py-3 px-4 border-r border-white">
                    DEDUCTIONS(₹)
                  </th>
                  <th className="py-3 px-4 border-r border-white whitespace-nowrap">
                    LOSS OF PAY(₹)
                  </th>
                  <th className="py-3 px-4 border-r border-white whitespace-nowrap">
                    INCOME TAX(₹)
                  </th>
                  <th className="py-3 px-4 border-r border-white">
                    SURCHARGE(₹)
                  </th>
                  <th className="py-3 px-4 border-r border-white">CESS(₹)</th>
                  <th className="py-3 px-4 whitespace-nowrap">NET AMOUNT(₹)</th>
                </tr>
              </thead>
              <tbody>
                {currentItems.map((employee) => (
                  <tr key={employee.id} className="text-center">
                    <td className="py-2 px-4 border-r border-white">
                      {employee.name}
                    </td>
                    <td className="py-2 px-4 border-r border-white">
                      {employee.id}
                    </td>
                    <td className="py-2 px-4 border-r border-white">
                      {employee.gross}
                    </td>
                    <td className="py-2 px-4 border-r border-white">
                      {employee.actualGross}
                    </td>
                    <td className="py-2 px-4 border-r border-white">
                      {employee.basic}
                    </td>
                    <td className="py-2 px-4 border-r border-white">
                      {employee.allowances}
                    </td>
                    <td className="py-2 px-4 border-r border-white">
                      {employee.deductions}
                    </td>
                    <td className="py-2 px-4 border-r border-white">
                      {employee.lossOfPay}
                    </td>
                    <td className="py-2 px-4 border-r border-white">
                      {employee.incomeTax}
                    </td>
                    <td className="py-2 px-4 border-r border-white">
                      {employee.surcharge}
                    </td>
                    <td className="py-2 px-4 border-r border-white">
                      {employee.cess}
                    </td>
                    <td className="py-2 px-4">{employee.netAmount}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="font-semibold text-sm">
            Total Records :
            <span className="text-[#E65F2B]"> {filteredEmployees.length}</span>
          </p>
          <div className="flex justify-end items-center gap-3 md:mr-5 ">
            <p>
              {currentPage} of {totalPages}
            </p>
            <button
              onClick={handlePreviousPage}
              className="bg-[#E65F2B] rounded-full h-8 w-8 flex items-center justify-center text-white"
            >
              <GoChevronLeft size={20} />
            </button>

            <button
              onClick={handleNextPage}
              className="bg-[#E65F2B] rounded-full h-8 w-8 flex items-center justify-center text-white"
            >
              <GoChevronRight size={20} />
            </button>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default EmployeeSummary;
