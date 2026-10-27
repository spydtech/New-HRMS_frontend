import React from "react";
import { HiMiniArrowUturnLeft } from "react-icons/hi2";
import { HiMiniArrowUturnRight } from "react-icons/hi2";
import { PiArrowBendDoubleUpLeftBold } from "react-icons/pi";

const MessageDetailsPage = ({ message }) => {
  // if (!message) {
  //   return <div>Select a message to view details</div>;
  // }

  const upperCaseFirstLetter = (string) => {
    if (!string) return "";
    return string.charAt(0).toUpperCase();
  };


  return (
    <div className="rounded-r-xl w-[850px] bg-[#E6F5FE] p-5">
      <h1 className="text-2xl mx-12">{message.subject}</h1>
      <div className="flex justify-between my-5 mr-3">
        <div className="flex gap-3">
          <p className="bg-pink-400 h-10 w-10 text-center text-2xl rounded-[50%]">
            {upperCaseFirstLetter(message.from)}
          </p>
          <div>
            <div className="flex gap-1 items-center">
              <p className="font-bold">{message.from}</p>
              <p className="text-xs text-gray-600">&lt;{message.mailId}&gt;</p>
            </div>
            <p className="text-gray-400 text-sm">to {message.to}</p>
          </div>
        </div>
        <p className=" text-gray-600">{message.time}</p>
      </div>
      <p className="mt-3 mx-12">{message.message}</p>
      <div className="flex gap-3 mx-12 my-10">
        <button className="flex items-center gap-2 border border-gray-300 px-6 py-1 rounded-3xl">
          <HiMiniArrowUturnLeft className="text-gray-600" />{" "}
          <p className="text-gray-600">Reply</p>
        </button>
        <button className="flex items-center gap-2 border border-gray-300 px-6 py-1 rounded-3xl">
          <PiArrowBendDoubleUpLeftBold className="text-gray-600" />{" "}
          <p className="text-gray-600">Reply all</p>
        </button>
        <button className="flex items-center gap-2 border border-gray-300 px-6 py-1 rounded-3xl">
          <HiMiniArrowUturnRight className="text-gray-600" />{" "}
          <p className="text-gray-600">Forward</p>
        </button>
      </div>
    </div>
  );
};

export default MessageDetailsPage;
