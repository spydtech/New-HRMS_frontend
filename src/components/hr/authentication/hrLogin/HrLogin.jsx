// /* eslint-disable react/no-unescaped-entities */
// /* eslint-disable no-unused-vars */
// import React, { useState } from "react";
// import { IoMdContact, IoMdEye, IoMdEyeOff } from "react-icons/io";
// import { Link, useNavigate } from "react-router-dom";
// import { useDispatch } from "react-redux";
// import { login } from "../../../../State/Auth/Action";

// function HrLogin() {
//   const [showPassword, setShowPassword] = useState(false);
//   const [error, setError] = useState(null);
//   const navigate = useNavigate();
//   const dispatch = useDispatch();

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     const data = new FormData(event.currentTarget);
//     const userData = {
//       email: data.get("email"),
//       password: data.get("password"),
//     };

//     const result = await dispatch(login(userData));
//     if (result.success) {
//       navigate("/hr");
//     } else {
//       setError(result.message || "Invalid credentials. Please try again.");
//     }
//   };

//   return (
//     <div className="bg-[#0098f1] w-screen h-screen flex items-center justify-center px-4 sm:px-6 md:px-8 lg:px-12">
//       <div
//         className="relative  w-full max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl h-[300px] sm:h-[350px] md:h-[300px] lg:h-[300px] xl:h-[350px] rounded-[20px] md:rounded-[25px] flex flex-col items-center justify-center shadow-xl p-6  md:p-8 "
//         style={{
//           background:
//             "linear-gradient(to bottom, rgba(0, 88, 139, 0.2) 19.36%, rgba(0, 88, 139, 0.2) 19.36%)",
//         }}
//       >


//         <div className="">
//           <h2 className=" text-lg md:text-2xl pb-4 font-medium text-white  ">
//             Login to your account
//           </h2>
//         </div>

//         <form
//           onSubmit={handleSubmit}
//           className="flex flex-col w-full space-y-4"
//         >
//           <div className="relative">
//             <IoMdContact className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[#00588B]" />
//             <input
//               id="email"
//               label="Email"
//               name="email"
//               type="email"
//               placeholder="email"
//               required
//               className="w-full h-[50px] px-12 py-2 border bg-[#FFFFFF] border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#00588B]"
//             />
//           </div>
//           <div className="relative">
//             <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
//               {showPassword ? (
//                 <IoMdEyeOff
//                   className="w-6 h-6 mb-4 text-[#00588B] cursor-pointer"
//                   onClick={() => setShowPassword(!showPassword)}
//                 />
//               ) : (
//                 <IoMdEye
//                   className="w-6 h-6 mb-4 text-[#00588B] cursor-pointer"
//                   onClick={() => setShowPassword(!showPassword)}
//                 />
//               )}
//             </div>
//             <input
//               type={showPassword ? "text" : "password"}
//               id="password"
//               name="password"
//               label="Password"
//               placeholder="password"
//               required
//               className="w-full h-[50px] pl-12 pr-4 border bg-[#FFFFFF] border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#00588B]"
//             />
//             <div className="text-sm text-white mt-2 text-right">
//               <Link
//                 to="/forget-password"
//                 className="hover:underline cursor-pointer"
//               >
//                 Forgot Password?
//               </Link>
//             </div>
//           </div>
//           {error && <p className="text-red-500 text-sm text-center">{error}</p>}
//           <button
//             type="submit"
//             className="w-full py-2 bg-[#FFFFFF] text-[#0098F1] transition duration-300 hover:bg-[#e0f7ff] focus:outline-none"
//           >
//             Log In
//           </button>
//         </form>
//         <p className="text-center text-white mt-4">
//           Don't have an account?{" "}
//           <Link to="/register" className="text-[#e0f7ff] hover:underline">
//             Register
//           </Link>
//         </p>
//       </div>
//     </div>
//   );
// }

// export default HrLogin;




// import React, { useState } from "react";
// import { IoMdContact, IoMdEye, IoMdEyeOff } from "react-icons/io";
// import { Link, useNavigate } from "react-router-dom";
// import { useDispatch } from "react-redux";
// import { login } from "../../../../store/slices/authSlice";
// import { toast } from "react-toastify";

