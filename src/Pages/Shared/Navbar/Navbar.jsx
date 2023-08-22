import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="">
      <nav className="bg-white w-full shadow-lg border">
        <div className="max-w-6xl mx-auto px-4 py-3">
          <div className="flex justify-between">
            <div className="flex items-center">
              <a href="/" className="text-2xl font-bold text-purple-900">
                TONMOY
              </a>
            </div>
            <div className="flex items-center">
              <div className="hidden md:flex space-x-6">
                <a
                  href="/"
                  className="text-black font-bold hover:text-gray-700"
                >
                  Home
                </a>
                <a
                  href="/"
                  className="text-black font-bold hover:text-gray-700"
                >
                  About
                </a>
                <a
                  href="/"
                  className="text-black font-bold hover:text-gray-700"
                >
                  Contact
                </a>
              </div>
              <button
                className="md:hidden focus:outline-none"
                onClick={toggleMenu}
              >
                <svg
                  className="w-6 h-6 text-black hover:text-gray-700"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div className={`${isOpen ? "block" : "hidden"} md:hidden bg-white`}>
          <div className="px-2 py-3 space-y-2">
            <a
              href="/"
              className="block px-3 py-2 text-black font-bold hover:text-gray-700"
            >
              Home
            </a>
            <a
              href="/"
              className="block px-3 py-2 text-black font-bold hover:text-gray-700"
            >
              About
            </a>
            <a
              href="/"
              className="block px-3 py-2 text-black font-bold hover:text-gray-700"
            >
              Contact
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
