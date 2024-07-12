import React, { useState } from "react";

const Availability = () => {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [dates, setDates] = useState([]);

  const handleDateChange = () => {
    if (startDate && endDate) {
      let start = new Date(startDate);
      let end = new Date(endDate);
      let dateArray = [];

      while (start <= end) {
        dateArray.push(new Date(start));
        start.setDate(start.getDate() + 1);
      }
      setDates(dateArray);
    }
  };

  const getRandomValueAndColor = () => {
    const isRed = Math.random() < 0.3; // %50 şansla kırmızı veya yeşil
    const value = isRed ? 0 : Math.floor(Math.random() * 3) + 1; // kırmızı için 0, yeşil için 1, 2 veya 3
    return { isRed, value };
  };

  return (
    <div className="flex justify-center items-center h-full w-full bg-[#C9D0E0]">
      <div className="bg-[#f4f6fb] p-8 shadow-md rounded-lg w-full max-w-7xl text-[#363740]">
        <h2 className="text-2xl font-semibold mb-4">
          Müsaitlik Tablo Görünümü
        </h2>
        <div className="flex mb-4 space-x-4 sm:flex-row sm:space-x-4">
          <div className="flex flex-col mb-4 sm:mb-0">
            <label className="block text-lg font-medium mb-1">
              Baş. Tarih:
            </label>
            <input
              type="date"
              className="p-2 border rounded-md"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
            />
          </div>
          <div className="flex flex-col mb-4 sm:mb-0">
            <label className="block text-lg font-medium mb-1">
              Bitiş Tarih:
            </label>
            <input
              type="date"
              className="p-2 border rounded-md"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
            />
          </div>
          <div className="flex items-end">
            <button
              className="bg-[#FCC400] text-[#363740] border border-[#363740] p-2 rounded-md hover:bg-[#363740] hover:text-[#f4f6fb] hover:border-[#f4f6fb]"
              onClick={handleDateChange}
            >
              Get Dates
            </button>
          </div>
        </div>
        <div className="overflow-x-auto h-3/4 sm:h-full overflow-y-auto">
          <table className="table-auto w-full border-collapse min-w-max h-5/6">
            <thead>
              <tr>
                <th className="border p-4 bg-[#FCC400]">Oda Türü</th>
                {dates.map((date, index) => (
                  <th key={index} className="border p-2 bg-[#FCC400]">
                    {date.toLocaleDateString("tr-TR", {
                      day: "numeric",
                      month: "numeric",
                      weekday: "short",
                    })}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {[
                "Tek Kişilik Oda",
                "Çift Kişilik Oda",
                "Aile Odası",
                "Suit Oda",
                "Balayı Odası",
              ].map((roomType, index) => (
                <tr key={index}>
                  <td className="border-y-2 border-[#C9D0E0] font-semibold p-2">
                    {roomType}
                  </td>
                  {dates.map((date, dateIndex) => {
                    const { isRed, value } = getRandomValueAndColor();
                    return (
                      <td
                        key={dateIndex}
                        className={`border border-[#363740] p-2 text-center ${
                          isRed ? "bg-red-200" : "bg-green-200"
                        }`}
                      >
                        {value}
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Availability;
