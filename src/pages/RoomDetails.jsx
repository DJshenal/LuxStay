import { useParams } from 'react-router-dom';
import data from '../data.json';

function RoomDetails() {
  const { id } = useParams();
  const room = data.rooms.find((room) => room.id === id);

  if (!room) {
    return <div className="text-center py-12 text-xl font-semibold">Room not found</div>;
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-10 mt-16">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat blur-md  z-0"
        style={{
          backgroundImage: `url('https://media.istockphoto.com/id/1453121684/photo/modern-hotel-room-with-double-bed-night-tables-and-day-sofa-bed.jpg?s=2048x2048&w=is&k=20&c=2uyZLp-B5iORDO1erbUzsY6_55JDOkRn5ujtU5yfeOA=')`,
        }}
      ></div>
      <div className="absolute inset-0 bg-white bg-opacity-50 z-0"></div>

      <img
        src={room.image}
        alt={room.title}
        className="w-full h-64 object-cover rounded-lg relative mb-6"
      />

      <h1 className="text-3xl font-bold relative">{room.title}</h1>
      <p className="mt-4 text-gray-700 relative">{room.description}</p>
      <p className="mt-4 text-gray-900 font-bold text-lg relative">Price: {room.price} per night</p>


      <button className="mt-6 bg-amber-600 relative text-white px-4 py-2 rounded-md hover:bg-amber-700">
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
  );
}

export default RoomDetails;
