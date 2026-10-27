// import React from "react";
// // import teamImage from '../assets/image1.png'; // Replace with your actual team image path
// import teamImage from "../../../assets/project/projectGrid/profile.jpg";
// const EmployeeActivities = () => {
//   const activities = [
//     {
//       time: "Just Now",
//       title: "Add New Task",
//       description:
//         "Web by far While that's mock-ups and this is politics Lorem card.",
//       team: true,
//       teamMembers: 4,
//       dotColor: "bg-green-500",
//     },
//     {
//       time: "6 mins ago",
//       title: "Lucid Admin Code Upload on Github",
//       description:
//         "web by far While that's mock-ups and this is politics, are they really so different? I think the only card she has is the Lorem card.",
//       by: "By : Venu",
//       team: false,
//       dotColor: "bg-yellow-500",
//     },
//     {
//       time: "15 mins ago",
//       title: "Assigning a project team",
//       description:
//         "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
//       by: "Team Leader : kumar",
//       team: true,
//       teamMembers: 4,
//       dotColor: "bg-orange-500",
//     },
//     {
//       dotColor: "bg-red-500",
//     },
//   ];

//   return (
//     <div className="p-4 mt-4 w-full min-h-screen">
//       <h2 className="text-[#2A546D] font-medium lg:text-lg text-sm mb-4">
//         Employee / Activities
//       </h2>
//       <div className="relative">
//         <div className="absolute left-5 top-1 h-full  border-l-2 border-zinc-300"></div>
//         {activities.map((activity, index) => (
//           <div className="flex items-start  mb-8 ml-8" key={index}>
//             <div
//               className={`w-3 h-3 ${activity.dotColor} rounded-full z-10 mt-1.5 pl-[9px] -ml-[17px] `}
//             ></div>
//             <div className=" grid ml-2 gap-2 text-[#2A546D]">
//               <p className="">{activity.time}</p>
//               <p className="font-bold">{activity.title}</p>
//               {activity.by && <p>{activity.by}</p>}
//               <p className="text-black">{activity.description}</p>
//               {activity.team && (
//                 <div className="flex   items-center mt-2">
//                   <span className="text-black mr-3">Team :</span>
//                   {[...Array(activity.teamMembers)].map((_, i) => (
//                     <img
//                       key={i}
//                       src={teamImage}
//                       alt="team-member"
//                       className="w-6 h-6 rounded-full ml-3 bg-slate-300"
//                     />
//                   ))}
//                 </div>
//               )}
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default EmployeeActivities;





// import React, { useEffect, useState } from "react";
// import { toast } from "react-toastify";
// import dayjs from "dayjs";
// import relativeTime from "dayjs/plugin/relativeTime";
// import {
//   MdOutlineCameraAlt,
//   MdOutlineFileDownload,
// } from "react-icons/md";
// import { activitiesAPI } from "../../../services/api";

// dayjs.extend(relativeTime);

// const AVATAR =
//   "https://ui-avatars.com/api/?background=0098F1&color=fff&name=";

// const dotColorFor = (type) => {
//   switch ((type || "").toLowerCase()) {
//     case "message":
//       return "bg-green-500";
//     case "task":
//       return "bg-yellow-500";
//     case "assign":
//       return "bg-orange-500";
//     case "status":
//       return "bg-red-500";
//     case "comment":
//       return "bg-blue-500";
//     default:
//       return "bg-green-500";
//   }
// };

// const EmployeeActivities = () => {
//   const [activities, setActivities] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [limit, setLimit] = useState(50);

//   const loadActivities = async () => {
//     setLoading(true);
//     try {
//       const res = await activitiesAPI.listAll(limit);
//       setActivities(Array.isArray(res.data) ? res.data : []);
//     } catch (err) {
//       console.error("Load activities failed:", err);
//       toast.error(
//         err?.response?.data?.detail || "Failed to load activities"
//       );
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     loadActivities();
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [limit]);

//   return (
//     <div className="p-4 mt-4 w-full min-h-screen">
//       <h2 className="text-[#2A546D] font-medium lg:text-lg text-sm mb-4">
//         Employee / Activities
//       </h2>

//       {loading && (
//         <div className="text-center text-gray-500 py-10">Loading...</div>
//       )}