// function HrLogin() {
//     const [showPassword, setShowPassword] = useState(false);
//     const [error, setError] = useState(null);
//     const [isLoading, setIsLoading] = useState(false);
//     const navigate = useNavigate();
//     const dispatch = useDispatch();

//     // Helper function for redirection
//     const redirectUser = (role) => {
//         console.log('🔀 Redirecting user with role:', role);
        
//         switch (role) {
//             case 'super_admin':
//                 return "/hr";
//             case 'hr_admin':
//                 return "/hr";
//             case 'admin':
//                 return "/admin/dashboard";
//             case 'employee':
//                 return "/employee";
//             default:
//                 console.warn('⚠️ Unknown role, redirecting to /dashboard');
//                 return "/dashboard";
//         }
//     };

//     const handleSubmit = async (event) => {
//         event.preventDefault();
//         setIsLoading(true);
//         setError(null);

//         const formData = new FormData(event.currentTarget);
//         const userData = {
//             email: formData.get("email"),
//             password: formData.get("password"),
//         };

//         try {
//             // Dispatch login
//             const result = await dispatch(login(userData)).unwrap();
            
//             if (result.success) {
//                 toast.success("Login successful!");
//                 console.log('✅ Login successful, user:', result.user);
                
//                 // Redirect based on role
//                 const redirectPath = redirectUser(result.user?.role);
//                 navigate(redirectPath);
//             } else {
//                 throw new Error(result.message || "Login failed");
//             }
//         } catch (error) {
//             setError(error.message || "Invalid credentials. Please try again.");
//             toast.error(error.message || "Login failed!");
//             console.error('❌ Login error:', error);
//         } finally {
//             setIsLoading(false);
//         }
//     };

//     return (
//         <div className="bg-[#0098F1] w-screen h-screen flex items-center justify-center px-4 sm:px-6 md:px-8 lg:px-12">
//             <div
//                 className="relative w-full max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl h-auto min-h-[300px] sm:min-h-[350px] rounded-[20px] md:rounded-[25px] flex flex-col items-center justify-center shadow-xl p-6 md:p-8"
//                 style={{
//                     background:
//                         "linear-gradient(to bottom, rgba(0, 88, 139, 0.2) 19.36%, rgba(0, 88, 139, 0.2) 19.36%)",
//                 }}
//             >
//                 <div className="w-full text-center">
//                     <h2 className="text-lg md:text-2xl pb-4 font-medium text-white">
//                         Login to your account
//                     </h2>
//                 </div>
//                 <form
//                     onSubmit={handleSubmit}
//                     className="flex flex-col w-full space-y-4"
//                 >
//                     <div className="relative">
//                         <IoMdContact className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[#00588B]" />
//                         <input
//                             id="email"
//                             name="email"
//                             type="email"
//                             placeholder="Email"
//                             required
//                             className="w-full h-[50px] px-12 py-2 border bg-[#FFFFFF] border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#00588B]"
//                             disabled={isLoading}
//                         />
//                     </div>
//                     <div className="relative">
//                         <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
//                             {showPassword ? (
//                                 <IoMdEyeOff
//                                     className="w-6 h-6 text-[#00588B] cursor-pointer"
//                                     onClick={() => setShowPassword(!showPassword)}
//                                 />
//                             ) : (
//                                 <IoMdEye
//                                     className="w-6 h-6 text-[#00588B] cursor-pointer"
//                                     onClick={() => setShowPassword(!showPassword)}
//                                 />
//                             )}
//                         </div>
//                         <input
//                             type={showPassword ? "text" : "password"}
//                             id="password"
//                             name="password"
//                             placeholder="Password"
//                             required
//                             className="w-full h-[50px] pl-12 pr-4 border bg-[#FFFFFF] border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#00588B]"
//                             disabled={isLoading}
//                         />
//                         <div className="text-sm text-white mt-2 text-right">
//                             <Link 
//                                 to="/forgot-password"
//                                 className="hover:underline cursor-pointer"
//                             >
//                                 Forgot Password?
//                             </Link>
//                         </div>
//                     </div>
//                     {error && <p className="text-red-500 text-sm text-center">{error}</p>}
//                     <button
//                         type="submit"
//                         disabled={isLoading}
//                         className="w-full py-3 bg-[#FFFFFF] text-[#0098F1] font-medium rounded-md transition duration-300 hover:bg-[#e0f7ff] focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed"
//                     >
//                         {isLoading ? "Logging in..." : "Log In"}
//                     </button>
//                 </form>
//                 <p className="text-center text-white mt-4">
//                     Don't have an account?{" "}
//                     <Link to="/register" className="text-[#e0f7ff] hover:underline">
//                         Register
//                     </Link>
//                 </p>
//             </div>
//         </div>
//     );
// }

