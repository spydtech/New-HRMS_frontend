import React, { useEffect, useState, useRef } from "react";
import { IoSearchSharp } from "react-icons/io5";
import { LuCamera } from "react-icons/lu";
import { BiVideo } from "react-icons/bi";
import { FiSettings } from "react-icons/fi";
import { IoMdHelpCircleOutline } from "react-icons/io";
import { RiAddCircleLine } from "react-icons/ri";
import { BsThreeDotsVertical } from "react-icons/bs";
import { MdOutlineCancel } from "react-icons/md";

const chatPersons = [
  {
    id: 1,
    name: "Alice",
    photo: "src/assets/hr/profile/man.png",
    online: true,
  },
  { id: 2, name: "Bob", photo: "src/assets/hr/profile/man.png", online: false },
  {
    id: 3,
    name: "Charlie",
    photo: "src/assets/hr/profile/man.png",
    online: true,
  },
  {
    id: 4,
    name: "David",
    photo: "src/assets/hr/profile/man.png",
    online: false,
  },
  { id: 5, name: "Eve", photo: "src/assets/hr/profile/man.png", online: true },
];

const Chat = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredChatPersons, setFilteredChatPersons] = useState(chatPersons);
  const [selectedPerson, setSelectedPerson] = useState(chatPersons[0]);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const [showIcons, setShowIcons] = useState(false); // State to toggle icons visibility
  const fileInputRef = useRef(null);

  useEffect(() => {
    const results = chatPersons.filter((person) =>
      person.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredChatPersons(results);
  }, [searchTerm]);

  const handlePersonClick = (person) => {
    setSelectedPerson(person);
    setMessages([]);
    setNewMessage("");
  };

  const handleSendMessage = (e) => {
    if (e.key === "Enter" && newMessage.trim()) {
      const newMsg = { text: newMessage, sender: "me" };
      setMessages([...messages, newMsg]);
      setNewMessage("");
    }
  };

  const handleAddFile = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const newMsg = { file, sender: "me" };
      setMessages([...messages, newMsg]);
      e.target.value = null;
    }
  };

  return (
    <div className="mt-4 w-auto p-4 h-auto">
      <h2 className="text-[#e65f2b] font-bold text-sm lg:text-lg">Chat</h2>
      <div className="md:flex w-full mt-4 gap-1">
        <div className="flex border-r-2 flex-col bg-white overflow-x-auto h-auto w-auto md:w-[300px] p-3 shadow-md">
          <div className="flex flex-row justify-center items-center">
            <IoSearchSharp className="bg-[#E65F2B] rounded-l text-white w-[47px] h-full p-3" />
            <input
              className="rounded-r w-5/6 h-full p-3 border border-[#E65F2B] bg-opacity-20 focus:outline-none"
              type="text"
              placeholder="search here...."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="mt-4">
            {filteredChatPersons.map((person) => (
              <button key={person.id} onClick={() => handlePersonClick(person)}>
                <div className="cursor-pointer flex items-center py-2 border-b">
                  <img
                    src={person.photo}
                    alt={person.name}
                    className="w-10 h-10 rounded-full mr-3"
                  />
                  <div className="flex flex-col items-center">
                    <span>{person.name}</span>
                    <span className="flex justify-start items-center gap-1">
                      <span
                        className={`ml-1 w-3 h-3 rounded-full ${
                          person.online ? "bg-[#1D7616]" : "bg-[#FF9900]"
                        }`}
                      ></span>
                      <span>{person.online ? "online" : "offline"}</span>
                    </span>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
        <div className="flex flex-col w-auto md:w-full h-auto gap-1 md:mt-0 mt-4 shadow-md">
          <div className="bg-white flex justify-between items-center h-[60px] border-b-2">
            <div className="flex items-center p-2 py-1">
              <img
                src={selectedPerson.photo}
                alt={selectedPerson.name}
                className="w-10 h-10 rounded-full mr-3"
              />
              <div className="flex flex-col items-center">
                <span>{selectedPerson.name}</span>
                <span className="flex justify-start items-center gap-1">
                  <span
                    className={`ml-1 w-3 h-3 rounded-full ${
                      selectedPerson.online ? "bg-[#1D7616]" : "bg-[#FF9900]"
                    }`}
                  ></span>
                  <span>{selectedPerson.online ? "online" : "offline"}</span>
                </span>
              </div>
            </div>
            <div className="flex flex-row gap-x-1.5 md:gap-x-2 mr-1.5 md:w-[165px] md:mr-6 hidden md:flex">
              <button>
                <LuCamera className="bg-orange-500 md:w-[35px] md:h-[32px] h-[24px] w-[26px] p-[4px] rounded text-white" />
              </button>
              <button>
                <BiVideo className="bg-orange-500 md:w-[35px] md:h-[32px] h-[24px] w-[26px] p-[4px] rounded text-white" />
              </button>
              <button>
                <FiSettings className="bg-orange-500 md:w-[35px] md:h-[32px] h-[24px] w-[26px] p-[4px] rounded text-white" />
              </button>
              <button>
                <IoMdHelpCircleOutline className="bg-orange-500 md:w-[35px] md:h-[32px] h-[24px] w-[26px] p-[4px] rounded text-white" />
              </button>
            </div>
            <div className="md:hidden flex items-center">
              <button onClick={() => setShowIcons(!showIcons)}>
                <BsThreeDotsVertical className="mr-2 bg-orange-500 md:w-[35px] md:h-[32px] h-[24px] w-[26px] p-[4px] rounded text-white" />
              </button>
              {showIcons && (
                <button onClick={() => setShowIcons(!showIcons)}>
                  <MdOutlineCancel className="absolute z-50 -mt-[94px] ml-2 md:w-[35px] md:h-[32px] h-[24px] w-[26px] p-[1px] rounded text-orange-500" />
                </button>
              )}
              {showIcons && (
                <div className="absolute bg-white border rounded shadow-md mt-8 right-2">
                  <button className="block w-full text-left p-2">
                    <LuCamera className="bg-orange-500 h-[32px] w-[32px] p-[4px] rounded text-white" />
                  </button>
                  <button className="block w-full text-left p-2">
                    <BiVideo className="bg-orange-500 h-[32px] w-[32px] p-[4px] rounded text-white" />
                  </button>
                  <button className="block w-full text-left p-2">
                    <FiSettings className="bg-orange-500 h-[32px] w-[32px] p-[4px] rounded text-white" />
                  </button>
                  <button className="block w-full text-left p-2">
                    <IoMdHelpCircleOutline className="bg-orange-500 h-[32px] w-[32px] p-[4px] rounded text-white" />
                  </button>
                </div>
              )}
            </div>
          </div>
          <div>
            <div className="bg-white p-3 flex-grow">
              <div className="h-[370px] overflow-y-scroll mb-3">
                {messages.map((message, index) => (
                  <div
                    key={index}
                    className={`flex gap-x-3 p-2 my-1 ${
                      message.sender === "me" ? "text-left" : "text-right"
                    }`}
                  >
                    <img
                      src={selectedPerson.photo}
                      className="w-[45px] h-[45px]"
                    />
                    {message.file ? (
                      <a
                        href={URL.createObjectURL(message.file)}
                        download={message.file.name}
                        className="flex-1 bg-gray-200 rounded px-4 py-2"
                      >
                        {message.file.name}
                      </a>
                    ) : (
                      <span className="flex-1 bg-gray-200 rounded px-4 py-2">
                        {message.text}
                      </span>
                    )}
                  </div>
                ))}
              </div>
              <div className="flex items-center justify-between w-auto">
                <input
                  className="flex-grow md:w-auto w-5/6 p-2 border focus:outline-[#e65f2b] rounded"
                  type="text"
                  placeholder="Type a message..."
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  onKeyDown={handleSendMessage}
                />
                <button
                  className="p-2 ml-2 md:w-auto w-1/6"
                  onClick={handleAddFile}
                >
                  <RiAddCircleLine className="text-[#e65f2b] h-[30px] w-[30px]" />
                </button>
                <input
                  type="file"
                  ref={fileInputRef}
                  style={{ display: "none" }}
                  onChange={handleFileChange}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
