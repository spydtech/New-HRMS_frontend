import React, { useState, useEffect, useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { FiEdit3 } from "react-icons/fi";
import { BsCheck2Circle } from "react-icons/bs";
import SideBar from "../../Sidebar";

const EMPLOYEE_KEY = "employee_data";

const EditEmployee = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const buttonRef = useRef(null);

  const [name, setName] = useState("");
  const [empId, setEmpId] = useState("");
  const [contact, setContact] = useState("");
  const [date, setDate] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const [file, setFile] = useState(null);
  const [showSuccess, setShowSuccess] = useState(false);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    const existingEmployees =
      JSON.parse(localStorage.getItem(EMPLOYEE_KEY)) || [];
    const employeeToUpdate = existingEmployees.find(
      (emp) => emp.id === parseInt(id)
    );
    if (employeeToUpdate) {
      setName(employeeToUpdate.name);
      setEmpId(employeeToUpdate.empId);
      setContact(employeeToUpdate.contact);
      setDate(employeeToUpdate.date);
      setEmail(employeeToUpdate.email);
      setRole(employeeToUpdate.role);
    }
  }, [id]);

  const onEditClick = (id) => {
    const element = document.querySelector("#" + id);
    element.focus();
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};
    if (!name.trim()) newErrors.name = "Name is required";
    if (!empId.trim()) newErrors.empId = "Employee ID is required";
    if (!contact.trim()) newErrors.contact = "Contact Number is required";
    if (!date.trim()) newErrors.date = "Joining Date is required";
    if (!email.trim()) newErrors.email = "Email is required";
    if (!role.trim()) newErrors.role = "Role is required";
    if (!file) newErrors.file = "File is required";

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      const updatedEmployee = {
        id: parseInt(id),
        name,
        empId,
        contact,
        date,
        email,
        role,
        dp: URL.createObjectURL(file), // Assuming dp is updated with file
      };

      const existingEmployees =
        JSON.parse(localStorage.getItem(EMPLOYEE_KEY)) || [];
      const updatedEmployees = existingEmployees.map((emp) =>
        emp.id === updatedEmployee.id ? updatedEmployee : emp
      );

      localStorage.setItem(EMPLOYEE_KEY, JSON.stringify(updatedEmployees));
      setShowSuccess(true);
      setTimeout(() => {
        setShowSuccess(false);
        navigate("/allemployees");
      }, 1000);
    }
  };

  const onButtonClick = () => {
    buttonRef.current.click();
  };

  const onFileUpload = (e) => {
    setFile(e.target.files[0]);
  };

  return (
    <>
      <SideBar />
      <div className="ml-[240px] p-4 bg-fit">
        <div className="bg-white md:m-4 md:px-[88px] md:py-[44px] rounded-lg p-3">
          <h1 className="text-blue-600 md:text-4xl text-xl">Edit Employee</h1>
          <form className="md:my-4">
            <div className="grid md:grid-cols-2 md:gap-6">
              <div>
                <div className="flex items-center justify-between mr-4 my-2">
                  <label className="font-bold text-lg" htmlFor="name">
                    Name
                  </label>
                  <button type="button">
                    <FiEdit3
                      className="text-blue-600"
                      onClick={() => onEditClick("name")}
                    />
                  </button>
                </div>
                <input
                  id="name"
                  type="text"
                  className="border border-blue-300 w-full rounded-lg p-2"
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                />
                {errors.name && <p className="text-red-500">{errors.name}</p>}
              </div>

              <div>
                <div className="flex items-center justify-between mr-4 my-2">
                  <label className="font-bold text-lg" htmlFor="empId">
                    Employee ID
                  </label>
                  <button type="button">
                    <FiEdit3
                      className="text-blue-600"
                      onClick={() => onEditClick("empId")}
                    />
                  </button>
                </div>
                <input
                  id="empId"
                  type="text"
                  className="border border-blue-300 w-full rounded-lg p-2"
                  onChange={(e) => setEmpId(e.target.value)}
                  value={empId}
                />
                {errors.empId && <p className="text-red-500">{errors.empId}</p>}
              </div>

              <div>
                <div className="flex items-center justify-between mr-4 my-2">
                  <label className="font-bold text-lg" htmlFor="contact">
                    Contact Number
                  </label>
                  <button type="button">
                    <FiEdit3
                      className="text-blue-600"
                      onClick={() => onEditClick("contact")}
                    />
                  </button>
                </div>
                <input
                  id="contact"
                  type="text"
                  className="border border-blue-300 w-full rounded-lg p-2"
                  onChange={(e) => setContact(e.target.value)}
                  value={contact}
                />
                {errors.contact && (
                  <p className="text-red-500">{errors.contact}</p>
                )}
              </div>

              <div>
                <div className="flex items-center justify-between mr-4 my-2">
                  <label className="font-bold text-lg" htmlFor="date">
                    Joining Date
                  </label>
                  <button type="button">
                    <FiEdit3
                      className="text-blue-600"
                      onClick={() => onEditClick("date")}
                    />
                  </button>
                </div>
                <input
                  id="date"
                  type="date"
                  className="border border-blue-300 w-full rounded-lg p-2"
                  onChange={(e) => setDate(e.target.value)}
                  value={date}
                />
                {errors.date && <p className="text-red-500">{errors.date}</p>}
              </div>

              <div>
                <div className="flex items-center justify-between mr-4 my-2">
                  <label className="font-bold text-lg" htmlFor="email">
                    Email
                  </label>
                  <button type="button">
                    <FiEdit3
                      className="text-blue-600"
                      onClick={() => onEditClick("email")}
                    />
                  </button>
                </div>
                <input
                  id="email"
                  type="email"
                  className="border border-blue-300 w-full rounded-lg p-2"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                />
                {errors.email && <p className="text-red-500">{errors.email}</p>}
              </div>

              <div>
                <div className="flex items-center justify-between mr-4 my-2">
                  <label className="font-bold text-lg" htmlFor="role">
                    Role
                  </label>
                  <button type="button">
                    <FiEdit3
                      className="text-blue-600"
                      onClick={() => onEditClick("role")}
                    />
                  </button>
                </div>
                <input
                  id="role"
                  type="text"
                  className="border border-blue-300 w-full rounded-lg p-2"
                  onChange={(e) => setRole(e.target.value)}
                  value={role}
                />
                {errors.role && <p className="text-red-500">{errors.role}</p>}
              </div>
            </div>

            <div className="mt-4">
              <button
                type="button"
                className="border bg-blue-600 px-8 py-1 rounded-md text-white"
                onClick={onButtonClick}
              >
                Choose File
              </button>
              <input
                id="file"
                type="file"
                className="hidden"
                ref={buttonRef}
                onChange={onFileUpload}
                accept=".jpg, .jpeg, .png"
              />
              {errors.file && (
                <p className="text-red-500 mt-2">{errors.file}</p>
              )}
            </div>

            <div className="mt-4 flex justify-end">
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold px-8 py-2 rounded-lg mr-4"
                onClick={handleSubmit}
              >
                Save
              </button>
              <button
                type="button"
                onClick={() => navigate("/allemployees")}
                className="text-blue-500 hover:text-blue-700 font-bold px-8 py-2 border border-blue-500 rounded-lg"
              >
                Cancel
              </button>
            </div>
          </form>

          {showSuccess && (
            <div className="fixed inset-0 bg-[#0098f1] bg-opacity-10 flex justify-center items-center">
              <div className="bg-[#0098f1] w-[320px] h-[240px] sm:w-[440px] sm:h-[320px] py-8 px-4 sm:py-10 sm:px-16 rounded-lg text-white flex flex-col justify-center items-center">
                <BsCheck2Circle className="text-3xl sm:text-4xl md:text-6xl mb-4" />
                <p className="text-center text-xl sm:text-2xl">
                  Employee Updated Successfully!
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default EditEmployee;
