// import React, { useState } from "react";
// // import { BsCheck2Circle } from "react-icons/bs";
// import { IoMdCheckmarkCircleOutline } from "react-icons/io";

// const AddProject = () => {
//   const [showSuccess, setShowSuccess] = useState(false);
//   const [formData, setFormData] = useState({
//     projectName: "",
//     clientName: "",
//     startDate: "",
//     endDate: "",
//     projectPriority: "",
//     rate: "",
//     rateType: "",
//     teamLead: "",
//     team: "",
//     projectImage: "",
//     projectDescription: "",
//   });

//   const [projects, setProjects] = useState([]);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({ ...prevData, [name]: value }));
//   };

//   const handleImageUpload = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       const reader = new FileReader();
//       reader.onloadend = () => {
//         setFormData((prevData) => ({
//           ...prevData,
//           projectImage: reader.result,
//         }));
//       };
//       reader.readAsDataURL(file);
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setProjects((prevProjects) => [...prevProjects, formData]);
//     setFormData({
//       projectName: "",
//       clientName: "",
//       startDate: "",
//       endDate: "",
//       projectPriority: "",
//       rate: "",
//       rateType: "",
//       teamLead: "",
//       team: "",
//       projectImage: "",
//       projectDescription: "",
//     });
//     localStorage.setItem(
//       "projectData",
//       JSON.stringify([...projects, formData])
//     );
//     setShowSuccess(true);
//     setTimeout(() => {
//       setShowSuccess(false);
//     }, 1000);
//   };

//   return (
//     <>
//       <div className="p-4 mt-4 min-h-screen">
//         <div className="">
//           <p className="text-[#0098F1] font-bold text-sm lg:text-lg">
//             Projects / Add Project
//           </p>
//         </div>

//         <div className="p-6">
//           <form onSubmit={handleSubmit}>
//             <div className="grid grid-cols-1 gap-6 content-center">
//               <div>
//                 <label className="block text-sm font-medium text-gray-700">
//                   Project Name
//                 </label>
//                 <input
//                   type="text"
//                   name="projectName"
//                   required
//                   value={formData.projectName}
//                   onChange={handleChange}
//                   className="mt-1 block w-full p-2 border border-blue-400 rounded-md focus:outline-none focus:ring focus:ring-blue-200 focus:border-blue-500"
//                 />
//               </div>
//               <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700">
//                     Select Client Name
//                   </label>
//                   <input
//                     type="text"
//                     required
//                     name="clientName"
//                     value={formData.clientName}
//                     onChange={handleChange}
//                     className="mt-1 block w-full p-2 border border-blue-400 rounded-md focus:outline-none focus:ring focus:ring-blue-200 focus:border-blue-500"
//                   />
//                 </div>
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700">
//                     Start Date
//                   </label>
//                   <input
//                     type="date"
//                     name="startDate"
//                     required
//                     value={formData.startDate}
//                     onChange={handleChange}
//                     className="mt-1 block w-full p-2 border border-blue-400 rounded-md focus:outline-none focus:ring focus:ring-blue-200 focus:border-blue-500"
//                   />
//                 </div>
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700">
//                     End Date
//                   </label>
//                   <input
//                     type="date"
//                     name="endDate"
//                     required
//                     value={formData.endDate}
//                     onChange={handleChange}
//                     className="mt-1 block w-full p-2 border border-blue-400 rounded-md focus:outline-none focus:ring focus:ring-blue-200 focus:border-blue-500"
//                   />
//                 </div>
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700">
//                     Select Project Priority
//                   </label>
//                   <input
//                     type="text"
//                     name="projectPriority"
//                     required
//                     value={formData.projectPriority}
//                     onChange={handleChange}
//                     className="mt-1 block w-full p-2 border border-blue-400 rounded-md focus:outline-none focus:ring focus:ring-blue-200 focus:border-blue-500"
//                   />
//                 </div>
//               </div>
//               <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700">
//                     Rate In Rupees
//                   </label>
//                   <input
//                     type="number"
//                     name="rate"
//                     required
//                     value={formData.rate}
//                     onChange={handleChange}
//                     className="mt-1 block w-full p-2 border border-blue-400 rounded-md focus:outline-none focus:ring focus:ring-blue-200 focus:border-blue-500"
//                   />
//                 </div>
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700">
//                     Select Rate Type
//                   </label>
//                   <input
//                     type="text"
//                     name="rateType"
//                     required
//                     value={formData.rateType}
//                     onChange={handleChange}
//                     className="mt-1 block w-full p-2 border border-blue-400 rounded-md focus:outline-none focus:ring focus:ring-blue-200 focus:border-blue-500"
//                   />
//                 </div>
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700">
//                     Select Team Lead
//                   </label>
//                   <input
//                     type="text"
//                     name="teamLead"
//                     required
//                     value={formData.teamLead}
//                     onChange={handleChange}
//                     className="mt-1 block w-full p-2 border border-blue-400 rounded-md focus:outline-none focus:ring focus:ring-blue-200 focus:border-blue-500"
//                   />
//                 </div>
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700">
//                     Select Team
//                   </label>
//                   <input
//                     type="text"
//                     name="team"
//                     required
//                     value={formData.team}
//                     onChange={handleChange}
//                     className="mt-1 block w-full p-2 border border-blue-400 rounded-md focus:outline-none focus:ring focus:ring-blue-200 focus:border-blue-500"
//                   />
//                 </div>
//               </div>
//               <div>
//                 <label className="block text-sm font-medium text-gray-700">
//                   Project Image
//                 </label>
//                 <input
//                   type="file"
//                   accept="image/*"
//                   onChange={handleImageUpload}
//                   className="mt-1 block w-full p-2 border border-blue-400 rounded-md focus:outline-none focus:ring focus:ring-blue-200 focus:border-blue-500"
//                 />
//                 {formData.projectImage && (
//                   <div className="mt-2 h-auto w-full">
//                     <img
//                       src={formData.projectImage}
//                       alt="Project Preview"
//                       className="w-full h-60 border border-blue-400 rounded-md"
//                     />
//                   </div>
//                 )}
//               </div>
//               <div>
//                 <label className="block text-sm font-medium text-gray-700">
//                   Project Description
//                 </label>
//                 <textarea
//                   name="projectDescription"
//                   required
//                   value={formData.projectDescription}
//                   onChange={handleChange}
//                   className="mt-1 block w-full p-2 border border-blue-400 rounded-md focus:outline-none focus:ring focus:ring-blue-200 focus:border-blue-500"
//                   rows="4"
//                 ></textarea>
//               </div>
//             </div>

