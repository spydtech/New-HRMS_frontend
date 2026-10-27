import React from "react";
import Marketing from "../../../assets/project/projectDashboard/Marketing.png";
import Sales from "../../../assets/project/projectDashboard/sales.png";
import Web from "../../../assets/project/projectDashboard/web.png";
import profilepic from "../../../assets/project/projectDashboard/profilepic.png";

const TeamCard = ({
  teamName,
  teamLead,
  teamLeadImg,
  tags,
  employees,
  employeeImgs,
}) => {
  return (
    <div className="bg-white rounded-lg shadow-lg h-[400px] hover:shadow-xl transition-shadow duration-300">
      <h3 className="text-[#0098F1] text-xl font-semibold mb-4 text-center">
        {teamName}
      </h3>
      <img
        src={teamLeadImg}
        alt="Team Lead"
        className="w-24 h-24 rounded-full mx-auto mb-2 "
      />
      <p className="text-center font-medium">{teamLead}</p>
      <p className="text-center text-sm text-[#0098F1] mb-4">Team Lead</p>
      <div className="flex justify-center flex-wrap mb-4">
        {tags.map((tag, idx) => (
          <span
            key={idx}
            className={`bg-[#0098F1] text-white mx-2 px-4 py-2 rounded-[10px] text-xs`}
          >
            {tag.label}
          </span>
        ))}
      </div>
      <div className="flex">
        <p className="text-center mt-5 ml-8 text-sm text-[#0098F1] mb-2">
          Employees:
        </p>
        <div className="flex justify-center mb-4 -space-x-6">
          {employeeImgs.map((img, idx) => (
            <img
              key={idx}
              src={img}
              alt={`Employee ${idx + 1}`}
              className={`w-12 h-12 rounded-full border-2 border-gray-300 ${idx < 3 ? "ring-2 ring-maroon-500" : ""
                }`}
            />
          ))}
        </div>
      </div>
      <p className="text-center text-sm text-[#0098F1]">{employees}</p>
    </div>
  );
};

const TeamList = () => {
  const teams = [
    {
      teamName: "Web Designing Team",
      teamLead: "Ratnapriya",
      teamLeadImg: Web,
      tags: [
        { label: "ReactJS"},
        { label: "Angular"},
        { label: "VueJS" },
      ],
      employees: "1 Lead, 3 Employees",
      employeeImgs: [
        profilepic,
        profilepic,
        profilepic,
        profilepic,
        profilepic,
      ],
    },
    {
      teamName: "Web Designing Team",
      teamLead: "Ashwini",
      teamLeadImg: Web,
      tags: [
        { label: "ReactJS", color: "blue-500" },
        { label: "Angular", color: "blue-500" },
        { label: "VueJS", color: "blue-500" },
      ],
      employees: "1 Lead, 3 Employees",
      employeeImgs: [
        profilepic,
        profilepic,
        profilepic,
        profilepic,
        profilepic,
      ],
    },
    {
      teamName: "Marketing Team",
      teamLead: "Raghavendra",
      teamLeadImg: Marketing,
      tags: [
        { label: "Social" },
        { label: "HTML/CSS" },
        { label: "Twitter"},
      ],
      employees: "1 Lead, 3 Employees",
      employeeImgs: [
        profilepic,
        profilepic,
        profilepic,
        profilepic,
        profilepic,
      ],
    },
    {
      teamName: "Sales Team",
      teamLead: "Susie Willis",
      teamLeadImg: Sales,
      tags: [
        { label: "Photoshop"},
        { label: "HTML" },
        { label: "Java"},
      ],
      employees: "1 Lead, 3 Employees",
      employeeImgs: [
        profilepic,
        profilepic,
        profilepic,
        profilepic,
        profilepic,
      ],
    },
  ];

  return (
    <div>
      <div className="grid grid-cols-1  md:gap-4 md:mr-5 md:w-auto gap-8 w-auto pt-4 sm:grid-cols-1  md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 ">
        {teams.map((team, idx) => (
          <div key={idx} className="relative w-auto md:w-[320px] md:px-4 ">
            <TeamCard {...team} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamList;
