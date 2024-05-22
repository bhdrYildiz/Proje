import React from "react";

const RoomCard = ({ roomName, onReserve }) => {
  return (
    <div className="bg-[#f4f6fb] rounded-lg shadow-md p-4 flex flex-col items-center w-56 h-72">
      <h2 className="text-lg font-bold mb-4">{roomName}</h2>
      <button
        className="bg-[#FCC400] text-[#363740] py-2 px-4 rounded-full mt-auto hover:bg-[#363740] hover:text-[#f4f6fb]"
        onClick={onReserve}
      >
        Rezervasyon Yap
      </button>
    </div>
  );
};

export default RoomCard;
