import React, { useEffect, useState, useRef } from "react";
import { IoSearchSharp } from "react-icons/io5";
import { LuCamera } from "react-icons/lu";
import { BiVideo } from "react-icons/bi";
import { FiSettings } from "react-icons/fi";
import { IoMdHelpCircleOutline } from "react-icons/io";
import { RiAddCircleLine } from "react-icons/ri";

const chatPersons = [
  {
    id: 1,
    name: "Alice",
    photo: "https://ui-avatars.com/api/?name=Alice&background=2A546D&color=fff",
    online: true,
  },
  { 
    id: 2, 
    name: "Bob", 
    photo: "https://ui-avatars.com/api/?name=Bob&background=2A546D&color=fff", 
    online: false 
  },
  {
    id: 3,
    name: "Charlie",
    photo: "https://ui-avatars.com/api/?name=Charlie&background=2A546D&color=fff",
    online: true,
  },
  {
    id: 4,
    name: "David",
    photo: "https://ui-avatars.com/api/?name=David&background=2A546D&color=fff",
    online: false,
  },
  { 
    id: 5, 
    name: "Eve", 
    photo: "https://ui-avatars.com/api/?name=Eve&background=2A546D&color=fff", 
    online: true 
  },
];

const Chat = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredChatPersons, setFilteredChatPersons] = useState(chatPersons);
  const [selectedPerson, setSelectedPerson] = useState(chatPersons[0]);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
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
    <div className="mx-8 min-h-screen text-lg font-normal">
      <h2 className="text-xl font-bold mb-2">Employee</h2>
      <h3 className="text-lg font-semibold mb-8">Dashboard/Chat</h3>
      
      <div className="flex w-full gap-1 border rounded-lg overflow-hidden shadow-sm">
        {/* Sidebar */}
        <div className="flex border-r-2 flex-col bg-white overflow-y-auto h-[500px] w-[300px] p-3">
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
              <button
                key={person.id} // 👈 Moved key to the button wrapper
                onClick={() => handlePersonClick(person)}
                className="w-full text-left"
              >
                <div className="cursor-pointer flex items-center py-2 border-b hover:bg-gray-50 transition">
                  <img
                    src={person.photo}
                    alt={person.name}
                    className="w-10 h-10 rounded-full mr-3"
                  />
                  <div className="flex flex-col items-start">
                    <span className="font-medium text-[#2A546D]">{person.name}</span>
                    <span className="flex justify-start items-center gap-1 text-sm">
                      <span
                        className={`ml-1 w-2 h-2 rounded-full ${
                          person.online ? "bg-[#1D7616]" : "bg-[#FF9900]"
                        }`}
                      ></span>
                      <span className="text-gray-500">{person.online ? "online" : "offline"}</span>
                    </span>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Main Chat Area */}
        <div className="flex flex-col w-full gap-1">
          <div className="bg-white flex justify-between items-center h-[60px] border-b-2">
            <div className="flex items-center p-2 py-1">
              <img
                src={selectedPerson.photo}
                alt={selectedPerson.name}
                className="w-10 h-10 rounded-full mr-3"
              />
              <div className="flex flex-col items-start">
                <span className="font-semibold text-[#2A546D]">{selectedPerson.name}</span>
                <span className="flex justify-start items-center gap-1 text-sm">
                  <span
                    className={`ml-1 w-2 h-2 rounded-full ${
                      selectedPerson.online ? "bg-[#1D7616]" : "bg-[#FF9900]"
                    }`}
                  ></span>
                  <span className="text-gray-500">{selectedPerson.online ? "online" : "offline"}</span>
                </span>
              </div>
            </div>
            <div className="flex flex-row gap-x-3 w-[175px] mr-6">
              <button><LuCamera className="bg-[#E65F2B] h-[32px] w-[35px] p-[4px] rounded text-white" /></button>
              <button><BiVideo className="bg-[#E65F2B] h-[32px] w-[35px] p-[4px] rounded text-white" /></button>
              <button><FiSettings className="bg-[#E65F2B] h-[32px] w-[35px] p-[6px] rounded text-white" /></button>
              <button><IoMdHelpCircleOutline className="bg-[#E65F2B] h-[32px] p-[4px] w-[35px] rounded text-white" /></button>
            </div>
          </div>

          <div>
            <div className="bg-white p-3 flex-grow">
              <div className="h-[370px] overflow-y-auto mb-3 p-2">
                {messages.map((message, index) => (
                  <div
                    key={index}
                    className={`flex gap-x-3 p-2 my-1 ${
                      message.sender === "me" ? "text-left" : "text-right"
                    }`}
                  >
                    <img
                      src={selectedPerson.photo}
                      alt=""
                      className="w-[45px] h-[45px] rounded-full"
                    />
                    {message.file ? (
                      message.file.type.startsWith("image/") ? (
                        <img
                          src={URL.createObjectURL(message.file)}
                          alt="Uploaded"
                          className="max-w-xs rounded-lg border border-[#E65F2B] shadow-md cursor-pointer"
                          onClick={() => window.open(URL.createObjectURL(message.file))}
                        />
                      ) : (
                        <div className="flex items-center gap-2 p-2 border border-[#E65F2B] rounded-lg shadow-md bg-gray-50 cursor-pointer">
                          <a
                            href={URL.createObjectURL(message.file)}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-black hover:underline"
                          >
                            <div className="flex-grow">
                              <span className="font-medium">{message.file.name}</span>
                            </div>
                          </a>
                        </div>
                      )
                    ) : (
                      <div
                        className={`inline-block px-4 py-2 rounded-lg ${
                          message.sender === "me"
                            ? "border border-[#E65F2B] text-black"
                            : "border border-[#E65F2B] text-black"
                        }`}
                      >
                        {message.text}
                      </div>
                    )}
                  </div>
                ))}
              </div>

              <div className="relative w-full">
                <input
                  type="text"
                  className="w-full border-2 border-[#E65F2B] p-2 rounded outline-none"
                  placeholder="Type a message..."
                  onChange={(e) => setNewMessage(e.target.value)}
                  onKeyUp={handleSendMessage}
                  value={newMessage}
                />
                <button
                  className="absolute right-2 text-3xl top-1/2 transform -translate-y-1/2 p-2 text-[#E65F2B] hover:scale-110 transition"
                  onClick={handleAddFile}
                >
                  <RiAddCircleLine />
                </button>
                <input
                  type="file"
                  ref={fileInputRef}
                  className="hidden"
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