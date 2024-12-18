import React from "react";

const SessionButtons = () => (
  <div className="flex flex-col gap-1 mt-5 text-xs text-center">
    <div className="flex w-[70%] justify-between">
      <button className="w-[48%] px-5 py-3 rounded-lg bg-black text-white hover:bg-transparent border hover:border-black hover:text-black">
        Group Session
      </button>
      <button className="w-[48%] px-5 py-3 rounded-lg bg-transparent text-black hover:bg-black border border-black hover:text-white">
        One-to-One Session
      </button>
    </div>
  </div>
);

export default SessionButtons;
