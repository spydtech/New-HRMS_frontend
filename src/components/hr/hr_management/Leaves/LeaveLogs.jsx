// import React, { useState, useEffect } from "react";
// import * as XLSX from "xlsx";
// import { saveAs } from "file-saver";
// import { toast } from "react-toastify";
// import dayjs from "dayjs";
// import { leavesAPI } from "../../../../services/api"; 

// const LeaveLogs = ({ leaveType }) => {
//   const [leaves, setLeaves] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [searchTerm, setSearchTerm] = useState("");

//   useEffect(() => {
//     fetchLeaves();
//   }, [leaveType]);

//   const fetchLeaves = async () => {
//     setLoading(true);
//     try {
//       const res = await leavesAPI.allLeaves({});
//       const allLeaves = Array.isArray(res.data) ? res.data : [];
      
//       // Filter based on the active tab (casual, sick, earned)
//       const filtered = allLeaves.filter((l) => l.leaveType === leaveType);
//       setLeaves(filtered);
//     } catch (err) {
//       toast.error("Failed to load leave requests");
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleStatusChange = async (id, newStatus) => {
//     try {
//       if (newStatus === "approved") {
//         await leavesAPI.approve(id, { comment: "Approved by HR" });
//       } else if (newStatus === "rejected") {
//         await leavesAPI.reject(id, { comment: "Rejected by HR" });
//       }
//       toast.success(`Leave ${newStatus} successfully`);
//       fetchLeaves();
//     } catch (err) {
//       toast.error(err?.response?.data?.detail || "Failed to update status");
//     }
//   };

//   const exportToExcel = () => {
//     const rows = leaves.map((l) => ({
//       Employee: l.employeeName,
//       Type: l.leaveType,
//       Start: dayjs(l.fromDate).format("DD MMM YYYY"),
//       End: dayjs(l.toDate).format("DD MMM YYYY"),
//       Days: l.totalDays,
//       HalfDay: l.halfDay || "Full Day",
//       Status: l.status,
//       Reason: l.reason,
//     }));
//     const ws = XLSX.utils.json_to_sheet(rows);
//     const wb = XLSX.utils.book_new();
//     XLSX.utils.book_append_sheet(wb, ws, "Leaves");
//     saveAs(new Blob([XLSX.write(wb, { bookType: "xlsx", type: "array" })], { type: "application/octet-stream" }), `${leaveType}_leaves.xlsx`);
//   };

//   const filteredEmployees = leaves.filter((l) =>
//     Object.values(l).some((val) =>
//       String(val).toLowerCase().includes(searchTerm.toLowerCase())
//     )
//   );

//   return (
//     <div className="p-2 bg-white rounded-lg shadow-sm">
//       <div className="flex flex-col lg:flex-row justify-between items-center mb-4 gap-4">
//         <input
//           type="text"
//           placeholder="Search employee..."
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)}
//           className="border w-full lg:w-auto border-[#0098f1] text-[16px] py-1 outline-[#0098f1] rounded px-4"
//         />
//         <button onClick={exportToExcel} className="bg-[#0098f1] text-sm text-white px-4 py-2 rounded w-full lg:w-auto">
//           Export Excel
//         </button>
//       </div>

