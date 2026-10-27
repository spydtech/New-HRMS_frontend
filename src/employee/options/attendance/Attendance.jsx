// /* eslint-disable no-unused-vars */
// /* eslint-disable no-unused-vars */
// import React, { useState, useEffect } from "react";
// import "react-datepicker/dist/react-datepicker.css"; // Import styles
// import axios from "axios";
// import { useSelector } from "react-redux";
// //import { API_BASE_URL } from "../../../Config/api";

// const Attendance = () => {
//   const [isPunchedIn, setIsPunchedIn] = useState(false);
//   const [message, setMessage] = useState("");
//   const [currentDateTime, setCurrentDateTime] = useState("");
//   const [currentBreakTime, setCurrentBreakTime] = useState({
//     hours: 0,
//     minutes: 0,
//     seconds: 0,
//   });
//   const [isOnBreak, setIsOnBreak] = useState(false);
//   const [punchInTime, setPunchInTime] = useState(null);
//   const [punchOutTime, setPunchOutTime] = useState(null);
//   const [breakStartTime, setBreakStartTime] = useState(null);
//   const [breakEndTime, setBreakEndTime] = useState(null);
//   const [totalBreakTime, setTotalBreakTime] = useState({
//     hours: 0,
//     minutes: 0,
//     seconds: 0,
//   });
//   const [lastElapsedTime, setLastElapsedTime] = useState({
//     hours: 0,
//     minutes: 0,
//     seconds: 0,
//   });
//   const [elapsedTime, setElapsedTime] = useState({
//     hours: 0,
//     minutes: 0,
//     seconds: 0,
//   });
//   const [attendanceData, setAttendanceData] = useState([]);
//   const [searchQuery, setSearchQuery] = useState("");
//   const auth = useSelector((state) => state.auth);
//   const employeeId = auth.employee?.employeeId;
//   const employeeName = auth.employee?.firstName + " " + auth.employee?.lastName;
//   const today = new Date();
//   const currentYear = today.getFullYear();
//   const currentMonth = today.getMonth() + 1;
//   const [searchYear, setSearchYear] = useState(currentYear);
//   const [searchMonth, setSearchMonth] = useState(currentMonth);
//   const [searchDay, setSearchDay] = useState("");
//   const jwt = localStorage.getItem("employeeJwt");
//   const officeHours = 9;

//   useEffect(() => {
//     const fetchAttendanceData = async () => {
//       try {
//         const response = await axios.get(`${API_BASE_URL}/api/attendance`, {
//           headers: {
//             Authorization: `Bearer ${jwt}`,
//           },
//         });
//         setAttendanceData(response.data);
//       } catch (error) {
//         console.error("Error fetching attendance data:", error);
//       }
//     };
//     fetchAttendanceData();
//   }, [jwt]);

//   const filteredData1 = attendanceData.filter(
//     (entry) => entry.employeeId === employeeId
//   );
//   // Filtered data for search query
//   const filteredData = filteredData1
//     .filter((entry) => {
//       const entryDate = new Date(entry.punchIn);
//       const matchesYear = searchYear
//         ? entryDate.getFullYear() === parseInt(searchYear)
//         : true;
//       const matchesMonth = searchMonth
//         ? entryDate.getMonth() + 1 === parseInt(searchMonth)
//         : true;
//       const matchesDay = searchDay
//         ? entryDate.getDate() === parseInt(searchDay)
//         : true;
//       return (
//         matchesYear &&
//         matchesMonth &&
//         matchesDay &&
//         (entry.employeeId.toLowerCase().includes(searchQuery.toLowerCase()) ||
//           entry.employeeName.toLowerCase().includes(searchQuery.toLowerCase()))
//       );
//     })
//     .sort((a, b) => new Date(b.punchIn) - new Date(a.punchIn));

//   const calculateHours = (inTime, outTime) => {
//     const inDate = new Date(inTime);
//     const outDate = new Date(outTime);
//     const diffMs = outDate - inDate;
//     const diffHrs = Math.floor(diffMs / 3600000);
//     const diffMins = Math.floor((diffMs % 3600000) / 60000);
//     const diffSecs = Math.floor((diffMs % 60000) / 1000);

//     return { hours: diffHrs, minutes: diffMins, seconds: diffSecs };
//   };

//   const accumulateTime = (prevTime, newTime) => {
//     let totalSeconds =
//       prevTime.hours * 3600 +
//       prevTime.minutes * 60 +
//       prevTime.seconds +
//       (newTime.hours * 3600 + newTime.minutes * 60 + newTime.seconds);

//     const hours = Math.floor(totalSeconds / 3600);
//     totalSeconds %= 3600;
//     const minutes = Math.floor(totalSeconds / 60);
//     const seconds = totalSeconds % 60;

//     return { hours, minutes, seconds };
//   };

//   const calculateBreakTime = (startTime, endTime) => {
//     const diffMs = endTime - startTime;
//     const hours = Math.floor(diffMs / 3600000);
//     const minutes = Math.floor((diffMs % 3600000) / 60000);
//     const seconds = Math.floor((diffMs % 60000) / 1000);

//     return { hours, minutes, seconds };
//   };

//   const updateBreakTime = (newBreakTime) => {
//     const updatedBreakTime = accumulateTime(totalBreakTime, newBreakTime);
//     setTotalBreakTime(updatedBreakTime);
//     localStorage.setItem("totalBreakTime", JSON.stringify(updatedBreakTime));
//   };

//   const calculateWorkingHours = (productionTime, breakTime) => {
//     const productionInSeconds =
//       productionTime.hours * 3600 +
//       productionTime.minutes * 60 +
//       productionTime.seconds;
//     const breakInSeconds =
//       breakTime.hours * 3600 + breakTime.minutes * 60 + breakTime.seconds;
//     const workingSeconds = Math.max(0, productionInSeconds - breakInSeconds); // Prevent negative working time

//     const workingHours = Math.floor(workingSeconds / 3600);
//     const workingMinutes = Math.floor((workingSeconds % 3600) / 60);
//     const workingSecondsLeft = workingSeconds % 60;

//     return {
//       hours: workingHours,
//       minutes: workingMinutes,
//       seconds: workingSecondsLeft,
//     };
//   };

//   const getCurrentDateTime = () => {
//     const now = new Date();
//     const options = {
//       year: "numeric",
//       month: "long",
//       day: "numeric",
//       hour: "numeric",
//       minute: "numeric",
//       second: "numeric",
//       hour12: true,
//     };
//     setCurrentDateTime(now.toLocaleString("en-US", options));
//   };

//   useEffect(() => {
//     getCurrentDateTime();
//     const interval = setInterval(getCurrentDateTime, 1000); // Update every second
//     return () => clearInterval(interval);
//   }, []);

//   useEffect(() => {
//     const storedPunchInTime = localStorage.getItem("punchInTime");
//     const storedElapsedTime = localStorage.getItem("elapsedTime");
//     const storedBreakTime = localStorage.getItem("totalBreakTime");
//     const storedIsPunchedIn = localStorage.getItem("isPunchedIn");
//     const storedLastElapsedTime = localStorage.getItem("lastElapsedTime");
//     const storedIsOnBreak = localStorage.getItem("isOnBreak");
//     const storedBreakStartTime = localStorage.getItem("breakStartTime");

//     if (storedPunchInTime) {
//       setPunchInTime(new Date(storedPunchInTime));
//       setIsPunchedIn(storedIsPunchedIn === "true");
//       setElapsedTime(
//         JSON.parse(storedElapsedTime) || { hours: 0, minutes: 0, seconds: 0 }
//       );
//       setTotalBreakTime(
//         JSON.parse(storedBreakTime) || { hours: 0, minutes: 0, seconds: 0 }
//       );
//       setLastElapsedTime(
//         JSON.parse(storedLastElapsedTime) || {
//           hours: 0,
//           minutes: 0,
//           seconds: 0,
//         }
//       );
//       setIsOnBreak(storedIsOnBreak === "true");
//       if (storedBreakStartTime) {
//         setBreakStartTime(new Date(storedBreakStartTime));
//       }
//     }
//   }, []);

//   useEffect(() => {
//     let timer;
//     if (isPunchedIn && punchInTime) {
//       const startTime =
//         lastElapsedTime.hours * 3600 * 1000 +
//         lastElapsedTime.minutes * 60 * 1000 +
//         lastElapsedTime.seconds * 1000;
//       const punchInDate = new Date(punchInTime);

//       timer = setInterval(() => {
//         const now = new Date();
//         const diffMs =
//           now -
//           punchInDate +
//           startTime -
//           (totalBreakTime.hours * 3600 * 1000 +
//             totalBreakTime.minutes * 60 * 1000 +
//             totalBreakTime.seconds * 1000);
//         const hours = Math.floor(diffMs / 3600000);
//         const minutes = Math.floor((diffMs % 3600000) / 60000);
//         const seconds = Math.floor((diffMs % 60000) / 1000);
//         setElapsedTime({ hours, minutes, seconds });
//         // Save to localStorage every second to persist data
//         localStorage.setItem(
//           "elapsedTime",
//           JSON.stringify({ hours, minutes, seconds })
//         );
//       }, 1000);
//     } else {
//       clearInterval(timer);
//     }

