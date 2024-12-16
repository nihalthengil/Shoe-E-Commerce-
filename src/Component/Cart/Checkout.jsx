import React, { useContext, useState } from "react";
import { Context } from "../../Context/Context";
import toast, { Toaster } from 'react-hot-toast';  

const Checkout = () => {
  const [address, setAddress] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    country: "",
    address1: "",
    city: "",
    pinCode: "",
    district: "",
    state: "",
    default: false,
  });

  const [isPaymentVisible, setIsPaymentVisible] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState("COD"); // 'COD' or 'DebitCard'

  const { Cart ,SetCart} = useContext(Context);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setAddress({
      ...address,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSave = (e) => {
    e.preventDefault();
    setIsPaymentVisible(true);
  };
  
  const HandleOrder=()=>{
    toast.success('Order Placed')
    SetCart([])
  }

  const TotalPrice = Cart.reduce((acc, item) => {
    const price = parseInt(item.price.replace(/,/g, ""), 10);
    return acc + price;
  }, 0);

  return (
    <div className="flex flex-col md:flex-row justify-between p-8 bg-gray-100 min-h-screen mt-10 pb-20">
      <div
        className={`w-full md:w-3/5 bg-white p-6 shadow rounded-lg mb-8 md:mb-0 transition-all duration-500 `}
      >
        <h2 className="text-xl font-semibold mb-6">Billing Address</h2>

        <form className="space-y-4" onSubmit={handleSave}>
          <div className="grid grid-cols-2 gap-4">
            <input
              name="firstName"
              value={address.firstName}
              onChange={handleInputChange}
              placeholder="First Name"
              className="border p-2 rounded"
            />
            <input
              name="lastName"
              value={address.lastName}
              onChange={handleInputChange}
              placeholder="Last Name"
              className="border p-2 rounded"
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <input
              name="phone"
              value={address.phone}
              onChange={handleInputChange}
              placeholder="Phone Number"
              className="border p-2 rounded"
            />
            <input
              name="country"
              value={address.country}
              onChange={handleInputChange}
              placeholder="Country"
              className="border p-2 rounded"
            />
          </div>
          <input
            name="address1"
            value={address.address1}
            onChange={handleInputChange}
            placeholder="Address"
            className="border p-2 rounded w-full"
          />
          <div className="grid grid-cols-3 gap-4">
            <input
              name="city"
              value={address.city}
              onChange={handleInputChange}
              placeholder="City"
              className="border p-2 rounded"
            />
            <input
              name="pinCode"
              value={address.pinCode}
              onChange={handleInputChange}
              placeholder="Pin Code"
              className="border p-2 rounded"
            />
            <input
              name="district"
              value={address.district}
              onChange={handleInputChange}
              placeholder="District"
              className="border p-2 rounded"
            />
          </div>
          <select
            name="state"
            value={address.state}
            onChange={handleInputChange}
            className="border p-2 rounded w-full"
          >
            <option value="Kerala">Kerala</option>
            <option value="Tamil Nadu">Tamil Nadu</option>
            <option value="Karnataka">Karnataka</option>
          </select>

          <label className="flex items-center">
            <input
              type="checkbox"
              name="default"
              checked={address.default}
              onChange={handleInputChange}
              className="mr-2"
            />
            Set as Default Address
          </label>

          <div className="flex justify-between">
            <button
              type="button"
              className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800"
            >
              Save & Deliver Here
            </button>
          </div>
        </form>
      </div>

      <div className="w-full md:w-1/3 bg-white p-6 shadow rounded-lg">
        <h2 className="text-xl font-semibold mb-6">Order Summary</h2>
        <div className="space-y-4">
          <div className="flex justify-between text-gray-600">
            <span>Items</span>
            <span>{Cart.length}</span>
          </div>
          <div className="flex justify-between text-gray-600">
            <span>Subtotal</span>
            <span>₹{TotalPrice}</span>
          </div>
          <hr />
          <div className="flex justify-between font-semibold text-lg">
            <span>Total</span>
            <span>₹{TotalPrice}</span>
          </div>
        </div>
        {isPaymentVisible && (
          <div className="w-full  bg-white p-6 shadow rounded-lg mt-8">
            <h2 className="text-xl font-semibold mb-6">
              Select Payment Method
            </h2>
            <div className="flex justify-between mb-6">
              <button
                onClick={() => setPaymentMethod("COD")}
                className={`px-4 py-2 rounded ${
                  paymentMethod === "COD"
                    ? "bg-black text-white"
                    : "bg-gray-200 hover:bg-gray-300"
                }`}
              >
                Cash on Delivery
              </button>
              <button
                onClick={() => setPaymentMethod("DebitCard")}
                className={`px-4 py-2 rounded ${
                  paymentMethod === "DebitCard"
                    ? "bg-black text-white"
                    : "bg-gray-200 hover:bg-gray-300"
                }`}
              >
                Debit Card
              </button>
            </div>

            {paymentMethod === "DebitCard" && (
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Card Number"
                  className="border p-2 rounded w-full"
                />
                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Expiry Date (MM/YY)"
                    className="border p-2 rounded"
                  />
                  <input
                    type="text"
                    placeholder="CVV"
                    className="border p-2 rounded"
                  />
                </div>
                <input
                  type="text"
                  placeholder="Cardholder Name"
                  className="border p-2 rounded w-full"
                />
                <button
                  type="submit"
                  className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800 w-full"
                  onClick={HandleOrder}
                >
                  Pay Now
                </button>
              </form>
            )}

            {paymentMethod === "COD" && (
              <div className="text-center">
                <p className="text-gray-600 mb-4">
                  You have selected Cash on Delivery.
                </p>
                <button className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800"
                onClick={HandleOrder}>
                  Confirm Order
                </button>
              </div>
            )}
          </div>
        )}
        <Toaster
  position="top-center"
  reverseOrder={false}
/>
      </div>
    </div>
  );
};

export default Checkout;
