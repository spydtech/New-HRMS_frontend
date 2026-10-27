// // import React, { useState } from "react";
// import React, { useState, useEffect } from "react";
// import logo from "../../../employeeAssets/spydlogo.png";
// import numberToWords from "number-to-words";

// function Payslip() {
//   const [payslipMonth, setPayslipMonth] = useState("August");
//   const [payslipYear, setPayslipYear] = useState("2024");
//   const [showForm, setShowForm] = useState(true);
//   const [yearDropdownOpen, setYearDropdownOpen] = useState(false);
//   const [monthDropdownOpen, setMonthDropdownOpen] = useState(false);

//   const years = ["2024"];
//   const months = ["June", "July", "August", "September"];

//   const employeeDetails = {
//     name: "USER NAME",
//     employeeNumber: "SDT0026",
//     dateJoined: "17-OCT-2023",
//     department: "Human Resources",
//     subDepartment: "N/A",
//     designation: "HR-EXECUTIVE",
//     paymentMode: "Bank Transfer",
//     bank: "HDFC bank Limited",
//     bankIFSC: "HDFC0001234",
//     bankAccount: "7788789898998",
//     PAN: "WEIRIR0982F",
//     UAN: "101788999922",
//     pfNumber: "N/A",
//   };

//   const salaryDetails = {
//     actualPayableDays: 31.0,
//     totalWorkingDays: 31.0,
//     lossOfPayDays: 0.0,
//     daysPayable: 31.0,
//   };

//   const earnings = [
//     { label: "Basic", amount: 13500.0 },
//     { label: "Conveyance Allowance", amount: 1600.0 },
//     { label: "HRA", amount: 6923.0 },
//     { label: "Medical Allowance", amount: 1250.0 },
//     { label: "Special Allowance", amount: 4073.0 },
//   ];

//   const contributions = [{ label: "PF Employee", amount: 1600.0 }];

//   const deductions = [{ label: "Professional Tax", amount: 200.0 }];

//   const calculateTotal = (items) =>
//     items.reduce((acc, item) => acc + item.amount, 0);

//   const totalEarnings = calculateTotal(earnings);
//   const totalContributions = calculateTotal(contributions);
//   const totalDeductions = calculateTotal(deductions);
//   const netSalary = totalEarnings - totalContributions - totalDeductions;

//   const handleDownload = () => {
//     setShowForm(false);
//   };
//   useEffect(() => {
//     localStorage.setItem("years", JSON.stringify(years));
//     localStorage.setItem("months", JSON.stringify(months));
//     localStorage.setItem("employeeDetails", JSON.stringify(employeeDetails));
//     localStorage.setItem("salaryDetails", JSON.stringify(salaryDetails));
//     localStorage.setItem("earnings", JSON.stringify(earnings));
//     localStorage.setItem("contributions", JSON.stringify(contributions));
//     localStorage.setItem("deductions", JSON.stringify(deductions));
//   }, []);

//   return (
//     <>
//       <div
//         id="main"
//         className="text-[24px] font-semibold  justify-center mt-4 flex   w-auto min-h-screen"
//       >
//         {showForm ? (
//           <div id="submain1" className=" ">
//             <form>
//               <div
//                 id="select"
//                 className="flex flex-col gap-x-5  px-10 justify-center items-center pt-14 mt-4 bg-white"
//               >
//                 <div className="flex flex-col sm:flex-row md:flex-row gap-x-5 ">
//                   <div className="relative inline-block text-left w-full sm:w-auto">
//                     <label className="block text-sm font-medium text-[#2A546D] mb-2">
//                       YEAR
//                     </label>
//                     <button
//                       type="button"
//                       className="px-3 py-1 text-lg text-[#2A546D] border-2 border-[#2A546D] z-50 bg-transparent w-[180px] lg:w-64 flex items-center justify-between"
//                       onClick={() => setYearDropdownOpen(!yearDropdownOpen)}
//                     >
//                       {payslipYear || "Select Year"}
//                       <span className="ml-2 text-[#2A546D]">&#9662;</span>
//                     </button>
//                     {yearDropdownOpen && (
//                       <div className="absolute mt-1 bg-white border border-[#2A546D] z-50 rounded-md w-full">
//                         {years.map((year) => (
//                           <button
//                             key={year}
//                             className="block px-3 text-[#2A546D] hover:text-white hover:bg-[#2A546D] w-full text-lg text-left"
//                             onClick={() => {
//                               setPayslipYear(year);
//                               setYearDropdownOpen(false);
//                             }}
//                           >
//                             {year}
//                           </button>
//                         ))}
//                       </div>
//                     )}
//                   </div>

//                   <div className="relative inline-block mt-6 md:mt-0 text-left w-full sm:w-auto">
//                     <label className="block text-sm font-medium text-[#2A546D] mb-2">
//                       MONTH
//                     </label>
//                     <button
//                       type="button"
//                       className="px-4 py-1 text-lg text-[#2A546D] border-2 z-50 border-[#2A546D] bg-transparent w-[180px] lg:w-64 flex items-center justify-between"
//                       onClick={() => setMonthDropdownOpen(!monthDropdownOpen)}
//                     >
//                       {payslipMonth || "Select Month"}
//                       <span className="ml-2 text-[#2A546D]">&#9662;</span>
//                     </button>
//                     {monthDropdownOpen && (
//                       <div className="absolute mt-1 bg-white border z-50 border-[#2A546D] rounded-md w-full">
//                         {months.map((month) => (
//                           <button
//                             key={month}
//                             className="block px-4 py-1 text-[#2A546D] hover:text-white hover:bg-[#2A546D] w-full text-left text-lg"
//                             onClick={() => {
//                               setPayslipMonth(month);
//                               setMonthDropdownOpen(false);
//                             }}
//                           >
//                             {month}
//                           </button>
//                         ))}
//                       </div>
//                     )}
//                   </div>
//                 </div>
//                 <div className="flex justify-center items-center pt-10 pb-8 text-lg">
//                   <button
//                     type="button"
//                     className="px-6 py-3 bg-[#2A546D] text-white font-medium rounded"
//                     onClick={handleDownload}
//                   >
//                     Generate
//                   </button>
//                 </div>
//               </div>
//             </form>
//           </div>
//         ) : (
//           <div
//             id="payslip"
//             className="submain2 mx-auto w-[250px] md:w-[460px]  lg:w-[720px] bg-white  md:m-2 mt-4 py-4 px-2 md:px-8"
//           >
//             <h1 className="lg:text-[24px] md:text-[18px] text-[10px]  text-start font-semibold">
//               <span className="text-black">PAYSLIP</span>{" "}
//               {payslipMonth.toUpperCase()} {payslipYear}
//             </h1>
//             <div className=" mt-2 h-auto flex flex-row justify-between ">
//               <div id="company" className="flex  flex-row items-start">
//                 <div className="leading-normal flex flex-col ">
//                   <span className="font-semibold pb-4 lg:text-[24px] text-[10px]  md:text-[18px] ">
//                     SPY D TECHNOLOGY PVT LTD
//                   </span>
//                   <span className="capitalize lg:w-[300px] w-[100px] md:w-[200px] text-[10px]  lg:text-[16px] md:text-[12px]">
//                     Meera Complex, Plot No 852, 2nd Floor, Madhapur, 100 Feet
//                     Road, Hyderabad, Telangana - 500081
//                   </span>
//                 </div>
//               </div>
//               <div className="w-auto relative  h-auto text-right">
//                 <img
//                   src={logo}
//                   className="lg:w-[150px] lg:h-[150px] md:w-[100px] md:h-[100px] h-[75px] w-[75px]"
//                   alt=""
//                 />
//               </div>
//             </div>

