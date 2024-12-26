import React, { useState } from "react";
import { FaStar } from "react-icons/fa6";
import { useLocation } from "react-router-dom";
import Breadcrumb from "../../Breadcrumb";
import Navbar from "../../Navbar";
import CarImage from "./CarImage";

import { BsArrowRight } from "react-icons/bs";
import { CiHeart } from "react-icons/ci";
import CarTabContent from "./CarTabContent";
import CarTabNavigation from "./CarTabNavigation";
import SelectSlot from "./SelectSlot";

const DrivingDetails = () => {
  const [activeTab, setActiveTab] = useState("about");
  const [isSelectSlotOpen, setIsSelectSlotOpen] = useState(false);

  const location = useLocation();

  const { car } = location.state;

  const tabContent = {
    about:
      "The Beginner Driving Course is designed for first-time drivers or those with minimal driving experience. Our certified instructors will guide you through every aspect of driving, from the fundamental vehicle controls to mastering road safety and traffic rules. By the end of this course, you'll gain the skills and confidence needed to drive independently and prepare for your driving test.",
  };

  return (
    <div className="bg-[#F3F4F6] pb-20 h-auto">
      <Navbar />
      <div className="px-4 sm:px-10 lg:px-24">
        <Breadcrumb />
        <div className="grid md:grid-cols-2 grid-cols-1 gap-3 mt-5">
          <div className="md:col-span-1 col-span-2">
            <CarImage car={car} image={car.images[0]} />
          </div>
          <div className="md:pl-8 pr-14 pt-4 md:col-span-1 col-span-2">
            <div>
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-bold mt-4">{car.name}</h3>

                <div className="flex items-center gap-1">
                  <FaStar className="text-sm text-yellow-300" />
                  <p className="text-xs ">{car.rating}</p>
                </div>
              </div>
              <span className="text-gray-500 text-xs font-normal">
                {car.brand}
              </span>

              <div className="flex items-end justify-between">
                <p className="text-lg font-semibold text-black">
                  {car.price}
                  <span className="text-gray-500 text-sm font-normal">
                    /hour
                  </span>
                </p>
                <CiHeart className="text-2xl" />
              </div>
              <button
                className="mt-10 flex items-center gap-10 bg-black rounded-lg  text-white px-3 py-3"
                onClick={() => setIsSelectSlotOpen(true)}>
                <p className="text-sm">Select Slot</p>
                <BsArrowRight className="text-xl" />
              </button>
            </div>
          </div>
        </div>
        <CarTabNavigation activeTab={activeTab} setActiveTab={setActiveTab} />
        <CarTabContent
          activeTab={activeTab}
          car={car.name}
          tabContent={tabContent}
        />
      </div>
      {isSelectSlotOpen && <SelectSlot handleClose={setIsSelectSlotOpen} />}
    </div>
  );
};

export default DrivingDetails;
