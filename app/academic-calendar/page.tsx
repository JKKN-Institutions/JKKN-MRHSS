'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';

interface CalendarDay {
  date: Date;
  isCurrentMonth: boolean;
  isToday: boolean;
  isWeekend: boolean;
  events: CalendarEvent[];
  isHoliday: boolean;
}

interface CalendarEvent {
  id: string;
  title: string;
  type: 'holiday' | 'event' | 'exam' | 'break' | 'sports' | 'cultural';
  description?: string;
  time?: string;
  emoji?: string;
  priority: 'high' | 'medium' | 'low';
}

// Enhanced academic events data
const academicEvents: Record<string, CalendarEvent[]> = {
  // January 2024
  '2024-01-01': [{ 
    id: '1', 
    title: 'New Year\'s Day', 
    type: 'holiday', 
    description: 'Public Holiday - School Closed',
    emoji: '🎊',
    priority: 'high'
  }],
  '2024-01-14': [{ 
    id: '2', 
    title: 'Pongal Festival', 
    type: 'holiday', 
    description: 'Tamil Harvest Festival - 3 Days Holiday',
    emoji: '🌾',
    priority: 'high'
  }],
  '2024-01-26': [{ 
    id: '3', 
    title: 'Republic Day', 
    type: 'holiday', 
    description: 'National Holiday - Flag Hoisting Ceremony',
    emoji: '🇮🇳',
    priority: 'high'
  }],
  
  // February 2024
  '2024-02-14': [{ 
    id: '4', 
    title: 'Valentine\'s Day Celebration', 
    type: 'cultural', 
    description: 'Cultural program and friendship activities',
    time: '10:00 AM',
    emoji: '💕',
    priority: 'medium'
  }],
  '2024-02-20': [{ 
    id: '5', 
    title: 'Annual Sports Day', 
    type: 'sports', 
    description: 'Inter-house sports competition',
    time: '8:00 AM',
    emoji: '🏆',
    priority: 'high'
  }],
  
  // March 2024
  '2024-03-08': [{ 
    id: '6', 
    title: 'International Women\'s Day', 
    type: 'event', 
    description: 'Special assembly celebrating women achievers',
    time: '9:30 AM',
    emoji: '👩‍🎓',
    priority: 'medium'
  }],
  '2024-03-15': [{ 
    id: '7', 
    title: 'Final Exams Begin', 
    type: 'exam', 
    description: 'Annual final examinations start for all classes',
    time: '9:00 AM',
    emoji: '📚',
    priority: 'high'
  }],
  '2024-03-25': [{ 
    id: '8', 
    title: 'Final Exams End', 
    type: 'exam', 
    description: 'Annual final examinations conclude',
    emoji: '🎯',
    priority: 'high'
  }],
  
  // April 2024
  '2024-04-01': [{ 
    id: '9', 
    title: 'Summer Break Begins', 
    type: 'break', 
    description: 'Summer vacation starts - School closed',
    emoji: '☀️',
    priority: 'high'
  }],
  '2024-04-13': [{ 
    id: '10', 
    title: 'Tamil New Year', 
    type: 'holiday', 
    description: 'Regional Holiday - Puthuvarusham',
    emoji: '🌺',
    priority: 'high'
  }],
  
  // May 2024
  '2024-05-01': [{ 
    id: '11', 
    title: 'Labour Day', 
    type: 'holiday', 
    description: 'International Workers\' Day - Public Holiday',
    emoji: '⚒️',
    priority: 'high'
  }],
  
  // June 2024
  '2024-06-01': [{ 
    id: '12', 
    title: 'New Academic Year', 
    type: 'event', 
    description: 'School reopens for session 2024-25',
    time: '8:00 AM',
    emoji: '🎓',
    priority: 'high'
  }],
  '2024-06-15': [{ 
    id: '13', 
    title: 'Admission Process', 
    type: 'event', 
    description: 'New student admissions and orientation',
    time: '10:00 AM',
    emoji: '📝',
    priority: 'medium'
  }],
  
  // August 2024
  '2024-08-15': [{ 
    id: '14', 
    title: 'Independence Day', 
    type: 'holiday', 
    description: 'National Holiday - Flag Hoisting & Cultural Program',
    time: '8:00 AM',
    emoji: '🏁',
    priority: 'high'
  }],
  
  // September 2024
  '2024-09-05': [{ 
    id: '15', 
    title: 'Teachers\' Day', 
    type: 'event', 
    description: 'Special celebration honoring our teachers',
    time: '9:00 AM',
    emoji: '👨‍🏫',
    priority: 'high'
  }],
  '2024-09-15': [{ 
    id: '16', 
    title: 'Mid-Term Exams', 
    type: 'exam', 
    description: 'First semester examinations',
    time: '9:00 AM',
    emoji: '📖',
    priority: 'high'
  }],
  
  // October 2024
  '2024-10-02': [{ 
    id: '17', 
    title: 'Gandhi Jayanti', 
    type: 'holiday', 
    description: 'National Holiday - Birth anniversary of Mahatma Gandhi',
    emoji: '🕊️',
    priority: 'high'
  }],
  '2024-10-15': [{ 
    id: '18', 
    title: 'Dussehra', 
    type: 'holiday', 
    description: 'Festival Holiday - Victory of good over evil',
    emoji: '🏹',
    priority: 'high'
  }],
  
  // November 2024
  '2024-11-01': [{ 
    id: '19', 
    title: 'Diwali', 
    type: 'holiday', 
    description: 'Festival of Lights - 2 days holiday',
    emoji: '🪔',
    priority: 'high'
  }],
  '2024-11-14': [{ 
    id: '20', 
    title: 'Children\'s Day', 
    type: 'event', 
    description: 'Special programs and activities for students',
    time: '10:00 AM',
    emoji: '🧒',
    priority: 'high'
  }],
  
  // December 2024
  '2024-12-15': [{ 
    id: '21', 
    title: 'Second Term Exams', 
    type: 'exam', 
    description: 'Second semester examinations',
    time: '9:00 AM',
    emoji: '📊',
    priority: 'high'
  }],
  '2024-12-25': [{ 
    id: '22', 
    title: 'Christmas', 
    type: 'holiday', 
    description: 'Christmas Day - Public Holiday',
    emoji: '🎄',
    priority: 'high'
  }],
  '2024-12-31': [{ 
    id: '23', 
    title: 'Winter Break Begins', 
    type: 'break', 
    description: 'Winter vacation starts',
    emoji: '❄️',
    priority: 'high'
  }],
};

