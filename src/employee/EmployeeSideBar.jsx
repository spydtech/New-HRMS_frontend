// /* eslint-disable no-unused-vars */
// import React, { useState, useEffect } from "react";
// import { IoMdMenu } from "react-icons/io";
// import profile from "../employeeAssets/profile/boy.png";
// import EmployeeNavBar from "./EmployeeNavBar";
// // import Main from "./options/payslips/Main";
// // import Attendance from "./options/attendance/Attendance";
// import AllEmployees from "./options/allEmployees/AllEmployees";
// import ApplyLeave from "./options/applyLeave/ApplyLeave";
// import Main from "./options/payslips/Main";
// import EmployeHoliday from "./options/employe_holiday/EmployeHoliday";
// import Inbox from "./options/employe_inbox/EmployeInbox";
// import {
//   FaUsers,
//   FaCalendarAlt,
//   FaCalendarCheck,
//   FaTasks,
//   FaMoneyCheckAlt,
//   FaSignOutAlt,
//   FaProjectDiagram,
//   FaClipboardList,
//   FaGavel,
//   FaTicketAlt,
// } from "react-icons/fa";
// import { FaEnvelope } from "react-icons/fa";
// import { BsCalendarEvent } from "react-icons/bs";
// import { MdEvent } from "react-icons/md";
// import { FaMoneyBillTransfer } from "react-icons/fa6";
// import { RiMoneyRupeeCircleFill } from "react-icons/ri";
// import { PiHandDepositFill } from "react-icons/pi";
// import { BsFileEarmarkSpreadsheet } from "react-icons/bs";
// import SalaryStructure from "./options/payslips/SalaryStructure";
// import Event from "./options/events/Events";
// import Declaration from "./options/payslips/Declaration";
// import BankAccount from "./options/payslips/BankAccount";
// import Chat from "./options/chat/Chat";
// import Rules from "./options/rules/Rules";
// import ProjectList from "./options/projectList/ProjectList";
// import Profile from "./options/profile/Profile";
// import Tickets from "./options/tickets/Tickets";
// import { useDispatch, useSelector } from "react-redux";
//  //import { getEmployee, logout } from "../store/slices/employeeSlice";
// import EmployeDashboard from "./options/employe_dashboard/EmployeDashboard";
// import { useNavigate } from "react-router-dom";
// import { MdSpaceDashboard } from "react-icons/md";
// import { ImProfile } from "react-icons/im";
// import { TiMessages } from "react-icons/ti";
// import Attendance from "./options/attendance/Attendance";
// import Activities from "./options/employeActivites/EmployeeActivities";
// const EmployeeSideBar = () => {
//   const [activeTab, setActiveTab] = useState(
//     localStorage.getItem("EMPLOYEE_ACTIVE_TAB") || "Employees Dashboard"
//   );
//   const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
//   const [openDropdown, setOpenDropdown] = useState(
//     localStorage.getItem("EMPLOYEE_OPEN_DROPDOWN") || ""
//   );
//   const [tooltip, setTooltip] = useState({
//     show: false,
//     title: "",
//     position: { x: 0, y: 0 },
//   });
//   const [profileImage, setProfileImage] = useState(profile);

//   const handleImageUpload = (event) => {
//     const file = event.target.files[0];
//     if (file) {
//       const reader = new FileReader();
//       reader.onload = (e) => {
//         setProfileImage(e.target.result); // Set the image URL
//       };
//       reader.readAsDataURL(file);
//     }
//   };

//   const triggerFileInput = () => {
//     document.getElementById("fileInput").click();
//   };

//   const jwt = localStorage.getItem("employeeJwt");
//   const dispatch = useDispatch();
//   const auth = useSelector((state) => state.auth);
//   const navigate = useNavigate();

//   const options = [
//     { title: "Employees Dashboard", icon: <MdSpaceDashboard /> },

//     { title: "All Employees", icon: <FaUsers /> },
//     { title: "Attendance", icon: <FaClipboardList /> },
//     { title: "Apply Leave", icon: <FaCalendarCheck /> },
//     { title: "Activities", icon: <FaTasks /> },
//     { title: "Holidays", icon: <FaCalendarAlt /> },

