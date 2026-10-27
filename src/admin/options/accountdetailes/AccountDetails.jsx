import React, { useState } from "react";
import AccountOverview from "./AccountOverview";
import BillingHistory from "./BillingHistory";
import OtherServices from "./OtherServices";
import SubscriptionHistory from "./SubscriptionHistory";
import ManageAddons from "./ManageAddons";

const AccountDetails = () => {
  const [openTab, setOpenTab] = useState(1);

  const activeClasses = "decoration-2 text-white";
  const inactiveClasses = "";

  return (
    <div className="w-auto min-h-screen mx-auto  p-4 mt-4 ">
      <div className="  flex flex-col md:flex-row justify-between">
        <div>
          <span className=" text-[#E65F2B] text-sm lg:text-lg font-medium">
            Admin / Account Details
          </span>
        </div>
      </div>
      <div className="px-2 my-5">
        <ul className="flex bg-white rounded-md">
          <li
            onClick={() => setOpenTab(1)}
            className={`flex-1 flex justify-center items-center h-12 ${
              openTab === 1
                ? "bg-gradient-to-r from-[#E65F2B] to-[#FFC252] rounded-l-md"
                : ""
            } ${
              openTab === 1 ? "-mb-px" : "mr-1"
            } transition-colors duration-300`}
          >
            <a
              href="#"
              className={`font-semibold ${
                openTab === 1 ? activeClasses : inactiveClasses
              } text-black font-semibold`}
            >
              Account Overview
            </a>
          </li>
          <li
            onClick={() => setOpenTab(2)}
            className={`flex-1 flex justify-center items-center h-12 ${
              openTab === 2
                ? "bg-gradient-to-r from-[#E65F2B] to-[#FFC252]"
                : ""
            } ${
              openTab === 2 ? "-mb-px" : "mr-1"
            } transition-colors duration-300`}
          >
            <a
              href="#"
              className={`font-semibold ${
                openTab === 2 ? activeClasses : inactiveClasses
              } text-black font-semibold`}
            >
              Billing History
            </a>
          </li>
          <li
            onClick={() => setOpenTab(3)}
            className={`flex-1 flex justify-center items-center h-12 ${
              openTab === 3
                ? "bg-gradient-to-r from-[#E65F2B] to-[#FFC252]"
                : ""
            } ${
              openTab === 3 ? "-mb-px" : "mr-1"
            } transition-colors duration-300`}
          >
            <a
              href="#"
              className={`font-semibold ${
                openTab === 3 ? activeClasses : inactiveClasses
              } text-black font-semibold`}
            >
              Subscription History
            </a>
          </li>
          <li
            onClick={() => setOpenTab(4)}
            className={`flex-1 flex justify-center items-center h-12 ${
              openTab === 4
                ? "bg-gradient-to-r from-[#E65F2B] to-[#FFC252]"
                : ""
            } ${
              openTab === 4 ? "-mb-px" : "mr-1"
            } transition-colors duration-300`}
          >
            <a
              href="#"
              className={`font-semibold ${
                openTab === 4 ? activeClasses : inactiveClasses
              } text-black font-semibold`}
            >
              Other Services
            </a>
          </li>
          <li
            onClick={() => setOpenTab(5)}
            className={`flex-1 flex justify-center items-center h-12 ${
              openTab === 5
                ? "bg-gradient-to-r from-[#E65F2B] to-[#FFC252] rounded-r-md"
                : ""
            } ${
              openTab === 5 ? "-mb-px" : "mr-1"
            } transition-colors duration-300`}
          >
            <a
              href="#"
              className={`font-semibold ${
                openTab === 5 ? activeClasses : inactiveClasses
              } text-black font-semibold`}
            >
              Manage Addons
            </a>
          </li>
        </ul>
        <div className="w-full">
          <div style={{ display: openTab === 1 ? "block" : "none" }}>
            <AccountOverview />
          </div>
          <div style={{ display: openTab === 2 ? "block" : "none" }}>
            <BillingHistory />
          </div>
          <div style={{ display: openTab === 3 ? "block" : "none" }}>
            <SubscriptionHistory />
          </div>
          <div style={{ display: openTab === 4 ? "block" : "none" }}>
            <OtherServices />
          </div>
          <div style={{ display: openTab === 5 ? "block" : "none" }}>
            <ManageAddons />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountDetails;
