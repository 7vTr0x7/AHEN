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
import DrivingLicense from "./components/DrivingLicense/PageOne";
import LearningLicense from "./components/LearningLicense/PageOne";
import LicenseProgress from "./components/LicenseProgress/LicenseProgress";
import DrivingDetails from "./components/PracticeDriving/DrivingDetails/DrivingDetails";
import Bookings from "./pages/Bookings";
import PracticeDriving from "./pages/PracticeDriving";
import { Toaster } from "react-hot-toast";
import Login from "./Auth/Login";
import ProtectedRoutes from "./components/ProtectedRoutes";

const App = () => {
  const isWishlistOpen = useSelector((state) => state.wishlist.isWishlistOpen);
  const isUserLoginOpen = useSelector((state) => state.user.isUserLoginOpen);

  return (
    <div
      className={`font-aeonik relative h-screen ${
        isWishlistOpen || isUserLoginOpen ? "overflow-hidden" : ""
      }`}
    >
      <Toaster />
      <Router>
        <Routes>
          {/* Public Route */}
          <Route path="/" element={<Home />} />

          {/* Protected Routes */}
          <Route
            path="/session"
            element={
              <ProtectedRoutes>
                <OngoingSession />
              </ProtectedRoutes>
            }
          />
          <Route
            path="/courses"
            element={
              <ProtectedRoutes>
                <Courses />
              </ProtectedRoutes>
            }
          />
          <Route
            path="/courses/:course"
            element={
              <ProtectedRoutes>
                <CourseDetails />
              </ProtectedRoutes>
            }
          />
          <Route
            path="/courses/user/:course"
            element={
              <ProtectedRoutes>
                <UserCourseDetails />
              </ProtectedRoutes>
            }
          />
          <Route
            path="/courses/user/:course/:session"
            element={
              <ProtectedRoutes>
                <Session />
              </ProtectedRoutes>
            }
          />
          <Route
            path="/driving-license"
            element={
              <ProtectedRoutes>
                <DrivingLicense />
              </ProtectedRoutes>
            }
          />
          <Route
            path="/license-progress"
            element={
              <ProtectedRoutes>
                <LicenseProgress />
              </ProtectedRoutes>
            }
          />
          <Route
            path="/learning-license"
            element={
              <ProtectedRoutes>
                <LearningLicense />
              </ProtectedRoutes>
            }
          />
          <Route
            path="/practice-driving"
            element={
              <ProtectedRoutes>
                <PracticeDriving />
              </ProtectedRoutes>
            }
          />
          <Route
            path="/practice-driving/:practice"
            element={
              <ProtectedRoutes>
                <DrivingDetails />
              </ProtectedRoutes>
            }
          />
          <Route
            path="/bookings"
            element={
              <ProtectedRoutes>
                <Bookings />
              </ProtectedRoutes>
            }
          />
        </Routes>
      </Router>

      {isWishlistOpen && <Wishlist />}
      {isUserLoginOpen && <div className="login-slider"> <Login /> </div>}
    </div>
  );
};

export default App;
