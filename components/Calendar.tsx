import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Clock } from 'lucide-react';

interface CalendarProps {
  selectedDate: Date | null;
  selectedTime: string | null;
  onDateSelect: (date: Date) => void;
  onTimeSelect: (time: string) => void;
}

const TIME_SLOTS = [
  '09:00 AM', '09:30 AM', '10:00 AM', '10:30 AM',
  '11:00 AM', '11:30 AM', '01:00 PM', '01:30 PM',
  '02:00 PM', '02:30 PM', '03:00 PM', '03:30 PM',
  '04:00 PM', '04:30 PM'
];

export const Calendar: React.FC<CalendarProps> = ({
  selectedDate,
  selectedTime,
  onDateSelect,
  onTimeSelect
}) => {
  const [currentMonth, setCurrentMonth] = useState(new Date());

  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDayOfWeek = firstDay.getDay();

    return { daysInMonth, startingDayOfWeek, year, month };
  };

  const { daysInMonth, startingDayOfWeek, year, month } = getDaysInMonth(currentMonth);

  const previousMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1));
  };

  const nextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1));
  };

  const isDateDisabled = (day: number) => {
    const date = new Date(year, month, day);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return date < today || date.getDay() === 0 || date.getDay() === 6;
  };

  const isDateSelected = (day: number) => {
    if (!selectedDate) return false;
    return (
      selectedDate.getDate() === day &&
      selectedDate.getMonth() === month &&
      selectedDate.getFullYear() === year
    );
  };

  const handleDateClick = (day: number) => {
    if (isDateDisabled(day)) return;
    const date = new Date(year, month, day);
    onDateSelect(date);
  };

  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  const days = [];
  for (let i = 0; i < startingDayOfWeek; i++) {
    days.push(<div key={`empty-${i}`} className="aspect-square" />);
  }

  for (let day = 1; day <= daysInMonth; day++) {
    const disabled = isDateDisabled(day);
    const selected = isDateSelected(day);

    days.push(
      <button
        key={day}
        onClick={() => handleDateClick(day)}
        disabled={disabled}
        className={`
          aspect-square rounded-lg text-sm font-medium transition-all
          ${disabled
            ? 'text-slate-300 cursor-not-allowed'
            : 'text-slate-700 hover:bg-blue-50 cursor-pointer'
          }
          ${selected
            ? 'bg-[#2E5BFF] text-white hover:bg-blue-600'
            : ''
          }
        `}
      >
        {day}
      </button>
    );
  }

  return (
    <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm">
      <div className="mb-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-slate-900">
            {monthNames[month]} {year}
          </h3>
          <div className="flex space-x-2">
            <button
              onClick={previousMonth}
              className="p-2 rounded-lg hover:bg-slate-100 transition-colors"
            >
              <ChevronLeft className="w-5 h-5 text-slate-600" />
            </button>
            <button
              onClick={nextMonth}
              className="p-2 rounded-lg hover:bg-slate-100 transition-colors"
            >
              <ChevronRight className="w-5 h-5 text-slate-600" />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-7 gap-2 mb-2">
          {dayNames.map(name => (
            <div
              key={name}
              className="text-center text-xs font-semibold text-slate-500 uppercase"
            >
              {name}
            </div>
          ))}
        </div>

        <div className="grid grid-cols-7 gap-2">
          {days}
        </div>
      </div>

      {selectedDate && (
        <div className="border-t border-slate-200 pt-6">
          <div className="flex items-center space-x-2 mb-4">
            <Clock className="w-5 h-5 text-[#2E5BFF]" />
            <h4 className="text-sm font-semibold text-slate-900">Select Time</h4>
          </div>
          <div className="grid grid-cols-2 gap-2 max-h-64 overflow-y-auto">
            {TIME_SLOTS.map(time => (
              <button
                key={time}
                onClick={() => onTimeSelect(time)}
                className={`
                  px-4 py-2 rounded-lg text-sm font-medium transition-all
                  ${selectedTime === time
                    ? 'bg-[#2E5BFF] text-white'
                    : 'bg-slate-50 text-slate-700 hover:bg-slate-100'
                  }
                `}
              >
                {time}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