//       {!loading && activities.length === 0 && (
//         <div className="text-center text-gray-500 py-10">
//           No activities yet. Post one from a project detail page.
//         </div>
//       )}

//       {!loading && activities.length > 0 && (
//         <div className="relative">
//           <div className="absolute left-5 top-1 h-full border-l-2 border-zinc-300"></div>

//           {activities.map((activity) => {
//             const author = activity.user || {};
//             const authorName = author.name || "Unknown";
//             const authorImg =
//               author.profileImage ||
//               `${AVATAR}${encodeURIComponent(authorName)}`;
//             const project = activity.project || null;
//             const teamMembers = project?.teamMembers || [];
//             const dotClass = dotColorFor(activity.activityType);

//             return (
//               <div
//                 className="flex items-start mb-8 ml-8"
//                 key={activity.id}
//               >
//                 <div
//                   className={`w-3 h-3 ${dotClass} rounded-full z-10 mt-1.5 -ml-[17px] flex-shrink-0`}
//                 ></div>

//                 <div className="grid ml-2 gap-2 text-[#2A546D] flex-1">
//                   {/* Time */}
//                   <p className="text-xs text-gray-500">
//                     {dayjs(activity.createdAt).fromNow()}
//                     {" · "}
//                     {dayjs(activity.createdAt).format("DD MMM YYYY, HH:mm")}
//                   </p>

//                   {/* Author row */}
//                   <div className="flex items-center gap-2">
//                     <img
//                       src={authorImg}
//                       alt={authorName}
//                       className="w-8 h-8 rounded-full object-cover border-2 border-[#0098F1]"
//                     />
//                     <div>
//                       <p className="font-bold text-sm sm:text-base text-[#2A546D]">
//                         {authorName}
//                       </p>
//                       <p className="text-xs text-gray-500">
//                         {author.designation || author.email || "Employee"}
//                       </p>
//                     </div>
//                   </div>

//                   {/* Activity content */}
//                   <p className="text-black text-sm sm:text-base mt-1">
//                     {activity.content}
//                   </p>

//                   {/* Project badge */}
//                   {project && (
//                     <div className="flex items-center gap-2 mt-1 flex-wrap">
//                       <span className="text-xs font-semibold px-2 py-0.5 rounded bg-[#0098F1]/10 text-[#0098F1]">
//                         Project: {project.name}
//                       </span>
//                       {project.status && (
//                         <span
//                           className={`text-xs font-semibold px-2 py-0.5 rounded ${
//                             project.status === "Active"
//                               ? "bg-green-100 text-green-700"
//                               : project.status === "Closed"
//                               ? "bg-red-100 text-red-700"
//                               : project.status === "Pending"
//                               ? "bg-orange-100 text-orange-700"
//                               : "bg-blue-100 text-blue-700"
//                           }`}
//                         >
//                           {project.status}
//                         </span>
//                       )}
//                       {project.teamName && (
//                         <span className="text-xs font-semibold px-2 py-0.5 rounded bg-purple-100 text-purple-700">
//                           Team: {project.teamName}
//                         </span>
//                       )}
//                     </div>
//                   )}

//                   {/* Project team members who are involved */}
//                   {teamMembers.length > 0 && (
//                     <div className="flex items-center gap-2 mt-2 flex-wrap">
//                       <span className="text-xs font-semibold text-[#2A546D]">
//                         Team Members ({teamMembers.length}):
//                       </span>
//                       <div className="flex items-center">
//                         {teamMembers.slice(0, 6).map((m, idx) => {
//                           const mName = m.name || "Unknown";
//                           const mImg =
//                             m.profileImage ||
//                             `${AVATAR}${encodeURIComponent(mName)}`;
//                           return (
//                             <img
//                               key={m.id ?? idx}
//                               src={mImg}
//                               alt={mName}
//                               title={`${mName}${
//                                 m.designation ? " — " + m.designation : ""
//                               }`}
//                               className="w-6 h-6 rounded-full border-2 border-white object-cover -ml-2 first:ml-0"
//                             />
//                           );
//                         })}
//                         {teamMembers.length > 6 && (
//                           <span className="ml-2 text-xs font-semibold text-[#0098F1]">
//                             +{teamMembers.length - 6}
//                           </span>
//                         )}
//                       </div>
//                     </div>
//                   )}