//             <div className="flex justify-end pt-3 space-x-4">
//               <button
//                 type="submit"
//                 className="py-2 px-4 bg-[#0098F1] text-white font-semibold rounded-md shadow-md hover:bg-[#0098F1] focus:outline-none focus:ring-2 focus:ring-blue-300"
//               >
//                 Create
//               </button>
//               <button
//                 type="button"
//                 className="py-2 px-4 bg-gray-300 text-gray-700 font-semibold rounded-md shadow-md hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-300"
//                 onClick={() =>
//                   setFormData({
//                     projectName: "",
//                     clientName: "",
//                     startDate: "",
//                     endDate: "",
//                     projectPriority: "",
//                     rate: "",
//                     rateType: "",
//                     teamLead: "",
//                     team: "",
//                     projectImage: "",
//                     projectDescription: "",
//                   })
//                 }
//               >
//                 Cancel
//               </button>
//             </div>
//           </form>
//         </div>
//         {showSuccess && (
//           <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
//             <div className="bg-sky-500 p-8 rounded-lg text-center text-white">
//               <IoMdCheckmarkCircleOutline className="inline-block text-6xl" />
//               <h2 className="md:text-3xl mb-4">Project Added Successfully</h2>
//             </div>
//           </div>
//         )}
//       </div>
//     </>
//   );
// };

// export default AddProject;








// import React, { useState, useEffect } from "react";
// import { toast } from "react-toastify";
// import { IoMdCheckmarkCircleOutline } from "react-icons/io";
// import {
//   clientsAPI,
//   teamsAPI,
//   employeesAPI,
//   projectsAPI,
// } from "../../../services/api";

// const EMPTY_FORM = {
//   projectName: "",
//   clientId: "",
//   startDate: "",
//   endDate: "",
//   projectPriority: "",
//   rate: "",
//   rateType: "",
//   teamLeadId: "",
//   teamId: "",
//   projectImage: "",
//   projectDescription: "",
// };

