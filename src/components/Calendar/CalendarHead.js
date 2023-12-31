// add local based on Poland

const CalendarHead = ({
  calendarOptions,
  viewOption,
  viewOptionChanger,
  currentDate,
  dateUpdater,
  defaultDate,
}) => {
  const changeDateHandler = (num) => {
    console.log(viewOption);
    if (num === "-") {
      const previous = currentDate.subtract(1, `${viewOption.toLowerCase()}`);

      dateUpdater(previous);
    } else if (num === "+") {
      const next = currentDate.add(1, `${viewOption.toLowerCase()}`);

      dateUpdater(next);
    } else if (num === "default") {
      const returnToDefault = defaultDate;
      dateUpdater(returnToDefault);
    }
  };

  function handleChange(e) {
    viewOptionChanger(e.target.value);
  }

  return (
    <>
      <nav className="level calendar-weekControl">
        <div className="level-left">
          <button
            type="button"
            className="button is-small"
            onClick={() => changeDateHandler("-")}
          >
            &#60;
          </button>
          <button
            type="button"
            className="button is-small"
            onClick={() => changeDateHandler("+")}
          >
            &#62;
          </button>
          <button
            type="button"
            disabled={
              `${currentDate.month() !== defaultDate.month()}` ? false : true
            }
            className="button is-small is-primary"
            onClick={() => changeDateHandler("default")}
          >
            <span>Dzisiaj</span>
          </button>

          {viewOption === "Month" && (
            <h1 className="currentMonth title">
              {currentDate.format("MMMM YYYY")}
            </h1>
          )}
          {viewOption === "Week" && (
            <h2>
              {currentDate.startOf("week").format("MMM D")} -{" "}
              {currentDate.endOf("week").format("MMM D, YYYY")}
            </h2>
          )}
        </div>
        <div className="level-right">
          <label className="select">
            <select
              title="select_calendar"
              name="select_calendar"
              onChange={(e) => handleChange(e)}
            >
              {calendarOptions.map((index) => (
                <option value={index} key={index}>
                  {index}
                </option>
              ))}
            </select>
          </label>
        </div>
      </nav>
    </>
  );
};

export default CalendarHead;
/**
 * <div className="calendar_date_change_control">
        <div className="previousMonth">
          <button type="button" onClick={() => changeDateHandler("-")}>
            &#60;
          </button>
        </div>
        <div className="currentMonth">{currentDate.format("MMMM YYYY")}</div>
        <div className="nextMonth" name="Next month">
          <button type="button" onClick={() => changeDateHandler("+")}>
            &#62;
          </button>
        </div>
        {currentDate.month() !== defaultDate.month() ? (
          <div className="returToCurrentMonth">
            <button type="button" onClick={() => changeDateHandler("default")}>
              &#8635;
            </button>
          </div>
        ) : null}
      </div>
 */
