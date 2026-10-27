// import { tr } from "date-fns/locale";
// import React, { useEffect, useState } from "react";

// const BatchDetails = ({ batch, onBack, batches }) => {
//   const [selectedBatchId, setSelectedBatchId] = useState(batch.id);
//   const [employees, setEmployees] = useState([]);
//   const [currentEmployees, setCurrentEmployees] = useState([]);
//   const [showModal, setShowModal] = useState(false);

//   const [name, setName] = useState("");
//   const [title, setTitle] = useState("");
//   const [workLocation, setWorkLocation] = useState("");
//   const [empStatus, setEmpStatus] = useState("");
//   const [batchName, setBatchName] = useState(batch.name);
//   const [errorMessage, setErrorMessage] = useState("");

//   useEffect(() => {
//     // Set the initial selected batch id and load employees
//     setSelectedBatchId(batch.id);
//     setBatchName(batch.name);
//     loadEmployees(batch.id);
//   }, [batch.id]);

//   const loadEmployees = (batchId) => {
//     const batchEmployees = employees[batchId] || [];
//     setCurrentEmployees(batchEmployees);
//   };

//   // Handle dropdown change
//   const handleBatchChange = (event) => {
//     const batchId = Number(event.target.value);
//     const newBatch = batches.find((b) => b.id === batchId);
//     if (newBatch) {
//       setSelectedBatchId(newBatch.id);
//       // You might want to update the `batch` state here if needed
//       setBatchName(newBatch.name);
//       loadEmployees(newBatch.id);
//     }
//   };

//   // Find the currently selected batch
//   const currentBatch = batches.find((b) => b.id === selectedBatchId) || batch;

//   // Handle adding a new employee
//   const handleAddEmployee = () => {
//     if (!name || !title || !workLocation || !empStatus || !batchName) {
//       setErrorMessage("All fields are required");
//       return;
//     }

//     const newEmployee = {
//       id: employees.length + 1,
//       name,
//       title,
//       workLocation,
//       status: empStatus,
//       batch: batchName,
//     };

//     const updatedEmployees = {
//       ...employees,
//       [selectedBatchId]: [...(employees[selectedBatchId] || []), newEmployee],
//     };

//     setEmployees(updatedEmployees);
//     setCurrentEmployees(updatedEmployees[selectedBatchId]);
//     setShowModal(false);
//     setName("");
//     setTitle("");
//     setWorkLocation("");
//     setEmpStatus("");
//     setBatchName(currentBatch.name);
//     setErrorMessage("");
//   };

//   const handleCancel = () => {
//     setShowModal(false);
//     setName("");
//     setTitle("");
//     setWorkLocation("");
//     setEmpStatus("");
//     setBatchName(currentBatch.name);
//     setErrorMessage("");
//   };

//   return (
//     <div className="my-4">
//       <div className="flex items-center justify-between border-b py-3 border-gray-400">
//         <h1 className="lg:text-2xl font-bold">{currentBatch.name} Batch</h1>
//         <button
//           onClick={onBack}
//           className=" bg-gray-300 lg:px-4 px-2 py-1 rounded max-md:text-xs"
//         >
//           Back
//         </button>
//       </div>
//       <div className="my-5 text-center">
//         <p className="text-gray-400 ">
//           Pay Days <span className="text-gray-900">Actual Days</span>
//         </p>
//         <p className="text-gray-400">
//           Include Weekly Offs <span className="text-gray-900">Yes</span>
//         </p>
//         <p className="text-gray-400">
//           Include Holidays <span className="text-gray-900">Yes</span>
//         </p>
//       </div>
//       <div className="flex items-center justify-between border-b py-3 border-gray-400 my-3">
//         <h1 className="font-bold lg:text-xl">Employees</h1>
//         <select
//           value={selectedBatchId}
//           onChange={handleBatchChange}
//           className=" outline-none px-2 border"
//         >
//           {/* <option value="">Select Batch</option> */}
//           {batches.map((b) => (
//             <option key={b.id} value={b.id} className="text-xs">
//               {b.name}
//             </option>
//           ))}
//         </select>
//       </div>
//       <div className="text-end my-5">
//         <button
//           className=" px-2 py-1 rounded-lg bg-[#0098f1] text-white max-md:text-xs"
//           onClick={() => setShowModal(true)}
//         >
//           Add Employees
//         </button>
//       </div>

