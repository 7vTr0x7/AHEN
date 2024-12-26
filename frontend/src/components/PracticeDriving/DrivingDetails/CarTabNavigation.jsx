import React from "react";

const CarTabNavigation = ({ activeTab, setActiveTab }) => {
  return (
    <>
      <div className="flex items-center gap-24  text-sm text-[#616161] md:px-10 select-none">
        <p
          className={`cursor-pointer ${
            activeTab === "about" ? "text-black " : ""
          }`}
          onClick={() => setActiveTab("about")}>
          {`About`}
        </p>
        <p
          className={`cursor-pointer ${
            activeTab === "reviews" ? "text-black " : ""
          }`}
          onClick={() => setActiveTab("reviews")}>
          Reviews
        </p>
      </div>
      <div className="flex justify-start mt-2 ">
        <div className="flex  md:w-3/12 w-3/12 justify-between">
          <hr
            className={`h-[3px] ${
              activeTab === "about"
                ? "w-[50%] bg-black"
                : "w-[50%] bg-[#D1D5DB]"
            }`}
            style={{ transition: "all 0.3s" }}
          />
          <hr
            className={`h-[3px] ${
              activeTab === "reviews"
                ? "w-[50%] bg-black"
                : "w-[50%] bg-[#D1D5DB]"
            }`}
            style={{ transition: "all 0.3s" }}
          />
        </div>
      </div>
    </>
  );
};

export default CarTabNavigation;
