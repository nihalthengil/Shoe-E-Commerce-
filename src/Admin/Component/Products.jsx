import React, { useContext, useEffect, useState } from "react";
import { Context } from "../../Context/Context";
import axios from "axios";
import ProductForm from "./ProductForm";

const Products = () => {
  const { products, setProducts } = useContext(Context);
  const [formdata, setFormdata] = useState({
    name: "",
    brand: "",
    gender: "",
    size: [6, 7, 8, 9, 10],
    price: "",
    type: "Casual",
    img: [],
  });

  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState(null);

  const handleEdit = (product) => {
    setFormdata(product);
    setEditId(product.id);
    setIsEditing(true);
  };

  const DeleteProduct = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/products/${id}`);
      setProducts((prev) => prev.filter((product) => product.id !== id));
      alert("Product deleted successfully!");
    } catch (error) {
      console.error("Error deleting product:", error);
      alert("Failed to delete product. Please try again.");
    }
  };

  return (
    <div>
      <div>
        <h1 className="text-3xl font-bold mb-6 text-gray-800">Products</h1>
      </div>
      <ProductForm
        isEditing={isEditing}
        editId={editId}
        formdata={formdata}
        setFormdata={setFormdata}
        setEditId={setEditId}
        setIsEditing={setIsEditing}
      />

      <table className="w-full border-collapse table-auto shadow-lg rounded-lg overflow-hidden">
        <thead>
          <tr className="bg-gray-100 text-gray-700">
            <th className="px-6 py-3 text-left">Product</th>
            <th className="px-6 py-3 text-left">Price</th>
            <th className="px-6 py-3 text-left">Gender</th>
            <th className="px-6 py-3 text-center">Action</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id} className="border-b hover:bg-gray-50">
              <td className="px-6 py-4 flex items-center">
                <img
                  src={product.img[0]}
                  className="w-20 h-20 object-contain rounded-md mr-4"
                  alt={product.name}
                />
                <div>
                  <p className="font-semibold">{product.brand}</p>
                  <p className="font-normal">{product.name}</p>
                </div>
              </td>
              <td className="px-6 py-4 text-gray-800 font-semibold">
                {product.price}
              </td>
              <td className="px-6 py-4 text-gray-600">{product.gender}</td>
              <td className="px-6 py-4">
                <button
                  onClick={() => handleEdit(product)}
                  className="bg-slate-500 text-white px-4 py-2 mr-4 rounded-md hover:bg-slate-600 transition duration-200 ease-in-out"
                >
                  Edit
                </button>
                <button
                  onClick={() => DeleteProduct(product.id)}
                  className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition duration-200 ease-in-out"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Products;
