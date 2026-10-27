// import React, { useState } from "react";
// import PayrollSummary from "../payrollSummary/PayrollSummary";

// const batches = {
//   "Full Time Batch": {
//     period: "01 Jul, 2024 to 31 Jul, 2024",
//     details: {
//       type: "Monthly",
//       employeesInBatch: 5,
//       processedEmployees: 3,
//       remainingEmployees: 2,
//       totalDays: 31,
//       startedOn: "Jul 24, 2024 at 5:50 PM",
//       startedBy: "Sathish Chiluveru",
//     },
//     employees: [
//       {
//         id: "STD-060",
//         name: "Captain",
//         gross: 45000,
//         actualGross: 64000,
//         basic: 32000,
//         allowances: 32450,
//         deductions: 2500,
//         lossOfPay: 0.0,
//         incomeTax: 3144,
//         surcharge: 0.0,
//         cess: 125,
//         netAmount: 69259,
//       },
//       {
//         id: "STD-080",
//         name: "Peter",
//         gross: 45000,
//         actualGross: 64000,
//         basic: 32000,
//         allowances: 32450,
//         deductions: 2500,
//         lossOfPay: 0.0,
//         incomeTax: 3144,
//         surcharge: 0.0,
//         cess: 125,
//         netAmount: 69259,
//       },
//       {
//         id: "STD-010",
//         name: "Marvel",
//         gross: 45000,
//         actualGross: 64000,
//         basic: 32000,
//         allowances: 32450,
//         deductions: 2500,
//         lossOfPay: 0.0,
//         incomeTax: 3144,
//         surcharge: 0.0,
//         cess: 125,
//         netAmount: 69259,
//       },
//       {
//         id: "STD-020",
//         name: "Tokyo",
//         gross: 45000,
//         actualGross: 64000,
//         basic: 32000,
//         allowances: 32450,
//         deductions: 2500,
//         lossOfPay: 0.0,
//         incomeTax: 3144,
//         surcharge: 0.0,
//         cess: 125,
//         netAmount: 69259,
//       },
//       {
//         id: "STD-160",
//         name: "Denver",
//         gross: 45000,
//         actualGross: 64000,
//         basic: 32000,
//         allowances: 32450,
//         deductions: 2500,
//         lossOfPay: 0.0,
//         incomeTax: 3144,
//         surcharge: 0.0,
//         cess: 125,
//         netAmount: 69259,
//       },
//       {
//         id: "STD-180",
//         name: "Mosco",
//         gross: 45000,
//         actualGross: 64000,
//         basic: 32000,
//         allowances: 32450,
//         deductions: 2500,
//         lossOfPay: 0.0,
//         incomeTax: 3144,
//         surcharge: 0.0,
//         cess: 125,
//         netAmount: 69259,
//       },
//     ],
//   },
//   "Part Time Batch": {
//     period: "01 Aug, 2024 to 31 Aug, 2024",
//     details: {
//       type: "Weekly",
//       employeesInBatch: 8,
//       processedEmployees: 5,
//       remainingEmployees: 3,
//       totalDays: 31,
//       startedOn: "Aug 1, 2024 at 9:00 AM",
//       startedBy: "Shyam Chiluveru",
//     },
//     employees: [
//       {
//         id: "PT-010",
//         name: "Alice",
//         gross: 45000,
//         actualGross: 64000,
//         basic: 32000,
//         allowances: 32450,
//         deductions: 2500,
//         lossOfPay: 0.0,
//         incomeTax: 3144,
//         surcharge: 0.0,
//         cess: 125,
//         netAmount: 69259,
//       },
//       {
//         id: "PT-020",
//         name: "Bob",
//         gross: 45000,
//         actualGross: 64000,
//         basic: 32000,
//         allowances: 32450,
//         deductions: 2500,
//         lossOfPay: 0.0,
//         incomeTax: 3144,
//         surcharge: 0.0,
//         cess: 125,
//         netAmount: 69259,
//       },
//       {
//         id: "STD-160",
//         name: "Denver",
//         gross: 45000,
//         actualGross: 64000,
//         basic: 32000,
//         allowances: 32450,
//         deductions: 2500,
//         lossOfPay: 0.0,
//         incomeTax: 3144,
//         surcharge: 0.0,
//         cess: 125,
//         netAmount: 69259,
//       },
//       {
//         id: "STD-180",
//         name: "Mosco",
//         gross: 45000,
//         actualGross: 64000,
//         basic: 32000,
//         allowances: 32450,
//         deductions: 2500,
//         lossOfPay: 0.0,
//         incomeTax: 3144,
//         surcharge: 0.0,
//         cess: 125,
//         netAmount: 69259,
//       },
//       {
//         id: "STD-010",
//         name: "Marvel",
//         gross: 45000,
//         actualGross: 64000,
//         basic: 32000,
//         allowances: 32450,
//         deductions: 2500,
//         lossOfPay: 0.0,
//         incomeTax: 3144,
//         surcharge: 0.0,
//         cess: 125,
//         netAmount: 69259,
//       },
//       {
//         id: "STD-020",
//         name: "Tokyo",
//         gross: 45000,
//         actualGross: 64000,
//         basic: 32000,
//         allowances: 32450,
//         deductions: 2500,
//         lossOfPay: 0.0,
//         incomeTax: 3144,
//         surcharge: 0.0,
//         cess: 125,
//         netAmount: 69259,
//       },
//     ],
//   },
//   "Intern Batch": {
//     period: "01 Sep, 2024 to 30 Sep, 2024",
//     details: {
//       type: "Monthly",
//       employeesInBatch: 3,
//       processedEmployees: 1,
//       remainingEmployees: 2,
//       totalDays: 30,
//       startedOn: "Sep 1, 2024 at 10:00 AM",
//       startedBy: "Mounika ch",
//     },
//     employees: [
//       {
//         id: "STD-010",
//         name: "Marvel",
//         gross: 45000,
//         actualGross: 64000,
//         basic: 32000,
//         allowances: 32450,
//         deductions: 2500,
//         lossOfPay: 0.0,
//         incomeTax: 3144,
//         surcharge: 0.0,
//         cess: 125,
//         netAmount: 69259,
//       },
//       {
//         id: "INT-001",
//         name: "John",
//         gross: 45000,
//         actualGross: 64000,
//         basic: 32000,
//         allowances: 32450,
//         deductions: 2500,
//         lossOfPay: 0.0,
//         incomeTax: 3144,
//         surcharge: 0.0,
//         cess: 125,
//         netAmount: 69259,
//       },
//       {
//         id: "STD-020",
//         name: "Tokyo",
//         gross: 45000,
//         actualGross: 64000,
//         basic: 32000,
//         allowances: 32450,
//         deductions: 2500,
//         lossOfPay: 0.0,
//         incomeTax: 3144,
//         surcharge: 0.0,
//         cess: 125,
//         netAmount: 69259,
//       },
//       {
//         id: "INT-002",
//         name: "Jane",
//         gross: 45000,
//         actualGross: 64000,
//         basic: 32000,
//         allowances: 32450,
//         deductions: 2500,
//         lossOfPay: 0.0,
//         incomeTax: 3144,
//         surcharge: 0.0,
//         cess: 125,
//         netAmount: 69259,
//       },
//       {
//         id: "STD-180",
//         name: "Mosco",
//         gross: 45000,
//         actualGross: 64000,
//         basic: 32000,
//         allowances: 32450,
//         deductions: 2500,
//         lossOfPay: 0.0,
//         incomeTax: 3144,
//         surcharge: 0.0,
//         cess: 125,
//         netAmount: 69259,
//       },
//     ],
//   },
// };

