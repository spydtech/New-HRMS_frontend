// import React from "react";
// import image3 from "../../../assets/project/projectGrid/img1.png";
// import image4 from "../../../assets/project/projectGrid/profile.jpg";

// const projects = [
//   {
//     title: "Word press - Theme Design",
//     description:
//       "Lorem Ipsum is simply dummy text of the printing and typesetting.",
//     teamMembers: [image4, image4, image4, image4],
//     progress: 50,
//   },
//   {
//     title: "Word press - Theme Design",
//     description:
//       "Lorem Ipsum is simply dummy text of the printing and typesetting.",
//     teamMembers: [image4, image4, image4, image4],
//     progress: 75,
//   },
//   {
//     title: "Word press - Theme Design",
//     description:
//       "Lorem Ipsum is simply dummy text of the printing and typesetting.",
//     teamMembers: [image4, image4, image4, image4],
//     progress: 30,
//   },
//   {
//     title: "Word press - Theme Design",
//     description:
//       "Lorem Ipsum is simply dummy text of the printing and typesetting.",
//     teamMembers: [image4, image4, image4, image4],
//     progress: 90,
//   },
//   {
//     title: "Word press - Theme Design",
//     description:
//       "Lorem Ipsum is simply dummy text of the printing and typesetting.",
//     teamMembers: [image4, image4, image4, image4],
//     progress: 60,
//   },
//   {
//     title: "Word press - Theme Design",
//     description:
//       "Lorem Ipsum is simply dummy text of the printing and typesetting.",
//     teamMembers: [image4, image4, image4, image4],
//     progress: 40,
//   },
//   // Add more project objects here
// ];

// const ProjectGrid = () => {
//   return (
//     <div className="p-4 mt-4 min-h-screen">
//       <h2 className="text-[#0098f1] font-bold text-sm lg:text-lg mb-2">
//         Projects / Project Grid
//       </h2>
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
//         {projects.map((project, index) => (
//           <div key={index} className="bg-white p-4 rounded-lg shadow-md">
//             <div className="flex justify-center">
//               <img src={image3} alt="Project" className="" />
//             </div>
//             <h3 className="text-[#0098F1] text-xl font-semibold mb-4">
//               {project.title}
//             </h3>
//             <p className="text-gray-500 mb-4">{project.description}</p>
//             <div className="relative">
//               <div className="h-2 w-full rounded-xl bg-[#0098f1] opacity-35 mb-4"></div>
//               <div
//                 className="absolute top-0 left-0 h-2 rounded-xl bg-[#0098f1]"
//                 style={{ width: `${project.progress}%` }}
//               ></div>
//             </div>
//             <div className="flex items-center">
//               <span className="text-gray-700 mr-2">Team :</span>
//               <div className="flex">
//                 {project.teamMembers.map((member, idx) => (
//                   <img
//                     key={idx}
//                     src={member}
//                     alt={`Team member ${idx + 1}`}
//                     className="w-8 h-8 rounded-full border-2 border-white -ml-2"
//                   />
//                 ))}
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ProjectGrid;






import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { projectsAPI } from "../../../services/api";

const AVATAR =
  "https://ui-avatars.com/api/?background=0098F1&color=fff&name=";

const computeProgress = (start, end) => {
  if (!start || !end) return 0;
  const s = new Date(start).getTime();
  const e = new Date(end).getTime();
  if (!Number.isFinite(s) || !Number.isFinite(e) || e <= s) return 0;
  const now = Date.now();
  const pct = ((now - s) / (e - s)) * 100;
  return Math.max(0, Math.min(100, Math.round(pct)));
};

const ProjectGrid = () => {
  const navigate = useNavigate();
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      setLoading(true);
      try {
        const res = await projectsAPI.getAll();
        if (!cancelled) {
          setProjects(Array.isArray(res.data) ? res.data : []);
        }
      } catch (err) {
        console.error("Load projects failed:", err);
        toast.error(err?.response?.data?.detail || "Failed to load projects");
      } finally {
        if (!cancelled) setLoading(false);
      }
    })();
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <div className="p-4 mt-4 min-h-screen">
      <h2 className="text-[#0098f1] font-bold text-sm lg:text-lg mb-2">
        Projects / Project Grid
      </h2>

      {loading && (
        <div className="text-center text-gray-500 py-10">Loading...</div>
      )}

      {!loading && projects.length === 0 && (
        <div className="text-center text-gray-500 py-10">
          No projects yet.
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
        {projects.map((project) => {
          const progress = computeProgress(
            project.startDate,
            project.endDate
          );
          const leadName = project.teamLead?.name || "Unassigned";
          const leadImg =
            project.teamLead?.profileImage ||
            `${AVATAR}${encodeURIComponent(leadName)}`;

          // Show up to 4 members from the assigned team. Since the backend
          // returns the team object (not individual members) here, we render
          // the lead avatar 4 times as a placeholder. If your `/projects`
          // endpoint later returns team members, swap this out.
          const memberAvatars = Array.from({ length: 4 }).map(
            (_, i) => leadImg
          );

          return (
            <div
              key={project.id}
              onClick={() => navigate(`/project-detail/${project.id}`)}
              className="bg-white p-4 rounded-lg shadow-md cursor-pointer hover:shadow-lg transition-shadow"
            >
              <div className="flex justify-center mb-3">
                {project.projectImage ? (
                  <img
                    src={project.projectImage}
                    alt={project.projectName}
                    className="w-full h-40 object-cover rounded-md"
                  />
                ) : (
                  <div className="w-full h-40 flex items-center justify-center bg-[#0098F1] bg-opacity-10 rounded-md">
                    <span className="text-[#0098F1] font-semibold text-lg">
                      {project.projectName}
                    </span>
                  </div>
                )}
              </div>

              <h3 className="text-[#0098F1] text-xl font-semibold mb-2">
                {project.projectName || project.project_name}
              </h3>

              <p className="text-gray-500 mb-4 line-clamp-2">
                {project.description || "No description"}
              </p>

              <div className="relative mb-4">
                <div className="h-2 w-full rounded-xl bg-[#0098f1] opacity-35"></div>
                <div
                  className="absolute top-0 left-0 h-2 rounded-xl bg-[#0098f1]"
                  style={{ width: `${progress}%` }}
                ></div>
                <div className="text-xs text-gray-500 mt-1">
                  {progress}% complete
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <span className="text-gray-700 mr-2 text-sm">Team :</span>
                  <div className="flex">
                    {memberAvatars.map((src, idx) => (
                      <img
                        key={idx}
                        src={src}
                        alt={`Member ${idx + 1}`}
                        className="w-8 h-8 rounded-full border-2 border-white -ml-2 object-cover"
                      />
                    ))}
                  </div>
                </div>
                <span
                  className={`text-xs font-semibold px-2 py-1 rounded ${
                    project.status === "Active"
                      ? "bg-green-100 text-green-700"
                      : project.status === "Closed"
                      ? "bg-red-100 text-red-700"
                      : project.status === "Pending"
                      ? "bg-orange-100 text-orange-700"
                      : "bg-blue-100 text-blue-700"
                  }`}
                >
                  {project.status || "—"}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProjectGrid;