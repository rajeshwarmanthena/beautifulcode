import React from 'react';
import logo from '../assests';
function Navbar() {
  return (
    <nav className="bg-white-800 text-black font:semibold p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center text:semibold">
          <img src={logo} alt="Logo" className="h-14 mr-2" />
          
        </div>

        {/* Navigation Links */}
        <ul className="flex space-x-4 font-semibold text-xl">
          <li>
            <a href="/refm.jsx" target='' className="hover:text-gray-300">Remote Engineering Framework</a>
          </li>
          <li>
            <a href="/" className="hover:text-gray-300">Customer Success</a>
          </li>
          <li>
            <a href="/" className="hover:text-gray-300">Why Beautiful Code</a>
          </li>
        </ul>

        {/* Get in Touch Button */}
        <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
          Get in Touch
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