//     return () => clearInterval(timer);
//   }, [isPunchedIn, punchInTime, lastElapsedTime, totalBreakTime]);

//   useEffect(() => {
//     let breakTimer;
//     if (isOnBreak && breakStartTime) {
//       breakTimer = setInterval(() => {
//         const now = new Date();
//         const breakDuration = calculateBreakTime(breakStartTime, now);
//         setCurrentBreakTime(breakDuration);
//       }, 1000);
//     } else {
//       clearInterval(breakTimer);
//       setCurrentBreakTime({ hours: 0, minutes: 0, seconds: 0 });
//     }

//     return () => clearInterval(breakTimer);
//   }, [isOnBreak, breakStartTime]);

//   useEffect(() => {
//     const checkAutoPunchOut = () => {
//       const currentTime = new Date();
//       const hours = currentTime.getHours();
//       const minutes = currentTime.getMinutes();

//       // Check if it's 6:30 PM (18:30)
//       if (hours === 18 && minutes >= 30 && isPunchedIn) {
//         handlePunchButtonClick(); // Automatically punch out
//       }
//     };

//     // Set an interval to check every minute
//     const intervalId = setInterval(checkAutoPunchOut, 60000);

//     // Clean up the interval when component unmounts
//     return () => clearInterval(intervalId);
//   }, [isPunchedIn]);

//   const formatTime = (totalHours, totalMinutes, totalSeconds) => {
//     const hours = totalHours % 60;
//     const minutes = totalMinutes % 60;
//     const seconds = totalSeconds % 60;

//     return `${hours} hours, ${minutes} mins, ${seconds} secs`;
//   };

//   const toIST = (date) => {
//     const options = { timeZone: "Asia/Kolkata", hour12: false };
//     const istDate = new Date(date.toLocaleString("en-US", options));
//     return new Date(istDate.getTime() - istDate.getTimezoneOffset() * 60000); // Remove milliseconds
//   };

//   // Convert the punch-in and punch-out times to IST and remove milliseconds
//   const formatDateForBackend = (date) => {
//     return date ? toIST(date).toISOString().split(".")[0] : null;
//   };

//   const isPastPunchInTime = () => {
//     const now = new Date();
//     const punchInLimit = new Date();
//     const punchInLimit2 = new Date();
//     punchInLimit.setHours(9, 30, 0, 0);
//     punchInLimit2.setHours(8, 59, 0, 0);
//     return now > punchInLimit || now < punchInLimit2;
//   };

//   const handlePunchButtonClick = async () => {
//     const today = new Date().toLocaleDateString();
//     if (isPastPunchInTime() && !isPunchedIn) {
//       setMessage("You need to login before 9:30 AM");
//       return;
//     }
//     setMessage("");
//     if (isPunchedIn) {
//       const newPunchOutTime = new Date();
//       const production = calculateHours(punchInTime, newPunchOutTime);

//       let breakDuration = { hours: 0, minutes: 0, seconds: 0 };

//       if (isOnBreak && breakStartTime) {
//         const now = new Date();
//         breakDuration = calculateBreakTime(breakStartTime, now);
//         updateBreakTime(breakDuration);
//       }

//       const totalBreakDuration = { ...totalBreakTime };

//       const overtime =
//         production.hours > officeHours ? production.hours - officeHours : 0;
//       const workingDuration = calculateWorkingHours(
//         production,
//         totalBreakDuration
//       );

//       const newEntry = {
//         employeeId,
//         employeeName,
//         punchIn: formatDateForBackend(punchInTime),
//         punchOut: formatDateForBackend(newPunchOutTime),
//         production,
//         breakDuration,
//         productionHours: production.hours,
//         productionMinutes: production.minutes,
//         productionSeconds: production.seconds,
//         breakHours: totalBreakDuration.hours,
//         breakMinutes: totalBreakDuration.minutes,
//         breakSeconds: totalBreakDuration.seconds,
//         workingHours: workingDuration.hours,
//         workingMinutes: workingDuration.minutes,
//         workingSeconds: workingDuration.seconds,
//         overtime,
//       };

//       // Update attendanceData state properly
//       const updatedAttendanceData = [...attendanceData, newEntry];
//       setAttendanceData(updatedAttendanceData);

//       try {
//         const response = await axios.post(
//           `${API_BASE_URL}/api/attendance`,
//           newEntry,
//           {
//             headers: {
//               Authorization: `Bearer ${jwt}`,
//               "Content-Type": "application/json",
//             },
//           }
//         );
//       } catch (error) {
//         console.error("Error saving attendance:", error);
//       }

//       // Reset state and clear localStorage after punch-out
//       setPunchOutTime(newPunchOutTime);
//       setIsPunchedIn(false);
//       setPunchInTime(null);
//       setLastElapsedTime(elapsedTime);
//       setElapsedTime({ hours: 0, minutes: 0, seconds: 0 });
//       setTotalBreakTime({ hours: 0, minutes: 0, seconds: 0 });

//       localStorage.removeItem("punchInTime");
//       localStorage.removeItem("elapsedTime");
//       localStorage.removeItem("totalBreakTime");
//       localStorage.removeItem("isPunchedIn");
//       localStorage.removeItem("lastElapsedTime");
//       localStorage.removeItem("isOnBreak");
//       localStorage.removeItem("breakStartTime");
//     } else {
//       //Check if already punched out today
//       // const hasPunchedOutToday = attendanceData.some((entry) => {
//       //   const entryDate = new Date(entry.punchOut).toLocaleDateString();
//       //   return entry.employeeId === employeeId && entryDate === today;
//       // });

//       // if (hasPunchedOutToday) {
//       //   alert("You have already punched out today. You cannot punch in again.");
//       //   return;
//       // }
//       const newPunchInTime = new Date();
//       setPunchInTime(newPunchInTime);
//       setIsPunchedIn(true);
//       setLastElapsedTime({ hours: 0, minutes: 0, seconds: 0 });
//       setElapsedTime({ hours: 0, minutes: 0, seconds: 0 });
//       localStorage.setItem("punchInTime", newPunchInTime);
//       localStorage.setItem("isPunchedIn", "true");
//       localStorage.setItem(
//         "lastElapsedTime",
//         JSON.stringify({ hours: 0, minutes: 0, seconds: 0 })
//       );
//     }
//   };

//   const handleBreakButtonClick = () => {
//     if (isOnBreak) {
//       const now = new Date();
//       const newBreakTime = calculateBreakTime(breakStartTime, now);
//       updateBreakTime(newBreakTime);
//       setBreakEndTime(now);
//       setIsOnBreak(false);
//       localStorage.removeItem("breakStartTime");
//       localStorage.setItem("isOnBreak", "false");
//     } else {
//       const now = new Date();
//       setBreakStartTime(now);
//       setIsOnBreak(true);
//       localStorage.setItem("breakStartTime", now);
//       localStorage.setItem("isOnBreak", "true");
//     }
//   };

//   // Check if the user has left the page and needs to be auto punched out
//   useEffect(() => {
//     const storedPunchInTime = localStorage.getItem("punchInTime");
//     const storedIsPunchedIn = localStorage.getItem("isPunchedIn") === "true";

//     if (storedIsPunchedIn && storedPunchInTime) {
//       const punchInTime = new Date(storedPunchInTime);
//       const now = new Date();
//       // If it's past 6:30 PM, auto punch out
//       if (now.getHours() >= 18 && now.getMinutes() >= 30) {
//         handlePunchButtonClick();
//       } else {
//         setPunchInTime(punchInTime);
//         setIsPunchedIn(true);
//       }
//     }
//   }, []);

