import React, { useState } from "react";
import RoomCard from "./RoomCard";
import RoomModal from "./RoomModal";

const Rooms = () => {
  const [rooms, setRooms] = useState([
    { id: 1, name: "106", type: "Tek Kişilik", price: 100 },
    { id: 2, name: "105", type: "Çift Kişilik", price: 200 },
    { id: 3, name: "103", type: "Tek Kişilik", price: 100 },
    { id: 4, name: "104", type: "Çift Kişilik", price: 200 },
    { id: 5, name: "102", type: "Tek Kişilik", price: 100 },
    { id: 6, name: "101", type: "Çift Kişilik", price: 200 },
    { id: 7, name: "107", type: "Tek Kişilik", price: 100 },
    { id: 8, name: "108", type: "Çift Kişilik", price: 200 },
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleReserve = (roomId) => {
    console.log(`Rezervasyon yapıldı: Oda ${roomId}`);
  };

  const addRoom = (newRoom) => {
    const newId = rooms.length > 0 ? rooms[rooms.length - 1].id + 1 : 1;
    setRooms([...rooms, { ...newRoom, id: newId }]);
  };

  const removeRoom = (roomId) => {
    setRooms(rooms.filter((room) => room.id !== roomId));
  };

  return (
    <div className="flex flex-col justify-center items-center h-full w-full bg-[#C9D0E0]">
      <div className="w-full flex justify-between items-center mb-1">
        <h1 className="text-xl text-[#363740] font-semibold ml-40 mb-1">
          All Rooms
        </h1>
        <button
          onClick={() => setIsModalOpen(true)}
          className="mb-4 mr-36 px-4 py-2 rounded-lg bg-[#FCC400] text-[#363740] font-semibold hover:bg-[#363740] hover:text-[#FCC400]"
        >
          Oda Ekle
        </button>
        
      </div>
      <hr className="w-5/6 h-0.5 bg-[#363740] text-[#363740] mb-8 rounded-2xl"></hr>
      {isModalOpen && (
        <RoomModal
          onClose={() => setIsModalOpen(false)}
          onSave={(newRoom) => {
            addRoom(newRoom);
            setIsModalOpen(false);
          }}
        />
      )}
      <div className="flex flex-wrap gap-24 justify-center p-4 overflow-auto max-h-[80vh]">
        {rooms.map((room) => (
          <RoomCard
            key={room.id}
            roomName={room.name}
            roomType={room.type}
            roomPrice={room.price}
            onReserve={() => handleReserve(room.id)}
            onDelete={() => removeRoom(room.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default Rooms;
