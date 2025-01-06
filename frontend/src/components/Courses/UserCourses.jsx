import React, { useEffect, useState } from "react";
import UserCourseCard from "./UserCourseCard";

const UserCourses = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchCourses = async () => {
    const userId = localStorage.getItem("user_id");
    if (!userId) {
      console.error("User ID not found in localStorage");
      setLoading(false);
      return;
    }

    try {
      const response = await fetch(
        `http://localhost:3000/api/purchased-courses/${userId}`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch courses");
      }

      const data = await response.json();
      const transformedCourses = data.purchased_courses.map((course) => {
        const totalSessions = course.content.reduce(
          (sum, content) => sum + content.sessions.length,
          0
        );

        const completedSessions = course.content.reduce(
          (sum, content) =>
            sum +
            content.sessions.filter(
              (session) => Boolean(session.isCompleted) // Convert 0/1 to boolean
            ).length,
          0
        );

        return {
          id: course.courseId,
          course: course,
          sessions: totalSessions,
          completedSessions,
          rating: course.courseRating,
        };
      });

      setCourses(transformedCourses);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCourses();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div className="mb-4 flex justify-between items-center">
        <p className="text-xl">My Courses</p>
      </div>
      {courses.length > 0 ? (
        <div className="flex flex-wrap gap-3 items-center">
          {courses.map((course) => (
            <div key={course.id}>
              <UserCourseCard course={course} />
            </div>
          ))}
        </div>
      ) : (
        <p>No courses found.</p>
      )}
    </div>
  );
};

export default UserCourses;
