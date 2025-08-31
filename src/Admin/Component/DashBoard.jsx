import React from "react";
import { AdminContext } from "../../Context/AdminContext";
import { Context } from "../../Context/Context";
import { useContext } from "react";

const DashBoard = () => {
  const { users, orders } = useContext(AdminContext);
  const { products } = useContext(Context);
  const TotalIncome = orders.reduce(
    (total, item) => total + item.totalPrice,
    0
  );
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="stat-item bg-white p-4 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold">Income</h2>
          <p className="text-2xl">₹{TotalIncome}</p>
        </div>
        <div className="stat-item bg-white p-4 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold">Orders</h2>
          <p className="text-2xl">{orders.length}</p>
        </div>
        <div className="stat-item bg-white p-4 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold">Customers</h2>
          <p className="text-2xl">{users.length}</p>
        </div>
        <div className="recent-orders bg-white p-4 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold">Total Product</h2>
          <p className="text-2xl">{products.length}</p>
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
