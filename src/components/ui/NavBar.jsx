import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-black">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <span className="text-white">Logo</span>
            </div>
          </div>
          <div className="hidden md:flex">
            <div className="ml-4 flex items-center">
              <Link
                to="/"
                className="text-fuchsia-700 hover:bg-gray-700 hover:text-pink-500 rounded-md px-3 py-2 text-xl font-medium"
              >
                Home
              </Link>
              <Link
                to="/Altas"
                className="text-fuchsia-700 hover:bg-gray-700 hover:text-pink-500 rounded-md px-3 py-2 text-xl font-medium"
              >
                Altas
              </Link>
              <Link
                to="/Operaciones"
                className="text-fuchsia-700 hover:bg-gray-700 hover:text-pink-500 rounded-md px-3 py-2 text-xl font-medium"
              >
                Operaciones
              </Link>
              <Link
                to="/Info"
                className="text-fuchsia-700 hover:bg-gray-700 hover:text-pink-500 rounded-md px-3 py-2 text-xl font-medium"
              >
                Info
              </Link>
            </div>
          </div>
          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
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
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              to="/"
              className="text-fuchsia-700 hover:bg-gray-700 hover:text-pink-500 rounded-md px-3 py-2 text-xl font-medium"
            >
              Home
            </Link>
            <Link
              to="/Altas"
              className="text-fuchsia-700 hover:bg-gray-700 hover:text-pink-500 rounded-md px-3 py-2 text-xl font-medium"
            >
              Altas
            </Link>
            <Link
              to="/Operaciones"
              className="text-fuchsia-700 hover:bg-gray-700 hover:text-pink-500 rounded-md px-3 py-2 text-xl font-medium"
            >
              Operaciones
            </Link>
            <Link
              to="/Info"
              className="text-fuchsia-700 hover:bg-gray-700 hover:text-pink-500 rounded-md px-3 py-2 text-xl font-medium"
            >
              Info
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
