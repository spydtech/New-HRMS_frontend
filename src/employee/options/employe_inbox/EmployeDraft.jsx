import React, { useState } from "react";
import unChecked from "../../../assets/project/inbox/uncheckbox.png";
import Checked from "../../../assets/project/inbox/checkbox.png";
import filledStar from "../../../assets/project/inbox/filledstar.png";
import unfilledstar from "../../../assets/project/inbox/unfilledstar.png";

const EmployeDraft = ({ draftMessage }) => {
  const [checkedStatus, setCheckedStatus] = useState(
    Array(draftMessage.length).fill(false)
  );
  const handleCheckboxToggle = (index) => {
    const newCheckedStatus = [...checkedStatus];
    newCheckedStatus[index] = !newCheckedStatus[index];
    setCheckedStatus(newCheckedStatus);
  };

  const getCurrentDate = () => {
    const date = new Date();
    const options = { month: "long", day: "numeric" };
    return date.toLocaleDateString(undefined, options);
  };

  return (
    <div className="rounded-r-xl min-w-[800px] border border-[#E65F2B] p-5">
      <h1 className="text-xl font-semibold mb-5">Draft</h1>
      <ul className="">
        {draftMessage.map((message, index) => (
          <li
            key={index}
            className=" cursor-pointer flex justify-between border-b py-3 group h-20"
          >
            <div className="flex gap-5">
              <button onClick={() => handleCheckboxToggle(index)}>
                <img
                  src={checkedStatus[index] ? Checked : unChecked}
                  alt="checkbox"
                />
              </button>
              <button className="">
                <img src={unfilledstar} alt="star" />
              </button>
              <div>
                <h1>{message.to}</h1>
                <p>{message.cc}</p>
              </div>
            </div>
            <div>
              <p className="group-hover:hidden">{getCurrentDate()}</p>
              <button
                onClick={() => onDeleteMessage(index)}
                className="hidden group-hover:block bg-red-500 p-2 text-xl text-white rounded-lg"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EmployeDraft;