// const steps = [
//   {
//     number: 1,
//     title: "Compensation",
//     description: "Review employees' compensation information",
//   },
//   {
//     number: 2,
//     title: "Time & Attendance",
//     description: "Review employees' attendance, missing days and overtime",
//   },
//   {
//     number: 3,
//     title: "IT Declarations",
//     description: "Review employees' IT Declarations information",
//   },
//   {
//     number: 4,
//     title: "Review",
//     description: "Review employees' information",
//   },
// ];

// const RunPayroll = () => {
//   const [selectedBatch, setSelectedBatch] = useState("");
//   const [payPeriod, setPayPeriod] = useState("");
//   const [payrollDetails, setPayrollDetails] = useState(null);
//   const [showSummary, setShowSummary] = useState(false);
//   const [employees, setEmployees] = useState([]);

//   const handleBatchChange = (e) => {
//     const batch = e.target.value;
//     setSelectedBatch(batch);
//     const period = batches[batch]?.period || "";
//     setPayPeriod(period);

//     if (batch) {
//       setPayrollDetails(batches[batch]?.details || null);
//       setEmployees(batches[batch]?.employees || []);
//     } else {
//       setPayrollDetails(null);
//       setEmployees([]);
//     }
//   };

//   const handleResumePayroll = () => {
//     setShowSummary(true);
//   };

