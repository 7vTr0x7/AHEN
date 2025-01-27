import React from "react";

function LearningLicense({ data }) {
  return (
    <div className="rounded-lg bg-[#fff] p-6">
      <h2 className="text-xl progress-heading mb-6">1. Learning License</h2>
      <div className="space-y-4">
        <div className="flex items-center space-x-3">
          <div className="h-5 w-5 bg-black rounded-full flex items-center justify-center relative">
            <span className="text-white">
              <i className="fa-solid fa-check"></i>
            </span>
            <div className="absolute left-1/2 transform -translate-x-1/2 top-full w-0.5 h-6 progress-stick"></div>
          </div>
          <p className="font-semibold progress-text text-sm md:text-base">
            {data.status === "under_review"
              ? "Your details are under Review"
              : "License is being Processed"}
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
            Test:{" "}
            {data.test_link ? (
              <a
                href={data.test_link}
                target="_blank"
                rel="noopener noreferrer">
                Take Test
              </a>
            ) : (
              "Test Pending"
            )}
          </p>
        </div>
        {/* Display test status */}
        {data.test_passed_at && (
          <div className="flex items-center space-x-3">
            <p className="font-semibold progress-text text-sm md:text-base">
              Test Passed at: {new Date(data.test_passed_at).toLocaleString()}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default LearningLicense;
