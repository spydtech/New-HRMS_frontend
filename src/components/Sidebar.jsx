// // /* eslint-disable no-unused-vars */
// // import React, { useState, useEffect } from "react";
// // import { IoMdMenu } from "react-icons/io";
// // import profile from "../assets/hr/employee/profile/profile.jpg";
// // import NavBar from "./NavBar";
// // import { useDispatch } from "react-redux";
// // import { BsCalendar2CheckFill } from "react-icons/bs";
// // import HolidayTab from "../components/hr/holiday/HolidayList";
// // import AllEmployee from "../components/hr/hr_management/allEmployee/AllEmployee";
// // import LeaveRequest from "../components/hr/hr_management/leaveRequest/LeaveRequest";
// // import Leaves from "../components/hr/hr_management/Leaves/Leaves";
// // import Attendance from "./hr/hr_management/employeAttandance/Attendance";

// // import AccountPayments from "../components/hr/account/AccountPayments";
// // import AccountExpenses from "../components/hr/account/AccountExpenses";
// // import AccountInvoice from "../components/hr/account/AccountInvoice";
// // import ReportInvoice from "../components/hr/report/ReportInvoice";
// // import ReportExpenses from "../components/hr/report/ReportExpenses";
// // import { useSelector } from "react-redux";
// // import ForHrSidebar from "./ForHrSidebar";
// // import ForProjectSidebar from "./ForProjectSidebar";
// // import HrDashboard from "../components/hr/hr_dashboard/HRDashboard";
// // import Activities from "../components/hr/activities/Activities";
// // import Events from "../components/hr/events/Events";
// // import HrSocial from "../components/hr/hr_social/HrSocial";
// // import UserList from "../components/hr/user/UserList";
// // import Dashboard from "../components/project/projectDashboard/Dashboard";
// // import AddProject from "./project/projecttab/AddProject";
// // import ProjectGrid from "./project/projecttab/ProjectGrid";
// // import Tickets from "./project/tickets/Tickets";
// // import Teams from "./project/teams/Teams";
// // import Chat from "./project/chat/Chat";
// // import ProjectList from "./project/projecttab/ProjectList";
// // import ProjectDetails from "./project/projecttab/ProjectDetail";
// // import Attandance from "./hr/hr_management/employeAttandance/Attendance";
// // import Inbox from "./project/inbox/Inbox";
// // //import { getUser } from "../State/Auth/Action";
// // import Compensation from "./hr/hr_management/compensation/Compensation";
// // import PayrollDashboard from "./hr/payroll/payroll_dashboard/PayrollDashboard";
// // import PaySlip from "./hr/payroll/paySlips/PaySlips";
// // import Settlement from "./hr/payroll/settlement/Settlement";
// // import PayrollSettings from "./hr/payroll/payroll_setting/PayrollSettings";
// // import PayrollForms from "./hr/payroll/payroll_forms/PayrollForms";
// // import OnBoarding from "./hr/hr_management/onBoarding/OnBoarding";
// // import ITDeclarations from "./hr/hr_management/it_Declarations/ITDeclarations";
// // import PayrollSummary from "./hr/payroll/payrollSummary/PayrollSummary";
// // import RunPayRoll from "./hr/payroll/runPayRoll/RunPayroll";
// // import Department from "./hr/hr_management/department/DepartmentList";
// // import EmployeePasswordReq from "./hr/hr_management/employePasswordReq/EmployeePasswordReq";

// // import { useNavigate } from "react-router-dom";
// // import {
// //   FaTachometerAlt,
// //   FaCalendarAlt,
// //   FaCalendarCheck,
// //   FaMoneyCheckAlt,
// //   FaLock,
// //   FaUsers,
// //   FaBuilding,
// // } from "react-icons/fa";
// // import { GiPayMoney } from "react-icons/gi";
// // import { MdOutlinePayment } from "react-icons/md";
// // import { MdAdminPanelSettings } from "react-icons/md";
// // import { RiMoneyRupeeCircleFill } from "react-icons/ri";
// // import { FaMoneyBillTransfer } from "react-icons/fa6";
// // import { GiTakeMyMoney } from "react-icons/gi";
// // import { TbMoneybag } from "react-icons/tb";
// // import { MdOutlineSocialDistance } from "react-icons/md";
// // import { GoProjectSymlink, GoProjectRoadmap } from "react-icons/go";
// // import { GrProjects } from "react-icons/gr";
// // import { TbListDetails } from "react-icons/tb";
// // import {
// //   FaTasks,
// //   FaUserFriends,
// //   FaFileAlt,
// //   FaUser,
// //   FaClipboardList,
// // } from "react-icons/fa";
// // const SideBar = () => {
// //   const [activeTab, setActiveTab] = useState(
// //     localStorage.getItem("HR_ACTIVE_TAB") || "Hr Dashboard"
// //   );
// //   const [selectedHeader, setSelectedHeader] = useState(
// //     localStorage.getItem("HR_HEADER") || "Hr"
// //   );
// //   const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
// //   const [profileImage, setProfileImage] = useState(profile);
// //   const [tooltip, setTooltip] = useState({
// //     show: false,
// //     title: "",
// //     position: { x: 0, y: 0 },
// //   });
// //   const payrollOptions = [
// //     { title: "DashBoard", icon: <TbMoneybag /> },
// //     { title: "Run payroll", icon: <GiPayMoney /> },
// //     { title: "Payroll Summary", icon: <MdOutlinePayment /> },
// //     { title: "Payroll settings", icon: <MdAdminPanelSettings /> },

// //     { title: "Payslips", icon: <RiMoneyRupeeCircleFill /> },
// //     { title: "Settlements", icon: <FaMoneyBillTransfer /> },
// //     { title: "Payroll Forms", icon: <GiTakeMyMoney /> },
// //   ];

// //   const authOptions = [
// //     { title: "Logout", link: "/option", icon: <FaBuilding /> },
// //     { title: "Register", link: "/register", icon: <FaBuilding /> },
// //     {
// //       title: "Forgot Password",
// //       link: "/forget-password",
// //       icon: <FaBuilding />,
// //     },
// //     { title: "Page 404", link: "/404", icon: <FaBuilding /> },
// //   ];
// //   const employeeOptions = [
// //     { title: "All Employees", icon: <FaUsers /> },
// //     { title: "Compensation", icon: <FaBuilding /> },

// //     { title: "IT Declarations", icon: <FaBuilding /> },
// //     { title: "Leaves", icon: <FaBuilding /> },
// //     { title: "Emp Attendance", icon: <FaCalendarCheck /> },
// //     { title: "Department", icon: <FaBuilding /> },
// //     { title: "Emp password Request", icon: <BsCalendar2CheckFill /> },

// //     { title: "Onboarding", icon: <FaBuilding /> },
// //   ];

