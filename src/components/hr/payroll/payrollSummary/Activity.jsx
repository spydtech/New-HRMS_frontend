// import React, { useState } from "react";
// import { IoIosChatbubbles } from "react-icons/io";
// import { GoChevronRight, GoChevronLeft } from "react-icons/go";

// const Messages = [
//   {
//     name: "Sathish Chiluveru",
//     description: "Payroll Refreshed for all employees.",
//     date: "Jul24,2024 at 06:00 PM",
//   },
//   {
//     name: "Mounika Ch",
//     description: "Payroll Started Full Time Batch.",
//     date: "Jul24,2024 at 06:50 PM",
//   },
//   {
//     name: "Professor Ali",
//     description: "Payroll Refreshed for all employees.",
//     date: "Jul24,2024 at 06:00 PM",
//   },
//   {
//     name: "Shyam Ch",
//     description: "Payroll Started Full Time Batch.",
//     date: "Jul24,2024 at 06:50 PM",
//   },
//   {
//     name: "Captain Jonny",
//     description: "Payroll Refreshed for all employees.",
//     date: "Jul24,2024 at 06:00 PM",
//   },
//   {
//     name: "Jones Marvik",
//     description: "Payroll Started Full Time Batch.",
//     date: "Jul24,2024 at 06:50 PM",
//   },
// ];

// const Activity = () => {
//   const [currentPage, setCurrentPage] = useState(1);

//   const itemsPerPage = 2;
//   const totalPages = Math.ceil(Messages.length / itemsPerPage);
//   const indexOfLastItem = currentPage * itemsPerPage;
//   const indexOfFirstItem = indexOfLastItem - itemsPerPage;
//   const currentItems = Messages.slice(indexOfFirstItem, indexOfLastItem);

//   const handleNextPage = () => {
//     if (currentPage < totalPages) return setCurrentPage(currentPage + 1);
//   };
//   const handlePreviousPage = () => {
//     if (currentPage > 1) return setCurrentPage(currentPage - 1);
//   };

//   return (
//     <div className="my-5">
//       <h1 className="flex items-center gap-[2px] font-bold border-b pb-2 border-gray-400">
//         <IoIosChatbubbles className="text-green-600 text-xl" />
//         Activity
//       </h1>
//       <div>
//         {currentItems.map((message, index) => {
//           const nameParts = message.name.split(" ");
//           const firstNameLetter = nameParts[0][0];
//           const lastNameLetter = nameParts[nameParts.length - 1][0];
//           return (
//             <div key={index} className="my-2 flex gap-x-3 items-center">
//               <h1 className="bg-[#0098F1] text-white h-10 w-10 flex justify-center items-center rounded-full text-xl ">
//                 {firstNameLetter}
//                 {lastNameLetter}
//               </h1>
//               <div className="text-xs ">
//                 <h1 className="font-bold">{message.name}</h1>
//                 <p>{message.description}</p>
//                 <p>{message.date}</p>
//               </div>
//             </div>
//           );
//         })}
//       </div>
//       <div className="flex justify-end items-center gap-3 md:mr-5">
//       <p>{currentPage} of {totalPages}</p>
//         <button
//           type="button"
//           onClick={handlePreviousPage}
//           className="h-8 w-8 bg-[#0098F1] flex items-center justify-center text-white rounded-full"
//         >
//           <GoChevronLeft size={20} />
//         </button>
//         <button
//           type="button"
//           onClick={handleNextPage}
//           className="h-8 w-8 bg-[#0098F1] flex items-center justify-center text-white rounded-full"
//         >
//           <GoChevronRight size={20} />
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Activity;







import React, { useEffect, useState } from "react";
import { IoIosChatbubbles } from "react-icons/io";
import { GoChevronRight, GoChevronLeft } from "react-icons/go";
import { payrollAPI } from "../../../../services/api";

const Activity = () => {
  const [messages, setMessages] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const res = await payrollAPI.listActivities(50);
        setMessages(Array.isArray(res.data) ? res.data : []);
      } catch (e) { console.error(e); } finally { setLoading(false); }
    })();
  }, []);

  const itemsPerPage = 2;
  const totalPages = Math.max(1, Math.ceil(messages.length / itemsPerPage));
  const indexOfLast = currentPage * itemsPerPage;
  const currentItems = messages.slice(indexOfLast - itemsPerPage, indexOfLast);

  return (
    <div className="my-5">
      <h1 className="flex items-center gap-[2px] font-bold border-b pb-2 border-gray-400">
        <IoIosChatbubbles className="text-green-600 text-xl" /> Activity
      </h1>

      {loading && <p className="text-gray-500 py-4">Loading...</p>}
      {!loading && messages.length === 0 && <p className="text-gray-500 py-4">No payroll activity yet.</p>}

      <div>
        {currentItems.map((m, i) => {
          const name = m.user?.name || "System";
          const parts = name.split(" ");
          const initials = (parts[0]?.[0] || "") + (parts[parts.length - 1]?.[0] || "");
          return (
            <div key={m.id ?? i} className="my-2 flex gap-x-3 items-center">
              <h1 className="bg-[#0098F1] text-white h-10 w-10 flex justify-center items-center rounded-full text-xl">
                {initials.toUpperCase()}
              </h1>
              <div className="text-xs">
                <h1 className="font-bold">{name}</h1>
                <p>{m.description}</p>
                <p>{new Date(m.createdAt).toLocaleString()}</p>
              </div>
            </div>
          );
        })}
      </div>

      {totalPages > 1 && (
        <div className="flex justify-end items-center gap-3 md:mr-5">
          <p>{currentPage} of {totalPages}</p>
          <button onClick={() => currentPage > 1 && setCurrentPage(currentPage - 1)} className="h-8 w-8 bg-[#0098F1] flex items-center justify-center text-white rounded-full">
            <GoChevronLeft size={20} />
          </button>
          <button onClick={() => currentPage < totalPages && setCurrentPage(currentPage + 1)} className="h-8 w-8 bg-[#0098F1] flex items-center justify-center text-white rounded-full">
            <GoChevronRight size={20} />
          </button>
        </div>
      )}
    </div>
  );
};

export default Activity;