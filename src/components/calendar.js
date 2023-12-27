import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "../App.css";

function CalendarApp() {
  const [date, setDate] = useState([]);

  const disabledDates = [new Date(2024, 0, 1), new Date(2024, 0, 2)];

  return (
    <div className="calendarApp">
      <h1 className="text-center">React Calendar with Range</h1>
      <div className="calendar-container">
        <Calendar
          onChange={setDate}
          value={date}
          selectRange={true}
          minDate={new Date()}
          showDoubleView={true}
          goToRangeStartOnSelect={false}
          tileDisabled={({ date, view }) =>
            view === "month" && // Block day tiles only
            disabledDates.some(
              (disabledDate) =>
                date.getFullYear() === disabledDate.getFullYear() &&
                date.getMonth() === disabledDate.getMonth() &&
                date.getDate() === disabledDate.getDate()
            )
          }
        />
      </div>
      {date.length > 0 ? (
        <p className="text-center">
          <span className="bold">Desde:</span> {date[0].toDateString()}
          &nbsp;|&nbsp;
          <span className="bold">Hasta:</span> {date[1].toDateString()}
        </p>
      ) : (
        <p className="text-center">
          <span className="bold">Default selected date:</span>
        </p>
      )}
    </div>
  );
}

export default CalendarApp;
