// import React from "react";

// import Activity from "./Activity";
// import EmployeeSummary from "./EmployeeSummary";

// const PayrollSummary = ({
//   payPeriod,
//   payrollType,
//   batchName,
//   totalEmployees,
//   employees,
// }) => {
//   return (
//     <div className="p-4 mt-4 min-h-screen">
//       <div>
//         <h1 className="text-[#0098F1] lg:text-lg text-sm font-bold mb-4">
//           Payroll / PayPeriod:{" "}
//           <span className="text-[#0098F1]">{payPeriod}</span>
//         </h1>
//         <div className="flex flex-col lg:flex-row justify-between items-center mb-4 border-b pb-2 border-gray-700">
//           <div className="flex flex-col gap-y-2 md:flex-row md:items-center md:gap-x-5">
//             <button className="border border-gray-700 text-gray-700 bg-white px-5 py-1 rounded-lg font-semibold">
//               Void Payroll
//             </button>
//             <button className="border bg-gray-700 text-white px-5 py-1 rounded-lg font-semibold">
//               Submit for Process
//             </button>
//           </div>
//         </div>
//         <div className="grid md:grid-cols-3 gap-4 ">
//           <div className=" rounded-md leading-7">
//             <h2 className="text-lg font-bold mb-2 text-black className='text-[#0098F1]'">
//               Payroll Summary
//             </h2>
//             <p>
//               <strong className="text-[#0098F1]">Payroll Type: </strong>
//               {payrollType}
//             </p>
//             <p>
//               <strong className="text-[#0098F1]">Batch: </strong>
//               {batchName}
//             </p>
//             <p>
//               <strong className="text-[#0098F1]">Employee Count: </strong>{" "}
//               {totalEmployees}
//             </p>
//             <p>
//               <strong className="text-[#0098F1]">Gross: </strong> ₹64,900.00
//             </p>
//             <p>
//               <strong className="text-[#0098F1]">Net Amount: </strong>{" "}
//               ₹59,629.78
//             </p>
//             <p>
//               <strong className="text-[#0098F1]">Loss Of Pay: </strong> ₹0.00
//             </p>
//           </div>
//           <div className=" rounded-md leading-7">
//             <h2 className="text-lg font-bold mb-2 text-black">TDS Summary</h2>
//             <p>
//               <strong className="text-[#0098F1]">Income Tax: </strong> ₹3,144.44
//             </p>
//             <p>
//               <strong className="text-[#0098F1]">Surcharge: </strong> ₹0.00
//             </p>
//             <p>
//               <strong className="text-[#0098F1]">CESS: </strong> ₹125.78
//             </p>
//             <p>
//               <strong className="text-[#0098F1]">Total TDS: </strong> ₹3,270.22
//             </p>
//             <p>
//               <strong className="text-[#0098F1]">Total TDS Rounded: </strong>{" "}
//               ₹3,271.00
//             </p>
//             <p>
//               <strong className="text-[#0098F1]">Employees (count): </strong>
//               {totalEmployees}
//             </p>
//           </div>
//           <div className="rounded-md leading-7">
//             <h2 className="text-lg font-bold mb-2 text-black">PF Summary</h2>
//             <p>
//               <strong className="text-[#0098F1]">
//                 Employee Contribution:{" "}
//               </strong>{" "}
//               ₹1,800.00
//             </p>
//             <p>
//               <strong className="text-[#0098F1]">
//                 Employer Contribution:{" "}
//               </strong>{" "}
//               ₹1,500.00
//             </p>
//             <p>
//               <strong className="text-[#0098F1]">Total PF: </strong> ₹3,300.00
//             </p>
//             <p>
//               <strong className="text-[#0098F1]">PF Rounded: </strong> ₹3,300.00
//             </p>
//             <p>
//               <strong className="text-[#0098F1]">Employees (count): </strong>
//               {totalEmployees}
//             </p>
//           </div>
//         </div>
//       </div>

//       <EmployeeSummary employees={employees} />

//       <Activity />
//     </div>
//   );
// };

// export default PayrollSummary;





// import React, { useEffect, useState } from "react";
// import { toast } from "react-toastify";
// import Activity from "./Activity";
// import EmployeeSummary from "./EmployeeSummary";
// import { payrollAPI } from "../../../../services/api";

// const fmt = (n) =>
//   Number(n || 0).toLocaleString("en-IN", {
//     minimumFractionDigits: 2,
//     maximumFractionDigits: 2,
//   });

