import React, { useState } from "react";
import { FiPlusCircle } from "react-icons/fi";
import { BsCheckSquare } from "react-icons/bs";
import { RxCross2 } from "react-icons/rx";

const ManageAddons = () => {
  const [modalStatus, setModalStatus] = useState(false);
  const openModal = () => {
    setModalStatus(true);
  };
  const closeModal = () => {
    setModalStatus(false);
  };

  return (
    <div className="p-4 md:p-6 lg:p-8">
      <div className="space-y-6">
        {/* Section 1 */}
        <div className="w-full max-w-screen-lg mx-auto shadow-xl px-5 py-6 rounded-lg bg-white">
          <div className="flex justify-between items-center">
            <div className="lg:text-lg text-sm  font-semibold text-[#E65F2B]">
              Project & Time Sheet Management
            </div>
            <button
              onClick={openModal}
              className="flex items-center lg:text-[16px]  text-white bg-[#E65F2B]  px-4 py-2 rounded-md gap-2"
            >
              <FiPlusCircle className="text-xl" />
              Add
            </button>
          </div>
          <div className="flex flex-col gap-3 mt-4">
            <div className="flex items-center gap-4">
              <BsCheckSquare  className="text-[#E65F2B] text-lg" />
              <div className="lg:text-md text-sm">
                Track Employee Working Hours For Each Day.
              </div>
            </div>
            <div className="flex items-center gap-4">
              <BsCheckSquare  className="text-[#E65F2B] text-lg" />
              <div className="text-md">
                Company Timesheets And Timesheet Approvals.
              </div>
            </div>
            <div className="flex items-center gap-4">
              <BsCheckSquare  className="text-[#E65F2B] text-lg" />
              <div className="text-md">
                Missing Timesheets And Month Wise Time Report Of Each Employee.
              </div>
            </div>
          </div>
        </div>

        {/* Section 2 */}
        <div className="w-full max-w-screen-lg mx-auto shadow-xl px-5 py-6 rounded-lg bg-white">
          <div className="flex justify-between items-center">
            <div className="lg:text-lg  text-sm font-semibold text-[#E65F2B]">
              Time Clock Web & Mobile App
            </div>
            <button
              onClick={openModal}
              className="flex items-center text-[16px] text-white bg-[#E65F2B]  px-4 py-2 rounded-md gap-2"
            >
              <FiPlusCircle className="text-xl" />
              Add
            </button>
          </div>
          <div className="flex flex-col gap-3 mt-4">
            <div className="flex items-center gap-4">
              <BsCheckSquare  className="text-[#E65F2B] text-lg" />
              <div className="lg:text-md  text-sm">
                Track Employee Clock In And Clock Out Timings For Each Day.
              </div>
            </div>
            <div className="flex items-center gap-4">
              <BsCheckSquare  className="text-[#E65F2B] text-lg" />
              <div className="text-md">
                Manual Timeclock And Correction Requests.
              </div>
            </div>
            <div className="flex items-center gap-4">
              <BsCheckSquare  className="text-[#E65F2B] text-lg" />
              <div className="text-md">
                Day Wise Missing Timeclock Report For Each Employee.
              </div>
            </div>
            <div className="flex items-center gap-4">
              <BsCheckSquare  className="text-[#E65F2B] text-lg" />
              <div className="text-md">
                Timeclock Approvals Based On Orgchart.
              </div>
            </div>
          </div>
        </div>

        {/* Section 3 */}
        <div className="w-full max-w-screen-lg mx-auto  px-5 py-6 rounded-lg bg-white">
          <div className="flex justify-between items-center">
            <div className="text-lg font-semibold text-[#E65F2B]">
              Leave Management
            </div>
            <button
              onClick={openModal}
              className="flex items-center text-[16px] text-white bg-[#E65F2B]  px-4 py-2 rounded-md gap-2"
            >
              <FiPlusCircle className="text-xl" />
              Add
            </button>
          </div>
          <div className="flex flex-col gap-3 mt-4">
            <div className="flex items-center gap-4">
              <BsCheckSquare  className="text-[#E65F2B] text-lg" />
              <div className="text-md">
                Add And Track Employee Leave Requests.
              </div>
            </div>
            <div className="flex items-center gap-4">
              <BsCheckSquare  className="text-[#E65F2B] text-lg" />
              <div className="text-md">
                Manual Leave Request Approvals Based On Orgchart.
              </div>
            </div>
            <div className="flex items-center gap-4">
              <BsCheckSquare  className="text-[#E65F2B] text-lg" />
              <div className="text-md">
                Configure Leave Policy For The Employees.
              </div>
            </div>
            <div className="flex items-center gap-4">
              <BsCheckSquare  className="text-[#E65F2B] text-lg" />
              <div className="text-md">
                Month Wise Leave Reports And Employee Leave Balance Tracking.
              </div>
            </div>
          </div>
        </div>

        {/* Section 4 */}
        <div className="w-full max-w-screen-lg mx-auto px-5 py-6 rounded-lg bg-white">
          <div className="flex justify-between items-center">
            <div className="lg:text-lg  text-sm font-semibold text-[#E65F2B]">
              Expense Management
            </div>
            <button
              onClick={openModal}
              className="flex items-center text-[16px] text-white bg-[#E65F2B]  px-4 py-2 rounded-md gap-2"
            >
              <FiPlusCircle className="text-xl" />
              Add
            </button>
          </div>
          <div className="flex flex-col gap-3 mt-4">
            <div className="flex items-center gap-4">
              <BsCheckSquare  className="text-[#E65F2B] text-lg" />
              <div className="text-md">Track And Manage Employee Expenses.</div>
            </div>
            <div className="flex items-center gap-4">
              <BsCheckSquare  className="text-[#E65F2B] text-lg" />
              <div className="text-md">
                Set Expense Policy For The Employees.
              </div>
            </div>
            <div className="flex items-center gap-4">
              <BsCheckSquare  className="text-[#E65F2B] text-lg" />
              <div className="text-md">
                Expense Approvals And Schedule Payments Through Payroll Or
                Manually.
              </div>
            </div>
          </div>
        </div>

        {/* Section 5 */}
        <div className="w-full max-w-screen-lg mx-auto shadow-xl px-5 py-6 rounded-lg bg-white">
          <div className="flex justify-between items-center">
            <div className="lg:text-lg text-sm font-semibold text-[#E65F2B]">
              Consultant Management
            </div>
            <button
              onClick={openModal}
              className="flex items-center text-[16px] text-white bg-[#E65F2B]  px-4 py-2 rounded-md gap-2"
            >
              <FiPlusCircle className="text-xl" />
              Add
            </button>
          </div>
          <div className="flex flex-col gap-3 mt-4">
            <div className="flex items-center gap-4">
              <BsCheckSquare  className="text-[#E65F2B] text-lg" />
              <div className="text-md">
                Consultant Can Be An Individual Or Company.
              </div>
            </div>
            <div className="flex items-center gap-4">
              <BsCheckSquare  className="text-[#E65F2B] text-lg" />
              <div className="text-md">
                Track And Manage Consultant Hours And Expenses.
              </div>
            </div>
            <div className="flex items-center gap-4">
              <BsCheckSquare  className="text-[#E65F2B] text-lg" />
              <div className="text-md">
                Consultant Report On Hours Worked And Expenses.
              </div>
            </div>
            <div className="flex items-center gap-4">
              <BsCheckSquare  className="text-[#E65F2B] text-lg" />
              <div className="text-md">
                Consultant Payment Can Be Done Through Payroll.
              </div>
            </div>
          </div>
        </div>
      </div>

      {modalStatus && (
        <div className="fixed inset-0 flex items-center text-sm lg:text:lg bg-gray-800 justify-center z-50  bg-opacity-50 font-normal">
          <div className="relative flex flex-col w-auto h-96 m-4 bg-white p-4 rounded-md overflow-y-auto scrollbar-thin scrollbar-track-white scrollbar-thumb-[#e65f2b] sm:w-[90%] sm:h-[90%] md:w-[80%] md:h-[80%]">
            <button
              className="absolute top-10 right-10 text-[28px] text-[#E65F2B] sm:top-2 sm:right-2"
              onClick={closeModal}
            >
              <RxCross2 />
            </button>
            <div className="w-auto  flex flex-col ">
              <div className="w-full  gap-4 overflow-y-auto ">
                <div className="flex flex-col w-auto p-4  h-auto  ">
                  <h3 className="text-xl text-[#E65F2B] font-semibold mb-4">
                    Add Employees
                  </h3>
                  <div className="flex flex-col gap-3 mt-4 mb-6 ml-4 text-[#E65F2B]">
                    {[
                      "Project & Time Sheet Management? (₹5/emp/mo)",
                      "Time clock web & Mobile App? (₹5/emp/mo)",
                      "Leave payment? (₹5/emp/mo)",
                      "Consultant Management? (₹5/emp/mo)",
                    ].map((text, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <BsCheckSquare  className="text-[#E65F2B] text-md" />
                        <div className="text-[16px]">{text}</div>
                      </div>
                    ))}
                  </div>
                  <div className="flex justify-between mx-4 border-b pb-4 border-[#E65F2B] text-[#E65F2B]">
                    <h3>Total Employees</h3>
                    <div>10</div>
                  </div>
                  <div className="flex justify-between items-center mx-4 border-b  border-[#E65F2B] text-[#E65F2B]">
                    <h3>Subscription Type</h3>
                    <div className="flex gap-x-2 py-2">
                      <button className="bg-[#E65F2B]  text-white text-[15px] px-4 rounded-md">
                        Monthly
                      </button>
                      <button className="border border-t-[#E65F2B] border-b-[#FFC252] border-x-[#E65F2B] text-[#E65F2B] text-[15px] px-5 rounded-md">
                        Yearly
                      </button>
                    </div>
                  </div>
                  <div className="flex justify-between  text-sm mx-4 pb-4 text-[#E65F2B]">
                    <h3>Total Addons (₹15.00/emp/mo)</h3>
                    <div>10 x ₹15.00</div>
                  </div>
                </div>

                <div className="flex flex-col w-auto  h-auto bg-white p-4">
                  <h3 className="text-xl text-[#E65F2B] font-semibold mb-4">
                    To Be Paid Now
                  </h3>
                  <div className="flex flex-col gap-3 mt-4 mb-6 ml-4 text-[#E65F2B]">
                    {[
                      ["Net New Employees", "10"],
                      ["Period From", "10"],
                      ["Period To", "10"],
                      ["Prorated for", "10"],
                      ["Base Price (0 x ₹15.00 prorated)", "₹15.00"],
                      ["Addons (0 x ₹0.00 prorated)", "0 x ₹0.00"],
                      ["IGST (@18%)", "0 x ₹0.00"],
                      ["Redeem Credits (Available: ₹0.00)", "₹0.00"],
                    ].map(([label, value], index) => (
                      <div
                        key={index}
                        className="flex justify-between mx-4 border-b pb-4 border-[#E65F2B] text-[#E65F2B]"
                      >
                        <div>{label}</div>
                        <div>{value}</div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="w-auto h-auto  p-4 ">
                  <h3 className="text-xl text-[#E65F2B] font-semibold mb-4">
                    Next Bill
                  </h3>
                  <div className="flex flex-col gap-3 mt-4 mb-6 ml-4 text-[#E65F2B]">
                    {[
                      ["Next Bill Date", "10"],
                      ["Subscription Type", "10"],
                      ["Total Employees", "10"],
                      ["Total Base Price (10 x ₹15.00/mo)", "10"],
                      ["Base Price (₹15.00/emp/mo)", "0 x ₹15.00"],
                      ["Total Addons (₹0.00/emp/mo)", "0 x ₹0.00"],
                    ].map(([label, value], index) => (
                      <div
                        key={index}
                        className="flex justify-between mx-4 border-b pb-4 border-[#E65F2B] text-[#E65F2B]"
                      >
                        <div>{label}</div>
                        <div>{value}</div>
                      </div>
                    ))}
                  </div>
                  <div className="flex justify-end mb-4">
                    <button
                      className="bg-[#E65F2B]  text-white py-2 px-4 rounded-md"
                      onClick={closeModal}
                    >
                      Go to payment
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ManageAddons;