// export default HrLogin;




// import React, { useState } from "react";
// import { IoMdContact, IoMdEye, IoMdEyeOff } from "react-icons/io";
// import { Link, useNavigate } from "react-router-dom";
// import { useDispatch } from "react-redux";
// import { login } from "../../../../store/slices/authSlice";
// import { toast } from "react-toastify";

// function HrLogin() {
//     const [showPassword, setShowPassword] = useState(false);
//     const [error, setError] = useState(null);
//     const [isLoading, setIsLoading] = useState(false);
//     const navigate = useNavigate();
//     const dispatch = useDispatch();

//     // Helper function for redirection
//     const redirectUser = (role) => {
//         console.log('🔀 Redirecting user with role:', role);
        
//         // Make sure these roles match what your backend returns
//         const normalizedRole = role?.toLowerCase()?.trim();
        
//         switch (normalizedRole) {
//             case 'super_admin':
//             case 'superadmin':
//                 return "/hr";
//             case 'hr_admin':
//             case 'hradmin':
//                 return "/hr";
//             case 'admin':
//                 return "/admin/dashboard";
//             case 'employee':
//                 return "/employee/dashboard";
//             case 'hr':
//                 return "/hr";
//             case 'manager':
//                 return "/manager/dashboard";
//             default:
//                 console.warn('⚠️ Unknown role, redirecting to /dashboard');
//                 return "/dashboard";
//         }
//     };

//     const handleSubmit = async (event) => {
//         event.preventDefault();
//         setIsLoading(true);
//         setError(null);

//         const formData = new FormData(event.currentTarget);
//         const userData = {
//             email: formData.get("email").trim(),
//             password: formData.get("password"),
//         };

//         // Basic validation
//         if (!userData.email || !userData.password) {
//             setError("Please enter both email and password");
//             setIsLoading(false);
//             return;
//         }

//         try {
//             console.log('🔄 Attempting login with email:', userData.email);
            
//             // Dispatch login
//             const result = await dispatch(login(userData)).unwrap();
            
//             console.log('✅ Login dispatch result:', result);
            
//             // Check different possible response structures
//             if (result.success || result.token || result.user) {
//                 toast.success("Login successful!");
                
//                 // Extract user data from different possible response structures
//                 let user = result.user || result.data?.user || result.data;
//                 const token = result.token || result.data?.token;
                
//                 // If no user in response, try to get from localStorage
//                 if (!user) {
//                     const storedUser = localStorage.getItem('user');
//                     if (storedUser) {
//                         try {
//                             user = JSON.parse(storedUser);
//                         } catch (e) {
//                             console.error('Failed to parse stored user:', e);
//                         }
//                     }
//                 }
                
//                 console.log('✅ Login successful, user:', user);
//                 console.log('✅ Token:', token);
                
//                 // Get role from user object
//                 const userRole = user?.role || user?.user_role || user?.userRole || result.role;
//                 console.log('✅ Detected user role:', userRole);
                
//                 // Redirect based on role
//                 const redirectPath = redirectUser(userRole);
//                 console.log('✅ Redirecting to:', redirectPath);
                
