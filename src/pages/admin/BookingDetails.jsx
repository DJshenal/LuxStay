import { useParams } from 'react-router-dom';
import data from '../../data.json';

function BookingDetails() {
  const { id } = useParams();
  const booking = data.bookings.find(b => b.id === id) || data.bookings[0];

  return (
    <div className="min-h-screen bg-gray-100 py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold text-gray-900">Booking Details</h1>
          <div className="flex space-x-4">
            <button className="bg-white px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50">
              Print Receipt
            </button>
            <button className="bg-red-600 px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white hover:bg-red-700">
              Cancel Booking
            </button>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-2 bg-white shadow rounded-lg">
          <div className="p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Customer Information</h2>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm font-medium text-gray-500">Name</p>
                <p className="mt-1 text-sm text-gray-900">{booking.customerName}</p>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500">Email</p>
                <p className="mt-1 text-sm text-gray-900">{booking.email}</p>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500">Phone</p>
                <p className="mt-1 text-sm text-gray-900">{booking.phone}</p>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500">Booking Date</p>
                <p className="mt-1 text-sm text-gray-900">{booking.bookingDate}</p>
              </div>
            </div>
          </div>

          <div className=" p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Booking Information</h2>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm font-medium text-gray-500">Booking ID</p>
                <p className="mt-1 text-sm text-gray-900">{booking.id}</p>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500">Room Type</p>
                <p className="mt-1 text-sm text-gray-900">{booking.roomType}</p>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500">Check-in</p>
                <p className="mt-1 text-sm text-gray-900">{booking.checkIn}</p>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500">Check-out</p>
                <p className="mt-1 text-sm text-gray-900">{booking.checkOut}</p>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500">Guests</p>
                <p className="mt-1 text-sm text-gray-900">{booking.guests}</p>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500">Status</p>
                <p className="mt-1">
                  <span className={`inline-flex rounded-full px-2 text-xs font-semibold leading-5 ${booking.status === 'Confirmed'
                      ? 'bg-green-100 text-green-800'
                      : booking.status === 'Pending'
                        ? 'bg-yellow-100 text-yellow-800'
                        : 'bg-red-100 text-red-800'
                    }`}>
                    {booking.status}
                  </span>
                </p>
              </div>
            </div>
          </div>

          <div className=" p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Payment Information</h2>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm font-medium text-gray-500">Amount</p>
                <p className="mt-1 text-sm text-gray-900">{booking.amount}</p>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500">Payment Status</p>
                <p className="mt-1">
                  <span className={`inline-flex rounded-full px-2 text-xs font-semibold leading-5 ${booking.paymentStatus === 'Paid'
                      ? 'bg-green-100 text-green-800'
                      : 'bg-yellow-100 text-yellow-800'
                    }`}>
                    {booking.paymentStatus}
                  </span>
                </p>
              </div>
            </div>
          </div>


        </div>
      </div>
    </div>
  );
}

export default BookingDetails;