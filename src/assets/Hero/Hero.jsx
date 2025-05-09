import React from "react";

const Hero = () => {
  const goExplore = () => {
    const mainDiv = document.getElementById("Main_div");
    mainDiv.scrollIntoView({
      behavior: "smooth",
    });
  };
  return (
    <div className="hero  min-h-screen , bg" style={{}}>
      <div className="hero-overlay"></div>
      <div className=" sora ml-0 pl-8 md:pl-36 max-w-7xl mx-auto text-neutral-content">
        <div>
          <h1 className="mb-5 text-2xl md:text-5xl font-bold text-[#FFFFFF]">
            Bid on Unique Items from <br /> Around the World
          </h1>
          <p className="mb-5 text-gray-300 text-base md:text-2xl font-extralight">
            Discover rare collectibles, luxury goods, and vintage <br />
            treasures in our curated auctions
          </p>
          <button
            onClick={goExplore}
            className="relative inline-flex items-center px-12 py-3 overflow-hidden text-lg font-medium text-white border-2 border-white rounded-full hover:text-white group hover:bg-gray-50"
          >
            <span class="absolute left-0 block w-full h-0 transition-all bg-blue-500 opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
            <span class="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
              <svg
                class="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                ></path>
              </svg>
            </span>
            <span class="relative">Explore</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
