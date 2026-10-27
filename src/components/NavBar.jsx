// /* eslint-disable no-unused-vars */
// /* eslint-disable react/prop-types */
// import React, { useState, useEffect, useMemo } from "react";

// import { useNavigate } from "react-router-dom";
// import {
//   FaEnvelope,
//   FaBars,
//   FaCalendarAlt,
//   FaCalendarCheck,
//   FaTasks,
// } from "react-icons/fa";
// import { useDispatch } from "react-redux";
// import { TiMessages } from "react-icons/ti";
// import { IoMdLogOut } from "react-icons/io";
// // import { logout } from "../State/Auth/Action";
// function NavBar({ onIconClick, options, projectOptions }) {
//   const navigate = useNavigate();
//   const [hoveredIcon, setHoveredIcon] = useState("");
//   const [dropdownOpen, setDropdownOpen] = useState(false);
//   const [searchQuery, setSearchQuery] = useState("");
//   const [filteredOptions, setFilteredOptions] = useState([]);
//   const [tooltip, setTooltip] = useState("");
//   const excludedTitles = [
//     "PayRoll",
//     "HR Management",
//     "Reports",
//     "Accounts",
//     "Authentication",
//     "Project",
//     "Logout",
//     "Register",
//     "Forgot Password",
//     "Page 404",
//   ];

//   const jwt = localStorage.getItem("hrjwt");
//   const dispatch = useDispatch();

//   const handleLogout = () => {
//     dispatch(logout(jwt));
//     localStorage.removeItem("hrJwt");
//     localStorage.removeItem("profile");
//     navigate("/option");
//   };
//   const flattenedOptions = useMemo(() => {
//     return [...options, ...projectOptions].flatMap((option) => {
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
//   }, [options, projectOptions]);

//   // Handle search input change
//   const handleSearchChange = (e) => {
//     setSearchQuery(e.target.value);
//   };

//   // Filter options based on search query
//   // useEffect(() => {
//   //   if (searchQuery) {
//   //     const query = searchQuery.toLowerCase();
//   //     const filtered = flattenedOptions.filter(
//   //       (option) =>
//   //         option.title?.toLowerCase().includes(query) ||
//   //         option.name?.toLowerCase().includes(query) ||
//   //         (option.isSubOption &&
//   //           option.parentTitle?.toLowerCase().includes(query) &&
//   //           !excludedTitles.includes(option.title))
//   //     );
//   //     setFilteredOptions(filtered);
//   //   } else {
//   //     setFilteredOptions([]);
//   //   }
//   // }, [searchQuery, flattenedOptions]);
//   useEffect(() => {
//     if (searchQuery) {
//       const query = searchQuery.toLowerCase();
//       const filtered = flattenedOptions.filter((option) => {
//         const isExcluded = excludedTitles.includes(option.title);

//         const isSubOptionExcluded =
//           option.isSubOption && excludedTitles.includes(option.parentTitle);

//         return (
//           !isExcluded &&
//           !isSubOptionExcluded &&
//           (option.title?.toLowerCase().includes(query) ||
//             option.name?.toLowerCase().includes(query))
//         );
//       });
//       setFilteredOptions(filtered);
//     } else {
//       setFilteredOptions([]);
//     }
//   }, [searchQuery, flattenedOptions, excludedTitles]);

//   const handleSuggestionClick = (suggestion) => {
//     onIconClick(suggestion.title);
//     setSearchQuery("");
//     setFilteredOptions([]);
//   };

//   const iconStyle = (iconName) => ({
//     color: hoveredIcon === iconName ? "#0098f1" : "#0098f1",
//     fontSize: "1.5rem",
//   });

//   const toggleDropdown = () => {
//     setDropdownOpen(!dropdownOpen);
//   };

//   const handleMouseEnter = (iconName, tooltipText) => {
//     setHoveredIcon(iconName);
//     setTooltip(tooltipText);
//   };

//   const handleMouseLeave = () => {
//     setHoveredIcon("");
//     setTooltip("");
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
//           <div className="h-[42px]  bg-[#0098f1] ml-10 md:ml-60   w-[180px] sm:w-[300px] lg:w-[560px] rounded-lg flex justify-center items-center relative">
//             <input
//               className="pl-4 px-4  bg-[#0098f1]  text-sm placeholder:text-white outline-none placeholder:text-left w-full rounded-xl text-white border-none"
//               type="search"
//               placeholder="Search Anything here...."
//               value={searchQuery}
//               onChange={handleSearchChange}
//             />

