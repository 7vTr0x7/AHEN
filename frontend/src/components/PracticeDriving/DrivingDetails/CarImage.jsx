import React from "react";

const CarImage = ({ car, image }) => (
  <div className="bg-white rounded-lg shadow-md overflow-hidden">
    <img
      alt={car?.name}
      src={image}
      className="w-full h-64 object-cover"
    />
  </div>
);

export default CarImage;
