import React, { useState, useEffect } from "react";
import * as XLSX from "xlsx";
import { saveAs } from "file-saver";

const Logs = () => {
  const [employees, setEmployees] = useState([
    {
      id: 1,
      name: "John Doe",
      department: "HR",
      type: "Sick Leave",
      startDate: "2024-08-01",
      endDate: "2024-08-05",
      days: "4",
      status: "Pending", // Default status
      isChecked: false, // Checkbox state
    },
    {
      id: 2,
      name: "Jane Smith",
      department: "Finance",
      type: "Sick Leave",
      startDate: "2024-08-06",
      endDate: "2024-08-07",
      days: "1",
      status: "Pending", // Default status
      isChecked: false, // Checkbox state
    },
    {
      id: 3,
      name: "Alice Johnson",
      department: "IT",
      type: "Sick Leave",
      startDate: "2024-08-10",
      endDate: "2024-08-15",
      days: "5",
      status: "Pending",
      isChecked: false,
    },
    {
      id: 4,
      name: "Bob Brown",
      department: "Marketing",
      type: "Sick Leave",
      startDate: "2024-08-12",
      endDate: "2024-08-14",
      days: "2",
      status: "Pending",
      isChecked: false,
    },
    {
      id: 5,
      name: "Charlie Davis",
      department: "Sales",
      type: "Sick Leave",
      startDate: "2024-08-01",
      endDate: "2024-08-03",
      days: "2",
      status: "Pending",
      isChecked: false,
    },
    {
      id: 6,
      name: "Diana Evans",
      department: "HR",
      type: "Sick Leave",
      startDate: "2024-08-20",
      endDate: "2024-08-25",
      days: "5",
      status: "Pending",
      isChecked: false,
    },
    {
      id: 7,
      name: "Edward Foster",
      department: "Finance",
      type: "Sick Leave",
      startDate: "2024-08-07",
      endDate: "2024-08-09",
      days: "2",
      status: "Pending",
      isChecked: false,
    },
    {
      id: 8,
      name: "Fiona Green",
      department: "IT",
      type: "Sick Leave",
      startDate: "2024-08-10",
      endDate: "2024-08-11",
      days: "1",
      status: "Pending",
      isChecked: false,
    },
    {
      id: 9,
      name: "George Harris",
      department: "Marketing",
      type: "Sick Leave",
      startDate: "2024-08-18",
      endDate: "2024-08-22",
      days: "4",
      status: "Pending",
      isChecked: false,
    },
    {
      id: 10,
      name: "Hannah James",
      department: "Sales",
      type: "Sick Leave",
      startDate: "2024-08-05",
      endDate: "2024-08-08",
      days: "3",
      status: "Pending",
      isChecked: false,
    },
  ]);

  const [searchTerm, setSearchTerm] = useState("");
  const [pendingCount, setPendingCount] = useState(0);

  useEffect(() => {
    // Update pending count based on current employees
    const initialPendingCount = employees.filter(
      (employee) => employee.status === "Pending"
    ).length;
    setPendingCount(initialPendingCount);
    localStorage.setItem("sickPendingCount", initialPendingCount);
  }, [employees]); // Run this effect when employees change

  useEffect(() => {
    localStorage.setItem("sickLeaveEmployees", JSON.stringify(employees));
    localStorage.setItem("sickPendingCount", pendingCount);
  }, [employees, pendingCount]);

  const handleStatusChange = (id, newStatus) => {
    setEmployees((prevEmployees) =>
      prevEmployees.map((employee) => {
        if (employee.id === id) {
          if (employee.status === "Pending" && newStatus !== "Pending") {
            setPendingCount((prevCount) => prevCount - 1);
          } else if (employee.status !== "Pending" && newStatus === "Pending") {
            setPendingCount((prevCount) => prevCount + 1);
          }
          return { ...employee, status: newStatus };
        }
        return employee;
      })
    );
  };

  const handleSelectAll = (isChecked) => {
    setEmployees((prevEmployees) =>
      prevEmployees.map((employee) => ({ ...employee, isChecked }))
    );
  };

  const handleIndividualCheckboxChange = (id) => {
    setEmployees((prevEmployees) =>
      prevEmployees.map((employee) =>
        employee.id === id
          ? { ...employee, isChecked: !employee.isChecked }
          : employee
      )
    );
  };

  const exportToExcel = () => {
    const filteredEmployees = employees.map(({ isChecked, ...rest }) => rest);
    const workbook = XLSX.utils.book_new();
    const worksheet = XLSX.utils.json_to_sheet(filteredEmployees);
    XLSX.utils.book_append_sheet(workbook, worksheet, "Employee Logs");
    const excelBuffer = XLSX.write(workbook, {
      bookType: "xlsx",
      type: "array",
    });
    const data = new Blob([excelBuffer], {
      type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    });
    saveAs(data, "Employee_Logs.xlsx");
  };

  const filteredEmployees = employees.filter((employee) =>
    Object.values(employee).some((value) =>
      value.toString().toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  return (
    <div className="p-2 bg-white min-h-screen">
      <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0 lg:space-x-4">
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="border w-full lg:w-auto border-[#0098f1] text-[16px] py-1 outline-[#0098f1] rounded px-4 placeholder:text-[16px]"
        />
        <button
          onClick={exportToExcel}
          className="bg-[#0098f1] text-sm text-white px-4 py-2 rounded cursor-pointer w-full lg:w-auto"
        >
          Export
        </button>
      </div>

      <div className="overflow-x-scroll scrollbar-thin scrollbar-track-white scrollbar-thumb-[#0098f1] mt-2">
      <table
          id="employee-logs-table"
          className="min-w-full w-screen overflow-x-scroll text-nowrap"
        >
          <thead>
            <tr className="bg-[#0098f1] text-white capitalize text-sm leading-normal border border-[#0098f1]">
              <th className="py-3 px-4 border-r border-white font-medium text-nowrap">
                <input
                  type="checkbox"
                  onChange={(e) => handleSelectAll(e.target.checked)}
                />
              </th>
              <th className="py-3 px-4 border-r border-white font-medium text-nowrap">
                ID
              </th>
              <th className="py-3 px-4 border-r border-white font-medium text-nowrap">
                Employee
              </th>
              <th className="py-3 px-4 border-r border-white font-medium text-nowrap">
                Department
              </th>
              <th className="py-3 px-4 border-r border-white font-medium text-nowrap">
                Type
              </th>
              <th className="py-3 px-4 border-r border-white font-medium text-nowrap">
                Start Date
              </th>
              <th className="py-3 px-4 border-r border-white font-medium text-nowrap">
                End Date
              </th>
              <th className="py-3 px-4 border-r border-white font-medium text-nowrap">
                Days
              </th>
              <th className="py-3 px-4 border-r border-white font-medium text-nowrap">
                Status
              </th>
              <th className="py-3 px-4 border-r border-white font-medium text-nowrap">
                Action
              </th>
            </tr>
          </thead>
          <tbody className="text-black text-sm">
            {filteredEmployees.map((employee) => (
              <tr
                key={employee.id}
                className="border text-center bg-white border-[#0098f1]"
              >
                <td className="py-2 px-4 border-r border-[#0098f1]">
                  <input
                    type="checkbox"
                    checked={employee.isChecked}
                    onChange={() => handleIndividualCheckboxChange(employee.id)}
                  />
                </td>
                <td className="py-2 px-4 border-r border-[#0098f1]">
                  {employee.id}
                </td>
                <td className=" py-2 px-4 border-r border-[#0098f1]">
                  <div className="flex items-center justify-center space-x-2">
                    <img
                      src="https://cdn-icons-png.flaticon.com/128/432/432693.png"
                      alt="Employee"
                      className="w-8 h-8 rounded-full"
                    />
                    <span>{employee.name}</span>
                  </div>
                </td>
                <td className="py-2 px-4 border-r border-[#0098f1]">
                  {employee.department}
                </td>
                <td className="py-2 px-4 border-r border-[#0098f1]">
                  {employee.type}
                </td>
                <td className="py-2 px-4 border-r border-[#0098f1]">
                  {employee.startDate}
                </td>
                <td className="py-2 px-4 border-r border-[#0098f1]">
                  {employee.endDate}
                </td>
                <td className="py-2 px-4 border-r border-[#0098f1]">
                  {employee.days}
                </td>
                <td className="py-2 px-4 border-r border-[#0098f1]">
                  {employee.status === "Pending" ? (
                    <select
                      value={employee.status}
                      onChange={(e) =>
                        handleStatusChange(employee.id, e.target.value)
                      }
                      className={`border border-[#0098f1] outline-[#0098f1] rounded px-2 py-1 ${
                        employee.status === "Approved"
                          ? "bg-green-500"
                          : employee.status === "Rejected"
                          ? "bg-red-500"
                          : "bg-yellow-500"
                      }`}
                    >
                      <option value="Pending">Pending</option>
                      <option value="Approved">Approved</option>
                      <option value="Rejected">Rejected</option>
                    </select>
                  ) : (
                    <span
                      className={`px-2 py-1 rounded ${
                        employee.status === "Approved"
                          ? "bg-green-500 text-white"
                          : "bg-red-500 text-white"
                      }`}
                    >
                      {employee.status}
                    </span>
                  )}
                </td>
                <td className="py-2 px-4 ">
                  <button className="text-blue-500 hover:underline">
                    View Details
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Logs;