//                 // Small delay to ensure state is updated
//                 setTimeout(() => {
//                     navigate(redirectPath, { replace: true });
//                 }, 100);
//             } else {
//                 throw new Error(result.message || "Login failed. Please check your credentials.");
//             }
//         } catch (error) {
//             console.error('❌ Login error:', error);
//             const errorMessage = error.message || 
//                                error.response?.data?.message || 
//                                "Invalid credentials. Please try again.";
//             setError(errorMessage);
//             toast.error(errorMessage);
//         } finally {
//             setIsLoading(false);
//         }
//     };

//     return (
//         <div className="bg-[#0098F1] w-screen h-screen flex items-center justify-center px-4 sm:px-6 md:px-8 lg:px-12">
//             <div
//                 className="relative w-full max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl h-auto min-h-[300px] sm:min-h-[350px] rounded-[20px] md:rounded-[25px] flex flex-col items-center justify-center shadow-xl p-6 md:p-8"
//                 style={{
//                     background:
//                         "linear-gradient(to bottom, rgba(0, 88, 139, 0.2) 19.36%, rgba(0, 88, 139, 0.2) 19.36%)",
//                 }}
//             >
//                 <div className="w-full text-center">
//                     <h2 className="text-lg md:text-2xl pb-4 font-medium text-white">
//                         Login to your account
//                     </h2>
//                 </div>
//                 <form
//                     onSubmit={handleSubmit}
//                     className="flex flex-col w-full space-y-4"
//                 >
//                     <div className="relative">
//                         <IoMdContact className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[#00588B]" />
//                         <input
//                             id="email"
//                             name="email"
//                             type="email"
//                             placeholder="Email"
//                             required
//                             className="w-full h-[50px] px-12 py-2 border bg-[#FFFFFF] border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#00588B] focus:border-transparent"
//                             disabled={isLoading}
//                             autoComplete="email"
//                         />
//                     </div>
//                     <div className="relative">
//                         <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
//                             {showPassword ? (
//                                 <IoMdEyeOff
//                                     className="w-6 h-6 text-[#00588B] cursor-pointer hover:text-[#004080]"
//                                     onClick={() => setShowPassword(!showPassword)}
//                                     title="Hide password"
//                                 />
//                             ) : (
//                                 <IoMdEye
//                                     className="w-6 h-6 text-[#00588B] cursor-pointer hover:text-[#004080]"
//                                     onClick={() => setShowPassword(!showPassword)}
//                                     title="Show password"
//                                 />
//                             )}
//                         </div>
//                         <input
//                             type={showPassword ? "text" : "password"}
//                             id="password"
//                             name="password"
//                             placeholder="Password"
//                             required
//                             className="w-full h-[50px] pl-12 pr-4 border bg-[#FFFFFF] border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#00588B] focus:border-transparent"
//                             disabled={isLoading}
//                             autoComplete="current-password"
//                         />
//                         <div className="text-sm text-white mt-2 text-right">
//                             <Link 
//                                 to="/forgot-password"
//                                 className="hover:underline cursor-pointer hover:text-[#e0f7ff] transition-colors duration-200"
//                             >
//                                 Forgot Password?
//                             </Link>
//                         </div>
//                     </div>
//                     {error && (
//                         <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-2 rounded-md text-sm">
//                             {error}
//                         </div>
//                     )}
//                     <button
//                         type="submit"
//                         disabled={isLoading}
//                         className={`w-full py-3 bg-[#FFFFFF] text-[#0098F1] font-medium rounded-md transition duration-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#0098F1] ${
//                             isLoading 
//                                 ? 'opacity-50 cursor-not-allowed' 
//                                 : 'hover:bg-[#e0f7ff] hover:shadow-md transform hover:-translate-y-0.5'
//                         }`}
//                     >
//                         {isLoading ? (
//                             <span className="flex items-center justify-center">
//                                 <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-[#0098F1]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
//                                     <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
//                                     <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
//                                 </svg>
//                                 Logging in...
//                             </span>
//                         ) : "Log In"}
//                     </button>
//                 </form>
//                 <p className="text-center text-white mt-4">
//                     Don't have an account?{" "}
//                     <Link 
//                         to="/register" 
//                         className="text-[#e0f7ff] hover:underline font-medium transition-colors duration-200"
//                     >
//                         Register
//                     </Link>
//                 </p>
//                 <div className="mt-6 text-xs text-white/80 text-center">
//                     <p>© {new Date().getFullYear()} HRMS System. All rights reserved.</p>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default HrLogin;




