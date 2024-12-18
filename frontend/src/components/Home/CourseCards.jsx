import React from "react";
import cardImage1 from "../../assets/images/homeCardImage.png";
import { FaStar } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const CourseCards = () => {
  const data = [
    {
      id: 1,
      course: "Master Digital Product Design: UX Research & UI Design",
      session: 10,
      rating: 4.7,
    },
    {
      id: 2,
      course: "Master Digital Product Design: UX Research & UI Design",
      session: 10,
      rating: 4.7,
    },
    {
      id: 3,
      course: "Master Digital Product Design: UX Research & UI Design",
      session: 10,
      rating: 4.7,
    },
    {
      id: 4,
      course: "Master Digital Product Design: UX Research & UI Design",
      session: 10,
      rating: 4.7,
    },
  ];

  const navigate = useNavigate();

  return (
    <div>
      <div className="mb-4 flex justify-between items-center">
        <p className="text-xl ">Courses</p>
        <p
          className="text-xs text-[#8D8D8D]"
          onClick={() => navigate("/courses")}>
          View all
        </p>
      </div>
      <div className="flex flex-wrap gap-3 justify-between items-center">
        {data.slice(0, 4).map((info) => (
          <div
            className="w-full sm:w-[280px] bg-white pt-10 md:pt-14 pb-4 px-4 shadow-lg rounded-xl flex flex-col items-center justify-center hover:scale-105 transition-transform"
            key={info.id}>
            <div>
              <img alt={info.title} src={cardImage1} className="w-full h-32 " />
            </div>
            <div className="bg-[#EFF0F4] mt-6 px-3 py-2 rounded-md w-full md:w-auto">
              <p className="text-xs font-semibold text-start">{info.course}</p>
              <div className="flex justify-between items-center">
                <p className="text-xs text-[#959595] mt-2">
                  {info.session} Sessions
                </p>
                <div className="text-xs flex items-center gap-1  text-[#959595] mt-2">
                  <span>
                    <FaStar />
                  </span>
                  <span>{info.rating}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseCards;
