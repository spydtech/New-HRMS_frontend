import React, { useState } from "react";

import Select from "react-select";
import { FiPlusCircle } from "react-icons/fi";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
const userdata = [
  {
    id: 1,
    employerName: "seoling duja",
    payperiod: "01 Jan, 2024 to 31 Jan, 2024",
  },
  {
    id: 2,
    employerName: "Lena Smith",
    payperiod: "01 Feb, 2024 to 29 Feb, 2024",
  },
  {
    id: 3,
    employerName: "John Doe",
    payperiod: "01 Mar, 2024 to 31 Mar, 2024",
  },
  {
    id: 4,
    employerName: "Emily Johnson",
    payperiod: "01 Apr, 2024 to 30 Apr, 2024",
  },
  {
    id: 5,
    employerName: "Michael Brown",
    payperiod: "01 May, 2024 to 31 May, 2024",
  },
  {
    id: 6,
    employerName: "Sarah Davis",
    payperiod: "01 Jun, 2024 to 30 Jun, 2024",
  },
  {
    id: 7,
    employerName: "David Wilson",
    payperiod: "01 Jul, 2024 to 31 Jul, 2024",
  },
  {
    id: 8,
    employerName: "Olivia Martinez",
    payperiod: "01 Aug, 2024 to 31 Aug, 2024",
  },
  {
    id: 9,
    employerName: "James Taylor",
    payperiod: "01 Sep, 2024 to 30 Sep, 2024",
  },
  {
    id: 10,
    employerName: "Sophia Anderson",
    payperiod: "01 Oct, 2024 to 31 Oct, 2024",
  },
];

const initialData = [
  {
    employeeName: "John Doe",
    runDate: "2023-07-01",
    status: "Completed",
    payPeriod: "June 2023",
    gross: 5000,
    incomeTax: 500,
    surge: 50,
    cess: 20,
    netAmount: 4430,
  },
  {
    employeeName: "Jane Smith",
    runDate: "2023-07-01",
    status: "Pending",
    payPeriod: "June 2023",
    gross: 5500,
    incomeTax: 550,
    surge: 55,
    cess: 22,
    netAmount: 4873,
  },
  // More data objects can be added here
];

