import React from "react";
import Wishlist from "./components/Wishlist";
import Home from "./pages/Home";
import { useSelector } from "react-redux";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Courses from "./pages/Courses";
import CourseDetails from "./components/Courses/CourseDetails";
import UserCourseDetails from "./components/Courses/UserCourseDetails";
import Session from "./components/Courses/UserCourseDetails/Session/Session";
import OngoingSession from "./components/Courses/UserCourseDetails/Session/OngoingSession/OngoingSession";

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
        </Routes>
      </Router>

      <Wishlist />
    </div>
  );
};

export default App;
