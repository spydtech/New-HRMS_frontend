// import React, { useState } from "react";
// import { FaPlusCircle } from "react-icons/fa";
// import Select from "react-select";
// import { FiPlusCircle } from "react-icons/fi";
// import { IoMdCheckmarkCircleOutline } from "react-icons/io";
// const userdata = [
//   {
//     id: 1,
//     employerName: "seoling duja",
//     payperiod: "01 Jan, 2024 to 31 Jan, 2024",
//   },
//   {
//     id: 2,
//     employerName: "Lena Smith",
//     payperiod: "01 Feb, 2024 to 29 Feb, 2024",
//   },
//   {
//     id: 3,
//     employerName: "John Doe",
//     payperiod: "01 Mar, 2024 to 31 Mar, 2024",
//   },
//   {
//     id: 4,
//     employerName: "Emily Johnson",
//     payperiod: "01 Apr, 2024 to 30 Apr, 2024",
//   },
//   {
//     id: 5,
//     employerName: "Michael Brown",
//     payperiod: "01 May, 2024 to 31 May, 2024",
//   },
//   {
//     id: 6,
//     employerName: "Sarah Davis",
//     payperiod: "01 Jun, 2024 to 30 Jun, 2024",
//   },
//   {
//     id: 7,
//     employerName: "David Wilson",
//     payperiod: "01 Jul, 2024 to 31 Jul, 2024",
//   },
//   {
//     id: 8,
//     employerName: "Olivia Martinez",
//     payperiod: "01 Aug, 2024 to 31 Aug, 2024",
//   },
//   {
//     id: 9,
//     employerName: "James Taylor",
//     payperiod: "01 Sep, 2024 to 30 Sep, 2024",
//   },
//   {
//     id: 10,
//     employerName: "Sophia Anderson",
//     payperiod: "01 Oct, 2024 to 31 Oct, 2024",
//   },
// ];

// const initialData = [
//   {
//     employeeName: "John Doe",
//     runDate: "2023-07-01",
//     status: "Completed",
//     payPeriod: "June 2023",
//     gross: 5000,
//     incomeTax: 500,
//     surge: 50,
//     cess: 20,
//     netAmount: 4430,
//   },
//   {
//     employeeName: "Jane Smith",
//     runDate: "2023-07-01",
//     status: "Pending",
//     payPeriod: "June 2023",
//     gross: 5500,
//     incomeTax: 550,
//     surge: 55,
//     cess: 22,
//     netAmount: 4873,
//   },
//   // More data objects can be added here
// ];

// function Settlement() {
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [selectedEmployer, setSelectedEmployer] = useState(null);
//   const [selectedPayPeriod, setSelectedPayPeriod] = useState(null);
//   const [payPeriods, setPayPeriods] = useState([]);
//   const [tableData, setTableData] = useState(initialData);
//   const [showSuccessMessage, setShowSuccessMessage] = useState(false);

//   const handleOpenModal = () => setIsModalOpen(true);
//   const handleCloseModal = () => setIsModalOpen(false);

//   const handleEmployerChange = (selectedOption) => {
//     setSelectedEmployer(selectedOption);

//     const relatedPayPeriods = userdata
//       .filter((user) => user.employerName === selectedOption?.value)
//       .map((user) => ({ value: user.payperiod, label: user.payperiod }));
//     setPayPeriods(relatedPayPeriods);
//     setSelectedPayPeriod(null);
//   };

//   const handlePayPeriodChange = (selectedOption) => {
//     setSelectedPayPeriod(selectedOption);
//   };

//   const handleStart = () => {
//     if (selectedEmployer && selectedPayPeriod) {
//       const newEntry = {
//         employeeName: selectedEmployer.value,
//         runDate: new Date().toISOString().split("T")[0], // Current date as runDate
//         status: "Pending",
//         payPeriod: selectedPayPeriod.value,
//         gross: 0, // Default values
//         incomeTax: 0,
//         surge: 0,
//         cess: 0,
//         netAmount: 0,
//       };

