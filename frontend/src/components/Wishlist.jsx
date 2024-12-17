import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { LuArrowLeft } from "react-icons/lu";
import { toggleOpenWishlist } from "../redux/slices/wishlistSlice";
import WishlistCards from "./Wishlist/WishlistCards";

const Wishlist = () => {
  const dispatch = useDispatch();
  const isWishlistOpen = useSelector((state) => state.wishlist.isWishlistOpen);

  const handleOpenWishlist = () => {
    dispatch(toggleOpenWishlist(false));
  };

  return (
    <div
      className={`absolute  right-0 top-0 h-full z-50 w-96 px-5 bg-white shadow-lg transform transition-transform duration-300 ease-in-out rounded-lg ${
        isWishlistOpen ? "translate-x-0" : "translate-x-full"
      }`}>
      <div className="flex items-center w-full relative">
        <LuArrowLeft
          className="absolute left-0 text-xl cursor-pointer"
          onClick={handleOpenWishlist}
        />
        <h2 className="flex-1 text-center p-4 font-semibold text-lg">
          Wishlist
        </h2>
      </div>
      <div className="overflow-y-auto max-h-screen px-4 pb-16">
        <WishlistCards />
      </div>
    </div>
  );
};

export default Wishlist;
