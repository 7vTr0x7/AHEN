import React, { useEffect, useState } from "react";
import cardImage1 from "../../assets/images/homeCardImage.png";
import { FaHeart } from "react-icons/fa";
import toast from "react-hot-toast"; // Import react-hot-toast for notifications

const WishlistCards = () => {
  const [data, setData] = useState([]);

  // Get userId from localStorage
  const userId = localStorage.getItem("user_id");

  useEffect(() => {
    const fetchWishlistData = async () => {
      if (userId) {
        try {
          const response = await fetch(
            `http://localhost:3000/api/wishlist/${userId}`
          );
          const wishlistData = await response.json();
          setData(wishlistData.wishlist);
        } catch (error) {
          console.error("Error fetching wishlist:", error);
        }
      }
    };

    fetchWishlistData();
  }, [userId]); // Effect runs when userId changes

  const removeFromWishlist = async (courseId) => {
    if (!userId) {
      toast.error("User not logged in");
      return;
    }

    const body = {
      user_id: userId,
      course_id: courseId,
    };

    // Show loading toast
    const loadingToast = toast.loading("Removing from wishlist...");

    try {
      const response = await fetch(
        "http://localhost:3000/api/remove-course-from-wishlist",
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(body),
        }
      );

      if (response.ok) {
        toast.success("Course removed from wishlist", { id: loadingToast });

        // Update state to remove the item from UI
        setData((prevData) =>
          prevData.filter((item) => item.courseId !== courseId)
        );
      } else {
        toast.error("Failed to remove course from wishlist", {
          id: loadingToast,
        });
      }
    } catch (error) {
      console.error("Error removing from wishlist:", error);
      toast.error("An error occurred while removing from wishlist", {
        id: loadingToast,
      });
    }
  };

  return (
    <div>
      {data && data.length === 0 ? (
        <p className="text-center text-gray-500">Your wishlist is empty.</p>
      ) : (
        data.map((info, index) => (
          <div key={index} className="bg-[#F3F4F6] p-4 mb-7 rounded-lg">
            <div className="bg-white rounded-lg relative">
              <img
                alt={info.id}
                src={cardImage1}
                className="w-full rounded-lg"
              />
              <FaHeart
                className="absolute right-2 top-2 cursor-pointer text-red-500"
                onClick={() => removeFromWishlist(info.id)} // Call remove function
              />
            </div>
            <p className="mt-2 text-sm font-medium">{info.title}</p>
            <div className="flex items-center gap-4">
              <p className="font-bold">
                ₹{info.price - (info.price * info.discount) / 100}
              </p>
              <p className="text-xs text-[#61C36D] font-semibold">
                {info.discount}% off
              </p>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default WishlistCards;
