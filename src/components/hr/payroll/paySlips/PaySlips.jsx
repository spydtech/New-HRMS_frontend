// import React, { useState } from "react";

// const employeeData = [
//   {
//     year: "2023-2024",
//     status: "active",
//     employees: [
//       {
//         id: 1,
//         name: "Anna White",
//         details: [
//           {
//             period: "2023-04",
//             gross: 1000,
//             basic: 500,
//             allowances: 200,
//             deductions: 50,
//             incomeTax: 100,
//             surcharge: 20,
//             cess: 10,
//             netAmount: 820,
//           },
//         ],
//       },
//       {
//         id: 2,
//         name: "David Brown",
//         details: [
//           {
//             period: "2023-04",
//             gross: 1200,
//             basic: 500,
//             allowances: 200,
//             deductions: 50,
//             incomeTax: 100,
//             surcharge: 20,
//             cess: 10,
//             netAmount: 900,
//           },
//         ],
//       },
//     ],
//   },
//   {
//     year: "2023-2024",
//     status: "resigned",
//     employees: [
//       {
//         id: 3,
//         name: "White",
//         details: [
//           {
//             period: "2023-04",
//             gross: 1000,
//             basic: 500,
//             allowances: 200,
//             deductions: 50,
//             incomeTax: 100,
//             surcharge: 20,
//             cess: 10,
//             netAmount: 820,
//           },
//         ],
//       },
//       {
//         id: 4,
//         name: "Brown",
//         details: [
//           {
//             period: "2023-04",
//             gross: 1000,
//             basic: 500,
//             allowances: 200,
//             deductions: 50,
//             incomeTax: 100,
//             surcharge: 20,
//             cess: 10,
//             netAmount: 820,
//           },
//         ],
//       },
//     ],
//   },
//   {
//     year: "2023-2024",
//     status: "terminated",
//     employees: [
//       {
//         id: 5,
//         name: "Anna",
//         details: [
//           {
//             period: "2023-04",
//             gross: 1000,
//             basic: 500,
//             allowances: 200,
//             deductions: 50,
//             incomeTax: 100,
//             surcharge: 20,
//             cess: 10,
//             netAmount: 820,
//           },
//         ],
//       },
//       {
//         id: 6,
//         name: "David",
//         details: [
//           {
//             period: "2023-04",
//             gross: 1000,
//             basic: 500,
//             allowances: 200,
//             deductions: 50,
//             incomeTax: 100,
//             surcharge: 20,
//             cess: 10,
//             netAmount: 820,
//           },
//         ],
//       },
//     ],
//   },
//   {
//     year: "2024-2025",
//     status: "active",
//     employees: [
//       {
//         id: 7,
//         name: "Johnson Doe",
//         details: [
//           {
//             period: "2024-05",
//             gross: 2000,
//             basic: 800,
//             allowances: 200,
//             deductions: 50,
//             incomeTax: 100,
//             surcharge: 20,
//             cess: 10,
//             netAmount: 880,
//           },
//         ],
//       },
//       {
//         id: 8,
//         name: "Jane Davis",
//         details: [
//           {
//             period: "2024-05",
//             gross: 2000,
//             basic: 800,
//             allowances: 200,
//             deductions: 50,
//             incomeTax: 100,
//             surcharge: 20,
//             cess: 10,
//             netAmount: 880,
//           },
//         ],
//       },
//     ],
//   },
//   {
//     year: "2024-2025",
//     status: "resigned",
//     employees: [
//       {
//         id: 9,
//         name: "Mike",
//         details: [
//           {
//             period: "2024-05",
//             gross: 2000,
//             basic: 800,
//             allowances: 200,
//             deductions: 50,
//             incomeTax: 100,
//             surcharge: 20,
//             cess: 10,
//             netAmount: 880,
//           },
//         ],
//       },
//       {
//         id: 10,
//         name: "Davis",
//         details: [
//           {
//             period: "2024-05",
//             gross: 2000,
//             basic: 800,
//             allowances: 200,
//             deductions: 50,
//             incomeTax: 100,
//             surcharge: 20,
//             cess: 10,
//             netAmount: 880,
//           },
//         ],
//       },
//     ],
//   },
//   {
//     year: "2024-2025",
//     status: "terminated",
//     employees: [
//       {
//         id: 11,
//         name: "Johnson",
//         details: [
//           {
//             period: "2024-05",
//             gross: 2000,
//             basic: 800,
//             allowances: 200,
//             deductions: 50,
//             incomeTax: 100,
//             surcharge: 20,
//             cess: 10,
//             netAmount: 880,
//           },
//         ],
//       },
//       {
//         id: 12,
//         name: "Emily",
//         details: [
//           {
//             period: "2024-05",
//             gross: 2000,
//             basic: 800,
//             allowances: 200,
//             deductions: 50,
//             incomeTax: 100,
//             surcharge: 20,
//             cess: 10,
//             netAmount: 880,
//           },
//         ],
//       },
//     ],
//   },
// ];

