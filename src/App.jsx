// import { useEffect } from "react";
import { useEffect, useState } from "react";
import "./App.css";
import Footer from "./assets/Footer/Footer";
import Hero from "./assets/Hero/Hero";
import Navber from "./assets/Navbar/Navber";
import Products from "./assets/Products/Products";
import Favorite from "./assets/Favorite/Favorite";
import { toast } from "react-toastify";
import { addFavorite } from ".";
import { IoCheckmarkDoneCircle, IoRemoveCircleSharp } from "react-icons/io5";
// import { addFavorite } from ".";

function App() {
  const [favorite, setFavorite] = useState([]);
  // console.log(favorite);
  const [oldPrice, setOldPrice] = useState(0);

  const handleLeftDiv = (product, price) => {
    setFavorite([...favorite, product]);
    // console.log(id);
    const productPrice = parseInt(price);
    const newPrice = oldPrice + productPrice;
    setOldPrice(newPrice);

    toast(
      <div className="flex items-center gap-2">
        <IoCheckmarkDoneCircle
          className="text-green-700"
          size={35}
        ></IoCheckmarkDoneCircle>
        <p className="text-black font-semibold">
          {product.title} Has Been Added
        </p>
      </div>
    );
    document.getElementById("no-item-container").className = "hidden";

    document.getElementById(`${product.id}`).classList =
      "text-red-600 cursor-pointer";
  };

  const handleRemove = (id, price, product) => {
    // console.log(id);
    const remainingFavorite = favorite.filter((fav) => fav.id !== id);
    const productPrice = parseInt(price);
    const newPrice = oldPrice - productPrice;
    setOldPrice(newPrice);
    setFavorite(remainingFavorite);
    toast(
      <div className="flex items-center gap-2">
        <IoRemoveCircleSharp
          className="text-red-700"
          size={35}
        ></IoRemoveCircleSharp>
        <p className="text-black font-semibold">
          {product.title} Has Been Removed
        </p>
      </div>
    );
    document.getElementById(`${product.id}`).classList = "block";
    document.getElementById(`${product.id}`).classList = "";
    document.getElementById(`${product.id}`).classList = "text-black";
  };

  return (
    <>
      <Navber></Navber>
      <Hero></Hero>
      <div className="sora max-w-7xl mx-auto ">
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
              // handlePrice={handlePrice}
            ></Products>
          </div>
          <div className="lg:w-[30%] text-center">
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
                <Favorite handleRemove={handleRemove} fav={fav}></Favorite>
              ))}
            </div>
            <div>
              <h1 className="text-[#000000] text-[26px] font-normal">
                Total Bids Amount:{" "}
                <span className="font-bold">${oldPrice}</span>
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
