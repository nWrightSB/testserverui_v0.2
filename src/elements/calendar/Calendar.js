import React from 'react';
import './Calendar.css';

const Calendar = props => {
  let currentDate = new Date();

  function getMonthName(monthPosition) {
    let monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    return monthNames[monthPosition]
  }

  let selectedMonth = currentDate.getMonth();
  let selectedMonthName = getMonthName(selectedMonth);

  return (
    <div className="calendar-container">
        <div className="month-container">
          {selectedMonthName}
        </div>
        <div className="days-display-container">
          calendar will display to allow data selection
        </div>
    </div>
  )
}

export default Calendar;