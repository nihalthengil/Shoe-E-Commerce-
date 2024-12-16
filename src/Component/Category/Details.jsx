import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Context } from "../../Context/Context";
import { useContext } from "react";
import axios from "axios";
import toast, { Toaster } from 'react-hot-toast';

const Details = () => {
  const { products, SetProducts, Cart, SetCart, userId } = useContext(Context);
  const Navigate = useNavigate();
  const { id } = useParams();

  const ProductDetail = products.find((item) => item.id === id);
  console.log("🚀 ~ Details ~ ProductDetail:", ProductDetail);

  const [Next, SetNext] = useState(0);

  const [size, Setsize] = useState(null);
  console.log("🚀 ~ Details ~ size:", size);

  const handleBulletClick = (index) => {
    SetNext(index);
  };

  const AddToCart = (product) => {
    if (userId) {
      const exist = Cart.find((item) => item.id === product.id);
      if (exist) {
        toast('Product is Already Added')
      } else {
        if (size !== null) {
          toast('Product is Added to cart')
          const productWithQty = { ...product, size: size, qty: 1 };
          axios.patch(`http://localhost:3000/users/${userId}`, {
            cart: [...Cart, productWithQty],
          });
          SetCart((prevCart) => [...prevCart, productWithQty]);
        } else {
          toast('Select Size');
        }
      }
    } else {
      Navigate("/login");
    }
  };

  return (
    <div className="flex flex-col md:flex-row items-center  p-4 space-y-4  md:space-x-8">
      <div className="flex flex-col items-center w-full max-w-lg mt-20">
        <div className="w-full">
          {ProductDetail.img.slice(Next, Next + 1).map((image, index) => (
            <div key={index} className="flex justify-center">
              <img
                src={image}
                alt="Product Detail"
                className="w-full rounded-lg"
              />
            </div>
          ))}
          <Toaster position="top-center" reverseOrder={false} />
        </div>

        <div className="flex mt-4 space-x-2">
          {ProductDetail.img.map((_, index) => (
            <span
              key={index}
              onClick={() => handleBulletClick(index)}
              className={`cursor-pointer w-3 h-3 rounded-full ${
                Next === index ? "bg-black" : "bg-gray-400"
              } transition-colors duration-300`}
            ></span>
          ))}
        </div>
      </div>

      <div className="flex flex-col w-full md:w-1/2 max-w-md space-y-2">
        <h2 className="text-lg font-medium text-gray-500">
          {ProductDetail.brand}
        </h2>
        <h2 className="text-2xl font-semibold">{ProductDetail.name}</h2>
        <h4>{ProductDetail.gender}</h4>
        <h2 className="text-xl font-bold text-green-600">
          ₹{ProductDetail.price}
        </h2>
        <p>MRP inclusive of all taxes</p>
        <ul className="font-light text-sm list-disc">
          <li>Colors let you rep your favorite collegiate teams</li>
          <li>Leather upper ages to soft perfection.</li>
          <li>Foam midsole offers lightweight, responsive cushioning.</li>
          <li>Padded, low-cut collar looks sleek and feels great.</li>
          <li>
            Rubber outsole with classic hoops pivot circle adds durable traction
            and heritage style.
          </li>
        </ul>

        <select
          name=""
          id=""
          onChange={(e) => Setsize(e.target.value)}
          className="border border-black rounded-sm"
        >
          <option value="" className="bg-black text-white">
            Select Size
          </option>
          {ProductDetail.size.map((item) => (
            <option value={item} className="hover:bg-black text-black">
              {item}
            </option>
          ))}
        </select>
        <button
          className="bg-black text-white rounded p-2 hover:bg-gray-800 transition duration-300"
          onClick={() => AddToCart(ProductDetail)}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Details;