//                   {/* Attachments */}
//                   {activity.attachments?.length > 0 && (
//                     <div className="flex flex-col gap-1 mt-1">
//                       {activity.attachments.map((att, i) => (
//                         <div
//                           key={i}
//                           className="flex items-center gap-2 text-sm text-[#0098F1]"
//                         >
//                           {att.kind === "image" ? (
//                             <MdOutlineCameraAlt className="w-4 h-4" />
//                           ) : (
//                             <MdOutlineFileDownload className="w-4 h-4" />
//                           )}
//                           <span>{att.name}</span>
//                         </div>
//                       ))}
//                     </div>
//                   )}
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       )}

//       {/* Load more */}
//       {!loading && activities.length > 0 && activities.length >= limit && (
//         <div className="flex justify-center mt-6">
//           <button
//             onClick={() => setLimit((l) => Math.min(l + 50, 200))}
//             className="px-4 py-2 bg-[#0098F1] text-white rounded-md hover:bg-[#007cc4]"
//           >
//             Load more
//           </button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default EmployeeActivities;




import React, { useEffect, useState, useRef } from "react";
import { toast } from "react-toastify";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { FiPlus, FiLink } from "react-icons/fi";
import {
  MdOutlineCameraAlt,
  MdOutlineFileDownload,
  MdOutlineCancel,
} from "react-icons/md";
import { activitiesAPI } from "../../../services/api";

dayjs.extend(relativeTime);

const AVATAR =
  "https://ui-avatars.com/api/?background=0098F1&color=fff&name=";

const dotColorFor = (type) => {
  switch ((type || "").toLowerCase()) {
    case "message":
      return "bg-green-500";
    case "task":
      return "bg-yellow-500";
    case "assign":
      return "bg-orange-500";
    case "status":
      return "bg-red-500";
    case "comment":
      return "bg-blue-500";
    default:
      return "bg-green-500";
  }
};

const EMPTY_POST = {
  projectId: "",
  content: "",
  activityType: "message",
  progress: 0,
};