//   return (
//     <div className="min-h-screen mt-4 p-4 ">
//       <div className="  flex flex-col md:flex-row justify-between">
//         <div>
//           <span className=" text-[#2A546D] text-sm lg:text-lg font-medium">
//             Employee / Attendance
//           </span>
//         </div>
//       </div>
//       <div className="flex flex-col md:flex-row text-[#2A546D] text-sm lg:text-lg  justify-end items-center space-x-4 mb-4 pt-4">
//         <p className=" font-semibold">
//           Employee ID: <span className="text-black"> {employeeId}</span>
//         </p>
//         <p className=" font-semibold">
//           Employee Name: <span className="text-black">{employeeName}</span>{" "}
//         </p>
//       </div>
//       <div className="flex flex-col  md:flex-row items-center justify-center mb-4 gap-2">
//         {/* Year Filter */}
//         <div className="relative ">
//           <select
//             onChange={(e) => setSearchYear(e.target.value)}
//             className="p-2 border w-40 py-3 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2A546D]"
//           >
//             <option value="">Select Year</option>
//             {Array.from(
//               new Set(
//                 attendanceData.map((entry) =>
//                   new Date(entry.punchIn).getFullYear()
//                 )
//               )
//             ).map((year) => (
//               <option key={year} value={year}>
//                 {year}
//               </option>
//             ))}
//           </select>
//         </div>
//         {/* Month Filter */}
//         <div className="relative ">
//           <select
//             onChange={(e) => setSearchMonth(e.target.value)}
//             className="p-2 border w-40  py-3 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2A546D]"
//           >
//             <option value="">Select Month</option>
//             {Array.from({ length: 12 }, (_, i) => i + 1).map((month) => (
//               <option key={month} value={month}>
//                 {new Date(0, month - 1).toLocaleString("default", {
//                   month: "long",
//                 })}
//               </option>
//             ))}
//           </select>
//         </div>
//         {/* Day Filter */}
//         <div className="relative ">
//           <select
//             onChange={(e) => setSearchDay(e.target.value)}
//             className=" text-nowrap  p-2 border w-40 py-3 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2A546D]"
//           >
//             <option value="">Select Day</option>
//             {Array.from({ length: 31 }, (_, i) => i + 1).map((day) => (
//               <option key={day} value={day}>
//                 {day}
//               </option>
//             ))}
//           </select>
//         </div>
//       </div>
//       <div className="gap-4  grid-cols-1  md:grid-cols-2 grid">
//         {/* TimeSheet Container */}

//         <div className="bg-white w-auto shadow-md rounded-lg p-4 justify-center items-center  mb-6 flex flex-col space-y-4">
//           <h1 className="text-sm lg:text-lg  font-bold text-[#2A546D]">
//             TimeSheet
//           </h1>

//           <div className="bg-[#2A546D] text-white p-4 rounded-lg mb-4">
//             <h3 className="text-sm lg:text-lg  font-semibold">Punch In at</h3>
//             <p className="text-sm lg:text-lg  font-normal">{currentDateTime}</p>
//           </div>

//           <div className="relative   w-[200px] h-[200px]] ">
//             <svg
//               className="absolute top-0 left-0 w-full h-full"
//               viewBox="0 0 120 60"
//             >
//               <defs>
//                 <clipPath id="half-circle">
//                   <rect x="0" y="0" width="200" height="80" />
//                 </clipPath>
//               </defs>
//               <circle
//                 cx="60"
//                 cy="60"
//                 r="54"
//                 stroke={isPunchedIn ? "green" : "red"} //  // Orange color by default, green when punched in
//                 strokeWidth="10"
//                 fill="none"
//                 clipPath="url(#half-circle)"
//               />
//             </svg>
//             <p className=" font-semibold text-sm  lg:text-lg  mt-[110px] ml-[60px] text-[#2A546D]">
//               {" "}
//               {`${elapsedTime.hours}h ${elapsedTime.minutes}m ${elapsedTime.seconds}s`}
//             </p>
//           </div>
//           <div className="flex justify-between items-center">
//             <p
//               className={`text-sm lg:text-lg  font-semibold ${
//                 isPunchedIn ? "text-blue-600" : "text-red-600"
//               }`}
//             >
//               {/* {isPunchedIn ? "Punched In" : "Punched Out"} */}
//             </p>
//           </div>
//           <div className="flex flex-col space-y-4">
//             <button
//               onClick={handlePunchButtonClick}
//               // disabled={isPastPunchInTime() && !isPunchedIn}
//               className={`px-4 py-2 rounded-lg w-full text-sm lg:text-lg  text-white ${
//                 isPunchedIn ? "bg-[#2A546D]" : "bg-[#2A546D]"
//               }`}
//             >
//               {isPunchedIn ? "Punch Out" : "Punch In"}
//             </button>
//             {isPunchedIn && (
//               <button
//                 onClick={handleBreakButtonClick}
//                 className={`px-4 py-2 rounded-lg w-full text-sm lg:text-lg  text-white ${
//                   isOnBreak
//                     ? "bg-[#2A546D] hover:bg-[#2A546D]"
//                     : "bg-[#2A546D] hover:bg-[#2A546D]"
//                 }`}
//               >
//                 {isOnBreak ? "End Break" : "Start Break"}
//               </button>
//             )}
//           </div>
//         </div>

//         {/* Employee Info Container */}
//         <div className="bg-white shadow-md rounded-lg p-4 w-auto mb-6 space-y-4">
//           <h2 className="text-sm lg:text-lg text-center font-bold   mb-4 text-[#2A546D]">
//             Time Info
//           </h2>
//           <p className=" font-semibold text-sm lg:text-lg pt-10 text-black ">
//             Punch In Time: {punchInTime ? punchInTime.toLocaleString() : "N/A"}
//           </p>
//           <p className=" font-semibold text-sm lg:text-lg  text-black">
//             Punch Out Time:{" "}
//             {punchOutTime ? punchOutTime.toLocaleString() : "N/A"}
//           </p>
//           <p className=" font-semibold text-sm lg:text-lg  text-black">
//             Elapsed Time:{" "}
//             {`${elapsedTime.hours}h ${elapsedTime.minutes}m ${elapsedTime.seconds}s`}
//           </p>
//           <p className=" font-semibold text-sm lg:text-lg  text-black">
//             {" "}
//             Break Time:{" "}
//             {`${currentBreakTime.hours}h ${currentBreakTime.minutes}m ${currentBreakTime.seconds}s`}
//           </p>
//           <p className=" font-semibold text-sm lg:text-lg  text-black">
//             {" "}
//             Total Break Time:{" "}
//             {`${totalBreakTime.hours}h ${totalBreakTime.minutes}m ${totalBreakTime.seconds}s`}
//           </p>
//         </div>
//       </div>

//       <div className="bg-white shadow-md rounded-lg p-6 space-y-4">
//         <h2 className="text-[#2A546D] text-sm lg:text-lg font-semibold mb-4">
//           Attendance Log
//         </h2>
//         <div className="flex flex-col space-y-4 mb-6"></div>

//         <div className="overflow-x-auto scrollbar-thin text-nowrap  scrollbar-track-white scrollbar-thumb-[#2A546D]">
//           <table className="min-w-full w-screen overflow-x-scroll  text-nowrap">
//             <thead className="">
//               <tr className="bg-[#2A546D] text-white">
//                 <th className="p-3 border border-r-white border-[#2a546d] ">
//                   Employee ID
//                 </th>
//                 <th className="p-3 border-r border-white ">Employee Name</th>
//                 <th className="p-3 border-r border-white ">Punch In</th>
//                 <th className="p-3 border-r border-white ">Punch Out</th>
//                 <th className="p-3 border-r border-white ">Production Hours</th>
//                 <th className="p-3 border-r border-white ">Break Duration</th>
//                 <th className="p-3 border-r border-white ">Working Hours</th>
//                 <th className="p-3  border  border-[#2a546d] ">Overtime</th>
//               </tr>
//             </thead>
//             <tbody>
//               {filteredData.length === 0 ? (
//                 <tr>
//                   <td colSpan="8" className="text-center text-black py-4">
//                     No attendance records found.
//                   </td>
//                 </tr>
//               ) : (
//                 filteredData.map((entry, index) => {
//                   const workingTime = calculateWorkingHours(
//                     {
//                       hours: entry.productionHours,
//                       minutes: entry.productionMinutes,
//                       seconds: entry.productionSeconds,
//                     },
//                     {
//                       hours: entry.breakHours,
//                       minutes: entry.breakMinutes,
//                       seconds: entry.breakSeconds,
//                     }
//                   );

//                   return (
//                     <tr
//                       key={index}
//                       className="text-center text-black border  border-[#2a546d]"
//                     >
//                       <td className="p-3 border-r border-[#2a546d]">
//                         {entry.employeeId}
//                       </td>
//                       <td className="p-3 border-r border-[#2a546d]">
//                         {entry.employeeName}
//                       </td>
//                       <td className="p-3 border-r border-[#2a546d]">
//                         {new Date(entry.punchIn).toLocaleString()}
//                       </td>
//                       <td className="p-3 border-r border-[#2a546d]">
//                         {new Date(entry.punchOut).toLocaleString()}
//                       </td>
//                       <td className="p-3 border-r border-[#2a546d]">
//                         {formatTime(
//                           entry.productionHours,
//                           entry.productionMinutes,
//                           entry.productionSeconds
//                         )}
//                       </td>
//                       <td className="p-3 border-r border-[#2a546d]">
//                         {entry.breakHours} hours, {entry.breakMinutes} mins,{" "}
//                         {entry.breakSeconds} secs
//                       </td>
//                       <td className="p-3 border-r border-[#2a546d]">
//                         {entry.workingHours} hours, {entry.workingMinutes} mins,{" "}
//                         {entry.workingSeconds} secs
//                       </td>
//                       <td className="p-3 border-r border-[#2a546d]">
//                         {entry.overtime} hours
//                       </td>
//                     </tr>
//                   );
//                 })
//               )}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </div>
//   );
// };
// export default Attendance;




