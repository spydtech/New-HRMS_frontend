// import React, { useState } from "react";
// import { FaEye, FaEyeSlash } from "react-icons/fa";
// import { Link, useNavigate } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import { register } from "../../../../store/slices/authSlice";
// import { toast } from "react-toastify";

// function Register() {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [role, setRole] = useState("employee");
//   const [confirmPassword, setConfirmPassword] = useState("");
//   const [passwordVisible, setPasswordVisible] = useState(false);
//   const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
//   const [validationErrors, setValidationErrors] = useState({});
  
//   const navigate = useNavigate();
//   const dispatch = useDispatch();
//   const { isLoading, error, user: currentUser } = useSelector((state) => state.auth);

//   // Get current user role
//   const currentUserRole = currentUser?.role;

//   // Role hierarchy - who can register what
//   const roleHierarchy = {
//     'super_admin': ['super_admin', 'hr_admin', 'admin', 'employee'],
//     'hr_admin': ['hr_admin', 'admin', 'employee'],
//     'admin': ['admin', 'employee'],
//     'employee': [] // Employees cannot register others
//   };

//   // Map frontend role names to backend role values
//   const roleMap = {
//     'superAdmin': 'super_admin',
//     'hrAdmin': 'hr_admin', 
//     'admin': 'admin',
//     'employee': 'employee'
//   };

//   // Reverse mapping for display
//   const reverseRoleMap = {
//     'super_admin': 'superAdmin',
//     'hr_admin': 'hrAdmin',
//     'admin': 'admin',
//     'employee': 'employee'
//   };

//   // Role display names
//   const roleDisplayNames = {
//     'superAdmin': 'Super Admin',
//     'hrAdmin': 'HR Admin', 
//     'admin': 'Admin',
//     'employee': 'Employee'
//   };

//   // Get available roles based on current user's permissions
//   const getAvailableRoles = () => {
//     if (!currentUser) {
//       // Public registration - only employee
//       return [
//         { value: 'employee', label: 'Employee', backendValue: 'employee' }
//       ];
//     }

//     const currentUserRole = currentUser.role;
//     const allowedBackendRoles = roleHierarchy[currentUserRole] || [];
    
//     // Convert backend roles to frontend options
//     return allowedBackendRoles.map(backendRole => {
//       const frontendValue = reverseRoleMap[backendRole] || backendRole;
//       return {
//         value: frontendValue,
//         label: roleDisplayNames[frontendValue] || backendRole,
//         backendValue: backendRole
//       };
//     });
//   };

//   const availableRoles = getAvailableRoles();
//   const isPublicRegistration = !currentUser;

//   const validateForm = () => {
//     const errors = {};
    
//     if (!name.trim()) {
//       errors.name = 'Name is required';
//     } else if (name.trim().length < 2) {
//       errors.name = 'Name must be at least 2 characters';
//     }
    
//     if (!email.trim()) {
//       errors.email = 'Email is required';
//     } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
//       errors.email = 'Invalid email format';
//     }
    
//     if (!password) {
//       errors.password = 'Password is required';
//     } else if (password.length < 6) {
//       errors.password = 'Password must be at least 6 characters';
//     } else if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/.test(password)) {
//       errors.password = 'Password must contain uppercase, lowercase and number';
//     }
    
//     if (!confirmPassword) {
//       errors.confirmPassword = 'Please confirm password';
//     } else if (password !== confirmPassword) {
//       errors.confirmPassword = 'Passwords do not match';
//     }
    
//     if (!role) {
//       errors.role = 'Please select a role';
//     }
    
//     return errors;
//   };

//   const handleSubmit = async (event) => {
//     event.preventDefault();
    
//     // Clear previous errors
//     setValidationErrors({});
    
//     // Validate form
//     const errors = validateForm();
//     if (Object.keys(errors).length > 0) {
//       setValidationErrors(errors);
//       toast.error("Please fix the form errors");
//       return;
//     }
    
//     // Convert role to backend format
//     const backendRole = roleMap[role] || role;
    
//     const userData = {
//       name: name.trim(),
//       email: email.trim().toLowerCase(),
//       password,
//       role: backendRole,
//       confirmPassword
//     };

//     console.log("Registration request:", {
//       name: userData.name,
//       email: userData.email,
//       role: userData.role,
//       isPublicRegistration,
//       currentUser: currentUser ? {
//         id: currentUser.id,
//         role: currentUser.role
//       } : 'No user logged in'
//     });

//     try {
//       const result = await dispatch(register(userData)).unwrap();
      
//       if (result.success) {
//         toast.success(result.message || "Registration successful!");
        
//         // Show additional info if employee ID was generated
//         if (result.data?.employee_id) {
//           toast.info(`Employee ID: ${result.data.employee_id}`);
//         }
        
//         // Show success message for 2 seconds then redirect
//         setTimeout(() => {
//           if (currentUser) {
//             // If admin is registering, go back to admin dashboard
//             navigate("/admin/dashboard");
//           } else {
//             // If public registration, go to login
//             navigate("/login");
//           }
//         }, 2000);
//       }
//     } catch (error) {
//       console.error("Registration error:", error);
      
//       // Handle different error formats
//       if (error?.message) {
//         // Check for specific role errors
//         if (error.message.includes('Data truncated for column') || 
//             error.message.includes('Invalid role')) {
//           toast.error("Invalid role value. Valid roles: Super Admin, HR Admin, Admin, Employee");
//         } else if (error.message.includes('Email already')) {
//           toast.error("Email already registered. Please use a different email.");
//         } else {
//           toast.error(error.message);
//         }
//       } else if (typeof error === 'string') {
//         toast.error(error);
//       } else if (error?.errors) {
//         // Handle validation errors from backend
//         const backendErrors = {};
//         error.errors.forEach(err => {
//           backendErrors[err.field] = err.message;
//         });
//         setValidationErrors(backendErrors);
//         toast.error("Please fix the validation errors");
//       } else {
//         toast.error("Registration failed. Please try again.");
//       }
//     }
//   };

//   const togglePasswordVisibility = () => {
//     setPasswordVisible(!passwordVisible);
//   };

