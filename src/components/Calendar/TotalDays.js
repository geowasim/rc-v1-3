import React from "react";
import EventsComponents from "../Events/EventsComponents";

const TotalDays = ({
  totalDays,
  selectedDate,
  setCalendarEvent,
  setAddEvent,
  setSelectedDate,
  eventsArray,
  setCreateEvent,
  showEvent,
  setShowEvent,
}) => {
  return (
    <>
      {totalDays.map(({ isCurrentMonth, isToday, date, addE }, idx) => {
        return (
          <ul
            key={idx}
            className={` all_days ${
              isCurrentMonth ? "currentMonth" : "notCurrentMonth"
            } ${isToday ? "today" : ""} td  ${
              date.toString() === selectedDate.toString() ? "selectedDay" : ""
            }`}
          >
            <li
              className={`${
                date.toString() === selectedDate.toString()
                  ? "selectedDate"
                  : ""
              }`}
            >
              <span
                className="dayDate"
                onClick={() => {
                  setSelectedDate(date);
                  setCreateEvent(date);
                  setAddEvent(true);
                }}
              >
                {date.date()}
              </span>
            </li>
            <EventsComponents
              setCalendarEvent={setCalendarEvent}
              setAddEvent={setAddEvent}
              date={date}
              setSelectedDate={setSelectedDate}
              eventsArray={eventsArray}
              showEvent={showEvent}
              setShowEvent={setShowEvent}
            />
          </ul>
        );
      })}
    </>
  );
};

export default TotalDays;
