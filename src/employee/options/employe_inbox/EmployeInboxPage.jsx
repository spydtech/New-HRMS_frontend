import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { PiLessThan } from "react-icons/pi";
import { PiGreaterThan } from "react-icons/pi";
import { FaRegStar } from "react-icons/fa";
import unChecked from "../../../assets/project/inbox/uncheckbox.png";
import Checked from "../../../assets/project/inbox/checkbox.png";
import filledStar from "../../../assets/project/inbox/filledstar.png";
import unfilledstar from "../../../assets/project/inbox/unfilledstar.png";
import { MdDeleteForever } from "react-icons/md";

const initialData = [
  {
    checkbox: false,
    star: true,
    from : "John Smith",
    mailId : "johnsmith2024@gmail.com",
    to: "Sathish, Shyam, Mounika",
    subject: "Venu Kumar",
    message:
      "[Support] There are many variations of passages of Lorem ipsum available, but the majoity Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti ullam rem assumenda eveniet eligendi, voluptatum nesciunt voluptate ipsum sit quos, possimus excepturi nemo nisi maxime laudantium facere quis at obcaecati!",
    time: "July 19",
  },
  {
    checkbox: false,
    star: false,
    from : "Michael Jordan",
    mailId : "michealjordan2024@gmail.com",
    to: "Sathish, Shyam, Mounika",
    subject: "Venu Kumar",
    message:
      "[Support] There are many variations of passages of Lorem ipsum available, but the majoity",
    time: "July 19",
  },
  {
    checkbox: false,
    star: false,
    from : "Michael Jordan",
    mailId : "michealjordan2024@gmail.com",
    to: "Sathish, Shyam, Mounika",
    subject: "Venu Kumar",
    message:
      "[Support] There are many variations of passages of Lorem ipsum available, but the majoity",
    time: "July 19",
  },
  {
    checkbox: false,
    star: true,
    from : "Michael Jordan",
    mailId : "michealjordan2024@gmail.com",
    to: "Sathish, Shyam, Mounika",
    subject: "Venu Kumar",
    message:
      "[Support] There are many variations of passages of Lorem ipsum available, but the majoity",
    time: "July 19",
  },
  {
    checkbox: false,
    star: false,
    from : "Michael Jordan",
    mailId : "michealjordan2024@gmail.com",
    to: "Sathish, Shyam, Mounika",
    subject: "Venu Kumar",
    message:
      "[Support] There are many variations of passages of Lorem ipsum available, but the majoity",
    time: "July 19",
  },
  {
    checkbox: false,
    star: false,
    from : "Michael Jordan",
    mailId : "michealjordan2024@gmail.com",
    to: "Sathish, Shyam, Mounika",
    subject: "Venu Kumar",
    message:
      "[Support] There are many variations of passages of Lorem ipsum available, but the majoity",
    time: "July 19",
  },
  {
    checkbox: false,
    star: false,
    from : "Michael Jordan",
    mailId : "michealjordan2024@gmail.com",
    to: "Sathish, Shyam, Mounika",
    subject: "Venu Kumar",
    message:
      "[Support] There are many variations of passages of Lorem ipsum available, but the majoity",
    time: "July 19",
  },
  {
    checkbox: false,
    star: false,
    from : "Michael Jordan",
    mailId : "michealjordan2024@gmail.com",
    to: "Sathish, Shyam, Mounika",
    subject: "Venu Kumar",
    message:
      "[Support] There are many variations of passages of Lorem ipsum available, but the majoity",
    time: "July 19",
  },
];

