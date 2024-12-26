import React from "react";
import { useSelector } from "react-redux";
import Wishlist from "./components/Wishlist";
import Home from "./pages/Home";

import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import CourseDetails from "./components/Courses/CourseDetails";
import UserCourseDetails from "./components/Courses/UserCourseDetails";
import OngoingSession from "./components/Courses/UserCourseDetails/Session/OngoingSession/OngoingSession";
import Session from "./components/Courses/UserCourseDetails/Session/Session";
import Courses from "./pages/Courses";

import DrivingLicense from "./Components/DrivingLicense/PageOne";
import LearningLicense from "./Components/LearningLicense/PageOne";
import LicenseProgress from "./Components/LicenseProgress/LicenseProgress";
import DrivingDetails from "./components/PracticeDriving/DrivingDetails/DrivingDetails";
import Bookings from "./pages/Bookings";
import PracticeDriving from "./pages/PracticeDriving";

const App = () => {
  const isWishlistOpen = useSelector((state) => state.wishlist.isWishlistOpen);

  return (
    <div
      className={`font-aeonik relative h-screen ${
        isWishlistOpen ? "overflow-hidden" : ""
      }`}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/session" element={<OngoingSession />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/courses/:course" element={<CourseDetails />} />
          <Route path="/courses/user/:course" element={<UserCourseDetails />} />
          <Route path="/courses/user/:course/:session" element={<Session />} />
          <Route path="/driving-license" element={<DrivingLicense />} />
          <Route path="/license-progress" element={<LicenseProgress />} />
          <Route path="/learning-license" element={<LearningLicense />} />
          <Route path="/practice-driving" element={<PracticeDriving />} />
          <Route
            path="/practice-driving/:practice"
            element={<DrivingDetails />}
          />
          <Route path="/bookings" element={<Bookings />} />
        </Routes>
      </Router>

      {isWishlistOpen && <Wishlist />}
    </div>
  );
};

export default App;
