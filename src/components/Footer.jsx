import { Link } from 'react-router-dom';
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';
function Footer() {
  return (
    <footer className="bg-gray-800 text-white z-50">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

          <div>
            <Link to="/" className="flex-shrink-0 flex items-center">
              <span className="text-2xl font-bold text-amber-600 bg-white px-5 py-3 rounded-md mb-5">LuxStay</span>
            </Link>
            <p className="text-gray-300">
              Luxury accommodations for your perfect stay.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-white">Home</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-white">About</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-white">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-center space-x-2">
                <FaMapMarkerAlt />
                <span>123 Luxury Avenue, Western . </span>
              </li>
              <li className="flex items-center space-x-2">
                <FaPhone />
                <span>(123) 123-4567</span>
              </li>
              <li className="flex items-center space-x-2">
                <FaEnvelope />
                <span>info@luxstay.com</span>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Stay Updated</h3>
            <p className="text-gray-300 mb-4">
              Subscribe to our newsletter for the latest updates and offers.
            </p>
            <form className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 rounded-l-md focus:outline-none focus:ring-2 focus:ring-amber-500 text-black"
              />
              <button
                type="submit"
                className="bg-amber-600 hover:bg-amber-700 text-white px-4 py-2 rounded-r-md"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <p className="text-gray-300">© 2024 LuxStay. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
