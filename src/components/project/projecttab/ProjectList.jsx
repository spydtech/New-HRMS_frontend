// import React, { useState } from "react";
// // import ProjectData from "../jsonFiles/ProjectData.json";
// import { FiEye } from "react-icons/fi";
// import { TbEdit } from "react-icons/tb";
// import { RiDeleteBinLine } from "react-icons/ri";
// import dayjs from "dayjs";

// const ProjectData = [
//   {
//     project: "InfiniO 4.1",
//     createdBy: "14 July, 2024",
//     Deadline: "14 Aug, 2021",
//     Progress: "60%",
//     Lead: "src/assets/hr/employee/profile/profile.jpg",
//     Team: "src/assets/hr/employee/profile/profile.jpg",
//     TeamMembers: 4,
//     Status: "Active",
//   },
//   {
//     project: "InfiniO 4.1",
//     createdBy: "14 July, 2024",
//     Deadline: "14 Aug, 2021",
//     Progress: "70%",
//     Lead: "src/assets/hr/employee/profile/profile.jpg",
//     Team: "src/assets/hr/employee/profile/profile.jpg",
//     TeamMembers: 4,
//     Status: "InActive",
//   },
//   {
//     project: "InfiniO 4.1",
//     createdBy: "14 July, 2024",
//     Deadline: "14 Aug, 2021",
//     Progress: "30%",
//     Lead: "src/assets/hr/employee/profile/profile.jpg",
//     Team: "src/assets/hr/employee/profile/profile.jpg",
//     TeamMembers: 4,
//     Status: "Active",
//   },
//   {
//     project: "InfiniO 4.1",
//     createdBy: "14 July, 2024",
//     Deadline: "14 Aug, 2021",
//     Progress: "40%",
//     Lead: "src/assets/hr/employee/profile/profile.jpg",
//     Team: "src/assets/hr/employee/profile/profile.jpg",
//     TeamMembers: 4,
//     Status: "Pending",
//   },
//   {
//     project: "InfiniO 4.1",
//     createdBy: "14 July, 2024",
//     Deadline: "14 Aug, 2021",
//     Progress: "80%",
//     Lead: "src/assets/hr/employee/profile/profile.jpg",
//     Team: "src/assets/hr/employee/profile/profile.jpg",
//     TeamMembers: 4,
//     Status: "Closed",
//   },
//   {
//     project: "InfiniO 4.1",
//     createdBy: "14 July, 2024",
//     Deadline: "14 Aug, 2021",
//     Progress: "100%",
//     Lead: "src/assets/hr/employee/profile/profile.jpg",
//     Team: "src/assets/hr/employee/profile/profile.jpg",
//     TeamMembers: 3,
//     Status: "Active",
//   },
//   {
//     project: "InfiniO 4.1",
//     createdBy: "14 July, 2024",
//     Deadline: "14 Aug, 2021",
//     Progress: "60%",
//     Lead: "src/assets/hr/employee/profile/profile.jpg",
//     Team: "src/assets/hr/employee/profile/profile.jpg",
//     TeamMembers: 4,
//     Status: "Pending",
//   },
// ];

// const ProjectList = () => {
//   const [projects, setProjects] = useState(ProjectData);
//   const [editOption, setEditOption] = useState(false);
//   const [editIndex, setEditIndex] = useState(null);
//   const [currentProject, setCurrentProject] = useState(null);

//   const GetStatus = (statusid) => {
//     switch (statusid) {
//       case "Active":
//         return (
//           <button className="w-[70px] rounded bg-green-600 text-white font-normal text-sm p-1">
//             Active
//           </button>
//         );
//       case "InActive":
//         return (
//           <button className="w-[70px] rounded bg-blue-400 text-white font-normal text-sm p-1">
//             InActive
//           </button>
//         );
//       case "Pending":
//         return (
//           <button className="w-[70px] rounded bg-orange-400 text-white font-normal text-sm p-1">
//             Pending
//           </button>
//         );
//       case "Closed":
//         return (
//           <button className="w-[70px] rounded bg-red-600 text-white font-normal text-sm p-1">
//             Closed
//           </button>
//         );
//       default:
//         return null;
//     }
//   };

