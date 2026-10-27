// import React, { useState } from "react";
// import { LiaQuestionCircle } from "react-icons/lia";

// const PayPeriod = () => {
//   const [selectedOption, setSelectedOption] = useState("yes");
//   const [selectHolidays, setSelectHolidays] = useState("yes");
//   const [percentOfGross, setPercentOfGross] = useState("20");
//   return (
//     <div className="my-5 flex flex-col lg:gap-5 gap-3">
//       <div className=" flex gap-2 md:gap-10 md:ml-[130px] lg:ml-[250px] text-[#0098f1] font-semibold">
//         <h1>Frequency :</h1>
//         <span>Monthly</span>
//       </div>

//       <div className="flex flex-col gap-2 md:flex-row md:ml-[24px] md:gap-10 lg:ml-[145px] ">
//         <div className="text-[#0098f1] font-semibold flex gap-1">
//           <h1 className="">Pay Period Start Day</h1>
//           <button className="md:-mt-5">
//             <LiaQuestionCircle className="text-lg" />
//           </button>
//           * :
//         </div>
//         <div>
//           <select className="max-md:w-full outline-none border border-[#0098f1] bg-transparent md:px-4 py-[2px] md:w-48 rounded-lg text-sm text-gray-600">
//             <option value="">Select the day</option>
//             <option value="">1st of month</option>
//           </select>
//           <p className="text-gray-600 text-xs m-1 font-semibold">
//             01 jul,2024 to 31 jul,2024
//           </p>
//         </div>
//       </div>

//       <div className=" flex max-md:items-center gap-2 flex-row md:gap-10 md:ml-[60px] lg:ml-[180px] text-[#0098f1] font-semibold">
//         <h1>Starting Month/Year:</h1>
//         <span className="max-md:text-sm">July 2024</span>
//       </div>

//       <div className="flex flex-col gap-2 md:flex-row md:gap-10 md:ml-[140px] lg:ml-[260px] ">
//         <h1 className="text-[#0098f1] font-semibold">Pay Days :</h1>
//         <div>
//           <select className="max-lg:w-full outline-none border border-[#0098f1] bg-transparent md:px-4 md:w-48 py-[2px] rounded-lg text-sm text-gray-600">
//             <option value="">Actual Days in Month</option>
//             {/* <option value="">1st of month</option> */}
//           </select>
//           <p className="text-gray-600 text-xs m-1 font-semibold">
//             Manage Work Schedule
//           </p>
//         </div>
//       </div>

//       <div className="flex max-md:justify-between md:gap-10 md:ml-[62px] lg:ml-[185px] ">
//         <div className="text-[#0098f1] font-semibold flex gap-1">
//           <h1 className="">Include Weekly offs :</h1>
//         </div>
//         <div className="max-md:mr-2">
//           <label className="text-[#0098f1] block font-semibold">
//             <input
//               type="radio"
//               name="offs"
//               className="mr-1"
//               value="yes"
//               checked={selectedOption === "yes"}
//               onChange={() => setSelectedOption("yes")}
//             />
//             Yes
//           </label>
//           <label className="text-[#0098f1] block font-semibold">
//             <input
//               type="radio"
//               name="offs"
//               className="mr-1"
//               value="no"
//               checked={selectedOption === "no"}
//               onChange={() => setSelectedOption("no")}
//             />
//             No
//           </label>
//         </div>
//       </div>

//       <div className="flex max-md:justify-between md:gap-10 md:ml-[62px] lg:ml-[185px] ">
//         <div className="text-[#0098f1] font-semibold flex gap-1">
//           <h1 className="">Include Weekly offs :</h1>
//         </div>
//         <div className="max-md:mr-2">
//           <label className="text-[#0098f1] block font-semibold">
//             <input
//               type="radio"
//               name="holidays"
//               className="mr-1"
//               value="yes"
//               checked={selectHolidays === "yes"}
//               onChange={() => setSelectHolidays("yes")}
//             />
//             Yes
//           </label>
//           <label className="text-[#0098f1] block font-semibold">
//             <input
//               type="radio"
//               name="holidays"
//               className="mr-1"
//               value="no"
//               checked={selectHolidays === "no"}
//               onChange={() => setSelectHolidays("no")}
//             />
//             No
//           </label>
//         </div>
//       </div>

