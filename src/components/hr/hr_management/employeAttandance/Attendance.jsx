// /* eslint-disable no-unused-vars */
// import React, { useState, useEffect } from "react";
// import { FaSearch, FaFilter, FaFileExport } from "react-icons/fa";
// import axios from 'axios';
// //import { API_BASE_URL } from "../../../../Config/api";
// import * as XLSX from 'xlsx';

// function Attendance() {
//   const [searchQuery, setSearchQuery] = useState("");
//   const [filter, setFilter] = useState("All");
//   const [attendanceData, setAttendanceData] = useState([]);
//   const jwt = localStorage.getItem("hrJwt");
//   const today = new Date();
//   const currentYear = today.getFullYear();
//   const currentMonth = today.getMonth() + 1;
//   const [searchYear, setSearchYear] = useState(currentYear);
//   const [searchMonth, setSearchMonth] = useState(currentMonth);
//   const [searchDay, setSearchDay] = useState("");

//   useEffect(() => {
//     const fetchAttendanceData = async () => {
//       try {
//         const response = await axios.get(`${API_BASE_URL}/api/attendance`, {
//           headers: {
//             "Authorization": `Bearer ${jwt}`,
//           }
//         });
//         setAttendanceData(response.data);
//         console.log(response.data);
//       } catch (error) {
//         console.error('Error fetching attendance data:', error);
//       }
//     };
//     fetchAttendanceData();
//   }, [jwt]);

//   const formatTime = (totalHours, totalMinutes, totalSeconds) => {
//     const hours = totalHours % 60;
//     const minutes = totalMinutes % 60;
//     const seconds = totalSeconds % 60;

//     return `${hours} hours, ${minutes} mins, ${seconds} secs`;
//   };

//   const handleSearchChange = (e) => {
//     setSearchQuery(e.target.value);
//   };

//   const handleFilterChange = (e) => {
//     setFilter(e.target.value);
//   };

//   const normalizeString = (str) => {
//     return str.toLowerCase().replace(/[^a-z0-9]/g, ''); // Convert to lowercase and remove non-alphanumeric characters
//   };

//   const filteredData = attendanceData.filter((entry) => {
//     const entryDate = new Date(entry.punchIn);
//     const matchesYear = searchYear ? entryDate.getFullYear() === parseInt(searchYear) : true;
//     const matchesMonth = searchMonth ? entryDate.getMonth() + 1 === parseInt(searchMonth) : true;
//     const matchesDay = searchDay ? entryDate.getDate() === parseInt(searchDay) : true;
//     // Normalize the search query and data entries
//     const normalizedSearchQuery = normalizeString(searchQuery);
//     const normalizedEmployeeName = normalizeString(entry.employeeName);
//     const normalizedEmployeeId = normalizeString(entry.employeeId);

//     const matchesEmployee = normalizedEmployeeName.includes(normalizedSearchQuery) ||
//       normalizedEmployeeId.includes(normalizedSearchQuery);

//     return matchesYear && matchesMonth && matchesDay && matchesEmployee;
//   }).sort((a, b) => new Date(b.punchIn) - new Date(a.punchIn));

//   const exportToExcel = () => {
//     const ws = XLSX.utils.json_to_sheet(filteredData.map(entry => ({
//       "Employee Name": entry.employeeName,
//       "Employee ID": entry.employeeId,
//       "PunchIn": new Date(entry.punchIn).toLocaleString(),
//       "PunchOut": new Date(entry.punchOut).toLocaleString(),
//       "Production Time": `${entry.productionHours} hours, ${entry.productionMinutes} mins, ${entry.productionSeconds} secs`,
//       "Break Time": `${entry.breakHours} hours, ${entry.breakMinutes} mins, ${entry.breakSeconds} secs`,
//       "Working Time": `${entry.workingHours} hours, ${entry.workingMinutes} mins, ${entry.workingSeconds} secs`,
//       "Overtime": `${entry.overtime} hours`
//     })), { header: ["Employee Name", "Employee ID", "PunchIn", "PunchOut", "Production Time", "Break Time", "Working Time", "Overtime"] });

//     const wb = XLSX.utils.book_new();
//     XLSX.utils.book_append_sheet(wb, ws, "Attendance Data");

//     XLSX.writeFile(wb, "AttendanceData.xlsx");
//   };