//   const editOpen = (project, index) => {
//     setCurrentProject({ ...project });
//     setEditIndex(index);
//     setEditOption(true);
//   };

//   const editClose = () => {
//     setEditOption(false);
//     setCurrentProject(null);
//     setEditIndex(null);
//   };

//   const handleDelete = (index) => {
//     setProjects((prevProjects) => prevProjects.filter((_, i) => i !== index));
//   };

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setCurrentProject({ ...currentProject, [name]: value });
//   };

//   const handleFormSubmit = (e) => {
//     e.preventDefault();
//     setProjects((prevProjects) =>
//       prevProjects.map((project, index) =>
//         index === editIndex ? currentProject : project
//       )
//     );
//     editClose();
//   };

//   return (
//     <div id="main" className=" min-h-screen mt-4 p-4 w-auto overflow-x-hidden">
//       <h2 className="text-[#0098f1] font-bold text-sm lg:text-lg mb-2">
//         Projects / Project List
//       </h2>
//       <div className="  overflow-x-scroll scrollbar-thin   scrollbar-track-white scrollbar-thumb-[#0098f1] pt-4 mx-4">
//         <table className="min-w-full w-screen overflow-x-scroll  text-nowrap">
//           <thead className="bg-[#0098F1]">
//             <tr className="text-[#FFFFFF]">
//               <th className="p-2 ">Project</th>
//               <th className="p-2 ">Created</th>
//               <th className="p-2 ">Deadline</th>
//               <th className="p-2 ">Progress</th>
//               <th className="p-2 ">Lead</th>
//               <th className="p-2 px-20">Team</th>
//               <th className="p-2 ">Status</th>
//               <th className="p-2 ">Action</th>
//             </tr>
//           </thead>
//           <tbody>
//             {projects.map((item, index) => {
//               const progressString = item.Progress;
//               const percentage = progressString.endsWith("%")
//                 ? parseInt(progressString, 10)
//                 : 0;
//               return (
//                 <tr
//                   key={index}
//                   className=" text-black  text-[15px] w-full border-[1px] border-[#0098F1] border-opacity-25"
//                 >
//                   <td className="px-2">{item.project}</td>
//                   <td className="px-2 border-x-[1px] border-[#0098F1]">
//                     {dayjs(item.createdBy).format("DD MMM, YYYY")}
//                   </td>
//                   <td className="px-2 border-x-[1px] border-[#0098F1]">
//                     {dayjs(item.Deadline).format("DD MMM, YYYY")}
//                   </td>
//                   <td className="py-2 px-2 w-[120px] font-normal border-x-[1px] border-[#0098F1]">
//                     <div className="relative w-full h-4 bg-white border border-gray-300 rounded-full">
//                       <div
//                         className={`h-full bg-[#1D7616] rounded-full`}
//                         style={{ width: `${percentage}%` }}
//                       />
//                       <span
//                         className={`absolute inset-0 flex items-center justify-center text-xs font-medium ${
//                           percentage <= 50 ? "text-black" : "text-white"
//                         }`}
//                       >
//                         {percentage}%
//                       </span>
//                     </div>
//                   </td>
//                   <td className="px-2 border-x-[1px] border-[#0098F1] flex-row justify-center items-center">
//                     <img
//                       src={item.Lead}
//                       alt="Type"
//                       className="w-10 h-10 mx-auto"
//                     />
//                   </td>
//                   <td className="px-4 flex justify-center items-center space-x-1 w-full ">
//                     {Array.from({ length: item.TeamMembers }).map(
//                       (_, memberIndex) => (
//                         <img
//                           key={memberIndex}
//                           src={item.Team}
//                           alt="Team Member"
//                           className="w-8 h-8 rounded-full"
//                         />
//                       )
//                     )}
//                   </td>
//                   <td className="px-2 border-x-[1px] border-[#0098F1]">
//                     {GetStatus(item.Status)}
//                   </td>
//                   <td className="px-2 text-white flex mt-2 justify-center items-center space-x-2 pb-1">
//                     <FiEye className="p-[10px] text-[35px] rounded bg-green-600 cursor-pointer" />
//                     <TbEdit
//                       onClick={() => editOpen(item, index)}
//                       className="p-[10px] text-[35px] rounded bg-blue-400 cursor-pointer"
//                     />
//                     <RiDeleteBinLine
//                       onClick={() => handleDelete(index)}
//                       className="p-[10px] text-[35px] rounded bg-red-600 cursor-pointer"
//                     />
//                   </td>
//                 </tr>
//               );
//             })}
//           </tbody>
//         </table>
//       </div>
//       {editOption && (
//         <div
//           className="fixed inset-0 bg-black bg-opacity-25"
//           onClick={editClose}
//         >
//           <form
//             className="bg-white w-1/2 p-4 pb-12 inset-0 m-auto flex flex-col space-y-4"
//             onClick={(e) => e.stopPropagation()}
//             onSubmit={handleFormSubmit}
//           >
//             <h2 className="text-lg font-semibold mb-4">Edit Project</h2>
//             <div>
//               <label className="block text-sm font-medium mb-1">Project</label>
//               <input
//                 type="text"
//                 name="project"
//                 value={currentProject.project}
//                 onChange={handleInputChange}
//                 className="w-full px-3 py-2 border rounded"
//               />
//             </div>
//             <div>
//               <label className="block text-sm font-medium mb-1">Created</label>
//               <input
//                 type="date"
//                 name="createdBy"
//                 value={dayjs(currentProject.createdBy).format("DD MMM, YYYY")}
//                 onChange={handleInputChange}
//                 className="w-full px-3 py-2 border rounded"
//               />
//             </div>
//             <div>
//               <label className="block text-sm font-medium mb-1">Deadline</label>
//               <input
//                 type="date"
//                 name="Deadline"
//                 value={dayjs(currentProject.Deadline).format("DD MMM, YYYY")}
//                 onChange={handleInputChange}
//                 className="w-full px-3 py-2 border rounded"
//               />
//             </div>
//             <div>
//               <label className="block text-sm font-medium mb-1">Status</label>
//               <select
//                 name="Status"
//                 value={currentProject.Status}
//                 onChange={handleInputChange}
//                 className="w-full px-3 py-2 border rounded"
//               >
//                 <option value="Active">Active</option>
//                 <option value="InActive">InActive</option>
//                 <option value="Pending">Pending</option>
//                 <option value="Closed">Closed</option>
//               </select>
//             </div>
//             <div className="flex justify-end space-x-4">
//               <button
//                 type="button"
//                 onClick={editClose}
//                 className="px-4 py-2 bg-gray-300 rounded"
//               >
//                 Cancel
//               </button>
//               <button
//                 type="submit"
//                 className="px-4 py-2 bg-[#0098f1] text-white rounded"
//               >
//                 Save
//               </button>
//             </div>
//           </form>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ProjectList;