// const PayrollSummary = ({ runId, onBack }) => {
//   const [run, setRun] = useState(null);
//   const [payslips, setPayslips] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [submitting, setSubmitting] = useState(false);

//   // ------------------------------------------------------------------
//   // Load run + payslips
//   // ------------------------------------------------------------------
//   const load = async () => {
//     if (!runId) {
//       setLoading(false);
//       setError("No payroll run selected.");
//       return;
//     }

//     setLoading(true);
//     setError(null);

//     try {
//       const runRes = await payrollAPI.getRun(runId);
//       setRun(runRes.data);

//       // Fetch payslips separately so a failure here doesn't break
//       // the run render
//       try {
//         const slipsRes = await payrollAPI.listRunPayslips(runId);
//         setPayslips(Array.isArray(slipsRes.data) ? slipsRes.data : []);
//       } catch (slipErr) {
//         console.error("[PayrollSummary] payslips fetch failed:", slipErr);
//         setPayslips([]);
//         const d = slipErr?.response?.data?.detail;
//         toast.error(typeof d === "string" ? d : "Failed to load payslips");
//       }
//     } catch (err) {
//       console.error("[PayrollSummary] run fetch failed:", err);
//       const d = err?.response?.data?.detail;
//       const msg = typeof d === "string" ? d : err?.message || "Failed to load payroll";
//       setError(msg);
//       toast.error(msg);
//     } finally {
//       // ALWAYS runs, no matter what
//       setLoading(false);
//     }
//   };

//   // Depend on the stringified id so the effect can't miss a change
//   const runIdKey = runId == null ? "" : String(runId);

//   useEffect(() => {
//     console.log("[PayrollSummary] effect fired, runId =", runIdKey);
//     load();
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [runIdKey]);

//   // ------------------------------------------------------------------
//   // Actions
//   // ------------------------------------------------------------------
//   const handleSubmit = async () => {
//     if (!run) return;
//     setSubmitting(true);
//     try {
//       await payrollAPI.completeRun(run.id);
//       toast.success("Payroll submitted");
//       await load();
//     } catch (err) {
//       const d = err?.response?.data?.detail;
//       toast.error(typeof d === "string" ? d : "Failed to submit");
//     } finally {
//       setSubmitting(false);
//     }
//   };

//   const handleVoid = async () => {
//     if (!run) return;
//     if (!window.confirm("Void this payroll run?")) return;
//     try {
//       await payrollAPI.voidRun(run.id);
//       toast.success("Payroll voided");
//       onBack?.();
//     } catch (err) {
//       const d = err?.response?.data?.detail;
//       toast.error(typeof d === "string" ? d : "Failed to void");
//     }
//   };

//   // ------------------------------------------------------------------
//   // Render
//   // ------------------------------------------------------------------
//   if (loading) {
//     return (
//       <div className="p-4 mt-4 min-h-screen text-center text-gray-500">
//         Loading payroll...
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div className="p-4 mt-4 min-h-screen text-center">
//         <p className="text-red-500 font-semibold mb-3">{error}</p>
//         {onBack && (
//           <button
//             onClick={onBack}
//             className="px-3 py-1 bg-gray-300 rounded-md text-sm"
//           >
//             ← Back
//           </button>
//         )}
//       </div>
//     );
//   }

//   if (!run) {
//     return (
//       <div className="p-4 mt-4 min-h-screen text-center text-gray-500">
//         Payroll run not found.
//       </div>
//     );
//   }

//   const payPeriodLabel = `${new Date(run.pay_period_start).toLocaleDateString("en-GB", { day: "2-digit", month: "short", year: "numeric" })} to ${new Date(run.pay_period_end).toLocaleDateString("en-GB", { day: "2-digit", month: "short", year: "numeric" })}`;

//   const employees = payslips.map((p) => ({
//     id: p.id,
//     name: p.user?.name || `User #${p.user_id}`,
//     gross: Number(p.gross),
//     actualGross: Number(p.actual_gross),
//     basic: Number(p.basic),
//     allowances: Number(p.allowances),
//     deductions: Number(p.total_deductions),
//     lossOfPay: Number(p.lop_amount),
//     incomeTax: Number(p.income_tax),
//     surcharge: Number(p.surcharge),
//     cess: Number(p.cess),
//     netAmount: Number(p.net_amount),
//   }));

