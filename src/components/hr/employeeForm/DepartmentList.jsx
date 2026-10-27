import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { MdDelete, MdEdit } from "react-icons/md";
import { FiPlusCircle } from "react-icons/fi";
import { BsCheck2Circle } from "react-icons/bs"; // Import success icon
import SideBar from "../../Sidebar";

function DepartmentList() {
  const [departments, setDepartments] = useState([]);
  const [showSuccess, setShowSuccess] = useState(false); // State for showing success message
  const navigate = useNavigate();

  useEffect(() => {
    const storedDepartments =
      JSON.parse(localStorage.getItem("departments")) || [];
    setDepartments(storedDepartments);
  }, []);

  const handleDelete = (id) => {
    const updatedDepartments = departments.filter(
      (department) => department.id !== id
    );
    setDepartments(updatedDepartments);
    localStorage.setItem("departments", JSON.stringify(updatedDepartments));
    setShowSuccess(true);
    setTimeout(() => {
      setShowSuccess(false);
    }, 1000);
  };

  return (
    <>
      <SideBar />
      <div
        id="main"
        className="h-screen w-auto bg-transparent p-4 ml-[240px]"
      >
        <div className="ml-5">
          <p className="text-[#0098F1] font-semibold">
            Employees/DepartmentList
          </p>
        </div>
        <div className="flex justify-end mb-4">
          <div
            id="addemployee"
            className="w-auto inline-block bg-[#0098f1] h-[48px] rounded-lg justify-end items-center"
          >
            <button
              type="button"
              className="flex justify-center items-center w-[228px] h-[48px] text-white"
              onClick={() => navigate("/add-department")}
            >
              <FiPlusCircle className="text-2xl font-bold mr-2" /> Add New
              Department
            </button>
          </div>
        </div>
        <div id="table" className="w-full">
          <table className="min-w-full overflow-x-auto">
            <thead>
              <tr>
                <th className="py-4 px-16 border-b bg-[#0098f1] bg-opacity-30 text-center">
                  Department Name
                </th>
                <th className="py-4 px-16 border-b bg-[#0098f1] bg-opacity-30 text-center">
                  Department Head
                </th>
                <th className="py-4 px-16 border-b bg-[#0098f1] bg-opacity-30 text-center">
                  Total Employees
                </th>
                <th className="py-4 px-16 border-b bg-[#0098f1] bg-opacity-30 text-center">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {departments.map((department) => (
                <tr key={department.id}>
                  <td className="py-2 px-4 border-b bg-transparent text-center">
                    {department.department}
                  </td>
                  <td className="py-2 px-4 border-b bg-transparent text-center">
                    {department.departmentHead}
                  </td>
                  <td className="py-2 px-4 border-b bg-transparent text-center">
                    {department.totalEmployees}
                  </td>
                  <td className="py-2 px-4 border-b pt-6 bg-transparent text-center flex items-center justify-center space-x-2">
                    <button
                      onClick={() => handleDelete(department.id)}
                      className="flex items-center"
                    >
                      <MdDelete className="text-blue-500 text-2xl mr-1" />
                    </button>
                    <button
                      onClick={() =>
                        navigate(`/edit-departmentList/${department.id}`)
                      }
                      className="flex items-center"
                    >
                      <MdEdit className="text-blue-500 text-2xl mr-1" />
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
                Saved Changes Successfully!
              </p>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default DepartmentList;