const EmployeInboxPage = ({ onSelectMessage }) => {
  const [inboxData, setInboxData] = useState(initialData);
  const [mainCheckbox, setMainCheckbox] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 6;
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = inboxData.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(inboxData.length / itemsPerPage);

  const handleNextPage = () => {
    if (currentPage < totalPages) return setCurrentPage(currentPage + 1);
  };
  const handlePreviousPage = () => {
    if (currentPage > 1) return setCurrentPage(currentPage - 1);
  };

  const handleCheckboxClick = (index) => {
    const updatedData = inboxData.map((item, i) =>
      i === index ? { ...item, checkbox: !item.checkbox } : item
    );
    setInboxData(updatedData);
  };

  const handleMainCheckboxClick = () => {
    const newMainCheckbox = !mainCheckbox; //true
    const updatedData = inboxData.map((item) => ({
      ...item,
      checkbox: newMainCheckbox,
    }));
    setInboxData(updatedData);
    setMainCheckbox(newMainCheckbox);
  };

  const handleStarClick = (index) => {
    const updatedStar = inboxData.map((item, i) =>
      i === index ? { ...item, star: !item.star } : item
    );
    setInboxData(updatedStar);
  };

  const handleDeleteClick = (index) => {
    const updatedData = inboxData.filter((item, i) => i !== index);
    setInboxData(updatedData);
  };

  const handleRefresh = () =>{
    window.location.reload();  // refreshes the entire page
  }

  return (
    <div className="rounded-r-xl min-w-[800px] border border-[#E65F2B]">
      <div className="flex justify-between py-5 mx-5">
        <h1 className="text-xl font-semibold">Inbox</h1>
        <div className="flex items-center gap-1 border px-5 rounded-lg border-[#E65F2B] bg-white">
          <CiSearch className="text-2xl text-[#E65F2B]" />
          <input
            type="search"
            placeholder="Search for anything..."
            className="text-xs py-2 outline-none w-64 text-[#E65F2B] placeholder:text-[#E65F2B]"
          />
        </div>
      </div>
      <div className="flex items-center justify-between mx-5">
        <div className="flex gap-7 items-center">
          <button
            onClick={handleMainCheckboxClick}
            className="text-4xl text-[#E65F2B]"
          >
            <img src={mainCheckbox ? Checked : unChecked} alt="Main Checkbox" />
          </button>
          <div className="border border-[#E65F2B] rounded-lg">
            <button onClick={handleRefresh} className="border-r border-[#E65F2B] px-3 py-1">
              Refresh
            </button>
            <button className="border-r border-[#E65F2B] px-3 py-1">
              Archive
            </button>
            <button className="px-3">Trash</button>
          </div>
          <button className="border border-r border-[#E65F2B] rounded-lg py-1 px-3">
            Tags
          </button>
          <button className="border border-r border-[#E65F2B] rounded-lg py-1 px-3">
            More
          </button>
        </div>
        <div className="flex gap-1">
          <button
            onClick={handlePreviousPage}
            className="border rounded-l-lg bg-[#E65F2B] text-white w-8 h-8 px-1"
          >
            <PiLessThan className="text-2xl" />
          </button>
          <button
            onClick={handleNextPage}
            className="border rounded-r-lg bg-[#E65F2B] text-white w-8 h-8 px-1"
          >
            <PiGreaterThan className="text-2xl" />
          </button>
        </div>
      </div>
      <ul className="m-5">
        {currentItems.map((data, index) => (
          <li
            key={index}
            className="h-20 cursor-pointer flex justify-between gap-x-3 border-t border-[#E65F2B] py-3 group"
          >
            <div className="flex gap-5">
              <button onClick={() => handleCheckboxClick(index)} className="">
                <img src={data.checkbox ? Checked : unChecked} alt="checkbox" />
              </button>
              <button onClick={() => handleStarClick(index)} className="">
                <img src={data.star ? filledStar : unfilledstar} alt="star" />
              </button>
              <div onClick={() => onSelectMessage(data)}>
                <h1>{data.subject}</h1>
                <p>{data.message.slice(0, 85)}</p>
              </div>
            </div>
            <div>
              <p className="group-hover:hidden">{data.time}</p>
              <button
                className="hidden group-hover:block bg-red-500 p-2 text-xl text-white rounded-lg"
                onClick={() => handleDeleteClick(index)}
              >
                <MdDeleteForever />
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EmployeInboxPage;