// //   const reportOptions = [
// //     { title: "Report Invoice", icon: <FaFileAlt /> },
// //     { title: "Report Expenses", icon: <FaFileAlt /> },
// //   ];

// //   const accountOptions = [
// //     { title: "Account Payment", icon: <FaMoneyCheckAlt /> },
// //     { title: "Account Expenses", icon: <FaMoneyCheckAlt /> },
// //     { title: "Account Invoice", icon: <FaMoneyCheckAlt /> },
// //   ];
// //   const options = [
// //     { title: "Hr Dashboard", icon: <FaTachometerAlt /> },
// //     { title: "Holiday", icon: <FaCalendarAlt /> },
// //     { title: "Events", icon: <FaCalendarCheck /> },
// //     { title: "Activities", icon: <FaTasks /> },
// //     { title: "HR Social", icon: <MdOutlineSocialDistance /> },
// //     {
// //       title: "HR Management",
// //       icon: <FaUserFriends />,
// //       subOptions: employeeOptions,
// //     },
// //     {
// //       title: "PayRoll",
// //       icon: <FaMoneyCheckAlt />,
// //       subOptions: payrollOptions,
// //     },
// //     {
// //       title: "Reports",
// //       icon: <FaFileAlt />,
// //       subOptions: reportOptions,
// //     },
// //     {
// //       title: "Accounts",
// //       icon: <FaMoneyCheckAlt />,
// //       subOptions: accountOptions,
// //     },
// //     {
// //       title: "Authentication",
// //       icon: <FaLock />,
// //       subOptions: authOptions,
// //     },
// //   ];
// //   const projectDropdownOptions = [
// //     { title: "Add Project", icon: <GoProjectSymlink /> },
// //     { title: "Project List", icon: <GoProjectRoadmap /> },
// //     { title: "Project Grid", icon: <GrProjects /> },
// //     { title: "Project Detail", icon: <TbListDetails /> },
// //   ];

// //   const projectOptions = [
// //     { title: "Dashboard", icon: <FaTachometerAlt /> },
// //     // { title: "Inbox", icon: <FaFileAlt /> },
// //     { title: "Chat", icon: <FaUser /> },
// //     {
// //       title: "Project",
// //       icon: <FaTasks />,
// //       subOptions: projectDropdownOptions,
// //     },
// //     { title: "Clients", icon: <FaUserFriends /> },
// //     { title: "Teams", icon: <FaUsers /> },
// //     { title: "Tickets", icon: <FaClipboardList /> },
// //   ];

// //   const handleImageUpload = (event) => {
// //     const file = event.target.files[0];
// //     if (file) {
// //       const reader = new FileReader();
// //       reader.onload = (e) => {
// //         setProfileImage(e.target.result); // Set the image URL
// //       };
// //       reader.readAsDataURL(file);
// //     }
// //   };

// //   const triggerFileInput = () => {
// //     document.getElementById("fileInput").click();
// //   };
// //   const jwt = localStorage.getItem("hrJwt");
// //   const auth = useSelector((state) => state.auth);
// //   const dispatch = useDispatch();

// //   const handleHeaderClick = (header) => {
// //     localStorage.setItem("HR_HEADER", header);
// //     setSelectedHeader(header);
// //   };

// //   const handleMouseOver = (event, title) => {
// //     if (isSidebarCollapsed) {
// //       const rect = event.currentTarget.getBoundingClientRect();
// //       setTooltip({
// //         show: true,
// //         title,
// //         position: { x: rect.right + 10, y: rect.top },
// //       });
// //     }
// //   };

// //   const handleMouseOut = () => {
// //     setTooltip({ show: false, title: "", position: { x: 0, y: 0 } });
// //   };

// //   useEffect(() => {
// //     const handleResize = () => {
// //       if (window.innerWidth < 768) {
// //         setIsSidebarCollapsed(true);
// //       }
// //     };

// //     handleResize();
// //     window.addEventListener("resize", handleResize);

// //     return () => {
// //       window.removeEventListener("resize", handleResize);
// //     };
// //   }, []);

// //   const toggleSidebar = () => {
// //     if (window.innerWidth >= 768) {
// //       setIsSidebarCollapsed(!isSidebarCollapsed);
// //     }
// //   };

// //   useEffect(() => {
// //     if (jwt) {
// //       dispatch(getUser(jwt));
// //     }
// //   }, [jwt, auth.jwt, dispatch]);

// //   const handleIconClick = (iconTitle) => {
// //     setActiveTab(iconTitle);
// //   };

// //   return (
// //     <div className="relative h-auto bg-[#0088f1] bg-opacity-10">
// //       <NavBar
// //         onIconClick={handleIconClick}
// //         options={options}
// //         projectOptions={projectOptions}
// //       />
// //       <div
// //         className={`fixed top-0 h-screen pb-10 bg-[#0098f1] text-white overflow-x-hidden scrollbar-thin scrollbar-thumb-transparent scrollbar-track-transparent ${
// //           isSidebarCollapsed ? "w-16" : "w-[240px]"
// //         } transition-all duration-300 ease-in-out`}
// //       >
// //         <div className="flex justify-between items-center pt-10 pb-5 pl-5">
// //           <IoMdMenu
// //             className="text-white h-[30px] absolute top-4 cursor-pointer"
// //             onClick={toggleSidebar}
// //           />
// //         </div>
// //         <div>
// //           {!isSidebarCollapsed && (
// //             <>
// //               <div className="flex items-center  w-64 relative top-0 pb-4 px-2">
// //                 <img
// //                   src={profileImage}
// //                   className="rounded-full w-[50px] h-[50px] cursor-pointer"
// //                   alt="Profile"
// //                   onClick={triggerFileInput}
// //                 />
// //                 <input
// //                   id="fileInput"
// //                   type="file"
// //                   accept="image/*"
// //                   style={{ display: "none" }}
// //                   onChange={handleImageUpload}
// //                 />

// //                 <p className="text-[16px] uppercase leading-4 font-bold text-wrap text-white pb-8 pl-2">
// //                   {/* Welcome{" "} */}
// //                   {auth.user ? auth.user.firstName : "User"}
// //                   {/* {auth.employee
// //                       ? auth.employee.firstName.toUpperCase() +
// //                         " " +
// //                         auth.employee.lastName.toUpperCase()
// //                       : "User Name"} */}
// //                 </p>
// //               </div>
// //               <div className=" flex relative bottom-10 left-14">
// //                 <p className="text-[16px] leading-4 text-wrap w-48  text-white pl-2">
// //                   {/* {auth.employee
// //                       ? auth.employee.designation
// //                       : "user designation"} */}
// //                   Super Admin
// //                 </p>
// //               </div>
// //             </>
// //           )}
// //         </div>