//       <div className="overflow-x-auto scrollbar-thin scrollbar-thumb-[#0098f1]">
//         <table className="min-w-full text-nowrap">
//           <thead>
//             <tr className="bg-[#0098f1] text-white capitalize text-sm border border-[#0098f1]">
//               <th className="py-3 px-4 border-r border-white">Employee</th>
//               <th className="py-3 px-4 border-r border-white">Start Date</th>
//               <th className="py-3 px-4 border-r border-white">End Date</th>
//               <th className="py-3 px-4 border-r border-white">Days</th>
//               <th className="py-3 px-4 border-r border-white">Full/Half</th>
//               <th className="py-3 px-4 border-r border-white">Reason</th>
//               <th className="py-3 px-4 border-r border-white">Status</th>
//               <th className="py-3 px-4">Action</th>
//             </tr>
//           </thead>
//           <tbody className="text-black text-sm">
//             {loading ? (
//               <tr><td colSpan={8} className="text-center py-4">Loading...</td></tr>
//             ) : filteredEmployees.length === 0 ? (
//               <tr><td colSpan={8} className="text-center py-4">No records found.</td></tr>
//             ) : (
//               filteredEmployees.map((leave) => (
//                 <tr key={leave.id} className="border text-center bg-white border-[#0098f1]">
//                   <td className="py-2 px-4 border-r border-[#0098f1]">
//                     <div className="flex items-center justify-center space-x-2">
//                       <img
//                         src={`https://ui-avatars.com/api/?background=0098f1&color=fff&name=${encodeURIComponent(leave.employeeName || "User")}`}
//                         alt="Avatar"
//                         className="w-8 h-8 rounded-full"
//                       />
//                       <span>{leave.employeeName}</span>
//                     </div>
//                   </td>
//                   <td className="py-2 px-4 border-r border-[#0098f1]">{dayjs(leave.fromDate).format("DD MMM YYYY")}</td>
//                   <td className="py-2 px-4 border-r border-[#0098f1]">{dayjs(leave.toDate).format("DD MMM YYYY")}</td>
//                   <td className="py-2 px-4 border-r border-[#0098f1]">{leave.totalDays}</td>
//                   <td className="py-2 px-4 border-r border-[#0098f1]">{leave.halfDay || "Full Day"}</td>
//                   <td className="py-2 px-4 border-r border-[#0098f1]">{leave.reason || "—"}</td>
//                   <td className="py-2 px-4 border-r border-[#0098f1]">
//                     <span className={`px-2 py-1 rounded text-white capitalize ${
//                       leave.status === "approved" ? "bg-green-500" :
//                       leave.status === "rejected" ? "bg-red-500" :
//                       leave.status === "cancelled" ? "bg-gray-400" : "bg-yellow-500"
//                     }`}>
//                       {leave.status}
//                     </span>
//                   </td>
//                   <td className="py-2 px-4">
//                     {leave.status === "pending" ? (
//                       <select
//                         onChange={(e) => handleStatusChange(leave.id, e.target.value)}
//                         defaultValue="pending"
//                         className="border border-[#0098f1] rounded px-2 py-1 bg-yellow-500 text-white outline-none cursor-pointer"
//                       >
//                         <option value="pending" disabled>Pending</option>
//                         <option value="approved">Approve</option>
//                         <option value="rejected">Reject</option>
//                       </select>
//                     ) : (
//                       <span className="text-gray-500 text-xs">Processed</span>
//                     )}
//                   </td>
//                 </tr>
//               ))
//             )}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default LeaveLogs;




import React, { useState, useEffect } from "react";
import * as XLSX from "xlsx";
import { saveAs } from "file-saver";
import { toast } from "react-toastify";
import dayjs from "dayjs";
import { leavesAPI } from "../../../../services/api";

