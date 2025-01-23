import { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import data from '../data.json';
import About from './About'
import Contact from './Contact'
import { Link } from 'react-router-dom';
import OfferSection from './OfferSection ';

function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);


  const [checkIn, setCheckIn] = useState(null);
  const [checkOut, setCheckOut] = useState(null);
  const [guests, setGuests] = useState(1);

  return (
    <div className="min-h-screen bg-amber-50">
      <div id="home" className="relative bg-gray-900 mt-8 h-[80vh]">
        <img src="https://images.unsplash.com/photo-1611892440504-42a792e24d32?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=300"
          className="absolute bg-gray-900 h-[80vh] w-full " ></img>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold leading-normal text-white sm:text-5xl lg:text-6xl"
            data-aos="fade-right">
            Welcome to  <span className="sm:text-[50px] text-[30px]  font-bold text-amber-600 bg-white px-5 bg-opacity-70 py-3 rounded-md">LuxStay</span>
          </h1>
          <p className="mt-12 tracking-wide hhi text-xl text-gray-300 max-w-3xl leading-relaxed"
            data-aos="fade-left">
            Experience the epitome of comfort and elegance in our Deluxe Suite. Perfect for travelers who seek a blend of style and functionality, this spacious suite offers breathtaking views that elevate your stay to unforgettable heights.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-14  " data-aos="fade-up">
        <div className="bg-white rounded-lg shadow-xl p-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Check-in</label>
              <DatePicker
                selected={checkIn}
                onChange={date => setCheckIn(date)}
                className="mt-1 p-2 w-full rounded-md  border-4 shadow-sm "
                placeholderText="Select date"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Check-out</label>
              <DatePicker
                selected={checkOut}
                onChange={date => setCheckOut(date)}
                className="mt-1 p-2 w-full rounded-md border-4 shadow-sm"
                placeholderText="Select date"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Guests</label>
              <select
                value={guests}
                onChange={(e) => setGuests(Number(e.target.value))}
                className="mt-1 p-2 w-full rounded-md border-4 shadow-sm"
              >
                {[1, 2, 3, 4].map(num => (
                  <option key={num} value={num}>{num} {num === 1 ? 'Guest' : 'Guests'}</option>
                ))}
              </select>
            </div>
            <div className="flex items-end">
              <button
                className="w-full bg-amber-600 text-white px-4 py-2 rounded-md hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2"
              >
                Search Rooms
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 mt-6 "  >
        <h2 className="text-3xl font-bold text-gray-900 mb-8" data-aos="fade-right">Featured Rooms</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {data.rooms.map((room) => (
            <div key={room.id} className="bg-white rounded-lg shadow-md overflow-hidden" data-aos="fade-up">
              <img src={room.image} alt={room.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900">{room.title}</h3>
                <p className="mt-2 text-gray-600">Starting from {room.price} per night</p>
                <Link to={`/rooms/${room.id}`}>
                  <button className="mt-4 w-full bg-amber-600 text-white px-4 py-2 rounded-md hover:bg-amber-700">
                    Book Now
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
      <OfferSection />
      <About />
      <Contact />
    </div>
  );
}

export default Home;