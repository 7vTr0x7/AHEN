import React, { useEffect, useState } from "react";
import Navbar from "../Navbar";
import Attached_one from "../Images/Attached-one.svg";
import Attached_two from "../Images/Attached-two.svg";
import DrivingLicense from "../Images/DrivingLicense_Man.svg";
import LearningLicense from "./LearningLicense";
import DrivingLicenseSection from "./DrivingLicenseSection";

function LicenseProgress() {
  const [learningData, setLearningData] = useState(null);
  const [drivingData, setDrivingData] = useState(null);

  useEffect(() => {
const  user_id= localStorage.getItem("user_id")

    // Fetch learning license data
    const fetchLearningData = async () => {
      
      const response = await fetch(
        `https://driving.shellcode.cloud/api/progress/learning/${user_id}`
      );
      const data = await response.json();
      setLearningData(data.data);
    };

    // Fetch driving license data
    const fetchDrivingData = async () => {
      const response = await fetch(
        `https://driving.shellcode.cloud/api/progress/driving/${user_id}`
      );
      const data = await response.json();
      setDrivingData(data.data);
    };

    fetchLearningData();
    fetchDrivingData();
  }, []);

  return (
    <>
      <Navbar />
      <div className="w-full rounded-lg p-8 mt-3">
        <div className="flex flex-col md:flex-row gap-4 mb-16">
          <div className="flex items-center rounded-xl bg-[#fff] p-3">
            <div className="Attached">
              <img
                src={Attached_two}
                alt="Learner's License"
                className="w-16 h-16 md:w-24 md:h-24"
              />
            </div>
            <div className="ml-4">
              <h3 className="font-semibold text-gray-700 text-lg md:text-xl">
                Learner’s License
              </h3>
              <p className="text-light text-black-400 text-sm md:text-base">
                Easily apply for your learner’s license with our step-by-step
                guidance.
              </p>
            </div>
          </div>
          <div className="flex items-center rounded-xl bg-[#fff] p-3">
            <div className="Attached">
              <img
                src={Attached_one}
                alt="Driving License"
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
        </div>
        <div className="text-2xl font-semibold text-gray-800 mb-6">
          <h2>License Progress</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-3">
          {/* Learning License Section */}
          {learningData && <LearningLicense data={learningData} />}
          {/* Driving License Section */}
          {drivingData && <DrivingLicenseSection data={drivingData} />}
        </div>
      </div>
    </>
  );
}

export default LicenseProgress;
