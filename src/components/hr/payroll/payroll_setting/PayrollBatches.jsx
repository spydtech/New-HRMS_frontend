// import React, { useEffect, useState } from "react";
// import { AiFillPlusCircle } from "react-icons/ai";
// import { IoMdInformationCircleOutline } from "react-icons/io";
// import { BsCheck2Circle } from "react-icons/bs";
// import { IoMdCheckmarkCircleOutline } from "react-icons/io";

// const PayrollBatches = ({ onBatchClick, onBatchesUpdate }) => {
//   const [showModal, setShowModal] = useState(false);
//   const [batchName, setBatchName] = useState("");
//   const [errorMessage, setErrorMessage] = useState("");
//   const [showSuccess, setShowSuccess] = useState(false);
//   const [batches, setBatches] = useState([]);

//   useEffect(() => {
//     onBatchesUpdate(batches);
//   }, [batches]); // call onBatchesUpdate when batches state changes

//   const handleSave = () => {
//     if (batchName.length === 0) {
//       setErrorMessage("Batch Name is requiblue!!");
//       return;
//     }

//     // Get the current date and time
//     const now = new Date();
//     const formattedDate = now.toLocaleDateString("en-US", {
//       month: "short",
//       day: "2-digit",
//       year: "numeric",
//     });
//     const formattedTime = now.toLocaleTimeString("en-US", {
//       hour: "2-digit",
//       minute: "2-digit",
//       hour12: true,
//     });

//     // Add the new batch to the batches array
//     const newBatch = {
//       id: batches.length + 1,
//       name: batchName,
//       employees: Math.floor(Math.random() * 100), // Random number for demo purposes
//       lastPayrollRun: `${formattedDate} at ${formattedTime}`,
//       createdBy: "Sathish Chiluveru",
//       status: "Active",
//     };

//     setBatches([...batches, newBatch]);
//     setShowModal(false);
//     setBatchName("");
//     setErrorMessage("");
//     setShowSuccess(true);
//     setTimeout(() => {
//       setShowSuccess(false);
//     },2000);
//   };

//   const handleCancel = () => {
//     setShowModal(false);
//     setBatchName("");
//     setErrorMessage("");
//   };

//   return (
//     <div className="md:my-5 py-4">
//       <div className="flex gap-3">
//         <button
//           type="button"
//           onClick={() => setShowModal(true)}
//           className="flex items-center md:gap-2 gap-1 bg-[#0098f1] md:p-2 p-1 md:px-4  rounded-lg text-white "
//         >
//           <AiFillPlusCircle className="md:text-xl" />
//           <span className="max-md:text-xs font-bold">Add Batch</span>
//         </button>
//         <button
//           type="button"
//           className="flex items-center md:gap-1 gap-x-[2px]"
//         >
//           <IoMdInformationCircleOutline className="max-md:text-xs" />
//           <span className="max-md:text-xs">info</span>
//         </button>
//       </div>