//   if (showSummary) {
//     return (
//       <PayrollSummary
//         payPeriod={payPeriod}
//         payrollType={payrollDetails?.type}
//         batchName={selectedBatch}
//         totalEmployees={payrollDetails.employeesInBatch}
//         employees={employees}
//       />
//     );
//   }

//   return (
//     <div className="p-4 mt-4 min-h-screen">
//       <h1 className="text-[#0098F1] lg:text-lg text-sm font-bold mb-4">
//         Payroll / Batch & Period
//       </h1>
//       <div className="md:text-center">
//         <div className="mb-4 max-md:mr-2">
//           <label
//             htmlFor="batch-select"
//             className="text-gray-700 text-sm font-bold mb-2"
//           >
//             Select Batch
//           </label>
//           <select
//             id="batch-select"
//             className="w-full md:w-80 md:ml-3 border outline-none p-1 rounded-md"
//             value={selectedBatch}
//             onChange={handleBatchChange}
//           >
//             <option value="">Select Batch</option>
//             {Object.keys(batches).map((batch) => (
//               <option key={batch} value={batch}>
//                 {batch}
//               </option>
//             ))}
//           </select>
//         </div>

//         <div className="mb-4 md:ml-2 max-md:mr-2">
//           <label
//             htmlFor="pay-period"
//             className="text-gray-700 text-sm font-bold mb-2"
//           >
//             Pay Period
//           </label>
//           <select
//             id="pay-period"
//             className="w-full md:w-80 md:ml-3 border rounded-md p-1 max-md:text-xs"
//             value={payPeriod}
//             onChange={(e) => setPayPeriod(e.target.value)}
//             disabled
//           >
//             {payPeriod && <option value={payPeriod}>{payPeriod}</option>}
//           </select>
//         </div>
//       </div>

//       {payrollDetails && (
//         <div className="md:mt-4 md:mr-2 rounded-md">
//           <div className="flex justify-between border-b pb-2 border-px border-gray-600">
//             <h1 className="lg:text-lg font-bold mb-2 max-md:hidden">
//               Payroll Information
//             </h1>
//             <h1 className="lg:text-lg font-bold mb-2  xl:ml-24 max-md:hidden">
//               Process Flow
//             </h1>
//             <button
//               className="border bg-gray-700 text-white px-5 py-1 rounded-lg "
//               onClick={handleResumePayroll}
//             >
//               Resume Payroll
//             </button>
//           </div>

//           <div className="flex flex-col md:flex-row md:justify-between md:gap-x-2  max-md:mr-1">
//             <div className=" leading-7 my-5 md:w-[50%] max-md:text-sm">
//               <h1 className="text-lg font-bold mb-2 md:hidden">
//                 Payroll Information
//               </h1>
//               <p className="flex md:justify-between gap-x-3 ">
//                 <strong>Payroll Type:</strong>{" "}
//                 <span>{payrollDetails.type}</span>
//               </p>
//               <p className="flex md:justify-between gap-x-3">
//                 <strong>Employees in Batch:</strong>
//                 <span>{payrollDetails.employeesInBatch}</span>
//               </p>
//               <p className="flex md:justify-between gap-x-3">
//                 <strong>Processed Employees:</strong>
//                 <span>{payrollDetails.processedEmployees}</span>
//               </p>
//               <p className="flex md:justify-between gap-x-3">
//                 <strong>Remaining Employees:</strong>
//                 <span>{payrollDetails.remainingEmployees}</span>
//               </p>
//               <p className="flex md:justify-between gap-x-3">
//                 <strong>Total Days:</strong>
//                 <span>{payrollDetails.totalDays}</span>
//               </p>
//               <p className="flex flex-col lg:flex-row lg:justify-between lg:gap-x-3">
//                 <strong className="whitespace-nowrap">
//                   Payroll Started On:
//                 </strong>
//                 <span>{payrollDetails.startedOn}</span>
//               </p>
//               <p className="flex flex-col lg:flex-row lg:justify-between lg:gap-x-3">
//                 <strong className="whitespace-nowrap">
//                   Payroll Started By:
//                 </strong>
//                 <span>{payrollDetails.startedBy}</span>
//               </p>
//             </div>

