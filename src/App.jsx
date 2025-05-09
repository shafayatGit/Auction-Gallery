// import { useEffect } from "react";
import { useEffect, useState } from "react";
import "./App.css";
import Footer from "./assets/Footer/Footer";
import Hero from "./assets/Hero/Hero";
import Navber from "./assets/Navbar/Navber";
import Products from "./assets/Products/Products";
import { toast } from "react-toastify";
// import { addFavorite } from ".";

function App() {
  const [favorite, setFavorite] = useState([]);
  const [oldPrice, setOldPrice] = useState(0);

  const handleLeftDiv = (product, price) => {
    const productPrice = parseInt(price);
    const newPrice = oldPrice + productPrice;
    setOldPrice(newPrice);
    setFavorite([...favorite, product]);
    toast(`${product.title} is added`);
    document.getElementById("no-item-container").className = "hidden";
    document.getElementById(`${product.id}`).classList = "disabled:";
    document.getElementById(`${product.id}`).classList = "";
    document.getElementById(`${product.id}`).classList =
      "text-red-600 cursor-not-allowed";
  };

  const handlePrice = (price) => {
    console.log(price);
  };
  // console.log(favorite);

  // const handleFav = (product) => {
  //   setFavorite([product]);
  //   toast(`${product.title} is added`);
  // document.getElementById("no-item-container").className = "hidden";
  //   document.getElementById(`${product.id}`).classList = "disabled:";
  //   document.getElementById(`${product.id}`).classList = "";
  //   document.getElementById(`${product.id}`).classList =
  //     "text-red-600 cursor-not-allowed";
  // };

  return (
    <>
      <Navber></Navber>
      <Hero></Hero>
      <div className="sora max-w-7xl mx-auto ml-30">
        <div className="mt-32 pl-5 mb-7">
          <h1 className="text-[#0E2954] font-medium  text-[32px]">
            Active Auctions
          </h1>
          <p className="text-[#000000] text-[20px]">
            Discover and bid on extraordinary items
          </p>
        </div>
        <div className="flex flex-col lg:flex-row gap-6">
          <div>
            <Products
              handleLeftDiv={handleLeftDiv}
              handlePrice={handlePrice}
            ></Products>
          </div>
          <div className="w-[30%] text-center">
            <div className="flex mb-16 justify-center items-center mt-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                />
              </svg>
              <h1 className="text-[#0E2954] text-3xl font-medium">
                Favorite Items
              </h1>
            </div>
            <div id="no-item-container">
              <h1 className="text-[#000000] text-[26px] font-medium">
                No favorites yet
              </h1>
              <p className="mb-20 text-[#5e5b5b] text-[18px] font-normal">
                Click the heart icon on any item to add it to your favorites
              </p>
            </div>
            <div>
              {favorite.map((fav) => (
                // left Div

                <div key={fav.id} className=" sora flex gap-5 text-left mb-5">
                  <div>
                    <img className="w-30 rounded-lg" src={fav.image} alt="" />
                  </div>
                  <div>
                    <h1 className="sora text-[#0E2954] font-normal text-base mb-2">
                      {fav.title}
                    </h1>
                    <div className="flex justify-around">
                      <h1 className="sora text-[#0E2954] font-normal text-base">
                        {fav.currentBidPrice}
                      </h1>
                      <h1 className="sora text-[#0E2954] font-normal text-base">
                        Bids:{fav.bidsCount}
                      </h1>
                    </div>
                  </div>

                  <button className="btn">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 9.75 14.25 12m0 0 2.25 2.25M14.25 12l2.25-2.25M14.25 12 12 14.25m-2.58 4.92-6.374-6.375a1.125 1.125 0 0 1 0-1.59L9.42 4.83c.21-.211.497-.33.795-.33H19.5a2.25 2.25 0 0 1 2.25 2.25v10.5a2.25 2.25 0 0 1-2.25 2.25h-9.284c-.298 0-.585-.119-.795-.33Z"
                      />
                    </svg>
                  </button>
                </div>
              ))}
            </div>
            <div>
              <h1 className="text-[#000000] text-[26px] font-normal">
                Total bids Amount:${oldPrice}
              </h1>
            </div>
          </div>
        </div>
      </div>

      <Footer></Footer>
    </>
  );
}

export default App;
