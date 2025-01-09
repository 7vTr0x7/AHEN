import React, { useEffect, useState } from "react";
import CourseCard from "../CourseCard";

const AllCourseCards = () => {
  const [courses, setCourses] = useState([]);

  const fetchCourses = async () => {
    try {
      const res = await fetch("https://driving.shellcode.cloud/api/courses");

      if (!res.ok) {
        console.log("Failed to get session");
      }

      const data = await res.json();
      if (data?.data?.length > 0) {
        setCourses(data.data);
      }
    } catch (error) {
      console.log("Error occurred while fetch session");
    }
  };

  useEffect(() => {
    fetchCourses();
  }, []);

  return (
    <div>
      <div className="mb-4 flex justify-between items-center">
        <p className="text-xl ">Courses</p>
      </div>
      <div className="flex flex-wrap gap-3  items-center">
        {courses &&
          courses.map((course) => (
            <div key={course.id}>
              <CourseCard course={course} />
            </div>
          ))}
      </div>
    </div>
  );
};

export default AllCourseCards;
