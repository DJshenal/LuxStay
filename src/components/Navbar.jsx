import { Link } from 'react-router-dom';
import { useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { CgProfile } from "react-icons/cg";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleScrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setIsOpen(false);
  };

  return (
    <nav className="bg-white shadow-lg fixed top-0 z-50 w-screen sm:w-full ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 ">
          <div className="flex justify-between items-center w-full">
            <div className="">
              <Link to="/" className="flex-shrink-0 flex items-center">
                <span className="text-2xl font-bold text-amber-600">LuxStay</span>
              </Link>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              <button
                onClick={() => handleScrollToSection('home')}
                className="text-gray-900 hover:text-amber-600 px-3 py-2  font-semibold"
              >
                Home
              </button>
              <button
                onClick={() => handleScrollToSection('about')}
                className="text-gray-900 hover:text-amber-600 px-3 py-2 font-semibold"
              >
                About
              </button>
              <button
                onClick={() => handleScrollToSection('contact')}
                className="text-gray-900 hover:text-amber-600 px-3 py-2 font-semibold"
              >
                Contact
              </button>
              <div className="flex justify-center items-center">
                <Link to="/admin">
                  <CgProfile size={30} />
                </Link>
              </div>
            </div>
          </div>

          <div className="sm:hidden flex items-center   justify-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="flex flex-row items-center   justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100"
            >
              {isOpen ? (
                <XMarkIcon className=" h-6 w-6" />
              ) : (
                <Bars3Icon className=" h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="sm:hidden">
          <div className="pt-2 pb-3 flex flex-col items-center ">
            <div className="flex justify-center items-center">
              <Link to="/admin">
                <button
                  className="block px-3 py-2 text-center font-medium text-gray-900 hover:bg-gray-50"
                >
                  Profile
                </button>
              </Link>
            </div>
            <button
              onClick={() => handleScrollToSection('home')}
              className="block px-3 py-2 text-center font-medium text-gray-900 hover:bg-gray-50"
            >
              Home
            </button>
            <button
              onClick={() => handleScrollToSection('about')}
              className="block px-3 py-2 text-center font-medium text-gray-900 hover:bg-gray-50"              >
              About
            </button>
            <button
              onClick={() => handleScrollToSection('contact')}
              className="block px-3 py-2 text-center font-medium text-gray-900 hover:bg-gray-50"              >
              Contact
            </button>

          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;


