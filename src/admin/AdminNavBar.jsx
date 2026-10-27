// import React, { useState, useEffect, useMemo } from "react";
// import { FaBars } from "react-icons/fa";

// import { FaPeopleGroup } from "react-icons/fa6";
// import { MdManageAccounts } from "react-icons/md";
// import { IoInformationCircle, IoSettings } from "react-icons/io5";

// import { FaUserCircle } from "react-icons/fa";
// function AdminNavBar({ onIconClick, options }) {
//   const [hoveredIcon, setHoveredIcon] = useState("");
//   const [dropdownOpen, setDropdownOpen] = useState(false);
//   const [searchQuery, setSearchQuery] = useState("");
//   const [filteredOptions, setFilteredOptions] = useState([]);
//   const [tooltip, setTooltip] = useState("");
//   const excludedTitles = ["Payroll"]; // Titles to exclude

//   const flattenedOptions = useMemo(() => {
//     return options.flatMap((option) => {
//       if (option.subOptions) {
//         return [
//           option,
//           ...option.subOptions.map((subOption) => ({
//             ...subOption,
//             isSubOption: true, // Flag to identify if it's a subOption
//             parentTitle: option.title, // Store parent title to use if needed
//           })),
//         ];
//       }
//       return option;
//     });
//   }, [options]);

//   const handleMouseEnter = (iconName, tooltipText) => {
//     setHoveredIcon(iconName);
//     setTooltip(tooltipText);
//   };

//   const handleMouseLeave = () => {
//     setHoveredIcon("");
//     setTooltip("");
//   };
//   const iconStyle = (iconName) => ({
//     color: hoveredIcon === iconName ? "#ef5f2b" : "#ef5f2b",
//     fontSize: "1.5rem",
//   });

//   const toggleDropdown = () => {
//     setDropdownOpen(!dropdownOpen);
//   };

//   // useEffect(() => {
//   //   if (searchQuery) {
//   //     const filtered = flattenedOptions.filter(
//   //       (option) =>
//   //         option.title?.toLowerCase().includes(searchQuery.toLowerCase()) ||
//   //         option.name?.toLowerCase().includes(searchQuery.toLowerCase())
//   //     );
//   //     setFilteredOptions(filtered);
//   //   } else {
//   //     setFilteredOptions([]);
//   //   }
//   // }, [searchQuery, flattenedOptions]);
//   useEffect(() => {
//     if (searchQuery) {
//       const filtered = flattenedOptions.filter(
//         (option) =>
//           (option.title?.toLowerCase().includes(searchQuery.toLowerCase()) ||
//             option.name?.toLowerCase().includes(searchQuery.toLowerCase())) &&
//           !excludedTitles.includes(option.title) // Ensure excluded titles are not shown
//       );
//       setFilteredOptions(filtered);
//     } else {
//       setFilteredOptions([]);
//     }
//   }, [searchQuery, flattenedOptions]);
//   const handleSearchChange = (e) => {
//     setSearchQuery(e.target.value);
//   };

//   // const handleSuggestionClick = (suggestion) => {
//   //   onIconClick(suggestion.title);
//   //   setSearchQuery("");
//   //   setFilteredOptions([]);
//   //   // setDropdownOpen(false);
//   // };
//   const handleSuggestionClick = (suggestion) => {
//     if (suggestion.isSubOption) {
//       onIconClick(suggestion.name); // Use name for suboptions
//     } else {
//       onIconClick(suggestion.title); // Use title for main options
//     }
//     setSearchQuery("");
//     setFilteredOptions([]);
//   };

//   return (
//     <>
//       <div
//         id="main"
//         className="w-full flex justify-between items-center relative pb-2 top-0"
//       >
//         <div
//           id="topbar"
//           className="flex flex-grow w-full justify-center items-center mt-2 mx-2"
//         >
//           <div
//             style={{
//               backgroundImage: "linear-gradient(to right, #E65F2B, #FFC252)",
//             }}
//             className="h-[42px] ml-10 md:ml-60   w-[180px] sm:w-[300px] lg:w-[560px]   rounded-lg flex justify-center items-center relative"
//           >
//             <input
//               style={{
//                 backgroundImage: "linear-gradient(to right, #E65F2B, #FFC252)",
//               }}
//               className="pl-4 px-4 text-sm placeholder:text-white outline-none placeholder:text-start w-full rounded-xl text-white border-none bg-[#ef5f2b]"
//               type="search"
//               placeholder="Search Anything here...."
//               value={searchQuery}
//               onChange={handleSearchChange}
//             />