// const empKey = (e) => {
//   if (e == null) return null;
//   const raw = e.id ?? e.ID;
//   const n = typeof raw === "number" ? raw : Number(raw);
//   return Number.isFinite(n) ? n : null;
// };

// const AddProject = () => {
//   const [showSuccess, setShowSuccess] = useState(false);
//   const [saving, setSaving] = useState(false);
//   const [formData, setFormData] = useState(EMPTY_FORM);

//   const [clients, setClients] = useState([]);
//   const [teams, setTeams] = useState([]);
//   const [employees, setEmployees] = useState([]);
//   const [loadingOptions, setLoadingOptions] = useState(true);

//   useEffect(() => {
//     let cancelled = false;
//     (async () => {
//       setLoadingOptions(true);
//       try {
//         const [clientsRes, teamsRes, employeesRes] = await Promise.all([
//           clientsAPI.getAll(),
//           teamsAPI.getAll(),
//           employeesAPI.getAll(),
//         ]);
//         if (cancelled) return;

//         setClients(Array.isArray(clientsRes.data) ? clientsRes.data : []);
//         setTeams(Array.isArray(teamsRes.data) ? teamsRes.data : []);
//         setEmployees(
//           Array.isArray(employeesRes.data) ? employeesRes.data : []
//         );
//       } catch (err) {
//         console.error("Load options failed:", err);
//         toast.error("Failed to load clients / teams / employees");
//       } finally {
//         if (!cancelled) setLoadingOptions(false);
//       }
//     })();
//     return () => {
//       cancelled = true;
//     };
//   }, []);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleImageUpload = (e) => {
//     const file = e.target.files[0];
//     if (!file) return;
//     const reader = new FileReader();
//     reader.onloadend = () => {
//       setFormData((prev) => ({ ...prev, projectImage: reader.result }));
//     };
//     reader.readAsDataURL(file);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!formData.projectName.trim()) {
//       toast.error("Project name is required");
//       return;
//     }
//     if (!formData.clientId) {
//       toast.error("Please select a client");
//       return;
//     }

//     const clientIdNum = Number(formData.clientId);
//     const teamIdNum = formData.teamId ? Number(formData.teamId) : null;
//     const teamLeadNum = formData.teamLeadId
//       ? Number(formData.teamLeadId)
//       : null;
//     const rateNum = formData.rate ? Number(formData.rate) : null;

//     const payload = {
//       projectName: formData.projectName.trim(),
//       clientId: Number.isFinite(clientIdNum) ? clientIdNum : null,
//       teamId: Number.isFinite(teamIdNum) ? teamIdNum : null,
//       teamLeadId: Number.isFinite(teamLeadNum) ? teamLeadNum : null,
//       startDate: formData.startDate || null,
//       endDate: formData.endDate || null,
//       projectPriority: formData.projectPriority || "Medium",
//       rate: Number.isFinite(rateNum) ? rateNum : null,
//       rateType: formData.rateType || null,
//       projectImage: formData.projectImage || null,
//       description: formData.projectDescription.trim() || null,
//     };

//     console.log("[PROJECT CREATE] payload:", payload);

//     setSaving(true);
//     try {
//       await projectsAPI.create(payload);
//       setFormData(EMPTY_FORM);
//       setShowSuccess(true);
//       setTimeout(() => setShowSuccess(false), 1500);
//       toast.success("Project created");
//     } catch (err) {
//       console.error("Create project failed:", err);
//       const detail = err?.response?.data?.detail;
//       toast.error(
//         Array.isArray(detail)
//           ? detail.map((d) => d.msg).join(" | ")
//           : detail || "Failed to create project"
//       );
//     } finally {
//       setSaving(false);
//     }
//   };

//   return (
//     <>
//       <div className="p-4 mt-4 min-h-screen">
//         <div>
//           <p className="text-[#0098F1] font-bold text-sm lg:text-lg">
//             Projects / Add Project
//           </p>
//         </div>