const LeaveLogs = ({ leaveType }) => {
  const [leaves, setLeaves] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => { fetchLeaves(); }, [leaveType]);

  const fetchLeaves = async () => {
    setLoading(true);
    try {
      const res = await leavesAPI.allLeaves({});
      const allLeaves = Array.isArray(res.data) ? res.data : [];
      const filtered = allLeaves.filter((l) => l.leaveType === leaveType);
      setLeaves(filtered);
    } catch (err) {
      toast.error("Failed to load leave requests");
    } finally {
      setLoading(false);
    }
  };

  const handleStatusChange = async (id, newStatus) => {
    try {
      if (newStatus === "approved") {
        await leavesAPI.approve(id, { comment: "Approved by HR" });
      } else if (newStatus === "rejected") {
        await leavesAPI.reject(id, { comment: "Rejected by HR" });
      }
      toast.success(`Leave ${newStatus} successfully`);
      fetchLeaves();
    } catch (err) {
      toast.error(err?.response?.data?.detail || "Failed to update status");
    }
  };

  const exportToExcel = () => {
    const rows = leaves.map((l) => ({
      Employee: l.employeeName,
      Type: l.leaveType,
      Start: dayjs(l.fromDate).format("DD MMM YYYY"),
      End: dayjs(l.toDate).format("DD MMM YYYY"),
      Days: l.totalDays,
      HalfDay: l.halfDay || "Full Day",
      Status: l.status,
      Reason: l.reason,
    }));
    const ws = XLSX.utils.json_to_sheet(rows);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Leaves");
    saveAs(new Blob([XLSX.write(wb, { bookType: "xlsx", type: "array" })],
      { type: "application/octet-stream" }), `${leaveType}_leaves.xlsx`);
  };

  const filteredEmployees = leaves.filter((l) =>
    Object.values(l).some((val) =>
      String(val).toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  return (
    <div className="p-2 bg-white rounded-lg shadow-sm">
      <div className="flex flex-col lg:flex-row justify-between items-center mb-4 gap-4">
        <input
          type="text"
          placeholder="Search employee..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="border w-full lg:w-auto border-[#0098f1] text-[16px] py-1 outline-[#0098f1] rounded px-4"
        />
        <button
          onClick={exportToExcel}
          className="bg-[#0098f1] text-sm text-white px-4 py-2 rounded w-full lg:w-auto"
        >
          Export Excel
        </button>
      </div>

      <div className="overflow-x-auto scrollbar-thin scrollbar-thumb-[#0098f1]">
        <table className="min-w-full text-nowrap">
          <thead>
            <tr className="bg-[#0098f1] text-white capitalize text-sm border border-[#0098f1]">
              <th className="py-3 px-4 border-r border-white">Employee</th>
              <th className="py-3 px-4 border-r border-white">Start Date</th>
              <th className="py-3 px-4 border-r border-white">End Date</th>
              <th className="py-3 px-4 border-r border-white">Days</th>
              <th className="py-3 px-4 border-r border-white">Full/Half</th>
              <th className="py-3 px-4 border-r border-white">Reason</th>
              <th className="py-3 px-4 border-r border-white">Status</th>
              <th className="py-3 px-4">Action</th>
            </tr>
          </thead>
          <tbody className="text-black text-sm">
            {loading ? (
              <tr><td colSpan={8} className="text-center py-4">Loading...</td></tr>
            ) : filteredEmployees.length === 0 ? (
              <tr><td colSpan={8} className="text-center py-4">No records found.</td></tr>
            ) : (
              filteredEmployees.map((leave) => (
                <tr key={leave.id} className="border text-center bg-white border-[#0098f1]">
                  <td className="py-2 px-4 border-r border-[#0098f1]">
                    <div className="flex items-center justify-center space-x-2">
                      <img
                        src={`https://ui-avatars.com/api/?background=0098f1&color=fff&name=${encodeURIComponent(leave.employeeName || "User")}`}
                        alt="Avatar"
                        className="w-8 h-8 rounded-full"
                      />
                      <span>{leave.employeeName}</span>
                    </div>
                  </td>
                  <td className="py-2 px-4 border-r border-[#0098f1]">{dayjs(leave.fromDate).format("DD MMM YYYY")}</td>
                  <td className="py-2 px-4 border-r border-[#0098f1]">{dayjs(leave.toDate).format("DD MMM YYYY")}</td>
                  <td className="py-2 px-4 border-r border-[#0098f1]">{leave.totalDays}</td>
                  <td className="py-2 px-4 border-r border-[#0098f1]">{leave.halfDay || "Full Day"}</td>
                  <td className="py-2 px-4 border-r border-[#0098f1]">{leave.reason || "—"}</td>
                  <td className="py-2 px-4 border-r border-[#0098f1]">
                    <span className={`px-2 py-1 rounded text-white capitalize ${
                      leave.status === "approved" ? "bg-green-500" :
                      leave.status === "rejected" ? "bg-red-500" :
                      leave.status === "cancelled" ? "bg-gray-400" : "bg-yellow-500"
                    }`}>
                      {leave.status}
                    </span>
                  </td>
                  <td className="py-2 px-4">
                    {leave.status === "pending" ? (
                      <select
                        onChange={(e) => handleStatusChange(leave.id, e.target.value)}
                        defaultValue="pending"
                        className="border border-[#0098f1] rounded px-2 py-1 bg-yellow-500 text-white outline-none cursor-pointer"
                      >
                        <option value="pending" disabled>Pending</option>
                        <option value="approved">Approve</option>
                        <option value="rejected">Reject</option>
                      </select>
                    ) : (
                      <span className="text-gray-500 text-xs">Processed</span>
                    )}
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default LeaveLogs;