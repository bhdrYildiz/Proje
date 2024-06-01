import React from "react";

const RoomCard = ({ roomName, roomType, roomPrice, onDelete }) => {
  return (
    <div className="bg-[#f4f6fb] rounded-lg shadow-md p-4 flex flex-col gap-4 items-center w-56 h-72">
      <h2 className="text-lg font-bold mb-2">{roomName}</h2>
      <p className="text-m mb-2">{roomType}</p>
      <p className="text-m mb-4">{`Fiyat: ${roomPrice} TL`}</p>

      <button
        className="bg-red-500 text-white py-2 px-4  mt-10 rounded-2xl hover:bg-red-800"
        onClick={onDelete}
      >
        Oda Sil
      </button>
    </div>
  );
};

export default RoomCard;