//             {filteredOptions.length > 0 && (
//               <div className="absolute top-[42px] scrollbar-thin scrollbar-track-white scrollbar-thumb-[#e65f2b] overflow-y-scroll h-32 left-0 bg-white w-full shadow-lg rounded-lg z-10">
//                 {filteredOptions.map((option, index) => (
//                   <div
//                     key={index}
//                     className={`py-2 px-4 hover:bg-gray-200 cursor-pointer text-[#e65f2b] ${
//                       option.isSubOption ? "" : "" // Indent subOptions
//                     }`}
//                     onClick={() => handleSuggestionClick(option)}
//                   >
//                     {option.isSubOption ? option.name : option.title}
//                   </div>
//                 ))}
//               </div>
//             )}
//           </div>
//         </div>
//         <div className="flex justify-start md:hidden z-50 mr-2">
//           <FaBars
//             className="text-[#e65f2b] text-3xl hover:cursor-pointer"
//             onClick={toggleDropdown}
//           />
//           {dropdownOpen && (
//             <div
//               id="icons"
//               className="absolute right-2 mt-14 py-2 w-auto flex flex-col space-y-0 transition-all duration-1000 ease-in-out bg-white shadow-lg rounded-lg"
//             >
//               <div
//                 onClick={() => {
//                   onIconClick("Company Information");
//                   setDropdownOpen(false);
//                 }}
//                 className="border-b hover:bg-gray-200 flex border-[#e65f2b] transition-all duration-1000 ease-in-out pb-1 px-2"
//               >
//                 <IoInformationCircle
//                   className="hover:cursor-pointer"
//                   style={iconStyle("folder")}
//                 />
//                 <p className="pl-2 text-[#e65f2b]">Company Information</p>
//               </div>
//               <div
//                 onClick={() => {
//                   onIconClick("Account Details");
//                   setDropdownOpen(false);
//                 }}
//                 className="border-b hover:bg-gray-200 flex border-[#e65f2b] transition-all duration-1000 ease-in-out py-1 pt-1 px-2"
//               >
//                 <MdManageAccounts
//                   className="hover:cursor-pointer"
//                   style={iconStyle("calendar")}
//                 />
//                 <p className="pl-2 text-[#e65f2b]">Account Details</p>
//               </div>

//               <div
//                 onClick={() => {
//                   onIconClick("Roles");
//                   setDropdownOpen(false);
//                 }}
//                 className="border-b hover:bg-gray-200 flex border-[#e65f2b] transition-all duration-1000 ease-in-out py-1 px-2"
//               >
//                 <FaPeopleGroup
//                   className="hover:cursor-pointer"
//                   style={iconStyle("mail")}
//                 />
//                 <p className="pl-2 text-[#e65f2b]">Roles</p>
//               </div>
//               <div
//                 onClick={() => {
//                   onIconClick("User");
//                   setDropdownOpen(false);
//                 }}
//                 className="border-b hover:bg-gray-200 flex border-[#e65f2b] transition-all duration-1000 ease-in-out py-1 px-2"
//               >
//                 <FaUserCircle
//                   className="hover:cursor-pointer"
//                   style={iconStyle("bell")}
//                 />
//                 <p className="pl-2 text-[#e65f2b]">Notification</p>
//               </div>
//               <div
//                 onClick={() => {
//                   onIconClick("Company Settings");
//                   setDropdownOpen(false);
//                 }}
//                 className="border-b hover:bg-gray-200 flex border-[#e65f2b] transition-all duration-1000 ease-in-out py-1 px-2"
//               >
//                 <IoSettings
//                   className="hover:cursor-pointer"
//                   style={iconStyle("message")}
//                 />
//                 <p className="pl-2 text-[#e65f2b]">Company Settings</p>
//               </div>
//             </div>
//           )}
//         </div>
//         <div
//           id="icons"
//           className="hidden md:flex justify-around items-center w-auto space-x-4 md:space-x-3 mr-10"
//         >
//           <div className="relative">
//             <IoInformationCircle
//               className="hover:cursor-pointer w-8 h-8 pt-1"
//               style={iconStyle("Company Information")}
//               onMouseEnter={() =>
//                 handleMouseEnter("Company Information", "Company Information")
//               }
//               onMouseLeave={handleMouseLeave}
//               onClick={() => onIconClick("Company Information")}
//             />
//             {hoveredIcon === "Company Information" && (
//               <div className="absolute text-nowrap bottom-[-2.0rem] left-1/2 transform -translate-x-1/2 bg-white text-[#e65f2b] text-xs p-1 rounded">
//                 {tooltip}
//               </div>
//             )}
//           </div>

