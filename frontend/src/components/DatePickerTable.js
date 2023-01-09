import React, { useState } from "react";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function TableDatePicker() {
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());

 return (
  <> 
<DatePicker
 isClearable
 filterDate={d => {
   return new Date() < d;
 }}
 placeholderText="Select Start Time"
 showTimeSelect
 dateFormat="MMMM d, yyyy h:mmaa"
 selected={startDate}
 selectsStart
 startDate={startDate}
 onChange={date => setStartDate(date)}
/>
<DatePicker
 isClearable
 filterDate={d => {
   return new Date() < d;
 }} 
 placeholderText="Select End Time"
 showTimeSelect
 dateFormat="MMMM d, yyyy h:mmaa"
  selected={endDate} 
 selectsEnd
 startDate={startDate}
 endDate={endDate}
 minDate={startDate} 
 onChange={date => setEndDate(date)}
/>
</>
 );
}
