import React from "react";

const Hero = () => {
  return (
    <div className="hero  min-h-screen , bg" style={{}}>
      <div className="hero-overlay"></div>
      <div className=" sora ml-0 pl-36 max-w-7xl mx-auto text-neutral-content">
        <div>
          <h1 className="mb-5 text-5xl font-bold text-[#FFFFFF]">
            Bid on Unique Items from <br /> Around the World
          </h1>
          <p className="mb-5 text-gray-300 text-2xl font-extralight">
            Discover rare collectibles, luxury goods, and vintage <br />
            treasures in our curated auctions
          </p>
          <button className="btn rounded-4xl">Explore Auctions</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