//           <div className="relative">
//             <MdManageAccounts
//               className="hover:cursor-pointer w-8 h-8 pt-1"
//               style={iconStyle("Account Details")}
//               onMouseEnter={() =>
//                 handleMouseEnter("Account Details", "Account Details")
//               }
//               onMouseLeave={handleMouseLeave}
//               onClick={() => onIconClick("Account Details")}
//             />
//             {hoveredIcon === "Account Details" && (
//               <div className="absolute text-nowrap bottom-[-2.0rem] left-1/2 transform -translate-x-1/2 bg-white text-[#e65f2b] text-xs p-1 rounded">
//                 {tooltip}
//               </div>
//             )}
//           </div>

//           <div className="relative">
//             <FaPeopleGroup
//               className="hover:cursor-pointer w-8 h-8 pt-1"
//               style={iconStyle("Roles")}
//               onMouseEnter={() => handleMouseEnter("Roles", "Roles")}
//               onMouseLeave={handleMouseLeave}
//               onClick={() => onIconClick("Roles")}
//             />
//             {hoveredIcon === "Roles" && (
//               <div className="absolute bottom-[-2.0rem] left-1/2 transform -translate-x-1/2 bg-white text-[#e65f2b] text-xs p-1 rounded">
//                 {tooltip}
//               </div>
//             )}
//           </div>

//           <div className="relative">
//             <FaUserCircle
//               className="hover:cursor-pointer w-8 h-8 pt-1"
//               style={iconStyle("User")}
//               onMouseEnter={() => handleMouseEnter("User", "User")}
//               onMouseLeave={handleMouseLeave}
//               onClick={() => onIconClick("User")}
//             />
//             {hoveredIcon === "User" && (
//               <div className="absolute bottom-[-2.0rem] left-1/2 transform -translate-x-1/2 bg-white text-[#e65f2b] text-xs p-1 rounded">
//                 {tooltip}
//               </div>
//             )}
//           </div>

//           <div className="relative">
//             <IoSettings
//               className="hover:cursor-pointer w-8 h-8 pt-1"
//               style={iconStyle("Company Settings")}
//               onMouseEnter={() =>
//                 handleMouseEnter("Company Settings", "Company Settings")
//               }
//               onMouseLeave={handleMouseLeave}
//               onClick={() => onIconClick("Company Settings")}
//             />
//             {hoveredIcon === "Company Settings" && (
//               <div className="absolute text-nowrap bottom-[-2.0rem] left-1/2 transform -translate-x-1/2 bg-white text-[#e65f2b] text-xs p-1 rounded">
//                 {tooltip}
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default AdminNavBar;





import React, { useState, useEffect, useMemo } from "react";
import { FaBars } from "react-icons/fa";
import { FaPeopleGroup } from "react-icons/fa6";
import { MdManageAccounts } from "react-icons/md";
import { IoInformationCircle, IoSettings } from "react-icons/io5";
import { FaUserCircle } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi"; // ✅ Added Logout Icon

