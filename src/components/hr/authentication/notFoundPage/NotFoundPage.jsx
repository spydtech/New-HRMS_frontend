import React from "react";
import { IoMdHome } from "react-icons/io";
import { FaChevronLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
const NotFoundPage = () => {
  return (
    <div className="flex items-center   justify-center  min-h-screen bg-[#0098F1]">
      <div
        className="bg-white p-4 m-4  max-w-lg text-white rounded-xl shadow-md text-start w-full"
        style={{
          background:
            "linear-gradient(180deg, rgba(0, 88, 139, 0.1936) 0%, rgba(0, 88, 139, 0.1936) 100%)",
        }}
      >
        <div className="">
          <h1 className="text-lg pb-4 text-white  mb-2">404 Oops!</h1>
          <p className="text-lg pb-4 mb-4">Page Not Found</p>
        </div>
        <div className=" text-center">
          <p className=" mb-6 pb-4">
            The page you were looking for could not be found, please{" "}
            <a href="#" className="underline">
              Contact Us
            </a>{" "}
            to report this issue.
          </p>
          <div className="flex justify-center space-x-4">
            <Link  to="/">
            
            <button className="flex items-center bg-white w-36 h-14  text-[#E65F2B] px-4 py-2  rounded hover:bg-slate-100">
              <FaChevronLeft className="text-[#E65F2B] mb-[px]  text-xl" />
              Go Back
            </button>
            </Link>
            <Link to="/">
            
            <button className="flex items-center bg-white w-36 h-14  text-[#E65F2B] px-4 py-2 rounded hover:bg-slate-100">
              <IoMdHome className="text-[#E65F2B] mb-[3px] mr-2 text-xl " />
              Home
            </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