//             {filteredOptions.length > 0 && (
//               <div className="absolute top-[42px] rounded-lg overflow-y-scroll scrollbar-thin   scrollbar-track-white scrollbar-thumb-[#0098f1] h-32 left-0 bg-white w-full shadow-lg z-10">
//                 {filteredOptions.map((option, index) => (
//                   <div
//                     key={index}
//                     className={`py-2 px-4 hover:bg-[#0098f1] hover:bg-opacity-10 cursor-pointer text-[#0098f1] ${
//                       option.isSubOption ? "" : ""
//                     }`}
//                     onClick={() => handleSuggestionClick(option)}
//                   >
//                     {option.isSubOption ? option.title : option.title}
//                   </div>
//                 ))}
//               </div>
//             )}
//           </div>
//         </div>
//         <div className="flex justify-start md:hidden z-50 mr-2">
//           <FaBars
//             className="text-[#0098f1] text-3xl hover:cursor-pointer"
//             onClick={toggleDropdown}
//           />
//           {dropdownOpen && (
//             <div
//               id="icons"
//               className="absolute right-2 mt-14 py-2 w-auto flex flex-col space-y-0 transition-all duration-1000 ease-in-out bg-white shadow-lg rounded-lg"
//             >
//               <div
//                 onClick={() => onIconClick("Events")}
//                 className="border-b hover:bg-gray-200 flex border-[#0098f1] transition-all duration-1000 ease-in-out pb-1 px-2"
//               >
//                 <FaCalendarCheck
//                   className="hover:cursor-pointer"
//                   style={iconStyle("folder")}
//                 />
//                 <p className="pl-2 text-[#0098f1]">Events</p>
//               </div>

//               <div
//                 onClick={() => onIconClick("Chat")}
//                 className="border-b hover:bg-gray-200 flex border-[#0098f1] transition-all duration-1000 ease-in-out py-1 px-2"
//               >
//                 <TiMessages
//                   className="hover:cursor-pointer"
//                   style={iconStyle("message")}
//                 />
//                 <p className="pl-2 text-[#0098f1]">Messages</p>
//               </div>
//               {/* <div
//                 onClick={() => onIconClick("Inbox")}
//                 className="border-b hover:bg-gray-200 flex border-[#0098f1] transition-all duration-1000 ease-in-out py-1 px-2"
//               >
//                 <FaEnvelope
//                   className="hover:cursor-pointer"
//                   style={iconStyle("mail")}
//                 />
//                 <p className="pl-2 text-[#0098f1]">Mails</p>
//               </div> */}
//               <div
//                 onClick={() => onIconClick("Holiday")}
//                 className="border-b hover:bg-gray-200 flex border-[#0098f1] transition-all duration-1000 ease-in-out py-1 pt-1 px-2"
//               >
//                 <FaCalendarAlt
//                   className="hover:cursor-pointer"
//                   style={iconStyle("calendar")}
//                   onMouseEnter={() => handleMouseEnter("calendar")}
//                   onMouseLeave={handleMouseLeave}
//                 />
//                 <p className="pl-2 text-[#0098f1]">Holidays</p>
//               </div>
//               <div
//                 onClick={() => onIconClick("Activities")}
//                 className="border-b hover:bg-gray-200 flex border-[#0098f1] transition-all duration-1000 ease-in-out py-1 px-2"
//               >
//                 <FaTasks
//                   className="hover:cursor-pointer"
//                   style={iconStyle("bell")}
//                 />
//                 <p className="pl-2 text-[#0098f1]">Activities</p>
//               </div>
//               <div
//                 onClick={handleLogout}
//                 className="py-1 border-b hover:bg-gray-200 flex border-[#0098f1] transition-all duration-1000 ease-in-out px-2"
//               >
//                 <IoMdLogOut
//                   className="hover:cursor-pointer"
//                   style={iconStyle("filter")}
//                 />
//                 <p className="pl-2 text-[#0098f1]">Logout</p>
//               </div>
//             </div>
//           )}
//         </div>

