import React from "react";

const Navber = () => {
  return (
    <div className="navbar bg-base-100 shadow-sm flex justify-around max-w-7xl mx-auto poppins py-6">
      <div className="">
        <a className="btn btn-ghost text-xl">
          <div className="gap-0 poppins text-3xl">
            <span className="text-blue-400 font-light">Auction</span>
            <span className="font-extrabold text-yellow-400">Gallery</span>
          </div>
        </a>
      </div>
      <div className="md:flex hidden  gap-16 text-[#000000] text-[22px] ">
        <p className="cursor-pointer">Home</p>
        <p className="cursor-pointer">Auctions</p>
        <p className="cursor-pointer">Categories</p>
        <p className="cursor-pointer">How To Works</p>
      </div>
      <div className="flex-none">
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
            <div className="indicator">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                />{" "}
              </svg>
              <span className="badge badge-sm indicator-item">8</span>
            </div>
          </div>
          <div
            tabIndex={0}
            className="card card-compact dropdown-content bg-base-100 z-1 mt-3 w-52 shadow"
          ></div>
        </div>
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full">
              <img
                alt="Tailwind CSS Navbar component"
                src="https://i.ibb.co.com/zWp706kX/IMG-0945.jpg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navber;