// const PaySlips = () => {
//   const [selectedYear, setSelectedYear] = useState("");
//   const [selectedStatus, setSelectedStatus] = useState("");
//   const [employees, setEmployees] = useState([]);
//   const [selectedEmployee, setSelectedEmployee] = useState(null);

//   const handleYearChange = (e) => {
//     setSelectedYear(e.target.value);
//     filterEmployees(e.target.value, selectedStatus);
//   };

//   const handleStatusChange = (e) => {
//     setSelectedStatus(e.target.value);
//     filterEmployees(selectedYear, e.target.value);
//   };

//   const filterEmployees = (year, status) => {
//     const filteredData = employeeData.find(
//       (data) => data.year === year && data.status === status
//     );
//     setEmployees(filteredData ? filteredData.employees : []);
//     setSelectedEmployee(null); // Reset selected employee when filters change
//   };

//   const handleEmployeeChange = (e) => {
//     const employee = employees.find(
//       (emp) => emp.id === parseInt(e.target.value)
//     );
//     setSelectedEmployee(employee);
//   };

//   return (
//     <div className="p-4 mt-4 min-h-screen">
//       <p className="text-[#0098F1] lg:text-lg text-sm font-bold mb-4">
//         <span>Payroll</span> / <span>Payslips</span>
//       </p>
//       <div className="md:text-center md:my-8 max-md:mr-2">
//         <div className="mb-4">
//           <label className="text-gray-700">Select Financial Year : </label>
//           <select
//             className="border py-2 border-gray-300 bg-white rounded-md shadow-sm outline-none md:w-80 w-full"
//             onChange={handleYearChange}
//           >
//             <option value="">Select Year</option>
//             <option value="2023-2024">2023-2024</option>
//             <option value="2024-2025">2024-2025</option>
//           </select>
//         </div>

//         <div className="mb-4 md:pl-6">
//           <label className=" text-gray-700">Employee Status : </label>
//           <select
//             className="border py-2 border-gray-300 bg-white rounded-md shadow-sm outline-none md:w-80 w-full"
//             onChange={handleStatusChange}
//           >
//             <option value="">Select Status</option>
//             <option value="active">Active</option>
//             <option value="resigned">Resigned</option>
//             <option value="terminated">Terminated</option>
//           </select>
//         </div>

//         <div className="mb-4 md:pl-6">
//           <label className=" text-gray-700">Select Employee : </label>
//           <select
//             className="border py-2 border-gray-300 bg-white rounded-md shadow-sm outline-none md:w-80 w-full"
//             onChange={handleEmployeeChange}
//           >
//             <option value="">Select Employee</option>
//             {employees.map((employee) => (
//               <option key={employee.id} value={employee.id}>
//                 {employee.name}
//               </option>
//             ))}
//           </select>
//         </div>
//       </div>

//       <div className="mt-4 w-full overflow-x-auto scrollbar-thin scrollbar-track-white scrollbar-thumb-[#0098F1] ">
//         <table className="min-w-full w-screen overflow-x-scroll text-nowrap">
//           <thead className="bg-[#0098F1] text-white">
//             <tr className="border border-[#0098F1]">
//               <th className="py-3 px-4 border-r border-white text-sm font-medium text-nowrap">PERIOD</th>
//               <th className="py-3 px-4 border-r border-white text-sm font-medium text-nowrap">GROSS (₹)</th>
//               <th className="py-3 px-4 border-r border-white text-sm font-medium text-nowrap">BASIC (₹)</th>
//               <th className="py-3 px-4 border-r border-white text-sm font-medium text-nowrap">ALLOWANCES (₹)</th>
//               <th className="py-3 px-4 border-r border-white text-sm font-medium text-nowrap">DEDUCTIONS (₹)</th>
//               <th className="py-3 px-4 border-r border-white text-sm font-medium text-nowrap">INCOME TAX (₹)</th>
//               <th className="py-3 px-4 border-r border-white text-sm font-medium text-nowrap">SURCHARGE (₹)</th>
//               <th className="py-3 px-4 border-r border-white text-sm font-medium text-nowrap">CESS (₹)</th>
//               <th className="py-3 px-4  text-sm font-medium text-nowrap">NET AMOUNT (₹)</th>
//             </tr>
//           </thead>
//           <tbody>
//             {selectedEmployee ? (
//               selectedEmployee.details.map((detail, index) => (
//                 <tr key={index} className="bg-white text-center border border-[#0098F1]">
//                   <td className="py-2 px-4 border-r border-[#0098f1]">
//                     {detail.period}
//                   </td>
//                   <td className="py-2 px-4 border-r border-[#0098f1]">
//                     {detail.gross}
//                   </td>
//                   <td className="py-2 px-4 border-r border-[#0098f1]">
//                     {detail.basic}
//                   </td>
//                   <td className="py-2 px-4 border-r border-[#0098f1]">
//                     {detail.allowances}
//                   </td>
//                   <td className="py-2 px-4 border-r border-[#0098f1]">
//                     {detail.deductions}
//                   </td>
//                   <td className="py-2 px-4 border-r border-[#0098f1]">
//                     {detail.incomeTax}
//                   </td>
//                   <td className="py-2 px-4 border-r border-[#0098f1]">
//                     {detail.surcharge}
//                   </td>
//                   <td className="py-2 px-4 border-r border-[#0098f1]">
//                     {detail.cess}
//                   </td>
//                   <td className="py-2 px-4 ">{detail.netAmount}</td>
//                 </tr>
//               ))
//             ) : (
//               <tr>
//                 <td className="py-2 px-4 text-center" colSpan="9">
//                   No matching records found.
//                 </td>
//               </tr>
//             )}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default PaySlips;