//     {
//       title: "Payroll",
//       icon: <FaMoneyCheckAlt />,
//       subOptions: [
//         { name: "Payslips", icon: <RiMoneyRupeeCircleFill /> },
//         { name: "Salary Structure", icon: <FaMoneyBillTransfer /> },
//         { name: "Declaration", icon: <BsFileEarmarkSpreadsheet /> },
//         { name: "Bank Account", icon: <PiHandDepositFill /> },
//       ],
//       showAlways: true,
//     },
//     { title: "Profile", icon: <ImProfile /> },

//     { title: "Projects", icon: <FaProjectDiagram /> },
//     { title: "Events", icon: <BsCalendarEvent /> },
//     // { title: "Inbox", icon: <FaEnvelope /> },
//     // { title: "Chats", icon: <TiMessages /> },

//     { title: "Tickets", icon: <FaTicketAlt /> },
//     { title: "Rules", icon: <FaGavel /> },
//     { title: "Logout", icon: <FaSignOutAlt /> },
//   ];

//   useEffect(() => {
//     if (jwt) {
//       dispatch(getEmployee(jwt));
//     }
//   }, [jwt, auth.jwt, dispatch]);

//   useEffect(() => {
//     const handleResize = () => {
//       if (window.innerWidth < 768) {
//         setIsSidebarCollapsed(true);
//       }
//     };

//     handleResize();
//     window.addEventListener("resize", handleResize);

//     return () => {
//       window.removeEventListener("resize", handleResize);
//     };
//   }, []);

//   const handleMouseOver = (event, title) => {
//     if (isSidebarCollapsed) {
//       const rect = event.currentTarget.getBoundingClientRect();
//       setTooltip({
//         show: true,
//         title,
//         position: { x: rect.right + 10, y: rect.top },
//       });
//     }
//   };

//   const handleSubOptionMouseOver = (event, subOptionTitle) => {
//     event.stopPropagation();
//     handleMouseOver(event, subOptionTitle);
//   };

//   const handleMouseOut = () => {
//     setTooltip({ show: false, title: "", position: { x: 0, y: 0 } });
//   };

//   const handleOptionClick = (option) => {
//     if (option.subOptions) {
//       const newDropdownState =
//         openDropdown === option.title ? "" : option.title;
//       setOpenDropdown(newDropdownState);
//       localStorage.setItem("EMPLOYEE_OPEN_DROPDOWN", newDropdownState);
//     } else {
//       setActiveTab(option.title);
//       localStorage.setItem("EMPLOYEE_ACTIVE_TAB", option.title);
//       setOpenDropdown("");
//       localStorage.removeItem("EMPLOYEE_OPEN_DROPDOWN");
//       if (option.title === "Logout") {
//         handleLogout();
//       }
//     }
//   };

//   const handleSubOptionClick = (event, subOption) => {
//     event.stopPropagation();
//     localStorage.setItem("EMPLOYEE_ACTIVE_TAB", subOption.title);
//     setActiveTab(subOption.name);
//     localStorage.setItem("EMPLOYEE_ACTIVE_TAB", subOption.name);
//   };

//   const toggleSidebar = () => {
//     if (window.innerWidth >= 768) {
//       setIsSidebarCollapsed(!isSidebarCollapsed);
//     }
//   };

//   const handleLogout = () => {
//     dispatch(logout());
//     localStorage.removeItem("employeeJwt");
//     localStorage.removeItem("employee");
//     localStorage.removeItem("EMPLOYEE_ACTIVE_TAB")
//     navigate("/");
//   };

//   const handleIconClick = (iconTitle) => {
//     setActiveTab(iconTitle);
//     localStorage.setItem("EMPLOYEE_ACTIVE_TAB", iconTitle);
//   };
//   const handleSetActiveTab = (tab) => {
//     setActiveTab(tab);
//     localStorage.setItem("EMPLOYEE_ACTIVE_TAB", tab);
//   };

