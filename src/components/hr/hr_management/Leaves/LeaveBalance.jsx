// import React, { useState, useEffect } from "react";
// import * as XLSX from "xlsx";
// import { saveAs } from "file-saver";
// import { toast } from "react-toastify";
// import { leavesAPI } from "../../../../services/api"; 

// const LeaveBalance = () => {
//   const [employees, setEmployees] = useState([]);
//   const [searchTerm, setSearchTerm] = useState("");
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     fetchBalances();
//   }, []);

//   const fetchBalances = async () => {
//     setLoading(true);
//     try {
//       const res = await leavesAPI.allBalances();
//       setEmployees(Array.isArray(res.data) ? res.data : []);
//     } catch (err) {
//       toast.error("Failed to load balances");
//     } finally {
//       setLoading(false);
//     }
//   };

//   const exportToExcel = () => {
//     const ws = XLSX.utils.json_to_sheet(employees);
//     const wb = XLSX.utils.book_new();
//     XLSX.utils.book_append_sheet(wb, ws, "Balances");
//     saveAs(new Blob([XLSX.write(wb, { bookType: "xlsx", type: "array" })], { type: "application/octet-stream" }), "Leave_Balances.xlsx");
//   };

//   const filteredEmployees = employees.filter((emp) =>
//     Object.values(emp).some((val) =>
//       String(val).toLowerCase().includes(searchTerm.toLowerCase())
//     )
//   );

//   return (
//     <div className="p-2 bg-white rounded-lg shadow-sm">
//       <div className="flex flex-col md:flex-row justify-between items-center mb-4 gap-4">
//         <input
//           type="text"
//           placeholder="Search employee..."
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)}
//           className="w-full md:w-auto border border-[#0098f1] text-[16px] py-1 outline-[#0098f1] rounded px-4"
//         />
//         <button onClick={exportToExcel} className="bg-[#0098f1] text-sm text-white px-4 py-2 rounded w-full md:w-auto">
//           Export
//         </button>
//       </div>

//       <div className="overflow-x-auto scrollbar-thin scrollbar-thumb-[#0098f1]">
//         <table className="min-w-full text-nowrap">
//           <thead>
//             <tr className="bg-[#0098f1] text-white text-sm border border-[#0098f1]">
//               <th className="py-3 px-4 border-r border-white">Employee</th>
//               <th className="py-3 px-4 border-r border-white">Employee ID</th>
//               <th className="py-3 px-4 border-r border-white">Casual Leave</th>
//               <th className="py-3 px-4 border-r border-white">Earned Leave</th>
//               <th className="py-3 px-4 border-r border-white">Sick Leave</th>
//               <th className="py-3 px-4 border-r border-white">Comp Off</th>
//               <th className="py-3 px-4">Total Pending</th>
//             </tr>
//           </thead>
//           <tbody className="text-black text-sm">
//             {loading ? (
//               <tr><td colSpan={7} className="text-center py-4">Loading...</td></tr>
//             ) : filteredEmployees.length === 0 ? (
//               <tr><td colSpan={7} className="text-center py-4">No records found.</td></tr>
//             ) : (
//               filteredEmployees.map((emp, idx) => (
//                 <tr key={idx} className="border text-center bg-white border-[#0098f1]">
//                   <td className="py-2 px-4 border-r border-[#0098f1] flex items-center justify-center">
//                     <img
//                       src={`https://ui-avatars.com/api/?background=0098f1&color=fff&name=${encodeURIComponent(emp.employeeName || "User")}`}
//                       alt="Employee"
//                       className="w-8 h-8 rounded-full mr-2"
//                     />
//                     <span>{emp.employeeName}</span>
//                   </td>
//                   <td className="py-2 px-4 border-r border-[#0098f1]">{emp.employeeId || "—"}</td>
//                   <td className="py-2 px-4 border-r border-[#0098f1]">{emp.casual}</td>
//                   <td className="py-2 px-4 border-r border-[#0098f1]">{emp.earned}</td>
//                   <td className="py-2 px-4 border-r border-[#0098f1]">{emp.sick}</td>
//                   <td className="py-2 px-4 border-r border-[#0098f1]">{emp.compOff}</td>
//                   <td className="py-2 px-4 text-orange-600 font-medium">{emp.totalPending}</td>
//                 </tr>
//               ))
//             )}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default LeaveBalance;




import React, { useState, useEffect } from "react";
import * as XLSX from "xlsx";
import { saveAs } from "file-saver";
import { toast } from "react-toastify";
import { leavesAPI } from "../../../../services/api";