//             <div className="flex flex-col items-start my-2 md:my-5 space-y-4">
//               <h1 className="text-lg font-bold mb-2 md:hidden">Process Flow</h1>
//               {steps.map((step) => (
//                 <div
//                   key={step.number}
//                   className="flex items-center space-x-2 lg:space-x-8 md:space-x-4"
//                 >
//                   <div className="md:w-8 md:h-8 w-6 h-6 max-md:text-xs flex items-center justify-center rounded-full border-2 border-[#0098F1] text-[#0098F1]">
//                     {step.number}
//                   </div>
//                   <div className="border border-r-4 p-2 bg-white shadow-md rounded-lg border-r-[#0098F1] md:w-[230px] max-md:w-[180px] lg:w-[410px]">
//                     <h3 className="md:text-lg font-semibold">{step.title}</h3>
//                     <p className="max-md:text-xs text-gray-600">
//                       {step.description}
//                     </p>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default RunPayroll;






import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import PayrollSummary from "../payrollSummary/PayrollSummary";
import { payrollAPI } from "../../../../services/api";

const steps = [
  { number: 1, title: "Compensation", description: "Review employees' compensation information" },
  { number: 2, title: "Time & Attendance", description: "Review attendance, missing days and overtime" },
  { number: 3, title: "IT Declarations", description: "Review employees' IT Declarations information" },
  { number: 4, title: "Review", description: "Review employees' information" },
];