//   return (
//     <div id="main" className="min-h-screen p-4 mt-4">
//       <div className="">
//         <p className="text-[#0098F1] lg:text-lg text-sm font-bold mb-4">
//           Hr Management / Employee / Attendance
//         </p>
//       </div>
//       <div className="flex flex-wrap items-center justify-center mb-4 space-x-4">
//         <div className="relative">
//           <input
//             type="search"
//             placeholder="Search by employee name..."
//             onChange={handleSearchChange}
//             className="pl-10 pr-4 py-2 w-full sm:w-80 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0098F1]"
//           />
//           <FaSearch className="absolute top-3 left-3 text-gray-500" />
//         </div>

//         {/* Year Filter */}
//         <div className="relative mt-4 sm:mt-0">
//           <select
//             onChange={(e) => setSearchYear(e.target.value)}
//             className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0098F1]"
//             value={searchYear}
//           >
//             <option value="">Select Year</option>
//             {Array.from(new Set(attendanceData.map(entry => new Date(entry.punchIn).getFullYear()))).map(year => (
//               <option key={year} value={year}>{year}</option>
//             ))}
//           </select>
//         </div>

//         {/* Month Filter */}
//         <div className="relative mt-4 sm:mt-0">
//           <select
//             onChange={(e) => setSearchMonth(e.target.value)}
//             className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0098F1]"
//             value={searchMonth}
//           >
//             <option value="">Select Month</option>
//             {Array.from({ length: 12 }, (_, i) => i + 1).map(month => (
//               <option key={month} value={month}>
//                 {new Date(0, month - 1).toLocaleString('default', { month: 'long' })}
//               </option>
//             ))}
//           </select>
//         </div>

//         {/* Day Filter */}
//         <div className="relative mt-4 sm:mt-0">
//           <select
//             onChange={(e) => setSearchDay(e.target.value)}
//             className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0098F1]"
//           >
//             <option value="">Select Day</option>
//             {Array.from({ length: 31 }, (_, i) => i + 1).map(day => (
//               <option key={day} value={day}>{day}</option>
//             ))}
//           </select>
//         </div>

//         {/* Filter Selection */}
//         <div className="relative mt-4 sm:mt-0">
//           <div className="flex items-center">
//             <FaFilter className="text-blue-500 h-6 w-6" />
//             <select
//               onChange={handleFilterChange}
//               className="ml-2 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//             >
//               <option value="All">All</option>
//               <option value="Present">Present</option>
//               <option value="Absent">Absent</option>
//               <option value="Weekend">Weekend</option>
//               <option value="Holiday">Holiday</option>
//               <option value="Timeoff">Timeoff</option>
//               <option value="Overtime">Overtime</option>
//               <option value="Lop">Lop (Missing)</option>
//               <option value="Late">Late Count</option>
//               <option value="Early">Early Count</option>
//             </select>
//           </div>
//         </div>
//         <div className="relative mt-4 sm:mt-0">
//           <button
//             onClick={exportToExcel}
//             className="flex items-center p-2 border border-gray-300 rounded-lg bg-[#0098F1] text-white hover:bg-[#0098F1] focus:outline-none focus:ring-2 focus:ring-[#0098F1]"
//           >
//             <FaFileExport className="mr-2" />
//             Export to Excel
//           </button>
//         </div>
//       </div>

