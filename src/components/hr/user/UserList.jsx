// import React, { useState, useEffect } from "react";
// import { FaPlusCircle } from "react-icons/fa";
// import { RiDeleteBin6Line } from "react-icons/ri";
// import { FiEdit } from "react-icons/fi";
// import { IoMdCheckmarkCircleOutline } from "react-icons/io";
// import { MdCheck } from "react-icons/md";

// const initialUserData = [
//   {
//     id: 1,
//     name: "Marshall Nichols",
//     email: "marshall@gmail.com",
//     status: "Super Admin",
//     createdDate: "24 Jun, 2015",
//     role: "CEO and Founder",
//   },
//   {
//     id: 2,
//     name: "John Doe",
//     email: "john.doe@example.com",
//     status: "User",
//     createdDate: "10 Aug, 2020",
//     role: "Team Lead",
//   },
//   {
//     id: 3,
//     name: "Jane Smith",
//     email: "jane.smith@example.com",
//     status: "Admin",
//     createdDate: "15 Feb, 2018",
//     role: "Team Lead",
//   },
//   {
//     id: 4,
//     name: "Emily Brown",
//     email: "emily.brown@gmail.com",
//     status: "User",
//     createdDate: "05 May, 2019",
//     role: "Web Developer",
//   },
//   {
//     id: 5,
//     name: "Michael Johnson",
//     email: "michael.johnson@example.com",
//     status: "Super Admin",
//     createdDate: "30 Nov, 2017",
//     role: "HR",
//   },
// ];

// const UserList = () => {
//   // State variables
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [userdata, setUserdata] = useState([]);
//   const [newUser, setNewUser] = useState({
//     firstname: "",
//     lastname: "",
//     email: "",
//     role: "",
//     status: "", // Added status field
//     username: "",
//     password: "",
//     confirmPassword: "",
//   });
//   const [showSuccessMessage, setShowSuccessMessage] = useState(false);
//   const [showDeleteSuccessMessage, setShowDeleteSuccessMessage] =
//     useState(false);
//   const [editUserId, setEditUserId] = useState(null);

//   useEffect(() => {
//     const storedUserData = JSON.parse(localStorage.getItem("userdata"));
//     if (storedUserData) {
//       setUserdata(storedUserData);
//     } else {
//       setUserdata(initialUserData); // Ensure initialUserData is used here
//     }
//   }, []);

//   // Save userdata to local storage
//   const saveUserDataToLocalStorage = (data) => {
//     localStorage.setItem("userdata", JSON.stringify(data)); // Change key to 'userdata'
//   };