import React, { useState } from "react";
import { IoMdContact, IoMdEye, IoMdEyeOff } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { login } from "../../../../store/slices/authSlice";

function HrLogin() {
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const redirectUser = (role) => {
    const r = String(role || "").toLowerCase().trim();
    switch (r) {
      case "super_admin":
      case "superadmin":
      case "hr_admin":
      case "hradmin":
      case "hr":
        return "/hr";
      case "admin":
        return "/admin";
      case "employee":
        return "/employee";
      default:
        return "/";
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    setError(null);

    const formData = new FormData(event.currentTarget);
    const payload = {
      email: (formData.get("email") || "").toString().trim(),
      password: (formData.get("password") || "").toString(),
    };

    // ← THIS LINE TELLS YOU EXACTLY WHAT'S BEING SENT
    console.log("🔐 LOGIN PAYLOAD:", JSON.stringify(payload));

    if (!payload.email || !payload.password) {
      setError("Please enter both email and password");
      setIsLoading(false);
      return;
    }

    try {
      const result = await dispatch(login(payload)).unwrap();
      toast.success("Login successful!");
      const path = redirectUser(result.user?.role);
      setTimeout(() => navigate(path, { replace: true }), 100);
    } catch (err) {
      const msg =
        typeof err === "string"
          ? err
          : err?.payload || err?.message || "Invalid credentials. Please try again.";
      setError(msg);
      toast.error(msg);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-[#0098F1] w-screen h-screen flex items-center justify-center px-4">
      <div
        className="relative w-full max-w-md rounded-[25px] flex flex-col items-center justify-center shadow-xl p-8"
        style={{
          background:
            "linear-gradient(to bottom, rgba(0, 88, 139, 0.2) 19.36%, rgba(0, 88, 139, 0.2) 19.36%)",
        }}
      >
        <div className="w-full text-center">
          <h2 className="text-2xl pb-4 font-medium text-white">
            Login to your account
          </h2>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col w-full space-y-4">
          <div className="relative">
            <IoMdContact className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[#00588B]" />
            <input
              id="email"
              name="email"
              type="email"
              placeholder="Email"
              required
              className="w-full h-[50px] px-12 py-2 border bg-white border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#00588B]"
              disabled={isLoading}
              autoComplete="email"
            />
          </div>

          <div className="relative">
            <div className="absolute left-3 top-1/2 transform -translate-y-1/2 z-10">
              {showPassword ? (
                <IoMdEyeOff
                  className="w-6 h-6 text-[#00588B] cursor-pointer"
                  onClick={() => setShowPassword(false)}
                />
              ) : (
                <IoMdEye
                  className="w-6 h-6 text-[#00588B] cursor-pointer"
                  onClick={() => setShowPassword(true)}
                />
              )}
            </div>
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              name="password"
              placeholder="Password"
              required
              className="w-full h-[50px] pl-12 pr-4 border bg-white border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#00588B]"
              disabled={isLoading}
              autoComplete="current-password"
            />
          </div>

          {error && (
            <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-2 rounded-md text-sm">
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={isLoading}
            className={`w-full py-3 bg-white text-[#0098F1] font-medium rounded-md transition duration-300 ${
              isLoading ? "opacity-50 cursor-not-allowed" : "hover:bg-[#e0f7ff]"
            }`}
          >
            {isLoading ? "Logging in..." : "Log In"}
          </button>
        </form>

        {/* <p className="text-center text-white mt-4">
          Don't have an account?{" "}
          <Link to="/register" className="text-[#e0f7ff] hover:underline font-medium">
            Register
          </Link>
        </p> */}

        <div className="mt-6 text-xs text-white/80 text-center">
          <p>© {new Date().getFullYear()} HRMS System. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
}

export default HrLogin;