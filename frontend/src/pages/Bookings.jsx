import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Breadcrumb from "../components/Breadcrumb";

const Bookings = () => {
  const [bookings, setBookings] = useState([]);
  const [filter, setFilter] = useState("All");

  useEffect(() => {
    // Fetch bookings data
    const fetchBookings = async () => {
      try {
        const response = await fetch(
          "http://localhost:3000/api/get-all-bookings"
        );
        const data = await response.json();
        if (data.message === "Bookings fetched successfully") {
          setBookings(data.bookings);
        }
      } catch (error) {
        console.error("Error fetching bookings:", error);
      }
    };

    fetchBookings();
  }, []);

  const filteredBookings =
    filter === "All"
      ? bookings
      : bookings.filter((booking) => booking.status === filter.toLowerCase());

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
                      src="https://via.placeholder.com/150" // Add the appropriate image URL here
                      alt="Car"
                      className="rounded-md w-28 h-20 object-cover mr-4"
                    />
                    <div className="pt-4">
                      <h2 className="text-base font-bold mb-1">
                        {booking.course_id}{" "}
                        {/* Replace with actual course name if available */}
                      </h2>
                      <p className="text-gray-500 text-xs">
                        {booking.slot_time}
                      </p>
                    </div>
                  </div>
                  <div className="text-xs space-y-1 border-b pb-4">
                    <div className="flex justify-between">
                      <span className="font-medium">Booking Date</span>
                      <span>
                        {new Date(booking.booking_date).toLocaleDateString()}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">Booking ID</span>
                      <span>{booking.booking_id || "N/A"}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">Slot Date</span>
                      <span>
                        {new Date(booking.slot_date).toLocaleDateString()}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">Slot Time</span>
                      <span>{booking.slot_time}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">Status</span>
                      <span
                        className={`${
                          booking.status === "pending"
                            ? "text-yellow-500"
                            : booking.status === "completed"
                            ? "text-green-500"
                            : "text-red-500"
                        }`}>
                        {booking.status.charAt(0).toUpperCase() +
                          booking.status.slice(1)}
                      </span>
                    </div>
                  </div>
                  <div className="mt-4 space-y-1 text-xs">
                    <div className="flex justify-between">
                      <span className="font-medium">Amount</span>
                      <span>Rs {booking.amount}</span>
                    </div>
                  </div>
                </div>
                {booking.status === "pending" && (
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
