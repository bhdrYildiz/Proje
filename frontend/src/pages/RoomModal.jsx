import React, { useState } from 'react';

const RoomModal = ({ onClose, onSave }) => {
  const [name, setName] = useState('');
  const [type, setType] = useState('');
  const [price, setPrice] = useState('');

  const handleSave = () => {
    if (name && type && price) {
      onSave({ name, type, price: parseFloat(price) });
    }
  };

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center z-50 ">
      <div className="bg-[#f4f6fb] p-6 rounded-lg shadow-lg relative max-h-[96vh] overflow-auto w-[60vh]">
        <button
          onClick={onClose}
          className="absolute top-4 right-6 bg-red-500 text-[#C9D0E0] rounded-md p-2"
        >
          X
        </button>
        <h2 className="text-lg font-bold mb-4">Yeni Oda Ekle</h2>
        <input
          type="text"
          placeholder="Oda No"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="mb-4 p-2 border rounded w-full"
        />
        <input
          type="text"
          placeholder="Oda Çeşidi"
          value={type}
          onChange={(e) => setType(e.target.value)}
          className="mb-4 p-2 border rounded w-full"
        />
        <input
          type="number"
          placeholder="Günlük Fiyat"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          className="mb-4 p-2 border rounded w-full"
        />
        <button
          onClick={handleSave}
          className="px-4 py-2 bg-[#FCC400] text-[#363740] rounded-lg font-semibold hover:bg-[#363740] hover:text-[#FCC400] w-full"
        >
          Oda Ekle
        </button>
      </div>
    </div>
  );
};

export default RoomModal;
