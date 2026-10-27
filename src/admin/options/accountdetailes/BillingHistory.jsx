import React from "react";

const BillingHistory = () => {
  return (
    <div className="  overflow-x-scroll scrollbar-thin   scrollbar-track-white scrollbar-thumb-[#e65f2b] pt-4 mx-4">
      <table className="min-w-full w-screen overflow-x-scroll  text-nowrap">
        <thead>
          <tr>
            <th className="bg-[#E65F2B] rounded-sm text-white font-semibold text-nowrap py-3 px-9 border border-r-white">
              Paid On
            </th>
            <th className="bg-[#E65F2B] rounded-sm text-white font-semibold py-3 px-9 text-nowrap border border-r-white">
              Amount(&#8377;)
            </th>
            <th className="bg-[#E65F2B] rounded-sm text-white font-semibold py-3 px-9 text-nowrap border border-r-white">
              Pay Type
            </th>
            <th className="bg-[#E65F2B] rounded-sm text-white font-semibold py-3 px-9 text-nowrap border border-r-white">
              Description
            </th>
            <th className="bg-[#E65F2B] rounded-sm text-white font-semibold py-3 px-8 text-nowrap border border-r-white">
              Period From
            </th>
            <th className="bg-[#E65F2B] rounded-sm text-white font-semibold py-3 px-8 text-nowrap border border-r-white">
              Period To
            </th>
            <th className="bg-[#E65F2B] rounded-sm text-white font-semibold py-3 px-8 text-nowrap border border-r-white">
              Receipt
            </th>
            <th className="bg-[#E65F2B] rounded-sm text-white font-semibold py-3 px-8 text-nowrap border border-r-white">
              GST Receipt
            </th>
            <th className="bg-[#E65F2B] rounded-sm text-white font-semibold py-3 px-8 text-nowrap border border-r-white">
              Invoice
            </th>
            <th className="bg-[#E65F2B] rounded-sm text-white font-semibold py-3 px-8 text-nowrap border border-r-white">
              User Name
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

export default BillingHistory;
