import React, { useState } from "react";
import Navbar from "../Navbar";
import PageSeven from "./PageSeven";
import PageEight from "./PageEight";
import PageTwo from "./PageTwo";
import PageThree from "./PageThree";
import PageFour from "./PageFour";
import PageFive from "./PageFive";
import PageSix from "./PageSix";
import PageNine from "./PageNine";

function PageOne() {
  const [step, setStep] = useState(1); // Track the current step
  const [errors, setErrors] = useState([]); // Track the validation errors

  // Content for each step
  const stepsContent = [
    { title: "Driving License Info" },
    { title: "Driving License Info" },
    { title: "Personal Details" },
    { title: "Address Details" },
    { title: "Class Of Vehicles" },
    { title: "Document Details" },
    { title: "Declaration Form" },
    {
      title:
        "Application-cum-Declaration as to Physical Fitness[See Rule 5(2)] ",
    },
    { title: "Confirm Details" },
  ];

  // Form data state to hold input values for each step
  const [formData, setFormData] = useState({
    field1: "", // Example field for Step 1
    field2: "", // Example field for Step 2
    field3: "", // Example field for Step 3
    // Add more fields as necessary for each step
  });

  // Validate fields for the current step
  const validateFields = () => {
    let tempErrors = [];
    let isValid = true;

    // Step 1 validation example (add validation logic as needed for other steps)
    if (step === 1) {
      if (!formData.field1) {
        tempErrors.push("Field 1 is required.");
        isValid = false;
      }
    } else if (step === 2) {
      if (!formData.field2) {
        tempErrors.push("Field 2 is required.");
        isValid = false;
      }
    } else if (step === 3) {
      if (!formData.field3) {
        tempErrors.push("Field 3 is required.");
        isValid = false;
      }
    }
    // Add validation for other steps here...

    setErrors(tempErrors);
    return isValid;
  };

  // Move to the next step
  const handleNext = () => {
    if (validateFields()) {
      if (step < stepsContent.length) {
        setStep((prevStep) => prevStep + 1);
      }
    }
  };

  // Move to the previous step
  const handleBack = () => {
    if (step > 1) {
      setStep((prevStep) => prevStep - 1);
    }
  };

  // Handle input change for each step
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
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
                <input
                  type="text"
                  name="field1"
                  value={formData.field1}
                  onChange={handleInputChange}
                  placeholder="Field 1"
                />
                {errors.includes("Field 1 is required.") && (
                  <p className="text-red-600">Field 1 is required.</p>
                )}
              </div>
            );
          } else if (step === 2) {
            return (
              <div>
                <input
                  type="text"
                  name="field2"
                  value={formData.field2}
                  onChange={handleInputChange}
                  placeholder="Field 2"
                />
                {errors.includes("Field 2 is required.") && (
                  <p className="text-red-600">Field 2 is required.</p>
                )}
              </div>
            );
          } else if (step === 3) {
            return (
              <div>
                <input
                  type="text"
                  name="field3"
                  value={formData.field3}
                  onChange={handleInputChange}
                  placeholder="Field 3"
                />
                {errors.includes("Field 3 is required.") && (
                  <p className="text-red-600">Field 3 is required.</p>
                )}
              </div>
            );
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
              onClick={() => alert("Form submitted successfully!")}
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