const EmployeeActivities = () => {
  const [activities, setActivities] = useState([]);
  const [loading, setLoading] = useState(true);
  const [limit, setLimit] = useState(50);

  // Add-activity modal
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [myProjects, setMyProjects] = useState([]);
  const [loadingProjects, setLoadingProjects] = useState(false);
  const [postForm, setPostForm] = useState(EMPTY_POST);
  const [alsoUpdateProgress, setAlsoUpdateProgress] = useState(false);
  const [posting, setPosting] = useState(false);
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [uploadedImages, setUploadedImages] = useState([]);

  const fileInputRef = useRef(null);
  const imageInputRef = useRef(null);

  // ---------------------------------------------------------------
  // Load feed
  // ---------------------------------------------------------------
  const loadActivities = async () => {
    setLoading(true);
    try {
      const res = await activitiesAPI.listAll(limit);
      setActivities(Array.isArray(res.data) ? res.data : []);
    } catch (err) {
      console.error("Load activities failed:", err);
      toast.error(err?.response?.data?.detail || "Failed to load activities");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadActivities();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [limit]);

  // ---------------------------------------------------------------
  // Modal open/close
  // ---------------------------------------------------------------
  const openModal = async () => {
    setPostForm(EMPTY_POST);
    setUploadedFiles([]);
    setUploadedImages([]);
    setAlsoUpdateProgress(false);
    setIsModalOpen(true);

    setLoadingProjects(true);
    try {
      const res = await activitiesAPI.myProjects();
      setMyProjects(Array.isArray(res.data) ? res.data : []);
    } catch (err) {
      console.error("Load my projects failed:", err);
      toast.error(
        err?.response?.data?.detail || "Failed to load your projects"
      );
      setMyProjects([]);
    } finally {
      setLoadingProjects(false);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setPostForm(EMPTY_POST);
    setUploadedFiles([]);
    setUploadedImages([]);
    setAlsoUpdateProgress(false);
  };

  // ---------------------------------------------------------------
  // Attachments
  // ---------------------------------------------------------------
  const handleFileUpload = (e) => {
    setUploadedFiles((prev) => [...prev, ...Array.from(e.target.files)]);
  };
  const handleImageUpload = (e) => {
    const imgs = Array.from(e.target.files).filter((f) =>
      f.type.startsWith("image/")
    );
    setUploadedImages((prev) => [...prev, ...imgs]);
  };
  const removeFile = (i) =>
    setUploadedFiles((prev) => prev.filter((_, idx) => idx !== i));
  const removeImage = (i) =>
    setUploadedImages((prev) => prev.filter((_, idx) => idx !== i));

  // ---------------------------------------------------------------
  // Submit
  // ---------------------------------------------------------------
  const handlePost = async () => {
    if (!postForm.projectId) {
      toast.error("Please select a project");
      return;
    }
    if (!postForm.content.trim()) {
      toast.error("Please type a message first");
      return;
    }

    const attachments = [
      ...uploadedImages.map((f) => ({
        name: f.name,
        size: f.size,
        type: f.type,
        kind: "image",
      })),
      ...uploadedFiles.map((f) => ({
        name: f.name,
        size: f.size,
        type: f.type,
        kind: "file",
      })),
    ];

    const payload = {
      content: postForm.content.trim(),
      activityType: postForm.activityType || "message",
      attachments,
    };
    if (alsoUpdateProgress) {
      payload.progress = Number(postForm.progress) || 0;
    }

    setPosting(true);
    try {
      await activitiesAPI.postForProject(postForm.projectId, payload);
      toast.success(
        alsoUpdateProgress
          ? `Activity posted · progress set to ${payload.progress}%`
          : "Activity posted"
      );
      closeModal();
      await loadActivities();
    } catch (err) {
      console.error("Post activity failed:", err);
      toast.error(err?.response?.data?.detail || "Failed to post activity");
    } finally {
      setPosting(false);
    }
  };

  // ---------------------------------------------------------------
  // Render
  // ---------------------------------------------------------------
  return (
    <div className="p-4 mt-4 w-full min-h-screen">
      <div className="flex justify-between items-center mb-4 gap-3 flex-wrap">
        <h2 className="text-[#2A546D] font-medium lg:text-lg text-sm">
          Employee / Activities
        </h2>
        <button
          onClick={openModal}
          className="flex items-center gap-2 bg-[#0098F1] text-white px-4 py-2 rounded-md hover:bg-[#007cc4] shadow"
        >
          <FiPlus className="text-lg" />
          Add Activity
        </button>
      </div>

      {loading && (
        <div className="text-center text-gray-500 py-10">Loading...</div>
      )}

      {!loading && activities.length === 0 && (
        <div className="text-center text-gray-500 py-10">
          No activities yet. Click <b>Add Activity</b> to post your first
          update.
        </div>
      )}

      {!loading && activities.length > 0 && (
        <div className="relative">
          <div className="absolute left-5 top-1 h-full border-l-2 border-zinc-300"></div>

          {activities.map((activity) => {
            const author = activity.user || {};
            const authorName = author.name || "Unknown";
            const authorImg =
              author.profileImage ||
              `${AVATAR}${encodeURIComponent(authorName)}`;
            const project = activity.project || null;
            const teamMembers = project?.teamMembers || [];
            const dotClass = dotColorFor(activity.activityType);

            return (
              <div className="flex items-start mb-8 ml-8" key={activity.id}>
                <div
                  className={`w-3 h-3 ${dotClass} rounded-full z-10 mt-1.5 -ml-[17px] flex-shrink-0`}
                ></div>

                <div className="grid ml-2 gap-2 text-[#2A546D] flex-1">
                  <p className="text-xs text-gray-500">
                    {dayjs(activity.createdAt).fromNow()}
                    {" · "}
                    {dayjs(activity.createdAt).format("DD MMM YYYY, HH:mm")}
                  </p>

                  <div className="flex items-center gap-2">
                    <img
                      src={authorImg}
                      alt={authorName}
                      className="w-8 h-8 rounded-full object-cover border-2 border-[#0098F1]"
                    />
                    <div>
                      <p className="font-bold text-sm sm:text-base text-[#2A546D]">
                        {authorName}
                      </p>
                      <p className="text-xs text-gray-500">
                        {author.designation || author.email || "Employee"}
                      </p>
                    </div>
                  </div>

                  <p className="text-black text-sm sm:text-base mt-1">
                    {activity.content}
                  </p>

                  {project && (
                    <div className="flex items-center gap-2 mt-1 flex-wrap">
                      <span className="text-xs font-semibold px-2 py-0.5 rounded bg-[#0098F1]/10 text-[#0098F1]">
                        Project: {project.name}
                      </span>
                      {project.status && (
                        <span
                          className={`text-xs font-semibold px-2 py-0.5 rounded ${
                            project.status === "Active"
                              ? "bg-green-100 text-green-700"
                              : project.status === "Closed"
                              ? "bg-red-100 text-red-700"
                              : project.status === "Pending"
                              ? "bg-orange-100 text-orange-700"
                              : "bg-blue-100 text-blue-700"
                          }`}
                        >
                          {project.status}
                        </span>
                      )}
                      {project.progress !== undefined && (
                        <span className="text-xs font-semibold px-2 py-0.5 rounded bg-[#0098F1] text-white">
                          {project.progress}%
                        </span>
                      )}
                      {project.teamName && (
                        <span className="text-xs font-semibold px-2 py-0.5 rounded bg-purple-100 text-purple-700">
                          Team: {project.teamName}
                        </span>
                      )}
                    </div>
                  )}

                  {teamMembers.length > 0 && (
                    <div className="flex items-center gap-2 mt-2 flex-wrap">
                      <span className="text-xs font-semibold text-[#2A546D]">
                        Team Members ({teamMembers.length}):
                      </span>
                      <div className="flex items-center">
                        {teamMembers.slice(0, 6).map((m, idx) => {
                          const mName = m.name || "Unknown";
                          const mImg =
                            m.profileImage ||
                            `${AVATAR}${encodeURIComponent(mName)}`;
                          return (
                            <img
                              key={m.id ?? idx}
                              src={mImg}
                              alt={mName}
                              title={`${mName}${
                                m.designation ? " — " + m.designation : ""
                              }`}
                              className="w-6 h-6 rounded-full border-2 border-white object-cover -ml-2 first:ml-0"
                            />
                          );
                        })}
                        {teamMembers.length > 6 && (
                          <span className="ml-2 text-xs font-semibold text-[#0098F1]">
                            +{teamMembers.length - 6}
                          </span>
                        )}
                      </div>
                    </div>
                  )}

                  {activity.attachments?.length > 0 && (
                    <div className="flex flex-col gap-1 mt-1">
                      {activity.attachments.map((att, i) => (
                        <div
                          key={i}
                          className="flex items-center gap-2 text-sm text-[#0098F1]"
                        >
                          {att.kind === "image" ? (
                            <MdOutlineCameraAlt className="w-4 h-4" />
                          ) : (
                            <MdOutlineFileDownload className="w-4 h-4" />
                          )}
                          <span>{att.name}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      )}

      {!loading && activities.length > 0 && activities.length >= limit && (
        <div className="flex justify-center mt-6">
          <button
            onClick={() => setLimit((l) => Math.min(l + 50, 200))}
            className="px-4 py-2 bg-[#0098F1] text-white rounded-md hover:bg-[#007cc4]"
          >
            Load more
          </button>
        </div>
      )}

      {/* ============== Add Activity Modal ============== */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-lg shadow-2xl max-h-[90vh] overflow-y-auto">
            <h3 className="text-xl font-bold text-[#0098F1] mb-4">
              Post Project Update
            </h3>

            <div className="mb-3">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Project *
              </label>
              <select
                value={postForm.projectId}
                onChange={(e) =>
                  setPostForm((p) => ({ ...p, projectId: e.target.value }))
                }
                disabled={loadingProjects}
                className="border border-[#0098F1] rounded-lg w-full p-2 focus:outline-none"
              >
                <option value="">
                  {loadingProjects
                    ? "Loading your projects..."
                    : myProjects.length === 0
                    ? "You are not assigned to any project"
                    : "— Select a project —"}
                </option>
                {myProjects.map((p) => (
                  <option key={p.id} value={p.id}>
                    {p.name} ({p.status})
                  </option>
                ))}
              </select>
              {!loadingProjects && myProjects.length === 0 && (
                <p className="text-xs text-orange-600 mt-1">
                  You must be a team lead or a team member on a project to
                  post updates.
                </p>
              )}
            </div>

            <div className="mb-3">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Message *
              </label>
              <textarea
                className="border border-[#0098F1] rounded-lg w-full p-3 focus:outline-none"
                placeholder="What's the latest on this project?"
                rows="4"
                value={postForm.content}
                onChange={(e) =>
                  setPostForm((p) => ({ ...p, content: e.target.value }))
                }
              ></textarea>
            </div>

            <div className="flex flex-row gap-2 mb-3">
              <div
                className="flex justify-center items-center text-2xl text-white w-[45px] rounded-md h-[35px] bg-[#0098F1] cursor-pointer"
                onClick={() => imageInputRef.current?.click()}
                title="Attach image"
              >
                <MdOutlineCameraAlt />
                <input
                  type="file"
                  className="hidden"
                  ref={imageInputRef}
                  onChange={handleImageUpload}
                  multiple
                  accept="image/*"
                />
              </div>
              <div
                className="flex justify-center items-center text-2xl text-white w-[45px] rounded-md h-[35px] bg-[#0098F1] cursor-pointer"
                onClick={() => fileInputRef.current?.click()}
                title="Attach file"
              >
                <FiLink />
                <input
                  type="file"
                  className="hidden"
                  ref={fileInputRef}
                  onChange={handleFileUpload}
                  multiple
                />
              </div>
            </div>

            {uploadedImages.length > 0 && (
              <div className="mb-3">
                {uploadedImages.map((img, i) => (
                  <div key={i} className="flex items-center gap-2 mb-1">
                    <MdOutlineCameraAlt className="w-4 h-4 text-[#0098F1]" />
                    <span className="text-sm text-[#0098F1]">{img.name}</span>
                    <button
                      className="text-red-500"
                      onClick={() => removeImage(i)}
                    >
                      <MdOutlineCancel className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
            )}
            {uploadedFiles.length > 0 && (
              <div className="mb-3">
                {uploadedFiles.map((f, i) => (
                  <div key={i} className="flex items-center gap-2 mb-1">
                    <MdOutlineFileDownload className="w-4 h-4 text-[#0098F1]" />
                    <span className="text-sm text-[#0098F1]">{f.name}</span>
                    <button
                      className="text-red-500"
                      onClick={() => removeFile(i)}
                    >
                      <MdOutlineCancel className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
            )}

            <div className="border-t pt-3 mt-3">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={alsoUpdateProgress}
                  onChange={(e) => setAlsoUpdateProgress(e.target.checked)}
                />
                <span className="text-sm font-medium text-gray-700">
                  Also update project progress
                </span>
              </label>

              {alsoUpdateProgress && (
                <div className="mt-3">
                  <div className="flex justify-between mb-1">
                    <span className="text-sm text-gray-600">Progress</span>
                    <span className="text-sm font-bold text-[#0098F1]">
                      {postForm.progress}%
                    </span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="100"
                    step="5"
                    value={postForm.progress}
                    onChange={(e) =>
                      setPostForm((p) => ({
                        ...p,
                        progress: Number(e.target.value),
                      }))
                    }
                    className="w-full accent-[#0098F1]"
                  />
                  <div className="mt-2 flex gap-2 flex-wrap">
                    {[0, 25, 50, 75, 100].map((p) => (
                      <button
                        key={p}
                        type="button"
                        onClick={() =>
                          setPostForm((prev) => ({ ...prev, progress: p }))
                        }
                        className={`px-3 py-1 text-xs rounded border ${
                          postForm.progress === p
                            ? "bg-[#0098F1] text-white border-[#0098F1]"
                            : "bg-white text-[#0098F1] border-[#0098F1]"
                        }`}
                      >
                        {p}%
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className="flex justify-end gap-3 mt-6">
              <button
                onClick={closeModal}
                className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300"
              >
                Cancel
              </button>
              <button
                onClick={handlePost}
                disabled={posting || !postForm.projectId}
                className={`px-4 py-2 text-white rounded-md ${
                  posting || !postForm.projectId
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-[#0098F1] hover:bg-[#007cc4]"
                }`}
              >
                {posting ? "Posting..." : "Post"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default EmployeeActivities;