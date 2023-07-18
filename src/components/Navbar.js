import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = ({ loadingBarRef }) => {
  const handleClick = () => {

        // loadingBarRef.current.complete(0.4); // Start the loading bar progress
        // You can perform any asynchronous operations or navigation logic here
        loadingBarRef.current.staticStart(40);
        setTimeout(() => {
            loadingBarRef.current.staticStart(80);
        }, 500);
        setTimeout(() => {
            loadingBarRef.current.staticStart(100);
        }, 500);
 
  };

  return (
    <>
      <nav className="bg-pink-600 shadow-lg sticky z-10 top-0">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-4">
            <div className="text-2xl font-bold">Education.com</div>
            <ul className="flex space-x-4">
              <li>
                <NavLink
                  to="/"
                  onClick={handleClick}
                  className="text-black font-semibold border-b-2 border-white"
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  onClick={handleClick}
                  className="text-black font-semibold border-b-2 border-white"
                >
                  Contact
                </NavLink>
              </li>
              {/* Add more NavLink components as needed */}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
