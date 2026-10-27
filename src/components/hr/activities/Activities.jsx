// import React from "react";
// // import teamImage from '../assets/image1.png'; // Replace with your actual team image path

// const Activities = () => {
//   const activities = [
//     {
//       time: "Just Now",
//       title: "Add New Task",
//       description:
//         "Web by far While that's mock-ups and this is politics Lorem card.",
//       team: true,
//       teamMembers: 5,
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
//       teamMembers: 5,
//       dotColor: "bg-orange-500",
//     },
//     {
//       dotColor: "bg-red-500",
//     },
//   ];

//   return (
//     <div className="p-4 mt-4 w-full sm:w-fit">
//       <h2 className="text-[#0098F1] lg:text-lg text-sm font-bold mb-4">
//         Hr / Activities
//       </h2>
//       <div className="relative">
//         <div className="absolute left-5 top-1 h-full border-l-2 border-zinc-300"></div>
//         {activities.map((activity, index) => (
//           <div
//             className="flex flex-col sm:flex-row items-start mb-8 ml-8"
//             key={index}
//           >
//             <div
//               className={`w-3 h-3 ${activity.dotColor} rounded-full z-10 mt-1.5 pl-[9px] -ml-[17px]`}
//             ></div>
//             <div className="grid ml-6 gap-2 mt-4 sm:mt-0">
//               <p className="text-sm sm:text-base">{activity.time}</p>
//               <p className="text-base sm:text-lg font-semibold">
//                 {activity.title}
//               </p>
//               {activity.by && (
//                 <p className="text-sm sm:text-base">{activity.by}</p>
//               )}
//               <p className="text-sm sm:text-base">{activity.description}</p>
//               {activity.team && (
//                 <div className="flex flex-col sm:flex-row items-center mt-2">
//                   <span className="mr-3">Team :</span>
//                   <div className="flex">
//                     {[...Array(activity.teamMembers)].map((_, i) => (
//                       <img
//                         key={i}
//                         // src={teamImage}
//                         alt="team-member"
//                         className="w-6 h-6 rounded-full ml-3"
//                       />
//                     ))}
//                   </div>
//                 </div>
//               )}
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Activities;





import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import dayjs from "dayjs";
import {
  MdOutlineCameraAlt,
  MdOutlineFileDownload,
} from "react-icons/md";
import { activitiesAPI } from "../../../services/api";

const AVATAR =
  "https://ui-avatars.com/api/?background=0098F1&color=fff&name=";

// Map activity type → dot color
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
    default:
      return "bg-green-500";
  }
};

const Activities = () => {
  const [activities, setActivities] = useState([]);
  const [loading, setLoading] = useState(true);
  const [limit, setLimit] = useState(50);

  const loadActivities = async () => {
    setLoading(true);
    try {
      const res = await activitiesAPI.listAll(limit);
      setActivities(Array.isArray(res.data) ? res.data : []);
    } catch (err) {
      console.error("Load activities failed:", err);
      toast.error(
        err?.response?.data?.detail || "Failed to load activities"
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadActivities();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [limit]);

  return (
    <div className="p-4 mt-4 w-full sm:w-fit">
      <h2 className="text-[#0098F1] lg:text-lg text-sm font-bold mb-4">
        Hr / Activities
      </h2>

      {loading && (
        <div className="text-center text-gray-500 py-10">Loading...</div>
      )}

      {!loading && activities.length === 0 && (
        <div className="text-center text-gray-500 py-10">
          No activities yet. Post one from a project detail page.
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
            const projectName = activity.project?.name || null;
            const dotClass = dotColorFor(activity.activityType);

            return (
              <div
                className="flex flex-col sm:flex-row items-start mb-8 ml-8"
                key={activity.id}
              >
                <div
                  className={`w-3 h-3 ${dotClass} rounded-full z-10 mt-1.5 -ml-[17px] flex-shrink-0`}
                ></div>

                <div className="grid ml-6 gap-2 mt-4 sm:mt-0 flex-1">
                  <div className="flex items-center gap-2">
                    <img
                      src={authorImg}
                      alt={authorName}
                      className="w-8 h-8 rounded-full object-cover"
                    />
                    <div>
                      <p className="text-sm sm:text-base font-semibold text-black">
                        {authorName}
                      </p>
                      <p className="text-xs text-gray-500">
                        {dayjs(activity.createdAt).format(
                          "DD MMM YYYY, HH:mm"
                        )}
                        {projectName && (
                          <>
                            {" · "}
                            <span className="text-[#0098F1]">
                              {projectName}
                            </span>
                          </>
                        )}
                      </p>
                    </div>
                  </div>

                  <p className="text-sm sm:text-base text-gray-800 mt-1">
                    {activity.content}
                  </p>

                  {activity.attachments?.length > 0 && (
                    <div className="flex flex-col gap-1 mt-2">
                      {activity.attachments.map((att, i) => (
                        <div
                          key={i}
                          className="flex items-center gap-2 text-sm text-[#0098F1]"
                        >
                          {att.kind === "image" && (
                            <MdOutlineCameraAlt className="w-4 h-4" />
                          )}
                          <span>{att.name}</span>
                          <MdOutlineFileDownload className="w-4 h-4" />
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

      {!loading && activities.length > 0 && (
        <div className="flex justify-center mt-6">
          <button
            onClick={() => setLimit((l) => Math.min(l + 50, 200))}
            className="px-4 py-2 bg-[#0098F1] text-white rounded-md hover:bg-[#007cc4]"
          >
            Load more
          </button>
        </div>
      )}
    </div>
  );
};

export default Activities;