import React from "react";

import { FaAngleDown } from "react-icons/fa6";
import { CiHeart } from "react-icons/ci";
import { IoNotificationsOutline } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { toggleOpenWishlist } from "../redux/slices/wishlistSlice";
import { useNavigate } from "react-router-dom";
import { IoNotifications } from "react-icons/io5";
import { toggleOpenNotification } from "../redux/slices/notificationSlice";
import Notification from "./Notification";
import { toggleOpenUserLogin } from "../redux/slices/userSlice";

const Navbar = () => {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const isNotificationOpen = useSelector(
    (state) => state.notification.isNotificationOpen
  );

  const handleOpenWishlist = () => {
    dispatch(toggleOpenWishlist(true));
  };

  const openNotificationHandler = () => {
    dispatch(toggleOpenNotification(true));
  };
  const openLoginHandler = () => {
    dispatch(toggleOpenUserLogin(true));
  };
  const closeNotificationHandler = () => {
    dispatch(toggleOpenNotification(false));
  };

  return (
    <>
      <div className="bg-[#F3F4F6] relative z-50 shadow-md px-4 py-4 flex items-center justify-between sm:px-12 md:px-24 select-none">
        <div className="flex items-center gap-4 sm:gap-12">
          <div
            className="bg-black px-4 py-2 text-white font-semibold rounded-md text-sm sm:text-base cursor-pointer"
            onClick={() => navigate("/")}>
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
          <div className="relative">
            {isNotificationOpen ? (
              <IoNotifications
                className="text-xl md:text-xl cursor-pointer"
                onClick={closeNotificationHandler}
              />
            ) : (
              <IoNotificationsOutline
                className="text-xl md:text-xl cursor-pointer"
                onClick={openNotificationHandler}
              />
            )}
            {isNotificationOpen && <Notification />}
          </div>
          <img
            alt="profile"
            src={"https://via.placeholder.com/300"}
            className="h-7 w-7 rounded-md border-2 border-gray-300"
            onClick={openLoginHandler}
          />
        </div>
      </div>
    </>
  );
};

export default Navbar;
