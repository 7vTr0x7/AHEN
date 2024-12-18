import React from "react";
import CourseCard from "../CourseCard";
import UserCourseCard from "./UserCourseCard";

const UserCourses = () => {
  const data = [
    {
      id: 1,
      course: "Master Digital Product Design: UX Research & UI Design",
      session: 10,
      sessions: 30,
      completedSessions: 17,
      rating: 4.7,
    },
    {
      id: 2,
      course: "Master Digital Product Design: UX Research & UI Design",
      session: 10,
      sessions: 30,
      completedSessions: 17,
      rating: 4.7,
    },
  ];
  return (
    <div>
      <div className="mb-4 flex justify-between items-center">
        <p className="text-xl ">My Courses</p>
      </div>
      <div className="flex flex-wrap gap-3  items-center">
        {data.map((course) => (
          <div key={course.id}>
            <UserCourseCard course={course} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserCourses;
