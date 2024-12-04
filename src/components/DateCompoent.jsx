import React from 'react';

const DateComponent = () => {
  // Function to get the current date
  function getCurrentDate() {
    const today = new Date();
    
    // Extract individual parts of the date
    const day = today.getDate() < 10 ? `0${today.getDate()}` : today.getDate();
    const month = today.toLocaleString('default', { month: 'short' });
    const year = today.getFullYear().toString().slice(-2); // Last two digits of year
    const weekday = today.toLocaleString('default', { weekday: 'short' });
    
    // Return formatted day and full date
    return {
      day,
      fullDate: `${month} ${year}, ${weekday}`,
    };
  }

  // Get the current date and day
  const { day, fullDate } = getCurrentDate();

  return (
    <div className="flex justify-end items-center space-x-2 text-[#ECDFCC]">
      {/* Day container */}
      <span className="p-2 bg-[#697565] text-[#ECDFCC] border border-black rounded-full text-sm md:text-base">
        {day}
      </span>

      {/* Full Date container */}
      <span className="text-sm md:text-base">
        {fullDate}
      </span>
    </div>
  );
};

export default DateComponent;