//   const toggleConfirmPasswordVisibility = () => {
//     setConfirmPasswordVisible(!confirmPasswordVisible);
//   };

//   // Show loading state
//   if (isLoading) {
//     return (
//       <div className="min-h-screen flex items-center justify-center bg-[#0098F1]">
//         <div className="text-center p-8 items-center border-white border-4 justify-center shadow-md rounded-xl">
//           <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white mx-auto mb-4"></div>
//           <h2 className="text-white text-lg font-semibold">
//             Registering user...
//           </h2>
//           <p className="text-white mt-2">Please wait while we create your account</p>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-[#0098F1] p-4">
//       <div
//         className="bg-gradient-to-b w-full max-w-xl rounded-3xl"
//         style={{
//           background:
//             "linear-gradient(180deg, rgba(0, 88, 139, 0.1936) 0%, rgba(0, 88, 139, 0.1936) 100%)",
//         }}
//       >
//         <div className="text-center py-8">
//           <h2 className="text-2xl font-medium text-white">
//             {isPublicRegistration ? "Create an Account" : "Register New User"}
//           </h2>
//           <p className="text-white mt-2">
//             {isPublicRegistration 
//               ? "Fill in your details to register as an employee" 
//               : `Registering new user (Logged in as: ${currentUser ? roleDisplayNames[reverseRoleMap[currentUser.role]] || currentUser.role : 'Admin'})`}
//           </p>
//         </div>
        
//         {error && typeof error === 'string' && (
//           <div className="mx-8 mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded">
//             {error}
//           </div>
//         )}
        
//         <form onSubmit={handleSubmit} className="space-y-4 p-4 md:p-8">
//           <div>
//             <label htmlFor="role" className="block text-white text-sm font-medium mb-1">
//               Role *
//             </label>
//             <select
//               id="role"
//               className="w-full p-3 h-12 border border-zinc-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white transition-all duration-200"
//               value={role}
//               onChange={(e) => {
//                 setRole(e.target.value);
//                 setValidationErrors(prev => ({...prev, role: null}));
//               }}
//               required
//               disabled={isLoading}
//             >
//               <option value="">Select Role</option>
//               {availableRoles.map((roleOption) => (
//                 <option key={roleOption.value} value={roleOption.value}>
//                   {roleOption.label}
//                 </option>
//               ))}
//             </select>
//             {validationErrors.role && (
//               <p className="text-red-500 text-sm mt-1 animate-pulse">{validationErrors.role}</p>
//             )}
//             <p className="text-gray-200 text-xs mt-1">
//               {isPublicRegistration 
//                 ? "Public registration available for employees only"
//                 : `You can register: ${availableRoles.map(r => r.label).join(', ')}`}
//             </p>
//           </div>
          
//           <div>
//             <label htmlFor="name" className="block text-white text-sm font-medium mb-1">
//               Full Name *
//             </label>
//             <input
//               type="text"
//               id="name"
//               placeholder="Enter your full name"
//               className="w-full p-3 h-12 border border-zinc-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white transition-all duration-200"
//               value={name}
//               onChange={(e) => {
//                 setName(e.target.value);
//                 setValidationErrors(prev => ({...prev, name: null}));
//               }}
//               required
//               disabled={isLoading}
//             />
//             {validationErrors.name && (
//               <p className="text-red-500 text-sm mt-1 animate-pulse">{validationErrors.name}</p>
//             )}
//           </div>
          
//           <div>
//             <label htmlFor="email" className="block text-white text-sm font-medium mb-1">
//               Email Address *
//             </label>
//             <input
//               type="email"
//               id="email"
//               placeholder="Enter your email address"
//               className="w-full p-3 h-12 border border-zinc-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white transition-all duration-200"
//               value={email}
//               onChange={(e) => {
//                 setEmail(e.target.value);
//                 setValidationErrors(prev => ({...prev, email: null}));
//               }}
//               required
//               disabled={isLoading}
//             />
//             {validationErrors.email && (
//               <p className="text-red-500 text-sm mt-1 animate-pulse">{validationErrors.email}</p>
//             )}
//           </div>
          
//           <div className="relative">
//             <label htmlFor="password" className="block text-white text-sm font-medium mb-1">
//               Password *
//             </label>
//             <input
//               type={passwordVisible ? "text" : "password"}
//               id="password"
//               placeholder="Create a strong password"
//               className="w-full p-3 h-12 border border-zinc-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white pr-12 transition-all duration-200"
//               value={password}
//               onChange={(e) => {
//                 setPassword(e.target.value);
//                 setValidationErrors(prev => ({...prev, password: null}));
//               }}
//               required
//               disabled={isLoading}
//             />
//             <button
//               type="button"
//               className="absolute inset-y-0 right-3 flex items-center cursor-pointer focus:outline-none"
//               onClick={togglePasswordVisibility}
//               style={{ top: '25px' }}
//               disabled={isLoading}
//             >
//               {passwordVisible ? (
//                 <FaEyeSlash className="text-gray-500 hover:text-gray-700" />
//               ) : (
//                 <FaEye className="text-gray-500 hover:text-gray-700" />
//               )}
//             </button>
//             {validationErrors.password && (
//               <p className="text-red-500 text-sm mt-1 animate-pulse">{validationErrors.password}</p>
//             )}
//             <div className="text-gray-200 text-xs mt-1 space-y-1">
//               <p>Password must contain:</p>
//               <ul className="list-disc list-inside pl-2">
//                 <li>At least 6 characters</li>
//                 <li>Uppercase letter (A-Z)</li>
//                 <li>Lowercase letter (a-z)</li>
//                 <li>Number (0-9)</li>
//               </ul>
//             </div>
//           </div>
          
