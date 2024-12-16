import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../../Context/Context";

const NewArrival = () => {
  const Navigate = useNavigate();
  const { products, SetProducts } = useContext(Context);

  const HandleClick = (id) => {
    Navigate(`/details/${id}`);
  };

  return (
    <div className="bg-gray-100 py-10">
      <div className="max-w-7xl mx-auto pt-2 mt-2 px-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-8 sticky top-16  h-16  bg-gray-100 p-3 ">
          New Arrival
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {products.map((data) => (
            <div
              key={data.id}
              className="bg-white border rounded-lg shadow hover:shadow-lg duration-150 hover:scale-105 ease-in cursor-pointer"
              onClick={() => HandleClick(data.id)}
            >
              <img
                src={data.img[0]}
                alt={data.name}
                className="w-full h-40 object-cover rounded-t-lg "
              />
              <div className="p-4">
                <h2 className="text-lg font-semibold text-gray-700">
                  {data.name}
                </h2>
                <p className="text-sm text-gray-500">{data.brand}</p>

                <p className="text-lg font-bold text-gray-900 mt-2">
                  ₹{data.price}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewArrival;
