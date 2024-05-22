import React from 'react';

const RezInfo = ({ reservation }) => {
  return (
    <div className="rezInfo min-h-screen bg-[#C9D0E0] p-8 flex flex-col items-center">
      <div className="flex w-full justify-center space-x-8 mb-8">
        <div className="bg-white rounded-lg shadow-lg p-8 w-1/3">
          <h2 className="text-center text-xl font-bold mb-4">Müşteri Bilgileri</h2>
          <p>REZERVASYON SAHİBİ: {reservation.name.toUpperCase()}</p>
          <p>GİRİŞ TARİHİ: {reservation.checkIn}</p>
          <p>ÇIKIŞ TARİHİ: {reservation.checkOut}</p>
          <p>ÖDEME TİPİ: KREDİ KARTI</p>
          <p>TOPLAM TUTARI: {reservation.price}</p>
        </div>
        <div className="bg-white rounded-lg shadow-lg p-8 w-1/3">
          <h2 className="text-center text-xl font-bold mb-4">Rezervasyon Bilgileri</h2>
          <p>AD SOYAD: {reservation.name.toUpperCase()}</p>
          <p>TELEFON NUMARASI: (511) 213 22 55</p>
          <p>KİŞİ SAYISI: {reservation.guests}</p>
          <p>ODA TÜRLERİ: AİLE ODASI</p>
        </div>
      </div>
      <div className="bg-white rounded-lg shadow-lg p-8 w-2/3">
        <h2 className="text-center text-xl font-bold mb-4">Rezervasyon Detayları</h2>
        <div className="flex justify-around">
          <div>
            <h3>ODA 1:</h3>
            <p>ODA TİPİ: AİLE ODASI</p>
            <p>KİŞİ SAYISI: 1 YETİŞKİN 1 ÇOCUK</p>
            <p>TARİHLER: 5 MART, 6 MART, 7 MART, 8 MART</p>
            <p>TOPLAM FİYAT: 960$</p>
          </div>
          <div>
            <h3>ODA 2:</h3>
            <p>ODA TİPİ: AİLE ODASI</p>
            <p>KİŞİ SAYISI: 1 YETİŞKİN 1 ÇOCUK</p>
            <p>TARİHLER: 5 MART, 6 MART</p>
            <p>TOPLAM FİYAT: 480$</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RezInfo;
