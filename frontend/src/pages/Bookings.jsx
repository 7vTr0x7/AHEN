import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Breadcrumb from "../components/Breadcrumb";

const Bookings = () => {
  const bookings = [
    {
      id: "AHEN00001458",
      car: "Jeep Wrangler",
      type: "Hatchback",
      duration: "60 min",
      bookingDate: "Monday 23, 2024",
      slotDate: "Monday 24, 2024",
      slotTime: "2:00 AM - 02:00 PM",
      status: "Pending",
      amount: 449,
      tax: 50,
      total: 499,
      image: "https://via.placeholder.com/150",
    },
    {
      id: "AHEN00001408",
      car: "Jeep Wrangler",
      type: "Hatchback",
      duration: "60 min",
      bookingDate: "Monday 23, 2024",
      slotDate: "Monday 24, 2024",
      slotTime: "2:00 AM - 02:00 PM",
      status: "Upcoming",
      amount: 449,
      tax: 50,
      total: 499,
      image: "https://via.placeholder.com/150",
    },
    {
      id: "AHEN00001459",
      car: "Tesla Model X",
      type: "SUV",
      duration: "45 min",
      bookingDate: "Tuesday 24, 2024",
      slotDate: "Wednesday 25, 2024",
      slotTime: "10:00 AM - 12:00 PM",
      status: "Completed",
      amount: 999,
      tax: 100,
      total: 1099,
      image: "https://via.placeholder.com/150",
    },
    {
      id: "AHEN00001460",
      car: "Ford Mustang",
      type: "Convertible",
      duration: "30 min",
      bookingDate: "Friday 26, 2024",
      slotDate: "Saturday 27, 2024",
      slotTime: "4:00 PM - 5:00 PM",
      status: "Canceled",
      amount: 599,
      tax: 70,
      total: 669,
      image: "https://via.placeholder.com/150",
    },
  ];

  const [filter, setFilter] = useState("All");

  const filteredBookings =
    filter === "All"
      ? bookings
      : bookings.filter((booking) => booking.status === filter);

  return (
    <div className="bg-[#F3F4F6] pb-20 h-auto">
      <Navbar />
      <div className="px-4 sm:px-10 lg:px-24">
        <Breadcrumb />
        <div className="my-5 flex justify-between items-center">
          <p className="text-xl">Bookings</p>
        </div>
        <div className="flex gap-4 mb-6">
          {["All", "Completed", "Upcoming", "Canceled"].map((status) => (
            <button
              key={status}
              onClick={() => setFilter(status)}
              className={`px-4 py-1 rounded-2xl text-sm ${
                filter === status
                  ? "bg-black text-white"
                  : "bg-transparent text-black border border-black"
              }`}>
              {status}
            </button>
          ))}
        </div>
        {filteredBookings.length === 0 ? (
          <div className="flex justify-center items-center h-48">
            <p className="text-gray-500 text-sm">No bookings available.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredBookings.map((booking) => (
              <div key={booking.id}>
                <div className="bg-white p-4 rounded-lg shadow-md border border-gray-200">
                  <div className="flex items-start mb-4 border-b pb-4">
                    <img
                      src={booking.image}
                      alt={booking.car}
                      className="rounded-md w-28 h-20 object-cover mr-4"
                    />
                    <div className="pt-4">
                      <h2 className="text-base font-bold mb-1">
                        {booking.car}
                      </h2>
                      <p className="text-gray-500 text-xs">{booking.type}</p>
                    </div>
                  </div>
                  <div className="text-xs space-y-1 border-b pb-4">
                    <div className="flex justify-between">
                      <span className="font-medium">Booking Date</span>
                      <span>{booking.bookingDate}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">Booking ID</span>
                      <span>{booking.id}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">Slot Date</span>
                      <span>{booking.slotDate}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">Slot Time</span>
                      <span>{booking.slotTime}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">Status</span>
                      <span
                        className={`${
                          booking.status === "Pending"
                            ? "text-yellow-500"
                            : booking.status === "Completed"
                            ? "text-green-500"
                            : "text-red-500"
                        }`}>
                        {booking.status}
                      </span>
                    </div>
                  </div>
                  <div className="mt-4 space-y-1 text-xs">
                    <div className="flex justify-between">
                      <span className="font-medium">Amount</span>
                      <span>Rs {booking.amount}</span>
                    </div>
                    <div className="flex justify-between border-b pb-2">
                      <span className="font-medium">Tax & Fees</span>
                      <span>Rs {booking.tax}</span>
                    </div>
                    <div className="flex justify-between text-sm font-bold">
                      <span>Total</span>
                      <span>Rs {booking.total}</span>
                    </div>
                  </div>
                </div>
                {booking.status === "Upcoming" && (
                  <div className="flex justify-end mt-2">
                    <button className="border border-black text-xs px-4 py-1 rounded-lg">
                      Cancel Booking
                    </button>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Bookings;
