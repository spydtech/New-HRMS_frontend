// /* eslint-disable no-unused-vars */
// /* eslint-disable react/no-unescaped-entities */
// import React, { useState } from "react";
// import { IoMdContact, IoMdEye, IoMdEyeOff } from "react-icons/io";
// import { Link, useNavigate } from "react-router-dom";
// import { useDispatch } from "react-redux";
// import { employee } from "../State/Auth/Action";

// function EmployeeLogin() {
//     const [showPassword, setShowPassword] = useState(false);
//     const [error, setError] = useState(null);
//     const navigate = useNavigate();
//     const dispatch = useDispatch();

//     const handleSubmit = async (event) => {
//         event.preventDefault();
//         const data = new FormData(event.currentTarget);
//         const userData = {
//             email: data.get("email"),
//             password: data.get("password"),
//         };

//         const result = await dispatch(employee(userData));
//         if (result.success) {
//             navigate("/employee");
//         } else {
//             setError(result.message || "Invalid credentials. Please try again.");
//         }
//     };

//     return (
//         <div className="bg-[#0098F1] w-screen h-screen flex items-center justify-center px-4 sm:px-6 md:px-8 lg:px-12">
//             <div
//                 className="relative w-full max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl h-[300px] sm:h-[350px] md:h-[250px] lg:h-[300px] xl:h-[350px] rounded-[20px] md:rounded-[25px] flex flex-col items-center justify-center shadow-xl p-6 md:p-8"
//                 style={{
//                     background:
//                         "linear-gradient(to bottom, rgba(0, 88, 139, 0.2) 19.36%, rgba(0, 88, 139, 0.2) 19.36%)",
//                 }}
//             >
//              <div className="">
//           <h2 className=" text-lg md:text-2xl pb-4 font-medium text-white  ">
//             Login to your account
//           </h2>
//         </div>
//                 <form
//                     onSubmit={handleSubmit}
//                     className="flex flex-col w-full space-y-4"
//                 >
//                     <div className="relative">
//                         <IoMdContact className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[#00588B]" />
//                         <input
//                             id="email"
//                             label="Email"
//                             name="email"
//                             type="email"
//                             placeholder="email"
//                             required
//                             className="w-full h-[50px] px-12 py-2 border bg-[#FFFFFF] border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#00588B]"
//                         />
//                     </div>
//                     <div className="relative">
//                         <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
//                             {showPassword ? (
//                                 <IoMdEyeOff
//                                     className="w-6 h-6 mb-4 text-[#00588B] cursor-pointer"
//                                     onClick={() => setShowPassword(!showPassword)}
//                                 />
//                             ) : (
//                                 <IoMdEye
//                                     className="w-6 h-6 mb-4 text-[#00588B] cursor-pointer"
//                                     onClick={() => setShowPassword(!showPassword)}
//                                 />
//                             )}
//                         </div>
//                         <input
//                             type={showPassword ? "text" : "password"}
//                             id="password"
//                             name="password"
//                             label="Password"
//                             placeholder="password"
//                             required
//                             className="w-full h-[50px] pl-12 pr-4 border bg-[#FFFFFF] border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#00588B]"
//                         />
//                         <div className="text-sm text-white mt-2 text-right">
//                             <Link 
//                                to="/forget-password"
//                             className="hover:underline cursor-pointer">
//                                 Forgot Password?
//                             </Link>
//                         </div>
//                     </div>
//                     {error && <p className="text-red-500 text-sm text-center">{error}</p>}
//                     <button
//                         type="submit"
//                         className="w-full py-2 bg-[#FFFFFF] text-[#0098F1] transition duration-300 hover:bg-[#e0f7ff] focus:outline-none"
//                     >
//                         Log In
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

// export default EmployeeLogin;




/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
import React, { useState } from "react";
import { IoMdContact, IoMdEye, IoMdEyeOff } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../store/slices/authSlice";
import { toast } from "react-toastify";

function EmployeeLogin() {
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleSubmit = async (event) => {
        event.preventDefault();
        setIsLoading(true);
        setError(null);

        const formData = new FormData(event.currentTarget);
        const userData = {
            email: formData.get("email"),
            password: formData.get("password"),
        };

        try {
            // Dispatch login action
            const result = await dispatch(login(userData)).unwrap();
            
            if (result.success) {
                toast.success("Login successful!");
                
                // Redirect based on user role
                const user = JSON.parse(localStorage.getItem('user'));
                switch (user?.role) {
                    case 'super_admin':
                        navigate("/hr");
                        break;
                    case 'hr_admin':
                        navigate("/hr");
                        break;
                    case 'admin':
                        navigate("/admin/dashboard");
                        break;
                    case 'employee':
                        navigate("/employee");
                        break;
                    default:
                        navigate("/dashboard");
                }
            }
        } catch (error) {
            setError(error || "Invalid credentials. Please try again.");
            toast.error(error || "Login failed!");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="bg-[#0098F1] w-screen h-screen flex items-center justify-center px-4 sm:px-6 md:px-8 lg:px-12">
            <div
                className="relative w-full max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl h-auto min-h-[300px] sm:min-h-[350px] rounded-[20px] md:rounded-[25px] flex flex-col items-center justify-center shadow-xl p-6 md:p-8"
                style={{
                    background:
                        "linear-gradient(to bottom, rgba(0, 88, 139, 0.2) 19.36%, rgba(0, 88, 139, 0.2) 19.36%)",
                }}
            >
             <div className="w-full text-center">
                <h2 className="text-lg md:text-2xl pb-4 font-medium text-white">
                    Login to your account
                </h2>
            </div>
                <form
                    onSubmit={handleSubmit}
                    className="flex flex-col w-full space-y-4"
                >
                    <div className="relative">
                        <IoMdContact className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[#00588B]" />
                        <input
                            id="email"
                            name="email"
                            type="email"
                            placeholder="Email"
                            required
                            className="w-full h-[50px] px-12 py-2 border bg-[#FFFFFF] border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#00588B]"
                            disabled={isLoading}
                        />
                    </div>
                    <div className="relative">
                        <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                            {showPassword ? (
                                <IoMdEyeOff
                                    className="w-6 h-6 text-[#00588B] cursor-pointer"
                                    onClick={() => setShowPassword(!showPassword)}
                                />
                            ) : (
                                <IoMdEye
                                    className="w-6 h-6 text-[#00588B] cursor-pointer"
                                    onClick={() => setShowPassword(!showPassword)}
                                />
                            )}
                        </div>
                        <input
                            type={showPassword ? "text" : "password"}
                            id="password"
                            name="password"
                            placeholder="Password"
                            required
                            className="w-full h-[50px] pl-12 pr-4 border bg-[#FFFFFF] border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#00588B]"
                            disabled={isLoading}
                        />
                        <div className="text-sm text-white mt-2 text-right">
                            <Link 
                               to="/forgot-password"
                               className="hover:underline cursor-pointer"
                            >
                                Forgot Password?
                            </Link>
                        </div>
                    </div>
                    {error && <p className="text-red-500 text-sm text-center">{error}</p>}
                    <button
                        type="submit"
                        disabled={isLoading}
                        className="w-full py-3 bg-[#FFFFFF] text-[#0098F1] font-medium rounded-md transition duration-300 hover:bg-[#e0f7ff] focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        {isLoading ? "Logging in..." : "Log In"}
                    </button>
                </form>
                <p className="text-center text-white mt-4">
                    Don't have an account?{" "}
                    <Link to="/register" className="text-[#e0f7ff] hover:underline">
                        Register
                    </Link>
                </p>
            </div>
        </div>
    );
}

export default EmployeeLogin;