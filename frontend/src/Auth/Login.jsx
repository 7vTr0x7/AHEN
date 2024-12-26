import React, { useState } from "react";
import { LuArrowLeft } from "react-icons/lu";
import { useDispatch, useSelector } from "react-redux";
import { toggleOpenUserLogin } from "../redux/slices/userSlice";
// Import FontAwesome components
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle, faFacebook } from '@fortawesome/free-brands-svg-icons';
import loginImg from "../assets/images/loginImg.png";

const Login = () => {
  const dispatch = useDispatch();
  const isUserLoginOpen = useSelector((state) => state.user.isUserLoginOpen);
  const [isSignup, setIsSignup] = useState(false);

  const handleOpenLogin = () => {
    dispatch(toggleOpenUserLogin(false));
  };

  const toggleForm = () => {
    setIsSignup((prev) => !prev);
  };

  return (
    <div
      className={`fixed right-0 top-0 h-full overflow-y-auto z-50 w-96 bg-white shadow-lg transition-transform duration-500 ease-in-out transform ${
        isUserLoginOpen
          ? "translate-x-0 opacity-100"
          : "translate-x-full opacity-0"
      } rounded-2xl`}
    >
      <div className="pt-4 px-5 pb-2">
        <LuArrowLeft
          className="text-xl cursor-pointer"
          onClick={handleOpenLogin}
        />
      </div>
      <img src={loginImg} alt="Login Illustration" className="w-full h-auto" />
      <div className="bg-white rounded-t-3xl relative bottom-6 z-50 py-8 px-8">
        <h2 className="text-xl font-semibold text-gray-800 mb-4 leading-6">
          {isSignup ? "We’re excited to get you onboard!" : "Welcome back!"}
        </h2>
        <p className="text-lg font-medium text-gray-700 mb-6">
          {isSignup ? "Sign Up" : "Sign In"}
        </p>
        <form>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-600 mb-2"
            >
              Email ID
            </label>
            <input
              type="email"
              id="email"
              placeholder="someone@gmail.com"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-600 mb-2"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder={isSignup ? "Create password" : "Enter your password"}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
            />
          </div>
          {isSignup && (
            <div className="flex items-center mb-6">
              <input
                type="checkbox"
                id="terms"
                className="w-4 h-4 mt-1 text-blue-500 border-gray-300 rounded focus:ring-blue-400"
              />
              <label
                htmlFor="terms"
                className="ml-2 text-xs text-gray-600 leading-4"
              >
                Accept terms and Conditions
              </label>
            </div>
          )}
          <button
            type="submit"
            className="w-full py-3 bg-black text-white font-medium text-sm rounded-lg hover:bg-gray-800 transition"
          >
            {isSignup ? "Sign Up" : "Login"}
          </button>
        </form>
        <div className="my-6 flex items-center">
          <hr className="flex-grow border-gray-300" />
          <span className="px-4 text-sm text-gray-500">or</span>
          <hr className="flex-grow border-gray-300" />
        </div>
        <div className="flex justify-center gap-4">
          <button className="flex items-center justify-center gap-2 px-4 py-2 w-full border rounded-lg border-gray-300 hover:bg-gray-100 transition">
            <FontAwesomeIcon icon={faGoogle} className="text-red-500" />
            <span className="text-sm font-medium text-gray-700">Google</span>
          </button>
          <button className="flex items-center justify-center gap-2 px-4 py-2 w-full border rounded-lg border-gray-300 hover:bg-gray-100 transition">
            <FontAwesomeIcon icon={faFacebook} className="text-blue-500" />
            <span className="text-sm font-medium text-gray-700">Facebook</span>
          </button>
        </div>
        <p className="mt-6 text-center text-sm text-gray-600">
          {isSignup ? (
            <>
              Already have an account?{" "}
              <span
                className="text-blue-500 font-medium cursor-pointer"
                onClick={toggleForm}
              >
                Login
              </span>
            </>
          ) : (
            <>
              Don't have an account?{" "}
              <span
                className="text-blue-500 font-medium cursor-pointer"
                onClick={toggleForm}
              >
                Sign Up
              </span>
            </>
          )}
        </p>
      </div>
    </div>
  );
};

export default Login;
