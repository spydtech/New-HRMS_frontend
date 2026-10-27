import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { BsCheck2Circle } from "react-icons/bs";
import SideBar from "../../Sidebar";

const EMPLOYEE_KEY = "employee_data";

const AddEmployee = () => {
  const [name, setName] = useState("");
  const [empId, setEmpId] = useState("");
  const [contact, setContact] = useState("");
  const [date, setDate] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const [file, setFile] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);
  const [errors, setErrors] = useState({});
  const buttonRef = useRef(null);
  const navigate = useNavigate();

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
      const newEmployee = {
        id: Date.now(),
        name,
        empId,
        contact,
        date,
        email,
        role,
        dp: "https://via.placeholder.com/40", // Example placeholder for dp
      };

      const existingEmployees =
        JSON.parse(localStorage.getItem(EMPLOYEE_KEY)) || [];
      localStorage.setItem(
        EMPLOYEE_KEY,
        JSON.stringify([...existingEmployees, newEmployee])
      );

      setShowSuccess(true);
      setTimeout(() => {
        setShowSuccess(false);
        navigate("/allemployees");
      }, 1500);
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
          <h1 className="text-blue-600 md:text-4xl text-xl">
            Add New Employee
          </h1>
          <form className="md:my-4" onSubmit={handleSubmit}>
            <div className="grid md:grid-cols-2 md:gap-6">
              {/* Name */}
              <div>
                <div className="flex items-center justify-between my-2">
                  <label className="font-bold text-lg" htmlFor="name">
                    Name
                  </label>
                </div>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className={`border ${
                    errors.name ? "border-red-300" : "border-blue-300"
                  } w-full rounded-lg p-2`}
                />
                {errors.name && <p className="text-blue-500">{errors.name}</p>}
              </div>

              {/* Employee ID */}
              <div>
                <div className="flex items-center justify-between my-2">
                  <label className="font-bold text-lg" htmlFor="empId">
                    Employee ID
                  </label>
                </div>
                <input
                  type="text"
                  id="empId"
                  name="empId"
                  value={empId}
                  onChange={(e) => setEmpId(e.target.value)}
                  className={`border ${
                    errors.empId ? "border-red-300" : "border-blue-300"
                  } w-full rounded-lg p-2`}
                />
                {errors.empId && <p className="text-blue-500">{errors.empId}</p>}
              </div>

              {/* Contact Number */}
              <div>
                <div className="flex items-center justify-between my-2">
                  <label className="font-bold text-lg" htmlFor="contact">
                    Contact Number
                  </label>
                </div>
                <input
                  type="text"
                  id="contact"
                  name="contact"
                  value={contact}
                  onChange={(e) => setContact(e.target.value)}
                  className={`border ${
                    errors.contact ? "border-red-300" : "border-blue-300"
                  } w-full rounded-lg p-2`}
                />
                {errors.contact && (
                  <p className="text-blue-500">{errors.contact}</p>
                )}
              </div>

              {/* Joining Date */}
              <div>
                <div className="flex items-center justify-between my-2">
                  <label className="font-bold text-lg" htmlFor="date">
                    Joining Date
                  </label>
                </div>
                <input
                  type="date"
                  id="date"
                  name="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className={`border ${
                    errors.date ? "border-red-300" : "border-blue-300"
                  } w-full rounded-lg p-2`}
                />
                {errors.date && <p className="text-blue-500">{errors.date}</p>}
              </div>

              {/* Email */}
              <div>
                <div className="flex items-center justify-between my-2">
                  <label className="font-bold text-lg" htmlFor="email">
                    Email
                  </label>
                </div>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={`border ${
                    errors.email ? "border-red-300" : "border-blue-300"
                  } w-full rounded-lg p-2`}
                />
                {errors.email && <p className="text-blue-500">{errors.email}</p>}
              </div>

              {/* Role */}
              <div>
                <div className="flex items-center justify-between my-2">
                  <label className="font-bold text-lg" htmlFor="role">
                    Role
                  </label>
                </div>
                <input
                  type="text"
                  id="role"
                  name="role"
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                  className={`border ${
                    errors.role ? "border-red-300" : "border-blue-300"
                  } w-full rounded-lg p-2`}
                />
                {errors.role && <p className="text-blue-500">{errors.role}</p>}
              </div>
            </div>

            {/* File Upload */}
            <div className="mt-4">
              <button
                type="button"
                className="border bg-blue-600 px-8 py-1 rounded-md text-white"
                onClick={onButtonClick}
              >
                Choose File
              </button>
              <input
                type="file"
                id="file"
                name="file"
                accept="image/*" // <-- Restrict to image files only
                onChange={onFileUpload}
                ref={buttonRef}
                className="hidden"
              />
              {errors.file && (
                <p className="text-blue-500 mt-2">{errors.file}</p>
              )}
            </div>

            {/* Submit Button */}
            <div className="mt-4 flex justify-end">
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold px-8 py-2 rounded-lg"
              >
                Add Employee
              </button>
            </div>
          </form>

          {/* Success message */}
          {showSuccess && (
            <div className="fixed inset-0 bg-[#0098f1] bg-opacity-10 flex justify-center items-center">
              <div className="bg-[#0098f1] w-[320px] h-[240px] sm:w-[440px] sm:h-[320px] py-8 px-4 sm:py-10 sm:px-16 rounded-lg text-white flex flex-col justify-center items-center">
                <BsCheck2Circle className="text-3xl sm:text-4xl md:text-6xl mb-4" />
                <p className="text-center text-xl sm:text-2xl">
                  Employee Added Successfully!
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default AddEmployee;
