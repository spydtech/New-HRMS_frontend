import React, { useState } from "react";

const employeeData = [
  {
    year: "2023-2024",
    status: "active",
    employees: [
      {
        id: 1,
        name: "Anna White",
        details: [
          {
            period: "2023-04",
            gross: 1000,
            basic: 500,
            allowances: 200,
            deductions: 50,
            incomeTax: 100,
            surcharge: 20,
            cess: 10,
            netAmount: 820,
          },
        ],
      },
      {
        id: 2,
        name: "David Brown",
        details: [
          {
            period: "2023-04",
            gross: 1200,
            basic: 500,
            allowances: 200,
            deductions: 50,
            incomeTax: 100,
            surcharge: 20,
            cess: 10,
            netAmount: 900,
          },
        ],
      },
    ],
  },
  {
    year: "2023-2024",
    status: "resigned",
    employees: [
      {
        id: 3,
        name: "White",
        details: [
          {
            period: "2023-04",
            gross: 1000,
            basic: 500,
            allowances: 200,
            deductions: 50,
            incomeTax: 100,
            surcharge: 20,
            cess: 10,
            netAmount: 820,
          },
        ],
      },
      {
        id: 4,
        name: "Brown",
        details: [
          {
            period: "2023-04",
            gross: 1000,
            basic: 500,
            allowances: 200,
            deductions: 50,
            incomeTax: 100,
            surcharge: 20,
            cess: 10,
            netAmount: 820,
          },
        ],
      },
    ],
  },
  {
    year: "2023-2024",
    status: "terminated",
    employees: [
      {
        id: 5,
        name: "Anna",
        details: [
          {
            period: "2023-04",
            gross: 1000,
            basic: 500,
            allowances: 200,
            deductions: 50,
            incomeTax: 100,
            surcharge: 20,
            cess: 10,
            netAmount: 820,
          },
        ],
      },
      {
        id: 6,
        name: "David",
        details: [
          {
            period: "2023-04",
            gross: 1000,
            basic: 500,
            allowances: 200,
            deductions: 50,
            incomeTax: 100,
            surcharge: 20,
            cess: 10,
            netAmount: 820,
          },
        ],
      },
    ],
  },
  {
    year: "2024-2025",
    status: "active",
    employees: [
      {
        id: 7,
        name: "Johnson Doe",
        details: [
          {
            period: "2024-05",
            gross: 2000,
            basic: 800,
            allowances: 200,
            deductions: 50,
            incomeTax: 100,
            surcharge: 20,
            cess: 10,
            netAmount: 880,
          },
        ],
      },
      {
        id: 8,
        name: "Jane Davis",
        details: [
          {
            period: "2024-05",
            gross: 2000,
            basic: 800,
            allowances: 200,
            deductions: 50,
            incomeTax: 100,
            surcharge: 20,
            cess: 10,
            netAmount: 880,
          },
        ],
      },
    ],
  },
  {
    year: "2024-2025",
    status: "resigned",
    employees: [
      {
        id: 9,
        name: "Mike",
        details: [
          {
            period: "2024-05",
            gross: 2000,
            basic: 800,
            allowances: 200,
            deductions: 50,
            incomeTax: 100,
            surcharge: 20,
            cess: 10,
            netAmount: 880,
          },
        ],
      },
      {
        id: 10,
        name: "Davis",
        details: [
          {
            period: "2024-05",
            gross: 2000,
            basic: 800,
            allowances: 200,
            deductions: 50,
            incomeTax: 100,
            surcharge: 20,
            cess: 10,
            netAmount: 880,
          },
        ],
      },
    ],
  },
  {
    year: "2024-2025",
    status: "terminated",
    employees: [
      {
        id: 11,
        name: "Johnson",
        details: [
          {
            period: "2024-05",
            gross: 2000,
            basic: 800,
            allowances: 200,
            deductions: 50,
            incomeTax: 100,
            surcharge: 20,
            cess: 10,
            netAmount: 880,
          },
        ],
      },
      {
        id: 12,
        name: "Emily",
        details: [
          {
            period: "2024-05",
            gross: 2000,
            basic: 800,
            allowances: 200,
            deductions: 50,
            incomeTax: 100,
            surcharge: 20,
            cess: 10,
            netAmount: 880,
          },
        ],
      },
    ],
  },
];

