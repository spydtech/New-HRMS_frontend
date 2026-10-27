import React, { useState } from "react";

// Sample data
const Tabledata = [
  {
    id: 1,
    "S.no": 1,
    "Employee Name": "John Doe",
    "Employee ID": "235434",
    "Employee E-mail": "johndoe@example.com",
    Action: "Pending",
  },
  {
    id: 2,
    "S.no": 2,
    "Employee Name": "Jane Smith",
    "Employee ID": "235435",
    "Employee E-mail": "janesmith@example.com",
    Action: "Approved",
  },
  {
    id: 3,
    "S.no": 3,
    "Employee Name": "Alice Johnson",
    "Employee ID": "235436",
    "Employee E-mail": "alicejohnson@example.com",
    Action: "Pending",
  },
  {
    id: 4,
    "S.no": 4,
    "Employee Name": "Bob Brown",
    "Employee ID": "235437",
    "Employee E-mail": "bobbrown@example.com",
    Action: "Approved",
  },
  {
    id: 5,
    "S.no": 5,
    "Employee Name": "Charlie Davis",
    "Employee ID": "235438",
    "Employee E-mail": "charliedavis@example.com",
    Action: "Rejected",
  },
];

const EmployeePasswordReq = () => {
  const [selectedOptions, setSelectedOptions] = useState(
    Tabledata.map((row) => row.Action)
  ); // Initialize with action from data);

  const handleSelectChange = (index, value) => {
    const newSelections = [...selectedOptions];
    newSelections[index] = value;
    setSelectedOptions(newSelections);
  };

  const getSelectStyles = (action) => {
    switch (action) {
      case "Approved":
        return "bg-green-500 text-white";
      case "Rejected":
        return "bg-red-500 text-white";
      case "Pending":
        return "bg-orange-500 text-white";
      default:
        return "bg-gray-300 text-black";
    }
  };

  return (
    <div className="p-4 mt-4 min-h-screen">
      <h1 className="text-lg font-bold mb-10 text-[#0098F1]">
        Hr Management / Password Employee
      </h1>
      <div className="  overflow-x-scroll scrollbar-thin   scrollbar-track-white scrollbar-thumb-[#0098f1] pt-4 mx-2">
        <table className="min-w-full w-screen overflow-x-scroll  text-nowrap">
          <thead className="bg-[#0098F1] text-white ">
            <tr className="border border-[#0098F1]">
              <th className="py-3 px-4 border-r border-white text-center text-sm font-medium">
                S.no
              </th>
              <th className="py-3 px-4 border-r border-white text-center text-sm font-medium">
                Employee Name
              </th>
              <th className="py-3 px-4 border-r border-white text-center text-sm font-medium">
                Employee ID
              </th>
              <th className="py-3 px-4 border-r border-white text-center text-sm font-medium">
                Employee E-mail
              </th>
              <th className="py-3 px-4 text-center text-sm font-medium">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {Tabledata.map((row, index) => (
              <tr
                key={row.id}
                className="border text-center bg-white border-[#0098f1]"
              >
                <td className="py-2 px-4 border-r border-[#0098F1] text-sm text-center bg-white">
                  {row["S.no"]}
                </td>
                <td className="py-2 px-4 border-r border-[#0098F1] text-sm text-center bg-white">
                  {row["Employee Name"]}
                </td>
                <td className="py-2 px-4 border-r border-[#0098F1] text-sm text-center bg-white">
                  {row["Employee ID"]}
                </td>
                <td className="py-2 px-4 border-r border-[#0098F1] text-sm text-center bg-white">
                  {row["Employee E-mail"]}
                </td>
                {/* <td className="py-2 px-4 text-sm flex justify-center">
                  <div className="flex space-x-2">
                    <button
                      onClick={() => handleApproveClick(row["Employee ID"])}
                      className={`h-[30px] w-[100px] rounded ${getButtonStyles(
                        row["Action"]
                      )}`}
                    >
                      {row["Action"]}
                    </button>
                  </div>
                </td> */}
                <td className="text-center max-lg:p-1 bg-white">
                  <select
                    className={`p-1 px-2 outline-none rounded ${getSelectStyles(
                      selectedOptions[index]
                    )}`}
                    value={selectedOptions[index]}
                    onChange={(e) => handleSelectChange(index, e.target.value)}
                  >
                    <option
                      value="Approved"
                      className="bg-green-500 text-white"
                    >
                      Approved
                    </option>
                    <option value="Rejected" className="bg-red-500 text-white">
                      Rejected
                    </option>
                    <option
                      value="Pending"
                      className="bg-orange-500 text-white"
                    >
                      Pending
                    </option>
                  </select>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EmployeePasswordReq;
