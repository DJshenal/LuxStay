import { Link } from 'react-router-dom';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import data from '../../data.json';
import { MdPayments } from "react-icons/md";
import { TbReport } from "react-icons/tb";
import { GiBlackBook } from "react-icons/gi";

function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-100 py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
        <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {data.stats.overview.map((item, index) => (
            <div
              key={index}
              className="bg-white overflow-hidden shadow rounded-lg" >
              <div className="p-5">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <div className={`${item.color} h-12 w-12 rounded-md flex items-center justify-center`}>
                      <span className="text-white  text-xl font-bold">{item.value}</span>
                    </div>
                  </div>
                  <div className="ml-5">
                    <p className="text-sm font-medium text-gray-500 truncate">
                      {item.title}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-8">
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-bold text-gray-900 mb-4 text-center">Booking Trends</h2>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={data.stats.bookingStats}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="bookings" fill='#d97706' style={{ opacity: 0.5 }} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        <div className="mt-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4 text-center">Quick Actions</h2>
          <div className=" px-20  p-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            <Link
              to="/admin/bookings"
              className="bg-white p-6  rounded-lg shadow hover:shadow-lg transition-shadow flex justify-between items-center "
            >
              <GiBlackBook size={48} />
              <h3 className="text-lg font-medium text-gray-900">View All Bookings</h3>

            </Link>
            <Link
              to="/admin/payments"
              className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow flex justify-between items-center"
            >
              <MdPayments size={48} />
              <h3 className="text-lg font-medium text-gray-900">Process Payments</h3>

            </Link>
            <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow flex justify-between items-center">
              <TbReport size={48} />
              <h3 className="text-lg font-medium text-gray-900">Generate Reports</h3>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;