// /* eslint-disable no-unused-vars */
// import { useState, useEffect, useRef, useCallback } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { toast } from "react-toastify";
// import {
//   fetchAttendance,
//   createAttendance,
//   selectAttendanceList,
//   selectAttendanceLoading,
//   selectAttendanceSaving,
//   clearAttendanceError,
// } from "../../../store/slices/attendanceSlice";

// const HR_ROLES = ["super_admin", "hr_admin", "admin"];
// const OFFICE_HOURS = 9;

// // ---- toggles ----
// // false → anyone can punch in any time (recommended for testing)
// const ENFORCE_PUNCH_IN_WINDOW = false;
// const PUNCH_IN_WINDOW = { startH: 8, startM: 59, endH: 9, endM: 30 };

// // false → disable auto punch-out at 6:30 PM (recommended for testing)
// const AUTO_PUNCH_OUT_ENABLED = false;
// const AUTO_PUNCH_OUT = { h: 18, m: 30 };

// const SESSION_KEY = "attendance.session";

// const pad = (n) => String(n).padStart(2, "0");

// const toLocalISO = (d) =>
//   `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}T` +
//   `${pad(d.getHours())}:${pad(d.getMinutes())}:${pad(d.getSeconds())}`;

// const secondsToParts = (secs) => {
//   secs = Math.max(0, Math.floor(secs));
//   return {
//     hours: Math.floor(secs / 3600),
//     minutes: Math.floor((secs % 3600) / 60),
//     seconds: secs % 60,
//   };
// };

// const fmtParts = ({ hours, minutes, seconds }) =>
//   `${hours}h ${minutes}m ${seconds}s`;

// const loadSession = () => {
//   try {
//     const raw = localStorage.getItem(SESSION_KEY);
//     if (!raw) return null;
//     const s = JSON.parse(raw);
//     if (!s || typeof s !== "object") return null;
//     if (s.punchInAt && typeof s.punchInAt !== "number") return null;
//     return s;
//   } catch {
//     return null;
//   }
// };

// const saveSession = (s) => {
//   try {
//     if (s) localStorage.setItem(SESSION_KEY, JSON.stringify(s));
//     else localStorage.removeItem(SESSION_KEY);
//   } catch {
//     /* ignore */
//   }
// };

// const Attendance = () => {
//   const dispatch = useDispatch();
//   const attendanceList = useSelector(selectAttendanceList);
//   const loading = useSelector(selectAttendanceLoading);
//   const saving = useSelector(selectAttendanceSaving);

//   const auth = useSelector((state) => state.auth);
//   const u = auth.user || {};
//   const isHR = HR_ROLES.includes(String(u.role || "").toLowerCase());
//   const employeeId = u.employeeId || u.employee_id || "";
//   const employeeName = `${u.firstName || ""} ${u.lastName || ""}`.trim();

//   const [session, setSession] = useState(() => loadSession());
//   const [now, setNow] = useState(Date.now());

//   const [searchYear, setSearchYear] = useState("");
//   const [searchMonth, setSearchMonth] = useState("");
//   const [searchDay, setSearchDay] = useState("");
//   const [searchQuery, setSearchQuery] = useState("");

//   const autoPunchedOutRef = useRef(false);

//   // ---- Initial fetch ----
//   useEffect(() => {
//     dispatch(fetchAttendance());
//   }, [dispatch]);

//   // ---- Persist ----
//   useEffect(() => {
//     saveSession(session);
//   }, [session]);

//   // ---- Tick ----
//   useEffect(() => {
//     const id = setInterval(() => setNow(Date.now()), 1000);
//     return () => clearInterval(id);
//   }, []);

//   // ---- Derived ----
//   const punchInAt = session?.punchInAt || null;
//   const punchOutAt = session?.punchOutAt || null;
//   const breakStartAt = session?.breakStartAt || null;
//   const breakSecondsTotal = session?.breakSecondsTotal || 0;
//   const isPunchedIn = !!session?.isPunchedIn;

//   const liveBreakSecs =
//     isPunchedIn && breakStartAt
//       ? Math.max(0, Math.floor((now - breakStartAt) / 1000))
//       : 0;

//   const endAt = isPunchedIn ? now : punchOutAt || punchInAt;

//   const elapsedSecs =
//     punchInAt && endAt
//       ? Math.max(
//           0,
//           Math.floor((endAt - punchInAt) / 1000) -
//             breakSecondsTotal -
//             liveBreakSecs
//         )
//       : 0;

//   const elapsedParts = secondsToParts(elapsedSecs);
//   const currentBreakParts = secondsToParts(liveBreakSecs);
//   const totalBreakParts = secondsToParts(breakSecondsTotal + liveBreakSecs);

//   const withinPunchInWindow = () => {
//     if (!ENFORCE_PUNCH_IN_WINDOW) return true;
//     if (isHR) return true;
//     const d = new Date();
//     const cur = d.getHours() * 60 + d.getMinutes();
//     const start = PUNCH_IN_WINDOW.startH * 60 + PUNCH_IN_WINDOW.startM;
//     const end = PUNCH_IN_WINDOW.endH * 60 + PUNCH_IN_WINDOW.endM;
//     return cur >= start && cur <= end;
//   };

//   // ---- Punch in ----
//   const handlePunchIn = () => {
//     if (!withinPunchInWindow()) {
//       toast.error(
//         `Punch-in only allowed between ${PUNCH_IN_WINDOW.startH}:${pad(
//           PUNCH_IN_WINDOW.startM
//         )} AM and ${PUNCH_IN_WINDOW.endH}:${pad(PUNCH_IN_WINDOW.endM)} AM`
//       );
//       return;
//     }
//     const nowMs = Date.now();
//     setNow(nowMs);
//     autoPunchedOutRef.current = false;
//     setSession({
//       punchInAt: nowMs,
//       punchOutAt: null,
//       breakStartAt: null,
//       breakSecondsTotal: 0,
//       isPunchedIn: true,
//     });
//     toast.success("Punched in");
//   };

//   // ---- Punch out ----
//   const handlePunchOut = useCallback(async () => {
//     if (!session || !session.isPunchedIn) return;

//     const nowMs = Date.now();
//     const productionSecs = Math.max(
//       0,
//       Math.floor((nowMs - session.punchInAt) / 1000)
//     );
//     const openBreakSecs = session.breakStartAt
//       ? Math.max(0, Math.floor((nowMs - session.breakStartAt) / 1000))
//       : 0;
//     const totalBreakSecs = (session.breakSecondsTotal || 0) + openBreakSecs;
//     const workingSecs = Math.max(0, productionSecs - totalBreakSecs);
//     const overtime =
//       productionSecs / 3600 > OFFICE_HOURS
//         ? Math.floor(productionSecs / 3600) - OFFICE_HOURS
//         : 0;

//     const production = secondsToParts(productionSecs);
//     const totalBreak = secondsToParts(totalBreakSecs);
//     const working = secondsToParts(workingSecs);

//     const payload = {
//       employeeId,
//       employeeName,
//       punchIn: toLocalISO(new Date(session.punchInAt)),
//       punchOut: toLocalISO(new Date(nowMs)),
//       productionHours: production.hours,
//       productionMinutes: production.minutes,
//       productionSeconds: production.seconds,
//       breakHours: totalBreak.hours,
//       breakMinutes: totalBreak.minutes,
//       breakSeconds: totalBreak.seconds,
//       workingHours: working.hours,
//       workingMinutes: working.minutes,
//       workingSeconds: working.seconds,
//       overtime,
//     };

//     const result = await dispatch(createAttendance(payload));
//     if (createAttendance.fulfilled.match(result)) {
//       toast.success(`Punched out — worked ${fmtParts(production)}`);
//     } else {
//       toast.error(result.payload || "Failed to save attendance");
//       dispatch(clearAttendanceError());
//     }

//     // Freeze session: keep timestamps for display, clear live flags
//     setSession({
//       punchInAt: session.punchInAt,
//       punchOutAt: nowMs,
//       breakStartAt: null,
//       breakSecondsTotal: totalBreakSecs,
//       isPunchedIn: false,
//     });
//   }, [session, dispatch, employeeId, employeeName]);

//   const handlePunchButtonClick = async () => {
//     if (isPunchedIn) await handlePunchOut();
//     else handlePunchIn();
//   };

//   // ---- Break ----
//   const handleBreakButtonClick = () => {
//     if (!isPunchedIn || !session) return;
//     if (session.breakStartAt) {
//       const nowMs = Date.now();
//       const openSecs = Math.max(
//         0,
//         Math.floor((nowMs - session.breakStartAt) / 1000)
//       );
//       setSession({
//         ...session,
//         breakStartAt: null,
//         breakSecondsTotal: (session.breakSecondsTotal || 0) + openSecs,
//       });
//       toast.info("Break ended");
//     } else {
//       setSession({ ...session, breakStartAt: Date.now() });
//       toast.info("Break started");
//     }
//   };

