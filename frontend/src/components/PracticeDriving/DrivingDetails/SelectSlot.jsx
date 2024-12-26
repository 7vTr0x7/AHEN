import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";

const days = [
  { id: 1, label: "Mon", date: 23 },
  { id: 2, label: "Tue", date: 24 },
  { id: 3, label: "Wed", date: 25 },
  { id: 4, label: "Thu", date: 26 },
  { id: 5, label: "Fri", date: 27 },
  { id: 6, label: "Sat", date: 28 },
];

const timeSlots = [
  "09:00 AM - 11:00 AM",
  "11:00 AM - 01:00 PM",
  "01:00 PM - 03:00 PM",
  "03:00 PM - 05:00 PM",
  "05:00 PM - 07:00 PM",
];

const SelectSlot = ({ handleClose }) => {
  const [selectedDay, setSelectedDay] = useState(null);
  const [selectedTimeSlot, setSelectedTimeSlot] = useState(null);
  const [selectedDuration, setSelectedDuration] = useState("1"); // New state for duration

  const handleBooking = () => {
    if (selectedDay && selectedTimeSlot) {
      console.log("");
    }
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
                  onClick={() => setSelectedDay(day.id)}
                  className={`flex flex-col justify-center items-center w-16 h-16 border rounded-lg transition-colors duration-200 ${
                    selectedDay === day.id
                      ? "bg-black text-white"
                      : "text-gray-700 border-gray-300"
                  }`}>
                  <span className="text-sm">{day.label}</span>
                  <span className="font-medium text-xl">{day.date}</span>
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

          {
            <div className="mt-12 flex justify-end">
              <button
                className="px-3 bg-black text-white py-2 rounded-lg text-sm"
                onClick={handleBooking}
                disabled={!selectedDay || !selectedTimeSlot}>
                Confirm Booking
              </button>
            </div>
          }
        </div>
      </div>
    </div>
  );
};

export default SelectSlot;