//       {showModal && (
//         <div className="fixed inset-0 bg-orange-100 bg-opacity-50 flex items-center justify-center">
//           <div className="bg-white p-3 rounded-lg shadow-lg w-52 md:w-[600px] flex flex-col">
//             <h1 className="md:text-2xl font-bold mb-3 border-b pb-3">
//               Add Employee
//             </h1>
//             <form className="flex flex-col gap-2 md:ml-5 max-md:text-nowrap">
//               <div className="flex flex-col md:flex-row md:gap-3 gap-1">
//                 <label htmlFor="name">Employee Name :</label>
//                 <input
//                   id="name"
//                   type="text"
//                   className=" border border-gray-500 rounded-md outline-none p-1  text-sm"
//                   onChange={(e) => setName(e.target.value)}
//                   value={name}
//                 />
//               </div>
//               <div className="flex flex-col md:flex-row md:gap-3 gap-1">
//                 <label htmlFor="title">Title :</label>
//                 <input
//                   id="title"
//                   type="text"
//                   className=" border border-gray-500 rounded-md outline-none p-1 text-sm"
//                   onChange={(e) => setTitle(e.target.value)}
//                   value={title}
//                 />
//               </div>
//               <div className="flex flex-col md:flex-row md:gap-3 gap-1">
//                 <label htmlFor="work" className="">
//                   Work Location :
//                 </label>
//                 <input
//                   id="work"
//                   type="text"
//                   className=" border border-gray-500 rounded-md outline-none p-1  text-sm"
//                   onChange={(e) => setWorkLocation(e.target.value)}
//                   value={workLocation}
//                 />
//               </div>
//               <div className="flex flex-col md:flex-row md:gap-3 gap-1">
//                 <label htmlFor="emp" className="">
//                   Emp Status :
//                 </label>
//                 <input
//                   id="emp"
//                   type="text"
//                   className=" border border-gray-500 rounded-md outline-none p-1 text-sm"
//                   onChange={(e) => setEmpStatus(e.target.value)}
//                   value={empStatus}
//                 />
//               </div>
//               <div className="flex flex-col md:flex-row md:gap-3 gap-1">
//                 <label htmlFor="batch" className="">
//                   Batch :
//                 </label>
//                 <input
//                   id="batch"
//                   type="text"
//                   className=" border border-gray-500 rounded-md outline-none p-1 text-sm"
//                   onChange={(e) => setBatchName(e.target.value)}
//                   value={batchName}
//                 />
//               </div>
//               {errorMessage && (
//                 <p className="text-red-500 text-sm mt-2">{errorMessage}</p>
//               )}
//             </form>
//             <div className="flex justify-end gap-2 my-3 max-md:text-sm">
//               <button
//                 type="button"
//                 className="bg-red-500 text-white p-1 md:p-2 rounded-lg"
//                 onClick={handleCancel}
//               >
//                 Cancel
//               </button>
//               <button
//                 type="button"
//                 className="bg-green-500 text-white p-1 md:p-2 rounded-lg"
//                 onClick={handleAddEmployee}
//               >
//                 Save
//               </button>
//             </div>
//           </div>
//         </div>
//       )}

//       <div className=" mt-5 w-full overflow-x-auto scrollbar-thin scrollbar-track-white scrollbar-thumb-[#0098F1] ">
//         <table className="min-w-full text-nowrap max-md:text-sm">
//           <thead className="bg-[#0098f1] text-white">
//             <tr className="border border-[#0098F1]">
//               <th className="py-3 px-4 border-r border-white text-center text-sm font-medium text-nowrap">
//                 EMPLOYEE NAME
//               </th>
//               <th className="py-3 px-4 border-r border-white text-center text-sm font-medium text-nowrap">
//                 TITLE
//               </th>
//               <th className="py-3 px-4 border-r border-white text-center text-sm font-medium text-nowrap">
//                 WORK LOCATION
//               </th>
//               <th className="py-3 px-4 border-r border-white text-center text-sm font-medium text-nowrap">
//                 EMP STATUS
//               </th>
//               <th className="py-3 px-4  text-center text-sm font-medium text-nowrap">BATCH</th>
//             </tr>
//           </thead>
//           <tbody>
//             {currentEmployees.length === 0
//               ? <tr>
//                 <td className="py-2 px-4 md:text-center" colSpan="9">
//                   No Employees Found.
//                 </td>
//               </tr>
//               : currentEmployees.map((employee) => (
//                   <tr key={employee.id} className=" cursor-pointer bg-white text-center border border-[#0098F1]">
//                     <td className="py-3 px-4 border-r border-[#0098f1]">
//                       {employee.name}
//                     </td>
//                     <td className="py-3 px-4 border-r border-[#0098f1]">
//                       {employee.title}
//                     </td>
//                     <td className="py-3 px-4 border-r border-[#0098f1]">
//                       {employee.workLocation}
//                     </td>
//                     <td className="py-3 px-4 border-r border-[#0098f1]">
//                       {employee.status}
//                     </td>
//                     <td className="py-3 px-4 ">{employee.batch}</td>
//                   </tr>
//                 ))}
//           </tbody>
//         </table>
//       </div>
//       <p className="my-3 text-[#0098f1] font-bold">
//         Total Records : {currentEmployees.length}
//       </p>
//     </div>
//   );
// };

