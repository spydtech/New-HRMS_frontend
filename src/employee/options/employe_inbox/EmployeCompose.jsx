import React, { useState } from "react";
import { GoBold } from "react-icons/go";
import { RiItalic } from "react-icons/ri";
import { FiUnderline } from "react-icons/fi";
import { AiOutlineStrikethrough } from "react-icons/ai";
import { RiDoubleQuotesR } from "react-icons/ri";
import { LuCode } from "react-icons/lu";
import { PiCaretUpDownFill } from "react-icons/pi";
import { PiTextAUnderlineBold } from "react-icons/pi";
import { MdFontDownload } from "react-icons/md";
import { IoMenuOutline } from "react-icons/io5";
import { MdOutlineFormatAlignLeft } from "react-icons/md";
import { MdOutlineFormatAlignRight } from "react-icons/md";
import { MdOutlineFormatListNumbered } from "react-icons/md";
import { MdOutlineFormatListBulleted } from "react-icons/md";
import { BiLink } from "react-icons/bi";
import { HiOutlinePhotograph } from "react-icons/hi";
import { TbSubscript } from "react-icons/tb";
import { PiTextSuperscriptBold } from "react-icons/pi";

const EmployeCompose = ({ onSendMessage, onSaveDraft }) => {
  const [moveDown, setMoveDown] = useState(false);
  const [to, setTo] = useState("");
  const [ccInput, setCcInput] = useState("");
  const [ccList, setCcList] = useState([]);
  const [subject, setSubject] = useState("");
  const [inputMesg, setInputMesg] = useState("");

  const handleDropdown = () => {
    setMoveDown(!moveDown);
  };

  const resetForm = () => {
    setTo("");
    setCcInput("");
    setCcList([]);
    setSubject("");
    setInputMesg("");
  };

  const handleSendButton = (e) => {
    e.preventDefault();
    if (!to || !ccList.length || !subject || !inputMesg) {
      alert("All fields must be filled!");
    } else {
      const newMessage = {
        to: to,
        cc: ccList.join(", "),
        subject: subject,
        message: inputMesg,
      };
      onSendMessage(newMessage);
      resetForm();
    }
  };

  const handleDraftButton = (e) => {
    e.preventDefault();
    if (to || ccList.length || subject || inputMesg) {
      const draftMessage = {
        to: to,
        cc: ccList.join(", "),
        subject: subject,
        message: inputMesg,
      };
      onSaveDraft(draftMessage);
      resetForm();
    } else {
      alert("At least one field must be filled to save a draft.");
    }
  };

  const handleCcKeyDown = (e) => {
    if (e.key === "Enter" && ccInput.trim()) {
      e.preventDefault();
      setCcList([...ccList, ccInput.trim()]);
      setCcInput("");
    }
  };

  const removeCc = (index) => {
    setCcList(ccList.filter((_, i) => i !== index));
  };

  return (
    <div className="rounded-r-xl min-w-[800px] border border-[#E65F2B]">
      <div className="m-5">
        <h1 className="text-xl font-semibold">Compose</h1>
        <form
          action=""
          className="bg-white p-4 my-3 rounded-lg shadow-sm flex flex-col gap-4"
        >
          <input
            type="text"
            className="bg-gray-100 w-full outline-none p-[6px] px-3 border border-gray-300 text-sm rounded-md"
            placeholder="To"
            onChange={(e) => setTo(e.target.value)}
            value={to}
          />
          <div className="bg-gray-100 w-full outline-none border border-gray-300 text-sm rounded-md">
            <input
              type="text"
              className="bg-transparent w-full outline-none p-[6px] px-3 text-sm"
              placeholder="CC"
              onChange={(e) => setCcInput(e.target.value)}
              onKeyDown={handleCcKeyDown}
              value={ccInput}
            />
            <div className="flex flex-wrap">
              {ccList.map((cc, index) => (
                <div
                  key={index}
                  className="flex items-center gap-1 border rounded-full px-3 m-3 bg-gray-200"
                >
                  <span>{cc}</span>
                  <button
                    type="button"
                    className="text-gray-600 hover:text-red-600 text-lg"
                    onClick={() => removeCc(index)}
                  >
                    &times;
                  </button>
                </div>
              ))}
            </div>
          </div>
          <input
            type="text"
            className="bg-gray-100 w-full outline-none p-[6px] px-3 border border-gray-300 text-sm rounded-md"
            placeholder="Subject"
            onChange={(e) => setSubject(e.target.value)}
            value={subject}
          />
          <hr className="bg-gray-300 border-0 h-px" />
          <div className="bg-gray-100 w-full border border-gray-300">
            <div className="flex items-center gap-5">
              <div className="m-[6px] flex gap-2">
                <button
                  onClick={() => formatText("b")}
                  type="button"
                  className="text-gray-600 hover:text-blue-600"
                >
                  <GoBold />
                </button>
                <button
                  type="button"
                  className="text-gray-600 hover:text-blue-600"
                >
                  <RiItalic />
                </button>
                <button
                  type="button"
                  className="text-gray-600 hover:text-blue-600"
                >
                  <FiUnderline />
                </button>
                <button
                  type="button"
                  className="text-gray-600 hover:text-blue-600"
                >
                  <AiOutlineStrikethrough />
                </button>
              </div>
              <div className="flex gap-2">
                <button
                  type="button"
                  className="text-gray-600 hover:text-blue-600"
                >
                  <RiDoubleQuotesR />
                </button>
                <button
                  type="button"
                  className="text-gray-600 hover:text-blue-600"
                >
                  <LuCode />
                </button>
              </div>
              <div className="">
                <button
                  type="button"
                  className="text-gray-600 hover:text-blue-600 text-xs flex gap-4 items-center"
                >
                  Normal <PiCaretUpDownFill />
                </button>
              </div>
              <div className="flex gap-2">
                <button
                  type="button"
                  className="text-gray-600 hover:text-blue-600 "
                >
                  <PiTextAUnderlineBold />
                </button>
                <button
                  type="button"
                  className="text-gray-600 hover:text-blue-600 "
                >
                  <MdFontDownload />
                </button>
              </div>
              <div className={`${moveDown ? "bg-white border-2" : ""}`}>
                <button
                  type="button"
                  className={`text-gray-600 hover:text-blue-600`}
                  onClick={handleDropdown}
                >
                  <IoMenuOutline />
                </button>
                {moveDown ? (
                  <div className="flex flex-col absolute z-1 bg-white gap-1">
                    <button type="button" className=" hover:text-blue-600 ">
                      <IoMenuOutline />
                    </button>
                    <button type="button" className=" hover:text-blue-600 ">
                      <MdOutlineFormatAlignLeft />
                    </button>
                    <button type="button" className=" hover:text-blue-600 ">
                      <MdOutlineFormatAlignRight />
                    </button>
                  </div>
                ) : (
                  ""
                )}
              </div>
              <div className="flex gap-2">
                <button
                  type="button"
                  className="text-gray-600 hover:text-blue-600 text-xl"
                >
                  <MdOutlineFormatListNumbered />
                </button>
                <button
                  type="button"
                  className="text-gray-600 hover:text-blue-600 text-xl"
                >
                  <MdOutlineFormatListBulleted />
                </button>
              </div>
              <div className="flex gap-2">
                <button
                  type="button"
                  className="text-gray-600 hover:text-blue-600 text-xl"
                >
                  <BiLink />
                </button>
                <button
                  type="button"
                  className="text-gray-600 hover:text-blue-600 text-xl"
                >
                  <HiOutlinePhotograph />
                </button>
              </div>
              <div className="flex gap-2">
                <button
                  type="button"
                  className="text-gray-600 hover:text-blue-600 text-xl"
                >
                  <TbSubscript />
                </button>
                <button
                  type="button"
                  className="text-gray-600 hover:text-blue-600 text-xl"
                >
                  <PiTextSuperscriptBold />
                </button>
              </div>
            </div>
            <hr className="bg-gray-300 border-0 h-px" />
            <div className="">
              <input
                type="text"
                className="bg-gray-100 w-full outline-none p-3 pb-32 text-xs resize-y"
                placeholder="Message"
                onChange={(e) => setInputMesg(e.target.value)}
                value={inputMesg}
              />
            </div>
          </div>
          <div className="flex gap-2">
            <button
              type="submit"
              className="bg-[#E65F2B] text-white px-4 py-2 rounded-md text-sm"
              onClick={handleSendButton}
            >
              Send Message
            </button>
            <button
              type="button"
              className="bg-gray-400 text-white px-4 py-2 rounded-md text-sm"
              onClick={handleDraftButton}
            >
              Draft
            </button>
            <button
              type="button"
              className="border-gray-400 border text-gray-400 px-4 py-2 rounded-md text-sm"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EmployeCompose;
