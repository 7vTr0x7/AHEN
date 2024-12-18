import React from "react";
import Wishlist from "./components/Wishlist";
import Home from "./pages/Home";
import { useSelector } from "react-redux";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Courses from "./pages/Courses";
import CourseDetails from "./components/Courses/CourseDetails";

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
          <Route path="/courses" element={<Courses />} />
          <Route path="/courses/:course" element={<CourseDetails />} />
        </Routes>
      </Router>

      <Wishlist />
    </div>
  );
};

export default App;
