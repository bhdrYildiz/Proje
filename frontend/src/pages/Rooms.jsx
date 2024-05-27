import React from 'react';
import RoomCard from './RoomCard';

const Rooms = () => {
  const rooms = [
    { id: 1, name: 'ODA1' },
    { id: 2, name: 'ODA2' },
    { id: 3, name: 'ODA3' },
    { id: 4, name: 'ODA4' },
    { id: 5, name: 'ODA5' },
    { id: 6, name: 'ODA6' },
    { id: 7, name: 'ODA7' },
    { id: 8, name: 'ODA8' }
  ];

  const handleReserve = (roomId) => {
    console.log(`Rezervasyon yapıldı: Oda ${roomId}`);
  };

  return (
    <div className="flex flex-wrap gap-24 justify-center p-4 bg-[#C9D0E0]">
      {rooms.map(room => (
        <RoomCard 
          key={room.id} 
          roomName={room.name} 
          onReserve={() => handleReserve(room.id)} 
        />
      ))}
    </div>
  );
};

export default Rooms;
