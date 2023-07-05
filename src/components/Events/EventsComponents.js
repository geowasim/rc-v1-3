import React from "react";
import { compareTwoDates } from "../../utils/arrayOfDate";

const EventsComponents = ({
  setCalendarEvent,
  setAddEvent,
  date,
  setSelectedDate,
  eventsArray,
  setShowEvent,
  showEvent,
}) => {
  return (
    <>
      {eventsArray.length > 0 &&
        eventsArray.map((evnt, idx) => {
          return (
            compareTwoDates(evnt.date, date) && (
              <p
                className="event_block"
                key={idx}
                style={{
                  color: evnt.color,
                  // background: evnt.background,
                }}
                onClick={() => {
                  setCalendarEvent(evnt);
                  setShowEvent(true);
                  setSelectedDate(date);
                }}
              >
                {evnt.title}
              </p>
            )
          );
        })}
    </>
  );
};

export default EventsComponents;
