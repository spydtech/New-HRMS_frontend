/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import axios from "axios";
//import { API_BASE_URL } from "../../../Config/api";

const EmployeeCard = ({ teamname, name, position, img, employeeId }) => (
  <div className="bg-white text-center p-5 rounded-2xl shadow-md flex flex-col items-center relative">
    <div className="absolute top-2 left-2 bg-[#2a546d] text-white text-xs font-bold px-2 py-1 rounded">
      ID: {employeeId}
    </div>
    <h1 className=" text-[#2a546d] font-bold text-lg mb-2 mt-5">{teamname}</h1>
    <img
      src={img}
      className="w-24 h-24 md:w-28 md:h-28 rounded-full border-4 border-[#2a546d] shadow-md mx-auto"
      alt=""
    />
    <div className="mt-2">
      <h1 className="text-lg font-semibold text-black">{name}</h1>
      <h1 className="text-lg text-black">{position}</h1>
    </div>
  </div>
);

const AllEmployees = () => {
  const [searchId, setSearchId] = useState("");
  const [searchName, setSearchName] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    fetchEmployees();
  }, []);

  useEffect(() => {
    handleSearch();
  }, [searchId, searchName]); // Trigger filtering when either input changes

  const fetchEmployees = async () => {
    try {
      const response = await axios.get(
        `${API_BASE_URL}/employee/getAllEmployee`
      );
      setEmployees(response.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching employees:", error);
      setErrorMessage("Error fetching employees");
      setLoading(false);
    }
  };

  const handleSearch = () => {
    const lowerCaseSearchId = searchId.toLowerCase();
    const lowerCaseSearchName = searchName.toLowerCase();

    if (!searchId && !searchName) {
      setFilteredData([]); // Show no cards when no input is provided
    } else {
      const filtered = employees.filter((employee) => {
        const idMatch = searchId
          ? employee.employeeId
              .toString()
              .toLowerCase()
              .includes(lowerCaseSearchId)
          : true;
        const nameMatch = searchName
          ? (employee.firstName + " " + employee.lastName)
              .toLowerCase()
              .includes(lowerCaseSearchName)
          : true;
        return idMatch && nameMatch;
      });

      setFilteredData(filtered);
    }
  };

  const handleInputChange = (e, setInput) => {
    setInput(e.target.value);
  };

  return (
    <div id="main" className="p-4 mt-4 min-h-screen">
      <div className=" flex flex-col md:flex-row justify-between">
        <div>
          <span className="text-[#2A546D] text-sm lg:text-lg font-medium">
            Employee / All Employee
          </span>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-between gap-4 mt-6 mb-6">
        <div className="flex flex-col md:flex-row gap-4">
          <input
            type="search"
            placeholder="Employee ID"
            value={searchId}
            onChange={(e) => handleInputChange(e, setSearchId)}
            className="bg-transparent border border-[#2A546D] focus:outline-[#2a546d] p-2 rounded text-[16px] font-semibold placeholder-[#2A546D] h-[45px] w-full"
          />
          <input
            type="search"
            placeholder="Employee Name"
            value={searchName}
            onChange={(e) => handleInputChange(e, setSearchName)}
            className="bg-transparent border border-[#2A546D] p-2 focus:outline-[#2a546d] rounded text-[16px] font-semibold placeholder-[#2A546D] h-[45px] w-full"
          />
        </div>
      </div>

      {loading ? (
        <div>Loading...</div>
      ) : errorMessage ? (
        <div>{errorMessage}</div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredData.length > 0 ? (
            filteredData.map((employee) => (
              <EmployeeCard
                key={employee.employeeId}
                teamname={employee.designation}
                name={employee.firstName + " " + employee.lastName}
                position={employee.role}
                img={employee.img}
                employeeId={employee.employeeId}
              />
            ))
          ) : (
            <div className="text-center col-span-full text-gray-500">
              Enter ID / Name to view Employees
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default AllEmployees;
