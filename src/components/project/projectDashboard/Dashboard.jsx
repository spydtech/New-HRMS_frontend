import React, { useState } from "react";
import { Line, Doughnut } from "react-chartjs-2";
import "chart.js/auto";
import { AiOutlineInbox } from "react-icons/ai"; // Ant Design Icons
import { BsEye } from "react-icons/bs"; // Bootstrap Icons
import { FaBookmark } from "react-icons/fa"; // Font Awesome
import { MdCall, MdMessage, MdNotifications } from "react-icons/md"; // Material Design Icons
import { RiProjectorFill } from "react-icons/ri"; // Remix Icons
import { IoIosWatch } from "react-icons/io"; // Ionicons

// import tableicone from "../../../assets/project/projectDashboard/tableicone.png";
import tableicone from "../../../assets/project/projectDashboard/tableicone.png";

import profilepic from "../../../assets/project/projectDashboard/profilepic.png";
// Correct way of importing specific icons
import { FaBeer } from "react-icons/fa"; // Font Awesome
import { MdAlarm } from "react-icons/md"; // Material Design
import TeamList from "./TeamList";

const Dashboard = () => {
  const cardsData = [
    { color: "#0098f1", count: 19, label: "Today Works" },
    { color: "#0098f1", count: 15, label: "Today Tasks" },
    { color: "#0098f1", count: 125, label: "Statistics" },
    { color: "#0098f1", count: 318, label: "Analytics" },
  ];

  const handleChange = (index) => {
    const newItems = [...items];
    newItems[index].checked = !newItems[index].checked;
    setItems(newItems);
  };

  const [items, setItems] = useState([
    { text: "New Logo Design", checked: false },
    { text: "New Logo Design", checked: false },
    { text: "New Logo Design", checked: false },
    { text: "New Logo Design", checked: false },
    { text: "New Logo Design", checked: false },
    { text: "New Logo Design", checked: false },
  ]);

  const data = {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        label: "Work Report",
        data: [
          500, 1000, 750, 1500, 1200, 1800, 2200, 1700, 2000, 2300, 2100, 2500,
        ],
        fill: true,
        backgroundColor: "#0098F1",
        borderColor: "#0098F1",
        borderWidth: 2,
        pointRadius: 0,
        tension: 0.1,
      },
    ],
  };

  const dataOfIncome = {
    datasets: [
      {
        data: [25, 25, 25, 25],
        backgroundColor: ["#0098F1", "#0098F1", "#0098F1", "#0098F1"],
        hoverBackgroundColor: ["#0098F1", "#0098F1", "#0098F1", "#0098F1"],
        borderWidth: 0,
      },
    ],
  };

  const optionsOfIncome = {
    cutout: "70%",
    plugins: {
      tooltip: {
        enabled: false,
      },
    },
  };

  const options = {
    responsive: true,
    scales: {
      x: {
        grid: {
          display: false,
        },
        ticks: {
          color: "#000",
        },
      },
      y: {
        beginAtZero: true,
        grid: {
          color: "#ccc",
        },
        ticks: {
          color: "#000",
          stepSize: 500,
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: true,
        text: "Work Report",
        color: "#0098F1",
        font: {
          size: 18,
        },
        padding: {
          top: 10,
          bottom: 30,
        },
      },
    },
  };
  const ProjectListTable = [
    {
      team: [profilepic, profilepic, profilepic, profilepic, profilepic],
      change: (
        <img
          src={tableicone}
          alt="Increase"
          className="w-6 h-6 text-green-500"
        />
      ),
      sales: 11200,
      price: 12400,
      total: 12400,
    },
    {
      team: [profilepic, profilepic, profilepic, profilepic, profilepic],
      change: (
        <img
          src={tableicone}
          alt="Increase"
          className="w-6 h-6 text-green-500"
        />
      ),
      sales: 11200,
      price: 12400,
      total: 12400,
    },
    {
      team: [profilepic, profilepic, profilepic, profilepic, profilepic],
      change: (
        <img
          src={tableicone}
          alt="Increase"
          className="w-6 h-6 text-green-500"
        />
      ),
      sales: 11200,
      price: 12400,
      total: 12400,
    },
    {
      team: [profilepic, profilepic, profilepic, profilepic, profilepic],
      change: (
        <img
          src={tableicone}
          alt="Increase"
          className="w-6 h-6 text-green-500"
        />
      ),
      sales: 11200,
      price: 12400,
      total: 12400,
    },
    {
      team: [profilepic, profilepic, profilepic, profilepic, profilepic],
      change: (
        <img
          src={tableicone}
          alt="Increase"
          className="w-6 h-6 text-green-500"
        />
      ),
      sales: 11200,
      price: 12400,
      total: 12400,
    },
    {
      team: [profilepic, profilepic, profilepic, profilepic, profilepic],
      change: (
        <img
          src={tableicone}
          alt="Increase"
          className="w-6 h-6 text-green-500"
        />
      ),
      sales: 11200,
      price: 12400,
      total: 12400,
    },
    {
      team: [profilepic, profilepic, profilepic, profilepic, profilepic],
      change: (
        <img
          src={tableicone}
          alt="Increase"
          className="w-6 h-6 text-green-500"
        />
      ),
      sales: 11200,
      price: 12400,
      total: 12400,
    },
  ];

  const itemsData = [
    { icon: <AiOutlineInbox />, label: "Inbox", color: "bg-green-600" },
    { icon: <BsEye />, label: "Profile Visits", color: "bg-red-400" },
    { icon: <FaBookmark />, label: "Book Mark", color: "bg-red-600" },
    { icon: <MdCall />, label: "Call", color: "bg-blue-400" },
    { icon: <MdMessage />, label: "Message", color: "bg-purple-500" },
    {
      icon: <MdNotifications />,
      label: "Notifications",
      color: "bg-orange-500",
    },
    {
      icon: <RiProjectorFill />,
      label: "New Projects",
      color: "bg-orange-600",
    },
    { icon: <IoIosWatch />, label: "Watch", color: "bg-red-500" },
  ];

  return (
    <div className="h-full pb-10 px-4">
      {/* Header Cards */}
      {/* <div className="flex flex-wrap justify-around py-2   items-center mt-6 p-4 gap-4">
        {cardsData.map((card, index) => (
          <div
            key={index}
            className={`flex-grow text-white py-14 rounded-lg flex justify-center  items-center shadow-lg relative ${
              card.color.startsWith("#") ? "" : card.color
            }`}
            style={{
              backgroundColor: card.color,
            }}
          >
            <span className="text-3xl  font-bold">{card.count}</span>
            <span className="text-xl">{card.label}</span>
          </div>
        ))}
      </div> */}
      <div className="flex flex-wrap justify-around py-2 items-center mt-6 p-4 gap-4">
        {cardsData.map((card, index) => (
          <div
            key={index}
            className={`flex-grow text-white py-14 rounded-lg flex md:flex-col  justify-center items-center shadow-lg relative ${
              card.color.startsWith("#") ? "" : card.color
            }`}
            style={{
              backgroundColor: card.color,
            }}
          >
            <span className="text-3xl font-bold mb-2">{card.count}</span>{" "}
            {/* Count in one row */}
            <span className="text-xl pl-4">{card.label}</span>{" "}
            {/* Label in another row */}
          </div>
        ))}
      </div>

      {/* Work Report Section */}
      <div className="w-full mt-12  lg:px-8 h-[750px]   flex justify-center">
        <div className="bg-white p-4 rounded-lg shadow-lg w-full  ">
          <h2 className="text-xl font-semibold  text-gray-700 mb-4">
            Work Report
          </h2>
          <Line data={data} options={options} />
        </div>
      </div>

      {/* Other Sections */}
      <div className=" grid  grid-cols-1 lg:grid-cols-3 justify-center mt-5  gap-3 lg:px-8">
        {/* Icon List */}
        <div className="bg-white p-4 rounded-lg shadow-lg   w-auto h-[460px]">
          {itemsData.map((item, index) => (
            <div
              key={index}
              className="flex items-center justify-between border-b border-[#0098F1] py-2"
            >
              <div className="flex items-center space-x-3">
                <div className="text-2xl text-[#0098F1]">{item.icon}</div>
                <span className="text-lg text-[#0098F1]">{item.label}</span>
              </div>
              <span
                className={`px-4 py-1 rounded-[5px] w-[60px] text-white ${item.color}`}
              >
                654
              </span>
            </div>
          ))}
        </div>

        {/* Income Analysis */}
        <div className="bg-white p-8 rounded-lg shadow-lg text-[#0098F1]   w-auto h-[450px]">
          <h2 className="text-2xl  text-center font-bold mb-2">
            Income Analysis
          </h2>
          <p className="text-lg text-center mb-4">8% Higher than last month</p>
          <div className="flex justify-center">
            <Doughnut data={dataOfIncome} options={optionsOfIncome} />
          </div>
        </div>

        {/* To-Do List */}
        <div className="bg-white p-4 rounded-lg shadow-lg h-[460px] flex flex-col items-center justify-center">
          <h2 className="text-xl font-bold text-[#0098F1] mb-4">TO DOList</h2>
          <ul className="space-y-2 py-4">
            {items.map((item, index) => (
              <li key={index} className="flex items-center py-1">
                <input
                  type="checkbox"
                  className="form-checkbox h-5 w-5 text-[#0098F1] border border-[#0098F1] rounded"
                  checked={item.checked}
                  onChange={() => handleChange(index)}
                />
                <span className="ml-2 text-[#0098F1]">{item.text}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="grid md:grid-cols-1  lg:grid-cols-2 lg:gap-x-3 lg:px-8 ">
        {/* <h2 className="text-xl font-bold  text-blue-500">Project List</h2> */}
        <div className="mt-5 lg:w-full overflow-x-scroll  ">
          <table className=" bg-white border lg:w-full  w-auto  border-gray-300">
            <thead>
              <tr className="bg-[#0098F1]">
                <th className="py-3 px-4 text-white border-b text-left">
                  Team
                </th>
                <th className="py-3 px-4  text-white border-b text-left">
                  Change
                </th>
                <th className="py-3 px-4 text-white border-b text-center">
                  Sales
                </th>
                <th className="py-3 px-4  text-white border-b text-center">
                  Price
                </th>
                <th className="py-3 px-4  text-white border-b text-center">
                  Total
                </th>
              </tr>
            </thead>
            <tbody>
              {ProjectListTable.map((item, idx) => (
                <tr
                  key={idx}
                  className="bg-white hover:bg-gray-100 border-b border-[#0098F1]"
                >
                  <td className="py-3 ">
                    <div className="relative flex items-center">
                      {item.team.map((img, imgIdx) => (
                        <img
                          key={imgIdx}
                          src={img}
                          alt={`Profile ${imgIdx + 1}`}
                          className="absolute w-8 h-8 rounded-full border-2 border-maroon-500"
                          style={{
                            left: `${imgIdx * 20}px`,
                            zIndex: imgIdx + 1,
                          }}
                        />
                      ))}
                    </div>
                  </td>
                  <td className="py-3  flex justify-center items-center">
                    {item.change}
                  </td>
                  <td className="py-3 px-4  text-center">{item.sales}</td>
                  <td className="py-3 px-4  text-center">{item.price}</td>
                  <td className="py-3 px-4  text-center">{item.total}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="bg-[#0098F1] mt-3 lg:w-auto w-auto h-[400px] rounded-lg shadow-lg flex flex-col items-center justify-center">
          <h2 className="text-xl font-bold text-white">Sales Income</h2>
          <p className="text-xl text-white">Overall 7,000</p>
          <div className="mt-4 flex items-end">
            <div className="bg-white h-24 w-4 mx-2 rounded-t-lg"></div>
            <div className="bg-white h-32 w-4 mx-4 rounded-t-lg"></div>
            <div className="bg-white h-40 w-4 mx-4 rounded-t-lg"></div>
            <div className="bg-white h-48 w-4 mx-2 rounded-t-lg"></div>
            <div className="bg-white h-56 w-4 mx-2 rounded-t-lg"></div>
          </div>
        </div>
      </div>

      <div>
        <TeamList />
      </div>
    </div>
  );
};

export default Dashboard;
