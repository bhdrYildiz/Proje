import React from 'react';
import { useOutletContext } from 'react-router-dom';

const RezInfo = () => {
  const { selectedReservation } = useOutletContext();

  if (!selectedReservation) {
    return <div>No reservation selected</div>;
  }

  return (
    <div className="rezInfo h-full w-full rounded-3xl bg-[#C9D0E0] p-2 flex flex-col items-center justify-center">
      <div className="flex w-full justify-center h-3/6 gap-10 m-8 rounded-3xl p-6">
        <div className="bg-[#f4f6fb] rounded-3xl shadow-lg p-8 w-1/3 flex flex-col gap-2">
          <h2 className="text-center text-xl font-bold mb-6 p-4 text-[#363740]">Müşteri Bilgileri</h2>
          <p>REZERVASYON SAHİBİ: {selectedReservation.name.toUpperCase()}</p>
          <p>GİRİŞ TARİHİ: {selectedReservation.checkIn}</p>
          <p>ÇIKIŞ TARİHİ: {selectedReservation.checkOut}</p>
          <p>ÖDEME TİPİ: KREDİ KARTI</p>
          <p>TOPLAM TUTARI: {selectedReservation.price}</p>
        </div>
        <div className="bg-[#f4f6fb] rounded-3xl shadow-lg p-8 w-1/3 flex flex-col gap-2">
          <h2 className="text-center text-xl font-bold mb-6 p-4 text-[#363740]">Rezervasyon Bilgileri</h2>
          <p>AD SOYAD: {selectedReservation.name.toUpperCase()}</p>
          <p>TELEFON NUMARASI: (511) 213 22 55</p>
          <p>KİŞİ SAYISI: {selectedReservation.guests}</p>
          <p>ODA TÜRLERİ: AİLE ODASI</p>
        </div>
      </div>
      <div className="bg-[#f4f6fb] h-3/6 m-8 rounded-3xl shadow-lg p-8 w-2/3 flex flex-col gap-8">
        <h2 className="text-center text-xl font-bold mt-4 mb-4 text-[#363740]">Rezervasyon Detayları</h2>
        <div className="flex items-start justify-around gap-16">
          <div className='flex flex-col gap-2'>
            <h3 className='text-l font-semibold text-[#FCC400] mb-2'>ODA 1</h3>
            <p>ODA TİPİ: AİLE ODASI</p>
            <p>KİŞİ SAYISI: 1 YETİŞKİN 1 ÇOCUK</p>
            <p>TARİHLER: 5 MART, 6 MART</p>
            <p>TOPLAM FİYAT: 960$</p>
          </div>
          <div className='flex flex-col gap-2'>
            <h3 className='text-l font-semibold text-[#FCC400] mb-2'>ODA 2</h3>
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
