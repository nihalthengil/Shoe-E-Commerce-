import React, { useContext } from "react";
import { AdminContext } from "../../Context/AdminContext";

const OrderPage = () => {
  const { orders } = useContext(AdminContext);
  console.log("🚀 ~ OrderPage ~ orders:", orders);
  return (
    <div>
      <h1></h1>
      {orders.map((data) => (
        <div key={data.id} className="border my-2 p-2 rounded-md">
          <div className="flex justify-between">
          <div>
          <h3 className="font-bold">Order ID: {data.id}</h3>
          <p className="font-semibold">
            Name: {data.address.firstName} {data.address.lastName}
          </p>
          </div>
          <div>
          <p className="font-normal text-right">No: {data.address.phone}</p>
          <p className="text-sm text-right">
            {data.address.address1},{data.address.city}
          </p>
          <p className="text-sm text-right">
            {data.address.district},{data.address.pinCode},{data.address.state}
          </p>
          </div>
          </div>
          {data.products.map((product) => (
            <div className="flex">
              <img
                src={product.img}
                className="w-20 h-20 object-contain rounded-md mr-4"
                alt=""
              />
              <div className="flex flex-col font-semibold">
                <h2>{product.brand}</h2>
                <p>{product.name}</p>
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default OrderPage;
