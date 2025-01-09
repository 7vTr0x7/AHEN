import React, { useMemo, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const SelectSlot = ({ handleClose, car }) => {
  const [selectedDay, setSelectedDay] = useState(null);
  const [selectedTimeSlot, setSelectedTimeSlot] = useState(null);
  const [selectedDuration, setSelectedDuration] = useState("1"); // New state for duration

  const navigate = useNavigate();

  const days = useMemo(() => {
    const today = new Date();
    return Array.from({ length: 6 }, (_, i) => {
      const nextDate = new Date();
      nextDate.setDate(today.getDate() + i + 1);
      return {
        id: i, // Ensure index starts from 0
        label: nextDate.toLocaleDateString("en-US", { weekday: "short" }),
        date: nextDate, // Store the full Date object
      };
    });
  }, []);

  const timeSlots = [
    "09:00 AM - 11:00 AM",
    "11:00 AM - 01:00 PM",
    "01:00 PM - 03:00 PM",
    "03:00 PM - 05:00 PM",
    "05:00 PM - 07:00 PM",
  ];

  const createSession = async () => {
    try {
      const tokenData = localStorage.getItem("token");

      if (!tokenData) {
        toast.error("User not authenticated. Please log in.");
        return;
      }

      let parsedToken;
      try {
        parsedToken = JSON.parse(tokenData);
      } catch (error) {
        console.error("Error parsing token:", error);
        toast.error("Invalid authentication token. Please log in again.");
        return;
      }

      const apiEndpoint = "https://driving.shellcode.cloud/api/create-booking";

      // Use the full date object for slot_date
      const selectedDayObj = days.find((day) => day.id === selectedDay);
      const slot_date = selectedDayObj
        ? selectedDayObj.date.toISOString().split("T")[0]
        : "";

      // Prepare the request body
      const requestBody = {
        practisedrivingid: car.id,
        booking_date: new Date().toISOString().split("T")[0], // Current date
        slot_date: slot_date,
        slot_time: selectedTimeSlot,
        status: "pending",
        amount: Number(car.price.replace("$", "")),
        hours: selectedDuration,
      };

      const response = await fetch(apiEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${parsedToken.value}`, // Use correct token
        },
        body: JSON.stringify(requestBody),
        credentials: "include",
      });

      const data = await response.json();

      if (data) {
        toast.success("Session booked successfully! 🎉");
        navigate("/bookings");
      } else {
        toast.error(
          data.message || "Failed to book session. Please try again."
        );
      }
    } catch (error) {
      console.error("Error creating session:", error);
      toast.error("An unexpected error occurred. Please try again.");
    }
  };

  const handleBooking = () => {
    if (selectedDay !== null && selectedTimeSlot) {
      createSession();
    }
  };

  const handleDayClick = (dayId) => {
    setSelectedDay(dayId);
  };

  return (
    <div>
      <div
        className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-40"
        onClick={() => handleClose(false)}></div>

      <div className="absolute z-50 w-[600px] left-1/2 top-2/4 transform -translate-x-1/2 -translate-y-1/2 rounded-lg shadow-lg">
        <div className="w-full bg-white rounded-lg shadow-md p-6 relative">
          <button
            className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
            onClick={() => handleClose(false)}>
            <AiOutlineClose size={20} />
          </button>

          <h2 className="text-center text-xl font-semibold mb-6">
            Select Slot
          </h2>

          <div className="mb-4">
            <h3 className="font-medium text-sm mb-2">Day</h3>
            <div className="flex space-x-3">
              {days.map((day) => (
                <button
                  key={day.id}
                  onClick={() => handleDayClick(day.id)}
                  className={`flex flex-col justify-center items-center w-16 h-16 border rounded-lg transition-colors duration-200 ${
                    selectedDay === day.id
                      ? "bg-black text-white"
                      : "text-gray-700 border-gray-300"
                  }`}>
                  <span className="text-sm">{day.label}</span>
                  <span className="font-medium text-xl">
                    {day.date.getDate()}
                  </span>
                </button>
              ))}
            </div>
          </div>

          <div className="mb-4">
            <h3 className="font-medium text-sm mb-2">Hours</h3>
            <div className="flex space-x-6 text-xs">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="duration"
                  value="1"
                  checked={selectedDuration === "1"}
                  onChange={(e) => setSelectedDuration(e.target.value)}
                  className="mr-2"
                />
                01 Hour
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="duration"
                  value="2"
                  checked={selectedDuration === "2"}
                  onChange={(e) => setSelectedDuration(e.target.value)}
                  className="mr-2"
                />
                02 Hours
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="duration"
                  value="3"
                  checked={selectedDuration === "3"}
                  onChange={(e) => setSelectedDuration(e.target.value)}
                  className="mr-2"
                />
                03 Hours
              </label>
            </div>
          </div>

          <div className="mb-6">
            <h3 className="font-medium mb-2 text-sm">Time Slot</h3>
            <div className="grid grid-cols-3 gap-3">
              {timeSlots.map((slot) => (
                <button
                  key={slot}
                  onClick={() => setSelectedTimeSlot(slot)}
                  className={`px-2 py-1 border rounded-lg text-sm transition-colors duration-200 ${
                    selectedTimeSlot === slot
                      ? "bg-black text-white"
                      : "text-gray-700 border-gray-300"
                  }`}>
                  {slot}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-12 flex justify-end">
            <button
              className="px-3 bg-black text-white py-2 rounded-lg text-sm"
              onClick={handleBooking}
              disabled={selectedDay === null || !selectedTimeSlot}>
              Confirm Booking
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectSlot;
