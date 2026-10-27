// import React, { useState } from "react";
// import { HiRefresh } from "react-icons/hi";
// import { PiArrowLineDownBold } from "react-icons/pi";
// import { RiArrowDownSLine } from "react-icons/ri";
// import { GoChevronRight, GoChevronLeft } from "react-icons/go";

// const EmployeeSummary = ({ employees }) => {
//   const [search, setSearch] = useState("");
//   const [currentPage, setCurrentPage] = useState(1);

//   const filteredEmployees = employees
//     ? employees.filter((employee) =>
//         employee.name.toLowerCase().includes(search.toLowerCase())
//       )
//     : [];

//   const itemsPerPage = 2;
//   const totalPages = Math.ceil(filteredEmployees.length / itemsPerPage);
//   const indexOfLastItem = currentPage * itemsPerPage;
//   const indexOfFirstItem = indexOfLastItem - itemsPerPage;
//   const currentItems = filteredEmployees.slice(indexOfFirstItem, indexOfLastItem);

//   const handleNextPage = () => {
//     if (currentPage < totalPages) return setCurrentPage(currentPage + 1);
//   };
//   const handlePreviousPage = () => {
//     if (currentPage > 1) return setCurrentPage(currentPage - 1);
//   };

//   return (
//     <div className="my-8">
//       <h1 className="text-xl font-bold">Employee Summary</h1>
//       <div className="flex flex-col">
//         <div className="my-2 grid gap-2 md:grid-cols-3 lg:grid-cols-4 max-lg:text-xs ">
//           <button className="flex gap-1 px-2 p-1 items-center rounded-lg bg-yellow-500 text-white">
//             <HiRefresh />
//             Refresh/Undo
//           </button>
//           <button className="flex gap-1 px-2 p-1 items-center  rounded-lg bg-gray-800 text-white">
//             <PiArrowLineDownBold />
//             Cash requirements
//           </button>
//           <button className="flex gap-1 px-2 p-1 items-center rounded-lg bg-gray-800 text-white">
//             Payroll Detailed Report
//           </button>
//           <button className="flex max-lg:px-2 p-1 text-nowrap items-center justify-between rounded-lg bg-gray-800 text-white">
//             Import Allowances/Deductions
//             <RiArrowDownSLine className=""/>
//           </button>
//         </div>
//         <div className="flex  gap-2 pr-2 border self-end bg-gray-300 rounded-md">
//           <input
//             type="search"
//             className="outline-none pl-3 p-1 text-sm"
//             placeholder="Search..."
//             onChange={(e) => setSearch(e.target.value)}
//             value={search}
//           />
//           <button>Go</button>
//         </div>
//       </div>