// Event Form Component
interface EventFormProps {
  selectedDate: Date | null;
  editingEvent: CalendarEvent | null;
  onSave: (eventData: CalendarEvent) => void;
  onCancel: () => void;
}

const EventForm: React.FC<EventFormProps> = ({ selectedDate, editingEvent, onSave, onCancel }) => {
  const [title, setTitle] = useState(editingEvent?.title || '');
  const [type, setType] = useState<CalendarEvent['type']>(editingEvent?.type || 'event');
  const [description, setDescription] = useState(editingEvent?.description || '');
  const [time, setTime] = useState(editingEvent?.time || '');
  const [emoji, setEmoji] = useState(editingEvent?.emoji || '🎉');
  const [priority, setPriority] = useState<CalendarEvent['priority']>(editingEvent?.priority || 'medium');

  const eventEmojis = {
    holiday: '🏖️',
    event: '🎉',
    exam: '📝',
    break: '🌴',
    sports: '🏆',
    cultural: '🎭'
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) return;

    const eventData: CalendarEvent = {
      id: editingEvent?.id || Date.now().toString(),
      title: title.trim(),
      type,
      description: description.trim() || undefined,
      time: time.trim() || undefined,
      emoji: emoji || eventEmojis[type],
      priority
    };

    onSave(eventData);
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200">
          {editingEvent ? '✏️ Edit Event' : '➕ Add New Event'}
        </h3>
        <button
          onClick={onCancel}
          className="text-gray-400 dark:text-gray-600 hover:text-gray-600 dark:hover:text-gray-400 text-2xl"
        >
          ×
        </button>
      </div>

      {selectedDate && (
        <div className="mb-4 p-3 bg-blue-50 dark:bg-blue-900/30 rounded-lg">
          <p className="text-blue-800 dark:text-blue-300 font-medium">
            📅 {selectedDate.toLocaleDateString('en-US', { 
              weekday: 'long',
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })}
          </p>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Event Title
          </label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 dark:bg-gray-700 dark:text-white"
            placeholder="Enter event title"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Event Type
          </label>
          <select
            value={type}
            onChange={(e) => {
              const newType = e.target.value as CalendarEvent['type'];
              setType(newType);
              setEmoji(eventEmojis[newType]);
            }}
            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 dark:bg-gray-700 dark:text-white"
          >
            <option value="event">Event</option>
            <option value="holiday">Holiday</option>
            <option value="exam">Exam</option>
            <option value="break">Break</option>
            <option value="sports">Sports</option>
            <option value="cultural">Cultural</option>
          </select>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Time (Optional)
            </label>
            <input
              type="time"
              value={time}
              onChange={(e) => setTime(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 dark:bg-gray-700 dark:text-white"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Priority
            </label>
            <select
              value={priority}
              onChange={(e) => setPriority(e.target.value as CalendarEvent['priority'])}
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 dark:bg-gray-700 dark:text-white"
            >
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
            </select>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Emoji
          </label>
          <input
            type="text"
            value={emoji}
            onChange={(e) => setEmoji(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 dark:bg-gray-700 dark:text-white"
            placeholder="🎉"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Description (Optional)
          </label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            rows={3}
            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 dark:bg-gray-700 dark:text-white"
            placeholder="Enter event description"
          />
        </div>

        <div className="flex justify-end gap-3 pt-4">
          <button
            type="button"
            onClick={onCancel}
            className="px-4 py-2 text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 transition-colors"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
          >
            {editingEvent ? 'Update Event' : 'Create Event'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default function AcademicCalendarPage() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [viewDate, setViewDate] = useState(new Date());
  const [viewMode, setViewMode] = useState<'monthly' | 'yearly'>('monthly');
  const [selectedEvent, setSelectedEvent] = useState<CalendarEvent | null>(null);
  const [showTooltip, setShowTooltip] = useState<{ 
    show: boolean; 
    x: number; 
    y: number; 
    event: CalendarEvent | null 
  }>({ show: false, x: 0, y: 0, event: null });
  const [isClient, setIsClient] = useState(false);
  const [showEventModal, setShowEventModal] = useState(false);
  const [editingEvent, setEditingEvent] = useState<CalendarEvent | null>(null);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [events, setEvents] = useState(academicEvents);
  const [showAdminPanel, setShowAdminPanel] = useState(false);

  // Update current time every second with more precision
  useEffect(() => {
    const updateTime = () => {
      setCurrentDate(new Date());
    };

    // Update immediately
    updateTime();
    
    // Set up interval to update every second
    const timer = setInterval(updateTime, 1000);

    return () => clearInterval(timer);
  }, []);

  // Handle hydration and ensure current month is shown
  useEffect(() => {
    setIsClient(true);
    // Always start with current month/year
    setViewDate(new Date());
  }, []);

  // Generate calendar days for a specific month
  const generateCalendarDays = (year: number, month: number): CalendarDay[] => {
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const firstDayOfWeek = firstDay.getDay();
    const daysInMonth = lastDay.getDate();
    
    const days: CalendarDay[] = [];

    // Add days from previous month
    const prevMonth = new Date(year, month - 1, 0);
    for (let i = firstDayOfWeek - 1; i >= 0; i--) {
      const date = new Date(year, month - 1, prevMonth.getDate() - i);
      days.push(createCalendarDay(date, false));
    }

    // Add days of current month
    for (let day = 1; day <= daysInMonth; day++) {
      const date = new Date(year, month, day);
      days.push(createCalendarDay(date, true));
    }

    // Add days from next month to complete the grid
    const remainingDays = 42 - days.length;
    for (let day = 1; day <= remainingDays; day++) {
      const date = new Date(year, month + 1, day);
      days.push(createCalendarDay(date, false));
    }

    return days;
  };

  const createCalendarDay = (date: Date, isCurrentMonth: boolean): CalendarDay => {
    const dateKey = date.toISOString().split('T')[0];
    const dayEvents = events[dateKey] || [];
    const isToday = isClient && date.toDateString() === currentDate.toDateString();
    const isWeekend = date.getDay() === 0 || date.getDay() === 6;
    const isHoliday = dayEvents.some(event => event.type === 'holiday');

    return {
      date,
      isCurrentMonth,
      isToday,
      isWeekend,
      events: dayEvents,
      isHoliday
    };
  };

  // Get upcoming events (next 7 days)
  const getUpcomingEvents = () => {
    const upcoming: Array<{ date: Date; event: CalendarEvent }> = [];
    const today = new Date();
    
    for (let i = 0; i <= 7; i++) {
      const checkDate = new Date(today);
      checkDate.setDate(today.getDate() + i);
      const dateKey = checkDate.toISOString().split('T')[0];
      
      if (events[dateKey]) {
        events[dateKey].forEach(event => {
          upcoming.push({ date: checkDate, event });
        });
      }
    }
    
    return upcoming.sort((a, b) => a.date.getTime() - b.date.getTime());
  };

  // Event management functions
  const addEvent = (dateKey: string, newEvent: CalendarEvent) => {
    setEvents(prev => ({
      ...prev,
      [dateKey]: [...(prev[dateKey] || []), newEvent]
    }));
  };

  const editEvent = (dateKey: string, eventId: string, updatedEvent: CalendarEvent) => {
    setEvents(prev => ({
      ...prev,
      [dateKey]: prev[dateKey]?.map(event => 
        event.id === eventId ? updatedEvent : event
      ) || []
    }));
  };

  const deleteEvent = (dateKey: string, eventId: string) => {
    setEvents(prev => ({
      ...prev,
      [dateKey]: prev[dateKey]?.filter(event => event.id !== eventId) || []
    }));
  };

  const openEventModal = (date?: Date, event?: CalendarEvent) => {
    setSelectedDate(date || null);
    setEditingEvent(event || null);
    setShowEventModal(true);
  };

  const closeEventModal = () => {
    setShowEventModal(false);
    setEditingEvent(null);
    setSelectedDate(null);
  };

  // Event type styling
  const getEventTypeStyle = (type: string) => {
    const baseClasses = 'px-2 py-1 rounded-md text-xs font-medium border';
    switch (type) {
      case 'holiday':
        return `${baseClasses} bg-red-100 text-red-800 border-red-200`;
      case 'event':
        return `${baseClasses} bg-blue-100 text-blue-800 border-blue-200`;
      case 'exam':
        return `${baseClasses} bg-yellow-100 text-yellow-800 border-yellow-200`;
      case 'break':
        return `${baseClasses} bg-purple-100 text-purple-800 border-purple-200`;
      case 'sports':
        return `${baseClasses} bg-green-100 text-green-800 border-green-200`;
      case 'cultural':
        return `${baseClasses} bg-pink-100 text-pink-800 border-pink-200`;
      default:
        return `${baseClasses} bg-gray-100 text-gray-800 border-gray-200`;
    }
  };

  const getDayStyle = (day: CalendarDay) => {
    const baseStyle = 'h-24 lg:h-32 border border-gray-200 p-1 lg:p-2 cursor-pointer transition-all duration-200 hover:shadow-lg relative overflow-hidden rounded-lg';
    
    if (!day.isCurrentMonth) {
      return `${baseStyle} bg-gray-50 text-gray-400`;
    } else if (day.isToday) {
      return `${baseStyle} bg-gradient-to-br from-blue-100 to-blue-200 border-blue-300 ring-2 ring-blue-400 shadow-md`;
    } else if (day.isHoliday) {
      return `${baseStyle} bg-gradient-to-br from-red-50 to-red-100 border-red-300`;
    } else if (day.isWeekend) {
      return `${baseStyle} bg-gray-50`;
    } else {
      return `${baseStyle} bg-white hover:bg-gray-50`;
    }
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('en-US', {
      hour12: true,
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    });
  };

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const weekDaysShort = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  const calendarDays = generateCalendarDays(viewDate.getFullYear(), viewDate.getMonth());
  const upcomingEvents = getUpcomingEvents();

  return (
    <div>
      <main className="min-h-screen bg-gradient-to-br from-[#FDF9F3] to-[#E8F5E9] pt-16">
      <Header />
      <br /><br /><br /><br />
      
        <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
          {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8"
        >
            <h1 className="text-3xl md:text-4xl font-bold text-green-900 mb-4">
              📅 Academic Calendar 2024-25
            </h1>
            <p className="text-lg text-gray-600">
              Stay updated with important dates and events throughout the academic year
            </p>
        </motion.div>

          {/* Live Digital Clock & Controls */}
                  <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-2xl shadow-xl p-4 md:p-6 mb-8"
          >
            <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
              {/* Analog Clock */}
              <div className="text-center lg:text-left">
                <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-3">
                🕐 Current Time
                </h3>
                <div className="flex flex-col items-center lg:items-start">
              {/* Analog Clock */}
                  <div className="relative w-40 h-40 md:w-48 md:h-48">
                <motion.div 
                      className="relative w-full h-full"
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                >
                  <svg 
                    width="100%" 
                    height="100%" 
                    viewBox="0 0 200 200" 
                    className="drop-shadow-lg"
                  >
                    {/* Outer Circle */}
                    <circle
                      cx="100"
                      cy="100"
                      r="98"
                      fill="white"
                      stroke="#374151"
                      strokeWidth="4"
                          className="filter drop-shadow-md dark:fill-gray-800"
                    />
                    
                    {/* Inner Circle */}
                    <circle
                      cx="100"
                      cy="100"
                      r="92"
                      fill="white"
                      stroke="#E5E7EB"
                      strokeWidth="1"
                          className="dark:fill-gray-800 dark:stroke-gray-600"
                    />

                    {/* Hour Markers */}
                        <g suppressHydrationWarning>
                    {Array.from({ length: 12 }, (_, i) => {
                      const angle = (i * 30) - 90;
                      const isMainHour = i % 3 === 0;
                      const innerRadius = isMainHour ? 75 : 82;
                      const outerRadius = 90;
                      
                            // Round to avoid floating point precision issues
                            const x1 = Math.round((100 + innerRadius * Math.cos(angle * Math.PI / 180)) * 1000) / 1000;
                            const y1 = Math.round((100 + innerRadius * Math.sin(angle * Math.PI / 180)) * 1000) / 1000;
                            const x2 = Math.round((100 + outerRadius * Math.cos(angle * Math.PI / 180)) * 1000) / 1000;
                            const y2 = Math.round((100 + outerRadius * Math.sin(angle * Math.PI / 180)) * 1000) / 1000;
                      
                      return (
                        <line
                          key={i}
                          x1={x1}
                          y1={y1}
                          x2={x2}
                          y2={y2}
                          stroke="#374151"
                                strokeWidth={isMainHour ? "3" : "1"}
                                className="opacity-70 dark:stroke-gray-300"
                        />
                      );
                    })}
                        </g>

                    {/* Minute Markers */}
                        <g suppressHydrationWarning>
                    {Array.from({ length: 60 }, (_, i) => {
                      if (i % 5 !== 0) { // Skip hour positions
                        const angle = (i * 6) - 90;
                        const innerRadius = 87;
                        const outerRadius = 90;
                        
                              // Round to avoid floating point precision issues
                              const x1 = Math.round((100 + innerRadius * Math.cos(angle * Math.PI / 180)) * 1000) / 1000;
                              const y1 = Math.round((100 + innerRadius * Math.sin(angle * Math.PI / 180)) * 1000) / 1000;
                              const x2 = Math.round((100 + outerRadius * Math.cos(angle * Math.PI / 180)) * 1000) / 1000;
                              const y2 = Math.round((100 + outerRadius * Math.sin(angle * Math.PI / 180)) * 1000) / 1000;
                        
                        return (
                          <line
                            key={`min-${i}`}
                            x1={x1}
                            y1={y1}
                            x2={x2}
                            y2={y2}
                            stroke="#9CA3AF"
                            strokeWidth="0.5"
                                  className="opacity-50 dark:stroke-gray-500"
                          />
                        );
                      }
                      return null;
                    })}
                        </g>

                    {/* Hour Numbers */}
                        <g suppressHydrationWarning>
                    {Array.from({ length: 12 }, (_, i) => {
                      const hour = i === 0 ? 12 : i;
                      const angle = (i * 30) - 90;
                      const radius = 65;
                      
                            // Round to avoid floating point precision issues
                            const x = Math.round((100 + radius * Math.cos(angle * Math.PI / 180)) * 1000) / 1000;
                            const y = Math.round((100 + radius * Math.sin(angle * Math.PI / 180)) * 1000) / 1000;
                      
                      return (
                        <text
                          key={hour}
                          x={x}
                          y={y}
                          textAnchor="middle"
                          dominantBaseline="central"
                                className="fill-gray-800 dark:fill-gray-200 text-lg font-bold"
                                style={{ fontSize: '16px' }}
                        >
                          {hour}
                        </text>
                      );
                    })}
                        </g>

                                                {/* Professional Clock Hands - Client Side Only */}
                        {isClient ? (() => {
                          // Get current time values
                          const hours = currentDate.getHours() % 12;
                          const minutes = currentDate.getMinutes();
                          const seconds = currentDate.getSeconds();
                          
                          // Professional clock calculations (rounded to avoid floating point precision issues)
                          const hourAngle = Math.round(((hours * 30) + (minutes * 0.5)) * 100) / 100;
                          const minuteAngle = Math.round(((minutes * 6) + (seconds * 0.1)) * 100) / 100;
                          const secondAngle = seconds * 6;
                          
                          return (
                            <g suppressHydrationWarning>
                        {/* Hour Hand */}
                              <g transform={`rotate(${hourAngle} 100 100)`}>
                                <line
                          x1="100"
                          y1="100"
                          x2="100"
                                  y2="55"
                                  stroke="#2D3748"
                          strokeWidth="6"
                          strokeLinecap="round"
                                  className="dark:stroke-gray-200"
                                />
                              </g>

                        {/* Minute Hand */}
                              <g transform={`rotate(${minuteAngle} 100 100)`}>
                                <line
                          x1="100"
                          y1="100"
                          x2="100"
                                  y2="35"
                                  stroke="#2D3748"
                          strokeWidth="4"
                          strokeLinecap="round"
                                  className="dark:stroke-gray-200"
                                />
                              </g>

                        {/* Second Hand */}
                              <g transform={`rotate(${secondAngle} 100 100)`}>
                                <line
                          x1="100"
                          y1="100"
                          x2="100"
                                  y2="25"
                                  stroke="#DC2626"
                          strokeWidth="2"
                          strokeLinecap="round"
                                />
                                {/* Second hand tail */}
                                <line
                                  x1="100"
                                  y1="100"
                                  x2="100"
                                  y2="115"
                                  stroke="#DC2626"
                                  strokeWidth="2"
                                  strokeLinecap="round"
                                />
                              </g>
                            </g>
                          );
                        })() : (
                          // Static hands for SSR (pointing to 12:00)
                          <g suppressHydrationWarning>
                            <g transform="rotate(0 100 100)">
                              <line
                                x1="100"
                                y1="100"
                                x2="100"
                                y2="55"
                                stroke="#2D3748"
                                strokeWidth="6"
                                strokeLinecap="round"
                                className="dark:stroke-gray-200"
                              />
                            </g>
                            <g transform="rotate(0 100 100)">
                              <line
                                x1="100"
                                y1="100"
                                x2="100"
                                y2="35"
                                stroke="#2D3748"
                                strokeWidth="4"
                                strokeLinecap="round"
                                className="dark:stroke-gray-200"
                              />
                            </g>
                            <g transform="rotate(0 100 100)">
                              <line
                                x1="100"
                                y1="100"
                                x2="100"
                                y2="25"
                                stroke="#DC2626"
                                strokeWidth="2"
                                strokeLinecap="round"
                              />
                              <line
                                x1="100"
                                y1="100"
                                x2="100"
                                y2="115"
                                stroke="#DC2626"
                                strokeWidth="2"
                                strokeLinecap="round"
                              />
                            </g>
                          </g>
                    )}

                    {/* Center Logo Background */}
                    <circle
                      cx="100"
                      cy="100"
                      r="22"
                      fill="white"
                      stroke="#10B981"
                      strokeWidth="2"
                          className="drop-shadow-md dark:fill-gray-700 dark:stroke-green-400"
                    />
                    
                        {/* NV School Logo */}
                    <image
                      x="78"
                      y="78"
                      width="44"
                      height="44"
                          href="/images/nvlogo.png"
                      className="opacity-100"
                      onError={(e) => {
                            // Fallback to JKKN logo if NV logo fails
                            e.currentTarget.href.baseVal = '/images/jkkn-logo.png';
                          }}
                        />

                    {/* Center Hub/Dot */}
                    <circle
                      cx="100"
                      cy="100"
                      r="4"
                      fill="#374151"
                          className="drop-shadow-sm dark:fill-gray-200"
                    />
                  </svg>
                </motion.div>
              </div>
            </div>
            </div>

              {/* View Mode & Navigation */}
              <div className="flex flex-col sm:flex-row items-center gap-4">
                
                

                

            {/* View Mode Toggle */}
                <div className="flex bg-gray-100 dark:bg-gray-700 rounded-lg p-1">
              <button
                onClick={() => setViewMode('monthly')}
                className={`px-4 py-2 rounded-md transition-all duration-200 font-medium ${
                  viewMode === 'monthly'
                        ? 'bg-green-600 text-white shadow-md'
                        : 'text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-gray-100 hover:bg-gray-200 dark:hover:bg-gray-600'
                }`}
              >
                    📅 Monthly
              </button>
              <button
                onClick={() => setViewMode('yearly')}
                className={`px-4 py-2 rounded-md transition-all duration-200 font-medium ${
                  viewMode === 'yearly'
                        ? 'bg-green-600 text-white shadow-md'
                        : 'text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-gray-100 hover:bg-gray-200 dark:hover:bg-gray-600'
                }`}
              >
                    📊 Yearly
              </button>
            </div>

            {/* Navigation Controls */}
            {viewMode === 'monthly' && (
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setViewDate(new Date(viewDate.getFullYear(), viewDate.getMonth() - 1))}
                  className="p-3 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors"
                  title="Previous Month"
                >
                  ⬅️
                </button>
                <div className="flex items-center gap-2">
                  <h2 className="text-xl font-semibold text-gray-800 min-w-48 text-center">
                    {monthNames[viewDate.getMonth()]} {viewDate.getFullYear()}
                  </h2>
                  <button
                    onClick={() => setViewDate(new Date())}
                    className="px-3 py-1 text-sm bg-blue-100 text-blue-800 rounded-lg hover:bg-blue-200 transition-colors flex items-center gap-1"
                    title="Go to Current Month"
                  >
                    📍 Today
                  </button>
                </div>
                <button
                  onClick={() => setViewDate(new Date(viewDate.getFullYear(), viewDate.getMonth() + 1))}
                  className="p-3 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors"
                  title="Next Month"
                >
                  ➡️
                </button>
              </div>
            )}

            {viewMode === 'yearly' && (
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setViewDate(new Date(viewDate.getFullYear() - 1, viewDate.getMonth()))}
                  className="p-3 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors"
                  title="Previous Year"
                >
                  ⬅️
                </button>
                <div className="flex items-center gap-2">
                  <h2 className="text-xl font-semibold text-gray-800 min-w-32 text-center">
                    {viewDate.getFullYear()}
                  </h2>
                  <button
                    onClick={() => setViewDate(new Date())}
                    className="px-3 py-1 text-sm bg-blue-100 text-blue-800 rounded-lg hover:bg-blue-200 transition-colors flex items-center gap-1"
                    title="Go to Current Year"
                  >
                    📍 Today
                  </button>
                </div>
                <button
                  onClick={() => setViewDate(new Date(viewDate.getFullYear() + 1, viewDate.getMonth()))}
                  className="p-3 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors"
                  title="Next Year"
                >
                  ➡️
                </button>
              </div>
            )}
            </div>
          </div>
        </motion.div>

        {/* Legend */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-white rounded-2xl shadow-xl p-4 md:p-6 mb-8"
          >
            <h3 className="text-lg font-semibold text-gray-700 mb-4">🏷️ Event Types</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
              {[
                { type: 'holiday', icon: '🏖️', label: 'Holidays' },
                { type: 'event', icon: '🎉', label: 'Events' },
                { type: 'exam', icon: '📝', label: 'Exams' },
                { type: 'break', icon: '🌴', label: 'Breaks' },
                { type: 'sports', icon: '🏆', label: 'Sports' },
                { type: 'cultural', icon: '🎭', label: 'Cultural' }
              ].map(({ type, icon, label }) => (
                <div key={type} className={`flex items-center gap-2 p-3 rounded-lg ${getEventTypeStyle(type)}`}>
                  <span>{icon}</span>
                  <span className="text-sm font-medium">{label}</span>
                      </div>
                    ))}
            </div>
          </motion.div>

          {/* Admin Panel */}
          <AnimatePresence>
            {showAdminPanel && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="bg-white rounded-2xl shadow-xl p-4 md:p-6 mb-8"
              >
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-xl font-bold text-gray-800 flex items-center gap-2">
                    ⚙️ Event Management Panel
                  </h3>
                  <button
                    onClick={() => openEventModal(new Date())}
                    className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors flex items-center gap-2"
                  >
                    ➕ Add New Event
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {Object.entries(events).slice(0, 12).map(([dateKey, dayEvents]) => (
                    <div key={dateKey} className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                      <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">
                        📅 {new Date(dateKey).toLocaleDateString('en-US', { 
                          month: 'short', 
                          day: 'numeric',
                          year: 'numeric'
                        })}
                      </h4>
                      <div className="space-y-2">
                        {dayEvents.map((event) => (
                          <div key={event.id} className="flex items-center justify-between bg-gray-50 dark:bg-gray-700 p-2 rounded">
                            <div className="flex items-center gap-2">
                              <span>{event.emoji}</span>
                              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                                {event.title}
                              </span>
                              <span className={`text-xs px-2 py-1 rounded ${getEventTypeStyle(event.type)}`}>
                                {event.type}
                              </span>
                            </div>
                            <div className="flex gap-1">
                              <button
                                onClick={() => openEventModal(new Date(dateKey), event)}
                                className="text-blue-500 hover:text-blue-700 text-sm"
                                title="Edit Event"
                              >
                                ✏️
                              </button>
                              <button
                                onClick={() => deleteEvent(dateKey, event.id)}
                                className="text-red-500 hover:text-red-700 text-sm"
                                title="Delete Event"
                              >
                                🗑️
                              </button>
                            </div>
                          </div>
                        ))}
                        {dayEvents.length === 0 && (
                          <p className="text-gray-500 text-sm">No events on this date</p>
                        )}
                      </div>
                      <button
                        onClick={() => openEventModal(new Date(dateKey))}
                        className="mt-2 text-green-600 hover:text-green-800 text-sm flex items-center gap-1"
                      >
                        ➕ Add Event
                      </button>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <div className="grid grid-cols-1 xl:grid-cols-4 gap-8">
        {/* Calendar Views */}
            <div className="xl:col-span-3">
        <AnimatePresence mode="wait">
          {viewMode === 'monthly' ? (
            <motion.div
              key="monthly"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.5 }}
                    className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden transition-colors duration-300"
            >
              {/* Calendar Header */}
                    <div className="grid grid-cols-7 bg-gradient-to-r from-green-600 to-green-700 dark:from-green-700 dark:to-green-800 text-white">
                {weekDaysShort.map((day, index) => (
                        <div key={day} className="p-3 md:p-4 text-center font-semibold border-r border-green-500 dark:border-green-600 last:border-r-0">
                    <div className="hidden md:block">{weekDays[index]}</div>
                    <div className="md:hidden">{day}</div>
                  </div>
                ))}
              </div>

              {/* Calendar Grid */}
                    <div className="grid grid-cols-7 gap-1 p-1 bg-gray-100 dark:bg-gray-900">
                {calendarDays.map((day, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.01 }}
                    className={getDayStyle(day)}
                    onMouseEnter={(e) => {
                      if (day.events.length > 0) {
                        const rect = e.currentTarget.getBoundingClientRect();
                        setShowTooltip({
                          show: true,
                          x: rect.left + rect.width / 2,
                          y: rect.top - 10,
                          event: day.events[0]
                        });
                      }
                    }}
                    onMouseLeave={() => setShowTooltip({ show: false, x: 0, y: 0, event: null })}
                                              onClick={() => {
                            if (showAdminPanel) {
                              openEventModal(day.date);
                            } else if (day.events.length > 0) {
                              setSelectedEvent(day.events[0]);
                            }
                          }}
                  >
                                                    <div className={`font-bold mb-1 flex items-center justify-between text-sm ${
                            day.isToday 
                              ? 'text-blue-700 dark:text-blue-300' 
                              : day.isCurrentMonth 
                                ? 'text-gray-800 dark:text-gray-200' 
                                : 'text-gray-400 dark:text-gray-600'
                          }`}>
                            <div className="flex items-center gap-1">
                              <span>{day.date.getDate()}</span>
                              {/* Pinned Holiday Indicator */}
                              {day.events.some(event => event.type === 'holiday') && (
                                <span className="text-red-600 text-xs animate-pulse" title="Holiday Date">📌</span>
                              )}
                            </div>
                            <div className="flex items-center gap-1">
                              {day.isToday && <span className="text-blue-500 text-xs">●</span>}
                              {/* Holiday Counter */}
                              {(() => {
                                const holidayCount = day.events.filter(event => event.type === 'holiday').length;
                                const specialEventCount = day.events.filter(event => 
                                  event.type === 'event' || event.type === 'sports' || event.type === 'cultural'
                                ).length;
                                
                                return (
                                  <div className="flex items-center gap-1">
                                    {holidayCount > 0 && (
                                      <span className="bg-red-600 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center font-bold shadow-lg border-2 border-red-200" title={`📌 ${holidayCount} Pinned Holiday${holidayCount > 1 ? 's' : ''}`}>
                                        {holidayCount}
                                      </span>
                                    )}
                                    {specialEventCount > 0 && (
                                      <span className="bg-blue-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center font-bold" title={`${specialEventCount} Special Event${specialEventCount > 1 ? 's' : ''}`}>
                                        {specialEventCount}
                                      </span>
                                    )}
                                  </div>
                                );
                              })()}
                            </div>
                          </div>
                          
                                              <div className="space-y-1">
                            {/* Pinned Holidays - Always Show First */}
                            {day.events
                              .filter(event => event.type === 'holiday')
                              .map((event) => (
                                <div
                                  key={event.id}
                                  className={`text-xs px-1 py-0.5 rounded ${getEventTypeStyle(event.type)} flex items-center gap-1 truncate relative`}
                                  title={`📌 PINNED HOLIDAY: ${event.title}${event.time ? ` at ${event.time}` : ''}`}
                                >
                                  <span className="text-red-600 text-xs">📌</span>
                                  <span className="text-xs">{event.emoji}</span>
                                  <span className="truncate text-xs font-bold">
                                    {event.title.length > 6 ? `${event.title.substring(0, 6)}...` : event.title}
                                  </span>
                                  <div className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full border border-white dark:border-gray-800"></div>
                                </div>
                              ))}
                            
                            {/* Other Events */}
                            {day.events
                              .filter(event => event.type !== 'holiday')
                              .slice(0, day.events.filter(event => event.type === 'holiday').length > 0 ? 1 : 2)
                              .map((event) => (
                                <div
                                  key={event.id}
                                  className={`text-xs px-1 py-0.5 rounded ${getEventTypeStyle(event.type)} flex items-center gap-1 truncate`}
                                  title={`${event.title}${event.time ? ` at ${event.time}` : ''}`}
                                >
                                  <span className="text-xs">{event.emoji}</span>
                                  <span className="truncate text-xs">
                                    {event.title.length > 8 ? `${event.title.substring(0, 8)}...` : event.title}
                                  </span>
                                </div>
                              ))}
                            
                            {/* More Events Counter */}
                            {(() => {
                              const holidayCount = day.events.filter(event => event.type === 'holiday').length;
                              const otherEventsCount = day.events.filter(event => event.type !== 'holiday').length;
                              const shownOtherEvents = holidayCount > 0 ? 1 : 2;
                              const remainingEvents = otherEventsCount - shownOtherEvents;
                              
                              return remainingEvents > 0 && (
                                <div className="text-xs text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-700 rounded px-1 py-0.5">
                                  +{remainingEvents} more
                                </div>
                              );
                            })()}
                            
                            {/* Event Summary Counts */}
                            {day.events.length > 0 && (
                              <div className="flex flex-wrap gap-1 mt-1">
                                {(() => {
                                  const examCount = day.events.filter(event => event.type === 'exam').length;
                                  const breakCount = day.events.filter(event => event.type === 'break').length;
                                  
                                  return (
                                    <>
                                      {examCount > 0 && (
                                        <span className="bg-yellow-500 text-white text-xs rounded-full px-1 py-0.5 font-bold flex items-center gap-1" title={`${examCount} Exam${examCount > 1 ? 's' : ''}`}>
                                          📝{examCount}
                                        </span>
                                      )}
                                      {breakCount > 0 && (
                                        <span className="bg-purple-500 text-white text-xs rounded-full px-1 py-0.5 font-bold flex items-center gap-1" title={`${breakCount} Break${breakCount > 1 ? 's' : ''}`}>
                                          🌴{breakCount}
                                        </span>
                                      )}
                                    </>
                                  );
                                })()}
                              </div>
                            )}
                          </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="yearly"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5 }}
                    className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-4 md:p-6 transition-colors duration-300"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {Array.from({ length: 12 }, (_, monthIndex) => {
                  const monthDays = generateCalendarDays(viewDate.getFullYear(), monthIndex);
                  return (
                    <motion.div 
                      key={monthIndex}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: monthIndex * 0.05 }}
                            className="border-2 border-gray-200 dark:border-gray-700 rounded-xl p-4 hover:shadow-lg hover:border-green-300 dark:hover:border-green-600 transition-all duration-300 cursor-pointer"
                      onClick={() => {
                        setViewDate(new Date(viewDate.getFullYear(), monthIndex));
                        setViewMode('monthly');
                      }}
                    >
                            <h3 className="font-bold text-center mb-3 text-gray-700 dark:text-gray-300 text-lg">
                        {monthNames[monthIndex]}
                      </h3>
                      <div className="grid grid-cols-7 gap-1 text-xs mb-3">
                        {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((day, dayIndex) => (
                                <div key={`${monthIndex}-header-${dayIndex}`} className="text-center font-bold text-gray-600 dark:text-gray-400 p-1">
                            {day}
                          </div>
                        ))}
                        {monthDays.map((day, dayIndex) => (
                          <div
                            key={dayIndex}
                            className={`text-center p-1 text-xs rounded transition-colors ${
                              day.isCurrentMonth
                                ? day.isToday
                                        ? 'bg-blue-200 dark:bg-blue-800 text-blue-800 dark:text-blue-200 font-bold'
                                  : day.isHoliday
                                        ? 'bg-red-100 dark:bg-red-900/50 text-red-600 dark:text-red-400'
                                  : day.events.length > 0
                                        ? 'bg-green-100 dark:bg-green-900/50 text-green-600 dark:text-green-400'
                                  : day.isWeekend
                                        ? 'text-gray-400 dark:text-gray-600'
                                        : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                                      : 'text-gray-300 dark:text-gray-700'
                            }`}
                          >
                            {day.date.getDate()}
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
            </div>

            {/* Upcoming Events Sidebar */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="xl:col-span-1"
            >
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-4 md:p-6 sticky top-4 transition-colors duration-300">
                <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-4 flex items-center gap-2">
                  🗓️ Upcoming Events
                </h3>
                
                <div className="space-y-3 max-h-96 overflow-y-auto">
                  {upcomingEvents.length > 0 ? (
                    upcomingEvents.map(({ date, event }, index) => (
                      <motion.div
                        key={`${event.id}-${index}`}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                        className="p-3 rounded-lg border border-gray-200 dark:border-gray-700 hover:shadow-md transition-shadow cursor-pointer"
                        onClick={() => setSelectedEvent(event)}
                      >
                        <div className="flex items-start gap-3">
                          <div className="text-2xl">{event.emoji}</div>
                          <div className="flex-1 min-w-0">
                            <h4 className="font-medium text-gray-800 dark:text-gray-200 text-sm mb-1">
                              {event.title}
                            </h4>
                            <p className="text-xs text-gray-600 dark:text-gray-400 mb-2">
                              {date.toLocaleDateString('en-US', { 
                                month: 'short', 
                                day: 'numeric',
                                weekday: 'short'
                              })}
                              {event.time && ` at ${event.time}`}
                            </p>
                            <span className={`inline-block ${getEventTypeStyle(event.type)}`}>
                              {event.type.charAt(0).toUpperCase() + event.type.slice(1)}
                            </span>
                          </div>
                        </div>
                      </motion.div>
                    ))
                  ) : (
                    <div className="text-center py-8 text-gray-500 dark:text-gray-400">
                      <div className="text-4xl mb-2">📅</div>
                      <p className="text-sm">No upcoming events in the next 7 days</p>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          </div>

        {/* Tooltip */}
        <AnimatePresence>
          {showTooltip.show && showTooltip.event && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
                className="fixed z-50 bg-gray-800 dark:bg-gray-900 text-white px-4 py-3 rounded-lg shadow-2xl pointer-events-none max-w-xs"
              style={{
                left: Math.min(showTooltip.x - 100, window.innerWidth - 250),
                top: showTooltip.y - 60,
              }}
            >
              <div className="flex items-center gap-2 mb-1">
                  <span>{showTooltip.event.emoji}</span>
                <div className="font-semibold">{showTooltip.event.title}</div>
              </div>
                {showTooltip.event.time && (
                  <div className="text-sm text-gray-300 mb-1">🕐 {showTooltip.event.time}</div>
                )}
              {showTooltip.event.description && (
                <div className="text-sm text-gray-300">{showTooltip.event.description}</div>
              )}
              <div className="absolute bottom-0 left-1/2 transform translate-y-1 -translate-x-1/2">
                  <div className="w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-gray-800 dark:border-t-gray-900"></div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

                  {/* Event Modal */}
          <AnimatePresence>
            {selectedEvent && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
                onClick={() => setSelectedEvent(null)}
              >
                <motion.div
                  initial={{ scale: 0.7, opacity: 0, y: 50 }}
                  animate={{ scale: 1, opacity: 1, y: 0 }}
                  exit={{ scale: 0.7, opacity: 0, y: 50 }}
                  className="bg-white dark:bg-gray-800 rounded-2xl p-6 max-w-md w-full shadow-2xl transition-colors duration-300"
                  onClick={(e) => e.stopPropagation()}
                >
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex items-center gap-3">
                      <span className="text-3xl">{selectedEvent.emoji}</span>
                      <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200">{selectedEvent.title}</h3>
                    </div>
                    <button
                      onClick={() => setSelectedEvent(null)}
                      className="text-gray-400 dark:text-gray-600 hover:text-gray-600 dark:hover:text-gray-400 text-2xl w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                    >
                      ×
                    </button>
                  </div>

                  <div className={`inline-flex items-center gap-2 px-3 py-2 rounded-full text-sm font-medium mb-4 ${getEventTypeStyle(selectedEvent.type)}`}>
                    <span>{selectedEvent.emoji}</span>
                    {selectedEvent.type.charAt(0).toUpperCase() + selectedEvent.type.slice(1)}
                  </div>

                  {selectedEvent.time && (
                    <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400 mb-3">
                      <span>🕐</span>
                      <span>{selectedEvent.time}</span>
                    </div>
                  )}

                  {selectedEvent.description && (
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">{selectedEvent.description}</p>
                  )}

                  <div className="flex justify-end">
                    <button
                      onClick={() => setSelectedEvent(null)}
                      className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                    >
                      Close
                    </button>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Event Creation/Edit Modal */}
          <AnimatePresence>
            {showEventModal && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
                onClick={closeEventModal}
              >
                <motion.div
                  initial={{ scale: 0.7, opacity: 0, y: 50 }}
                  animate={{ scale: 1, opacity: 1, y: 0 }}
                  exit={{ scale: 0.7, opacity: 0, y: 50 }}
                  className="bg-white dark:bg-gray-800 rounded-2xl p-6 max-w-md w-full shadow-2xl transition-colors duration-300"
                  onClick={(e) => e.stopPropagation()}
                >
                  <EventForm
                    selectedDate={selectedDate}
                    editingEvent={editingEvent}
                    onSave={(eventData) => {
                      const dateKey = (selectedDate || new Date()).toISOString().split('T')[0];
                      if (editingEvent) {
                        editEvent(dateKey, editingEvent.id, eventData);
                      } else {
                        const newEvent = {
                          ...eventData,
                          id: Date.now().toString()
                        };
                        addEvent(dateKey, newEvent);
                      }
                      closeEventModal();
                    }}
                    onCancel={closeEventModal}
                  />
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
      </div>

      <br /><br /><br /><br />
      <Footer />
    </main>
    </div>
  );
} 