//           <div className="relative">
//             <label htmlFor="confirmPassword" className="block text-white text-sm font-medium mb-1">
//               Confirm Password *
//             </label>
//             <input
//               type={confirmPasswordVisible ? "text" : "password"}
//               id="confirmPassword"
//               placeholder="Re-enter your password"
//               className="w-full p-3 h-12 border border-zinc-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white pr-12 transition-all duration-200"
//               value={confirmPassword}
//               onChange={(e) => {
//                 setConfirmPassword(e.target.value);
//                 setValidationErrors(prev => ({...prev, confirmPassword: null}));
//               }}
//               required
//               disabled={isLoading}
//             />
//             <button
//               type="button"
//               className="absolute inset-y-0 right-3 flex items-center cursor-pointer focus:outline-none"
//               onClick={toggleConfirmPasswordVisibility}
//               style={{ top: '25px' }}
//               disabled={isLoading}
//             >
//               {confirmPasswordVisible ? (
//                 <FaEyeSlash className="text-gray-500 hover:text-gray-700" />
//               ) : (
//                 <FaEye className="text-gray-500 hover:text-gray-700" />
//               )}
//             </button>
//             {validationErrors.confirmPassword && (
//               <p className="text-red-500 text-sm mt-1 animate-pulse">{validationErrors.confirmPassword}</p>
//             )}
//           </div>
          
//           <div className="pt-6">
//             <button
//               type="submit"
//               disabled={isLoading}
//               className="w-full h-14 rounded-md text-white bg-blue-600 hover:bg-blue-700 font-semibold text-xl disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98]"
//             >
//               {isLoading ? (
//                 <span className="flex items-center justify-center">
//                   <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
//                   Registering...
//                 </span>
//               ) : (
//                 "Register"
//               )}
//             </button>
//           </div>
          
//           <div className="text-center pt-2">
//             <p className="text-gray-200 text-sm">
//               By registering, you agree to our{" "}
//               <Link to="/terms" className="text-white underline hover:no-underline">
//                 Terms of Service
//               </Link>{" "}
//               and{" "}
//               <Link to="/privacy" className="text-white underline hover:no-underline">
//                 Privacy Policy
//               </Link>
//             </p>
//           </div>
//         </form>
        
//         <div className="text-center pb-8 space-y-2">
//           <p className="text-white">
//             Already have an account?{" "}
//             <Link to="/login" className="text-white font-semibold underline hover:no-underline">
//               Login here
//             </Link>
//           </p>
          
//           {!isPublicRegistration && currentUser && (
//             <p className="text-white">
//               <Link 
//                 to="/admin/dashboard" 
//                 className="text-white font-semibold underline hover:no-underline"
//               >
//                 ← Back to Dashboard
//               </Link>
//             </p>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Register;







// import React, { useState } from "react";
// import { FaEye, FaEyeSlash, FaCheckCircle, FaIdCard, FaCopy } from "react-icons/fa";
// import { Link, useNavigate } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import { register } from "../../../../store/slices/authSlice";
// import { toast } from "react-toastify";

// function Register() {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [role, setRole] = useState("employee");
//   const [confirmPassword, setConfirmPassword] = useState("");
//   const [passwordVisible, setPasswordVisible] = useState(false);
//   const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
//   const [validationErrors, setValidationErrors] = useState({});
//   const [registrationSuccess, setRegistrationSuccess] = useState(false);
//   const [registeredUserData, setRegisteredUserData] = useState(null);
  
//   const navigate = useNavigate();
//   const dispatch = useDispatch();
//   const { isLoading, error, user: currentUser } = useSelector((state) => state.auth);

//   // Get current user role
//   const currentUserRole = currentUser?.role;

//   // Role hierarchy - who can register what (UPDATED)
//   const roleHierarchy = {
//     'super_admin': ['super_admin', 'hr_admin', 'admin', 'employee'],
//     'hr_admin': ['employee'], // HR Admin can only register employees
//     'admin': ['employee'], // Admin can only register employees
//     'employee': [] // Employees cannot register others
//   };

//   // Map frontend role names to backend role values
//   const roleMap = {
//     'superAdmin': 'super_admin',
//     'hrAdmin': 'hr_admin', 
//     'admin': 'admin',
//     'employee': 'employee'
//   };

//   // Reverse mapping for display
//   const reverseRoleMap = {
//     'super_admin': 'superAdmin',
//     'hr_admin': 'hrAdmin',
//     'admin': 'admin',
//     'employee': 'employee'
//   };

//   // Role display names
//   const roleDisplayNames = {
//     'superAdmin': 'Super Admin',
//     'hrAdmin': 'HR Admin', 
//     'admin': 'Admin',
//     'employee': 'Employee'
//   };

//   // Get available roles based on current user's permissions
//   const getAvailableRoles = () => {
//     if (!currentUser) {
//       // Public registration - only employee
//       return [
//         { value: 'employee', label: 'Employee', backendValue: 'employee' }
//       ];
//     }

//     const currentUserRole = currentUser.role;
//     const allowedBackendRoles = roleHierarchy[currentUserRole] || [];
    
//     // Convert backend roles to frontend options
//     return allowedBackendRoles.map(backendRole => {
//       const frontendValue = reverseRoleMap[backendRole] || backendRole;
//       return {
//         value: frontendValue,
//         label: roleDisplayNames[frontendValue] || backendRole,
//         backendValue: backendRole
//       };
//     });
//   };

//   const availableRoles = getAvailableRoles();
//   const isPublicRegistration = !currentUser;

//   const validateForm = () => {
//     const errors = {};
    
//     if (!name.trim()) {
//       errors.name = 'Name is required';
//     } else if (name.trim().length < 2) {
//       errors.name = 'Name must be at least 2 characters';
//     }
    
//     if (!email.trim()) {
//       errors.email = 'Email is required';
//     } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
//       errors.email = 'Invalid email format';
//     }
    
//     if (!password) {
//       errors.password = 'Password is required';
//     } else if (password.length < 6) {
//       errors.password = 'Password must be at least 6 characters';
//     } else if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/.test(password)) {
//       errors.password = 'Password must contain uppercase, lowercase and number';
//     }
    
//     if (!confirmPassword) {
//       errors.confirmPassword = 'Please confirm password';
//     } else if (password !== confirmPassword) {
//       errors.confirmPassword = 'Passwords do not match';
//     }
    
//     if (!role) {
//       errors.role = 'Please select a role';
//     }
    
//     return errors;
//   };

//   const handleSubmit = async (event) => {
//     event.preventDefault();
    
