// import React, { useState } from "react";
// import { FiLink } from "react-icons/fi";
// import { MdOutlineCameraAlt } from "react-icons/md";
// import { format } from "date-fns";
// import { MdOutlineFileDownload } from "react-icons/md";
// import { MdOutlineCancel } from "react-icons/md";

// const ProjectDetail = () => {
//   const ProjectDetailProgress = [
//     {
//       Progress: "40%",
//     },
//   ];
//   const TeamLeadDetail = [
//     {
//       img: "src/assets/project/projectDetails/download_3.png",
//       name: "Jessica Doe",
//       location: "Washington, d.c.",
//     },
//   ];
//   const AssignedTeam = [
//     {
//       image: "src/assets/project/projectDetails/download_2.png",
//       name: "Fidel Tonn",
//       mail: "info@spyd.com",
//       designation: "Project Lead",
//     },
//     {
//       image: "src/assets/project/projectDetails/download_1.png",
//       name: "M.Venu",
//       mail: "",
//       designation: "Designer, Blogger",
//     },
//     {
//       image: "src/assets/project/projectDetails/download_1.png",
//       name: "K.Pavan",
//       mail: "",
//       designation: "Designer, Blogger",
//     },
//     {
//       image: "src/assets/project/projectDetails/download_1.png",
//       name: "M.sai",
//       mail: "",
//       designation: "Designer, Blogger",
//     },
//   ];
//   const ProjectDetailData = [
//     {
//       Cost: "16,785",
//       Created: "14-July-2024",
//       Deadline: "24-Aug-2024",
//       Priority: "Highest-Priority",
//       Status: "Working",
//     },
//   ];
//   const ViewedTeamMembers = [
//     {
//       teamMembers: 4,
//       Team: "src/assets/project/projectDetails/download_3.png",
//     },
//   ];
//   const progressString = ProjectDetailProgress[0].Progress;
//   const percentage = progressString.endsWith("%")
//     ? parseInt(progressString, 10)
//     : 0;

//   const [textareaContent, setTextareaContent] = useState("");
//   const [uploadedFiles, setUploadedFiles] = useState([]);
//   const [uploadedImages, setUploadedImages] = useState([]);
//   const [messages, setMessages] = useState([]);

//   const fileInputRef = React.createRef();
//   const imageInputRef = React.createRef();

//   const handleFileUpload = (e) => {
//     const files = Array.from(e.target.files);
//     setUploadedFiles((prevFiles) => [...prevFiles, ...files]);
//   };

//   const handleImageUpload = (e) => {
//     const files = Array.from(e.target.files);
//     const imageFiles = files.filter((file) => file.type.startsWith("image/"));
//     setUploadedImages((prevImages) => [...prevImages, ...imageFiles]);
//   };

//   const handleTextareaChange = (e) => {
//     setTextareaContent(e.target.value);
//   };

//   const handleAddMessage = () => {
//     if (textareaContent.trim()) {
//       setMessages((prevMessages) => [
//         ...prevMessages,
//         {
//           content: textareaContent,
//           timestamp: new Date(),
//           images: uploadedImages,
//           files: uploadedFiles,
//         },
//       ]);
//       setTextareaContent("");
//       setUploadedFiles([]);
//       setUploadedImages([]);
//     }
//   };

//   const formatTimestamp = (timestamp) => {
//     return format(new Date(timestamp), "dd MMM yyyy HH:mm");
//   };

//   const getPriorityColor = (priority) => {
//     switch (priority) {
//       case "Low-Priority":
//         return "bg-blue-400";
//       case "Medium-Priority":
//         return "bg-orange-400";
//       case "Highest-Priority":
//         return "bg-red-600";
//       default:
//         return "";
//     }
//   };

//   const getStatusColor = (status) => {
//     switch (status) {
//       case "Completed":
//         return "bg-green-600";
//       case "Working":
//         return "bg-orange-400";
//       case "Not Started":
//         return "bg-red-600";
//       default:
//         return "";
//     }
//   };
//   const handleRemoveFile = (index) => {
//     setUploadedFiles((prevFiles) => prevFiles.filter((_, i) => i !== index));
//   };

//   const handleRemoveImage = (index) => {
//     setUploadedImages((prevImages) => prevImages.filter((_, i) => i !== index));
//   };