//   const resetSession = () => {
//     setSession(null);
//     autoPunchedOutRef.current = false;
//   };

//   // ---- Auto punch out at 18:30 ----
//   useEffect(() => {
//     if (!AUTO_PUNCH_OUT_ENABLED) return;
//     if (!isPunchedIn || !punchInAt) return;

//     const check = () => {
//       const nowD = new Date();
//       const h = nowD.getHours();
//       const m = nowD.getMinutes();

//       const punchInD = new Date(punchInAt);

//       // Only run if punch-in was the same calendar day
//       const sameDay = punchInD.toDateString() === nowD.toDateString();
//       if (!sameDay) return;

//       // Was the punch-in before 18:30?
//       const inHours = punchInD.getHours();
//       const inMinutes = punchInD.getMinutes();
//       const punchInBeforeCutoff =
//         inHours < AUTO_PUNCH_OUT.h ||
//         (inHours === AUTO_PUNCH_OUT.h && inMinutes < AUTO_PUNCH_OUT.m);

//       // Are we past 18:30 now?
//       const nowPastCutoff =
//         h > AUTO_PUNCH_OUT.h ||
//         (h === AUTO_PUNCH_OUT.h && m >= AUTO_PUNCH_OUT.m);

//       // Only fire if: same-day, punch-in was BEFORE cutoff, and now is AFTER cutoff
//       if (
//         punchInBeforeCutoff &&
//         nowPastCutoff &&
//         !autoPunchedOutRef.current
//       ) {
//         autoPunchedOutRef.current = true;
//         handlePunchOut();
//       }
//     };

//     // Run once on mount, then every 30 s
//     check();
//     const id = setInterval(check, 30000);
//     return () => clearInterval(id);
//   }, [isPunchedIn, punchInAt, handlePunchOut]);

//   // ---- Filter log ----
//   const baseRecords = isHR
//     ? attendanceList
//     : attendanceList.filter((e) => e.employeeId === employeeId);

//   const filtered = baseRecords
//     .filter((row) => {
//       if (!row.punchIn) return false;
//       const d = new Date(row.punchIn);
//       if (searchYear && d.getFullYear() !== parseInt(searchYear, 10))
//         return false;
//       if (searchMonth && d.getMonth() + 1 !== parseInt(searchMonth, 10))
//         return false;
//       if (searchDay && d.getDate() !== parseInt(searchDay, 10)) return false;
//       if (searchQuery) {
//         const q = searchQuery.toLowerCase();
//         const hay = `${row.employeeId || ""} ${
//           row.employeeName || ""
//         }`.toLowerCase();
//         if (!hay.includes(q)) return false;
//       }
//       return true;
//     })
//     .sort((a, b) => new Date(b.punchIn) - new Date(a.punchIn));

//   const availableYears = Array.from(
//     new Set(
//       baseRecords
//         .map((e) => e.punchIn && new Date(e.punchIn).getFullYear())
//         .filter(Boolean)
//     )
//   ).sort((a, b) => b - a);

//   const filtersActive =
//     searchYear !== "" ||
//     searchMonth !== "" ||
//     searchDay !== "" ||
//     searchQuery !== "";

//   const clearFilters = () => {
//     setSearchYear("");
//     setSearchMonth("");
//     setSearchDay("");
//     setSearchQuery("");
//   };

//   return (
//     <div className="min-h-screen mt-4 p-4">
//       <div className="flex flex-col md:flex-row justify-between mb-2">
//         <span className="text-[#2A546D] text-sm lg:text-lg font-medium">
//           {isHR ? "HR / Attendance" : "Employee / Attendance"}
//         </span>
//       </div>

//       <div className="flex flex-col md:flex-row text-[#2A546D] text-sm lg:text-lg justify-end items-center gap-4 mb-4 pt-4">
//         <p className="font-semibold">
//           Employee ID: <span className="text-black">{employeeId || "—"}</span>
//         </p>
//         <p className="font-semibold">
//           Employee Name:{" "}
//           <span className="text-black">{employeeName || "—"}</span>
//         </p>
//         {isHR && (
//           <span className="px-3 py-1 rounded-full bg-[#2A546D] text-white text-xs">
//             HR view — all employees
//           </span>
//         )}
//       </div>

//       {/* Filters */}
//       <div className="flex flex-col md:flex-row items-center justify-center mb-4 gap-2 flex-wrap">
//         {isHR && (
//           <input
//             value={searchQuery}
//             onChange={(e) => setSearchQuery(e.target.value)}
//             placeholder="Search employee ID / name"
//             className="p-2 border w-64 py-3 border-gray-300 rounded-lg"
//           />
//         )}

//         <select
//           value={searchYear}
//           onChange={(e) => setSearchYear(e.target.value)}
//           className="p-2 border w-40 py-3 border-gray-300 rounded-lg"
//         >
//           <option value="">All Years</option>
//           {availableYears.map((y) => (
//             <option key={y} value={y}>
//               {y}
//             </option>
//           ))}
//         </select>

//         <select
//           value={searchMonth}
//           onChange={(e) => setSearchMonth(e.target.value)}
//           className="p-2 border w-40 py-3 border-gray-300 rounded-lg"
//         >
//           <option value="">All Months</option>
//           {Array.from({ length: 12 }, (_, i) => i + 1).map((m) => (
//             <option key={m} value={m}>
//               {new Date(0, m - 1).toLocaleString("default", { month: "long" })}
//             </option>
//           ))}
//         </select>

//         <select
//           value={searchDay}
//           onChange={(e) => setSearchDay(e.target.value)}
//           className="p-2 border w-40 py-3 border-gray-300 rounded-lg"
//         >
//           <option value="">All Days</option>
//           {Array.from({ length: 31 }, (_, i) => i + 1).map((d) => (
//             <option key={d} value={d}>
//               {d}
//             </option>
//           ))}
//         </select>

//         {filtersActive && (
//           <button
//             onClick={clearFilters}
//             className="px-4 py-3 rounded-lg border border-[#2A546D] text-[#2A546D] hover:bg-[#2A546D] hover:text-white transition"
//           >
//             Clear
//           </button>
//         )}
//       </div>

//       <div className="gap-4 grid-cols-1 md:grid-cols-2 grid">
//         {/* TimeSheet */}
//         <div className="bg-white shadow-md rounded-lg p-4 flex flex-col space-y-4 items-center">
//           <h1 className="text-sm lg:text-lg font-bold text-[#2A546D]">
//             TimeSheet
//           </h1>

//           <div className="bg-[#2A546D] text-white p-4 rounded-lg w-full text-center">
//             <h3 className="text-sm lg:text-lg font-semibold">
//               {isPunchedIn ? "Currently Working" : "Not Punched In"}
//             </h3>
//             <p className="text-sm">
//               {new Date(now).toLocaleString("en-US", {
//                 year: "numeric",
//                 month: "long",
//                 day: "numeric",
//                 hour: "numeric",
//                 minute: "numeric",
//                 second: "numeric",
//                 hour12: true,
//               })}
//             </p>
//           </div>

//           <div className="relative w-[200px] h-[200px] flex items-center justify-center">
//             <svg
//               className="absolute top-0 left-0 w-full h-full"
//               viewBox="0 0 120 120"
//             >
//               <circle
//                 cx="60"
//                 cy="60"
//                 r="54"
//                 stroke={isPunchedIn ? "#22c55e" : "#ef4444"}
//                 strokeWidth="8"
//                 fill="none"
//               />
//             </svg>
//             <p className="relative z-10 font-semibold text-base lg:text-lg text-[#2A546D]">
//               {fmtParts(elapsedParts)}
//             </p>
//           </div>

//           <div className="flex flex-col space-y-3 w-full">
//             <button
//               onClick={handlePunchButtonClick}
//               disabled={saving}
//               className={`px-4 py-2 rounded-lg w-full text-white bg-[#2A546D] ${
//                 saving ? "opacity-60 cursor-not-allowed" : "hover:opacity-90"
//               }`}
//             >
//               {saving ? "Saving..." : isPunchedIn ? "Punch Out" : "Punch In"}
//             </button>

//             {isPunchedIn && (
//               <button
//                 onClick={handleBreakButtonClick}
//                 className="px-4 py-2 rounded-lg w-full text-white bg-[#2A546D] hover:opacity-90"
//               >
//                 {breakStartAt ? "End Break" : "Start Break"}
//               </button>
//             )}

//             {!isPunchedIn && session && (
//               <button
//                 onClick={resetSession}
//                 className="px-4 py-2 rounded-lg w-full text-[#2A546D] border border-[#2A546D] hover:bg-[#2A546D] hover:text-white transition"
//               >
//                 Start Fresh
//               </button>
//             )}
//           </div>

