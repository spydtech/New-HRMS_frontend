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
//           <button className="w-20 rounded bg-green-600 text-white font-normal text-sm p-2">
//             Active
//           </button>
//         );
//       case "InActive":
//         return (
//           <button className="w-20 rounded bg-blue-400 text-white font-normal text-sm p-2">
//             InActive
//           </button>
//         );
//       case "Pending":
//         return (
//           <button className="w-20 rounded bg-orange-400 text-white font-normal text-sm p-2">
//             Pending
//           </button>
//         );
//       case "Closed":
//         return (
//           <button className="w-20 rounded bg-red-600 text-white font-normal text-sm p-2">
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
//     <div id="main" className=" min-h-screen mt-4 p-4 ">
//       <div className="  flex flex-col md:flex-row justify-between">
//         <div>
//           <span className=" text-[#2A546D] text-sm lg:text-lg font-medium">
//             Employee / Projects
//           </span>
//         </div>
//       </div>
//       <div className="   overflow-x-scroll scrollbar-thin   scrollbar-track-white scrollbar-thumb-[#2A546D] pt-4 mx-4">
//         <table className="min-w-full w-screen overflow-x-scroll  text-nowrap">
//           <thead>
//             <tr className="bg-[#2A546D] text-white">
//               <th className="p-3 border border-r-white border-[#2a546d] ">
//                 Project
//               </th>
//               <th className="p-3 border-r border-white ">Created</th>
//               <th className="p-3 border-r border-white ">Deadline</th>
//               <th className="p-3 border-r border-white ">Progress</th>
//               <th className="p-3 border-r border-white ">Lead</th>
//               <th className="p-3 border-r border-white px-20">Team</th>
//               <th className="p-3  border  border-[#2a546d] ">Status</th>
//               {/* <th className="p-2 ">Action</th> */}
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
//                   className="text-center text-black border  border-[#2a546d] "
//                 >
//                   <td className="p-3 border-r border-[#2a546d]">
//                     {item.project}
//                   </td>
//                   <td className="p-3 border-r border-[#2a546d]">
//                     {dayjs(item.createdBy).format("DD MMM, YYYY")}
//                   </td>
//                   <td className="p-3 border-r border-[#2a546d]">
//                     {dayjs(item.Deadline).format("DD MMM, YYYY")}
//                   </td>
//                   <td className="py-2 px-2 p-3 border-r border-[#2a546d]">
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
//                   <td className="px-2 border-x-[1px] border-[#2A546D] flex-row justify-center items-center">
//                     <img
//                       src={item.Lead}
//                       alt="Type"
//                       className="w-10 h-10 mx-auto"
//                     />
//                   </td>
//                   <td className=" flex justify-center p-3 border-r border-[#2a546d] items-center space-x-1 ">
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
//                   <td className=" text-center  p-3 border-r  border-[#2A546D]">
//                     {GetStatus(item.Status)}
//                   </td>
//                   {/* <td className="px-2 text-white flex mt-2 justify-center items-center space-x-2 pb-1">
//                     <FiEye className="p-[10px] text-[35px] rounded bg-green-600 cursor-pointer" />
//                     <TbEdit
//                       onClick={() => editOpen(item, index)}
//                       className="p-[10px] text-[35px] rounded bg-blue-400 cursor-pointer"
//                     />
//                     <RiDeleteBinLine
//                       onClick={() => handleDelete(index)}
//                       className="p-[10px] text-[35px] rounded bg-red-600 cursor-pointer"
//                     />
//                   </td> */}
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
//                 className="px-4 py-2 bg-blue-500 text-white rounded"
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
import dayjs from "dayjs";
import { toast } from "react-toastify";
import { projectsAPI } from "../../../services/api";

const AVATAR = "https://ui-avatars.com/api/?background=2A546D&color=fff&name=";