//             <div>
//               <h2 className="lg:text-xl text-[10px] pt-4 md:text-lg md:pt-2 lg:pt-0 text-[#2a546d] font-semibold mb-3">
//                 {employeeDetails.name}
//               </h2>
//               <hr className="border-[#2a546d] border-2"></hr>
//               <div className="main1 flex  justify-between items-center ">
//                 <div className="md:m-3  md:w-[150px] w-[60px] text-sm">
//                   <span className="block lg:text-[16px] text-[8px] md:text-[12px]">
//                     Employee ID
//                   </span>
//                   <span className="block md:text-[10px] text-[8px] lg:text-[14px]">
//                     {employeeDetails.employeeNumber}
//                   </span>
//                 </div>
//                 <div className="md:m-3  md:w-[150px] w-[60px] text-sm">
//                   <span className="block lg:text-[16px] text-[8px] md:text-[12px] ">
//                     Date Joined
//                   </span>
//                   <span className="block md:text-[10px] text-[8px] lg:text-[14px]">
//                     {employeeDetails.dateJoined}
//                   </span>
//                 </div>
//                 <div className="md:m-3  md:w-[150px] w-[60px] text-sm">
//                   <span className="block lg:text-[16px] text-[8px] md:text-[12px]">
//                     Department
//                   </span>
//                   <span className="block leading-3 md:leading-none md:text-[10px] text-[8px] lg:text-[14px]">
//                     {employeeDetails.department}
//                   </span>
//                 </div>
//                 <div className="md:m-3  md:w-[150px] w-[70px] text-sm">
//                   <span className="block lg:text-[16px] text-[8px] md:text-[12px]">
//                     Sub Department
//                   </span>
//                   <span className="block md:text-[10px] text-[8px] lg:text-[14px]">
//                     {employeeDetails.subDepartment}
//                   </span>
//                 </div>
//               </div>

//               {/* <hr className="bg-black border-2"></hr> */}
//               <div className="main2 flex  justify-between items-center">
//                 <div className="md:m-3  md:w-[150px] w-[60px] text-sm">
//                   <span className="block lg:text-[16px] text-[8px] md:text-[12px]">
//                     Designation
//                   </span>
//                   <span className="block md:text-[10px] text-[8px] lg:text-[14px]">
//                     {employeeDetails.designation}
//                   </span>
//                 </div>
//                 <div className="md:m-3  md:w-[150px] w-[60px] text-sm">
//                   <span className="block lg:text-[16px] text-[8px] md:text-[12px]">
//                     Payment Mode
//                   </span>
//                   <span className="block md:text-[10px] text-[8px] lg:text-[14px]">
//                     {employeeDetails.paymentMode}
//                   </span>
//                 </div>
//                 <div className="md:m-3  md:w-[150px] w-[60px] text-sm">
//                   <span className="block lg:text-[16px] text-[8px] md:text-[12px]">
//                     Bank
//                   </span>
//                   <span className="leading-3 md:leading-none block md:text-[10px] text-[8px] lg:text-[14px]">
//                     {employeeDetails.bank}
//                   </span>
//                 </div>
//                 <div className="md:m-3  md:w-[150px] w-[60px] text-sm">
//                   <span className="block lg:text-[16px] text-[8px] md:text-[12px]">
//                     IFSC Code
//                   </span>
//                   <span className="block md:text-[10px] text-[8px] lg:text-[14px]">
//                     {employeeDetails.bankIFSC}
//                   </span>
//                 </div>
//               </div>

//               <hr className="border-[#2a546d]  border-2"></hr>
//               <div className="main2 flex justify-between items-center">
//                 <div className="md:m-3  md:w-[150px] w-[60px] text-sm">
//                   <span className="block lg:text-[16px] text-[8px] md:text-[12px]">
//                     Bank Account
//                   </span>
//                   <span className="block md:text-[10px] text-[8px] lg:text-[14px]">
//                     {employeeDetails.bankAccount}
//                   </span>
//                 </div>
//                 <div className="md:m-3  md:w-[150px] w-[60px] text-sm">
//                   <span className="block lg:text-[16px] text-[8px] md:text-[12px]">
//                     PAN
//                   </span>
//                   <span className="block md:text-[10px] text-[8px] lg:text-[14px]">
//                     {employeeDetails.PAN}
//                   </span>
//                 </div>
//                 <div className="md:m-3  md:w-[150px] w-[60px] text-sm">
//                   <span className="block lg:text-[16px] text-[8px] md:text-[12px]">
//                     UAN
//                   </span>
//                   <span className="block md:text-[10px] text-[8px] lg:text-[14px]">
//                     {employeeDetails.UAN}
//                   </span>
//                 </div>
//                 <div className="md:m-3  md:w-[150px] w-[60px] text-sm">
//                   <span className="block lg:text-[16px] text-[8px] md:text-[12px]">
//                     PF Number
//                   </span>
//                   <span className="block md:text-[10px] text-[8px] lg:text-[14px]">
//                     {employeeDetails.pfNumber}
//                   </span>
//                 </div>
//               </div>
//             </div>

