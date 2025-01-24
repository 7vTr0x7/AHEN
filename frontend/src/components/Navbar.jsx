import React, { useEffect, useState } from "react";

import { FaAngleDown } from "react-icons/fa6";
import { CiHeart } from "react-icons/ci";
import { IoNotificationsOutline } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { toggleOpenWishlist } from "../redux/slices/wishlistSlice";
import { useNavigate } from "react-router-dom";
import { IoNotifications } from "react-icons/io5";
import { toggleOpenNotification } from "../redux/slices/notificationSlice";
import Notification from "./Notification";
import { toggleOpenUserLogin } from "../redux/slices/userSlice";
import { getToken } from "../../utils/constants";
import toast from "react-hot-toast";

const Navbar = () => {
  const [error, setError] = useState("");
  const [user, setUser] = useState(null);

  const [isBoxOpen, setIsBoxOpen] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const token = getToken();

  const isNotificationOpen = useSelector(
    (state) => state.notification.isNotificationOpen
  );

  const [location, setLocation] = useState({ city: "", town: "" });

  useEffect(() => {
    const storedUserId = localStorage.getItem("user_id");

    if (storedUserId) {
      const fetchProfile = async () => {
        try {
          const response = await fetch(
            `https://driving.shellcode.cloud/api/profiles/profile/${storedUserId}`
          );
          const data = await response.json();
          if (data?.profile) {
            setUser(data.profile);
          }
        } catch (error) {
          console.error("Error fetching profile data:", error);
          toast.error("Error fetching profile data.");
        }
      };

      fetchProfile();
    }
  }, []);

  const fetchLocationDetails = async (lat, lon) => {
    const API_KEY = import.meta.env.VITE_MAP_API; // Replace with your API key
    try {
      const response = await fetch(
        `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lon}&key=${API_KEY}`
      );
      const data = await response.json();

      if (data.status === "OK" && data.results.length > 0) {
        const addressComponents = data.results[0].address_components;

        // Extract city and town from address components
        let city = "Unknown";
        let town = "Unknown";

        addressComponents.forEach((component) => {
          if (component.types.includes("locality")) {
            city = component.long_name;
          } else if (
            component.types.includes("sublocality") ||
            component.types.includes("administrative_area_level_2")
          ) {
            town = component.long_name;
          }
        });

        setLocation({ city, town });
        setError("");
      } else {
        setError("Unable to fetch location details.");
      }
    } catch {
      setError("An error occurred while fetching location details.");
    }
  };

  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          fetchLocationDetails(latitude, longitude);
        },
        () => {
          setError("Failed to get location. Please enable location services.");
        }
      );
    } else {
      setError("Geolocation is not supported by this browser.");
    }
  };

  useEffect(() => {
    getLocation();
  }, []);

  const handleOpenWishlist = () => {
    dispatch(toggleOpenWishlist(true));
  };

  const openNotificationHandler = () => {
    dispatch(toggleOpenNotification(true));
  };
  const openLoginHandler = () => {
    dispatch(toggleOpenUserLogin(true));
  };
  const closeNotificationHandler = () => {
    dispatch(toggleOpenNotification(false));
  };

  const logoutHandler = () => {
    localStorage.removeItem("user_id");
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <>
      <div className="bg-[#F3F4F6] relative z-50 shadow-md px-4 py-4 flex items-center justify-between sm:px-12 md:px-24 select-none">
        <div className="flex items-center gap-4 sm:gap-12">
          <div
            className="bg-black px-4 py-2 text-white font-semibold rounded-md text-sm sm:text-base cursor-pointer"
            onClick={() => navigate("/")}>
            Ahen
          </div>
          {token && (
            <div className="flex flex-col items-end ">
              <p className="text-[#808080] text-xs uppercase">Location</p>
              <div className="text-sm flex items-center gap-2">
                <p className="m-0">
                  {location.city} {location.town}
                </p>
              </div>
            </div>
          )}
        </div>

        <div className="flex items-center gap-3 md:gap-5 text-lg md:text-xl">
          {token && (
            <>
              <CiHeart
                className="text-xl md:text-2xl cursor-pointer"
                onClick={handleOpenWishlist}
              />
              <div className="relative">
                {isNotificationOpen ? (
                  <IoNotifications
                    className="text-xl md:text-xl cursor-pointer"
                    onClick={closeNotificationHandler}
                  />
                ) : (
                  <IoNotificationsOutline
                    className="text-xl md:text-xl cursor-pointer"
                    onClick={openNotificationHandler}
                  />
                )}
                {isNotificationOpen && <Notification />}
              </div>
            </>
          )}

          {token ? (
            <div className="relative">
              <img
                alt="profile"
                src={user?.photo || "https://via.placeholder.com/300"}
                className="h-7 w-7 rounded-md border-2 border-gray-300 cursor-pointer"
                onClick={() => setIsBoxOpen(!isBoxOpen)} // Toggle dropdown visibility
              />

              {isBoxOpen && (
                <div className="absolute right-0 mt-2 bg-white shadow-lg p-4 w-48 z-50 border rounded-md">
                  <div
                    className="mt-2 cursor-pointer"
                    onClick={() => navigate("/profile")}>
                    <div className="text-sm font-semibold">Profile</div>
                  </div>
                  <div
                    className="mt-2 cursor-pointer"
                    onClick={() => navigate("/courses")}>
                    <div className="text-sm font-semibold">Courses</div>
                  </div>

                  <div
                    className="mt-2 cursor-pointer"
                    onClick={() => navigate("/driving-license")}>
                    <div className="text-sm font-semibold">License</div>
                    <div className="text-xs text-gray-500">
                      Standard License
                    </div>
                  </div>
                  <div
                    className="mt-2 cursor-pointer"
                    onClick={() => navigate("/learning-license")}>
                    <div className="text-sm font-semibold">License</div>
                    <div className="text-xs text-gray-500">
                      Learning License
                    </div>
                  </div>
                  <div
                    className="mt-2 cursor-pointer"
                    onClick={() => navigate("/license-progress")}>
                    <div className="text-sm font-semibold">
                      License Progress
                    </div>
                    <div className="text-xs text-gray-500">
                      License Progress
                    </div>
                  </div>

                  <div
                    className="mt-2 cursor-pointer"
                    onClick={() => navigate("/bookings")}>
                    <div className="text-sm font-semibold">Bookings</div>
                  </div>
                  <div
                    className="mt-2 cursor-pointer"
                    onClick={() => navigate("/practice-driving")}>
                    <div className="text-sm font-semibold">
                      Practice Driving
                    </div>
                  </div>
                  <div className="mt-2 cursor-pointer" onClick={logoutHandler}>
                    <div className="text-sm font-semibold">Logout</div>
                  </div>
                </div>
              )}
            </div>
          ) : (
            <p className="text-sm cursor-pointer" onClick={openLoginHandler}>
              Login
            </p>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
