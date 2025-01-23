import { FaHotel, FaUtensils, FaTaxi, FaWifi, FaMedkit, FaMapSigns } from 'react-icons/fa';
import { useEffect } from "react";

function OfferSection() {

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);

  return (
    <div className="px-4 sm:px-6 lg:px-8  text-center py-5 min-h-screen bg-white mb-14 ">
      <h2 className=" mb-14 mt-14 text-3xl font-extrabold text-gray-900 sm:text-4xl"
        data-aos="zoom-in">
        What We <span className="text-amber-500">Offer</span> for You
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto ">
        <div className="flex flex-col items-center bg-white p-6 shadow-md rounded-lg text-center hover:shadow-lg transition-shadow" data-aos="flip-right">
          <FaHotel size={48} color='#d97706' style={{ opacity: 0.7 }} />
          <h3 className="font-bold text-xl">Delux Room</h3>
          <p>It is a long established fact that a reader will be distracted</p>
        </div>
        <div className="flex flex-col items-center bg-white p-6 shadow-md rounded-lg text-center hover:shadow-lg transition-shadow" data-aos="flip-right">
          <FaUtensils size={48} color='#d97706' style={{ opacity: 0.7 }} />
          <h3 className="font-bold text-xl">Delicious Food</h3>
          <p>It is a long established fact that a reader will be distracted</p>
        </div>
        <div className="flex flex-col items-center bg-white p-6 shadow-md rounded-lg text-center hover:shadow-lg transition-shadow" data-aos="flip-right">
          <FaTaxi size={48} color='#d97706' style={{ opacity: 0.7 }} />
          <h3 className="font-bold text-xl">Airport Taxi</h3>
          <p>It is a long established fact that a reader will be distracted</p>
        </div>
        <div className="flex flex-col items-center bg-white p-6 shadow-md rounded-lg text-center hover:shadow-lg transition-shadow" data-aos="flip-right">
          <FaWifi size={48} color='#d97706' style={{ opacity: 0.7 }} />
          <h3 className="font-bold text-xl">Free Wifi</h3>
          <p>It is a long established fact that a reader will be distracted</p>
        </div>
        <div className="flex flex-col items-center bg-white p-6 shadow-md rounded-lg text-center hover:shadow-lg transition-shadow" data-aos="flip-right">
          <FaMedkit size={48} color='#d97706' style={{ opacity: 0.7 }} />
          <h3 className="font-bold text-xl">Free Medication</h3>
          <p>It is a long established fact that a reader will be distracted</p>
        </div>
        <div className="flex flex-col items-center bg-white p-6 shadow-md rounded-lg text-center hover:shadow-lg transition-shadow" data-aos="flip-right">
          <FaMapSigns size={48} color='#d97706' style={{ opacity: 0.7 }} />
          <h3 className="font-bold text-xl">Tour Guide</h3>
          <p>It is a long established fact that a reader will be distracted</p>
        </div>
      </div>
    </div>
  );
}

export default OfferSection;