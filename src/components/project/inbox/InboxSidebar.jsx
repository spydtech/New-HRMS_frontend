import React, { useState } from "react";
import { BsPlusCircleFill } from "react-icons/bs";

const InboxSidebar = ({ onItemClick }) => {
  const [selectedItem, setSelectedItem] = useState("Inbox");

  const handleItemClick = (item) => {
    setSelectedItem(item);
    onItemClick(item);
  };

  return (
    <div className="w-40 mb-10 rounded-l-xl">
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
            className={`cursor-pointer flex justify-between items-center text-[#0098F1] border-b py-2 px-5 ${
              selectedItem === "Inbox" && "bg-[#0098F1] text-white"
            }`}
          >
            Inbox
            <span
              className={`bg-white rounded-md px-2 border border-[#0098F1] ${
                selectedItem === "Inbox" && "text-[#0098F1] bg-white"
              }`}
            >
              6
            </span>
          </li>
          <li
            onClick={() => handleItemClick("Sent")}
            className={` cursor-pointer py-2 px-5 text-[#0098F1] border-b ${
              selectedItem === "Sent" && "bg-[#0098F1] text-white"
            }`}
          >
            Sent
          </li>
          <li
            onClick={() => handleItemClick("Draft")}
            className={`cursor-pointer flex justify-between items-center text-[#0098F1] border-b py-2 px-5 ${
              selectedItem === "Draft" && "bg-[#0098F1] text-white"
            }`}
          >
            Draft
            <span
              className={`bg-white rounded-md px-2 border border-[#0098F1] ${
                selectedItem === "Draft" && "text-[#0098F1] bg-white"
              }`}
            >
              6
            </span>
          </li>
          <li
            onClick={() => handleItemClick("Outbox")}
            className={` cursor-pointer py-2 px-5 text-[#0098F1] border-b ${
              selectedItem === "Outbox" && "bg-[#0098F1] text-white"
            }`}
          >
            Outbox
          </li>
          <li
            onClick={() => handleItemClick("Starred")}
            className={`cursor-pointer flex justify-between items-center text-[#0098F1] border-b py-2 px-5 ${
              selectedItem === "Starred" && "bg-[#0098F1] text-white"
            }`}
          >
            Starred
            <span
              className={`bg-white rounded-md px-2 border  ${
                selectedItem === "Starred"
                  ? "text-[#0098F1] border-[#0098F1]"
                  : "text-[#FF9900] border-[#FF9900]"
              }`}
            >
              6
            </span>
          </li>
          <li
            onClick={() => handleItemClick("Trash")}
            className={` cursor-pointer flex justify-between items-center text-[#0098F1] border-b py-2 px-5 ${
              selectedItem === "Trash" && "bg-[#0098F1] text-white"
            }`}
          >
            Trash
            <span
              className={`bg-white rounded-md px-2 border  ${
                selectedItem === "Trash"
                  ? "text-[#0098F1] border-[#0098F1] "
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
          <BsPlusCircleFill className="text-2xl text-[#0098F1]" />
        </div>
        <ul className="mt-2 ">
          <li className="py-2 px-8 border-b">Web Design</li>
          <li className="py-2 px-8 border-b">Recharge</li>
          <li className="py-2 px-8 border-b">Paypal</li>
          <li className="py-2 px-8 border-b">Family</li>
        </ul>
      </div>
    </div>
  );
};

export default InboxSidebar;
