import React from "react";

const CourseImage = ({ course, image }) => (
  <div className="bg-white rounded-lg flex-1 h-[95%] flex items-stretch">
    <img alt={course?.title} src={image} className="w-full h-full rounded-lg" />
  </div>
);

export default CourseImage;