const ProjectList = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    setLoading(true);
    try {
      const res = await projectsAPI.getAll();
      setProjects(Array.isArray(res.data) ? res.data : []);
    } catch (err) {
      console.error("Failed to load projects:", err);
      toast.error("Failed to load projects");
    } finally {
      setLoading(false);
    }
  };

  const GetStatus = (status) => {
    const colors = {
      Active: "bg-green-600",
      InActive: "bg-blue-400",
      Pending: "bg-orange-400",
      Closed: "bg-red-600",
    };
    return (
      <button
        className={`w-20 rounded ${colors[status] || "bg-gray-400"} text-white font-normal text-sm p-2`}
      >
        {status || "Unknown"}
      </button>
    );
  };

  return (
    <div id="main" className="min-h-screen mt-4 p-4">
      <div className="flex flex-col md:flex-row justify-between mb-4">
        <div>
          <span className="text-[#2A546D] text-sm lg:text-lg font-medium">
            Employee / Projects
          </span>
        </div>
      </div>

      <div className="overflow-x-scroll scrollbar-thin scrollbar-track-white scrollbar-thumb-[#2A546D] mx-4">
        <table className="min-w-full w-screen overflow-x-scroll text-nowrap">
          <thead>
            <tr className="bg-[#2A546D] text-white">
              <th className="p-3 border border-r-white border-[#2a546d]">Project</th>
              <th className="p-3 border-r border-white">Created</th>
              <th className="p-3 border-r border-white">Deadline</th>
              <th className="p-3 border-r border-white">Progress</th>
              <th className="p-3 border-r border-white">Lead</th>
              <th className="p-3 border-r border-white px-10">Team Members</th>
              <th className="p-3 border border-[#2a546d]">Status</th>
            </tr>
          </thead>
          <tbody>
            {loading && (
              <tr>
                <td colSpan={7} className="text-center py-8 text-gray-500">
                  Loading projects...
                </td>
              </tr>
            )}

            {!loading && projects.length === 0 && (
              <tr>
                <td colSpan={7} className="text-center py-8 text-gray-500">
                  No projects found.
                </td>
              </tr>
            )}

            {!loading &&
              projects.map((item) => {
                const percentage = Number(item.progress) || 0;
                
                // Lead info
                const leadName = item.teamLead?.name || "Unassigned";
                const leadImg = item.teamLead?.profileImage || `${AVATAR}${encodeURIComponent(leadName)}`;
                
                // Team members
                const members = item.team?.members || [];

                return (
                  <tr key={item.id} className="text-center text-black border border-[#2a546d]">
                    <td className="p-3 border-r border-[#2a546d] font-medium">
                      {item.projectName || item.project_name}
                    </td>
                    <td className="p-3 border-r border-[#2a546d]">
                      {item.createdAt ? dayjs(item.createdAt).format("DD MMM, YYYY") : "—"}
                    </td>
                    <td className="p-3 border-r border-[#2a546d]">
                      {item.endDate ? dayjs(item.endDate).format("DD MMM, YYYY") : "—"}
                    </td>
                    <td className="py-2 px-2 p-3 border-r border-[#2a546d] w-[150px]">
                      <div className="relative w-full h-4 bg-white border border-gray-300 rounded-full">
                        <div
                          className="h-full bg-[#1D7616] rounded-full"
                          style={{ width: `${percentage}%` }}
                        />
                        <span className={`absolute inset-0 flex items-center justify-center text-xs font-medium ${percentage <= 50 ? "text-black" : "text-white"}`}>
                          {percentage}%
                        </span>
                      </div>
                    </td>
                    
                    {/* Team Lead Avatar */}
                    <td className="px-2 border-x-[1px] border-[#2A546D] flex-row justify-center items-center py-2">
                      <img
                        src={leadImg}
                        alt={leadName}
                        title={leadName}
                        className="w-10 h-10 mx-auto rounded-full object-cover"
                      />
                    </td>
                    
                    {/* Team Members Avatars Stack */}
                    <td className="flex justify-center p-3 border-r border-[#2a546d] items-center">
                      <div className="flex -space-x-2">
                        {members.length === 0 ? (
                          <span className="text-gray-400 text-sm">No members</span>
                        ) : (
                          members.slice(0, 4).map((m, idx) => (
                            <img
                              key={m.id ?? idx}
                              src={m.profileImage || `${AVATAR}${encodeURIComponent(m.name)}`}
                              alt={m.name}
                              title={`${m.name} ${m.designation ? `(${m.designation})` : ""}`}
                              className="w-8 h-8 rounded-full border-2 border-white object-cover"
                              style={{ zIndex: 10 - idx }}
                            />
                          ))
                        )}
                        {members.length > 4 && (
                          <div 
                            className="w-8 h-8 rounded-full border-2 border-white bg-gray-200 text-gray-600 flex items-center justify-center text-xs font-bold" 
                            style={{ zIndex: 5 }}
                          >
                            +{members.length - 4}
                          </div>
                        )}
                      </div>
                    </td>

                    <td className="text-center p-3 border-[#2A546D]">
                      {GetStatus(item.status)}
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProjectList;