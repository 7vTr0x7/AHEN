import React from "react";
import Wishlist from "./components/Wishlist";
import Home from "./pages/Home";
import { useSelector } from "react-redux";

const App = () => {
  const isWishlistOpen = useSelector((state) => state.wishlist.isWishlistOpen);

  return (
    <div
      className={`font-aeonik relative h-screen ${
        isWishlistOpen ? "overflow-hidden" : ""
      }`}>
      <Home />

      <Wishlist />
    </div>
  );
};

export default App;