// //         {!isSidebarCollapsed && (
// //           <div className="text-[16px] text-white flex justify-around pr-5 pb-3 items-center">
// //             <span
// //               className={`cursor-pointer ${
// //                 selectedHeader === "Hr"
// //                   ? "underline decoration-2 underline-offset-8"
// //                   : ""
// //               }`}
// //               onClick={() => handleHeaderClick("Hr")}
// //             >
// //               Hr
// //             </span>
// //             <span
// //               className={`cursor-pointer ${
// //                 selectedHeader === "Project"
// //                   ? "underline decoration-3 underline-offset-8"
// //                   : ""
// //               }`}
// //               onClick={() => handleHeaderClick("Project")}
// //             >
// //               Projects
// //             </span>
// //           </div>
// //         )}
// //         {selectedHeader === "Hr" && (
// //           <ForHrSidebar
// //             isSidebarCollapsed={isSidebarCollapsed}
// //             activeTab={activeTab}
// //             setActiveTab={setActiveTab}
// //             handleMouseOver={handleMouseOver}
// //             handleMouseOut={handleMouseOut}
// //           />
// //         )}
// //         {selectedHeader === "Project" && (
// //           <ForProjectSidebar
// //             isSidebarCollapsed={isSidebarCollapsed}
// //             activeTab={activeTab}
// //             setActiveTab={setActiveTab}
// //             handleMouseOver={handleMouseOver}
// //             handleMouseOut={handleMouseOut}
// //           />
// //         )}
// //       </div>

// //       <div
// //         className={`flex-1  ml-4 transition-all ${
// //           isSidebarCollapsed ? "ml-[70px]" : "ml-[240px]"
// //         }`}
// //       >
// //         {activeTab === "Holiday" && <HolidayTab />}
// //         {activeTab === "Events" && <Events />}
// //         {activeTab === "Department" && <Department />}
// //         {activeTab === "Activities" && <Activities />}
// //         {activeTab === "HR Social" && <HrSocial />}
// //         {activeTab === "All Employees" && <AllEmployee />}
// //         {activeTab === "Emp password Request" && <EmployeePasswordReq />}

// //         {activeTab === "Report Invoice" && <ReportInvoice />}
// //         {activeTab === "Report Expenses" && <ReportExpenses />}
// //         {activeTab === "Account Payment" && <AccountPayments />}
// //         {activeTab === "Account Expenses" && <AccountExpenses />}
// //         {activeTab === "Account Invoice" && <AccountInvoice />}
// //         {activeTab === "Dashboard" && <Dashboard />}
// //         {activeTab === "Inbox" && <Inbox />}
// //         {activeTab === "Chat" && <Chat />}
// //         {activeTab === "Add Project" && <AddProject />}
// //         {activeTab === "Project List" && <ProjectList />}
// //         {activeTab === "Project Grid" && <ProjectGrid />}
// //         {activeTab === "Project Detail" && <ProjectDetails />}
// //         {activeTab === "Clients" && <UserList />}
// //         {activeTab === "Teams" && <Teams />}
// //         {activeTab === "Tickets" && <Tickets />}
// //         {activeTab === "Compensation" && <Compensation />}
// //         {activeTab === "DashBoard" && <PayrollDashboard />}
// //         {activeTab === "Payslips" && <PaySlip />}
// //         {activeTab === "Settlements" && <Settlement />}
// //         {activeTab === "Payroll settings" && <PayrollSettings />}
// //         {activeTab === "Payroll Forms" && <PayrollForms />}
// //         {activeTab === "Onboarding" && <OnBoarding />}
// //         {activeTab === "IT Declarations" && <ITDeclarations />}
// //         {activeTab === "Payroll Summary" && <PayrollSummary />}
// //         {activeTab === "Run payroll" && <RunPayRoll />}
// //         {activeTab === "Emp Attendance" && <Attandance />}
// //         {activeTab === "Leaves" && <Leaves />}
// //         {activeTab === "Hr Dashboard" && <HrDashboard />}
// //       </div>

// //       {tooltip.show && (
// //         <div
// //           className="absolute  bg-white text-[#0098f1] p-2  rounded-md shadow-lg z-50"
// //           style={{
// //             top: `${tooltip.position.y}px`,
// //             left: `${tooltip.position.x}px`,
// //           }}
// //         >
// //           {tooltip.title}
// //         </div>
// //       )}
// //     </div>
// //   );
// // };

// // export default SideBar;





// import React, { useState, useEffect } from "react";
// import { IoMdMenu } from "react-icons/io";
// import profile from "../assets/hr/employee/profile/profile.jpg";
// import NavBar from "./NavBar";
// import { useDispatch, useSelector } from "react-redux";
// import { BsCalendar2CheckFill } from "react-icons/bs";
// import HolidayTab from "../components/hr/holiday/HolidayList";
// import AllEmployee from "../components/hr/hr_management/allEmployee/AllEmployee";
// import LeaveRequest from "../components/hr/hr_management/leaveRequest/LeaveRequest";
// import Leaves from "../components/hr/hr_management/Leaves/Leaves";
// import Attendance from "./hr/hr_management/employeAttandance/Attendance";
// import AccountPayments from "../components/hr/account/AccountPayments";
// import AccountExpenses from "../components/hr/account/AccountExpenses";
// import AccountInvoice from "../components/hr/account/AccountInvoice";
// import ReportInvoice from "../components/hr/report/ReportInvoice";
// import ReportExpenses from "../components/hr/report/ReportExpenses";
// import ForHrSidebar from "./ForHrSidebar";
// import ForProjectSidebar from "./ForProjectSidebar";
// import HrDashboard from "../components/hr/hr_dashboard/HRDashboard";
// import Activities from "../components/hr/activities/Activities";
// import Events from "../components/hr/events/Events";
// import HrSocial from "../components/hr/hr_social/HrSocial";
// import UserList from "../components/hr/user/UserList";
// import Dashboard from "../components/project/projectDashboard/Dashboard";
// import AddProject from "./project/projecttab/AddProject";
// import ProjectGrid from "./project/projecttab/ProjectGrid";
// import Tickets from "./project/tickets/Tickets";
// import Teams from "./project/teams/Teams";
// import Chat from "./project/chat/Chat";
// import ProjectList from "./project/projecttab/ProjectList";
// import ProjectDetails from "./project/projecttab/ProjectDetail";
// import Attandance from "./hr/hr_management/employeAttandance/Attendance";
// import Inbox from "./project/inbox/Inbox";
// import Compensation from "./hr/hr_management/compensation/Compensation";
// import PayrollDashboard from "./hr/payroll/payroll_dashboard/PayrollDashboard";
// import PaySlip from "./hr/payroll/paySlips/PaySlips";
// import Settlement from "./hr/payroll/settlement/Settlement";
// import PayrollSettings from "./hr/payroll/payroll_setting/PayrollSettings";
// import PayrollForms from "./hr/payroll/payroll_forms/PayrollForms";
// import OnBoarding from "./hr/hr_management/onBoarding/OnBoarding";
// import ITDeclarations from "./hr/hr_management/it_Declarations/ITDeclarations";
// import PayrollSummary from "./hr/payroll/payrollSummary/PayrollSummary";
// import RunPayRoll from "./hr/payroll/runPayRoll/RunPayroll";
// import Department from "./hr/hr_management/department/DepartmentList";
// import EmployeePasswordReq from "./hr/hr_management/employePasswordReq/EmployeePasswordReq";
// import { useNavigate } from "react-router-dom";
// import { FaTachometerAlt, FaCalendarAlt, FaCalendarCheck, FaMoneyCheckAlt, FaLock, FaUsers, FaBuilding } from "react-icons/fa";
// import { GiPayMoney } from "react-icons/gi";
// import { MdOutlinePayment, MdAdminPanelSettings, MdOutlineSocialDistance } from "react-icons/md";
// import { RiMoneyRupeeCircleFill } from "react-icons/ri";
// import { FaMoneyBillTransfer } from "react-icons/fa6";
// import { GiTakeMyMoney } from "react-icons/gi";
// import { TbMoneybag } from "react-icons/tb";
// import { GoProjectSymlink, GoProjectRoadmap } from "react-icons/go";
// import { GrProjects } from "react-icons/gr";
// import { TbListDetails } from "react-icons/tb";
// import { FaTasks, FaUserFriends, FaFileAlt, FaUser, FaClipboardList } from "react-icons/fa";
// import { getUser } from "../store/slices/authSlice";

