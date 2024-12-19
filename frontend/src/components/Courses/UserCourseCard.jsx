import React from "react";

import cardImage1 from "../../assets/images/homeCardImage.png";
import { useNavigate } from "react-router-dom";

const UserCourseCard = ({ course }) => {
  const progressPercentage =
    (course?.completedSessions / course?.sessions) * 100;

  const navigate = useNavigate();

  return (
    <div
      className="w-full sm:w-[280px] bg-white pt-7 md:pt-7 pb-4 px-4 shadow-lg rounded-xl flex flex-col items-center justify-center hover:scale-105 transition-transform"
      onClick={() =>
        navigate(
          `/courses/user/${course.course.split(":")[0].replace(" ", "-")}`,
          {
            state: { course },
          }
        )
      }>
      <div>
        <img alt={course?.title} src={cardImage1} className="w-full h-32 " />
      </div>
      <div className="mt-6 px-3 py-2 rounded-md w-full md:w-auto">
        <p className="text-sm font-semibold text-start">{course?.course}</p>
        <p className="text-sm mt-1 text-start text-[#616161]">
          {course?.completedSessions} / {course?.sessions} Sessions
        </p>
        {/* Progress Bar */}
        <div className="w-full bg-[#F3F4F6] h-1 mt-2 rounded-full overflow-hidden">
          <div
            className="h-full bg-black"
            style={{ width: `${progressPercentage}%` }}></div>
        </div>
      </div>
    </div>
  );
};

export default UserCourseCard;
