import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";

import CourseBanner from "../components/Home/CourseBanner";
import DiscountBanner from "../components/Home/DiscountBanner";
import HomeCards from "../components/Home/HomeCards";
import CourseCards from "./../components/Home/CourseCards";

const Home = () => {
  const [upcomingSession, setUpcomingSession] = useState(null);
  const [message, setMessage] = useState(null);

  const fetchUpcomingSession = async () => {
    try {
      const token = localStorage.getItem("token");
      const res = await fetch("http://localhost:3000/api/upcoming-sessions", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        credentials: "include",
      });

      if (!res.ok) {
        console.log("Failed to get session");
      }

      const data = await res.json();
      if (data?.sessions?.length > 0) {
        setUpcomingSession(data.sessions[0]);
      } else {
        setMessage(data.message);
      }
    } catch (error) {
      console.log("Error occurred while fetch session");
    }
  };

  useEffect(() => {
    fetchUpcomingSession();
  }, []);

  return (
    <div className="bg-[#F3F4F6] pb-20">
      <Navbar />
      {<CourseBanner upcomingSession={upcomingSession} message={message} />}
      <div className="px-4 sm:px-10 lg:px-24 py-6 ">
        <HomeCards />
      </div>
      <div className="px-4 sm:px-10 lg:px-24 py-8 ">
        <DiscountBanner />
      </div>
      <div className="px-4 sm:px-10 lg:px-24 py-4 ">
        <CourseCards />
      </div>
    </div>
  );
};

export default Home;
