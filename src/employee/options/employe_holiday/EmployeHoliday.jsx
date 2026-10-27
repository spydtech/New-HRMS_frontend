// /* eslint-disable no-unused-vars */
// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { API_BASE_URL } from "../../../Config/api";

// function EmployeHoliday() {
//   const [holidays, setHolidays] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [errorMessage, setErrorMessage] = useState("");

//   useEffect(() => {
//     fetchHolidays();
//   }, []);

//   const fetchHolidays = async () => {
//     try {
//      const response = await axios.get(`${API_BASE_URL}/holidays`);
//       setHolidays(response.data);
//       setLoading(false);
//     } catch (error) {
//       console.error("Error fetching employees:", error);
//       setErrorMessage("Error fetching employees");
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="p-4 mt-4  min-h-screen">
//       <div className="">
//         <div className="  flex flex-col md:flex-row justify-between">
//           <div>
//             <span className=" text-[#2A546D] text-sm lg:text-lg font-medium">
//               Employee / Holidays
//             </span>
//           </div>
//         </div>
//         {/* <div className="   overflow-x-scroll scrollbar-thin   scrollbar-track-white scrollbar-thumb-[#2A546D] pt-4 mx-4">
//         <table className="min-w-full w-screen overflow-x-scroll  text-nowrap"> */}
//         <div
//           id="table"
//           className="  overflow-x-scroll scrollbar-thin   scrollbar-track-white scrollbar-thumb-[#2a546d] pt-4 mx-4"
//         >
//           {loading ? (
//             <div>Loading...</div>
//           ) : (
//             <table className="min-w-full max-w-3xl mx-auto text-nowrap">
//               <thead className="">
//                 <tr className="bg-[#2a546d] text-white">
//                   <th className="p-3 border border-r-white border-[#2a546d]">
//                     Sl.No
//                   </th>
//                   <th className="p-3 border-r border-white">Day</th>
//                   <th className="p-3 border-r border-white">Date</th>
//                   <th className="p-3  border  border-[#2a546d]">
//                     Holiday Name
//                   </th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {holidays.map((holiday, index) => (
//                   <tr
//                     key={holiday.holidayName}
//                     className="text-center text-black border  border-[#2a546d]"
//                   >
//                     <td className="p-3 border-r border-[#2a546d]">
//                       {index + 1}
//                     </td>
//                     <td className="p-3 border-r border-[#2a546d] ">
//                       {holiday.day}
//                     </td>
//                     <td className="p-3 border-r border-[#2a546d] ">
//                       {holiday.date}
//                     </td>
//                     <td className="p-3 border-r border-[#2a546d]">
//                       {holiday.holidayName}
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default EmployeHoliday;










/* eslint-disable no-unused-vars */
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchHolidays,
  selectHolidays,
  selectHolidaysLoading,
} from "../../../store/slices/holidaySlice";

const fmtDate = (s) => {
  if (!s) return "—";
  try {
    return new Date(s).toLocaleDateString("en-US", {
      weekday: "short",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  } catch {
    return s;
  }
};

function EmployeHoliday() {
  const dispatch = useDispatch();
  const holidays = useSelector(selectHolidays) || [];
  const loading = useSelector(selectHolidaysLoading);

  useEffect(() => {
    dispatch(fetchHolidays());
  }, [dispatch]);

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const upcoming = holidays.filter((h) => new Date(h.date) >= today);
  const past = holidays.filter((h) => new Date(h.date) < today);

  return (
    <div className="p-4 mt-4 min-h-screen">
      <div className="flex flex-col md:flex-row justify-between mb-4">
        <span className="text-[#2A546D] text-sm lg:text-lg font-medium">
          Employee / Holidays
        </span>
      </div>

      {loading ? (
        <div className="p-6 text-center text-gray-500">Loading...</div>
      ) : (
        <>
          {/* Upcoming */}
          <div className="overflow-x-auto pt-4 mx-4 mb-8">
            <h2 className="text-[#2A546D] font-semibold mb-2">
              Upcoming Holidays ({upcoming.length})
            </h2>
            <table className="min-w-full max-w-3xl mx-auto text-nowrap">
              <thead>
                <tr className="bg-[#2a546d] text-white">
                  <th className="p-3 border border-r-white border-[#2a546d]">
                    Sl.No
                  </th>
                  <th className="p-3 border-r border-white">Day</th>
                  <th className="p-3 border-r border-white">Date</th>
                  <th className="p-3 border border-[#2a546d]">Holiday Name</th>
                </tr>
              </thead>
              <tbody>
                {upcoming.length === 0 && (
                  <tr>
                    <td colSpan={4} className="text-center p-4 text-gray-500">
                      No upcoming holidays
                    </td>
                  </tr>
                )}
                {upcoming.map((holiday, index) => (
                  <tr
                    key={holiday.id || index}
                    className="text-center text-black border border-[#2a546d]"
                  >
                    <td className="p-3 border-r border-[#2a546d]">
                      {index + 1}
                    </td>
                    <td className="p-3 border-r border-[#2a546d]">
                      {holiday.day}
                    </td>
                    <td className="p-3 border-r border-[#2a546d]">
                      {holiday.date}
                    </td>
                    <td className="p-3 border-r border-[#2a546d]">
                      {holiday.holidayName || holiday.holiday_name}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Past */}
          {past.length > 0 && (
            <div className="overflow-x-auto pt-4 mx-4">
              <h2 className="text-gray-600 font-semibold mb-2">
                Past Holidays ({past.length})
              </h2>
              <table className="min-w-full max-w-3xl mx-auto text-nowrap">
                <thead>
                  <tr className="bg-gray-400 text-white">
                    <th className="p-3 border border-r-white border-gray-400">
                      Sl.No
                    </th>
                    <th className="p-3 border-r border-white">Day</th>
                    <th className="p-3 border-r border-white">Date</th>
                    <th className="p-3 border border-gray-400">Holiday Name</th>
                  </tr>
                </thead>
                <tbody>
                  {past.map((holiday, index) => (
                    <tr
                      key={holiday.id || index}
                      className="text-center text-gray-600 border border-gray-300"
                    >
                      <td className="p-3 border-r border-gray-300">
                        {index + 1}
                      </td>
                      <td className="p-3 border-r border-gray-300">
                        {holiday.day}
                      </td>
                      <td className="p-3 border-r border-gray-300">
                        {holiday.date}
                      </td>
                      <td className="p-3 border-r border-gray-300">
                        {holiday.holidayName || holiday.holiday_name}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </>
      )}
    </div>
  );
}

export default EmployeHoliday;