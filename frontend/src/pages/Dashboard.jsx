import React from "react";
import { useNavigate } from "react-router-dom";
import { useOutletContext } from "react-router-dom";
import { useState } from "react";

const Dashboard = () => {
  const navigate = useNavigate();
  const { setSelectedReservation } = useOutletContext();

  const reservations = [
    { name: 'bahadir yildiz', guests: 2, roomNumber: 105, checkIn: '01.06.2024', checkOut: '01.06.2024', status: 'Waiting', price: '$105' },
    { name: 'bahadir yildiz', guests: 2, roomNumber: 105, checkIn: '01.06.2024', checkOut: '01.06.2024', status: 'Leave', price: '$105' },
    { name: 'bahadir yildiz', guests: 2, roomNumber: 105, checkIn: '01.06.2024', checkOut: '01.06.2024', status: 'Arrive', price: '$105' },
    { name: 'bahadir yildiz', guests: 2, roomNumber: 105, checkIn: '01.06.2024', checkOut: '01.06.2024', status: 'Arrive', price: '$105' },
    { name: 'bahadir yildiz', guests: 2, roomNumber: 105, checkIn: '01.06.2024', checkOut: '01.06.2024', status: 'Leave', price: '$105' },
    { name: 'bahadir yildiz', guests: 2, roomNumber: 105, checkIn: '01.06.2024', checkOut: '01.06.2024', status: 'Arrive', price: '$105' },
    { name: 'bahadir yildiz', guests: 2, roomNumber: 105, checkIn: '01.06.2024', checkOut: '01.06.2024', status: 'Leave', price: '$105' },
    { name: 'bahadir yildiz', guests: 2, roomNumber: 105, checkIn: '01.06.2024', checkOut: '01.06.2024', status: 'Waiting', price: '$105' },
    { name: 'bahadir yildiz', guests: 2, roomNumber: 105, checkIn: '01.06.2024', checkOut: '01.06.2024', status: 'Arrive', price: '$105' },
    { name: 'bahadir yildiz', guests: 2, roomNumber: 105, checkIn: '01.06.2024', checkOut: '01.06.2024', status: 'Leave', price: '$105' },
    { name: 'bahadir yildiz', guests: 2, roomNumber: 105, checkIn: '01.06.2024', checkOut: '01.06.2024', status: 'Leave', price: '$105' },
    { name: 'bahadir yildiz', guests: 2, roomNumber: 105, checkIn: '01.06.2024', checkOut: '01.06.2024', status: 'Waiting', price: '$105' },
    { name: 'bahadir yildiz', guests: 2, roomNumber: 105, checkIn: '01.06.2024', checkOut: '01.06.2024', status: 'Arrive', price: '$105' },
    { name: 'bahadir yildiz', guests: 2, roomNumber: 105, checkIn: '01.06.2024', checkOut: '01.06.2024', status: 'Leave', price: '$105' },
  ];

  const statusColors = {
    'Arrive': 'bg-green-200 text-green-800',
    'Leave': 'bg-red-200 text-red-800',
    'Waiting': 'bg-yellow-200 text-yellow-800',
  };

  const [currentPage, setCurrentPage] = useState(1);
  const reservationsPerPage = 8;

  const indexOfLastReservation = currentPage * reservationsPerPage;
  const indexOfFirstReservation = indexOfLastReservation - reservationsPerPage;
  const currentReservations = reservations.slice(indexOfFirstReservation, indexOfLastReservation);

  const handleSelect = (reservation) => {
    setSelectedReservation(reservation);
    navigate('/main/rezInfo');
  };

  const totalPages = Math.ceil(reservations.length / reservationsPerPage);

  return (
    <div className="w-full h-full flex flex-col items-center justify-center p-4 mb-16">
      <div className="w-full flex justify-between items-center mb-1">
        <h1 className="text-xl text-[#363740] font-semibold ml-6 mb-1">Last Guests</h1>
      </div>
      <hr className="w-full h-0.5 bg-[#363740] text-[#363740] mb-8 rounded-2xl"></hr>
      <div className="overflow-x-auto shadow-md sm:rounded-lg w-full">
        <table className="w-full text-sm text-left text-[#363740]">
          <thead className="text-xs text-[#363740] uppercase bg-[#FCC400]">
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
            {currentReservations.map((reservation, index) => (
              <tr 
                key={index} 
                className="bg-white border-b hover:bg-[#f4f6fb] cursor-pointer hover:font-semibold" 
                onClick={() => handleSelect(reservation)}
              >
                <td className="px-6 py-4">{reservation.name}</td>
                <td className="px-6 py-4">{reservation.guests}</td>
                <td className="px-6 py-4">{reservation.roomNumber}</td>
                <td className="px-6 py-4">{reservation.checkIn}</td>
                <td className="px-6 py-4">{reservation.checkOut}</td>
                <td className="px-6 py-4">
                  <span className={`px-2 py-1 rounded-lg ${statusColors[reservation.status]}`}>
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

export default Dashboard;
