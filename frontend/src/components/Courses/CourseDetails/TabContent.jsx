import React from "react";
import { FiMinus, FiPlus } from "react-icons/fi";
import { FaStar, FaRegStar } from "react-icons/fa";

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

const TabContent = ({
  activeTab,
  tabContent,
  daysData,
  toggleDropdown,
  openIndex,
}) => {
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
                    {day.lessons.map((lesson, i) => (
                      <div
                        key={i}
                        className="flex items-center py-5 pl-6 relative">
                        {i !== day.lessons.length - 1 && (
                          <span className="absolute left-[38px] top-14 h-2/5 border-l-2 border-gray-300"></span>
                        )}
                        <div className="w-7 h-7 flex items-center justify-center text-gray-700 font-bold bg-gray-100 rounded-md mr-4">
                          {lesson.day}
                        </div>
                        <p className="text-gray-700">{lesson.lesson}</p>
                      </div>
                    ))}
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

export default TabContent;