//     // Clear previous errors and success state
//     setValidationErrors({});
//     setRegistrationSuccess(false);
//     setRegisteredUserData(null);
    
//     // Validate form
//     const errors = validateForm();
//     if (Object.keys(errors).length > 0) {
//       setValidationErrors(errors);
//       toast.error("Please fix the form errors");
//       return;
//     }
    
//     // Convert role to backend format
//     const backendRole = roleMap[role] || role;
    
//     const userData = {
//       name: name.trim(),
//       email: email.trim().toLowerCase(),
//       password,
//       role: backendRole,
//       confirmPassword
//     };

//     console.log("Registration request:", {
//       name: userData.name,
//       email: userData.email,
//       role: userData.role,
//       isPublicRegistration,
//       currentUser: currentUser ? {
//         id: currentUser.id,
//         role: currentUser.role
//       } : 'No user logged in'
//     });

//     try {
//       const result = await dispatch(register(userData)).unwrap();
      
//       if (result.success) {
//         // Set success state with registered user data
//         setRegistrationSuccess(true);
//         setRegisteredUserData(result.data);
        
//         // Store registration details for display
//         const registrationDetails = {
//           name: name,
//           email: email,
//           role: roleDisplayNames[role] || role,
//           employeeId: result.data?.employee_id || 'Not Assigned',
//           registrationDate: new Date().toLocaleDateString('en-US', {
//             year: 'numeric',
//             month: 'long',
//             day: 'numeric',
//             hour: '2-digit',
//             minute: '2-digit'
//           })
//         };
        
//         // Show success toast
//         toast.success(
//           <div>
//             <div className="font-bold">Registration Successful!</div>
//             {result.data?.employee_id && (
//               <div className="text-sm mt-1">
//                 Employee ID: <span className="font-mono font-bold">{result.data.employee_id}</span>
//               </div>
//             )}
//           </div>, 
//           { autoClose: 5000 }
//         );
        
//         // Reset form fields
//         setName("");
//         setEmail("");
//         setPassword("");
//         setConfirmPassword("");
//         setRole("employee");
        
//         // Auto redirect after 8 seconds if in success view
//         setTimeout(() => {
//           if (currentUser) {
//             navigate("/admin/dashboard");
//           } else {
//             navigate("/login");
//           }
//         }, 8000);
//       }
//     } catch (error) {
//       console.error("Registration error:", error);
      
//       // Handle different error formats
//       if (error?.message) {
//         // Check for specific role errors
//         if (error.message.includes('Data truncated for column') || 
//             error.message.includes('Invalid role')) {
//           toast.error("Invalid role value. Valid roles: Super Admin, HR Admin, Admin, Employee");
//         } else if (error.message.includes('Email already')) {
//           toast.error("Email already registered. Please use a different email.");
//         } else if (error.message.includes("don't have permission")) {
//           toast.error("You don't have permission to register this role.");
//         } else {
//           toast.error(error.message);
//         }
//       } else if (typeof error === 'string') {
//         toast.error(error);
//       } else if (error?.errors) {
//         // Handle validation errors from backend
//         const backendErrors = {};
//         error.errors.forEach(err => {
//           backendErrors[err.field] = err.message;
//         });
//         setValidationErrors(backendErrors);
//         toast.error("Please fix the validation errors");
//       } else {
//         toast.error("Registration failed. Please try again.");
//       }
//     }
//   };

//   const togglePasswordVisibility = () => {
//     setPasswordVisible(!passwordVisible);
//   };

//   const toggleConfirmPasswordVisibility = () => {
//     setConfirmPasswordVisible(!confirmPasswordVisible);
//   };

//   const copyToClipboard = (text) => {
//     navigator.clipboard.writeText(text)
//       .then(() => {
//         toast.success("Copied to clipboard!");
//       })
//       .catch(err => {
//         console.error('Failed to copy: ', err);
//         toast.error("Failed to copy to clipboard");
//       });
//   };

//   // Show loading state
//   if (isLoading) {
//     return (
//       <div className="min-h-screen flex items-center justify-center bg-[#0098F1]">
//         <div className="text-center p-8 items-center border-white border-4 justify-center shadow-md rounded-xl">
//           <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white mx-auto mb-4"></div>
//           <h2 className="text-white text-lg font-semibold">
//             Registering user...
//           </h2>
//           <p className="text-white mt-2">Please wait while we create your account</p>
//         </div>
//       </div>
//     );
//   }

//   // Show success view
//   if (registrationSuccess && registeredUserData) {
//     return (
//       <div className="min-h-screen flex items-center justify-center bg-[#0098F1] p-4">
//         <div className="bg-white w-full max-w-2xl rounded-3xl shadow-2xl overflow-hidden">
//           {/* Success Header */}
//           <div className="bg-gradient-to-r from-green-500 to-emerald-600 py-8 px-6 text-center">
//             <div className="flex justify-center mb-4">
//               <div className="bg-white p-4 rounded-full">
//                 <FaCheckCircle className="text-5xl text-green-500" />
//               </div>
//             </div>
//             <h2 className="text-3xl font-bold text-white mb-2">
//               Registration Successful! 🎉
//             </h2>
//             <p className="text-white text-lg">
//               User account has been created successfully
//             </p>
//           </div>
          
//           {/* User Details Card */}
//           <div className="p-6 md:p-8">
//             <div className="bg-gray-50 rounded-xl p-6 mb-6 border border-gray-200">
//               <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
//                 <FaIdCard className="mr-2 text-blue-500" />
//                 User Registration Details
//               </h3>
              
//               <div className="space-y-4">
//                 {/* Employee ID Section - Highlighted */}
//                 {registeredUserData.employee_id && (
//                   <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border-l-4 border-blue-500 p-4 rounded-r-lg">
//                     <div className="flex justify-between items-center">
//                       <div>
//                         <p className="text-sm text-gray-600 font-medium">Employee ID</p>
//                         <p className="text-2xl font-bold text-gray-900 font-mono">
//                           {registeredUserData.employee_id}
//                         </p>
//                         <p className="text-xs text-gray-500 mt-1">
//                           Share this ID with the employee
//                         </p>
//                       </div>
//                       <button
//                         onClick={() => copyToClipboard(registeredUserData.employee_id)}
//                         className="flex items-center gap-2 bg-blue-100 hover:bg-blue-200 text-blue-700 px-4 py-2 rounded-lg transition-colors"
//                       >
//                         <FaCopy />
//                         Copy
//                       </button>
//                     </div>
//                   </div>
//                 )}
                