//   // Close modal and reset form
//   const closeModal = () => {
//     setIsModalOpen(false);
//     setEditUserId(null);
//     setNewUser({
//       firstname: "",
//       lastname: "",
//       email: "",
//       role: "",
//       status: "", // Reset status field
//       username: "",
//       password: "",
//       confirmPassword: "",
//     });
//   };

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setNewUser((prevUser) => ({
//       ...prevUser,
//       [name]: value,
//     }));
//   };

//   const handleAddUser = () => {
//     let formattedDate = new Date().toLocaleDateString("en-GB", {
//       day: "numeric",
//       month: "short",
//       year: "numeric",
//     });

//     if (editUserId !== null) {
//       // Update existing user
//       const updatedUsers = userdata.map((user) => {
//         if (user.id === editUserId) {
//           return {
//             ...user,
//             name: newUser.firstname + " " + newUser.lastname,
//             email: newUser.email,
//             status: newUser.status,
//             createdDate: formattedDate,
//             role: newUser.role,
//           };
//         }
//         return user;
//       });
//       setUserdata(updatedUsers);
//       saveUserDataToLocalStorage(updatedUsers);
//       setShowSuccessMessage(true);
//     } else {
//       // Add new user
//       const newUserObject = {
//         id:
//           userdata.length > 0
//             ? Math.max(...userdata.map((user) => user.id)) + 1
//             : 1,
//         name: newUser.firstname + " " + newUser.lastname,
//         email: newUser.email,
//         status: newUser.status,
//         createdDate: formattedDate,
//         role: newUser.role,
//       };
//       setUserdata([...userdata, newUserObject]);
//       saveUserDataToLocalStorage([...userdata, newUserObject]);
//       setShowSuccessMessage(true);
//     }

//     setTimeout(() => {
//       setShowSuccessMessage(false);
//     }, 3000);

//     closeModal();
//   };

//   const openEditModal = (userId) => {
//     const userToEdit = userdata.find((user) => user.id === userId);
//     setEditUserId(userId);
//     const nameParts = userToEdit.name.split(" ");
//     let formattedDate = new Date(userToEdit.createdDate).toLocaleDateString(
//       "en-GB",
//       {
//         day: "numeric",
//         month: "short",
//         year: "numeric",
//       }
//     );

//     setNewUser({
//       firstname: nameParts[0],
//       lastname: nameParts[1] ? nameParts[1] : "",
//       email: userToEdit.email,
//       role: userToEdit.role,
//       status: userToEdit.status,
//       username: "",
//       password: "",
//       confirmPassword: "",
//       createdDate: formattedDate, // Set formatted date here
//     });
//     setIsModalOpen(true);
//   };

//   const handleDeleteUser = (userId) => {
//     const updatedUsers = userdata.filter((user) => user.id !== userId);
//     setUserdata(updatedUsers);
//     saveUserDataToLocalStorage(updatedUsers);
//     setShowDeleteSuccessMessage(true);

//     setTimeout(() => {
//       setShowDeleteSuccessMessage(false);
//     }, 3000);
//   };

//   const [selectedRoles, setSelectedRoles] = useState({
//     "Super Admin": {
//       read: false,
//       write: false,
//       delete: false,
//     },
//     Admin: {
//       read: false,
//       write: false,
//       delete: false,
//     },
//     "HR Admin": {
//       read: false,
//       write: false,
//       delete: false,
//     },
//     "HR Employee": {
//       read: false,
//       write: false,
//       delete: false,
//     },
//   });

//   const toggleSelection = (role, action) => {
//     setSelectedRoles((prevState) => ({
//       ...prevState,
//       [role]: {
//         ...prevState[role],
//         [action]: !prevState[role][action],
//       },
//     }));
//   };

//   return (
//     <div className="p-5 flex flex-col h-screen">
//       <h1 className="text-xl text-[#0098F1] font-bold mb-4">Clients</h1>

//       <div className="flex justify-end mb-4">
//         <button
//           className="bg-[#0098F1] text-white flex items-center rounded-lg md:px-6 md:py-3 max-md:p-1"
//           onClick={() => setIsModalOpen(true)}
//         >
//           <FaPlusCircle className="text-white md:text-xl mr-2" />
//           <span className="text-white font-medium md:text-lg md:mr-2">
//             Add New User
//           </span>
//         </button>
//       </div>

//       <div className="  overflow-x-scroll scrollbar-thin   scrollbar-track-white scrollbar-thumb-[#0098f1] md:pt-4 md:mx-4">
//         <table className="min-w-full w-screen overflow-x-scroll  text-nowrap">
//           <thead className="bg-[#0098F1] text-white">
//             <tr className="text-left">
//               <th className="md:text-lg py-2 md:px-4"></th>
//               <th className="md:text-lg text-white py-2 px-8">Name</th>
//               <th className="md:text-lg text-white py-2 px-8">E-mail Id</th>
//               <th className="md:text-lg text-white py-2 px-4">Status</th>
//               <th className="md:text-lg text-white py-2 px-4">Created Date</th>
//               <th className="md:text-lg text-white py-2 px-4 text-center">Role</th>
//               <th className="md:text-lg text-white py-2 px-8">Action</th>
//             </tr>
//           </thead>
//           <tbody className="font-normal">
//             {userdata.map((user) => (
//               <ListItem
//                 key={user.id}
//                 user={user}
//                 onEdit={openEditModal}
//                 onDelete={handleDeleteUser}
//               />
//             ))}
//           </tbody>
//         </table>
//       </div>

//       {/* Success Message */}
//       {showSuccessMessage && (
//         <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
//           <div className="bg-sky-500 p-8 rounded-lg text-center text-white">
//             <h2 className="text-xl mb-4">
//               <IoMdCheckmarkCircleOutline className="inline-block text-6xl" />
//             </h2>
//             <p>
//               {editUserId
//                 ? "User Updated Successfully"
//                 : "User Added Successfully"}
//             </p>
//           </div>
//         </div>
//       )}

//       {/* Delete Success Message */}
//       {showDeleteSuccessMessage && (
//         <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
//           <div className="bg-red-500 p-8 rounded-lg text-center text-white">
//             <h2 className="text-xl mb-4">
//               <IoMdCheckmarkCircleOutline className="inline-block text-6xl" />
//             </h2>
//             <p>User Deleted Successfully</p>
//           </div>
//         </div>
//       )}

//       {/* Modal */}
//       {isModalOpen && (
//         <div className="fixed inset-0  z-50 flex items-center justify-center bg-black bg-opacity-50">
//           <div className="bg-white rounded-lg p-8  w-full max-w-xl  h-[500px] overflow-y-auto">
//             <h2 className="text-2xl mb-4 text-[#0098F1] font-roboto">
//               {editUserId ? "Edit User" : "Add List"}
//             </h2>
//             <form className="grid grid-cols-2 gap-4 w-full">
//               <div className="flex flex-col space-y-4">
//                 <label
//                   htmlFor="firstname"
//                   className="text-lg font-medium font-roboto"
//                 >
//                   First Name
//                 </label>
//                 <input
//                   type="text"
//                   id="firstname"
//                   name="firstname"
//                   value={newUser.firstname}
//                   onChange={handleInputChange}
//                   className="border border-[#0098F1] px-3 py-2 rounded-lg focus:outline-none focus:border-[#0098F1]"
//                 />
//               </div>
//               <div className="flex flex-col space-y-4">
//                 <label
//                   htmlFor="lastname"
//                   className="text-lg font-medium  font-roboto"
//                 >
//                   Last Name
//                 </label>
//                 <input
//                   type="text"
//                   id="lastname"
//                   name="lastname"
//                   value={newUser.lastname}
//                   onChange={handleInputChange}
//                   className="border border-[#0098F1] px-3 py-2 rounded-lg focus:outline-none focus:border-[#0098F1]"
//                 />
//               </div>
//               <div className="flex flex-col space-y-4">
//                 <label
//                   htmlFor="email"
//                   className="text-lg font-medium font-roboto"
//                 >
//                   Email
//                 </label>
//                 <input
//                   type="email"
//                   id="email"
//                   name="email"
//                   value={newUser.email}
//                   onChange={handleInputChange}
//                   className="border border-[#0098F1] px-3 py-2 rounded-lg focus:outline-none focus:border-[#0098F1]"
//                 />
//               </div>
//               <div className="flex flex-col space-y-4">
//                 <label
//                   htmlFor="mobile"
//                   className="text-lg font-medium font-roboto"
//                 >
//                   Mobile Number
//                 </label>
//                 <input
//                   type="text"
//                   id="mobile"
//                   name="mobile"
//                   value={newUser.mobile}
//                   onChange={handleInputChange}
//                   className="border border-[#0098F1] px-3 py-2 rounded-lg focus:outline-none focus:border-[#0098F1]"
//                 />
//               </div>
//               <div className="flex flex-col space-y-4">
//                 <label
//                   htmlFor="role"
//                   className="text-lg font-medium font-roboto"
//                 >
//                   Role
//                 </label>
//                 <input
//                   type="text"
//                   id="role"
//                   name="role"
//                   value={newUser.role}
//                   onChange={handleInputChange}
//                   className="border border-[#0098F1] px-3 py-2 rounded-lg focus:outline-none focus:border-[#0098F1]"
//                 />
//               </div>
//               <div className="flex flex-col space-y-4">
//                 <label htmlFor="status" className="text-lg font-medium">
//                   Status
//                 </label>
//                 <select
//                   id="status"
//                   name="status"
//                   value={newUser.status}
//                   onChange={handleInputChange}
//                   className="border border-[#0098F1] px-3 py-2 rounded-lg focus:outline-none focus:border-[#0098F1]"
//                 >
//                   <option value="">Select Status</option>
//                   <option value="User">User</option>
//                   <option value="Admin">Admin</option>
//                   <option value="Super Admin">Super Admin</option>
//                 </select>
//               </div>
//               <div className="flex flex-col space-y-4">
//                 <label htmlFor="username" className="text-lg font-medium">
//                   Username
//                 </label>
//                 <input
//                   type="text"
//                   id="username"
//                   name="username"
//                   value={newUser.username}
//                   onChange={handleInputChange}
//                   className="border border-[#0098F1] px-3 py-2 rounded-lg focus:outline-none focus:border-[#0098F1] w-[490px]"
//                 />
//               </div>
//               <div className="grid grid-cols-2 gap-4 col-span-2">
//                 <div className="flex flex-col space-y-4">
//                   <label htmlFor="password" className="text-lg font-medium">
//                     Password
//                   </label>
//                   <input
//                     type="password"
//                     id="password"
//                     name="password"
//                     value={newUser.password}
//                     onChange={handleInputChange}
//                     className="border border-[#0098F1] px-3 py-2 rounded-lg focus:outline-none focus:border-[#0098F1]"
//                   />
//                 </div>
//                 <div className="flex flex-col space-y-4">
//                   <label
//                     htmlFor="confirmPassword"
//                     className="text-lg font-medium"
//                   >
//                     Confirm Password
//                   </label>
//                   <input
//                     type="password"
//                     id="confirmPassword"
//                     name="confirmPassword"
//                     value={newUser.confirmPassword}
//                     onChange={handleInputChange}
//                     className="border border-[#0098F1] px-3 py-2 rounded-lg focus:outline-none focus:border-[#0098F1]"
//                   />
//                 </div>
//               </div>
//             </form>

//             <div className="mt-4">
//               <h2 className="text-[#0098F1] mt-10 ml-0 mb-5 font-roboto text-2xl leading-[38.73px] tracking-[0.5%]">
//                 Module Permission
//               </h2>
//               <table className="w-full">
//                 <thead className="bg-[#0098F1] text-primary-foreground">
//                   <tr>
//                     <th className="px-4 py-2 text-white">Role</th>
//                     <th className="px-4 py-2 text-white">Read</th>
//                     <th className="px-4 py-2 text-white">Write</th>
//                     <th className="px-4 py-2 text-white">Delete</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {Object.keys(selectedRoles).map((role) => (
//                     <tr key={role}>
//                       <td className="px-4 py-2">{role}</td>
//                       <td className="px-4 py-2 text-center">
//                         <MdCheck
//                           className={`h-8 w-8 p-2 rounded-full cursor-pointer ${
//                             selectedRoles[role].read
//                               ? "bg-[#2A8F4C] text-white"
//                               : "bg-[#CCCCCC] text-gray-500"
//                           }`}
//                           onClick={() => toggleSelection(role, "read")}
//                         />
//                       </td>
//                       <td className="px-4 py-2 text-center">
//                         <MdCheck
//                           className={`h-8 w-8 p-2 rounded-full cursor-pointer ${
//                             selectedRoles[role].write
//                               ? "bg-[#2A8F4C] text-white"
//                               : "bg-[#CCCCCC] text-gray-500"
//                           }`}
//                           onClick={() => toggleSelection(role, "write")}
//                         />
//                       </td>
//                       <td className="px-4 py-2 text-center">
//                         <MdCheck
//                           className={`h-8 w-8 p-2 rounded-full cursor-pointer ${
//                             selectedRoles[role].delete
//                               ? "bg-[#2A8F4C] text-white"
//                               : "bg-[#CCCCCC] text-gray-500"
//                           }`}
//                           onClick={() => toggleSelection(role, "delete")}
//                         />
//                       </td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>

//             <div className="col-span-2   gap-4 mt-5  flex justify-center">
//               <button
//                 type="button"
//                 onClick={handleAddUser}
//                 className="bg-[#0098F1] text-white rounded-lg h-[50px] w-[200px]  text-xl flex justify-center items-center"
//               >
//                 Save
//               </button>
//               <button
//                 type="button"
//                 onClick={closeModal}
//                 className="border border-[#0098F1] text-[#0098F1] rounded-lg h-[50px] text-xl w-[200px] flex justify-center items-center"
//               >
//                 Cancel
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//       {/* End Modal */}
//     </div>
//   );
// };

// const ListItem = ({ user, onEdit, onDelete }) => {
//   const handleEdit = () => {
//     onEdit(user.id);
//   };

//   const handleDelete = () => {
//     onDelete(user.id);
//   };

//   return (
//     <tr className="text-black ">
//       <td className="py-2 px-4">
//         <img
//           src="https://res.cloudinary.com/ds5ooz2ve/image/upload/v1721210639/455d89235a0ce444dea77c01cb59978c_kle7gg.png"
//           alt="User Avatar"
//           style={{
//             width: "5vw", // Relative width based on viewport width
//             height: "5vw", // Relative height based on viewport width
//             maxWidth: "50px", // Maximum width of 50 pixels
//             maxHeight: "50px", // Maximum height of 50 pixels
//             borderRadius: "50%",
//             objectFit: "cover",
//           }}
//         />
//       </td>
//       <td className="py-4 px-8 font-normal">{user.name}</td>
//       <td className="py-2 px-8 font-normal">{user.email}</td>
//       <td className="py-2 px-4 font-normal">{user.status}</td>
//       <td className="py-2 px-4 font-normal">{user.createdDate}</td>
//       <td className="py-2 px-2 font-normal text-white text-center">
//         <div style={{ backgroundColor: "#0098F1", padding: "5px" }}>
//           {user.role}
//         </div>
//       </td>
//       <td className="py-2 px-8 flex">
//         <button
//           className="bg-[#2A8F4C] text-white px-2 py-2 rounded-lg mr-2"
//           onClick={handleEdit}
//         >
//           <FiEdit className="text-2xl" />
//         </button>
//         <button
//           className="bg-[#FF3636] text-white  px-2 py-2 rounded-lg"
//           onClick={handleDelete}
//         >
//           <RiDeleteBin6Line className="text-2xl" />
//         </button>
//       </td>
//     </tr>
//   );
// };

// export default UserList;











import React, { useState, useEffect } from "react";
import { FaPlusCircle } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FiEdit } from "react-icons/fi";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { MdCheck } from "react-icons/md";
import { toast } from "react-toastify";
import { clientsAPI } from "../../../services/api";

const AVATAR =
  "https://ui-avatars.com/api/?background=0098F1&color=fff&name=";

const EMPTY_FORM = {
  firstname: "",
  lastname: "",
  email: "",
  mobile: "",
  role: "",
  status: "",
  username: "",
  password: "",
  confirmPassword: "",
};

const UserList = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [userdata, setUserdata] = useState([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [newUser, setNewUser] = useState(EMPTY_FORM);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [showDeleteSuccessMessage, setShowDeleteSuccessMessage] =
    useState(false);
  const [editUserId, setEditUserId] = useState(null);

  const loadClients = async () => {
    setLoading(true);
    try {
      const res = await clientsAPI.getAll();
      setUserdata(Array.isArray(res.data) ? res.data : []);
    } catch (err) {
      console.error("Load clients failed:", err);
      toast.error(err?.response?.data?.detail || "Failed to load clients");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadClients();
  }, []);

  const closeModal = () => {
    setIsModalOpen(false);
    setEditUserId(null);
    setNewUser(EMPTY_FORM);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewUser((prev) => ({ ...prev, [name]: value }));
  };

  const handleAddUser = async () => {
    if (!newUser.firstname.trim()) {
      toast.error("First name is required");
      return;
    }
    if (!newUser.email.trim()) {
      toast.error("Email is required");
      return;
    }

    setSaving(true);
    try {
      const payload = {
        name: `${newUser.firstname} ${newUser.lastname}`.trim(),
        email: newUser.email.trim(),
        mobile: newUser.mobile || null,
        designation: newUser.role || null,
        status: newUser.status || "User",
      };

      if (editUserId !== null) {
        await clientsAPI.update(editUserId, payload);
      } else {
        await clientsAPI.create(payload);
      }

      await loadClients();
      setShowSuccessMessage(true);
      setTimeout(() => setShowSuccessMessage(false), 2000);
      closeModal();
    } catch (err) {
      console.error("Save client failed:", err);
      toast.error(err?.response?.data?.detail || "Failed to save client");
    } finally {
      setSaving(false);
    }
  };

  const openEditModal = (userId) => {
    const user = userdata.find((u) => u.id === userId);
    if (!user) return;
    const parts = (user.name || "").split(" ");
    setEditUserId(userId);
    setNewUser({
      firstname: parts[0] || "",
      lastname: parts.slice(1).join(" ") || "",
      email: user.email || "",
      mobile: user.mobile || "",
      role: user.designation || user.role || "",
      status: user.status || "",
      username: "",
      password: "",
      confirmPassword: "",
    });
    setIsModalOpen(true);
  };

  const handleDeleteUser = async (userId) => {
    if (!window.confirm("Delete this client?")) return;
    try {
      await clientsAPI.remove(userId);
      await loadClients();
      setShowDeleteSuccessMessage(true);
      setTimeout(() => setShowDeleteSuccessMessage(false), 2000);
    } catch (err) {
      console.error("Delete client failed:", err);
      toast.error(err?.response?.data?.detail || "Failed to delete client");
    }
  };

  const [selectedRoles, setSelectedRoles] = useState({
    "Super Admin": { read: false, write: false, delete: false },
    Admin: { read: false, write: false, delete: false },
    "HR Admin": { read: false, write: false, delete: false },
    "HR Employee": { read: false, write: false, delete: false },
  });

  const toggleSelection = (role, action) => {
    setSelectedRoles((prev) => ({
      ...prev,
      [role]: { ...prev[role], [action]: !prev[role][action] },
    }));
  };

  return (
    <div className="p-5 flex flex-col h-screen">
      <h1 className="text-xl text-[#0098F1] font-bold mb-4">Clients</h1>

      <div className="flex justify-end mb-4">
        <button
          className="bg-[#0098F1] text-white flex items-center rounded-lg md:px-6 md:py-3 max-md:p-1"
          onClick={() => {
            setNewUser(EMPTY_FORM);
            setEditUserId(null);
            setIsModalOpen(true);
          }}
        >
          <FaPlusCircle className="text-white md:text-xl mr-2" />
          <span className="text-white font-medium md:text-lg md:mr-2">
            Add New User
          </span>
        </button>
      </div>

      <div className="overflow-x-scroll scrollbar-thin scrollbar-track-white scrollbar-thumb-[#0098f1] md:pt-4 md:mx-4">
        <table className="min-w-full w-screen overflow-x-scroll text-nowrap">
          <thead className="bg-[#0098F1] text-white">
            <tr className="text-left">
              <th className="md:text-lg py-2 md:px-4"></th>
              <th className="md:text-lg text-white py-2 px-8">Name</th>
              <th className="md:text-lg text-white py-2 px-8">E-mail Id</th>
              <th className="md:text-lg text-white py-2 px-4">Status</th>
              <th className="md:text-lg text-white py-2 px-4">
                Created Date
              </th>
              <th className="md:text-lg text-white py-2 px-4 text-center">
                Role
              </th>
              <th className="md:text-lg text-white py-2 px-8">Action</th>
            </tr>
          </thead>
          <tbody className="font-normal">
            {loading && (
              <tr>
                <td colSpan={7} className="text-center py-8 text-gray-500">
                  Loading...
                </td>
              </tr>
            )}
            {!loading && userdata.length === 0 && (
              <tr>
                <td colSpan={7} className="text-center py-8 text-gray-500">
                  No clients yet. Click "Add New User" to create one.
                </td>
              </tr>
            )}
            {!loading &&
              userdata.map((user) => (
                <ListItem
                  key={user.id}
                  user={user}
                  onEdit={openEditModal}
                  onDelete={handleDeleteUser}
                />
              ))}
          </tbody>
        </table>
      </div>

      {showSuccessMessage && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 z-[60]">
          <div className="bg-sky-500 p-8 rounded-lg text-center text-white">
            <IoMdCheckmarkCircleOutline className="inline-block text-6xl" />
            <p className="mt-4 text-xl">
              {editUserId
                ? "Client Updated Successfully"
                : "Client Added Successfully"}
            </p>
          </div>
        </div>
      )}

      {showDeleteSuccessMessage && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 z-[60]">
          <div className="bg-red-500 p-8 rounded-lg text-center text-white">
            <IoMdCheckmarkCircleOutline className="inline-block text-6xl" />
            <p className="mt-4 text-xl">Client Deleted Successfully</p>
          </div>
        </div>
      )}

      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg p-8 w-full max-w-xl h-[500px] overflow-y-auto">
            <h2 className="text-2xl mb-4 text-[#0098F1] font-roboto">
              {editUserId ? "Edit Client" : "Add Client"}
            </h2>
            <form className="grid grid-cols-2 gap-4 w-full">
              <div className="flex flex-col space-y-4">
                <label className="text-lg font-medium font-roboto">
                  First Name
                </label>
                <input
                  type="text"
                  name="firstname"
                  value={newUser.firstname}
                  onChange={handleInputChange}
                  className="border border-[#0098F1] px-3 py-2 rounded-lg focus:outline-none focus:border-[#0098F1]"
                />
              </div>
              <div className="flex flex-col space-y-4">
                <label className="text-lg font-medium font-roboto">
                  Last Name
                </label>
                <input
                  type="text"
                  name="lastname"
                  value={newUser.lastname}
                  onChange={handleInputChange}
                  className="border border-[#0098F1] px-3 py-2 rounded-lg focus:outline-none focus:border-[#0098F1]"
                />
              </div>
              <div className="flex flex-col space-y-4">
                <label className="text-lg font-medium font-roboto">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={newUser.email}
                  onChange={handleInputChange}
                  className="border border-[#0098F1] px-3 py-2 rounded-lg focus:outline-none focus:border-[#0098F1]"
                />
              </div>
              <div className="flex flex-col space-y-4">
                <label className="text-lg font-medium font-roboto">
                  Mobile Number
                </label>
                <input
                  type="text"
                  name="mobile"
                  value={newUser.mobile}
                  onChange={handleInputChange}
                  className="border border-[#0098F1] px-3 py-2 rounded-lg focus:outline-none focus:border-[#0098F1]"
                />
              </div>
              <div className="flex flex-col space-y-4">
                <label className="text-lg font-medium font-roboto">
                  Role / Designation
                </label>
                <input
                  type="text"
                  name="role"
                  value={newUser.role}
                  onChange={handleInputChange}
                  className="border border-[#0098F1] px-3 py-2 rounded-lg focus:outline-none focus:border-[#0098F1]"
                />
              </div>
              <div className="flex flex-col space-y-4">
                <label className="text-lg font-medium">Status</label>
                <select
                  name="status"
                  value={newUser.status}
                  onChange={handleInputChange}
                  className="border border-[#0098F1] px-3 py-2 rounded-lg focus:outline-none focus:border-[#0098F1]"
                >
                  <option value="">Select Status</option>
                  <option value="User">User</option>
                  <option value="Admin">Admin</option>
                  <option value="Super Admin">Super Admin</option>
                </select>
              </div>
              <div className="col-span-2 mt-2">
                <h2 className="text-[#0098F1] mb-3 font-roboto text-2xl">
                  Module Permission
                </h2>
                <table className="w-full">
                  <thead className="bg-[#0098F1] text-primary-foreground">
                    <tr>
                      <th className="px-4 py-2 text-white">Role</th>
                      <th className="px-4 py-2 text-white">Read</th>
                      <th className="px-4 py-2 text-white">Write</th>
                      <th className="px-4 py-2 text-white">Delete</th>
                    </tr>
                  </thead>
                  <tbody>
                    {Object.keys(selectedRoles).map((role) => (
                      <tr key={role}>
                        <td className="px-4 py-2">{role}</td>
                        {["read", "write", "delete"].map((action) => (
                          <td key={action} className="px-4 py-2 text-center">
                            <MdCheck
                              className={`h-8 w-8 p-2 rounded-full cursor-pointer mx-auto ${
                                selectedRoles[role][action]
                                  ? "bg-[#2A8F4C] text-white"
                                  : "bg-[#CCCCCC] text-gray-500"
                              }`}
                              onClick={() => toggleSelection(role, action)}
                            />
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </form>

            <div className="col-span-2 gap-4 mt-5 flex justify-center">
              <button
                type="button"
                onClick={handleAddUser}
                disabled={saving}
                className={`text-white rounded-lg h-[50px] w-[200px] text-xl flex justify-center items-center ${
                  saving ? "bg-gray-400" : "bg-[#0098F1]"
                }`}
              >
                {saving ? "Saving..." : "Save"}
              </button>
              <button
                type="button"
                onClick={closeModal}
                className="border border-[#0098F1] text-[#0098F1] rounded-lg h-[50px] text-xl w-[200px] flex justify-center items-center"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const ListItem = ({ user, onEdit, onDelete }) => {
  const initials = encodeURIComponent(user.name || "?");
  const createdDate = user.createdAt
    ? new Date(user.createdAt).toLocaleDateString("en-GB", {
        day: "numeric",
        month: "short",
        year: "numeric",
      })
    : "—";

  return (
    <tr className="text-black">
      <td className="py-2 px-4">
        <img
          src={user.profileImage || `${AVATAR}${initials}`}
          alt="User Avatar"
          style={{
            width: "5vw",
            height: "5vw",
            maxWidth: "50px",
            maxHeight: "50px",
            borderRadius: "50%",
            objectFit: "cover",
          }}
        />
      </td>
      <td className="py-4 px-8 font-normal">{user.name}</td>
      <td className="py-2 px-8 font-normal">{user.email}</td>
      <td className="py-2 px-4 font-normal">{user.status}</td>
      <td className="py-2 px-4 font-normal">{createdDate}</td>
      <td className="py-2 px-2 font-normal text-white text-center">
        <div style={{ backgroundColor: "#0098F1", padding: "5px" }}>
          {user.designation || user.role || "—"}
        </div>
      </td>
      <td className="py-2 px-8 flex">
        <button
          className="bg-[#2A8F4C] text-white px-2 py-2 rounded-lg mr-2"
          onClick={() => onEdit(user.id)}
        >
          <FiEdit className="text-2xl" />
        </button>
        <button
          className="bg-[#FF3636] text-white px-2 py-2 rounded-lg"
          onClick={() => onDelete(user.id)}
        >
          <RiDeleteBin6Line className="text-2xl" />
        </button>
      </td>
    </tr>
  );
};

export default UserList;