//         <div
//           id="icons"
//           className="hidden md:flex md:mt-2 justify-around items-center w-auto space-x-4 md:space-x-5 mr-10"
//         >
//           <div className="relative">
//             <FaCalendarCheck
//               className="hover:cursor-pointer"
//               style={iconStyle("Events")}
//               onMouseEnter={() => handleMouseEnter("Events", "Events")}
//               onMouseLeave={handleMouseLeave}
//               onClick={() => onIconClick("Events")}
//             />
//             {hoveredIcon === "Events" && (
//               <div className="absolute bottom-[-2.0rem] left-1/2 transform -translate-x-1/2 bg-white text-[#0098f1] text-xs p-1 rounded">
//                 {tooltip}
//               </div>
//             )}
//           </div>

//           <div className="relative">
//             <TiMessages
//               className="hover:cursor-pointer"
//               style={iconStyle("Chat")}
//               onMouseEnter={() => handleMouseEnter("Chat", "Chat")}
//               onMouseLeave={handleMouseLeave}
//               onClick={() => onIconClick("Chat")}
//             />
//             {hoveredIcon === "Chat" && (
//               <div className="absolute bottom-[-2.0rem] left-1/2 transform -translate-x-1/2 bg-white text-[#0098f1] text-xs p-1 rounded">
//                 {tooltip}
//               </div>
//             )}
//           </div>

//           {/* <div className="relative">
//             <FaEnvelope
//               className="hover:cursor-pointer"
//               style={iconStyle("Inbox")}
//               onMouseEnter={() => handleMouseEnter("Inbox", "Inbox")}
//               onMouseLeave={handleMouseLeave}
//               onClick={() => onIconClick("Inbox")}
//             />
//             {hoveredIcon === "Inbox" && (
//               <div className="absolute bottom-[-2.0rem] left-1/2 transform -translate-x-1/2 bg-white text-[#0098f1] text-xs p-1 rounded">
//                 {tooltip}
//               </div>
//             )}
//           </div> */}

//           <div className="relative">
//             <FaCalendarAlt
//               className="hover:cursor-pointer"
//               style={iconStyle("Holiday")}
//               onMouseEnter={() => handleMouseEnter("Holiday", "Holiday")}
//               onMouseLeave={handleMouseLeave}
//               onClick={() => onIconClick("Holiday")}
//             />
//             {hoveredIcon === "Holiday" && (
//               <div className="absolute bottom-[-2.0rem] left-1/2 transform -translate-x-1/2 bg-white text-[#0098f1] text-xs p-1 rounded">
//                 {tooltip}
//               </div>
//             )}
//           </div>

//           <div className="relative">
//             <FaTasks
//               className="hover:cursor-pointer"
//               style={iconStyle("Activities")}
//               onMouseEnter={() => handleMouseEnter("Activities", "Activities")}
//               onMouseLeave={handleMouseLeave}
//               onClick={() => onIconClick("Activities")}
//             />
//             {hoveredIcon === "Activities" && (
//               <div className="absolute bottom-[-2.0rem] left-1/2 transform -translate-x-1/2 bg-white text-[#0098f1] text-xs p-1 rounded">
//                 {tooltip}
//               </div>
//             )}
//           </div>

//           <div className="relative">
//             <IoMdLogOut
//               className="hover:cursor-pointer"
//               style={iconStyle("Logout")}
//               onMouseEnter={() => handleMouseEnter("Logout", "Logout")}
//               onMouseLeave={handleMouseLeave}
//               onClick={handleLogout}
//             />
//             {hoveredIcon === "Logout" && (
//               <div className="absolute bottom-[-2.0rem] left-1/2 transform -translate-x-1/2 bg-white text-[#0098f1] text-xs p-1 rounded">
//                 {tooltip}
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default NavBar;




/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState, useEffect, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaEnvelope,
  FaBars,
  FaCalendarAlt,
  FaCalendarCheck,
  FaTasks,
} from "react-icons/fa";
import { useDispatch } from "react-redux";
import { TiMessages } from "react-icons/ti";
import { IoMdLogOut } from "react-icons/io";
// import { logout } from "../State/Auth/Action";

