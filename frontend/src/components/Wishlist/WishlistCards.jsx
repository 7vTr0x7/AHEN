import React from "react";

import cardImage1 from "../../assets/images/homeCardImage.png";
import { FaHeart } from "react-icons/fa";

const WishlistCards = () => {
  const data = [
    {
      id: "1",
      course: "Beginner Driving Course: Master the Basics ",
      price: "3,499.00",
      discount: "21",
    },
    {
      id: "2",
      course: "Beginner Driving Course: Master the Basics ",
      price: "3,499.00",
      discount: "21",
    },
    {
      id: "3",
      course: "Beginner Driving Course: Master the Basics ",
      price: "3,499.00",
      discount: "21",
    },
  ];

  return (
    <div>
      {data &&
        data.map((info) => (
          <div key={info.id} className="bg-[#F3F4F6] p-4 mb-7 rounded-lg">
            <div className="bg-white rounded-lg relative">
              <img
                alt={info.id}
                src={cardImage1}
                className="w-full rounded-lg"
              />
              <FaHeart className="absolute right-2 top-2" />
            </div>
            <p className="mt-2 text-sm font-medium">{info.course}</p>
            <div className="flex items-center gap-4">
              <p className="font-bold">{info.price}</p>
              <p className="text-xs text-[#61C36D] font-semibold">
                {info.discount}% off
              </p>
            </div>
          </div>
        ))}
    </div>
  );
};

export default WishlistCards;
