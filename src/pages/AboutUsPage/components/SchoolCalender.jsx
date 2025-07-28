import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './calendarCustom.css';

const SchoolCalendar = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const formatDate = (date) => date.toISOString().split('T')[0];     // YYYY-MM-DD
  const formatMonthDay = (date) => {
    const mm = String(date.getMonth() + 1).padStart(2, '0');
    const dd = String(date.getDate()).padStart(2, '0');
    return `${mm}-${dd}`; // MM-DD
  };

  // 🎉 Events can be yearly recurring (MM-DD) or date-specific (YYYY-MM-DD)
  const holidayEvents = {
    '08-15': 'Independence Day',             // Recurring every year
    '10-02': 'Gandhi Jayanti',
    '01-26': 'Republic Day',
  };

  // 🧠 Get event label based on selected date
  const getEventText = (date) => {
    const full = formatDate(date);
    const md = formatMonthDay(date);
    const day = date.getDay();

    if (holidayEvents[full]) return holidayEvents[full];
    if (holidayEvents[md]) return holidayEvents[md];
    if (day === 0) return 'Sunday Off';
    return 'No Events';
  };

  // 🔍 Check if a date is holiday
  const isHoliday = (date) => {
    const full = formatDate(date);
    const md = formatMonthDay(date);
    return holidayEvents[full] || holidayEvents[md] || date.getDay() === 0;
  };

  return (
    <div data-aos="fade-up" data-aos-duration="800" className="text-gray-800">
      <h2 className="inline-block text-[22px] sm:text-[38px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#c30015] to-[#502e94] mb-6">
        School Calendar
      </h2>

      <div className="flex flex-col lg:flex-row gap-8 items-start">
        {/* Calendar */}
        <div className="font-[poppins] bg-white shadow-lg rounded-md p-4 w-full max-w-[600px]">
          <Calendar
            onChange={setSelectedDate}
            value={selectedDate}
            tileClassName={({ date, view }) =>
              view === 'month' && isHoliday(date) ? 'highlight-holiday' : ''
            }
          />
        </div>

        {/* Event Details */}
        <div className="font-[poppins] p-4 w-full lg:w-[300px] bg-[#f9f9f9] border rounded-md shadow-sm">
          <p className="text-[16px] font-medium mb-2">
            Selected Date:
            <span className="block mt-1 text-[15px] text-[#c30015]">
              {selectedDate.toDateString()}
            </span>
          </p>
          <p className="text-[14px] mt-2 text-gray-700">
            Event: <span className="font-semibold">{getEventText(selectedDate)}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SchoolCalendar;