function AdminNavBar({ onIconClick, options }) {
  const [hoveredIcon, setHoveredIcon] = useState("");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredOptions, setFilteredOptions] = useState([]);
  const [tooltip, setTooltip] = useState("");
  const excludedTitles = ["Payroll"];

  const flattenedOptions = useMemo(() => {
    return options.flatMap((option) => {
      if (option.subOptions) {
        return [
          option,
          ...option.subOptions.map((subOption) => ({
            ...subOption,
            isSubOption: true,
            parentTitle: option.title,
          })),
        ];
      }
      return option;
    });
  }, [options]);

  const handleMouseEnter = (iconName, tooltipText) => {
    setHoveredIcon(iconName);
    setTooltip(tooltipText);
  };

  const handleMouseLeave = () => {
    setHoveredIcon("");
    setTooltip("");
  };

  const iconStyle = (iconName) => ({
    color: hoveredIcon === iconName ? "#ef5f2b" : "#ef5f2b",
    fontSize: "1.5rem",
  });

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  // ✅ Logout Handler
  const handleLogout = () => {
    // Clear all auth-related local storage
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    localStorage.removeItem("lastLogin");
    localStorage.removeItem("employeeJwt");
    
    // Redirect to login page
    window.location.href = "/login";
  };

  useEffect(() => {
    if (searchQuery) {
      const filtered = flattenedOptions.filter(
        (option) =>
          (option.title?.toLowerCase().includes(searchQuery.toLowerCase()) ||
            option.name?.toLowerCase().includes(searchQuery.toLowerCase())) &&
          !excludedTitles.includes(option.title)
      );
      setFilteredOptions(filtered);
    } else {
      setFilteredOptions([]);
    }
  }, [searchQuery, flattenedOptions]);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSuggestionClick = (suggestion) => {
    if (suggestion.isSubOption) {
      onIconClick(suggestion.name);
    } else {
      onIconClick(suggestion.title);
    }
    setSearchQuery("");
    setFilteredOptions([]);
  };

  return (
    <>
      <div
        id="main"
        className="w-full flex justify-between items-center relative pb-2 top-0"
      >
        <div
          id="topbar"
          className="flex flex-grow w-full justify-center items-center mt-2 mx-2"
        >
          <div
            style={{
              backgroundImage: "linear-gradient(to right, #E65F2B, #FFC252)",
            }}
            className="h-[42px] ml-10 md:ml-60 w-[180px] sm:w-[300px] lg:w-[560px] rounded-lg flex justify-center items-center relative"
          >
            <input
              style={{
                backgroundImage: "linear-gradient(to right, #E65F2B, #FFC252)",
              }}
              className="pl-4 px-4 text-sm placeholder:text-white outline-none placeholder:text-start w-full rounded-xl text-white border-none bg-[#ef5f2b]"
              type="search"
              placeholder="Search Anything here...."
              value={searchQuery}
              onChange={handleSearchChange}
            />

            {filteredOptions.length > 0 && (
              <div className="absolute top-[42px] scrollbar-thin scrollbar-track-white scrollbar-thumb-[#e65f2b] overflow-y-scroll h-32 left-0 bg-white w-full shadow-lg rounded-lg z-10">
                {filteredOptions.map((option, index) => (
                  <div
                    key={index}
                    className={`py-2 px-4 hover:bg-gray-200 cursor-pointer text-[#e65f2b] ${
                      option.isSubOption ? "" : ""
                    }`}
                    onClick={() => handleSuggestionClick(option)}
                  >
                    {option.isSubOption ? option.name : option.title}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
        
        {/* Mobile Menu */}
        <div className="flex justify-start md:hidden z-50 mr-2">
          <FaBars
            className="text-[#e65f2b] text-3xl hover:cursor-pointer"
            onClick={toggleDropdown}
          />
          {dropdownOpen && (
            <div
              id="icons"
              className="absolute right-2 mt-14 py-2 w-auto flex flex-col space-y-0 transition-all duration-1000 ease-in-out bg-white shadow-lg rounded-lg"
            >
              <div
                onClick={() => {
                  onIconClick("Company Information");
                  setDropdownOpen(false);
                }}
                className="border-b hover:bg-gray-200 flex border-[#e65f2b] transition-all duration-1000 ease-in-out pb-1 px-2"
              >
                <IoInformationCircle
                  className="hover:cursor-pointer"
                  style={iconStyle("folder")}
                />
                <p className="pl-2 text-[#e65f2b]">Company Information</p>
              </div>
              <div
                onClick={() => {
                  onIconClick("Account Details");
                  setDropdownOpen(false);
                }}
                className="border-b hover:bg-gray-200 flex border-[#e65f2b] transition-all duration-1000 ease-in-out py-1 pt-1 px-2"
              >
                <MdManageAccounts
                  className="hover:cursor-pointer"
                  style={iconStyle("calendar")}
                />
                <p className="pl-2 text-[#e65f2b]">Account Details</p>
              </div>
              <div
                onClick={() => {
                  onIconClick("Roles");
                  setDropdownOpen(false);
                }}
                className="border-b hover:bg-gray-200 flex border-[#e65f2b] transition-all duration-1000 ease-in-out py-1 px-2"
              >
                <FaPeopleGroup
                  className="hover:cursor-pointer"
                  style={iconStyle("mail")}
                />
                <p className="pl-2 text-[#e65f2b]">Roles</p>
              </div>
              <div
                onClick={() => {
                  onIconClick("User");
                  setDropdownOpen(false);
                }}
                className="border-b hover:bg-gray-200 flex border-[#e65f2b] transition-all duration-1000 ease-in-out py-1 px-2"
              >
                <FaUserCircle
                  className="hover:cursor-pointer"
                  style={iconStyle("bell")}
                />
                <p className="pl-2 text-[#e65f2b]">Notification</p>
              </div>
              <div
                onClick={() => {
                  onIconClick("Company Settings");
                  setDropdownOpen(false);
                }}
                className="border-b hover:bg-gray-200 flex border-[#e65f2b] transition-all duration-1000 ease-in-out py-1 px-2"
              >
                <IoSettings
                  className="hover:cursor-pointer"
                  style={iconStyle("message")}
                />
                <p className="pl-2 text-[#e65f2b]">Company Settings</p>
              </div>

              {/* ✅ Mobile Logout Button */}
              <div
                onClick={handleLogout}
                className="hover:bg-gray-200 flex transition-all duration-1000 ease-in-out py-1 px-2 mt-1"
              >
                <FiLogOut
                  className="hover:cursor-pointer"
                  style={iconStyle("logout")}
                />
                <p className="pl-2 text-[#e65f2b] font-medium">Logout</p>
              </div>
            </div>
          )}
        </div>

        {/* Desktop Icons */}
        <div
          id="icons"
          className="hidden md:flex justify-around items-center w-auto space-x-4 md:space-x-3 mr-10"
        >
          <div className="relative">
            <IoInformationCircle
              className="hover:cursor-pointer w-8 h-8 pt-1"
              style={iconStyle("Company Information")}
              onMouseEnter={() =>
                handleMouseEnter("Company Information", "Company Information")
              }
              onMouseLeave={handleMouseLeave}
              onClick={() => onIconClick("Company Information")}
            />
            {hoveredIcon === "Company Information" && (
              <div className="absolute text-nowrap bottom-[-2.0rem] left-1/2 transform -translate-x-1/2 bg-white text-[#e65f2b] text-xs p-1 rounded shadow-md">
                {tooltip}
              </div>
            )}
          </div>

          <div className="relative">
            <MdManageAccounts
              className="hover:cursor-pointer w-8 h-8 pt-1"
              style={iconStyle("Account Details")}
              onMouseEnter={() =>
                handleMouseEnter("Account Details", "Account Details")
              }
              onMouseLeave={handleMouseLeave}
              onClick={() => onIconClick("Account Details")}
            />
            {hoveredIcon === "Account Details" && (
              <div className="absolute text-nowrap bottom-[-2.0rem] left-1/2 transform -translate-x-1/2 bg-white text-[#e65f2b] text-xs p-1 rounded shadow-md">
                {tooltip}
              </div>
            )}
          </div>

          <div className="relative">
            <FaPeopleGroup
              className="hover:cursor-pointer w-8 h-8 pt-1"
              style={iconStyle("Roles")}
              onMouseEnter={() => handleMouseEnter("Roles", "Roles")}
              onMouseLeave={handleMouseLeave}
              onClick={() => onIconClick("Roles")}
            />
            {hoveredIcon === "Roles" && (
              <div className="absolute bottom-[-2.0rem] left-1/2 transform -translate-x-1/2 bg-white text-[#e65f2b] text-xs p-1 rounded shadow-md">
                {tooltip}
              </div>
            )}
          </div>

          <div className="relative">
            <FaUserCircle
              className="hover:cursor-pointer w-8 h-8 pt-1"
              style={iconStyle("User")}
              onMouseEnter={() => handleMouseEnter("User", "User")}
              onMouseLeave={handleMouseLeave}
              onClick={() => onIconClick("User")}
            />
            {hoveredIcon === "User" && (
              <div className="absolute bottom-[-2.0rem] left-1/2 transform -translate-x-1/2 bg-white text-[#e65f2b] text-xs p-1 rounded shadow-md">
                {tooltip}
              </div>
            )}
          </div>

          <div className="relative">
            <IoSettings
              className="hover:cursor-pointer w-8 h-8 pt-1"
              style={iconStyle("Company Settings")}
              onMouseEnter={() =>
                handleMouseEnter("Company Settings", "Company Settings")
              }
              onMouseLeave={handleMouseLeave}
              onClick={() => onIconClick("Company Settings")}
            />
            {hoveredIcon === "Company Settings" && (
              <div className="absolute text-nowrap bottom-[-2.0rem] left-1/2 transform -translate-x-1/2 bg-white text-[#e65f2b] text-xs p-1 rounded shadow-md">
                {tooltip}
              </div>
            )}
          </div>

          {/* ✅ Desktop Logout Icon */}
          <div className="relative border-l border-gray-300 pl-3 ml-1">
            <FiLogOut
              className="hover:cursor-pointer w-8 h-8 pt-1"
              style={iconStyle("Logout")}
              onMouseEnter={() => handleMouseEnter("Logout", "Logout")}
              onMouseLeave={handleMouseLeave}
              onClick={handleLogout}
            />
            {hoveredIcon === "Logout" && (
              <div className="absolute text-nowrap bottom-[-2.0rem] left-1/2 transform -translate-x-1/2 bg-white text-[#e65f2b] text-xs p-1 rounded shadow-md">
                {tooltip}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default AdminNavBar;