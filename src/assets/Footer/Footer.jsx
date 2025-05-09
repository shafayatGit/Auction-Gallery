import React from "react";

const Footer = () => {
  return (
    <div className="sora text-center flex flex-col gap-5 my-32">
      <div className="gap-0  text-3xl">
        <span className="text-blue-400 font-light">Auction</span>
        <span className="font-extrabold text-yellow-400">Gallery</span>
      </div>
      <div className="flex justify-center font-normal text-[22px]">
        <p>Bid.</p>
        <p>Win.</p>
        <p>Own.</p>
      </div>

      <div>
        <p className="text-[#000000] text-[18px] justify-center">
          © 2025 AuctionHub. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