//       <div className="mt-5 w-full overflow-x-auto scrollbar-thin scrollbar-track-white scrollbar-thumb-[#0098F1] ">
//         <table className="min-w-full text-nowrap max-md:text-xs">
//           <thead className="bg-[#0098f1] text-white">
//             <tr className="border border-[#0098F1]">
//               <th className="py-3 px-4 border-r border-white text-center text-sm font-medium text-nowrap">
//                 Full Time Batch
//               </th>
//               <th className="py-3 px-4 border-r border-white text-center text-sm font-medium text-nowrap">
//                 #Of Employees
//               </th>
//               <th className="py-3 px-4 border-r border-white text-center text-sm font-medium text-nowrap">
//                 Last Payroll Run
//               </th>
//               <th className="py-3 px-4 border-r border-white text-center text-sm font-medium text-nowrap">
//                 Created By
//               </th>
//               <th className="py-3 px-4 text-center text-sm font-medium text-nowrap">Status</th>
//             </tr>
//           </thead>
//           <tbody>
//             {batches.length === 0 ? (
//               <tr>
//                 <td className="py-3 px-4 md:text-center" colSpan="9">
//                   No Batches found.
//                 </td>
//               </tr>
//             ) : (
//               batches.map((batch) => (
//                 <tr
//                   key={batch.id}
//                   onClick={() => onBatchClick(batch)}
//                   className=" cursor-pointer bg-white text-center border border-[#0098F1]"
//                 >
//                   <td className="py-2 px-4 border-r border-[#0098f1] hover:underline underline-offset-4">
//                     {batch.name}
//                   </td>
//                   <td className="py-2 px-4 border-r border-[#0098f1]">
//                     {batch.employees}
//                   </td>
//                   <td className="py-2 px-4 border-r border-[#0098f1]">
//                     {batch.lastPayrollRun}
//                   </td>
//                   <td className="py-2 px-4 border-r border-[#0098f1]">
//                     {batch.createdBy}
//                   </td>
//                   <td className="py-2 px-4">{batch.status}</td>
//                 </tr>
//               ))
//             )}
//           </tbody>
//         </table>
//       </div>
//       <p className="my-3 text-[#0098f1] font-bold max-md:text-xs">
//         Total Records : {batches.length}
//       </p>

//       {showModal && (
//         <div className="fixed inset-0 bg-blue-100 bg-opacity-50 flex items-center justify-center">
//           <div className="bg-white text-[#0098f1] p-3 rounded-lg shadow-lg w-56 md:w-[600px] flex flex-col">
//             <h2 className="md:text-lg font-bold mb-2 md:mb-4 ">
//               Add Batch <hr />
//             </h2>
//             <div className="flex flex-col gap-y-2 md:flex-row md:items-center md:gap-x-2 md:self-center">
//               <label className="max-md:text-sm">
//                 Batch Name <span className="">*</span>
//               </label>
//               <input
//                 type="text"
//                 onChange={(e) => setBatchName(e.target.value)}
//                 value={batchName}
//                 className="border md:p-2 md:w-96 rounded-lg max-md:text-xs p-1 outline-none px-2"
//                 placeholder="Batch Name"
//               />
//             </div>
//             {errorMessage && (
//               <div className="text-[#0098f1] text-sm mt-2 self-center pr-32">
//                 {errorMessage}
//               </div>
//             )}
//             <div className="flex justify-end gap-2 my-3">
//               <button
//                 type="button"
//                 className="bg-white border border-[#0098f1] text-[#0098f1] p-2 rounded-lg max-md:text-xs"
//                 onClick={handleCancel}
//               >
//                 Cancel
//               </button>
//               <button
//                 type="button"
//                 onClick={handleSave}
//                 className="bg-[#0098f1] text-white p-2 px-4 rounded-lg max-md:text-xs"
//               >
//                 Save
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//       {showSuccess && (
//         <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 z-50">
//           <div className="bg-sky-500 p-8 rounded-lg text-center text-white">
//             <h2 className="text-xl mb-4">
//               <IoMdCheckmarkCircleOutline className="inline-block text-6xl" />
//             </h2>
//             <p>
//             Batch Added Successfully
//             </p>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default PayrollBatches;








import React, { useEffect, useState } from "react";
import { AiFillPlusCircle } from "react-icons/ai";
import { IoMdInformationCircleOutline, IoMdCheckmarkCircleOutline } from "react-icons/io";
import { toast } from "react-toastify";
import { payrollAPI, employeesAPI } from "../../../../services/api";

