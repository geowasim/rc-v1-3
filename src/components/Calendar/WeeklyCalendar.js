import dayjs from "dayjs";

const startTime = dayjs().startOf("day");
const endTime = dayjs().endOf("day");
const timeTable = [];

for (let i = startTime; i <= endTime; i = i.add(30, "minute")) {
  timeTable.push(i.format("h:mm A"));
}

const WeeklyCalendar = ({ currentDate, defaultDate }) => {
  return (
    <>
      <div className="table-week-container">
        <table className="week">
          <thead>
            <tr>
              <th className="week-header"></th>
              {[...Array(7).keys()].map((index) => (
                <th key={index} className="week-header">
                  <span className="weekday">
                    {currentDate
                      .startOf("week")
                      .add(index, "day")
                      .format("ddd")}
                  </span>
                  <span className="weekdates">
                    {" "}
                    {currentDate
                      .startOf("week")
                      .add(index, "day")
                      .format("DD/MM")}
                  </span>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {[...Array(24).keys()].map((item) => (
              <tr key={item}>
                <td className="week-time-column">{item}:00</td>
                {[...Array(7).keys()].map((index) => (
                  <td
                    key={`${index}-${item}`}
                    id={`${index}-${item}`}
                    className="event-slot"
                  ></td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="week-footer"></div>
    </>
  );
};

export default WeeklyCalendar;
