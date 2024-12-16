import {
  MagnifyingGlassIcon,
  HeartIcon,
  ShoppingCartIcon,
  UserCircleIcon,
} from "@heroicons/react/24/outline";
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../Context/Context";

export default function Navbar() {
  const { products, username, userId, SetCart, setProducts } =
    useContext(Context);
  const [Search, SetSearch] = useState("");
  const Navigate = useNavigate();

  const [SearchProducts, SetSearchProducts] = useState([]);
  const [show, SetShow] = useState(false);
  const [profile, Setprofile] = useState(false);
  const HandleSearch = (e) => {
    const value = e.target.value;
    SetSearch(value);
    const searchproducts = products.filter(
      (item) =>
        item.brand.toLowerCase().includes(value.toLowerCase()) ||
        item.name.toLowerCase().includes(value.toLowerCase())
    );
    SetSearchProducts(searchproducts);
  };
  const ProductDetails = (id) => {
    Navigate(`/details/${id}`);
    SetSearch("");
  };
  const handleBrand = (item) => {
    Navigate(`/brand/${item.brand}`);
    SetSearch("");
    SetShow(null);
  };

  const uniqueBrands = products.filter(
    (item, index, self) =>
      item.brand && self.findIndex((p) => p.brand === item.brand) === index
  );

  const ShowProfile = () => {
    Setprofile((prv) => !prv);
  };
  const Logout = () => {
    localStorage.removeItem("userId");
    localStorage.removeItem("username");

    SetCart([]);

    window.location.href = "/login";
  };

  return (
    <nav className="bg-white shadow fixed top-0 w-full z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link to="/" className="text-gray-800 text-xl font-bold">
              KixSpace
            </Link>
            <div className="hidden md:flex ml-10 space-x-6">
              <Link to="/products">
                <h3>New Arrivals</h3>
              </Link>
              <Link
                onMouseEnter={() => SetShow(true)}
                onMouseLeave={() => SetShow(false)}
              >
                Brands
              </Link>
            </div>

            {show && (
              <div
                className="relative  top-[135px]  right-14 py-4 px-2 bg-white rounded-md"
                onMouseEnter={() => SetShow(true)}
                onMouseLeave={() => SetShow(false)}
              >
                {uniqueBrands.map((item) => (
                  <ul>
                    <li
                      className="hover:bg-gray-400 duration-300 rounded-sm p-1 cursor-pointer"
                      onClick={() => handleBrand(item)}
                    >
                      {item.brand}
                    </li>
                  </ul>
                ))}
              </div>
            )}
          </div>

          <div className="flex items-center space-x-6">
            <div className="relative text-gray-400 focus-within:text-gray-600">
              <input
                type="text"
                name="search"
                value={Search}
                onChange={HandleSearch}
                placeholder="Search"
                className="bg-gray-100 text-sm text-gray-800 placeholder-gray-500 rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gray-300"
              />
              <MagnifyingGlassIcon className="absolute right-2 top-2 h-5 w-5" />
            </div>

            <Link to="#wishlist" className="text-gray-600 hover:text-gray-800">
              <HeartIcon className="h-6 w-6" />
            </Link>

            <Link to="/cart">
              <ShoppingCartIcon className="h-6 w-6" />
            </Link>

            {userId ? (
              <p onClick={ShowProfile}>
                <UserCircleIcon className="h-6 w-6" />
              </p>
            ) : (
              <Link to="/login">
                <p>Login</p>
              </Link>
            )}
          </div>
          {profile && (
            <div className="absolute right-1 mt-28 bg-white rounded-md p-2 ">
              <p>{username}</p>
              <button onClick={Logout}>LogOut</button>
            </div>
          )}
        </div>
      </div>
      {Search !== "" && (
        <div className="absolute right-4 mt-2 w-full max-w-md bg-white border max-h-72 border-gray-300 rounded-lg shadow-lg overflow-y-auto z-50">
          {SearchProducts.map((data, index) => (
            <div
              key={index}
              className="flex items-center p-2 hover:bg-gray-100 cursor-pointer"
              onClick={() => ProductDetails(data.id)}
            >
              <div className="flex-shrink-0">
                <img
                  src={data.img[0]}
                  alt={data.name}
                  className="h-10 w-10 rounded-lg object-cover"
                />
              </div>
              <div className="ml-3">
                <p className="text-sm font-semibold text-gray-800">
                  {data.brand}
                </p>
                <p className="text-sm text-gray-600">{data.name}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </nav>
  );
}