//   return (
//     <div className="w-auto mt-4 p-4">
//       <h2 className="text-[#0098f1] font-bold text-sm lg:text-lg mb-4">
//         Projects / Project Detail
//       </h2>
//       <div className="w-full flex flex-col md:flex-row gap-2">
//         <div className="w-full md:w-2/3 bg-[#0098f1] text-white p-6 flex flex-col">
//           <h3 className="text-xl font-semibold mb-7">
//             iNext - One Page Responsive Template
//           </h3>
//           <div className="mb-5 text-black">
//             A responsive page template is a web design framework that ensures a
//             website adapts seamlessly to different screen sizes and devices. It
//             includes a fluid grid layout, where elements are sized in
//             percentages instead of fixed units, allowing them to resize and
//             rearrange based on the screen width.
//           </div>
//           <div className="mb-5 font-semibold">Project Setup</div>
//           <div className="h-3 w-4/5 bg-[#FFFFFF] bg-opacity-35 rounded-md">
//             <div
//               className={`h-full bg-[#FFFFFF] rounded-full`}
//               style={{ width: `${percentage}%` }}
//             />
//           </div>
//         </div>
//         <div className="w-full md:w-2/3 px-7 py-5 bg-white shadow-xl rounded-md">
//           <h3 className="w-full text-lg font-semibold text-[#0098F1] mb-4">
//             Project Activity
//           </h3>
//           <textarea
//             className="border border-[#0098F1] rounded-lg w-full p-3 focus:outline-none mb-3"
//             placeholder="Type here......"
//             rows="6"
//             id="message"
//             value={textareaContent}
//             onChange={handleTextareaChange}
//           ></textarea>
//           <div className="flex flex-row gap-2">
//             <div
//               className="flex justify-center items-center text-2xl text-white w-[45px] rounded-md h-[35px] bg-[#0098F1] cursor-pointer"
//               onClick={() => imageInputRef.current.click()}
//             >
//               <MdOutlineCameraAlt />
//               <input
//                 type="file"
//                 className="hidden"
//                 ref={imageInputRef}
//                 onChange={handleImageUpload}
//                 multiple
//                 accept="image/*"
//               />
//             </div>
//             <div
//               className="flex justify-center items-center text-2xl text-white w-[45px] rounded-md h-[35px] bg-[#0098F1] cursor-pointer"
//               onClick={() => fileInputRef.current.click()}
//             >
//               <FiLink />
//               <input
//                 type="file"
//                 className="hidden"
//                 ref={fileInputRef}
//                 onChange={handleFileUpload}
//                 multiple
//               />
//             </div>
//             <div className="flex justify-center items-center text-lg text-white w-[70px] rounded-md h-[35px] bg-[#0098F1]">
//               <button onClick={handleAddMessage} className="w-full">
//                 Add
//               </button>
//             </div>
//           </div>
//           <div className="mt-4">
//             {uploadedImages.map((image, index) => (
//               <div key={index} className="flex items-center gap-2 mb-2">
//                 <span className="text-[#0098F1]">{image.name}</span>
//                 <button
//                   className="text-red-400 hover:text-red-500"
//                   onClick={() => handleRemoveImage(index)}
//                 >
//                   <MdOutlineCancel className="w-5 h-5" />
//                 </button>
//               </div>
//             ))}
//             {uploadedFiles.map((file, index) => (
//               <div key={index} className="flex items-center gap-2 mb-2">
//                 <span className="text-[#0098F1]">{file.name}</span>
//                 <button
//                   className="text-red-400 hover:text-red-500"
//                   onClick={() => handleRemoveFile(index)}
//                 >
//                   <MdOutlineCancel className="w-5 h-5" />
//                 </button>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//       <div className=" w-full flex md:flex-row flex-col-reverse gap-x-3 lg:text-[17px] text-[14px]">
//         <div className="w-full md:w-1/3">
//           <div className="w-full h-auto mt-2 bg-white rounded-md">
//             {ProjectDetailData.map((item, index) => {
//               return (
//                 <div
//                   className="w-full flex flex-col text-[#0098F1] font-medium lg:p-9 md:p-5 p-4 shadow-xl rounded-md"
//                   key={index}
//                 >
//                   <div className="mb-4 flex justify-between">
//                     <div>Cost:</div>
//                     <div className="bg-[#1D7616] text-white w-[70px] h-[25px] rounded-lg flex justify-center items-center">
//                       {item.Cost}
//                     </div>
//                   </div>
//                   <div className="mb-4 flex justify-between">
//                     <div>Created: </div>
//                     <div className="text-white bg-[#1D7616]  w-[110px] h-[25px] rounded-lg flex justify-center items-center">
//                       {item.Created}
//                     </div>
//                   </div>
//                   <div className="mb-4 flex justify-between">
//                     <div>Deadline: </div>
//                     <div className="text-white bg-[#1D7616] w-[110px] h-[25px] rounded-lg flex justify-center items-center">
//                       {item.Deadline}
//                     </div>
//                   </div>
//                   <div className="mb-4 flex justify-between">
//                     <div>Priority: </div>
//                     <div
//                       className={`${getPriorityColor(
//                         item.Priority
//                       )} text-white px-2 py-1 rounded-lg flex justify-center items-center`}
//                     >
//                       {item.Priority}
//                     </div>
//                   </div>
//                   <div className="mb-4 flex justify-between">
//                     <div>Status: </div>
//                     <div
//                       className={`${getStatusColor(
//                         item.Status
//                       )} text-white px-2 py-1 rounded-md`}
//                     >
//                       {item.Status}
//                     </div>
//                   </div>
//                 </div>
//               );
//             })}
//           </div>
//           <div className="w-full h-auto mt-4 bg-white rounded-md lg:p-6 md:p-3 shadow-xl">
//             <h3 className="text-[#0098f1] text-lg font-semibold">
//               Assigned Team
//             </h3>
//             <div>
//               {AssignedTeam.map((item, index) => {
//                 return (
//                   <div
//                     key={index}
//                     className="flex flex-row p-2 border-b border-[#0098F1] border-opacity-25"
//                   >
//                     <img src={item.image} alt="teamlead" />
//                     <div className="flex flex-col ml-4">
//                       <div className="text-black font-semibold">
//                         {item.name}
//                       </div>
//                       <div className="text-[#0098F1]">{item.mail}</div>
//                       <div className="text-[#000000] text-opacity-35 text-[15px]">
//                         {item.designation}
//                       </div>
//                     </div>
//                   </div>
//                 );
//               })}
//             </div>
//           </div>
//           <div className="w-full h-auto mt-4 bg-white rounded-md p-6 shadow-xl">
//             <h3 className="text-[#0098f1] text-center text-xl font-semibold">
//               About Clients
//             </h3>
//             <div>
//               {TeamLeadDetail.map((item, index) => {
//                 return (
//                   <div
//                     key={index}
//                     className="flex flex-col justify-center items-center p-2"
//                   >
//                     <img src={item.img} alt="teamlead" />
//                     <div className="flex flex-col justify-center items-center py-2">
//                       <div className="text-[#0098f1] font-semibold">
//                         {item.name}
//                       </div>
//                       <div className="text-[#000000] text-sm">
//                         {item.location}
//                       </div>
//                       <div className="gap-5 flex flex-row items-center justify-center mt-9">
//                         <button className="border-[#0098F1] bg-[#0098F1] border-2 border-opacity-50 text-white rounded-md w-24 h-8">
//                           Profile
//                         </button>
//                         <button className="border-[#0098F1] border-2 border-opacity-50 text-[#0098F1] w-24 h-8 bg-white rounded-md">
//                           Message
//                         </button>
//                       </div>
//                     </div>
//                   </div>
//                 );
//               })}
//             </div>
//           </div>
//         </div>
//         <div className="w-full md:w-3/4 bg-white h-auto md:h-auto mt-2 pt-4 pl-2 shadow-xl rounded-md overflow-y-auto">
//           <div className="relative ">
//             <div className="absolute left-5 top-1 h-full border-l-2 border-[#0098f1]"></div>
//             {messages
//               .sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp))
//               .map((message, index) => (
//                 <div className="relative flex items-start mb-8" key={index}>
//                   <div className="absolute left-5 top-1 h-full border-l-2 border-[#0098f1]"></div>
//                   <div className="flex items-start ml-8">
//                     <div className="w-3 h-3 bg-[#0098f1] rounded-full z-10 mt-1.5 pl-3 -ml-4"></div>
//                     <div className="grid ml-6 gap-2">
//                       <p className="text-sm text-gray-500">
//                         {formatTimestamp(message.timestamp)}
//                       </p>
//                       <p className="font-semibold">{message.content}</p>
//                       {ViewedTeamMembers.map((item, index) => (
//                         <div key={index} className="flex flex-row gap-3">
//                           <div className="font-semibold">Team:</div>
//                           <div className="flex flex-row">
//                             {Array.from({ length: item.teamMembers }).map(
//                               (_, memberIndex) => (
//                                 <img
//                                   key={memberIndex}
//                                   src={item.Team}
//                                   alt="Team Member"
//                                   className="w-6 h-6 rounded-full"
//                                 />
//                               )
//                             )}
//                           </div>
//                         </div>
//                       ))}
//                       {message.images.length > 0 && (
//                         <div className="flex gap-2 mt-2">
//                           {message.images.map((image, i) => (
//                             <div key={i} className="flex flex-row">
//                               <img
//                                 key={i}
//                                 src={URL.createObjectURL(image)}
//                                 alt="Uploaded"
//                                 className="w-24 h-24 object-cover rounded-md"
//                               />
//                               <a
//                                 href={URL.createObjectURL(image)}
//                                 download
//                                 className="text-[#0098f1] underline flex items-end"
//                               >
//                                 <MdOutlineFileDownload className="w-[21px] h-[21px] " />
//                               </a>
//                             </div>
//                           ))}
//                         </div>
//                       )}
//                       {message.files.length > 0 && (
//                         <div className="mt-2">
//                           {message.files.map((file, i) => (
//                             <div key={i} className="flex items-center gap-2">
//                               <span className="text-[#0098F1]">
//                                 {file.name}
//                               </span>
//                               <a
//                                 href={URL.createObjectURL(file)}
//                                 download
//                                 className="text-blue-500 underline flex items-end  "
//                               >
//                                 <MdOutlineFileDownload className="w-[21px] h-[21px]" />
//                               </a>
//                             </div>
//                           ))}
//                         </div>
//                       )}
//                     </div>
//                   </div>
//                 </div>
//               ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProjectDetail;





