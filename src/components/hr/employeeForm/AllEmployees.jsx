import React, { useState, useEffect } from "react";
import { FiPlusCircle, FiEdit, FiTrash2 } from "react-icons/fi";
import { BsCheck2Circle } from "react-icons/bs";
import uncheckbox from "../../../assets/hr/employee/checkbox/uncheck.png";

import checkbox from "../../../assets/hr/employee/checkbox/checkbox.png";
import { useNavigate } from "react-router-dom";
import SideBar from "../../Sidebar";

const EMPLOYEE_KEY = "employee_data";

function AllEmployees() {
  const [employees, setEmployees] = useState([]);
  const [isChecked, setIsChecked] = useState({});
  const [headerChecked, setHeaderChecked] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const storedEmployees =
      JSON.parse(localStorage.getItem(EMPLOYEE_KEY)) || [];
    setEmployees(storedEmployees);
  }, []);

  const handleCheckboxChange = (id) => {
    setIsChecked((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };

  const handleHeaderCheckboxChange = () => {
    const newCheckedState = !headerChecked;
    setHeaderChecked(newCheckedState);

    const newIsChecked = {};
    employees.forEach((employee) => {
      newIsChecked[employee.id] = newCheckedState;
    });
    setIsChecked(newIsChecked);
  };

  const handleDelete = (id) => {
    const updatedEmployees = employees.filter((employee) => employee.id !== id);
    setEmployees(updatedEmployees);
    localStorage.setItem(EMPLOYEE_KEY, JSON.stringify(updatedEmployees));
    setShowSuccess(true);
    setTimeout(() => {
      setShowSuccess(false);
    }, 1000);
  };

  return (
    <>
      <SideBar />
      <div id="main" className=" ml-[240px] mx-2">
        <div className="ml-5 mb-4">
          <p className="text-[#0098F1] font-semibold">
            Employees/All Employees
          </p>
        </div>

        <div className="flex justify-end mb-4 ">
          <div
            id="addemployee"
            className="w-auto inline-block h-[48px] rounded-lg justify-end items-center bg-[#0098f1]"
          >
            <button
              type="button"
              onClick={() => navigate("/add-employee")}
              className="flex justify-center items-center w-[186px] h-[48px] text-white"
            >
              <FiPlusCircle className="text-2xl font-bold mr-2 bg-[#0098f1]" />{" "}
              Add Employee
            </button>
          </div>
        </div>
        <div id="table" className="w-full">
          <table className="min-w-full overflow-x-auto text-nowrap">
            <thead>
              <tr>
                <th className="py-2 px-4 border-b bg-transparent text-center">
                  <img
                    src={headerChecked ? checkbox : uncheckbox}
                    alt="Header Checkbox"
                    onClick={handleHeaderCheckboxChange}
                    className="bg-transparent cursor-pointer"
                  />
                </th>
                <th className="py-4 px-6 border-b bg-transparent"></th>
                <th className="py-4 px-6 border-b bg-[#0098f1] bg-opacity-30 text-center">
                  Name
                </th>
                <th className="py-4 px-6 border-b bg-[#0098f1] bg-opacity-30 text-center">
                  Email-id
                </th>
                <th className="py-4 px-6 border-b bg-[#0098f1] bg-opacity-30 text-center">
                  Phone
                </th>
                <th className="py-4 px-6 border-b bg-[#0098f1] bg-opacity-30 text-center">
                  Emp ID
                </th>
                <th className="py-4 px-6 border-b bg-[#0098f1] bg-opacity-30 text-center">
                  D.O.J{" "}
                </th>
                <th className="py-4 px-6 border-b bg-[#0098f1] bg-opacity-30 text-center">
                  Role
                </th>
                <th className="py-4 px-6 border-b bg-[#0098f1] bg-opacity-30 text-center">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {employees.map((employee) => (
                <tr key={employee.id} className="">
                  <td className="py-2 px-4 border-b text-center bg-transparent">
                    <img
                      src={isChecked[employee.id] ? checkbox : uncheckbox}
                      alt="Checkbox"
                      onClick={() => handleCheckboxChange(employee.id)}
                      className="cursor-pointer"
                    />
                  </td>
                  <td className="py-2 px-4 border-b bg-transparent text-center">
                    <img
                      src={employee.file}
                      alt="DP"
                      className="w-10 h-10 rounded-full"
                    />
                  </td>
                  <td className="py-2 px-4 bg-transparent border-b text-center">
                    {employee.name}
                  </td>
                  <td className="py-2 px-4 bg-transparent border-b text-center">
                    {employee.email}
                  </td>
                  <td className="py-2 px-4 bg-transparent border-b text-center">
                    {employee.contact}
                  </td>
                  <td className="py-2 px-4 bg-transparent border-b text-center">
                    {employee.empId}
                  </td>
                  <td className="py-2 px-4 bg-transparent border-b text-center">
                    {employee.date}
                  </td>
                  <td className="py-2 px-4 bg-transparent border-b text-center">
                    {employee.role}
                  </td>
                  <td className="py-2 px-4 border-b bg-transparent text-center flex justify-center space-x-2">
                    <button className="text-blue-500 flex py-3 items-center">
                      <FiEdit
                        className="mr-1"
                        onClick={() =>
                          navigate(`/edit-employee/${employee.id}`)
                        }
                      />
                    </button>
                    <button className="text-blue-500 flex py-3 items-center">
                      <FiTrash2
                        className="mr-1"
                        onClick={() => handleDelete(employee.id)}
                      />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {showSuccess && (
          <div className="fixed inset-0 bg-[#0098F1] bg-opacity-10 flex justify-center items-center">
            <div className="bg-[#0098F1] w-[320px] h-[240px] sm:w-[440px] sm:h-[320px] py-8 px-4 sm:py-10 sm:px-16 rounded-lg text-white flex flex-col justify-center items-center">
              <BsCheck2Circle className="text-3xl sm:text-4xl md:text-6xl mb-4" />
              <p className="text-center text-xl sm:text-2xl">
                Employee Removed Successfully!
              </p>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default AllEmployees;
