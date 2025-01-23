import { useState } from 'react';
import data from '../../data.json';

function Payments() {
  const [payments] = useState(data.payments);
  const { paymentStats } = data.stats;

  return (
    <div className="min-h-screen bg-gray-100 py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold text-gray-900">Payments</h1>
          <button className="bg-white px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50">
            Export Transactions
          </button>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="p-5">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <div className="bg-green-500 h-12 w-12 rounded-md flex items-center justify-center">
                    <span className="text-white text-xl font-bold">$</span>
                  </div>
                </div>
                <div className="ml-5">
                  <p className="text-sm font-medium text-gray-500 truncate">
                    Total Revenue
                  </p>
                  <p className="mt-1 text-xl font-semibold text-gray-900">
                    {paymentStats.totalRevenue}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="p-5">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <div className="bg-yellow-500 h-12 w-12 rounded-md flex items-center justify-center">
                    <span className="text-white text-xl font-bold">P</span>
                  </div>
                </div>
                <div className="ml-5">
                  <p className="text-sm font-medium text-gray-500 truncate">
                    Pending Payments
                  </p>
                  <p className="mt-1 text-xl font-semibold text-gray-900">
                    {paymentStats.pendingPayments}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="p-5">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <div className="bg-blue-500 h-12 w-12 rounded-md flex items-center justify-center">
                    <span className="text-white text-xl font-bold">T</span>
                  </div>
                </div>
                <div className="ml-5">
                  <p className="text-sm font-medium text-gray-500 truncate">
                    Today's Transactions
                  </p>
                  <p className="mt-1 text-xl font-semibold text-gray-900">
                    {paymentStats.todaysTransactions}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-col">
          <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
              <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
                <table className="min-w-full divide-y divide-gray-300">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                        Payment ID
                      </th>
                      <th className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                        Booking ID
                      </th>
                      <th className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                        Customer
                      </th>
                      <th className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                        Amount
                      </th>
                      <th className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                        Status
                      </th>
                      <th className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                        Date
                      </th>
                      <th className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                        Method
                      </th>
                     
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 bg-white">
                    {payments.map((payment) => (
                      <tr key={payment.id}>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                          {payment.id}
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                          {payment.bookingId}
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-900">
                          {payment.customerName}
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                          {payment.amount}
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm">
                          <span className={`inline-flex rounded-full px-2 text-xs font-semibold leading-5 ${
                            payment.status === 'Completed'
                              ? 'bg-green-100 text-green-800'
                              : 'bg-yellow-100 text-yellow-800'
                          }`}>
                            {payment.status}
                          </span>
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                          {payment.date}
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                          {payment.method}
                        </td>
                       
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payments;