import { Link } from 'react-router-dom';
import { useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

import { CgProfile } from "react-icons/cg";

function NavbarA() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 ">
          <div className="flex justify-between items-center w-full">
            <div className="">
              <Link to="/admin" className="flex-shrink-0 flex items-center">
                <span className="text-xl font-bold text-amber-600">LuxStay</span>
              </Link>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              <Link to="/admin/bookings" className="text-gray-900 hover:text-amber-600 px-3 py-2 rounded-md text-sm font-medium">
                Bookings
              </Link>
              <Link to="/admin/payments" className="text-gray-900 hover:text-amber-600 px-3 py-2 rounded-md text-sm font-medium">
                Payments
              </Link>
              <div className="flex justify-center items-center">
                <Link to="/">
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
          <div className="pt-2 pb-3 ">
            <div className="flex justify-center items-center">
              <Link to="/">
                <button
                  className="block px-3 py-2 text-center font-medium text-gray-900 hover:bg-gray-50"
                >
                  Profile
                </button>
              </Link>
            </div>
            <Link
              to="/admin"
              className="block px-3 py-2 text-center font-medium text-gray-900 hover:bg-gray-50"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/admin/bookings"
              className="block  px-3 py-2 text-center font-medium text-gray-900 hover:bg-gray-50"
              onClick={() => setIsOpen(false)}
            >
              Bookings
            </Link>
            <Link
              to="/admin/payments"
              className="block px-3 py-2 text-center font-medium text-gray-900 hover:bg-gray-50"
              onClick={() => setIsOpen(false)}
            >
              Payments            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}

export default NavbarA;