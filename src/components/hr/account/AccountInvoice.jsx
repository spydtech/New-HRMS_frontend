import React from "react";
import { useEffect, useState } from "react";

const InvoiceList = [
  {
    Invoice_Number: "#LA-0389",
    Client: "Lucid Pvt.",
    Date: "27 July, 2021",
    Type: "src/assets/hr/accounts/Frame_Visa.png",
    Status: "Approved",
    Amount: "$205",
  },
  {
    Invoice_Number: "#LA-0312",
    Client: "AUR Tech LLC.",
    Date: "13 July, 2021",
    Type: "src/assets/hr/accounts/Frame_masterCard.png",
    Status: "Pending",
    Amount: "$205",
  },
  {
    Invoice_Number: "#LA-0222",
    Client: "Core Infoweb Pvt.",
    Date: "12 July, 2021",
    Type: "src/assets/hr/accounts/Frame_Paypal.png",
    Status: "Approved",
    Amount: "$4,205",
  },
  {
    Invoice_Number: "#LA-0220",
    Client: "BT Technology",
    Date: "25 Jun, 2021",
    Type: "src/assets/hr/accounts/Frame_masterCard.png",
    Status: "Pending",
    Amount: "$800",
  },
  {
    Invoice_Number: "#LA-0220",
    Client: "BT Technology",
    Date: "25 Jun, 2021",
    Type: "src/assets/hr/accounts/Frame_Paypal.png",
    Status: "Approved",
    Amount: "$335",
  },
  {
    Invoice_Number: "#LA-0218",
    Client: "vPro Infoweb LLC.",
    Date: "07 Mar, 2021",
    Type: "src/assets/hr/accounts/Frame_Paypal.png",
    Status: "Approved",
    Amount: "$355",
  },
  {
    Invoice_Number: "#LA-0218",
    Client: "vPro Infoweb LLC.",
    Date: "07 Mar, 2021",
    Type: "src/assets/hr/accounts/Frame_Paypal.png",
    Status: "Approved",
    Amount: "$335",
  },
];

const AccountInvoice = () => {
  const [InvoiceData, setInvoiceData] = useState([]);
  useEffect(() => {
    setInvoiceData(InvoiceList);
  }, []);
  return (
    <div className="mt-4 min-h-screen p-4">
      <h1 className="text-[#0098F1] lg:text-lg text-sm font-bold ">
        <span>Accounts / Invoice</span>
      </h1>
      <div className="overflow-x-scroll scrollbar-thin   scrollbar-track-white scrollbar-thumb-[#0098f1] pt-6 mx-4">
        <table className="min-w-full  w-screen overflow-x-scroll text-nowrap">
          <thead>
            <tr className="text-white bg-[#0098f1] border border-[#0098F1]">
              <th className="py-2 px-2 border-r border-white text-sm font-medium text-nowrap">Invoice_Number</th>
              <th className="py-2 px-2 border-r border-white text-sm font-medium text-nowrap">Client </th>
              <th className="py-2 px-2 border-r border-white text-sm font-medium text-nowrap">Date</th>
              <th className="py-2 px-2 border-r border-white text-sm font-medium text-nowrap">Type</th>
              <th className="py-2 px-2 border-r border-white text-sm font-medium text-nowrap">Status</th>
              <th className="py-2 px-2 text-sm font-medium text-nowrap">Amount</th>
            </tr>
          </thead>
          <tbody>
            {InvoiceData.map((data) => (
              <tr key={data.id} className="bg-white text-center border border-[#0098F1]">
                <td className="py-2 px-2 border-r border-[#0098f1]">{data.Invoice_Number}</td>
                <td className="py-2 px-2 border-r border-[#0098f1]">{data.Client}</td>
                <td className="py-2 px-2 border-r border-[#0098f1]">{data.Date}</td>
                <td className="py-2 px-2 border-r border-[#0098f1] flex justify-center">
                  <img src={data.Type} alt="image" />
                </td>
                <td className="py-2 px-2 border-r border-[#0098f1]">
                  <p
                    type="button"
                    className={`${
                      data.Status === "Approved"
                        ? "bg-[#2A8F4C]"
                        : "bg-[#F78822]"
                    }  py-1 rounded-lg text-white text-center`}
                  >
                    {data.Status}
                  </p>
                </td>
                <td className="py-2 px-2 ">{data.Amount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AccountInvoice;
