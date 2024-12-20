import React from "react";
import { FaStar } from "react-icons/fa6";

import cardImage1 from "../assets/images/homeCardImage.png";
import { useNavigate } from "react-router-dom";

const CourseCard = ({ course }) => {
  const navigate = useNavigate();

  return (
    <div
      className="w-full sm:w-[280px] bg-white pt-10 md:pt-14 pb-4 px-4 shadow-lg rounded-xl flex flex-col items-center justify-center hover:scale-105 transition-transform cursor-pointer"
      onClick={() =>
        navigate(`/courses/${course.course.split(":")[0].replace(" ", "-")}`, {
          state: { course },
        })
      }>
      <div>
        <img alt={course?.course} src={cardImage1} className="w-full h-32 " />
      </div>
      <div className="bg-[#EFF0F4] mt-6 px-3 py-2 rounded-md w-full md:w-auto">
        <p className="text-xs font-semibold text-start">{course?.course}</p>
        <div className="flex justify-between items-center">
          <p className="text-xs text-[#959595] mt-2">
            {course?.session} Sessions
          </p>
          <div className="text-xs flex items-center gap-1  text-[#959595] mt-2">
            <span>
              <FaStar />
            </span>
            <span>{course?.starRating}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;