import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import Breadcrumb from "../Breadcrumb";
import Navbar from "../Navbar";
import { RxCross2 } from "react-icons/rx";

import cardImage1 from "../../assets/images/homeCardImage.png";
import UserCourseImage from "./UserCourseDetails/UserCourseImage";
import UserTabContent from "./UserCourseDetails/UserTabContent";
import UserTabNavigation from "./UserCourseDetails/UserTabNavigation";
import CourseBanner from "../Home/CourseBanner";
import UserProgressBanner from "./UserCourseDetails/UserProgressBanner";
import { useSelector } from "react-redux";

import DrivingReport from "./UserCourseDetails/DrivingReport";

const UserCourseDetails = () => {
  const location = useLocation();
  const { course } = location.state;

  const [activeTab, setActiveTab] = useState("courseContent");
  const [openIndex, setOpenIndex] = useState(null);

  const isReportOpen = useSelector((state) => state.report.isReportOpen);

  const tabContent = {
    about:
      "The Beginner Driving Course is designed for first-time drivers or those with minimal driving experience. Our certified instructors will guide you through every aspect of driving, from the fundamental vehicle controls to mastering road safety and traffic rules. By the end of this course, you'll gain the skills and confidence needed to drive independently and prepare for your driving test.",
  };

  const daysData = [
    {
      title: "Day 1 to 10",
      lessons: [
        { day: "1", lesson: "Introduction to React", completed: true },
        { day: "2", lesson: "Understanding Components", completed: true },
        { day: "3", lesson: "State and Props in React", completed: true },
        { day: "4", lesson: "Event Handling in React", completed: false },
        { day: "5", lesson: "React Lifecycle Methods", completed: false },
        { day: "6", lesson: "Building a To-Do App", completed: false },
        { day: "7", lesson: "Introduction to Hooks", completed: false },
        { day: "8", lesson: "useState Hook Practice", completed: false },
        { day: "9", lesson: "useEffect in React", completed: false },
        { day: "10", lesson: "Practice Session 1", completed: false },
      ],
    },
    {
      title: "Day 11 to 20",
      lessons: [
        { day: "11", lesson: "React Router Introduction", completed: false },
        { day: "12", lesson: "Navigation & Routes", completed: false },
        { day: "13", lesson: "Dynamic Routing", completed: false },
        { day: "14", lesson: "API Integration with React", completed: false },
        { day: "15", lesson: "Axios for Fetching Data", completed: false },
        { day: "16", lesson: "Custom Hooks", completed: false },
        {
          day: "17",
          lesson: "State Management with Context API",
          completed: false,
        },
        { day: "18", lesson: "Error Handling in React", completed: false },
        { day: "19", lesson: "Optimizing React Apps", completed: false },
        { day: "20", lesson: "Practice Session 2", completed: false },
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
            <UserCourseImage course={course} image={cardImage1} />
          </div>
          <div className="pl-8 pt-8 md:col-span-1 col-span-2">
            <p className="text-xl font-medium">{course.course}</p>
            <p className="text-sm mt-1">{course.sessions} Session</p>
            <div className="mt-10">
              <UserProgressBanner />
            </div>
          </div>
        </div>

        <UserTabNavigation activeTab={activeTab} setActiveTab={setActiveTab} />

        <UserTabContent
          activeTab={activeTab}
          tabContent={tabContent}
          daysData={daysData}
          toggleDropdown={toggleDropdown}
          openIndex={openIndex}
        />
      </div>
      {isReportOpen && <DrivingReport />}
    </div>
  );
};

export default UserCourseDetails;
