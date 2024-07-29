import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

 // toggleMenu functionality
  const TOGGLEMENU = () => {
    setIsOpen(!isOpen);
  };

  return (
    // implement navbar componenet
    <nav className="bg-slate-500 text-white p-4 fixed top-0 w-full z-10 pr-20">
      <div className="container mx-auto flex justify-between items-center ">
        <div className="font-bold text-lg">Data Show in Cards</div>
        <ul className="hidden md:flex space-x-4"> 
               
          <li ><Link to='/' className="hover:underline"> HOME</Link></li>
          <li><Link to='abo'className="hover:underline"> About us</Link></li>
        <li><Link to='Con' className="hover:underline"> Contact us</Link></li>
          
        </ul>

        <div className="md:hidden">
          {/* implement toggle button */}
          <button onClick={TOGGLEMENU} className="focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden mt-4">
          <ul className="space-y-2">
            <li><a href="#" className="block px-4 py-2 hover:bg-slate-600 rounded">Home</a></li>
            <li><a href="#" className="block px-4 py-2 hover:bg-slate-600 rounded">About</a></li>
           <li><a href="#" className="block px-4 py-2 hover:bg-slate-600 rounded">Contact</a></li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
