import React from "react";

const NoItem = () => {
  return (
    <div>
      <div id="no-item-container">
        <h1 className="text-[#000000] text-[26px] font-medium">
          No favorites yet
        </h1>
        <p className="mb-20 text-[#5e5b5b] text-[18px] font-normal">
          Click the heart icon on any item to add it to your favorites
        </p>
      </div>
    </div>
  );
};

export default NoItem;
