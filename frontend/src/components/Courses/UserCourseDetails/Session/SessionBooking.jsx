import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";

const SessionBooking = () => {
  const [selectedDay, setSelectedDay] = useState(null);
  const [selectedTimeSlot, setSelectedTimeSlot] = useState(null);

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
    "01:00 AM - 03:00 PM",
    "03:00 AM - 05:00 PM",
    "05:00 AM - 07:00 PM",
  ];

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6 relative">
        <button className="absolute top-4 right-4 text-gray-500 hover:text-gray-800">
          <AiOutlineClose size={20} />
        </button>

        <h2 className="text-center text-xl font-semibold mb-6">Book Session</h2>

        <div className="mb-4">
          <h3 className="font-medium mb-2">Day</h3>
          <div className="flex space-x-3">
            {days.map((day) => (
              <button
                key={day.id}
                onClick={() => setSelectedDay(day.id)}
                className={`flex flex-col items-center w-16 h-16 border rounded-lg ${
                  selectedDay === day.id
                    ? "bg-black text-white"
                    : "text-gray-700 border-gray-300"
                }`}>
                <span className="text-sm">{day.label}</span>
                <span className="font-semibold">{day.date}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="mb-6">
          <h3 className="font-medium mb-2">Time slot</h3>
          <div className="grid grid-cols-2 gap-3">
            {timeSlots.map((slot) => (
              <button
                key={slot}
                onClick={() => setSelectedTimeSlot(slot)}
                className={`p-2 border rounded-lg text-sm ${
                  selectedTimeSlot === slot
                    ? "bg-black text-white"
                    : "text-gray-700 border-gray-300"
                }`}>
                {slot}
              </button>
            ))}
          </div>
        </div>

        <button
          className="w-full bg-black text-white py-2 rounded-lg font-medium hover:bg-gray-800"
          disabled={!selectedDay || !selectedTimeSlot}>
          Confirm Booking
        </button>
      </div>
    </div>
  );
};

export default SessionBooking;