// const SideBar = () => {
//     const [activeTab, setActiveTab] = useState(
//         localStorage.getItem("HR_ACTIVE_TAB") || "Hr Dashboard"
//     );
//     const [selectedHeader, setSelectedHeader] = useState(
//         localStorage.getItem("HR_HEADER") || "Hr"
//     );
//     const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
//     const [profileImage, setProfileImage] = useState(profile);
//     const [tooltip, setTooltip] = useState({
//         show: false,
//         title: "",
//         position: { x: 0, y: 0 },
//     });

//     const dispatch = useDispatch();
//     const navigate = useNavigate();
//     const auth = useSelector((state) => state.auth);

//     // Payroll options
//     const payrollOptions = [
//         { title: "DashBoard", icon: <TbMoneybag /> },
//         { title: "Run payroll", icon: <GiPayMoney /> },
//         { title: "Payroll Summary", icon: <MdOutlinePayment /> },
//         { title: "Payroll settings", icon: <MdAdminPanelSettings /> },
//         { title: "Payslips", icon: <RiMoneyRupeeCircleFill /> },
//         { title: "Settlements", icon: <FaMoneyBillTransfer /> },
//         { title: "Payroll Forms", icon: <GiTakeMyMoney /> },
//     ];

//     // Auth options
//     const authOptions = [
//         { title: "Logout", link: "/logout", icon: <FaBuilding /> },
//         { title: "Register", link: "/register", icon: <FaBuilding /> },
//         { title: "Forgot Password", link: "/forgot-password", icon: <FaBuilding /> },
//         { title: "Page 404", link: "/404", icon: <FaBuilding /> },
//     ];

//     // Employee options
//     const employeeOptions = [
//         { title: "All Employees", icon: <FaUsers /> },
//         { title: "Compensation", icon: <FaBuilding /> },
//         { title: "IT Declarations", icon: <FaBuilding /> },
//         { title: "Leaves", icon: <FaBuilding /> },
//         { title: "Emp Attendance", icon: <FaCalendarCheck /> },
//         { title: "Department", icon: <FaBuilding /> },
//         { title: "Emp password Request", icon: <BsCalendar2CheckFill /> },
//         { title: "Onboarding", icon: <FaBuilding /> },
//     ];

//     // Report options
//     const reportOptions = [
//         { title: "Report Invoice", icon: <FaFileAlt /> },
//         { title: "Report Expenses", icon: <FaFileAlt /> },
//     ];

//     // Account options
//     const accountOptions = [
//         { title: "Account Payment", icon: <FaMoneyCheckAlt /> },
//         { title: "Account Expenses", icon: <FaMoneyCheckAlt /> },
//         { title: "Account Invoice", icon: <FaMoneyCheckAlt /> },
//     ];

//     // HR options
//     const options = [
//         { title: "Hr Dashboard", icon: <FaTachometerAlt /> },
//         { title: "Holiday", icon: <FaCalendarAlt /> },
//         { title: "Events", icon: <FaCalendarCheck /> },
//         { title: "Activities", icon: <FaTasks /> },
//         { title: "HR Social", icon: <MdOutlineSocialDistance /> },
//         { title: "HR Management", icon: <FaUserFriends />, subOptions: employeeOptions },
//         { title: "PayRoll", icon: <FaMoneyCheckAlt />, subOptions: payrollOptions },
//         { title: "Reports", icon: <FaFileAlt />, subOptions: reportOptions },
//         { title: "Accounts", icon: <FaMoneyCheckAlt />, subOptions: accountOptions },
//         { title: "Authentication", icon: <FaLock />, subOptions: authOptions },
//     ];

//     // Project dropdown options
//     const projectDropdownOptions = [
//         { title: "Add Project", icon: <GoProjectSymlink /> },
//         { title: "Project List", icon: <GoProjectRoadmap /> },
//         { title: "Project Grid", icon: <GrProjects /> },
//         { title: "Project Detail", icon: <TbListDetails /> },
//     ];

//     // Project options
//     const projectOptions = [
//         { title: "Dashboard", icon: <FaTachometerAlt /> },
//         { title: "Chat", icon: <FaUser /> },
//         { title: "Project", icon: <FaTasks />, subOptions: projectDropdownOptions },
//         { title: "Clients", icon: <FaUserFriends /> },
//         { title: "Teams", icon: <FaUsers /> },
//         { title: "Tickets", icon: <FaClipboardList /> },
//     ];

//     // Handle image upload
//     const handleImageUpload = (event) => {
//         const file = event.target.files[0];
//         if (file) {
//             const reader = new FileReader();
//             reader.onload = (e) => {
//                 setProfileImage(e.target.result);
//             };
//             reader.readAsDataURL(file);
//         }
//     };

//     const triggerFileInput = () => {
//         document.getElementById("fileInput").click();
//     };

//     // Handle header click
//     const handleHeaderClick = (header) => {
//         localStorage.setItem("HR_HEADER", header);
//         setSelectedHeader(header);
//     };

//     // Tooltip handlers
//     const handleMouseOver = (event, title) => {
//         if (isSidebarCollapsed) {
//             const rect = event.currentTarget.getBoundingClientRect();
//             setTooltip({
//                 show: true,
//                 title,
//                 position: { x: rect.right + 10, y: rect.top },
//             });
//         }
//     };