//   return (
//     <div className="relative bg-[#2A546D] bg-opacity-10">
//       <EmployeeNavBar onIconClick={handleIconClick} options={options} />
//       <div
//         className={`flex flex-col h-screen fixed bg-[#2A546D] mr-20 transition-all duration-300 ${isSidebarCollapsed ? "w-16" : "w-[240px]"
//           } pb-10 h-screen fixed z-10 top-0 overflow-y-auto overflow-x-hidden bg-[#2A546D] scrollbar-thin scrollbar-thumb-transparent scrollbar-track-transparent`}
//       >
//         <div className="flex flex-col pr-3 text-white">
//           <div className="flex justify-between items-center pt-10 pb-5 pl-4">
//             <IoMdMenu
//               className="text-white h-[30px] absolute top-4 cursor-pointer"
//               onClick={toggleSidebar}
//             />
//           </div>
//           <div>
//             {!isSidebarCollapsed && (
//               <>
//                 <div className="flex items-center   w-64  relative top-0 pb-4 px-2">
//                   <img
//                     src={profileImage}
//                     className="rounded-full w-[50px] h-[50px] cursor-pointer"
//                     alt="Profile"
//                     onClick={triggerFileInput}
//                   />
//                   <input
//                     id="fileInput"
//                     type="file"
//                     accept="image/*"
//                     style={{ display: "none" }}
//                     onChange={handleImageUpload}
//                   />
//                   <p className="text-[16px] leading-4   font-bold text-wrap text-white pb-8 pl-2">
//                     {/* Welcome{" "} */}
//                     {auth.employee
//                       ? auth.employee.firstName.toUpperCase() +
//                       " " +
//                       auth.employee.lastName.toUpperCase()
//                       : "User Name"}
//                   </p>
//                 </div>
//                 <div className=" flex relative bottom-10 left-14">
//                   <p className="text-[16px] leading-4 text-wrap w-[180px]   text-white pl-2">
//                     {auth.employee
//                       ? auth.employee.designation
//                       : "user designation"}
//                   </p>
//                 </div>
//               </>
//             )}
//           </div>

//           <div className="flex flex-col">
//             {options.map((option, index) => (
//               <div
//                 key={index}
//                 className={`flex flex-col transition-all my-1 duration-500 cursor-pointer ${activeTab === option.title ||
//                     (option.subOptions && openDropdown === option.title)
//                     ? "bg-white text-[#2A546D] rounded-r-3xl"
//                     : "hover:bg-white hover:text-[#2A546D] rounded-r-3xl"
//                   }`}
//                 onClick={() => handleOptionClick(option)}
//                 onMouseOver={(event) => handleMouseOver(event, option.title)}
//                 onMouseOut={handleMouseOut}
//               >
//                 <div className="p-3 pl-4 text-[16px] flex items-center">
//                   {option.icon}

//                   {!isSidebarCollapsed && (
//                     <span className="ml-3">{option.title}</span>
//                   )}

//                   {option.subOptions && !isSidebarCollapsed && (
//                     <span className="ml-auto">
//                       {openDropdown === option.title ? "▲" : "▼"}
//                     </span>
//                   )}
//                 </div>

//                 {option.subOptions && openDropdown === option.title && (
//                   <div
//                     className={`bg-[#2A546D] text-white transition-all duration-300`}
//                   >
//                     {option.subOptions.map((subOption, subIndex) => (
//                       <div
//                         key={subIndex}
//                         className={`p-3 text-nowrap pl-4 flex items-center my-1 cursor-pointer ${activeTab === subOption.name
//                             ? "bg-white bg-opacity-60 text-[#2A546D] rounded-r-full"
//                             : "hover:bg-white hover:bg-opacity-60 hover:rounded-r-full hover:text-[#2A546D]"
//                           }`}
//                         onClick={(event) =>
//                           handleSubOptionClick(event, subOption)
//                         }
//                         onMouseOver={(event) =>
//                           handleSubOptionMouseOver(event, subOption.name)
//                         }
//                         onMouseOut={handleMouseOut}
//                       >
//                         <span className="mr-2">{subOption.icon}</span>
//                         {!isSidebarCollapsed && (
//                           <span className="text-[14px]">{subOption.name}</span>
//                         )}
//                       </div>
//                     ))}
//                   </div>
//                 )}
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//       <div
//         className={`flex-1  p-4 transition-all duration-300 ${isSidebarCollapsed ? "ml-16" : "ml-[240px]"
//           }`}
//       >
//         {activeTab === "Employees Dashboard" && (
//           <EmployeDashboard
//             onViewProfile={() => handleSetActiveTab("Profile")}
//             onLeave={() => handleSetActiveTab("Apply Leave")}
//             onHoliday={() => handleSetActiveTab("Holidays")}
//           />
//         )}
//         {activeTab === "All Employees" && <AllEmployees />}
//         {activeTab === "Holidays" && <EmployeHoliday />}
//         {activeTab === "Events" && <Event />}
//         {activeTab === "Activities" && <Activities />}
//         {activeTab === "Payslips" && <Main />}
//         {activeTab === "Profile" && <Profile />}
//         {activeTab === "Apply Leave" && <ApplyLeave />}
//         {activeTab === "Salary Structure" && <SalaryStructure />}
//         {activeTab === "Declaration" && <Declaration />}
//         {activeTab === "Bank Account" && <BankAccount />}
//         {activeTab === "Projects" && <ProjectList />}
//         {activeTab === "Inbox" && <Inbox />}
//         {activeTab === "Chats" && <Chat />}
//         {activeTab === "Attendance" && <Attendance />}
//         {activeTab === "Rules" && <Rules />}
//         {activeTab === "Tickets" && <Tickets />}
//       </div>
//       {tooltip.show && (
//         <div
//           className="fixed p-2 bg-[#2A546D] text-white rounded-lg shadow-md z-50"
//           style={{
//             left: `${tooltip.position.x}px`,
//             top: `${tooltip.position.y}px`,
//           }}
//         >
//           {tooltip.title}
//         </div>
//       )}
//     </div>
//   );
// };

