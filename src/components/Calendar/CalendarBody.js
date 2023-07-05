// import moment from "moment/moment";
import { useEffect, useState } from "react";
import { generateDate } from "../../utils/arrayOfDate";
import WeekDaysNames from "./WeekDaysNames";
import TotalDays from "./TotalDays";
import NewDialog from "../Events/NewDialog";
import WeeklyCalendar from "./WeeklyCalendar";
import DailyCalendar from "./DailyCalendar";
//-----------

const CalendarBody = ({ currentDate, defaultDate, viewOption }) => {
  let month = currentDate.month();
  let year = currentDate.year();
  let totalDays = generateDate(month, year);

  const [selectedDate, setSelectedDate] = useState("");
  const [calendarEvent, setCalendarEvent] = useState(null);
  const [createEvent, setCreateEvent] = useState(null);
  const [addEvent, setAddEvent] = useState(false);
  const [showEvent, setShowEvent] = useState(false);
  const [eventsArray, setEventsArray] = useState([]);

  return (
    <>
      {(addEvent || showEvent) && (
        //events create Dialog
        <NewDialog
          setAddEvent={setAddEvent}
          addEvent={addEvent}
          selectedDate={selectedDate}
          setSelectedDate={setSelectedDate}
          eventsArray={eventsArray}
          setEventsArray={setEventsArray}
          setCreateEvent={setCreateEvent}
          calendarEvent={calendarEvent}
          setCalendarEvent={setCalendarEvent}
          showEvent={showEvent}
          setShowEvent={setShowEvent}
          createEvent={createEvent}
        />
      )}
      {viewOption === "Month" && (
        <div className="table">
          <div className="thead">
            <WeekDaysNames defaultDate={defaultDate} />
          </div>
          <div className="tbody">
            <TotalDays
              totalDays={totalDays}
              setCalendarEvent={setCalendarEvent}
              setAddEvent={setAddEvent}
              selectedDate={selectedDate}
              setSelectedDate={setSelectedDate}
              eventsArray={eventsArray}
              createEvent={createEvent}
              setCreateEvent={setCreateEvent}
              showEvent={showEvent}
              setShowEvent={setShowEvent}
            />
          </div>
        </div>
      )}
      {viewOption === "Week" && (
        <WeeklyCalendar currentDate={currentDate} defaultDate={defaultDate} />
      )}
      {viewOption === "Day" && <DailyCalendar />}
    </>
  );
};

export default CalendarBody;