// Format a Date to "YYYY-MM-DD" for <input type="date">
const toISO = (d) => {
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${y}-${m}-${day}`;
};

// Compute a month-based period (offset: 0 = current, -1 = last, etc.)
const monthPeriod = (offset = 0) => {
  const now = new Date();
  const start = new Date(now.getFullYear(), now.getMonth() + offset, 1);
  const end = new Date(now.getFullYear(), now.getMonth() + offset + 1, 0);
  return { start: toISO(start), end: toISO(end) };
};

const fmtLabel = (isoStart, isoEnd) => {
  if (!isoStart || !isoEnd) return "—";
  const s = new Date(isoStart);
  const e = new Date(isoEnd);
  const opts = { day: "2-digit", month: "short", year: "numeric" };
  return `${s.toLocaleDateString("en-GB", opts)} to ${e.toLocaleDateString("en-GB", opts)}`;
};

const RunPayroll = () => {
  const [batches, setBatches] = useState([]);
  const [selectedBatchId, setSelectedBatchId] = useState("");
  const [batchDetails, setBatchDetails] = useState(null);

  // Editable period
  const [periodStart, setPeriodStart] = useState("");
  const [periodEnd, setPeriodEnd] = useState("");

  const [starting, setStarting] = useState(false);

  // Persist active run id so a browser refresh keeps you on the summary
  const [activeRunId, setActiveRunId] = useState(() => {
    const stored = localStorage.getItem("HR_PAYROLL_ACTIVE_RUN");
    return stored ? Number(stored) : null;
  });

  useEffect(() => {
    if (activeRunId != null) {
      localStorage.setItem("HR_PAYROLL_ACTIVE_RUN", String(activeRunId));
    } else {
      localStorage.removeItem("HR_PAYROLL_ACTIVE_RUN");
    }
  }, [activeRunId]);

  // Default = current month
  useEffect(() => {
    const p = monthPeriod(0);
    setPeriodStart(p.start);
    setPeriodEnd(p.end);
  }, []);

  // Load batches
  useEffect(() => {
    (async () => {
      try {
        const res = await payrollAPI.listBatches();
        setBatches(Array.isArray(res.data) ? res.data : []);
      } catch (err) {
        toast.error(err?.response?.data?.detail || "Failed to load batches");
      }
    })();
  }, []);

  const handleBatchChange = async (e) => {
    const id = e.target.value;
    setSelectedBatchId(id);
    if (!id) {
      setBatchDetails(null);
      return;
    }
    try {
      const res = await payrollAPI.getBatch(id);
      setBatchDetails(res.data);
    } catch (err) {
      toast.error(err?.response?.data?.detail || "Failed to load batch");
    }
  };

  const applyShortcut = (offset) => {
    const p = monthPeriod(offset);
    setPeriodStart(p.start);
    setPeriodEnd(p.end);
  };

  const validatePeriod = () => {
    if (!periodStart || !periodEnd) return "Please select both start and end dates";
    if (new Date(periodStart) > new Date(periodEnd)) {
      return "Start date must be before end date";
    }
    return null;
  };

  const handleStartPayroll = async () => {
    if (!selectedBatchId) {
      toast.error("Please select a batch first");
      return;
    }
    if (!batchDetails?.member_count) {
      toast.error("This batch has no members. Add members before running payroll.");
      return;
    }
    const periodError = validatePeriod();
    if (periodError) {
      toast.error(periodError);
      return;
    }

    setStarting(true);
    try {
      const res = await payrollAPI.createRun({
        batchId: Number(selectedBatchId),
        payPeriodStart: periodStart,
        payPeriodEnd: periodEnd,
        payrollType: batchDetails.payrollType || "Monthly",
        notes: null,
      });

      console.log("[RunPayroll] createRun response:", res?.data);

      const newId = res?.data?.id;
      if (newId == null) {
        toast.error(
          "Payroll created but the server didn't return a run ID. Check the backend logs."
        );
        return;
      }

      toast.success("Payroll run created");
      setActiveRunId(Number(newId));
    } catch (err) {
      console.error("[RunPayroll] createRun failed:", err);
      const detail = err?.response?.data?.detail;
      const msg =
        typeof detail === "string"
          ? detail
          : detail
          ? JSON.stringify(detail)
          : err?.message || "Failed to start payroll";
      toast.error(msg);
    } finally {
      setStarting(false);
    }
  };

  const handleBackFromSummary = () => {
    setActiveRunId(null);
    setSelectedBatchId("");
    setBatchDetails(null);
    const p = monthPeriod(0);
    setPeriodStart(p.start);
    setPeriodEnd(p.end);
  };

  if (activeRunId != null) {
    return <PayrollSummary runId={activeRunId} onBack={handleBackFromSummary} />;
  }

  const periodLabel = fmtLabel(periodStart, periodEnd);

  return (
    <div className="p-4 mt-4 min-h-screen">
      <h1 className="text-[#0098F1] lg:text-lg text-sm font-bold mb-4">
        Payroll / Batch & Period
      </h1>

      <div className="md:text-center">
        {/* Batch selector */}
        <div className="mb-4 max-md:mr-2">
          <label className="text-gray-700 text-sm font-bold mb-2">Select Batch</label>
          <select
            className="w-full md:w-80 md:ml-3 border outline-none p-1 rounded-md"
            value={selectedBatchId}
            onChange={handleBatchChange}
          >
            <option value="">Select Batch</option>
            {batches.map((b) => (
              <option key={b.id} value={b.id}>
                {b.name} ({b.member_count} employees)
              </option>
            ))}
          </select>
        </div>

        {/* Editable pay period */}
        <div className="mb-4 max-md:mr-2">
          <label className="text-gray-700 text-sm font-bold mb-2">Pay Period</label>

          <div className="flex flex-col md:flex-row md:justify-center md:items-center gap-2 md:gap-3 mt-1">
            <div className="flex items-center gap-2">
              <span className="text-xs text-gray-600">From</span>
              <input
                type="date"
                value={periodStart}
                onChange={(e) => setPeriodStart(e.target.value)}
                className="border rounded-md p-1 text-sm outline-none focus:border-[#0098F1]"
              />
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xs text-gray-600">To</span>
              <input
                type="date"
                value={periodEnd}
                onChange={(e) => setPeriodEnd(e.target.value)}
                className="border rounded-md p-1 text-sm outline-none focus:border-[#0098F1]"
              />
            </div>
          </div>

          {/* Shortcuts */}
          <div className="flex flex-wrap justify-center gap-2 mt-2">
            <button
              type="button"
              onClick={() => applyShortcut(0)}
              className="text-xs px-3 py-1 rounded-full border border-[#0098F1] text-[#0098F1] hover:bg-[#0098F1] hover:text-white"
            >
              This Month
            </button>
            <button
              type="button"
              onClick={() => applyShortcut(-1)}
              className="text-xs px-3 py-1 rounded-full border border-[#0098F1] text-[#0098F1] hover:bg-[#0098F1] hover:text-white"
            >
              Last Month
            </button>
            <button
              type="button"
              onClick={() => applyShortcut(-2)}
              className="text-xs px-3 py-1 rounded-full border border-[#0098F1] text-[#0098F1] hover:bg-[#0098F1] hover:text-white"
            >
              2 Months Ago
            </button>
          </div>

          {periodLabel !== "—" && (
            <p className="text-xs text-gray-500 mt-2">Selected: {periodLabel}</p>
          )}
        </div>
      </div>

      {batchDetails && (
        <div className="md:mt-4 md:mr-2 rounded-md">
          <div className="flex justify-between border-b pb-2 border-gray-600">
            <h1 className="lg:text-lg font-bold mb-2 max-md:hidden">
              Payroll Information
            </h1>
            <h1 className="lg:text-lg font-bold mb-2 xl:ml-24 max-md:hidden">
              Process Flow
            </h1>
            <button
              className={`border bg-gray-700 text-white px-5 py-1 rounded-lg ${
                starting ? "opacity-50" : ""
              }`}
              onClick={handleStartPayroll}
              disabled={starting}
            >
              {starting ? "Starting..." : "Start Payroll"}
            </button>
          </div>

          <div className="flex flex-col md:flex-row md:justify-between md:gap-x-2 max-md:mr-1">
            <div className="leading-7 my-5 md:w-[50%] max-md:text-sm">
              <p className="flex md:justify-between gap-x-3">
                <strong>Payroll Type:</strong>{" "}
                <span>{batchDetails.payrollType || "Monthly"}</span>
              </p>
              <p className="flex md:justify-between gap-x-3">
                <strong>Employees in Batch:</strong>{" "}
                <span>{batchDetails.member_count}</span>
              </p>
              <p className="flex md:justify-between gap-x-3">
                <strong>Pay Period:</strong> <span>{periodLabel}</span>
              </p>
              <p className="flex md:justify-between gap-x-3">
                <strong>Last Payroll Run:</strong>
                <span>
                  {batchDetails.last_payroll_run_at
                    ? new Date(batchDetails.last_payroll_run_at).toLocaleString()
                    : "Never"}
                </span>
              </p>
              <p className="flex md:justify-between gap-x-3">
                <strong>Status:</strong> <span>{batchDetails.status}</span>
              </p>
            </div>

            <div className="flex flex-col items-start my-2 md:my-5 space-y-4">
              {steps.map((step) => (
                <div
                  key={step.number}
                  className="flex items-center space-x-2 lg:space-x-8 md:space-x-4"
                >
                  <div className="md:w-8 md:h-8 w-6 h-6 max-md:text-xs flex items-center justify-center rounded-full border-2 border-[#0098F1] text-[#0098F1]">
                    {step.number}
                  </div>
                  <div className="border border-r-4 p-2 bg-white shadow-md rounded-lg border-r-[#0098F1] md:w-[230px] max-md:w-[180px] lg:w-[410px]">
                    <h3 className="md:text-lg font-semibold">{step.title}</h3>
                    <p className="max-md:text-xs text-gray-600">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default RunPayroll;