//         <div className="p-6">
//           <form onSubmit={handleSubmit}>
//             <div className="grid grid-cols-1 gap-6 content-center">
//               <div>
//                 <label className="block text-sm font-medium text-gray-700">
//                   Project Name
//                 </label>
//                 <input
//                   type="text"
//                   name="projectName"
//                   required
//                   value={formData.projectName}
//                   onChange={handleChange}
//                   className="mt-1 block w-full p-2 border border-blue-400 rounded-md focus:outline-none focus:ring focus:ring-blue-200 focus:border-blue-500"
//                 />
//               </div>

//               <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700">
//                     Select Client Name
//                   </label>
//                   <select
//                     name="clientId"
//                     required
//                     value={formData.clientId}
//                     onChange={handleChange}
//                     disabled={loadingOptions}
//                     className="mt-1 block w-full p-2 border border-blue-400 rounded-md focus:outline-none focus:ring focus:ring-blue-200 focus:border-blue-500"
//                   >
//                     <option value="">
//                       {loadingOptions ? "Loading..." : "— Pick a client —"}
//                     </option>
//                     {clients.map((c) => (
//                       <option key={c.id} value={c.id}>
//                         {c.name} ({c.email})
//                       </option>
//                     ))}
//                   </select>
//                 </div>
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700">
//                     Start Date
//                   </label>
//                   <input
//                     type="date"
//                     name="startDate"
//                     required
//                     value={formData.startDate}
//                     onChange={handleChange}
//                     className="mt-1 block w-full p-2 border border-blue-400 rounded-md focus:outline-none focus:ring focus:ring-blue-200 focus:border-blue-500"
//                   />
//                 </div>
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700">
//                     End Date
//                   </label>
//                   <input
//                     type="date"
//                     name="endDate"
//                     required
//                     value={formData.endDate}
//                     onChange={handleChange}
//                     className="mt-1 block w-full p-2 border border-blue-400 rounded-md focus:outline-none focus:ring focus:ring-blue-200 focus:border-blue-500"
//                   />
//                 </div>
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700">
//                     Select Project Priority
//                   </label>
//                   <select
//                     name="projectPriority"
//                     required
//                     value={formData.projectPriority}
//                     onChange={handleChange}
//                     className="mt-1 block w-full p-2 border border-blue-400 rounded-md focus:outline-none focus:ring focus:ring-blue-200 focus:border-blue-500"
//                   >
//                     <option value="">— Select —</option>
//                     <option value="Low">Low</option>
//                     <option value="Medium">Medium</option>
//                     <option value="High">High</option>
//                     <option value="Urgent">Urgent</option>
//                   </select>
//                 </div>
//               </div>

//               <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700">
//                     Rate In Rupees
//                   </label>
//                   <input
//                     type="number"
//                     name="rate"
//                     value={formData.rate}
//                     onChange={handleChange}
//                     className="mt-1 block w-full p-2 border border-blue-400 rounded-md focus:outline-none focus:ring focus:ring-blue-200 focus:border-blue-500"
//                   />
//                 </div>
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700">
//                     Select Rate Type
//                   </label>
//                   <select
//                     name="rateType"
//                     value={formData.rateType}
//                     onChange={handleChange}
//                     className="mt-1 block w-full p-2 border border-blue-400 rounded-md focus:outline-none focus:ring focus:ring-blue-200 focus:border-blue-500"
//                   >
//                     <option value="">— Select —</option>
//                     <option value="Hourly">Hourly</option>
//                     <option value="Daily">Daily</option>
//                     <option value="Weekly">Weekly</option>
//                     <option value="Monthly">Monthly</option>
//                     <option value="Fixed">Fixed</option>
//                   </select>
//                 </div>
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700">
//                     Select Team Lead
//                   </label>
//                   <select
//                     name="teamLeadId"
//                     value={formData.teamLeadId}
//                     onChange={handleChange}
//                     disabled={loadingOptions}
//                     className="mt-1 block w-full p-2 border border-blue-400 rounded-md focus:outline-none focus:ring focus:ring-blue-200 focus:border-blue-500"
//                   >
//                     <option value="">
//                       {loadingOptions ? "Loading..." : "— Pick a lead —"}
//                     </option>
//                     {employees
//                       .filter((e) => empKey(e) != null)
//                       .map((e) => (
//                         <option key={empKey(e)} value={empKey(e)}>
//                           {e.name} ({e.email})
//                         </option>
//                       ))}
//                   </select>
//                 </div>
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700">
//                     Select Team
//                   </label>
//                   <select
//                     name="teamId"
//                     value={formData.teamId}
//                     onChange={handleChange}
//                     disabled={loadingOptions}
//                     className="mt-1 block w-full p-2 border border-blue-400 rounded-md focus:outline-none focus:ring focus:ring-blue-200 focus:border-blue-500"
//                   >
//                     <option value="">
//                       {loadingOptions ? "Loading..." : "— Pick a team —"}
//                     </option>
//                     {teams.map((t) => (
//                       <option key={t.id} value={t.id}>
//                         {t.teamName}
//                       </option>
//                     ))}
//                   </select>
//                 </div>
//               </div>

