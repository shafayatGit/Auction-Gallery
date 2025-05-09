import React from "react";
import { ImCancelCircle } from "react-icons/im";
import NoItem from "../NoItem";

const Favorite = ({ fav, handleRemove }) => {
  return (
    <div>
      <div className="text-black sora flex gap-5 text-left px-5 items-center mb-5">
        <div>
          <img className="w-30 h-20 rounded-lg" src={fav.image} alt="" />
        </div>
        <div>
          <h1 className="sora text-[#0E2954] font-normal text-base mb-2">
            {fav.title}
          </h1>
          <div className="flex justify-between">
            <h1 className="sora text-[#0E2954] font-normal text-base">
              {fav.currentBidPrice}
            </h1>
            <h1 className="sora text-[#0E2954] font-normal text-base">
              Bids:{fav.bidsCount}
            </h1>
          </div>
        </div>

        <button
          onClick={() => handleRemove(fav.id, fav.currentBidPrice, fav)}
          className="btn hover:text-red-700"
        >
          <ImCancelCircle size={20}></ImCancelCircle>
        </button>
      </div>
    </div>
  );
};

export default Favorite;
