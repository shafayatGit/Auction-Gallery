import React, { useEffect, useState } from "react";
import Product from "../Product/Product";

const Products = ({ handleLeftDiv }) => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  // console.log(products);
  return (
    <div>
      <div className="overflow-x-auto w-full ">
        <table className="table table-zebra ">
          {/* head */}
          <thead>
            <tr className="text-[#000000] text-[16px] font-normal">
              <th className="text-[18px]">Items</th>
              <th>Current Bid</th>
              <th className="hidden md:block">Time Left</th>
              <th>Bid Now</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <Product
                key={product.id}
                handleLeftDiv={handleLeftDiv}
                product={product}
              ></Product>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Products;