//     const handleMouseOut = () => {
//         setTooltip({ show: false, title: "", position: { x: 0, y: 0 } });
//     };

//     // Toggle sidebar
//     const toggleSidebar = () => {
//         if (window.innerWidth >= 768) {
//             setIsSidebarCollapsed(!isSidebarCollapsed);
//         }
//     };

//     // Check authentication and fetch user
//     useEffect(() => {
//         const token = localStorage.getItem('token');
        
//         if (token && !auth.user) {
//             console.log('🔄 SideBar: Token found, fetching user...');
//             dispatch(getUser());
//         } else if (!token) {
//             console.log('⚠️ SideBar: No token found, user not authenticated');
//         }
//     }, [dispatch, auth.user]);

//     // Handle window resize
//     useEffect(() => {
//         const handleResize = () => {
//             if (window.innerWidth < 768) {
//                 setIsSidebarCollapsed(true);
//             }
//         };

//         handleResize();
//         window.addEventListener("resize", handleResize);

//         return () => {
//             window.removeEventListener("resize", handleResize);
//         };
//     }, []);

//     // Handle icon click
//     const handleIconClick = (iconTitle) => {
//         setActiveTab(iconTitle);
//         localStorage.setItem("HR_ACTIVE_TAB", iconTitle);
//     };

//     // Get user display name
//     const getUserDisplayName = () => {
//         if (auth.user) {
//             return `${auth.user.firstName || ''} ${auth.user.lastName || ''}`.trim() || 
//                    auth.user.name || 
//                    auth.user.email?.split('@')[0] || 
//                    "User";
//         }
//         return "User";
//     };

//     // Get user designation
//     const getUserDesignation = () => {
//         if (auth.user) {
//             return auth.user.designation || 
//                    auth.user.role || 
//                    "Super Admin";
//         }
//         return "User Designation";
//     };

//     return (
//         <div className="relative h-auto bg-[#0088f1] bg-opacity-10 min-h-screen">
//             <NavBar
//                 onIconClick={handleIconClick}
//                 options={options}
//                 projectOptions={projectOptions}
//             />
            
//             {/* Sidebar */}
//             <div
//                 className={`fixed top-0 h-screen bg-[#0098f1] text-white overflow-x-hidden transition-all duration-300 ease-in-out z-50 flex flex-col ${
//                     isSidebarCollapsed ? "w-16" : "w-[240px]"
//                 }`}
//             >
//                 {/* Menu Toggle */}
//                 <div className="flex justify-between items-center pt-10 pb-5 pl-5 flex-shrink-0">
//                     <IoMdMenu
//                         className="text-white h-7 w-7 cursor-pointer hover:bg-white/10 rounded p-1 transition-colors"
//                         onClick={toggleSidebar}
//                         title="Toggle Sidebar"
//                     />
//                 </div>

//                 {/* User Profile Section */}
//                 {!isSidebarCollapsed && (
//                     <div className="px-4 pb-6 border-b border-white/20 flex-shrink-0">
//                         <div className="flex items-center space-x-3">
//                             <div className="relative">
//                                 <img
//                                     src={profileImage}
//                                     className="rounded-full w-14 h-14 cursor-pointer border-2 border-white shadow-md"
//                                     alt="Profile"
//                                     onClick={triggerFileInput}
//                                     title="Change Profile Picture"
//                                 />
//                                 <input
//                                     id="fileInput"
//                                     type="file"
//                                     accept="image/*"
//                                     className="hidden"
//                                     onChange={handleImageUpload}
//                                 />
//                                 <div className="absolute bottom-0 right-0 w-4 h-4 bg-green-500 rounded-full border-2 border-white"></div>
//                             </div>
//                             <div className="flex-1 min-w-0">
//                                 <p className="text-lg font-semibold truncate text-white">
//                                     {getUserDisplayName()}
//                                 </p>
//                                 <p className="text-sm text-white/80 truncate">
//                                     {getUserDesignation()}
//                                 </p>
//                             </div>
//                         </div>
//                     </div>
//                 )}

//                 {/* Header Tabs */}
//                 {!isSidebarCollapsed && (
//                     <div className="flex border-b border-white/20 flex-shrink-0">
//                         <button
//                             className={`flex-1 py-3 text-center text-sm font-medium transition-colors ${
//                                 selectedHeader === "Hr"
//                                     ? "bg-white/10 text-white border-b-2 border-white"
//                                     : "text-white/70 hover:text-white hover:bg-white/5"
//                             }`}
//                             onClick={() => handleHeaderClick("Hr")}
//                         >
//                             HR
//                         </button>
//                         <button
//                             className={`flex-1 py-3 text-center text-sm font-medium transition-colors ${
//                                 selectedHeader === "Project"
//                                     ? "bg-white/10 text-white border-b-2 border-white"
//                                     : "text-white/70 hover:text-white hover:bg-white/5"
//                             }`}
//                             onClick={() => handleHeaderClick("Project")}
//                         >
//                             Projects
//                         </button>
//                     </div>
//                 )}

//                 {/* Sidebar Content - Scrollable Area */}
//                 <div className="flex-1 overflow-y-auto overflow-x-hidden py-4">
//                     {selectedHeader === "Hr" && (
//                         <ForHrSidebar
//                             isSidebarCollapsed={isSidebarCollapsed}
//                             activeTab={activeTab}
//                             setActiveTab={setActiveTab}
//                             handleMouseOver={handleMouseOver}
//                             handleMouseOut={handleMouseOut}
//                         />
//                     )}
//                     {selectedHeader === "Project" && (
//                         <ForProjectSidebar
//                             isSidebarCollapsed={isSidebarCollapsed}
//                             activeTab={activeTab}
//                             setActiveTab={setActiveTab}
//                             handleMouseOver={handleMouseOver}
//                             handleMouseOut={handleMouseOut}
//                         />
//                     )}
//                 </div>

//                 {/* Footer - Always at the bottom */}
//                 {!isSidebarCollapsed && (
//                     <div className="p-4 border-t border-white/20 bg-[#0088f1] flex-shrink-0">
//                         <p className="text-xs text-white/60 text-center">
//                             HRMS v1.0.0
//                         </p>
//                     </div>
//                 )}
//             </div>

