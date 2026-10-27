// /* eslint-disable no-unused-vars */
// import React, { useState } from "react";
// import { IoMdCheckmarkCircleOutline } from "react-icons/io";
// import { useSelector } from "react-redux";
// import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai"; // Add these imports for the eye icons
// import axios from "axios";
// //import { API_BASE_URL } from "../../../Config/api";

// const UpdatePassword = () => {
//   const [currentPassword, setCurrentPassword] = useState("");
//   const [newPassword, setNewPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");
//   const [message, setMessage] = useState("");
//   const [showPopup, setShowPopup] = useState(false);
//   const [popupMessage, setPopupMessage] = useState("");
//   const [formError, setFormError] = useState("");

//   // Separate states for toggling password visibility for each input box
//   const [showCurrentPassword, setShowCurrentPassword] = useState(false);
//   const [showNewPassword, setShowNewPassword] = useState(false);
//   const [showConfirmPassword, setShowConfirmPassword] = useState(false);

//   const jwt = localStorage.getItem("employeeJwt");
//   const auth = useSelector((state) => state.auth);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (newPassword !== confirmPassword) {
//       setMessage("New passwords do not match");
//       return;
//     }

//     try {
//       const email = auth.employee.email; // Get the user's email dynamically
//       const response = await axios.put(
//         `${API_BASE_URL}/employee/password/${email}`,
//         {
//           currentPassword,
//           newPassword,
//           confirmPassword,
//         },
//         {
//           headers: {
//             Authorization: `Bearer ${jwt}`, // Pass the JWT token in the Authorization header
//           },
//         }
//       );

//       if (response.data === "password updated successfully") {
//         setPopupMessage("Password updated successfully!");
//         setShowPopup(true); // Show the popup

//         setCurrentPassword("");
//         setNewPassword("");
//         setConfirmPassword("");

//         // Hide popup after 2 seconds
//         setTimeout(() => {
//           setShowPopup(false);
//         }, 2000);
//       } else {
//         setMessage(response.data);
//       }
//     } catch (error) {
//       if (error.response && error.response.data) {
//         setMessage(
//           "Error updating password: " + JSON.stringify(error.response.data)
//         );
//       } else {
//         setMessage("Error updating password: " + error.message);
//       }
//     }
//   };

//   return (
//     <div className="bg-white p-6 lg:mx-10">
//       <div className="flex justify-between items-center py-2 m-2">
//         <h1 className="text-lg font-semibold text-[#2A546D]">UPDATE PASSWORD</h1>
//       </div>

//       <hr className="border-t-2 border-[#2A546D] mb-4" />

//       <form onSubmit={handleSubmit} className="mt-4">
//         <div className="flex flex-col items-center">
//           <div className="relative w-full max-w-md">
//             <label
//               htmlFor="currentPassword"
//               className="block text-lg font-medium text-[#2A546D] mb-3"
//             >
//               Current Password
//             </label>
//             <div className="relative">
//               <span className="absolute inset-y-0 left-0 pl-3 flex items-center cursor-pointer">
//                 {showCurrentPassword ? (
//                   <AiOutlineEyeInvisible
//                     onClick={() => setShowCurrentPassword(false)}
//                     className="text-gray-500"
//                   />
//                 ) : (
//                   <AiOutlineEye
//                     onClick={() => setShowCurrentPassword(true)}
//                     className="text-gray-500"
//                   />
//                 )}
//               </span>
//               <input
//                 required
//                 id="currentPassword"
//                 type={showCurrentPassword ? "text" : "password"}
//                 value={currentPassword}
//                 onChange={(e) => setCurrentPassword(e.target.value)}
//                 className="block w-full pl-10 border border-[#2A546D] rounded-lg h-[40px] text-lg px-3 focus:outline-[#2a546d]"
//               />
//             </div>
//           </div>
//         </div>

//         <div className="mt-4 flex flex-col items-center">
//           <div className="relative w-full max-w-md">
//             <label
//               htmlFor="newPassword"
//               className="block text-lg font-medium text-[#2A546D] mb-3"
//             >
//               New Password
//             </label>
//             <div className="relative">
//               <span className="absolute inset-y-0 left-0 pl-3 flex items-center cursor-pointer">
//                 {showNewPassword ? (
//                   <AiOutlineEyeInvisible
//                     onClick={() => setShowNewPassword(false)}
//                     className="text-gray-500"
//                   />
//                 ) : (
//                   <AiOutlineEye
//                     onClick={() => setShowNewPassword(true)}
//                     className="text-gray-500"
//                   />
//                 )}
//               </span>
//               <input
//                 required
//                 id="newPassword"
//                 type={showNewPassword ? "text" : "password"}
//                 value={newPassword}
//                 onChange={(e) => setNewPassword(e.target.value)}
//                 className="block w-full pl-10 border border-[#2A546D] rounded-lg h-[40px] text-lg px-3 focus:outline-[#2a546d]"
//               />
//             </div>
//           </div>
//         </div>

