import React, { useState } from "react";
import Breadcrumb from "../Breadcrumb";
import Navbar from "../Navbar";
import { useLocation } from "react-router-dom";

import cardImage1 from "../../assets/images/homeCardImage.png";
import { FaStar } from "react-icons/fa6";
import { FiPlus, FiMinus } from "react-icons/fi";

const CourseDetails = () => {
  const location = useLocation();
  const { course } = location.state;

  const [activeTab, setActiveTab] = useState("courseContent");
  const [openIndex, setOpenIndex] = useState(null);

  const tabContent = {
    about: "The Beginner Driving Course is designed for first-time drivers...",
    reviews: "This course has great reviews! Students have given it 4.8/5.",
  };

  const daysData = [
    {
      title: "Day 1 to 10",
      lessons: [
        { day: "1", lesson: "Introduction to React" },
        { day: "2", lesson: "Understanding Components" },
        { day: "3", lesson: "State and Props in React" },
        { day: "4", lesson: "Event Handling in React" },
        { day: "5", lesson: "React Lifecycle Methods" },
        { day: "6", lesson: "Building a To-Do App" },
        { day: "7", lesson: "Introduction to Hooks" },
        { day: "8", lesson: "useState Hook Practice" },
        { day: "9", lesson: "useEffect in React" },
        { day: "10", lesson: "Practice Session 1" },
      ],
    },
    {
      title: "Day 11 to 20",
      lessons: [
        { day: "11", lesson: "React Router Introduction" },
        { day: "12", lesson: "Navigation & Routes" },
        { day: "13", lesson: "Dynamic Routing" },
        { day: "14", lesson: "API Integration with React" },
        { day: "15", lesson: "Axios for Fetching Data" },
        { day: "16", lesson: "Custom Hooks" },
        { day: "17", lesson: "State Management with Context API" },
        { day: "18", lesson: "Error Handling in React" },
        { day: "19", lesson: "Optimizing React Apps" },
        { day: "20", lesson: "Practice Session 2" },
      ],
    },
  ];

  const toggleDropdown = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="bg-[#F3F4F6] pb-20">
      <Navbar />
      <div className="px-4 sm:px-10 lg:px-24">
        <Breadcrumb />
        <div className="flex md:flex-row flex-col mt-5 gap-5">
          <div className="bg-white rounded-lg flex-1 h-[80%] flex items-stretch">
            <img
              alt={course?.course}
              src={cardImage1}
              className="w-full h-full rounded-lg"
            />
          </div>

          <div className="rounded-lg flex-1 p-6 flex flex-col justify-between">
            <div>
              <p className="text-xl font-medium">{course.course}</p>
              <div className="text-sm flex items-center gap-1 text-[#959595] mt-2">
                <span>
                  <FaStar className="text-[#FF9F0D]" />
                </span>
                <span>{course?.starRating}</span>
                <span className="mx-2">({course?.reviews} ratings)</span>
              </div>
              <div className="text-lg font-semibold flex items-center gap-3 text-[#959595] mt-2">
                <p className="font-bold text-2xl text-black">{`₹${
                  course.price - (course.price * course.discountPercent) / 100
                }`}</p>
                <span className="font-extralight line-through text-[#AAABAC]">{`₹${course.price}`}</span>
                <p className="text-xs text-[#61C36D] font-semibold">
                  {course.discountPercent}% off
                </p>
              </div>
              <p className="text-xs text-[#AAABAC] mt-1">
                Inclusive of all taxes
              </p>
              <p className="text-sm mt-1 font-medium text-[#616161]">
                {course.session} Sessions
              </p>
            </div>

            <div className="flex flex-col gap-1 mt-5 text-xs text-center">
              <div className="flex w-[70%] justify-between">
                <button className="w-[48%] px-5 py-3 rounded-lg bg-black text-white hover:bg-transparent border hover:border-black hover:text-black">
                  Group Session
                </button>
                <button className="w-[48%] px-5 py-3 rounded-lg bg-transparent text-black hover:bg-black border border-black hover:text-white">
                  One-to-One Session
                </button>
              </div>

              <hr className="w-[70%] my-6 h-[2px] bg-black" />

              <div className="flex w-[70%] justify-between">
                <div className="w-[48%]">
                  <button className="w-full px-5 py-3 rounded-lg bg-black text-white hover:bg-transparent border hover:border-black hover:text-black">
                    <p>Pay Everyday & Enroll</p>
                    <p className="mt-1">₹250</p>
                  </button>
                  <p className="mt-1">Charged Daily*</p>
                </div>
                <div className="w-[48%]">
                  <button className="w-full px-5 py-3 rounded-lg bg-transparent text-black hover:bg-black border border-black hover:text-white">
                    <p>Pay Once & Enroll</p>
                    <p className="mt-1">₹8,000</p>
                  </button>
                  <p className="mt-1">Charged Once*</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-14 mt-5 text-sm text-[#616161] px-10">
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
          <div className="flex w-4/12 justify-between">
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

        <div className="mt-8 grid grid-cols-2 text-sm">
          <div className="col-span-1 rounded-lg mr-9">
            {activeTab === "courseContent" ? (
              <div className="mx-auto">
                {daysData.map((day, index) => (
                  <div
                    key={index}
                    className="border-gray-300 mb-5 bg-white rounded-lg shadow-lg">
                    <div
                      className="flex justify-between items-center p-4 cursor-pointer"
                      onClick={() => toggleDropdown(index)}>
                      <h2 className="text-sm font-semibold">{day.title}</h2>
                      {openIndex === index ? (
                        <FiMinus className="text-xl text-gray-600" />
                      ) : (
                        <FiPlus className="text-xl text-gray-600" />
                      )}
                    </div>

                    {openIndex === index && (
                      <div className="  border-gray-300">
                        {day.lessons.map((lesson, i) => (
                          <div
                            key={i}
                            className="flex items-center py-3 pl-6 relative">
                            <div className="w-7 h-7 flex items-center justify-center text-gray-700 font-bold bg-gray-100 rounded-md mr-4">
                              {lesson.day}
                            </div>
                            <p className="text-gray-700">{lesson.lesson}</p>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            ) : (
              <p>{tabContent[activeTab]}</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;
