import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // toggleMenu functionality
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-black sm:bg-amber-300 md:bg-lime-300 lg:bg-teal-300 text-white  top-0 w-full z-10 shadow-md mb-7">
      <div className="container mx-auto p-6 flex justify-between items-center">
        <div className=" text-2xl font-bold ">Data Show in Cards</div>
        <ul className="hidden md:flex space-x-4">
          <li><Link to="/" className="hover:underline  font-semibold">Home</Link></li>
          <li><Link to="/about" className="hover:underline font-semibold ">About us</Link></li>
          <li><Link to="/contact" className="hover:underline font-semibold">Contact us</Link></li>
        </ul>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden mt-4">
          <ul className="space-y-2">
            <li><Link to="/" className="block px-4 py-2 hover:bg-slate-600 rounded">Home</Link></li>
            <li><Link to="/about" className="block px-4 py-2 hover:bg-slate-600 rounded">About us</Link></li>
            <li><Link to="/contact" className="block px-4 py-2 hover:bg-slate-600 rounded">Contact us</Link></li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