//               <div>
//                 <label className="block text-sm font-medium text-gray-700">
//                   Project Image
//                 </label>
//                 <input
//                   type="file"
//                   accept="image/*"
//                   onChange={handleImageUpload}
//                   className="mt-1 block w-full p-2 border border-blue-400 rounded-md focus:outline-none focus:ring focus:ring-blue-200 focus:border-blue-500"
//                 />
//                 {formData.projectImage && (
//                   <div className="mt-2 h-auto w-full">
//                     <img
//                       src={formData.projectImage}
//                       alt="Project Preview"
//                       className="w-full h-60 border border-blue-400 rounded-md object-cover"
//                     />
//                   </div>
//                 )}
//               </div>

//               <div>
//                 <label className="block text-sm font-medium text-gray-700">
//                   Project Description
//                 </label>
//                 <textarea
//                   name="projectDescription"
//                   required
//                   value={formData.projectDescription}
//                   onChange={handleChange}
//                   className="mt-1 block w-full p-2 border border-blue-400 rounded-md focus:outline-none focus:ring focus:ring-blue-200 focus:border-blue-500"
//                   rows="4"
//                 ></textarea>
//               </div>
//             </div>

//             <div className="flex justify-end pt-3 space-x-4">
//               <button
//                 type="submit"
//                 disabled={saving}
//                 className={`py-2 px-4 text-white font-semibold rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-blue-300 ${
//                   saving
//                     ? "bg-gray-400"
//                     : "bg-[#0098F1] hover:bg-[#007cc4]"
//                 }`}
//               >
//                 {saving ? "Creating..." : "Create"}
//               </button>
//               <button
//                 type="button"
//                 className="py-2 px-4 bg-gray-300 text-gray-700 font-semibold rounded-md shadow-md hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-300"
//                 onClick={() => setFormData(EMPTY_FORM)}
//               >
//                 Cancel
//               </button>
//             </div>
//           </form>
//         </div>

//         {showSuccess && (
//           <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 z-[60]">
//             <div className="bg-sky-500 p-8 rounded-lg text-center text-white">
//               <IoMdCheckmarkCircleOutline className="inline-block text-6xl" />
//               <h2 className="md:text-3xl mb-4 mt-4">
//                 Project Added Successfully
//               </h2>
//             </div>
//           </div>
//         )}
//       </div>
//     </>
//   );
// };

// export default AddProject;





import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import {
  clientsAPI,
  teamsAPI,
  employeesAPI,
  projectsAPI,
} from "../../../services/api";

const EMPTY_FORM = {
  projectName: "",
  clientId: "",
  startDate: "",
  endDate: "",
  projectPriority: "",
  rate: "",
  rateType: "",
  teamLeadId: "",
  teamId: "",
  projectImage: "",
  projectDescription: "",
};

const empKey = (e) => {
  if (e == null) return null;
  const raw = e.id ?? e.ID;
  const n = typeof raw === "number" ? raw : Number(raw);
  return Number.isFinite(n) ? n : null;
};

