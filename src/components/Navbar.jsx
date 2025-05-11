import React, { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50 montserrat">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <div className="text-2xl font-bold text-blue-800 playfair-display">
              EAST AFRICAN CHAINS
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-orange-400 focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <a
              href="#"
              className="text-blue-800 font-medium hover:text-blue-600"
            >
              Home
            </a>
            <a
              href="#"
              className="text-gray-600 font-medium hover:text-blue-600"
            >
              About Us
            </a>
            <a
              href="#"
              className="text-gray-600 font-medium hover:text-blue-600"
            >
              Products
            </a>
            <a
              href="#"
              className="text-gray-600 font-medium hover:text-blue-600"
            >
              Services
            </a>
            <a
              href="#"
              className="text-gray-600 font-medium hover:text-blue-600"
            >
              Projects
            </a>
            <a
              href="#"
              className="text-gray-600 font-medium hover:text-blue-600"
            >
              Contact
            </a>
          </div>

          {/* Quote Button */}
          <div className="hidden md:block">
            <a
              href="#"
              className="bg-orange-400 hover:bg-orange-600 text-white font-medium py-2 px-4 rounded-md transition duration-300"
            >
              Request Quote
            </a>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden ${isMenuOpen ? "block" : "hidden"}`}>
          <div className="flex flex-col space-y-3 pb-4">
            <a
              href="#"
              className="text-blue-800 font-medium hover:text-blue-600"
            >
              Home
            </a>
            <a
              href="#"
              className="text-gray-600 font-medium hover:text-blue-600"
            >
              About Us
            </a>
            <a
              href="#"
              className="text-gray-600 font-medium hover:text-blue-600"
            >
              Products
            </a>
            <a
              href="#"
              className="text-gray-600 font-medium hover:text-blue-600"
            >
              Services
            </a>
            <a
              href="#"
              className="text-gray-600 font-medium hover:text-blue-600"
            >
              Projects
            </a>
            <a
              href="#"
              className="text-gray-600 font-medium hover:text-blue-600"
            >
              Contact
            </a>
            <a
              href="#"
              className="bg-blue-700 hover:bg-blue-800 text-white font-medium py-2 px-4 rounded-md transition duration-300 inline-block w-full text-center"
            >
              Request Quote
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
