import React, { useEffect, useState } from "react";
import { FaHeart, FaStar } from "react-icons/fa6";
import { CiHeart } from "react-icons/ci";
import { BsArrowRight } from "react-icons/bs";
import { useLocation } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

import Breadcrumb from "../../Breadcrumb";
import Navbar from "../../Navbar";
import CarImage from "./CarImage";
import CarTabContent from "./CarTabContent";
import CarTabNavigation from "./CarTabNavigation";
import SelectSlot from "./SelectSlot";

const DrivingDetails = () => {
  const [activeTab, setActiveTab] = useState("about");
  const [isSelectSlotOpen, setIsSelectSlotOpen] = useState(false);
  const [isInWishlist, setIsInWishlist] = useState(false);

  const location = useLocation();
  const { car } = location.state;

  const userId = localStorage.getItem("user_id");

  useEffect(() => {
    const checkWishlist = async () => {
      if (userId) {
        try {
          const response = await fetch(
            `http://localhost:3000/api/wishlist/${userId}`
          );
          const wishlistData = await response.json();

          // Check if car exists in the wishlist
          const isCarInWishlist = wishlistData.wishlist.some(
            (item) => item.id === car.id
          );
          setIsInWishlist(isCarInWishlist);
        } catch (error) {
          console.error("Error fetching wishlist:", error);
        }
      }
    };

    checkWishlist();
  }, [userId, car.id]);

  const addOrRemoveFromWishlist = async () => {
    if (!userId) {
      toast.error("User not logged in");
      return;
    }

    const body = { user_id: userId, practise_driving_id: car.id };

    const loadingToast = toast.loading(
      isInWishlist ? "Removing from wishlist..." : "Adding to wishlist..."
    );

    try {
      const response = await fetch(
        `http://localhost:3000/api/${
          isInWishlist ? "remove-course-from-wishlist" : "wishlist"
        }`,
        {
          method: isInWishlist ? "DELETE" : "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body),
        }
      );

      if (response.ok) {
        const successMessage = isInWishlist
          ? "Car removed from wishlist"
          : "Car added to wishlist";
        toast.success(successMessage, { id: loadingToast });
        setIsInWishlist(!isInWishlist);

        const data = await response.json();
      } else {
        toast.error("Failed to update wishlist", { id: loadingToast });
      }
    } catch (error) {
      console.error("Error updating wishlist:", error);
      toast.error("An error occurred while updating the wishlist", {
        id: loadingToast,
      });
    }
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
                  <p className="text-xs">{car.rating}</p>
                </div>
              </div>
              <span className="text-gray-500 text-xs font-normal">
                {car.brand}
              </span>
              <div className="flex items-end justify-between">
                <p className="text-lg font-semibold text-black">
                  {car.price.replace("$", "₹")}
                  <span className="text-gray-500 text-sm font-normal">
                    /hour
                  </span>
                </p>
                <FaHeart
                  className={`text-2xl cursor-pointer ${
                    isInWishlist ? "text-red-500" : "text-gray-500"
                  }`}
                  onClick={addOrRemoveFromWishlist}
                />
              </div>
              <button
                className="mt-10 flex items-center gap-10 bg-black rounded-lg text-white px-3 py-3"
                onClick={() => setIsSelectSlotOpen(true)}>
                <p className="text-sm">Select Slot</p>
                <BsArrowRight className="text-xl" />
              </button>
            </div>
          </div>
        </div>
        <CarTabNavigation activeTab={activeTab} setActiveTab={setActiveTab} />
        <CarTabContent activeTab={activeTab} car={car} />
      </div>
      {isSelectSlotOpen && (
        <SelectSlot handleClose={setIsSelectSlotOpen} car={car} />
      )}

      <Toaster />
    </div>
  );
};

export default DrivingDetails;