import React, { useState, useEffect } from "react";
import { FiEye } from "react-icons/fi";
import { TbEdit } from "react-icons/tb";
import { RiDeleteBinLine } from "react-icons/ri";
import { toast } from "react-toastify";
import dayjs from "dayjs";
import { useNavigate } from "react-router-dom";
import { projectsAPI } from "../../../services/api";

const AVATAR =
  "https://ui-avatars.com/api/?background=0098F1&color=fff&name=";

// Compute a rough progress from start/end dates. Returns 0-100.
const computeProgress = (start, end) => {
  if (!start || !end) return 0;
  const s = new Date(start).getTime();
  const e = new Date(end).getTime();
  if (!Number.isFinite(s) || !Number.isFinite(e) || e <= s) return 0;
  const now = Date.now();
  const pct = ((now - s) / (e - s)) * 100;
  return Math.max(0, Math.min(100, Math.round(pct)));
};

const GetStatus = (status) => {
  const map = {
    Active: "bg-green-600",
    InActive: "bg-blue-400",
    Pending: "bg-orange-400",
    Closed: "bg-red-600",
  };
  return (
    <button
      className={`w-[70px] rounded text-white font-normal text-sm p-1 ${
        map[status] || "bg-gray-400"
      }`}
    >
      {status || "—"}
    </button>
  );
};