// // import React, { useEffect, useState } from "react";
// // import { useParams } from "react-router-dom";
// // import { toast } from "react-toastify";
// // import { FiLink } from "react-icons/fi";
// // import { MdOutlineCameraAlt, MdOutlineFileDownload, MdOutlineCancel } from "react-icons/md";
// // import { format } from "date-fns";
// // import dayjs from "dayjs";
// // import { projectsAPI } from "../../../services/api";

// // const AVATAR =
// //   "https://ui-avatars.com/api/?background=0098F1&color=fff&name=";

// // const getPriorityColor = (priority) => {
// //   const p = (priority || "").toLowerCase();
// //   if (p.includes("low")) return "bg-blue-400";
// //   if (p.includes("medium")) return "bg-orange-400";
// //   if (p.includes("high") || p.includes("urgent")) return "bg-red-600";
// //   return "bg-gray-400";
// // };

// // const getStatusColor = (status) => {
// //   const s = (status || "").toLowerCase();
// //   if (s === "active" || s === "completed") return "bg-green-600";
// //   if (s === "pending") return "bg-orange-400";
// //   if (s === "closed" || s === "inactive") return "bg-red-600";
// //   return "bg-gray-400";
// // };

// // const ProjectDetail = () => {
// //   const { id } = useParams();
// //   const [project, setProject] = useState(null);
// //   const [loading, setLoading] = useState(true);

// //   const [textareaContent, setTextareaContent] = useState("");
// //   const [uploadedFiles, setUploadedFiles] = useState([]);
// //   const [uploadedImages, setUploadedImages] = useState([]);
// //   const [messages, setMessages] = useState([]);

// //   const fileInputRef = React.createRef();
// //   const imageInputRef = React.createRef();

// //   useEffect(() => {
// //     if (!id) return;
// //     let cancelled = false;
// //     (async () => {
// //       setLoading(true);
// //       try {
// //         const res = await projectsAPI.getById(id);
// //         if (!cancelled) setProject(res.data);
// //       } catch (err) {
// //         console.error("Load project failed:", err);
// //         toast.error(err?.response?.data?.detail || "Failed to load project");
// //       } finally {
// //         if (!cancelled) setLoading(false);
// //       }
// //     })();
// //     return () => {
// //       cancelled = true;
// //     };
// //   }, [id]);

