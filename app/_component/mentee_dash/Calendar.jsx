"use client"; // Add this line to mark the component as a Client Component

import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

function Calendar() {
  const [date, setDate] = useState(new Date());
  const [days, setDays] = useState([]);

  const month = date.getMonth();
  const year = date.getFullYear();

  const renderCalendar = () => {
    const firstDay = new Date(year, month, 1).getDay();
    const lastDate = new Date(year, month + 1, 0).getDate();

    const datesArray = [];

    for (let i = 0; i < firstDay; i++) {
      datesArray.push(null);
    }

    for (let i = 1; i <= lastDate; i++) {
      datesArray.push(i);
    }

    setDays(datesArray);
  };

  useEffect(() => {
    renderCalendar();
  }, [date]);

  const handlePrev = () => {
    const newDate = new Date(date);
    newDate.setMonth(month - 1);
    setDate(newDate);
  };

  const handleNext = () => {
    const newDate = new Date(date);
    newDate.setMonth(month + 1);
    setDate(newDate);
  };

  return (
    <div>
      <div className="bg-white w-80 rounded-lg shadow-2xl p-6 mx-6">
        <header className="flex items-center justify-between mb-4">
          <p className="font-medium text-lg calendar-current-date">
            {date.toLocaleString('default', { month: 'long', year: 'numeric' })}
          </p>
          <div className="flex space-x-2">
            <span
              id="calendar-prev"
              className="flex items-center justify-center w-10 h-10 text-gray-500 rounded-full cursor-pointer hover:bg-gray-200"
              onClick={handlePrev}
            >
              <ChevronLeft size={24} />
            </span>
            <span
              id="calendar-next"
              className="flex items-center justify-center w-10 h-10 text-gray-500 rounded-full cursor-pointer hover:bg-gray-200"
              onClick={handleNext}
            >
              <ChevronRight size={24} />
            </span>
          </div>
        </header>

        <div className="mt-6">
          <ul className="grid grid-cols-7 text-center font-medium text-sm">
            <li>Sun</li>
            <li>Mon</li>
            <li>Tue</li>
            <li>Wed</li>
            <li>Thu</li>
            <li>Fri</li>
            <li>Sat</li>
          </ul>
          <ul className="grid grid-cols-7 gap-y-1 text-center mt-4 calendar-dates">
            {days.map((day, index) => (
              <li
                key={index}
                className={`py-1 rounded-full hover:bg-green-200 cursor-pointer ${day ? '' : 'invisible'}`}
              >
                {day}
              </li>
            ))}
          </ul>
        </div>
        <div className="md:py-4 py-3 md:px-8 px-4 bg-gray-50 rounded-b">
          <div className="px-2">
            <div className="border-b pb-2 border-gray-400 border-dashed">
              <p className="text-xs font-light leading-3 text-gray-500">9:00 AM</p>
              <a
                href="#" tabIndex="0" className="focus:outline-none text-sm font-medium leading-5 text-gray-800 mt-2">
                Zoom call with design team
              </a>
              <p className="text-xs pt-2 leading-4 text-gray-600">
                Discussion on UX sprint and Wireframe review
              </p>
            </div>
            <div className="border-b pb-2 border-gray-400 border-dashed mt-3">
              <p className="text-xs font-light leading-3 text-gray-500">1:00 PM</p>
              <a href="#" tabIndex="0" className="focus:outline-none text-sm font-medium leading-5 text-gray-800 mt-2">
                Zoom Call with the devlopment team
              </a>
              <p className="text-xs pt-2 leading-4 text-gray-600">
                Discussion about the new changes
              </p>
            </div>
            {/* More events here */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Calendar;