//   return (
//     <div className="p-4 mt-4 min-h-screen">
//       {onBack && (
//         <button
//           onClick={onBack}
//           className="mb-3 px-3 py-1 bg-gray-300 rounded-md text-sm"
//         >
//           ← Back
//         </button>
//       )}
//       <h1 className="text-[#0098F1] lg:text-lg text-sm font-bold mb-4">
//         Payroll / PayPeriod: <span className="text-[#0098F1]">{payPeriodLabel}</span>
//       </h1>

//       <div className="flex flex-col lg:flex-row justify-between items-center mb-4 border-b pb-2 border-gray-700">
//         <div className="flex flex-col gap-y-2 md:flex-row md:items-center md:gap-x-5">
//           <button
//             onClick={handleVoid}
//             className="border border-gray-700 text-gray-700 bg-white px-5 py-1 rounded-lg font-semibold"
//           >
//             Void Payroll
//           </button>
//           <button
//             onClick={handleSubmit}
//             disabled={submitting || run.status === "Completed"}
//             className={`border text-white px-5 py-1 rounded-lg font-semibold ${
//               run.status === "Completed"
//                 ? "bg-green-600 cursor-default"
//                 : submitting
//                 ? "bg-gray-400"
//                 : "bg-gray-700"
//             }`}
//           >
//             {run.status === "Completed"
//               ? "Completed ✓"
//               : submitting
//               ? "Submitting..."
//               : "Submit for Process"}
//           </button>
//         </div>
//         <div className="text-sm text-gray-500 mt-2 lg:mt-0">
//           Status: <b>{run.status}</b>
//         </div>
//       </div>

//       <div className="grid md:grid-cols-3 gap-4">
//         <div className="rounded-md leading-7">
//           <h2 className="text-lg font-bold mb-2 text-black">Payroll Summary</h2>
//           <p>
//             <strong className="text-[#0098F1]">Payroll Type: </strong>
//             {run.payroll_type}
//           </p>
//           <p>
//             <strong className="text-[#0098F1]">Batch: </strong>
//             {run.batch_id ?? "—"}
//           </p>
//           <p>
//             <strong className="text-[#0098F1]">Employee Count: </strong>
//             {run.total_employees}
//           </p>
//           <p>
//             <strong className="text-[#0098F1]">Gross: </strong> ₹{fmt(run.total_gross)}
//           </p>
//           <p>
//             <strong className="text-[#0098F1]">Net Amount: </strong> ₹{fmt(run.total_net)}
//           </p>
//         </div>

//         <div className="rounded-md leading-7">
//           <h2 className="text-lg font-bold mb-2 text-black">TDS Summary</h2>
//           <p>
//             <strong className="text-[#0098F1]">Income Tax: </strong> ₹
//             {fmt(payslips.reduce((s, p) => s + Number(p.income_tax), 0))}
//           </p>
//           <p>
//             <strong className="text-[#0098F1]">Surcharge: </strong> ₹
//             {fmt(payslips.reduce((s, p) => s + Number(p.surcharge), 0))}
//           </p>
//           <p>
//             <strong className="text-[#0098F1]">CESS: </strong> ₹
//             {fmt(payslips.reduce((s, p) => s + Number(p.cess), 0))}
//           </p>
//           <p>
//             <strong className="text-[#0098F1]">Total TDS: </strong> ₹
//             {fmt(run.total_tds)}
//           </p>
//         </div>

//         <div className="rounded-md leading-7">
//           <h2 className="text-lg font-bold mb-2 text-black">PF Summary</h2>
//           <p>
//             <strong className="text-[#0098F1]">Employee Contribution: </strong> ₹
//             {fmt(payslips.reduce((s, p) => s + Number(p.pf_employee), 0))}
//           </p>
//           <p>
//             <strong className="text-[#0098F1]">Employer Contribution: </strong> ₹
//             {fmt(payslips.reduce((s, p) => s + Number(p.pf_employer), 0))}
//           </p>
//           <p>
//             <strong className="text-[#0098F1]">Total PF: </strong> ₹
//             {fmt(run.total_pf)}
//           </p>
//           <p>
//             <strong className="text-[#0098F1]">Employees: </strong>
//             {run.total_employees}
//           </p>
//         </div>
//       </div>

//       <EmployeeSummary employees={employees} />
//       <Activity />
//     </div>
//   );
// };

// export default PayrollSummary;





import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import Activity from "./Activity";
import EmployeeSummary from "./EmployeeSummary";
import { payrollAPI } from "../../../../services/api";

