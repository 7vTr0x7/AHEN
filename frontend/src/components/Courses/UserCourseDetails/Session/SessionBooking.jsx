import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { toggleOpenSessionBooking } from "../../../../redux/slices/sessionSlice";
import { IoIosInformationCircleOutline } from "react-icons/io";

import drivingImg from "../../../../assets/images/drivingLessons.png";

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

const SessionBooking = () => {
  const [selectedDay, setSelectedDay] = useState(null);
  const [selectedTimeSlot, setSelectedTimeSlot] = useState(null);
  const [isPriceVisible, setIsPriceVisible] = useState(false);
  const [isFinalView, setIsFinalView] = useState(false);
  const dispatch = useDispatch();

  const handleClose = () => dispatch(toggleOpenSessionBooking(false));

  const handleConfirmBooking = () => {
    if (selectedDay && selectedTimeSlot) {
      setIsPriceVisible(true);
    }
  };

  const handleShowFinalView = () => {
    setIsFinalView(true);
  };

  if (isFinalView) {
    return (
      <div>
        <div
          className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-40"
          onClick={handleClose}></div>

        <div className="absolute z-50 w-[550px] left-1/2 top-2/4 transform -translate-x-1/2 -translate-y-1/2 rounded-lg shadow-lg">
          <div className="flex flex-col items-center w-full bg-white rounded-lg shadow-md p-8 text-center relative">
            <button
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
              onClick={handleClose}>
              <AiOutlineClose size={20} />
            </button>
            <img alt="driving" src={drivingImg} />
            <h2 className="text-lg font-semibold mt-4">
              Booking Confirmation!
            </h2>
            <p className="text-xs text-[#797979]">
              Fasten your seat belts, your session is scheduled!
            </p>
            <div className="text-sm font-medium mt-4 flex items-center gap-2">
              <p>Monday</p>
              <p>23rd,</p>
            </div>
            <p className="text-sm font-medium ">{selectedTimeSlot}</p>

            <button
              className="mt-4 text-sm px-8 font-normal py-2 bg-black text-white rounded-lg"
              onClick={() => dispatch(toggleOpenSessionBooking(false))}>
              My Course
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div
        className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-40"
        onClick={handleClose}></div>

      <div className="absolute z-50 w-[600px] left-1/2 top-2/4 transform -translate-x-1/2 -translate-y-1/2 rounded-lg shadow-lg">
        <div className="w-full bg-white rounded-lg shadow-md p-6 relative">
          <button
            className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
            onClick={handleClose}>
            <AiOutlineClose size={20} />
          </button>

          <h2 className="text-center text-xl font-semibold mb-6">
            Book Session
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
            {!isPriceVisible ? (
              <button
                className="px-3 bg-black text-white py-2 rounded-lg text-sm disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={!selectedDay || !selectedTimeSlot}
                onClick={handleConfirmBooking}>
                Confirm Booking
              </button>
            ) : (
              <div className="flex flex-col gap-2">
                <div className="text-[#767676] flex items-center gap-2">
                  <IoIosInformationCircleOutline />
                  <p className="text-xs">Pay once and avail discounts</p>
                </div>
                <button
                  className="px-3 bg-black text-white py-2 flex gap-4 items-center rounded-lg text-sm"
                  onClick={handleShowFinalView}>
                  <span>Rs 250 /-</span>
                  <span>Confirm Booking</span>
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SessionBooking;
