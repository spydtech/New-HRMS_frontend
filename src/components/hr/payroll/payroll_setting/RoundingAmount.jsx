// import React, { useState } from "react";
// import { RiChat3Line } from "react-icons/ri";

// const RoundingAmount = () => {
//   const [selectedOption, setSelectedOption] = useState("no-round");

//   return (
//     <div className="md:my-10 my-3 ">
//       <div className="flex flex-col max-md:items-center md:flex-row md:justify-center md:gap-x-2">
//         <h2 className="md:text-lg font-bold text-[#0098f1]">
//           Rounding Amount Type
//         </h2>
//         <div className="mt-1">
//           <label className="block text-[#0098f1] font-semibold">
//             <input
//               type="radio"
//               name="rounding"
//               value="no-round"
//               checked={selectedOption === "no-round"}
//               onChange={() => setSelectedOption("no-round")}
//               className="mr-2"
//             />
//             No Round
//           </label>
//           <label className="block text-[#0098f1] mt-2 font-semibold">
//             <input
//               type="radio"
//               name="rounding"
//               value="actual-round"
//               checked={selectedOption === "actual-round"}
//               onChange={() => setSelectedOption("actual-round")}
//               className="mr-2"
//             />
//             Actual Round
//           </label>
//           <label className="block text-[#0098f1] mt-2 font-semibold">
//             <input
//               type="radio"
//               name="rounding"
//               value="round-up"
//               checked={selectedOption === "round-up"}
//               onChange={() => setSelectedOption("round-up")}
//               className="mr-2"
//             />
//             Round Up
//           </label>
//           <label className="block text-[#0098f1] mt-2 font-semibold">
//             <input
//               type="radio"
//               name="rounding"
//               value="round-down"
//               checked={selectedOption === "round-down"}
//               onChange={() => setSelectedOption("round-down")}
//               className="mr-2"
//             />
//             Round Down
//           </label>
//         </div>
//       </div>
//       <button className="mt-20 md:mt-[120px] flex items-center text-[#0098f1] md:ml-16">
//         <RiChat3Line className="text-xl md:text-3xl " />
//         <h1 className="font-semibold">Activity</h1>
//       </button>
//     </div>
//   );
// };

// export default RoundingAmount;







import React, { useEffect, useState } from "react";
import { RiChat3Line } from "react-icons/ri";
import { toast } from "react-toastify";
import { payrollAPI } from "../../../../services/api";

const OPTIONS = [
  { key: "No Round", label: "No Round" },
  { key: "Actual Round", label: "Actual Round" },
  { key: "Round Up", label: "Round Up" },
  { key: "Round Down", label: "Round Down" },
];

const RoundingAmount = () => {
  const [selectedOption, setSelectedOption] = useState("No Round");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const res = await payrollAPI.getSettings();
        setSelectedOption(res.data.rounding_type || "No Round");
      } catch { toast.error("Failed to load"); }
      finally { setLoading(false); }
    })();
  }, []);

  const choose = async (key) => {
    setSelectedOption(key);
    try { await payrollAPI.updateSettings({ rounding_type: key }); toast.success("Saved"); }
    catch { toast.error("Failed to save"); }
  };

  return (
    <div className="md:my-10 my-3">
      <div className="flex flex-col max-md:items-center md:flex-row md:justify-center md:gap-x-2">
        <h2 className="md:text-lg font-bold text-[#0098f1]">Rounding Amount Type</h2>
        <div className="mt-1">
          {OPTIONS.map((o) => (
            <label key={o.key} className="block text-[#0098f1] mt-2 font-semibold">
              <input type="radio" name="rounding" value={o.key}
                checked={selectedOption === o.key} onChange={() => choose(o.key)} className="mr-2" />
              {o.label}
            </label>
          ))}
        </div>
      </div>
      <button className="mt-20 md:mt-[120px] flex items-center text-[#0098f1] md:ml-16">
        <RiChat3Line className="text-xl md:text-3xl" />
        <h1 className="font-semibold">Activity</h1>
      </button>
    </div>
  );
};

export default RoundingAmount;