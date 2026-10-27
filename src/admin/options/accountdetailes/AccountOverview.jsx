import React from "react";
import { LiaInfoCircleSolid } from "react-icons/lia";

const data = [
  {
    Price: "15.00",
    Total: "Free",
    Total_Sub: 1,
    Used: 1,
    Available: 9,
    Addons: 0,
  },
];
const AccountOverview = () => {
  return (
    <div className="mt-7">
      <div className="bg-white w-auto mx-auto rounded-md shadow-xl">
        <h2 className="flex justify-between items-center px-[40px] pt-5 pb-8 text-[#E65F2B] font-semibold text-[18px]">
          Subscription Details
        </h2>
        {data.map((newdata, index) => (
          <div>
            <div className="flex justify-between items-center px-[40px] border-b py-5 text-[#E65F2B] font-semibold border-[#E65F2B]">
              <div>Price Per Employee</div>
              <div>&#8377;{newdata.Price}</div>
            </div>
            <div className="flex justify-between items-center px-[40px] border-b py-5 text-[#E65F2B] font-semibold border-[#E65F2B]">
              <div>Total Subscription Amount (GST Extra)</div>
              <div>{newdata.Total}</div>
            </div>
            <div className="flex justify-between items-center px-[40px] border-b py-5 text-[#E65F2B] font-semibold border-[#E65F2B]">
              <div>Employees (Total Subscribed)</div>
              <div>{newdata.Total_Sub}</div>
            </div>
            <div className="flex justify-between items-center px-[40px] border-b py-5 text-[#E65F2B] font-semibold border-[#E65F2B]">
              <div>Employees (Used)</div>
              <div>{newdata.Used}</div>
            </div>
            <div className="flex justify-between items-center px-[40px] border-b py-5 text-[#E65F2B] font-semibold border-[#E65F2B]">
              <div>Employees (Available)</div>
              <div>{newdata.Available}</div>
            </div>
            <div className="flex justify-between items-center px-[40px] border-b py-5 text-[#E65F2B] font-semibold border-[#E65F2B]">
              <div>Addons</div>
              <div>{newdata.Addons}</div>
            </div>
            <div className="flex items-center px-[40px] py-6 text-[#E65F2B] font-semibold">
              <LiaInfoCircleSolid className="text-[30px] mr-1" />
              <span>Upgrade now to add more employees.</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AccountOverview;
