import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../../Context/Context";
import Footer from "./Footer";
import toast, { Toaster } from "react-hot-toast";

const Home = () => {
  const { products } = useContext(Context);
  const uniqueBrands = products.filter(
    (item, index, self) =>
      item.brand && self.findIndex((p) => p.brand === item.brand) === index
  );

  const [next, setNext] = useState(0);
  const NextBrand = () => {
    if (next < uniqueBrands.length - 1) {
      setNext(next + 1);
    }
  };
  const PrevBrand = () => {
    if (next > 0) {
      setNext(next - 1);
    }
  };
  console.log(next);
  const Navigate =useNavigate();

  // const handleBrand = (item) => {
  //   Navigate(`/brand/${item.brand}`);
  //   SetSearch("");
  //   SetShow(null);
  // };

  return (
    <div>
      <h2>Home</h2> 
      <Toaster position="top-right" reverseOrder={false} />
      <div>
        <img
          src="./Img/HomePg.jpg"
          alt="homepage-pic"
          className="w-[90%] mx-auto mt-14"
        />
      </div>
      <Link to="/products">
        <div className="text-center mt-5">
          <h2 className="font-semibold mb-2">Just In</h2>
          <h1 className=" text-7xl city">NOTHING BEATS THE CITY</h1>
          <p className="mb-2">
            Built to overcome anything the city throws your way.
          </p>
          <button className="bg-black text-white rounded-2xl p-1 px-3 font-semibold mt-2 hover:bg-gray-800">
            Shop Now
          </button>
        </div>
      </Link>
      <div>
        <div className="flex justify-between px-6">
          <h3 className="text-xl font-bold">Discover Icons</h3>
          <div>
            <button
              className="text-2xl m-1 bg-gray-300 rounded-full h-10 w-10 hover:bg-gray-400"
              onClick={PrevBrand}
            >
              {"<"}
            </button>
            <button
              className="text-2xl m-1 bg-gray-300 rounded-full h-10 w-10 hover:bg-gray-400"
              onClick={NextBrand}
            >
              {">"}
            </button>
          </div>
        </div>
        <div
          className="flex max-w-full gap-10 overflow-x-auto"
          style={{ whiteSpace: "nowrap" }}
        >
          {uniqueBrands.slice(next, next + 3).map((item, index) => (
            <div key={index} className="shrink-0">
             <Link to={`/brand/${item.brand}`}><img
                src={item.img[0]}
                alt=""
                className="h-72 w-96 object-cover"
              /></Link>
              <p>{item.brand}</p>
            </div>
          ))}
        </div>
      </div>
      <br />
      <br />
      <Footer />
    </div>
  );
};

export default Home;