import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { payrollAPI, employeesAPI } from "../../../../services/api";

const currentYear = new Date().getFullYear();

const PaySlips = () => {
  const [employees, setEmployees] = useState([]);
  const [selectedEmployeeId, setSelectedEmployeeId] = useState("");
  const [payslips, setPayslips] = useState([]);
  const [year, setYear] = useState(currentYear);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    (async () => {
      try { const res = await employeesAPI.getAll(); setEmployees(Array.isArray(res.data) ? res.data : []); }
      catch (e) { console.error(e); }
    })();
  }, []);

  useEffect(() => {
    (async () => {
      setLoading(true);
      try {
        const params = { year };
        if (selectedEmployeeId) params.user_id = selectedEmployeeId;
        const res = await payrollAPI.listPayslips(params);
        setPayslips(Array.isArray(res.data) ? res.data : []);
      } catch (err) { toast.error("Failed to load payslips"); }
      finally { setLoading(false); }
    })();
  }, [selectedEmployeeId, year]);

  return (
    <div className="p-4 mt-4 min-h-screen">
      <p className="text-[#0098F1] lg:text-lg text-sm font-bold mb-4"><span>Payroll</span> / <span>Payslips</span></p>
      <div className="md:text-center md:my-8 max-md:mr-2">
        <div className="mb-4">
          <label className="text-gray-700">Financial Year : </label>
          <select value={year} onChange={(e) => setYear(Number(e.target.value))}
            className="border py-2 border-gray-300 bg-white rounded-md shadow-sm outline-none md:w-80 w-full">
            {[currentYear-2, currentYear-1, currentYear].map(y => <option key={y} value={y}>{y}</option>)}
          </select>
        </div>
        <div className="mb-4 md:pl-6">
          <label className="text-gray-700">Employee : </label>
          <select value={selectedEmployeeId} onChange={(e) => setSelectedEmployeeId(e.target.value)}
            className="border py-2 border-gray-300 bg-white rounded-md shadow-sm outline-none md:w-80 w-full">
            <option value="">All Employees</option>
            {employees.map((e) => <option key={e.id} value={e.id}>{e.name}</option>)}
          </select>
        </div>
      </div>

      <div className="mt-4 w-full overflow-x-auto scrollbar-thin">
        <table className="min-w-full w-screen text-nowrap">
          <thead className="bg-[#0098F1] text-white">
            <tr className="border border-[#0098F1]">
              {["EMPLOYEE","PERIOD","GROSS (₹)","BASIC (₹)","ALLOWANCES (₹)","DEDUCTIONS (₹)","INCOME TAX (₹)","CESS (₹)","NET (₹)"].map(h =>
                <th key={h} className="py-3 px-4 border-r border-white">{h}</th>
              )}
            </tr>
          </thead>
          <tbody>
            {loading && <tr><td colSpan={9} className="py-3 text-center text-gray-500">Loading...</td></tr>}
            {!loading && payslips.length === 0 && <tr><td colSpan={9} className="py-3 text-center text-gray-500">No payslips found.</td></tr>}
            {!loading && payslips.map((p) => (
              <tr key={p.id} className="bg-white text-center border border-[#0098F1]">
                <td className="py-2 px-4 border-r border-[#0098f1]">{p.user?.name || `User #${p.user_id}`}</td>
                <td className="py-2 px-4 border-r border-[#0098f1]">
                  {new Date(p.created_at).toLocaleDateString("en-GB", { month: "short", year: "numeric" })}
                </td>
                <td className="py-2 px-4 border-r border-[#0098f1]">{Number(p.gross).toLocaleString()}</td>
                <td className="py-2 px-4 border-r border-[#0098f1]">{Number(p.basic).toLocaleString()}</td>
                <td className="py-2 px-4 border-r border-[#0098f1]">{Number(p.allowances).toLocaleString()}</td>
                <td className="py-2 px-4 border-r border-[#0098f1]">{Number(p.total_deductions).toLocaleString()}</td>
                <td className="py-2 px-4 border-r border-[#0098f1]">{Number(p.income_tax).toLocaleString()}</td>
                <td className="py-2 px-4 border-r border-[#0098f1]">{Number(p.cess).toLocaleString()}</td>
                <td className="py-2 px-4">{Number(p.net_amount).toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PaySlips;