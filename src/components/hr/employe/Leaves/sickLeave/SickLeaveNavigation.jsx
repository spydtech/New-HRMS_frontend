import React, { useState } from "react";

import Logs from "./Logs";
import Rules from "./Rules";
import Balance from "./Balance";
import Analytics from "./Analytics";
import Settings from "./Settings";

function SickLeaveNavigation() {
  const [activeTab, setActiveTab] = useState("Logs");

  const renderComponent = () => {
    switch (activeTab) {
      case "Logs":
        return <Logs />;
      case "Rules":
        return (
          <div className="bg-white">
            <Rules />
          </div>
        );
      case "Balance":
        return <Balance />;
      case "Analytics":
        return <Analytics />;
      case "Settings":
        return <Settings />;
      default:
        return <Logs />;
    }
  };

  return (
    <>
      <div id="main" className="text-[24px]   w-auto h-auto">
        <div className="   text-lg  h-16 flex justify-between  items-center">
          <div
            className={`w-48  justify-center items-center flex h-16 cursor-pointer ${
              activeTab === "Logs" ? "text-[#0098f1]  " : "text-black"
            }`}
            onClick={() => setActiveTab("Logs")}
          >
            <span
              className={` ${
                activeTab === "Logs"
                  ? "border-b-2 border-[#0098f1]  "
                  : "border-none"
              }`}
            >
              Logs
            </span>
          </div>
          <div
            className={`w-48 justify-center items-center flex h-16 cursor-pointer ${
              activeTab === "Rules" ? "text-[#0098f1]  " : "text-black"
            }`}
            onClick={() => setActiveTab("Rules")}
          >
            <span
              className={` ${
                activeTab === "Rules"
                  ? "border-b-2 border-[#0098f1]  "
                  : "border-none"
              }`}
            >
              Rules
            </span>
          </div>

          <div
            className={`w-48  justify-center items-center flex h-16 cursor-pointer ${
              activeTab === "Balance" ? "text-[#0098f1]  " : "text-black"
            }`}
            onClick={() => setActiveTab("Balance")}
          >
            <span
              className={` ${
                activeTab === "Balance"
                  ? "border-b-2 border-[#0098f1]  "
                  : "border-none"
              }`}
            >
              Balance
            </span>
          </div>
          <div
            className={`w-48 justify-center items-center flex h-16 cursor-pointer ${
              activeTab === "Analytics" ? "text-[#0098f1]  " : "text-black"
            }`}
            onClick={() => setActiveTab("Analytics")}
          >
            <span
              className={` ${
                activeTab === "Analytics"
                  ? "border-b-2 border-[#0098f1]  "
                  : "border-none"
              }`}
            >
              Analytics
            </span>
          </div>
          <div
            className={`w-48  justify-center items-center flex h-16 cursor-pointer ${
              activeTab === "Settings" ? "text-[#0098f1]  " : "text-black"
            }`}
            onClick={() => setActiveTab("Settings")}
          >
            <span
              className={` ${
                activeTab === "Settings"
                  ? "border-b-2 border-[#0098f1]  "
                  : "border-none"
              }`}
            >
              Settings
            </span>
          </div>
        </div>

        <div className="">{renderComponent()}</div>
      </div>
    </>
  );
}

export default SickLeaveNavigation;