//           {ENFORCE_PUNCH_IN_WINDOW && !isHR && !isPunchedIn && (
//             <p className="text-xs text-gray-500 text-center">
//               Punch-in allowed between {PUNCH_IN_WINDOW.startH}:
//               {pad(PUNCH_IN_WINDOW.startM)} AM and {PUNCH_IN_WINDOW.endH}:
//               {pad(PUNCH_IN_WINDOW.endM)} AM
//             </p>
//           )}

//           {AUTO_PUNCH_OUT_ENABLED && isPunchedIn && (
//             <p className="text-xs text-gray-500 text-center">
//               Auto punch-out at {AUTO_PUNCH_OUT.h}:{pad(AUTO_PUNCH_OUT.m)} PM
//             </p>
//           )}
//         </div>

//         {/* Time info */}
//         <div className="bg-white shadow-md rounded-lg p-4 space-y-3">
//           <h2 className="text-sm lg:text-lg text-center font-bold text-[#2A546D]">
//             Time Info
//           </h2>

//           <p className="font-semibold text-sm lg:text-lg text-black">
//             Punch In Time:{" "}
//             {punchInAt ? new Date(punchInAt).toLocaleString() : "—"}
//           </p>
//           <p className="font-semibold text-sm lg:text-lg text-black">
//             Punch Out Time:{" "}
//             {punchOutAt ? new Date(punchOutAt).toLocaleString() : "—"}
//           </p>
//           <p className="font-semibold text-sm lg:text-lg text-black">
//             Elapsed Time: {fmtParts(elapsedParts)}
//           </p>
//           <p className="font-semibold text-sm lg:text-lg text-black">
//             Current Break: {fmtParts(currentBreakParts)}
//           </p>
//           <p className="font-semibold text-sm lg:text-lg text-black">
//             Total Break Time: {fmtParts(totalBreakParts)}
//           </p>
//         </div>
//       </div>

//       {/* Log */}
//       <div className="bg-white shadow-md rounded-lg p-6 space-y-4 mt-6">
//         <div className="flex justify-between items-center mb-2">
//           <h2 className="text-[#2A546D] text-sm lg:text-lg font-semibold">
//             Attendance Log {isHR ? "(All Employees)" : ""}
//           </h2>
//           <button
//             onClick={() => dispatch(fetchAttendance())}
//             className="text-sm text-[#2A546D] underline"
//           >
//             Refresh
//           </button>
//         </div>

//         {loading ? (
//           <div className="text-center py-4 text-gray-500">Loading...</div>
//         ) : (
//           <div className="overflow-x-auto">
//             <table className="min-w-full text-nowrap">
//               <thead>
//                 <tr className="bg-[#2A546D] text-white">
//                   {[
//                     "Employee ID",
//                     "Employee Name",
//                     "Punch In",
//                     "Punch Out",
//                     "Production",
//                     "Break",
//                     "Working",
//                     "Overtime",
//                   ].map((h) => (
//                     <th key={h} className="p-3 border-r border-white">
//                       {h}
//                     </th>
//                   ))}
//                 </tr>
//               </thead>
//               <tbody>
//                 {filtered.length === 0 ? (
//                   <tr>
//                     <td colSpan={8} className="text-center text-black py-4">
//                       No attendance records found.
//                     </td>
//                   </tr>
//                 ) : (
//                   filtered.map((row, i) => (
//                     <tr
//                       key={row.id || i}
//                       className="text-center text-black border border-[#2a546d]"
//                     >
//                       <td className="p-3 border-r border-[#2a546d]">
//                         {row.employeeId || "—"}
//                       </td>
//                       <td className="p-3 border-r border-[#2a546d]">
//                         {row.employeeName || "—"}
//                       </td>
//                       <td className="p-3 border-r border-[#2a546d]">
//                         {row.punchIn
//                           ? new Date(row.punchIn).toLocaleString()
//                           : "—"}
//                       </td>
//                       <td className="p-3 border-r border-[#2a546d]">
//                         {row.punchOut
//                           ? new Date(row.punchOut).toLocaleString()
//                           : "—"}
//                       </td>
//                       <td className="p-3 border-r border-[#2a546d]">
//                         {fmtParts({
//                           hours: row.productionHours || 0,
//                           minutes: row.productionMinutes || 0,
//                           seconds: row.productionSeconds || 0,
//                         })}
//                       </td>
//                       <td className="p-3 border-r border-[#2a546d]">
//                         {fmtParts({
//                           hours: row.breakHours || 0,
//                           minutes: row.breakMinutes || 0,
//                           seconds: row.breakSeconds || 0,
//                         })}
//                       </td>
//                       <td className="p-3 border-r border-[#2a546d]">
//                         {fmtParts({
//                           hours: row.workingHours || 0,
//                           minutes: row.workingMinutes || 0,
//                           seconds: row.workingSeconds || 0,
//                         })}
//                       </td>
//                       <td className="p-3 border-r border-[#2a546d]">
//                         {row.overtime || 0} h
//                       </td>
//                     </tr>
//                   ))
//                 )}
//               </tbody>
//             </table>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Attendance;



/* eslint-disable no-unused-vars */
import { useState, useEffect, useRef, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import {
  fetchAttendance,
  createAttendance,
  selectAttendanceList,
  selectAttendanceLoading,
  selectAttendanceSaving,
  clearAttendanceError,
} from "../../../store/slices/attendanceSlice";

const HR_ROLES = ["super_admin", "hr_admin", "admin"];
const OFFICE_HOURS = 9;

const ENFORCE_PUNCH_IN_WINDOW = false;
const PUNCH_IN_WINDOW = { startH: 8, startM: 59, endH: 9, endM: 30 };

const AUTO_PUNCH_OUT_ENABLED = false;
const AUTO_PUNCH_OUT = { h: 18, m: 30 };

const SESSION_KEY = "attendance.session";

const pad = (n) => String(n).padStart(2, "0");

const toLocalISO = (d) =>
  `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}T` +
  `${pad(d.getHours())}:${pad(d.getMinutes())}:${pad(d.getSeconds())}`;

// ---------- NEW: format helpers ----------
const fmtDate = (value) => {
  if (!value) return "—";
  const d = new Date(value);
  if (Number.isNaN(d.getTime())) return String(value);
  return d.toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  }); // "11 Oct 2026"
};

const fmtDateTime = (value) => {
  if (!value) return "—";
  const d = new Date(value);
  if (Number.isNaN(d.getTime())) return String(value);
  return `${fmtDate(d)} · ${d.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  })}`; // "11 Oct 2026 · 10:35 AM"
};
// ---------- end new ----------

const secondsToParts = (secs) => {
  secs = Math.max(0, Math.floor(secs));
  return {
    hours: Math.floor(secs / 3600),
    minutes: Math.floor((secs % 3600) / 60),
    seconds: secs % 60,
  };
};

const fmtParts = ({ hours, minutes, seconds }) =>
  `${hours}h ${minutes}m ${seconds}s`;

const loadSession = () => {
  try {
    const raw = localStorage.getItem(SESSION_KEY);
    if (!raw) return null;
    const s = JSON.parse(raw);
    if (!s || typeof s !== "object") return null;
    if (s.punchInAt && typeof s.punchInAt !== "number") return null;
    return s;
  } catch {
    return null;
  }
};

const saveSession = (s) => {
  try {
    if (s) localStorage.setItem(SESSION_KEY, JSON.stringify(s));
    else localStorage.removeItem(SESSION_KEY);
  } catch {
    /* ignore */
  }
};

