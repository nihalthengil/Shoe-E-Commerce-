import React, { useState } from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Context } from "../../../Context/Context";

const Cart = () => {
  const { Cart, SetCart, userId } = useContext(Context);

  const RemoveItem = (product) => {
    const filterd = Cart.filter((item) => item.id !== product.id);
    axios.patch(`http://localhost:3000/users/${userId}`, { cart: filterd });
    SetCart(filterd);
  };

  const TotalPrice = Cart?.reduce((total, item) => {
    const price = parseInt(item.price.replace(/,/g, ""), 10);
    return total + price * item.qty;
  }, 0);


  const Qtycheck = Cart?.reduce((total, item) => total + item.qty, 0);


  const incrementQuantity = (productId) => {
    SetCart(
      Cart.map((item) =>
        item.id === productId ? { ...item, qty: item.qty + 1 } : item
      )
    );
  };


  const decrementQuantity = (productId) => {
    SetCart(
      Cart.map((item) =>
        item.id === productId
          ? { ...item, qty: Math.max(1, item.qty - 1) }
          : item
      )
    );
  };

  return (
    <div className="flex justify-center flex-col pt-24">
      <h1 className="text-2xl font-bold">Shopping Cart</h1>
      {Cart.length > 0 ? (
        <table className="w-[80%] mx-auto text-left">
          <thead>
            <tr className="border-b-2">
              <th>Product</th>
              <th>Description</th>
              <th>Price</th>
              <th className="pl-10">Qty</th>
              <th>Subtotal</th>
            </tr>
          </thead>
          {Cart.map((item) => (
            <tbody key={item.id} className="text-left">
              <tr className="border-b-2">
                <td>
                  <img src={item.img[0]} alt="" className="h-full w-32" />
                </td>
                <td>
                  <p className="font-bold">{item.brand}</p>
                  <p className="font-semibold">{item.name}</p>
                  <br />
                  <p>Size: {item.size}</p>
                </td>
                <td>₹{item.price}</td>
                <td>
                  <div className="flex items-center gap-5">
                    <button
                      className="border-none rounded-full  px-2 hover:bg-slate-200 font-semibold"
                      onClick={() => decrementQuantity(item.id)}
                    >
                      -
                    </button>
                    <p>{item.qty}</p>
                    <button
                      className="border-none rounded-full px-2 hover:bg-slate-200 font-semibold"
                      onClick={() => incrementQuantity(item.id)}
                    >
                      +
                    </button>
                  </div>
                </td>
                <td>
                  <p className="font-bold">
                    {parseFloat(item.price.replace(/,/g, "")) * item.qty}
                  </p>
                  <button
                    className="text-red-600"
                    onClick={() => RemoveItem(item)}
                  >
                    Remove
                  </button>
                </td>
              </tr>
            </tbody>
          ))}
        </table>
      ) : (
        <div>
          <br />
          <p>There are no items in your bag.</p>
        </div>
      )}
      {Cart.length > 0 && (
        <div>
          <div className="flex justify-center space-x-96">
            <div>
              <p>Subtotal</p>
              <p>Discount</p>
              <p>TAX</p>
              <p>QTY</p>
              <h5 className="font-bold">Grand Total</h5>
            </div>
            <div>
              <p>₹{TotalPrice}</p>
              <p>₹ 0</p>
              <p>₹ 0</p>
              <p className="ml-3">{Qtycheck}</p>
              <h5 className="font-bold">₹{TotalPrice}</h5>
              <br />
            </div>
          </div>

          <div className="text-center">
            <Link to="/checkout">
              <button className="bg-black text-white w-96 rounded-sm">
                Checkout
              </button>
            </Link>
          </div>
          <br />
          <br />
        </div>
      )}
    </div>
  );
};

export default Cart;
