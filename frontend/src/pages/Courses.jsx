import React from "react";
import Navbar from "../components/Navbar";
import Breadcrumb from "../components/Breadcrumb";

const Courses = () => {
  return (
    <div className="bg-[#F3F4F6] pb-20">
      <Navbar />
      <div className="px-4 sm:px-10 lg:px-24 ">
        <Breadcrumb />
      </div>
    </div>
  );
};

export default Courses;