//                 {/* User Details Grid */}
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                   <div className="bg-white p-4 rounded-lg border border-gray-200">
//                     <p className="text-sm text-gray-500">Full Name</p>
//                     <p className="text-lg font-semibold text-gray-800">{name}</p>
//                   </div>
                  
//                   <div className="bg-white p-4 rounded-lg border border-gray-200">
//                     <p className="text-sm text-gray-500">Email Address</p>
//                     <p className="text-lg font-semibold text-gray-800">{email}</p>
//                   </div>
                  
//                   <div className="bg-white p-4 rounded-lg border border-gray-200">
//                     <p className="text-sm text-gray-500">Role</p>
//                     <p className="text-lg font-semibold text-gray-800">
//                       <span className={`px-3 py-1 rounded-full text-sm font-medium ${
//                         role === 'employee' ? 'bg-blue-100 text-blue-800' :
//                         role === 'admin' ? 'bg-purple-100 text-purple-800' :
//                         role === 'hrAdmin' ? 'bg-green-100 text-green-800' :
//                         'bg-red-100 text-red-800'
//                       }`}>
//                         {roleDisplayNames[role] || role}
//                       </span>
//                     </p>
//                   </div>
                  
//                   <div className="bg-white p-4 rounded-lg border border-gray-200">
//                     <p className="text-sm text-gray-500">Registration Date</p>
//                     <p className="text-lg font-semibold text-gray-800">
//                       {new Date().toLocaleDateString('en-US', {
//                         weekday: 'long',
//                         year: 'numeric',
//                         month: 'long',
//                         day: 'numeric'
//                       })}
//                     </p>
//                   </div>
//                 </div>
                
//                 {/* Account Status */}
//                 <div className="bg-green-50 border border-green-200 rounded-lg p-4">
//                   <div className="flex items-center">
//                     <div className="flex-shrink-0">
//                       <FaCheckCircle className="h-6 w-6 text-green-500" />
//                     </div>
//                     <div className="ml-3">
//                       <h3 className="text-sm font-medium text-green-800">
//                         Account Status: Active
//                       </h3>
//                       <div className="mt-2 text-sm text-green-700">
//                         <p>
//                           The user account has been created successfully and is ready to use.
//                           {registeredUserData.employee_id && ' Employee ID has been assigned.'}
//                         </p>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
            
//             {/* Next Steps & Actions */}
//             <div className="space-y-4">
//               <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
//                 <h4 className="font-semibold text-blue-800 mb-2">Next Steps:</h4>
//                 <ul className="text-blue-700 space-y-1 list-disc list-inside">
//                   <li>Share the login credentials with the user</li>
//                   {registeredUserData.employee_id && (
//                     <li>Employee ID can be used for attendance and payroll</li>
//                   )}
//                   <li>User can now login with their email and password</li>
//                 </ul>
//               </div>
              
//               <div className="flex flex-col md:flex-row gap-3 pt-4">
//                 {currentUser ? (
//                   <>
//                     <button
//                       onClick={() => navigate("/admin/dashboard")}
//                       className="flex-1 bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3 px-6 rounded-lg font-semibold hover:from-blue-700 hover:to-blue-800 transition-all duration-200 transform hover:scale-[1.02]"
//                     >
//                       Go to Dashboard
//                     </button>
//                     <button
//                       onClick={() => {
//                         setRegistrationSuccess(false);
//                         setRegisteredUserData(null);
//                       }}
//                       className="flex-1 bg-gray-200 text-gray-800 py-3 px-6 rounded-lg font-semibold hover:bg-gray-300 transition-all duration-200"
//                     >
//                       Register Another User
//                     </button>
//                   </>
//                 ) : (
//                   <>
//                     <button
//                       onClick={() => navigate("/login")}
//                       className="flex-1 bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3 px-6 rounded-lg font-semibold hover:from-blue-700 hover:to-blue-800 transition-all duration-200 transform hover:scale-[1.02]"
//                     >
//                       Proceed to Login
//                     </button>
//                     <button
//                       onClick={() => {
//                         setRegistrationSuccess(false);
//                         setRegisteredUserData(null);
//                       }}
//                       className="flex-1 bg-gray-200 text-gray-800 py-3 px-6 rounded-lg font-semibold hover:bg-gray-300 transition-all duration-200"
//                     >
//                       Register Another Account
//                     </button>
//                   </>
//                 )}
//               </div>
              
//               <div className="text-center pt-4">
//                 <p className="text-gray-600 text-sm">
//                   Auto redirecting in <span className="font-bold text-blue-600">8 seconds</span>...
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   }

//   // Original registration form
//   return (
//     <div className="min-h-screen flex items-center justify-center bg-[#0098F1] p-4">
//       <div
//         className="bg-gradient-to-b w-full max-w-xl rounded-3xl"
//         style={{
//           background:
//             "linear-gradient(180deg, rgba(0, 88, 139, 0.1936) 0%, rgba(0, 88, 139, 0.1936) 100%)",
//         }}
//       >
//         <div className="text-center py-8">
//           <h2 className="text-2xl font-medium text-white">
//             {isPublicRegistration ? "Create an Account" : "Register New User"}
//           </h2>
//           <p className="text-white mt-2">
//             {isPublicRegistration 
//               ? "Fill in your details to register as an employee" 
//               : `Registering new user (Logged in as: ${currentUser ? roleDisplayNames[reverseRoleMap[currentUser.role]] || currentUser.role : 'Admin'})`}
//           </p>
//         </div>
        
//         {error && typeof error === 'string' && (
//           <div className="mx-8 mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded">
//             {error}
//           </div>
//         )}
        
