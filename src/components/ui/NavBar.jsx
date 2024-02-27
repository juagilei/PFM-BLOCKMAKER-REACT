import { useState } from "react";
import Navigation from "../Navigation";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-black">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
             <img src="/public/PrestamoDefi.png" alt="PrestamoDefiLogo" width={200} />
            </div>
          </div>
          <div className="hidden md:flex">
            <Navigation />
          </div>
          <div className="flex md:hidden">
            <button onClick={toggleMenu} className="text-gray-300 hover:bg-gray-700 hover:text-white inline-flex items-center justify-center p-2 rounded-md focus:outline-none">
              <svg className="block h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <Navigation />
        </div>
      )}
    </nav>
  );
}