// //   const handleFileUpload = (e) => {
// //     const files = Array.from(e.target.files);
// //     setUploadedFiles((prev) => [...prev, ...files]);
// //   };

// //   const handleImageUpload = (e) => {
// //     const files = Array.from(e.target.files);
// //     const images = files.filter((f) => f.type.startsWith("image/"));
// //     setUploadedImages((prev) => [...prev, ...images]);
// //   };

// //   const handleAddMessage = () => {
// //     if (textareaContent.trim()) {
// //       setMessages((prev) => [
// //         ...prev,
// //         {
// //           content: textareaContent,
// //           timestamp: new Date(),
// //           images: uploadedImages,
// //           files: uploadedFiles,
// //         },
// //       ]);
// //       setTextareaContent("");
// //       setUploadedFiles([]);
// //       setUploadedImages([]);
// //     }
// //   };

// //   const handleRemoveFile = (i) =>
// //     setUploadedFiles((prev) => prev.filter((_, idx) => idx !== i));
// //   const handleRemoveImage = (i) =>
// //     setUploadedImages((prev) => prev.filter((_, idx) => idx !== i));

// //   const formatTimestamp = (ts) => format(new Date(ts), "dd MMM yyyy HH:mm");

// //   if (loading) {
// //     return (
// //       <div className="p-4 mt-4 min-h-screen text-center text-gray-500">
// //         Loading project...
// //       </div>
// //     );
// //   }

// //   if (!project) {
// //     return (
// //       <div className="p-4 mt-4 min-h-screen text-center text-gray-500">
// //         Project not found.
// //       </div>
// //     );
// //   }

// //   const progress = (() => {
// //     if (!project.startDate || !project.endDate) return 0;
// //     const s = new Date(project.startDate).getTime();
// //     const e = new Date(project.endDate).getTime();
// //     if (!Number.isFinite(s) || !Number.isFinite(e) || e <= s) return 0;
// //     const pct = ((Date.now() - s) / (e - s)) * 100;
// //     return Math.max(0, Math.min(100, Math.round(pct)));
// //   })();

// //   const leadName = project.teamLead?.name || "Unassigned";
// //   const leadImg =
// //     project.teamLead?.profileImage ||
// //     `${AVATAR}${encodeURIComponent(leadName)}`;

// //   return (
// //     <div className="w-auto mt-4 p-4">
// //       <h2 className="text-[#0098f1] font-bold text-sm lg:text-lg mb-4">
// //         Projects / Project Detail
// //       </h2>

// //       <div className="w-full flex flex-col md:flex-row gap-2">
// //         {/* Left: project info */}
// //         <div className="w-full md:w-2/3 bg-[#0098f1] text-white p-6 flex flex-col">
// //           <h3 className="text-xl font-semibold mb-7">
// //             {project.projectName || project.project_name}
// //           </h3>
// //           <div className="mb-5 text-white text-opacity-90">
// //             {project.description || "No description provided."}
// //           </div>
// //           <div className="mb-5 font-semibold">Project Progress</div>
// //           <div className="h-3 w-4/5 bg-[#FFFFFF] bg-opacity-35 rounded-md">
// //             <div
// //               className="h-full bg-[#FFFFFF] rounded-full"
// //               style={{ width: `${progress}%` }}
// //             />
// //           </div>
// //           <div className="text-sm mt-2">{progress}% complete</div>
// //         </div>

// //         {/* Middle: activity feed */}
// //         <div className="w-full md:w-2/3 px-7 py-5 bg-white shadow-xl rounded-md">
// //           <h3 className="w-full text-lg font-semibold text-[#0098F1] mb-4">
// //             Project Activity
// //           </h3>
// //           <textarea
// //             className="border border-[#0098F1] rounded-lg w-full p-3 focus:outline-none mb-3"
// //             placeholder="Type here......"
// //             rows="6"
// //             value={textareaContent}
// //             onChange={(e) => setTextareaContent(e.target.value)}
// //           ></textarea>
// //           <div className="flex flex-row gap-2">
// //             <div
// //               className="flex justify-center items-center text-2xl text-white w-[45px] rounded-md h-[35px] bg-[#0098F1] cursor-pointer"
// //               onClick={() => imageInputRef.current?.click()}
// //             >
// //               <MdOutlineCameraAlt />
// //               <input
// //                 type="file"
// //                 className="hidden"
// //                 ref={imageInputRef}
// //                 onChange={handleImageUpload}
// //                 multiple
// //                 accept="image/*"
// //               />
// //             </div>
// //             <div
// //               className="flex justify-center items-center text-2xl text-white w-[45px] rounded-md h-[35px] bg-[#0098F1] cursor-pointer"
// //               onClick={() => fileInputRef.current?.click()}
// //             >
// //               <FiLink />
// //               <input
// //                 type="file"
// //                 className="hidden"
// //                 ref={fileInputRef}
// //                 onChange={handleFileUpload}
// //                 multiple
// //               />
// //             </div>
// //             <div className="flex justify-center items-center text-lg text-white w-[70px] rounded-md h-[35px] bg-[#0098F1]">
// //               <button onClick={handleAddMessage} className="w-full">
// //                 Add
// //               </button>
// //             </div>
// //           </div>
// //           <div className="mt-4">
// //             {uploadedImages.map((img, i) => (
// //               <div key={i} className="flex items-center gap-2 mb-2">
// //                 <span className="text-[#0098F1]">{img.name}</span>
// //                 <button
// //                   className="text-red-400 hover:text-red-500"
// //                   onClick={() => handleRemoveImage(i)}
// //                 >
// //                   <MdOutlineCancel className="w-5 h-5" />
// //                 </button>
// //               </div>
// //             ))}
// //             {uploadedFiles.map((f, i) => (
// //               <div key={i} className="flex items-center gap-2 mb-2">
// //                 <span className="text-[#0098F1]">{f.name}</span>
// //                 <button
// //                   className="text-red-400 hover:text-red-500"
// //                   onClick={() => handleRemoveFile(i)}
// //                 >
// //                   <MdOutlineCancel className="w-5 h-5" />
// //                 </button>
// //               </div>
// //             ))}
// //           </div>
// //         </div>
// //       </div>