const PayrollBatches = ({ onBatchClick, onBatchesUpdate }) => {
  const [batches, setBatches] = useState([]);
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [batchName, setBatchName] = useState("");
  const [selectedMembers, setSelectedMembers] = useState({});
  const [errorMessage, setErrorMessage] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);
  const [saving, setSaving] = useState(false);

  const loadBatches = async () => {
    setLoading(true);
    try {
      const res = await payrollAPI.listBatches();
      const list = Array.isArray(res.data) ? res.data : [];
      setBatches(list);
      onBatchesUpdate?.(list);
    } catch (err) {
      toast.error(err?.response?.data?.detail || "Failed to load batches");
    } finally { setLoading(false); }
  };

  useEffect(() => {
    loadBatches();
    (async () => {
      try {
        const res = await employeesAPI.getAll();
        setEmployees(Array.isArray(res.data) ? res.data : []);
      } catch (e) { console.error(e); }
    })();
    // eslint-disable-next-line
  }, []);

  const toggleMember = (userId) => {
    setSelectedMembers((prev) => {
      const next = { ...prev };
      if (next[userId]) delete next[userId];
      else next[userId] = { basic: 0, hra: 0, allowances: 0 };
      return next;
    });
  };

  const updateField = (userId, field, value) => {
    setSelectedMembers((prev) => ({
      ...prev, [userId]: { ...prev[userId], [field]: Number(value) || 0 },
    }));
  };

  const handleSave = async () => {
    if (!batchName.trim()) { setErrorMessage("Batch name is required"); return; }
    const members = Object.entries(selectedMembers).map(([id, v]) => ({
      userId: Number(id), monthlyBasic: v.basic, monthlyHra: v.hra,
      monthlyAllowances: v.allowances, joinedOn: null,
    }));
    if (members.length === 0) { setErrorMessage("Please add at least one employee"); return; }
    setSaving(true);
    try {
      await payrollAPI.createBatch({ name: batchName.trim(), description: null, status: "Active", members });
      toast.success("Batch created");
      setShowModal(false); setBatchName(""); setSelectedMembers({}); setErrorMessage("");
      setShowSuccess(true); setTimeout(() => setShowSuccess(false), 2000);
      await loadBatches();
    } catch (err) {
      const d = err?.response?.data?.detail;
      setErrorMessage(typeof d === "string" ? d : "Failed to save");
    } finally { setSaving(false); }
  };

  const handleDelete = async (id, name) => {
    if (!window.confirm(`Delete batch "${name}"?`)) return;
    try { await payrollAPI.deleteBatch(id); toast.success("Deleted"); await loadBatches(); }
    catch (err) { toast.error(err?.response?.data?.detail || "Failed to delete"); }
  };

  const handleCancel = () => {
    setShowModal(false); setBatchName(""); setSelectedMembers({}); setErrorMessage("");
  };

  return (
    <div className="md:my-5 py-4">
      <div className="flex gap-3">
        <button onClick={() => setShowModal(true)} className="flex items-center md:gap-2 gap-1 bg-[#0098f1] md:p-2 p-1 md:px-4 rounded-lg text-white">
          <AiFillPlusCircle className="md:text-xl" />
          <span className="max-md:text-xs font-bold">Add Batch</span>
        </button>
        <button className="flex items-center md:gap-1 gap-x-[2px]">
          <IoMdInformationCircleOutline className="max-md:text-xs" />
          <span className="max-md:text-xs">info</span>
        </button>
      </div>

      <div className="mt-5 w-full overflow-x-auto scrollbar-thin scrollbar-track-white scrollbar-thumb-[#0098F1]">
        <table className="min-w-full text-nowrap max-md:text-xs">
          <thead className="bg-[#0098f1] text-white">
            <tr className="border border-[#0098F1]">
              <th className="py-3 px-4 border-r border-white text-sm font-medium">Batch</th>
              <th className="py-3 px-4 border-r border-white text-sm font-medium"># Employees</th>
              <th className="py-3 px-4 border-r border-white text-sm font-medium">Last Payroll Run</th>
              <th className="py-3 px-4 border-r border-white text-sm font-medium">Status</th>
              <th className="py-3 px-4 text-sm font-medium">Action</th>
            </tr>
          </thead>
          <tbody>
            {loading && <tr><td colSpan={5} className="py-3 text-center text-gray-500">Loading...</td></tr>}
            {!loading && batches.length === 0 && (
              <tr><td colSpan={5} className="py-3 text-center text-gray-500">No batches yet.</td></tr>
            )}
            {!loading && batches.map((b) => (
              <tr key={b.id} onClick={() => onBatchClick?.(b)} className="cursor-pointer bg-white text-center border border-[#0098F1]">
                <td className="py-2 px-4 border-r border-[#0098f1] hover:underline underline-offset-4">{b.name}</td>
                <td className="py-2 px-4 border-r border-[#0098f1]">{b.member_count}</td>
                <td className="py-2 px-4 border-r border-[#0098f1]">{b.last_payroll_run_at ? new Date(b.last_payroll_run_at).toLocaleString() : "—"}</td>
                <td className="py-2 px-4 border-r border-[#0098f1]">{b.status}</td>
                <td className="py-2 px-4">
                  <button onClick={(e) => { e.stopPropagation(); handleDelete(b.id, b.name); }} className="text-red-600 text-xs hover:underline">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="my-3 text-[#0098f1] font-bold max-md:text-xs">Total Records : {batches.length}</p>

      {showModal && (
        <div className="fixed inset-0 bg-blue-100 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white text-[#0098f1] p-6 rounded-lg shadow-lg w-[90vw] md:w-[800px] max-h-[90vh] overflow-y-auto">
            <h2 className="md:text-lg font-bold mb-4">Add Batch <hr /></h2>
            <div className="flex flex-col gap-y-2 md:flex-row md:items-center md:gap-x-4 mb-4">
              <label className="md:w-32">Batch Name *</label>
              <input type="text" value={batchName} onChange={(e) => setBatchName(e.target.value)} className="border md:p-2 flex-1 rounded-lg p-1 outline-none px-2" placeholder="e.g. Full Time Batch" />
            </div>

            <div className="border rounded-lg max-h-64 overflow-y-auto mb-4">
              <div className="bg-gray-100 px-3 py-2 text-xs font-bold grid grid-cols-5 gap-2">
                <div>Pick</div><div>Employee</div><div>Basic (₹)</div><div>HRA (₹)</div><div>Allowances (₹)</div>
              </div>
              {employees.map((emp) => {
                const sel = selectedMembers[emp.id];
                return (
                  <div key={emp.id} className="grid grid-cols-5 gap-2 px-3 py-2 border-b items-center text-sm">
                    <input type="checkbox" checked={!!sel} onChange={() => toggleMember(emp.id)} />
                    <div className="truncate">
                      {emp.name}
                      <div className="text-xs text-gray-500">{emp.email}</div>
                    </div>
                    <input type="number" value={sel?.basic || ""} disabled={!sel} onChange={(e) => updateField(emp.id, "basic", e.target.value)} className="border rounded p-1 text-xs w-full" />
                    <input type="number" value={sel?.hra || ""} disabled={!sel} onChange={(e) => updateField(emp.id, "hra", e.target.value)} className="border rounded p-1 text-xs w-full" />
                    <input type="number" value={sel?.allowances || ""} disabled={!sel} onChange={(e) => updateField(emp.id, "allowances", e.target.value)} className="border rounded p-1 text-xs w-full" />
                  </div>
                );
              })}
            </div>

            {errorMessage && <div className="text-red-500 text-sm mb-2">{errorMessage}</div>}

            <div className="flex justify-end gap-2">
              <button onClick={handleCancel} className="bg-white border border-[#0098f1] text-[#0098f1] p-2 px-4 rounded-lg">Cancel</button>
              <button onClick={handleSave} disabled={saving} className={`text-white p-2 px-4 rounded-lg ${saving ? "bg-gray-400" : "bg-[#0098f1]"}`}>
                {saving ? "Saving..." : "Save"}
              </button>
            </div>
          </div>
        </div>
      )}

      {showSuccess && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-sky-500 p-8 rounded-lg text-center text-white">
            <IoMdCheckmarkCircleOutline className="inline-block text-6xl" />
            <p className="mt-4">Batch Added Successfully</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default PayrollBatches;