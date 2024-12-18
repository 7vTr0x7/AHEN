import React from "react";
import { FiMinus } from "react-icons/fi";
import { FiPlus } from "react-icons/fi";

const TabContent = ({
  activeTab,
  tabContent,
  daysData,
  toggleDropdown,
  openIndex,
}) => (
  <div className="mt-8 grid grid-cols-2 text-sm">
    <div className="md:col-span-1 col-span-2 rounded-lg ">
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
                <div className="border-gray-300">
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
        <div className="bg-white p-4 shadow-lg rounded-md">
          <p>{tabContent[activeTab]}</p>
        </div>
      )}
    </div>
  </div>
);

export default TabContent;