//       <div
//         id="table"
//         className="overflow-x-auto scrollbar-thin scrollbar-track-white scrollbar-thumb-[#0098F1]"
//       >
//         <table className="min-w-full bg-white text-nowrap">
//           <thead className="bg-[#0098F1] text-white">
//             <tr className="border border-[#0098F1]">
//               {/* Table Headers */}
//               <th className="py-3 px-4 border-r border-white text-center text-sm font-medium text-nowrap">
//                 Employee Name
//               </th>
//               <th className="py-3 px-4 border-r border-white text-center text-sm font-medium text-nowrap">
//                 Employee ID
//               </th>
//               <th className="py-3 px-4 border-r border-white text-center text-sm font-medium text-nowrap">
//                 Punch In
//               </th>
//               <th className="py-3 px-4 border-r border-white text-center text-sm font-medium text-nowrap">
//                 Punch Out
//               </th>
//               <th className="py-3 px-4 border-r border-white text-center text-sm font-medium text-nowrap">
//                 Production Time
//               </th>
//               <th className="py-3 px-4 border-r border-white text-center text-sm font-medium text-nowrap">
//                 Break Time
//               </th>
//               <th className="py-3 px-4 border-r border-white text-center text-sm font-medium text-nowrap">
//                 Working Time
//               </th>
//               <th className="py-3 px-4 border-r border-white text-center text-sm font-medium text-nowrap">
//                 Overtime
//               </th>
//             </tr>
//           </thead>
//           <tbody className="text-sm">
//             {filteredData.length > 0 ? (
//               filteredData.map((entry, index) => (
//                 <tr
//                   key={index}
//                   // className={`${index % 2 === 0 ? "bg-[#FFFFFF]" : "bg-[#F5F5F5]"
//                   //   } hover:bg-gray-200`}
//                   className="border border-[#0098F1]"
//                 >
//                   {/* <td className="px-4 py-2 border-b text-center sticky left-0 z-10 bg-inherit">
//                     {entry.employeeName}
//                   </td> */}
//                   <td className="py-2 px-4 border-r border-[#0098f1] text-center">
//                     {entry.employeeName}
//                   </td>
//                   <td className="py-2 px-4 border-r border-[#0098f1] text-center">
//                     {entry.employeeId}
//                   </td>
//                   <td className="py-2 px-4 border-r border-[#0098f1] text-center">
//                     {new Date(entry.punchIn).toLocaleString()}
//                   </td>
//                   <td className="py-2 px-4 border-r border-[#0098f1] text-center">
//                     {new Date(entry.punchOut).toLocaleString()}
//                   </td>
//                   <td className="py-2 px-4 border-r border-[#0098f1] text-center">
//                     {formatTime(entry.productionHours, entry.productionMinutes, entry.productionSeconds)}
//                   </td>
//                   <td className="py-2 px-4 border-r border-[#0098f1] text-center">
//                     {formatTime(entry.breakHours, entry.breakMinutes, entry.breakSeconds)}
//                   </td>
//                   <td className="py-2 px-4 border-r border-[#0098f1] text-center">
//                     {formatTime(entry.workingHours, entry.workingMinutes, entry.workingSeconds)}
//                   </td>
//                   <td className="py-2 px-4 border-r border-[#0098f1] text-center">
//                     {entry.overtime} hours
//                   </td>
//                 </tr>
//               ))
//             ) : (
//               <tr>
//                 <td
//                   className="px-4 py-2 border-b text-center"
//                   colSpan="8"
//                 >
//                   No records found.
//                 </td>
//               </tr>
//             )}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// }

// export default Attendance;




/* eslint-disable no-unused-vars */
import { useState, useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaSearch, FaFilter, FaFileExport, FaCalendarDay } from "react-icons/fa";
import * as XLSX from "xlsx";
import {
  fetchAttendance,
  selectAttendanceList,
  selectAttendanceLoading,
} from "../../../../store/slices/attendanceSlice";

const fmtTime = (h, m, s) => `${h || 0}h ${m || 0}m ${s || 0}s`;

const normalizeStr = (s) =>
  String(s || "")
    .toLowerCase()
    .replace(/[^a-z0-9]/g, "");

// Helper to check if punch in is late (after 9:30 AM)
const checkIfLate = (punchInIso) => {
  if (!punchInIso) return false;
  const d = new Date(punchInIso);
  const hours = d.getHours();
  const minutes = d.getMinutes();
  return hours > 9 || (hours === 9 && minutes > 30);
};