//             {/* Main Content */}
//             <div
//                 className={`min-h-screen transition-all duration-300 ${
//                     isSidebarCollapsed ? "ml-[70px]" : "ml-[240px]"
//                 } p-6`}
//             >
//                 <div className="max-w-7xl mx-auto">
//                     {/* Route-based Content */}
//                     {activeTab === "Holiday" && <HolidayTab />}
//                     {activeTab === "Events" && <Events />}
//                     {activeTab === "Department" && <Department />}
//                     {activeTab === "Activities" && <Activities />}
//                     {activeTab === "HR Social" && <HrSocial />}
//                     {activeTab === "All Employees" && <AllEmployee />}
//                     {activeTab === "Emp password Request" && <EmployeePasswordReq />}
//                     {activeTab === "Report Invoice" && <ReportInvoice />}
//                     {activeTab === "Report Expenses" && <ReportExpenses />}
//                     {activeTab === "Account Payment" && <AccountPayments />}
//                     {activeTab === "Account Expenses" && <AccountExpenses />}
//                     {activeTab === "Account Invoice" && <AccountInvoice />}
//                     {activeTab === "Dashboard" && <Dashboard />}
//                     {activeTab === "Inbox" && <Inbox />}
//                     {activeTab === "Chat" && <Chat />}
//                     {activeTab === "Add Project" && <AddProject />}
//                     {activeTab === "Project List" && <ProjectList />}
//                     {activeTab === "Project Grid" && <ProjectGrid />}
//                     {activeTab === "Project Detail" && <ProjectDetails />}
//                     {activeTab === "Clients" && <UserList />}
//                     {activeTab === "Teams" && <Teams />}
//                     {activeTab === "Tickets" && <Tickets />}
//                     {activeTab === "Compensation" && <Compensation />}
//                     {activeTab === "DashBoard" && <PayrollDashboard />}
//                     {activeTab === "Payslips" && <PaySlip />}
//                     {activeTab === "Settlements" && <Settlement />}
//                     {activeTab === "Payroll settings" && <PayrollSettings />}
//                     {activeTab === "Payroll Forms" && <PayrollForms />}
//                     {activeTab === "Onboarding" && <OnBoarding />}
//                     {activeTab === "IT Declarations" && <ITDeclarations />}
//                     {activeTab === "Payroll Summary" && <PayrollSummary />}
//                     {activeTab === "Run payroll" && <RunPayRoll />}
//                     {activeTab === "Emp Attendance" && <Attendance />}
//                     {activeTab === "Leaves" && <Leaves />}
//                     {activeTab === "Hr Dashboard" && <HrDashboard />}
                    
//                     {/* Default content when no tab is selected */}
//                     {!activeTab && (
//                         <div className="flex flex-col items-center justify-center h-96">
//                             <h1 className="text-3xl font-bold text-gray-800 mb-4">
//                                 Welcome to HRMS Dashboard
//                             </h1>
//                             <p className="text-gray-600 text-center max-w-md">
//                                 Select an option from the sidebar to get started.
//                             </p>
//                         </div>
//                     )}
//                 </div>
//             </div>

//             {/* Tooltip */}
//             {tooltip.show && (
//                 <div
//                     className="fixed bg-gray-900 text-white px-3 py-2 rounded-md shadow-lg z-50 text-sm max-w-xs"
//                     style={{
//                         top: `${tooltip.position.y}px`,
//                         left: `${tooltip.position.x}px`,
//                     }}
//                 >
//                     {tooltip.title}
//                 </div>
//             )}
//         </div>
//     );
// };

// export default SideBar;




/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { IoMdMenu } from "react-icons/io";
import profile from "../assets/hr/employee/profile/profile.jpg";
import NavBar from "./NavBar";
import { useDispatch, useSelector } from "react-redux";
import { BsCalendar2CheckFill } from "react-icons/bs";
import HolidayTab from "../components/hr/holiday/HolidayList";
import AllEmployee from "../components/hr/hr_management/allEmployee/AllEmployee";
import LeaveRequest from "../components/hr/hr_management/leaveRequest/LeaveRequest";
import Leaves from "../components/hr/hr_management/Leaves/Leaves";
import Attendance from "./hr/hr_management/employeAttandance/Attendance";
import AccountPayments from "../components/hr/account/AccountPayments";
import AccountExpenses from "../components/hr/account/AccountExpenses";
import AccountInvoice from "../components/hr/account/AccountInvoice";
import ReportInvoice from "../components/hr/report/ReportInvoice";
import ReportExpenses from "../components/hr/report/ReportExpenses";
import ForHrSidebar from "./ForHrSidebar";
import ForProjectSidebar from "./ForProjectSidebar";
import HrDashboard from "../components/hr/hr_dashboard/HRDashboard";
import Activities from "../components/hr/activities/Activities";
import Events from "../components/hr/events/Events";
import HrSocial from "../components/hr/hr_social/HrSocial";
import UserList from "../components/hr/user/UserList";
import Dashboard from "../components/project/projectDashboard/Dashboard";
import AddProject from "./project/projecttab/AddProject";
import ProjectGrid from "./project/projecttab/ProjectGrid";
import Tickets from "./project/tickets/Tickets";
import Teams from "./project/teams/Teams";
import Chat from "./project/chat/Chat";
import ProjectList from "./project/projecttab/ProjectList";
import ProjectDetails from "./project/projecttab/ProjectDetail";
import Attandance from "./hr/hr_management/employeAttandance/Attendance";
import Inbox from "./project/inbox/Inbox";
import Compensation from "./hr/hr_management/compensation/Compensation";
import PayrollDashboard from "./hr/payroll/payroll_dashboard/PayrollDashboard";
import PaySlip from "./hr/payroll/paySlips/PaySlips";
import Settlement from "./hr/payroll/settlement/Settlement";
import PayrollSettings from "./hr/payroll/payroll_setting/PayrollSettings";
import PayrollForms from "./hr/payroll/payroll_forms/PayrollForms";
import OnBoarding from "./hr/hr_management/onBoarding/OnBoarding";
import ITDeclarations from "./hr/hr_management/it_Declarations/ITDeclarations";
import PayrollSummary from "./hr/payroll/payrollSummary/PayrollSummary";
import RunPayRoll from "./hr/payroll/runPayRoll/RunPayroll";
import Department from "./hr/hr_management/department/DepartmentList";
import EmployeePasswordReq from "./hr/hr_management/employePasswordReq/EmployeePasswordReq";

import { useParams, useNavigate, useLocation } from "react-router-dom";

import {
  FaTachometerAlt,
  FaCalendarAlt,
  FaCalendarCheck,
  FaMoneyCheckAlt,
  FaLock,
  FaUsers,
  FaBuilding,
} from "react-icons/fa";
import { GiPayMoney } from "react-icons/gi";
import {
  MdOutlinePayment,
  MdAdminPanelSettings,
  MdOutlineSocialDistance,
} from "react-icons/md";
import { RiMoneyRupeeCircleFill } from "react-icons/ri";
import { FaMoneyBillTransfer } from "react-icons/fa6";
import { GiTakeMyMoney } from "react-icons/gi";
import { TbMoneybag } from "react-icons/tb";
import { GoProjectSymlink, GoProjectRoadmap } from "react-icons/go";
import { GrProjects } from "react-icons/gr";
import { TbListDetails } from "react-icons/tb";
import {
  FaTasks,
  FaUserFriends,
  FaFileAlt,
  FaUser,
  FaClipboardList,
} from "react-icons/fa";
import { getUser } from "../store/slices/authSlice";