//         <form onSubmit={handleSubmit} className="space-y-4 p-4 md:p-8">
//           <div>
//             <label htmlFor="role" className="block text-white text-sm font-medium mb-1">
//               Role *
//             </label>
//             <select
//               id="role"
//               className="w-full p-3 h-12 border border-zinc-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white transition-all duration-200"
//               value={role}
//               onChange={(e) => {
//                 setRole(e.target.value);
//                 setValidationErrors(prev => ({...prev, role: null}));
//               }}
//               required
//               disabled={isLoading}
//             >
//               <option value="">Select Role</option>
//               {availableRoles.map((roleOption) => (
//                 <option key={roleOption.value} value={roleOption.value}>
//                   {roleOption.label}
//                 </option>
//               ))}
//             </select>
//             {validationErrors.role && (
//               <p className="text-red-500 text-sm mt-1 animate-pulse">{validationErrors.role}</p>
//             )}
//             <p className="text-gray-200 text-xs mt-1">
//               {isPublicRegistration 
//                 ? "Public registration available for employees only"
//                 : `You can register: ${availableRoles.map(r => r.label).join(', ')}`}
//             </p>
//           </div>
          
//           <div>
//             <label htmlFor="name" className="block text-white text-sm font-medium mb-1">
//               Full Name *
//             </label>
//             <input
//               type="text"
//               id="name"
//               placeholder="Enter your full name"
//               className="w-full p-3 h-12 border border-zinc-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white transition-all duration-200"
//               value={name}
//               onChange={(e) => {
//                 setName(e.target.value);
//                 setValidationErrors(prev => ({...prev, name: null}));
//               }}
//               required
//               disabled={isLoading}
//             />
//             {validationErrors.name && (
//               <p className="text-red-500 text-sm mt-1 animate-pulse">{validationErrors.name}</p>
//             )}
//           </div>
          
//           <div>
//             <label htmlFor="email" className="block text-white text-sm font-medium mb-1">
//               Email Address *
//             </label>
//             <input
//               type="email"
//               id="email"
//               placeholder="Enter your email address"
//               className="w-full p-3 h-12 border border-zinc-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white transition-all duration-200"
//               value={email}
//               onChange={(e) => {
//                 setEmail(e.target.value);
//                 setValidationErrors(prev => ({...prev, email: null}));
//               }}
//               required
//               disabled={isLoading}
//             />
//             {validationErrors.email && (
//               <p className="text-red-500 text-sm mt-1 animate-pulse">{validationErrors.email}</p>
//             )}
//           </div>
          
//           <div className="relative">
//             <label htmlFor="password" className="block text-white text-sm font-medium mb-1">
//               Password *
//             </label>
//             <input
//               type={passwordVisible ? "text" : "password"}
//               id="password"
//               placeholder="Create a strong password"
//               className="w-full p-3 h-12 border border-zinc-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white pr-12 transition-all duration-200"
//               value={password}
//               onChange={(e) => {
//                 setPassword(e.target.value);
//                 setValidationErrors(prev => ({...prev, password: null}));
//               }}
//               required
//               disabled={isLoading}
//             />
//             <button
//               type="button"
//               className="absolute inset-y-0 right-3 flex items-center cursor-pointer focus:outline-none"
//               onClick={togglePasswordVisibility}
//               style={{ top: '25px' }}
//               disabled={isLoading}
//             >
//               {passwordVisible ? (
//                 <FaEyeSlash className="text-gray-500 hover:text-gray-700" />
//               ) : (
//                 <FaEye className="text-gray-500 hover:text-gray-700" />
//               )}
//             </button>
//             {validationErrors.password && (
//               <p className="text-red-500 text-sm mt-1 animate-pulse">{validationErrors.password}</p>
//             )}
//             <div className="text-gray-200 text-xs mt-1 space-y-1">
//               <p>Password must contain:</p>
//               <ul className="list-disc list-inside pl-2">
//                 <li>At least 6 characters</li>
//                 <li>Uppercase letter (A-Z)</li>
//                 <li>Lowercase letter (a-z)</li>
//                 <li>Number (0-9)</li>
//               </ul>
//             </div>
//           </div>
          
//           <div className="relative">
//             <label htmlFor="confirmPassword" className="block text-white text-sm font-medium mb-1">
//               Confirm Password *
//             </label>
//             <input
//               type={confirmPasswordVisible ? "text" : "password"}
//               id="confirmPassword"
//               placeholder="Re-enter your password"
//               className="w-full p-3 h-12 border border-zinc-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white pr-12 transition-all duration-200"
//               value={confirmPassword}
//               onChange={(e) => {
//                 setConfirmPassword(e.target.value);
//                 setValidationErrors(prev => ({...prev, confirmPassword: null}));
//               }}
//               required
//               disabled={isLoading}
//             />
//             <button
//               type="button"
//               className="absolute inset-y-0 right-3 flex items-center cursor-pointer focus:outline-none"
//               onClick={toggleConfirmPasswordVisibility}
//               style={{ top: '25px' }}
//               disabled={isLoading}
//             >
//               {confirmPasswordVisible ? (
//                 <FaEyeSlash className="text-gray-500 hover:text-gray-700" />
//               ) : (
//                 <FaEye className="text-gray-500 hover:text-gray-700" />
//               )}
//             </button>
//             {validationErrors.confirmPassword && (
//               <p className="text-red-500 text-sm mt-1 animate-pulse">{validationErrors.confirmPassword}</p>
//             )}
//           </div>
          
//           <div className="pt-6">
//             <button
//               type="submit"
//               disabled={isLoading}
//               className="w-full h-14 rounded-md text-white bg-blue-600 hover:bg-blue-700 font-semibold text-xl disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98]"
//             >
//               {isLoading ? (
//                 <span className="flex items-center justify-center">
//                   <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
//                   Registering...
//                 </span>
//               ) : (
//                 "Register"
//               )}
//             </button>
//           </div>
          
//           <div className="text-center pt-2">
//             <p className="text-gray-200 text-sm">
//               By registering, you agree to our{" "}
//               <Link to="/terms" className="text-white underline hover:no-underline">
//                 Terms of Service
//               </Link>{" "}
//               and{" "}
//               <Link to="/privacy" className="text-white underline hover:no-underline">
//                 Privacy Policy
//               </Link>
//             </p>
//           </div>
//         </form>
        
