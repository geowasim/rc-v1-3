import dayjs from "dayjs";
import React, { useState } from "react";

// const DailyCalendar = () => {
//   return (
//     <div className="table">
//       <div className="thead"></div>
//       <div className="tbody"></div>
//     </div>
//   );
// };

// export default DailyCalendar;

export default function DailyCalendar() {
  const [date, setDate] = useState(dayjs());

  const hours = [...Array(24).keys()];

  const handlePrevDay = () => {
    setDate(date.subtract(1, "day"));
  };

  const handleNextDay = () => {
    setDate(date.add(1, "day"));
  };

  return (
    <div className="calendar">
      <div className="header">
        <button onClick={handlePrevDay}>Prev</button>
        <h2>{date.format("MMM D, YYYY")}</h2>
        <button onClick={handleNextDay}>Next</button>
      </div>
      <div className="hours">
        {hours.map((hour) => (
          <div key={hour} className="hour">
            {hour}:00
          </div>
        ))}
      </div>
      <div className="grid">
        {hours.map((hour) => (
          <div key={hour} className="hour">
            {[...Array(60).keys()].map((minute) => (
              <div key={`${hour}-${minute}`} className="minute"></div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