//       // Add the new entry to the table data
//       setTableData([...tableData, newEntry]);
//       setShowSuccessMessage(true);
//     }
//     setTimeout(() => {
//       setShowSuccessMessage(false);
//     }, 3000);
//     handleCloseModal();
//   };

//   return (
//     <div className="p-4 mt-4 min-h-screen">
//       <div className="mb-4 lg:mb-0">
//         <span className="text-[#0098F1] text-sm lg:text-lg font-bold">
//           Payroll / Settlements
//         </span>
//       </div>
//       <div id="submain1" className="flex    justify-end items-center">
//         <div className="  lg:w-auto  flex rounded-lg bg-[#0098f1]">
//           <button
//             className="flex items-center  text-sm lg:text-lg bg-[#0098f1] text-white p-4 py-3 rounded-lg "
//             onClick={handleOpenModal}
//           >
//             <FiPlusCircle className="text-white text-xl mr-2" />
//             <span className="text-white bg-[#0098f1] font-medium text-sm lg:text-lg">
//               Add Settlement
//             </span>
//           </button>
//         </div>
//       </div>

//       <div
//         id="table"
//         className="mt-4 w-full overflow-x-auto scrollbar-thin scrollbar-track-white scrollbar-thumb-[#0098F1]"
//       >
//         <table className="min-w-full w-screen overflow-x-scroll text-nowrap ">
//           <thead>
//             <tr className="bg-[#0098F1] text-white border border-[#0098F1]">
//               <th className="py-3 px-4 border-r border-white text-sm font-medium text-nowrap">
//                 Employee Name
//               </th>
//               <th className="py-3 px-4 border-r border-white text-sm font-medium text-nowrap">
//                 Run Date
//               </th>
//               <th className="py-3 px-4 border-r border-white text-sm font-medium text-nowrap">
//                 Status
//               </th>
//               <th className="py-3 px-4 border-r border-white text-sm font-medium text-nowrap">
//                 Pay Period
//               </th>
//               <th className="py-3 px-4 border-r border-white text-sm font-medium text-nowrap">
//                 Gross
//               </th>
//               <th className="py-3 px-4 border-r border-white text-sm font-medium text-nowrap">
//                 Income Tax
//               </th>
//               <th className="py-3 px-4 border-r border-white text-sm font-medium text-nowrap">
//                 Surge
//               </th>
//               <th className="py-3 px-4 border-r border-white text-sm font-medium text-nowrap">
//                 Cess
//               </th>
//               <th className="py-3 px-4 text-sm font-medium text-nowrap">
//                 Net Amount
//               </th>
//             </tr>
//           </thead>
//           <tbody>
//             {tableData.map((item, index) => (
//               <tr
//                 key={index}
//                 className="text-center bg-white border border-[#0098F1]"
//               >
//                 <td className="py-2 px-4 border-r border-[#0098f1]">
//                   {item.employeeName}
//                 </td>
//                 <td className="py-2 px-4 border-r border-[#0098f1]">
//                   {item.runDate}
//                 </td>
//                 <td className="py-2 px-4 border-r border-[#0098f1]">
//                   {item.status}
//                 </td>
//                 <td className="py-2 px-4 border-r border-[#0098f1]">
//                   {item.payPeriod}
//                 </td>
//                 <td className="py-2 px-4 border-r border-[#0098f1]">
//                   {item.gross}
//                 </td>
//                 <td className="py-2 px-4 border-r border-[#0098f1]">
//                   {item.incomeTax}
//                 </td>
//                 <td className="py-2 px-4 border-r border-[#0098f1]">
//                   {item.surge}
//                 </td>
//                 <td className="py-2 px-4 border-r border-[#0098f1]">
//                   {item.cess}
//                 </td>
//                 <td className="py-2 px-4 ">
//                   {item.netAmount}
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>

