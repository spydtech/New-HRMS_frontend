import React, { useState } from "react";
import * as XLSX from "xlsx";
import { saveAs } from "file-saver";

const Balance = () => {
  const [employees, setEmployees] = useState([
    {
      id: 1,
      name: "John Doe",
      department: "HR",
      location: "New York",
      casualLeave: 2,
      earnedLeave: 5,
      sickLeave: 4,
      compOff: 1,
    },
    {
      id: 2,
      name: "Jane Smith",
      department: "Finance",
      location: "Los Angeles",
      casualLeave: 1,
      earnedLeave: 3,
      sickLeave: 2,
      compOff: 0,
    },
    {
      id: 3,
      name: "Alice Johnson",
      department: "IT",
      location: "San Francisco",
      casualLeave: 3,
      earnedLeave: 2,
      sickLeave: 5,
      compOff: 2,
    },
    {
      id: 4,
      name: "Bob Brown",
      department: "Marketing",
      location: "Chicago",
      casualLeave: 0,
      earnedLeave: 4,
      sickLeave: 2,
      compOff: 1,
    },
    {
      id: 5,
      name: "Charlie Davis",
      department: "Sales",
      location: "Houston",
      casualLeave: 1,
      earnedLeave: 3,
      sickLeave: 2,
      compOff: 0,
    },
    {
      id: 6,
      name: "Diana Evans",
      department: "HR",
      location: "Phoenix",
      casualLeave: 2,
      earnedLeave: 5,
      sickLeave: 5,
      compOff: 1,
    },
    {
      id: 7,
      name: "Edward Foster",
      department: "Finance",
      location: "Dallas",
      casualLeave: 1,
      earnedLeave: 3,
      sickLeave: 2,
      compOff: 0,
    },
    {
      id: 8,
      name: "Fiona Green",
      department: "IT",
      location: "San Diego",
      casualLeave: 2,
      earnedLeave: 4,
      sickLeave: 1,
      compOff: 1,
    },
    {
      id: 9,
      name: "George Harris",
      department: "Marketing",
      location: "Austin",
      casualLeave: 0,
      earnedLeave: 2,
      sickLeave: 4,
      compOff: 0,
    },
    {
      id: 10,
      name: "Hannah James",
      department: "Sales",
      location: "Seattle",
      casualLeave: 1,
      earnedLeave: 3,
      sickLeave: 3,
      compOff: 1,
    },
  ]);

  const [searchTerm, setSearchTerm] = useState("");

  const exportToExcel = () => {
    const workbook = XLSX.utils.book_new();
    const worksheet = XLSX.utils.json_to_sheet(employees);
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

  const importFromExcel = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const data = new Uint8Array(e.target.result);
        const workbook = XLSX.read(data, { type: "array" });
        const firstSheet = workbook.Sheets[workbook.SheetNames[0]];
        const importedData = XLSX.utils.sheet_to_json(firstSheet, {
          header: 1,
        });

        const headers = importedData[0];
        const rows = importedData.slice(1).map((row) => {
          const employee = {};
          headers.forEach((header, index) => {
            employee[header.toLowerCase()] = row[index];
          });
          return employee;
        });

        setEmployees((prevEmployees) => [
          ...prevEmployees,
          ...rows.map((row, index) => ({
            id: prevEmployees.length + index + 1,
            ...row,
          })),
        ]);
      };
      reader.readAsArrayBuffer(file);
    }
  };

  const filteredEmployees = employees.filter((employee) =>
    Object.values(employee).some((value) =>
      value.toString().toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  return (
    <div className="p-2  bg-white">
      <div className="justify-between items-center flex flex-col space-y-2 md:flex-row md:space-y-0 md:space-x-2">
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full md:w-auto border border-[#0098f1] text-[16px] py-1 outline-[#0098f1] rounded px-4 placeholder:text-[16px]"
        />
        <div className="flex flex-col space-y-2 md:flex-row md:space-x-2 md:space-y-0 w-full md:w-auto">
          <button
            onClick={exportToExcel}
            className="bg-[#0098f1] text-sm text-white px-4 py-2 rounded cursor-pointer w-full md:w-auto"
          >
            Export
          </button>
          <input
            type="file"
            accept=".xlsx, .xls"
            onChange={importFromExcel}
            placeholder="import"
            className="bg-[#0098f1] text-sm text-white px-4 py-2 rounded cursor-pointer w-full md:w-auto"
          />
        </div>
      </div>

      <div className="overflow-x-scroll scrollbar-thin scrollbar-track-white scrollbar-thumb-[#0098f1] mt-2">
      <table
          id="employee-logs-table"
          className="min-w-full w-screen overflow-x-scroll text-nowrap"
        >
          <thead>
            <tr className="bg-[#0098f1] text-white  text-sm capitalize leading-normal border border-[#0098f1]">
              <th className="py-3 px-4 border-r border-white font-medium text-nowrap">ID</th>
              <th className="py-3 px-4 border-r border-white font-medium text-nowrap">Employee</th>
              <th className="py-3 px-4 border-r border-white font-medium text-nowrap">Department</th>
              <th className="py-3 px-4 border-r border-white font-medium text-nowrap">Location</th>
              <th className="py-3 px-4 border-r border-white font-medium text-nowrap">Casual Leave</th>
              <th className="py-3 px-4 border-r border-white font-medium text-nowrap">Earned Leave</th>
              <th className="py-3 px-4 border-r border-white font-medium text-nowrap">Sick Leave</th>
              <th className="py-3 px-4  font-medium text-nowrap">Comp Off</th>
            </tr>
          </thead>
          <tbody className="text-black text-sm">
            {filteredEmployees.map((employee) => (
              <tr key={employee.id} className="border text-center bg-white border-[#0098f1]">
                <td className="py-2 px-4 border-r border-[#0098f1]">{employee.id}</td>
                <td className="py-2 px-4 border-r border-[#0098f1] flex items-center justify-center">
                  <img
                    src="https://cdn-icons-png.flaticon.com/128/432/432693.png"
                    alt="Employee"
                    className="w-8 h-8 rounded-full mr-2"
                  />
                  <span>{employee.name}</span>
                </td>
                <td className="py-2 px-4 border-r border-[#0098f1]">{employee.department}</td>
                <td className="py-2 px-4 border-r border-[#0098f1]">{employee.location}</td>
                <td className="py-2 px-4 border-r border-[#0098f1]">{employee.casualLeave}</td>
                <td className="py-2 px-4 border-r border-[#0098f1]">{employee.earnedLeave}</td>
                <td className="py-2 px-4 border-r border-[#0098f1]">{employee.sickLeave}</td>
                <td className="py-2 px-4 ">{employee.compOff}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Balance;
