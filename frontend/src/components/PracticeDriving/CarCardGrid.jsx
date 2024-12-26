import React from "react";

import { FaStar } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const CarCardGrid = ({ cars, currentImageIndex, handleImageClick }) => {
  const navigate = useNavigate();

  if (!cars || cars.length === 0) {
    return (
      <p className="text-center text-gray-500">
        No cars available for this category.
      </p>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 w-full">
      {cars.map((car) => (
        <div
          key={car.name}
          className="bg-white w-full rounded-lg shadow-md p-4">
          <div className="relative w-full">
            <img
              src={car.images[currentImageIndex[car.name] || 0]}
              alt={car.name}
              className="w-full h-40 object-cover rounded-lg cursor-pointer"
              onClick={() => {
                const nextIndex = (currentImageIndex[car.name] || 0) + 1;
                const newIndex = nextIndex >= car.images.length ? 0 : nextIndex;
                handleImageClick(car.name, newIndex);
              }}
            />
            <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex gap-1">
              {car.images.map((_, index) => (
                <button
                  key={index}
                  className={`w-2 h-2 rounded-full ${
                    currentImageIndex[car.name] === index
                      ? "bg-black"
                      : "bg-gray-300"
                  }`}
                  onClick={() => handleImageClick(car.name, index)}
                />
              ))}
            </div>
          </div>
          <div
            className="cursor-pointer"
            onClick={() =>
              navigate(`/practice-driving/${car.name.replace(" ", "-")}`, {
                state: { car },
              })
            }>
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-bold mt-4">{car.name}</h3>
              <div className="flex items-center gap-1">
                <FaStar className="text-xs text-yellow-300" />
                <p className="text-xs ">{car.rating}</p>
              </div>
            </div>

            <p className="text-lg font-semibold text-black">
              {car.price}
              <span className="text-gray-500 text-sm font-normal">/hour</span>
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CarCardGrid;
