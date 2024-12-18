import React from "react";
import { useNavigate } from "react-router-dom";
import CourseCard from "../CourseCard";

const AllCourseCards = () => {
  const data = [
    {
      id: 1,
      course: "Master Digital Product Design: UX Research & UI Design",
      session: 10,
      reviews: 340,
      starRating: 4.5,
      ratings: 1200,
      dailyPrice: 15,
      oneTimePrice: 299,
      price: 299,
      discountPercent: 20,
    },
    {
      id: 2,
      course: "Master Digital Product Design: UX Research & UI Design",
      session: 10,
      reviews: 290,
      starRating: 4.4,
      ratings: 1100,
      dailyPrice: 12,
      oneTimePrice: 279,
      price: 279,
      discountPercent: 25,
    },
    {
      id: 3,
      course: "Master Digital Product Design: UX Research & UI Design",
      session: 10,
      reviews: 410,
      starRating: 4.6,
      ratings: 1500,
      dailyPrice: 18,
      oneTimePrice: 349,
      price: 349,
      discountPercent: 15,
    },
    {
      id: 4,
      course: "Master Digital Product Design: UX Research & UI Design",
      session: 10,
      reviews: 220,
      starRating: 4.3,
      ratings: 980,
      dailyPrice: 10,
      oneTimePrice: 199,
      price: 199,
      discountPercent: 30,
    },
    {
      id: 5,
      course: "Master Digital Product Design: UX Research & UI Design",
      session: 10,
      reviews: 510,
      starRating: 4.8,
      ratings: 1800,
      dailyPrice: 20,
      oneTimePrice: 399,
      price: 399,
      discountPercent: 10,
    },
  ];

  return (
    <div>
      <div className="mb-4 flex justify-between items-center">
        <p className="text-xl ">Courses</p>
      </div>
      <div className="flex flex-wrap gap-3  items-center">
        {data.map((course) => (
          <div key={course.id}>
            <CourseCard course={course} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllCourseCards;
