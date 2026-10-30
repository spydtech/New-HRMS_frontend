// import React from "react";

// const salaryData = [
//   { component: "Basic Salary", monthly: "₹ 15,000", yearly: "₹ 1,80,000" },
//   {
//     component: "House Rent Allowance (H.R.A)",
//     monthly: "₹ 5,000",
//     yearly: "₹ 60,000",
//   },
//   { component: "Bonus", monthly: "₹ 1,500", yearly: "₹ 18,000" },
//   { component: "Conveyance", monthly: "₹ 800", yearly: "₹ 9,600" },
//   { component: "Other Allowance", monthly: "₹ 800", yearly: "₹ 9,600" },
// ];

// function SalaryStructure() {
//   return (
//     <div className="p-4 mt-4 min-h-screen">
//       <div className="  flex flex-col md:flex-row justify-between">
//         <div>
//           <span className=" text-[#2A546D] text-sm lg:text-lg font-medium">
//             Employee / Payroll / SalaryStructure
//           </span>
//         </div>
//       </div>
//       <div id="salary-structure" className="bg-white  mt-4 p-2">
//         <div className="text-lg font-semibold text-black pt-4 flex justify-between items-center">
//           <p>Current Salary</p>
//           <p>Effective Date: June 21, 2024</p>
//         </div>
//         <div className="overflow-x-scroll text-lg scrollbar-thin scrollbar-track-white scrollbar-thumb-[#2A546D] pt-4 mx-2">
//           <table className="min-w-full w-screen overflow-x-scroll text-nowrap">
//             <thead>
//               <tr className="bg-[#2a546d] text-white">
//                 <th className="p-3 border border-r-white border-[#2a546d] ">
//                   Components
//                 </th>
//                 <th className="p-3 border-r border-white">Monthly</th>
//                 <th className="p-3  border  border-[#2a546d]">Yearly</th>
//               </tr>
//             </thead>
//             <tbody className="">
//               {salaryData.map((item, index) => (
//                 <tr
//                   key={index}
//                   className="text-center text-black border  border-[#2a546d]"
//                 >
//                   <td className="py-3 border-r border-[#2a546d] ">
//                     {item.component}
//                   </td>
//                   <td className="py-3 border-r border-[#2a546d] ">
//                     {item.monthly}
//                   </td>
//                   <td className="py-3 border-r border-[#2a546d]  ">
//                     {item.yearly}
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//         <p className="text-sm py-10 pl-5">
//           * The effective date is the effective date of the most recent change
//           in the CTC/Gross or the structure breakup.
//         </p>
//       </div>
//     </div>
//   );
// }

// export default SalaryStructure;







import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { payrollAPI } from "../../../services/api";

const formatINR = (value) => {
  const num = Number(value) || 0;
  return `₹ ${num.toLocaleString("en-IN", {
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  })}`;
};

const formatDate = (iso) => {
  if (!iso) return "—";
  try {
    return new Date(iso).toLocaleDateString("en-GB", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  } catch {
    return iso;
  }
};

function SalaryStructure({ userId = null }) {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    let cancelled = false;

    const fetchStructure = async () => {
      setLoading(true);
      setError(null);
      try {
        const res = await payrollAPI.getSalaryStructure(userId);
        if (!cancelled) setData(res.data);
      } catch (err) {
        const detail = err?.response?.data?.detail;
        const message =
          typeof detail === "string"
            ? detail
            : "Failed to load salary structure";
        if (!cancelled) {
          setError(message);
          toast.error(message);
        }
      } finally {
        if (!cancelled) setLoading(false);
      }
    };

    fetchStructure();
    return () => { cancelled = true; };
  }, [userId]);

  const hasData =
    !loading && !error && data && data.components && data.components.length > 0;

  return (
    <div className="p-4 mt-4 min-h-screen">
      <div className="flex flex-col md:flex-row justify-between">
        <div>
          <span className="text-[#2A546D] text-sm lg:text-lg font-medium">
            Employee / Payroll / SalaryStructure
          </span>
        </div>
      </div>

      <div id="salary-structure" className="bg-white mt-4 p-2">
        {loading ? (
          <div className="text-center py-16 text-gray-500">
            Loading salary structure...
          </div>
        ) : error ? (
          <div className="text-center py-16 text-red-500">{error}</div>
        ) : !hasData ? (
          <div className="text-center py-16 text-gray-500">
            No salary structure has been configured yet.
            <br />
            <span className="text-sm">
              Please ask HR to add this employee to a payroll batch.
            </span>
          </div>
        ) : (
          <>
            <div className="text-lg font-semibold text-black pt-4 flex flex-col md:flex-row justify-between items-start md:items-center gap-2">
              <div>
                <p>Current Salary</p>
                {data.employeeName && (
                  <p className="text-sm font-normal text-gray-600 mt-1">
                    {data.employeeName}
                    {data.employeeId ? ` (${data.employeeId})` : ""}
                    {data.designation ? ` — ${data.designation}` : ""}
                  </p>
                )}
              </div>
              <p>Effective Date: {formatDate(data.effectiveDate)}</p>
            </div>

            <div className="overflow-x-scroll text-lg scrollbar-thin scrollbar-track-white scrollbar-thumb-[#2A546D] pt-4 mx-2">
              <table className="min-w-full w-screen overflow-x-scroll text-nowrap">
                <thead>
                  <tr className="bg-[#2a546d] text-white">
                    <th className="p-3 border border-r-white border-[#2a546d]">
                      Components
                    </th>
                    <th className="p-3 border-r border-white">Monthly</th>
                    <th className="p-3 border border-[#2a546d]">Yearly</th>
                  </tr>
                </thead>
                <tbody>
                  {data.components.map((item, index) => (
                    <tr
                      key={index}
                      className="text-center text-black border border-[#2a546d]"
                    >
                      <td className="py-3 border-r border-[#2a546d]">
                        {item.component}
                      </td>
                      <td className="py-3 border-r border-[#2a546d]">
                        {formatINR(item.monthly)}
                      </td>
                      <td className="py-3 border-r border-[#2a546d]">
                        {formatINR(item.yearly)}
                      </td>
                    </tr>
                  ))}

                  <tr className="text-center text-black border border-[#2a546d] bg-[#eef6ff] font-semibold">
                    <td className="py-3 border-r border-[#2a546d]">Total</td>
                    <td className="py-3 border-r border-[#2a546d]">
                      {formatINR(data.totals.monthly)}
                    </td>
                    <td className="py-3 border-r border-[#2a546d]">
                      {formatINR(data.totals.yearly)}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-sm py-10 pl-5">
              * The effective date is the effective date of the most recent
              change in the CTC/Gross or the structure breakup.
            </p>
          </>
        )}
      </div>
    </div>
  );
}

export default SalaryStructure;