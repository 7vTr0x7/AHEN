import React from "react";

import { FaAngleDown } from "react-icons/fa6";
import { CiHeart } from "react-icons/ci";

import { IoNotificationsOutline } from "react-icons/io5";

const Navbar = () => {
  return (
    <div className="bg-[#F3F4F6] shadow-md px-24 py-4 flex items-center justify-between">
      <div className="flex items-center gap-12">
        <div className="bg-black px-8 py-3 text-white font-semibold rounded-md ">
          Ahen
        </div>
        <div className="flex flex-col">
          <p className="text-[#808080] text-xs uppercase self-end">Location</p>

          <div className="text-sm flex items-center gap-2">
            <p className="m-0">Majwade Thane</p>
            <FaAngleDown />
          </div>
        </div>
      </div>
      <div className="flex items-center gap-5 text-xl">
        <CiHeart className="text-2xl" />
        <IoNotificationsOutline />

        <img
          alt="profile"
          src={"https://via.placeholder.com/300"}
          className="h-7 w-7 rounded-md"
        />
      </div>
    </div>
  );
};

export default Navbar;