//         <div className="text-center pb-8 space-y-2">
//           <p className="text-white">
//             Already have an account?{" "}
//             <Link to="/login" className="text-white font-semibold underline hover:no-underline">
//               Login here
//             </Link>
//           </p>
          
//           {!isPublicRegistration && currentUser && (
//             <p className="text-white">
//               <Link 
//                 to="/admin/dashboard" 
//                 className="text-white font-semibold underline hover:no-underline"
//               >
//                 ← Back to Dashboard
//               </Link>
//             </p>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Register;




import React, { useState } from "react";
import { FaEye, FaEyeSlash, FaCheckCircle, FaIdCard, FaCopy } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../../../../store/slices/authSlice";
import { toast } from "react-toastify";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("employee");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
  const [validationErrors, setValidationErrors] = useState({});
  const [registrationSuccess, setRegistrationSuccess] = useState(false);
  const [registeredUserData, setRegisteredUserData] = useState(null);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isLoading, error, user: currentUser } = useSelector((state) => state.auth);

  const roleHierarchy = {
    super_admin: ["super_admin", "hr_admin", "admin", "employee"],
    hr_admin: ["employee"],
    admin: ["employee"],
    employee: [],
  };

  const roleMap = {
    superAdmin: "super_admin",
    hrAdmin: "hr_admin",
    admin: "admin",
    employee: "employee",
  };

  const reverseRoleMap = {
    super_admin: "superAdmin",
    hr_admin: "hrAdmin",
    admin: "admin",
    employee: "employee",
  };

  const roleDisplayNames = {
    superAdmin: "Super Admin",
    hrAdmin: "HR Admin",
    admin: "Admin",
    employee: "Employee",
  };

  const getAvailableRoles = () => {
    if (!currentUser) {
      return [{ value: "employee", label: "Employee", backendValue: "employee" }];
    }
    const allowedBackendRoles = roleHierarchy[currentUser.role] || [];
    return allowedBackendRoles.map((backendRole) => {
      const frontendValue = reverseRoleMap[backendRole] || backendRole;
      return {
        value: frontendValue,
        label: roleDisplayNames[frontendValue] || backendRole,
        backendValue: backendRole,
      };
    });
  };

  const availableRoles = getAvailableRoles();
  const isPublicRegistration = !currentUser;

  const validateForm = () => {
    const errors = {};
    if (!name.trim()) errors.name = "Name is required";
    else if (name.trim().length < 2) errors.name = "Name must be at least 2 characters";

    if (!email.trim()) errors.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errors.email = "Invalid email format";

    if (!password) errors.password = "Password is required";
    else if (password.length < 6) errors.password = "Password must be at least 6 characters";
    else if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/.test(password))
      errors.password = "Password must contain uppercase, lowercase and number";

    if (!confirmPassword) errors.confirmPassword = "Please confirm password";
    else if (password !== confirmPassword) errors.confirmPassword = "Passwords do not match";

    if (!role) errors.role = "Please select a role";

    return errors;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setValidationErrors({});
    setRegistrationSuccess(false);
    setRegisteredUserData(null);

    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      setValidationErrors(errors);
      toast.error("Please fix the form errors");
      return;
    }

    const backendRole = roleMap[role] || role;
    const userData = {
      name: name.trim(),
      email: email.trim().toLowerCase(),
      password,
      role: backendRole,
    };

    try {
      const result = await dispatch(register(userData)).unwrap();

      setRegistrationSuccess(true);
      setRegisteredUserData(result.data);

      toast.success(
        <div>
          <div className="font-bold">Registration Successful!</div>
          {result.data?.employee_id && (
            <div className="text-sm mt-1">
              Employee ID:{" "}
              <span className="font-mono font-bold">{result.data.employee_id}</span>
            </div>
          )}
        </div>,
        { autoClose: 5000 }
      );

      setName("");
      setEmail("");
      setPassword("");
      setConfirmPassword("");
      setRole("employee");

      setTimeout(() => {
        if (currentUser) {
          if (currentUser.role === "super_admin" || currentUser.role === "hr_admin") {
            navigate("/hr");
          } else if (currentUser.role === "admin") {
            navigate("/admin/dashboard");
          } else {
            navigate("/login");
          }
        } else {
          navigate("/login");
        }
      }, 8000);
    } catch (err) {
      let message = "Registration failed. Please try again.";
      if (typeof err === "string") message = err;
      else if (err?.message) message = err.message;

      if (message.includes("already registered") || message.includes("Email already")) {
        message = "Email already registered. Please use a different email.";
      } else if (message.includes("permission")) {
        message = "You don't have permission to register this role.";
      } else if (message.includes("Public registration")) {
        message = "Public registration is only available for employees.";
      }

      toast.error(message);
    }
  };

  const copyToClipboard = (text) => {
    navigator.clipboard
      .writeText(text)
      .then(() => toast.success("Copied to clipboard!"))
      .catch(() => toast.error("Failed to copy"));
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#0098F1]">
        <div className="text-center p-8 border-white border-4 rounded-xl">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white mx-auto mb-4"></div>
          <h2 className="text-white text-lg font-semibold">Registering user...</h2>
        </div>
      </div>
    );
  }

  if (registrationSuccess && registeredUserData) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#0098F1] p-4">
        <div className="bg-white w-full max-w-2xl rounded-3xl shadow-2xl overflow-hidden">
          <div className="bg-gradient-to-r from-green-500 to-emerald-600 py-8 px-6 text-center">
            <div className="flex justify-center mb-4">
              <div className="bg-white p-4 rounded-full">
                <FaCheckCircle className="text-5xl text-green-500" />
              </div>
            </div>
            <h2 className="text-3xl font-bold text-white mb-2">
              Registration Successful! 🎉
            </h2>
            <p className="text-white text-lg">User account has been created</p>
          </div>

          <div className="p-6 md:p-8">
            <div className="bg-gray-50 rounded-xl p-6 mb-6 border border-gray-200">
              <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                <FaIdCard className="mr-2 text-blue-500" />
                User Registration Details
              </h3>

              {registeredUserData.employee_id && (
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border-l-4 border-blue-500 p-4 rounded-r-lg mb-4">
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-sm text-gray-600 font-medium">Employee ID</p>
                      <p className="text-2xl font-bold text-gray-900 font-mono">
                        {registeredUserData.employee_id}
                      </p>
                    </div>
                    <button
                      onClick={() => copyToClipboard(registeredUserData.employee_id)}
                      className="flex items-center gap-2 bg-blue-100 hover:bg-blue-200 text-blue-700 px-4 py-2 rounded-lg"
                    >
                      <FaCopy /> Copy
                    </button>
                  </div>
                </div>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-lg border">
                  <p className="text-sm text-gray-500">Full Name</p>
                  <p className="text-lg font-semibold">{registeredUserData.name}</p>
                </div>
                <div className="bg-white p-4 rounded-lg border">
                  <p className="text-sm text-gray-500">Email</p>
                  <p className="text-lg font-semibold">{registeredUserData.email}</p>
                </div>
                <div className="bg-white p-4 rounded-lg border">
                  <p className="text-sm text-gray-500">Role</p>
                  <p className="text-lg font-semibold">
                    {registeredUserData.role}
                  </p>
                </div>
                <div className="bg-white p-4 rounded-lg border">
                  <p className="text-sm text-gray-500">Status</p>
                  <p className="text-lg font-semibold text-green-600">Active</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-3">
              <button
                onClick={() => {
                  if (currentUser?.role === "super_admin" || currentUser?.role === "hr_admin") {
                    navigate("/hr");
                  } else if (currentUser?.role === "admin") {
                    navigate("/admin/dashboard");
                  } else {
                    navigate("/login");
                  }
                }}
                className="flex-1 bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700"
              >
                {currentUser ? "Go to Dashboard" : "Proceed to Login"}
              </button>
              <button
                onClick={() => {
                  setRegistrationSuccess(false);
                  setRegisteredUserData(null);
                }}
                className="flex-1 bg-gray-200 text-gray-800 py-3 px-6 rounded-lg font-semibold hover:bg-gray-300"
              >
                Register Another
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0098F1] p-4">
      <div
        className="w-full max-w-xl rounded-3xl"
        style={{
          background:
            "linear-gradient(180deg, rgba(0, 88, 139, 0.1936) 0%, rgba(0, 88, 139, 0.1936) 100%)",
        }}
      >
        <div className="text-center py-8">
          <h2 className="text-2xl font-medium text-white">
            {isPublicRegistration ? "Create an Account" : "Register New User"}
          </h2>
          <p className="text-white mt-2">
            {isPublicRegistration
              ? "Fill in your details to register as an employee"
              : `Registering as: ${currentUser?.role}`}
          </p>
        </div>

        {error && typeof error === "string" && (
          <div className="mx-8 mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4 p-4 md:p-8">
          <div>
            <label className="block text-white text-sm font-medium mb-1">Role *</label>
            <select
              className="w-full p-3 h-12 border rounded-md focus:ring-2 focus:ring-blue-500 bg-white"
              value={role}
              onChange={(e) => setRole(e.target.value)}
              disabled={isLoading}
            >
              <option value="">Select Role</option>
              {availableRoles.map((r) => (
                <option key={r.value} value={r.value}>
                  {r.label}
                </option>
              ))}
            </select>
            <p className="text-gray-200 text-xs mt-1">
              {isPublicRegistration
                ? "Public registration available for employees only"
                : `You can register: ${availableRoles.map((r) => r.label).join(", ")}`}
            </p>
          </div>

          <div>
            <label className="block text-white text-sm font-medium mb-1">Full Name *</label>
            <input
              type="text"
              className="w-full p-3 h-12 border rounded-md bg-white"
              value={name}
              onChange={(e) => setName(e.target.value)}
              disabled={isLoading}
              placeholder="Enter full name"
            />
            {validationErrors.name && (
              <p className="text-red-500 text-sm mt-1">{validationErrors.name}</p>
            )}
          </div>

          <div>
            <label className="block text-white text-sm font-medium mb-1">Email *</label>
            <input
              type="email"
              className="w-full p-3 h-12 border rounded-md bg-white"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={isLoading}
              placeholder="Enter email"
            />
            {validationErrors.email && (
              <p className="text-red-500 text-sm mt-1">{validationErrors.email}</p>
            )}
          </div>

          <div className="relative">
            <label className="block text-white text-sm font-medium mb-1">Password *</label>
            <input
              type={passwordVisible ? "text" : "password"}
              className="w-full p-3 h-12 border rounded-md bg-white pr-12"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              disabled={isLoading}
              placeholder="Create a strong password"
            />
            <button
              type="button"
              className="absolute right-3 top-9"
              onClick={() => setPasswordVisible(!passwordVisible)}
            >
              {passwordVisible ? <FaEyeSlash /> : <FaEye />}
            </button>
            {validationErrors.password && (
              <p className="text-red-500 text-sm mt-1">{validationErrors.password}</p>
            )}
          </div>

          <div className="relative">
            <label className="block text-white text-sm font-medium mb-1">Confirm Password *</label>
            <input
              type={confirmPasswordVisible ? "text" : "password"}
              className="w-full p-3 h-12 border rounded-md bg-white pr-12"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              disabled={isLoading}
              placeholder="Re-enter password"
            />
            <button
              type="button"
              className="absolute right-3 top-9"
              onClick={() => setConfirmPasswordVisible(!confirmPasswordVisible)}
            >
              {confirmPasswordVisible ? <FaEyeSlash /> : <FaEye />}
            </button>
            {validationErrors.confirmPassword && (
              <p className="text-red-500 text-sm mt-1">{validationErrors.confirmPassword}</p>
            )}
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full h-14 rounded-md text-white bg-blue-600 hover:bg-blue-700 font-semibold text-xl disabled:opacity-50"
          >
            {isLoading ? "Registering..." : "Register"}
          </button>
        </form>

        <div className="text-center pb-8">
          <p className="text-white">
            Already have an account?{" "}
            <Link to="/login" className="text-white font-semibold underline">
              Login here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Register;