function NavBar({ onIconClick, options, projectOptions }) {
  const navigate = useNavigate();
  const [hoveredIcon, setHoveredIcon] = useState("");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredOptions, setFilteredOptions] = useState([]);
  const [tooltip, setTooltip] = useState("");
  
  // Fix: Wrap excludedTitles in useMemo to prevent recreation on every render
  const excludedTitles = useMemo(() => [
    "PayRoll",
    "HR Management",
    "Reports",
    "Accounts",
    "Authentication",
    "Project",
    "Logout",
    "Register",
    "Forgot Password",
    "Page 404",
  ], []);

  const jwt = localStorage.getItem("hrjwt");
  const dispatch = useDispatch();

  const handleLogout = () => {
    // Fix: Make sure you import the correct logout action
    // dispatch(logout(jwt));
    localStorage.removeItem("hrJwt");
    localStorage.removeItem("profile");
    localStorage.removeItem("token"); // Add this if you're using token
    localStorage.removeItem("user"); // Add this if you're using user
    navigate("/option");
  };

  const flattenedOptions = useMemo(() => {
    return [...options, ...projectOptions].flatMap((option) => {
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
  }, [options, projectOptions]);

  // Handle search input change
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  // Filter options based on search query - FIXED
  useEffect(() => {
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      const filtered = flattenedOptions.filter((option) => {
        const isExcluded = excludedTitles.includes(option.title);
        const isSubOptionExcluded =
          option.isSubOption && excludedTitles.includes(option.parentTitle);

        return (
          !isExcluded &&
          !isSubOptionExcluded &&
          (option.title?.toLowerCase().includes(query) ||
            option.name?.toLowerCase().includes(query))
        );
      });
      setFilteredOptions(filtered);
    } else {
      setFilteredOptions([]);
    }
  }, [searchQuery, flattenedOptions, excludedTitles]); // Now excludedTitles is stable

  const handleSuggestionClick = (suggestion) => {
    onIconClick(suggestion.title);
    setSearchQuery("");
    setFilteredOptions([]);
  };

  const iconStyle = (iconName) => ({
    color: hoveredIcon === iconName ? "#0098f1" : "#0098f1",
    fontSize: "1.5rem",
  });

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleMouseEnter = (iconName, tooltipText) => {
    setHoveredIcon(iconName);
    setTooltip(tooltipText);
  };

  const handleMouseLeave = () => {
    setHoveredIcon("");
    setTooltip("");
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
          <div className="h-[42px]  bg-[#0098f1] ml-10 md:ml-60   w-[180px] sm:w-[300px] lg:w-[560px] rounded-lg flex justify-center items-center relative">
            <input
              className="pl-4 px-4  bg-[#0098f1]  text-sm placeholder:text-white outline-none placeholder:text-left w-full rounded-xl text-white border-none"
              type="search"
              placeholder="Search Anything here...."
              value={searchQuery}
              onChange={handleSearchChange}
            />

            {filteredOptions.length > 0 && (
              <div className="absolute top-[42px] rounded-lg overflow-y-scroll scrollbar-thin   scrollbar-track-white scrollbar-thumb-[#0098f1] h-32 left-0 bg-white w-full shadow-lg z-10">
                {filteredOptions.map((option, index) => (
                  <div
                    key={index}
                    className={`py-2 px-4 hover:bg-[#0098f1] hover:bg-opacity-10 cursor-pointer text-[#0098f1] ${
                      option.isSubOption ? "" : ""
                    }`}
                    onClick={() => handleSuggestionClick(option)}
                  >
                    {option.isSubOption ? option.title : option.title}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
        <div className="flex justify-start md:hidden z-50 mr-2">
          <FaBars
            className="text-[#0098f1] text-3xl hover:cursor-pointer"
            onClick={toggleDropdown}
          />
          {dropdownOpen && (
            <div
              id="icons"
              className="absolute right-2 mt-14 py-2 w-auto flex flex-col space-y-0 transition-all duration-1000 ease-in-out bg-white shadow-lg rounded-lg"
            >
              <div
                onClick={() => onIconClick("Events")}
                className="border-b hover:bg-gray-200 flex border-[#0098f1] transition-all duration-1000 ease-in-out pb-1 px-2"
              >
                <FaCalendarCheck
                  className="hover:cursor-pointer"
                  style={iconStyle("folder")}
                />
                <p className="pl-2 text-[#0098f1]">Events</p>
              </div>

              <div
                onClick={() => onIconClick("Chat")}
                className="border-b hover:bg-gray-200 flex border-[#0098f1] transition-all duration-1000 ease-in-out py-1 px-2"
              >
                <TiMessages
                  className="hover:cursor-pointer"
                  style={iconStyle("message")}
                />
                <p className="pl-2 text-[#0098f1]">Messages</p>
              </div>
              
              <div
                onClick={() => onIconClick("Holiday")}
                className="border-b hover:bg-gray-200 flex border-[#0098f1] transition-all duration-1000 ease-in-out py-1 pt-1 px-2"
              >
                <FaCalendarAlt
                  className="hover:cursor-pointer"
                  style={iconStyle("calendar")}
                  onMouseEnter={() => handleMouseEnter("calendar")}
                  onMouseLeave={handleMouseLeave}
                />
                <p className="pl-2 text-[#0098f1]">Holidays</p>
              </div>
              <div
                onClick={() => onIconClick("Activities")}
                className="border-b hover:bg-gray-200 flex border-[#0098f1] transition-all duration-1000 ease-in-out py-1 px-2"
              >
                <FaTasks
                  className="hover:cursor-pointer"
                  style={iconStyle("bell")}
                />
                <p className="pl-2 text-[#0098f1]">Activities</p>
              </div>
              <div
                onClick={handleLogout}
                className="py-1 border-b hover:bg-gray-200 flex border-[#0098f1] transition-all duration-1000 ease-in-out px-2"
              >
                <IoMdLogOut
                  className="hover:cursor-pointer"
                  style={iconStyle("filter")}
                />
                <p className="pl-2 text-[#0098f1]">Logout</p>
              </div>
            </div>
          )}
        </div>

        <div
          id="icons"
          className="hidden md:flex md:mt-2 justify-around items-center w-auto space-x-4 md:space-x-5 mr-10"
        >
          <div className="relative">
            <FaCalendarCheck
              className="hover:cursor-pointer"
              style={iconStyle("Events")}
              onMouseEnter={() => handleMouseEnter("Events", "Events")}
              onMouseLeave={handleMouseLeave}
              onClick={() => onIconClick("Events")}
            />
            {hoveredIcon === "Events" && (
              <div className="absolute bottom-[-2.0rem] left-1/2 transform -translate-x-1/2 bg-white text-[#0098f1] text-xs p-1 rounded">
                {tooltip}
              </div>
            )}
          </div>

          <div className="relative">
            <TiMessages
              className="hover:cursor-pointer"
              style={iconStyle("Chat")}
              onMouseEnter={() => handleMouseEnter("Chat", "Chat")}
              onMouseLeave={handleMouseLeave}
              onClick={() => onIconClick("Chat")}
            />
            {hoveredIcon === "Chat" && (
              <div className="absolute bottom-[-2.0rem] left-1/2 transform -translate-x-1/2 bg-white text-[#0098f1] text-xs p-1 rounded">
                {tooltip}
              </div>
            )}
          </div>

          <div className="relative">
            <FaCalendarAlt
              className="hover:cursor-pointer"
              style={iconStyle("Holiday")}
              onMouseEnter={() => handleMouseEnter("Holiday", "Holiday")}
              onMouseLeave={handleMouseLeave}
              onClick={() => onIconClick("Holiday")}
            />
            {hoveredIcon === "Holiday" && (
              <div className="absolute bottom-[-2.0rem] left-1/2 transform -translate-x-1/2 bg-white text-[#0098f1] text-xs p-1 rounded">
                {tooltip}
              </div>
            )}
          </div>

          <div className="relative">
            <FaTasks
              className="hover:cursor-pointer"
              style={iconStyle("Activities")}
              onMouseEnter={() => handleMouseEnter("Activities", "Activities")}
              onMouseLeave={handleMouseLeave}
              onClick={() => onIconClick("Activities")}
            />
            {hoveredIcon === "Activities" && (
              <div className="absolute bottom-[-2.0rem] left-1/2 transform -translate-x-1/2 bg-white text-[#0098f1] text-xs p-1 rounded">
                {tooltip}
              </div>
            )}
          </div>

          <div className="relative">
            <IoMdLogOut
              className="hover:cursor-pointer"
              style={iconStyle("Logout")}
              onMouseEnter={() => handleMouseEnter("Logout", "Logout")}
              onMouseLeave={handleMouseLeave}
              onClick={handleLogout}
            />
            {hoveredIcon === "Logout" && (
              <div className="absolute bottom-[-2.0rem] left-1/2 transform -translate-x-1/2 bg-white text-[#0098f1] text-xs p-1 rounded">
                {tooltip}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default NavBar;