function Settlement() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedEmployer, setSelectedEmployer] = useState(null);
  const [selectedPayPeriod, setSelectedPayPeriod] = useState(null);
  const [payPeriods, setPayPeriods] = useState([]);
  const [tableData, setTableData] = useState(initialData);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  const handleEmployerChange = (selectedOption) => {
    setSelectedEmployer(selectedOption);

    const relatedPayPeriods = userdata
      .filter((user) => user.employerName === selectedOption?.value)
      .map((user) => ({ value: user.payperiod, label: user.payperiod }));
    setPayPeriods(relatedPayPeriods);
    setSelectedPayPeriod(null);
  };

  const handlePayPeriodChange = (selectedOption) => {
    setSelectedPayPeriod(selectedOption);
  };

  const handleStart = () => {
    if (selectedEmployer && selectedPayPeriod) {
      const newEntry = {
        employeeName: selectedEmployer.value,
        runDate: new Date().toISOString().split("T")[0], // Current date as runDate
        status: "Pending",
        payPeriod: selectedPayPeriod.value,
        gross: 0, // Default values
        incomeTax: 0,
        surge: 0,
        cess: 0,
        netAmount: 0,
      };

      // Add the new entry to the table data
      setTableData([...tableData, newEntry]);
      setShowSuccessMessage(true);
    }
    setTimeout(() => {
      setShowSuccessMessage(false);
    }, 3000);
    handleCloseModal();
  };

  return (
    <div className="p-4 mt-4 min-h-screen">
      <div className="mb-4 lg:mb-0">
        <span className="text-[#E65F2B] text-sm lg:text-lg font-semibold">
          Payroll / Settlements
        </span>
      </div>
      <div id="submain1" className="flex    justify-end items-center">
        <div className="  lg:w-auto  flex rounded-lg bg-[#e65f2b]">
          <button
            className="flex items-center  text-sm lg:text-lg bg-[#e65f2b] text-white p-2  rounded-lg "
            onClick={handleOpenModal}
          >
            <FiPlusCircle className="text-white text-xl mr-2" />
            <span className="text-white bg-[#e65f2b] font-medium text-sm lg:text-lg">
              Add Settlement
            </span>
          </button>
        </div>
      </div>

      <div
        id="table"
        className="mt-4 w-full overflow-x-auto scrollbar-thin scrollbar-track-white scrollbar-thumb-[#e65f2b]"
      >
        <table className="min-w-full w-screen overflow-x-scroll text-nowrap ">
          <thead>
            <tr>
              <th className="px-4 bg-[#E65F2B]  border-r border-white text-white py-3">
                Employee Name
              </th>
              <th className="px-4 bg-[#E65F2B]  border-r border-white text-white py-3">
                Run Date
              </th>
              <th className="px-4 bg-[#E65F2B]  border-r border-white text-white py-3">
                Status
              </th>
              <th className="px-4 bg-[#E65F2B]  border-r border-white text-white py-3">
                Pay Period
              </th>
              <th className="px-4 bg-[#E65F2B]  border-r border-white text-white py-3">
                Gross
              </th>
              <th className="px-4 bg-[#E65F2B]  border-r border-white text-white py-3">
                Income Tax
              </th>
              <th className="px-4 bg-[#E65F2B]  border-r border-white text-white py-3">
                Surge
              </th>
              <th className="px-4 bg-[#E65F2B]  border-r border-white text-white py-3">
                Cess
              </th>
              <th className="px-4 bg-[#E65F2B]  border-r border-white text-white py-3">
                Net Amount
              </th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((item, index) => (
              <tr
                key={index}
                className="text-[#e65f2b] border-b border-[#e65f2b]"
              >
                <td className="px-4 py-3 text-center border  border-[#e65f2b]">
                  {item.employeeName}
                </td>
                <td className="px-4 py-3 text-center border-r border-[#e65f2b]">
                  {item.runDate}
                </td>
                <td className="px-4 py-3 text-center border-r border-[#e65f2b]">
                  {item.status}
                </td>
                <td className="px-4 py-3 text-center border-r border-[#e65f2b]">
                  {item.payPeriod}
                </td>
                <td className="px-4 py-3 text-center border-r border-[#e65f2b]">
                  {item.gross}
                </td>
                <td className="px-4 py-3 text-center border-r border-[#e65f2b]">
                  {item.incomeTax}
                </td>
                <td className="px-4 py-3 text-center border-r border-[#e65f2b]">
                  {item.surge}
                </td>
                <td className="px-4 py-3 text-center border-r border-[#e65f2b]">
                  {item.cess}
                </td>
                <td className="px-4 py-3 text-center border-r border-[#e65f2b]">
                  {item.netAmount}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0  z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white  p-4 md:p-8 rounded-lg shadow-lg w-[90vw] md:w-[60vw]">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-bold text-[#e65f2b]">Settlement</h2>
              <button
                className="font-bold cursor-pointer text-xl md:text-xl"
                onClick={handleCloseModal}
              >
                X
              </button>
            </div>
            <hr className="my-4" />
            <div className="flex flex-col w-auto items-center mb-4">
              <div className="flex items-center justify-between w-full space-x-2 md:space-x-4 mb-4">
                <label
                  htmlFor="employer"
                  className="block text-lg  font-medium text-[#e65f2b] whitespace-nowrap"
                >
                  Employer Name
                </label>
                <Select
                  id="employer"
                  className="react-select-container  w-auto "
                  classNamePrefix="react-select"
                  options={userdata.map((user) => ({
                    value: user.employerName,
                    label: user.employerName,
                  }))}
                  value={selectedEmployer}
                  onChange={handleEmployerChange}
                  placeholder="Select an employer"
                  isClearable
                />
              </div>

              {selectedEmployer && (
                <div className="flex items-center justify-between w-full space-x-2 md:space-x-4 mb-4">
                  <label
                    htmlFor="payperiod"
                    className="block text-lg  font-medium text-[#e65f2b] whitespace-nowrap"
                  >
                    Pay Period
                  </label>
                  <Select
                    id="payperiod"
                    className="react-select-container w-auto "
                    classNamePrefix="react-select"
                    options={payPeriods}
                    value={selectedPayPeriod}
                    onChange={handlePayPeriodChange}
                    placeholder="Select a pay period"
                    isClearable
                  />
                </div>
              )}
            </div>
            <div className="flex flex-col md:flex-row justify-end space-x-0 md:space-x-4">
              <button
                className=" border  text-white bg-gray-400 h-[40px] w-full md:w-[120px] rounded-lg mb-4 md:mb-0"
                onClick={handleCloseModal}
              >
                Cancel
              </button>
              <button
                className="bg-[#e65f2b] text-white h-[40px] w-full md:w-[120px] rounded-lg"
                onClick={handleStart}
                disabled={!selectedEmployer || !selectedPayPeriod}
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
      {showSuccessMessage && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div
            style={{
              background: "linear-gradient(180deg, #E65F2B 0%, #FFC252 100%)",
            }}
            className=" p-8 rounded-lg text-center text-white"
          >
            <h2 className="text-xl mb-4">
              <IoMdCheckmarkCircleOutline className="inline-block text-6xl" />
            </h2>
            <span>Settlement Added Successfully!</span>
          </div>
        </div>
      )}
    </div>
  );
}

export default Settlement;
