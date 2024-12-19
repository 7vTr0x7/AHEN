import React, { useState } from "react";
import { FiMinus, FiPlus } from "react-icons/fi";
import { FaStar, FaRegStar } from "react-icons/fa";
import { FaCheck } from "react-icons/fa6";

import { IoDocumentTextOutline } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { toggleOpenReport } from "../../../redux/slices/reportSlice";

const reviewsData = [
  {
    id: 1,
    name: "Jenny Wilson",
    date: "Dec 10, 2024",
    rating: 4,
    comment:
      "Very nice and comfortable hotel, thank you for accompanying my vacation.",
  },
  {
    id: 2,
    name: "Guy Hawkins",
    date: "Dec 10, 2024",
    rating: 5,
    comment:
      "Very nice and comfortable hotel, thank you for accompanying my vacation.",
  },
  {
    id: 3,
    name: "Kristin Watson",
    date: "Dec 10, 2024",
    rating: 3,
    comment:
      "Very nice and comfortable hotel, thank you for accompanying my vacation.",
  },
];

const UserTabContent = ({
  activeTab,
  tabContent,
  daysData,
  toggleDropdown,
  openIndex,
}) => {
  const dispatch = useDispatch();

  const handleOpenReport = () => {
    dispatch(toggleOpenReport(true));
  };

  const renderStars = (rating) => {
    const totalStars = 5;
    return Array.from({ length: totalStars }, (_, index) =>
      index < rating ? (
        <FaStar key={index} className="text-black" />
      ) : (
        <FaStar key={index} className="text-gray-400" />
      )
    );
  };

  const renderLessons = (lessons) => {
    let bookSessionIndex = lessons.findIndex(
      (lesson, index) =>
        !lesson.completed && (index === 0 || lessons[index - 1].completed)
    );

    return lessons.map((lesson, index) => (
      <div key={index} className="flex items-center py-5 pl-6 relative">
        {index !== lessons.length - 1 && (
          <span className="absolute left-[38px] top-14 h-2/5 border-l-[1px] border-black"></span>
        )}
        <div
          className={`w-7 h-7 flex items-center justify-center text-gray-700 font-bold rounded-md mr-4 ${
            lesson.completed ? "bg-black text-white" : "bg-gray-100"
          }`}>
          {lesson.completed ? <FaCheck /> : lesson.day}
        </div>
        <p className="text-gray-700">{lesson.lesson}</p>
        <div className="ml-auto pr-4">
          {lesson.completed ? (
            <button
              className="text-black flex gap-2 items-center px-2 py-1 rounded-md text-[11px] border border-black"
              onClick={handleOpenReport}>
              <IoDocumentTextOutline className="text-sm" />
              <p>View Report</p>
            </button>
          ) : bookSessionIndex === index ? (
            <button className=" px-3 py-1 rounded-md text-[11px] bg-black text-white border border-black">
              <p>Schedule Session</p>
            </button>
          ) : null}
        </div>
      </div>
    ));
  };

  return (
    <div className="mt-8 grid grid-cols-2 text-sm">
      <div className="md:col-span-1 col-span-2 rounded-lg">
        {activeTab === "courseContent" ? (
          <div className="mx-auto">
            {daysData.map((day, index) => (
              <div
                key={index}
                className="border-gray-300 mb-5 bg-white rounded-lg shadow-lg">
                <div
                  className="flex justify-between items-center p-4 cursor-pointer"
                  onClick={() => toggleDropdown(index)}>
                  <h2 className="text-sm font-semibold">{day.title}</h2>
                  {openIndex === index ? (
                    <FiMinus className="text-xl text-gray-600" />
                  ) : (
                    <FiPlus className="text-xl text-gray-600" />
                  )}
                </div>
                {openIndex === index && (
                  <div className="border-gray-300">
                    {renderLessons(day.lessons)}
                  </div>
                )}
              </div>
            ))}
          </div>
        ) : activeTab === "reviews" ? (
          <div className="bg-white p-4 shadow-lg rounded-md">
            {reviewsData.map((review) => (
              <div key={review.id} className="mb-6 border-b pb-4">
                <div className="flex justify-between items-center mb-2">
                  <h4 className="text-sm font-semibold">{review.name}</h4>
                  <span className="text-xs text-gray-500">{review.date}</span>
                </div>
                <div className="flex items-center mb-2">
                  {renderStars(review.rating)}
                </div>
                <p className="text-gray-700 text-sm">{review.comment}</p>
              </div>
            ))}
          </div>
        ) : (
          <div className="bg-white p-4 shadow-lg rounded-md">
            <p>{tabContent[activeTab]}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserTabContent;
