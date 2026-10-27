import React, { useState } from "react";
import CausalLeaveNavigation from "./causalLeave/CausalLeaveNavigation";
import SickLeaveNavigation from "./sickLeave/SickLeaveNavigation";
import EarnedLeaveNavigation from "./earnedLeave/EarnedLeaveNavigation";

const Leaves = () => {
  const [activeCard, setActiveCard] = useState("card1");

  const leaveCards = [
    { id: "card1", title: "Casual leave" },
    { id: "card2", title: "Sick leave" },
    { id: "card3", title: "Earned leave" },
  ];

  const renderActiveComponent = () => {
    switch (activeCard) {
      case "card1": return <CausalLeaveNavigation />;
      case "card2": return <SickLeaveNavigation />;
      case "card3": return <EarnedLeaveNavigation />;
      default:      return <CausalLeaveNavigation />;
    }
  };

  return (
    <div className="p-4 mt-4 min-h-screen">
      <h1 className="text-[#0098F1] lg:text-lg font-bold mb-4">
        Hr Management / Employee / Leaves
      </h1>
      <div className="grid lg:grid-cols-5 grid-cols-1 gap-6 mt-6">
        {/* Left Sidebar Cards */}
        <div className="col-span-1 flex flex-col gap-4">
          {leaveCards.map(({ id, title }) => (
            <div
              key={id}
              className={`bg-white w-full h-[80px] text-[#0098F1] rounded-lg text-center cursor-pointer flex items-center justify-center shadow-md border-2 transition-all ${
                activeCard === id
                  ? "border-[#0098F1] bg-blue-50 font-bold"
                  : "border-transparent hover:border-gray-200"
              }`}
              onClick={() => setActiveCard(id)}
            >
              <h3 className="text-xl font-medium">{title}</h3>
            </div>
          ))}
        </div>

        {/* Right Side Content Area */}
        <div className="h-auto col-span-4 bg-gray-50 rounded-lg p-4">
          {renderActiveComponent()}
        </div>
      </div>
    </div>
  );
};

export default Leaves;



// /* eslint-disable no-unused-vars */
// import { useState, useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import CausalLeaveNavigation from "./causalLeave/CausalLeaveNavigation";
// import SickLeaveNavigation from "./sickLeave/SickLeaveNavigation";
// import EarnedLeaveNavigation from "./earnedLeave/EarnedLeaveNavigation";
// import {
//   fetchAllLeaves,
//   fetchLeaveTypes,
//   selectAllLeaves,
//   selectLeaveTypes,
//   selectLeavesLoading,
// } from "../../../../store/slices/leaveSlice";

// const Leaves = () => {
//   const dispatch = useDispatch();
//   const allLeaves = useSelector(selectAllLeaves) || [];
//   const leaveTypes = useSelector(selectLeaveTypes) || [];
//   const loading = useSelector(selectLeavesLoading);

//   const [activeCard, setActiveCard] = useState("card1");

//   // ---- fetch on mount ----
//   useEffect(() => {
//     dispatch(fetchAllLeaves());
//     if (leaveTypes.length === 0) {
//       dispatch(fetchLeaveTypes());
//     }
//   }, [dispatch, leaveTypes.length]);

//   // ---- derive pending counts from real applications ----
//   const pendingByType = (typeName) =>
//     allLeaves.filter(
//       (l) => l.leaveType === typeName && l.status === "pending"
//     ).length;

//   const causalPendingCount = pendingByType("casual");
//   const sickPendingCount = pendingByType("sick");
//   const earnedPendingCount = pendingByType("earned");

//   const leaveCards = [
//     {
//       id: "card1",
//       title: "Casual leave",
//       type: "casual",
//       count: causalPendingCount,
//     },
//     {
//       id: "card2",
//       title: "Sick leave",
//       type: "sick",
//       count: sickPendingCount,
//     },
//     {
//       id: "card3",
//       title: "Earned leave",
//       type: "earned",
//       count: earnedPendingCount,
//     },
//   ];

//   const handleCardClick = (cardId) => setActiveCard(cardId);

//   const renderActiveComponent = () => {
//     switch (activeCard) {
//       case "card1":
//         return <CausalLeaveNavigation />;
//       case "card2":
//         return <SickLeaveNavigation />;
//       case "card3":
//         return <EarnedLeaveNavigation />;
//       default:
//         return <div>Select a leave type to see details.</div>;
//     }
//   };

//   return (
//     <div className="p-4 mt-4 min-h-screen">
//       <div className="flex flex-col md:flex-row justify-between items-center mb-4">
//         <h1 className="text-[#0098F1] lg:text-lg font-bold">
//           Hr Management / Employee / Leaves
//         </h1>
//         <button
//           onClick={() => dispatch(fetchAllLeaves())}
//           className="text-sm text-[#0098F1] underline"
//         >
//           Refresh
//         </button>
//       </div>

//       <div className="grid lg:grid-cols-5 grid-cols-1 gap-4">
//         {/* Left column — leave type cards */}
//         <div className="col-span-1 p-4 mt-20">
//           <div className="flex flex-col gap-4">
//             {leaveCards.map(({ id, title, count }) => (
//               <div
//                 key={id}
//                 className={`bg-white w-auto h-[70px] text-[#0098F1] rounded text-center cursor-pointer flex items-center justify-center transition ${
//                   activeCard === id
//                     ? "border-l-4 border-[#0098F1]"
//                     : "border-none"
//                 }`}
//                 onClick={() => handleCardClick(id)}
//               >
//                 <div>
//                   <h3 className="text-xl">{title}</h3>
//                   <h1 className="text-[16px]">
//                     {loading ? "…" : count}
//                   </h1>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Right column — active tab content */}
//         <div className="h-auto col-span-4 p-4">
//           {renderActiveComponent()}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Leaves;