//             <div className="md:mt-3 mt-6">
//               <h2 className="md:text-lg text-[10px] lg:text-xl text-[#2a546d] font-semibold mb-3">
//                 SALARY DETAILS
//               </h2>
//               <hr className="border-[#2a546d]  border-2"></hr>

//               <div className="main2 py-3 flex justify-between  items-center">
//                 <div className="  text-sm">
//                   <span className="block md:leading-none leading-3 lg:text-[16px] text-[8px] md:text-[12px] md:text-wrap lg:text-nowrap">
//                     ACTUAL PAYABLE DAYS
//                   </span>
//                   <span className="block text-center md:text-[10px] lg:text-[14px]">
//                     {salaryDetails.actualPayableDays}
//                   </span>
//                 </div>
//                 <div className="  text-sm">
//                   <span className="block md:leading-none leading-3 lg:text-[16px] text-[8px] md:text-[12px] md:text-wrap lg:text-nowrap">
//                     TOTAL WORKING DAYS
//                   </span>
//                   <span className="block text-center md:text-[10px] lg:text-[14px]">
//                     {salaryDetails.totalWorkingDays}
//                   </span>
//                 </div>
//                 <div className="  text-sm">
//                   <span className="block md:leading-none leading-3 lg:text-[16px] text-[8px] md:text-[12px] md:text-wrap lg:text-nowrap">
//                     LOSS OF PAY DAYS
//                   </span>
//                   <span className="block md:text-[10px] text-[8px] lg:text-[14px] text-center text-wrap">
//                     {salaryDetails.lossOfPayDays}
//                   </span>
//                 </div>
//                 <div className="  text-sm">
//                   <span className="block md:leading-none leading-3 lg:text-[16px] text-[8px] md:text-[12px] md:text-wrap lg:text-nowrap ">
//                     DAYS PAYABLE
//                   </span>
//                   <span className="block md:text-[10px] text-[8px] lg:text-[14px] text-center">
//                     {salaryDetails.daysPayable}
//                   </span>
//                 </div>
//               </div>
//             </div>
//             <div>
//               <h2 className="md:text-lg text-[10px] lg:text-xl font-semibold text-[#2a546d] mb-3">
//                 EARNINGS
//               </h2>
//               <hr className="border-[#2a546d]  border-2"></hr>
//               <div
//                 id="main"
//                 className="w-auto h-auto grid-cols-2 grid mt-2 pb-2"
//               >
//                 <div
//                   id="earnings"
//                   className="h-auto border-r-4 border-gray-200"
//                 >
//                   <div id="submain" className="">
//                     {earnings.map((earning, index) => (
//                       <div
//                         key={index}
//                         className="lg:text-[16px] text-[8px] md:text-[12px] justify-between flex space-y-3 items-center pr-4"
//                       >
//                         <span>{earning.label}</span>
//                         <span>{earning.amount.toFixed(2)}</span>
//                       </div>
//                     ))}
//                     <div className="lg:text-xl text-[10px]  md:text-[16px] text-black justify-between flex items-center pt-2 pr-4">
//                       <span>Total Earnings (A)</span>
//                       <span className="lg:text-xl md:text-[14px]">
//                         {totalEarnings.toFixed(2)}
//                       </span>
//                     </div>
//                   </div>
//                 </div>
//                 <div id="contributions" className="pl-1  h-auto">
//                   <span className="md:text-[14px] text-[10px] lg:text-xl ">
//                     CONTRIBUTIONS
//                   </span>
//                   <div id="submain" className=" md:pt-3">
//                     {contributions.map((contribution, index) => (
//                       <div
//                         key={index}
//                         className="lg:text-[16px] text-[8px] md:text-[12px] space-y-3 justify-between flex items-center pr-4"
//                       >
//                         <span>{contribution.label}</span>
//                         <span>{contribution.amount.toFixed(2)}</span>
//                       </div>
//                     ))}
//                     <div className="md:text-[14px] text-[8px] lg:text-xl text-black justify-between flex items-center pr-4">
//                       <span>Total Contributions (B)</span>
//                       <span>{totalContributions.toFixed(2)}</span>
//                     </div>

//                     <div className="md:text-[14px]  text-[8px]  lg:text-xl text-nowrap text-black pt-4 justify-between flex items-center pr-4">
//                       <span>TAXES AND DEDUCTIONS</span>
//                     </div>
//                     {deductions.map((deduction, index) => (
//                       <div
//                         key={index}
//                         className="lg:text-[16px] text-[8px] md:text-[12px] justify-between flex items-center pr-4"
//                       >
//                         <span>{deduction.label}</span>
//                         <span>{deduction.amount.toFixed(2)}</span>
//                       </div>
//                     ))}
//                     <div className="md:text-[14px]  text-[8px]  lg:text-xl text-black justify-between flex items-center pt-2 pb-1 pr-4">
//                       <span>Total Deductions (C)</span>
//                       <span>{totalDeductions.toFixed(2)}</span>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <hr className="border-[#2a546d]  border-2"></hr>

//             <div className="lg:text-[16px] text-[10px] md:text-[12px] pt-1 justify-between items-center flex">
//               <span>Net Salary Payable (A-B-C)</span>
//               <span className="font-bold text-[10px] lg:text-xl md:text-[14px]">
//                 {netSalary.toFixed(2)}
//               </span>
//             </div>
//             <div className="lg:text-[16px] text-[10px] md:text-[12px] justify-between items-center flex text-black  md:pt-2">
//               <span>Net Salary in words</span>
//               <span className=" lg:text-xl text-[10px] md:text-[14px] capitalize">
//                 {numberToWords.toWords(netSalary)}
//               </span>
//             </div>

//             <div className="lg:text-[16px] text-[8px] md:text-[12px] text-black pt-2">
//               <span className="font-bold">**NOTE :</span>
//               <span className="italic pl-1">
//                 All Amounts displayed in this payslip are in
//               </span>
//               <span className="font-bold italic pl-1">INR</span>
//             </div>