// export default EmployeeSideBar;












/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { IoMdMenu } from "react-icons/io";
import profile from "../employeeAssets/profile/boy.png";
import EmployeeNavBar from "./EmployeeNavBar";
import AllEmployees from "./options/allEmployees/AllEmployees";
import ApplyLeave from "./options/applyLeave/ApplyLeave";
import Main from "./options/payslips/Main";
import EmployeHoliday from "./options/employe_holiday/EmployeHoliday";
import Inbox from "./options/employe_inbox/EmployeInbox";
import {
  FaUsers,
  FaCalendarAlt,
  FaCalendarCheck,
  FaTasks,
  FaMoneyCheckAlt,
  FaSignOutAlt,
  FaProjectDiagram,
  FaClipboardList,
  FaGavel,
  FaTicketAlt,
} from "react-icons/fa";
import { BsCalendarEvent, BsFileEarmarkSpreadsheet } from "react-icons/bs";
import { FaMoneyBillTransfer } from "react-icons/fa6";
import { RiMoneyRupeeCircleFill } from "react-icons/ri";
import { PiHandDepositFill } from "react-icons/pi";
import SalaryStructure from "./options/payslips/SalaryStructure";
import Event from "./options/events/Events";
import Declaration from "./options/payslips/Declaration";
import BankAccount from "./options/payslips/BankAccount";
import Chat from "./options/chat/Chat";
import Rules from "./options/rules/Rules";
import ProjectList from "./options/projectList/ProjectList";
import Profile from "./options/profile/Profile";
import Tickets from "./options/tickets/Tickets";
import { useDispatch, useSelector } from "react-redux";
import EmployeDashboard from "./options/employe_dashboard/EmployeDashboard";
import { useNavigate } from "react-router-dom";
import { MdSpaceDashboard } from "react-icons/md";
import { ImProfile } from "react-icons/im";
import Attendance from "./options/attendance/Attendance";
import Activities from "./options/employeActivites/EmployeeActivities";
import { getUser, logoutUser } from "../store/slices/authSlice";

