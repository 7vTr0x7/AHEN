import React from "react";

const Tabs = ({ tabs, selectedTab, setSelectedTab }) => (
  <div className="my-4 flex gap-4">
    {tabs.map((tab) => (
      <button
        key={tab}
        onClick={() => setSelectedTab(tab)}
        className={`px-6 py-2 rounded-lg  text-xs ${
          selectedTab === tab
            ? "bg-black text-white"
            : "bg-transparent border border-black text-black"
        }`}>
        {tab}
      </button>
    ))}
  </div>
);

export default Tabs;