const Attendance = () => {
  const dispatch = useDispatch();
  const attendanceList = useSelector(selectAttendanceList);
  const loading = useSelector(selectAttendanceLoading);
  const saving = useSelector(selectAttendanceSaving);

  const auth = useSelector((state) => state.auth);
  const u = auth.user || {};
  const isHR = HR_ROLES.includes(String(u.role || "").toLowerCase());
  const employeeId = u.employeeId || u.employee_id || "";
  const employeeName = `${u.firstName || ""} ${u.lastName || ""}`.trim();

  const [session, setSession] = useState(() => loadSession());
  const [now, setNow] = useState(Date.now());

  // -------- CHANGED: default filters to today --------
  const today = new Date();
  const [searchYear, setSearchYear] = useState(String(today.getFullYear()));
  const [searchMonth, setSearchMonth] = useState(String(today.getMonth() + 1));
  const [searchDay, setSearchDay] = useState(String(today.getDate()));
  const [searchQuery, setSearchQuery] = useState("");
  // -------- end changed --------

  const autoPunchedOutRef = useRef(false);

  useEffect(() => {
    dispatch(fetchAttendance());
  }, [dispatch]);

  useEffect(() => {
    saveSession(session);
  }, [session]);

  useEffect(() => {
    const id = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(id);
  }, []);

  // ---- Derived ----
  const punchInAt = session?.punchInAt || null;
  const punchOutAt = session?.punchOutAt || null;
  const breakStartAt = session?.breakStartAt || null;
  const breakSecondsTotal = session?.breakSecondsTotal || 0;
  const isPunchedIn = !!session?.isPunchedIn;

  const liveBreakSecs =
    isPunchedIn && breakStartAt
      ? Math.max(0, Math.floor((now - breakStartAt) / 1000))
      : 0;

  const endAt = isPunchedIn ? now : punchOutAt || punchInAt;

  const elapsedSecs =
    punchInAt && endAt
      ? Math.max(
          0,
          Math.floor((endAt - punchInAt) / 1000) -
            breakSecondsTotal -
            liveBreakSecs
        )
      : 0;

  const elapsedParts = secondsToParts(elapsedSecs);
  const currentBreakParts = secondsToParts(liveBreakSecs);
  const totalBreakParts = secondsToParts(breakSecondsTotal + liveBreakSecs);

  const withinPunchInWindow = () => {
    if (!ENFORCE_PUNCH_IN_WINDOW) return true;
    if (isHR) return true;
    const d = new Date();
    const cur = d.getHours() * 60 + d.getMinutes();
    const start = PUNCH_IN_WINDOW.startH * 60 + PUNCH_IN_WINDOW.startM;
    const end = PUNCH_IN_WINDOW.endH * 60 + PUNCH_IN_WINDOW.endM;
    return cur >= start && cur <= end;
  };

  const handlePunchIn = () => {
    if (!withinPunchInWindow()) {
      toast.error(
        `Punch-in only allowed between ${PUNCH_IN_WINDOW.startH}:${pad(
          PUNCH_IN_WINDOW.startM
        )} AM and ${PUNCH_IN_WINDOW.endH}:${pad(PUNCH_IN_WINDOW.endM)} AM`
      );
      return;
    }
    const nowMs = Date.now();
    setNow(nowMs);
    autoPunchedOutRef.current = false;
    setSession({
      punchInAt: nowMs,
      punchOutAt: null,
      breakStartAt: null,
      breakSecondsTotal: 0,
      isPunchedIn: true,
    });
    toast.success("Punched in");
  };

  const handlePunchOut = useCallback(async () => {
    if (!session || !session.isPunchedIn) return;

    const nowMs = Date.now();
    const productionSecs = Math.max(
      0,
      Math.floor((nowMs - session.punchInAt) / 1000)
    );
    const openBreakSecs = session.breakStartAt
      ? Math.max(0, Math.floor((nowMs - session.breakStartAt) / 1000))
      : 0;
    const totalBreakSecs = (session.breakSecondsTotal || 0) + openBreakSecs;
    const workingSecs = Math.max(0, productionSecs - totalBreakSecs);
    const overtime =
      productionSecs / 3600 > OFFICE_HOURS
        ? Math.floor(productionSecs / 3600) - OFFICE_HOURS
        : 0;

    const production = secondsToParts(productionSecs);
    const totalBreak = secondsToParts(totalBreakSecs);
    const working = secondsToParts(workingSecs);

    const payload = {
      employeeId,
      employeeName,
      punchIn: toLocalISO(new Date(session.punchInAt)),
      punchOut: toLocalISO(new Date(nowMs)),
      productionHours: production.hours,
      productionMinutes: production.minutes,
      productionSeconds: production.seconds,
      breakHours: totalBreak.hours,
      breakMinutes: totalBreak.minutes,
      breakSeconds: totalBreak.seconds,
      workingHours: working.hours,
      workingMinutes: working.minutes,
      workingSeconds: working.seconds,
      overtime,
    };

    const result = await dispatch(createAttendance(payload));
    if (createAttendance.fulfilled.match(result)) {
      toast.success(`Punched out — worked ${fmtParts(production)}`);
    } else {
      toast.error(result.payload || "Failed to save attendance");
      dispatch(clearAttendanceError());
    }

    setSession({
      punchInAt: session.punchInAt,
      punchOutAt: nowMs,
      breakStartAt: null,
      breakSecondsTotal: totalBreakSecs,
      isPunchedIn: false,
    });
  }, [session, dispatch, employeeId, employeeName]);

  const handlePunchButtonClick = async () => {
    if (isPunchedIn) await handlePunchOut();
    else handlePunchIn();
  };

  const handleBreakButtonClick = () => {
    if (!isPunchedIn || !session) return;
    if (session.breakStartAt) {
      const nowMs = Date.now();
      const openSecs = Math.max(
        0,
        Math.floor((nowMs - session.breakStartAt) / 1000)
      );
      setSession({
        ...session,
        breakStartAt: null,
        breakSecondsTotal: (session.breakSecondsTotal || 0) + openSecs,
      });
      toast.info("Break ended");
    } else {
      setSession({ ...session, breakStartAt: Date.now() });
      toast.info("Break started");
    }
  };

  const resetSession = () => {
    setSession(null);
    autoPunchedOutRef.current = false;
  };

  useEffect(() => {
    if (!AUTO_PUNCH_OUT_ENABLED) return;
    if (!isPunchedIn || !punchInAt) return;

    const check = () => {
      const nowD = new Date();
      const h = nowD.getHours();
      const m = nowD.getMinutes();

      const punchInD = new Date(punchInAt);
      const sameDay = punchInD.toDateString() === nowD.toDateString();
      if (!sameDay) return;

      const inHours = punchInD.getHours();
      const inMinutes = punchInD.getMinutes();
      const punchInBeforeCutoff =
        inHours < AUTO_PUNCH_OUT.h ||
        (inHours === AUTO_PUNCH_OUT.h && inMinutes < AUTO_PUNCH_OUT.m);

      const nowPastCutoff =
        h > AUTO_PUNCH_OUT.h ||
        (h === AUTO_PUNCH_OUT.h && m >= AUTO_PUNCH_OUT.m);

      if (punchInBeforeCutoff && nowPastCutoff && !autoPunchedOutRef.current) {
        autoPunchedOutRef.current = true;
        handlePunchOut();
      }
    };

    check();
    const id = setInterval(check, 30000);
    return () => clearInterval(id);
  }, [isPunchedIn, punchInAt, handlePunchOut]);

  // ---- Filter log ----
  const baseRecords = isHR
    ? attendanceList
    : attendanceList.filter((e) => e.employeeId === employeeId);

  const filtered = baseRecords
    .filter((row) => {
      if (!row.punchIn) return false;
      const d = new Date(row.punchIn);
      if (searchYear && d.getFullYear() !== parseInt(searchYear, 10))
        return false;
      if (searchMonth && d.getMonth() + 1 !== parseInt(searchMonth, 10))
        return false;
      if (searchDay && d.getDate() !== parseInt(searchDay, 10)) return false;
      if (searchQuery) {
        const q = searchQuery.toLowerCase();
        const hay = `${row.employeeId || ""} ${
          row.employeeName || ""
        }`.toLowerCase();
        if (!hay.includes(q)) return false;
      }
      return true;
    })
    .sort((a, b) => new Date(b.punchIn) - new Date(a.punchIn));

  const availableYears = Array.from(
    new Set(
      baseRecords
        .map((e) => e.punchIn && new Date(e.punchIn).getFullYear())
        .filter(Boolean)
    )
  ).sort((a, b) => b - a);

  const filtersActive =
    searchYear !== String(today.getFullYear()) ||
    searchMonth !== String(today.getMonth() + 1) ||
    searchDay !== String(today.getDate()) ||
    searchQuery !== "";

  // -------- NEW: quick filter helpers --------
  const setToday = () => {
    const t = new Date();
    setSearchYear(String(t.getFullYear()));
    setSearchMonth(String(t.getMonth() + 1));
    setSearchDay(String(t.getDate()));
    setSearchQuery("");
  };

  const setThisMonth = () => {
    const t = new Date();
    setSearchYear(String(t.getFullYear()));
    setSearchMonth(String(t.getMonth() + 1));
    setSearchDay("");
    setSearchQuery("");
  };

  const setThisYear = () => {
    const t = new Date();
    setSearchYear(String(t.getFullYear()));
    setSearchMonth("");
    setSearchDay("");
    setSearchQuery("");
  };

  const clearAll = () => {
    setSearchYear("");
    setSearchMonth("");
    setSearchDay("");
    setSearchQuery("");
  };
  // -------- end new --------

  return (
    <div className="min-h-screen mt-4 p-4">
      <div className="flex flex-col md:flex-row justify-between mb-2">
        <span className="text-[#2A546D] text-sm lg:text-lg font-medium">
          {isHR ? "HR / Attendance" : "Employee / Attendance"}
        </span>
      </div>

      <div className="flex flex-col md:flex-row text-[#2A546D] text-sm lg:text-lg justify-end items-center gap-4 mb-4 pt-4">
        <p className="font-semibold">
          Employee ID: <span className="text-black">{employeeId || "—"}</span>
        </p>
        <p className="font-semibold">
          Employee Name:{" "}
          <span className="text-black">{employeeName || "—"}</span>
        </p>
        {isHR && (
          <span className="px-3 py-1 rounded-full bg-[#2A546D] text-white text-xs">
            HR view — all employees
          </span>
        )}
      </div>

      {/* Filters */}
      <div className="flex flex-col md:flex-row items-center justify-center mb-4 gap-2 flex-wrap">
        {isHR && (
          <input
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search employee ID / name"
            className="p-2 border w-64 py-3 border-gray-300 rounded-lg"
          />
        )}

        {/* Quick filter chips */}
        <div className="flex gap-2">
          <button
            onClick={setToday}
            className={`px-3 py-2 rounded-lg text-sm ${
              searchDay === String(today.getDate()) &&
              searchMonth === String(today.getMonth() + 1) &&
              searchYear === String(today.getFullYear())
                ? "bg-[#2A546D] text-white"
                : "border border-[#2A546D] text-[#2A546D]"
            }`}
          >
            Today
          </button>
          <button
            onClick={setThisMonth}
            className={`px-3 py-2 rounded-lg text-sm ${
              searchDay === "" &&
              searchMonth === String(today.getMonth() + 1) &&
              searchYear === String(today.getFullYear())
                ? "bg-[#2A546D] text-white"
                : "border border-[#2A546D] text-[#2A546D]"
            }`}
          >
            This Month
          </button>
          <button
            onClick={setThisYear}
            className={`px-3 py-2 rounded-lg text-sm ${
              searchMonth === "" &&
              searchDay === "" &&
              searchYear === String(today.getFullYear())
                ? "bg-[#2A546D] text-white"
                : "border border-[#2A546D] text-[#2A546D]"
            }`}
          >
            This Year
          </button>
          <button
            onClick={clearAll}
            className={`px-3 py-2 rounded-lg text-sm ${
              searchYear === "" && searchMonth === "" && searchDay === ""
                ? "bg-[#2A546D] text-white"
                : "border border-[#2A546D] text-[#2A546D]"
            }`}
          >
            All
          </button>
        </div>

        <select
          value={searchYear}
          onChange={(e) => setSearchYear(e.target.value)}
          className="p-2 border w-40 py-3 border-gray-300 rounded-lg"
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
          className="p-2 border w-40 py-3 border-gray-300 rounded-lg"
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
          className="p-2 border w-40 py-3 border-gray-300 rounded-lg"
        >
          <option value="">All Days</option>
          {Array.from({ length: 31 }, (_, i) => i + 1).map((d) => (
            <option key={d} value={d}>
              {d}
            </option>
          ))}
        </select>
      </div>

      <div className="gap-4 grid-cols-1 md:grid-cols-2 grid">
        {/* TimeSheet */}
        <div className="bg-white shadow-md rounded-lg p-4 flex flex-col space-y-4 items-center">
          <h1 className="text-sm lg:text-lg font-bold text-[#2A546D]">
            TimeSheet
          </h1>

          <div className="bg-[#2A546D] text-white p-4 rounded-lg w-full text-center">
            <h3 className="text-sm lg:text-lg font-semibold">
              {isPunchedIn ? "Currently Working" : "Not Punched In"}
            </h3>
            <p className="text-sm">{fmtDateTime(now)}</p>
          </div>

          <div className="relative w-[200px] h-[200px] flex items-center justify-center">
            <svg
              className="absolute top-0 left-0 w-full h-full"
              viewBox="0 0 120 120"
            >
              <circle
                cx="60"
                cy="60"
                r="54"
                stroke={isPunchedIn ? "#22c55e" : "#ef4444"}
                strokeWidth="8"
                fill="none"
              />
            </svg>
            <p className="relative z-10 font-semibold text-base lg:text-lg text-[#2A546D]">
              {fmtParts(elapsedParts)}
            </p>
          </div>

          <div className="flex flex-col space-y-3 w-full">
            <button
              onClick={handlePunchButtonClick}
              disabled={saving}
              className={`px-4 py-2 rounded-lg w-full text-white bg-[#2A546D] ${
                saving ? "opacity-60 cursor-not-allowed" : "hover:opacity-90"
              }`}
            >
              {saving ? "Saving..." : isPunchedIn ? "Punch Out" : "Punch In"}
            </button>

            {isPunchedIn && (
              <button
                onClick={handleBreakButtonClick}
                className="px-4 py-2 rounded-lg w-full text-white bg-[#2A546D] hover:opacity-90"
              >
                {breakStartAt ? "End Break" : "Start Break"}
              </button>
            )}

            {!isPunchedIn && session && (
              <button
                onClick={resetSession}
                className="px-4 py-2 rounded-lg w-full text-[#2A546D] border border-[#2A546D] hover:bg-[#2A546D] hover:text-white transition"
              >
                Start Fresh
              </button>
            )}
          </div>

          {ENFORCE_PUNCH_IN_WINDOW && !isHR && !isPunchedIn && (
            <p className="text-xs text-gray-500 text-center">
              Punch-in allowed between {PUNCH_IN_WINDOW.startH}:
              {pad(PUNCH_IN_WINDOW.startM)} AM and {PUNCH_IN_WINDOW.endH}:
              {pad(PUNCH_IN_WINDOW.endM)} AM
            </p>
          )}
        </div>

        {/* Time info */}
        <div className="bg-white shadow-md rounded-lg p-4 space-y-3">
          <h2 className="text-sm lg:text-lg text-center font-bold text-[#2A546D]">
            Time Info
          </h2>

          <p className="font-semibold text-sm lg:text-lg text-black">
            Punch In Time: {punchInAt ? fmtDateTime(punchInAt) : "—"}
          </p>
          <p className="font-semibold text-sm lg:text-lg text-black">
            Punch Out Time: {punchOutAt ? fmtDateTime(punchOutAt) : "—"}
          </p>
          <p className="font-semibold text-sm lg:text-lg text-black">
            Elapsed Time: {fmtParts(elapsedParts)}
          </p>
          <p className="font-semibold text-sm lg:text-lg text-black">
            Current Break: {fmtParts(currentBreakParts)}
          </p>
          <p className="font-semibold text-sm lg:text-lg text-black">
            Total Break Time: {fmtParts(totalBreakParts)}
          </p>
        </div>
      </div>

      {/* Log */}
      <div className="bg-white shadow-md rounded-lg p-6 space-y-4 mt-6">
        <div className="flex justify-between items-center mb-2">
          <h2 className="text-[#2A546D] text-sm lg:text-lg font-semibold">
            Attendance Log {isHR ? "(All Employees)" : ""}
          </h2>
          <button
            onClick={() => dispatch(fetchAttendance())}
            className="text-sm text-[#2A546D] underline"
          >
            Refresh
          </button>
        </div>

        {loading ? (
          <div className="text-center py-4 text-gray-500">Loading...</div>
        ) : (
          <div className="overflow-x-auto">
            <table className="min-w-full text-nowrap">
              <thead>
                <tr className="bg-[#2A546D] text-white">
                  {[
                    "Employee ID",
                    "Employee Name",
                    "Punch In",
                    "Punch Out",
                    "Production",
                    "Break",
                    "Working",
                    "Overtime",
                  ].map((h) => (
                    <th key={h} className="p-3 border-r border-white">
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {filtered.length === 0 ? (
                  <tr>
                    <td colSpan={8} className="text-center text-black py-4">
                      No attendance records found for the selected filter.
                    </td>
                  </tr>
                ) : (
                  filtered.map((row, i) => (
                    <tr
                      key={row.id || i}
                      className="text-center text-black border border-[#2a546d]"
                    >
                      <td className="p-3 border-r border-[#2a546d]">
                        {row.employeeId || "—"}
                      </td>
                      <td className="p-3 border-r border-[#2a546d]">
                        {row.employeeName || "—"}
                      </td>
                      <td className="p-3 border-r border-[#2a546d]">
                        {fmtDateTime(row.punchIn)}
                      </td>
                      <td className="p-3 border-r border-[#2a546d]">
                        {fmtDateTime(row.punchOut)}
                      </td>
                      <td className="p-3 border-r border-[#2a546d]">
                        {fmtParts({
                          hours: row.productionHours || 0,
                          minutes: row.productionMinutes || 0,
                          seconds: row.productionSeconds || 0,
                        })}
                      </td>
                      <td className="p-3 border-r border-[#2a546d]">
                        {fmtParts({
                          hours: row.breakHours || 0,
                          minutes: row.breakMinutes || 0,
                          seconds: row.breakSeconds || 0,
                        })}
                      </td>
                      <td className="p-3 border-r border-[#2a546d]">
                        {fmtParts({
                          hours: row.workingHours || 0,
                          minutes: row.workingMinutes || 0,
                          seconds: row.workingSeconds || 0,
                        })}
                      </td>
                      <td className="p-3 border-r border-[#2a546d]">
                        {row.overtime || 0} h
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default Attendance;