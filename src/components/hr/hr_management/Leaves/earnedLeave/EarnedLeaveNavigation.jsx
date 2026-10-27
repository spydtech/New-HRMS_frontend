// import React, { useState } from "react";

// import Logs from "./Logs";
// import Rules from "./Rules";
// import Balance from "./Balance";
// import Analytics from "./Analytics";
// import Settings from "./Settings";

// function EarnedLeaveNavigation() {
//   const [activeTab, setActiveTab] = useState("Logs");

//   const renderComponent = () => {
//     switch (activeTab) {
//       case "Logs":
//         return <Logs />;
//       case "Rules":
//         return (
//           <div className="bg-white">
//             <Rules />
//           </div>
//         );
//       case "Balance":
//         return <Balance />;
//       case "Analytics":
//         return <Analytics />;
//       case "Settings":
//         return <Settings />;
//       default:
//         return <Logs />;
//     }
//   };

//   return (
//     <>
//       <div id="main" className="lg:text-[24px] text-sm w-auto h-auto">
//         {/* Dropdown for screens below 1024px */}
//         <div className="block sm:hidden mb-4">
//           <select
//             value={activeTab}
//             onChange={(e) => setActiveTab(e.target.value)}
//             className="w-full h-12 border border-gray-300 rounded-lg px-4"
//           >
//             <option value="Logs">Logs</option>
//             <option value="Rules">Rules</option>
//             <option value="Balance">Balance</option>
//             <option value="Analytics">Analytics</option>
//             <option value="Settings">Settings</option>
//           </select>
//         </div>

//         {/* Tabs for screens 1024px and above */}
//         <div className="hidden sm:flex text-lg h-16 justify-between items-center">
//           {["Logs", "Rules", "Balance", "Analytics", "Settings"].map((tab) => (
//             <div
//               key={tab}
//               className={`w-48 justify-center items-center flex h-16 cursor-pointer ${
//                 activeTab === tab ? "text-[#0098f1]" : "text-black"
//               }`}
//               onClick={() => setActiveTab(tab)}
//             >
//               <span
//                 className={`${
//                   activeTab === tab
//                     ? "border-b-2 border-[#0098f1]"
//                     : "border-none"
//                 }`}
//               >
//                 {tab}
//               </span>
//             </div>
//           ))}
//         </div>

//         <div>{renderComponent()}</div>
//       </div>
//     </>
//   );
// }

// export default EarnedLeaveNavigation;




// import React, { useState } from "react";
// import LeaveLogs from "../LeaveLogs"; 
// import LeaveBalance from "../LeaveBalance";
// import Rules from "./Rules"; 
// import Settings from "./Settings"; 

// function EarnedLeaveNavigation() {
//   const [activeTab, setActiveTab] = useState("Logs");

//   const renderComponent = () => {
//     switch (activeTab) {
//       case "Logs": return <LeaveLogs leaveType="earned" />;
//       case "Rules": return <div className="bg-white"><Rules /></div>;
//       case "Balance": return <LeaveBalance />;
//       case "Settings": return <Settings />;
//       default: return <LeaveLogs leaveType="earned" />;
//     }
//   };

//   return (
//     <div id="main" className="lg:text-[24px] text-sm w-auto h-auto">
//       <div className="block sm:hidden mb-4">
//         <select
//           value={activeTab}
//           onChange={(e) => setActiveTab(e.target.value)}
//           className="w-full h-12 border border-gray-300 rounded-lg px-4"
//         >
//           <option value="Logs">Logs</option>
//           <option value="Rules">Rules</option>
//           <option value="Balance">Balance</option>
//           <option value="Settings">Settings</option>
//         </select>
//       </div>

//       <div className="hidden sm:flex text-lg h-16 justify-between items-center border-b mb-4">
//         {["Logs", "Rules", "Balance", "Settings"].map((tab) => (
//           <div
//             key={tab}
//             className={`w-48 justify-center items-center flex h-16 cursor-pointer ${
//               activeTab === tab ? "text-[#0098f1]" : "text-black"
//             }`}
//             onClick={() => setActiveTab(tab)}
//           >
//             <span className={`${activeTab === tab ? "border-b-2 border-[#0098f1] pb-1" : "border-none"}`}>
//               {tab}
//             </span>
//           </div>
//         ))}
//       </div>

//       <div>{renderComponent()}</div>
//     </div>
//   );
// }

// export default EarnedLeaveNavigation;




import React, { useState } from "react";
import LeaveLogs from "../LeaveLogs";
import LeaveBalance from "../LeaveBalance";
import Rules from "./Rules";
import Settings from "./Settings";

function EarnedLeaveNavigation() {
  const [activeTab, setActiveTab] = useState("Logs");

  const renderComponent = () => {
    switch (activeTab) {
      case "Logs":     return <LeaveLogs leaveType="earned" />;
      case "Rules":    return <div className="bg-white"><Rules /></div>;
      case "Balance":  return <LeaveBalance />;
      case "Settings": return <Settings />;
      default:         return <LeaveLogs leaveType="earned" />;
    }
  };

  return (
    <div id="main" className="lg:text-[24px] text-sm w-auto h-auto">
      <div className="block sm:hidden mb-4">
        <select value={activeTab} onChange={(e) => setActiveTab(e.target.value)}
          className="w-full h-12 border border-gray-300 rounded-lg px-4">
          <option value="Logs">Logs</option>
          <option value="Rules">Rules</option>
          <option value="Balance">Balance</option>
          <option value="Settings">Settings</option>
        </select>
      </div>

      <div className="hidden sm:flex text-lg h-16 justify-between items-center border-b mb-4">
        {["Logs", "Rules", "Balance", "Settings"].map((tab) => (
          <div key={tab}
            className={`w-48 justify-center items-center flex h-16 cursor-pointer ${
              activeTab === tab ? "text-[#0098f1]" : "text-black"
            }`}
            onClick={() => setActiveTab(tab)}>
            <span className={`${activeTab === tab ? "border-b-2 border-[#0098f1] pb-1" : "border-none"}`}>
              {tab}
            </span>
          </div>
        ))}
      </div>

      <div>{renderComponent()}</div>
    </div>
  );
}

export default EarnedLeaveNavigation;