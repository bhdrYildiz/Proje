import React from 'react';

const Rezervation = ({ onSelect }) => {
  const reservations = [
    { name: 'bahadir yildiz', guests: 2, roomNumber: 105, checkIn: '01.06.2024', checkOut: '01.06.2024', status: 'Arrive', price: '$105' },
    { name: 'bahadir yildiz', guests: 2, roomNumber: 105, checkIn: '01.06.2024', checkOut: '01.06.2024', status: 'Leave', price: '$105' },
    { name: 'bahadir yildiz', guests: 2, roomNumber: 105, checkIn: '01.06.2024', checkOut: '01.06.2024', status: 'Waiting', price: '$105' },
    { name: 'bahadir yildiz', guests: 2, roomNumber: 105, checkIn: '01.06.2024', checkOut: '01.06.2024', status: 'Arrive', price: '$105' },
    { name: 'bahadir yildiz', guests: 2, roomNumber: 105, checkIn: '01.06.2024', checkOut: '01.06.2024', status: 'Waiting', price: '$105' },
    { name: 'bahadir yildiz', guests: 2, roomNumber: 105, checkIn: '01.06.2024', checkOut: '01.06.2024', status: 'Leave', price: '$105' },
    { name: 'bahadir yildiz', guests: 2, roomNumber: 105, checkIn: '01.06.2024', checkOut: '01.06.2024', status: 'Arrive', price: '$105' },
  ];

  const statusColors = {
    'Arrive': 'bg-green-200 text-green-800',
    'Leave': 'bg-red-200 text-red-800',
    'Waiting': 'bg-yellow-200 text-yellow-800',
  };

  return (
    <div className="w-full h-full flex items-center justify-center p-4">
      <div className="overflow-x-auto shadow-md sm:rounded-lg w-full">
        <table className="w-full text-sm text-left text-gray-500">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3">Name</th>
              <th scope="col" className="px-6 py-3">Guests</th>
              <th scope="col" className="px-6 py-3">Room Number</th>
              <th scope="col" className="px-6 py-3">Check-in</th>
              <th scope="col" className="px-6 py-3">Check-out</th>
              <th scope="col" className="px-6 py-3">Status</th>
              <th scope="col" className="px-6 py-3">Price</th>
            </tr>
          </thead>
          <tbody>
            {reservations.map((reservation, index) => (
              <tr 
                key={index} 
                className="bg-white border-b hover:bg-gray-50 cursor-pointer" 
                onClick={() => onSelect(reservation)}
              >
                <td className="px-6 py-4">{reservation.name}</td>
                <td className="px-6 py-4">{reservation.guests}</td>
                <td className="px-6 py-4">{reservation.roomNumber}</td>
                <td className="px-6 py-4">{reservation.checkIn}</td>
                <td className="px-6 py-4">{reservation.checkOut}</td>
                <td className="px-6 py-4">
                  <span className={`px-2 py-1 rounded ${statusColors[reservation.status]}`}>
                    {reservation.status}
                  </span>
                </td>
                <td className="px-6 py-4">{reservation.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Rezervation;