// //       <div className="w-full flex md:flex-row flex-col-reverse gap-x-3 lg:text-[17px] text-[14px]">
// //         {/* Sidebar */}
// //         <div className="w-full md:w-1/3">
// //           {/* Project details card */}
// //           <div className="w-full h-auto mt-2 bg-white rounded-md">
// //             <div className="w-full flex flex-col text-[#0098F1] font-medium lg:p-9 md:p-5 p-4 shadow-xl rounded-md">
// //               <div className="mb-4 flex justify-between">
// //                 <div>Cost:</div>
// //                 <div className="bg-[#1D7616] text-white w-[70px] h-[25px] rounded-lg flex justify-center items-center">
// //                   {project.rate ? `₹${project.rate}` : "—"}
// //                 </div>
// //               </div>
// //               <div className="mb-4 flex justify-between">
// //                 <div>Created:</div>
// //                 <div className="text-white bg-[#1D7616] w-[110px] h-[25px] rounded-lg flex justify-center items-center">
// //                   {project.createdAt
// //                     ? dayjs(project.createdAt).format("DD-MMM-YYYY")
// //                     : "—"}
// //                 </div>
// //               </div>
// //               <div className="mb-4 flex justify-between">
// //                 <div>Deadline:</div>
// //                 <div className="text-white bg-[#1D7616] w-[110px] h-[25px] rounded-lg flex justify-center items-center">
// //                   {project.endDate
// //                     ? dayjs(project.endDate).format("DD-MMM-YYYY")
// //                     : "—"}
// //                 </div>
// //               </div>
// //               <div className="mb-4 flex justify-between">
// //                 <div>Priority:</div>
// //                 <div
// //                   className={`${getPriorityColor(
// //                     project.projectPriority
// //                   )} text-white px-2 py-1 rounded-lg flex justify-center items-center`}
// //                 >
// //                   {project.projectPriority || "—"}
// //                 </div>
// //               </div>
// //               <div className="mb-4 flex justify-between">
// //                 <div>Status:</div>
// //                 <div
// //                   className={`${getStatusColor(
// //                     project.status
// //                   )} text-white px-2 py-1 rounded-md`}
// //                 >
// //                   {project.status || "—"}
// //                 </div>
// //               </div>
// //             </div>
// //           </div>

// //           {/* Team lead */}
// //           <div className="w-full h-auto mt-4 bg-white rounded-md lg:p-6 md:p-3 p-4 shadow-xl">
// //             <h3 className="text-[#0098f1] text-lg font-semibold mb-2">
// //               Team Lead
// //             </h3>
// //             <div className="flex flex-row p-2">
// //               <img
// //                 src={leadImg}
// //                 alt={leadName}
// //                 className="w-12 h-12 rounded-full object-cover"
// //               />
// //               <div className="flex flex-col ml-4">
// //                 <div className="text-black font-semibold">{leadName}</div>
// //                 <div className="text-[#0098F1]">
// //                   {project.teamLead?.email || "—"}
// //                 </div>
// //                 <div className="text-gray-400 text-[15px]">
// //                   {project.teamLead?.designation || "Team Lead"}
// //                 </div>
// //               </div>
// //             </div>
// //           </div>

// //           {/* Client */}
// //           <div className="w-full h-auto mt-4 bg-white rounded-md p-6 shadow-xl">
// //             <h3 className="text-[#0098f1] text-center text-xl font-semibold mb-2">
// //               About Client
// //             </h3>
// //             <div className="flex flex-col items-center">
// //               <img
// //                 src={`${AVATAR}${encodeURIComponent(
// //                   project.client?.name || "Client"
// //                 )}`}
// //                 alt={project.client?.name || "Client"}
// //                 className="w-20 h-20 rounded-full object-cover"
// //               />
// //               <div className="text-[#0098f1] font-semibold py-2">
// //                 {project.client?.name || "No client"}
// //               </div>
// //               <div className="text-gray-500 text-sm">
// //                 {project.client?.email || "—"}
// //               </div>
// //             </div>
// //           </div>

// //           {/* Team */}
// //           <div className="w-full h-auto mt-4 bg-white rounded-md p-6 shadow-xl">
// //             <h3 className="text-[#0098f1] text-lg font-semibold mb-2">
// //               Assigned Team
// //             </h3>
// //             <div className="text-black font-medium">
// //               {project.team?.teamName || project.team?.team_name || "—"}
// //             </div>
// //           </div>
// //         </div>