const PaySlips = () => {
  const [selectedYear, setSelectedYear] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("");
  const [employees, setEmployees] = useState([]);
  const [selectedEmployee, setSelectedEmployee] = useState(null);

  const handleYearChange = (e) => {
    setSelectedYear(e.target.value);
    filterEmployees(e.target.value, selectedStatus);
  };

  const handleStatusChange = (e) => {
    setSelectedStatus(e.target.value);
    filterEmployees(selectedYear, e.target.value);
  };

  const filterEmployees = (year, status) => {
    const filteredData = employeeData.find(
      (data) => data.year === year && data.status === status
    );
    setEmployees(filteredData ? filteredData.employees : []);
    setSelectedEmployee(null); // Reset selected employee when filters change
  };

  const handleEmployeeChange = (e) => {
    const employee = employees.find(
      (emp) => emp.id === parseInt(e.target.value)
    );
    setSelectedEmployee(employee);
  };

  return (
    <div className="p-4 mt-4 min-h-screen">
      <p className="text-[#E65F2B] lg:text-lg text-sm font-semibold mb-4">
        <span>Payroll</span> / <span>Payslips</span>
      </p>
      <div className="md:text-center md:my-8 max-md:mr-2">
        <div className="mb-4">
          <label className="text-gray-700">Select Financial Year : </label>
          <select
            className="border py-2 border-gray-300 bg-white rounded-md shadow-sm outline-none md:w-80 w-full"
            onChange={handleYearChange}
          >
            <option value="">Select Year</option>
            <option value="2023-2024">2023-2024</option>
            <option value="2024-2025">2024-2025</option>
          </select>
        </div>

        <div className="mb-4 md:pl-6">
          <label className=" text-gray-700">Employee Status : </label>
          <select
            className="border py-2 border-gray-300 bg-white rounded-md shadow-sm outline-none md:w-80 w-full"
            onChange={handleStatusChange}
          >
            <option value="">Select Status</option>
            <option value="active">Active</option>
            <option value="resigned">Resigned</option>
            <option value="terminated">Terminated</option>
          </select>
        </div>

        <div className="mb-4 md:pl-6">
          <label className=" text-gray-700">Select Employee : </label>
          <select
            className="border py-2 border-gray-300 bg-white rounded-md shadow-sm outline-none md:w-80 w-full"
            onChange={handleEmployeeChange}
          >
            <option value="">Select Employee</option>
            {employees.map((employee) => (
              <option key={employee.id} value={employee.id}>
                {employee.name}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="mt-4 w-full overflow-x-auto scrollbar-thin scrollbar-track-white scrollbar-thumb-[#E65F2B] ">
        <table className="min-w-full w-screen overflow-x-scroll text-nowrap">
          <thead className="bg-[#E65F2B] text-white">
            <tr>
              <th className="py-2 border-r border-white">Period</th>
              <th className="py-2 border-r border-white">Gross (₹)</th>
              <th className="py-2 border-r border-white">Basic (₹)</th>
              <th className="py-2 border-r border-white">Allowances (₹)</th>
              <th className="py-2 border-r border-white">Deductions (₹)</th>
              <th className="py-2 border-r border-white">Income Tax (₹)</th>
              <th className="py-2 border-r border-white">Surcharge (₹)</th>
              <th className="py-2 border-r border-white">Cess (₹)</th>
              <th className="py-2">NET AMOUNT (₹)</th>
            </tr>
          </thead>
          <tbody>
            {selectedEmployee ? (
              selectedEmployee.details.map((detail, index) => (
                <tr key={index} className="bg-transparent text-center">
                  <td className="py-2 px-4 border-r border-white">
                    {detail.period}
                  </td>
                  <td className="py-2 px-4 border-r border-white">
                    {detail.gross}
                  </td>
                  <td className="py-2 px-4 border-r border-white">
                    {detail.basic}
                  </td>
                  <td className="py-2 px-4 border-r border-white">
                    {detail.allowances}
                  </td>
                  <td className="py-2 px-4 border-r border-white">
                    {detail.deductions}
                  </td>
                  <td className="py-2 px-4 border-r border-white">
                    {detail.incomeTax}
                  </td>
                  <td className="py-2 px-4 border-r border-white">
                    {detail.surcharge}
                  </td>
                  <td className="py-2 px-4 border-r border-white">
                    {detail.cess}
                  </td>
                  <td className="py-2 px-4 ">{detail.netAmount}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td className="py-2 px-4 text-center" colSpan="9">
                  No matching records found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PaySlips;