//       {filteredEmployees ? (
//         <div>
//           <div className="my-2 overflow-x-auto scrollbar-thin scrollbar-track-white scrollbar-thumb-[#0098f1]">
//             <table className="min-w-[1000px]">
//               <thead className="bg-[#0098F1]">
//                 <tr className="text-sm text-white border border-[#0098F1]">
//                   <th className="py-3 px-4 border-r border-white text-center text-sm font-medium text-nowrap">
//                     EMPLOYEE NAME
//                   </th>
//                   <th className="py-3 px-4 border-r border-white text-center text-sm font-medium text-nowrap">EMPLOYEE</th>
//                   <th className="py-3 px-4 border-r border-white text-center text-sm font-medium text-nowrap">GROSS(₹)</th>
//                   <th className="py-3 px-4 border-r border-white text-center text-sm font-medium text-nowrap">
//                     ACTUAL GROSS(₹)
//                   </th>
//                   <th className="py-3 px-4 border-r border-white text-center text-sm font-medium text-nowrap">BASIC(₹)</th>
//                   <th className="py-3 px-4 border-r border-white text-center text-sm font-medium text-nowrap">
//                     ALLOWANCES(₹)
//                   </th>
//                   <th className="py-3 px-4 border-r border-white text-center text-sm font-medium text-nowrap">
//                     DEDUCTIONS(₹)
//                   </th>
//                   <th className="py-3 px-4 border-r border-white text-center text-sm font-medium text-nowrap">
//                     LOSS OF PAY(₹)
//                   </th>
//                   <th className="py-3 px-4 border-r border-white text-center text-sm font-medium text-nowrap">
//                     INCOME TAX(₹)
//                   </th>
//                   <th className="py-3 px-4 border-r border-white text-center text-sm font-medium text-nowrap">
//                     SURCHARGE(₹)
//                   </th>
//                   <th className="py-3 px-4 border-r border-white text-center text-sm font-medium text-nowrap">CESS(₹)</th>
//                   <th className="py-3 px-4 text-center text-sm font-medium text-nowrap">NET AMOUNT(₹)</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {currentItems.map((employee) => (
//                   <tr key={employee.id} className="text-center bg-white border border-[#0098F1]">
//                     <td className="py-3 px-4 border-r border-[#0098f1] ">
//                       {employee.name}
//                     </td>
//                     <td className="py-3 px-4 border-r border-[#0098f1]">
//                       {employee.id}
//                     </td>
//                     <td className="py-3 px-4 border-r border-[#0098f1]">
//                       {employee.gross}
//                     </td>
//                     <td className="py-3 px-4 border-r border-[#0098f1]">
//                       {employee.actualGross}
//                     </td>
//                     <td className="py-3 px-4 border-r border-[#0098f1]">
//                       {employee.basic}
//                     </td>
//                     <td className="py-3 px-4 border-r border-[#0098f1]">
//                       {employee.allowances}
//                     </td>
//                     <td className="py-3 px-4 border-r border-[#0098f1]">
//                       {employee.deductions}
//                     </td>
//                     <td className="py-3 px-4 border-r border-[#0098f1]">
//                       {employee.lossOfPay}
//                     </td>
//                     <td className="py-3 px-4 border-r border-[#0098f1]">
//                       {employee.incomeTax}
//                     </td>
//                     <td className="py-3 px-4 border-r border-[#0098f1]">
//                       {employee.surcharge}
//                     </td>
//                     <td className="py-3 px-4 border-r border-[#0098f1]">
//                       {employee.cess}
//                     </td>
//                     <td className="py-2 px-4">{employee.netAmount}</td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//           <p className="font-semibold text-sm">
//             Total Records :
//             <span className="text-[#0098F1]"> {filteredEmployees.length}</span>
//           </p>
//           <div className="flex justify-end items-center gap-3 md:mr-5 ">
//             <p>{currentPage} of {totalPages}</p>
//             <button
//               onClick={handlePreviousPage}
//               className="bg-[#0098F1] rounded-full h-8 w-8 flex items-center justify-center text-white"
//             >
//               <GoChevronLeft size={20} />
//             </button>

//             <button
//               onClick={handleNextPage}
//               className="bg-[#0098F1] rounded-full h-8 w-8 flex items-center justify-center text-white"
//             >
//               <GoChevronRight size={20} />
//             </button>
//           </div>
//         </div>
//       ) : (
//         ""
//       )}
//     </div>
//   );
// };

// export default EmployeeSummary;








import React, { useState } from "react";
import { HiRefresh } from "react-icons/hi";
import { PiArrowLineDownBold } from "react-icons/pi";
import { RiArrowDownSLine } from "react-icons/ri";
import { GoChevronRight, GoChevronLeft } from "react-icons/go";