// //         {/* Activity timeline */}
// //         <div className="w-full md:w-3/4 bg-white h-auto mt-2 pt-4 pl-2 shadow-xl rounded-md overflow-y-auto">
// //           <div className="relative">
// //             {messages
// //               .sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp))
// //               .map((message, index) => (
// //                 <div className="relative flex items-start mb-8" key={index}>
// //                   <div className="absolute left-5 top-1 h-full border-l-2 border-[#0098f1]"></div>
// //                   <div className="flex items-start ml-8">
// //                     <div className="w-3 h-3 bg-[#0098f1] rounded-full z-10 mt-1.5 -ml-4"></div>
// //                     <div className="grid ml-6 gap-2">
// //                       <p className="text-sm text-gray-500">
// //                         {formatTimestamp(message.timestamp)}
// //                       </p>
// //                       <p className="font-semibold">{message.content}</p>
// //                       {message.images.length > 0 && (
// //                         <div className="flex gap-2 mt-2">
// //                           {message.images.map((img, i) => (
// //                             <div key={i} className="flex flex-row">
// //                               <img
// //                                 src={URL.createObjectURL(img)}
// //                                 alt="Uploaded"
// //                                 className="w-24 h-24 object-cover rounded-md"
// //                               />
// //                               <a
// //                                 href={URL.createObjectURL(img)}
// //                                 download
// //                                 className="text-[#0098f1] flex items-end ml-1"
// //                               >
// //                                 <MdOutlineFileDownload className="w-5 h-5" />
// //                               </a>
// //                             </div>
// //                           ))}
// //                         </div>
// //                       )}
// //                       {message.files.length > 0 && (
// //                         <div className="mt-2">
// //                           {message.files.map((file, i) => (
// //                             <div
// //                               key={i}
// //                               className="flex items-center gap-2"
// //                             >
// //                               <span className="text-[#0098F1]">
// //                                 {file.name}
// //                               </span>
// //                               <a
// //                                 href={URL.createObjectURL(file)}
// //                                 download
// //                                 className="text-blue-500"
// //                               >
// //                                 <MdOutlineFileDownload className="w-5 h-5" />
// //                               </a>
// //                             </div>
// //                           ))}
// //                         </div>
// //                       )}
// //                     </div>
// //                   </div>
// //                 </div>
// //               ))}
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default ProjectDetail;




