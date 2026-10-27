import React, { useState, useEffect } from "react";
import CausalLeaveNavigation from "./causalLeave/CausalLeaveNavigation";
import SickLeaveNavigation from "./sickLeave/SickLeaveNavigation";
import EarnedLeaveNavigation from "./earnedLeave/EarnedLeaveNavigation";

const Leaves = () => {
  const [activeCard, setActiveCard] = useState("card1");
  const [employees, setEmployees] = useState([]);
  const [causalPendingCount, setCausalPendingCount] = useState(0);
  const [earnedPendingCount, setEarnedPendingCount] = useState(0);
  const [sickPendingCount, setSickPendingCount] = useState(0);

  const updateCounts = () => {
    setCausalPendingCount(
      JSON.parse(localStorage.getItem("causalPendingCount")) || 0
    );
    setEarnedPendingCount(
      JSON.parse(localStorage.getItem("earnedPendingCount")) || 0
    );
    setSickPendingCount(
      JSON.parse(localStorage.getItem("sickPendingCount")) || 0
    );
  };

  useEffect(() => {
    updateCounts();

    const handleStorageChange = (event) => {
      updateCounts();
    };

    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  useEffect(() => {
    const causalLeaveEmployees =
      JSON.parse(localStorage.getItem("causalLeaveEmployees")) || [];
    const earnedLeaveEmployees =
      JSON.parse(localStorage.getItem("earnedLeaveEmployees")) || [];
    const sickLeaveEmployees =
      JSON.parse(localStorage.getItem("sickLeaveEmployees")) || [];

    setEmployees([
      ...causalLeaveEmployees,
      ...earnedLeaveEmployees,
      ...sickLeaveEmployees,
    ]);
  }, []);

  const leaveCards = [
    {
      id: "card1",
      title: "Casual leave",
      count: causalPendingCount,
    },
    {
      id: "card2",
      title: "Sick leave",
      count: sickPendingCount,
    },
    {
      id: "card3",
      title: "Earned leave",
      count: earnedPendingCount,
    },
  ];

  const handleCardClick = (cardId) => {
    setActiveCard(cardId);
  };

  const renderActiveComponent = () => {
    switch (activeCard) {
      case "card1":
        return <CausalLeaveNavigation />;
      case "card2":
        return <SickLeaveNavigation />;
      case "card3":
        return <EarnedLeaveNavigation />;
      default:
        return <div>Select a leave type to see details.</div>;
    }
  };

  return (
    <div className="p-2 h-auto">
      <h1 className="text-xl ml-4">HR Management / Leaves</h1>
      <div className="grid grid-cols-5 gap-4">
        <div className="col-span-1 p-4 mt-20">
          <div className="flex flex-col gap-4">
            {leaveCards.map(({ id, title, count }) => (
              <div
                key={id}
                className={`bg-white w-auto h-[70px] text-[#0098F1] rounded text-center cursor-pointer flex items-center justify-center ${
                  activeCard === id
                    ? "border-l-4 border-[#0098F1]"
                    : "border-none"
                }`}
                onClick={() => handleCardClick(id)}
              >
                <div>
                  <h3 className="text-xl">{title}</h3>
                  <h1 className="text-[16px]">{count}</h1>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="h-auto col-span-4 p-4">{renderActiveComponent()}</div>
      </div>
    </div>
  );
};

export default Leaves;
