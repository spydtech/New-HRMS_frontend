import React, { useEffect, useState } from "react";
import { TiMessages } from "react-icons/ti";

import HRRequestNotification from "./HrRequestNotification";
import PayrollNotifications from "./PayrollNotification";
import BillingNotification from "./BillingNotification";
import ReplyToEmail from "./ReplyToEmail";
import BirthdayReminder from "./BirthdayRemainder";
import WorkAnniversaries from "./WorkAnniversaries";

const NotificationNavigation = () => {
  const [activeCard, setActiveCard] = useState("card1");
  const [HrRequestActivityLog, HrRequestSetActivityLog] = useState([]);
  const [PayrollActivityLog, SetPayrollActivityLog] = useState([]);
  const [BillingActivityLog, SetBillingPayrollActivityLog] = useState([]);
  const [ReplyMailActivityLog, SetReplyMailActivityLog] = useState([]);
  const [WorkAnniversaryMailActivityLog, SetWorkAnniversaryMailActivityLog] =
    useState([]);
  const [
    BirthDayRemainderMailActivityLog,
    SetBirthDayRemainderMailActivityLog,
  ] = useState([]);

  // Function to fetch and sort logs from local storage
  const fetchAndSortLogs = (key, setLog) => {
    const log = JSON.parse(localStorage.getItem(key)) || [];
    const sortedLog = log.sort(
      (a, b) => new Date(b.timestamp) - new Date(a.timestamp)
    );
    setLog(sortedLog);
  };

  useEffect(() => {
    fetchAndSortLogs("activityLogHrRequest", HrRequestSetActivityLog);
  }, []);
  useEffect(() => {
    fetchAndSortLogs("activityLogPayrollRequest", SetPayrollActivityLog);
  }, []);
  useEffect(() => {
    fetchAndSortLogs("activityLogBilling", SetBillingPayrollActivityLog);
  }, []);
  useEffect(() => {
    fetchAndSortLogs("activityLogReplyMail", SetReplyMailActivityLog);
  }, []);
  useEffect(() => {
    fetchAndSortLogs(
      "activityLogWorkAnniversaryMail",
      SetWorkAnniversaryMailActivityLog
    );
  }, []);
  useEffect(() => {
    fetchAndSortLogs(
      "activityLogBirthDayRemainderMail",
      SetBirthDayRemainderMailActivityLog
    );
  }, []);

  const data = [
    { id: "card1", title: "HR Request Notification" },
    { id: "card2", title: "Payroll Notifications" },
    { id: "card3", title: "Billing Notification" },
    { id: "card4", title: "Reply To Email" },
    { id: "card5", title: "Birthday Reminder" },
    { id: "card6", title: "Work Anniversaries" },
  ];

  const handleCardClick = (cardId) => {
    setActiveCard(cardId);
  };

  const renderActiveComponent = () => {
    switch (activeCard) {
      case "card1":
        return <HRRequestNotification />;
      case "card2":
        return <PayrollNotifications />;
      case "card3":
        return <BillingNotification />;
      case "card4":
        return <ReplyToEmail />;
      case "card5":
        return <BirthdayReminder />;
      case "card6":
        return <WorkAnniversaries />;
      default:
        return <div>Select a leave type to see details.</div>;
    }
  };

  return (
    <div className="p-2 h-auto">
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-4">
        <div className="md:col-span-1 p-4 mt-4">
          <div className="flex flex-col  gap-4">
            {data.map(({ id, title }) => (
              <div
                key={id}
                className={`bg-white w-60  h-12 rounded text-center cursor-pointer flex items-center justify-center ${
                  activeCard === id
                    ? "text-white bg-gradient-to-r rounded-lg from-[#E65F2B] to-[#FFC252]"
                    : "text-[#E65F2B] rounded-lg bg-white"
                }`}
                onClick={() => handleCardClick(id)}
              >
                <div className="w-full md:w-64 h-[60px] text-center justify-center items-center flex">
                  <h3 className="">{title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="h-auto md:col-span-4 p-4">
          {renderActiveComponent()}
        </div>
      </div>

      <div className="mt-10 text-sm lg:text-lg h-screen overflow-y-scroll">
        <div className="flex px-4">
          <p className="">
            <TiMessages className="w-6 text-[#e65f2b] h-6" />
          </p>
          <p className="flex pl-1 font-medium text-lg text-[#e65f2b]">
            Activity
          </p>
        </div>
        <hr className="border border-[#e65f2b]" />
        <div className="mt-2   p-5 text-[#e65f2b]">
          {HrRequestActivityLog.length === 0 ? (
            <p></p>
          ) : (
            <>
              <p>HR Request activity</p>
              <ul className="list-disc list-inside">
                {HrRequestActivityLog.map((entry, index) => (
                  <li key={index} className="mb-2">
                    <strong>{entry.timestamp}:</strong> {entry.admin} -{" "}
                    {entry.action}
                  </li>
                ))}
              </ul>
              <hr className="border border-[#e65f2b]" />
            </>
          )}
        </div>

        <div className="p-5  text-[#e65f2b]">
          {PayrollActivityLog.length === 0 ? (
            <p></p>
          ) : (
            <>
              <p>Payroll activity</p>
              <ul className="list-disc list-inside">
                {PayrollActivityLog.map((entry, index) => (
                  <li key={index} className="mb-2">
                    <strong>{entry.timestamp}:</strong> {entry.admin} -{" "}
                    {entry.action}
                  </li>
                ))}
              </ul>
              <hr className="border border-[#e65f2b]" />
            </>
          )}
        </div>
        <div className="p-5   text-[#e65f2b]">
          {BillingActivityLog.length === 0 ? (
            <p></p>
          ) : (
            <>
              <p>Billing activity</p>
              <ul className="list-disc list-inside">
                {BillingActivityLog.map((entry, index) => (
                  <li key={index} className="mb-2">
                    <strong>{entry.timestamp}:</strong> {entry.admin} -{" "}
                    {entry.action}
                  </li>
                ))}
              </ul>
              <hr className="border border-[#e65f2b]" />
            </>
          )}
        </div>

        <div className="p-5   text-[#e65f2b]">
          {ReplyMailActivityLog.length === 0 ? (
            <p></p>
          ) : (
            <>
              <p>Reply Mail Activity</p>
              <ul className="list-disc list-inside">
                {ReplyMailActivityLog.map((entry, index) => (
                  <li key={index} className="mb-2">
                    <strong>{entry.timestamp}:</strong> {entry.admin} -{" "}
                    {entry.action}
                  </li>
                ))}
              </ul>
              <hr className="border border-[#e65f2b]" />
            </>
          )}
        </div>

        <div className="p-5  text-[#e65f2b]">
          {WorkAnniversaryMailActivityLog.length === 0 ? (
            <p></p>
          ) : (
            <>
              <p>Work Anniversary Mail Activity</p>
              <ul className="list-disc list-inside">
                {WorkAnniversaryMailActivityLog.map((entry, index) => (
                  <li key={index} className="mb-2">
                    <strong>{entry.timestamp}:</strong> {entry.admin} -{" "}
                    {entry.action}
                  </li>
                ))}
              </ul>
              <hr className="border border-[#e65f2b]" />
            </>
          )}
        </div>

        <div className="p-5   text-[#e65f2b]">
          {BirthDayRemainderMailActivityLog.length === 0 ? (
            <p></p>
          ) : (
            <>
              <p>Birthday Remainder Mail Activity</p>
              <ul className="list-disc list-inside">
                {BirthDayRemainderMailActivityLog.map((entry, index) => (
                  <li key={index} className="mb-2">
                    <strong>{entry.timestamp}:</strong> {entry.admin} -{" "}
                    {entry.action}
                  </li>
                ))}
              </ul>
              <hr className="border border-[#e65f2b]" />
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default NotificationNavigation;