import React, { useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { FiLink, FiPlus } from "react-icons/fi";
import {
  MdOutlineCameraAlt,
  MdOutlineFileDownload,
  MdOutlineCancel,
} from "react-icons/md";
import dayjs from "dayjs";
import {
  projectsAPI,
  projectActivitiesAPI,
} from "../../../services/api";

const AVATAR =
  "https://ui-avatars.com/api/?background=0098F1&color=fff&name=";

const getPriorityColor = (priority) => {
  const p = (priority || "").toLowerCase();
  if (p.includes("low")) return "bg-blue-400";
  if (p.includes("medium")) return "bg-orange-400";
  if (p.includes("high") || p.includes("urgent")) return "bg-red-600";
  return "bg-gray-400";
};

const getStatusColor = (status) => {
  const s = (status || "").toLowerCase();
  if (s === "active" || s === "completed") return "bg-green-600";
  if (s === "pending") return "bg-orange-400";
  if (s === "closed" || s === "inactive") return "bg-red-600";
  return "bg-gray-400";
};

const ProjectDetail = ({ projectId }) => {
  const { id: paramId } = useParams();
  const id =
    projectId || paramId || localStorage.getItem("HR_SELECTED_PROJECT_ID");

  const [project, setProject] = useState(null);
  const [members, setMembers] = useState([]);
  const [activities, setActivities] = useState([]);
  const [loading, setLoading] = useState(true);

  // Add-activity modal
  const [showActivityModal, setShowActivityModal] = useState(false);
  const [posting, setPosting] = useState(false);
  const [textareaContent, setTextareaContent] = useState("");
  const [progressValue, setProgressValue] = useState(0);
  const [alsoUpdateProgress, setAlsoUpdateProgress] = useState(false);
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [uploadedImages, setUploadedImages] = useState([]);

  const fileInputRef = useRef(null);
  const imageInputRef = useRef(null);

  const loadProject = async () => {
    if (!id) return;
    setLoading(true);
    try {
      const [projRes, actRes, memRes] = await Promise.all([
        projectsAPI.getById(id),
        projectActivitiesAPI.list(id),
        projectActivitiesAPI.members(id),
      ]);
      setProject(projRes.data);
      setProgressValue(projRes.data?.progress || 0);
      setActivities(Array.isArray(actRes.data) ? actRes.data : []);
      setMembers(Array.isArray(memRes.data?.members) ? memRes.data.members : []);
    } catch (err) {
      console.error("Load project failed:", err);
      toast.error(err?.response?.data?.detail || "Failed to load project");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadProject();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  const openActivityModal = () => {
    setTextareaContent("");
    setUploadedFiles([]);
    setUploadedImages([]);
    setProgressValue(project?.progress || 0);
    setAlsoUpdateProgress(false);
    setShowActivityModal(true);
  };

  const closeActivityModal = () => {
    setShowActivityModal(false);
    setTextareaContent("");
    setUploadedFiles([]);
    setUploadedImages([]);
    setAlsoUpdateProgress(false);
  };

  const handleFileUpload = (e) => {
    setUploadedFiles((prev) => [...prev, ...Array.from(e.target.files)]);
  };
  const handleImageUpload = (e) => {
    const imgs = Array.from(e.target.files).filter((f) =>
      f.type.startsWith("image/")
    );
    setUploadedImages((prev) => [...prev, ...imgs]);
  };
  const handleRemoveFile = (i) =>
    setUploadedFiles((prev) => prev.filter((_, idx) => idx !== i));
  const handleRemoveImage = (i) =>
    setUploadedImages((prev) => prev.filter((_, idx) => idx !== i));

  const handlePostActivity = async () => {
    if (!textareaContent.trim()) {
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
      content: textareaContent.trim(),
      activityType: "message",
      attachments,
    };
    if (alsoUpdateProgress) {
      payload.progress = Number(progressValue);
    }

    setPosting(true);
    try {
      await projectActivitiesAPI.create(id, payload);
      toast.success(
        alsoUpdateProgress
          ? `Activity posted & progress updated to ${progressValue}%`
          : "Activity posted — visible to all team members"
      );
      closeActivityModal();
      await loadProject();
    } catch (err) {
      console.error("Post activity failed:", err);
      toast.error(err?.response?.data?.detail || "Failed to post activity");
    } finally {
      setPosting(false);
    }
  };

  if (!id) {
    return (
      <div className="p-4 mt-4 min-h-screen text-center text-gray-500">
        Please open a project from the <b>Project List</b> page.
      </div>
    );
  }
  if (loading) {
    return (
      <div className="p-4 mt-4 min-h-screen text-center text-gray-500">
        Loading project...
      </div>
    );
  }
  if (!project) {
    return (
      <div className="p-4 mt-4 min-h-screen text-center text-gray-500">
        Project not found.
      </div>
    );
  }

  const progress = Number(project.progress ?? 0);
  const leadName = project.teamLead?.name || "Unassigned";
  const leadImg =
    project.teamLead?.profileImage ||
    `${AVATAR}${encodeURIComponent(leadName)}`;

  return (
    <div className="w-auto mt-4 p-4">
      <div className="flex justify-between items-start mb-4 gap-3 flex-wrap">
        <h2 className="text-[#0098f1] font-bold text-sm lg:text-lg">
          Projects / Project Detail
        </h2>
        <button
          onClick={openActivityModal}
          className="flex items-center gap-2 bg-[#0098F1] text-white px-4 py-2 rounded-md hover:bg-[#007cc4] shadow"
        >
          <FiPlus className="text-lg" />
          Add Activity
        </button>
      </div>

      <div className="w-full flex flex-col md:flex-row gap-2">
        <div className="w-full md:w-2/3 bg-[#0098f1] text-white p-6 flex flex-col">
          <h3 className="text-xl font-semibold mb-7">
            {project.projectName || project.project_name}
          </h3>
          <div className="mb-5 text-white text-opacity-90">
            {project.description || "No description provided."}
          </div>
          <div className="mb-2 font-semibold">
            Project Progress — {progress}%
          </div>
          <div className="h-3 w-4/5 bg-white bg-opacity-35 rounded-md">
            <div
              className="h-full bg-white rounded-full transition-all duration-500"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        <div className="w-full md:w-2/3 px-7 py-5 bg-white shadow-xl rounded-md">
          <h3 className="w-full text-lg font-semibold text-[#0098F1] mb-4">
            Quick Actions
          </h3>
          <p className="text-gray-600 text-sm mb-4">
            Post an update to the project feed. Team members will see it
            immediately.
          </p>
          <button
            onClick={openActivityModal}
            className="w-full flex items-center justify-center gap-2 bg-[#0098F1] text-white py-2 rounded-md hover:bg-[#007cc4]"
          >
            <FiPlus />
            Add Activity
          </button>
        </div>
      </div>

      <div className="w-full flex md:flex-row flex-col-reverse gap-x-3 lg:text-[17px] text-[14px]">
        <div className="w-full md:w-1/3">
          <div className="w-full h-auto mt-2 bg-white rounded-md">
            <div className="w-full flex flex-col text-[#0098F1] font-medium lg:p-9 md:p-5 p-4 shadow-xl rounded-md">
              <div className="mb-4 flex justify-between">
                <div>Cost:</div>
                <div className="bg-[#1D7616] text-white w-[90px] h-[25px] rounded-lg flex justify-center items-center">
                  {project.rate ? `₹${project.rate}` : "—"}
                </div>
              </div>
              <div className="mb-4 flex justify-between">
                <div>Created:</div>
                <div className="text-white bg-[#1D7616] w-[110px] h-[25px] rounded-lg flex justify-center items-center">
                  {project.createdAt
                    ? dayjs(project.createdAt).format("DD-MMM-YYYY")
                    : "—"}
                </div>
              </div>
              <div className="mb-4 flex justify-between">
                <div>Deadline:</div>
                <div className="text-white bg-[#1D7616] w-[110px] h-[25px] rounded-lg flex justify-center items-center">
                  {project.endDate
                    ? dayjs(project.endDate).format("DD-MMM-YYYY")
                    : "—"}
                </div>
              </div>
              <div className="mb-4 flex justify-between">
                <div>Priority:</div>
                <div
                  className={`${getPriorityColor(
                    project.projectPriority
                  )} text-white px-2 py-1 rounded-lg flex justify-center items-center`}
                >
                  {project.projectPriority || "—"}
                </div>
              </div>
              <div className="mb-4 flex justify-between">
                <div>Progress:</div>
                <div className="bg-[#0098F1] text-white px-3 py-1 rounded-md font-bold">
                  {progress}%
                </div>
              </div>
              <div className="mb-4 flex justify-between">
                <div>Status:</div>
                <div
                  className={`${getStatusColor(
                    project.status
                  )} text-white px-2 py-1 rounded-md`}
                >
                  {project.status || "—"}
                </div>
              </div>
            </div>
          </div>

          <div className="w-full h-auto mt-4 bg-white rounded-md lg:p-6 md:p-3 p-4 shadow-xl">
            <h3 className="text-[#0098f1] text-lg font-semibold mb-2">
              Team Lead
            </h3>
            <div className="flex flex-row p-2">
              <img
                src={leadImg}
                alt={leadName}
                className="w-12 h-12 rounded-full object-cover"
              />
              <div className="flex flex-col ml-4">
                <div className="text-black font-semibold">{leadName}</div>
                <div className="text-[#0098F1]">
                  {project.teamLead?.email || "—"}
                </div>
                <div className="text-gray-400 text-[15px]">
                  {project.teamLead?.designation || "Team Lead"}
                </div>
              </div>
            </div>
          </div>

          <div className="w-full h-auto mt-4 bg-white rounded-md p-6 shadow-xl">
            <h3 className="text-[#0098f1] text-lg font-semibold mb-3">
              Assigned Team ({members.length})
            </h3>
            {members.length === 0 && (
              <div className="text-gray-500 text-sm">
                No team members assigned yet.
              </div>
            )}
            {members.map((m) => (
              <div
                key={m.id}
                className="flex flex-row p-2 border-b border-[#0098F1] border-opacity-25 last:border-b-0"
              >
                <img
                  src={
                    m.profileImage ||
                    `${AVATAR}${encodeURIComponent(m.name)}`
                  }
                  alt={m.name}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div className="flex flex-col ml-4">
                  <div className="text-black font-semibold">{m.name}</div>
                  <div className="text-[#0098F1] text-sm">{m.email}</div>
                  <div className="text-gray-400 text-xs">
                    {m.designation || m.role}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="w-full h-auto mt-4 bg-white rounded-md p-6 shadow-xl">
            <h3 className="text-[#0098f1] text-center text-xl font-semibold mb-2">
              About Client
            </h3>
            <div className="flex flex-col items-center">
              <img
                src={`${AVATAR}${encodeURIComponent(
                  project.client?.name || "Client"
                )}`}
                alt={project.client?.name || "Client"}
                className="w-20 h-20 rounded-full object-cover"
              />
              <div className="text-[#0098f1] font-semibold py-2">
                {project.client?.name || "No client"}
              </div>
              <div className="text-gray-500 text-sm">
                {project.client?.email || "—"}
              </div>
            </div>
          </div>
        </div>

        <div className="w-full md:w-3/4 bg-white h-auto mt-2 pt-4 pl-2 shadow-xl rounded-md overflow-y-auto">
          <div className="relative min-h-[200px]">
            {activities.length === 0 && (
              <div className="text-center text-gray-500 py-10">
                No activity yet. Click "Add Activity" to post the first
                update.
              </div>
            )}
            {activities.map((activity) => {
              const authorName = activity.user?.name || "Unknown";
              const authorImg =
                activity.user?.profileImage ||
                `${AVATAR}${encodeURIComponent(authorName)}`;
              return (
                <div
                  className="relative flex items-start mb-8"
                  key={activity.id}
                >
                  <div className="absolute left-5 top-1 h-full border-l-2 border-[#0098f1]"></div>
                  <div className="flex items-start ml-8">
                    <div className="w-3 h-3 bg-[#0098f1] rounded-full z-10 mt-1.5 -ml-4"></div>
                    <div className="grid ml-6 gap-2">
                      <div className="flex items-center gap-2">
                        <img
                          src={authorImg}
                          alt={authorName}
                          className="w-8 h-8 rounded-full object-cover"
                        />
                        <div>
                          <div className="font-semibold text-black">
                            {authorName}
                          </div>
                          <p className="text-sm text-gray-500">
                            {dayjs(activity.createdAt).format(
                              "DD MMM YYYY HH:mm"
                            )}
                          </p>
                        </div>
                      </div>
                      <p className="font-medium mt-1">
                        {activity.content}
                      </p>
                      {activity.attachments?.length > 0 && (
                        <div className="mt-2">
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
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Add Activity Modal */}
      {showActivityModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-lg shadow-2xl max-h-[90vh] overflow-y-auto">
            <h3 className="text-xl font-bold text-[#0098F1] mb-4">
              Add Activity
            </h3>

            <textarea
              className="border border-[#0098F1] rounded-lg w-full p-3 focus:outline-none mb-3"
              placeholder="What's happening on this project?"
              rows="5"
              value={textareaContent}
              onChange={(e) => setTextareaContent(e.target.value)}
            ></textarea>

            <div className="flex flex-row gap-2 mb-3">
              <div
                className="flex justify-center items-center text-2xl text-white w-[45px] rounded-md h-[35px] bg-[#0098F1] cursor-pointer"
                onClick={() => imageInputRef.current?.click()}
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
                    <span className="text-sm text-[#0098F1]">
                      {img.name}
                    </span>
                    <button
                      className="text-red-500"
                      onClick={() => handleRemoveImage(i)}
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
                    <span className="text-sm text-[#0098F1]">
                      {f.name}
                    </span>
                    <button
                      className="text-red-500"
                      onClick={() => handleRemoveFile(i)}
                    >
                      <MdOutlineCancel className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
            )}

            {/* Progress toggle */}
            <div className="border-t pt-3 mt-3">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={alsoUpdateProgress}
                  onChange={(e) =>
                    setAlsoUpdateProgress(e.target.checked)
                  }
                />
                <span className="text-sm font-medium text-gray-700">
                  Also update project progress
                </span>
              </label>

              {alsoUpdateProgress && (
                <div className="mt-3">
                  <div className="flex justify-between mb-1">
                    <span className="text-sm text-gray-600">
                      Progress
                    </span>
                    <span className="text-sm font-bold text-[#0098F1]">
                      {progressValue}%
                    </span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="100"
                    step="5"
                    value={progressValue}
                    onChange={(e) =>
                      setProgressValue(Number(e.target.value))
                    }
                    className="w-full accent-[#0098F1]"
                  />
                  <div className="mt-2 flex gap-2 flex-wrap">
                    {[0, 25, 50, 75, 100].map((p) => (
                      <button
                        key={p}
                        type="button"
                        onClick={() => setProgressValue(p)}
                        className={`px-3 py-1 text-xs rounded border ${
                          progressValue === p
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
                onClick={closeActivityModal}
                className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300"
              >
                Cancel
              </button>
              <button
                onClick={handlePostActivity}
                disabled={posting}
                className={`px-4 py-2 text-white rounded-md ${
                  posting
                    ? "bg-gray-400"
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

export default ProjectDetail;