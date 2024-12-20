import React, { useState } from "react";
import Navbar from "../../../Navbar";
import Breadcrumb from "../../../Breadcrumb";
import drivingImage from "../../../../assets/images/driving.png";
import SessionTabNavigation from "./SessionTabNavigation";
import SessionTabContent from "./SessionTabContent";

import { CiCalendar } from "react-icons/ci";
import { LuArrowRight } from "react-icons/lu";

import { BsArrowRight } from "react-icons/bs";

const Session = () => {
  const [activeTab, setActiveTab] = useState("You'll learn");

  return (
    <div className="bg-[#F3F4F6] pb-20">
      <Navbar />
      <div className="px-4 sm:px-10 lg:px-24">
        <Breadcrumb />
        <div className="grid md:grid-cols-2 grid-cols-1 gap-5 mt-5">
          <div className="md:col-span-1 col-span-2">
            <img
              alt="driving"
              src={drivingImage}
              className="w-full  rounded-lg shadow-lg"
            />
            <div className="flex items-center justify-end  mt-6 ">
              <button className="bg-black text-white flex items-center gap-2 px-4 py-3 rounded-lg">
                <CiCalendar className="text-xl" />
                <p className="text-sm">Book Session</p>
                <BsArrowRight className="text-lg font-light ml-5" />
              </button>
            </div>
          </div>
          <div className="pl-2 md:col-span-1 col-span-2">
            <SessionTabNavigation
              activeTab={activeTab}
              setActiveTab={setActiveTab}
            />
            <SessionTabContent activeTab={activeTab} />
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default Session;
