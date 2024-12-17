import React from "react";
import Navbar from "../components/Navbar";

import CourseBanner from "../components/Home/CourseBanner";
import HomeCards from "../components/Home/HomeCards";
import DiscountBanner from "../components/Home/DiscountBanner";
import CourseCards from "./../components/Home/CourseCards";

const Home = () => {
  return (
    <div className="bg-[#F3F4F6] pb-20">
      <Navbar />
      <CourseBanner />
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