const ProjectList = () => {
  const navigate = useNavigate();
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editOption, setEditOption] = useState(false);
  const [currentProject, setCurrentProject] = useState(null);
  const [saving, setSaving] = useState(false);

  const loadProjects = async () => {
    setLoading(true);
    try {
      const res = await projectsAPI.getAll();
      setProjects(Array.isArray(res.data) ? res.data : []);
    } catch (err) {
      console.error("Load projects failed:", err);
      toast.error(err?.response?.data?.detail || "Failed to load projects");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadProjects();
  }, []);

  const editOpen = (project) => {
    setCurrentProject({ ...project });
    setEditOption(true);
  };

  const editClose = () => {
    setEditOption(false);
    setCurrentProject(null);
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Delete this project?")) return;
    try {
      await projectsAPI.remove(id);
      await loadProjects();
      toast.success("Project deleted");
    } catch (err) {
      console.error("Delete project failed:", err);
      toast.error(err?.response?.data?.detail || "Failed to delete project");
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCurrentProject((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (!currentProject) return;
    setSaving(true);
    try {
      const payload = {
        projectName: currentProject.projectName || currentProject.project_name,
        description: currentProject.description,
        startDate: currentProject.startDate,
        endDate: currentProject.endDate,
        projectPriority: currentProject.projectPriority,
        status: currentProject.status,
      };
      await projectsAPI.update(currentProject.id, payload);
      await loadProjects();
      toast.success("Project updated");
      editClose();
    } catch (err) {
      console.error("Update failed:", err);
      toast.error(err?.response?.data?.detail || "Failed to update project");
    } finally {
      setSaving(false);
    }
  };

  return (
    <div id="main" className="min-h-screen mt-4 p-4 w-auto overflow-x-hidden">
      <h2 className="text-[#0098f1] font-bold text-sm lg:text-lg mb-2">
        Projects / Project List
      </h2>

      <div className="overflow-x-scroll scrollbar-thin scrollbar-track-white scrollbar-thumb-[#0098f1] pt-4 mx-4">
        <table className="min-w-full w-screen overflow-x-scroll text-nowrap">
          <thead className="bg-[#0098F1]">
            <tr className="text-[#FFFFFF]">
              <th className="p-2">Project</th>
              <th className="p-2">Created</th>
              <th className="p-2">Deadline</th>
              <th className="p-2">Progress</th>
              <th className="p-2">Lead</th>
              <th className="p-2 px-20">Team</th>
              <th className="p-2">Status</th>
              <th className="p-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {loading && (
              <tr>
                <td colSpan={8} className="text-center py-8 text-gray-500">
                  Loading...
                </td>
              </tr>
            )}
            {!loading && projects.length === 0 && (
              <tr>
                <td colSpan={8} className="text-center py-8 text-gray-500">
                  No projects yet.
                </td>
              </tr>
            )}
            {!loading &&
              projects.map((item) => {
                const percentage = computeProgress(
                  item.startDate,
                  item.endDate
                );
                const leadName = item.teamLead?.name || "—";
                const leadImg =
                  item.teamLead?.profileImage ||
                  `${AVATAR}${encodeURIComponent(leadName)}`;
                const teamName =
                  item.team?.teamName || item.team?.team_name || "—";

                return (
                  <tr
                    key={item.id}
                    className="text-black text-[15px] w-full border-[1px] border-[#0098F1] border-opacity-25"
                  >
                    <td className="px-2">
                      {item.projectName || item.project_name}
                    </td>
                    <td className="px-2 border-x-[1px] border-[#0098F1]">
                      {item.createdAt
                        ? dayjs(item.createdAt).format("DD MMM, YYYY")
                        : "—"}
                    </td>
                    <td className="px-2 border-x-[1px] border-[#0098F1]">
                      {item.endDate
                        ? dayjs(item.endDate).format("DD MMM, YYYY")
                        : "—"}
                    </td>
                    <td className="py-2 px-2 w-[120px] font-normal border-x-[1px] border-[#0098F1]">
                      <div className="relative w-full h-4 bg-white border border-gray-300 rounded-full">
                        <div
                          className="h-full bg-[#1D7616] rounded-full"
                          style={{ width: `${percentage}%` }}
                        />
                        <span
                          className={`absolute inset-0 flex items-center justify-center text-xs font-medium ${
                            percentage <= 50 ? "text-black" : "text-white"
                          }`}
                        >
                          {percentage}%
                        </span>
                      </div>
                    </td>
                    <td className="px-2 border-x-[1px] border-[#0098F1]">
                      <img
                        src={leadImg}
                        alt={leadName}
                        title={leadName}
                        className="w-10 h-10 rounded-full mx-auto object-cover"
                      />
                    </td>
                    <td className="px-4 py-2 text-center">
                      <span className="text-[#0098F1] font-medium">
                        {teamName}
                      </span>
                    </td>
                    <td className="px-2 border-x-[1px] border-[#0098F1]">
                      {GetStatus(item.status)}
                    </td>
                    <td className="px-2 text-white flex mt-2 justify-center items-center space-x-2 pb-1">
                      <FiEye
                        onClick={() => navigate(`/hr/project-detail/${item.id}`)}
                        className="p-[10px] text-[35px] rounded bg-green-600 cursor-pointer"
                      />
                      <TbEdit
                        onClick={() => editOpen(item)}
                        className="p-[10px] text-[35px] rounded bg-blue-400 cursor-pointer"
                      />
                      <RiDeleteBinLine
                        onClick={() => handleDelete(item.id)}
                        className="p-[10px] text-[35px] rounded bg-red-600 cursor-pointer"
                      />
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>

      {editOption && currentProject && (
        <div
          className="fixed inset-0 bg-black bg-opacity-25 z-50 flex items-center justify-center"
          onClick={editClose}
        >
          <form
            className="bg-white w-1/2 p-6 rounded-lg flex flex-col space-y-4 max-h-[85vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
            onSubmit={handleFormSubmit}
          >
            <h2 className="text-lg font-semibold mb-2 text-[#0098F1]">
              Edit Project
            </h2>

            <div>
              <label className="block text-sm font-medium mb-1">
                Project
              </label>
              <input
                type="text"
                name="projectName"
                value={currentProject.projectName || ""}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border rounded"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">
                Start Date
              </label>
              <input
                type="date"
                name="startDate"
                value={currentProject.startDate || ""}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border rounded"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">
                Deadline
              </label>
              <input
                type="date"
                name="endDate"
                value={currentProject.endDate || ""}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border rounded"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">
                Priority
              </label>
              <select
                name="projectPriority"
                value={currentProject.projectPriority || "Medium"}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border rounded"
              >
                <option value="Low">Low</option>
                <option value="Medium">Medium</option>
                <option value="High">High</option>
                <option value="Urgent">Urgent</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Status</label>
              <select
                name="status"
                value={currentProject.status || "Active"}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border rounded"
              >
                <option value="Active">Active</option>
                <option value="InActive">InActive</option>
                <option value="Pending">Pending</option>
                <option value="Closed">Closed</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">
                Description
              </label>
              <textarea
                name="description"
                value={currentProject.description || ""}
                onChange={handleInputChange}
                rows="3"
                className="w-full px-3 py-2 border rounded"
              />
            </div>

            <div className="flex justify-end space-x-4">
              <button
                type="button"
                onClick={editClose}
                className="px-4 py-2 bg-gray-300 rounded"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={saving}
                className={`px-4 py-2 text-white rounded ${
                  saving ? "bg-gray-400" : "bg-[#0098f1]"
                }`}
              >
                {saving ? "Saving..." : "Save"}
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default ProjectList;