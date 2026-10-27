import React, { useState } from "react";
import { IoMdMail } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import { BsCheck2Circle } from "react-icons/bs";

const Support = () => {
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [selectedDesignation, setSelectedDesignation] = useState("");
  const [designationDetails, setDesignationDetails] = useState({
    "Sathish Chiluveru (Account Owner)": {
      email: "sathish@spydtech.com",
      phone: "+91 9912457579",
    },
    "Balaji (Sales Associate)": {
      email: "balaji@spydtech.com",
      phone: "+91 8712457779",
    },
  });

  const showsuccess = (e) => {
    e.preventDefault();
    setSuccessMessage("Saved Successfully");
    setShowSuccessMessage(true);
    setTimeout(() => setShowSuccessMessage(false), 2000);
  };

  const handleSave = () => {
    setSuccessMessage("Saved Successfully");
    setShowSuccessMessage(true);
    setShowModal(false);
    setTimeout(() => setShowSuccessMessage(false), 2000);
  };

  const onclicking = () => {
    setShowModal(true);
  };

  const handleDesignationChange = (e) => {
    setSelectedDesignation(e.target.value);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setDesignationDetails((prevState) => ({
      ...prevState,
      [selectedDesignation]: {
        ...prevState[selectedDesignation],
        [name]: value,
      },
    }));
  };

  return (
    <div className="mt-4 p-4   min-h-screen text-lg font-normal">
      <div className="  flex flex-col md:flex-row justify-between">
        <div>
          <span className=" text-[#E65F2B] text-sm lg:text-lg font-medium">
            Admin / Support
          </span>
        </div>
      </div>
      <div className="flex justify-between items-center p-4 flex-wrap">
        <button
          onClick={onclicking}
          className="bg-[#E65F2B]  px-6 sm:px-12 text-white font-semibold py-2 sm:py-3 rounded-lg"
        >
          Edit
        </button>
      </div>
      <div className="flex flex-wrap md:mt-0 mx-4 p-4 lg:flex-nowrap w-full">
        <div className="flex-col w-full lg:w-3/5 gap-1">
          <div className="mb-9">
            <h3 className="md:text-xl text-lg mb-3">
              Sathish Chiluveru (Account Owner)
            </h3>
            <h3 className="flex items-center gap-3 text-base md:text-lg underline mb-2">
              <IoMdMail className="text-[#E65F2B]" />
              {designationDetails["Sathish Chiluveru (Account Owner)"].email}
            </h3>
            <h3 className="flex items-center gap-3 text-base md:text-lg">
              <FaPhoneAlt className="text-[#E65F2B]" />
              {designationDetails["Sathish Chiluveru (Account Owner)"].phone}
            </h3>
          </div>
          <div>
            <h3 className="md:text-xl text-lg mb-3">
              Balaji (Sales Associate)
            </h3>
            <h3 className="flex items-center gap-3 text-base md:text-lg underline mb-2">
              <IoMdMail className="text-[#E65F2B]" />
              {designationDetails["Balaji (Sales Associate)"].email}
            </h3>
            <h3 className="flex items-center gap-3 text-base md:text-lg">
              <FaPhoneAlt className="text-[#E65F2B]" />
              {designationDetails["Balaji (Sales Associate)"].phone}
            </h3>
          </div>
        </div>
        <div className="bg-white shadow-xl w-full lg:mt-0 mt-10 lg:w-[550px] px-4 py-6 sm:px-6 sm:py-8">
          <form onSubmit={showsuccess}>
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between px-2 sm:px-7 mb-4 sm:mb-7">
              <label className="sm:mb-0 mb-2 md:text-lg text-base">
                Subject
              </label>
              <input
                type="text"
                className="border-2 md:text-lg text-base border-[#E65F2B] rounded-md w-full sm:w-auto"
              />
            </div>
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between px-2 sm:px-7 mb-4 sm:mb-7">
              <label className="sm:mb-0 mb-2 md:text-lg text-base">
                Explain it for us
              </label>
              <input
                type="text"
                className="border-2 md:text-lg text-base border-[#E65F2B] rounded-md w-full sm:w-auto"
              />
            </div>
            <div className="flex justify-center mt-6">
              <button
                type="submit"
                className="bg-[#E65F2B] px-8 sm:px-12 text-white font-semibold py-2 sm:py-3 rounded-lg"
              >
                Save
              </button>
            </div>
          </form>
        </div>
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-[90%] sm:w-[600px]">
            <h3 className="text-lg font-semibold mb-4">Select Designation</h3>
            <select
              className="w-full p-2 border border-gray-300 rounded-lg mb-4"
              value={selectedDesignation}
              onChange={handleDesignationChange}
            >
              <option value="" disabled>
                Select Designation
              </option>
              {Object.keys(designationDetails).map((designation) => (
                <option key={designation} value={designation}>
                  {designation}
                </option>
              ))}
            </select>

            {selectedDesignation && (
              <div>
                <div className="mb-4">
                  <label>Email:</label>
                  <input
                    type="text"
                    className="w-full p-2 border border-gray-300 rounded-lg"
                    name="email"
                    value={designationDetails[selectedDesignation].email}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="mb-4">
                  <label>Phone:</label>
                  <input
                    type="text"
                    className="w-full p-2 border border-gray-300 rounded-lg"
                    name="phone"
                    value={designationDetails[selectedDesignation].phone}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
            )}
            <div className="flex justify-end mt-6">
              <button
                onClick={handleSave}
                className="bg-gradient-to-r focus:outline-none from-[#E65F2B] to-[#FFC252] px-6 sm:px-8 text-white font-semibold py-2 rounded-xl"
              >
                Confirm Save
              </button>
            </div>
          </div>
        </div>
      )}

      {showSuccessMessage && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 w-auto h-full flex justify-center items-center">
          <div className="text-white bg-gradient-to-b from-[#E65F2B] to-[#FFC252] w-[280px] sm:w-[320px] h-[180px] sm:h-[240px] py-4 sm:py-8 px-4 sm:px-16 rounded-lg flex flex-col justify-center items-center relative">
            <BsCheck2Circle className="text-4xl sm:text-6xl text-white mb-2 sm:mb-4" />
            <p className="text-center">{successMessage}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Support;
