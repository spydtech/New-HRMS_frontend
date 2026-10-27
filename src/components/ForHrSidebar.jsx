/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaTachometerAlt,
  FaCalendarAlt,
  FaCalendarCheck,
  FaTasks,
  FaUserFriends,
  FaMoneyCheckAlt,
  FaFileAlt,
  FaLock,
  FaChevronDown,
  FaChevronUp,
  FaUsers,
  FaBuilding,
} from "react-icons/fa";
import { SlPeople } from "react-icons/sl";
import { GiPayMoney } from "react-icons/gi";
import { MdOutlinePayment } from "react-icons/md";
import { MdAdminPanelSettings } from "react-icons/md";
import { RiMoneyRupeeCircleFill } from "react-icons/ri";
import { FaMoneyBillTransfer } from "react-icons/fa6";
import { GiTakeMyMoney } from "react-icons/gi";
import { TbMoneybag } from "react-icons/tb";
import { MdOutlineSocialDistance } from "react-icons/md";
import { logout } from "../store/slices/authSlice";
import { useDispatch } from "react-redux";
import { SiReadthedocs } from "react-icons/si";
import { IoDocumentAttach } from "react-icons/io5";
import { BsCalendar2CheckFill } from "react-icons/bs";
import { MdDepartureBoard } from "react-icons/md";
import { TbReportSearch } from "react-icons/tb";
import { GoChecklist } from "react-icons/go";
import { FaMoneyCheck } from "react-icons/fa6";
import { RiSecurePaymentFill } from "react-icons/ri";
import { MdPayments } from "react-icons/md";
import { IoMdLogOut } from "react-icons/io";
import { LiaFileInvoiceSolid } from "react-icons/lia";
import { FaCashRegister } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
import { TbError404 } from "react-icons/tb";
const ForHrSidebar = ({
  isSidebarCollapsed,
  activeTab,
  setActiveTab,
  handleMouseOver,
  handleMouseOut,
}) => {
  const navigate = useNavigate();
  const [showEmployeeOptions, setShowEmployeeOptions] = useState(false);
  const [showReportOptions, setShowReportOptions] = useState(false);
  const [showPayrollOptions, setShowPayrollOptions] = useState(false);
  const [showAccountOptions, setShowAccountOptions] = useState(false);
  const [showAuthOptions, setShowAuthOptions] = useState(false);
  const [showHrManagementOptions, setShowHrManagementOptions] = useState(false);
  const jwt = localStorage.getItem("hrjwt");
  const dispatch = useDispatch();

  const options = [
    { title: "Hr Dashboard", icon: <FaTachometerAlt /> },
    { title: "Holiday", icon: <FaCalendarAlt /> },
    { title: "Events", icon: <FaCalendarCheck /> },
    { title: "Activities", icon: <FaTasks /> },
    { title: "HR Social", icon: <MdOutlineSocialDistance /> },
    {
      title: "HR Management",
      icon: <FaUserFriends />,
      hasSubOptions: true,
    },
    { title: "PayRoll", icon: <FaMoneyCheckAlt />, hasSubOptions: true },
    { title: "Reports", icon: <FaFileAlt />, hasSubOptions: true },
    { title: "Accounts", icon: <FaMoneyCheck />, hasSubOptions: true },
    { title: "Authentication", icon: <FaLock />, hasSubOptions: true },
  ];

  const employeeOptions = [
    { title: "All Employees", icon: <FaUsers /> },
    { title: "Compensation", icon: <SiReadthedocs /> },
    { title: "IT Declarations", icon: <IoDocumentAttach /> },
    { title: "Leaves", icon: <BsCalendar2CheckFill /> },
    { title: "Emp password Request", icon: <BsCalendar2CheckFill /> },
    { title: "Emp Attendance", icon: <FaCalendarCheck /> },
    { title: "Department", icon: <FaBuilding /> },
    { title: "Onboarding", icon: <MdDepartureBoard /> },
  ];

  const reportOptions = [
    { title: "Report Invoice", icon: <TbReportSearch /> },
    { title: "Report Expenses", icon: <GoChecklist /> },
  ];

  const accountOptions = [
    { title: "Account Payment", icon: <RiSecurePaymentFill /> },
    { title: "Account Expenses", icon: <MdPayments /> },
    { title: "Account Invoice", icon: <LiaFileInvoiceSolid /> },
  ];

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
    { title: "Logout", link: "/option", icon: <IoMdLogOut /> },
    { title: "Register", link: "/register", icon: <FaCashRegister /> },
    {
      title: "Forgot Password",
      link: "/forget-password",
      icon: <RiLockPasswordFill />,
    },
    { title: "Page 404", link: "/404", icon: <TbError404 /> },
  ];

  const handleOptionClick = (option) => {
    switch (option.title) {
      case "HR Management":
        setShowHrManagementOptions(!showHrManagementOptions);
        break;
      case "Employee":
        setShowEmployeeOptions(!showEmployeeOptions);
        break;
      case "Reports":
        setShowReportOptions(!showReportOptions);
        break;
      case "PayRoll":
        setShowPayrollOptions(!showPayrollOptions);
        break;
      case "Accounts":
        setShowAccountOptions(!showAccountOptions);
        break;
      case "Authentication":
        setShowAuthOptions(!showAuthOptions);
        break;
      default:
        setActiveTab(option.title);
        break;
    }
  };

  const handleLogout = async () => {
    try {
      // Get token from localStorage (check all possible locations)
      const token = localStorage.getItem('token') || 
                   localStorage.getItem('jwt') || 
                   localStorage.getItem('hrJwt');
      
      // Dispatch logout thunk with the token
      await dispatch(logout(token)).unwrap();
      
      // Navigate to login page
      navigate("/login"); // Changed from "/option" to "/login"
      
    } catch (error) {
      console.error('Logout error:', error);
      // Even if logout fails, clear localStorage and redirect
      localStorage.clear();
      navigate("/login");
    }
  };

  const handleOptionClickNavigate = (authOption) => {
    if (authOption.title === "Logout") {
      handleLogout();
    } else {
      navigate(authOption.link);
    }
  };
  return (
    <div className="pr-2">
      <ul className="pt-3 pr-1">
        {options.map((option) => (
          <React.Fragment key={option.title}>
            <li
              className={`flex justify-between text-[16px] pl-5 py-3  mb-1 items-center cursor-pointer ${
                activeTab === option.title
                  ? "bg-white rounded-r-full text-[#0098f1]"
                  : "hover:bg-white hover:text-[#0098f1] hover:rounded-r-full"
              }`}
              onClick={() => handleOptionClick(option)}
              onMouseOver={(event) => handleMouseOver(event, option.title)}
              onMouseOut={handleMouseOut}
            >
              <div className="flex items-center">
                {option.icon}
                <span
                  className={`pl-2 ${isSidebarCollapsed ? "hidden" : "inline"}`}
                >
                  {option.title}
                </span>
              </div>
              {!isSidebarCollapsed && option.hasSubOptions && (
                <span className="pr-5">
                  {option.title === "Employee" && showEmployeeOptions ? (
                    <FaChevronUp />
                  ) : option.title === "HR Management" &&
                    showHrManagementOptions ? (
                    <FaChevronUp />
                  ) : option.title === "Reports" && showReportOptions ? (
                    <FaChevronUp />
                  ) : option.title === "PayRoll" && showPayrollOptions ? (
                    <FaChevronUp />
                  ) : option.title === "Accounts" && showAccountOptions ? (
                    <FaChevronUp />
                  ) : option.title === "Authentication" && showAuthOptions ? (
                    <FaChevronUp />
                  ) : (
                    <FaChevronDown />
                  )}
                </span>
              )}
            </li>

            {/* HR Management Dropdown */}
            {option.title === "HR Management" && showHrManagementOptions && (
              <ul>
                <li
                  className={`flex justify-between text-[16px] bg-opacity-50  pl-5 py-3 mb-1 cursor-pointer ${
                    activeTab === "Employee"
                      ? "bg-white bg-opacity-70 rounded-r-full text-[#0098F1]"
                      : "hover:bg-white hover:bg-opacity-70 hover:text-[#0098F1] hover:rounded-r-full"
                  }`}
                  onClick={() => handleOptionClick({ title: "Employee" })}
                  onMouseOver={(event) => handleMouseOver(event, "Employee")}
                  onMouseOut={handleMouseOut}
                >
                  <div className="flex items-center">
                    <SlPeople />
                    {!isSidebarCollapsed && (
                      <span className="pl-2">Employee</span>
                    )}
                  </div>

                  {!isSidebarCollapsed && (
                    // <span className="pl-2">Employee</span>
                    <span className="pr-5">
                      {showEmployeeOptions ? (
                        <FaChevronUp />
                      ) : (
                        <FaChevronDown />
                      )}
                    </span>
                  )}
                  {/* <span className="pr-5">
                    {showEmployeeOptions ? <FaChevronUp /> : <FaChevronDown />}
                  </span> */}
                </li>
                {showEmployeeOptions && (
                  <ul>
                    {employeeOptions.map((employeeOption) => (
                      <li
                        key={employeeOption.title}
                        className={`text-[16px] pl-5 py-2 mb-1 cursor-pointer ${
                          activeTab === employeeOption.title
                            ? "bg-white bg-opacity-50 rounded-r-full text-[#0098F1]"
                            : "hover:bg-white hover:bg-opacity-50 hover:text-[#0098F1] hover:rounded-r-full"
                        }`}
                        onClick={() => setActiveTab(employeeOption.title)}
                        onMouseOver={(event) =>
                          handleMouseOver(event, employeeOption.title)
                        }
                        onMouseOut={handleMouseOut}
                      >
                        <div className="flex items-center">
                          {employeeOption.icon}
                          {!isSidebarCollapsed && (
                            <span className="pl-2">{employeeOption.title}</span>
                          )}
                        </div>
                      </li>
                    ))}
                  </ul>
                )}
              </ul>
            )}

            {/* PayRoll Dropdown */}
            {option.title === "PayRoll" && showPayrollOptions && (
              <ul>
                {payrollOptions.map((payrollOption) => (
                  <li
                    key={payrollOption.title}
                    className={`text-[16px] pl-5 py-2 mb-1 cursor-pointer ${
                      activeTab === payrollOption.title
                        ? "bg-white bg-opacity-50 rounded-r-full text-[#0098F1]"
                        : "hover:bg-white hover:bg-opacity-50 hover:text-[#0098F1] hover:rounded-r-full"
                    }`}
                    onClick={() => setActiveTab(payrollOption.title)}
                    onMouseOver={(event) =>
                      handleMouseOver(event, payrollOption.title)
                    }
                    onMouseOut={handleMouseOut}
                  >
                    <div className="flex items-center">
                      {payrollOption.icon}
                      {!isSidebarCollapsed && (
                        <span className="pl-2">{payrollOption.title}</span>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            )}

            {/* Reports Dropdown */}
            {option.title === "Reports" && showReportOptions && (
              <ul>
                {reportOptions.map((reportOption) => (
                  <li
                    key={reportOption.title}
                    className={`text-[16px] pl-5 py-2 mb-1 cursor-pointer ${
                      activeTab === reportOption.title
                        ? "bg-white bg-opacity-50 rounded-r-full text-[#0098F1]"
                        : "hover:bg-white hover:bg-opacity-50 hover:text-[#0098F1] hover:rounded-r-full"
                    }`}
                    onClick={() => setActiveTab(reportOption.title)}
                    onMouseOver={(event) =>
                      handleMouseOver(event, reportOption.title)
                    }
                    onMouseOut={handleMouseOut}
                  >
                    <div className="flex items-center">
                      {reportOption.icon}
                      {!isSidebarCollapsed && (
                        <span className="pl-2">{reportOption.title}</span>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            )}

            {/* Accounts Dropdown */}
            {option.title === "Accounts" && showAccountOptions && (
              <ul>
                {accountOptions.map((accountOption) => (
                  <li
                    key={accountOption.title}
                    className={`text-[16px] pl-5 py-2 mb-1 cursor-pointer ${
                      activeTab === accountOption.title
                        ? "bg-white bg-opacity-50 rounded-r-full text-[#0098F1]"
                        : "hover:bg-white hover:bg-opacity-50 hover:text-[#0098F1] hover:rounded-r-full"
                    }`}
                    onClick={() => setActiveTab(accountOption.title)}
                    onMouseOver={(event) =>
                      handleMouseOver(event, accountOption.title)
                    }
                    onMouseOut={handleMouseOut}
                  >
                    <div className="flex items-center">
                      {accountOption.icon}
                      {!isSidebarCollapsed && (
                        <span className="pl-2">{accountOption.title}</span>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            )}

            {option.title === "Authentication" && showAuthOptions && (
              <ul>
                {authOptions.map((authOption) => (
                  <li
                    key={authOption.title}
                    className={`text-[16px] pl-5 py-2 mb-1 cursor-pointer ${
                      activeTab === authOption.title
                        ? "bg-white bg-opacity-50 rounded-r-full text-[#0098F1]"
                        : "hover:bg-white hover:bg-opacity-50 hover:text-[#0098F1] hover:rounded-r-full"
                    }`}
                    onClick={() => handleOptionClickNavigate(authOption)}
                    onMouseOver={(event) =>
                      handleMouseOver(event, authOption.title)
                    }
                    onMouseOut={handleMouseOut}
                  >
                    <div className="flex items-center">
                      {authOption.icon}
                      {!isSidebarCollapsed && (
                        <span className="pl-2">{authOption.title}</span>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </React.Fragment>
        ))}
      </ul>
    </div>
  );
};

export default ForHrSidebar;
