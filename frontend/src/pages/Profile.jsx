import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import { FaEdit, FaUser } from "react-icons/fa";
import toast, { Toaster } from "react-hot-toast";

const Profile = () => {
  const [image, setImage] = useState(null);
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");
  const [dob, setDob] = useState("");
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    // Get user_id from localStorage
    const storedUserId = localStorage.getItem("user_id");
    setUserId(storedUserId);

    // Fetch profile data if userId is available
    if (storedUserId) {
      const fetchProfile = async () => {
        try {
          const response = await fetch(
            `http://localhost:3000/api/profiles/profile/${storedUserId}`
          );
          const data = await response.json();
          setName(data.name || "");
          setPhoneNumber(data.phoneNumber || "");
          setEmail(data.email || "");
          setGender(data.gender || "");
          setDob(data.dob || "");
        } catch (error) {
          console.error("Error fetching profile data:", error);
          toast.error("Error fetching profile data.");
        }
      };

      fetchProfile();
    }
  }, []);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Show loading toast
    const loadingToast = toast.loading("Updating profile...");

    // Retrieve the bearer token from localStorage
    const token = localStorage.getItem("token");
    const { value } = JSON.parse(token);

    // Create form data for the request
    const formData = new FormData();
    formData.append("name", name);
    formData.append("phoneNumber", phoneNumber);
    formData.append("email", email);
    formData.append("gender", gender);
    formData.append("dob", dob);

    if (image) {
      // Upload the image here
      formData.append("profileImage", image);
    }

    try {
      const response = await fetch(
        "http://localhost:3000/api/profiles/updateProfile",
        {
          method: "PUT",
          headers: {
            Authorization: `Bearer ${value}`, // Add token in the Authorization header
          },
          body: formData,
        }
      );

      const result = await response.json();
      if (result.success) {
        // Update the toast with success message
        toast.success("Profile updated successfully!", {
          id: loadingToast,
        });
      } else {
        // Handle error
        toast.error("Error updating profile.", {
          id: loadingToast,
        });
      }
    } catch (error) {
      // Handle error
      toast.error("An error occurred while updating the profile.", {
        id: loadingToast,
      });
      console.error("Error updating profile:", error);
    }
  };

  return (
    <div className="bg-[#F3F4F6] min-h-screen pb-20">
      <Navbar />

      <div className="max-w-4xl mx-auto mt-10 bg-white shadow-lg rounded-lg overflow-hidden">
        <form
          onSubmit={handleSubmit}
          className="p-8 flex flex-col items-center space-y-6">
          {/* Profile Image */}
          <div className="relative w-32 h-32">
            <label htmlFor="profileImage" className="cursor-pointer">
              {image ? (
                <img
                  src={image}
                  alt="Profile"
                  className="w-full h-full object-cover rounded-full border-2 border-blue-500"
                />
              ) : (
                <div className="w-full h-full bg-gray-100 rounded-full flex flex-col items-center justify-center text-gray-400">
                  <FaUser size={40} />
                  <p className="text-sm">Upload Image</p>
                </div>
              )}
              <FaEdit
                size={20}
                className="absolute bottom-2 right-2 bg-blue-500 text-white rounded-full p-1 shadow-lg"
              />
            </label>
            <input
              id="profileImage"
              type="file"
              className="hidden"
              accept="image/*"
              onChange={handleImageUpload}
            />
          </div>

          {/* Input Fields */}
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Name
              </label>
              <input
                type="text"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full border border-gray-300 rounded-md p-3 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Phone Number
              </label>
              <input
                type="tel"
                placeholder="Enter your phone number"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                className="w-full border border-gray-300 rounded-md p-3 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full border border-gray-300 rounded-md p-3 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Gender
              </label>
              <select
                value={gender}
                onChange={(e) => setGender(e.target.value)}
                className="w-full border border-gray-300 rounded-md p-3 focus:ring-2 focus:ring-blue-500 focus:outline-none">
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Date of Birth
              </label>
              <input
                type="date"
                value={dob}
                onChange={(e) => setDob(e.target.value)}
                className="w-full border border-gray-300 rounded-md p-3 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>
          </div>

          <button
            type="submit"
            className="mt-6 bg-blue-500 text-white py-3 px-8 rounded-full hover:bg-blue-600 focus:outline-none">
            Update Profile
          </button>
        </form>
      </div>

      {/* Toaster container for notifications */}
      <Toaster />
    </div>
  );
};

export default Profile;
