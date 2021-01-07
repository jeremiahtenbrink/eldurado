import React from "react";
import moment from 'moment';

const Calendar = ({date}) => {
  const momentDate = moment(date);
  console.log(momentDate);
  return ( <div className="calendar">
    <h2 className='month'>{momentDate.format("MMM")}</h2>
    <h1 className='date'>{momentDate.format("Do")}</h1>
    <h2 className='day'>{momentDate.format('dddd')}</h2>
    </div> );
};

export default Calendar;
