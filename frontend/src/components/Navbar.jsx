import React from "react";

import { FaAngleDown } from "react-icons/fa6";
import { CiHeart } from "react-icons/ci";
import { IoNotificationsOutline } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { toggleOpenWishlist } from "../redux/slices/wishlistSlice";

const Navbar = () => {
  const dispatch = useDispatch();

  const handleOpenWishlist = () => {
    dispatch(toggleOpenWishlist(true));
  };

  return (
    <div className="bg-[#F3F4F6] relative z-50 shadow-md px-4 py-4 flex items-center justify-between sm:px-12 md:px-24">
      <div className="flex items-center gap-4 sm:gap-12">
        <div className="bg-black px-4 py-2 text-white font-semibold rounded-md text-sm sm:text-base">
          Ahen
        </div>
        <div className="flex flex-col items-end ">
          <p className="text-[#808080] text-xs uppercase">Location</p>
          <div className="text-sm flex items-center gap-2">
            <p className="m-0">Majwade Thane</p>
            <FaAngleDown />
          </div>
        </div>
      </div>

      <div className="flex items-center gap-3 md:gap-5 text-lg md:text-xl">
        <CiHeart
          className="text-xl md:text-2xl cursor-pointer"
          onClick={handleOpenWishlist}
        />
        <IoNotificationsOutline className="text-xl md:text-2xl" />
        <img
          alt="profile"
          src={"https://via.placeholder.com/300"}
          className="h-7 w-7 rounded-md border-2 border-gray-300"
        />
      </div>
    </div>
  );
};

export default Navbar;
