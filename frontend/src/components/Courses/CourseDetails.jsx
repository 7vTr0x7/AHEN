import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import CourseImage from "./CourseDetails/CourseImage";
import CourseInfo from "./CourseDetails/CourseInfo";
import SessionButtons from "./CourseDetails/SessionButtons";
import PaymentButtons from "./CourseDetails/PaymentButtons";
import TabNavigation from "./CourseDetails/TabNavigation";
import TabContent from "./CourseDetails/TabContent";
import Breadcrumb from "../Breadcrumb";
import Navbar from "../Navbar";

import cardImage1 from "../../assets/images/homeCardImage.png";

const CourseDetails = () => {
  const location = useLocation();
  const { course } = location.state;

  const [activeTab, setActiveTab] = useState("courseContent");
  const [openIndex, setOpenIndex] = useState(null);

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
        <div className="grid md:grid-cols-2 grid-cols-1 gap-5 mt-5">
          <div className="md:col-span-1 col-span-2">
            <CourseImage course={course} image={cardImage1} />
          </div>
          <div className="md:col-span-1 col-span-2">
            <CourseInfo course={course} />
            <SessionButtons />
            <hr className="w-[70%] my-6 h-[2px] bg-black" />

            <PaymentButtons course={course} />
          </div>
        </div>

        <TabNavigation activeTab={activeTab} setActiveTab={setActiveTab} />

        <TabContent
          activeTab={activeTab}
          course={course}
          daysData={daysData}
          toggleDropdown={toggleDropdown}
          openIndex={openIndex}
        />
      </div>
    </div>
  );
};

export default CourseDetails;