const LeaveBalance = () => {
  const [employees, setEmployees] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => { fetchBalances(); }, []);

  const fetchBalances = async () => {
    setLoading(true);
    try {
      const res = await leavesAPI.allBalances();
      setEmployees(Array.isArray(res.data) ? res.data : []);
    } catch (err) {
      toast.error("Failed to load balances");
    } finally {
      setLoading(false);
    }
  };

  const exportToExcel = () => {
    const rows = employees.map((e) => ({
      Employee: e.employeeName,
      EmployeeId: e.employeeId,
      "Casual Allocated": e.casualAllocated, "Casual Used": e.casualUsed,
      "Casual Pending": e.casualPending, "Casual Available": e.casual,
      "Sick Allocated": e.sickAllocated, "Sick Used": e.sickUsed,
      "Sick Pending": e.sickPending, "Sick Available": e.sick,
      "Earned Allocated": e.earnedAllocated, "Earned Used": e.earnedUsed,
      "Earned Pending": e.earnedPending, "Earned Available": e.earned,
      TotalAllocated: e.totalAllocated, TotalUsed: e.totalUsed,
      TotalPending: e.totalPending,
    }));
    const ws = XLSX.utils.json_to_sheet(rows);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Balances");
    saveAs(
      new Blob([XLSX.write(wb, { bookType: "xlsx", type: "array" })],
        { type: "application/octet-stream" }),
      "Leave_Balances.xlsx"
    );
  };

  const filteredEmployees = employees.filter((emp) =>
    Object.values(emp).some((val) =>
      String(val).toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  const GroupHeader = () => (
    <tr className="bg-[#0098f1] text-white text-sm">
      <th rowSpan={2} className="py-3 px-3 border-r border-white">Employee</th>
      <th rowSpan={2} className="py-3 px-3 border-r border-white">ID</th>
      <th colSpan={4} className="py-2 border-r border-white">Casual</th>
      <th colSpan={4} className="py-2 border-r border-white">Sick</th>
      <th colSpan={4} className="py-2 border-r border-white">Earned</th>
      <th rowSpan={2} className="py-3 px-3">Total Pending</th>
    </tr>
  );

  const SubHeader = () => (
    <tr className="bg-[#0098f1] text-white text-xs">
      {["Alloc", "Used", "Pend", "Avail"].map((h) => (
        <th key={`c-${h}`} className="py-2 px-2 border-r border-white">{h}</th>
      ))}
      {["Alloc", "Used", "Pend", "Avail"].map((h) => (
        <th key={`s-${h}`} className="py-2 px-2 border-r border-white">{h}</th>
      ))}
      {["Alloc", "Used", "Pend", "Avail"].map((h) => (
        <th key={`e-${h}`} className="py-2 px-2 border-r border-white">{h}</th>
      ))}
    </tr>
  );

  return (
    <div className="p-2 bg-white rounded-lg shadow-sm">
      <div className="flex flex-col md:flex-row justify-between items-center mb-4 gap-4">
        <input
          type="text"
          placeholder="Search employee..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full md:w-auto border border-[#0098f1] text-[16px] py-1 outline-[#0098f1] rounded px-4"
        />
        <button
          onClick={exportToExcel}
          className="bg-[#0098f1] text-sm text-white px-4 py-2 rounded w-full md:w-auto"
        >
          Export
        </button>
      </div>

      <div className="overflow-x-auto scrollbar-thin scrollbar-thumb-[#0098f1]">
        <table className="min-w-full text-nowrap">
          <thead>
            <GroupHeader />
            <SubHeader />
          </thead>
          <tbody className="text-black text-sm">
            {loading ? (
              <tr><td colSpan={16} className="text-center py-4">Loading...</td></tr>
            ) : filteredEmployees.length === 0 ? (
              <tr><td colSpan={16} className="text-center py-4">No records found.</td></tr>
            ) : (
              filteredEmployees.map((emp, idx) => (
                <tr key={idx} className="border text-center bg-white border-[#0098f1]">
                  <td className="py-2 px-3 border-r border-[#0098f1]">
                    <div className="flex items-center justify-center">
                      <img
                        src={`https://ui-avatars.com/api/?background=0098f1&color=fff&name=${encodeURIComponent(emp.employeeName || "User")}`}
                        alt=""
                        className="w-8 h-8 rounded-full mr-2"
                      />
                      <span>{emp.employeeName}</span>
                    </div>
                  </td>
                  <td className="py-2 px-3 border-r border-[#0098f1]">{emp.employeeId || "—"}</td>

                  <td className="py-2 px-2 border-r border-[#0098f1]">{emp.casualAllocated}</td>
                  <td className="py-2 px-2 border-r border-[#0098f1]">{emp.casualUsed}</td>
                  <td className="py-2 px-2 border-r border-[#0098f1]">{emp.casualPending}</td>
                  <td className="py-2 px-2 border-r border-[#0098f1] font-semibold text-green-700">{emp.casual}</td>

                  <td className="py-2 px-2 border-r border-[#0098f1]">{emp.sickAllocated}</td>
                  <td className="py-2 px-2 border-r border-[#0098f1]">{emp.sickUsed}</td>
                  <td className="py-2 px-2 border-r border-[#0098f1]">{emp.sickPending}</td>
                  <td className="py-2 px-2 border-r border-[#0098f1] font-semibold text-green-700">{emp.sick}</td>

                  <td className="py-2 px-2 border-r border-[#0098f1]">{emp.earnedAllocated}</td>
                  <td className="py-2 px-2 border-r border-[#0098f1]">{emp.earnedUsed}</td>
                  <td className="py-2 px-2 border-r border-[#0098f1]">{emp.earnedPending}</td>
                  <td className="py-2 px-2 border-r border-[#0098f1] font-semibold text-green-700">{emp.earned}</td>

                  <td className="py-2 px-3 text-orange-600 font-medium">{emp.totalPending}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default LeaveBalance;