const EmployeeSummary = ({ employees = [] }) => {
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const filtered = employees.filter((e) =>
    (e.name || "").toLowerCase().includes(search.toLowerCase())
  );

  const itemsPerPage = 5;
  const totalPages = Math.max(1, Math.ceil(filtered.length / itemsPerPage));
  const indexOfLast = currentPage * itemsPerPage;
  const currentItems = filtered.slice(indexOfLast - itemsPerPage, indexOfLast);

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };
  const handlePrev = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const fmt = (n) =>
    Number(n || 0).toLocaleString("en-IN", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });

  // Totals for the current run (all filtered rows, not just this page)
  const totals = filtered.reduce(
    (acc, e) => ({
      gross: acc.gross + Number(e.gross || 0),
      actualGross: acc.actualGross + Number(e.actualGross || 0),
      basic: acc.basic + Number(e.basic || 0),
      allowances: acc.allowances + Number(e.allowances || 0),
      deductions: acc.deductions + Number(e.deductions || 0),
      lossOfPay: acc.lossOfPay + Number(e.lossOfPay || 0),
      incomeTax: acc.incomeTax + Number(e.incomeTax || 0),
      surcharge: acc.surcharge + Number(e.surcharge || 0),
      cess: acc.cess + Number(e.cess || 0),
      netAmount: acc.netAmount + Number(e.netAmount || 0),
    }),
    {
      gross: 0, actualGross: 0, basic: 0, allowances: 0, deductions: 0,
      lossOfPay: 0, incomeTax: 0, surcharge: 0, cess: 0, netAmount: 0,
    }
  );

  return (
    <div className="my-8">
      <h1 className="text-xl font-bold">Employee Summary</h1>

      <div className="flex flex-col">
        <div className="my-2 grid gap-2 md:grid-cols-3 lg:grid-cols-4 max-lg:text-xs">
          <button className="flex gap-1 px-2 p-1 items-center rounded-lg bg-yellow-500 text-white">
            <HiRefresh />
            Refresh/Undo
          </button>
          <button className="flex gap-1 px-2 p-1 items-center rounded-lg bg-gray-800 text-white">
            <PiArrowLineDownBold />
            Cash requirements
          </button>
          <button className="flex gap-1 px-2 p-1 items-center rounded-lg bg-gray-800 text-white">
            Payroll Detailed Report
          </button>
          <button className="flex max-lg:px-2 p-1 text-nowrap items-center justify-between rounded-lg bg-gray-800 text-white">
            Import Allowances/Deductions
            <RiArrowDownSLine />
          </button>
        </div>

        <div className="flex gap-2 pr-2 border self-end bg-gray-300 rounded-md">
          <input
            type="search"
            className="outline-none pl-3 p-1 text-sm bg-transparent"
            placeholder="Search..."
            onChange={(e) => {
              setSearch(e.target.value);
              setCurrentPage(1);
            }}
            value={search}
          />
          <button className="pr-2 text-sm">Go</button>
        </div>
      </div>

      <div className="my-2 overflow-x-auto scrollbar-thin scrollbar-track-white scrollbar-thumb-[#0098f1]">
        <table className="min-w-[1200px] w-full">
          <thead className="bg-[#0098F1]">
            <tr className="text-sm text-white border border-[#0098F1]">
              {[
                "EMPLOYEE NAME",
                "EMPLOYEE ID",
                "GROSS (₹)",
                "ACTUAL GROSS (₹)",
                "BASIC (₹)",
                "ALLOWANCES (₹)",
                "DEDUCTIONS (₹)",
                "LOSS OF PAY (₹)",
                "INCOME TAX (₹)",
                "SURCHARGE (₹)",
                "CESS (₹)",
                "NET AMOUNT (₹)",
              ].map((h) => (
                <th
                  key={h}
                  className="py-3 px-4 border-r border-white text-center text-sm font-medium text-nowrap"
                >
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {currentItems.length === 0 && (
              <tr>
                <td
                  colSpan={12}
                  className="py-4 text-center text-gray-500 bg-white"
                >
                  No employees to display.
                </td>
              </tr>
            )}

            {currentItems.map((e) => (
              <tr
                key={e.id}
                className="text-center bg-white border border-[#0098F1]"
              >
                <td className="py-3 px-4 border-r border-[#0098f1]">
                  {e.name}
                </td>
                <td className="py-3 px-4 border-r border-[#0098f1]">
                  {e.id}
                </td>
                <td className="py-3 px-4 border-r border-[#0098f1]">
                  {fmt(e.gross)}
                </td>
                <td className="py-3 px-4 border-r border-[#0098f1]">
                  {fmt(e.actualGross)}
                </td>
                <td className="py-3 px-4 border-r border-[#0098f1]">
                  {fmt(e.basic)}
                </td>
                <td className="py-3 px-4 border-r border-[#0098f1]">
                  {fmt(e.allowances)}
                </td>
                <td className="py-3 px-4 border-r border-[#0098f1]">
                  {fmt(e.deductions)}
                </td>
                <td className="py-3 px-4 border-r border-[#0098f1]">
                  {fmt(e.lossOfPay)}
                </td>
                <td className="py-3 px-4 border-r border-[#0098f1]">
                  {fmt(e.incomeTax)}
                </td>
                <td className="py-3 px-4 border-r border-[#0098f1]">
                  {fmt(e.surcharge)}
                </td>
                <td className="py-3 px-4 border-r border-[#0098f1]">
                  {fmt(e.cess)}
                </td>
                <td className="py-3 px-4 font-semibold text-[#0098F1]">
                  {fmt(e.netAmount)}
                </td>
              </tr>
            ))}

            {/* Totals row */}
            {currentItems.length > 0 && (
              <tr className="bg-gray-100 font-bold text-center border border-[#0098F1]">
                <td className="py-3 px-4 border-r border-[#0098f1]" colSpan={2}>
                  TOTAL ({filtered.length})
                </td>
                <td className="py-3 px-4 border-r border-[#0098f1]">
                  {fmt(totals.gross)}
                </td>
                <td className="py-3 px-4 border-r border-[#0098f1]">
                  {fmt(totals.actualGross)}
                </td>
                <td className="py-3 px-4 border-r border-[#0098f1]">
                  {fmt(totals.basic)}
                </td>
                <td className="py-3 px-4 border-r border-[#0098f1]">
                  {fmt(totals.allowances)}
                </td>
                <td className="py-3 px-4 border-r border-[#0098f1]">
                  {fmt(totals.deductions)}
                </td>
                <td className="py-3 px-4 border-r border-[#0098f1]">
                  {fmt(totals.lossOfPay)}
                </td>
                <td className="py-3 px-4 border-r border-[#0098f1]">
                  {fmt(totals.incomeTax)}
                </td>
                <td className="py-3 px-4 border-r border-[#0098f1]">
                  {fmt(totals.surcharge)}
                </td>
                <td className="py-3 px-4 border-r border-[#0098f1]">
                  {fmt(totals.cess)}
                </td>
                <td className="py-3 px-4 text-[#0098F1]">
                  {fmt(totals.netAmount)}
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <p className="font-semibold text-sm">
        Total Records :
        <span className="text-[#0098F1]"> {filtered.length}</span>
      </p>

      {totalPages > 1 && (
        <div className="flex justify-end items-center gap-3 md:mr-5 mt-2">
          <p>
            {currentPage} of {totalPages}
          </p>
          <button
            onClick={handlePrev}
            disabled={currentPage === 1}
            className="bg-[#0098F1] rounded-full h-8 w-8 flex items-center justify-center text-white disabled:opacity-50"
          >
            <GoChevronLeft size={20} />
          </button>
          <button
            onClick={handleNext}
            disabled={currentPage === totalPages}
            className="bg-[#0098F1] rounded-full h-8 w-8 flex items-center justify-center text-white disabled:opacity-50"
          >
            <GoChevronRight size={20} />
          </button>
        </div>
      )}
    </div>
  );
};

export default EmployeeSummary;