//       <div className="flex flex-col gap-2 md:flex-row md:gap-10 md:ml-[80px] lg:ml-[205px]">
//         <h1 className=" text-[#0098f1] font-semibold">Basic Percentage :</h1>
//         <div className="border flex border-[#0098f1] md:p-1 rounded-lg md:w-48">
//           <input
//             type="text"
//             value={percentOfGross}
//             onChange={(e) => setPercentOfGross(e.target.value)}
//             className="border-r bg-transparent border-[#0098f1] text-gray-600 px-2 outline-none max-md:w-[75%] md:w-20"
//           />
//           <p className="max-md:px-2 md:mx-2 text-gray-600 text-nowrap">% of Gross</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PayPeriod;






import React, { useEffect, useState } from "react";
import { LiaQuestionCircle } from "react-icons/lia";
import { toast } from "react-toastify";
import { payrollAPI } from "../../../../services/api";

const PayPeriod = () => {
  const [selectedOption, setSelectedOption] = useState("yes");
  const [selectHolidays, setSelectHolidays] = useState("yes");
  const [percentOfGross, setPercentOfGross] = useState("20");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const res = await payrollAPI.getSettings();
        const s = res.data;
        setSelectedOption(s.include_weekly_offs ? "yes" : "no");
        setSelectHolidays(s.include_holidays ? "yes" : "no");
        setPercentOfGross(String(s.basic_percentage));
      } catch { toast.error("Failed to load"); }
      finally { setLoading(false); }
    })();
  }, []);

  useEffect(() => {
    if (loading) return;
    const t = setTimeout(async () => {
      try {
        await payrollAPI.updateSettings({
          include_weekly_offs: selectedOption === "yes",
          include_holidays: selectHolidays === "yes",
          basic_percentage: Number(percentOfGross) || 0,
        });
      } catch { /* silent */ }
    }, 500);
    return () => clearTimeout(t);
  }, [selectedOption, selectHolidays, percentOfGross, loading]);

  return (
    <div className="my-5 flex flex-col lg:gap-5 gap-3">
      <div className="flex gap-2 md:gap-10 md:ml-[130px] lg:ml-[250px] text-[#0098f1] font-semibold">
        <h1>Frequency :</h1><span>Monthly</span>
      </div>

      <div className="flex flex-col gap-2 md:flex-row md:ml-[24px] md:gap-10 lg:ml-[145px]">
        <div className="text-[#0098f1] font-semibold flex gap-1">
          <h1>Pay Period Start Day</h1>
          <button className="md:-mt-5"><LiaQuestionCircle className="text-lg" /></button>* :
        </div>
        <div>
          <select className="max-md:w-full outline-none border border-[#0098f1] bg-transparent md:px-4 py-[2px] md:w-48 rounded-lg text-sm text-gray-600">
            <option>1st of month</option>
          </select>
        </div>
      </div>

      {[
        { label: "Include Weekly offs :", value: selectedOption, setter: setSelectedOption, name: "offs" },
        { label: "Include Holidays :", value: selectHolidays, setter: setSelectHolidays, name: "holidays" },
      ].map((g) => (
        <div key={g.name} className="flex max-md:justify-between md:gap-10 md:ml-[62px] lg:ml-[185px]">
          <div className="text-[#0098f1] font-semibold"><h1>{g.label}</h1></div>
          <div>
            {["yes","no"].map((v) => (
              <label key={v} className="text-[#0098f1] block font-semibold">
                <input type="radio" name={g.name} className="mr-1" value={v}
                  checked={g.value === v} onChange={() => g.setter(v)} />{v === "yes" ? "Yes" : "No"}
              </label>
            ))}
          </div>
        </div>
      ))}

      <div className="flex flex-col gap-2 md:flex-row md:gap-10 md:ml-[80px] lg:ml-[205px]">
        <h1 className="text-[#0098f1] font-semibold">Basic Percentage :</h1>
        <div className="border flex border-[#0098f1] md:p-1 rounded-lg md:w-48">
          <input type="text" value={percentOfGross} onChange={(e) => setPercentOfGross(e.target.value)}
            className="border-r bg-transparent border-[#0098f1] text-gray-600 px-2 outline-none max-md:w-[75%] md:w-20" />
          <p className="max-md:px-2 md:mx-2 text-gray-600 text-nowrap">% of Gross</p>
        </div>
      </div>
    </div>
  );
};

export default PayPeriod;