import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-pink-600 shadow-lg sticky z-10 top-0">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          <div className="text-2xl font-bold">Education.com</div>
          <ul className="flex space-x-4">
            <li>
              <a href="/" className="text-black font-semibold border-b-2 border-white">
                Home
              </a>
            </li>
            <li>
              <a href="/" className="text-black font-semibold border-b-2 border-white">
                Contact
              </a>
            </li>
            <li>
              <a href="/" className="text-black font-semibold border-b-2 border-white">
                About
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