function Attendance() {
  const dispatch = useDispatch();
  const attendanceData = useSelector(selectAttendanceList) || [];
  const loading = useSelector(selectAttendanceLoading);

  const [searchQuery, setSearchQuery] = useState("");
  const [searchYear, setSearchYear] = useState("");
  const [searchMonth, setSearchMonth] = useState("");
  const [searchDay, setSearchDay] = useState("");
  const [filter, setFilter] = useState("All");

  useEffect(() => {
    dispatch(fetchAttendance());
  }, [dispatch]);

  const handleSearchChange = (e) => setSearchQuery(e.target.value);
  const handleFilterChange = (e) => setFilter(e.target.value);

  // ✅ Function to filter by today's date
  const handleTodayFilter = () => {
    const today = new Date();
    setSearchYear(today.getFullYear().toString());
    setSearchMonth((today.getMonth() + 1).toString());
    setSearchDay(today.getDate().toString());
  };

  // ✅ Filtering Logic
  const filteredData = useMemo(() => {
    return attendanceData
      .filter((entry) => {
        const hasPunchIn = !!entry.punchIn;
        const entryDate = hasPunchIn ? new Date(entry.punchIn) : null;

        // Year / Month / Day Filter
        if (searchYear && (!entryDate || entryDate.getFullYear() !== parseInt(searchYear, 10))) return false;
        if (searchMonth && (!entryDate || entryDate.getMonth() + 1 !== parseInt(searchMonth, 10))) return false;
        if (searchDay && (!entryDate || entryDate.getDate() !== parseInt(searchDay, 10))) return false;

        // Search Query Filter (Name or ID)
        const q = normalizeStr(searchQuery);
        if (q) {
          const name = normalizeStr(entry.employeeName);
          const id = normalizeStr(entry.employeeId);
          if (!name.includes(q) && !id.includes(q)) return false;
        }

        // Status Filter
        if (filter === "Present" && !hasPunchIn) return false;
        if (filter === "Overtime" && !(entry.overtime > 0)) return false;
        if (filter === "Late" && !checkIfLate(entry.punchIn)) return false;

        return true;
      })
      .sort((a, b) => {
        if (!a.punchIn) return 1;
        if (!b.punchIn) return -1;
        return new Date(b.punchIn) - new Date(a.punchIn);
      });
  }, [attendanceData, searchQuery, searchYear, searchMonth, searchDay, filter]);

  const availableYears = useMemo(() => {
    return Array.from(
      new Set(
        attendanceData
          .map((e) => e.punchIn && new Date(e.punchIn).getFullYear())
          .filter(Boolean)
      )
    ).sort((a, b) => b - a);
  }, [attendanceData]);

  const filtersActive =
    searchQuery !== "" ||
    searchYear !== "" ||
    searchMonth !== "" ||
    searchDay !== "" ||
    filter !== "All";

  const clearFilters = () => {
    setSearchQuery("");
    setSearchYear("");
    setSearchMonth("");
    setSearchDay("");
    setFilter("All");
  };

  const exportToExcel = () => {
    const rows = filteredData.map((entry) => ({
      "Employee Name": entry.employeeName || "",
      "Employee ID": entry.employeeId || "",
      PunchIn: entry.punchIn ? new Date(entry.punchIn).toLocaleString() : "",
      PunchOut: entry.punchOut ? new Date(entry.punchOut).toLocaleString() : "",
      "Production Time": fmtTime(entry.productionHours, entry.productionMinutes, entry.productionSeconds),
      "Break Time": fmtTime(entry.breakHours, entry.breakMinutes, entry.breakSeconds),
      "Working Time": fmtTime(entry.workingHours, entry.workingMinutes, entry.workingSeconds),
      Overtime: `${entry.overtime || 0} hours`,
    }));

    const ws = XLSX.utils.json_to_sheet(rows);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Attendance");
    XLSX.writeFile(wb, "AttendanceData.xlsx");
  };

  return (
    <div id="main" className="min-h-screen p-4 mt-4">
      <div>
        <p className="text-[#0098F1] lg:text-lg text-sm font-bold mb-4">
          HR Management / Employee / Attendance
        </p>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap items-center justify-center mb-4 gap-3">
        <div className="relative">
          <input
            type="search"
            placeholder="Search by employee name or ID..."
            value={searchQuery}
            onChange={handleSearchChange}
            className="pl-10 pr-4 py-2 w-full sm:w-80 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0098F1]"
          />
          <FaSearch className="absolute top-3 left-3 text-gray-500" />
        </div>

        {/* ✅ Today Button */}
        <button
          onClick={handleTodayFilter}
          className="flex items-center gap-2 p-2 border border-[#0098F1] text-[#0098F1] rounded-lg hover:bg-[#0098F1] hover:text-white transition font-medium"
          title="Filter by Today's Date"
        >
          <FaCalendarDay />
          Today
        </button>

        <select
          value={searchYear}
          onChange={(e) => setSearchYear(e.target.value)}
          className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0098F1]"
        >
          <option value="">All Years</option>
          {availableYears.map((y) => (
            <option key={y} value={y}>
              {y}
            </option>
          ))}
        </select>

        <select
          value={searchMonth}
          onChange={(e) => setSearchMonth(e.target.value)}
          className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0098F1]"
        >
          <option value="">All Months</option>
          {Array.from({ length: 12 }, (_, i) => i + 1).map((m) => (
            <option key={m} value={m}>
              {new Date(0, m - 1).toLocaleString("default", { month: "long" })}
            </option>
          ))}
        </select>

        <select
          value={searchDay}
          onChange={(e) => setSearchDay(e.target.value)}
          className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0098F1]"
        >
          <option value="">All Days</option>
          {Array.from({ length: 31 }, (_, i) => i + 1).map((d) => (
            <option key={d} value={d}>
              {d}
            </option>
          ))}
        </select>

        <div className="flex items-center">
          <FaFilter className="text-blue-500 h-6 w-6" />
          <select
            value={filter}
            onChange={handleFilterChange}
            className="ml-2 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="All">All Records</option>
            <option value="Present">Present (Punched In)</option>
            <option value="Overtime">Overtime (&gt;0 hrs)</option>
            <option value="Late">Late (After 9:30 AM)</option>
          </select>
        </div>

        {filtersActive && (
          <button
            onClick={clearFilters}
            className="px-4 py-2 rounded-lg border border-[#0098F1] text-[#0098F1] hover:bg-[#0098F1] hover:text-white transition"
          >
            Clear Filters
          </button>
        )}

        <button
          onClick={exportToExcel}
          className="flex items-center p-2 border border-gray-300 rounded-lg bg-[#0098F1] text-white hover:opacity-90"
        >
          <FaFileExport className="mr-2" />
          Export to Excel
        </button>
      </div>

      {/* Table */}
      <div
        id="table"
        className="overflow-x-auto scrollbar-thin scrollbar-track-white scrollbar-thumb-[#0098F1]"
      >
        {loading ? (
          <div className="p-6 text-center text-gray-500">Loading...</div>
        ) : (
          <table className="min-w-full bg-white text-nowrap">
            <thead className="bg-[#0098F1] text-white">
              <tr className="border border-[#0098F1]">
                {[
                  "Employee Name",
                  "Employee ID",
                  "Punch In",
                  "Punch Out",
                  "Production Time",
                  "Break Time",
                  "Working Time",
                  "Overtime",
                ].map((h) => (
                  <th
                    key={h}
                    className="py-3 px-4 border-r border-white text-center text-sm font-medium"
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="text-sm">
              {filteredData.length === 0 ? (
                <tr>
                  <td className="px-4 py-6 text-center text-gray-500" colSpan={8}>
                    No records match your filters.
                  </td>
                </tr>
              ) : (
                filteredData.map((entry, index) => (
                  <tr
                    key={entry.id || index}
                    className="border border-[#0098F1] hover:bg-gray-100"
                  >
                    <td className="py-2 px-4 border-r border-[#0098f1] text-center">
                      {entry.employeeName || "—"}
                    </td>
                    <td className="py-2 px-4 border-r border-[#0098f1] text-center">
                      {entry.employeeId || "—"}
                    </td>
                    <td className="py-2 px-4 border-r border-[#0098f1] text-center">
                      {entry.punchIn
                        ? new Date(entry.punchIn).toLocaleString()
                        : "—"}
                    </td>
                    <td className="py-2 px-4 border-r border-[#0098f1] text-center">
                      {entry.punchOut
                        ? new Date(entry.punchOut).toLocaleString()
                        : "—"}
                    </td>
                    <td className="py-2 px-4 border-r border-[#0098f1] text-center">
                      {fmtTime(
                        entry.productionHours,
                        entry.productionMinutes,
                        entry.productionSeconds
                      )}
                    </td>
                    <td className="py-2 px-4 border-r border-[#0098f1] text-center">
                      {fmtTime(
                        entry.breakHours,
                        entry.breakMinutes,
                        entry.breakSeconds
                      )}
                    </td>
                    <td className="py-2 px-4 border-r border-[#0098f1] text-center">
                      {fmtTime(
                        entry.workingHours,
                        entry.workingMinutes,
                        entry.workingSeconds
                      )}
                    </td>
                    <td className="py-2 px-4 border-r border-[#0098f1] text-center">
                      {entry.overtime || 0} hours
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}

export default Attendance;