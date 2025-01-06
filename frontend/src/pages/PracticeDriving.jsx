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
  const [cars, setCars] = useState({ Hatchback: [], Sedan: [], SUV: [] }); // To store cars categorized by type
  const [loading, setLoading] = useState(true); // For loading state
  const [error, setError] = useState(""); // For error handling

  const tabs = ["Hatchback", "Sedan", "SUV"];

  useEffect(() => {
    // Fetch data from the API
    const fetchCars = async () => {
      try {
        const response = await fetch(
          "http://localhost:3000/practise-driving/all"
        );
        const data = await response.json();

        if (data.message) {
          const categorizedCars = { Hatchback: [], Sedan: [], SUV: [] };

          // Categorize cars based on type
          data.data.forEach((car) => {
            const carType =
              car.type.charAt(0).toUpperCase() +
              car.type.slice(1).toLowerCase(); // Normalize type

            if (categorizedCars[carType]) {
              categorizedCars[carType].push({
                name: car.carname,
                brand: car.carbrand,
                price: "$" + (car.price || "400"), // Default price if not available
                images: [car.image], // Use the image from the API
                rating: car.starRating, // Use the star rating from the API
                about: {
                  description:
                    car.about?.description || "No description available",
                  ownerName: car.about?.owner_name || "Unknown",
                  ownerImage: car.about?.image || "",
                },
                reviews:
                  car.reviews?.map((review) => ({
                    text: review.text,
                    starRating: review.starRating,
                    createdAt: new Date(review.createdAt).toLocaleDateString(),
                  })) || [],
              });
            }
          });

          setCars(categorizedCars);
        } else {
          setError("Failed to fetch data.");
        }
      } catch (error) {
        setError("An error occurred while fetching the data.");
      } finally {
        setLoading(false);
      }
    };

    fetchCars();
  }, []);

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
