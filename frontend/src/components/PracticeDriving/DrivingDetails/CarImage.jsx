import React from "react";

const CarImage = ({ car, image }) => (
  <div className="bg-white rounded-lg flex-1 h-[95%] flex items-stretch">
    <img alt={car?.name} src={image} className="w-full h-full rounded-lg" />
  </div>
);

export default CarImage;
