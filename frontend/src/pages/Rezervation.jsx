import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useOutletContext } from "react-router-dom";
import { getRezervations } from "../redux/rezervationSlice";

const Rezervation = () => {
  const navigate = useNavigate();
  const { setSelectedReservation } = useOutletContext();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getRezervations());
  }, [dispatch]);
  const asdas = useSelector((state) => state.rezervation);
  const datas = asdas?.rezervations || [];
  const statusColors = {
    Arrive: "bg-green-200 text-green-800",
    Leave: "bg-red-200 text-red-800",
    Waiting: "bg-yellow-200 text-yellow-800",
  };
  const reservations = [
    {
      name: "bahadir yildiz",
      guests: 2,
      roomNumber: 105,
      checkIn: "01.06.2024",
      checkOut: "01.06.2024",
      status: "Waiting",
      price: "500$",
    },
  ];
  const [currentPage, setCurrentPage] = useState(1);
  const [filterName, setFilterName] = useState("");
  const [filteredReservations, setFilteredReservations] = useState([]);
  const reservationsPerPage = 8;

  // Filtreleme ve sayfalama işlemleri
  const indexOfLastReservation = currentPage * reservationsPerPage;
  const indexOfFirstReservation = indexOfLastReservation - reservationsPerPage;
  const currentReservations = filteredReservations.slice(
    indexOfFirstReservation,
    indexOfLastReservation
  );

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const handleSelect = () => {
    setSelectedReservation(reservations[0]);
    navigate("/main/rezInfo");
  };

  const totalPages = Math.ceil(
    filteredReservations.length / reservationsPerPage
  );

  useEffect(() => {
    const filtered = datas.filter((reservation) =>
      reservation.guestName.toLowerCase().includes(filterName.toLowerCase())
    );
    setFilteredReservations(filtered);
    setCurrentPage(1);
  }, [filterName, datas]);

  const sortByPrice = () => {
    const sorted = [...filteredReservations].sort(
      (a, b) => parseFloat(a.price) - parseFloat(b.price)
    );
    setFilteredReservations(sorted);
  };

  const handleRefresh = () => {
    setFilterName("");
    setCurrentPage(1);
    setFilteredReservations(datas);
  };

  return (
    <div className="w-full h-full flex flex-col items-center justify-center p-4">
      <div className="w-full flex justify-between items-center mb-1">
        <h1
          className="text-xl text-[#363740] font-semibold ml-6 cursor-pointer"
          onClick={handleRefresh}
        >
          All Guests
        </h1>
        <div className="flex items-center">
          <button
            className="m-4 p-2 rounded-2xl hover:bg-[#f4f6fb]"
            onClick={sortByPrice}
          >
            <i className="fas fa-sort text-[#363740] px-1"></i> Sort
          </button>
          <button className="m-4 rounded-2xl">
            <i className="fas fa-filter text-[#363740]"></i>
          </button>
          <input
            type="text"
            value={filterName}
            onChange={(e) => setFilterName(e.target.value)}
            placeholder="Filter by name"
            className="p-2 border rounded-xl mr-4"
          />
        </div>
      </div>
      <hr className="w-full h-0.5 bg-[#363740] text-[#363740] mb-8 rounded-2xl"></hr>
      <div className="overflow-x-auto shadow-md sm:rounded-lg w-full">
        <table className="w-full text-sm text-left text-[#363740]">
          <thead className="text-xs text-[#363740] uppercase bg-[#FCC400]">
            <tr>
              <th scope="col" className="px-6 py-3">
                Name
              </th>
              <th scope="col" className="px-6 py-3">
                Guests
              </th>
              <th scope="col" className="px-6 py-3">
                Room Number
              </th>
              <th scope="col" className="px-6 py-3">
                Check-in
              </th>
              <th scope="col" className="px-6 py-3">
                Check-out
              </th>
              <th scope="col" className="px-6 py-3">
                Status
              </th>
              <th scope="col" className="px-6 py-3">
                Price
              </th>
            </tr>
          </thead>
          <tbody>
            {currentReservations.map((reservation, index) => (
              <tr
                key={index}
                className="bg-white border-b hover:bg-[#f4f6fb] cursor-pointer"
                onClick={() => handleSelect(reservation)}
              >
                <td className="px-6 py-4">{reservation.guestName}</td>
                <td className="px-6 py-4">{reservation.numberOfGuests}</td>
                <td className="px-6 py-4">{reservation.roomNumber}</td>
                <td className="px-6 py-4">
                  {new Date(reservation.checkIn).toLocaleDateString()}
                </td>
                <td className="px-6 py-4">
                  {new Date(reservation.checkOut).toLocaleDateString()}
                </td>
                <td className="px-6 py-4">
                  <span
                    className={`px-2 py-1 rounded ${
                      statusColors[reservation.status]
                    }`}
                  >
                    {reservation.status}
                  </span>
                </td>
                <td className="px-6 py-4">{reservation.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="flex bg-[#FCC400] justify-between items-center mt-6 rounded-lg">
          <button
            onClick={() => paginate(currentPage - 1)}
            disabled={currentPage === 1}
            className="p-2 rounded-xl m-2 ml-4 bg-[#363740] hover:bg-[#f4f6fb] text-[#f4f6fb] hover:text-[#363740]"
          >
            Previous
          </button>
          <div>
            {Array.from({ length: totalPages }, (_, index) => (
              <button
                key={index}
                onClick={() => paginate(index + 1)}
                className={`p-2 mx-1 rounded-lg ${
                  currentPage === index + 1
                    ? "bg-[#363740] text-[#f4f6fb]"
                    : "bg-[#f4f6fb] hover:bg-[#C9D0E0]"
                }`}
              >
                {index + 1}
              </button>
            ))}
          </div>
          <button
            onClick={() => paginate(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="p-2 rounded-xl m-2 mr-4 bg-[#363740] hover:bg-[#f4f6fb] text-[#f4f6fb] hover:text-[#363740]"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Rezervation;
