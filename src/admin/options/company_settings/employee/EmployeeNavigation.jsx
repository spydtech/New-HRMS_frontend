import React, { useEffect, useState } from "react";
import { TiMessages } from "react-icons/ti";
import Types from "./Types";
import IDGeneration from "./IDgeneration";

const EmployeeNavigation = () => {
  const [activeCard, setActiveCard] = useState("card1");
  const [storedData, setStoredData] = useState([]);
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    const storedActivities =
      JSON.parse(localStorage.getItem("activities")) || [];
    setActivities(storedActivities);
  }, []);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("generatedEmployeeIDs")) || [];
    setStoredData(data);
  }, []);

  const data = [
    {
      id: "card1",
      title: "Types", // Title for Leave Types
    },
    {
      id: "card2",
      title: "Employee Id Generation", // Title for ID Generation
    },
  ];

  const handleCardClick = (cardId) => {
    setActiveCard(cardId);
  };

  const renderActiveComponent = () => {
    switch (activeCard) {
      case "card1":
        return <Types />;
      case "card2":
        return <IDGeneration />;
      default:
        return <div>Select a leave type to see details.</div>;
    }
  };

  // Combine storedData and activities, and sort by timestamp
  const combinedData = [...storedData, ...activities].sort(
    (a, b) => new Date(a.timestamp) - new Date(b.timestamp)
  );

  return (
    <div className="p-2 h-auto">
      {/* Responsive Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-4">
        <div className="col-span-1 p-4 mt-4 flex flex-col items-center lg:items-start">
          <div className="flex  flex-col gap-4 w-auto lg:w-64">
            {data.map(({ id, title }) => (
              <div
                key={id}
                className={` px-2 w-60 h-12  text-center cursor-pointer flex items-center justify-center ${
                  activeCard === id
                    ? "text-white rounded-lg  bg-gradient-to-r from-[#E65F2B] to-[#FFC252]"
                    : "text-[#E65F2B] rounded-lg  bg-white"
                }`}
                onClick={() => handleCardClick(id)}
              >
                <p className=" ">{title}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="h-auto col-span-4  lg:col-span-4">
          {renderActiveComponent()}
        </div>
      </div>

      <div className="mt-10">
        <div className="flex px-4">
          <p>
            <TiMessages className="w-6 text-[#e65f2b] h-6" />
          </p>
          <p className="flex pl-1 font-medium text-lg text-[#e65f2b]">
            Activity
          </p>
        </div>
        <hr className="border border-[#e65f2b]" />
      </div>

      <div className="mt-4 text-[#e65f2b] space-y-1">
        {combinedData.length > 0 ? (
          combinedData.map((item, index) => (
            <div key={index} className="border-b border-[#e65f2b] pb-4 mb-4">
              {item.adminName && (
                <>
                  <p>
                    <strong>Admin Name:</strong> {item.adminName}
                  </p>
                  <p>
                    <strong>Prefix:</strong> {item.prefix}
                  </p>
                  <p>
                    <strong>Employee ID:</strong> {item.employeeId}
                  </p>
                  <p>
                    <strong>Suffix:</strong> {item.suffix}
                  </p>
                  <p>
                    <strong>Combined ID:</strong> {item.combinedId}
                  </p>
                </>
              )}
              {item.admin && (
                <>
                  <p>
                    <strong>Admin:</strong> {item.admin}
                  </p>
                  <p>
                    <strong>Action:</strong> {item.action}
                  </p>
                  <p>
                    <strong>Details:</strong> {item.details}
                  </p>
                </>
              )}
              <p className="text-sm pt-2">
                <strong>Timestamp:</strong> {item.timestamp}
              </p>
            </div>
          ))
        ) : (
          <p className="text-[#e65f2b] text-center pt-10">
            No recent activities
          </p>
        )}
      </div>
    </div>
  );
};

export default EmployeeNavigation;
