// import React, { useState } from "react";
// import { FaCheckCircle, FaEye, FaEyeSlash } from "react-icons/fa";

// const ForgotPassword = () => {
//   const [step, setStep] = useState(1);
//   const [email, setEmail] = useState("");
//   const [otp, setOtp] = useState("");
//   const [generatedOtp, setGeneratedOtp] = useState("");
//   const [newPassword, setNewPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");
//   const [message, setMessage] = useState("");
//   const [passwordVisible, setPasswordVisible] = useState(false);
//   const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);

//   const handleEmailSubmit = (e) => {
//     e.preventDefault();
//     const otp = Math.floor(1000 + Math.random() * 9000).toString();
//     setGeneratedOtp(otp);
//     alert(`Your OTP is: ${otp}`); // For demo purposes, show OTP in alert
//     setStep(2);
//   };

//   const handleOtpSubmit = (e) => {
//     e.preventDefault();
//     if (otp === generatedOtp) {
//       setStep(3);
//     } else {
//       setMessage("Invalid OTP. Please try again.");
//     }
//   };

//   const handlePasswordSubmit = (e) => {
//     e.preventDefault();
//     if (newPassword === confirmPassword) {
//       setMessage("Password has been changed successfully!");
//       setStep(4);
//     } else {
//       setMessage("Passwords do not match. Please try again.");
//     }
//   };

//   const togglePasswordVisibility = () => {
//     setPasswordVisible(!passwordVisible);
//   };

