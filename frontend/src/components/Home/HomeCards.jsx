import React from "react";
import cardImage1 from "../../assets/images/homeCardImage.png";

const HomeCards = () => {
  const data = [
    {
      id: "1",
      title: "Driving Zero to Hero",
      des: "Learn driving right from basics & become a Master.",
    },
    {
      id: "2",
      title: "Driving Zero to Hero",
      des: "Learn driving right from basics & become a Master.",
    },
    {
      id: "3",
      title: "Driving Zero to Hero",
      des: "Learn driving right from basics & become a Master.",
    },
  ];

  return (
    <div className="flex flex-wrap gap-6 justify-center items-center">
      {data.map((info) => (
        <div
          className="w-full sm:w-[256px] bg-white py-10 md:py-20 px-4 shadow-lg rounded-xl flex flex-col items-center justify-center text-center hover:scale-105 transition-transform"
          key={info.id}>
          <div>
            <img alt={info.title} src={cardImage1} className="w-full h-32 " />
          </div>
          <p className="text-lg font-bold mt-6">{info.title}</p>
          <p className="text-sm text-[#959595] mt-2">{info.des}</p>
        </div>
      ))}
    </div>
  );
};

export default HomeCards;
