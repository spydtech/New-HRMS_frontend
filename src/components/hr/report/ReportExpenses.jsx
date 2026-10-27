import React from "react";

const userdata = [
  {
    id: 1,
    Items: "Items",
    OrderBy: "Ava Alexander",
    From: "Flipkart India",
    Date: "16,mar,2002",
    PaidBy:
      "src/assets/hr/reports/Frame_masterCard.png",
    Status: "Approved",
    Amount: "$205",
  },
  {
    id: 3,
    Items: "Items",
    OrderBy: "Ava Alexander",
    From: "Flipkart India",
    Date: "16,mar,2002",
    PaidBy:
      "src/assets/hr/reports/Frame_Visa.png",
    Status: "Approved",
    Amount: "$205",
  },
  {
    id: 5,
    Items: "Items",
    OrderBy: "Ava Alexander",
    From: "Flipkart India",
    Date: "16,mar,2002",
    PaidBy:
      "src/assets/hr/reports/Frame_Visa.png",
    Status: "Approved",
    Amount: "$205",
  },
  {
    id: 6,
    Items: "Items",
    OrderBy: "Ava Alexander",
    From: "Flipkart India",
    Date: "16,mar,2002",
    PaidBy:
      "src/assets/hr/reports/Frame_Paypal.png",
    Status: "Pending",
    Amount: "$205",
  },
];

const ReportExpenses = () => {
  const getButtonStyle = (status) => {
    if (status === "Approved") {
      return "bg-[#2A8F4C] text-white"; // Background color for Approved status
    } else if (status === "Pending") {
      return "bg-[#F78822] text-white"; // Background color for Pending status
    } else {
      return "bg-gray-300"; // Default background color if status is neither Approved nor Pending
    }
  };

  return (
    <div className="flex flex-col min-h-screen p-4 mt-4">
      <h1 className="text-[#0098F1] lg:text-lg text-sm font-bold mb-4  ">
        Report / Expenses
      </h1>

      <div className="mt-5 overflow-x-scroll scrollbar-thin   scrollbar-track-white scrollbar-thumb-[#0098f1] pt-6 mx-2">
        <table className="min-w-full  w-screen overflow-x-scroll text-nowrap">
          <thead>
            <tr className="text-white bg-[#0098f1] border border-[#0098F1]">
              <th className="py-3  border-r border-white text-sm font-medium text-nowrap">
                Items
              </th>
              <th className="py-3  border-r border-white text-sm font-medium text-nowrap">
                Order By
              </th>
              <th className="py-3  border-r border-white text-sm font-medium text-nowrap">
                From
              </th>
              <th className="py-3  border-r border-white text-sm font-medium text-nowrap">
                Date
              </th>
              <th className="py-3  border-r border-white text-sm font-medium text-nowrap">
                Paid By
              </th>
              <th className="py-3  border-r border-white text-sm font-medium text-nowrap">
                Status
              </th>
              <th className="py-3   text-sm font-medium text-nowrap">
                Amount
              </th>
            </tr>
          </thead>
          <tbody>
            {userdata.map((user) => (
              <tr key={user.id} className="bg-white text-center border border-[#0098F1]">
                <td className="py-2  border-r border-[#0098f1]">
                  {user.Items}
                </td>
                <td className="py-2  border-r border-[#0098f1]">
                  {user.OrderBy}
                </td>
                <td className="py-2  border-r border-[#0098f1]">
                  {user.From}
                </td>
                <td className="py-2  border-r border-[#0098f1]">
                  {user.Date}
                </td>
                <td className="py-2  border-r border-[#0098f1] flex justify-center">
                  <img
                    src={user.PaidBy}
                    alt="type"
                  />
                </td>
                <td className="py-2  border-r border-[#0098f1]">
                  <button
                    className={`h-6 w-24 md:h-8 md:w-32 ${getButtonStyle(
                      user.Status
                    )} rounded-lg text-center text-sm lg:text-[16px]`}
                  >
                    {user.Status}
                  </button>
                </td>
                <td className="py-2 ">
                  {user.Amount}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ReportExpenses;