//   const toggleConfirmPasswordVisibility = () => {
//     setConfirmPasswordVisible(!confirmPasswordVisible);
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-[#0098F1]">
//       <div
//         className="bg-card p-4 m-4 rounded-xl w-full shadow-lg max-w-lg text-white"
//         style={{
//           background:
//             "linear-gradient(180deg, rgba(0, 88, 139, 0.1936) 0%, rgba(0, 88, 139, 0.1936) 100%)",
//         }}
//       >
//         {step === 1 && (
//           <>
//             <h2 className="text-lg text-start pb-4 font-semibold text-primary-foreground mb-4">
//               Reset my password
//             </h2>
//             <p className="text-center pb-2 text-sm text-muted-foreground mb-6">
//               Please enter your email address below to receive instructions for
//               resetting password.
//             </p>
//             <form onSubmit={handleEmailSubmit}>
//               <div className="mb-4 pb-2">
//                 <input
//                   type="email"
//                   placeholder="E-Mail ID"
//                   className="w-full px-4 py-2 border text-black border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FFFFFF]"
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                   required
//                 />
//               </div>
//               <div className="mb-4">
//                 <button
//                   type="submit"
//                   className="w-full font-bold bg-secondary h-14 text-secondary-foreground py-2 text-[#0098F1] rounded-lg bg-white hover:bg-secondary/80 hover:bg-slate-100"
//                 >
//                   Send OTP
//                 </button>
//               </div>
//             </form>
//           </>
//         )}

//         {step === 2 && (
//           <>
//             <h2 className="text-lg text-start pb-4 font-semibold text-primary-foreground mb-4">
//               Enter OTP
//             </h2>
//             <form onSubmit={handleOtpSubmit}>
//               <div className="mb-4 pb-2">
//                 <input
//                   type="text"
//                   placeholder="OTP"
//                   className="w-full px-4 py-2 border text-black border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FFFFFF]"
//                   value={otp}
//                   onChange={(e) => setOtp(e.target.value)}
//                   required
//                 />
//               </div>
//               <div className="mb-4">
//                 <button
//                   type="submit"
//                   className="w-full font-bold bg-secondary h-14 text-secondary-foreground py-2 text-[#0098F1] rounded-lg bg-white hover:bg-secondary/80 hover:bg-slate-100"
//                 >
//                   Verify OTP
//                 </button>
//               </div>
//             </form>
//             {message && <p className="text-center text-red-500">{message}</p>}
//           </>
//         )}

//         {step === 3 && (
//           <>
//             <h2 className="text-lg text-start pb-4 font-semibold text-primary-foreground mb-4">
//               Enter New Password
//             </h2>
//             <form onSubmit={handlePasswordSubmit}>
//               <div className="mb-4 pb-2 relative">
//                 <input
//                   type={passwordVisible ? "text" : "password"}
//                   placeholder="New Password"
//                   className="w-full px-4 py-2 border text-black border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
//                   value={newPassword}
//                   onChange={(e) => setNewPassword(e.target.value)}
//                   required
//                 />
//                 <div
//                   className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer"
//                   onClick={togglePasswordVisibility}
//                 >
//                   {passwordVisible ? (
//                     <FaEyeSlash className="text-gray-500" />
//                   ) : (
//                     <FaEye className="text-gray-500" />
//                   )}
//                 </div>
//               </div>
//               <div className="mb-4 pb-2 relative">
//                 <input
//                   type={confirmPasswordVisible ? "text" : "password"}
//                   placeholder="Confirm Password"
//                   className="w-full px-4 py-2 border text-black border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
//                   value={confirmPassword}
//                   onChange={(e) => setConfirmPassword(e.target.value)}
//                   required
//                 />
//                 <div
//                   className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer"
//                   onClick={toggleConfirmPasswordVisibility}
//                 >
//                   {confirmPasswordVisible ? (
//                     <FaEyeSlash className="text-gray-500" />
//                   ) : (
//                     <FaEye className="text-gray-500" />
//                   )}
//                 </div>
//               </div>
//               <div className="mb-4">
//                 <button
//                   type="submit"
//                   className="w-full font-bold bg-secondary h-14 text-secondary-foreground py-2 text-[#0098F1] rounded-lg bg-white hover:bg-secondary/80 hover:bg-slate-100"
//                 >
//                   Change Password
//                 </button>
//               </div>
//             </form>
//             {message && <p className="text-center text-red-500">{message}</p>}
//           </>
//         )}

//         {step === 4 && (
//           <div className="text-center">
//             <div className=" p-8 w-full h-full rounded-xl text-center ">
//               <div className="flex justify-center items-center mb-4">
//                 <FaCheckCircle className="w-12 h-12 text-white" />
//               </div>
//               <h2 className="text-white text-lg font-semibold">
//                 Successfully Saved
//               </h2>
//             </div>
//           </div>
//         )}
//       </div>

//       {message && step !== 4 && (
//         <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
//           <div className="bg-white p-4 rounded-lg text-black text-center">
//             <p>{message}</p>
//             <button
//               onClick={() => setMessage("")}
//               className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg"
//             >
//               OK
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ForgotPassword;
import React, { useState } from "react";
import { FaCheckCircle, FaEye, FaEyeSlash } from "react-icons/fa";

const ForgotPassword = () => {
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [generatedOtp, setGeneratedOtp] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);

  const handleEmailSubmit = (e) => {
    e.preventDefault();
    const otp = Math.floor(1000 + Math.random() * 9000).toString();
    setGeneratedOtp(otp);
    alert(`Your OTP is: ${otp}`); // For demo purposes, show OTP in alert
    setStep(2);
  };

  const handleOtpSubmit = (e) => {
    e.preventDefault();
    if (otp === generatedOtp) {
      setStep(3);
    } else {
      setMessage("Invalid OTP. Please try again.");
    }
  };

  const handlePasswordSubmit = (e) => {
    e.preventDefault();
    if (newPassword === confirmPassword) {
      setMessage("Password has been changed successfully!");
      setStep(4);
    } else {
      setMessage("Passwords do not match. Please try again.");
    }
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const toggleConfirmPasswordVisibility = () => {
    setConfirmPasswordVisible(!confirmPasswordVisible);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#2A546D]">
      <div
        className="bg-card p-4 m-4 rounded-xl w-full shadow-lg max-w-lg text-white"
        style={{
          background:
            "linear-gradient(to bottom, rgba(195, 195, 195, 0.31) 31%, rgba(195, 195, 195, 0.31) 31%)",
        }}
      >
        {step === 1 && (
          <>
            <h1 className="text-center mb-6 mt-4 text-2xl font-semibold">
              Password Request
            </h1>
            <form onSubmit={handleEmailSubmit}>
              <div className="mb-4 pb-2">
                <input
                  type="email"
                  placeholder="Employee E-mail"
                  className="w-full px-4 py-2 border text-black border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FFFFFF]"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="mb-4 pb-2">
                <input
                  type="email"
                  placeholder="Employee Name"
                  className="w-full px-4 py-2 border text-black border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FFFFFF]"
                  required
                />
              </div>
              <div className="mb-4 pb-2">
                <input
                  type="email"
                  placeholder="Employee ID"
                  className="w-full px-4 py-2 border text-black border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FFFFFF]"
                  required
                />
              </div>
              <div className="mb-4">
                <button
                  type="submit"
                  className="w-full font-bold bg-secondary h-14 text-secondary-foreground py-2 text-[#2A546D] rounded-lg bg-white hover:bg-secondary/80 hover:bg-slate-100"
                >
                  Send Request
                </button>
              </div>
            </form>
          </>
        )}

        {step === 2 && (
          <>
            <h2 className="text-lg text-start pb-4 font-semibold text-primary-foreground mb-4">
              Enter OTP
            </h2>
            <form onSubmit={handleOtpSubmit}>
              <div className="mb-4 pb-2">
                <input
                  type="text"
                  placeholder="OTP"
                  className="w-full px-4 py-2 border text-black border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FFFFFF]"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  required
                />
              </div>
              <div className="mb-4">
                <button
                  type="submit"
                  className="w-full font-bold bg-secondary h-14 text-secondary-foreground py-2 text-[#0098F1] rounded-lg bg-white hover:bg-secondary/80 hover:bg-slate-100"
                >
                  Verify OTP
                </button>
              </div>
            </form>
            {message && <p className="text-center text-red-500">{message}</p>}
          </>
        )}

        {step === 3 && (
          <>
            <h2 className="text-lg text-start pb-4 font-semibold text-primary-foreground mb-4">
              Enter New Password
            </h2>
            <form onSubmit={handlePasswordSubmit}>
              <div className="mb-4 pb-2 relative">
                <input
                  type={passwordVisible ? "text" : "password"}
                  placeholder="New Password"
                  className="w-full px-4 py-2 border text-black border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  required
                />
                <div
                  className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer"
                  onClick={togglePasswordVisibility}
                >
                  {passwordVisible ? (
                    <FaEyeSlash className="text-gray-500" />
                  ) : (
                    <FaEye className="text-gray-500" />
                  )}
                </div>
              </div>
              <div className="mb-4 pb-2 relative">
                <input
                  type={confirmPasswordVisible ? "text" : "password"}
                  placeholder="Confirm Password"
                  className="w-full px-4 py-2 border text-black border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                />
                <div
                  className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer"
                  onClick={toggleConfirmPasswordVisibility}
                >
                  {confirmPasswordVisible ? (
                    <FaEyeSlash className="text-gray-500" />
                  ) : (
                    <FaEye className="text-gray-500" />
                  )}
                </div>
              </div>
              <div className="mb-4">
                <button
                  type="submit"
                  className="w-full font-bold bg-secondary h-14 text-secondary-foreground py-2 text-[#0098F1] rounded-lg bg-white hover:bg-secondary/80 hover:bg-slate-100"
                >
                  Change Password
                </button>
              </div>
            </form>
            {message && <p className="text-center text-red-500">{message}</p>}
          </>
        )}

        {step === 4 && (
          <div className="text-center">
            <div className=" p-8 w-full h-full rounded-xl text-center ">
              <div className="flex justify-center items-center mb-4">
                <FaCheckCircle className="w-12 h-12 text-white" />
              </div>
              <h2 className="text-white text-lg font-semibold">
                Successfully Saved
              </h2>
            </div>
          </div>
        )}
      </div>

      {message && step !== 4 && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-4 rounded-lg text-black text-center">
            <p>{message}</p>
            <button
              onClick={() => setMessage("")}
              className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg"
            >
              OK
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ForgotPassword;
