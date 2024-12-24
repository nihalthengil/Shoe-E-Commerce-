import React from "react";

const Footer = () => {
  return (
    <div className="bg-white py-10">
      <div className="flex justify-center space-x-10 border-b pb-4 mb-6">
        <div className="flex items-center space-x-2">
          <i className="fas fa-lock text-lg"></i>
          <span className="text-sm font-medium">Secure Payment</span>
        </div>
        <div className="flex items-center space-x-2">
          <i className="fas fa-shipping-fast text-lg"></i>
          <span className="text-sm font-medium">Express Shipping</span>
        </div>
        <div className="flex items-center space-x-2">
          <i className="fas fa-undo-alt text-lg"></i>
          <span className="text-sm font-medium">Free Return</span>
        </div>
      </div>

      <div className="w-full mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-10">
        <div>
          <h3 className="text-xl font-semibold mb-4">KIXSPACE</h3>
          <p className="text-sm text-gray-500 mb-4">
            KixSpace is your go-to store for stylish, high-quality footwear for
            men, women, and kids. From branded casuals to sleek formal shoes and
            comfy slides, we have something for every step of your journey.
            Style, comfort, and versatility—all in one place!
          </p>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-500 hover:text-gray-800">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="text-gray-500 hover:text-gray-800">
              <i className="fab fa-pinterest"></i>
            </a>
            <a href="#" className="text-gray-500 hover:text-gray-800">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="#" className="text-gray-500 hover:text-gray-800">
              <i className="fab fa-twitter"></i>
            </a>
          </div>
        </div>

        <div className="text-center">
          <h4 className="text-lg font-semibold mb-4">Shop</h4>
          <ul className="space-y-2">
            <li>
              <a href="#" className="text-sm text-gray-600 hover:text-gray-800">
                Shop Men
              </a>
            </li>
            <li>
              <a href="#" className="text-sm text-gray-600 hover:text-gray-800">
                Shop Women
              </a>
            </li>
          </ul>
        </div>

        <div className="text-center">
          <h4 className="text-lg font-semibold mb-4">Need Help?</h4>
          <ul className="space-y-2">
            <li>
              <a href="#" className="text-sm text-gray-600 hover:text-gray-800">
                FAQs
              </a>
            </li>
            <li>
              <a href="#" className="text-sm text-gray-600 hover:text-gray-800">
                Shipping & Returns
              </a>
            </li>
            <li>
              <a href="#" className="text-sm text-gray-600 hover:text-gray-800">
                Shoe Care
              </a>
            </li>
            <li>
              <a href="#" className="text-sm text-gray-600 hover:text-gray-800">
                Size Chart
              </a>
            </li>
            <li>
              <a href="#" className="text-sm text-gray-600 hover:text-gray-800">
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
