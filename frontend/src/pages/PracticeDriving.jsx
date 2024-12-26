import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Breadcrumb from "../components/Breadcrumb";
import CarCardGrid from "../components/PracticeDriving/CarCardGrid";
import SearchBar from "../components/PracticeDriving/SearchBar";
import Tabs from "../components/PracticeDriving/Tabs";

const PracticeDriving = () => {
  const [selectedTab, setSelectedTab] = useState("Hatchback");
  const [currentImageIndex, setCurrentImageIndex] = useState({});
  const [isMobile, setIsMobile] = useState(false);

  const tabs = ["Hatchback", "Sedan", "SUV"];

  const cars = {
    Hatchback: [
      {
        name: "Maruti Swift",
        brand: "Maruti Suzuki",
        price: "$8,000",
        images: [
          "https://images.pexels.com/photos/358070/pexels-photo-358070.jpeg",
        ],
        rating: 4, // Rating out of 5
      },
      {
        name: "Hyundai i20",
        brand: "Hyundai",
        price: "$10,000",
        images: [
          "https://images.pexels.com/photos/164634/pexels-photo-164634.jpeg",
          "https://images.pexels.com/photos/116675/pexels-photo-116675.jpeg",
        ],
        rating: 3, // Rating out of 5
      },
    ],
    Sedan: [],
    SUV: [
      {
        name: "Toyota Fortuner",
        brand: "Toyota",
        price: "$40,000",
        images: [
          "https://images.pexels.com/photos/1551702/pexels-photo-1551702.jpeg",
        ],
        rating: 5, // Rating out of 5
      },
    ],
  };

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleImageClick = (carName, index) => {
    setCurrentImageIndex((prev) => ({ ...prev, [carName]: index }));
  };

  return (
    <div className="bg-[#F3F4F6] pb-20 h-auto">
      <Navbar />
      <div className="px-4 sm:px-10 lg:px-24">
        <Breadcrumb />
        <div className="my-5 flex justify-between items-center">
          <p className="text-xl">Practice Driving</p>
          <SearchBar />
        </div>
        <Tabs
          tabs={tabs}
          selectedTab={selectedTab}
          setSelectedTab={setSelectedTab}
        />
        <div className="mt-8">
          <CarCardGrid
            cars={cars[selectedTab]}
            currentImageIndex={currentImageIndex}
            handleImageClick={handleImageClick}
          />
        </div>
      </div>
    </div>
  );
};

export default PracticeDriving;