const EmployeeSideBar = () => {
  const [activeTab, setActiveTab] = useState(
    localStorage.getItem("EMPLOYEE_ACTIVE_TAB") || "Employees Dashboard"
  );
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(
    localStorage.getItem("EMPLOYEE_OPEN_DROPDOWN") || ""
  );
  const [tooltip, setTooltip] = useState({
    show: false,
    title: "",
    position: { x: 0, y: 0 },
  });
  const [profileImage, setProfileImage] = useState(profile);

  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  const navigate = useNavigate();

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

  const options = [
    { title: "Employees Dashboard", icon: <MdSpaceDashboard /> },
    { title: "All Employees", icon: <FaUsers /> },
    { title: "Attendance", icon: <FaClipboardList /> },
    { title: "Apply Leave", icon: <FaCalendarCheck /> },
    { title: "Activities", icon: <FaTasks /> },
    { title: "Holidays", icon: <FaCalendarAlt /> },
    {
      title: "Payroll",
      icon: <FaMoneyCheckAlt />,
      subOptions: [
        { name: "Payslips", icon: <RiMoneyRupeeCircleFill /> },
        { name: "Salary Structure", icon: <FaMoneyBillTransfer /> },
        { name: "Declaration", icon: <BsFileEarmarkSpreadsheet /> },
        { name: "Bank Account", icon: <PiHandDepositFill /> },
      ],
      showAlways: true,
    },
    { title: "Profile", icon: <ImProfile /> },
    { title: "Projects", icon: <FaProjectDiagram /> },
    { title: "Events", icon: <BsCalendarEvent /> },
    { title: "Tickets", icon: <FaTicketAlt /> },
    { title: "Rules", icon: <FaGavel /> },
    { title: "Logout", icon: <FaSignOutAlt /> },
  ];

  // Rehydrate user if token present but Redux lost state (page refresh)
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token && !auth.user) {
      dispatch(getUser());
    }
  }, [dispatch, auth.user]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) setIsSidebarCollapsed(true);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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

  const handleSubOptionMouseOver = (event, subOptionTitle) => {
    event.stopPropagation();
    handleMouseOver(event, subOptionTitle);
  };

  const handleMouseOut = () => {
    setTooltip({ show: false, title: "", position: { x: 0, y: 0 } });
  };

  const handleOptionClick = (option) => {
    if (option.subOptions) {
      const newDropdownState =
        openDropdown === option.title ? "" : option.title;
      setOpenDropdown(newDropdownState);
      localStorage.setItem("EMPLOYEE_OPEN_DROPDOWN", newDropdownState);
    } else {
      setActiveTab(option.title);
      localStorage.setItem("EMPLOYEE_ACTIVE_TAB", option.title);
      setOpenDropdown("");
      localStorage.removeItem("EMPLOYEE_OPEN_DROPDOWN");
      if (option.title === "Logout") handleLogout();
    }
  };

  const handleSubOptionClick = (event, subOption) => {
    event.stopPropagation();
    setActiveTab(subOption.name);
    localStorage.setItem("EMPLOYEE_ACTIVE_TAB", subOption.name);
  };

  const toggleSidebar = () => {
    if (window.innerWidth >= 768) setIsSidebarCollapsed(!isSidebarCollapsed);
  };

  const handleLogout = async () => {
    try {
      await dispatch(logoutUser()).unwrap();
    } catch {
      // ignore
    } finally {
      localStorage.removeItem("employeeJwt");
      localStorage.removeItem("employee");
      localStorage.removeItem("EMPLOYEE_ACTIVE_TAB");
      localStorage.removeItem("EMPLOYEE_OPEN_DROPDOWN");
      navigate("/");
    }
  };

  const handleIconClick = (iconTitle) => {
    setActiveTab(iconTitle);
    localStorage.setItem("EMPLOYEE_ACTIVE_TAB", iconTitle);
  };

  const handleSetActiveTab = (tab) => {
    setActiveTab(tab);
    localStorage.setItem("EMPLOYEE_ACTIVE_TAB", tab);
  };

  const displayName = auth.user
    ? `${auth.user.firstName || auth.user.name || "User"} ${
        auth.user.lastName || ""
      }`.trim().toUpperCase()
    : "USER NAME";

  const displayDesignation = auth.user?.designation || "—";

  return (
    <div className="relative bg-[#2A546D] bg-opacity-10">
      <EmployeeNavBar onIconClick={handleIconClick} options={options} />
      <div
        className={`flex flex-col h-screen fixed bg-[#2A546D] mr-20 transition-all duration-300 ${
          isSidebarCollapsed ? "w-16" : "w-[240px]"
        } pb-10 z-10 top-0 overflow-y-auto overflow-x-hidden scrollbar-thin scrollbar-thumb-transparent scrollbar-track-transparent`}
      >
        <div className="flex flex-col pr-3 text-white">
          <div className="flex justify-between items-center pt-10 pb-5 pl-4">
            <IoMdMenu
              className="text-white h-[30px] absolute top-4 cursor-pointer"
              onClick={toggleSidebar}
            />
          </div>

          <div>
            {!isSidebarCollapsed && (
              <>
                <div className="flex items-center w-64 relative top-0 pb-4 px-2">
                  <img
                    src={profileImage}
                    className="rounded-full w-[50px] h-[50px] cursor-pointer"
                    alt="Profile"
                    onClick={triggerFileInput}
                  />
                  <input
                    id="fileInput"
                    type="file"
                    accept="image/*"
                    style={{ display: "none" }}
                    onChange={handleImageUpload}
                  />
                  <p className="text-[16px] leading-4 font-bold text-wrap text-white pb-8 pl-2">
                    {displayName}
                  </p>
                </div>
                <div className="flex relative bottom-10 left-14">
                  <p className="text-[16px] leading-4 text-wrap w-[180px] text-white pl-2">
                    {displayDesignation}
                  </p>
                </div>
              </>
            )}
          </div>

          <div className="flex flex-col">
            {options.map((option, index) => (
              <div
                key={index}
                className={`flex flex-col transition-all my-1 duration-500 cursor-pointer ${
                  activeTab === option.title ||
                  (option.subOptions && openDropdown === option.title)
                    ? "bg-white text-[#2A546D] rounded-r-3xl"
                    : "hover:bg-white hover:text-[#2A546D] rounded-r-3xl"
                }`}
                onClick={() => handleOptionClick(option)}
                onMouseOver={(event) => handleMouseOver(event, option.title)}
                onMouseOut={handleMouseOut}
              >
                <div className="p-3 pl-4 text-[16px] flex items-center">
                  {option.icon}
                  {!isSidebarCollapsed && <span className="ml-3">{option.title}</span>}
                  {option.subOptions && !isSidebarCollapsed && (
                    <span className="ml-auto">
                      {openDropdown === option.title ? "▲" : "▼"}
                    </span>
                  )}
                </div>

                {option.subOptions && openDropdown === option.title && (
                  <div className="bg-[#2A546D] text-white transition-all duration-300">
                    {option.subOptions.map((subOption, subIndex) => (
                      <div
                        key={subIndex}
                        className={`p-3 text-nowrap pl-4 flex items-center my-1 cursor-pointer ${
                          activeTab === subOption.name
                            ? "bg-white bg-opacity-60 text-[#2A546D] rounded-r-full"
                            : "hover:bg-white hover:bg-opacity-60 hover:rounded-r-full hover:text-[#2A546D]"
                        }`}
                        onClick={(event) => handleSubOptionClick(event, subOption)}
                        onMouseOver={(event) =>
                          handleSubOptionMouseOver(event, subOption.name)
                        }
                        onMouseOut={handleMouseOut}
                      >
                        <span className="mr-2">{subOption.icon}</span>
                        {!isSidebarCollapsed && (
                          <span className="text-[14px]">{subOption.name}</span>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div
        className={`flex-1 p-4 transition-all duration-300 ${
          isSidebarCollapsed ? "ml-16" : "ml-[240px]"
        }`}
      >
        {activeTab === "Employees Dashboard" && (
          <EmployeDashboard
            onViewProfile={() => handleSetActiveTab("Profile")}
            onLeave={() => handleSetActiveTab("Apply Leave")}
            onHoliday={() => handleSetActiveTab("Holidays")}
          />
        )}
        {activeTab === "All Employees" && <AllEmployees />}
        {activeTab === "Holidays" && <EmployeHoliday />}
        {activeTab === "Events" && <Event />}
        {activeTab === "Activities" && <Activities />}
        {activeTab === "Payslips" && <Main />}
        {activeTab === "Profile" && <Profile />}
        {activeTab === "Apply Leave" && <ApplyLeave />}
        {activeTab === "Salary Structure" && <SalaryStructure />}
        {activeTab === "Declaration" && <Declaration />}
        {activeTab === "Bank Account" && <BankAccount />}
        {activeTab === "Projects" && <ProjectList />}
        {activeTab === "Inbox" && <Inbox />}
        {activeTab === "Chats" && <Chat />}
        {activeTab === "Attendance" && <Attendance />}
        {activeTab === "Rules" && <Rules />}
        {activeTab === "Tickets" && <Tickets />}
      </div>

      {tooltip.show && (
        <div
          className="fixed p-2 bg-[#2A546D] text-white rounded-lg shadow-md z-50"
          style={{ left: `${tooltip.position.x}px`, top: `${tooltip.position.y}px` }}
        >
          {tooltip.title}
        </div>
      )}
    </div>
  );
};

export default EmployeeSideBar;