const fmt = (n) =>
  Number(n || 0).toLocaleString("en-IN", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

const PayrollSummary = ({ runId, onBack }) => {
  const [run, setRun] = useState(null);
  const [payslips, setPayslips] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [submitting, setSubmitting] = useState(false);

  const runIdKey = runId == null ? "" : String(runId);

  useEffect(() => {
    console.log("[PayrollSummary] effect fired, runId =", runIdKey);

    // Empty runId → don't hit the API. Show a friendly empty state.
    if (!runIdKey) {
      setLoading(false);
      setRun(null);
      setPayslips([]);
      return;
    }

    let cancelled = false;

    (async () => {
      setLoading(true);
      setError(null);

      try {
        const runRes = await payrollAPI.getRun(runIdKey);
        if (cancelled) return;
        setRun(runRes.data);

        try {
          const slipsRes = await payrollAPI.listRunPayslips(runIdKey);
          if (cancelled) return;
          setPayslips(Array.isArray(slipsRes.data) ? slipsRes.data : []);
        } catch (slipErr) {
          if (cancelled) return;
          console.error("[PayrollSummary] payslips fetch failed:", slipErr);
          setPayslips([]);
          const d = slipErr?.response?.data?.detail;
          toast.error(typeof d === "string" ? d : "Failed to load payslips");
        }
      } catch (err) {
        if (cancelled) return;
        console.error("[PayrollSummary] run fetch failed:", err);
        const d = err?.response?.data?.detail;
        const msg =
          typeof d === "string" ? d : err?.message || "Failed to load payroll";
        setError(msg);
      } finally {
        if (!cancelled) setLoading(false);
      }
    })();

    return () => {
      cancelled = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [runIdKey]);

  const handleSubmit = async () => {
    if (!run) return;
    setSubmitting(true);
    try {
      await payrollAPI.completeRun(run.id);
      toast.success("Payroll submitted");
      // Refetch only the run header, no need to reload payslips
      const runRes = await payrollAPI.getRun(run.id);
      setRun(runRes.data);
    } catch (err) {
      const d = err?.response?.data?.detail;
      toast.error(typeof d === "string" ? d : "Failed to submit");
    } finally {
      setSubmitting(false);
    }
  };

  const handleVoid = async () => {
    if (!run) return;
    if (!window.confirm("Void this payroll run?")) return;
    try {
      await payrollAPI.voidRun(run.id);
      toast.success("Payroll voided");
      onBack?.();
    } catch (err) {
      const d = err?.response?.data?.detail;
      toast.error(typeof d === "string" ? d : "Failed to void");
    }
  };

  // ------------------------------------------------------------------
  // Render
  // ------------------------------------------------------------------

  // No runId → friendly empty state (NOT an error)
  if (!runIdKey) {
    return (
      <div className="p-4 mt-4 min-h-screen flex flex-col items-center justify-center text-center">
        <p className="text-gray-600 text-lg mb-1">No payroll run selected.</p>
        <p className="text-gray-400 text-sm mb-4">
          Start one from the <b>Run Payroll</b> tab, or pick an existing batch.
        </p>
        {onBack && (
          <button
            onClick={onBack}
            className="px-4 py-2 bg-[#0098F1] text-white rounded-md text-sm"
          >
            ← Back to Batch Selection
          </button>
        )}
      </div>
    );
  }

  if (loading) {
    return (
      <div className="p-4 mt-4 min-h-screen text-center text-gray-500">
        Loading payroll...
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-4 mt-4 min-h-screen text-center">
        <p className="text-red-500 font-semibold mb-3">{error}</p>
        {onBack && (
          <button
            onClick={onBack}
            className="px-3 py-1 bg-gray-300 rounded-md text-sm"
          >
            ← Back
          </button>
        )}
      </div>
    );
  }

  if (!run) {
    return (
      <div className="p-4 mt-4 min-h-screen text-center text-gray-500">
        Payroll run not found.
      </div>
    );
  }

  const payPeriodLabel = `${new Date(run.pay_period_start).toLocaleDateString(
    "en-GB",
    { day: "2-digit", month: "short", year: "numeric" }
  )} to ${new Date(run.pay_period_end).toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  })}`;

  const employees = payslips.map((p) => ({
    id: p.id,
    name: p.user?.name || `User #${p.user_id}`,
    gross: Number(p.gross),
    actualGross: Number(p.actual_gross),
    basic: Number(p.basic),
    allowances: Number(p.allowances),
    deductions: Number(p.total_deductions),
    lossOfPay: Number(p.lop_amount),
    incomeTax: Number(p.income_tax),
    surcharge: Number(p.surcharge),
    cess: Number(p.cess),
    netAmount: Number(p.net_amount),
  }));

  return (
    <div className="p-4 mt-4 min-h-screen">
      {onBack && (
        <button
          onClick={onBack}
          className="mb-3 px-3 py-1 bg-gray-300 rounded-md text-sm"
        >
          ← Back
        </button>
      )}

      <h1 className="text-[#0098F1] lg:text-lg text-sm font-bold mb-4">
        Payroll / PayPeriod:{" "}
        <span className="text-[#0098F1]">{payPeriodLabel}</span>
      </h1>

      <div className="flex flex-col lg:flex-row justify-between items-center mb-4 border-b pb-2 border-gray-700">
        <div className="flex flex-col gap-y-2 md:flex-row md:items-center md:gap-x-5">
          <button
            onClick={handleVoid}
            className="border border-gray-700 text-gray-700 bg-white px-5 py-1 rounded-lg font-semibold"
          >
            Void Payroll
          </button>
          <button
            onClick={handleSubmit}
            disabled={submitting || run.status === "Completed"}
            className={`border text-white px-5 py-1 rounded-lg font-semibold ${
              run.status === "Completed"
                ? "bg-green-600 cursor-default"
                : submitting
                ? "bg-gray-400"
                : "bg-gray-700"
            }`}
          >
            {run.status === "Completed"
              ? "Completed ✓"
              : submitting
              ? "Submitting..."
              : "Submit for Process"}
          </button>
        </div>
        <div className="text-sm text-gray-500 mt-2 lg:mt-0">
          Status: <b>{run.status}</b>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-4">
        {/* Payroll Summary */}
        <div className="rounded-md leading-7">
          <h2 className="text-lg font-bold mb-2 text-black">Payroll Summary</h2>
          <p>
            <strong className="text-[#0098F1]">Payroll Type: </strong>
            {run.payroll_type}
          </p>
          <p>
            <strong className="text-[#0098F1]">Batch: </strong>
            {run.batch_id ?? "—"}
          </p>
          <p>
            <strong className="text-[#0098F1]">Employee Count: </strong>
            {run.total_employees}
          </p>
          <p>
            <strong className="text-[#0098F1]">Gross: </strong> ₹
            {fmt(run.total_gross)}
          </p>
          <p>
            <strong className="text-[#0098F1]">Net Amount: </strong> ₹
            {fmt(run.total_net)}
          </p>
        </div>

        {/* TDS Summary */}
        <div className="rounded-md leading-7">
          <h2 className="text-lg font-bold mb-2 text-black">TDS Summary</h2>
          <p>
            <strong className="text-[#0098F1]">Income Tax: </strong> ₹
            {fmt(payslips.reduce((s, p) => s + Number(p.income_tax), 0))}
          </p>
          <p>
            <strong className="text-[#0098F1]">Surcharge: </strong> ₹
            {fmt(payslips.reduce((s, p) => s + Number(p.surcharge), 0))}
          </p>
          <p>
            <strong className="text-[#0098F1]">CESS: </strong> ₹
            {fmt(payslips.reduce((s, p) => s + Number(p.cess), 0))}
          </p>
          <p>
            <strong className="text-[#0098F1]">Total TDS: </strong> ₹
            {fmt(run.total_tds)}
          </p>
        </div>

        {/* PF Summary */}
        <div className="rounded-md leading-7">
          <h2 className="text-lg font-bold mb-2 text-black">PF Summary</h2>
          <p>
            <strong className="text-[#0098F1]">Employee Contribution: </strong> ₹
            {fmt(payslips.reduce((s, p) => s + Number(p.pf_employee), 0))}
          </p>
          <p>
            <strong className="text-[#0098F1]">Employer Contribution: </strong> ₹
            {fmt(payslips.reduce((s, p) => s + Number(p.pf_employer), 0))}
          </p>
          <p>
            <strong className="text-[#0098F1]">Total PF: </strong> ₹
            {fmt(run.total_pf)}
          </p>
          <p>
            <strong className="text-[#0098F1]">Employees: </strong>
            {run.total_employees}
          </p>
        </div>
      </div>

      <EmployeeSummary employees={employees} />
      <Activity />
    </div>
  );
};

export default PayrollSummary;