//             <div className="lg:text-[14px] text-[8px] md:text-[10px] text-black pt-4">
//               <span className="font-sm">
//                 *This is computer generated statement, does not require any
//                 signature
//               </span>
//             </div>
//           </div>
//         )}
//       </div>
//     </>
//   );
// }

// export default Payslip;



import React, { useEffect, useMemo, useState } from "react";
import { PDFDocument, StandardFonts, rgb } from "pdf-lib";
import { saveAs } from "file-saver";
import { toast } from "react-toastify";
import { FiDownload, FiPrinter } from "react-icons/fi";
import logo from "../../../assets/logo/logo.png";
import { payrollAPI } from "../../../services/api";

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------
const MONTHS = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];

const formatCurrency = (n) =>
  Number(n || 0).toLocaleString("en-IN", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

const fmtDate = (iso) => {
  if (!iso) return "—";
  const d = new Date(iso);
  if (isNaN(d)) return "—";
  const m = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
             "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  return `${String(d.getDate()).padStart(2, "0")}-${m[d.getMonth()]}-${d.getFullYear()}`;
};

const numberToWords = (num) => {
  const n = Math.round(Number(num) || 0);
  if (!n) return "Zero";
  const ones = ["", "One", "Two", "Three", "Four", "Five", "Six", "Seven",
    "Eight", "Nine", "Ten", "Eleven", "Twelve", "Thirteen", "Fourteen",
    "Fifteen", "Sixteen", "Seventeen", "Eighteen", "Nineteen"];
  const tens = ["", "", "Twenty", "Thirty", "Forty", "Fifty", "Sixty",
    "Seventy", "Eighty", "Ninety"];
  const two = (x) =>
    x < 20 ? ones[x] : tens[Math.floor(x / 10)] + (x % 10 ? " " + ones[x % 10] : "");
  const three = (x) => {
    const h = Math.floor(x / 100);
    const r = x % 100;
    return (h ? ones[h] + " Hundred" + (r ? " " : "") : "") + two(r);
  };
  let out = "";
  const crore = Math.floor(n / 10000000);
  const lakh = Math.floor((n % 10000000) / 100000);
  const thousand = Math.floor((n % 100000) / 1000);
  const hundred = n % 1000;
  if (crore) out += two(crore) + " Crore ";
  if (lakh) out += two(lakh) + " Lakh ";
  if (thousand) out += two(thousand) + " Thousand ";
  if (hundred) out += three(hundred);
  return out.trim();
};

const periodOf = (slip) => {
  const base = slip.pay_period_start || slip.created_at;
  const d = new Date(base);
  return { year: d.getFullYear(), month: d.getMonth() };
};

// ---------------------------------------------------------------------------
// PDF builder
// ---------------------------------------------------------------------------
const buildPayslipPDF = async (slip, logoBytes) => {
  const pdfDoc = await PDFDocument.create();
  const A4_W = 595;
  const A4_H = 842;

  const times = await pdfDoc.embedFont(StandardFonts.TimesRoman);
  const timesBold = await pdfDoc.embedFont(StandardFonts.TimesRomanBold);
  const helv = await pdfDoc.embedFont(StandardFonts.Helvetica);
  const helvBold = await pdfDoc.embedFont(StandardFonts.HelveticaBold);

  const page = pdfDoc.addPage([A4_W, A4_H]);
  const { width } = page.getSize();

  const BLACK = rgb(0, 0, 0);
  const DARK = rgb(0.12, 0.12, 0.12);
  const GREY_BG = rgb(0.94, 0.94, 0.94);
  const LINE_GREY = rgb(0.75, 0.75, 0.75);
  const MUTED = rgb(0.35, 0.35, 0.35);

  let logoImage = null;
  try {
    if (logoBytes) logoImage = await pdfDoc.embedPng(logoBytes);
  } catch {
    /* no logo */
  }

  const u = slip.user || {};
  const periodDate = new Date(slip.pay_period_start || slip.created_at);
  const monthName = MONTHS[periodDate.getMonth()];
  const yearNum = periodDate.getFullYear();

  const center = (text, y, font, size, color = BLACK) => {
    const w = font.widthOfTextAtSize(text, size);
    page.drawText(text, { x: (width - w) / 2, y, size, font, color });
  };

  const rightAlign = (text, rightX, y, font, size, color = BLACK) => {
    const w = font.widthOfTextAtSize(text, size);
    page.drawText(text, { x: rightX - w, y, size, font, color });
  };

  // =====================================================================
  // HEADER
  // =====================================================================

  // Big company title
  center("SPY D TECHNOLOGY", 775, timesBold, 15);

  // ---- Logo (left) + centered address ----
  const logoLeftX = 45;
  const logoTopY = 760;
  const logoW = 115;

  if (logoImage) {
    const ar = logoImage.height / logoImage.width;
    const lh = logoW * ar;
    page.drawImage(logoImage, {
      x: logoLeftX,
      y: logoTopY - lh,
      width: logoW,
      height: lh,
    });
  }

  // Address centered on the page (two lines)
  const addrCenterY = logoTopY - 10;
  center(
    "505/B-508, Fifth Floor, Sandhya Techno-1, Raidurg, Pan Maktha Village,",
    addrCenterY,
    helv,
    8
  );
  center(
    "Serilingampally Mandal, RR Dist, Hyderabad-500081",
    addrCenterY - 11,
    helv,
    8
  );

  // CIN centered
  center("CIN: U62020TS2023PTC173263", 700, helv, 10);

  // Payslip month/year
  center(`Payslip for the Month of ${monthName}, ${yearNum}`, 670, times, 15);

  // =====================================================================
  // EMPLOYEE DETAILS
  // =====================================================================
  const marginX = 42;
  const rightX = width - 42;
  const tableW = rightX - marginX;
  const midX = marginX + tableW / 2;

  const empTop = 645;
  const empRowH = 18;
  const empRows = 6;
  const empH = empRows * empRowH;
  const empBottom = empTop - empH;

  page.drawRectangle({
    x: marginX,
    y: empBottom,
    width: tableW,
    height: empH,
    borderColor: BLACK,
    borderWidth: 0.8,
  });
  page.drawLine({
    start: { x: midX, y: empBottom },
    end: { x: midX, y: empTop },
    thickness: 0.8,
    color: BLACK,
  });

  const leftEmp = [
    ["Name:", u.name || "—"],
    ["Designation:", u.designation || "—"],
    ["Department:", u.department || "—"],
    ["Location:", "Hyderabad"],
    ["Effective Work Days:", "30"],
    ["LOP:", Number(slip.lop_days || 0).toFixed(1)],
  ];
  const rightEmp = [
    ["Employee ID:", u.employeeId || "—"],
    ["Bank Name:", u.bankName || "HDFC BANK"],
    ["Bank Account No.:", u.bankAccount || "—"],
    ["PAN No.:", u.panNumber || "—"],
    ["UAN No.:", u.uanNumber || "—"],
    ["", ""],
  ];

  const drawEmpRow = (label, value, startX, rowTop, labelWidth) => {
    page.drawText(label, {
      x: startX + 8,
      y: rowTop - empRowH + 6,
      size: 9,
      font: helv,
      color: BLACK,
    });
    page.drawText(String(value), {
      x: startX + labelWidth,
      y: rowTop - empRowH + 6,
      size: 9,
      font: helvBold,
      color: BLACK,
    });
  };

  leftEmp.forEach((row, i) => {
    const rowTop = empTop - i * empRowH;
    drawEmpRow(row[0], row[1], marginX, rowTop, 110);
    if (i < empRows - 1) {
      page.drawLine({
        start: { x: marginX, y: rowTop - empRowH },
        end: { x: midX, y: rowTop - empRowH },
        thickness: 0.4,
        color: LINE_GREY,
      });
    }
  });
  rightEmp.forEach((row, i) => {
    if (!row[0]) return;
    const rowTop = empTop - i * empRowH;
    drawEmpRow(row[0], row[1], midX, rowTop, 110);
    if (i < empRows - 1) {
      page.drawLine({
        start: { x: midX, y: rowTop - empRowH },
        end: { x: rightX, y: rowTop - empRowH },
        thickness: 0.4,
        color: LINE_GREY,
      });
    }
  });

  // =====================================================================
  // EARNINGS / DEDUCTIONS
  // =====================================================================
  let y = empBottom - 25;

  const leftTableX = marginX;
  const rightTableX = midX;
  const leftTableW = midX - marginX;
  const rightTableW = rightX - midX;

  const headerH = 22;

  page.drawRectangle({
    x: leftTableX,
    y: y - headerH,
    width: leftTableW,
    height: headerH,
    borderColor: BLACK,
    borderWidth: 0.8,
    color: GREY_BG,
  });
  page.drawRectangle({
    x: rightTableX,
    y: y - headerH,
    width: rightTableW,
    height: headerH,
    borderColor: BLACK,
    borderWidth: 0.8,
    color: GREY_BG,
  });
  page.drawText("Earnings", {
    x: leftTableX + 10,
    y: y - headerH + 7,
    size: 10,
    font: helvBold,
    color: BLACK,
  });
  rightAlign("Amount", leftTableX + leftTableW - 10, y - headerH + 7, helvBold, 10);
  page.drawText("Deductions", {
    x: rightTableX + 10,
    y: y - headerH + 7,
    size: 10,
    font: helvBold,
    color: BLACK,
  });
  rightAlign("Amount", rightTableX + rightTableW - 10, y - headerH + 7, helvBold, 10);

  y -= headerH;

  const medical = 1250;
  const conveyance = 1600;
  const special = Math.max(
    0,
    Number(slip.allowances || 0) - medical - conveyance
  );

  const earningsRows = [
    ["Basic", Number(slip.basic)],
    ["HRA", Number(slip.hra)],
    ["Medical Allowance", medical],
    ["Conveyance Allowance", conveyance],
    ["Special Allowance", special],
  ];
  const deductionsRows = [
    ["PF Employee", Number(slip.pf_employee)],
    ["PT", Number(slip.professional_tax)],
    ["", null],
    ["", null],
    ["", null],
  ];

  const bodyRows = earningsRows.length;
  const bodyRowH = 20;
  const bodyH = bodyRows * bodyRowH;
  const bodyBottom = y - bodyH;

  page.drawRectangle({
    x: leftTableX,
    y: bodyBottom,
    width: leftTableW,
    height: bodyH,
    borderColor: BLACK,
    borderWidth: 0.8,
  });
  page.drawRectangle({
    x: rightTableX,
    y: bodyBottom,
    width: rightTableW,
    height: bodyH,
    borderColor: BLACK,
    borderWidth: 0.8,
  });

  earningsRows.forEach((row, i) => {
    const rowTop = y - i * bodyRowH;
    page.drawText(row[0], {
      x: leftTableX + 10,
      y: rowTop - bodyRowH + 7,
      size: 9,
      font: helv,
      color: DARK,
    });
    rightAlign(
      formatCurrency(row[1]),
      leftTableX + leftTableW - 10,
      rowTop - bodyRowH + 7,
      helv,
      9,
      DARK
    );
    if (i < bodyRows - 1) {
      page.drawLine({
        start: { x: leftTableX, y: rowTop - bodyRowH },
        end: { x: leftTableX + leftTableW, y: rowTop - bodyRowH },
        thickness: 0.4,
        color: LINE_GREY,
      });
    }
  });

  deductionsRows.forEach((row, i) => {
    const rowTop = y - i * bodyRowH;
    if (row[0]) {
      page.drawText(row[0], {
        x: rightTableX + 10,
        y: rowTop - bodyRowH + 7,
        size: 9,
        font: helv,
        color: DARK,
      });
      rightAlign(
        formatCurrency(row[1]),
        rightTableX + rightTableW - 10,
        rowTop - bodyRowH + 7,
        helv,
        9,
        DARK
      );
    }
    if (i < bodyRows - 1) {
      page.drawLine({
        start: { x: rightTableX, y: rowTop - bodyRowH },
        end: { x: rightTableX + rightTableW, y: rowTop - bodyRowH },
        thickness: 0.4,
        color: LINE_GREY,
      });
    }
  });

  y = bodyBottom;

  const totalRowH = 22;

  page.drawRectangle({
    x: leftTableX,
    y: y - totalRowH,
    width: leftTableW,
    height: totalRowH,
    borderColor: BLACK,
    borderWidth: 0.8,
    color: GREY_BG,
  });
  page.drawRectangle({
    x: rightTableX,
    y: y - totalRowH,
    width: rightTableW,
    height: totalRowH,
    borderColor: BLACK,
    borderWidth: 0.8,
    color: GREY_BG,
  });

  page.drawText("Total Earnings (Rs)", {
    x: leftTableX + 10,
    y: y - totalRowH + 7,
    size: 10,
    font: helvBold,
    color: BLACK,
  });
  rightAlign(
    formatCurrency(Number(slip.gross)),
    leftTableX + leftTableW - 10,
    y - totalRowH + 7,
    helvBold,
    10
  );

  page.drawText("Total Deductions (Rs)", {
    x: rightTableX + 10,
    y: y - totalRowH + 7,
    size: 10,
    font: helvBold,
    color: BLACK,
  });
  rightAlign(
    formatCurrency(Number(slip.total_deductions)),
    rightTableX + rightTableW - 10,
    y - totalRowH + 7,
    helvBold,
    10
  );

  y -= totalRowH + 26;

  // NET PAY
  page.drawText("Net Pay For The Month:", {
    x: marginX,
    y,
    size: 11,
    font: helvBold,
    color: BLACK,
  });
  page.drawText(formatCurrency(Number(slip.net_amount)), {
    x: marginX + 132,
    y,
    size: 11,
    font: helvBold,
    color: BLACK,
  });

  y -= 24;

  page.drawText(`(Rupees ${numberToWords(slip.net_amount)} Only)`, {
    x: marginX,
    y,
    size: 9,
    font: helv,
    color: MUTED,
  });

  // FOOTER
  page.drawLine({
    start: { x: marginX, y: 92 },
    end: { x: rightX, y: 92 },
    thickness: 1.2,
    color: BLACK,
  });

  center(
    "This is a system generated payslip and does not require signature.",
    72,
    helv,
    10
  );

  return await pdfDoc.save();
};

// ---------------------------------------------------------------------------
// Main component
// ---------------------------------------------------------------------------
function Payslip() {
  const [payslips, setPayslips] = useState([]);
  const [pendingRuns, setPendingRuns] = useState([]);
  const [loading, setLoading] = useState(true);

  const [selectedYear, setSelectedYear] = useState("");
  const [selectedMonth, setSelectedMonth] = useState("");
  const [preview, setPreview] = useState(null);
  const [generating, setGenerating] = useState(false);
  const [printing, setPrinting] = useState(false);

  useEffect(() => {
    (async () => {
      setLoading(true);
      try {
        const slipsRes = await payrollAPI.listPayslips({});
        setPayslips(Array.isArray(slipsRes.data) ? slipsRes.data : []);
      } catch (err) {
        const d = err?.response?.data?.detail;
        toast.error(
          typeof d === "string" ? d : err?.message || "Failed to load payslips"
        );
        setPayslips([]);
      }

      try {
        const statusRes = await payrollAPI.myPayrollStatus();
        const all = Array.isArray(statusRes.data) ? statusRes.data : [];
        setPendingRuns(all.filter((r) => !r.canDownload));
      } catch {
        setPendingRuns([]);
      }

      setLoading(false);
    })();
  }, []);

  const years = useMemo(() => {
    const set = new Set();
    payslips.forEach((p) => set.add(periodOf(p).year));
    return Array.from(set).sort((a, b) => b - a);
  }, [payslips]);

  const monthsForYear = useMemo(() => {
    if (!selectedYear) return [];
    const y = Number(selectedYear);
    const set = new Set();
    payslips.forEach((p) => {
      const per = periodOf(p);
      if (per.year === y) set.add(per.month);
    });
    return Array.from(set).sort((a, b) => a - b);
  }, [payslips, selectedYear]);

  useEffect(() => {
    if (!selectedYear && years.length) setSelectedYear(String(years[0]));
  }, [years, selectedYear]);

  useEffect(() => {
    if (!selectedYear || !monthsForYear.length) {
      setSelectedMonth("");
      return;
    }
    if (!selectedMonth || !monthsForYear.includes(Number(selectedMonth))) {
      setSelectedMonth(String(monthsForYear[monthsForYear.length - 1]));
    }
  }, [selectedYear, monthsForYear, selectedMonth]);

  const matchedSlip = useMemo(() => {
    if (!selectedYear || !selectedMonth) return null;
    const y = Number(selectedYear);
    const m = Number(selectedMonth);
    return (
      payslips.find((p) => {
        const per = periodOf(p);
        return per.year === y && per.month === m;
      }) || null
    );
  }, [payslips, selectedYear, selectedMonth]);

  const handleGenerate = () => {
    if (!matchedSlip) {
      toast.error("No published payslip for the selected month.");
      return;
    }
    setPreview(matchedSlip);
  };

  const fetchLogoBytes = async () => {
    try {
      const r = await fetch(logo);
      return await r.arrayBuffer();
    } catch {
      return null;
    }
  };

  const handleDownloadPDF = async () => {
    if (!preview) return;
    setGenerating(true);
    try {
      const logoBytes = await fetchLogoBytes();
      const bytes = await buildPayslipPDF(preview, logoBytes);
      const per = periodOf(preview);
      saveAs(
        new Blob([bytes], { type: "application/pdf" }),
        `Payslip_${preview.user?.name?.replace(/\s+/g, "_") || "Employee"}_${MONTHS[per.month]}_${per.year}.pdf`
      );
      toast.success("Payslip downloaded");
    } catch (err) {
      console.error("[Payslip] PDF generation failed:", err);
      toast.error("Failed to generate PDF");
    } finally {
      setGenerating(false);
    }
  };

  const handlePrintPDF = async () => {
    if (!preview) return;
    setPrinting(true);
    try {
      const logoBytes = await fetchLogoBytes();
      const bytes = await buildPayslipPDF(preview, logoBytes);
      const blob = new Blob([bytes], { type: "application/pdf" });
      const url = URL.createObjectURL(blob);

      // Open in a hidden iframe so we can auto-trigger print
      const iframe = document.createElement("iframe");
      iframe.style.position = "fixed";
      iframe.style.right = "0";
      iframe.style.bottom = "0";
      iframe.style.width = "0";
      iframe.style.height = "0";
      iframe.style.border = "0";
      iframe.src = url;

      iframe.onload = () => {
        try {
          iframe.contentWindow.focus();
          iframe.contentWindow.print();
        } catch (e) {
          // Fallback: open in a new tab if iframe print is blocked
          window.open(url, "_blank");
        }
        // Clean up the object URL after the print dialog appears
        setTimeout(() => {
          URL.revokeObjectURL(url);
          document.body.removeChild(iframe);
        }, 60000);
      };

      document.body.appendChild(iframe);
    } catch (err) {
      console.error("[Payslip] Print failed:", err);
      toast.error("Failed to print payslip");
    } finally {
      setPrinting(false);
    }
  };

  return (
    <>
      <div className="text-[24px] font-semibold justify-center mt-4 flex w-auto min-h-screen">
        {!preview ? (
          <div className="px-10 w-full">
            {loading ? (
              <div className="text-sm text-gray-500 py-10 text-center">
                Loading payslips...
              </div>
            ) : payslips.length === 0 ? (
              <div className="max-w-2xl mx-auto pt-14">
                <div className="bg-white rounded-lg shadow p-8 text-center">
                  <h2 className="text-xl font-bold text-[#2A546D] mb-2">
                    No payslips available yet
                  </h2>
                  <p className="text-sm text-gray-600 mb-4">
                    Your payslip will become available here once HR publishes
                    the payroll for the month.
                  </p>
                </div>

                {pendingRuns.length > 0 && (
                  <div className="mt-6 bg-yellow-50 border border-yellow-200 rounded-lg p-5">
                    <h3 className="text-sm font-bold text-yellow-800 mb-3">
                      Payroll in progress
                    </h3>
                    <ul className="space-y-2">
                      {pendingRuns.map((r) => {
                        const d = new Date(r.payPeriodStart);
                        return (
                          <li
                            key={r.payrollRunId}
                            className="flex justify-between items-center text-sm"
                          >
                            <span className="text-gray-700">
                              <b>
                                {MONTHS[d.getMonth()]} {d.getFullYear()}
                              </b>{" "}
                              · {r.payrollType}
                            </span>
                            <span className="text-xs px-2 py-0.5 rounded bg-yellow-200 text-yellow-900 font-semibold">
                              {r.status}
                            </span>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                )}
              </div>
            ) : (
              <div className="flex flex-col gap-x-5 px-10 justify-center items-center pt-14 mt-4 bg-white mx-auto max-w-3xl rounded-lg shadow">
                <div className="flex flex-col sm:flex-row md:flex-row gap-x-5">
                  <div className="relative inline-block text-left w-full sm:w-auto">
                    <label className="block text-sm font-medium text-[#2A546D] mb-2">
                      YEAR
                    </label>
                    <select
                      value={selectedYear}
                      onChange={(e) => setSelectedYear(e.target.value)}
                      className="px-3 py-1 text-lg text-[#2A546D] border-2 border-[#2A546D] bg-transparent w-[180px] lg:w-64 rounded"
                    >
                      <option value="">Select Year</option>
                      {years.map((y) => (
                        <option key={y} value={y}>
                          {y}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="relative inline-block mt-6 md:mt-0 text-left w-full sm:w-auto">
                    <label className="block text-sm font-medium text-[#2A546D] mb-2">
                      MONTH
                    </label>
                    <select
                      value={selectedMonth}
                      onChange={(e) => setSelectedMonth(e.target.value)}
                      disabled={!selectedYear || monthsForYear.length === 0}
                      className="px-4 py-1 text-lg text-[#2A546D] border-2 border-[#2A546D] bg-transparent w-[180px] lg:w-64 rounded disabled:opacity-50"
                    >
                      <option value="">Select Month</option>
                      {monthsForYear.map((m) => (
                        <option key={m} value={m}>
                          {MONTHS[m]}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="flex justify-center items-center pt-10 pb-8 text-lg">
                  <button
                    type="button"
                    disabled={!matchedSlip}
                    onClick={handleGenerate}
                    className="px-6 py-3 bg-[#2A546D] text-white font-medium rounded disabled:opacity-50"
                  >
                    Generate
                  </button>
                </div>

                {matchedSlip && (
                  <p className="text-sm text-gray-500 pb-6">
                    Payslip found for{" "}
                    <b>
                      {MONTHS[Number(selectedMonth)]} {selectedYear}
                    </b>
                    {" · "}
                    Net ₹{formatCurrency(matchedSlip.net_amount)}
                  </p>
                )}
              </div>
            )}
          </div>
        ) : (
          <div className="mx-auto w-[250px] md:w-[460px] lg:w-[720px] bg-white md:m-2 mt-4 py-4 px-2 md:px-8 rounded shadow">
            <div className="flex justify-between mb-3">
              <button
                onClick={() => setPreview(null)}
                className="text-sm px-3 py-1 bg-gray-200 rounded"
              >
                ← Back
              </button>

              <div className="flex gap-2">
                <button
                  onClick={handlePrintPDF}
                  disabled={printing}
                  title="Print payslip"
                  className={`flex items-center gap-1 text-sm px-3 py-1 rounded text-white ${
                    printing ? "bg-gray-400" : "bg-[#2A546D] hover:opacity-90"
                  }`}
                >
                  <FiPrinter />
                  {printing ? "Preparing..." : "Print"}
                </button>
                <button
                  onClick={handleDownloadPDF}
                  disabled={generating}
                  title="Download payslip PDF"
                  className={`flex items-center gap-1 text-sm px-3 py-1 rounded text-white ${
                    generating ? "bg-gray-400" : "bg-[#2A546D] hover:opacity-90"
                  }`}
                >
                  <FiDownload />
                  {generating ? "Generating..." : "Download"}
                </button>
              </div>
            </div>

            <h1 className="lg:text-[24px] md:text-[18px] text-[10px] text-start font-semibold">
              <span className="text-black">PAYSLIP</span>{" "}
              {MONTHS[periodOf(preview).month].toUpperCase()}{" "}
              {periodOf(preview).year}
            </h1>

            <div className="mt-2 h-auto flex flex-row justify-between">
              <div className="flex flex-row items-start">
                <div className="leading-normal flex flex-col">
                  <span className="font-semibold pb-4 lg:text-[24px] text-[10px] md:text-[18px]">
                    SPY D TECHNOLOGY PVT LTD
                  </span>
                  <span className="capitalize lg:w-[300px] w-[100px] md:w-[200px] text-[10px] lg:text-[16px] md:text-[12px]">
                    Meera Complex, Plot No 852, 2nd Floor, Madhapur, 100 Feet
                    Road, Hyderabad, Telangana - 500081
                  </span>
                </div>
              </div>
              <div className="w-auto relative h-auto text-right">
                <img
                  src={logo}
                  className="lg:w-[150px] lg:h-[150px] md:w-[100px] md:h-[100px] h-[75px] w-[75px]"
                  alt=""
                />
              </div>
            </div>

            <div>
              <h2 className="lg:text-xl text-[10px] pt-4 md:text-lg md:pt-2 lg:pt-0 text-[#2a546d] font-semibold mb-3">
                {preview.user?.name || "—"}
              </h2>
              <hr className="border-[#2a546d] border-2" />
              <div className="flex justify-between items-center">
                <Field label="Employee ID" value={preview.user?.employeeId || "—"} />
                <Field label="Date Joined" value={fmtDate(preview.user?.dateOfJoining)} />
                <Field label="Designation" value={preview.user?.designation || "—"} />
                <Field
                  label="Pay Period"
                  value={`${fmtDate(preview.pay_period_start)} to ${fmtDate(preview.pay_period_end)}`}
                />
              </div>
            </div>

            <div className="md:mt-3 mt-6">
              <h2 className="md:text-lg text-[10px] lg:text-xl text-[#2a546d] font-semibold mb-3">
                SALARY DETAILS
              </h2>
              <hr className="border-[#2a546d] border-2" />
              <div className="py-3 flex justify-between items-center">
                <Day label="ACTUAL PAYABLE DAYS" value="30.0" />
                <Day label="TOTAL WORKING DAYS" value="30.0" />
                <Day label="LOSS OF PAY DAYS" value={Number(preview.lop_days || 0).toFixed(1)} />
                <Day label="DAYS PAYABLE" value="30.0" />
              </div>
            </div>

            <div>
              <h2 className="md:text-lg text-[10px] lg:text-xl font-semibold text-[#2a546d] mb-3">
                EARNINGS
              </h2>
              <hr className="border-[#2a546d] border-2" />
              <div className="w-auto h-auto grid-cols-2 grid mt-2 pb-2">
                <div className="h-auto border-r-4 border-gray-200">
                  <div>
                    <Row label="Basic" value={Number(preview.basic)} />
                    <Row label="House Rent Allowance (H.R.A)" value={Number(preview.hra)} />
                    <Row label="Other Allowances" value={Number(preview.allowances)} />
                    <div className="lg:text-xl text-[10px] md:text-[16px] text-black justify-between flex items-center pt-2 pr-4">
                      <span>Total Earnings (A)</span>
                      <span>{formatCurrency(preview.gross)}</span>
                    </div>
                  </div>
                </div>
                <div className="pl-1 h-auto">
                  <span className="md:text-[14px] text-[10px] lg:text-xl">
                    CONTRIBUTIONS
                  </span>
                  <div className="md:pt-3">
                    <Row label="PF Employee" value={Number(preview.pf_employee)} />
                    <Row label="PF Employer" value={Number(preview.pf_employer)} />
                    <Row label="ESI Employee" value={Number(preview.esi_employee)} />
                    <Row label="ESI Employer" value={Number(preview.esi_employer)} />
                    <div className="md:text-[14px] text-[8px] lg:text-xl text-nowrap text-black pt-4 justify-between flex items-center pr-4">
                      <span>TAXES AND DEDUCTIONS</span>
                    </div>
                    <Row label="Professional Tax" value={Number(preview.professional_tax)} />
                    <Row label="Income Tax" value={Number(preview.income_tax)} />
                    <Row label="Surcharge" value={Number(preview.surcharge)} />
                    <Row label="Cess" value={Number(preview.cess)} />
                    <Row label="Loss of Pay" value={Number(preview.lop_amount)} />
                    <div className="md:text-[14px] text-[8px] lg:text-xl text-black justify-between flex items-center pt-2 pb-1 pr-4">
                      <span>Total Deductions (C)</span>
                      <span>{formatCurrency(preview.total_deductions)}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <hr className="border-[#2a546d] border-2" />
            <div className="lg:text-[16px] text-[10px] md:text-[12px] pt-1 justify-between items-center flex">
              <span>Net Salary Payable (A-B-C)</span>
              <span className="font-bold text-[10px] lg:text-xl md:text-[14px]">
                {formatCurrency(preview.net_amount)}
              </span>
            </div>

            <div className="lg:text-[16px] text-[10px] md:text-[12px] justify-between items-center flex text-black md:pt-2">
              <span>Net Salary in words</span>
              <span className="lg:text-xl text-[10px] md:text-[14px] capitalize">
                {numberToWords(preview.net_amount)} Only
              </span>
            </div>

            <div className="lg:text-[16px] text-[8px] md:text-[12px] text-black pt-2">
              <span className="font-bold">**NOTE :</span>
              <span className="italic pl-1">
                All Amounts displayed in this payslip are in
              </span>
              <span className="font-bold italic pl-1">INR</span>
            </div>

            <div className="lg:text-[14px] text-[8px] md:text-[10px] text-black pt-4">
              <span>
                *This is a computer generated statement, does not require any
                signature
              </span>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

// ---------------------------------------------------------------------------
// Presentational helpers
// ---------------------------------------------------------------------------
const Field = ({ label, value }) => (
  <div className="md:m-3 md:w-[150px] w-[60px] text-sm">
    <span className="block lg:text-[16px] text-[8px] md:text-[12px]">
      {label}
    </span>
    <span className="block md:text-[10px] text-[8px] lg:text-[14px]">
      {value}
    </span>
  </div>
);

const Day = ({ label, value }) => (
  <div className="text-sm">
    <span className="block md:leading-none leading-3 lg:text-[16px] text-[8px] md:text-[12px] md:text-wrap lg:text-nowrap">
      {label}
    </span>
    <span className="block text-center md:text-[10px] lg:text-[14px]">
      {value}
    </span>
  </div>
);

const Row = ({ label, value }) => (
  <div className="lg:text-[16px] text-[8px] md:text-[12px] justify-between flex space-y-3 items-center pr-4">
    <span>{label}</span>
    <span>{formatCurrency(value)}</span>
  </div>
);

export default Payslip;