const SideBar = () => {
  // ------------------------------------------------------------------
  // URL params — needed to open Project Detail from a real URL
  // ------------------------------------------------------------------
  const { id: urlProjectId } = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  const [activeTab, setActiveTab] = useState(
    localStorage.getItem("HR_ACTIVE_TAB") || "Hr Dashboard"
  );
  const [selectedHeader, setSelectedHeader] = useState(
    localStorage.getItem("HR_HEADER") || "Hr"
  );
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [profileImage, setProfileImage] = useState(profile);
  const [tooltip, setTooltip] = useState({
    show: false,
    title: "",
    position: { x: 0, y: 0 },
  });

  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);

  // ------------------------------------------------------------------
  // Options (unchanged)
  // ------------------------------------------------------------------
  const payrollOptions = [
    { title: "DashBoard", icon: <TbMoneybag /> },
    { title: "Run payroll", icon: <GiPayMoney /> },
    { title: "Payroll Summary", icon: <MdOutlinePayment /> },
    { title: "Payroll settings", icon: <MdAdminPanelSettings /> },
    { title: "Payslips", icon: <RiMoneyRupeeCircleFill /> },
    { title: "Settlements", icon: <FaMoneyBillTransfer /> },
    { title: "Payroll Forms", icon: <GiTakeMyMoney /> },
  ];

  const authOptions = [
    { title: "Logout", link: "/logout", icon: <FaBuilding /> },
    { title: "Register", link: "/register", icon: <FaBuilding /> },
    { title: "Forgot Password", link: "/forgot-password", icon: <FaBuilding /> },
    { title: "Page 404", link: "/404", icon: <FaBuilding /> },
  ];

  const employeeOptions = [
    { title: "All Employees", icon: <FaUsers /> },
    { title: "Compensation", icon: <FaBuilding /> },
    { title: "IT Declarations", icon: <FaBuilding /> },
    { title: "Leaves", icon: <FaBuilding /> },
    { title: "Emp Attendance", icon: <FaCalendarCheck /> },
    { title: "Department", icon: <FaBuilding /> },
    { title: "Emp password Request", icon: <BsCalendar2CheckFill /> },
    { title: "Onboarding", icon: <FaBuilding /> },
  ];

  const reportOptions = [
    { title: "Report Invoice", icon: <FaFileAlt /> },
    { title: "Report Expenses", icon: <FaFileAlt /> },
  ];

  const accountOptions = [
    { title: "Account Payment", icon: <FaMoneyCheckAlt /> },
    { title: "Account Expenses", icon: <FaMoneyCheckAlt /> },
    { title: "Account Invoice", icon: <FaMoneyCheckAlt /> },
  ];

  const options = [
    { title: "Hr Dashboard", icon: <FaTachometerAlt /> },
    { title: "Holiday", icon: <FaCalendarAlt /> },
    { title: "Events", icon: <FaCalendarCheck /> },
    { title: "Activities", icon: <FaTasks /> },
    { title: "HR Social", icon: <MdOutlineSocialDistance /> },
    {
      title: "HR Management",
      icon: <FaUserFriends />,
      subOptions: employeeOptions,
    },
    { title: "PayRoll", icon: <FaMoneyCheckAlt />, subOptions: payrollOptions },
    { title: "Reports", icon: <FaFileAlt />, subOptions: reportOptions },
    {
      title: "Accounts",
      icon: <FaMoneyCheckAlt />,
      subOptions: accountOptions,
    },
    { title: "Authentication", icon: <FaLock />, subOptions: authOptions },
  ];

  const projectDropdownOptions = [
    { title: "Add Project", icon: <GoProjectSymlink /> },
    { title: "Project List", icon: <GoProjectRoadmap /> },
    { title: "Project Grid", icon: <GrProjects /> },
    { title: "Project Detail", icon: <TbListDetails /> },
  ];

  const projectOptions = [
    { title: "Dashboard", icon: <FaTachometerAlt /> },
    { title: "Chat", icon: <FaUser /> },
    { title: "Project", icon: <FaTasks />, subOptions: projectDropdownOptions },
    { title: "Clients", icon: <FaUserFriends /> },
    { title: "Teams", icon: <FaUsers /> },
    { title: "Tickets", icon: <FaClipboardList /> },
  ];

  // ------------------------------------------------------------------
  // URL → tab sync
  // ------------------------------------------------------------------
  useEffect(() => {
    if (location.pathname.startsWith("/hr/project-detail/") && urlProjectId) {
      localStorage.setItem("HR_SELECTED_PROJECT_ID", String(urlProjectId));
      localStorage.setItem("HR_ACTIVE_TAB", "Project Detail");
      localStorage.setItem("HR_HEADER", "Project");
      setActiveTab("Project Detail");
      setSelectedHeader("Project");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname, urlProjectId]);

  // ------------------------------------------------------------------
  // Handlers
  // ------------------------------------------------------------------
  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => setProfileImage(e.target.result);
      reader.readAsDataURL(file);
    }
  };

  const triggerFileInput = () => {
    document.getElementById("fileInput").click();
  };

  const handleHeaderClick = (header) => {
    localStorage.setItem("HR_HEADER", header);
    setSelectedHeader(header);
    // If we're leaving Project Detail via the header, reset URL
    if (location.pathname.startsWith("/hr/project-detail/")) {
      navigate("/hr");
    }
  };

  const handleMouseOver = (event, title) => {
    if (isSidebarCollapsed) {
      const rect = event.currentTarget.getBoundingClientRect();
      setTooltip({
        show: true,
        title,
        position: { x: rect.right + 10, y: rect.top },
      });
    }
  };

  const handleMouseOut = () => {
    setTooltip({ show: false, title: "", position: { x: 0, y: 0 } });
  };

  const toggleSidebar = () => {
    if (window.innerWidth >= 768) {
      setIsSidebarCollapsed(!isSidebarCollapsed);
    }
  };

  const handleIconClick = (iconTitle) => {
    setActiveTab(iconTitle);
    localStorage.setItem("HR_ACTIVE_TAB", iconTitle);
    // If leaving project-detail page, reset the URL
    if (!iconTitle.toLowerCase().includes("project detail")) {
      if (location.pathname.startsWith("/hr/project-detail/")) {
        navigate("/hr");
      }
    }
  };

  // ------------------------------------------------------------------
  // Auth bootstrap
  // ------------------------------------------------------------------
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token && !auth.user) {
      dispatch(getUser());
    }
  }, [dispatch, auth.user]);

  // ------------------------------------------------------------------
  // Resize → collapse on small screens
  // ------------------------------------------------------------------
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) setIsSidebarCollapsed(true);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const getUserDisplayName = () => {
    if (auth.user) {
      return (
        `${auth.user.firstName || ""} ${auth.user.lastName || ""}`.trim() ||
        auth.user.name ||
        auth.user.email?.split("@")[0] ||
        "User"
      );
    }
    return "User";
  };

  const getUserDesignation = () => {
    if (auth.user) {
      return auth.user.designation || auth.user.role || "Super Admin";
    }
    return "User Designation";
  };

  return (
    <div className="relative h-auto bg-[#0088f1] bg-opacity-10 min-h-screen">
      <NavBar
        onIconClick={handleIconClick}
        options={options}
        projectOptions={projectOptions}
      />

      {/* Sidebar */}
      <div
        className={`fixed top-0 h-screen bg-[#0098f1] text-white overflow-x-hidden transition-all duration-300 ease-in-out z-50 flex flex-col ${
          isSidebarCollapsed ? "w-16" : "w-[240px]"
        }`}
      >
        <div className="flex justify-between items-center pt-10 pb-5 pl-5 flex-shrink-0">
          <IoMdMenu
            className="text-white h-7 w-7 cursor-pointer hover:bg-white/10 rounded p-1 transition-colors"
            onClick={toggleSidebar}
            title="Toggle Sidebar"
          />
        </div>

        {!isSidebarCollapsed && (
          <div className="px-4 pb-6 border-b border-white/20 flex-shrink-0">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <img
                  src={profileImage}
                  className="rounded-full w-14 h-14 cursor-pointer border-2 border-white shadow-md"
                  alt="Profile"
                  onClick={triggerFileInput}
                  title="Change Profile Picture"
                />
                <input
                  id="fileInput"
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={handleImageUpload}
                />
                <div className="absolute bottom-0 right-0 w-4 h-4 bg-green-500 rounded-full border-2 border-white"></div>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-lg font-semibold truncate text-white">
                  {getUserDisplayName()}
                </p>
                <p className="text-sm text-white/80 truncate">
                  {getUserDesignation()}
                </p>
              </div>
            </div>
          </div>
        )}

        {!isSidebarCollapsed && (
          <div className="flex border-b border-white/20 flex-shrink-0">
            <button
              className={`flex-1 py-3 text-center text-sm font-medium transition-colors ${
                selectedHeader === "Hr"
                  ? "bg-white/10 text-white border-b-2 border-white"
                  : "text-white/70 hover:text-white hover:bg-white/5"
              }`}
              onClick={() => handleHeaderClick("Hr")}
            >
              HR
            </button>
            <button
              className={`flex-1 py-3 text-center text-sm font-medium transition-colors ${
                selectedHeader === "Project"
                  ? "bg-white/10 text-white border-b-2 border-white"
                  : "text-white/70 hover:text-white hover:bg-white/5"
              }`}
              onClick={() => handleHeaderClick("Project")}
            >
              Projects
            </button>
          </div>
        )}

        <div className="flex-1 overflow-y-auto overflow-x-hidden py-4">
          {selectedHeader === "Hr" && (
            <ForHrSidebar
              isSidebarCollapsed={isSidebarCollapsed}
              activeTab={activeTab}
              setActiveTab={setActiveTab}
              handleMouseOver={handleMouseOver}
              handleMouseOut={handleMouseOut}
            />
          )}
          {selectedHeader === "Project" && (
            <ForProjectSidebar
              isSidebarCollapsed={isSidebarCollapsed}
              activeTab={activeTab}
              setActiveTab={setActiveTab}
              handleMouseOver={handleMouseOver}
              handleMouseOut={handleMouseOut}
            />
          )}
        </div>

        {!isSidebarCollapsed && (
          <div className="p-4 border-t border-white/20 bg-[#0088f1] flex-shrink-0">
            <p className="text-xs text-white/60 text-center">HRMS v1.0.0</p>
          </div>
        )}
      </div>

      {/* Main Content */}
      <div
        className={`min-h-screen transition-all duration-300 ${
          isSidebarCollapsed ? "ml-[70px]" : "ml-[240px]"
        } p-6`}
      >
        <div className="max-w-7xl mx-auto">
          {activeTab === "Holiday" && <HolidayTab />}
          {activeTab === "Events" && <Events />}
          {activeTab === "Department" && <Department />}
          {activeTab === "Activities" && <Activities />}
          {activeTab === "HR Social" && <HrSocial />}
          {activeTab === "All Employees" && <AllEmployee />}
          {activeTab === "Emp password Request" && <EmployeePasswordReq />}
          {activeTab === "Report Invoice" && <ReportInvoice />}
          {activeTab === "Report Expenses" && <ReportExpenses />}
          {activeTab === "Account Payment" && <AccountPayments />}
          {activeTab === "Account Expenses" && <AccountExpenses />}
          {activeTab === "Account Invoice" && <AccountInvoice />}
          {activeTab === "Dashboard" && <Dashboard />}
          {activeTab === "Inbox" && <Inbox />}
          {activeTab === "Chat" && <Chat />}
          {activeTab === "Add Project" && <AddProject />}
          {activeTab === "Project List" && (
            <ProjectList setActiveTab={setActiveTab} />
          )}
          {activeTab === "Project Grid" && (
            <ProjectGrid setActiveTab={setActiveTab} />
          )}
          {activeTab === "Project Detail" && (
            <ProjectDetails
              projectId={
                urlProjectId ||
                localStorage.getItem("HR_SELECTED_PROJECT_ID")
              }
            />
          )}
          {activeTab === "Clients" && <UserList />}
          {activeTab === "Teams" && <Teams />}
          {activeTab === "Tickets" && <Tickets />}
          {activeTab === "Compensation" && <Compensation />}
          {activeTab === "DashBoard" && <PayrollDashboard />}
          {activeTab === "Payslips" && <PaySlip />}
          {activeTab === "Settlements" && <Settlement />}
          {activeTab === "Payroll settings" && <PayrollSettings />}
          {activeTab === "Payroll Forms" && <PayrollForms />}
          {activeTab === "Onboarding" && <OnBoarding />}
          {activeTab === "IT Declarations" && <ITDeclarations />}
          {activeTab === "Payroll Summary" && <PayrollSummary />}
          {activeTab === "Run payroll" && <RunPayRoll />}
          {activeTab === "Emp Attendance" && <Attendance />}
          {activeTab === "Leaves" && <Leaves />}
          {activeTab === "Hr Dashboard" && <HrDashboard />}
        </div>
      </div>

      {tooltip.show && (
        <div
          className="fixed bg-gray-900 text-white px-3 py-2 rounded-md shadow-lg z-50 text-sm max-w-xs"
          style={{
            top: `${tooltip.position.y}px`,
            left: `${tooltip.position.x}px`,
          }}
        >
          {tooltip.title}
        </div>
      )}
    </div>
  );
};

export default SideBar;