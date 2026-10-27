import React from "react";
import { useEffect, useState } from "react";
const ReportInvoiceList = [
  {
    Invoice_Number: "#LA-0389",
    Client: "Lucid Pvt.",
    Date: "27 July, 2021",
    Type: "src/assets/hr/reports/Frame_Paypal.png",
    Status: "Approved",
    Amount: "$205",
  },
  {
    Invoice_Number: "#LA-0312",
    Client: "AUR Tech LLC.",
    Date: "13 July, 2021",
    Type: "src/assets/hr/reports/Frame_Paypal.png",
    Status: "Pending",
    Amount: "$205",
  },
  {
    Invoice_Number: "#LA-0222",
    Client: "Core Infoweb Pvt.",
    Date: "12 July, 2021",
    Type: "src/assets/hr/reports/Frame_masterCard.png",
    Status: "Approved",
    Amount: "$4,205",
  },
  {
    Invoice_Number: "#LA-0220",
    Client: "BT Technology",
    Date: "25 Jun, 2021",
    Type: "src/assets/hr/reports/Frame_masterCard.png",
    Status: "Pending",
    Amount: "$800",
  },
  {
    Invoice_Number: "#LA-0220",
    Client: "BT Technology",
    Date: "25 Jun, 2021",
    Type: "src/assets/hr/reports/Frame_Paypal.png",
    Status: "Approved",
    Amount: "$335",
  },
  {
    Invoice_Number: "#LA-0218",
    Client: "vPro Infoweb LLC.",
    Date: "07 Mar, 2021",
    Type: "src/assets/hr/reports/Frame_Paypal.png",
    Status: "Approved",
    Amount: "$355",
  },
  {
    Invoice_Number: "#LA-0218",
    Client: "vPro Infoweb LLC.",
    Date: "07 Mar, 2021",
    Type: "src/assets/hr/reports/Frame_Visa.png",
    Status: "Approved",
    Amount: "$335",
  },
];

const ReportInvoice = () => {
  const [ReportInvoiceData, setReportInvoiceData] = useState([]);
  useEffect(() => {
    setReportInvoiceData(ReportInvoiceData);
  }, []);
  return (
    <div className="mt-4 p-4 min-h-screen">
      <h2 className="text-[#0098F1] lg:text-lg  text-sm font-bold ">
        Report / Invoice
      </h2>
      <div className=" mt-5 overflow-x-scroll scrollbar-thin   scrollbar-track-white scrollbar-thumb-[#0098f1] pt-6 mx-4">
        <table className="min-w-full  w-screen overflow-x-scroll text-nowrap">
          <thead>
            <tr className="text-white bg-[#0098f1] border border-[#0098F1]">
              <th className="py-3  border-r border-white text-sm font-medium text-nowrap">
                Invoice Number
              </th>
              <th className="py-3  border-r border-white text-sm font-medium text-nowrap">
                Client
              </th>
              <th className="py-3  border-r border-white text-sm font-medium text-nowrap">
                Date
              </th>
              <th className="py-3  border-r border-white text-sm font-medium text-nowrap">
                Type
              </th>
              <th className="py-3  border-r border-white text-sm font-medium text-nowrap">
                Status
              </th>
              <th className="py-3  border-r border-white text-sm font-medium text-nowrap">
                Amount
              </th>
            </tr>
          </thead>
          <tbody>
            {ReportInvoiceList.map((item, index) => (
              <tr key={index} className="bg-white text-center border border-[#0098F1]">
                <td className="py-2  border-r border-[#0098f1]">
                  {item.Invoice_Number}
                </td>
                <td className="py-2  border-r border-[#0098f1]">
                  {item.Client}
                </td>
                <td className="py-2  border-r border-[#0098f1]">
                  {item.Date}
                </td>
                <td className="py-2  border-r border-[#0098f1] flex justify-center">
                  <img src={item.Type} alt="Type" className="" />
                </td>
                <td className="py-2  border-r border-[#0098f1]">
                  {item.Status === "Approved" ? (
                    <button
                      className="text-white py-1 w-28 rounded-xl bg-[#2A8F4C]"
                      
                    >
                      Approved
                    </button>
                  ) : (
                    <button
                      className="text-white py-1 w-28 rounded-xl bg-[#F78822] "
                     
                    >
                      Pending
                    </button>
                  )}
                </td>
                <td className="py-2 ">
                  {item.Amount}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ReportInvoice;
