import React from "react";
import Activity from "./Activity";
import EmployeeSummary from "./EmployeeSummary";

const PayrollSummary = ({
  payPeriod,
  payrollType,
  batchName,
  totalEmployees,
  employees,
}) => {
  return (
    <div className="p-4 mt-4 min-h-screen">
      <div>
        <h1 className="text-[#E65F2B] lg:text-lg text-sm font-semibold mb-4">
          Payroll / PayPeriod: <span className="">{payPeriod}</span>
        </h1>
        <div className="flex flex-col lg:flex-row justify-between items-center mb-4 border-b pb-2 border-gray-700">
          <div className="flex flex-col gap-y-2 md:flex-row md:items-center md:gap-x-5">
            <button className="border border-gray-700 text-gray-700 bg-white px-5 py-1 rounded-lg font-semibold">
              Void Payroll
            </button>
            <button className="border bg-gray-700 text-white px-5 py-1 rounded-lg font-semibold">
              Submit for Process
            </button>
          </div>
        </div>
        <div className="grid md:grid-cols-3 gap-4 ">
          <div className=" rounded-md leading-7">
            <h2 className="text-lg font-bold mb-2 text-black className='text-[#E65F2B]'">
              Payroll Summary
            </h2>
            <p>
              <strong className="text-[#E65F2B]">Payroll Type: </strong>
              {payrollType}
            </p>
            <p>
              <strong className="text-[#E65F2B]">Batch: </strong>
              {batchName}
            </p>
            <p>
              <strong className="text-[#E65F2B]">Employee Count: </strong>{" "}
              {totalEmployees}
            </p>
            <p>
              <strong className="text-[#E65F2B]">Gross: </strong> ₹64,900.00
            </p>
            <p>
              <strong className="text-[#E65F2B]">Net Amount: </strong>{" "}
              ₹59,629.78
            </p>
            <p>
              <strong className="text-[#E65F2B]">Loss Of Pay: </strong> ₹0.00
            </p>
          </div>
          <div className=" rounded-md leading-7">
            <h2 className="text-lg font-bold mb-2 text-black">TDS Summary</h2>
            <p>
              <strong className="text-[#E65F2B]">Income Tax: </strong> ₹3,144.44
            </p>
            <p>
              <strong className="text-[#E65F2B]">Surcharge: </strong> ₹0.00
            </p>
            <p>
              <strong className="text-[#E65F2B]">CESS: </strong> ₹125.78
            </p>
            <p>
              <strong className="text-[#E65F2B]">Total TDS: </strong> ₹3,270.22
            </p>
            <p>
              <strong className="text-[#E65F2B]">Total TDS Rounded: </strong>{" "}
              ₹3,271.00
            </p>
            <p>
              <strong className="text-[#E65F2B]">Employees (count): </strong>
              {totalEmployees}
            </p>
          </div>
          <div className="rounded-md leading-7">
            <h2 className="text-lg font-bold mb-2 text-black">PF Summary</h2>
            <p>
              <strong className="text-[#E65F2B]">
                Employee Contribution:{" "}
              </strong>{" "}
              ₹1,800.00
            </p>
            <p>
              <strong className="text-[#E65F2B]">
                Employer Contribution:{" "}
              </strong>{" "}
              ₹1,500.00
            </p>
            <p>
              <strong className="text-[#E65F2B]">Total PF: </strong> ₹3,300.00
            </p>
            <p>
              <strong className="text-[#E65F2B]">PF Rounded: </strong> ₹3,300.00
            </p>
            <p>
              <strong className="text-[#E65F2B]">Employees (count): </strong>
              {totalEmployees}
            </p>
          </div>
        </div>
      </div>

      <EmployeeSummary employees={employees} />

      <Activity />
    </div>
  );
};

export default PayrollSummary;
