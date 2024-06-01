import React from "react";

const Management = () => {
  return (
    <div className="flex flex-row w-full h-full p-8 justify-around">
      <div className="bg-[#363740] shadow-md rounded-lg p-8 flex flex-col mb-6 w-2/3">
        <div className="flex justify-between items-center bg-[#FCC400] p-5 mb-8 rounded-md">
          <div>
            <label className="text-lg font-medium text-[#363740]">
              Baş. Tarih:
            </label>
            <input type="date" className="p-2 border rounded-md ml-2" />
          </div>
          <div>
            <label className="text-lg font-medium text-[#363740]">
              Bitiş Tarih:
            </label>
            <input type="date" className="p-2 border rounded-md ml-2" />
          </div>
        </div>
        <div className="flex flex-col  gap-4 text-[#363740]">
          <RoomInput label="Tek Kişilik Oda" />
          <RoomInput label="Çift Kişilik Oda" />
          <RoomInput label="Suit Oda" />
          <RoomInput label="Balayı Odası" />
        </div>
      </div>
      <div className="bg-[#363740] shadow-md rounded-lg p-4 flex flex-col gap-12 w-64 h-96 text-[#363740]">
        <label className="block text-2xl font-medium mb-2 text-[#f4f6fb]">
          Kanallar
        </label>
        <div className="bg-[#f4f6fb] shadow-md rounded-lg p-6 flex flex-col gap-5">
          {["Booking", "Expedia", "EtsTur", "Hotels.com"].map((channel) => (
            <div key={channel} className="flex items-center">
              <input
                type="checkbox"
                id={channel}
                className="h-5 w-5 bg-[#E0E6EF]"
              />
              <label htmlFor={channel} className="ml-2 text-lg">
                {channel}
              </label>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const RoomInput = ({ label }) => {
  return (
    <div className="flex flex-col gap-4 bg-[#f4f6fb] shadow-md rounded-lg p-4">
      <h2 className="text-xl font-semibold">{label}</h2>
      <div className="grid grid-cols-3 gap-4">
        <div>
          <label className="block text-lg font-medium mb-1">Oda Sayısı:</label>
          <input
            type="number"
            className="w-full p-2 border rounded-md"
            placeholder="Oda Sayısı"
          />
        </div>
        <div>
          <label className="block text-lg font-medium mb-1">
            Min Geceleme:
          </label>
          <input
            type="number"
            className="w-full p-2 border rounded-md"
            placeholder="Min Geceleme"
          />
        </div>
        <div>
          <label className="block text-lg font-medium mb-1">Fiyat:</label>
          <input
            type="number"
            className="w-full p-2 border rounded-md"
            placeholder="Fiyat"
          />
        </div>
      </div>
    </div>
  );
};

export default Management;
