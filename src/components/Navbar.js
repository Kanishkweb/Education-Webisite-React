import React from 'react';
import { Outlet,NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <>
            <nav className="bg-pink-600 shadow-lg sticky z-10 top-0">
                <div className="container mx-auto px-4">
                    <div className="flex items-center justify-between py-4">
                        <div className="text-2xl font-bold">Education.com</div>
                        <ul className="flex space-x-4">
                            <li>
                                <NavLink to="/" className="text-black font-semibold border-b-2 border-white">
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/contact" className="text-black font-semibold border-b-2 border-white">
                                    Contact
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/about" className="text-black font-semibold border-b-2 border-white">
                                    About
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <Outlet />
        </>
    );
};

export default Navbar;
