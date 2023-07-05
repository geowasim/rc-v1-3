import CalendarBody from "./CalendarBody";
import "./calendar.css";
import CalendarHead from "./CalendarHead";
import { useState } from "react";
import dayjs from "dayjs";
import weekdayPlugin from "dayjs/plugin/weekday";

// location setting "Poland";
dayjs().locale("pl");
dayjs.extend(weekdayPlugin);

const defaultDate = dayjs();

const calendarOptions = ["Month", "Week", "Day"];

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(defaultDate);
  const [viewOption, setViewOption] = useState(calendarOptions[1]);

  function dateUpdater(date) {
    setCurrentDate(date);
  }
  function viewOptionChanger(val) {
    setViewOption(val);
  }
  return (
    <div className="calendar_container">
      {/* <div className="calendar_header">Calendar Header</div> */}
      <div className="calendar_body">
        <CalendarHead
          currentDate={currentDate}
          dateUpdater={dateUpdater}
          defaultDate={defaultDate}
          viewOption={viewOption}
          viewOptionChanger={viewOptionChanger}
          calendarOptions={calendarOptions}
        />
        <CalendarBody
          currentDate={currentDate}
          defaultDate={defaultDate}
          viewOption={viewOption}
        />
      </div>
    </div>
  );
};

export default Calendar;
