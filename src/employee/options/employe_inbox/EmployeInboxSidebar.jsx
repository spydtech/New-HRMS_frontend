import React, { useState } from "react";
import { BsPlusCircleFill } from "react-icons/bs";
import { RxHamburgerMenu } from "react-icons/rx";

const EmployeInboxSidebar = ({ onItemClick }) => {
  const [selectedItem, setSelectedItem] = useState("Inbox");
  const [showSidebar, setShowSidebar] = useState(false);

  const handleItemClick = (item) => {
    setSelectedItem(item);
    onItemClick(item);
    setShowSidebar(false)
  };

  return (
    <div className="relative">
      <button
        type="button"
        className="md:hidden"
        onClick={() => setShowSidebar(!showSidebar)}
      >
        <RxHamburgerMenu />
      </button>
      {showSidebar && (
        <div className="absolute w-40 bg-[#FCEFE9] rounded-l-xl border border-[#E65F2B]">
          <button
            onClick={() => handleItemClick("Compose")}
            className="my-5 mx-3 rounded-md w-[130px] bg-[#E65F2B] border hover:bg-white hover:text-[#E65F2B] border-[#E65F2B] text-white py-2 "
          >
            Compose
          </button>
          <div className="">
            <ul>
              <li
                onClick={() => handleItemClick("Inbox")}
                className={`cursor-pointer flex justify-between items-center text-[#E65F2B] border-b py-2 px-5 ${
                  selectedItem === "Inbox" && "bg-[#E65F2B] text-white"
                }`}
              >
                Inbox
                <span
                  className={`bg-white rounded-md px-2 border border-[#E65F2B] ${
                    selectedItem === "Inbox" && "text-[#E65F2B] bg-white"
                  }`}
                >
                  6
                </span>
              </li>
              <li
                onClick={() => handleItemClick("Sent")}
                className={` cursor-pointer py-2 px-5 text-[#E65F2B] border-b ${
                  selectedItem === "Sent" && "bg-[#E65F2B] text-white"
                }`}
              >
                Sent
              </li>
              <li
                onClick={() => handleItemClick("Draft")}
                className={`cursor-pointer flex justify-between items-center text-[#E65F2B] border-b py-2 px-5 ${
                  selectedItem === "Draft" && "bg-[#E65F2B] text-white"
                }`}
              >
                Draft
                <span
                  className={`bg-white rounded-md px-2 border border-[#E65F2B] ${
                    selectedItem === "Draft" && "text-[#E65F2B] bg-white"
                  }`}
                >
                  6
                </span>
              </li>
              <li
                onClick={() => handleItemClick("Outbox")}
                className={` cursor-pointer py-2 px-5 text-[#E65F2B] border-b ${
                  selectedItem === "Outbox" && "bg-[#E65F2B] text-white"
                }`}
              >
                Outbox
              </li>
              <li
                onClick={() => handleItemClick("Starred")}
                className={`cursor-pointer flex justify-between items-center text-[#E65F2B] border-b py-2 px-5 ${
                  selectedItem === "Starred" && "bg-[#E65F2B] text-white"
                }`}
              >
                Starred
                <span
                  className={`bg-white rounded-md px-2 border  ${
                    selectedItem === "Starred"
                      ? "text-[#E65F2B] border-[#E65F2B]"
                      : "text-[#FF9900] border-[#FF9900]"
                  }`}
                >
                  6
                </span>
              </li>
              <li
                onClick={() => handleItemClick("Trash")}
                className={` cursor-pointer flex justify-between items-center text-[#E65F2B] border-b py-2 px-5 ${
                  selectedItem === "Trash" && "bg-[#E65F2B] text-white"
                }`}
              >
                Trash
                <span
                  className={`bg-white rounded-md px-2 border  ${
                    selectedItem === "Trash"
                      ? "text-[#E65F2B] border-[#E65F2B] "
                      : "text-[#F20B0B] border-[#F20B0B]"
                  }`}
                >
                  6
                </span>
              </li>
            </ul>
          </div>
          <div className="py-2 pb-24">
            <div className="my-4 flex justify-between items-center px-4">
              <h2 className="text-[#E65F2B] ">Labels</h2>
              <BsPlusCircleFill className="text-2xl text-[#E65F2B]" />
            </div>
            <ul className="mt-2 ">
              <li className="py-2 px-8 border-b">Web Design</li>
              <li className="py-2 px-8 border-b">Recharge</li>
              <li className="py-2 px-8 border-b">Paypal</li>
              <li className="py-2 px-8 border-b">Family</li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default EmployeInboxSidebar;
