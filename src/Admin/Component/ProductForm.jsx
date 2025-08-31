import axios from "axios";
import React, { useContext, useState } from "react";
import { Context } from "../../Context/Context";

const ProductForm = ({
  isEditing,
  editId,
  formdata,
  setFormdata,
  setEditId,
  setIsEditing,
}) => {
  const { setProducts } = useContext(Context);

  const [imageUrl, setImageUrl] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormdata((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleAddImage = () => {
    if (imageUrl.trim() !== "") {
      setFormdata((prev) => ({
        ...prev,
        img: [...prev.img, imageUrl.trim()],
      }));
      setImageUrl("");
    } else {
      alert("Please enter a valid image URL");
    }
  };

  const handleRemoveImage = (index) => {
    setFormdata((prev) => ({
      ...prev,
      img: prev.img.filter((_, i) => i !== index),
    }));
  };

  const AddProduct = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:3000/products",
        formdata
      );
      setProducts((prev) => [...prev, response.data]);
      resetForm();
      alert("Product added successfully!");
    } catch (error) {
      console.error("Error adding product:", error);
      alert("Failed to add product. Please try again.");
    }
  };

  const SaveEdit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.put(
        `http://localhost:3000/products/${editId}`,
        formdata
      );
      setProducts((prev) =>
        prev.map((product) => (product.id === editId ? response.data : product))
      );
      resetForm();
      alert("Product updated successfully!");
    } catch (error) {
      console.error("Error updating product:", error);
      alert("Failed to update product. Please try again.");
    }
  };

  const resetForm = () => {
    setFormdata({
      name: "",
      brand: "",
      gender: "",
      size: [6, 7, 8, 9, 10],
      price: "",
      type: "Casual",
      img: [],
    });
    setEditId(null);
    setIsEditing(false);
  };

  return (
    <div>
      <form onSubmit={isEditing ? SaveEdit : AddProduct}>
        <h2 className="text-xl font-bold mb-4">
          {isEditing ? "Edit Product" : "Add Product"}
        </h2>

        <label className="font-semibold" htmlFor="name">
          Product Name
        </label>
        <input
          type="text"
          name="name"
          value={formdata.name}
          onChange={handleChange}
          className="block border p-2 mb-4 rounded-md"
        />

        <label className="font-semibold" htmlFor="price">
          Price
        </label>
        <input
          type="text"
          name="price"
          value={formdata.price}
          onChange={handleChange}
          className="block border p-2 mb-4 rounded-md"
        />

        <label className="font-semibold" htmlFor="brand">
          Brand
        </label>
        <select
          name="brand"
          value={formdata.brand}
          onChange={handleChange}
          className="block border p-2 mb-4 rounded-md"
        >
          <option value="">Select Brand</option>
          <option value="Nike">Nike</option>
          <option value="Jordan">Jordan</option>
          <option value="Adidas Originals">Adidas Originals</option>
          <option value="Asics">Asics</option>
          <option value="Adidas">Adidas</option>
          <option value="Birkenstock">Birkenstock</option>
          <option value="Converse">Converse</option>
        </select>

        <label className="font-semibold" htmlFor="gender">
          Gender
        </label>
        <select
          name="gender"
          value={formdata.gender}
          onChange={handleChange}
          className="block border p-2 mb-4 rounded-md"
        >
          <option value="">Choose Gender</option>
          <option value="Man">Men</option>
          <option value="Woman">Women</option>
        </select>

        <label htmlFor="img">Add Image URL</label>
        <div className="flex items-center mb-4">
          <input
            type="text"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
            className="border p-2 flex-1 rounded-md"
          />
          <button
            type="button"
            onClick={handleAddImage}
            className="bg-black text-white px-4 py-2 ml-2 rounded hover:bg-gray-800"
          >
            Add
          </button>
        </div>

        <ul className="mb-4">
          {formdata.img.map((url, index) => (
            <li key={index} className="flex items-center justify-between">
              <span className="text-gray-700">{url}</span>
              <button
                type="button"
                onClick={() => handleRemoveImage(index)}
                className="text-red-500 hover:underline"
              >
                Remove
              </button>
            </li>
          ))}
        </ul>

        <button
          type="submit"
          className="bg-black text-white px-6 py-2 rounded mb-3"
        >
          {isEditing ? "Save Changes" : "Submit"}
        </button>
        {isEditing && (
          <button
            type="button"
            onClick={resetForm}
            className="bg-gray-500 text-white px-6 py-2 rounded ml-4"
          >
            Cancel
          </button>
        )}
      </form>
    </div>
  );
};

export default ProductForm;
