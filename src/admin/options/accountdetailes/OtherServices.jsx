import React, { useState } from "react";

const OtherServices = () => {
  const [modalStatus, setModalStatus] = useState(false);
  const [modalStatus1, setModalStatus1] = useState(false);
  const openModal = () => {
    setModalStatus(true);
  };
  const closeModal = () => {
    setModalStatus(false);
  };
  const openModal1 = () => {
    setModalStatus1(true);
  };
  const closeModal1 = () => {
    setModalStatus1(false);
  };
  return (
    <div className="w-[540px] rounded-2xl h-auto mx-auto bg-[#E65F2B] mt-[40px]">
      <div className="px-7 py-6 flex flex-col justify-center items-center">
        <div className="text-white text-lg font-semibold">
          HRMS Services (Optional)
        </div>
        <div className="flex flex-col mt-[30px] mb-[50px] gap-4">
          <div className="flex gap-x-[80px] text-white items-center">
            <div>On Boarding Service</div>
            <button
              onClick={openModal}
              className="bg-white text-[#049204] py-2 px-4 rounded-md font-semibold"
            >
              Request Service
            </button>
          </div>
          <div className="flex gap-x-[123px] text-white items-center">
            <div>Payroll Service</div>
            <button
              onClick={openModal1}
              className="bg-white text-[#049204] py-2 px-4 rounded-md font-semibold"
            >
              Request Service
            </button>
          </div>
        </div>
      </div>
      {modalStatus && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50 text-lg font-normal">
          <div className="w-[600px] h-auto bg-white p-4 rounded-md">
            <h3 className="text-[#E65F2B] font-semibold text-xl mb-5">
              Service Request
            </h3>
            <div className="flex flex-col gap-6 text-[17px] w-[400px] mx-auto">
              <div className="flex justify-between">
                <div>Service</div>
                <div className="mr-[60px]">On Boarding Service</div>
              </div>
              <div className="flex justify-between">
                <div>Name</div>
                <input
                  className="border border-[#E65F2B] rounded-md placeholder:p-2 focus:outline-none px-2 py-1"
                  placeholder="Enter Name"
                  type="text"
                />
              </div>
              <div className="flex justify-between">
                <div>Contact Email</div>
                <input
                  className="border border-[#E65F2B] rounded-md placeholder:p-2 focus:outline-none px-2 py-1"
                  placeholder="Enter Email Address"
                  type="email"
                />
              </div>
              <div className="flex justify-between">
                <div>Contact Phone</div>
                <input
                  className="border border-[#E65F2B] rounded-md placeholder:p-2 focus:outline-none px-2 py-1"
                  placeholder="Enter Name"
                  type="text"
                />
              </div>
            </div>
            <div className="flex justify-center items-center mt-9 gap-7 mb-9">
              <button className="bg-[#E65F2B] text-white font-semibold px-8 rounded-md py-2">
                Save
              </button>
              <button
                onClick={closeModal}
                className="border border-t-[#E65F2B] border-b-[#FFC252] border-x-[#E65F2B] text-[#E65F2B] font-semibold px-6 rounded-md py-2"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
      {modalStatus1 && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50 text-lg font-normal">
          <div className="w-[600px] h-auto bg-white p-4 rounded-md">
            <h3 className="text-[#E65F2B] font-semibold text-xl mb-5">
              Service Request
            </h3>
            <div className="flex flex-col gap-6 text-[17px] w-[400px] mx-auto">
              <div className="flex justify-between">
                <div>Service</div>
                <div className="mr-[105px]">Payroll Service</div>
              </div>
              <div className="flex justify-between">
                <div>Name</div>
                <input
                  className="border border-[#E65F2B] rounded-md placeholder:p-2 focus:outline-none px-2 py-1"
                  placeholder="Enter Name"
                  type="text"
                />
              </div>
              <div className="flex justify-between">
                <div>Contact Email</div>
                <input
                  className="border border-[#E65F2B] rounded-md placeholder:p-2 focus:outline-none px-2 py-1"
                  placeholder="Enter Email Address"
                  type="email"
                />
              </div>
              <div className="flex justify-between">
                <div>Contact Phone</div>
                <input
                  className="border border-[#E65F2B] rounded-md placeholder:p-2 focus:outline-none px-2 py-1"
                  placeholder="Enter Name"
                  type="text"
                />
              </div>
            </div>
            <div className="flex justify-center items-center mt-9 gap-7 mb-9">
              <button className="bg-[#E65F2B] text-white font-semibold px-8 rounded-md py-2">
                Save
              </button>
              <button
                onClick={closeModal1}
                className="border border-t-[#E65F2B] border-b-[#FFC252] border-x-[#E65F2B] text-[#E65F2B] font-semibold px-6 rounded-md py-2"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default OtherServices;
