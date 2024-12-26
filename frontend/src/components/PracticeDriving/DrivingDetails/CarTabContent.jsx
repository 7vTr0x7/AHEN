import React from "react";
import { FaStar } from "react-icons/fa";

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

const CarTabContent = ({ activeTab, tabContent }) => {
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
        {activeTab === "reviews" ? (
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
            <p className="border-b-2 pb-3">{tabContent[activeTab]}</p>
            <div className="flex gap-3 items-center pt-4">
              <img
                src="https://placehold.co/100"
                alt="owner"
                className="h-12 w-12 rounded-full"
              />
              <div>
                <p className="text-lg font-normal">Anirudh</p>
                <p className="text-xs text-gray-500">Owner</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CarTabContent;
