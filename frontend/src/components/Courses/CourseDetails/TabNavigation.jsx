import React from "react";

const TabNavigation = ({ activeTab, setActiveTab }) => (
  <div>
    <div className="flex items-center gap-14 mt-5 text-sm text-[#616161] px-10 select-none">
      <p
        className={`cursor-pointer ${
          activeTab === "about" ? "text-black font-bold" : ""
        }`}
        onClick={() => setActiveTab("about")}>
        About
      </p>
      <p
        className={`cursor-pointer ${
          activeTab === "courseContent" ? "text-black font-bold" : ""
        }`}
        onClick={() => setActiveTab("courseContent")}>
        Course Content
      </p>
      <p
        className={`cursor-pointer ${
          activeTab === "reviews" ? "text-black font-bold" : ""
        }`}
        onClick={() => setActiveTab("reviews")}>
        Review
      </p>
    </div>
    <div className="flex justify-start mt-2 mr-20">
      <div className="flex md:w-4/12 w-11/12 justify-between">
        <hr
          className={`h-[3px] ${
            activeTab === "about"
              ? "w-[33.33%] bg-black"
              : "w-[33.33%] bg-[#D1D5DB]"
          }`}
          style={{ transition: "all 0.3s" }}
        />
        <hr
          className={`h-[3px] ${
            activeTab === "courseContent"
              ? "w-[33.33%] bg-black"
              : "w-[33.33%] bg-[#D1D5DB]"
          }`}
          style={{ transition: "all 0.3s" }}
        />
        <hr
          className={`h-[3px] ${
            activeTab === "reviews"
              ? "w-[33.33%] bg-black"
              : "w-[33.33%] bg-[#D1D5DB]"
          }`}
          style={{ transition: "all 0.3s" }}
        />
      </div>
    </div>
  </div>
);

export default TabNavigation;