const AddProject = () => {
  const [showSuccess, setShowSuccess] = useState(false);
  const [saving, setSaving] = useState(false);
  const [formData, setFormData] = useState(EMPTY_FORM);

  const [clients, setClients] = useState([]);
  const [teams, setTeams] = useState([]);
  const [employees, setEmployees] = useState([]);
  const [loadingOptions, setLoadingOptions] = useState(true);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      setLoadingOptions(true);
      try {
        const [clientsRes, teamsRes, employeesRes] = await Promise.all([
          clientsAPI.getAll(),
          teamsAPI.getAll(),
          employeesAPI.getAll(),
        ]);
        if (cancelled) return;

        const c = Array.isArray(clientsRes.data) ? clientsRes.data : [];
        const t = Array.isArray(teamsRes.data) ? teamsRes.data : [];
        const e = Array.isArray(employeesRes.data) ? employeesRes.data : [];

        console.log("[AddProject] clients:", c.length);
        console.log(
          "[AddProject] teams:",
          t.length,
          t.map((x) => ({ id: x.id, name: x.teamName }))
        );
        console.log("[AddProject] employees:", e.length);

        setClients(c);
        setTeams(t);
        setEmployees(e);
      } catch (err) {
        console.error("Load options failed:", err);
        toast.error("Failed to load clients / teams / employees");
      } finally {
        if (!cancelled) setLoadingOptions(false);
      }
    })();
    return () => {
      cancelled = true;
    };
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onloadend = () => {
      setFormData((prev) => ({ ...prev, projectImage: reader.result }));
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.projectName.trim()) {
      toast.error("Project name is required");
      return;
    }
    if (!formData.clientId) {
      toast.error("Please select a client");
      return;
    }
    if (!formData.teamId) {
      toast.error("Please select a team");
      return;
    }
    if (!formData.teamLeadId) {
      toast.error("Please select a team lead");
      return;
    }

    const payload = {
      projectName: formData.projectName.trim(),
      clientId: Number(formData.clientId),
      teamId: Number(formData.teamId),
      teamLeadId: Number(formData.teamLeadId),
      startDate: formData.startDate || null,
      endDate: formData.endDate || null,
      projectPriority: formData.projectPriority || "Medium",
      rate: formData.rate ? Number(formData.rate) : null,
      rateType: formData.rateType || null,
      projectImage: formData.projectImage || null,
      description: formData.projectDescription.trim() || null,
    };

    console.log("[PROJECT CREATE] formData:", formData);
    console.log("[PROJECT CREATE] payload:", payload);

    setSaving(true);
    try {
      await projectsAPI.create(payload);
      setFormData(EMPTY_FORM);
      setShowSuccess(true);
      setTimeout(() => setShowSuccess(false), 1500);
      toast.success("Project created");
    } catch (err) {
      console.error("Create project failed:", err);
      const detail = err?.response?.data?.detail;
      toast.error(
        Array.isArray(detail)
          ? detail.map((d) => d.msg).join(" | ")
          : detail || "Failed to create project"
      );
    } finally {
      setSaving(false);
    }
  };

  return (
    <>
      <div className="p-4 mt-4 min-h-screen">
        <div>
          <p className="text-[#0098F1] font-bold text-sm lg:text-lg">
            Projects / Add Project
          </p>
        </div>

        <div className="p-6">
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 gap-6 content-center">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Project Name
                </label>
                <input
                  type="text"
                  name="projectName"
                  required
                  value={formData.projectName}
                  onChange={handleChange}
                  className="mt-1 block w-full p-2 border border-blue-400 rounded-md focus:outline-none focus:ring focus:ring-blue-200 focus:border-blue-500"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Select Client Name
                  </label>
                  <select
                    name="clientId"
                    required
                    value={formData.clientId}
                    onChange={handleChange}
                    disabled={loadingOptions}
                    className="mt-1 block w-full p-2 border border-blue-400 rounded-md focus:outline-none focus:ring focus:ring-blue-200 focus:border-blue-500"
                  >
                    <option value="">
                      {loadingOptions ? "Loading..." : "— Pick a client —"}
                    </option>
                    {clients.map((c) => (
                      <option key={c.id} value={c.id}>
                        {c.name} ({c.email})
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Start Date
                  </label>
                  <input
                    type="date"
                    name="startDate"
                    required
                    value={formData.startDate}
                    onChange={handleChange}
                    className="mt-1 block w-full p-2 border border-blue-400 rounded-md focus:outline-none focus:ring focus:ring-blue-200 focus:border-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    End Date
                  </label>
                  <input
                    type="date"
                    name="endDate"
                    required
                    value={formData.endDate}
                    onChange={handleChange}
                    className="mt-1 block w-full p-2 border border-blue-400 rounded-md focus:outline-none focus:ring focus:ring-blue-200 focus:border-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Select Project Priority
                  </label>
                  <select
                    name="projectPriority"
                    required
                    value={formData.projectPriority}
                    onChange={handleChange}
                    className="mt-1 block w-full p-2 border border-blue-400 rounded-md focus:outline-none focus:ring focus:ring-blue-200 focus:border-blue-500"
                  >
                    <option value="">— Select —</option>
                    <option value="Low">Low</option>
                    <option value="Medium">Medium</option>
                    <option value="High">High</option>
                    <option value="Urgent">Urgent</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Rate In Rupees
                  </label>
                  <input
                    type="number"
                    name="rate"
                    value={formData.rate}
                    onChange={handleChange}
                    className="mt-1 block w-full p-2 border border-blue-400 rounded-md focus:outline-none focus:ring focus:ring-blue-200 focus:border-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Select Rate Type
                  </label>
                  <select
                    name="rateType"
                    value={formData.rateType}
                    onChange={handleChange}
                    className="mt-1 block w-full p-2 border border-blue-400 rounded-md focus:outline-none focus:ring focus:ring-blue-200 focus:border-blue-500"
                  >
                    <option value="">— Select —</option>
                    <option value="Hourly">Hourly</option>
                    <option value="Daily">Daily</option>
                    <option value="Weekly">Weekly</option>
                    <option value="Monthly">Monthly</option>
                    <option value="Fixed">Fixed</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Select Team Lead
                  </label>
                  <select
                    name="teamLeadId"
                    value={formData.teamLeadId}
                    onChange={handleChange}
                    disabled={loadingOptions}
                    className="mt-1 block w-full p-2 border border-blue-400 rounded-md focus:outline-none focus:ring focus:ring-blue-200 focus:border-blue-500"
                  >
                    <option value="">
                      {loadingOptions ? "Loading..." : "— Pick a lead —"}
                    </option>
                    {employees
                      .filter((e) => empKey(e) != null)
                      .map((e) => (
                        <option key={empKey(e)} value={empKey(e)}>
                          {e.name} ({e.email})
                        </option>
                      ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Select Team
                  </label>
                  <select
                    name="teamId"
                    value={formData.teamId}
                    onChange={handleChange}
                    disabled={loadingOptions}
                    className="mt-1 block w-full p-2 border border-blue-400 rounded-md focus:outline-none focus:ring focus:ring-blue-200 focus:border-blue-500"
                  >
                    <option value="">
                      {loadingOptions ? "Loading..." : "— Pick a team —"}
                    </option>
                    {teams.map((t) => (
                      <option key={t.id} value={t.id}>
                        {t.teamName}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Project Image
                </label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="mt-1 block w-full p-2 border border-blue-400 rounded-md focus:outline-none focus:ring focus:ring-blue-200 focus:border-blue-500"
                />
                {formData.projectImage && (
                  <div className="mt-2 h-auto w-full">
                    <img
                      src={formData.projectImage}
                      alt="Project Preview"
                      className="w-full h-60 border border-blue-400 rounded-md object-cover"
                    />
                  </div>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Project Description
                </label>
                <textarea
                  name="projectDescription"
                  required
                  value={formData.projectDescription}
                  onChange={handleChange}
                  className="mt-1 block w-full p-2 border border-blue-400 rounded-md focus:outline-none focus:ring focus:ring-blue-200 focus:border-blue-500"
                  rows="4"
                ></textarea>
              </div>
            </div>

            <div className="flex justify-end pt-3 space-x-4">
              <button
                type="submit"
                disabled={saving}
                className={`py-2 px-4 text-white font-semibold rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-blue-300 ${
                  saving ? "bg-gray-400" : "bg-[#0098F1] hover:bg-[#007cc4]"
                }`}
              >
                {saving ? "Creating..." : "Create"}
              </button>
              <button
                type="button"
                className="py-2 px-4 bg-gray-300 text-gray-700 font-semibold rounded-md shadow-md hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-300"
                onClick={() => setFormData(EMPTY_FORM)}
              >
                Cancel
              </button>
            </div>
          </form>
        </div>

        {showSuccess && (
          <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 z-[60]">
            <div className="bg-sky-500 p-8 rounded-lg text-center text-white">
              <IoMdCheckmarkCircleOutline className="inline-block text-6xl" />
              <h2 className="md:text-3xl mb-4 mt-4">
                Project Added Successfully
              </h2>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default AddProject;