//       {isModalOpen && (
//         <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
//           <div className="bg-white p-4 md:p-8 rounded-lg shadow-lg w-[90vw] md:w-[60vw]">
//             <div className="flex justify-between items-center mb-4">
//               <h2 className="text-2xl md:text-3xl text-[#0098f1]">
//                 Settlement
//               </h2>
//               <button
//                 className="font-bold cursor-pointer text-2xl md:text-3xl"
//                 onClick={handleCloseModal}
//               >
//                 X
//               </button>
//             </div>
//             <hr className="my-4" />
//             <div className="flex flex-col items-center mb-4">
//               <div className="flex items-center w-full space-x-2 md:space-x-4 mb-4">
//                 <label
//                   htmlFor="employer"
//                   className="block text-lg md:text-xl font-medium text-[#0098f1] whitespace-nowrap"
//                 >
//                   Employer Name
//                 </label>
//                 <Select
//                   id="employer"
//                   className="react-select-container flex-grow"
//                   classNamePrefix="react-select"
//                   options={userdata.map((user) => ({
//                     value: user.employerName,
//                     label: user.employerName,
//                   }))}
//                   value={selectedEmployer}
//                   onChange={handleEmployerChange}
//                   placeholder="Select an employer"
//                   isClearable
//                 />
//               </div>

//               {selectedEmployer && (
//                 <div className="flex items-center w-full space-x-2 md:space-x-4 mb-4">
//                   <label
//                     htmlFor="payperiod"
//                     className="block text-lg md:text-xl font-medium text-[#0098f1] whitespace-nowrap"
//                   >
//                     Pay Period
//                   </label>
//                   <Select
//                     id="payperiod"
//                     className="react-select-container flex-grow"
//                     classNamePrefix="react-select"
//                     options={payPeriods}
//                     value={selectedPayPeriod}
//                     onChange={handlePayPeriodChange}
//                     placeholder="Select a pay period"
//                     isClearable
//                   />
//                 </div>
//               )}
//             </div>
//             <div className="flex flex-col md:flex-row justify-end space-x-0 md:space-x-4">
//               <button
//                 className="bg-transparent border border-blue-500 text-blue-500 h-[40px] w-full md:w-[120px] rounded-lg mb-4 md:mb-0"
//                 onClick={handleCloseModal}
//               >
//                 Cancel
//               </button>
//               <button
//                 className="bg-[#0098f1] text-white h-[40px] w-full md:w-[120px] rounded-lg"
//                 onClick={handleStart}
//                 disabled={!selectedEmployer || !selectedPayPeriod}
//               >
//                 Save
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//       {showSuccessMessage && (
//         <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 z-50">
//           <div className="bg-sky-500 p-8 rounded-lg text-center text-white">
//             <h2 className="text-xl mb-4">
//               <IoMdCheckmarkCircleOutline className="inline-block text-6xl" />
//             </h2>
//             <span>Settlement Added Successfully!</span>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default Settlement;






import React, { useEffect, useState } from "react";
import Select from "react-select";
import { FiPlusCircle } from "react-icons/fi";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { toast } from "react-toastify";
import { payrollAPI, employeesAPI } from "../../../../services/api";

