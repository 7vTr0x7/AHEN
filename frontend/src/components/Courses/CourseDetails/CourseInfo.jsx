import React, { useEffect, useState } from "react";
import { FaHeart, FaStar } from "react-icons/fa6";
import { CiHeart } from "react-icons/ci";
import toast from "react-hot-toast";

const CourseInfo = ({ course }) => {
  const [isInWishlist, setIsInWishlist] = useState(false); // State to track if course is in wishlist

  const userId = localStorage.getItem("user_id"); // Get userId from localStorage

  useEffect(() => {
    const checkWishlist = async () => {
      if (userId) {
        try {
          const response = await fetch(
            `http://localhost:3000/api/wishlist/${userId}`
          );
          const wishlistData = await response.json();

          // Check if course exists in the wishlist
          const isCourseInWishlist = wishlistData.wishlist.some(
            (item) => item.id === course.courseId
          );
          setIsInWishlist(isCourseInWishlist);
        } catch (error) {
          console.error("Error fetching wishlist:", error);
        }
      }
    };

    checkWishlist();
  }, [userId, course.courseId]); // Re-run the check when userId or courseId changes

  const addOrRemoveFromWishlist = async () => {
    if (!userId) {
      toast.error("User not logged in");
      return;
    }

    const courseId = course.courseId;
    const body = { user_id: userId, course_id: courseId };

    // Show loading toast
    const loadingToast = toast.loading(
      isInWishlist ? "Removing from wishlist..." : "Adding to wishlist..."
    );

    try {
      const response = await fetch(
        `http://localhost:3000/api/${
          isInWishlist ? "remove-course-from-wishlist" : "wishlist"
        }`,
        {
          method: isInWishlist ? "DELETE" : "POST", // DELETE if in wishlist, POST if not
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body),
        }
      );

      if (response.ok) {
        const successMessage = isInWishlist
          ? "Course removed from wishlist"
          : "Course added to wishlist";
        toast.success(successMessage, { id: loadingToast });

        // Update wishlist state
        setIsInWishlist(!isInWishlist); // Toggle the wishlist state
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
    <div className="rounded-lg flex-1 p-6 flex flex-col justify-between">
      <div>
        <p className="text-xl font-medium">
          {course.title || course.courseTitle}
        </p>
        <div className="flex items-center justify-between pr-44">
          <div className="text-sm flex items-center gap-1 text-[#959595] mt-2">
            <span>
              <FaStar className="text-[#FF9F0D]" />
            </span>
            <span>{course?.starRating}</span>
            <span className="mx-2">({course?.reviews.length} ratings)</span>
          </div>
          <FaHeart
            className={`text-xl cursor-pointer ${
              isInWishlist ? "text-red-500" : "text-gray-500"
            }`} // Change color based on wishlist status
            onClick={addOrRemoveFromWishlist} // Call the function to add/remove from wishlist
          />
        </div>
        <div className="text-lg font-semibold flex items-center gap-3 text-[#959595] mt-2">
          <p className="font-bold text-2xl text-black">{`₹${
            course.price - (course.price * course.discount) / 100
          }`}</p>
          <span className="font-extralight line-through text-[#AAABAC]">{`₹${course.price}`}</span>
          <p className="text-xs text-[#61C36D] font-semibold">
            {course.discount}% off
          </p>
        </div>
        <p className="text-xs text-[#AAABAC] mt-1">Inclusive of all taxes</p>
        <p className="text-sm mt-1 font-medium text-[#616161]">
          {course.totalSession} Sessions
        </p>
      </div>
    </div>
  );
};

export default CourseInfo;
