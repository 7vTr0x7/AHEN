import React from "react";
import Attached_one from "../../assets/images/Attached-one.svg";
import Attached_two from "../../assets/images/Attached-two.svg";
import Navbar from "../Navbar.jsx";
import DrivingLicense from "../../assets/images/DrivingLicense_Man.svg";

function LicenseProgress() {
  return (
    <>
      <Navbar />
      <div className="w-full rounded-lg p-8 mt-3">
        <div className="flex flex-col md:flex-row gap-4 mb-16">
          <div className="flex items-center rounded-xl bg-[#fff] p-3">
            <div className="Attached">
              <img
                src={Attached_two}
                alt=""
                className="w-16 h-16 md:w-24 md:h-24"
              />
            </div>
            <div className="ml-4">
              <h3 className="font-semibold text-gray-700 text-lg md:text-xl">
                Driving License
              </h3>
              <p className="text-light text-black-400 text-sm md:text-base">
                Easily navigate the driving license application with our
                assistance at every step.
              </p>
            </div>
          </div>
          <div className="flex items-center rounded-xl bg-[#fff] p-3">
            <div className="Attached">
              <img
                src={Attached_one}
                alt=""
                className="w-16 h-16 md:w-24 md:h-24"
              />
            </div>
            <div className="ml-4">
              <h3 className="text-bold font-semibold text-gray-700 text-lg md:text-xl">
                Learner’s License
              </h3>
              <p className="text-light text-black-400 text-sm md:text-base">
                Easily apply for your learner’s license with our step-by-step
                guidance.
              </p>
            </div>
          </div>
        </div>
        <div className="text-2xl font-semibold text-gray-800 mb-6">
          <h2>License Progress</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-3">
          {/* Learning License Section */}
          <div>
            <div className="rounded-lg bg-[#fff] p-6">
              <h2 className="text-xl progress-heading mb-6">
                1. Learning License
              </h2>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="h-5 w-5 bg-black rounded-full flex items-center justify-center relative">
                    <span className="text-white">
                      <i className="fa-solid fa-check"></i>
                    </span>
                    <div className="absolute left-1/2 transform -translate-x-1/2 top-full w-0.5 h-6 progress-stick"></div>
                  </div>
                  <p className="font-semibold progress-text text-sm md:text-base">
                    Your details are under Review
                  </p>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="h-5 w-5 bg-progress flex items-center justify-center relative">
                    <span className="text-white">
                      <i className="fa-solid fa-check"></i>
                    </span>
                    <div className="absolute left-1/2 transform -translate-x-1/2 top-full w-0.5 h-5 progress-stick"></div>
                  </div>
                  <p className="font-semibold progress-text text-sm md:text-base">
                    License is being Processed
                  </p>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="h-5 w-5 bg-progress rounded-full flex items-center justify-center relative">
                    <span className="text-white">
                      <i className="fa-solid fa-check"></i>
                    </span>
                    <div className="absolute left-1/2 transform -translate-x-1/2 top-full w-0.5 h-6 progress-stick"></div>
                  </div>
                  <p className="font-semibold progress-text text-sm md:text-base">
                    Application Submitted
                  </p>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="h-5 w-5 bg-progress rounded-full flex items-center justify-center relative">
                    <div className="absolute left-1/2 transform -translate-x-1/2 top-full w-0.5 h-6 progress-stick-loading"></div>
                  </div>
                  <p className="font-medium progress-text text-sm md:text-base">
                    Learning License Test
                  </p>
                </div>
                <div className="mx-8">
                  <div className="space-y-2">
                    <p className="text-red-500 text-sm md:text-base ">
                      <span className="bg-gray-100 shadow-md p-1 rounded-md">
                        <i className="fa-solid fa-xmark"></i> Test Failed
                      </span>{" "}
                      <span className="text-black mx-2 p-2">
                        2 attempts are remaining
                      </span>
                    </p>
                  </div>
                </div>
                <div className="mx-8">
                  <div className="space-y-2">
                    <p className="text-[#0070FF] text-sm md:text-base">
                      <span className="bg-gray-100 shadow-md p-1 rounded-md mb-7">
                        <i className="fa-solid fa-check"></i> Test Passed{" "}
                      </span>{" "}
                      <span className="text-gray-500 mx-2">
                        22nd Nov at 12:00 PM
                      </span>
                    </p>
                  </div>
                </div>
                <div className="mx-8 rounded-lg bg-[#F3F4F6] p-4">
                  <p className="font-medium text-black text-sm md:text-base">
                    Application ID : 1976187524{" "}
                    <span className="text-gray-400 cursor-pointer">
                      <i className="fa-solid fa-copy"></i>
                    </span>
                  </p>
                  <p className="font-medium text-black text-sm md:text-base">
                    Pass: 25Ronaldo*{" "}
                    <span className="text-gray-400 cursor-pointer">
                      <i className="fa-solid fa-copy"></i>
                    </span>
                  </p>
                  <p className="font-medium text-black text-sm md:text-base">
                    Test Link :{" "}
                    <a href="https://4born.in/" className="text-[#0070FF]">
                      https://4born.in/
                    </a>
                  </p>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="h-5 w-5 border-progress-loading rounded-full flex items-center justify-center relative">
                    <div className="absolute left-1/2 transform -translate-x-1/2 top-full w-0.5 h-3 bg-black hidden"></div>
                  </div>
                  <p className="font-medium text-progress-loading text-sm md:text-base">
                    Download Learning License
                  </p>
                </div>
              </div>
            </div>
            <div>
              <p className="mt-6 text-sm text-white bg-black p-4 rounded-lg">
                Your Learning License is valid from{" "}
                <strong>12th October 2022</strong> to{" "}
                <strong>12th April 2023</strong>. You can give the Permanent
                license test anytime within this period.
              </p>
            </div>
          </div>
          {/* Driving License Section */}
          <div className="rounded-lg bg-[#fff] p-6 h-fit">
            <h2 className="text-xl progress-heading-loading mb-6">
              2. Driving License
            </h2>
            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <div className="h-5 w-5 bg-progress rounded-full flex items-center justify-center relative">
                  <span className="text-white">
                    <i className="fa-solid fa-check"></i>
                  </span>
                  <div className="absolute left-1/2 transform -translate-x-1/2 top-full w-0.5 h-8 progress-stick-loading"></div>
                </div>
                <p className="font-semibold progress-text text-sm md:text-base">
                  Book DL Test Slot
                </p>
              </div>
              <div>
                <button className="bg-black mx-8 text-white px-5 py-2 rounded-xl shadow-md hover:bg-gray-800">
                  Book Slot
                </button>
              </div>
              <div className="mx-8 flex items-center flex-wrap space-x-3">
                <p className="text-gray-800 bg-gray-100 shadow-md p-1 rounded-md w-fit">
                  Slot Booked for 22nd nov at 12:00 PM
                </p>
                <p className="text-[#CE5354] p-3">Test Failed</p>
              </div>
              <div className="flex items-center flex-wrap space-x-3 mx-8">
                <button className="bg-black text-white px-3 py-2 w-fit rounded-xl shadow-md hover:bg-gray-800">
                  Pay Retest Fee
                </button>
                <p className="text-black text-sm py-3">
                  You have to pay a retest fee of Rs 300/- to book a retest slot
                </p>
              </div>
              <div className="page-seven-button">
                <button className="mx-8 text-white px-5 py-2 rounded-xl shadow-md">
                  Book Slot
                </button>
              </div>
              <div className="mx-8 flex items-center flex-wrap space-x-3">
                <p className="text-gray-800 bg-gray-100 shadow-md p-1 rounded-md w-fit">
                  Slot Booked for 22nd nov at 12:00 PM
                </p>
                <p className="text-[#CE5354] py-3">Failed</p>
              </div>
              <div className="mx-8 flex items-center flex-wrap space-x-3">
                <p className="text-gray-800 bg-gray-100 shadow-md p-1 rounded-md w-fit">
                  Retest Slot Booked for 22nd nov at 12:00 PM
                </p>
                <p className="text-[#0070FF] py-3">Passed</p>
              </div>
              <div className="flex items-center space-x-3">
                <div className="h-5 w-5 border-progress-loading rounded-full flex items-center justify-center relative">
                  <div className="absolute left-1/2 transform -translate-x-1/2 top-full w-0.5 h-8 progress-stick-loading"></div>
                </div>
                <p className="text-progress-loading text-sm md:text-base">
                  Driving License Test
                </p>
              </div>
              <div>
                <div className="bg-gray-100 shadow-md p-2 rounded-md w-fit mx-8">
                  <p className="text-gray-800 font-medium text-base mb-2">
                    Slot : 22nd nov at 12:00 PM
                  </p>
                  <p className="text-gray-800 font-medium text-base mb-2">
                    Vehicle no : MH04FR1069
                  </p>
                  <div className="flex items-center space-x-3">
                    <div>
                      <img src={DrivingLicense} alt="" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800">Jackie Chan</p>
                      <p className="text-gray-400 font-medium">Instructor</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mx-8 flex items-center flex-wrap space-x-3 py-3">
                <p className="text-[#CE5354] bg-gray-100 shadow-md p-2 rounded-md w-fits">
                  <i className="fa-solid fa-xmark"></i> Test Failed
                </p>
                <p className="text-gray-800 py-3">2 attempts are remaining</p>
              </div>
              <div className="mx-8 flex items-center space-x-3 flex-wrap">
                <p className="text-[#0070FF] bg-gray-100 shadow-md p-2 rounded-md w-fit">
                  <i class="fa-solid fa-check"></i> Test Passed
                </p>
                <p className="text-gray-800">22nd nov at 12:00 PM</p>
              </div>
              <div className="flex items-center space-x-3">
                <div className="h-5 w-5 border-progress-loading rounded-full flex items-center justify-center relative">
                  <div className="absolute left-1/2 transform -translate-x-1/2 top-full w-0.5 h-8 progress-stick-loading"></div>
                </div>
                <p className="text-progress-loading  text-sm md:text-base">
                  Driving License Dispatch
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <div className="h-5 w-5 border-progress-loading rounded-full flex items-center justify-center relative"></div>
                <p className="text-progress-loading  text-sm md:text-base">
                  Driving License Delivered
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LicenseProgress;