function Settlement() {
  const [employees, setEmployees] = useState([]);
  const [settlements, setSettlements] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [period, setPeriod] = useState({ start: "", end: "" });
  const [showSuccess, setShowSuccess] = useState(false);

  const load = async () => {
    try { const res = await payrollAPI.listSettlements(); setSettlements(Array.isArray(res.data) ? res.data : []); }
    catch { toast.error("Failed to load"); }
  };

  useEffect(() => {
    load();
    (async () => {
      try { const res = await employeesAPI.getAll(); setEmployees(Array.isArray(res.data) ? res.data : []); }
      catch (e) { console.error(e); }
    })();
  }, []);

  const handleStart = async () => {
    if (!selectedEmployee) return;
    try {
      await payrollAPI.createSettlement({
        userId: Number(selectedEmployee.value),
        payPeriodStart: period.start || null,
        payPeriodEnd: period.end || null,
        gross: 0, incomeTax: 0, surcharge: 0, cess: 0, netAmount: 0,
      });
      await load();
      setShowSuccess(true);
      setTimeout(() => setShowSuccess(false), 2000);
      setIsModalOpen(false);
      setSelectedEmployee(null);
      setPeriod({ start: "", end: "" });
    } catch (e) { toast.error(e?.response?.data?.detail || "Failed"); }
  };

  return (
    <div className="p-4 mt-4 min-h-screen">
      <div className="mb-4">
        <span className="text-[#0098F1] text-sm lg:text-lg font-bold">Payroll / Settlements</span>
      </div>

      <div className="flex justify-end">
        <button onClick={() => setIsModalOpen(true)} className="flex items-center gap-2 bg-[#0098f1] text-white p-3 rounded-lg">
          <FiPlusCircle className="text-xl" /><span>Add Settlement</span>
        </button>
      </div>

      <div className="mt-4 w-full overflow-x-auto">
        <table className="min-w-full text-nowrap">
          <thead>
            <tr className="bg-[#0098F1] text-white">
              {["Employee","Run Date","Status","Gross","Income Tax","Surcharge","Cess","Net Amount"].map(h =>
                <th key={h} className="py-3 px-4 border-r border-white text-sm">{h}</th>
              )}
            </tr>
          </thead>
          <tbody>
            {settlements.length === 0 && <tr><td colSpan={8} className="py-3 text-center text-gray-500">No settlements yet.</td></tr>}
            {settlements.map((s) => (
              <tr key={s.id} className="text-center bg-white border border-[#0098F1]">
                <td className="py-2 px-4 border-r border-[#0098f1]">{s.user?.name || `User #${s.user_id}`}</td>
                <td className="py-2 px-4 border-r border-[#0098f1]">{s.run_date}</td>
                <td className="py-2 px-4 border-r border-[#0098f1]">{s.status}</td>
                <td className="py-2 px-4 border-r border-[#0098f1]">{s.gross}</td>
                <td className="py-2 px-4 border-r border-[#0098f1]">{s.income_tax}</td>
                <td className="py-2 px-4 border-r border-[#0098f1]">{s.surcharge}</td>
                <td className="py-2 px-4 border-r border-[#0098f1]">{s.cess}</td>
                <td className="py-2 px-4">{s.net_amount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-8 rounded-lg shadow-lg w-[90vw] md:w-[60vw]">
            <h2 className="text-3xl text-[#0098f1] mb-4">Settlement</h2>
            <div className="mb-4">
              <label className="block text-xl text-[#0098f1] mb-2">Employee</label>
              <Select
                options={employees.map((e) => ({ value: e.id, label: e.name }))}
                value={selectedEmployee}
                onChange={setSelectedEmployee}
                isClearable
              />
            </div>
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-sm mb-1">Period Start</label>
                <input type="date" value={period.start} onChange={(e) => setPeriod((p) => ({ ...p, start: e.target.value }))} className="border rounded p-2 w-full" />
              </div>
              <div>
                <label className="block text-sm mb-1">Period End</label>
                <input type="date" value={period.end} onChange={(e) => setPeriod((p) => ({ ...p, end: e.target.value }))} className="border rounded p-2 w-full" />
              </div>
            </div>
            <div className="flex justify-end gap-4">
              <button onClick={() => setIsModalOpen(false)} className="border border-blue-500 text-blue-500 h-[40px] w-[120px] rounded-lg">Cancel</button>
              <button onClick={handleStart} disabled={!selectedEmployee} className="bg-[#0098f1] text-white h-[40px] w-[120px] rounded-lg">Save</button>
            </div>
          </div>
        </div>
      )}

      {showSuccess && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-sky-500 p-8 rounded-lg text-center text-white">
            <IoMdCheckmarkCircleOutline className="inline-block text-6xl" />
            <p className="mt-2">Settlement Added Successfully!</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Settlement;