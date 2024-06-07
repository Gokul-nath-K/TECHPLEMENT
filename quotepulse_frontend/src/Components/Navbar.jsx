import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="bg-gray-800">
        <div className="mx-auto max-w-full px-2 sm:px-6 lg:px-5 fixed">
          <div className="relative flex h-16 items-center justify-start ">
            <div className="flex justify-start">
                <h3 className="font-serif font-extrabold text-white">QuotePulse</h3>
            </div>
            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
              <div className="hidden sm:ml-6 sm:block">
                <div className="flex space-x-4">
                  <NavLink
                    to="/"
                    className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                  >
                    Home
                  </NavLink>
                  <NavLink
                    className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                  >
                    Author
                  </NavLink>
                  <NavLink
                    className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                  >
                    Shuffle
                  </NavLink>
                </div>
              </div>
            </div>
            
          </div>
        </div>
        
      </nav>
    </>
  );
};

export default Navbar;