// export default BatchDetails;










import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { payrollAPI } from "../../../../services/api";

const BatchDetails = ({ batch, onBack, batches }) => {
  const [selectedBatchId, setSelectedBatchId] = useState(batch.id);
  const [members, setMembers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentBatch, setCurrentBatch] = useState(batch);

  const loadBatch = async (id) => {
    setLoading(true);
    try {
      const res = await payrollAPI.getBatch(id);
      setCurrentBatch(res.data);
      setMembers(res.data.members || []);
    } catch (err) {
      toast.error(err?.response?.data?.detail || "Failed to load batch");
    } finally { setLoading(false); }
  };

  useEffect(() => { loadBatch(batch.id); /* eslint-disable-next-line */ }, [batch.id]);

  const handleBatchChange = (e) => { const id = Number(e.target.value); setSelectedBatchId(id); loadBatch(id); };

  return (
    <div className="my-4">
      <div className="flex items-center justify-between border-b py-3 border-gray-400">
        <h1 className="lg:text-2xl font-bold">{currentBatch.name} Batch</h1>
        <button onClick={onBack} className="bg-gray-300 lg:px-4 px-2 py-1 rounded max-md:text-xs">Back</button>
      </div>

      <div className="flex items-center justify-between border-b py-3 border-gray-400 my-3">
        <h1 className="font-bold lg:text-xl">Employees ({members.length})</h1>
        <select value={selectedBatchId} onChange={handleBatchChange} className="outline-none px-2 border">
          {batches.map((b) => <option key={b.id} value={b.id}>{b.name}</option>)}
        </select>
      </div>

      <div className="mt-5 w-full overflow-x-auto scrollbar-thin scrollbar-track-white scrollbar-thumb-[#0098F1]">
        <table className="min-w-full text-nowrap max-md:text-sm">
          <thead className="bg-[#0098f1] text-white">
            <tr className="border border-[#0098F1]">
              <th className="py-3 px-4 border-r border-white">EMPLOYEE NAME</th>
              <th className="py-3 px-4 border-r border-white">EMAIL</th>
              <th className="py-3 px-4 border-r border-white">BASIC (₹)</th>
              <th className="py-3 px-4 border-r border-white">HRA (₹)</th>
              <th className="py-3 px-4 border-r border-white">ALLOWANCES (₹)</th>
              <th className="py-3 px-4">GROSS (₹)</th>
            </tr>
          </thead>
          <tbody>
            {loading && <tr><td colSpan={6} className="py-3 text-center text-gray-500">Loading...</td></tr>}
            {!loading && members.length === 0 && <tr><td colSpan={6} className="py-3 text-center text-gray-500">No employees in this batch.</td></tr>}
            {!loading && members.map((m) => {
              const gross = Number(m.monthly_basic || 0) + Number(m.monthly_hra || 0) + Number(m.monthly_allowances || 0);
              return (
                <tr key={m.id} className="bg-white text-center border border-[#0098F1]">
                  <td className="py-3 px-4 border-r border-[#0098f1]">{m.name}</td>
                  <td className="py-3 px-4 border-r border-[#0098f1]">{m.email}</td>
                  <td className="py-3 px-4 border-r border-[#0098f1]">{Number(m.monthly_basic || 0).toLocaleString()}</td>
                  <td className="py-3 px-4 border-r border-[#0098f1]">{Number(m.monthly_hra || 0).toLocaleString()}</td>
                  <td className="py-3 px-4 border-r border-[#0098f1]">{Number(m.monthly_allowances || 0).toLocaleString()}</td>
                  <td className="py-3 px-4">{gross.toLocaleString()}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <p className="my-3 text-[#0098f1] font-bold">Total Records : {members.length}</p>
    </div>
  );
};

export default BatchDetails;