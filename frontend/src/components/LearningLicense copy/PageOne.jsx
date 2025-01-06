import React, { useState } from "react";
import Navbar from "../Navbar";
import PageTwo from "./PageTwo";
import PageThree from "./PageThree";
import PageFour from "./PageFour";
import PageFive from "./PageFive";
import PageSix from "./PageSix";
import PageSeven from "./PageSeven";
import PageEight from "./PageEight";
import PageNine from "./PageNine";

function PageOne() {
  const [step, setStep] = useState(1); // Track the current step

  // Content for each step
  const stepsContent = [
    { title: "Learner License ?" },
    { title: "Authentication with E-KYC" },
    { title: " Personal Details" },
    { title: " Address Details" },
    { title: "Book Slot with Date" },
    { title: " Document Details" },
    { title: " Declaration Form" },
    {
      title:
        " Application-cum-Declaration as to Physical Fitness[See Rule 5(2)] ",
    },
    { title: "Confirm Details" },
  ];

  // Move to the next step
  const handleNext = () => {
    if (step < stepsContent.length) {
      setStep((prevStep) => prevStep + 1);
    }
  };

  // Move to the previous step
  const handleBack = () => {
    if (step > 1) {
      setStep((prevStep) => prevStep - 1);
    }
  };

  return (
    <>
      <Navbar />
      <div className="w-full p-8">
        {/* Header */}
        <h1 className="text-2xl font-bold text-gray-900 mb-4">
          {stepsContent[step - 1].title}
        </h1>

        {/* Steps Progress Bar */}
        <div className="flex justify-between mb-6 gap-1">
          {Array(stepsContent.length)
            .fill(null)
            .map((_, index) => (
              <span
                key={index}
                className={`w-full h-2 rounded-full ${
                  index < step ? "bg-black" : "bg-gray-300"
                }`}
                style={{
                  flex: 1,
                  marginRight:
                    index !== stepsContent.length - 1 ? "0.25rem" : 0,
                }}
              ></span>
            ))}
        </div>

        {/* Content */}

        {(() => {
          if (step === 1) {
            return (
              <div>
                <p className="text-gray-700 mb-4">
                  An individual who wants to drive any type of motor vehicle in
                  India has to get his/her learner's license first. A learner's
                  license is issued for learning
                </p>
                <p className="text-gray-700 mb-4">
                  A month after the issuance of the learner's license, the
                  person has to appear for the test in front of an RTO
                  authority, who upon proper examination, will declare if he/she
                  has passed the exam or not.
                </p>{" "}
                <p className="text-gray-700 mb-4">
                  LLR, or Learner's License, is designed for individuals in the
                  process of learning to drive. It's a provisional license that
                  permits supervised driving under the guidance of a licensed
                  driver. If you're new to driving, we offer LLR services with a
                  generous 6-month learning period before advancing to the
                  Driving License application.
                </p>{" "}
                <p className="text-gray-700 mb-4">
                  If you wish to proceed with obtaining only the Learner's
                  License (LLR) through us, click 'Next' to continue the
                  application. If you are interested in acquiring both the
                  Learner's License (LLR) and the Driving License (DL) through
                  our services, navigate to the main page and click on 'Apply
                  for Driving License.
                </p>
                <p className="text-red-600 font-semibold mb-4">
                  Go through the LLR Test Content:
                </p>
                <button className="bg-black text-white px-3 py-1 rounded-xl shadow-md hover:bg-gray-800 mb-5">
                  Open Pdf
                </button>
              </div>
            );
          } else if (step === 2) {
            return <PageTwo />;
          } else if (step === 3) {
            return <PageThree />;
          } else if (step === 4) {
            return <PageFour />;
          } else if (step === 5) {
            return <PageFive />;
          } else if (step === 6) {
            return <PageSix />;
          } else if (step === 7) {
            return <PageSeven />;
          } else if (step === 8) {
            return <PageEight />;
          } else {
            return <PageNine />;
          }
        })()}

        {/* Navigation Buttons */}
        <div className="flex gap-4">
          {/* Conditionally render Back button */}
          {step > 1 && (
            <button
              onClick={handleBack}
              className="bg-black text-white py-2 px-6 rounded hover:bg-gray-800 transition"
            >
              Back
            </button>
          )}

          {/* Render Next or Submit button */}
          {step < stepsContent.length ? (
            <button
              onClick={handleNext}
              className="bg-black text-white py-2 px-6 rounded hover:bg-gray-800 transition"
            >
              Next
            </button>
          ) : (
            <button
              onClick={() => alert("Form submitted successfully!")} // Replace with actual submit logic
              className="bg-black text-white py-2 px-6 rounded hover:bg-gray-800 transition"
            >
              Submit
            </button>
          )}
        </div>
      </div>
    </>
  );
}

export default PageOne;
