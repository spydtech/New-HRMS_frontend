import React from "react";

const SubscriptionHistory = () => {
  return (
    <div className="  overflow-x-scroll scrollbar-thin   scrollbar-track-white scrollbar-thumb-[#e65f2b] pt-4 mx-4">
      <table className="min-w-full w-screen overflow-x-scroll  text-nowrap">
        <thead>
          <tr>
            <th className="bg-[#E65F2B] w-[330px] rounded-sm text-white font-semibold text-nowrap py-3 px-9 border border-r-white">
              Date
            </th>
            <th className="bg-[#E65F2B] w-[330px] rounded-sm text-white font-semibold py-3 px-9 text-nowrap border border-r-white">
              Modified By
            </th>
            <th className="bg-[#E65F2B] w-[330px] rounded-sm text-white font-semibold py-3 px-9 text-nowrap border border-r-white">
              Details
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default SubscriptionHistory;
