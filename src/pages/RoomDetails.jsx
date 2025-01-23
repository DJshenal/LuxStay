import { useParams } from 'react-router-dom';
import { useState } from 'react';
import data from '../data.json';

function RoomDetails() {
  const { id } = useParams();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const room = data.rooms.find((room) => room.id === id);

  if (!room) {
    return <div className="text-center py-12 text-xl font-semibold">Room not found</div>;
  }

  const handleBookingClick = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-10 mt-16">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat blur-md z-0"
        style={{
          backgroundImage: `url('https://media.istockphoto.com/id/1453121684/photo/modern-hotel-room-with-double-bed-night-tables-and-day-sofa-bed.jpg?s=2048x2048&w=is&k=20&c=2uyZLp-B5iORDO1erbUzsY6_55JDOkRn5ujtU5yfeOA=')`,
        }}
      ></div>
      <div className="absolute inset-0 bg-white bg-opacity-50 z-0"></div>

      <div className="relative z-10">
        <img
          src={room.image}
          alt={room.title}
          className="w-full h-64 object-cover rounded-lg relative mb-6"
        />

        <h1 className="text-3xl font-bold relative">{room.title}</h1>
        <p className="mt-4 text-gray-700 relative">{room.description}</p>
        <p className="mt-4 text-gray-900 font-bold text-lg relative">Price: LKR {room.price} per night</p>

        <button
          className="mt-6 bg-amber-600 relative text-white px-4 py-2 rounded-md hover:bg-amber-700"
          onClick={handleBookingClick}
        >
          Book Now
        </button>

        <h2 className="text-2xl font-semibold mt-10 mb-4 relative">Room Images</h2>
        {room["room-images"] && room["room-images"].length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 relative">
            {room["room-images"].map((image, index) => (
              <div key={index} className="overflow-hidden rounded-lg shadow-md">
                <img
                  src={image}
                  alt={`Room Image ${index + 1}`}
                  className="w-full h-48 object-cover transition-transform transform hover:scale-105"
                />
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-500 relative">No images.</p>
        )}
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 z-20 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white sm:flex sm:rounded-lg w-full max-w-4xl mx-4 h-auto">
            <div className="relative sm:w-1/2 w-full">
              <img
                src={room.image}
                alt={room.title}
                className="w-full h-64 sm:h-full object-cover rounded-t-lg sm:rounded-l-lg sm:rounded-tr-none opacity-80"
              />
              <h2 className="text-2xl sm:text-4xl font-bold text-center absolute top-1/2 left-24   text-white">
                Book Room: <br />
                {room.title}
              </h2>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6 w-full sm:w-1/2 relative">
              <form>
                <div className="mb-4">
                  <label className=" text-sm font-medium text-gray-700">
                    Your Name
                  </label>
                  <input
                    type="text"
                    className="px-3 py-2 font-semibold mt-1 w-full rounded-md border border-gray-300"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className=" text-sm font-medium text-gray-700">
                    Email Address
                  </label>
                  <input
                    type="email"
                    className="px-3 py-2 font-semibold mt-1 w-full rounded-md border border-gray-300"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className=" text-sm font-medium text-gray-700">
                    Check-in Date
                  </label>
                  <input
                    type="date"
                    className="px-3 py-2 font-semibold mt-1 w-full rounded-md border border-gray-300"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className=" text-sm font-medium text-gray-700">
                    Number of Nights
                  </label>
                  <input
                    type="number"
                    className="px-3 py-2 font-semibold mt-1 w-full rounded-md border border-gray-300"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-amber-600 text-white px-4 py-2 rounded-md hover:bg-amber-700"
                >
                  Confirm Booking
                </button>
              </form>
              <button
                className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
                onClick={closeModal}
              >
                X
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}

export default RoomDetails;