//         <div className="mt-4 flex flex-col items-center">
//           <div className="relative w-full max-w-md">
//             <label
//               htmlFor="confirmPassword"
//               className="block text-lg font-medium text-[#2A546D] mb-3"
//             >
//               Confirm New Password
//             </label>
//             <div className="relative">
//               <span className="absolute inset-y-0 left-0 pl-3 flex items-center cursor-pointer">
//                 {showConfirmPassword ? (
//                   <AiOutlineEyeInvisible
//                     onClick={() => setShowConfirmPassword(false)}
//                     className="text-gray-500"
//                   />
//                 ) : (
//                   <AiOutlineEye
//                     onClick={() => setShowConfirmPassword(true)}
//                     className="text-gray-500"
//                   />
//                 )}
//               </span>
//               <input
//                 required
//                 id="confirmPassword"
//                 type={showConfirmPassword ? "text" : "password"}
//                 value={confirmPassword}
//                 onChange={(e) => setConfirmPassword(e.target.value)}
//                 className="block w-full pl-10 border border-[#2A546D] rounded-lg h-[40px] text-lg px-3 focus:outline-[#2a546d]"
//               />
//             </div>
//           </div>
//         </div>

//         {formError && (
//           <p className="text-red-500 text-center mt-4">{formError}</p>
//         )}

//         <div className="mt-4 text-center">
//           <button
//             type="submit"
//             disabled={!(currentPassword && newPassword && confirmPassword)}
//             className={`px-4 py-2 ${currentPassword && newPassword && confirmPassword
//               ? "bg-[#2A546D]"
//               : "bg-gray-400"
//               } text-white rounded-lg`}
//           >
//             Update Password
//           </button>
//         </div>
//       </form>

//       {showPopup && (
//         <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
//           <div className="bg-[#2A546D] p-8 rounded-lg text-center text-white">
//             <h2 className="text-3xl mb-2">
//               <IoMdCheckmarkCircleOutline className="inline-block text-6xl" />
//             </h2>
//             <h2 className="text-lg font-semibold text-white">
//               {popupMessage.includes("successfully") ? "Success!" : "Error!"}
//             </h2>
//             <p className="mt-2 text-white">{popupMessage}</p>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default UpdatePassword;







/* eslint-disable no-unused-vars */
import { useState } from "react";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { useSelector } from "react-redux";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import api from "../../../services/api";

const UpdatePassword = () => {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");
  const [showPopup, setShowPopup] = useState(false);
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const auth = useSelector((state) => state.auth);
  const userEmail = auth.user?.email;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");

    if (newPassword !== confirmPassword) {
      setMessage("New passwords do not match");
      return;
    }
    if (!userEmail) {
      setMessage("User email not found");
      return;
    }

    try {
      await api.put(`/employee/password/${userEmail}`, {
        currentPassword,
        newPassword,
        confirmPassword,
      });
      setShowPopup(true);
      setCurrentPassword("");
      setNewPassword("");
      setConfirmPassword("");
      setTimeout(() => setShowPopup(false), 2000);
    } catch (error) {
      setMessage(
        error.response?.data?.detail ||
          error.message ||
          "Error updating password"
      );
    }
  };

  const pwdInput = (label, id, value, setValue, show, setShow) => (
    <div className="mt-4 flex flex-col items-center">
      <div className="relative w-full max-w-md">
        <label className="block text-lg font-medium text-[#2A546D] mb-3">
          {label}
        </label>
        <div className="relative">
          <span className="absolute inset-y-0 left-0 pl-3 flex items-center cursor-pointer">
            {show ? (
              <AiOutlineEyeInvisible
                onClick={() => setShow(false)}
                className="text-gray-500"
              />
            ) : (
              <AiOutlineEye
                onClick={() => setShow(true)}
                className="text-gray-500"
              />
            )}
          </span>
          <input
            required
            id={id}
            type={show ? "text" : "password"}
            value={value}
            onChange={(e) => setValue(e.target.value)}
            className="block w-full pl-10 border border-[#2A546D] rounded-lg h-[40px] text-lg px-3"
          />
        </div>
      </div>
    </div>
  );

  return (
    <div className="bg-white p-6 lg:mx-10">
      <div className="flex justify-between items-center py-2 m-2">
        <h1 className="text-lg font-semibold text-[#2A546D]">UPDATE PASSWORD</h1>
      </div>
      <hr className="border-t-2 border-[#2A546D] mb-4" />

      <form onSubmit={handleSubmit} className="mt-4">
        {pwdInput(
          "Current Password",
          "currentPassword",
          currentPassword,
          setCurrentPassword,
          showCurrentPassword,
          setShowCurrentPassword
        )}
        {pwdInput(
          "New Password",
          "newPassword",
          newPassword,
          setNewPassword,
          showNewPassword,
          setShowNewPassword
        )}
        {pwdInput(
          "Confirm New Password",
          "confirmPassword",
          confirmPassword,
          setConfirmPassword,
          showConfirmPassword,
          setShowConfirmPassword
        )}

        {message && <p className="text-red-500 text-center mt-4">{message}</p>}

        <div className="mt-4 text-center">
          <button
            type="submit"
            disabled={!(currentPassword && newPassword && confirmPassword)}
            className={`px-4 py-2 ${
              currentPassword && newPassword && confirmPassword
                ? "bg-[#2A546D]"
                : "bg-gray-400"
            } text-white rounded-lg`}
          >
            Update Password
          </button>
        </div>
      </form>

      {showPopup && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-[#2A546D] p-8 rounded-lg text-center text-white">
            <IoMdCheckmarkCircleOutline className="inline-block text-6xl" />
            <p className="mt-2">Password updated successfully!</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default UpdatePassword;